import { Component, OnInit } from '@angular/core';

import { Post } from '@sheetbase/models';
import { AppService, NavService, DataService } from '@sheetbase/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private dataService: DataService,
    public appService: AppService,
    public nav: NavService,
  ) {}

  ngOnInit() {
    // set meta
    this.nav.setMeta();
  }

}
