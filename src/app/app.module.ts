import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './UI/shared/shared/shared.module';
import { GifsModule } from './UI/gifs/gifs/gifs.module';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    GifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
