import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';



@NgModule({
  declarations: [ContactListComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ContactListComponent]
})
export class ContactListModule { }
