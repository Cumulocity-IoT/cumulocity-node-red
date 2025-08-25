import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CoreModule, RouterModule } from '@c8y/ngx-components';
import { nodeRedAdminProviders } from './node-red-admin/node-red-admin.module';
import { nodeRedDashboardProviders } from './node-red-dashboard/node-red-dashboard.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(RouterModule.forRoot()),
    importProvidersFrom(CoreModule.forRoot()),
    ...nodeRedAdminProviders,
    ...nodeRedDashboardProviders
  ]
};