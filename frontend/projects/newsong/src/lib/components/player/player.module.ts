import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PlayerComponent,
  ]
})
export class PlayerComponentModule { }
