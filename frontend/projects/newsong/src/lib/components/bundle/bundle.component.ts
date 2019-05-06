import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  Post as Song,
  Post as Bundle,
} from '@sheetbase/models';

import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'newsong-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.scss'],
})
export class BundleComponent implements OnInit {

  @Input() bundle: Bundle;
  @Output() playBundle: EventEmitter<Bundle> = new EventEmitter();
  @Output() playSong: EventEmitter<number> = new EventEmitter();
  @Output() goSong: EventEmitter<Song> = new EventEmitter();

  constructor(
    public player: PlayerService,
  ) { }

  ngOnInit() {}

}
