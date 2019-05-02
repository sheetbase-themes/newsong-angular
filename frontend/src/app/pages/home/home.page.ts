import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
    private alertController: AlertController,
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
      setTimeout(() => this.askForRadio(), 1000);
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

  async askForRadio() {
    const alert = await this.alertController.create({
      header: 'Radio',
      message: 'Play today radio now?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Play radio',
          handler: () => this.playRadio(),
        },
      ],
    });
    return await alert.present();
  }

  playRadio() {
    const radioBundle: Bundle = {
      $key: '__radio__',
      title: 'My Radio!',
      author: 'By Me' as any,
      thumbnail: 'https://img.icons8.com/dusk/320/000000/radio-tower.png',
    };
    // TODO: implement radio algorithm
    return this.player.play(this.songs, 0, radioBundle, 'radio');
  }

}
