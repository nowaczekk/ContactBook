import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup

  constructor() { }

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
    // ToDo: ready to save on state/db
  }

}
