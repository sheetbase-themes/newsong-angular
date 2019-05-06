import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post as Video } from '@sheetbase/models';
import { NavService } from '@sheetbase/angular';

import { DataService as AppDataService } from 'newsong';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  private videoKey: string;

  notFound = false;
  video: Video;

  suggestedVideos: Video[]; // suggested videos

  constructor(
    private route: ActivatedRoute,
    private appDataService: AppDataService,
    public nav: NavService,
  ) { }

  ngOnInit() {
    this.loadSong();
  }

  loadSong() {
    // load key and data
    this.videoKey = this.route.snapshot.paramMap.get('videoKey');
    // load data
    if (!!this.videoKey) {
      this.appDataService.video(this.videoKey).subscribe(video => {
        if (!!video) {
          this.video = video;
          // set meta
          this.nav.setMeta(video);
          // load suggested
          this.getSuggestedVideos();
        } else {
          this.notFound = true;
        }
      });
    } else {
      this.notFound = true;
    }
  }

  getSuggestedVideos() {
    this.appDataService.videosByRelated(this.video)
    .subscribe(suggestedVideos => {
      this.suggestedVideos = (suggestedVideos || []).slice(0, 8);
    });
  }
}
