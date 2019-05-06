import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post as Song } from '@sheetbase/models';

import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'newsong-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {

  @Input() song: Song;
  @Output() play: EventEmitter<void> = new EventEmitter();

  constructor(
    public player: PlayerService,
  ) { }

  ngOnInit() {}

}
