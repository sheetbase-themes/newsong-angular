import { Component, OnInit } from '@angular/core';

import { Link, AppService, NavService, retryInterval } from '@sheetbase/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  socials: Link[];
  links: Link[];

  constructor(
    private appService: AppService,
    private nav: NavService,
  ) {

    // socials
    this.socials = [];

    // footer links
    this.links = [
      {
        text: 'Terms',
        href: '/page/terms',
        handler: () => this.nav.navigate(['/page/terms']),
      },
      {
        text: 'Privacy',
        href: '/page/privacy',
        handler: () => this.nav.navigate(['/page/privacy']),
      },
    ];

  }

  ngOnInit() {
    retryInterval(() => !!this.appService.options).subscribe(() => {
      const { email, facebook, twitter } = this.appService.options;
      this.socials = [
        {
          icon: 'https://unpkg.com/@mdi/svg@latest/svg/email.svg',
          class: 'email',
          href: 'mailto:' + email,
        },
        {
          icon: 'https://unpkg.com/@mdi/svg@latest/svg/facebook.svg',
          class: 'facebook',
          href: facebook,
        },
        {
          icon: 'https://unpkg.com/@mdi/svg@latest/svg/twitter.svg',
          class: 'twitter',
          href: twitter,
        },
      ];
    });
  }

}
