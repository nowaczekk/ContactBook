import { Component, OnInit } from '@angular/core';
import { On, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './shared/store/models/app-state.model';
import { Contact } from './shared/store/models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  contacts$: Observable<Array<Contact>>

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.contacts$ = this.store.select(store => store.contacts)
  }
}
