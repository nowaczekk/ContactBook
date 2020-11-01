import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormModule } from './modules/contact-form/contact-form.module';
import { ContactListModule } from './modules/contact-list/contact-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactFormModule,
    ContactListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
