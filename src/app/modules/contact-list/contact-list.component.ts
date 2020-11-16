import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectContactAction } from 'src/app/shared/store/actions/selected-contact.actions';
import { AppState } from 'src/app/shared/store/models/app-state.model';
import { Contact } from 'src/app/shared/store/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Contact[]>
  selectedContactId = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.contacts$ = this.store.select(store => store.contacts);
  }

  onSelect(id: string){
    this.store.dispatch(new SelectContactAction(id));
    this.selectedContactId = id
  }
}
