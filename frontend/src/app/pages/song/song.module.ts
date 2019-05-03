import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OopsComponentModule, SkeletonComponentModule } from '@sheetbase/angular';
import { TitleComponentModule, SongsComponentModule, SongComponentModule } from 'newsong';

import { ComponentsModule } from '../../components/components.module';
import { SongPage } from './song.page';

const routes: Routes = [
  {
    path: '',
    component: SongPage
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
    SongsComponentModule,
    SongComponentModule,
    ComponentsModule,
  ],
  declarations: [SongPage]
})
export class SongPageModule {}
