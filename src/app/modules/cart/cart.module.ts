import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './../../checkout/checkout.component';
import { CartComponent } from './../../cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', children: [
        {path: '', component: CartComponent},
        {path: 'checkout', component: CheckoutComponent},
      ]},
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CartModule { }
