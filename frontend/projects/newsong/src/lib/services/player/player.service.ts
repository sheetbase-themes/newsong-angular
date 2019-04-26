import { Injectable } from '@angular/core';
import { Howl } from 'howler';

import {
  Post as Song,
  Post as Bundle,
} from '@sheetbase/models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private audio: Howl;

  bundle: Bundle; // album, playlist
  items: Song[] = []; // songs
  itemIndex = 0;

  available = false;
  playing = false;

  duration = 0;
  time = 0;
  seekBarValue = 0;

  constructor() {
    this.init();
  }

  private init() {
    // init audio
    this.audio = new Howl({
      src: ['data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'],
    });
    // init items
    this.items.push({
      $key: '__newsong__',
      title: 'Newsong',
      thumbnail: 'https://img.icons8.com/dusk/128/000000/music.png',
      contentSource: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
    });
  }

  private playAudio(urls: string[]) {
    this.audio.fade(1, 0, 1000);
    setTimeout(() => {
      this.audio = new Howl({
        src: urls,
        onloaderror: () => this.available = false,
        onload: () => {
          this.available = true;
          this.audio.play();
        },
        onplay: () => {
          this.playing = true;
          this.duration = this.audio.duration();
          return this.step();
        },
        onpause: () => this.playing = false,
        onend: () => this.playing = false,
      });
    }, 1000);
  }

  private step() {
    this.time = this.audio.seek() as number;
    this.seekBarValue = Math.ceil((this.time * 100) / this.duration);
    // continue steping
    if (this.audio.playing()) {
      setTimeout(() => {
        this.step();
      }, 1000);
    }
  }

  currentItem(): any {
    return this.items[this.itemIndex];
  }

  prevItem(): any {
    return this.items[this.itemIndex - 1];
  }

  nextItem(): any {
    return this.items[this.itemIndex + 1];
  }

  play(items: Song[], itemIndex = 0, bundle?: Bundle) {
    this.bundle = bundle;
    this.items = items;
    this.itemIndex = itemIndex;
    // play audio
    const item = items[itemIndex];
    this.playAudio([ item.contentSource ]);
  }

  togglePlay() {
    if (!this.audio.playing()) {
      this.audio.fade(0, 1, 300);
      this.audio.play();
    } else {
      this.playing = true; // fix delay cause by setTimeout
      this.audio.fade(1, 0, 300);
      setTimeout(() => {
        this.audio.pause();
      }, 300);
    }
  }

  togglePrev() { // NOTE: only for type of list
    return this.play(this.items, this.itemIndex - 1, this.bundle);
  }

  toggleNext() {
    return this.play(this.items, this.itemIndex + 1, this.bundle);
  }

  seek() {
    this.audio.seek((this.seekBarValue * this.duration) / 100);
  }

  formatTime(secondsNumber: number = 0) {
    if (!!secondsNumber || secondsNumber === 0) {
      const minutes = Math.floor(secondsNumber / 60) || 0;
      const seconds = Math.floor(secondsNumber - minutes * 60) || 0;
      return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    } else {
      return '--:--';
    }
  }

}
