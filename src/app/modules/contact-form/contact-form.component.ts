import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddContactAction } from 'src/app/shared/store/actions/contact.actions';
import { AppState } from 'src/app/shared/store/models/app-state.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl()
    })
  }

  onSave(): void {
    const model = this.contactForm.value;

    this.store.dispatch( new AddContactAction(model));
  }

}
