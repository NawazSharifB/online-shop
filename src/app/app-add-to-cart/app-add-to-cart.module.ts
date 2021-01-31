import { NgModule } from '@angular/core';

import { NgMaterialModule } from './../app-angular-material/app-angular-material.module';
import { AddToCartComponent } from './components/app-add-to-cart/add-to-cart.component';
import { AppSharedModule } from './../app-shared/app-shared.module';

@NgModule({
    declarations: [
        AddToCartComponent
    ],
    imports: [
        NgMaterialModule,
        AppSharedModule
    ],
    exports: [
        AddToCartComponent
    ]
  })

  export class AppAddToCartModule {

  }

