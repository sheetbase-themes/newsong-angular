import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderComponentModule } from 'newsong';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    IonicModule,
    HeaderComponentModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class ComponentsModule {}
