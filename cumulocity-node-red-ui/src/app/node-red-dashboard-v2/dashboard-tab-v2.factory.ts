import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService, Tab } from '@c8y/ngx-components';
import { NodeRedTabsCheck } from '../models/role-check';
import { FetchClient } from '@c8y/client';

@Injectable({ providedIn: 'root' })
export class NodeRedDashboardV2TabFactory extends NodeRedTabsCheck {
  protected override requiredEndpoint = '/service/node-red/dashboard/index.html';

  protected tab: Tab = {
    label: 'Dashboard-v2',
    path: 'node-red/dashboard-v2',
    icon: 'dashboard'
  };

  constructor(router: Router, appState: AppStateService, fetch: FetchClient) {
    super(router, appState, fetch);
  }
}
