import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SongsComponentModule } from '../songs/songs.module';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SongsComponentModule,
  ],
  exports: [
    PlayerComponent,
  ]
})
export class PlayerComponentModule { }
