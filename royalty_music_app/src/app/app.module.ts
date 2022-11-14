import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./mainPage/home.component";
import {LibraryComponent} from "./lib/library.component";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent, HomeComponent, LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [HomeComponent, LibraryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
