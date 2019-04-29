import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundleComponent } from './bundle.component';

@NgModule({
  declarations: [
    BundleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BundleComponent,
  ]
})
export class BundleComponentModule { }
