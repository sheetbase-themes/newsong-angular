import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { initializeApp } from '@sheetbase/client/app';
import '@sheetbase/client/database';
import {
  SheetbaseService,
  AppService,
  NavService,
  DateService,
} from '@sheetbase/angular';

import { SHEETBASE_CONFIG } from '../sheetbase.config';
import { APP_OPTIONS } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private sheetbaseService: SheetbaseService,
    private appService: AppService,
    public navService: NavService,
    private dateService: DateService,
  ) {
    this.initializeApp();
  }

  initializeApp() {

    // platform
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // setup sheetbase
    this.sheetbaseService.setApp(initializeApp(SHEETBASE_CONFIG));

    // setup app
    this.appService.setOptions(APP_OPTIONS);

    // setup nav service
    this.navService
      .setDefaultMetas(APP_OPTIONS.metas)
      .setRouter(this.router);

    // setup date
    this.dateService.init(APP_OPTIONS.date, APP_OPTIONS.locale);

  }
}
