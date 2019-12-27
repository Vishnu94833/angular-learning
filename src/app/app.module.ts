import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './modules/header/header.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';
import { InputModule } from './modules/input/input.module';
import { CarouselModule } from './modules/carousel/carousel.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    // HomeModule,
    DropdownModule,
    HeaderModule ,
    InputModule,
    CarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
