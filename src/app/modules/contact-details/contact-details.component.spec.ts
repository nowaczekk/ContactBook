import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  const initialState = { 
    contacts: [{
      id: '00000000-0000-0000-0000-000000000000',
      firstName: 'testName',
      lastName: 'testSurname',
      phone: '333-333-333',
      email: 'example@temporary.tmp',
      address: 'home address'}],
    selectedContactId: '00000000-0000-0000-0000-000000000000' 
  };
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ],
      imports: [
        CommonModule
      ],
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

  it('should display firstName', () => {
    let firstName = fixture.nativeElement.querySelector('.details-container div label span').innerText;
    
    expect(firstName).toEqual(`First Name: ${initialState.contacts[0].firstName}`);
  });
});
