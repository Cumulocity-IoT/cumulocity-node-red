import { ConfigurationOptions } from '@c8y/devkit';
import * as config from '../package.json';

const { author, description, version, license } = config;

export default {
  runTime: {
    author,
    description,
    version,
    license,
    name: "Node-RED",
    contextPath: "sag-ps-iot-pkg-node-red-ui",
    key: "sag-ps-iot-pkg-node-red-ui-application-key",
    tabsHorizontal: true,
    dynamicOptionsUrl: true,
    isPackage: true,
    package: "blueprint",
    exports: [
      {
        name: "Node-RED Admin Plugin",
        module: "NodeRedAdminModule",
        path: "./src/app/node-red-admin/node-red-admin.module.ts",
        description: "Adds an UI for administrating Node-RED."
      },
      {
        name: "Node-RED Dashboard Plugin",
        module: "NodeRedDashboardModule",
        path: "./src/app/node-red-dashboard/node-red-dashboard.module.ts",
        description: "Adds an UI for viewing Dashboards of Node-RED."
      },
      {
        name: "Node-RED Dashboard V2 Plugin",
        module: "NodeRedDashboardModuleV2",
        path: "./src/app/node-red-dashboard-v2/node-red-dashboard-v2.module.ts",
        description: "Adds an UI for viewing Dashboards of Node-RED. (Requires '@flowfuse/node-red-dashboard' to be installed from Node-RED Palette Manager)."
      }
    ],
    icon: {
      url: "url(/apps/sag-ps-iot-pkg-node-red-ui/assets/node-red-icon.svg)"
    }
  },
  buildTime: {
    federation: [
      '@angular/animations',
      '@angular/cdk',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      // '@angular/upgrade',
      '@c8y/client',
      '@c8y/ngx-components',
      'ngx-bootstrap',
      '@ngx-translate/core',
      '@ngx-formly/core'
    ],
    copy: [
      { from: "../images", to: "images" },
      { from: "../README.md", to: "README.md" },
      { from: "../LICENSE", to: "LICENSE.txt" },
      { from: "../CHANGELOG.md", to: "CHANGELOG.md" }
    ]
  }
} satisfies ConfigurationOptions;
