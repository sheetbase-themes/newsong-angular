import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '@sheetbase/models';
import { NavService, DataService } from '@sheetbase/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  private postKey: string;

  notFound = false;
  post: Post;

  suggestedPosts: Post[]; // suggested posts

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public nav: NavService,
  ) {
  }

  ngOnInit() {
    this.postKey = this.nav.get('postKey') || this.route.snapshot.paramMap.get('postKey');
    if (!!this.postKey) {
      // get post
      this.dataService.post(this.postKey).subscribe(post => {
        if (!!post) {
          this.post = post;
          // set meta
          this.nav.setMeta(this.post, { description: 'excerpt' });
          // load suggestions
          this.getSuggestedPosts();
        } else {
          this.notFound = true;
        }
      });
    } else {
      this.notFound = true;
    }
  }

  getSuggestedPosts() {
    const postKey = this.postKey;
    const [ category ] = Object.keys(this.post.categories || {});
    const [ tag ] = Object.keys(this.post.tags || {});
    this.dataService.posts((post: Post) => (
      post.status === 'published' &&
      post.$key !== postKey &&
      (!post.type || post.type === 'post') &&
      (
        (!!category && !!post.categories && !!post.categories[category]) ||
        (!!tag && !!post.tags && !!post.tags[tag])
      )
    )).subscribe(suggestedPosts => {
      this.suggestedPosts = (suggestedPosts || []).slice(0, 7);
    });
  }

}
