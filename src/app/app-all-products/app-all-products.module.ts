import { NgModule } from '@angular/core';

import { AppSortingModule } from './../app-sorting/app-sorting.module';
import { AppProductModule } from './../app-product/app-product.module';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from './../app-shared/app-shared.module';
import { NgMaterialModule } from '../app-angular-material/app-angular-material.module';
import { AllProductsComponent } from './components/app-all-products/all-products.component';
import { AppViewCartModule } from '../app-view-cart/app-view-cart.module';

@NgModule({
    declarations: [
        AllProductsComponent
    ],
    imports: [
        NgMaterialModule,
        AppSharedModule,
        AppProductModule,
        AppSortingModule,
        AppViewCartModule,
        RouterModule.forChild([
            {path: '', component: AllProductsComponent}
        ])

    ],
    exports: [
        // AllProductsComponent
    ]
  })
  export class AppAllProductsModule { }
