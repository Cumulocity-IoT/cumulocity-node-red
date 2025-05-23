import { NgModule } from "@angular/core";
import {
  CoreModule,
  hookNavigator,
  hookRoute,
  hookTab,
} from "@c8y/ngx-components";
import { NodeRedIframeComponent } from "../node-red-iframe/node-red-iframe.component";
import { NodeRedAdminTabFactory } from "./admin-tab.factory";
import { NodeRedAdminGuard } from "./admin.guard";

@NgModule({
  imports: [CoreModule],
  declarations: [],
  providers: [
    hookRoute({
      path: "node-red/admin",
      component: NodeRedIframeComponent,
      data: {
        src: "/service/node-red/",
      },
      // canActivate: [NodeRedAdminGuard],
      // tabs: [{label: 'test', icon: 'rocket', path: 'node-red/admin'}]
    }),
    hookTab(NodeRedAdminTabFactory),
    hookNavigator(NodeRedAdminGuard)
  ],
})
export class NodeRedAdminModule {}
