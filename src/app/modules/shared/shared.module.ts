import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMaterialModule } from '../ng-material.module';
import { ViewCartComponent } from 'src/app/view-cart/view-cart.component';
import { NavComponent } from 'src/app/nav/nav.component';
import { ShortenTitlePipe } from 'src/app/pipes/shorten-title.pipe';
import { ProductComponent } from 'src/app/product/product.component';
import { AddToCartComponent } from 'src/app/add-to-cart/add-to-cart.component';



@NgModule({
  declarations: [
    AddToCartComponent,
    ProductComponent,
    ShortenTitlePipe,
    NavComponent,
    ViewCartComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    NgMaterialModule,
  ],
  exports: [
    AddToCartComponent,
    ProductComponent,
    ShortenTitlePipe,
    NavComponent,
    ViewCartComponent,
    CommonModule,
    FlexLayoutModule,
    NgMaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
