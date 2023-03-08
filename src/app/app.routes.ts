import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        // remoteEntry: 'http://localhost:2000/remoteEntry.js',
        remoteEntry: 'https://houdass.github.io/orders/remoteEntry.js',
        exposedModule: './OrdersModule',
      }).then((m) => m.OrdersModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        // remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteEntry: 'https://houdass.github.io/dashboard/remoteEntry.js',
        exposedModule: './DashboardModule',
      }).then((m) => m.DashboardModule),
  },
];
