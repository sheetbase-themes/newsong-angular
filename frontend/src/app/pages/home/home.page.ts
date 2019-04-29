import { Component, OnInit } from '@angular/core';

import {
  Post as Song,
  Post as Bundle,
  Post as Video,
} from '@sheetbase/models';
import { AppService, NavService, DataService } from '@sheetbase/angular';

import { DataService as AppDataService, PlayerService } from 'newsong';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  songs: Song[];
  bundles: Bundle[];
  videos: Video[];

  constructor(
    private dataService: DataService,
    private appDataService: AppDataService,
    public appService: AppService,
    public nav: NavService,
    public player: PlayerService,
  ) {}

  ngOnInit() {
    // songs
    this.appDataService.songs().subscribe(songs => {
      this.songs = songs;
    });
    // bundles
    this.appDataService.bundles().subscribe(bundles => {
      this.bundles = bundles;
    });
    // videos
    this.appDataService.videos().subscribe(videos => {
      this.videos = videos;
    });
    // set meta
    this.nav.setMeta();
  }

}
