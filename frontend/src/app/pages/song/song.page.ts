import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post as Song } from '@sheetbase/models';
import { NavService } from '@sheetbase/angular';

import { DataService as AppDataService, PlayerService } from 'newsong';

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {

  private songKey: string;

  notFound = false;
  song: Song;

  suggestedSongs: Song[]; // suggested songs

  constructor(
    private route: ActivatedRoute,
    private appDataService: AppDataService,
    public nav: NavService,
    public player: PlayerService,
  ) { }

  ngOnInit() {
    this.loadSong();
  }

  loadSong() {
    // load key and data
    this.songKey = this.route.snapshot.paramMap.get('songKey');
    this.song = this.nav.get('song');
    // load data
    if (!!this.songKey) {
      this.appDataService.song(this.songKey).subscribe(song => {
        if (!!song) {
          this.song = song;
          // set meta
          this.nav.setMeta(song);
          // load suggested
          this.getSuggestedSongs();
        } else {
          this.notFound = true;
        }
      });
    } else {
      this.notFound = true;
    }
  }

  getSuggestedSongs() {
    this.appDataService.songsByRelated(this.song)
    .subscribe(suggestedSongs => {
      this.suggestedSongs = (suggestedSongs || []).slice(0, 8);
    });
  }

  playSong() {
    const songs = [ this.song, ... this.suggestedSongs ];
    return this.player.play(songs, 0);
  }

}
