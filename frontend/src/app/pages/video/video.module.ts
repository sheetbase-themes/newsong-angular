import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OopsComponentModule, SkeletonComponentModule } from '@sheetbase/angular';
import { TitleComponentModule, VideosComponentModule, VideoComponentModule } from 'newsong';

import { ComponentsModule } from '../../components/components.module';
import { VideoPage } from './video.page';

const routes: Routes = [
  {
    path: '',
    component: VideoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    OopsComponentModule,
    SkeletonComponentModule,
    TitleComponentModule,
    VideosComponentModule,
    VideoComponentModule,
    ComponentsModule,
  ],
  declarations: [VideoPage]
})
export class VideoPageModule {}
