import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post as Video } from '@sheetbase/models';

import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'newsong-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  @Input() videos: Video[];
  @Output() view: EventEmitter<Video> = new EventEmitter();

  constructor(
    public player: PlayerService,
  ) { }

  ngOnInit() {}

  thumbnail(video: Video) {
    const id = video.contentSource.split('?v=').pop();
    return `https://img.youtube.com/vi/${ id }/mqdefault.jpg`;
  }

}
