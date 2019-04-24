import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Link, NavService } from '@sheetbase/angular';

@Component({
  selector: 'newsong-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() nav: NavService;
  @Input() name: string;
  @Input() socials: Link[];
  @Input() links: Link[];
  @Output() goHome: EventEmitter<void> = new EventEmitter();

  showMenu = false;

  constructor() { }

  ngOnInit() {}

  toggle() {
    if (this.nav.canGoBack()) {
      this.nav.back();
    } else {
      this.showMenu = !this.showMenu;
    }
  }

}
