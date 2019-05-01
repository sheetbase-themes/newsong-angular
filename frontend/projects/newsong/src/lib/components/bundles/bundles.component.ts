import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post as Bundle } from '@sheetbase/models';

import { DataService as AppDataService } from '../../services/data/data.service';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'newsong-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss'],
})
export class BundlesComponent implements OnInit {

  @Input() bundles: Bundle[];
  @Output() view: EventEmitter<Bundle> = new EventEmitter();
  @Output() play: EventEmitter<Bundle> = new EventEmitter();

  constructor(
    private appDataService: AppDataService,
    public player: PlayerService,
  ) { }

  ngOnInit() {}

  playBundle(bundle: Bundle) {
    this.appDataService.bundle(bundle.$key)
    .subscribe(result => this.play.emit(result));
  }

}
