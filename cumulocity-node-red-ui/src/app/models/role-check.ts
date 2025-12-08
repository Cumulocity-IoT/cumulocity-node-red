import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import {
  AppStateService,
  NavigatorNode,
  NavigatorNodeFactory,
  Permissions,
  Tab,
  TabFactory,
} from '@c8y/ngx-components';
import { from, Observable, of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { default as config } from '../../../cumulocity.config';
import { FetchClient } from '@c8y/client';

export abstract class NodeRedPermissionCheck implements CanActivate {
  protected abstract requiredRoles: string[];

  constructor(
    protected permissions: Permissions,
    protected appState: AppStateService
  ) {}

  canActivate(): Observable<boolean> {
    return this.appState.currentUser.pipe(
      filter((user) => !!user),
      take(1),
      map(() => this.permissions.hasAnyRole(this.requiredRoles))
    );
  }
}

export abstract class NodeRedNavigatorNodeCheck
  extends NodeRedPermissionCheck
  implements NavigatorNodeFactory
{
  protected requiredEndpoint: string | null = null;
  protected abstract readonly navNode: NavigatorNode;
  private cachedEndpointPromise: Promise<boolean> | null = null;

  constructor(permissions: Permissions, appState: AppStateService, protected fetch: FetchClient) {
    super(permissions, appState);
  }

  get(
    activatedRoute?: ActivatedRoute
  ): NavigatorNode[] | Observable<NavigatorNode | NavigatorNode[]> {
    if (this.appState.state?.app?.contextPath === config.runTime.contextPath) {
      return [];
    }

    const canActivate = this.canActivate().pipe(
      map((hasRole) => (hasRole ? this.navNode : []))
    );

    if (this.requiredEndpoint) {
      return from(this.checkEndpointAvailability()).pipe(switchMap((available) => {
        if (!available) {
          return of([]);
        }
        return canActivate;
      }));
    }

    return canActivate;
  }

  private checkEndpointAvailability(): Promise<boolean> {
    if (!this.requiredEndpoint) {
      return Promise.resolve(true);
    }
    if (this.cachedEndpointPromise) {
      return this.cachedEndpointPromise;
    }
    this.cachedEndpointPromise = this.fetch
      .fetch(this.requiredEndpoint)
      .then((response) => response.ok)
      .catch(() => false);
    return this.cachedEndpointPromise;
  }
}

export abstract class NodeRedTabsCheck implements TabFactory {
  protected requiredEndpoint: string | null = null;
  protected abstract readonly tab: Tab;

  private cachedEndpointPromise: Promise<boolean> | null = null;

  constructor(
    protected router: Router,
    protected appState: AppStateService,
    protected fetch: FetchClient
  ) {}

  async get(activatedRoute?: ActivatedRoute): Promise<Tab | Tab[]> {
    if (this.appState.state?.app?.contextPath !== config.runTime.contextPath) {
      return [];
    }

    if (this.requiredEndpoint && await this.checkEndpointAvailability() === false) {
        return [];
    }
    return this.tab;
  }

  private checkEndpointAvailability(): Promise<boolean> {
    if (!this.requiredEndpoint) {
      return Promise.resolve(true);
    }
    if (this.cachedEndpointPromise) {
      return this.cachedEndpointPromise;
    }
    this.cachedEndpointPromise = this.fetch
      .fetch(this.requiredEndpoint)
      .then((response) => response.ok)
      .catch(() => false);
    return this.cachedEndpointPromise;
  }
}
