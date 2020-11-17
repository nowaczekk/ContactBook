import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/store/models/app-state.model';
import { Contact } from 'src/app/shared/store/models/contact.model';
import { getSelectedContact } from 'src/app/shared/store/selectors/selected-contact-selector';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() { 
    this.contact$ = this.store.select(getSelectedContact);
   }

}
