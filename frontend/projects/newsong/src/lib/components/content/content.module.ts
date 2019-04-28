import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipeModule, SkeletonComponentModule } from '@sheetbase/angular';

import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    ContentComponent,
  ],
  imports: [
    CommonModule,
    SafePipeModule,
    SkeletonComponentModule,
  ],
  exports: [
    ContentComponent,
  ]
})
export class ContentComponentModule { }
