import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from  './admin.guard';

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children: [
      {
        path: '',
        redirectTo :'home',
        pathMatch: 'full'
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module')
                            .then(m => m.OrderModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module')
                            .then(m => m.HomeModule)
      },
      {
        path : 'products',
        loadChildren : () => import('./products/products.module')
                            .then(m => m.ProductsModule)
      },
      {
        path : 'contact',
        canActivate : [AdminGuard],
        loadChildren : () => import('./contact/contact.module')
                            .then(m => m.ContactModule)
      },
    ]
  },
  {
    path :'admin',
    loadChildren :() => import('./admin/admin.module')
                  .then(m => m.AdminModule)
  },
  {
    // doble asterico se refiere a page not found
    path : '**',
    loadChildren: () => import('./page-not-found/pagenotfound.module')
                        .then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ preloadingStrategy:PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
