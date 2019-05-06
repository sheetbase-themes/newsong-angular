import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { O2aPipeModule } from '@sheetbase/angular';

import { ContentComponentModule } from '../content/content.module';

import { PostComponent } from './post.component';

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    CommonModule,
    ContentComponentModule,
    O2aPipeModule,
  ],
  exports: [
    PostComponent,
  ]
})
export class PostComponentModule { }
