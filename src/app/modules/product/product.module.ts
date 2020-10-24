import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './../../product-details/product-details.component';
import { AllProductsComponent } from './../../all-products/all-products.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', children: [
        {path: 'all-products', component: AllProductsComponent},
        {path: 'product-details/:id', component: ProductDetailsComponent},
      ]}
    ])
  ],
  exports: [
    AllProductsComponent,
    ProductDetailsComponent,
  ]
})
export class ProductModule { }
