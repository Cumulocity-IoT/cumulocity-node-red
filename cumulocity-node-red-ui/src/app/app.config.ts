import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CoreModule, RouterModule } from '@c8y/ngx-components';
import { nodeRedAdminProviders } from './node-red-admin.provider';
import { nodeRedDashboardOldProviders } from './node-red-dashboard-old.provider';
import { nodeRedDashboardNewProviders } from './node-red-dashboard-new.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(RouterModule.forRoot()),
    importProvidersFrom(CoreModule.forRoot()),
    ...nodeRedAdminProviders,
    ...nodeRedDashboardOldProviders,
    ...nodeRedDashboardNewProviders
  ]
};