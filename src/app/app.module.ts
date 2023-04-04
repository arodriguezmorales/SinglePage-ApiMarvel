import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './SinglePageComponent/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SinglePageComponent]
})
export class AppModule { }
