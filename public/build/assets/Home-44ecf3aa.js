import{a as b,j as J,F as wr}from"./jsx-runtime-d408a250.js";import{R as be,L as fe}from"./app-89b71a52.js";import{B as ln}from"./BlogListCard-df7d39a6.js";import{B as fn}from"./BlogAsideCard-b1f34c81.js";import{L as vn}from"./Layout-d39a9a19.js";import{A as st}from"./AdsComponent-c87d49b1.js";import dn from"./InfinityList-765b6ac3.js";import"./index-8a1f2496.js";import"./ReactToastify-68e78b0c.js";function hn({title:e,content:t,time:r,image:n}){return b("div",{children:J("div",{className:"w-full rounded-lg lg:max-w-sm",children:[b("img",{className:"object-cover w-full h-48",src:"/"+n,alt:"image"}),J("div",{className:"p-4",children:[b("h3",{className:"text-lg font-bold mb-1 line-clamp-2 hover:underline",children:e}),b("p",{className:"mb-2 leading-normal text-gray-500 line-clamp-2",children:t}),b("p",{className:"text-gray-500 mb-1",children:b("small",{children:b("u",{children:new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})})]})]})})}function gn({title:e,time:t,image:r}){return b("div",{children:b("div",{className:"py-2 border-t border-gray-400",children:J("div",{className:"flex flex-wrap lg:flex-nowrap items-center",children:[b("div",{className:"w-full lg:w-auto mr-2 mb-8 lg:mb-0",children:b("img",{className:"block w-40 h-16 object-cover",src:"/"+r,alt:""})}),b("div",{className:"w-full lg:w-9/12 mr-2 mb-10 lg:mb-0",children:b("div",{className:"max-w-2xl",children:b("h3",{className:"text-sm font-semibold line-clamp-3 hover:underline",children:e})})})]})})})}function cr(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function mn(e,t,r){return t&&cr(e.prototype,t),r&&cr(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var lr="(prefers-reduced-motion: reduce)",Pe=1,En=2,ke=3,Be=4,Qe=5,ct=6,dt=7,_n={CREATED:Pe,MOUNTED:En,IDLE:ke,MOVING:Be,SCROLLING:Qe,DRAGGING:ct,DESTROYED:dt};function me(e){e.length=0}function Ne(e,t,r){return Array.prototype.slice.call(e,t,r)}function z(e){return e.bind.apply(e,[null].concat(Ne(arguments,1)))}var Tr=setTimeout,Dt=function(){};function fr(e){return requestAnimationFrame(e)}function _t(e,t){return typeof t===e}function Xe(e){return!Wt(e)&&_t("object",e)}var zt=Array.isArray,Lr=z(_t,"function"),ye=z(_t,"string"),et=z(_t,"undefined");function Wt(e){return e===null}function br(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function tt(e){return zt(e)?e:[e]}function ie(e,t){tt(e).forEach(t)}function Ht(e,t){return e.indexOf(t)>-1}function lt(e,t){return e.push.apply(e,tt(t)),e}function de(e,t,r){e&&ie(t,function(n){n&&e.classList[r?"add":"remove"](n)})}function se(e,t){de(e,ye(t)?t.split(" "):t,!0)}function rt(e,t){ie(t,e.appendChild.bind(e))}function Yt(e,t){ie(e,function(r){var n=(t||r).parentNode;n&&n.insertBefore(r,t)})}function qe(e,t){return br(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function Rr(e,t){var r=e?Ne(e.children):[];return t?r.filter(function(n){return qe(n,t)}):r}function nt(e,t){return t?Rr(e,t)[0]:e.firstElementChild}var Ke=Object.keys;function Re(e,t,r){return e&&(r?Ke(e).reverse():Ke(e)).forEach(function(n){n!=="__proto__"&&t(e[n],n)}),e}function $e(e){return Ne(arguments,1).forEach(function(t){Re(t,function(r,n){e[n]=t[n]})}),e}function Ae(e){return Ne(arguments,1).forEach(function(t){Re(t,function(r,n){zt(r)?e[n]=r.slice():Xe(r)?e[n]=Ae({},Xe(e[n])?e[n]:{},r):e[n]=r})}),e}function vr(e,t){ie(t||Ke(e),function(r){delete e[r]})}function ce(e,t){ie(e,function(r){ie(t,function(n){r&&r.removeAttribute(n)})})}function k(e,t,r){Xe(t)?Re(t,function(n,i){k(e,i,n)}):ie(e,function(n){Wt(r)||r===""?ce(n,t):n.setAttribute(t,String(r))})}function Me(e,t,r){var n=document.createElement(e);return t&&(ye(t)?se(n,t):k(n,t)),r&&rt(r,n),n}function ae(e,t,r){if(et(r))return getComputedStyle(e)[t];Wt(r)||(e.style[t]=""+r)}function je(e,t){ae(e,"display",t)}function Ir(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function oe(e,t){return e.getAttribute(t)}function dr(e,t){return e&&e.classList.contains(t)}function re(e){return e.getBoundingClientRect()}function Ie(e){ie(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function xr(e){return nt(new DOMParser().parseFromString(e,"text/html").body)}function ve(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function Or(e,t){return e&&e.querySelector(t)}function Xt(e,t){return t?Ne(e.querySelectorAll(t)):[]}function he(e,t){de(e,t,!1)}function Pt(e){return e.timeStamp}function Le(e){return ye(e)?e:e?e+"px":""}var it="splide",qt="data-"+it;function He(e,t){if(!e)throw new Error("["+it+"] "+(t||""))}var pe=Math.min,ht=Math.max,gt=Math.floor,Ze=Math.ceil,te=Math.abs;function Cr(e,t,r){return te(e-t)<r}function ft(e,t,r,n){var i=pe(t,r),o=ht(t,r);return n?i<e&&e<o:i<=e&&e<=o}function Ce(e,t,r){var n=pe(t,r),i=ht(t,r);return pe(ht(n,e),i)}function Mt(e){return+(e>0)-+(e<0)}function Vt(e,t){return ie(t,function(r){e=e.replace("%s",""+r)}),e}function Kt(e){return e<10?"0"+e:""+e}var hr={};function An(e){return""+e+Kt(hr[e]=(hr[e]||0)+1)}function Dr(){var e=[];function t(a,c,l,v){i(a,c,function(u,E,d){var h="addEventListener"in u,s=h?u.removeEventListener.bind(u,E,l,v):u.removeListener.bind(u,l);h?u.addEventListener(E,l,v):u.addListener(l),e.push([u,E,d,l,s])})}function r(a,c,l){i(a,c,function(v,u,E){e=e.filter(function(d){return d[0]===v&&d[1]===u&&d[2]===E&&(!l||d[3]===l)?(d[4](),!1):!0})})}function n(a,c,l){var v,u=!0;return typeof CustomEvent=="function"?v=new CustomEvent(c,{bubbles:u,detail:l}):(v=document.createEvent("CustomEvent"),v.initCustomEvent(c,u,!1,l)),a.dispatchEvent(v),v}function i(a,c,l){ie(a,function(v){v&&ie(c,function(u){u.split(" ").forEach(function(E){var d=E.split(".");l(v,d[0],d[1])})})})}function o(){e.forEach(function(a){a[4]()}),me(e)}return{bind:t,unbind:r,dispatch:n,destroy:o}}var Se="mounted",kt="ready",Ee="move",Ge="moved",$t="click",Pr="active",Mr="inactive",Vr="visible",kr="hidden",K="refresh",Q="updated",Fe="resize",At="resized",Fr="drag",Ur="dragging",Br="dragged",yt="scroll",Oe="scrolled",yn="overflow",jt="destroy",Gr="arrows:mounted",zr="arrows:updated",Wr="pagination:mounted",Hr="pagination:updated",Zt="navigation:mounted",Jt="autoplay:play",Yr="autoplay:playing",Qt="autoplay:pause",er="lazyload:loaded",Xr="sk",qr="sh",mt="ei";function Y(e){var t=e?e.event.bus:document.createDocumentFragment(),r=Dr();function n(o,a){r.bind(t,tt(o).join(" "),function(c){a.apply(a,zt(c.detail)?c.detail:[])})}function i(o){r.dispatch(t,o,Ne(arguments,1))}return e&&e.event.on(jt,r.destroy),$e(r,{bus:t,on:n,off:z(r.unbind,t),emit:i})}function pt(e,t,r,n){var i=Date.now,o,a=0,c,l=!0,v=0;function u(){if(!l){if(a=e?pe((i()-o)/e,1):1,r&&r(a),a>=1&&(t(),o=i(),n&&++v>=n))return d();c=fr(u)}}function E(_){_||s(),o=i()-(_?a*e:0),l=!1,c=fr(u)}function d(){l=!0}function h(){o=i(),a=0,r&&r(a)}function s(){c&&cancelAnimationFrame(c),a=0,c=0,l=!0}function f(_){e=_}function A(){return l}return{start:E,rewind:h,pause:d,cancel:s,set:f,isPaused:A}}function pn(e){var t=e;function r(i){t=i}function n(i){return Ht(tt(i),t)}return{set:r,is:n}}function Nn(e,t){var r=pt(t||0,e,null,1);return function(){r.isPaused()&&r.start()}}function Sn(e,t,r){var n=e.state,i=r.breakpoints||{},o=r.reducedMotion||{},a=Dr(),c=[];function l(){var s=r.mediaQuery==="min";Ke(i).sort(function(f,A){return s?+f-+A:+A-+f}).forEach(function(f){u(i[f],"("+(s?"min":"max")+"-width:"+f+"px)")}),u(o,lr),E()}function v(s){s&&a.destroy()}function u(s,f){var A=matchMedia(f);a.bind(A,"change",E),c.push([s,A])}function E(){var s=n.is(dt),f=r.direction,A=c.reduce(function(_,m){return Ae(_,m[1].matches?m[0]:{})},{});vr(r),h(A),r.destroy?e.destroy(r.destroy==="completely"):s?(v(!0),e.mount()):f!==r.direction&&e.refresh()}function d(s){matchMedia(lr).matches&&(s?Ae(r,o):vr(r,Ke(o)))}function h(s,f,A){Ae(r,s),f&&Ae(Object.getPrototypeOf(r),s),(A||!n.is(Pe))&&e.emit(Q,r)}return{setup:l,destroy:v,reduce:d,set:h}}var Nt="Arrow",St=Nt+"Left",wt=Nt+"Right",Kr=Nt+"Up",$r=Nt+"Down",gr="rtl",Tt="ttb",It={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Kr,wt],ArrowRight:[$r,St]};function wn(e,t,r){function n(o,a,c){c=c||r.direction;var l=c===gr&&!a?1:c===Tt?0:-1;return It[o]&&It[o][l]||o.replace(/width|left|right/i,function(v,u){var E=It[v.toLowerCase()][l]||v;return u>0?E.charAt(0).toUpperCase()+E.slice(1):E})}function i(o){return o*(r.direction===gr?1:-1)}return{resolve:n,orient:i}}var ge="role",Ve="tabindex",Tn="disabled",ue="aria-",at=ue+"controls",jr=ue+"current",mr=ue+"selected",ne=ue+"label",tr=ue+"labelledby",Zr=ue+"hidden",rr=ue+"orientation",Je=ue+"roledescription",Er=ue+"live",_r=ue+"busy",Ar=ue+"atomic",nr=[ge,Ve,Tn,at,jr,ne,tr,Zr,rr,Je],le=it+"__",we="is-",xt=it,yr=le+"track",Ln=le+"list",Lt=le+"slide",Jr=Lt+"--clone",bn=Lt+"__container",ir=le+"arrows",bt=le+"arrow",Qr=bt+"--prev",en=bt+"--next",Rt=le+"pagination",tn=Rt+"__page",Rn=le+"progress",In=Rn+"__bar",xn=le+"toggle",On=le+"spinner",Cn=le+"sr",Dn=we+"initialized",xe=we+"active",rn=we+"prev",nn=we+"next",Ft=we+"visible",Ut=we+"loading",an=we+"focus-in",on=we+"overflow",Pn=[xe,Ft,rn,nn,Ut,an,on],Mn={slide:Lt,clone:Jr,arrows:ir,arrow:bt,prev:Qr,next:en,pagination:Rt,page:tn,spinner:On};function Vn(e,t){if(Lr(e.closest))return e.closest(t);for(var r=e;r&&r.nodeType===1&&!qe(r,t);)r=r.parentElement;return r}var kn=5,pr=200,un="touchstart mousedown",Ot="touchmove mousemove",Ct="touchend touchcancel mouseup click";function Fn(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=e.root,c=r.i18n,l={},v=[],u=[],E=[],d,h,s;function f(){g(),D(),m()}function A(){i(K,_),i(K,f),i(Q,m),o(document,un+" keydown",function(p){s=p.type==="keydown"},{capture:!0}),o(a,"focusin",function(){de(a,an,!!s)})}function _(p){var I=nr.concat("style");me(v),he(a,u),he(d,E),ce([d,h],I),ce(a,p?I:["style",Je])}function m(){he(a,u),he(d,E),u=M(xt),E=M(yr),se(a,u),se(d,E),k(a,ne,r.label),k(a,tr,r.labelledby)}function g(){d=R("."+yr),h=nt(d,"."+Ln),He(d&&h,"A track/list element is missing."),lt(v,Rr(h,"."+Lt+":not(."+Jr+")")),Re({arrows:ir,pagination:Rt,prev:Qr,next:en,bar:In,toggle:xn},function(p,I){l[I]=R("."+p)}),$e(l,{root:a,track:d,list:h,slides:v})}function D(){var p=a.id||An(it),I=r.role;a.id=p,d.id=d.id||p+"-track",h.id=h.id||p+"-list",!oe(a,ge)&&a.tagName!=="SECTION"&&I&&k(a,ge,I),k(a,Je,c.carousel),k(h,ge,"presentation")}function R(p){var I=Or(a,p);return I&&Vn(I,"."+xt)===a?I:void 0}function M(p){return[p+"--"+r.type,p+"--"+r.direction,r.drag&&p+"--draggable",r.isNavigation&&p+"--nav",p===xt&&xe]}return $e(l,{setup:f,mount:A,destroy:_})}var Ue="slide",ze="loop",ot="fade";function Un(e,t,r,n){var i=Y(e),o=i.on,a=i.emit,c=i.bind,l=e.Components,v=e.root,u=e.options,E=u.isNavigation,d=u.updateOnMove,h=u.i18n,s=u.pagination,f=u.slideFocus,A=l.Direction.resolve,_=oe(n,"style"),m=oe(n,ne),g=r>-1,D=nt(n,"."+bn),R;function M(){g||(n.id=v.id+"-slide"+Kt(t+1),k(n,ge,s?"tabpanel":"group"),k(n,Je,h.slide),k(n,ne,m||Vt(h.slideLabel,[t+1,e.length]))),p()}function p(){c(n,"click",z(a,$t,P)),c(n,"keydown",z(a,Xr,P)),o([Ge,qr,Oe],S),o(Zt,U),d&&o(Ee,C)}function I(){R=!0,i.destroy(),he(n,Pn),ce(n,nr),k(n,"style",_),k(n,ne,m||"")}function U(){var O=e.splides.map(function(N){var x=N.splide.Components.Slides.getAt(t);return x?x.slide.id:""}).join(" ");k(n,ne,Vt(h.slideX,(g?r:t)+1)),k(n,at,O),k(n,ge,f?"button":""),f&&ce(n,Je)}function C(){R||S()}function S(){if(!R){var O=e.index;w(),T(),de(n,rn,t===O-1),de(n,nn,t===O+1)}}function w(){var O=F();O!==dr(n,xe)&&(de(n,xe,O),k(n,jr,E&&O||""),a(O?Pr:Mr,P))}function T(){var O=X(),N=!O&&(!F()||g);if(e.state.is([Be,Qe])||k(n,Zr,N||""),k(Xt(n,u.focusableNodes||""),Ve,N?-1:""),f&&k(n,Ve,N?-1:0),O!==dr(n,Ft)&&(de(n,Ft,O),a(O?Vr:kr,P)),!O&&document.activeElement===n){var x=l.Slides.getAt(e.index);x&&Ir(x.slide)}}function V(O,N,x){ae(x&&D||n,O,N)}function F(){var O=e.index;return O===t||u.cloneStatus&&O===r}function X(){if(e.is(ot))return F();var O=re(l.Elements.track),N=re(n),x=A("left",!0),B=A("right",!0);return gt(O[x])<=Ze(N[x])&&gt(N[B])<=Ze(O[B])}function H(O,N){var x=te(O-t);return!g&&(u.rewind||e.is(ze))&&(x=pe(x,e.length-x)),x<=N}var P={index:t,slideIndex:r,slide:n,container:D,isClone:g,mount:M,destroy:I,update:S,style:V,isWithin:H};return P}function Bn(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=n.bind,c=t.Elements,l=c.slides,v=c.list,u=[];function E(){d(),i(K,h),i(K,d)}function d(){l.forEach(function(S,w){f(S,w,-1)})}function h(){R(function(S){S.destroy()}),me(u)}function s(){R(function(S){S.update()})}function f(S,w,T){var V=Un(e,w,T,S);V.mount(),u.push(V),u.sort(function(F,X){return F.index-X.index})}function A(S){return S?M(function(w){return!w.isClone}):u}function _(S){var w=t.Controller,T=w.toIndex(S),V=w.hasFocus()?1:r.perPage;return M(function(F){return ft(F.index,T,T+V-1)})}function m(S){return M(S)[0]}function g(S,w){ie(S,function(T){if(ye(T)&&(T=xr(T)),br(T)){var V=l[w];V?Yt(T,V):rt(v,T),se(T,r.classes.slide),I(T,z(o,Fe))}}),o(K)}function D(S){Ie(M(S).map(function(w){return w.slide})),o(K)}function R(S,w){A(w).forEach(S)}function M(S){return u.filter(Lr(S)?S:function(w){return ye(S)?qe(w.slide,S):Ht(tt(S),w.index)})}function p(S,w,T){R(function(V){V.style(S,w,T)})}function I(S,w){var T=Xt(S,"img"),V=T.length;V?T.forEach(function(F){a(F,"load error",function(){--V||w()})}):w()}function U(S){return S?l.length:u.length}function C(){return u.length>r.perPage}return{mount:E,destroy:h,update:s,register:f,get:A,getIn:_,getAt:m,add:g,remove:D,forEach:R,filter:M,style:p,getLength:U,isEnough:C}}function Gn(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=n.emit,c=t.Slides,l=t.Direction.resolve,v=t.Elements,u=v.root,E=v.track,d=v.list,h=c.getAt,s=c.style,f,A,_;function m(){g(),o(window,"resize load",Nn(z(a,Fe))),i([Q,K],g),i(Fe,D)}function g(){f=r.direction===Tt,ae(u,"maxWidth",Le(r.width)),ae(E,l("paddingLeft"),R(!1)),ae(E,l("paddingRight"),R(!0)),D(!0)}function D(P){var O=re(u);(P||A.width!==O.width||A.height!==O.height)&&(ae(E,"height",M()),s(l("marginRight"),Le(r.gap)),s("width",I()),s("height",U(),!0),A=O,a(At),_!==(_=H())&&(de(u,on,_),a(yn,_)))}function R(P){var O=r.padding,N=l(P?"right":"left");return O&&Le(O[N]||(Xe(O)?0:O))||"0px"}function M(){var P="";return f&&(P=p(),He(P,"height or heightRatio is missing."),P="calc("+P+" - "+R(!1)+" - "+R(!0)+")"),P}function p(){return Le(r.height||re(d).width*r.heightRatio)}function I(){return r.autoWidth?null:Le(r.fixedWidth)||(f?"":C())}function U(){return Le(r.fixedHeight)||(f?r.autoHeight?null:C():p())}function C(){var P=Le(r.gap);return"calc((100%"+(P&&" + "+P)+")/"+(r.perPage||1)+(P&&" - "+P)+")"}function S(){return re(d)[l("width")]}function w(P,O){var N=h(P||0);return N?re(N.slide)[l("width")]+(O?0:F()):0}function T(P,O){var N=h(P);if(N){var x=re(N.slide)[l("right")],B=re(d)[l("left")];return te(x-B)+(O?0:F())}return 0}function V(P){return T(e.length-1)-T(0)+w(0,P)}function F(){var P=h(0);return P&&parseFloat(ae(P.slide,l("marginRight")))||0}function X(P){return parseFloat(ae(E,l("padding"+(P?"Right":"Left"))))||0}function H(){return e.is(ot)||V(!0)>S()}return{mount:m,resize:D,listSize:S,slideSize:w,sliderSize:V,totalSize:T,getPadding:X,isOverflow:H}}var zn=2;function Wn(e,t,r){var n=Y(e),i=n.on,o=t.Elements,a=t.Slides,c=t.Direction.resolve,l=[],v;function u(){i(K,E),i([Q,Fe],h),(v=A())&&(s(v),t.Layout.resize(!0))}function E(){d(),u()}function d(){Ie(l),me(l),n.destroy()}function h(){var _=A();v!==_&&(v<_||!_)&&n.emit(K)}function s(_){var m=a.get().slice(),g=m.length;if(g){for(;m.length<_;)lt(m,m);lt(m.slice(-_),m.slice(0,_)).forEach(function(D,R){var M=R<_,p=f(D.slide,R);M?Yt(p,m[0].slide):rt(o.list,p),lt(l,p),a.register(p,R-_+(M?0:g),D.index)})}}function f(_,m){var g=_.cloneNode(!0);return se(g,r.classes.clone),g.id=e.root.id+"-clone"+Kt(m+1),g}function A(){var _=r.clones;if(!e.is(ze))_=0;else if(et(_)){var m=r[c("fixedWidth")]&&t.Layout.slideSize(0),g=m&&Ze(re(o.track)[c("width")]/m);_=g||r[c("autoWidth")]&&e.length||r.perPage*zn}return _}return{mount:u,destroy:d}}function Hn(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=e.state.set,c=t.Layout,l=c.slideSize,v=c.getPadding,u=c.totalSize,E=c.listSize,d=c.sliderSize,h=t.Direction,s=h.resolve,f=h.orient,A=t.Elements,_=A.list,m=A.track,g;function D(){g=t.Transition,i([Se,At,Q,K],R)}function R(){t.Controller.isBusy()||(t.Scroll.cancel(),p(e.index),t.Slides.update())}function M(N,x,B,j){N!==x&&P(N>B)&&(S(),I(C(V(),N>B),!0)),a(Be),o(Ee,x,B,N),g.start(x,function(){a(ke),o(Ge,x,B,N),j&&j()})}function p(N){I(T(N,!0))}function I(N,x){if(!e.is(ot)){var B=x?N:U(N);ae(_,"transform","translate"+s("X")+"("+B+"px)"),N!==B&&o(qr)}}function U(N){if(e.is(ze)){var x=w(N),B=x>t.Controller.getEnd(),j=x<0;(j||B)&&(N=C(N,B))}return N}function C(N,x){var B=N-H(x),j=d();return N-=f(j*(Ze(te(B)/j)||1))*(x?1:-1),N}function S(){I(V(),!0),g.cancel()}function w(N){for(var x=t.Slides.get(),B=0,j=1/0,$=0;$<x.length;$++){var _e=x[$].index,y=te(T(_e,!0)-N);if(y<=j)j=y,B=_e;else break}return B}function T(N,x){var B=f(u(N-1)-X(N));return x?F(B):B}function V(){var N=s("left");return re(_)[N]-re(m)[N]+f(v(!1))}function F(N){return r.trimSpace&&e.is(Ue)&&(N=Ce(N,0,f(d(!0)-E()))),N}function X(N){var x=r.focus;return x==="center"?(E()-l(N,!0))/2:+x*l(N)||0}function H(N){return T(N?t.Controller.getEnd():0,!!r.trimSpace)}function P(N){var x=f(C(V(),N));return N?x>=0:x<=_[s("scrollWidth")]-re(m)[s("width")]}function O(N,x){x=et(x)?V():x;var B=N!==!0&&f(x)<f(H(!1)),j=N!==!1&&f(x)>f(H(!0));return B||j}return{mount:D,move:M,jump:p,translate:I,shift:C,cancel:S,toIndex:w,toPosition:T,getPosition:V,getLimit:H,exceededLimit:O,reposition:R}}function Yn(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=t.Move,c=a.getPosition,l=a.getLimit,v=a.toPosition,u=t.Slides,E=u.isEnough,d=u.getLength,h=r.omitEnd,s=e.is(ze),f=e.is(Ue),A=z(V,!1),_=z(V,!0),m=r.start||0,g,D=m,R,M,p;function I(){U(),i([Q,K,mt],U),i(At,C)}function U(){R=d(!0),M=r.perMove,p=r.perPage,g=P();var y=Ce(m,0,h?g:R-1);y!==m&&(m=y,a.reposition())}function C(){g!==P()&&o(mt)}function S(y,G,ee){if(!_e()){var q=T(y),Z=H(q);Z>-1&&(G||Z!==m)&&(B(Z),a.move(q,Z,D,ee))}}function w(y,G,ee,q){t.Scroll.scroll(y,G,ee,function(){var Z=H(a.toIndex(c()));B(h?pe(Z,g):Z),q&&q()})}function T(y){var G=m;if(ye(y)){var ee=y.match(/([+\-<>])(\d+)?/)||[],q=ee[1],Z=ee[2];q==="+"||q==="-"?G=F(m+ +(""+q+(+Z||1)),m):q===">"?G=Z?O(+Z):A(!0):q==="<"&&(G=_(!0))}else G=s?y:Ce(y,0,g);return G}function V(y,G){var ee=M||($()?1:p),q=F(m+ee*(y?-1:1),m,!(M||$()));return q===-1&&f&&!Cr(c(),l(!y),1)?y?0:g:G?q:H(q)}function F(y,G,ee){if(E()||$()){var q=X(y);q!==y&&(G=y,y=q,ee=!1),y<0||y>g?!M&&(ft(0,y,G,!0)||ft(g,G,y,!0))?y=O(N(y)):s?y=ee?y<0?-(R%p||p):R:y:r.rewind?y=y<0?g:0:y=-1:ee&&y!==G&&(y=O(N(G)+(y<G?-1:1)))}else y=-1;return y}function X(y){if(f&&r.trimSpace==="move"&&y!==m)for(var G=c();G===v(y,!0)&&ft(y,0,e.length-1,!r.rewind);)y<m?--y:++y;return y}function H(y){return s?(y+R)%R||0:y}function P(){for(var y=R-($()||s&&M?1:p);h&&y-- >0;)if(v(R-1,!0)!==v(y,!0)){y++;break}return Ce(y,0,R-1)}function O(y){return Ce($()?y:p*y,0,g)}function N(y){return $()?pe(y,g):gt((y>=g?R-1:y)/p)}function x(y){var G=a.toIndex(y);return f?Ce(G,0,g):G}function B(y){y!==m&&(D=m,m=y)}function j(y){return y?D:m}function $(){return!et(r.focus)||r.isNavigation}function _e(){return e.state.is([Be,Qe])&&!!r.waitForTransition}return{mount:I,go:S,scroll:w,getNext:A,getPrev:_,getAdjacent:V,getEnd:P,setIndex:B,getIndex:j,toIndex:O,toPage:N,toDest:x,hasFocus:$,isBusy:_e}}var Xn="http://www.w3.org/2000/svg",qn="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",ut=40;function Kn(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=n.emit,c=r.classes,l=r.i18n,v=t.Elements,u=t.Controller,E=v.arrows,d=v.track,h=E,s=v.prev,f=v.next,A,_,m={};function g(){R(),i(Q,D)}function D(){M(),g()}function R(){var w=r.arrows;w&&!(s&&f)&&U(),s&&f&&($e(m,{prev:s,next:f}),je(h,w?"":"none"),se(h,_=ir+"--"+r.direction),w&&(p(),S(),k([s,f],at,d.id),a(Gr,s,f)))}function M(){n.destroy(),he(h,_),A?(Ie(E?[s,f]:h),s=f=null):ce([s,f],nr)}function p(){i([Se,Ge,K,Oe,mt],S),o(f,"click",z(I,">")),o(s,"click",z(I,"<"))}function I(w){u.go(w,!0)}function U(){h=E||Me("div",c.arrows),s=C(!0),f=C(!1),A=!0,rt(h,[s,f]),!E&&Yt(h,d)}function C(w){var T='<button class="'+c.arrow+" "+(w?c.prev:c.next)+'" type="button"><svg xmlns="'+Xn+'" viewBox="0 0 '+ut+" "+ut+'" width="'+ut+'" height="'+ut+'" focusable="false"><path d="'+(r.arrowPath||qn)+'" />';return xr(T)}function S(){if(s&&f){var w=e.index,T=u.getPrev(),V=u.getNext(),F=T>-1&&w<T?l.last:l.prev,X=V>-1&&w>V?l.first:l.next;s.disabled=T<0,f.disabled=V<0,k(s,ne,F),k(f,ne,X),a(zr,s,f,T,V)}}return{arrows:m,mount:g,destroy:M,update:S}}var $n=qt+"-interval";function jn(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=n.emit,c=pt(r.interval,e.go.bind(e,">"),p),l=c.isPaused,v=t.Elements,u=t.Elements,E=u.root,d=u.toggle,h=r.autoplay,s,f,A=h==="pause";function _(){h&&(m(),d&&k(d,at,v.track.id),A||g(),M())}function m(){r.pauseOnHover&&o(E,"mouseenter mouseleave",function(U){s=U.type==="mouseenter",R()}),r.pauseOnFocus&&o(E,"focusin focusout",function(U){f=U.type==="focusin",R()}),d&&o(d,"click",function(){A?g():D(!0)}),i([Ee,yt,K],c.rewind),i(Ee,I)}function g(){l()&&t.Slides.isEnough()&&(c.start(!r.resetProgress),f=s=A=!1,M(),a(Jt))}function D(U){U===void 0&&(U=!0),A=!!U,M(),l()||(c.pause(),a(Qt))}function R(){A||(s||f?D(!1):g())}function M(){d&&(de(d,xe,!A),k(d,ne,r.i18n[A?"play":"pause"]))}function p(U){var C=v.bar;C&&ae(C,"width",U*100+"%"),a(Yr,U)}function I(U){var C=t.Slides.getAt(U);c.set(C&&+oe(C.slide,$n)||r.interval)}return{mount:_,destroy:c.cancel,play:g,pause:D,isPaused:l}}function Zn(e,t,r){var n=Y(e),i=n.on;function o(){r.cover&&(i(er,z(c,!0)),i([Se,Q,K],z(a,!0)))}function a(l){t.Slides.forEach(function(v){var u=nt(v.container||v.slide,"img");u&&u.src&&c(l,u,v)})}function c(l,v,u){u.style("background",l?'center/cover no-repeat url("'+v.src+'")':"",!0),je(v,l?"none":"")}return{mount:o,destroy:z(a,!1)}}var Jn=10,Qn=600,ei=.6,ti=1.5,ri=800;function ni(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=e.state.set,c=t.Move,l=c.getPosition,v=c.getLimit,u=c.exceededLimit,E=c.translate,d=e.is(Ue),h,s,f=1;function A(){i(Ee,D),i([Q,K],R)}function _(p,I,U,C,S){var w=l();if(D(),U&&(!d||!u())){var T=t.Layout.sliderSize(),V=Mt(p)*T*gt(te(p)/T)||0;p=c.toPosition(t.Controller.toDest(p%T))+V}var F=Cr(w,p,1);f=1,I=F?0:I||ht(te(p-w)/ti,ri),s=C,h=pt(I,m,z(g,w,p,S),1),a(Qe),o(yt),h.start()}function m(){a(ke),s&&s(),o(Oe)}function g(p,I,U,C){var S=l(),w=p+(I-p)*M(C),T=(w-S)*f;E(S+T),d&&!U&&u()&&(f*=ei,te(T)<Jn&&_(v(u(!0)),Qn,!1,s,!0))}function D(){h&&h.cancel()}function R(){h&&!h.isPaused()&&(D(),m())}function M(p){var I=r.easingFunc;return I?I(p):1-Math.pow(1-p,4)}return{mount:A,destroy:D,scroll:_,cancel:R}}var De={passive:!1,capture:!0};function ii(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=n.bind,c=n.unbind,l=e.state,v=t.Move,u=t.Scroll,E=t.Controller,d=t.Elements.track,h=t.Media.reduce,s=t.Direction,f=s.resolve,A=s.orient,_=v.getPosition,m=v.exceededLimit,g,D,R,M,p,I=!1,U,C,S;function w(){a(d,Ot,Dt,De),a(d,Ct,Dt,De),a(d,un,V,De),a(d,"click",H,{capture:!0}),a(d,"dragstart",ve),i([Se,Q],T)}function T(){var L=r.drag;sr(!L),M=L==="free"}function V(L){if(U=!1,!C){var W=Z(L);q(L.target)&&(W||!L.button)&&(E.isBusy()?ve(L,!0):(S=W?d:window,p=l.is([Be,Qe]),R=null,a(S,Ot,F,De),a(S,Ct,X,De),v.cancel(),u.cancel(),P(L)))}}function F(L){if(l.is(ct)||(l.set(ct),o(Fr)),L.cancelable)if(p){v.translate(g+ee($(L)));var W=_e(L)>pr,Te=I!==(I=m());(W||Te)&&P(L),U=!0,o(Ur),ve(L)}else x(L)&&(p=N(L),ve(L))}function X(L){l.is(ct)&&(l.set(ke),o(Br)),p&&(O(L),ve(L)),c(S,Ot,F),c(S,Ct,X),p=!1}function H(L){!C&&U&&ve(L,!0)}function P(L){R=D,D=L,g=_()}function O(L){var W=B(L),Te=j(W),We=r.rewind&&r.rewindByDrag;h(!1),M?E.scroll(Te,0,r.snap):e.is(ot)?E.go(A(Mt(W))<0?We?"<":"-":We?">":"+"):e.is(Ue)&&I&&We?E.go(m(!0)?">":"<"):E.go(E.toDest(Te),!0),h(!0)}function N(L){var W=r.dragMinThreshold,Te=Xe(W),We=Te&&W.mouse||0,cn=(Te?W.touch:+W)||10;return te($(L))>(Z(L)?cn:We)}function x(L){return te($(L))>te($(L,!0))}function B(L){if(e.is(ze)||!I){var W=_e(L);if(W&&W<pr)return $(L)/W}return 0}function j(L){return _()+Mt(L)*pe(te(L)*(r.flickPower||600),M?1/0:t.Layout.listSize()*(r.flickMaxPages||1))}function $(L,W){return G(L,W)-G(y(L),W)}function _e(L){return Pt(L)-Pt(y(L))}function y(L){return D===L&&R||D}function G(L,W){return(Z(L)?L.changedTouches[0]:L)["page"+f(W?"Y":"X")]}function ee(L){return L/(I&&e.is(Ue)?kn:1)}function q(L){var W=r.noDrag;return!qe(L,"."+tn+", ."+bt)&&(!W||!qe(L,W))}function Z(L){return typeof TouchEvent<"u"&&L instanceof TouchEvent}function sn(){return p}function sr(L){C=L}return{mount:w,disable:sr,isDragging:sn}}var ai={Spacebar:" ",Right:wt,Left:St,Up:Kr,Down:$r};function ar(e){return e=ye(e)?e:e.key,ai[e]||e}var Nr="keydown";function oi(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=n.unbind,c=e.root,l=t.Direction.resolve,v,u;function E(){d(),i(Q,h),i(Q,d),i(Ee,f)}function d(){var _=r.keyboard;_&&(v=_==="global"?window:c,o(v,Nr,A))}function h(){a(v,Nr)}function s(_){u=_}function f(){var _=u;u=!0,Tr(function(){u=_})}function A(_){if(!u){var m=ar(_);m===l(St)?e.go("<"):m===l(wt)&&e.go(">")}}return{mount:E,destroy:h,disable:s}}var Ye=qt+"-lazy",vt=Ye+"-srcset",ui="["+Ye+"], ["+vt+"]";function si(e,t,r){var n=Y(e),i=n.on,o=n.off,a=n.bind,c=n.emit,l=r.lazyLoad==="sequential",v=[Ge,Oe],u=[];function E(){r.lazyLoad&&(d(),i(K,d))}function d(){me(u),h(),l?_():(o(v),i(v,s),s())}function h(){t.Slides.forEach(function(m){Xt(m.slide,ui).forEach(function(g){var D=oe(g,Ye),R=oe(g,vt);if(D!==g.src||R!==g.srcset){var M=r.classes.spinner,p=g.parentElement,I=nt(p,"."+M)||Me("span",M,p);u.push([g,m,I]),g.src||je(g,"none")}})})}function s(){u=u.filter(function(m){var g=r.perPage*((r.preloadPages||1)+1)-1;return m[1].isWithin(e.index,g)?f(m):!0}),u.length||o(v)}function f(m){var g=m[0];se(m[1].slide,Ut),a(g,"load error",z(A,m)),k(g,"src",oe(g,Ye)),k(g,"srcset",oe(g,vt)),ce(g,Ye),ce(g,vt)}function A(m,g){var D=m[0],R=m[1];he(R.slide,Ut),g.type!=="error"&&(Ie(m[2]),je(D,""),c(er,D,R),c(Fe)),l&&_()}function _(){u.length&&f(u.shift())}return{mount:E,destroy:z(me,u),check:s}}function ci(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=n.bind,c=t.Slides,l=t.Elements,v=t.Controller,u=v.hasFocus,E=v.getIndex,d=v.go,h=t.Direction.resolve,s=l.pagination,f=[],A,_;function m(){g(),i([Q,K,mt],m);var C=r.pagination;s&&je(s,C?"":"none"),C&&(i([Ee,yt,Oe],U),D(),U(),o(Wr,{list:A,items:f},I(e.index)))}function g(){A&&(Ie(s?Ne(A.children):A),he(A,_),me(f),A=null),n.destroy()}function D(){var C=e.length,S=r.classes,w=r.i18n,T=r.perPage,V=u()?v.getEnd()+1:Ze(C/T);A=s||Me("ul",S.pagination,l.track.parentElement),se(A,_=Rt+"--"+p()),k(A,ge,"tablist"),k(A,ne,w.select),k(A,rr,p()===Tt?"vertical":"");for(var F=0;F<V;F++){var X=Me("li",null,A),H=Me("button",{class:S.page,type:"button"},X),P=c.getIn(F).map(function(N){return N.slide.id}),O=!u()&&T>1?w.pageX:w.slideX;a(H,"click",z(R,F)),r.paginationKeyboard&&a(H,"keydown",z(M,F)),k(X,ge,"presentation"),k(H,ge,"tab"),k(H,at,P.join(" ")),k(H,ne,Vt(O,F+1)),k(H,Ve,-1),f.push({li:X,button:H,page:F})}}function R(C){d(">"+C,!0)}function M(C,S){var w=f.length,T=ar(S),V=p(),F=-1;T===h(wt,!1,V)?F=++C%w:T===h(St,!1,V)?F=(--C+w)%w:T==="Home"?F=0:T==="End"&&(F=w-1);var X=f[F];X&&(Ir(X.button),d(">"+F),ve(S,!0))}function p(){return r.paginationDirection||r.direction}function I(C){return f[v.toPage(C)]}function U(){var C=I(E(!0)),S=I(E());if(C){var w=C.button;he(w,xe),ce(w,mr),k(w,Ve,-1)}if(S){var T=S.button;se(T,xe),k(T,mr,!0),k(T,Ve,"")}o(Hr,{list:A,items:f},C,S)}return{items:f,mount:m,destroy:g,getAt:I,update:U}}var li=[" ","Enter"];function fi(e,t,r){var n=r.isNavigation,i=r.slideFocus,o=[];function a(){e.splides.forEach(function(s){s.isParent||(v(e,s.splide),v(s.splide,e))}),n&&u()}function c(){o.forEach(function(s){s.destroy()}),me(o)}function l(){c(),a()}function v(s,f){var A=Y(s);A.on(Ee,function(_,m,g){f.go(f.is(ze)?g:_)}),o.push(A)}function u(){var s=Y(e),f=s.on;f($t,d),f(Xr,h),f([Se,Q],E),o.push(s),s.emit(Zt,e.splides)}function E(){k(t.Elements.list,rr,r.direction===Tt?"vertical":"")}function d(s){e.go(s.index)}function h(s,f){Ht(li,ar(f))&&(d(s),ve(f))}return{setup:z(t.Media.set,{slideFocus:et(i)?n:i},!0),mount:a,destroy:c,remount:l}}function vi(e,t,r){var n=Y(e),i=n.bind,o=0;function a(){r.wheel&&i(t.Elements.track,"wheel",c,De)}function c(v){if(v.cancelable){var u=v.deltaY,E=u<0,d=Pt(v),h=r.wheelMinThreshold||0,s=r.wheelSleep||0;te(u)>h&&d-o>s&&(e.go(E?"<":">"),o=d),l(E)&&ve(v)}}function l(v){return!r.releaseWheel||e.state.is(Be)||t.Controller.getAdjacent(v)!==-1}return{mount:a}}var di=90;function hi(e,t,r){var n=Y(e),i=n.on,o=t.Elements.track,a=r.live&&!r.isNavigation,c=Me("span",Cn),l=pt(di,z(u,!1));function v(){a&&(d(!t.Autoplay.isPaused()),k(o,Ar,!0),c.textContent="…",i(Jt,z(d,!0)),i(Qt,z(d,!1)),i([Ge,Oe],z(u,!0)))}function u(h){k(o,_r,h),h?(rt(o,c),l.start()):(Ie(c),l.cancel())}function E(){ce(o,[Er,Ar,_r]),Ie(c)}function d(h){a&&k(o,Er,h?"off":"polite")}return{mount:v,disable:d,destroy:E}}var gi=Object.freeze({__proto__:null,Media:Sn,Direction:wn,Elements:Fn,Slides:Bn,Layout:Gn,Clones:Wn,Move:Hn,Controller:Yn,Arrows:Kn,Autoplay:jn,Cover:Zn,Scroll:ni,Drag:ii,Keyboard:oi,LazyLoad:si,Pagination:ci,Sync:fi,Wheel:vi,Live:hi}),mi={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},Ei={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Mn,i18n:mi,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function _i(e,t,r){var n=t.Slides;function i(){Y(e).on([Se,K],o)}function o(){n.forEach(function(c){c.style("transform","translateX(-"+100*c.index+"%)")})}function a(c,l){n.style("transition","opacity "+r.speed+"ms "+r.easing),Tr(l)}return{mount:i,start:a,cancel:Dt}}function Ai(e,t,r){var n=t.Move,i=t.Controller,o=t.Scroll,a=t.Elements.list,c=z(ae,a,"transition"),l;function v(){Y(e).bind(a,"transitionend",function(h){h.target===a&&l&&(E(),l())})}function u(h,s){var f=n.toPosition(h,!0),A=n.getPosition(),_=d(h);te(f-A)>=1&&_>=1?r.useScroll?o.scroll(f,_,!1,s):(c("transform "+_+"ms "+r.easing),n.translate(f,!0),l=s):(n.jump(h),s())}function E(){c(""),o.cancel()}function d(h){var s=r.rewindSpeed;if(e.is(Ue)&&s){var f=i.getIndex(!0),A=i.getEnd();if(f===0&&h>=A||f>=A&&h===0)return s}return r.speed}return{mount:v,start:u,cancel:E}}var yi=function(){function e(r,n){this.event=Y(),this.Components={},this.state=pn(Pe),this.splides=[],this._o={},this._E={};var i=ye(r)?Or(document,r):r;He(i,i+" is invalid."),this.root=i,n=Ae({label:oe(i,ne)||"",labelledby:oe(i,tr)||""},Ei,e.defaults,n||{});try{Ae(n,JSON.parse(oe(i,qt)))}catch{He(!1,"Invalid JSON")}this._o=Object.create(Ae({},n))}var t=e.prototype;return t.mount=function(n,i){var o=this,a=this.state,c=this.Components;He(a.is([Pe,dt]),"Already mounted!"),a.set(Pe),this._C=c,this._T=i||this._T||(this.is(ot)?_i:Ai),this._E=n||this._E;var l=$e({},gi,this._E,{Transition:this._T});return Re(l,function(v,u){var E=v(o,c,o._o);c[u]=E,E.setup&&E.setup()}),Re(c,function(v){v.mount&&v.mount()}),this.emit(Se),se(this.root,Dn),a.set(ke),this.emit(kt),this},t.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(ke)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},t.go=function(n){return this._C.Controller.go(n),this},t.on=function(n,i){return this.event.on(n,i),this},t.off=function(n){return this.event.off(n),this},t.emit=function(n){var i;return(i=this.event).emit.apply(i,[n].concat(Ne(arguments,1))),this},t.add=function(n,i){return this._C.Slides.add(n,i),this},t.remove=function(n){return this._C.Slides.remove(n),this},t.is=function(n){return this._o.type===n},t.refresh=function(){return this.emit(K),this},t.destroy=function(n){n===void 0&&(n=!0);var i=this.event,o=this.state;return o.is(Pe)?Y(this).on(kt,this.destroy.bind(this,n)):(Re(this._C,function(a){a.destroy&&a.destroy(n)},!0),i.emit(jt),i.destroy(),n&&me(this.splides),o.set(dt)),this},mn(e,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),or=yi;or.defaults={};or.STATES=_n;var Sr=[[Se,"onMounted"],[kt,"onReady"],[Ee,"onMove"],[Ge,"onMoved"],[$t,"onClick"],[Pr,"onActive"],[Mr,"onInactive"],[Vr,"onVisible"],[kr,"onHidden"],[K,"onRefresh"],[Q,"onUpdated"],[Fe,"onResize"],[At,"onResized"],[Fr,"onDrag"],[Ur,"onDragging"],[Br,"onDragged"],[yt,"onScroll"],[Oe,"onScrolled"],[jt,"onDestroy"],[Gr,"onArrowsMounted"],[zr,"onArrowsUpdated"],[Wr,"onPaginationMounted"],[Hr,"onPaginationUpdated"],[Zt,"onNavigationMounted"],[Jt,"onAutoplayPlay"],[Yr,"onAutoplayPlaying"],[Qt,"onAutoplayPause"],[er,"onLazyLoadLoaded"]];function ur(...e){return e.filter(Boolean).join(" ")}function Et(e){return e!==null&&typeof e=="object"}function Bt(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((r,n)=>!Bt(r,t[n]));if(Et(e)&&Et(t)){const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&!r.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!Bt(e[i],t[i]))}return e===t}function pi(e,t){return e.length===t.length&&!e.some((r,n)=>r!==t[n])}function Ni(e,t){if(e){const r=Object.keys(e);for(let n=0;n<r.length;n++){const i=r[n];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function Gt(e,t){const r=e;return Ni(t,(n,i)=>{Array.isArray(n)?r[i]=n.slice():Et(n)?r[i]=Gt(Et(r[i])?r[i]:{},n):r[i]=n}),r}var Si=({children:e,className:t,...r})=>be.createElement("div",{className:ur("splide__track",t),...r},be.createElement("ul",{className:"splide__list"},e)),wi=class extends be.Component{constructor(){super(...arguments),this.splideRef=be.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:r}=this.props,{current:n}=this.splideRef;n&&(this.splide=new or(n,e),this.bind(this.splide),this.splide.mount(t,r),this.options=Gt({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!Bt(this.options,e)&&(this.splide.options=e,this.options=Gt({},e));const t=this.getSlides();pi(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){Sr.forEach(([t,r])=>{const n=this.props[r];typeof n=="function"&&e.on(t,(...i)=>{n(e,...i)})})}omit(e,t){return t.forEach(r=>{Object.prototype.hasOwnProperty.call(e,r)&&delete e[r]}),e}render(){const{className:e,tag:t="div",hasTrack:r=!0,children:n,...i}=this.props;return be.createElement(t,{className:ur("splide",e),ref:this.splideRef,...this.omit(i,["options",...Sr.map(o=>o[1])])},r?be.createElement(Si,null,n):n)}},Ti=({children:e,className:t,...r})=>be.createElement("li",{className:ur("splide__slide",t),...r},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function Li({latest:e,latests:t,blog:r,blog_category:n,trending_posts:i}){return J(wr,{children:[J("section",{className:"flex flex-col lg:flex-row lg:space-x-5 justify-between items-center bg-gray-50 p-2 lg:p-10",children:[b(wi,{options:{autoplay:!0,arrows:!1,type:"loop",interval:6e3},className:"w-full lg:w-3/4",children:t&&t.map((o,a)=>J(Ti,{className:"flex flex-col lg:flex-row lg:space-x-5 justify-between items-center md:px-1",children:[b("div",{className:"w-full lg:w-3/5",children:b(fe,{href:"/"+o.slug,title:o.title,children:b("img",{src:o.imageurl,alt:o.title,className:"h-72 lg:h-96 w-full object-cover"})})}),J("div",{className:"lg:flex-1 space-y-4 mt-2 sm:text-center text-left",children:[b("h1",{className:"text-2xl lg:text-3xl font-bold text-primary hover:underline text-left line-clamp-4",children:b(fe,{href:"/"+o.slug,children:o.title})}),b("p",{className:"max-w-xl text-lg leading-relaxed text-gray-800 sm:mx-auto lg:ml-0 text-left line-clamp-5",children:o.description}),b(fe,{href:"/"+o.slug,title:o.title,className:"block text-primary rounded-md hover:underline text-left",children:"Read more"})]})]},a))}),J("div",{className:"hidden md:block w-full lg:w-1/4 text-gray-800",children:[b("h2",{className:"font-semibold text-lg",children:"Must Read"}),t&&t.map((o,a)=>b(fe,{href:"/"+o.slug,children:b(gn,{image:o.imageurl,title:o.title})},a)),J(fe,{href:"/search",className:"flex space-x-2 items-center font-semibold text-base text-primary float-right hover:underline",children:[b("span",{children:"See more articles"}),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 animate-pulse",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"})})]})]})]}),J("div",{id:"whole-page",className:"container mx-auto flex flex-wrap pb-6",children:[J("section",{id:"left",className:"w-full md:w-2/3 flex flex-col items-center px-3 divide-y-2 divide-yellow-200",children:[J("div",{className:"w-full justify-start mb-5",children:[b("h2",{className:"mb-2 mt-5 text-lg font-extrabold text-gray-900 dark:text-white",children:b("span",{className:"text-transparent bg-clip-text bg-primary",children:"Latest"})}),b("div",{className:"grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-5",children:t&&t.map((o,a)=>b(fe,{href:"/"+o.slug,children:b(hn,{title:o.title,content:o.description,time:o.updated_at,image:o.imageurl})},a))})]}),b("div",{className:"w-full",children:b(st,{dataAdSlot:"6063218924"})}),b("div",{className:"w-full justify-start",children:b(dn,{defaultItems:n,Widget:bi})})]}),J("aside",{id:"right",className:"w-full md:w-1/3 flex flex-col items-center px-3",children:[b("div",{className:"w-full",children:b(st,{dataAdSlot:"6063218924"})}),J("div",{className:"sticky top-32",children:[b("h2",{className:"ml-6 mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-base",children:b("span",{className:"text-transparent bg-clip-text bg-primary",children:"Most Popular"})}),i&&i.map((o,a)=>b(fe,{href:"/"+o.slug,children:b(fn,{image:o.imageurl,title:o.title,time:o.created_at})},a)),b("div",{className:"w-full",children:b(st,{dataAdSlot:"6063218924"})})]})]})]})]})}function bi({item:e}){return e.two_blog.length==0?b(wr,{}):J("div",{className:"divide-y-2 divide-yellow-200",children:[b("h2",{className:"mb-2 my-10 text-lg font-extrabold text-gray-900 dark:text-white",children:b("span",{className:"text-transparent bg-clip-text bg-primary",children:e.name})}),e.two_blog.map((t,r)=>b(fe,{href:"/"+t.slug,children:b(ln,{image:t.imageurl,title:t.title,description:t.description,time:t.created_at},t.id)},r)),b(fe,{href:"/category/"+e.slug,type:"submit",className:"m-2 p-2 text-sm font-medium text-white bg-primary focus:ring-4 focus:outline-none",children:"More "+e.name}),b("div",{className:"w-full mt-5",children:b(st,{dataAdSlot:"6063218924"})})]})}Li.layout=e=>b(vn,{children:e});export{Li as default};