import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Viz1Component } from './viz1/viz1.component';
import { Viz2Component } from './viz2/viz2.component';
import { Data1Component } from './data1/data1.component';

@NgModule({
  declarations: [
    AppComponent,
    Viz1Component,
    Viz2Component,
    Data1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
