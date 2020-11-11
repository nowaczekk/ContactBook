import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ContactDetailsModule } from './modules/contact-details/contact-details.module';
import { ContactFormModule } from './modules/contact-form/contact-form.module';
import { ContactListModule } from './modules/contact-list/contact-list.module';
import * as uuid from 'uuid';
import { provideMockStore } from '@ngrx/store/testing';


describe('AppComponent', () => {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule, 
        ContactFormModule,
        ContactDetailsModule,
        ContactListModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
