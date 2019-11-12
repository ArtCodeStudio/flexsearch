/**!
 * FlexSearch.js v0.7.0
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function(){'use strict';Object.assign||(Object.assign=function(){for(var a=arguments,b=a.length,c=a[0],f=1,d,g,e;f<b;f++){d=a[f];g=Object.keys(d);e=g.length;for(var h=0,k;h<e;h++)k=g[h],c[k]=d[k]}return c});window.requestAnimationFrame||(window.requestAnimationFrame=window.setTimeout);window.cancelAnimationFrame||(window.cancelAnimationFrame=window.clearTimeout);window.Promise||(window.Promise=function(){function a(b){this.a=null;var c=this;b(function(f){c.a&&(c.a(f),c.a=null)})}a.prototype.then=function(b){this.a=b};return a}());function q(a){return"string"===typeof a}function x(a){return a.constructor===Array}function z(a){return"object"===typeof a}function A(a){for(var b=Array(a),c=0;c<a;c++)b[c]=B();return b}function B(){return Object.create(null)}function F(a,b){for(var c=0,f=b.length;c<f&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a}function H(a){return new RegExp(a,"g")}function J(a){for(var b="",c="",f=0,d=a.length,g=void 0;f<d;f++)(g=a[f])!==c&&(b+=c=g);return b}
function K(a,b,c,f){if(b&&(c&&b&&(b=F(b,c)),b&&a.l&&(b=F(b,a.l)),a.m&&1<b.length&&(b=F(b,a.m)),b&&(f||""===f)&&(b=b.split(f),a.filter))){a=a.filter;c=b.length;f=[];for(var d=0,g=0;d<c;d++){var e=b[d];e&&!a[e]&&(f[g++]=e)}b=f}return b};var N={memory:{encode:"extra",f:"strict",threshold:0,c:1},speed:{encode:"icase",f:"strict",threshold:1,c:3,depth:2},match:{encode:"extra",f:"full",threshold:1,c:3},score:{encode:"extra",f:"strict",threshold:1,c:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,c:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,c:9,depth:1}};var ba={encode:aa,b:!1},ca=/[\W_]+/;function aa(a){return K(this,a.toLowerCase(),!1,ca)};var da={encode:aa,tokenize:"strict",cache:!1,async:!1,worker:!1,rtl:!1,doc:!1,resolution:9,threshold:0,depth:0},ea=0,O={},P={};function Q(a){if(!(this instanceof Q))return new Q(a);var b=a&&a.id;this.id=b||0===b?b:ea++;this.init(a);fa(this,"index",function(){return Object.keys(this.g)});fa(this,"length",function(){return this.index.length})}Q.registerCharset=function(a,b){P[a]=b;return Q};Q.registerLanguage=function(a,b){P[a]=b;return Q};
Q.prototype.init=function(a){var b;if(q(a))a=N[a];else if(b=a.preset)a=Object.assign({},N[b],a);this.encode||(a?a=Object.assign({},da,a):a=da);if(a){this.async=a.async;var c=a.charset,f=a.lang;this.o=(q(c)?P[c].f:c&&c.f)||a.tokenize;this.b=q(b=a.rtl||c)?P[b].b:c&&c.b||b;this.threshold=a.threshold;this.c=(b=a.resolution)<=this.threshold?this.threshold+1:b;this.depth="strict"===this.o&&a.depth||0;this.encode=q(b=a.encode||c)?P[-1===b.indexOf(":")?b+":default":b].encode:c&&c.encode||b;this.l=(b=a.matcher||
f)&&ha(q(b)?O[b].l:f&&f.l||b,!1);if(c=b=a.filter||f){c=q(b)?O[b].filter:f&&f.filter||b;var d=B();for(var g=0,e=c.length;g<e;g++)d[c[g]]=1;c=d}this.filter=c;this.m=(b=a.stemmer||f)&&ha(q(b)?O[b].m:f&&f.m||b,!0);(this.a=d=(b=a.doc)&&ia(b))&&(a.doc=null)}this.j=A(this.c-(this.threshold||0));this.h=B();this.g={};if(d){this.i=B();b=d.index={};f=d.keys=[];c=d.field;g=d.store;x(d.id)||(d.id=d.id.split(":"));if(g){e=B();if(q(g))e[g]=1;else if(x(g))for(var h=0;h<g.length;h++)e[g[h]]=1;else z(g)&&(e=g);d.store=
e}if(c){if(!x(c))if(z(c)){var k=c;d.field=c=Object.keys(c)}else d.field=c=[c];for(d=0;d<c.length;d++)g=c[d],x(g)||(k&&(a=k[g]),f[d]=g,c[d]=g.split(":")),b[g]=new Q(a)}}return this};function ia(a){var b=B(),c;for(c in a)if(a.hasOwnProperty(c)){var f=a[c];b[c]=x(f)?f.slice(0):z(f)?ia(f):f}return b}
Q.prototype.add=function(a,b,c,f,d){if(this.a&&z(a))return S(this,"add",a,b);if(b&&q(b)&&(a||0===a)){if(this.g[a]&&!f)return this.update(a,b);if(!d){if(this.async){var g=this;d=new Promise(function(C){setTimeout(function(){g.add(a,b,null,f,!0);g=null;C()})});if(c)d.then(c);else return d;return this}if(c)return this.add(a,b,null,f,!0),c(),this}b=this.encode(b);if(!b.length)return this;c=b;d=B();d._ctx=B();for(var e=c.length,h=this.threshold,k=this.depth,p=this.c,n=this.j,m=this.b,l=0;l<e;l++){var r=
c[l];if(r){var v=r.length,w=(m?l+1:e-l)/e,t="";switch(this.o){case "reverse":case "both":for(var u=v;--u;)t=r[u]+t,T(n,d,t,a,m?1:(v-u)/v,w,h,p-1);t="";case "forward":for(u=0;u<v;u++)t+=r[u],T(n,d,t,a,m?(u+1)/v:1,w,h,p-1);break;case "full":for(u=0;u<v;u++)for(var M=(m?u+1:v-u)/v,I=v;I>u;I--)t=r.substring(u,I),T(n,d,t,a,M,w,h,p-1);break;default:if(v=T(n,d,r,a,1,w,h,p-1),k&&1<e&&v>=h)for(v=d._ctx[r]||(d._ctx[r]=B()),r=this.h[r]||(this.h[r]=A(p-(h||0))),w=l-k,t=l+k+1,0>w&&(w=0),t>e&&(t=e);w<t;w++)w!==
l&&T(r,v,c[w],a,0,p-(w<l?l-w:w-l),h,p-1)}}}this.g[a]=1}return this};
function S(a,b,c,f){if(x(c)){var d=c.length;if(d--){for(var g=0;g<d;g++)S(a,b,c[g]);return S(a,b,c[d],f)}}else{var e=a.a.index,h=a.a.keys,k=a.a.tag;g=a.a.store;var p;var n=a.a.id;d=c;for(var m=0;m<n.length;m++)d=d[n[m]];if("remove"===b&&(delete a.i[d],n=h.length,n--)){for(a=0;a<n;a++)e[h[a]].remove(d);return e[h[n]].remove(d,f)}if(k){for(p=0;p<k.length;p++){var l=k[p];var r=c;n=l.split(":");for(m=0;m<n.length;m++)r=r[n[m]];r="@"+r}p=a.s[l];p=p[r]||(p[r]=[])}n=a.a.field;k=0;for(l=n.length;k<l;k++){m=
n[k];r=c;for(var v=0;v<m.length;v++)r=r[m[v]];m=e[h[k]];"add"===b?m.add(d,r,k===l-1&&f):m.update(d,r,k===l-1&&f)}if(g){f=Object.keys(g);b=B();for(e=0;e<f.length;e++)if(h=f[e],g[h])for(h=h.split(":"),k=n=void 0,l=0;l<h.length;l++)r=h[l],n=(n||c)[r],k=(k||b)[r]=n;c=b}p&&(p[p.length]=c);a.i[d]=c}return a}Q.prototype.update=function(a,b,c){if(this.a&&z(a))return S(this,"update",a,b);this.g[a]&&q(b)&&(this.remove(a),this.add(a,b,c,!0));return this};
Q.prototype.remove=function(a,b,c){if(this.a&&z(a))return S(this,"remove",a,b);if(this.g[a]){if(!c){if(this.async&&"function"!==typeof importScripts){var f=this;c=new Promise(function(d){setTimeout(function(){f.remove(a,null,!0);f=null;d()})});if(b)c.then(b);else return c;return this}if(b)return this.remove(a,null,!0),b(),this}for(b=0;b<this.c-(this.threshold||0);b++)U(this.j[b],a);this.depth&&U(this.h,a);delete this.g[a]}return this};var X;
function Y(a,b,c,f,d,g,e,h){c=ja(c,d,!1,b,e,h);if(g){g=c.page;var k=c.next;c=c.result}b=c;a=a.i;c=b.length;d=Array(c);for(e=0;e<c;e++)d[e]=a[b[e]];c=d;f&&("function"!==typeof f&&(X=f.split(":"),1<X.length?f=ka:(X=X[0],f=la)),c.sort(f));return c=Z(g,k,c)}
Q.prototype.search=function(a,b,c,f){if(z(b)){if(x(b))for(var d=0;d<b.length;d++)b[d].query=a;else b.query=a;a=b;b=1E3}else b&&"function"===typeof b?(c=b,b=1E3):b||0===b||(b=1E3);var g=[],e=a;if(z(a)&&!x(a)){c||(c=a.callback)&&(e.callback=null);var h=a.sort;var k=!1;b=a.limit;var p=a.threshold;var n=!1;a=a.query}if(this.a){p=this.a.index;var m=e.bool||"or";n=e.field;var l=m,r,v;if(n)x(n)||(n=[n]);else if(x(e)){var w=e;n=[];l=[];for(var t=0;t<e.length;t++){var u=e[t];a=u.bool||m;n[t]=u.field;l[t]=
a;"not"===a?r=!0:"and"===a&&(v=!0)}}else n=this.a.keys;m=n.length;for(t=0;t<m;t++)w&&(e=w[t]),k&&!q(e)&&(e.page=null,e.limit=0),g[t]=p[n[t]].search(e,0);if(c)return c(Y(this,l,g,h,b,k,v,r));if(this.async){var M=this;return new Promise(function(V){Promise.all(g).then(function(pa){V(Y(M,l,pa,h,b,k,v,r))})})}return Y(this,l,g,h,b,k,v,r)}p||(p=this.threshold||0);if(!f){if(this.async&&"function"!==typeof importScripts){var I=this;p=new Promise(function(V){setTimeout(function(){V(I.search(e,b,null,!0));
I=null})});if(c)p.then(c);else return p;return this}if(c)return c(this.search(e,b,null,!0)),this}if(!a||!q(a))return g;e=a;e=this.encode(e);if(!e.length)return g;c=e;w=c.length;a=!0;f=[];d=B();var C=0;1<w&&(this.depth?m=!0:c.sort(ma));if(!m||(t=this.h))for(var W=this.c;C<w;C++){var y=c[C];if(y){if(m){if(!u)if(t[y])u=y,d[y]=1;else if(!n)return g;if(n&&C===w-1&&!f.length)m=!1,y=u||y,d[y]=0;else if(!u)continue}if(!d[y]){var G=[],D=!1,L=0;if(u=m?t[u]:this.j)for(var R=void 0,E=0;E<W-p;E++)if(R=u[E]&&u[E][y])G[L++]=
R,D=!0;if(D)u=y,f[f.length]=1<L?G.concat.apply([],G):G[0];else{a=!1;break}d[y]=1}}}else a=!1;a&&(g=ja(f,b,k));return g};Q.prototype.clear=function(){return this.destroy().init()};Q.prototype.destroy=function(){this.j=this.h=this.g=null;if(this.a){for(var a=this.a.keys,b=0;b<a.length;b++)this.a.index[a[b]].destroy();this.a=this.i=null}return this};function fa(a,b,c){Object.defineProperty(a,b,{get:c})}
function T(a,b,c,f,d,g,e,h){if(b[c])return b[c];d=d?(h-(e||h/1.5))*g+(e||h/1.5)*d:g;b[c]=d;d>=e&&(a=a[h-(d+.5>>0)],a=a[c]||(a[c]=[]),a[a.length]=f);return d}function U(a,b){if(a)for(var c=Object.keys(a),f=0,d=c.length;f<d;f++){var g=c[f],e=a[g];if(e)for(var h=0,k=e.length;h<k;h++)if(e[h]===b){1===k?delete a[g]:e.splice(h,1);break}else z(e[h])&&U(e[h],b)}}
function ha(a,b){for(var c=Object.keys(a),f=c.length,d=[],g="",e=0,h=0,k;h<f;h++){var p=c[h];(k=a[p])?(d[e++]=H(b?"(?!\\b)"+p+"(\\b)":p),d[e++]=k):g+=(g?"|":"")+p}g&&(d[e++]=H(b?"(?!\\b)("+g+")(\\b)":"("+g+")"),d[e]="");return d}function ma(a,b){return b.length-a.length}function la(a,b){return a[X]-b[X]}function ka(a,b){for(var c=X.length,f=0;f<c;f++)a=a[X[f]],b=b[X[f]];return a-b}function Z(a,b,c){return a?{page:a,next:b?""+b:null,result:c}:c}
function ja(a,b,c,f,d,g){var e=[];if(!0===c){c="0";var h=""}else h=c&&c.split(":");var k=a.length;if(1<k){var p=B(),n,m=0,l,r=!0,v=0,w;h&&(2===h.length?h=!1:h=w=parseInt(h[0],10));if(g){for(n=B();m<k;m++)if("not"===f[m]){var t=a[m];var u=t.length;for(l=0;l<u;l++)n["@"+t[l]]=1}else var M=m+1;if("undefined"===typeof M)return Z(c,E,e);m=0}else var I=q(f)&&f;for(var C;m<k;m++){var W=m===(M||k)-1;if(!I||!m)if((l=I||f&&f[m])&&"and"!==l)if("or"===l)C=!1;else continue;else C=d=!0;t=a[m];if(u=t.length){if(r)if(D){r=
D.length;for(l=0;l<r;l++){var y=D[l];var G="@"+y;g&&n[G]||(p[G]=1,d||(e[v++]=y))}var D=null;r=!1}else{D=t;continue}G=!1;for(l=0;l<u;l++){y=t[l];var L="@"+y,R=d?p[L]||0:m;if(!(!R||g&&n[L]||!d&&p[L])&&R===m){if(W){if(!w||--w<v)if(e[v++]=y,b&&v===b)return Z(c,v+(h||0),e)}else p[L]=m+1;G=!0}}if(C&&!G)break}else if(C)return Z(c,E,t)}if(D)if(a=D.length,g)for(l=h?parseInt(h,10):0;l<a;l++)g=D[l],n["@"+g]||(e[v++]=g);else e=D}else!k||f&&"not"===f[0]||(e=a[0],h&&(h=parseInt(h[0],10)));if(b){n=e.length;h&&h>
n&&(h=0);h=h||0;var E=h+b;E<n?e=e.slice(h,E):(E=0,h&&(e=e.slice(h)))}return Z(c,E,e)};var oa={encode:na,b:!1},qa=[H("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",H("[\u00e8\u00e9\u00ea\u00eb]"),"e",H("[\u00ec\u00ed\u00ee\u00ef]"),"i",H("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",H("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",H("[\u00fd\u0177\u00ff]"),"y",H("\u00f1"),"n",H("[\u00e7c]"),"k",H("\u00df"),"s",H(" & ")," and ",H("[\\W_]+")," ",H("[^a-z0-9 ]"),""];function na(a,b){b||(b=this);return K(b,a.toLowerCase(),qa," ")};var ra=[H("ae"),"a",H("ai"),"ei",H("ay"),"ei",H("ey"),"ei",H("oe"),"o",H("ue"),"u",H("ie"),"i",H("sz"),"s",H("zs"),"s",H("sh"),"s",H("ck"),"k",H("cc"),"k",H("th"),"t",H("dt"),"t",H("ph"),"f",H("pf"),"f",H("ou"),"o",H("uo"),"u"];function sa(a,b){a&&(a=na(a,this).join(" "),2<a.length&&(a=F(a,ra)),b||(1<a.length&&(a=J(a)),a&&(a=a.split(" "))));return a};var ua={encode:ta,b:!1},va=[/[\W_]+/g," ",/[^a-z0-9 ]/g,""];function ta(a){return K(this,a.toLowerCase(),va," ")};var xa={encode:wa,b:!1},ya=[H("(?!\\b)p"),"b",H("(?!\\b)z"),"s",H("(?!\\b)[cgq]"),"k",H("(?!\\b)n"),"m",H("(?!\\b)d"),"t",H("(?!\\b)[vw]"),"f",H("(?!\\b)[aeiouy]"),""];function wa(a){a&&(a=sa(a,!0),1<a.length&&(a=F(a,ya)),1<a.length&&(a=J(a)),a&&(a=a.split(" ")));return a};var Aa={encode:za,b:!1,f:"strict"},Ba=[/[\W_]+/g," ",/[^a-z ]/g,""];function za(a){a=K(this,a.toLowerCase(),Ba,!1);var b=[];if(a)for(var c=a.split(" "),f=c.length,d=0,g=0;d<f;d++)if((a=c[d])&&(!this.filter||!this.filter[a])){for(var e=a[0],h=Ca(e),k=1;k<a.length;k++){var p=Ca(a[k]);if(p!==h&&(e+=p,h=p,4===e.length))break}b[g++]=(e+"0000").substring(0,4)}return b}
function Ca(a){switch(a){case "b":case "f":case "p":case "v":return 1;case "c":case "g":case "j":case "k":case "q":case "s":case "x":case "z":return 2;case "d":case "t":return 3;case "l":return 4;case "m":case "n":return 5;case "r":return 6}return""};var Ea={encode:Da,b:!0},Fa=/[\W_]+/;function Da(a){return K(this,a,!1,Fa)};var Ha={encode:Ga,b:!1,f:"strict"},Ia=/[\x00-\x7F]/g;function Ga(a){return K(this,a.replace(Ia,""),!1,"")};var Ka={encode:Ja,b:!1},La=/[\W_]+/;function Ja(a){return K(this,a,!1,La)};P["latin:advanced"]={encode:sa,b:!1};P["latin:balance"]=ua;P["latin:default"]=ba;P["latin:extra"]=xa;P["latin:simple"]=oa;P["latin:soundex"]=Aa;P["arabic:default"]=Ea;P["cjk:default"]=Ha;P["cyrillic:default"]=Ka;(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return Q}):"object"===typeof a.exports?a.module.exports=Q:a.FlexSearch=Q})();}).call(this);
