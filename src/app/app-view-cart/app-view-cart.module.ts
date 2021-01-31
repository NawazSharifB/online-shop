import { NgModule } from '@angular/core';

import { AppSharedModule } from './../app-shared/app-shared.module';
import { NgMaterialModule } from './../app-angular-material/app-angular-material.module';
import { ViewCartComponent } from './components/app-view-cart/view-cart.component';

@NgModule({
    declarations: [
        ViewCartComponent
    ],
    imports: [
        NgMaterialModule,
        AppSharedModule,
    ],
    exports: [
        ViewCartComponent
    ]
  })
  export class AppViewCartModule { }
