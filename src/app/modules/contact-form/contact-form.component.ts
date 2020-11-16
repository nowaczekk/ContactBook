import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddContactAction } from 'src/app/shared/store/actions/contact.actions';
import { AppState } from 'src/app/shared/store/models/app-state.model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  onSubmit(): void {
    const model = this.contactForm.value;
    model.id = this.generateId();

    this.store.dispatch(new AddContactAction(model));
    this.contactForm.reset();
  }

  generateId(): string{
      return uuid.v4();
  }

}
