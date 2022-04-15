import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MyotherComponentComponent } from './myother-component/myother-component.component';
import { MapsComponent } from './maps/maps.component';
import { MobileMapsComponent } from './mobile-maps/mobile-maps.component';
@NgModule({
  declarations: [
    AppComponent,
    MyotherComponentComponent,
    MapsComponent,
    MobileMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
