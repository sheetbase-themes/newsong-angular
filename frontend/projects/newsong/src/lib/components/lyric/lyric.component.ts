import { Component, OnInit, Input } from '@angular/core';

import { Post as Song } from '@sheetbase/models';

@Component({
  selector: 'newsong-lyric',
  templateUrl: './lyric.component.html',
  styleUrls: ['./lyric.component.scss'],
})
export class LyricComponent implements OnInit {

  tab = 'text';

  @Input() song: Song;

  constructor() { }

  ngOnInit() {}

}
