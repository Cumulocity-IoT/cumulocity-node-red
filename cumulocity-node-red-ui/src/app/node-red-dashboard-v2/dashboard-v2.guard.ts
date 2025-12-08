import { Injectable } from '@angular/core';
import {
  AppStateService,
  gettext,
  NavigatorNode,
  Permissions,
} from '@c8y/ngx-components';
import { NodeRedNavigatorNodeCheck } from '../models/role-check';
import { FetchClient } from '@c8y/client';

@Injectable({ providedIn: 'root' })
export class NodeRedDashboardV2Guard extends NodeRedNavigatorNodeCheck {
  protected override requiredEndpoint =
    '/service/node-red/dashboard/index.html';
  protected requiredRoles: string[] = [
    'ROLE_NODE_RED_READ',
    'ROLE_NODE_RED_ADMIN',
  ];
  protected readonly navNode: NavigatorNode = new NavigatorNode({
    path: `/node-red/dashboard-v2`,
    label: gettext('Node-RED Dashboard-v2'),
    icon: 'dashboard',
    preventDuplicates: true,
  });

  constructor(
    permissions: Permissions,
    appState: AppStateService,
    fetch: FetchClient
  ) {
    super(permissions, appState, fetch);
  }
}
