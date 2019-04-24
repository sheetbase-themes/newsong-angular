import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderComponentModule, FooterComponentModule } from 'newsong';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    IonicModule,
    HeaderComponentModule,
    FooterComponentModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class ComponentsModule {}
