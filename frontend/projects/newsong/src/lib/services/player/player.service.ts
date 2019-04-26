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

  duration = 0;
  time = 0;
  seekBarValue = 0;

  nextItemQueued = false;

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
      title: 'Newsong',
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
          this.duration = this.audio.duration();
          return this.playingStep();
        },
      });
    }, 1000);
  }

  private playingStep() {
    // update timing
    this.time = this.audio.seek() as number;
    this.seekBarValue = !!this.duration ? Math.ceil((this.time * 100) / this.duration) : 0;
    // autoplay next song
    if (
      !this.nextItemQueued &&
      this.time > (this.duration - 5)
    ) {
      this.nextItemQueued = true;
      const nextIndex = !!this.nextItem() ? this.itemIndex + 1 : 0;
      // notify
      const item = this.items[nextIndex];
      console.log('Next song ...', item);
      // play next song after 7s
      setTimeout(() => {
        this.play(this.items, nextIndex, this.bundle);
      }, 7000);
      // reset checker after 10s
      setTimeout(() => {
        this.nextItemQueued = false;
      }, 10000);
    }
    // continue steping
    if (this.audio.playing()) {
      setTimeout(() => {
        this.playingStep();
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

  playing() {
    return !!this.audio ? this.audio.playing() : false;
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
