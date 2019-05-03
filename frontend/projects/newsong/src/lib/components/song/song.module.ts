import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LyricComponentModule } from '../lyric/lyric.module';
import { SongComponent } from './song.component';

@NgModule({
  declarations: [
    SongComponent,
  ],
  imports: [
    CommonModule,
    LyricComponentModule,
  ],
  exports: [
    SongComponent,
  ]
})
export class SongComponentModule { }
