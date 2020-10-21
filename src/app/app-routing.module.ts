import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

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
        // doble asterico se refiere a page not found
        path : 'products/:id',
        loadChildren: () => import('./product-detail/product-detail.module')
                            .then(m => m.ProductsDetailModule)
      },
      {
        path : 'contact',
        loadChildren : () => import('./contact/contact.module')
                            .then(m => m.ContactModule)
      },
      {
        // doble asterico se refiere a page not found
        path : '**',
        loadChildren: () => import('./page-not-found/pagenotfound.module')
                            .then(m => m.PageNotFoundModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ preloadingStrategy:PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
