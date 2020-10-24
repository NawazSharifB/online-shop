import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'product', loadChildren: () => import('../app/modules/product/product.module').then(m => m.ProductModule)},
  {path: 'cart', loadChildren: () => import('../app/modules/cart/cart.module').then(m => m.CartModule)},
  {path: '', redirectTo: 'product/all-products', pathMatch: 'full'},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
