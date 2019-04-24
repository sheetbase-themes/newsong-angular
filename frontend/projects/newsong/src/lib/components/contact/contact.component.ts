import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { Message } from '@sheetbase/models';
import { LocalstorageService } from '@sheetbase/angular';

@Component({
  selector: 'newsong-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  SHEETBASE_CONTACT = 'SHEETBASE_CONTACT';

  @Input() email: string;
  @Input() facebook: string;
  @Output() sendMessage: EventEmitter<Message> = new EventEmitter();

  contactFormGroup: FormGroup;
  lockdown = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private localstorageService: LocalstorageService,
  ) {
    this.contactFormGroup = this.formBuilder.group({
      'name': new FormControl('', [
        Validators.required,
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'message': new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnInit() {
    this.localstorageService
    .get<{ name: string, email: string }>(this.SHEETBASE_CONTACT)
    .subscribe(info => {
      const { name = '', email = '' } = info || {};
      this.contactFormGroup.get('name').setValue(name);
      this.contactFormGroup.get('email').setValue(email);
    });
  }

  messengerUrl() {
    return 'https://m.me/' + (this.facebook || '').split('/').pop();
  }

  async sendMessageEmit() {
    // handler
    const handler = async () => {
      this.lockdown = true;
      setTimeout(() => { this.lockdown = false; }, 5000);
      // emit
      const name = this.contactFormGroup.get('name').value;
      const email = this.contactFormGroup.get('email').value;
      this.sendMessage.emit({
        name,
        email,
        message: this.contactFormGroup.get('message').value,
      });
      // save info offline
      this.localstorageService.set(this.SHEETBASE_CONTACT, { name, email });
      // notify
      setTimeout(async () => {
        const alert = await this.alertController.create({
          header: 'Message sent',
          message: 'Thank you for contacting us!',
          buttons: ['OK']
        });
        await alert.present();
      }, 2000);
    };
    // send
    if (!this.lockdown) {
      const alert = await this.alertController.create({
        header: 'Send message?',
        message: this.contactFormGroup.get('message').value,
        buttons: [
          'Cancel',
          {
            text: 'Send',
            handler,
          },
        ],
      });
      await alert.present();
    }
  }

}
