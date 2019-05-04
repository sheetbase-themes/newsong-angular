import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  Post as Song,
  Post as Bundle,
} from '@sheetbase/models';

import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'newsong-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {

  showDetail = false;
  tab = 'content';

  @Output() goSong: EventEmitter<Song> = new EventEmitter();
  @Output() goBundle: EventEmitter<Bundle> = new EventEmitter();

  constructor(
    public player: PlayerService,
  ) { }

  ngOnInit() {}

}
