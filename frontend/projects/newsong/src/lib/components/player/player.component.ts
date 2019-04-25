import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'newsong-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {

  showDetail = false;
  tab = 'content';

  constructor(
    public player: PlayerService,
  ) { }

  ngOnInit() {}

}
