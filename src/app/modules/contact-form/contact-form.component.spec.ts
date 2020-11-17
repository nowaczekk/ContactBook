import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockStore } from '@ngrx/store/testing';
import { ContactFormComponent } from './contact-form.component';
import { Store, StoreModule } from '@ngrx/store';
import { AddContactAction } from 'src/app/shared/store/actions/contact.actions';
import { Contact } from 'src/app/shared/store/models/contact.model';

describe('ContactFormComponent', () => {
  let store: MockStore<any>;
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [ ContactFormComponent ],
      providers: [ Store ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch');
    spyOn(component, 'generateId').and.returnValue('00000000-0000-0000-0000-000000000000');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add contact to store', () => {
    const model = {
      firstName: 'test name',
      lastName: 'test surname',
      phone: '111-111-111',
      email: 'example@ex.eu',
      address: 'some city',
      id: '00000000-0000-0000-0000-000000000000'
    } as Contact
    const buttonElement = fixture.nativeElement.querySelector('button');

    component.contactForm.controls['firstName'].setValue(model.firstName);
    component.contactForm.controls['lastName'].setValue(model.lastName);
    component.contactForm.controls['phone'].setValue(model.phone);
    component.contactForm.controls['email'].setValue(model.email);
    component.contactForm.controls['address'].setValue(model.address);

    buttonElement.click();

    expect(component).toBeTruthy();
    expect(store.dispatch).toHaveBeenCalledWith(new AddContactAction(model))
  });
});