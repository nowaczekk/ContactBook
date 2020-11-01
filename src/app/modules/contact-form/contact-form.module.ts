import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  exports: [ContactFormComponent]
})
export class ContactFormModule { }
