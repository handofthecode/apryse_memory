/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[4],{495:function(Ba,wa,r){var oa=r(0);Ba=r(88);var na=r(50);r=function(ma){function fa(){return null!==ma&&ma.apply(this,arguments)||this}Object(oa.c)(fa,ma);fa.prototype.testSelection=function(ea,aa,x){return na.a.Il(ea,aa,x)};return fa}(Ba.a);wa.a=r},87:function(Ba,wa,r){function oa(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){var nb,xa,La,Xa,bb,mb,sb,db,rb,ub,xb,Gb,kb,tb,Db;return Object(Ha.d)(this,function(Ib){switch(Ib.label){case 0:return nb=
qb.yb,xa=qb.ZE,La=qb.$E,Xa=qb.hL,bb=qb.Aha,mb=qb.lha,sb=eb.getDocument(),db=[1],[4,Object(za.c)(xa,{extension:"pdf"})];case 1:return rb=Ib.ca(),ub=eb.la(),kb=(Gb=Ra.a).hka,[4,rb.NC()];case 2:return xb=kb.apply(Gb,[Ib.ca().xfdfString,nb]),tb=!0,[4,sb.Rf(rb,db,nb,tb)];case 3:return Ib.ca(),[4,sb.Fg([nb+1],tb)];case 4:return Ib.ca(),Db=ub.nb().filter(function(Sb){return Sb.CL()&&Sb.PageNumber===nb}),ub.Hf(Db,{force:!0,source:"contentEditTool"}),[4,ub.iL(xb)];case 5:return Ib.ca(),Ia||(eb.getDocument().aN(),
eb.$M(nb),eb.re()),aa(nb),mb||bb||pa(nb,La,Xa,bb),[2]}})})}function na(qb){if(qb)return ma(qb.contents);Object(Ea.g)("Unable to extract document content")}function ma(qb){qb=(new DOMParser).parseFromString(qb,"text/html").documentElement.querySelector("body");qb.querySelectorAll("p").forEach(function(nb){nb.querySelectorAll("span").forEach(function(Xa){var bb=Xa.getAttribute("style");bb=fa(bb,Xa.innerHTML);Xa.innerHTML=bb});var xa=nb.getAttribute("style"),La=nb.innerHTML.replaceAll("<br>","");nb.innerHTML=
fa(xa,La)});return qb.innerHTML.trim()}function fa(qb,nb){if(null===qb||void 0===qb?0:qb.includes("bold"))nb="<strong>"+nb+"</strong>";if(null===qb||void 0===qb?0:qb.includes("italic"))nb="<em>"+nb+"</em>";if((null===qb||void 0===qb?0:qb.includes("underline:1;"))||(null===qb||void 0===qb?0:qb.includes("text-decoration: underline")))nb="<u>"+nb+"</u>";return nb}function ea(qb){if(["STRONG","EM","U"].includes(qb.tagName)&&null!==qb.getAttribute("style")){var nb=document.createElement("span"),xa=qb.style.color;
xa=ca(xa);nb.setAttribute("style","color:"+xa);qb.removeAttribute("style");nb.innerHTML=qb.innerHTML;qb.innerHTML="";qb.appendChild(nb)}else"SPAN"===qb.tagName&&null!==qb.getAttribute("style")?(xa=qb.style.color,xa=ca(xa),qb.setAttribute("style","color:"+xa)):"A"===qb.tagName&&qb.removeAttribute("style")}function aa(qb){var nb=eb.la(),xa=nb.nb().filter(function(La){return La.Re()&&La.PageNumber===qb});nb.Hf(xa,{force:!0,source:"contentEditTool"})}function x(qb,nb){nb.forEach(function(xa){Va[qb]||
(Va[qb]=[]);Va[qb].find(function(La){return La.id===xa.id})||Va[qb].push(xa)})}function w(qb,nb){nb.forEach(function(xa){Pa[qb]||(Pa[qb]=[]);Pa[qb].find(function(La){return La.id===xa.id})||Pa[qb].push(xa)})}function h(qb,nb,xa,La){return Object(Ha.b)(void 0,void 0,void 0,function(){var Xa,bb,mb,sb,db,rb,ub,xb,Gb,kb,tb,Db,Ib,Sb,Qb,Zb,ya,dc;return Object(Ha.d)(this,function(kc){switch(kc.label){case 0:if(!qb)return[2];Xa=nb.replaceAll("<p><br></p>","");bb=e(Xa);bb=bb.replace(/<span style="color: var\(--text-color\);">(.*?)<\/span>/g,
"$1");bb=bb.replace(/<span class="ql-cursor">(.*?)<\/span>/g,"");mb=qb.gf.id;sb=qb.PageNumber;db=ab[sb];rb=db.galleys.find(function(ad){return ad.id===mb});ub=ma(rb.contents);xb=ia(sb,db,ub,bb,mb);if(""===xb)return[3,2];Gb=new TextEncoder;kb=Gb.encode(xb);tb=kb.buffer;Db=Object(Ka.c)()||"https://www.pdftron.com/webfonts/v2/";Ib=eb.getDocument();return[4,Ib.be([sb],void 0,!0)];case 1:return Sb=kc.ca(),Gb=new TextEncoder,Qb=Gb.encode(""),Zb=Qb.buffer,jb.postMessage({cmd:"importText",pdfFile:Sb,pageNumber:sb,
webFontURL:Db,galleyId:mb,importData:tb,tableData:Zb,isSearchReplace:xa,callbackMapId:La},[tb,Zb]),ya={},rb&&(dc=rb.galleyBox,ya={top:dc.top,left:dc.left,bottom:dc.bottom,right:dc.right}),Object(Sa.w)(ub,bb,ya),[3,3];case 2:Object(Ea.g)("Unable to generate import XML"),kc.label=3;case 3:return[2]}})})}function e(qb){var nb=new DOMParser,xa=nb.parseFromString(qb,"text/xml");xa.querySelector("parsererror")&&(xa=nb.parseFromString("<Root>"+qb+"</Root>","text/xml"));xa.querySelectorAll("a").forEach(function(La){var Xa=
La.childNodes[0];Array.from(La.querySelectorAll("*")).find(function(bb){return"u"===bb.tagName.toLowerCase()})||(La=document.createElement("u"),Xa.after(La),La.appendChild(Xa))});return(new XMLSerializer).serializeToString(xa)}function a(qb,nb,xa){return Object(Ha.b)(void 0,void 0,void 0,function(){var La,Xa,bb,mb;return Object(Ha.d)(this,function(sb){switch(sb.label){case 0:return aa(nb),Pa[nb]=[],Va[nb]=[],[4,qb.be([nb],void 0,!0)];case 1:return La=sb.ca(),Xa=new TextEncoder,bb=Xa.encode(""),mb=
bb.buffer,jb.postMessage({cmd:"exportFile",pageNumber:nb,performExport:xa,pdfFile:La,tableData:mb},[La,mb]),[2]}})})}function b(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){return Object(Ha.d)(this,function(){hb||(eb=qb,hb=new Promise(function(nb,xa){var La=window.Core.ContentEdit.getWorkerPath(),Xa=window.Core.ContentEdit.getResourcePath();jb=new Worker(La+"InfixServerModule.js");jb.onmessage=function(bb){ja(bb,nb,xa)};jb.postMessage({cmd:"isReady",resourcePath:Xa})}));return[2,hb]})})}
function f(qb,nb,xa,La){this.top=qb;this.left=nb;this.bottom=xa;this.right=La;this.topVal=function(){return Math.round(this.top)};this.bottomVal=function(){return Math.round(this.bottom)};this.leftVal=function(){return Math.round(this.left)};this.rightVal=function(){return Math.round(this.right)};this.height=function(){return Math.round(Math.abs(this.top-this.bottom))};this.width=function(){return Math.round(this.right-this.left)};this.US=function(Xa){return this.topVal()!==Xa.topVal()||this.leftVal()!==
Xa.leftVal()||this.bottomVal()!==Xa.bottomVal()||this.rightVal()!==Xa.rightVal()}}function n(qb,nb,xa,La,Xa){this.id=qb;this.pagenum=nb;this.galleysContents=xa;this.contents=La;this.galleyBox=Xa;Object(Sa.v)(Pa)}function z(qb,nb,xa,La){this.id=nb;this.type=qb;this.bbox=xa;this.pagenum=La}function y(qb,nb,xa,La,Xa){this.id=qb;this.pagecount=nb;this.pageBBox=xa;this.galleys=La;this.objects=Xa}function da(qb,nb){this.family=qb;this.variations=nb}function ia(qb,nb,xa,La,Xa){var bb=[],mb=[];(new DOMParser).parseFromString(La,
"text/html").documentElement.querySelectorAll("p").forEach(function(xb,Gb){bb[Gb]=xb.innerHTML;mb[Gb]={fontSize:xb.style.fontSize,fontFamily:xb.style.fontFamily,color:ca(xb.style.color)}});xa=(new DOMParser).parseFromString(xa,"text/html");var sb=null;xa.documentElement.querySelectorAll("p").forEach(function(xb,Gb){if(Gb<bb.length){var kb=(new DOMParser).parseFromString(bb[Gb],"text/html").documentElement.querySelector("body");kb.childNodes.forEach(function(Db){ea(Db)});xb.innerHTML=kb.innerHTML;
sb=xb.getAttribute("style");kb=mb[Gb].fontSize?mb[Gb].fontSize:xb.style.fontSize;var tb=mb[Gb].fontFamily?mb[Gb].fontFamily.replace(/\s+/g,"").replace(/['"]+/g,""):xb.style.fontFamily;Gb=mb[Gb].color?mb[Gb].color:null;sb=sb.replace(/(font:.*?;)/i,"font:normal normal "+kb+" "+tb+";");sb=sb.replace("Italic","");sb=sb.replace("underline:1;","underline:0;");sb=sb.replace("text-decoration: underline;","text-decoration: none;");Gb&&(sb=sb.replace(/(color:.*?;)/i,"color:"+Gb+";"));xb.setAttribute("style",
sb)}else xb.remove()});for(La=xa.documentElement.querySelectorAll("p").length;La<bb.length;La++){var db=document.createElement("p");db.setAttribute("id","0");var rb=(new DOMParser).parseFromString(bb[La],"text/html").documentElement.querySelector("body");rb.childNodes.forEach(function(xb){ea(xb)});db.innerHTML=rb.innerHTML;null!=sb&&db.setAttribute("style",sb);xa.documentElement.querySelector("body").appendChild(db)}xa=xa.documentElement.querySelector("body").innerHTML;var ub="";Pa[qb].forEach(function(xb){xb.id===
Xa&&(ub=xb)});if(""===ub)return"";nb="<DOC id='"+nb.id+"' pagecount='"+nb.pagecount+"'>";nb=nb+("<STORY galley_ids='"+Xa+"' pagenum='"+qb+"'><galleys>")+(ub.galleysContents+"</galleys>");ub.contents=xa;nb=nb+xa+"\n</STORY>";return nb+="</DOC>"}function ca(qb){return qb.startsWith("rgb(")?"#"+qb.replace(/^[^\d]+/,"").replace(/[^\d]+$/,"").split(",").map(function(nb){return("00"+parseInt(nb,10).toString(16)).slice(-2)}).join(""):qb}function ba(qb,nb,xa,La){var Xa=[],bb=eb.getDocument(),mb=null;nb.forEach(function(sb){if(sb instanceof
z){var db=bb.qo(qb,sb.bbox.leftVal(),sb.bbox.topVal());var rb=db.x;var ub=db.y;var xb=bb.qo(qb,sb.bbox.rightVal(),sb.bbox.bottomVal());db=xb.x;xb=xb.y}else if(sb instanceof n)db=bb.qo(qb,sb.galleyBox.leftVal(),sb.galleyBox.topVal()),rb=db.x,ub=db.y,xb=bb.qo(qb,sb.galleyBox.rightVal(),sb.galleyBox.bottomVal()),db=xb.x,xb=xb.y;else return;var Gb=new window.Core.Annotations.RectangleAnnotation,kb=Ga.a.OBJECT;sb instanceof n&&(kb=Ga.a.TEXT);Gb.Xma(sb,kb);Gb.PageNumber=sb.pagenum;Gb.X=rb;Gb.Y=ub;Gb.Width=
db-rb;Gb.Height=xb-ub;Gb.StrokeColor=new Ja.a("#3183C8");Gb.FillColor=new Ja.a(255,255,255,.01);Gb.Style="dash";Gb.Dashes="4,3";if(Ya||La)Gb.NoView=!0,Gb.Listable=!1;Gb.Hw();Gb.selectionModel=Na.a;Xa.push(Gb);"undefined"!==typeof xa&&xa===sb.id&&(mb=Gb)});nb=eb.la();nb.$g(Xa);!mb||Ya||La||nb.Yf(mb);nb.le(Xa)}function ja(qb,nb,xa){return Object(Ha.b)(this,void 0,void 0,function(){var La,Xa,bb,mb,sb,db,rb,ub,xb,Gb;return Object(Ha.d)(this,function(kb){switch(kb.label){case 0:La=qb.data;bb=La.cmd;switch(bb){case "isReady":return[3,
1];case "initialiseInfixServer":return[3,3];case "loadAvailableFonts":return[3,4];case "exportFile":return[3,5];case "insertNewTextBox":return[3,6];case "importText":return[3,7];case "transformObject":return[3,7];case "alignParagraph":return[3,7];case "deleteObject":return[3,8];case "insertImage":return[3,9]}return[3,10];case 1:return[4,Object(Qa.b)()];case 2:return mb=kb.ca(),jb.postMessage({cmd:"initialiseInfixServer",l:mb}),[3,10];case 3:return(sb=la(La.resultsXML))?(nb(),db=Object(Ka.c)()||"https://www.pdftron.com/webfonts/v2/",
jb.postMessage({cmd:"loadAvailableFonts",webFontURL:db})):xa("License key does not have content edit permission"),[3,10];case 4:return Da(La.resultsXML),[3,10];case 5:return La.exportPerformed?qa(La.pageNumber,La.exportXML,La.objectXML,La.resultsXML):(Xa=ab[La.pageNumber],ka(La.pageNumber,Xa)),ob.resolve(),zb&&zb[La.pageNumber]&&zb[La.pageNumber].resolve(),[3,10];case 6:return ha(La.pageNumber,La.exportXML,La.contentHTML),Xa=ab[La.pageNumber],oa({yb:La.pageNumber,ZE:La.pdfBuffer,$E:Xa,hL:La.id}),
[3,10];case 7:Xa=ab[La.pageNumber];Aa(La.pageNumber,La.resultsXML);oa({yb:La.pageNumber,ZE:La.pdfBuffer,$E:Xa,hL:La.id,Aha:La.isSearchReplace});rb=La.isSearchReplace;ub=La.callbackMapId;if(rb&&ub&&Nb[ub])Nb[ub]();return[3,10];case 8:return Xa=ab[La.pageNumber],Aa(La.pageNumber,La.resultsXML),Xa.galleys=Xa.galleys.filter(function(tb){return tb.id!==La.id}),Xa.objects=Xa.objects.filter(function(tb){return tb.id!==La.id}),xb={yb:La.pageNumber,ZE:La.pdfBuffer,$E:Xa},oa(xb),[3,10];case 9:return Xa=ab[La.pageNumber],
Aa(La.pageNumber,La.resultsXML),Gb={yb:La.pageNumber,ZE:La.pdfBuffer,$E:Xa,hL:La.isText,lha:!0},oa(Gb),[3,10];case 10:return[2]}})})}function la(qb){qb=new Uint8Array(qb);var nb=(new TextDecoder("utf-8")).decode(qb);qb=!1;nb=(new DOMParser).parseFromString(nb,"text/xml").getElementsByTagName("LicenseCheck");null!==nb&&0<nb.length&&(nb=nb[0].getElementsByTagName("Status")[0].innerHTML,"error"!==nb&&"ok"===nb&&(qb=!0));return qb}function ha(qb,nb){nb=(new TextDecoder("utf-8")).decode(nb);nb=(new DOMParser).parseFromString(nb,
"text/xml").getElementsByTagName("STORY");var xa=Array.prototype.slice.call(nb)[0];nb=xa.getAttribute("galley_ids");var La=Array.prototype.slice.call(xa.getElementsByTagName("g"))[0],Xa=La.getAttribute("bbox").split(" ");Xa=new f(parseFloat(Xa[0]),parseFloat(Xa[1]),parseFloat(Xa[2]),parseFloat(Xa[3]));La=La.innerHTML;var bb=Array.prototype.slice.call(xa.getElementsByTagName("galleys"))[0];bb.parentNode.removeChild(bb);xa=ua(xa.innerHTML).trim();nb=new n(nb,qb,La,xa,Xa);xa=ab[qb];Xa=xa.galleys;Xa.push(nb);
xa.galleys=Xa;ab[qb]=xa;ka(qb,xa)}function ka(qb,nb){w(qb,nb.galleys);x(qb,nb.objects);aa(qb);pa(qb,nb)}function pa(qb,nb,xa,La){ba(qb,nb.objects,xa,La);ba(qb,nb.galleys,xa,La)}function qa(qb,nb,xa,La){var Xa=new Uint8Array(nb),bb=new TextDecoder("utf-8");nb=bb.decode(Xa);Xa=new Uint8Array(xa);xa=bb.decode(Xa);Xa=new Uint8Array(La);La=bb.decode(Xa);ab[qb]=va(qb,nb,xa,La);ka(qb,ab[qb])}function ra(qb,nb){qb=parseFloat(qb);return isNaN(nb)||nb<qb?qb:nb}function va(qb,nb,xa,La){var Xa;var bb=new DOMParser;
La=bb.parseFromString(La,"text/xml");Array.prototype.slice.call(La.getElementsByTagName("BBox")).forEach(function(db){if("CropBox"===db.getAttribute("Name")){var rb=parseFloat(db.getElementsByTagName("Top").item(0).innerHTML),ub=parseFloat(db.getElementsByTagName("Bottom").item(0).innerHTML),xb=parseFloat(db.getElementsByTagName("Left").item(0).innerHTML);db=parseFloat(db.getElementsByTagName("Right").item(0).innerHTML);Xa=new f(rb,xb,ub,db)}});bb=new DOMParser;La=bb.parseFromString(nb,"text/xml");
var mb=[];Array.prototype.slice.call(La.getElementsByTagName("STORY")).forEach(function(db){var rb=db.getAttribute("galley_ids"),ub=Array.prototype.slice.call(db.getElementsByTagName("g"))[0],xb=ub.getAttribute("bbox").split(" ");xb=new f(parseFloat(xb[0]),parseFloat(xb[1]),parseFloat(xb[2]),parseFloat(xb[3]));ub=ub.innerHTML;var Gb=Array.prototype.slice.call(db.getElementsByTagName("galleys"))[0];Gb.parentNode.removeChild(Gb);db=ua(db.innerHTML).trim();rb=new n(rb,qb,ub,db,xb);mb.push(rb)});bb=new DOMParser;
var sb=[];nb=bb.parseFromString(xa,"text/xml").getElementsByTagName("Object");Array.prototype.slice.call(nb).forEach(function(db){var rb=db.getAttribute("Type"),ub=db.getAttribute("OID");db=Array.prototype.slice.call(db.getElementsByTagName("Point"));var xb=Number.NaN,Gb=Number.NaN,kb=Number.NaN,tb=Number.NaN;db.forEach(function(Db){var Ib=Db.getAttribute("Name");"TL"===Ib?(xb=ra(Db.getAttribute("Y"),xb),kb=ra(Db.getAttribute("X"),kb)):"TR"===Ib?(xb=ra(Db.getAttribute("Y"),xb),tb=ra(Db.getAttribute("X"),
tb)):"BR"===Ib?(Gb=ra(Db.getAttribute("Y"),Gb),tb=ra(Db.getAttribute("X"),tb)):"BL"===Ib&&(Gb=ra(Db.getAttribute("Y"),Gb),kb=ra(Db.getAttribute("X"),kb))});db=new f(xb,kb,Gb,tb);rb=new z(rb,ub,db,qb);sb.push(rb)});nb=Array.prototype.slice.call(La.getElementsByTagName("DOC"))[0].getAttribute("id");return new y(nb,1,Xa,mb,sb)}function ua(qb){return(new DOMParser).parseFromString(qb,"text/html").documentElement.querySelector("body").innerHTML}function Aa(qb,nb){var xa;nb=(new TextDecoder("utf-8")).decode(nb);
var La=(new DOMParser).parseFromString(nb,"text/xml");nb=La.getElementsByTagName("Galley").item(0);if(null!=nb){var Xa=nb.getAttribute("id");nb=La.getElementsByTagName("BBox");nb=Array.prototype.slice.call(nb);nb.forEach(function(sb){var db=sb.getElementsByTagName("Top"),rb=parseFloat(db.item(0).innerHTML);db=sb.getElementsByTagName("Left");var ub=parseFloat(db.item(0).innerHTML);db=sb.getElementsByTagName("Bottom");var xb=parseFloat(db.item(0).innerHTML);db=sb.getElementsByTagName("Right");sb=parseFloat(db.item(0).innerHTML);
xa=new f(rb,ub,xb,sb)});Pa[qb].forEach(function(sb){sb.id===Xa&&!0===xa.US(sb.galleyBox)&&(sb.galleyBox=xa)})}nb=La.getElementsByTagName("Object").item(0);if(null!=nb){var bb=nb.getAttribute("OID");nb=La.getElementsByTagName("BBox");nb=Array.prototype.slice.call(nb);nb.forEach(function(sb){var db=sb.getElementsByTagName("Top"),rb=parseFloat(db.item(0).innerHTML);db=sb.getElementsByTagName("Left");var ub=parseFloat(db.item(0).innerHTML);db=sb.getElementsByTagName("Bottom");var xb=parseFloat(db.item(0).innerHTML);
db=sb.getElementsByTagName("Right");sb=parseFloat(db.item(0).innerHTML);xa=new f(rb,ub,xb,sb)});Va[qb].forEach(function(sb){sb.id===bb&&!0===xa.US(sb.bbox)&&(sb.bbox=xa)})}nb=La.getElementsByTagName("NewParas").item(0);if(null!=nb){var mb=nb.getAttribute("id");Pa[qb].forEach(function(sb){if(sb.id===mb){var db="<Contents>"+sb.contents;db+="</Contents>";var rb=Array.prototype.slice.call(La.getElementsByTagName("NewPara"));db=(new DOMParser).parseFromString(db,"text/xml");var ub=Array.prototype.slice.call(db.getElementsByTagName("p"));
rb.forEach(function(xb){var Gb=parseFloat(xb.innerHTML),kb=!1;ub.forEach(function(tb){var Db=tb.getAttribute("id");!1===kb&&"0"===Db&&(tb.setAttribute("id",Gb),kb=!0)})});sb.contents=db.getElementsByTagName("Contents").item(0).innerHTML}})}}function ta(qb){return{regex:0!==(qb&cb.f.sv),wildcard:0!==(qb&cb.f.Nr),wholeWord:0!==(qb&cb.f.vv),caseSensitive:0!==(qb&cb.f.Cr)}}function Da(qb){qb=new Uint8Array(qb);qb=(new TextDecoder("utf-8")).decode(qb);qb=(new DOMParser).parseFromString(qb,"text/xml").getElementsByTagName("Font");
var nb={};Array.prototype.slice.call(qb).forEach(function(xa){var La=xa.getAttribute("Family");La in nb||(nb[La]={});var Xa=[];Array.prototype.slice.call(xa.getElementsByTagName("Variation")).forEach(function(bb){bb=bb.innerHTML;Xa.push(bb);if(bb.includes("Regular")||bb===La.replace(/\s+/g,""))nb[La].hasRegular=!0;bb.includes("Bold")&&(nb[La].hasBold=!0);bb.includes("Italic")&&(nb[La].hasItalic=!0)});xa=new da(La,Xa);Ab.push(xa)});Kb=Object.keys(nb).filter(function(xa){return nb[xa].hasRegular&&nb[xa].hasBold&&
nb[xa].hasItalic})}r.r(wa);var Ha=r(0),za=r(54),Ja=r(7),Na=r(495),Ka=r(39),Qa=r(76),Ea=r(2),Ga=r(172),Sa=r(55),Ra=r(6),Wa=r(141),cb=r(25),Ua=r(8),pb=r(23),jb=null,hb=null,Ya=!1,Ia=!1,Pa={},Va={},ab={},eb,ob=window.createPromiseCapability(),zb=[],Ab=[],Kb=[],Nb={};wa["default"]={dka:b,fka:a,A$:function(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){var nb,xa,La,Xa,bb,mb,sb,db;return Object(Ha.d)(this,function(rb){switch(rb.label){case 0:return nb=qb.id,xa=qb.isText,La=qb.pageNumber,Xa=eb.getDocument(),
[4,Xa.be([La],void 0,!0)];case 1:return bb=rb.ca(),mb=new TextEncoder,sb=mb.encode(""),db=sb.buffer,jb.postMessage({cmd:"deleteObject",pdfFile:bb,pageNumber:La,objectID:nb,isText:xa,tableData:db},[db]),[2]}})})},Vpa:function(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){var nb,xa,La,Xa,bb,mb,sb,db,rb,ub,xb,Gb,kb;return Object(Ha.d)(this,function(tb){switch(tb.label){case 0:return nb=qb.id,xa=qb.position,La=xa.top,Xa=xa.left,bb=xa.bottom,mb=xa.right,sb=qb.isText,db=qb.pageNumber,rb=eb.getDocument(),
[4,rb.be([db],void 0,!0)];case 1:return ub=tb.ca(),xb=new TextEncoder,Gb=xb.encode(""),kb=Gb.buffer,jb.postMessage({cmd:"transformObject",pdfFile:ub,pageNumber:db,objectID:nb,isText:sb,topVal:La,leftVal:Xa,bottomVal:bb,rightVal:mb,tableData:kb},[kb]),[2]}})})},m7:function(qb,nb){return Object(Ha.b)(void 0,void 0,void 0,function(){var xa,La,Xa,bb,mb,sb,db,rb,ub,xb,Gb,kb,tb,Db,Ib;return Object(Ha.d)(this,function(Sb){switch(Sb.label){case 0:return xa="<DOC><STORY><galleys></galleys>",La=[],Xa=(new DOMParser).parseFromString(nb,
"text/html"),Xa.documentElement.querySelectorAll("p").forEach(function(Qb,Zb){La[Zb]=Qb.innerHTML}),La.forEach(function(Qb,Zb){Qb=(new DOMParser).parseFromString(La[Zb],"text/html").documentElement.querySelector("body");Qb.childNodes.forEach(function(ya){ea(ya)});xa+="<p>"+Qb.innerHTML+"</p>"}),xa+="</STORY></DOC>",bb=qb.pageNumber,mb=eb.getDocument(),sb=qb.position,db=sb.top,rb=sb.left,ub=sb.bottom,xb=sb.right,Gb=qb.defaultText,kb=qb.font,tb=qb.fontSize,Db=qb.textColor,[4,mb.be([bb],void 0,!0)];
case 1:return Ib=Sb.ca(),jb.postMessage({cmd:"insertNewTextBox",pdfFile:Ib,pageNumber:bb,topVal:db,leftVal:rb,bottomVal:ub,rightVal:xb,defaultText:Gb,font:kb,fontSize:tb,textColor:Db,importData:xa,content:nb}),[2]}})})},nqa:h,Zda:na,qma:function(qb){return Object(Ha.b)(this,void 0,void 0,function(){var nb,xa,La,Xa,bb,mb,sb,db,rb,ub,xb,Gb,kb,tb,Db,Ib,Sb,Qb,Zb,ya,dc,kc,ad=this;return Object(Ha.d)(this,function(Uc){switch(Uc.label){case 0:nb=qb.replaceWith;xa=qb.documentViewer;La=qb.search;Xa=qb.searchResults;
if(xa){if(!Xa&&!La)throw Error('The "searchResults" parameter is missing in the options');if(void 0===nb)throw Error('The "replaceWith" parameter should not be undefined');}else throw Error('The "documentViewer" parameter is missing in the options');bb=1===Xa.length;La?(mb=La.N8,sb=La.Lqa):(db=ta(xa.eK()),mb=db.N8,sb=db.Lqa);rb=null;ub=[];if(bb)rb=Xa[0],ub=[rb.pageNum];else try{ub=Object.keys(Xa.reduce(function(wc,Mc){wc[Mc.pageNum]=Mc.pageNum;return wc},{})).map(function(wc){return Number(wc)})}catch(wc){Object(Ea.i)(wc)}xb=
0;if(rb)for(Gb=xa.uk(),kb=-1,tb=0,Db=Gb.length;tb<Db&&(Ib=Gb[tb],Ib.pageNum===kb?xb++:(kb=Ib.pageNum,xb=0),!Object(Wa.a)(Ib,rb));tb++);Sb=Xa[0].resultStr;Qb=mb?"mg":"mgi";Zb=sb?"\\b("+Sb+")\\b":"("+Sb+")";ya=new RegExp("(?<!</?[^>]*|&[^;]*)"+Zb,Qb);ob=window.createPromiseCapability();return hb?[3,2]:[4,b(xa)];case 1:Uc.ca(),Uc.label=2;case 2:return Ya=!0,Sa.a.trigger(Ua.e.SEARCH_AND_REPLACE_STARTED),dc=0,kc=ub.map(function(wc){return Object(Ha.b)(ad,void 0,void 0,function(){var Mc,Ec=this;return Object(Ha.d)(this,
function(){Mc=new Promise(function(bd,me){return Object(Ha.b)(Ec,void 0,void 0,function(){var lc=this;return Object(Ha.d)(this,function(jc){switch(jc.label){case 0:return zb[wc]=window.createPromiseCapability(),[4,a(xa.getDocument(),wc,!0)];case 1:return jc.ca(),zb[wc].promise.then(function(){return Object(Ha.b)(lc,void 0,void 0,function(){function le(ud,nd){return Object(Ha.b)(this,void 0,void 0,function(){var dd,Kd;return Object(Ha.d)(this,function(Bb){switch(Bb.label){case 0:dd=Object(pb.f)(),
Nb[dd]=function(){delete Nb[dd];bd(!0);Sa.a.trigger(Ua.e.SEARCH_AND_REPLACE_TEXT_REPLACED)},Bb.label=1;case 1:return Bb.fg.push([1,3,,4]),[4,h(ud,nd,!0,dd)];case 2:return Bb.ca(),[3,4];case 3:return Kd=Bb.ca(),Object(Ea.i)(Kd),me(Kd),[3,4];case 4:return[2]}})})}var we,Fd,Od,Pd,pc,ae,md,Qd,cd,yc,Rd,ne,Sd,Gd,be,Td,Nd;return Object(Ha.d)(this,function(){we=eb.la();Fd=we.nb().filter(function(ud){return ud.PageNumber===wc}).filter(function(ud){return ud.Re()}).concat();Od=[];pc=Pd=0;for(ae=Fd.length;pc<
ae;pc++){md=Fd[pc];Qd=md.gf;cd=na(Qd);yc=[];try{for(Rd=void 0;null!==(Rd=ya.exec(cd));)yc.push(Rd),Od.push(Xa[dc]),dc++}catch(ud){Object(Ea.i)(ud)}if(yc.length)if(Pd+=yc.length,bb&&Pd>xb){ne=Math.abs(Pd-yc.length-xb);Sd=yc[ne].index;Gd=cd.substr(0,Sd);be=nb;Td=cd.substr(Sd+Sb.length,cd.length);Nd=""+Gd+be+Td;Sa.a.trigger(Ua.e.SEARCH_AND_REPLACE_TEXT_FOUND,[[rb]]);le(md,Nd);break}else bb||(Ia=!0,Nd=cd.replace(ya,nb),Sa.a.trigger(Ua.e.SEARCH_AND_REPLACE_TEXT_FOUND,[Od]),le(md,Nd))}return[2]})})}).catch(me),
[2]}})})});return[2,Mc]})})}),[2,Promise.all(kc).then(function(){bb&&rb?setTimeout(function(){var Ec=[];xa.yz(Xa[0].resultStr,xa.eK(),{startPage:ub[0],endPage:ub[0],fullSearch:!0,onDocumentEnd:function(){Ia=Ya=!1;Sa.a.trigger(Ua.e.SEARCH_AND_REPLACE_ENDED);xa.KO(ub[0]-1,Ec)},onResult:function(bd){bd.resultCode===cb.e.mn&&Ec.push(bd)}})},200):(xa.rT(),xa.Pm(),xa.re(),Ia=Ya=!1,Sa.a.trigger(Ua.e.SEARCH_AND_REPLACE_ENDED));var wc=eb.la(),Mc=wc.nb().filter(function(Ec){return Ec.Re()});wc.Hf(Mc,{force:!0,
source:"contentEditTool"})})]}})})},Yma:function(qb,nb){var xa=ma(qb.gf.contents);xa=(new DOMParser).parseFromString(xa,"text/html").documentElement.querySelector("body");var La=xa.querySelectorAll("p"),Xa=new XMLSerializer;La.forEach(function(bb){bb.style.fontFamily=nb});xa=Xa.serializeToString(xa);h(qb,xa)},Zma:function(qb,nb){var xa=ma(qb.gf.contents);xa=(new DOMParser).parseFromString(xa,"text/html").documentElement.querySelector("body");var La=xa.querySelectorAll("p"),Xa=new XMLSerializer;La.forEach(function(bb){bb.style.fontSize=
nb});xa=Xa.serializeToString(xa);h(qb,xa)},y7:function(qb,nb){return Object(Ha.b)(void 0,void 0,void 0,function(){var xa,La,Xa,bb,mb,sb,db;return Object(Ha.d)(this,function(rb){switch(rb.label){case 0:return xa=qb.gf.id,La=qb.PageNumber,Xa=eb.getDocument(),[4,Xa.be([La],void 0,!0)];case 1:return bb=rb.ca(),mb=new TextEncoder,sb=mb.encode(""),db=sb.buffer,jb.postMessage({cmd:"AlignParaText",pdfFile:bb,pageNumber:La,galleyID:xa,alignment:nb,topVal1:"",leftVal1:"",bottomVal1:"",rightVal1:"",topVal2:"",
leftVal2:"",bottomVal2:"",rightVal2:"",tableData:db},[db]),[2]}})})},o8:function(qb){var nb=ma(qb.gf.contents);nb=(new DOMParser).parseFromString(nb,"text/html").documentElement.querySelector("body");var xa=nb.querySelectorAll("p"),La=new XMLSerializer,Xa="bold"===xa[0].style.fontWeight,bb=La.serializeToString(xa[0]).includes("<strong>");xa.forEach(function(mb){if(Xa||bb){mb.style.fontWeight="normal";var sb=La.serializeToString(mb).replace(/<strong>/g,"");sb=sb.replace(/<\/strong>/g,"");sb=(new DOMParser).parseFromString(sb,
"text/html").documentElement.querySelector("p");mb.parentElement.replaceChild(sb,mb)}else mb.style.fontWeight="bold",mb.innerHTML="<strong>"+mb.innerHTML.trim()+"</strong>"});nb=La.serializeToString(nb);h(qb,nb)},Lha:function(qb){var nb=ma(qb.gf.contents);nb=(new DOMParser).parseFromString(nb,"text/html").documentElement.querySelector("body");var xa=nb.querySelectorAll("p"),La=new XMLSerializer,Xa="italic"===xa[0].style.fontStyle,bb=La.serializeToString(xa[0]).includes("<em>");xa.forEach(function(mb){if(Xa||
bb){mb.style.fontStyle="normal";mb.style.font.includes("Italic")&&(mb.style.font=mb.style.font.replace("Italic",""));var sb=La.serializeToString(mb).replace(/<em>/g,"");sb=sb.replace(/<\/em>/g,"");sb=(new DOMParser).parseFromString(sb,"text/html").documentElement.querySelector("p");mb.parentElement.replaceChild(sb,mb)}else mb.style.fontStyle="italic",mb.innerHTML="<em>"+mb.innerHTML.trim()+"</em>"});nb=La.serializeToString(nb);h(qb,nb)},aqa:function(qb){var nb=ma(qb.gf.contents);nb=(new DOMParser).parseFromString(nb,
"text/html").documentElement.querySelector("body");var xa=nb.querySelectorAll("p"),La=new XMLSerializer,Xa=xa[0].style.textDecoration.includes("underline")||xa[0].style.textDecoration.includes("word"),bb=La.serializeToString(xa[0]).includes("<u>");xa.forEach(function(mb){if(Xa||bb){mb.style.textDecoration=mb.style.textDecoration.replace("underline","");var sb=La.serializeToString(mb).replace(/<u>/g,"");sb=sb.replace(/<\/u>/g,"");sb=(new DOMParser).parseFromString(sb,"text/html").documentElement.querySelector("p");
mb.parentElement.replaceChild(sb,mb)}else mb.style.textDecoration.includes("none")?mb.style.textDecoration=mb.style.textDecoration.replace("none","underline"):mb.style.textDecoration+=" underline",mb.innerHTML="<u>"+mb.innerHTML.trim()+"</u>"});nb=La.serializeToString(nb);h(qb,nb)},Moa:function(qb,nb){var xa=ma(qb.gf.contents);xa=(new DOMParser).parseFromString(xa,"text/html").documentElement.querySelector("body");var La=xa.querySelectorAll("p"),Xa=new XMLSerializer;La.forEach(function(bb){bb.style.color=
nb});xa.querySelectorAll("span").forEach(function(bb){bb.setAttribute("style","color:"+nb)});xa=Xa.serializeToString(xa);h(qb,xa)},Mda:function(){return Kb},k7:function(qb){return Object(Ha.b)(void 0,void 0,void 0,function(){var nb,xa,La,Xa,bb,mb,sb,db,rb,ub;return Object(Ha.d)(this,function(xb){switch(xb.label){case 0:return nb=qb.pageNumber,xa=qb.newImage,La=qb.scaleType,Xa=qb.position,bb=Xa.top,mb=Xa.left,sb=Xa.bottom,db=Xa.right,rb=eb.getDocument(),[4,rb.be([nb],void 0,!0)];case 1:return ub=xb.ca(),
jb.postMessage({cmd:"insertImage",pdfFile:ub,pageNumber:nb,newImage:xa,scaleType:La,topVal:bb,leftVal:mb,bottomVal:sb,rightVal:db},[]),[2]}})})}}}}]);}).call(this || window)
