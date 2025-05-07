import { NgModule } from "@angular/core";
import {
  CoreModule,
  hookNavigator,
  hookRoute,
  hookTab,
} from "@c8y/ngx-components";
import { NodeRedIframeComponent } from "../node-red-iframe/node-red-iframe.component";
import { NodeRedDashboardTabFactory } from "./dashboard-tab.factory";
import { NodeRedDashboardGuard } from "./dashboard.guard";

@NgModule({
  imports: [CoreModule],
  declarations: [],
  providers: [
    hookRoute({
      path: "node-red/dashboard",
      component: NodeRedIframeComponent,
      data: {
        src: "/service/node-red/ui/",
      },
      // canActivate: [NodeRedDashboardGuard],
    }),
    hookTab(NodeRedDashboardTabFactory),
    hookNavigator(NodeRedDashboardGuard)
  ],
})
export class NodeRedDashboardModule {}
