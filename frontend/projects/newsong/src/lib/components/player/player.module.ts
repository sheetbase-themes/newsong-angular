import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PlayerComponent,
  ]
})
export class PlayerComponentModule { }
