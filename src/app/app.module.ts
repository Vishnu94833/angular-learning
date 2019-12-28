import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './modules/header/header.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';
import { InputModule } from './modules/input/input.module';
import { CarouselModule } from './modules/carousel/carousel.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
