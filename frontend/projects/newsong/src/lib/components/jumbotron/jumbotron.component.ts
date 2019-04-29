import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'newsong-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit {

  @Input() title: string;
  @Input() tagline: string;
  @Input() image: string;
  @Output() doSongs: EventEmitter<void> = new EventEmitter();
  @Output() doRadio: EventEmitter<void> = new EventEmitter();
  @Output() doStore: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
