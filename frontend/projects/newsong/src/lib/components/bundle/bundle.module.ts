import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsComponentModule } from '../songs/songs.module';
import { BundleComponent } from './bundle.component';

@NgModule({
  declarations: [
    BundleComponent,
  ],
  imports: [
    CommonModule,
    SongsComponentModule,
  ],
  exports: [
    BundleComponent,
  ]
})
export class BundleComponentModule { }
