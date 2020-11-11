import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as uuid from 'uuid';
import { provideMockStore } from '@ngrx/store/testing';

import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
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
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ],
      imports: [CommonModule],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
