import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormModule } from './modules/contact-form/contact-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
