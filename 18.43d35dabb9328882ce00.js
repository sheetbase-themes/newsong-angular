(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{X21c:function(n,l,u){"use strict";u.r(l);var o=u("CcnG"),t=function(){function n(n,l,u,o){this.route=n,this.appDataService=l,this.nav=u,this.player=o,this.notFound=!1}return n.prototype.ngOnInit=function(){this.loadSong()},n.prototype.loadSong=function(){var n=this;this.songKey=this.route.snapshot.paramMap.get("songKey"),this.song=this.nav.get("song"),this.songKey?this.appDataService.song(this.songKey).subscribe(function(l){l?(n.song=l,n.nav.setMeta(l),n.getSuggestedSongs()):n.notFound=!0}):this.notFound=!0},n.prototype.getSuggestedSongs=function(){var n=this;this.appDataService.songsByRelated(this.song).subscribe(function(l){n.suggestedSongs=(l||[]).slice(0,8)})},n.prototype.playSong=function(){var n=[this.song].concat(this.suggestedSongs);return this.player.play(n,0)},n}(),e=function(){return function(){}}(),s=u("pMnS"),g=u("Hh4k"),i=u("rm4x"),a=u("LsOU"),b=u("5PHu"),p=u("Xqnl"),r=u("2MiI"),c=u("oBZk"),f=u("ZZ/e"),h=u("Ip0R"),d=u("ZYCi"),w=o.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{font-family:IBM Plex Sans,sans-serif;font-size:16px;color:#222428}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:IBM Plex Serif,serif}a[_ngcontent-%COMP%]{color:#3880ff;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}main[_ngcontent-%COMP%]{min-height:calc(100vh - 51px - 68px)}"]],data:{}});function v(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.pb(1,0,null,null,1,"sheetbase-oops",[],null,[[null,"goHome"]],function(n,l,u){var o=!0;return"goHome"===l&&(o=!1!==n.component.nav.navigate(["/"])&&o),o},g.c,g.a)),o.ob(2,114688,null,0,i.r,[],null,{goHome:"goHome"})],function(n,l){n(l,2,0)},null)}function y(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.pb(1,0,null,null,1,"sheetbase-skeleton",[],null,null,null,g.d,g.b)),o.ob(2,114688,null,0,i.s,[],null,null)],function(n,l){n(l,2,0)},null)}function S(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,2,"section",[["class","song"]],null,null,null,null,null)),(n()(),o.pb(1,0,null,null,1,"newsong-song",[],null,[[null,"play"]],function(n,l,u){var o=!0;return"play"===l&&(o=!1!==n.component.playSong()&&o),o},a.q,a.g)),o.ob(2,114688,null,0,b.B,[b.k],{song:[0,"song"]},{play:"play"})],function(n,l){n(l,2,0,l.component.song)},null)}function m(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,4,"section",[["class","suggested"]],null,null,null,null,null)),(n()(),o.pb(1,0,null,null,1,"newsong-title",[["title","Similar songs"]],null,null,null,a.t,a.j)),o.ob(2,114688,null,0,b.G,[],{title:[0,"title"]},null),(n()(),o.pb(3,0,null,null,1,"newsong-songs",[],null,[[null,"view"],[null,"play"]],function(n,l,u){var o=!0,t=n.component;return"view"===l&&(o=!1!==t.nav.navigate(["/song",u.$key],{song:u})&&o),"play"===l&&(o=!1!==t.player.play(t.suggestedSongs,u)&&o),o},a.o,a.e)),o.ob(4,114688,null,0,b.x,[b.k],{songs:[0,"songs"]},{view:"view",play:"play"})],function(n,l){var u=l.component;n(l,2,0,"Similar songs"),n(l,4,0,u.suggestedSongs)},null)}function I(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,1,"app-header",[],null,null,null,p.b,p.a)),o.ob(1,114688,null,0,r.a,[i.b,i.h],null,null),(n()(),o.pb(2,0,null,null,10,"ion-content",[],null,null,null,c.g,c.b)),o.ob(3,49152,null,0,f.s,[o.h,o.k],null,null),(n()(),o.pb(4,0,null,0,8,"main",[["padding",""]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,v)),o.ob(6,16384,null,0,h.l,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,y)),o.ob(8,16384,null,0,h.l,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,S)),o.ob(10,16384,null,0,h.l,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,m)),o.ob(12,16384,null,0,h.l,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,1,0),n(l,6,0,u.notFound),n(l,8,0,!u.notFound&&!u.song),n(l,10,0,!u.notFound&&!!u.song),n(l,12,0,!u.notFound&&!!u.suggestedSongs&&u.suggestedSongs.length>0)},null)}function M(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,1,"app-song",[],null,null,null,I,w)),o.ob(1,114688,null,0,t,[d.a,b.e,i.h,b.k],null,null)],function(n,l){n(l,1,0)},null)}var O=o.lb("app-song",t,M,{},{},[]),P=u("j1ZV");u.d(l,"SongPageModuleNgFactory",function(){return k});var k=o.mb(e,[],function(n){return o.vb([o.wb(512,o.j,o.bb,[[8,[s.a,O]],[3,o.j],o.x]),o.wb(4608,h.n,h.m,[o.u,[2,h.u]]),o.wb(4608,f.b,f.b,[o.z,o.g]),o.wb(4608,f.Db,f.Db,[f.b,o.j,o.q,h.d]),o.wb(4608,f.Gb,f.Gb,[f.b,o.j,o.q,h.d]),o.wb(1073742336,h.b,h.b,[]),o.wb(1073742336,f.Bb,f.Bb,[]),o.wb(1073742336,d.q,d.q,[[2,d.w],[2,d.p]]),o.wb(1073742336,i.k,i.k,[]),o.wb(1073742336,i.o,i.o,[]),o.wb(1073742336,b.p,b.p,[]),o.wb(1073742336,b.o,b.o,[]),o.wb(1073742336,b.h,b.h,[]),o.wb(1073742336,b.n,b.n,[]),o.wb(1073742336,b.f,b.f,[]),o.wb(1073742336,P.a,P.a,[]),o.wb(1073742336,e,e,[]),o.wb(1024,d.l,function(){return[[{path:"",component:t}]]},[])])})}}]);