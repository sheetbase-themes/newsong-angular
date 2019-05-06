import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post as Bundle } from '@sheetbase/models';
import { NavService } from '@sheetbase/angular';

import { DataService as AppDataService, PlayerService } from 'newsong';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.page.html',
  styleUrls: ['./bundle.page.scss'],
})
export class BundlePage implements OnInit {

  private bundleKey: string;

  notFound = false;
  bundle: Bundle;

  suggestedBundles: Bundle[]; // suggested bundles

  constructor(
    private route: ActivatedRoute,
    private appDataService: AppDataService,
    public nav: NavService,
    public player: PlayerService,
  ) { }

  ngOnInit() {
    this.loadBundle();
  }

  loadBundle() {
    // load key and data
    this.bundleKey = this.route.snapshot.paramMap.get('bundleKey');
    // load data
    if (!!this.bundleKey) {
      this.appDataService.bundle(this.bundleKey).subscribe(bundle => {
        if (!!bundle) {
          this.bundle = bundle;
          // set meta
          this.nav.setMeta(bundle);
          // load suggested
          this.getSuggestedBundles();
        } else {
          this.notFound = true;
        }
      });
    } else {
      this.notFound = true;
    }
  }

  getSuggestedBundles() {
    this.appDataService.bundlesByRelated(this.bundle)
    .subscribe(suggestedBundles => {
      this.suggestedBundles = (suggestedBundles || []).slice(0, 8);
    });
  }

}
