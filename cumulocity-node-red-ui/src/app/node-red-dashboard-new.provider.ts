import { provideNodeRedView } from './node-red-view.provider';

export const nodeRedDashboardNewProviders = provideNodeRedView({
  label: 'Node-RED Dashboard-v2',
  uiPath: 'node-red/dashboard-v2',
  icon: 'dashboard',
  iframePath: '/service/node-red/dashboard/',
  requiredEndpoint: '/service/node-red/dashboard/index.html',
  requiredRoles: ['ROLE_NODE_RED_READ', 'ROLE_NODE_RED_ADMIN'],
});
