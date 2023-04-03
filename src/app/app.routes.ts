import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { isDevMode } from '@angular/core';
import { HomeComponent } from './home/home.component';

const isOnGithub = !isDevMode();

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'full-app',
    children: [
      {
        path: '',
        outlet: 'products',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: isOnGithub
              ? 'https://houdass.github.io/products/remoteEntry.js'
              : 'http://localhost:4000/remoteEntry.js',
            exposedModule: './ProductsModule',
          }).then((m) => m.ProductsModule),
      },
      {
        path: '',
        outlet: 'testimonials',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: isOnGithub
              ? 'https://houdass.github.io/testimonials/remoteEntry.js'
              : 'http://localhost:2000/remoteEntry.js',
            exposedModule: './TestimonialsModule',
          }).then((m) => m.TestimonialsModule),
      },
      {
        path: '',
        outlet: 'dashboard',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: isOnGithub
              ? 'https://houdass.github.io/dashboard/remoteEntry.js'
              : 'http://localhost:3000/remoteEntry.js',
            exposedModule: './DashboardModule',
          }).then((m) => m.DashboardModule),
      },
    ],
  },
  {
    path: 'testimonials',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: isOnGithub
          ? 'https://houdass.github.io/testimonials/remoteEntry.js'
          : 'http://localhost:2000/remoteEntry.js',
        exposedModule: './TestimonialsModule',
      }).then((m) => m.TestimonialsModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: isOnGithub
          ? 'https://houdass.github.io/dashboard/remoteEntry.js'
          : 'http://localhost:3000/remoteEntry.js',
        exposedModule: './DashboardModule',
      }).then((m) => m.DashboardModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: isOnGithub
          ? 'https://houdass.github.io/products/remoteEntry.js'
          : 'http://localhost:4000/remoteEntry.js',
        exposedModule: './ProductsModule',
      }).then((m) => m.ProductsModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: isOnGithub
          ? 'https://houdass.github.io/cart/remoteEntry.js'
          : 'http://localhost:5000/remoteEntry.js',
        exposedModule: './CartModule',
      }).then((m) => m.CartModule),
  },
  {
    path: 'demo',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: isOnGithub
          ? 'https://houdass.github.io/demo/remoteEntry.js'
          : 'http://localhost:7000/remoteEntry.js',
        exposedModule: './DemoModule',
      }).then((m) => m.DemoModule),
  },
];
