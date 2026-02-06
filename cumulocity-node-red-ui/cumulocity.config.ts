import { ConfigurationOptions } from '@c8y/devkit';
import * as config from '../package.json';

const { author, description, version, license } = config;

export const contextPath = 'sag-ps-iot-pkg-node-red-ui';

export default () => {
  const isBuild = process.env['npm_lifecycle_event'] === 'build';
  return {
    runTime: {
      author,
      description,
      version,
      license,
      name: 'Node-RED',
      contextPath,
      key: `${contextPath}-application-key`,
      tabsHorizontal: true,
      dynamicOptionsUrl: true,
      isPackage: true,
      package: 'blueprint',
      blueprintDeploymentOptions: {
        name: 'NodeRED',
        contextPath: 'node-red-ui',
        key: 'node-red-ui-app-key',
      },
      exports: [
        {
          name: 'Node-RED Admin Plugin',
          module: 'nodeRedAdminProviders',
          path: './src/app/node-red-admin.provider.ts',
          description: 'Adds an UI for administrating Node-RED.',
        },
        {
          name: 'Node-RED Dashboard Plugin',
          module: 'nodeRedDashboardOldProviders',
          path: './src/app/node-red-dashboard-old.provider.ts',
          description:
            "Adds an UI for viewing Dashboards of Node-RED. (Requires 'node-red-dashboard' to be installed from Node-RED Palette Manager)",
        },
        {
          name: 'Node-RED Dashboard V2 Plugin',
          module: 'nodeRedDashboardNewProviders',
          path: './src/app/node-red-dashboard-new.provider.ts',
          description:
            "Adds an UI for viewing Dashboards of Node-RED. (Requires '@flowfuse/node-red-dashboard' to be installed from Node-RED Palette Manager).",
        },
      ],
      icon: {
        url: `url(/apps/${contextPath}/assets/node-red-icon.svg)`,
      },
      remotes: {
        [isBuild ? `${contextPath}@${version}` : contextPath]: [
          'nodeRedAdminProviders',
          'nodeRedDashboardOldProviders',
          'nodeRedDashboardNewProviders',
        ],
      },
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
        '@ngx-formly/core',
      ],
      copy: [
        { from: '../images', to: 'images' },
        { from: '../README.md', to: 'README.md' },
        { from: '../LICENSE', to: 'LICENSE.txt' },
        { from: '../CHANGELOG.md', to: 'CHANGELOG.md' },
      ],
    },
  } satisfies ConfigurationOptions;
};
