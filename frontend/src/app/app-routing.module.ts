import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './pages/home/home.module#HomePageModule', pathMatch: 'full' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'songs', loadChildren: './pages/songs/songs.module#SongsPageModule' },
  { path: 'song/:songKey', loadChildren: './pages/song/song.module#SongPageModule' },
  { path: 'albums', loadChildren: './pages/bundles/bundles.module#BundlesPageModule' },
  { path: 'album/:bundleKey', loadChildren: './pages/bundle/bundle.module#BundlePageModule' },
  { path: 'playlists', loadChildren: './pages/bundles/bundles.module#BundlesPageModule' },
  { path: 'playlist/:bundleKey', loadChildren: './pages/bundle/bundle.module#BundlePageModule' },
  { path: 'videos', loadChildren: './pages/videos/videos.module#VideosPageModule' },
  { path: 'video/:videoKey', loadChildren: './pages/video/video.module#VideoPageModule' },
  { path: 'posts', loadChildren: './pages/posts/posts.module#PostsPageModule' },
  { path: 'post/:postKey', loadChildren: './pages/post/post.module#PostPageModule' },
  {
    path: '**',
    loadChildren: './pages/not-found/not-found.module#NotFoundPageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
