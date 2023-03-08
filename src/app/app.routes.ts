import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:2000/remoteEntry.js',
        exposedModule: './OrdersModule',
      }).then((m) => m.OrdersModule),
  },
];
