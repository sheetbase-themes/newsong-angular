import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {
  SheetbaseService,
  ApiService,
  DatabaseService,
  AppService,
  NavService,
  DataService,
  DateService,
} from '@sheetbase/angular';

import { DataService as AppDataService, PlayerService, PlayerComponentModule } from 'newsong';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PlayerComponentModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // @sheetbase/angular
    SheetbaseService,
    ApiService,
    DatabaseService,
    AppService,
    NavService,
    DataService,
    DateService,

    // app
    PlayerService,
    AppDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
