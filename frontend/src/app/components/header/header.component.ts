import { Component, OnInit } from '@angular/core';

import { Link, AppService, NavService, retryInterval } from '@sheetbase/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: Link[];
  socials: Link[];

  constructor(
    public appService: AppService,
    public nav: NavService,
  ) {

    // socials
    this.socials = [];

    // menu links
    this.links = [
      {
        text: 'Home',
        href: '/',
        handler: () => this.nav.navigate(['/']),
      },
      {
        text: 'Store',
        href: '/store',
        handler: () => this.nav.navigate(['/store']),
      },
      {
        text: 'Videos',
        href: '/videos',
        handler: () => this.nav.navigate(['/videos']),
      },
      {
        text: 'Contact',
        href: '/contact',
        handler: () => this.nav.navigate(['/contact']),
      },
    ];
  }

  ngOnInit() {
    retryInterval(() => !!this.appService.options).subscribe(() => {
      const { email, facebook, twitter } = this.appService.options;
      this.socials = [
        {
          icon: 'https://img.icons8.com/material-rounded/32/777777/new-post.png',
          class: 'email',
          href: 'mailto:' + email,
        },
        {
          icon: 'https://img.icons8.com/android/32/777777/facebook.png',
          class: 'facebook',
          href: facebook,
        },
        {
          icon: 'https://img.icons8.com/android/32/777777/twitter.png',
          class: 'twitter',
          href: twitter,
        },
      ];
    });
  }

}
