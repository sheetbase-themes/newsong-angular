import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post as Song } from '@sheetbase/models';

import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'newsong-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {

  @Input() songs: Song;
  @Output() view: EventEmitter<Song> = new EventEmitter();

  constructor(
    public player: PlayerService,
  ) { }

  ngOnInit() {}

}
