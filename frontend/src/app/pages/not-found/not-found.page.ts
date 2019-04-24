import { Component, OnInit } from '@angular/core';

import { NavService } from '@sheetbase/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(
    public nav: NavService,
  ) { }

  ngOnInit() {
    // set meta
    this.nav.setMeta({ title: '404' });
  }

}
