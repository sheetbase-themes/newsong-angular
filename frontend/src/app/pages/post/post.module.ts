import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OopsComponentModule, SkeletonComponentModule } from '@sheetbase/angular';
import { TitleComponentModule, PostsComponentModule, PostComponentModule } from 'newsong';

import { ComponentsModule } from '../../components/components.module';

import { PostPage } from './post.page';

const routes: Routes = [
  {
    path: '',
    component: PostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    TitleComponentModule,
    PostsComponentModule,
    PostComponentModule,
    OopsComponentModule,
    SkeletonComponentModule,
    ComponentsModule,
  ],
  declarations: [PostPage]
})
export class PostPageModule {}
