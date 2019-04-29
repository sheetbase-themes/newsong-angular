import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post as Bundle } from '@sheetbase/models';

import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'newsong-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss'],
})
export class BundlesComponent implements OnInit {

  @Input() bundles: Bundle[];
  @Output() view: EventEmitter<Bundle> = new EventEmitter();

  constructor(
    public player: PlayerService,
  ) { }

  ngOnInit() {}

}
