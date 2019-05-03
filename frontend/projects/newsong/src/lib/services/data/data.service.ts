import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Filter } from '@sheetbase/client';
import {
  Post,
  Post as Song,
  Post as Bundle,
  Post as Video,
} from '@sheetbase/models';
import { DatabaseService } from '@sheetbase/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private Database: DatabaseService,
  ) { }

  // song
  songs(filter?: Filter, offline = true, cacheTime = 1440) {
    return this.Database.items<Song>('songs', filter, offline, cacheTime);
  }
  song(finder: string | Filter, offline = true, cacheTime = 1440) {
    let hasBundles = false;
    let resultSong: Song;
    return this.Database.item<Song>('songs', finder, offline, cacheTime)
    .pipe(
      flatMap((song: Song) => {
        resultSong = song;
        if (!!resultSong.meta && !!resultSong.meta['bundles']) {
          hasBundles = true;
          return this.bundles();
        } else {
          return from([]);
        }
      }),
      flatMap((bundles: Bundle[]) => {
        if (hasBundles) {
          return of<Song>(resultSong);
        } else {
          // turn arr into obj
          const bundlesObj = {};
          for (let i = 0; i < bundles.length; i++) {
            const bundle = bundles[i];
            bundlesObj[bundle.$key] = bundle;
          }
          // get bundles
          const songBundles = resultSong.meta['bundles'];
          for (const key of Object.keys(songBundles)) {
            if (!!bundlesObj[key]) {
              songBundles[key] = bundlesObj[key];
            } else {
              delete songBundles[key];
            }
          }
        }
      }),
    );
  }
  clearSongs() {
    return this.Database.clearCacheAll('songs');
  }
  clearSong(item: Song) {
    return this.Database.clearCacheItem('songs', item);
  }
  songsByRelated(item: Song) {
    const [ category ] = Object.keys(item.categories || {});
    const [ tag ] = Object.keys(item.tags || {});
    return this.songs((song: Song) => (
      song.$key !== item.$key &&
      (
        (!!category && !!song.categories && !!song.categories[category]) ||
        (!!tag && !!song.tags && !!song.tags[tag])
      )
    ));
  }
  songsByBundle(bundle: Bundle) {
    return this.songs((song: Song) => (
      !!song.meta &&
      !!song.meta.bundles &&
      !!song.meta.bundles[bundle.$key]
    ));
  }

  // bundle
  bundles(filter?: Filter, offline = true, cacheTime = 1440) {
    return this.Database.items<Bundle>('bundles', filter, offline, cacheTime);
  }
  bundle(finder: string | Filter, offline = true, cacheTime = 1440) {
    let resultBundle: Bundle;
    return this.Database.item<Bundle>('bundles', finder, offline, cacheTime)
    .pipe(
      flatMap((bundle: Bundle) => {
        resultBundle = bundle;
        resultBundle.meta = resultBundle.meta || {};
        return this.songsByBundle(bundle);
      }),
      flatMap((songs: Song[]) => {
        resultBundle.meta['songs'] = songs;
        return of<Bundle>(resultBundle);
      }),
    );
  }
  clearBundles() {
    return this.Database.clearCacheAll('bundles');
  }
  clearBundle(item: Bundle) {
    return this.Database.clearCacheItem('bundles', item);
  }
  bundlesByRelated(item: Bundle) {
    const [ category ] = Object.keys(item.categories || {});
    const [ tag ] = Object.keys(item.tags || {});
    return this.bundles((bundle: Bundle) => (
      bundle.$key !== item.$key &&
      (
        (!!category && !!bundle.categories && !!bundle.categories[category]) ||
        (!!tag && !!bundle.tags && !!bundle.tags[tag])
      )
    ));
  }

  // album
  albums(filter?: Filter, offline = true, cacheTime = 1440) {
    return this.bundles({ ... filter, type: 'album' }, offline, cacheTime);
  }
  album(finder: string | Filter, offline = true, cacheTime = 1440) {
    return this.bundle(finder, offline, cacheTime);
  }
  clearAlbums() {
    return this.clearBundles();
  }
  clearAlbum(item: Bundle) {
    return this.clearBundle(item);
  }
  albumsByRelated(item: Bundle) {
    const [ category ] = Object.keys(item.categories || {});
    const [ tag ] = Object.keys(item.tags || {});
    return this.albums((album: Bundle) => (
      album.$key !== item.$key &&
      (
        (!!category && !!album.categories && !!album.categories[category]) ||
        (!!tag && !!album.tags && !!album.tags[tag])
      )
    ));
  }

  // playlist
  playlists(filter?: Filter, offline = true, cacheTime = 1440) {
    return this.bundles({ ... filter, type: 'playlist' }, offline, cacheTime);
  }
  playlist(finder: string | Filter, offline = true, cacheTime = 1440) {
    return this.bundle(finder, offline, cacheTime);
  }
  clearPlaylists() {
    return this.clearBundles();
  }
  clearPlaylist(item: Bundle) {
    return this.clearBundle(item);
  }
  playlistsByRelated(item: Bundle) {
    const [ category ] = Object.keys(item.categories || {});
    const [ tag ] = Object.keys(item.tags || {});
    return this.playlists((playlist: Bundle) => (
      playlist.$key !== item.$key &&
      (
        (!!category && !!playlist.categories && !!playlist.categories[category]) ||
        (!!tag && !!playlist.tags && !!playlist.tags[tag])
      )
    ));
  }

  // video
  videos(filter?: Filter, offline = true, cacheTime = 1440) {
    return this.Database.items<Video>('videos', filter, offline, cacheTime);
  }
  video(finder: string | Filter, offline = true, cacheTime = 1440) {
    return this.Database.item<Video>('videos', finder, offline, cacheTime);
  }
  clearVideos() {
    return this.Database.clearCacheAll('videos');
  }
  clearVideo(item: Video) {
    return this.Database.clearCacheItem('videos', item);
  }
  videosByRelated(item: Video) {
    const [ category ] = Object.keys(item.categories || {});
    const [ tag ] = Object.keys(item.tags || {});
    return this.videos((video: Video) => (
      video.$key !== item.$key &&
      (
        (!!category && !!video.categories && !!video.categories[category]) ||
        (!!tag && !!video.tags && !!video.tags[tag])
      )
    ));
  }

}
