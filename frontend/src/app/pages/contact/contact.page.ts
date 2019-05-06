import { Component, OnInit } from '@angular/core';

import { Message } from '@sheetbase/models';
import { DataService } from '@sheetbase/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
  }

  async sendMessage(message: Message) {
    await this.dataService.addMessageExtra(message);
  }

}
