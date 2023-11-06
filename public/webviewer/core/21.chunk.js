/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[21],{474:function(Ba,wa,r){r.r(wa);var oa=r(0),na=r(8),ma=r(2);Ba=r(48);var fa=r(23),ea=r(11);r=function(){function aa(){this.init()}aa.prototype.init=function(){this.o9=!1;this.af=this.Kl=this.connection=null;this.zs={};this.fa=this.lG=null};aa.prototype.hqa=function(x){for(var w=this,h=0;h<x.length;++h){var e=x[h];switch(e.at){case "create":this.zs[e.author]||(this.zs[e.author]=e.aName);this.xga(e);break;case "modify":this.fa.um(e.xfdf).then(function(a){w.fa.jb(a[0])});
break;case "delete":this.fa.um("<delete><id>"+e.aId+"</id></delete>")}}};aa.prototype.xga=function(x){var w=this;this.fa.um(x.xfdf).then(function(h){h=h[0];h.authorId=x.author;w.fa.jb(h);w.fa.trigger(na.c.UPDATE_ANNOTATION_PERMISSION,[h])})};aa.prototype.Zfa=function(x,w,h){this.Kl&&this.Kl(x,w,h)};aa.prototype.preloadAnnotations=function(x){this.addEventListener("webViewerServerAnnotationsEnabled",this.Zfa.bind(this,x,"add",{imported:!1}),{once:!0})};aa.prototype.initiateCollaboration=function(x,
w,h){var e=this;if(x){e.af=w;e.fa=h.la();h.addEventListener(na.f.DOCUMENT_UNLOADED,function(){e.disableCollaboration()});e.Iqa(x);var a=new XMLHttpRequest;a.addEventListener("load",function(){if(200===a.status&&0<a.responseText.length)try{var b=JSON.parse(a.responseText);e.connection=exports.Ta.qra(Object(fa.k)(e.af,"blackbox/"),"annot");e.lG=b.id;e.zs[b.id]=b.user_name;e.fa.FN(b.id);e.connection.oua(function(f){f.t&&f.t.startsWith("a_")&&f.data&&e.hqa(f.data)},function(){e.connection.send({t:"a_retrieve",
dId:x});e.trigger(aa.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,[e.zs[b.id],e.lG])},function(){e.disableCollaboration()})}catch(f){Object(ma.g)(f.message)}});a.open("GET",Object(fa.k)(this.af,"demo/SessionInfo.jsp"));a.withCredentials=!0;a.send();e.o9=!0;e.fa.O_(function(b){return e.zs[b.Author]||b.Author})}else Object(ma.g)("Document ID required for collaboration")};aa.prototype.disableCollaboration=function(){this.Kl&&(this.fa.removeEventListener(ea.a.Events.ANNOTATION_CHANGED,this.Kl),this.Kl=
null);this.connection&&this.connection.kq();this.fa&&this.fa.FN("Guest");this.init();this.trigger(aa.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED)};aa.prototype.Iqa=function(x){var w=this;this.Kl&&this.fa.removeEventListener(ea.a.Events.ANNOTATION_CHANGED,this.Kl);this.Kl=function(h,e,a){return Object(oa.b)(this,void 0,void 0,function(){var b,f,n,z,y,da,ia,ca,ba;return Object(oa.d)(this,function(ja){switch(ja.label){case 0:if(a.imported)return[2];b={t:"a_"+e,dId:x,annots:[]};return[4,w.fa.FJ()];case 1:f=
ja.ca();"delete"!==e&&(n=(new DOMParser).parseFromString(f,"text/xml"),z=new XMLSerializer);for(y=0;y<h.length;y++)da=h[y],ca=ia=void 0,"add"===e?(ia=n.querySelector('[name="'+da.Id+'"]'),ca=z.serializeToString(ia),ba=null,da.InReplyTo&&(ba=w.fa.tf(da.InReplyTo).authorId||"default"),b.annots.push({at:"create",aId:da.Id,author:w.lG,aName:w.zs[w.lG],parent:ba,xfdf:"<add>"+ca+"</add>"})):"modify"===e?(ia=n.querySelector('[name="'+da.Id+'"]'),ca=z.serializeToString(ia),b.annots.push({at:"modify",aId:da.Id,
xfdf:"<modify>"+ca+"</modify>"})):"delete"===e&&b.annots.push({at:"delete",aId:da.Id});0<b.annots.length&&w.connection.send(b);return[2]}})})}.bind(w);this.fa.addEventListener(ea.a.Events.ANNOTATION_CHANGED,this.Kl)};aa.Events={WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:"webViewerServerAnnotationsEnabled",WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:"webViewerServerAnnotationsDisabled"};return aa}();Object(Ba.a)(r);wa["default"]=r}}]);}).call(this || window)