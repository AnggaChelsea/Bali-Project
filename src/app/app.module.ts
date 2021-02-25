import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Challenge1Component } from './components/challenge1/challenge1.component';
import { Challenge2Component } from './components/challenge2/challenge2.component';
import { HomeComponent } from './components/home/home.component';
import { CartstatusComponent } from './components/challenge1/cartstatus/cartstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    Challenge1Component,
    Challenge2Component,
    HomeComponent,
    CartstatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
