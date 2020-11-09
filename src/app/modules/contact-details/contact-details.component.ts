import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { AppState, getItemById } from 'src/app/shared/store/models/app-state.model';
import { Contact } from 'src/app/shared/store/models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact$: Observable<Contact>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {  }

}
