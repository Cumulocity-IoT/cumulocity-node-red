import { NgModule } from '@angular/core';
import {
  CoreModule,
  hookNavigator,
  hookRoute,
  hookTab,
} from '@c8y/ngx-components';
import { NodeRedDashboardV2TabFactory } from './dashboard-tab-v2.factory';
import { NodeRedDashboardV2Guard } from './dashboard-v2.guard';

export const nodeRedDashboardV2Providers = [
  hookRoute({
      path: 'node-red/dashboard-v2',
      loadComponent: () =>
        import('../node-red-iframe/node-red-iframe.component').then(
          (m) => m.NodeRedIframeComponent
        ),
      data: {
        src: '/service/node-red/dashboard/',
      },
      // canActivate: [NodeRedDashboardGuard],
    }),
    hookTab(NodeRedDashboardV2TabFactory),
    hookNavigator(NodeRedDashboardV2Guard),
];

@NgModule({
  providers: [
    ...nodeRedDashboardV2Providers
  ]
})
export class NodeRedDashboardModuleV2 {}
