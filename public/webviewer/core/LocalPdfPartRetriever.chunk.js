/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[9],{459:function(Ba,wa,r){r.r(wa);var oa=r(0);Ba=r(48);var na=r(394),ma=r(223),fa=r(20),ea=window;r=function(){function aa(x){var w=this;this.iha=function(h){return h&&("image"===h.type.split("/")[0].toLowerCase()||h.name&&!!h.name.match(/.(jpg|jpeg|png|gif)$/i))};this.file=x;this.wha=new Promise(function(h){return Object(oa.b)(w,void 0,void 0,function(){var e;return Object(oa.d)(this,function(a){switch(a.label){case 0:return this.iha(this.file)?
[4,Object(ma.b)(x)]:[3,2];case 1:e=a.ca(),this.file=fa.q?new Blob([e],{type:x.type}):new File([e],null===x||void 0===x?void 0:x.name,{type:x.type}),a.label=2;case 2:return h(!0),[2]}})})})}aa.prototype.getFileData=function(x){var w=this,h=new FileReader;h.onload=function(e){w.trigger(aa.Events.DOCUMENT_LOADING_PROGRESS,[e.loaded,e.loaded]);x(new Uint8Array(e.target.result))};h.onprogress=function(e){e.lengthComputable&&w.trigger(aa.Events.DOCUMENT_LOADING_PROGRESS,[e.loaded,0<e.total?e.total:0])};
h.readAsArrayBuffer(this.file)};aa.prototype.getFile=function(){return Object(oa.b)(this,void 0,Promise,function(){return Object(oa.d)(this,function(x){switch(x.label){case 0:return[4,this.wha];case 1:return x.ca(),ea.utils.isJSWorker?[2,this.file.path]:[2,this.file]}})})};aa.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress"};return aa}();Object(Ba.a)(r);Object(na.a)(r);Object(na.b)(r);wa["default"]=r}}]);}).call(this || window)
