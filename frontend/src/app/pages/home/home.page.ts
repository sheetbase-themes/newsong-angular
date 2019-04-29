import { Component, OnInit } from '@angular/core';

import {
  Post as Song,
  Post as Bundle,
  Post as Video,
} from '@sheetbase/models';
import { AppService, NavService, DataService, DatabaseService } from '@sheetbase/angular';

import { PlayerService } from 'newsong';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  songs: Song[];
  albums: Bundle[];
  playlists: Bundle[];
  videos: Video[];

  constructor(
    private dataService: DataService,
    private databaseService: DatabaseService,
    public appService: AppService,
    public nav: NavService,
    public player: PlayerService,
  ) {}

  ngOnInit() {
    // songs
    this.databaseService.items<Song>('songs', null, true, 1440)
    .subscribe(songs => {
      this.songs = songs;
    });
    // albums
    this.databaseService.items<Bundle>('bundles', { type: 'album' }, true, 1440)
    .subscribe(albums => {
      this.albums = albums;
    });
    // playlists
    this.databaseService.items<Bundle>('bundles', { type: 'playlist' }, true, 1440)
    .subscribe(playlists => {
      this.playlists = playlists;
    });
    // videos
    this.databaseService.items<Video>('videos', null, true, 1440)
    .subscribe(videos => {
      this.videos = videos;
    });
    // set meta
    this.nav.setMeta();
  }

}
