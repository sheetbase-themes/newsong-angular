import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OopsComponentModule } from '@sheetbase/angular';

import { ComponentsModule } from '../../components/components.module';
import { NotFoundPage } from './not-found.page';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    OopsComponentModule,
    ComponentsModule,
  ],
  declarations: [NotFoundPage]
})
export class NotFoundPageModule {}
