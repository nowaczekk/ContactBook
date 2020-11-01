import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from 'src/app/shared/models/contact.model';
import { Contact } from 'src/app/shared/store/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts$: Observable<Array<Contact>>;

  constructor() { }

  ngOnInit() {
  }

}
