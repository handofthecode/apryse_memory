/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{464:function(Ba,wa,r){r.r(wa);var oa=r(0),na=r(261);Ba=r(456);r(23);r=r(394);var ma=function(fa){function ea(aa,x){var w=fa.call(this,aa,x)||this;w.url=aa;w.range=x;w.status=na.a.NOT_STARTED;return w}Object(oa.c)(ea,fa);ea.prototype.start=function(){var aa=document.createElement("IFRAME");aa.setAttribute("src",this.url);document.documentElement.appendChild(aa);aa.parentNode.removeChild(aa);this.status=na.a.STARTED;this.sD()};
return ea}(Ba.ByteRangeRequest);Ba=function(fa){function ea(aa,x,w,h){aa=fa.call(this,aa,x,w,h)||this;aa.Ky=ma;return aa}Object(oa.c)(ea,fa);ea.prototype.vw=function(aa,x){return aa+"#"+x.start+"&"+(x.stop?x.stop:"")};return ea}(Ba["default"]);Object(r.a)(Ba);Object(r.b)(Ba);wa["default"]=Ba}}]);}).call(this || window)