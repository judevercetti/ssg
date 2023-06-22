import{a as b,j as J,F as Dt}from"./jsx-runtime-b804a66f.js";import{R as be,L as fe}from"./app-c3da390d.js";import{B as ln}from"./BlogListCard-6c0cf40f.js";import{B as fn}from"./BlogAsideCard-30bdc116.js";import{L as vn}from"./Layout-1cfbea18.js";import{A as st}from"./AdsComponent-a46e96b0.js";import dn from"./InfinityList-59f05d68.js";import"./index-519fa432.js";import"./ReactToastify-11344515.js";function hn({title:e,content:t,time:r,image:n}){return b("div",{children:J("div",{className:"w-full rounded-lg lg:max-w-sm",children:[b("img",{className:"object-cover w-full h-48",src:"/"+n,alt:"image"}),J("div",{className:"p-4",children:[b("h3",{className:"text-lg font-bold mb-1 line-clamp-2 hover:underline",children:e}),b("p",{className:"mb-2 leading-normal text-gray-500 line-clamp-2",children:t}),b("p",{className:"text-gray-500 mb-1",children:b("small",{children:b("u",{children:new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})})]})]})})}function gn({title:e,time:t,image:r}){return b("div",{children:b("div",{className:"py-2 border-t border-gray-400",children:J("div",{className:"flex flex-wrap lg:flex-nowrap items-center",children:[b("div",{className:"w-full lg:w-auto mr-2 mb-8 lg:mb-0",children:b("img",{className:"block w-40 h-16 object-cover",src:"/"+r,alt:""})}),b("div",{className:"w-full lg:w-9/12 mr-2 mb-10 lg:mb-0",children:b("div",{className:"max-w-2xl",children:b("h3",{className:"text-sm font-semibold line-clamp-3 hover:underline",children:e})})})]})})})}function lr(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function mn(e,t,r){return t&&lr(e.prototype,t),r&&lr(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var fr="(prefers-reduced-motion: reduce)",Pe=1,En=2,ke=3,Be=4,Qe=5,ct=6,dt=7,An={CREATED:Pe,MOUNTED:En,IDLE:ke,MOVING:Be,SCROLLING:Qe,DRAGGING:ct,DESTROYED:dt};function me(e){e.length=0}function Ne(e,t,r){return Array.prototype.slice.call(e,t,r)}function z(e){return e.bind.apply(e,[null].concat(Ne(arguments,1)))}var wr=setTimeout,Pt=function(){};function vr(e){return requestAnimationFrame(e)}function At(e,t){return typeof t===e}function Xe(e){return!Ht(e)&&At("object",e)}var Wt=Array.isArray,Lr=z(At,"function"),ye=z(At,"string"),et=z(At,"undefined");function Ht(e){return e===null}function br(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function tt(e){return Wt(e)?e:[e]}function ie(e,t){tt(e).forEach(t)}function Yt(e,t){return e.indexOf(t)>-1}function lt(e,t){return e.push.apply(e,tt(t)),e}function de(e,t,r){e&&ie(t,function(n){n&&e.classList[r?"add":"remove"](n)})}function se(e,t){de(e,ye(t)?t.split(" "):t,!0)}function rt(e,t){ie(t,e.appendChild.bind(e))}function Xt(e,t){ie(e,function(r){var n=(t||r).parentNode;n&&n.insertBefore(r,t)})}function qe(e,t){return br(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function Rr(e,t){var r=e?Ne(e.children):[];return t?r.filter(function(n){return qe(n,t)}):r}function nt(e,t){return t?Rr(e,t)[0]:e.firstElementChild}var Ke=Object.keys;function Re(e,t,r){return e&&(r?Ke(e).reverse():Ke(e)).forEach(function(n){n!=="__proto__"&&t(e[n],n)}),e}function $e(e){return Ne(arguments,1).forEach(function(t){Re(t,function(r,n){e[n]=t[n]})}),e}function _e(e){return Ne(arguments,1).forEach(function(t){Re(t,function(r,n){Wt(r)?e[n]=r.slice():Xe(r)?e[n]=_e({},Xe(e[n])?e[n]:{},r):e[n]=r})}),e}function dr(e,t){ie(t||Ke(e),function(r){delete e[r]})}function ce(e,t){ie(e,function(r){ie(t,function(n){r&&r.removeAttribute(n)})})}function k(e,t,r){Xe(t)?Re(t,function(n,i){k(e,i,n)}):ie(e,function(n){Ht(r)||r===""?ce(n,t):n.setAttribute(t,String(r))})}function Me(e,t,r){var n=document.createElement(e);return t&&(ye(t)?se(n,t):k(n,t)),r&&rt(r,n),n}function ae(e,t,r){if(et(r))return getComputedStyle(e)[t];Ht(r)||(e.style[t]=""+r)}function je(e,t){ae(e,"display",t)}function xr(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function oe(e,t){return e.getAttribute(t)}function hr(e,t){return e&&e.classList.contains(t)}function re(e){return e.getBoundingClientRect()}function xe(e){ie(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function Ir(e){return nt(new DOMParser().parseFromString(e,"text/html").body)}function ve(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function Or(e,t){return e&&e.querySelector(t)}function qt(e,t){return t?Ne(e.querySelectorAll(t)):[]}function he(e,t){de(e,t,!1)}function Mt(e){return e.timeStamp}function Le(e){return ye(e)?e:e?e+"px":""}var it="splide",Kt="data-"+it;function He(e,t){if(!e)throw new Error("["+it+"] "+(t||""))}var pe=Math.min,ht=Math.max,gt=Math.floor,Ze=Math.ceil,te=Math.abs;function Cr(e,t,r){return te(e-t)<r}function ft(e,t,r,n){var i=pe(t,r),o=ht(t,r);return n?i<e&&e<o:i<=e&&e<=o}function Ce(e,t,r){var n=pe(t,r),i=ht(t,r);return pe(ht(n,e),i)}function Vt(e){return+(e>0)-+(e<0)}function kt(e,t){return ie(t,function(r){e=e.replace("%s",""+r)}),e}function $t(e){return e<10?"0"+e:""+e}var gr={};function _n(e){return""+e+$t(gr[e]=(gr[e]||0)+1)}function Dr(){var e=[];function t(a,c,l,v){i(a,c,function(u,E,d){var h="addEventListener"in u,s=h?u.removeEventListener.bind(u,E,l,v):u.removeListener.bind(u,l);h?u.addEventListener(E,l,v):u.addListener(l),e.push([u,E,d,l,s])})}function r(a,c,l){i(a,c,function(v,u,E){e=e.filter(function(d){return d[0]===v&&d[1]===u&&d[2]===E&&(!l||d[3]===l)?(d[4](),!1):!0})})}function n(a,c,l){var v,u=!0;return typeof CustomEvent=="function"?v=new CustomEvent(c,{bubbles:u,detail:l}):(v=document.createEvent("CustomEvent"),v.initCustomEvent(c,u,!1,l)),a.dispatchEvent(v),v}function i(a,c,l){ie(a,function(v){v&&ie(c,function(u){u.split(" ").forEach(function(E){var d=E.split(".");l(v,d[0],d[1])})})})}function o(){e.forEach(function(a){a[4]()}),me(e)}return{bind:t,unbind:r,dispatch:n,destroy:o}}var Se="mounted",Ft="ready",Ee="move",Ge="moved",jt="click",Pr="active",Mr="inactive",Vr="visible",kr="hidden",K="refresh",Q="updated",Fe="resize",_t="resized",Fr="drag",Ur="dragging",Br="dragged",yt="scroll",Oe="scrolled",yn="overflow",Zt="destroy",Gr="arrows:mounted",zr="arrows:updated",Wr="pagination:mounted",Hr="pagination:updated",Jt="navigation:mounted",Qt="autoplay:play",Yr="autoplay:playing",er="autoplay:pause",tr="lazyload:loaded",Xr="sk",qr="sh",mt="ei";function Y(e){var t=e?e.event.bus:document.createDocumentFragment(),r=Dr();function n(o,a){r.bind(t,tt(o).join(" "),function(c){a.apply(a,Wt(c.detail)?c.detail:[])})}function i(o){r.dispatch(t,o,Ne(arguments,1))}return e&&e.event.on(Zt,r.destroy),$e(r,{bus:t,on:n,off:z(r.unbind,t),emit:i})}function pt(e,t,r,n){var i=Date.now,o,a=0,c,l=!0,v=0;function u(){if(!l){if(a=e?pe((i()-o)/e,1):1,r&&r(a),a>=1&&(t(),o=i(),n&&++v>=n))return d();c=vr(u)}}function E(A){A||s(),o=i()-(A?a*e:0),l=!1,c=vr(u)}function d(){l=!0}function h(){o=i(),a=0,r&&r(a)}function s(){c&&cancelAnimationFrame(c),a=0,c=0,l=!0}function f(A){e=A}function _(){return l}return{start:E,rewind:h,pause:d,cancel:s,set:f,isPaused:_}}function pn(e){var t=e;function r(i){t=i}function n(i){return Yt(tt(i),t)}return{set:r,is:n}}function Nn(e,t){var r=pt(t||0,e,null,1);return function(){r.isPaused()&&r.start()}}function Sn(e,t,r){var n=e.state,i=r.breakpoints||{},o=r.reducedMotion||{},a=Dr(),c=[];function l(){var s=r.mediaQuery==="min";Ke(i).sort(function(f,_){return s?+f-+_:+_-+f}).forEach(function(f){u(i[f],"("+(s?"min":"max")+"-width:"+f+"px)")}),u(o,fr),E()}function v(s){s&&a.destroy()}function u(s,f){var _=matchMedia(f);a.bind(_,"change",E),c.push([s,_])}function E(){var s=n.is(dt),f=r.direction,_=c.reduce(function(A,m){return _e(A,m[1].matches?m[0]:{})},{});dr(r),h(_),r.destroy?e.destroy(r.destroy==="completely"):s?(v(!0),e.mount()):f!==r.direction&&e.refresh()}function d(s){matchMedia(fr).matches&&(s?_e(r,o):dr(r,Ke(o)))}function h(s,f,_){_e(r,s),f&&_e(Object.getPrototypeOf(r),s),(_||!n.is(Pe))&&e.emit(Q,r)}return{setup:l,destroy:v,reduce:d,set:h}}var Nt="Arrow",St=Nt+"Left",Tt=Nt+"Right",Kr=Nt+"Up",$r=Nt+"Down",mr="rtl",wt="ttb",xt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Kr,Tt],ArrowRight:[$r,St]};function Tn(e,t,r){function n(o,a,c){c=c||r.direction;var l=c===mr&&!a?1:c===wt?0:-1;return xt[o]&&xt[o][l]||o.replace(/width|left|right/i,function(v,u){var E=xt[v.toLowerCase()][l]||v;return u>0?E.charAt(0).toUpperCase()+E.slice(1):E})}function i(o){return o*(r.direction===mr?1:-1)}return{resolve:n,orient:i}}var ge="role",Ve="tabindex",wn="disabled",ue="aria-",at=ue+"controls",jr=ue+"current",Er=ue+"selected",ne=ue+"label",rr=ue+"labelledby",Zr=ue+"hidden",nr=ue+"orientation",Je=ue+"roledescription",Ar=ue+"live",_r=ue+"busy",yr=ue+"atomic",ir=[ge,Ve,wn,at,jr,ne,rr,Zr,nr,Je],le=it+"__",Te="is-",It=it,pr=le+"track",Ln=le+"list",Lt=le+"slide",Jr=Lt+"--clone",bn=Lt+"__container",ar=le+"arrows",bt=le+"arrow",Qr=bt+"--prev",en=bt+"--next",Rt=le+"pagination",tn=Rt+"__page",Rn=le+"progress",xn=Rn+"__bar",In=le+"toggle",On=le+"spinner",Cn=le+"sr",Dn=Te+"initialized",Ie=Te+"active",rn=Te+"prev",nn=Te+"next",Ut=Te+"visible",Bt=Te+"loading",an=Te+"focus-in",on=Te+"overflow",Pn=[Ie,Ut,rn,nn,Bt,an,on],Mn={slide:Lt,clone:Jr,arrows:ar,arrow:bt,prev:Qr,next:en,pagination:Rt,page:tn,spinner:On};function Vn(e,t){if(Lr(e.closest))return e.closest(t);for(var r=e;r&&r.nodeType===1&&!qe(r,t);)r=r.parentElement;return r}var kn=5,Nr=200,un="touchstart mousedown",Ot="touchmove mousemove",Ct="touchend touchcancel mouseup click";function Fn(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=e.root,c=r.i18n,l={},v=[],u=[],E=[],d,h,s;function f(){g(),D(),m()}function _(){i(K,A),i(K,f),i(Q,m),o(document,un+" keydown",function(p){s=p.type==="keydown"},{capture:!0}),o(a,"focusin",function(){de(a,an,!!s)})}function A(p){var x=ir.concat("style");me(v),he(a,u),he(d,E),ce([d,h],x),ce(a,p?x:["style",Je])}function m(){he(a,u),he(d,E),u=M(It),E=M(pr),se(a,u),se(d,E),k(a,ne,r.label),k(a,rr,r.labelledby)}function g(){d=R("."+pr),h=nt(d,"."+Ln),He(d&&h,"A track/list element is missing."),lt(v,Rr(h,"."+Lt+":not(."+Jr+")")),Re({arrows:ar,pagination:Rt,prev:Qr,next:en,bar:xn,toggle:In},function(p,x){l[x]=R("."+p)}),$e(l,{root:a,track:d,list:h,slides:v})}function D(){var p=a.id||_n(it),x=r.role;a.id=p,d.id=d.id||p+"-track",h.id=h.id||p+"-list",!oe(a,ge)&&a.tagName!=="SECTION"&&x&&k(a,ge,x),k(a,Je,c.carousel),k(h,ge,"presentation")}function R(p){var x=Or(a,p);return x&&Vn(x,"."+It)===a?x:void 0}function M(p){return[p+"--"+r.type,p+"--"+r.direction,r.drag&&p+"--draggable",r.isNavigation&&p+"--nav",p===It&&Ie]}return $e(l,{setup:f,mount:_,destroy:A})}var Ue="slide",ze="loop",ot="fade";function Un(e,t,r,n){var i=Y(e),o=i.on,a=i.emit,c=i.bind,l=e.Components,v=e.root,u=e.options,E=u.isNavigation,d=u.updateOnMove,h=u.i18n,s=u.pagination,f=u.slideFocus,_=l.Direction.resolve,A=oe(n,"style"),m=oe(n,ne),g=r>-1,D=nt(n,"."+bn),R;function M(){g||(n.id=v.id+"-slide"+$t(t+1),k(n,ge,s?"tabpanel":"group"),k(n,Je,h.slide),k(n,ne,m||kt(h.slideLabel,[t+1,e.length]))),p()}function p(){c(n,"click",z(a,jt,P)),c(n,"keydown",z(a,Xr,P)),o([Ge,qr,Oe],S),o(Jt,U),d&&o(Ee,C)}function x(){R=!0,i.destroy(),he(n,Pn),ce(n,ir),k(n,"style",A),k(n,ne,m||"")}function U(){var O=e.splides.map(function(N){var I=N.splide.Components.Slides.getAt(t);return I?I.slide.id:""}).join(" ");k(n,ne,kt(h.slideX,(g?r:t)+1)),k(n,at,O),k(n,ge,f?"button":""),f&&ce(n,Je)}function C(){R||S()}function S(){if(!R){var O=e.index;T(),w(),de(n,rn,t===O-1),de(n,nn,t===O+1)}}function T(){var O=F();O!==hr(n,Ie)&&(de(n,Ie,O),k(n,jr,E&&O||""),a(O?Pr:Mr,P))}function w(){var O=X(),N=!O&&(!F()||g);if(e.state.is([Be,Qe])||k(n,Zr,N||""),k(qt(n,u.focusableNodes||""),Ve,N?-1:""),f&&k(n,Ve,N?-1:0),O!==hr(n,Ut)&&(de(n,Ut,O),a(O?Vr:kr,P)),!O&&document.activeElement===n){var I=l.Slides.getAt(e.index);I&&xr(I.slide)}}function V(O,N,I){ae(I&&D||n,O,N)}function F(){var O=e.index;return O===t||u.cloneStatus&&O===r}function X(){if(e.is(ot))return F();var O=re(l.Elements.track),N=re(n),I=_("left",!0),B=_("right",!0);return gt(O[I])<=Ze(N[I])&&gt(N[B])<=Ze(O[B])}function H(O,N){var I=te(O-t);return!g&&(u.rewind||e.is(ze))&&(I=pe(I,e.length-I)),I<=N}var P={index:t,slideIndex:r,slide:n,container:D,isClone:g,mount:M,destroy:x,update:S,style:V,isWithin:H};return P}function Bn(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=n.bind,c=t.Elements,l=c.slides,v=c.list,u=[];function E(){d(),i(K,h),i(K,d)}function d(){l.forEach(function(S,T){f(S,T,-1)})}function h(){R(function(S){S.destroy()}),me(u)}function s(){R(function(S){S.update()})}function f(S,T,w){var V=Un(e,T,w,S);V.mount(),u.push(V),u.sort(function(F,X){return F.index-X.index})}function _(S){return S?M(function(T){return!T.isClone}):u}function A(S){var T=t.Controller,w=T.toIndex(S),V=T.hasFocus()?1:r.perPage;return M(function(F){return ft(F.index,w,w+V-1)})}function m(S){return M(S)[0]}function g(S,T){ie(S,function(w){if(ye(w)&&(w=Ir(w)),br(w)){var V=l[T];V?Xt(w,V):rt(v,w),se(w,r.classes.slide),x(w,z(o,Fe))}}),o(K)}function D(S){xe(M(S).map(function(T){return T.slide})),o(K)}function R(S,T){_(T).forEach(S)}function M(S){return u.filter(Lr(S)?S:function(T){return ye(S)?qe(T.slide,S):Yt(tt(S),T.index)})}function p(S,T,w){R(function(V){V.style(S,T,w)})}function x(S,T){var w=qt(S,"img"),V=w.length;V?w.forEach(function(F){a(F,"load error",function(){--V||T()})}):T()}function U(S){return S?l.length:u.length}function C(){return u.length>r.perPage}return{mount:E,destroy:h,update:s,register:f,get:_,getIn:A,getAt:m,add:g,remove:D,forEach:R,filter:M,style:p,getLength:U,isEnough:C}}function Gn(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=n.emit,c=t.Slides,l=t.Direction.resolve,v=t.Elements,u=v.root,E=v.track,d=v.list,h=c.getAt,s=c.style,f,_,A;function m(){g(),o(window,"resize load",Nn(z(a,Fe))),i([Q,K],g),i(Fe,D)}function g(){f=r.direction===wt,ae(u,"maxWidth",Le(r.width)),ae(E,l("paddingLeft"),R(!1)),ae(E,l("paddingRight"),R(!0)),D(!0)}function D(P){var O=re(u);(P||_.width!==O.width||_.height!==O.height)&&(ae(E,"height",M()),s(l("marginRight"),Le(r.gap)),s("width",x()),s("height",U(),!0),_=O,a(_t),A!==(A=H())&&(de(u,on,A),a(yn,A)))}function R(P){var O=r.padding,N=l(P?"right":"left");return O&&Le(O[N]||(Xe(O)?0:O))||"0px"}function M(){var P="";return f&&(P=p(),He(P,"height or heightRatio is missing."),P="calc("+P+" - "+R(!1)+" - "+R(!0)+")"),P}function p(){return Le(r.height||re(d).width*r.heightRatio)}function x(){return r.autoWidth?null:Le(r.fixedWidth)||(f?"":C())}function U(){return Le(r.fixedHeight)||(f?r.autoHeight?null:C():p())}function C(){var P=Le(r.gap);return"calc((100%"+(P&&" + "+P)+")/"+(r.perPage||1)+(P&&" - "+P)+")"}function S(){return re(d)[l("width")]}function T(P,O){var N=h(P||0);return N?re(N.slide)[l("width")]+(O?0:F()):0}function w(P,O){var N=h(P);if(N){var I=re(N.slide)[l("right")],B=re(d)[l("left")];return te(I-B)+(O?0:F())}return 0}function V(P){return w(e.length-1)-w(0)+T(0,P)}function F(){var P=h(0);return P&&parseFloat(ae(P.slide,l("marginRight")))||0}function X(P){return parseFloat(ae(E,l("padding"+(P?"Right":"Left"))))||0}function H(){return e.is(ot)||V(!0)>S()}return{mount:m,resize:D,listSize:S,slideSize:T,sliderSize:V,totalSize:w,getPadding:X,isOverflow:H}}var zn=2;function Wn(e,t,r){var n=Y(e),i=n.on,o=t.Elements,a=t.Slides,c=t.Direction.resolve,l=[],v;function u(){i(K,E),i([Q,Fe],h),(v=_())&&(s(v),t.Layout.resize(!0))}function E(){d(),u()}function d(){xe(l),me(l),n.destroy()}function h(){var A=_();v!==A&&(v<A||!A)&&n.emit(K)}function s(A){var m=a.get().slice(),g=m.length;if(g){for(;m.length<A;)lt(m,m);lt(m.slice(-A),m.slice(0,A)).forEach(function(D,R){var M=R<A,p=f(D.slide,R);M?Xt(p,m[0].slide):rt(o.list,p),lt(l,p),a.register(p,R-A+(M?0:g),D.index)})}}function f(A,m){var g=A.cloneNode(!0);return se(g,r.classes.clone),g.id=e.root.id+"-clone"+$t(m+1),g}function _(){var A=r.clones;if(!e.is(ze))A=0;else if(et(A)){var m=r[c("fixedWidth")]&&t.Layout.slideSize(0),g=m&&Ze(re(o.track)[c("width")]/m);A=g||r[c("autoWidth")]&&e.length||r.perPage*zn}return A}return{mount:u,destroy:d}}function Hn(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=e.state.set,c=t.Layout,l=c.slideSize,v=c.getPadding,u=c.totalSize,E=c.listSize,d=c.sliderSize,h=t.Direction,s=h.resolve,f=h.orient,_=t.Elements,A=_.list,m=_.track,g;function D(){g=t.Transition,i([Se,_t,Q,K],R)}function R(){t.Controller.isBusy()||(t.Scroll.cancel(),p(e.index),t.Slides.update())}function M(N,I,B,j){N!==I&&P(N>B)&&(S(),x(C(V(),N>B),!0)),a(Be),o(Ee,I,B,N),g.start(I,function(){a(ke),o(Ge,I,B,N),j&&j()})}function p(N){x(w(N,!0))}function x(N,I){if(!e.is(ot)){var B=I?N:U(N);ae(A,"transform","translate"+s("X")+"("+B+"px)"),N!==B&&o(qr)}}function U(N){if(e.is(ze)){var I=T(N),B=I>t.Controller.getEnd(),j=I<0;(j||B)&&(N=C(N,B))}return N}function C(N,I){var B=N-H(I),j=d();return N-=f(j*(Ze(te(B)/j)||1))*(I?1:-1),N}function S(){x(V(),!0),g.cancel()}function T(N){for(var I=t.Slides.get(),B=0,j=1/0,$=0;$<I.length;$++){var Ae=I[$].index,y=te(w(Ae,!0)-N);if(y<=j)j=y,B=Ae;else break}return B}function w(N,I){var B=f(u(N-1)-X(N));return I?F(B):B}function V(){var N=s("left");return re(A)[N]-re(m)[N]+f(v(!1))}function F(N){return r.trimSpace&&e.is(Ue)&&(N=Ce(N,0,f(d(!0)-E()))),N}function X(N){var I=r.focus;return I==="center"?(E()-l(N,!0))/2:+I*l(N)||0}function H(N){return w(N?t.Controller.getEnd():0,!!r.trimSpace)}function P(N){var I=f(C(V(),N));return N?I>=0:I<=A[s("scrollWidth")]-re(m)[s("width")]}function O(N,I){I=et(I)?V():I;var B=N!==!0&&f(I)<f(H(!1)),j=N!==!1&&f(I)>f(H(!0));return B||j}return{mount:D,move:M,jump:p,translate:x,shift:C,cancel:S,toIndex:T,toPosition:w,getPosition:V,getLimit:H,exceededLimit:O,reposition:R}}function Yn(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=t.Move,c=a.getPosition,l=a.getLimit,v=a.toPosition,u=t.Slides,E=u.isEnough,d=u.getLength,h=r.omitEnd,s=e.is(ze),f=e.is(Ue),_=z(V,!1),A=z(V,!0),m=r.start||0,g,D=m,R,M,p;function x(){U(),i([Q,K,mt],U),i(_t,C)}function U(){R=d(!0),M=r.perMove,p=r.perPage,g=P();var y=Ce(m,0,h?g:R-1);y!==m&&(m=y,a.reposition())}function C(){g!==P()&&o(mt)}function S(y,G,ee){if(!Ae()){var q=w(y),Z=H(q);Z>-1&&(G||Z!==m)&&(B(Z),a.move(q,Z,D,ee))}}function T(y,G,ee,q){t.Scroll.scroll(y,G,ee,function(){var Z=H(a.toIndex(c()));B(h?pe(Z,g):Z),q&&q()})}function w(y){var G=m;if(ye(y)){var ee=y.match(/([+\-<>])(\d+)?/)||[],q=ee[1],Z=ee[2];q==="+"||q==="-"?G=F(m+ +(""+q+(+Z||1)),m):q===">"?G=Z?O(+Z):_(!0):q==="<"&&(G=A(!0))}else G=s?y:Ce(y,0,g);return G}function V(y,G){var ee=M||($()?1:p),q=F(m+ee*(y?-1:1),m,!(M||$()));return q===-1&&f&&!Cr(c(),l(!y),1)?y?0:g:G?q:H(q)}function F(y,G,ee){if(E()||$()){var q=X(y);q!==y&&(G=y,y=q,ee=!1),y<0||y>g?!M&&(ft(0,y,G,!0)||ft(g,G,y,!0))?y=O(N(y)):s?y=ee?y<0?-(R%p||p):R:y:r.rewind?y=y<0?g:0:y=-1:ee&&y!==G&&(y=O(N(G)+(y<G?-1:1)))}else y=-1;return y}function X(y){if(f&&r.trimSpace==="move"&&y!==m)for(var G=c();G===v(y,!0)&&ft(y,0,e.length-1,!r.rewind);)y<m?--y:++y;return y}function H(y){return s?(y+R)%R||0:y}function P(){for(var y=R-($()||s&&M?1:p);h&&y-- >0;)if(v(R-1,!0)!==v(y,!0)){y++;break}return Ce(y,0,R-1)}function O(y){return Ce($()?y:p*y,0,g)}function N(y){return $()?pe(y,g):gt((y>=g?R-1:y)/p)}function I(y){var G=a.toIndex(y);return f?Ce(G,0,g):G}function B(y){y!==m&&(D=m,m=y)}function j(y){return y?D:m}function $(){return!et(r.focus)||r.isNavigation}function Ae(){return e.state.is([Be,Qe])&&!!r.waitForTransition}return{mount:x,go:S,scroll:T,getNext:_,getPrev:A,getAdjacent:V,getEnd:P,setIndex:B,getIndex:j,toIndex:O,toPage:N,toDest:I,hasFocus:$,isBusy:Ae}}var Xn="http://www.w3.org/2000/svg",qn="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",ut=40;function Kn(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=n.emit,c=r.classes,l=r.i18n,v=t.Elements,u=t.Controller,E=v.arrows,d=v.track,h=E,s=v.prev,f=v.next,_,A,m={};function g(){R(),i(Q,D)}function D(){M(),g()}function R(){var T=r.arrows;T&&!(s&&f)&&U(),s&&f&&($e(m,{prev:s,next:f}),je(h,T?"":"none"),se(h,A=ar+"--"+r.direction),T&&(p(),S(),k([s,f],at,d.id),a(Gr,s,f)))}function M(){n.destroy(),he(h,A),_?(xe(E?[s,f]:h),s=f=null):ce([s,f],ir)}function p(){i([Se,Ge,K,Oe,mt],S),o(f,"click",z(x,">")),o(s,"click",z(x,"<"))}function x(T){u.go(T,!0)}function U(){h=E||Me("div",c.arrows),s=C(!0),f=C(!1),_=!0,rt(h,[s,f]),!E&&Xt(h,d)}function C(T){var w='<button class="'+c.arrow+" "+(T?c.prev:c.next)+'" type="button"><svg xmlns="'+Xn+'" viewBox="0 0 '+ut+" "+ut+'" width="'+ut+'" height="'+ut+'" focusable="false"><path d="'+(r.arrowPath||qn)+'" />';return Ir(w)}function S(){if(s&&f){var T=e.index,w=u.getPrev(),V=u.getNext(),F=w>-1&&T<w?l.last:l.prev,X=V>-1&&T>V?l.first:l.next;s.disabled=w<0,f.disabled=V<0,k(s,ne,F),k(f,ne,X),a(zr,s,f,w,V)}}return{arrows:m,mount:g,destroy:M,update:S}}var $n=Kt+"-interval";function jn(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=n.emit,c=pt(r.interval,e.go.bind(e,">"),p),l=c.isPaused,v=t.Elements,u=t.Elements,E=u.root,d=u.toggle,h=r.autoplay,s,f,_=h==="pause";function A(){h&&(m(),d&&k(d,at,v.track.id),_||g(),M())}function m(){r.pauseOnHover&&o(E,"mouseenter mouseleave",function(U){s=U.type==="mouseenter",R()}),r.pauseOnFocus&&o(E,"focusin focusout",function(U){f=U.type==="focusin",R()}),d&&o(d,"click",function(){_?g():D(!0)}),i([Ee,yt,K],c.rewind),i(Ee,x)}function g(){l()&&t.Slides.isEnough()&&(c.start(!r.resetProgress),f=s=_=!1,M(),a(Qt))}function D(U){U===void 0&&(U=!0),_=!!U,M(),l()||(c.pause(),a(er))}function R(){_||(s||f?D(!1):g())}function M(){d&&(de(d,Ie,!_),k(d,ne,r.i18n[_?"play":"pause"]))}function p(U){var C=v.bar;C&&ae(C,"width",U*100+"%"),a(Yr,U)}function x(U){var C=t.Slides.getAt(U);c.set(C&&+oe(C.slide,$n)||r.interval)}return{mount:A,destroy:c.cancel,play:g,pause:D,isPaused:l}}function Zn(e,t,r){var n=Y(e),i=n.on;function o(){r.cover&&(i(tr,z(c,!0)),i([Se,Q,K],z(a,!0)))}function a(l){t.Slides.forEach(function(v){var u=nt(v.container||v.slide,"img");u&&u.src&&c(l,u,v)})}function c(l,v,u){u.style("background",l?'center/cover no-repeat url("'+v.src+'")':"",!0),je(v,l?"none":"")}return{mount:o,destroy:z(a,!1)}}var Jn=10,Qn=600,ei=.6,ti=1.5,ri=800;function ni(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=e.state.set,c=t.Move,l=c.getPosition,v=c.getLimit,u=c.exceededLimit,E=c.translate,d=e.is(Ue),h,s,f=1;function _(){i(Ee,D),i([Q,K],R)}function A(p,x,U,C,S){var T=l();if(D(),U&&(!d||!u())){var w=t.Layout.sliderSize(),V=Vt(p)*w*gt(te(p)/w)||0;p=c.toPosition(t.Controller.toDest(p%w))+V}var F=Cr(T,p,1);f=1,x=F?0:x||ht(te(p-T)/ti,ri),s=C,h=pt(x,m,z(g,T,p,S),1),a(Qe),o(yt),h.start()}function m(){a(ke),s&&s(),o(Oe)}function g(p,x,U,C){var S=l(),T=p+(x-p)*M(C),w=(T-S)*f;E(S+w),d&&!U&&u()&&(f*=ei,te(w)<Jn&&A(v(u(!0)),Qn,!1,s,!0))}function D(){h&&h.cancel()}function R(){h&&!h.isPaused()&&(D(),m())}function M(p){var x=r.easingFunc;return x?x(p):1-Math.pow(1-p,4)}return{mount:_,destroy:D,scroll:A,cancel:R}}var De={passive:!1,capture:!0};function ii(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=n.bind,c=n.unbind,l=e.state,v=t.Move,u=t.Scroll,E=t.Controller,d=t.Elements.track,h=t.Media.reduce,s=t.Direction,f=s.resolve,_=s.orient,A=v.getPosition,m=v.exceededLimit,g,D,R,M,p,x=!1,U,C,S;function T(){a(d,Ot,Pt,De),a(d,Ct,Pt,De),a(d,un,V,De),a(d,"click",H,{capture:!0}),a(d,"dragstart",ve),i([Se,Q],w)}function w(){var L=r.drag;cr(!L),M=L==="free"}function V(L){if(U=!1,!C){var W=Z(L);q(L.target)&&(W||!L.button)&&(E.isBusy()?ve(L,!0):(S=W?d:window,p=l.is([Be,Qe]),R=null,a(S,Ot,F,De),a(S,Ct,X,De),v.cancel(),u.cancel(),P(L)))}}function F(L){if(l.is(ct)||(l.set(ct),o(Fr)),L.cancelable)if(p){v.translate(g+ee($(L)));var W=Ae(L)>Nr,we=x!==(x=m());(W||we)&&P(L),U=!0,o(Ur),ve(L)}else I(L)&&(p=N(L),ve(L))}function X(L){l.is(ct)&&(l.set(ke),o(Br)),p&&(O(L),ve(L)),c(S,Ot,F),c(S,Ct,X),p=!1}function H(L){!C&&U&&ve(L,!0)}function P(L){R=D,D=L,g=A()}function O(L){var W=B(L),we=j(W),We=r.rewind&&r.rewindByDrag;h(!1),M?E.scroll(we,0,r.snap):e.is(ot)?E.go(_(Vt(W))<0?We?"<":"-":We?">":"+"):e.is(Ue)&&x&&We?E.go(m(!0)?">":"<"):E.go(E.toDest(we),!0),h(!0)}function N(L){var W=r.dragMinThreshold,we=Xe(W),We=we&&W.mouse||0,cn=(we?W.touch:+W)||10;return te($(L))>(Z(L)?cn:We)}function I(L){return te($(L))>te($(L,!0))}function B(L){if(e.is(ze)||!x){var W=Ae(L);if(W&&W<Nr)return $(L)/W}return 0}function j(L){return A()+Vt(L)*pe(te(L)*(r.flickPower||600),M?1/0:t.Layout.listSize()*(r.flickMaxPages||1))}function $(L,W){return G(L,W)-G(y(L),W)}function Ae(L){return Mt(L)-Mt(y(L))}function y(L){return D===L&&R||D}function G(L,W){return(Z(L)?L.changedTouches[0]:L)["page"+f(W?"Y":"X")]}function ee(L){return L/(x&&e.is(Ue)?kn:1)}function q(L){var W=r.noDrag;return!qe(L,"."+tn+", ."+bt)&&(!W||!qe(L,W))}function Z(L){return typeof TouchEvent<"u"&&L instanceof TouchEvent}function sn(){return p}function cr(L){C=L}return{mount:T,disable:cr,isDragging:sn}}var ai={Spacebar:" ",Right:Tt,Left:St,Up:Kr,Down:$r};function or(e){return e=ye(e)?e:e.key,ai[e]||e}var Sr="keydown";function oi(e,t,r){var n=Y(e),i=n.on,o=n.bind,a=n.unbind,c=e.root,l=t.Direction.resolve,v,u;function E(){d(),i(Q,h),i(Q,d),i(Ee,f)}function d(){var A=r.keyboard;A&&(v=A==="global"?window:c,o(v,Sr,_))}function h(){a(v,Sr)}function s(A){u=A}function f(){var A=u;u=!0,wr(function(){u=A})}function _(A){if(!u){var m=or(A);m===l(St)?e.go("<"):m===l(Tt)&&e.go(">")}}return{mount:E,destroy:h,disable:s}}var Ye=Kt+"-lazy",vt=Ye+"-srcset",ui="["+Ye+"], ["+vt+"]";function si(e,t,r){var n=Y(e),i=n.on,o=n.off,a=n.bind,c=n.emit,l=r.lazyLoad==="sequential",v=[Ge,Oe],u=[];function E(){r.lazyLoad&&(d(),i(K,d))}function d(){me(u),h(),l?A():(o(v),i(v,s),s())}function h(){t.Slides.forEach(function(m){qt(m.slide,ui).forEach(function(g){var D=oe(g,Ye),R=oe(g,vt);if(D!==g.src||R!==g.srcset){var M=r.classes.spinner,p=g.parentElement,x=nt(p,"."+M)||Me("span",M,p);u.push([g,m,x]),g.src||je(g,"none")}})})}function s(){u=u.filter(function(m){var g=r.perPage*((r.preloadPages||1)+1)-1;return m[1].isWithin(e.index,g)?f(m):!0}),u.length||o(v)}function f(m){var g=m[0];se(m[1].slide,Bt),a(g,"load error",z(_,m)),k(g,"src",oe(g,Ye)),k(g,"srcset",oe(g,vt)),ce(g,Ye),ce(g,vt)}function _(m,g){var D=m[0],R=m[1];he(R.slide,Bt),g.type!=="error"&&(xe(m[2]),je(D,""),c(tr,D,R),c(Fe)),l&&A()}function A(){u.length&&f(u.shift())}return{mount:E,destroy:z(me,u),check:s}}function ci(e,t,r){var n=Y(e),i=n.on,o=n.emit,a=n.bind,c=t.Slides,l=t.Elements,v=t.Controller,u=v.hasFocus,E=v.getIndex,d=v.go,h=t.Direction.resolve,s=l.pagination,f=[],_,A;function m(){g(),i([Q,K,mt],m);var C=r.pagination;s&&je(s,C?"":"none"),C&&(i([Ee,yt,Oe],U),D(),U(),o(Wr,{list:_,items:f},x(e.index)))}function g(){_&&(xe(s?Ne(_.children):_),he(_,A),me(f),_=null),n.destroy()}function D(){var C=e.length,S=r.classes,T=r.i18n,w=r.perPage,V=u()?v.getEnd()+1:Ze(C/w);_=s||Me("ul",S.pagination,l.track.parentElement),se(_,A=Rt+"--"+p()),k(_,ge,"tablist"),k(_,ne,T.select),k(_,nr,p()===wt?"vertical":"");for(var F=0;F<V;F++){var X=Me("li",null,_),H=Me("button",{class:S.page,type:"button"},X),P=c.getIn(F).map(function(N){return N.slide.id}),O=!u()&&w>1?T.pageX:T.slideX;a(H,"click",z(R,F)),r.paginationKeyboard&&a(H,"keydown",z(M,F)),k(X,ge,"presentation"),k(H,ge,"tab"),k(H,at,P.join(" ")),k(H,ne,kt(O,F+1)),k(H,Ve,-1),f.push({li:X,button:H,page:F})}}function R(C){d(">"+C,!0)}function M(C,S){var T=f.length,w=or(S),V=p(),F=-1;w===h(Tt,!1,V)?F=++C%T:w===h(St,!1,V)?F=(--C+T)%T:w==="Home"?F=0:w==="End"&&(F=T-1);var X=f[F];X&&(xr(X.button),d(">"+F),ve(S,!0))}function p(){return r.paginationDirection||r.direction}function x(C){return f[v.toPage(C)]}function U(){var C=x(E(!0)),S=x(E());if(C){var T=C.button;he(T,Ie),ce(T,Er),k(T,Ve,-1)}if(S){var w=S.button;se(w,Ie),k(w,Er,!0),k(w,Ve,"")}o(Hr,{list:_,items:f},C,S)}return{items:f,mount:m,destroy:g,getAt:x,update:U}}var li=[" ","Enter"];function fi(e,t,r){var n=r.isNavigation,i=r.slideFocus,o=[];function a(){e.splides.forEach(function(s){s.isParent||(v(e,s.splide),v(s.splide,e))}),n&&u()}function c(){o.forEach(function(s){s.destroy()}),me(o)}function l(){c(),a()}function v(s,f){var _=Y(s);_.on(Ee,function(A,m,g){f.go(f.is(ze)?g:A)}),o.push(_)}function u(){var s=Y(e),f=s.on;f(jt,d),f(Xr,h),f([Se,Q],E),o.push(s),s.emit(Jt,e.splides)}function E(){k(t.Elements.list,nr,r.direction===wt?"vertical":"")}function d(s){e.go(s.index)}function h(s,f){Yt(li,or(f))&&(d(s),ve(f))}return{setup:z(t.Media.set,{slideFocus:et(i)?n:i},!0),mount:a,destroy:c,remount:l}}function vi(e,t,r){var n=Y(e),i=n.bind,o=0;function a(){r.wheel&&i(t.Elements.track,"wheel",c,De)}function c(v){if(v.cancelable){var u=v.deltaY,E=u<0,d=Mt(v),h=r.wheelMinThreshold||0,s=r.wheelSleep||0;te(u)>h&&d-o>s&&(e.go(E?"<":">"),o=d),l(E)&&ve(v)}}function l(v){return!r.releaseWheel||e.state.is(Be)||t.Controller.getAdjacent(v)!==-1}return{mount:a}}var di=90;function hi(e,t,r){var n=Y(e),i=n.on,o=t.Elements.track,a=r.live&&!r.isNavigation,c=Me("span",Cn),l=pt(di,z(u,!1));function v(){a&&(d(!t.Autoplay.isPaused()),k(o,yr,!0),c.textContent="…",i(Qt,z(d,!0)),i(er,z(d,!1)),i([Ge,Oe],z(u,!0)))}function u(h){k(o,_r,h),h?(rt(o,c),l.start()):(xe(c),l.cancel())}function E(){ce(o,[Ar,yr,_r]),xe(c)}function d(h){a&&k(o,Ar,h?"off":"polite")}return{mount:v,disable:d,destroy:E}}var gi=Object.freeze({__proto__:null,Media:Sn,Direction:Tn,Elements:Fn,Slides:Bn,Layout:Gn,Clones:Wn,Move:Hn,Controller:Yn,Arrows:Kn,Autoplay:jn,Cover:Zn,Scroll:ni,Drag:ii,Keyboard:oi,LazyLoad:si,Pagination:ci,Sync:fi,Wheel:vi,Live:hi}),mi={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},Ei={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Mn,i18n:mi,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Ai(e,t,r){var n=t.Slides;function i(){Y(e).on([Se,K],o)}function o(){n.forEach(function(c){c.style("transform","translateX(-"+100*c.index+"%)")})}function a(c,l){n.style("transition","opacity "+r.speed+"ms "+r.easing),wr(l)}return{mount:i,start:a,cancel:Pt}}function _i(e,t,r){var n=t.Move,i=t.Controller,o=t.Scroll,a=t.Elements.list,c=z(ae,a,"transition"),l;function v(){Y(e).bind(a,"transitionend",function(h){h.target===a&&l&&(E(),l())})}function u(h,s){var f=n.toPosition(h,!0),_=n.getPosition(),A=d(h);te(f-_)>=1&&A>=1?r.useScroll?o.scroll(f,A,!1,s):(c("transform "+A+"ms "+r.easing),n.translate(f,!0),l=s):(n.jump(h),s())}function E(){c(""),o.cancel()}function d(h){var s=r.rewindSpeed;if(e.is(Ue)&&s){var f=i.getIndex(!0),_=i.getEnd();if(f===0&&h>=_||f>=_&&h===0)return s}return r.speed}return{mount:v,start:u,cancel:E}}var yi=function(){function e(r,n){this.event=Y(),this.Components={},this.state=pn(Pe),this.splides=[],this._o={},this._E={};var i=ye(r)?Or(document,r):r;He(i,i+" is invalid."),this.root=i,n=_e({label:oe(i,ne)||"",labelledby:oe(i,rr)||""},Ei,e.defaults,n||{});try{_e(n,JSON.parse(oe(i,Kt)))}catch{He(!1,"Invalid JSON")}this._o=Object.create(_e({},n))}var t=e.prototype;return t.mount=function(n,i){var o=this,a=this.state,c=this.Components;He(a.is([Pe,dt]),"Already mounted!"),a.set(Pe),this._C=c,this._T=i||this._T||(this.is(ot)?Ai:_i),this._E=n||this._E;var l=$e({},gi,this._E,{Transition:this._T});return Re(l,function(v,u){var E=v(o,c,o._o);c[u]=E,E.setup&&E.setup()}),Re(c,function(v){v.mount&&v.mount()}),this.emit(Se),se(this.root,Dn),a.set(ke),this.emit(Ft),this},t.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(ke)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},t.go=function(n){return this._C.Controller.go(n),this},t.on=function(n,i){return this.event.on(n,i),this},t.off=function(n){return this.event.off(n),this},t.emit=function(n){var i;return(i=this.event).emit.apply(i,[n].concat(Ne(arguments,1))),this},t.add=function(n,i){return this._C.Slides.add(n,i),this},t.remove=function(n){return this._C.Slides.remove(n),this},t.is=function(n){return this._o.type===n},t.refresh=function(){return this.emit(K),this},t.destroy=function(n){n===void 0&&(n=!0);var i=this.event,o=this.state;return o.is(Pe)?Y(this).on(Ft,this.destroy.bind(this,n)):(Re(this._C,function(a){a.destroy&&a.destroy(n)},!0),i.emit(Zt),i.destroy(),n&&me(this.splides),o.set(dt)),this},mn(e,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),ur=yi;ur.defaults={};ur.STATES=An;var Tr=[[Se,"onMounted"],[Ft,"onReady"],[Ee,"onMove"],[Ge,"onMoved"],[jt,"onClick"],[Pr,"onActive"],[Mr,"onInactive"],[Vr,"onVisible"],[kr,"onHidden"],[K,"onRefresh"],[Q,"onUpdated"],[Fe,"onResize"],[_t,"onResized"],[Fr,"onDrag"],[Ur,"onDragging"],[Br,"onDragged"],[yt,"onScroll"],[Oe,"onScrolled"],[Zt,"onDestroy"],[Gr,"onArrowsMounted"],[zr,"onArrowsUpdated"],[Wr,"onPaginationMounted"],[Hr,"onPaginationUpdated"],[Jt,"onNavigationMounted"],[Qt,"onAutoplayPlay"],[Yr,"onAutoplayPlaying"],[er,"onAutoplayPause"],[tr,"onLazyLoadLoaded"]];function sr(...e){return e.filter(Boolean).join(" ")}function Et(e){return e!==null&&typeof e=="object"}function Gt(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((r,n)=>!Gt(r,t[n]));if(Et(e)&&Et(t)){const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&!r.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!Gt(e[i],t[i]))}return e===t}function pi(e,t){return e.length===t.length&&!e.some((r,n)=>r!==t[n])}function Ni(e,t){if(e){const r=Object.keys(e);for(let n=0;n<r.length;n++){const i=r[n];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function zt(e,t){const r=e;return Ni(t,(n,i)=>{Array.isArray(n)?r[i]=n.slice():Et(n)?r[i]=zt(Et(r[i])?r[i]:{},n):r[i]=n}),r}var Si=({children:e,className:t,...r})=>be.createElement("div",{className:sr("splide__track",t),...r},be.createElement("ul",{className:"splide__list"},e)),Ti=class extends be.Component{constructor(){super(...arguments),this.splideRef=be.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:r}=this.props,{current:n}=this.splideRef;n&&(this.splide=new ur(n,e),this.bind(this.splide),this.splide.mount(t,r),this.options=zt({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!Gt(this.options,e)&&(this.splide.options=e,this.options=zt({},e));const t=this.getSlides();pi(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){Tr.forEach(([t,r])=>{const n=this.props[r];typeof n=="function"&&e.on(t,(...i)=>{n(e,...i)})})}omit(e,t){return t.forEach(r=>{Object.prototype.hasOwnProperty.call(e,r)&&delete e[r]}),e}render(){const{className:e,tag:t="div",hasTrack:r=!0,children:n,...i}=this.props;return be.createElement(t,{className:sr("splide",e),ref:this.splideRef,...this.omit(i,["options",...Tr.map(o=>o[1])])},r?be.createElement(Si,null,n):n)}},wi=({children:e,className:t,...r})=>be.createElement("li",{className:sr("splide__slide",t),...r},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function Li({latest:e,latests:t,blog:r,blog_category:n,trending_posts:i}){return J(Dt,{children:[J("section",{className:"flex flex-col lg:flex-row lg:space-x-5 justify-between items-center bg-gray-50 p-2 lg:p-10",children:[b(Ti,{options:{autoplay:!0,arrows:!1,type:"loop",interval:4e3},className:"w-full lg:w-3/4",children:t&&t.map((o,a)=>J(wi,{className:"flex flex-col lg:flex-row lg:space-x-5 justify-between items-center md:px-1",children:[b("div",{className:"w-full lg:w-3/5",children:b(fe,{href:"/"+o.slug,title:o.title,children:b("img",{src:o.imageurl,alt:o.title,className:"h-72 lg:h-96 w-full object-cover"})})}),J("div",{className:"lg:flex-1 space-y-4 mt-2 sm:text-center text-left",children:[b("h1",{className:"text-2xl lg:text-3xl font-bold text-primary hover:underline text-left line-clamp-4",children:b(fe,{href:"/"+o.slug,children:o.title})}),b("p",{className:"max-w-xl text-lg leading-relaxed text-gray-800 sm:mx-auto lg:ml-0 text-left line-clamp-5",children:o.description}),b(fe,{href:"/"+o.slug,title:o.title,className:"block text-primary rounded-md hover:underline text-left",children:"Read more"})]})]},a))}),J("div",{className:"hidden md:block w-full lg:w-1/4 text-gray-800",children:[b("h2",{className:"font-semibold text-lg",children:"LATEST ARTICLES"}),t&&t.map((o,a)=>b(fe,{href:"/"+o.slug,children:b(gn,{image:o.imageurl,title:o.title})},a)),J(fe,{href:"/search",className:"flex space-x-2 items-center font-semibold text-base text-primary float-right hover:underline",children:[b("span",{children:"See more articles"}),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 animate-pulse",children:b("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"})})]})]})]}),J("div",{id:"whole-page",className:"container mx-auto flex flex-wrap pb-6",children:[J("section",{id:"left",className:"w-full md:w-2/3 flex flex-col items-center px-3 divide-y-2 divide-yellow-200",children:[J("div",{className:"w-full justify-start mb-5",children:[b("h2",{className:"ml-6 mb-2 mt-5 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl",children:b("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500",children:"Latest"})}),b("div",{className:"grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-5",children:t&&t.map((o,a)=>b(fe,{href:"/"+o.slug,children:b(hn,{title:o.title,content:o.description,time:o.updated_at,image:o.imageurl})},a))})]}),b("div",{className:"w-full",children:b(st,{dataAdSlot:"6063218924"})}),b("div",{className:"w-full justify-start",children:b(dn,{defaultItems:n,Widget:bi})})]}),J("aside",{id:"right",className:"w-full md:w-1/3 flex flex-col items-center px-3",children:[b("div",{className:"w-full",children:b(st,{dataAdSlot:"6063218924"})}),J("div",{className:"sticky top-20",children:[b("h2",{className:"ml-6 mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-sm",children:b("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500",children:"Trending Posts"})}),i&&i.map((o,a)=>b(fe,{href:"/"+o.slug,children:b(fn,{image:o.imageurl,title:o.title,time:o.created_at})},a)),b("div",{className:"w-full",children:b(st,{dataAdSlot:"6063218924"})})]})]})]})]})}function bi({item:e}){return e.two_blog.length==0?b(Dt,{}):J(Dt,{children:[b("h2",{className:"ml-6 mb-2 my-10 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl",children:b("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500",children:e.name})}),e.two_blog.map((t,r)=>b(fe,{href:"/"+t.slug,children:b(ln,{image:t.imageurl,title:t.title,description:t.description,time:t.created_at},t.id)},r)),b(fe,{href:"/category/"+e.slug,type:"submit",className:"m-2 p-2 text-sm font-medium text-white bg-gradient-to-r to-black from-yellow-500  focus:ring-4 focus:outline-none",children:"More "+e.name}),b("div",{className:"w-full mt-5",children:b(st,{dataAdSlot:"6063218924"})})]})}Li.layout=e=>b(vn,{children:e});export{Li as default};
