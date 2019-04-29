import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundlesComponent } from './bundles.component';

@NgModule({
  declarations: [
    BundlesComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BundlesComponent,
  ]
})
export class BundlesComponentModule { }
