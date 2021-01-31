import { NgModule } from '@angular/core';

import { AppSharedModule } from './../app-shared/app-shared.module';
import { NgMaterialModule } from '../app-angular-material/app-angular-material.module';
import { SortingComponent } from './components/app-sorting/sorting.component';

@NgModule({
    declarations: [
        SortingComponent
    ],
    imports: [
        NgMaterialModule,
        AppSharedModule
    ],
    exports: [
        SortingComponent
    ]
  })
  export class AppSortingModule { }
