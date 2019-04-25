import { Component, OnInit } from '@angular/core';

import { Post } from '@sheetbase/models';
import { AppService, NavService, DataService } from '@sheetbase/angular';

import { PlayerService } from 'newsong';

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
    public player: PlayerService,
  ) {}

  ngOnInit() {
    // set meta
    this.nav.setMeta();
  }

  playAudio() {
    this.player.play([{
      $key: 'test',
      title: 'Lorem ipsum dolat init',
      thumbnail: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      contentSource: 'https://previews.customer.envatousercontent.com/files/145229456/preview.mp3',
    }]);
  }

}
