import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { VideoComponent } from './video.component';

@NgModule({
  declarations: [
    VideoComponent,
  ],
  imports: [
    CommonModule,
    NgxYoutubePlayerModule,
  ],
  exports: [
    VideoComponent,
  ]
})
export class VideoComponentModule { }
