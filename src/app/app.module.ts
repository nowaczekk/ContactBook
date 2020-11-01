import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormModule } from './modules/contact-form/contact-form.module';
import { ContactListModule } from './modules/contact-list/contact-list.module';
import { StoreModule } from '@ngrx/store';
import { ContactReducer } from './shared/store/reducers/contact.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      contacts: ContactReducer
    }),
    ContactFormModule,
    ContactListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
