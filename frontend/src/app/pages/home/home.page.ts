import { Component, OnInit } from '@angular/core';

import {
  Post,
  Post as Song,
  Post as Bundle,
  Post as Video,
  Message,
} from '@sheetbase/models';
import { AppService, NavService, DataService, DateService } from '@sheetbase/angular';

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
  posts: Post[];

  constructor(
    private dataService: DataService,
    private appDataService: AppDataService,
    public dateService: DateService,
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
    // posts
    this.dataService.posts().subscribe(posts => {
      this.posts = posts;
    });
    // set meta
    this.nav.setMeta();
  }

  async sendMessage(message: Message) {
    await this.dataService.addMessageExtra(message);
  }

  playRadio() {
    const radioBundle: Bundle = {
      $key: '__radio__',
      title: 'Today Radio',
      author: this.dateService.format(new Date()) as any,
      thumbnail: 'https://img.icons8.com/dusk/320/000000/radio-tower.png',
    };
    // TODO: implement radio algorithm
    return this.player.play(this.songs, 0, radioBundle, 'radio');
  }

}
