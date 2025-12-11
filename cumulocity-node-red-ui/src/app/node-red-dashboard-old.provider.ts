import { provideNodeRedView } from './node-red-view.provider';

export const nodeRedDashboardOldProviders = provideNodeRedView({
  label: 'Node-RED Dashboard',
  uiPath: 'node-red/dashboard',
  icon: 'dashboard',
  iframePath: '/service/node-red/ui/',
  requiredEndpoint: '/service/node-red/ui/index.html',
  requiredRoles: ['ROLE_NODE_RED_READ', 'ROLE_NODE_RED_ADMIN'],
});
