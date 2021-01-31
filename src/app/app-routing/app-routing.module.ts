import { NotFoundComponent } from '../static-components/not-found/not-found.component';
import { ServerErrorComponent } from '../static-components/server-error/server-error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'all-products', loadChildren: () => import('../app-all-products/app-all-products.module').then(m => m.AppAllProductsModule)},
  {path: 'product', loadChildren: () => import('../app-product-details/app-product-details.module').then(m => m.AppProductDetailsModule)},
  {path: 'cart', loadChildren: () => import('../app-cart/app-cart.module').then(m => m.AppCartModule)},
  {path: '', redirectTo: 'all-products', pathMatch: 'full'},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0],
  }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
