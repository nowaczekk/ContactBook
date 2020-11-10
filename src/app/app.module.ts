import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormModule } from './modules/contact-form/contact-form.module';
import { ContactListModule } from './modules/contact-list/contact-list.module';
import { StoreModule } from '@ngrx/store';
import { ContactsListReducer } from './shared/store/reducers/contacts-list.reducer';
import { FormsModule } from '@angular/forms';
import { SelectContactReducer } from './shared/store/reducers/selected-contact.reducer';
import { ContactDetailsModule } from './modules/contact-details/contact-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      contacts: ContactsListReducer,
      selectedContactId: SelectContactReducer
    }),
    ContactFormModule,
    ContactDetailsModule,
    ContactListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
