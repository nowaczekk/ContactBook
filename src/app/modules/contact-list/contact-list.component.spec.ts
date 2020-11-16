import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as uuid from 'uuid';
import { provideMockStore } from '@ngrx/store/testing';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  const initialState = { 
    contacts: [{
      id: uuid.v4(),
      firstName: 'testName',
      lastName: 'testSurname',
      phone: '333-333-333',
      email: 'example@temporary.tmp',
      address: 'home address'}],
    selectedContactId: null 
  };
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display first and last name', ()=> {
    let firstName = fixture.nativeElement.querySelector('.list-item div:first-child').innerText;
    let lastName = fixture.nativeElement.querySelector('.list-item div:last-child').innerText;

    expect(firstName).toEqual(initialState.contacts[0].firstName);
    expect(lastName).toEqual(initialState.contacts[0].lastName);
  });
});
