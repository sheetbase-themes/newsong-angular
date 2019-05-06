import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OopsComponentModule, SkeletonComponentModule } from '@sheetbase/angular';
import { TitleComponentModule, BundlesComponentModule, BundleComponentModule } from 'newsong';

import { ComponentsModule } from '../../components/components.module';
import { BundlePage } from './bundle.page';

const routes: Routes = [
  {
    path: '',
    component: BundlePage
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
    BundlesComponentModule,
    BundleComponentModule,
    ComponentsModule,
  ],
  declarations: [BundlePage]
})
export class BundlePageModule {}
