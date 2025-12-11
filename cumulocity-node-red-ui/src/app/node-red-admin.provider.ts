import { provideNodeRedView } from './node-red-view.provider';

export const nodeRedAdminProviders = provideNodeRedView({
  label: 'Node-RED Admin',
  uiPath: 'node-red/admin',
  icon: 'cog',
  iframePath: '/service/node-red/',
  requiredRoles: ['ROLE_NODE_RED_ADMIN'],
});
