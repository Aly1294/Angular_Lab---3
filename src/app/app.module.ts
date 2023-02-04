import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question2Component } from './question2/question2.component';
import { StyleDirectiveDirective } from './Directives/style-directive.directive';
import { DefaultImgURLPipe } from './pipes/default-img-url.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    Question2Component,
    StyleDirectiveDirective,
    DefaultImgURLPipe,
    FilterPipe,
    ProductdetailsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
