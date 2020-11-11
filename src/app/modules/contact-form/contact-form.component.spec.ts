import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import * as uuid from 'uuid';
import { provideMockStore } from '@ngrx/store/testing';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
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
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ContactFormComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
