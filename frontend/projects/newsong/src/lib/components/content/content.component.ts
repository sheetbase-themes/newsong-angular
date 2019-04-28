import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'newsong-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  @Input() content = '';

  constructor() { }

  ngOnInit() {}

}
