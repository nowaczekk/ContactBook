import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormModule } from './modules/contact-form/contact-form.module';
import { ContactListModule } from './modules/contact-list/contact-list.module';
import { StoreModule } from '@ngrx/store';
import { ContactsReducer } from './shared/store/reducers/contacts-list.reducer';
import { FormsModule } from '@angular/forms';
import { SelectedContactTypes } from './shared/store/actions/selected-contact.actions';
import { SelectContactReducer } from './shared/store/reducers/selected-contact.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      contacts: ContactsReducer,
      selectedContactId: SelectContactReducer
    }),
    ContactFormModule,
    ContactListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
