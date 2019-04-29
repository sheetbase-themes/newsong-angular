import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  TitleComponentModule,
  JumbotronComponentModule,
  SongsComponentModule,
  VideosComponentModule,
  BundlesComponentModule,
  ContactComponentModule,
} from 'newsong';

import { ComponentsModule } from '../../components/components.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    TitleComponentModule,
    JumbotronComponentModule,
    SongsComponentModule,
    VideosComponentModule,
    BundlesComponentModule,
    ContactComponentModule,
    ComponentsModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
