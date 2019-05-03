import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '@sheetbase/models';
import { DateService } from '@sheetbase/angular';

@Component({
  selector: 'newsong-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  @Input() posts: Post;
  @Output() view: EventEmitter<Post> = new EventEmitter();

  constructor(
    public dateService: DateService,
  ) { }

  ngOnInit() {}

}
