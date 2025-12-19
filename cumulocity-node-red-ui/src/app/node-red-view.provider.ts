import { Provider } from '@angular/core';
import { NODE_RED_VIEW_DETAILS, NodeRedViewDetails } from './node-red-view.model';
import { hookNavigator, hookRoute, hookTab } from '@c8y/ngx-components';
import { NodeRedViewNavigatorFactory, NodeRedViewTabFactory } from './node-red-view-nav';

export function provideNodeRedView(viewDetails: NodeRedViewDetails): Provider[] {
    return [
        {
            provide: NODE_RED_VIEW_DETAILS,
            useValue: viewDetails
        },
        hookTab(NodeRedViewTabFactory),
        hookNavigator(NodeRedViewNavigatorFactory),
        hookRoute({
            path: viewDetails.uiPath,
            loadComponent: () =>
                import('./node-red-iframe/node-red-iframe.component').then(
                    (m) => m.NodeRedIframeComponent
                ),
            data: {
                src: viewDetails.iframePath,
            },
        })
    ];
}
