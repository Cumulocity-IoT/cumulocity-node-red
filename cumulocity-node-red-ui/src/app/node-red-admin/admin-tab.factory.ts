import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService, Tab } from '@c8y/ngx-components';
import { NodeRedTabsCheck } from '../models/role-check';
import { FetchClient } from '@c8y/client';

@Injectable({ providedIn: 'root' })
export class NodeRedAdminTabFactory extends NodeRedTabsCheck {
  protected tab: Tab = {
    label: 'Admin',
    path: 'node-red/admin',
    icon: 'cog'
  };

  constructor(router: Router, appState: AppStateService, fetch: FetchClient) {
    super(router, appState, fetch);
  }
}
