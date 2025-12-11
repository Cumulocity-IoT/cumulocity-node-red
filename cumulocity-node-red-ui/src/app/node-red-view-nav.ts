import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AppStateService,
  NavigatorNode,
  NavigatorNodeFactory,
  Permissions,
  Tab,
  TabFactory,
} from '@c8y/ngx-components';
import { filter, firstValueFrom, map, Observable, take } from 'rxjs';
import { NODE_RED_VIEW_DETAILS } from './node-red-view.model';
import { FetchClient } from '@c8y/client';
import { default as config } from '../../cumulocity.config';

@Injectable({ providedIn: 'root' })
export class NodeRedEndpointAvailabilityService {
  fetch = inject(FetchClient);
  private cachedEndpointPromise = new Map<string, Promise<boolean>>();

  checkEndpointAvailability(endpoint: string): Promise<boolean> {
    if (!endpoint) {
      return Promise.resolve(true);
    }
    let cachedEndpointPromise = this.cachedEndpointPromise.get(endpoint);
    if (cachedEndpointPromise) {
      return cachedEndpointPromise;
    }
    cachedEndpointPromise = this.fetch
      .fetch(endpoint)
      .then((response) => response.ok)
      .catch(() => false);
    this.cachedEndpointPromise.set(endpoint, cachedEndpointPromise);
    return cachedEndpointPromise;
  }
}

@Injectable()
export class NodeRedViewTabFactory implements TabFactory {
  private viewDetails = inject(NODE_RED_VIEW_DETAILS);
  private tab: Tab = {
    label: this.viewDetails.label,
    icon: this.viewDetails.icon,
    path: this.viewDetails.uiPath,
  };
  private appState = inject(AppStateService);
  private endpointAvailabilityService = inject(
    NodeRedEndpointAvailabilityService
  );
  private permissions = inject(Permissions);

  async get(activatedRoute?: ActivatedRoute): Promise<Tab | Tab[]> {
    console.log('contextPath', this.appState.state?.app?.contextPath, 'configContextPath', config.runTime.contextPath);
    if (this.appState.state?.app?.contextPath !== config.runTime.contextPath) {
      return [];
    }

    if (
      this.viewDetails.requiredEndpoint &&
      (await this.endpointAvailabilityService.checkEndpointAvailability(
        this.viewDetails.requiredEndpoint
      )) === false
    ) {
        console.log('Endpoint not available:', this.viewDetails.requiredEndpoint);
      return [];
    }

    if (!this.permissions.hasAnyRole(this.viewDetails.requiredRoles || [])) {
        return [];
    }

    console.log('Providing tab:', this.tab);
    return this.tab;
  }
}

@Injectable()
export class NodeRedViewNavigatorFactory implements NavigatorNodeFactory {
  viewDetails = inject(NODE_RED_VIEW_DETAILS);
  private navigatorNode = new NavigatorNode({
    label: this.viewDetails.label,
    icon: this.viewDetails.icon,
    path: this.viewDetails.uiPath,
    preventDuplicates: true,
  });
  private appState = inject(AppStateService);
  private endpointAvailabilityService = inject(
    NodeRedEndpointAvailabilityService
  );
  private permissions = inject(Permissions);

  constructor() {
    console.log('Created NodeRedViewNavigatorFactory for', this.viewDetails.label);
  }

  async get(
    activatedRoute?: ActivatedRoute
  ): Promise<NavigatorNode | NavigatorNode[]> {
    // if (this.appState.state?.app?.contextPath === config.runTime.contextPath) {
    //   return [];
    // }

    if (
      this.viewDetails.requiredEndpoint &&
      (await this.endpointAvailabilityService.checkEndpointAvailability(
        this.viewDetails.requiredEndpoint
      )) === false
    ) {
      return [];
    }

    if (!this.permissions.hasAnyRole(this.viewDetails.requiredRoles || [])) {
        return [];
    }

    console.log('Providing navigator node:', this.navigatorNode);

    return this.navigatorNode;
  }
}
