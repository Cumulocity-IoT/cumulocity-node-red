import { NgModule } from '@angular/core';
import {
  CoreModule,
  hookNavigator,
  hookRoute,
  hookTab,
} from '@c8y/ngx-components';
import { NodeRedAdminTabFactory } from './admin-tab.factory';
import { NodeRedAdminGuard } from './admin.guard';

export const nodeRedAdminProviders = [
  hookRoute({
    path: 'node-red/admin',
    loadComponent: () =>
      import('../node-red-iframe/node-red-iframe.component').then(
        (m) => m.NodeRedIframeComponent
      ),
    data: {
      src: '/service/node-red/',
    },
    // canActivate: [NodeRedAdminGuard],
    // tabs: [{label: 'test', icon: 'rocket', path: 'node-red/admin'}]
  }),
  hookTab(NodeRedAdminTabFactory),
  hookNavigator(NodeRedAdminGuard),
];

@NgModule({
  imports: [CoreModule],
  declarations: [],
  providers: [...nodeRedAdminProviders],
})
export class NodeRedAdminModule {}
