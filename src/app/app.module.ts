import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NotFoundComponent } from './static-components/not-found/not-found.component';
import { ServerErrorComponent } from './static-components/server-error/server-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './static-components/nav/nav.component';
import { NgMaterialModule } from './app-angular-material/app-angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    ServerErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgMaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
