import { NgModule } from '@angular/core';
import {
  CoreModule,
  hookNavigator,
  hookRoute,
  hookTab,
} from '@c8y/ngx-components';
import { NodeRedDashboardTabFactory } from './dashboard-tab.factory';
import { NodeRedDashboardGuard } from './dashboard.guard';

export const nodeRedDashboardProviders = [
  hookRoute({
      path: 'node-red/dashboard',
      loadComponent: () =>
        import('../node-red-iframe/node-red-iframe.component').then(
          (m) => m.NodeRedIframeComponent
        ),
      data: {
        src: '/service/node-red/ui/',
      },
      // canActivate: [NodeRedDashboardGuard],
    }),
    hookTab(NodeRedDashboardTabFactory),
    hookNavigator(NodeRedDashboardGuard),
];

@NgModule({
  providers: [
    ...nodeRedDashboardProviders
  ]
})
export class NodeRedDashboardModule {}
