import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TitleComponentModule, ContactComponentModule } from 'newsong';

import { ComponentsModule } from '../../components/components.module';
import { ContactPage } from './contact.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    TitleComponentModule,
    ContactComponentModule,
    ComponentsModule,
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
