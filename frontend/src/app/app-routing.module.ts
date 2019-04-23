import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './pages/home/home.module#HomePageModule', pathMatch: 'full' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'videos', loadChildren: './pages/videos/videos.module#VideosPageModule' },
  { path: 'video', loadChildren: './pages/video/video.module#VideoPageModule' },
  { path: 'songs', loadChildren: './pages/songs/songs.module#SongsPageModule' },
  { path: 'song', loadChildren: './pages/song/song.module#SongPageModule' },
  { path: 'posts', loadChildren: './pages/posts/posts.module#PostsPageModule' },
  { path: 'post', loadChildren: './pages/post/post.module#PostPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
