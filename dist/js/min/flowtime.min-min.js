var Brav1Toolbox=function(){function e(){return window.getComputedStyle?window.getComputedStyle(document.body):document.documentElement.style}function t(e,t,n,a){e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,n)}function n(e,t,n){e.removeEventListener?e.removeEventListener(t,n):e.detachEvent&&e.detachEvent("on"+t,n)}function a(e){return""!=o(e)}function o(t){for(var n=d||e(),a=0;a<f.length;a++){var o=f[a].replace(/-/g,""),r=t;if(o.length>0&&(r=r.charAt(0).toUpperCase()+r.substr(1)),r=o+r,r in n==1)return r}return""}function r(e,t){var n=o(t);return window.getComputedStyle?window.getComputedStyle(e)[n]:e.style[n]}function i(e){return!!e&&Object.prototype.toString.call(e).match(/(\w+)\]/)[1]}function l(e,t){if(e.classList)e.classList.add(t);else if(0==u(e,t)){var n=e.className;n.length>0&&(n+=" "),e.className=n+t}}function s(e,t){if(e.classList)e.classList.remove(t);else{var n=e.className;-1!=n.indexOf(t)&&(n=-1!=n.indexOf(" "+t)?n.replace(" "+t,""):-1!=n.indexOf(t+" ")?n.replace(t+" ",""):n.replace(t,"")),e.className=n}}function u(e,t){if(e){if(e.classList)return e.classList.contains(t);if(e.className)return-1!=e.className.indexOf(t)}return!1}function c(e,t){if(document.createEvent){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0);for(var a in t)n[a]=t[a];document.dispatchEvent(n)}}function g(e,t){var n,a;return n=t.x-e.x,n*=n,a=t.y-e.y,a*=a,Math.abs(Math.sqrt(n+a))}var f=["","-webkit-","-moz-","-ms-","-o-"],d=e();return{addListener:t,removeListener:n,dispatchEvent:c,testCSS:a,getPrefixed:o,getCSSValue:r,typeOf:i,addClass:l,removeClass:s,hasClass:u,distance:g}}();!function(e,t){function n(t,n,i,l){t[a](r+n,"wheel"==o?i:function(t){!t&&(t=e.event);var n={originalEvent:t,target:t.target||t.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}};return"mousewheel"==o?(n.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(n.deltaX=-1/40*t.wheelDeltaX)):n.deltaY=t.detail,i(n)},l||!1)}var a,o,r="";e.addEventListener?a="addEventListener":(a="attachEvent",r="on"),o="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",e.addWheelListener=function(e,t,a){n(e,o,t,a),"DOMMouseScroll"==o&&n(e,"MozMousePixelScroll",t,a)}}(window,document);var Flowtime=function(){function e(e){if(Nn){if("A"===e.target.nodeName||"A"===e.target.parentNode.nodeName){var t=e.target.getAttribute("href")||e.target.parentNode.getAttribute("href");if("#"===t)return void e.preventDefault();if(t&&(e.target.blur(),"#"==t.substr(0,1))){e.preventDefault();var n=na.setPage(t);P(n,!0,!0)}}if(un){for(var n=e.target;n&&!Brav1Toolbox.hasClass(n,Xt);)n=n.parentNode;Brav1Toolbox.hasClass(n,Xt)&&(e.preventDefault(),P(n,null,!0))}if(Brav1Toolbox.hasClass(e.target,Wt)){e.preventDefault();var a=Number(T(e.target.getAttribute("data-section"))),o=Number(T(e.target.getAttribute("data-page")));Z(a,o)}}}function t(e){tn=!1;var t;t=e.state?e.state.token.replace("#/",""):document.location.hash.replace("#/","");var n=na.setPage(t);P(n,!1)}function n(e,t){if(tn||t){var n=document.location.hash.replace("#/",""),a=na.setPage(n);P(a,!1)}}function a(e){yn=e,yn?(Brav1Toolbox.addListener(Qt,"mousedown",o,!1),Brav1Toolbox.addListener(Qt,"mouseup",i,!1)):(Brav1Toolbox.removeListener(Qt,"mousedown",o),Brav1Toolbox.removeListener(Qt,"mouseup",i))}function o(e){la=0,sa=0,e=l(e),ra=e.clientX,ia=e.clientY,ua=1;var t=s();aa=t.x,oa=t.y,yn&&Brav1Toolbox.addListener(Qt,"mousemove",r,!1)}function r(e){e.preventDefault(),e=l(e),la=e.clientX-ra,sa=e.clientY-ia}function i(e){if(Bn&&(Math.abs(la)>=ga||Math.abs(sa)>=ga))if(e=l(e),ua=0,ca=Math.abs(la)>=Math.abs(sa)?"x":"y","x"==ca&&Math.abs(la)>=ga){if(la>0)return void(kn===!0?R():U(void 0,!1));if(0>la)return void(kn===!0?W():z(void 0,!1))}else{if(sa>0&&Math.abs(sa)>=ga)return void(kn===!0?U(void 0,!1):R());if(0>sa)return void(kn===!0?z(void 0,!1):W())}Brav1Toolbox.removeListener(Qt,"mousemove",r)}function l(e){return e.touches&&(e=e.touches[0]),e}function s(){var e=Qt.style[qn],t=e.indexOf("translateX(")+11,n=e.substring(t,e.indexOf(")",t));-1!=n.indexOf("%")?(n=n.replace("%",""),n=parseInt(n)/100*window.innerWidth):-1!=n.indexOf("px")&&(n=parseInt(n.replace("px","")));var a=e.indexOf("translateY(")+11,o=e.substring(a,e.indexOf(")",a));return-1!=o.indexOf("%")?(o=o.replace("%",""),o=parseInt(o)/100*window.innerHeight):-1!=o.indexOf("px")&&(o=parseInt(o.replace("px",""))),{x:n,y:o}}function u(e){e.preventDefault(),w()}function c(e){var t=e.target;Sn=g(t);var n=Sn===!0?!1:Cn;Ln===!1&&n===!0&&v(e)}function g(e){for(var t=!1,n=e;n.className&&n.className.indexOf("ft-page")<0;)n.scrollHeight>n.clientHeight-1&&(t=!0),n=n.parentNode;return-1!=n.className.indexOf("ft-page")&&n.scrollHeight>n.clientHeight-1&&(t=!0),t===!0&&((n.scrollHeight-n.scrollTop===n.clientHeight||0===n.scrollTop&&n.alreadyScrolled&&n.alreadyScrolled===!0)&&(t=!1),n.alreadyScrolled=!0),t}function f(){clearTimeout(An),Ln=!1}function d(){An=setTimeout(f,On)}function v(e){Ln=!0,d(),0==e.deltaY?e.deltaX>0?kn===!0?W():z(void 0,e.shiftKey):e.deltaX<0&&(kn===!0?R():U(void 0,e.shiftKey)):e.deltaY>0?kn===!0?z(void 0,e.shiftKey):W():e.deltaY<0&&(kn===!0?U(void 0,e.shiftKey):R())}function h(e){if(e.length>0){var t=e.replace("#/","").split("/");if(t.length>0){var n=document.querySelectorAll(qt+"[data-prog=__"+t[0]+"]"),a=document.querySelectorAll(qt+"[data-id=__"+t[0]+"]"),o=n.length>0?n:a;if(null!=o){for(var r=0;r<o.length;r++){var i=o[r],l=null;if(t.length>1&&(l=i.querySelector(Ft+"[data-prog=__"+t[1]+"]")||i.querySelector(Ft+"[data-id=__"+t[1]+"]")),null!==l)break}null==l&&i&&(l=i.querySelector(Ft))}return l}}}function p(e){En=e===!1?!1:!0;var t=na.getCurrentPage();na.update(),P(t,!1,!1,!1),pn===!0&&B()}function x(e){var t=on,n=na.getCurrentPage().getAttribute("data-title");if(null==n)for(var a=e.split("/"),o=0;o<a.length;o++)t+=" | "+a[o];else null!=na.getCurrentSection().getAttribute("data-title")&&(t+=" | "+na.getCurrentSection().getAttribute("data-title")),t+=" | "+n;document.title=t}function m(e){var t=e.getAttribute("data-id"),n=e.getAttribute("data-prog"),a="";return null!=t?a=t.replace(/__/,""):null!=n&&(a=n.replace(/__/,"")),a}function b(e){return"__"!=e.substr(0,2)?"__"+e:e}function T(e){return"__"==e.substr(0,2)?e.replace(/__/,""):e}function P(e,t,n,a){t=0==t?t:!0,e||(e=null!=na.getCurrentPage()?na.getCurrentPage():document.querySelector(Ft),t=!0),a===!1?j():In===!0&&V(),C(e),In===!0&&V(!0),S(e),un&&O(!1,!1);var o=na.getHash(e);n===!0&&na.updateFragments();var r=na.getPageIndex(e);if(an.section!=r.section||an.page!=r.page)if(null!=kt&&0!=t&&-1==na.getCurrentFragmentIndex()){var i={token:o},l="#/"+o;nn=l;try{window.history.pushState(i,null,nn)}catch(s){Qn===!0&&console.log(s)}}else document.location.hash="/"+o;x(o),Gn[r.section]=r.page,an.section===r.section&&an.page!==r.page&&(Jn=r.page),y(),an=r,na.switchActivePage(e,!0),pn&&L()}function y(){if(En!==!1){var e=na.getPageIndex(),t={section:na.getCurrentSection(),page:na.getCurrentPage(),sectionIndex:e.section,pageIndex:e.page,pastSectionIndex:an.section,pastPageIndex:an.page,prevSection:na.hasPrevSection(),nextSection:na.hasNextSection(),prevPage:na.hasPrevPage(),nextPage:na.hasNextPage(),fragment:na.getCurrentFragment(),fragmentIndex:na.getCurrentFragmentIndex(),isOverview:un,progress:na.getProgress(),total:na.getPagesTotalLength(),isLoopable:hn,clickerMode:xn,isAutoplay:fa};Brav1Toolbox.dispatchEvent(Jt,t),void 0!==Dn&&Dn(t)}else En=!0}function C(e){var t,n,a=na.getPageIndex(e);if(dn===!0?(t=e.x,n=e.y):kn===!0?(n=a.section,t=a.page):(t=a.section,n=a.page),Zn===!0){var o=e.parentNode,r=Qt,i=o;kn===!0&&(r=o,i=Qt),Xn?(r.style[qn]=dn?"translateX("+-t+"px)":"translateX("+100*-t+"%)",i.style[qn]=dn?"translateY("+-n+"px)":"translateY("+100*-n+"%)"):(r.style.left=dn?t+"px":100*-t+"%",i.style.top=dn?n+"px":100*-n+"%")}else Xn?Qt.style[qn]=dn?"translateX("+-t+"px) translateY("+-n+"px)":"translateX("+100*-t+"%) translateY("+100*-n+"%)":dn?(Qt.style.top=-n+"px",Qt.style.left=-t+"px"):(Qt.style.top=100*-n+"%",Qt.style.left=100*-t+"%");w()}function S(e){if(Pn)for(var t=na.getPageIndex(e),n=na.getParallaxElements(),a=0;a<n.length;a++){var o=n[a];if(void 0!=o)for(var r=0;r<o.length;r++){var i=o[r];if(void 0!=i)for(var l=0;l<i.length;l++){var s=i[l],u=0,c=0;t.section<a?u=s.pX:t.section>a&&(u=-s.pX),t.page<r?c=s.pY:t.page>r&&(c=-s.pY);var g="%";mn&&(g="px"),s.style[qn]=kn===!0?"translateX("+c+g+") translateY("+u+g+")":"translateX("+u+g+") translateY("+c+g+")"}}}}function w(){window.scrollTo(0,0)}function B(){ln&&ln.parentNode.removeChild(ln);var e=document.createDocumentFragment();ln=document.createElement("div"),ln.className=zt+(kn===!0?" ft-cross":""),e.appendChild(ln);for(var t=0;t<na.getSectionsLength();t++){var n=document.createElement("div");n.setAttribute("data-section","__"+t),n.className=Ut,Brav1Toolbox.addClass(n,"thumb-section-"+t);for(var a=na.getPages(t),o=0;o<a.length;o++){var r=document.createElement("div");r.className=Wt,r.setAttribute("data-section","__"+t),r.setAttribute("data-page","__"+o),Brav1Toolbox.addClass(r,"thumb-page-"+o),n.appendChild(r)}ln.appendChild(n)}en.appendChild(ln),L()}function N(){null!=ln&&(en.removeChild(ln),ln=null)}function L(){if(null!=ln)for(var e=ln.querySelectorAll(Rt),t=0;t<e.length;t++){var n=e[t],a=Number(T(n.getAttribute("data-section"))),o=Number(T(n.getAttribute("data-page")));a==na.getPageIndex().section&&o==na.getPageIndex().page?Brav1Toolbox.addClass(e[t],"actual"):Brav1Toolbox.removeClass(e[t],"actual")}}function A(){return ln}function O(e,t){un?_(e,t):(Mt=na.getCurrentPage(),I())}function E(e,t,n){un!==e&&(un=!e,O(t,n))}function _(e,t){un=!1,Brav1Toolbox.removeClass(en,"ft-overview"),na.hideFragments(),t=t===!1?!1:!0,1==t&&(1==e?P(Mt):P())}function I(){un=!0,Brav1Toolbox.addClass(en,"ft-overview"),na.showFragments(),0==cn?M(!0):k(!0),y()}function M(e){if(e){if(kn===!0)var t=100/na.getSectionsLength(),n=100/na.getPagesLength();else var n=100/na.getSectionsLength(),t=100/na.getPagesLength();var a=.9*Math.min(n,t),o=(100-na.getSectionsLength()*a)/2,r=(100-na.getPagesLength()*a)/2;Qt.style[qn]="translate("+o+"%, "+r+"%) scale("+a/100+", "+a/100+")"}}function k(e){if(e){var t=rn,n=na.getPageIndex();if(kn===!0)var a=50-t*n.section-t/2,o=50-t*n.page-t/2;else var o=50-t*n.section-t/2,a=50-t*n.page-t/2;Qt.style[qn]="translate("+o+"%, "+a+"%) scale("+t/100+", "+t/100+")"}}function D(e){var t=e.target.tagName;"INPUT"!=t&&"TEXTAREA"!=t&&"SELECT"!=t&&e.keyCode>=37&&e.keyCode<=40&&e.preventDefault()}function q(e){if(wn){var t=e.target.tagName;if("INPUT"!==t&&"TEXTAREA"!==t&&"SELECT"!==t)switch(e.preventDefault(),e.keyCode){case 27:O(!0);break;case 33:xn?R(e.shiftKey):$();break;case 34:xn?W(e.shiftKey):Q();break;case 35:J();break;case 36:G();break;case 37:kn===!0?R(e.shiftKey):U(null,e.shiftKey);break;case 39:kn===!0?W(e.shiftKey):z(null,e.shiftKey);break;case 38:kn===!0?U(null,e.shiftKey):R(e.shiftKey);break;case 40:kn===!0?z(null,e.shiftKey):W(e.shiftKey);break;case 13:un&&Z(na.getCurrentHilited())}}}function X(e,t,n,a){va=isNaN(parseInt(t))?va:t,ha=a===!0||!1,1==e&&n!==!1&&F()}function F(){fa=!0,clearTimeout(da),pa=Date.now(),da=setTimeout(function(){W(ha),F()},va-xa),xa=0}function Y(){fa=!1,xa=Date.now()-pa,clearTimeout(da)}function K(){fa=!1,clearTimeout(da),pa=0,xa=0}function H(){pn&&null==ln&&B(),document.location.hash.length>0?(j(!0),n(null,!0)):H.arguments.length>0?Z.apply(this,H.arguments):(Z(0,0),L())}function j(e){In=!0,Qt.style[Brav1Toolbox.getPrefixed("transition-duration")]="0ms",e===!0&&setTimeout(V,Mn)}function V(e){In=!1,e===!0?setTimeout(function(){Qt.style[Brav1Toolbox.getPrefixed("transition-duration")]=""+Mn/1e3+"s"},Mn):Qt.style[Brav1Toolbox.getPrefixed("transition-duration")]=""+Mn/1e3+"s"}function z(e,t){e=void 0!=e?e:Vn,t===!0&&(e=!Vn);var n=na.getNextSection(e,gn);void 0!=n?P(n):un&&cn&&I()}function U(e,t){e=void 0!=e?e:Vn,t===!0&&(e=!Vn);var n=na.getPrevSection(e,gn);void 0!=n?P(n):un&&cn&&I()}function W(e){var t=na.getNextPage(e);t!==!1&&(void 0!=t?P(t):un&&cn&&I())}function R(e){var t=na.getPrevPage(e);t!==!1&&(void 0!=t?P(t):un&&cn&&I())}function Z(){var e=Z.arguments;if(e.length>0){if(1==e.length)if("Object"===Brav1Toolbox.typeOf(e[0])){var t=e[0],n=t.section,a=t.page;if(null!=n&&void 0!=n){var o=document.querySelector(qt+"[data-id="+b(n)+"]");if(null!=a&&void 0!=a){var r=o.querySelector(Ft+"[data-id="+b(a)+"]");if(null!=r)return void P(r)}}}else void 0!=e[0].nodeName&&P(e[0],null,!0);if("Number"===Brav1Toolbox.typeOf(e[0])||0===e[0]){var r=na.getPageByIndex(e[1],e[0]);return void P(r)}}}function G(){Z(0,0)}function J(){var e=na.getSectionsLength()-1;Z(e,na.getPages(e).length-1)}function $(){var e=na.getPageIndex();Z(e.section,0)}function Q(){var e=na.getPageIndex();Z(e.section,na.getPages(e.section).length-1)}function et(e,t,n){Brav1Toolbox.addListener(document,e,t,n)}function tt(e){gn=e===!0?!0:!1,nt(e)}function nt(e){fn=e===!0?!0:!1}function at(e){kt=e===!0?!0:!1}function ot(e){dn=e===!0?!0:!1,dn===!0&&na.updateOffsets(),P()}function rt(e){zn=e===!0?!0:!1}function it(e){Un=e===!0?!0:!1}function lt(e){Vn=e===!0?!1:!0}function st(e){cn=e===!0?!0:!1}function ut(e){vn=e===!0?!0:!1}function ct(e){pn=e===!0?!0:!1,pn?(null==ln&&B(),L()):null!=ln&&N()}function gt(e,t){bn=e,Tn=void 0==t?bn:t,na.update()}function ft(e){mn=e===!0?!0:!1}function dt(){return na.getPageIndex().section}function vt(){return na.getPageIndex().page}function ht(e){hn=e===!0?!0:!1}function pt(e){xn=e===!0?!0:!1}function xt(e,t,n,a){Nn=e===!1?!1:!0,wn=t===!1?!1:!0,Cn=n===!1?!1:!0,Bn=a===!1?!1:!0}function mt(e,t,n,a){Nn=e===!1?!0:!1,wn=t===!1?!0:!1,Cn=n===!1?!0:!1,Bn=a===!1?!0:!1}function bt(e){Nn=e===!1?!1:!0}function Tt(e){wn=e===!1?!1:!0}function Pt(e){Cn=e===!1?!1:!0}function yt(e){Bn=e===!1?!1:!0}function Ct(e){kn!==e&&(kn=e===!0?!0:!1,Brav1Toolbox.hasClass(Qt,Zt)||kn!==!0?Brav1Toolbox.hasClass(Qt,Zt)&&kn!==!0&&Brav1Toolbox.removeClass(Qt,Zt):Brav1Toolbox.addClass(Qt,Zt),ln&&(Brav1Toolbox.hasClass(ln,Zt)||kn!==!0?Brav1Toolbox.hasClass(ln,Zt)&&kn!==!0&&Brav1Toolbox.removeClass(ln,Zt):Brav1Toolbox.addClass(ln,Zt)),na.updateOffsets(),P())}function St(e){Zn!==e&&(Zn=e===!0?!0:!1,Brav1Toolbox.hasClass(Qt,Gt)||Zn!==!0?Brav1Toolbox.hasClass(Qt,Gt)&&Zn!==!0&&Brav1Toolbox.removeClass(Qt,Gt):Brav1Toolbox.addClass(Qt,Gt),na.updateOffsets(),P())}function wt(e){_n=e}function Bt(e){Mn=e,Qt.style[Brav1Toolbox.getPrefixed("transition-duration")]=""+Mn+"ms"}function Nt(){return Mn}function Lt(e){On=e}function At(e){Dn=e}function Ot(e){Wn=e===!0?!0:!1}function Et(e){Rn=e===!0?!0:!1}function _t(e){Fn=e===!1?!1:!0}var It=!1;("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&(It=!0);var Mt,kt=window.history.pushState,Dt="ft-section",qt="."+Dt,Xt="ft-page",Ft="."+Xt,Yt="ft-fragment",Kt="."+Yt,Ht="revealed",jt="actual",Vt="revealed-temp",zt="ft-default-progress",Ut="ft-section-thumb",Wt="ft-page-thumb",Rt="."+Wt,Zt="ft-cross",Gt="ft-scroll-the-section",Jt="flowtimenavigation",Qt=document.querySelector(".flowtime"),$t=Qt.parentNode,en=(document.querySelector("html"),document.querySelector("body")),tn=!1,nn="",an={section:0,page:0},on=document.title,rn=22,ln=null,sn=0,un=!1,cn=!1,gn=!1,fn=!0,dn=!1,vn=!1,hn=!1,pn=!1,xn=!1,mn=!1,bn=50,Tn=50,Pn=null!=document.querySelector(".parallax"),yn=!1,Cn=!0,Sn=!0,wn=!0,Bn=!0,Nn=!0,Ln=!1,An=0,On=2e3,En=!0,_n=1e3,In=!1,Mn=500,kn=Brav1Toolbox.hasClass(Qt,Zt),Dn=void 0,qn=Brav1Toolbox.getPrefixed("transform"),Xn=Brav1Toolbox.testCSS("transform"),Fn=!0,Yn=0,Kn=0,Hn=0,jn=0,Vn=!1,zn=!1,Un=!1,Wn=!1,Rn=!1,Zn=Brav1Toolbox.hasClass(Qt,Gt),Gn=[],Jn=0,Qn=!1;!function(){var e=Brav1Toolbox.getCSSValue(Qt,"transitionDuration"),t=parseFloat(e),n=e.replace(""+t,"");!isNaN(t)&&t>0&&("s"===n?Mn=1e3*t:"ms"===n&&(Mn=t)),Bt(Mn),On=4*Mn}();var $n=!0;try{var ea=document.querySelector("html").className.toLowerCase();(-1!=ea.indexOf("ie7")||-1!=ea.indexOf("ie8")||-1!=ea.indexOf("lt-ie9"))&&($n=!1)}catch(ta){$n=!1}$n&&Brav1Toolbox.addClass($t,"ft-absolute-nav"),window.onload=function(){na.updateOffsets()};var na=function(){function e(){$=[],ot=[],et=document.querySelectorAll(Kt),tt=[],J=Qt.querySelectorAll(".flowtime > "+qt),Q=Qt.querySelectorAll(".flowtime "+Ft);for(var e=0;e<J.length;e++){var n=[],o=J[e];tt[e]=[],at[e]=[],sn+=1,o.getAttribute("data-id")?o.setAttribute("data-id","__"+T(o.getAttribute("data-id"))):o.setAttribute("data-id","__"+sn),o.getAttribute("data-prog")?o.setAttribute("data-prog","__"+T(o.getAttribute("data-prog"))):o.setAttribute("data-prog","__"+sn),o.index=e,o.setAttribute("id",""),pages=o.querySelectorAll(Ft),lt+=pages.length,it=Math.max(it,pages.length);for(var r=0;r<pages.length;r++){var i=pages[r];if(i.getAttribute("data-id")?i.setAttribute("data-id","__"+T(i.getAttribute("data-id"))):i.setAttribute("data-id","__"+(r+1)),i.getAttribute("data-prog")?i.setAttribute("data-prog","__"+T(i.getAttribute("data-prog"))):i.setAttribute("data-prog","__"+(r+1)),i.index=r,i.setAttribute("id",""),!i.getAttribute("data-title")){var l=i.querySelector("h1");null!=l&&""!=l.textContent.lenght&&i.setAttribute("data-title",l.textContent)}t(i,e,r),n.push(i);var s=i.querySelectorAll(Kt);tt[e][r]=s,at[e][r]=-1}$.push(n)}rt=J.length,w(),a()}function t(e,t,n){if(Pn){void 0==ot[t]&&(ot[t]=[]),void 0==ot[t][n]&&(ot[t][n]=[]);var a=e.querySelectorAll(".parallax");if(a.length>0)for(var o=0;o<a.length;o++){var r=a[o],i=bn,l=Tn;if(null!=r.getAttribute("data-parallax")){var s=r.getAttribute("data-parallax").split(",");i=l=s[0],s.length>1&&(l=s[1])}r.pX=i,r.pY=l,ot[t][n].push(r)}}}function n(){return ot}function a(){Yn=Qt.offsetLeft,Kn=Qt.offsetTop;for(var e=0;e<Q.length;e++){var t=Q[e],n=t.offsetParent;0===e&&(Hn=t.offsetLeft-Yn,jn=t.offsetTop-Kn),kn===!0?(t.x=t.offsetLeft-(Yn+Hn),t.y=n.offsetTop):(t.x=n.offsetLeft,t.y=t.offsetTop-(Kn+jn))}}function o(e,t){var n=ut,a=un===!0?!1:e;if(!(t===!0&&tt[st][ut].length>0&&at[st][ut]<tt[st][ut].length-1&&a!==!0&&io===!1)){n=0,a===!0&&st+1<=$.length-1?n=0:(a!==!0||fn===!0||st+1>$.length-1)&&(n=ut);var o=Math.min(st+1,$.length-1);return st=1==hn&&o===st?0:o,un||(Wn===!0&&void 0!==Gn[st]&&(n=Gn[st]),Rn===!0&&(n=Jn)),i($[st],n)}return c(st,ut),u($[st][ut])}function r(e,t){var n=ut,a=un===!0?!1:e;if(!(t===!0&&tt[st][ut].length>0&&at[st][ut]>=0&&a!==!0&&un===!1)){var n=0;n=0,a===!0&&st-1>=0?n=0:(a!==!0||fn===!0||0>st-1)&&(n=ut);var o=Math.max(st-1,0);return st=hn===!0&&o===st?$.length-1:o,un||(Wn===!0&&Gn[st]>=0&&(n=Gn[st]),Rn===!0&&(n=Jn)),i($[st],n)}return g(st,ut),u($[st][ut])}function i(e,t){var n=e[t];if(void 0===n)if(Un===!0)n=e[0],t=0;else for(var a=t;a>=0;a--)if(void 0!==e[a]){n=e[a],t=a;break}return ut=t,un||v(),u(n)}function l(e){if(tt[st][ut].length>0&&at[st][ut]<tt[st][ut].length-1&&e!==!0&&un===!1)c(st,ut);else if(void 0===$[st][ut+1]){if(Fn===!1)return!1;void 0!==$[st+1]?(st+=1,ut=0):void 0===$[st+1]&&hn===!0&&(st=0,ut=0)}else ut=Math.min(ut+1,$[st].length-1);return u($[st][ut])}function s(e){if(tt[st][ut].length>0&&at[st][ut]>=0&&e!==!0&&un===!1)g(st,ut);else if(0==ut){if(Fn===!1)return!1;void 0!=$[st-1]?(st-=1,ut=zn===!0?0:$[st].length-1):void 0==$[st-1]&&hn===!0&&(st=$.length-1,ut=zn===!0?0:$[st].length-1)}else ut=Math.max(ut-1,0);return u($[st][ut])}function u(e){return 1==un?void R(e):e}function c(e,t,n){void 0!=n?at[e][t]=n:n=at[e][t]+=1;for(var a=0;n>=a;a++)Brav1Toolbox.addClass(tt[e][t][a],Ht),Brav1Toolbox.removeClass(tt[e][t][a],jt);Brav1Toolbox.addClass(tt[e][t][n],jt)}function g(e,t,n){void 0!=n?at[e][t]=n:n=at[e][t];for(var a=0;a<tt[e][t].length;a++)a>=n&&(Brav1Toolbox.removeClass(tt[e][t][a],Ht),Brav1Toolbox.removeClass(tt[e][t][a],Vt)),Brav1Toolbox.removeClass(tt[e][t][a],jt);n-=1,n>=0&&Brav1Toolbox.addClass(tt[e][t][n],jt),at[e][t]=n}function f(){for(var e=0;e<et.length;e++)Brav1Toolbox.addClass(et[e],Vt)}function d(){for(var e=0;e<et.length;e++)Brav1Toolbox.removeClass(et[e],Vt)}function v(){for(var e=0;e<tt.length;e++)for(var t=tt[e],n=0;n<t.length;n++){var a=t[n];if(a.length>0)if(e>st)for(var o=a.length-1;o>=0;o--)g(e,n,o);else if(st>e)for(var o=0;o<a.length;o++)c(e,n,o);else if(e==st)if(n>ut)for(var o=a.length-1;o>=0;o--)g(e,n,o);else if(ut>n)for(var o=0;o<a.length;o++)c(e,n,o);else if(n==ut){if(1==fn&&(an.section>na.getPageIndex().section||an.page>na.getPageIndex().page))for(var o=0;o<a.length;o++)c(e,n,o);else for(var o=a.length-1;o>=0;o--)g(e,n,o);at[e][n]=0==fn?-1:an.section>na.getPageIndex().section||an.page>na.getPageIndex().page?a.length-1:-1}}}function p(e){return st}function x(e){return ut}function b(){return J}function P(e){return $[e]}function y(){return Q}function C(e){return $[e].length}function S(){return rt}function B(){return it}function N(){return lt}function L(e){var t=st,n=ut;return void 0!=e&&(t=e.parentNode.index,n=e.index),{section:t,page:n}}function A(e){return J[e]}function O(e,t){return $[t][e]}function E(){return J[st]}function _(){return $[st][ut]}function I(){var e=st-1;if(0>e){if(hn!==!0)return null;e=$.length-1}return e}function M(){var e=I();return null===e?null:J[e]}function k(){var e=ut-1;if(0>e){if(0===st&&hn){var t=$.length-1;return $[t][$[t].length-1]}return st>0?$[st-1][$[st-1].length-1]:null}return $[st][e]}function D(){var e=st+1;if(e>$.length-1){if(hn!==!0)return null;e=0}return e}function q(){var e=D();return null===e?null:J[e]}function X(){var e=ut+1;return e>$[st].length-1?st===$.length-1&&hn?$[0][0]:st<$.length-1?$[st+1][0]:null:$[st][e]}function F(){return tt[st][ut][Y()]}function Y(){return at[st][ut]}function K(){return st<J.length-1}function H(){return st>0}function j(){return ut<$[st].length-1}function V(){return ut>0}function z(){if(0==st&&0==ut)return 0;for(var e=0,t=0;st>t;t++)e+=$[t].length;return e+=$[st][ut].index+1}function U(e){e&&(ut=L(e).page,st=L(e).section);var t="",n=J[st];if(t+=m(n),$[st].length>0){var a=$[st][ut];t+="/"+m(a)}return t}function W(e){var t=h(e);if(t){for(var n=t.parentNode,a=0;a<$.length;a++){var o=$[a];if(J[a]===n){st=a;for(var r=0;r<o.length;r++)if(o[r]===t){ut=r;break}}}v()}return t}function R(e,t){for(var n=e.parentNode.index,a=0;a<$.length;a++)for(var o=$[a],r=0;r<o.length;r++){var i=o[r];Brav1Toolbox.removeClass(i,"past-section"),Brav1Toolbox.removeClass(i,"future-section"),Brav1Toolbox.removeClass(i,"past-page"),Brav1Toolbox.removeClass(i,"future-page"),i!==e&&(Brav1Toolbox.removeClass(i,"hilite"),0==un&&i!==_()&&Brav1Toolbox.removeClass(i,"actual"),n>a?Brav1Toolbox.addClass(i,"past-section"):a>n&&Brav1Toolbox.addClass(i,"future-section"),i.index<e.index?Brav1Toolbox.addClass(i,"past-page"):i.index>e.index&&Brav1Toolbox.addClass(i,"future-page"))}Brav1Toolbox.addClass(e,"hilite"),t&&G(e),nt=e}function Z(){return nt}function G(e){Brav1Toolbox.addClass(e,"actual")}var J,$,Q,et,tt,nt,at=[],ot=[],rt=0,it=0,lt=0,st=0,ut=0;return e(),{update:e,updateFragments:v,showFragments:f,hideFragments:d,getSection:p,getPage:x,getSections:b,getPages:P,getAllPages:y,getNextSection:o,getPrevSection:r,getNextPage:l,getPrevPage:s,getSectionLength:C,getSectionsLength:S,getPagesLength:B,getPagesTotalLength:N,getPageIndex:L,getSectionByIndex:A,getPageByIndex:O,getCurrentSection:E,getCurrentPage:_,getPrevSectionObject:M,getPrevPageObject:k,getNextSectionObject:q,getNextPageObject:X,getCurrentFragment:F,getCurrentFragmentIndex:Y,getProgress:z,getHash:U,setPage:W,switchActivePage:R,getCurrentHilited:Z,hasNextSection:K,hasPrevSection:H,hasNextPage:j,hasPrevPage:V,updateOffsets:a,getParallaxElements:n}}();$n&&(It&&Brav1Toolbox.addListener(document,"touchend",function(t){e(t)},!1),Brav1Toolbox.addListener(document,"click",e,!1)),0==tn&&window.history.pushState?window.onpopstate=t:tn=!0,Brav1Toolbox.addListener(window,"hashchange",n);var aa=Qt.offsetX,oa=0,ra=0,ia=0,la=0,sa=0,ua=0,ca="x",ga=100;It&&(Qt.addEventListener("touchstart",o,!1),Qt.addEventListener("touchmove",r,!1),Qt.addEventListener("touchend",i,!1)),Brav1Toolbox.addListener(window,"scroll",u),addWheelListener(Qt,c);var ln=(function(){function e(){t(),un||(a=setTimeout(n,300))}function t(){clearTimeout(a)}function n(){na.updateOffsets(),P()}var a=0/0;return Brav1Toolbox.addListener(window,"resize",e),window.addEventListener("orientationchange",e,!1),{enable:e,disable:t}}(),null);Brav1Toolbox.addListener(window,"keydown",D),Brav1Toolbox.addListener(window,"keyup",q);var fa=!1,da=0,va=1e4,ha=!1,pa=0,xa=0;return{start:H,updateNavigation:p,nextSection:z,prevSection:U,next:W,prev:R,nextFragment:W,prevFragment:R,gotoPage:Z,gotoHome:G,gotoTop:$,gotoBottom:Q,gotoEnd:J,toggleOverview:O,showOverview:E,fragmentsOnSide:tt,fragmentsOnBack:nt,useHistory:at,slideInPx:ot,useOverviewVariant:st,twoStepsSlide:ut,showProgress:ct,defaultParallaxValues:gt,parallaxInPx:ft,addEventListener:et,getDefaultProgress:A,getSection:na.getCurrentSection,getPage:na.getCurrentPage,getSectionIndex:dt,getPageIndex:vt,getPrevSection:na.getPrevSectionObject,getNextSection:na.getNextSectionObject,getPrevPage:na.getPrevPageObject,getNextPage:na.getNextPageObject,autoplay:X,play:F,pause:Y,stop:K,loop:ht,clicker:pt,mouseDragEnabled:a,enableNavigation:xt,disableNavigation:mt,setLinksNavigation:bt,setKeyboardNavigation:Tt,setScrollNavigation:Pt,setTouchNavigation:yt,setCrossDirection:Ct,setDebouncingDelay:wt,setTransitionTime:Bt,setMomentumScrollDelay:Lt,getTransitionTime:Nt,onNavigation:At,gridNavigation:lt,backFromPageToTop:rt,nearestPageToTop:it,rememberSectionsStatus:Ot,rememberSectionsLastPage:Et,scrollTheSection:St,toSectionsFromPages:_t}}();