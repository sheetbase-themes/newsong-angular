import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LyricComponent } from './lyric.component';

@NgModule({
  declarations: [
    LyricComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LyricComponent,
  ]
})
export class LyricComponentModule { }
