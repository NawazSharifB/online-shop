import { RouterModule } from '@angular/router';
import { AppSharedModule } from './../app-shared/app-shared.module';
import { NgModule } from '@angular/core';

import { CheckoutComponent } from './components/app-checkout/checkout.component';
import { NgMaterialModule } from '../app-angular-material/app-angular-material.module';

@NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [
        NgMaterialModule,
        AppSharedModule,
        // RouterModule.forChild([
        //     {path: '', component: CheckoutComponent}
        // ])
    ],
    exports: [
        CheckoutComponent
    ]
  })
  export class AppCheckoutModule { }
