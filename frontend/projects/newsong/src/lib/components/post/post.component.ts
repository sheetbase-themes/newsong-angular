import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '@sheetbase/models';
import { DateService } from '@sheetbase/angular';

@Component({
  selector: 'newsong-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Output() goHome: EventEmitter<void> = new EventEmitter();
  @Output() goPosts: EventEmitter<void> = new EventEmitter();
  @Output() goCategory: EventEmitter<string> = new EventEmitter();
  @Output() goTag: EventEmitter<string> = new EventEmitter();

  constructor(
    public dateService: DateService,
  ) { }

  ngOnInit() {}

  shareUrl() {
    return window.location.href;
  }

}
