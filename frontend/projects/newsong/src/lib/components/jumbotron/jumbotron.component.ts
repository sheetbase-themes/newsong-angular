import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'newsong-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit {

  @Input() title: string;
  @Input() tagline: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {}

}
