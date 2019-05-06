import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post as Video } from '@sheetbase/models';

@Component({
  selector: 'newsong-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {

  private player;
  playerVars = {
    cc_lang_pref: 'en'
  };

  @Input() video: Video;
  @Output() playerReady: EventEmitter<any> = new EventEmitter();
  @Output() playerChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  setPlayer(player) {
    this.player = player;
    return this.playerReady.emit(player);
  }

  onStateChange(event) {
    return this.playerChange.emit(event);
  }

  videoId() {
    return this.video.contentSource.split('?v=').pop();
  }

}
