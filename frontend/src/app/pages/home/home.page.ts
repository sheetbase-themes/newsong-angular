import { Component, OnInit } from '@angular/core';

import {
  Post as Song,
  Post as Bundle,
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

  constructor(
    private dataService: DataService,
    private databaseService: DatabaseService,
    public appService: AppService,
    public nav: NavService,
    public player: PlayerService,
  ) {}

  ngOnInit() {
    // songs
    this.databaseService.items<Song>('songs')
    .subscribe(songs => {
      this.songs = songs;
    });
    // albums
    this.databaseService.items<Bundle>('bundles', { type: 'album' })
    .subscribe(albums => {
      this.albums = albums;
    });
    // playlists
    this.databaseService.items<Bundle>('bundles', { type: 'playlist' })
    .subscribe(playlists => {
      this.playlists = playlists;
    });
    // set meta
    this.nav.setMeta();
  }

  playAudio() {
    this.player.play(this.songs);
  }

}
