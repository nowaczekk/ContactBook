import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  data: Array<ContactModel> = [];

  constructor() { }

  ngOnInit() {
  }

}
