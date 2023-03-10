import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component'; 

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
