import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponentModule } from '../contact/contact.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ContactComponentModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterComponentModule { }
