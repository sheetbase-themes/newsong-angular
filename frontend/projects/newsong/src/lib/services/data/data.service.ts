import { Injectable } from '@angular/core';

import { Filter } from '@sheetbase/client';
import {
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
    return this.Database.item<Song>('songs', finder, offline, cacheTime);
  }
  clearSongs() {
    return this.Database.clearCacheAll('songs');
  }
  clearSong(item: Song) {
    return this.Database.clearCacheItem('songs', item);
  }

  // bundle
  bundles(filter?: Filter, offline = true, cacheTime = 1440) {
    return this.Database.items<Bundle>('bundles', filter, offline, cacheTime);
  }
  bundle(finder: string | Filter, offline = true, cacheTime = 1440) {
    return this.Database.item<Bundle>('bundles', finder, offline, cacheTime);
  }
  clearBundles() {
    return this.Database.clearCacheAll('bundles');
  }
  clearBundle(item: Bundle) {
    return this.Database.clearCacheItem('bundles', item);
  }

  // album
  albums(filter?: Filter, offline = true, cacheTime = 1440) {
    return this.Database.items<Bundle>('bundles', { ... filter, type: 'album' }, offline, cacheTime);
  }
  album(finder: string | Filter, offline = true, cacheTime = 1440) {
    return this.Database.item<Bundle>('bundles', finder, offline, cacheTime);
  }
  clearAlbums() {
    return this.Database.clearCacheAll('bundles');
  }
  clearAlbum(item: Bundle) {
    return this.Database.clearCacheItem('bundles', item);
  }

  // playlist
  playlists(filter?: Filter, offline = true, cacheTime = 1440) {
    return this.Database.items<Bundle>('bundles', { ... filter, type: 'playlist' }, offline, cacheTime);
  }
  playlist(finder: string | Filter, offline = true, cacheTime = 1440) {
    return this.Database.item<Bundle>('bundles', finder, offline, cacheTime);
  }
  clearPlaylists() {
    return this.Database.clearCacheAll('bundles');
  }
  clearPlaylist(item: Bundle) {
    return this.Database.clearCacheItem('bundles', item);
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

}
