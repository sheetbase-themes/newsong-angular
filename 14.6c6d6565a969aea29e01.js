(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{TbC0:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),u=t("pMnS"),s=t("Xqnl"),i=t("2MiI"),a=t("rm4x"),r=t("oBZk"),c=t("ZZ/e"),b=t("LsOU"),p=t("5PHu"),d=t("gIcY"),g=t("mrSG"),h=function(){function n(n,l,t,e,o,u){this.alertController=n,this.dataService=l,this.appDataService=t,this.appService=e,this.nav=o,this.player=u}return n.prototype.ngOnInit=function(){var n=this;this.appDataService.songs().subscribe(function(l){n.songs=l,setTimeout(function(){return n.askForRadio()},1e3)}),this.appDataService.bundles().subscribe(function(l){n.bundles=l}),this.appDataService.videos().subscribe(function(l){n.videos=l}),this.nav.setMeta()},n.prototype.sendMessage=function(n){return g.b(this,void 0,void 0,function(){return g.e(this,function(l){switch(l.label){case 0:return[4,this.dataService.addMessageExtra(n)];case 1:return l.sent(),[2]}})})},n.prototype.askForRadio=function(){return g.b(this,void 0,void 0,function(){var n=this;return g.e(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"Radio",message:"Play today radio now?",buttons:[{text:"Cancel"},{text:"Play radio",handler:function(){return n.playRadio()}}]})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})})},n.prototype.playRadio=function(){return this.player.play(this.songs,0,{$key:"__radio__",title:"My Radio!",author:"By Me",thumbnail:"https://img.icons8.com/dusk/320/000000/radio-tower.png"},"radio")},n}(),m=e.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{font-family:IBM Plex Sans,sans-serif;font-size:16px;color:#222428}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:IBM Plex Serif,serif}a[_ngcontent-%COMP%]{color:#3880ff;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}main[_ngcontent-%COMP%]{min-height:calc(100vh - 4rem - 65px - 127px)}@media (min-width:768px){main[_ngcontent-%COMP%]{margin-bottom:4rem}}"]],data:{}});function w(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-header",[],null,null,null,s.b,s.a)),e.ob(1,114688,null,0,i.a,[a.b,a.h],null,null),(n()(),e.pb(2,0,null,null,25,"ion-content",[],null,null,null,r.g,r.b)),e.ob(3,49152,[["homeContent",4]],0,c.s,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,23,"main",[],null,null,null,null,null)),(n()(),e.pb(5,0,null,null,2,"section",[["class","jumbotron"]],null,null,null,null,null)),(n()(),e.pb(6,0,null,null,1,"newsong-jumbotron",[["image","https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"],["tagline","Lorem ipsum dolat init!"],["title","New song"]],null,[[null,"doSongs"],[null,"doRadio"],[null,"doStore"]],function(n,l,t){var o=!0,u=n.component;return"doSongs"===l&&(o=!1!==u.nav.scrollTo(e.yb(n,3),e.yb(n,8))&&o),"doRadio"===l&&(o=!1!==u.playRadio()&&o),"doStore"===l&&(o=!1!==u.nav.navigate(["/store"])&&o),o},b.k,b.c)),e.ob(7,114688,null,0,p.u,[],{title:[0,"title"],tagline:[1,"tagline"],image:[2,"image"]},{doSongs:"doSongs",doRadio:"doRadio",doStore:"doStore"}),(n()(),e.pb(8,0,[["songsSection",1]],null,4,"section",[["class","songs"],["padding",""]],null,null,null,null,null)),(n()(),e.pb(9,0,null,null,1,"newsong-title",[["title","Songs"]],null,null,null,b.p,b.h)),e.ob(10,114688,null,0,p.E,[],{title:[0,"title"]},null),(n()(),e.pb(11,0,null,null,1,"newsong-songs",[],null,[[null,"play"]],function(n,l,t){var e=!0,o=n.component;return"play"===l&&(e=!1!==o.player.play(o.songs,t)&&e),e},b.m,b.e)),e.ob(12,114688,null,0,p.w,[p.j],{songs:[0,"songs"]},{play:"play"}),(n()(),e.pb(13,0,null,null,4,"section",[["class","bundles"],["padding",""]],null,null,null,null,null)),(n()(),e.pb(14,0,null,null,1,"newsong-title",[["title","Playlists"]],null,null,null,b.p,b.h)),e.ob(15,114688,null,0,p.E,[],{title:[0,"title"]},null),(n()(),e.pb(16,0,null,null,1,"newsong-bundles",[],null,[[null,"play"]],function(n,l,t){var e=!0;return"play"===l&&(e=!1!==n.component.player.play(t.meta.songs,0,t)&&e),e},b.n,b.f)),e.ob(17,114688,null,0,p.B,[p.e,p.j],{bundles:[0,"bundles"]},{play:"play"}),(n()(),e.pb(18,0,null,null,4,"section",[["class","videos"],["padding",""]],null,null,null,null,null)),(n()(),e.pb(19,0,null,null,1,"newsong-title",[["title","Videos"]],null,null,null,b.p,b.h)),e.ob(20,114688,null,0,p.E,[],{title:[0,"title"]},null),(n()(),e.pb(21,0,null,null,1,"newsong-videos",[],null,null,null,b.o,b.g)),e.ob(22,114688,null,0,p.D,[p.j],{videos:[0,"videos"]},null),(n()(),e.pb(23,0,null,null,4,"section",[["class","contact"],["padding",""]],null,null,null,null,null)),(n()(),e.pb(24,0,null,null,1,"newsong-title",[["title","Contact us"]],null,null,null,b.p,b.h)),e.ob(25,114688,null,0,p.E,[],{title:[0,"title"]},null),(n()(),e.pb(26,0,null,null,1,"newsong-contact",[],null,[[null,"sendMessage"]],function(n,l,t){var e=!0;return"sendMessage"===l&&(e=!1!==n.component.sendMessage(t)&&e),e},b.j,b.b)),e.ob(27,114688,null,0,p.s,[d.d,c.a,a.g],null,{sendMessage:"sendMessage"})],function(n,l){var t=l.component;n(l,1,0),n(l,7,0,"New song","Lorem ipsum dolat init!","https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"),n(l,10,0,"Songs"),n(l,12,0,t.songs),n(l,15,0,"Playlists"),n(l,17,0,t.bundles),n(l,20,0,"Videos"),n(l,22,0,t.videos),n(l,25,0,"Contact us"),n(l,27,0)},null)}function f(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,w,m)),e.ob(1,114688,null,0,h,[c.a,a.c,p.e,a.b,a.h,p.j],null,null)],function(n,l){n(l,1,0)},null)}var y=e.lb("app-home",h,f,{},{},[]),v=t("Ip0R"),M=t("ZYCi"),S=t("j1ZV");t.d(l,"HomePageModuleNgFactory",function(){return C});var C=e.mb(o,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[u.a,y]],[3,e.j],e.x]),e.wb(4608,v.n,v.m,[e.u,[2,v.u]]),e.wb(4608,d.s,d.s,[]),e.wb(4608,c.b,c.b,[e.z,e.g]),e.wb(4608,c.Db,c.Db,[c.b,e.j,e.q,v.d]),e.wb(4608,c.Gb,c.Gb,[c.b,e.j,e.q,v.d]),e.wb(4608,d.d,d.d,[]),e.wb(1073742336,v.b,v.b,[]),e.wb(1073742336,d.p,d.p,[]),e.wb(1073742336,d.h,d.h,[]),e.wb(1073742336,c.Bb,c.Bb,[]),e.wb(1073742336,M.q,M.q,[[2,M.w],[2,M.p]]),e.wb(1073742336,p.o,p.o,[]),e.wb(1073742336,p.g,p.g,[]),e.wb(1073742336,p.n,p.n,[]),e.wb(1073742336,p.q,p.q,[]),e.wb(1073742336,p.b,p.b,[]),e.wb(1073742336,d.n,d.n,[]),e.wb(1073742336,p.c,p.c,[]),e.wb(1073742336,p.f,p.f,[]),e.wb(1073742336,S.a,S.a,[]),e.wb(1073742336,o,o,[]),e.wb(1024,M.l,function(){return[[{path:"",component:h}]]},[])])})}}]);