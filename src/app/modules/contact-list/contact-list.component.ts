import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactModel } from 'src/app/shared/models/contact.model';
import { SelectContactAction } from 'src/app/shared/store/actions/selected-contact.actions';
import { AppState, getItemById } from 'src/app/shared/store/models/app-state.model';
import { Contact } from 'src/app/shared/store/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.contacts$ = this.store.select(store => store.contacts);
  }


  onSelect(id: string ){
    this.store.dispatch(new SelectContactAction(id))
  }
}
