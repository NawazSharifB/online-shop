import { NgModule } from '@angular/core';

import { AppSharedModule } from './../app-shared/app-shared.module';
import { ProductComponent } from './components/app-product/product.component';
import { NgMaterialModule } from '../app-angular-material/app-angular-material.module';
import { AppAddToCartModule } from '../app-add-to-cart/app-add-to-cart.module';

@NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [
        NgMaterialModule,
        AppAddToCartModule,
        AppSharedModule
    ],
    exports: [
        ProductComponent,
    ]
  })
  export class AppProductModule { }
