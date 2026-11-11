(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Lt={},Ys=[],fr=()=>{},a_=()=>!1,Mu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Su=t=>t.startsWith("onUpdate:"),tn=Object.assign,zd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},px=Object.prototype.hasOwnProperty,St=(t,e)=>px.call(t,e),et=Array.isArray,ds=t=>Dl(t)==="[object Map]",Qc=t=>Dl(t)==="[object Set]",um=t=>Dl(t)==="[object Date]",at=t=>typeof t=="function",Yt=t=>typeof t=="string",dr=t=>typeof t=="symbol",bt=t=>t!==null&&typeof t=="object",l_=t=>(bt(t)||at(t))&&at(t.then)&&at(t.catch),c_=Object.prototype.toString,Dl=t=>c_.call(t),mx=t=>Dl(t).slice(8,-1),u_=t=>Dl(t)==="[object Object]",Vd=t=>Yt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rl=kd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eu=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},gx=/-\w/g,Hi=Eu(t=>t.replace(gx,e=>e.slice(1).toUpperCase())),_x=/\B([A-Z])/g,fo=Eu(t=>t.replace(_x,"-$1").toLowerCase()),f_=Eu(t=>t.charAt(0).toUpperCase()+t.slice(1)),hf=Eu(t=>t?`on${f_(t)}`:""),or=(t,e)=>!Object.is(t,e),df=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},h_=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},vx=t=>{const e=parseFloat(t);return isNaN(e)?t:e},xx=t=>{const e=Yt(t)?Number(t):NaN;return isNaN(e)?t:e};let fm;const bu=()=>fm||(fm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hd(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Yt(i)?Ex(i):Hd(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Yt(t)||bt(t))return t}const yx=/;(?![^(]*\))/g,Mx=/:([^]+)/,Sx=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Ex(t){const e={};return t.replace(Sx,n=>n.startsWith("/*")?"":n).split(yx).forEach(n=>{if(n){const i=n.split(Mx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function tr(t){let e="";if(Yt(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=tr(t[n]);i&&(e+=i+" ")}else if(bt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bx="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Tx=kd(bx);function d_(t){return!!t||t===""}function Ax(t,e,n){if(t.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<t.length;r++)i=Tu(t[r],e[r],n);return i}function hm(t,e,n){if(t.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of t){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&Tu(s,i[a],n)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function wx(t,e,n){let i=ds(t),r=ds(e);if(i||r||(i=Qc(t),r=Qc(e),i||r))return i&&r?hm(t,e,n):!1;const s=Object.keys(t).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in t){const l=t.hasOwnProperty(a),u=e.hasOwnProperty(a);if(l&&!u||!l&&u||!Tu(t[a],e[a],n))return!1}return String(t)===String(e)}function dm(t,e,n,i){n||(n=[new Map,new Map]);const[r,s]=n;if(r.has(t)||s.has(e))return r.get(t)===e&&s.get(e)===t;r.set(t,e),s.set(e,t);const o=i(t,e,n);return r.delete(t),s.delete(e),o}function Tu(t,e,n){if(t===e)return!0;let i=um(t),r=um(e);return i||r?i&&r?t.getTime()===e.getTime():!1:(i=dr(t),r=dr(e),i||r?t===e:(i=et(t),r=et(e),i||r?i&&r?dm(t,e,n,Ax):!1:(i=bt(t),r=bt(e),i||r?!i||!r?!1:dm(t,e,n,wx):String(t)===String(e))))}const p_=t=>!!(t&&t.__v_isRef===!0),Ti=t=>Yt(t)?t:t==null?"":et(t)||bt(t)&&(t.toString===c_||!at(t.toString))?p_(t)?Ti(t.value):JSON.stringify(t,m_,2):String(t),m_=(t,e)=>p_(e)?m_(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[pf(i,s)+" =>"]=r,n),{})}:Qc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pf(n))}:dr(e)?pf(e):bt(e)&&!et(e)&&!u_(e)?String(e):e,pf=(t,e="")=>{var n;return dr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let En;class Cx{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&En&&(En.active?(this.parent=En,this.index=(En.scopes||(En.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=En;try{return En=this,e()}finally{En=n}}}on(){++this._on===1&&(this.prevScope=En,En=this)}off(){if(this._on>0&&--this._on===0){if(En===this)En=this.prevScope;else{let e=En;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,i=r.length;n<i;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Rx(){return En}let Ut;const mf=new WeakSet;class g_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,En&&(En.active?En.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mf.has(this)&&(mf.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||v_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pm(this),x_(this);const e=Ut,n=Gi;Ut=this,Gi=!0;try{return this.fn()}finally{y_(this),Ut=e,Gi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xd(e);this.deps=this.depsTail=void 0,pm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mf.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yh(this)&&this.run()}get dirty(){return yh(this)}}let __=0,sl,ol;function v_(t,e=!1){if(t.flags|=8,e){t.next=ol,ol=t;return}t.next=sl,sl=t}function Gd(){__++}function Wd(){if(--__>0)return;if(ol){let e=ol;for(ol=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;sl;){let e=sl;for(sl=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function x_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y_(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Xd(i),Px(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function yh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(M_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function M_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===pl)||(t.globalVersion=pl,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!yh(t))))return;t.flags|=2;const e=t.dep,n=Ut,i=Gi;Ut=t,Gi=!0;try{x_(t);const r=t.fn(t._value);(e.version===0||or(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ut=n,Gi=i,y_(t),t.flags&=-3}}function Xd(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Xd(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Px(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gi=!0;const S_=[];function pr(){S_.push(Gi),Gi=!1}function mr(){const t=S_.pop();Gi=t===void 0?!0:t}function pm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ut;Ut=void 0;try{e()}finally{Ut=n}}}let pl=0;class Lx{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ut||!Gi||Ut===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ut)n=this.activeLink=new Lx(Ut,this),Ut.deps?(n.prevDep=Ut.depsTail,Ut.depsTail.nextDep=n,Ut.depsTail=n):Ut.deps=Ut.depsTail=n,E_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ut.depsTail,n.nextDep=void 0,Ut.depsTail.nextDep=n,Ut.depsTail=n,Ut.deps===n&&(Ut.deps=i)}return n}trigger(e){this.version++,pl++,this.notify(e)}notify(e){Gd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wd()}}}function E_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)E_(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Mh=new WeakMap,Qs=Symbol(""),Sh=Symbol(""),ml=Symbol("");function Un(t,e,n){if(Gi&&Ut){let i=Mh.get(t);i||Mh.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new jd),r.map=i,r.key=n),r.track()}}function Or(t,e,n,i,r,s){const o=Mh.get(t);if(!o){pl++;return}const a=l=>{l&&l.trigger()};if(Gd(),e==="clear")o.forEach(a);else{const l=et(t),u=l&&Vd(n);if(l&&n==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===ml||!dr(h)&&h>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(ml)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Qs)),ds(t)&&a(o.get(Sh)));break;case"delete":l||(a(o.get(Qs)),ds(t)&&a(o.get(Sh)));break;case"set":ds(t)&&a(o.get(Qs));break}}Wd()}function vo(t){const e=Mt(t);return e===t||(Un(e,"iterate",ml),Li(t))?e:gr(t)?ps(t)?e.map(n=>vs(Di(n))):e.map(vs):e.map(Di)}function Au(t){return Un(t=Mt(t),"iterate",ml),t}function nr(t,e){return gr(t)?vs(ps(t)?Di(e):e):Di(e)}const Dx={__proto__:null,[Symbol.iterator](){return gf(this,Symbol.iterator,t=>nr(this,t))},concat(...t){return vo(this).concat(...t.map(e=>et(e)?vo(e):e))},entries(){return gf(this,"entries",t=>(t[1]=nr(this,t[1]),t))},every(t,e){return wr(this,"every",t,e,void 0,arguments)},filter(t,e){return wr(this,"filter",t,e,n=>n.map(i=>nr(this,i)),arguments)},find(t,e){return wr(this,"find",t,e,n=>nr(this,n),arguments)},findIndex(t,e){return wr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wr(this,"findLast",t,e,n=>nr(this,n),arguments)},findLastIndex(t,e){return wr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wr(this,"forEach",t,e,void 0,arguments)},includes(...t){return _f(this,"includes",t)},indexOf(...t){return _f(this,"indexOf",t)},join(t){return vo(this).join(t)},lastIndexOf(...t){return _f(this,"lastIndexOf",t)},map(t,e){return wr(this,"map",t,e,void 0,arguments)},pop(){return Ba(this,"pop")},push(...t){return Ba(this,"push",t)},reduce(t,...e){return gm(this,"reduce",t,e)},reduceRight(t,...e){return gm(this,"reduceRight",t,e)},shift(){return Ba(this,"shift")},some(t,e){return wr(this,"some",t,e,void 0,arguments)},splice(...t){return Ba(this,"splice",t)},toReversed(){return vo(this).toReversed()},toSorted(t){return vo(this).toSorted(t)},toSpliced(...t){return vo(this).toSpliced(...t)},unshift(...t){return Ba(this,"unshift",t)},values(){return gf(this,"values",t=>nr(this,t))}};function gf(t,e,n){const i=Au(t),r=i[e],s=r.call(i);if(i!==t&&!Li(t)){if(s[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(s));return o.next=()=>mm(s.next(),n),r!==b_[e]&&Object.defineProperties(o,{return:{get(){const a=s.return;return typeof a=="function"?a.bind(s):a}},throw:{get(){const a=s.throw;return typeof a=="function"?a.bind(s):a}}}),o}s._next=s.next,s.next=()=>mm(s._next(),n)}return s}function mm(t,e){return t.done||(t.value=e(t.value)),t}const b_=Array.prototype;function wr(t,e,n,i,r,s){const o=Au(t),a=o!==t&&!Li(t),l=o[e];if(l!==b_[e]){const f=l.apply(t,s);return a?Di(f):f}let u=n;o!==t&&(a?u=function(f,h){return n.call(this,nr(t,f),h,t)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,t)}));const c=l.call(o,u,i);return a&&r?r(c):c}function gm(t,e,n,i){const r=Au(t),s=r!==t&&!Li(t);let o=n,a=!1;r!==t&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=nr(t,u)),n.call(this,u,nr(t,c),f,t)}):n.length>3&&(o=function(u,c,f){return n.call(this,u,c,f,t)}));const l=r[e](o,...i);return a?nr(t,l):l}function _f(t,e,n){const i=Mt(t);Un(i,"iterate",ml);const r=i[e](...n);return(r===-1||r===!1)&&$d(n[0])?(n[0]=Mt(n[0]),i[e](...n)):r}function Ba(t,e,n=[]){pr(),Gd();const i=Mt(t)[e].apply(t,n);return Wd(),mr(),i}const Ix=kd("__proto__,__v_isRef,__isVue"),T_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dr));function Ux(t){dr(t)||(t=String(t));const e=Mt(this);return Un(e,"has",t),e.hasOwnProperty(t)}class A_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Wx:P_:s?R_:C_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=et(e);if(!r){let l;if(o&&(l=Dx[n]))return l;if(n==="hasOwnProperty")return Ux}const a=Reflect.get(e,n,zn(e)?e:i);if((dr(n)?T_.has(n):Ix(n))||(r||Un(e,"get",n),s))return a;if(zn(a)){const l=o&&Vd(n)?a:a.value;return r&&bt(l)?bh(l):l}return bt(a)?r?bh(a):Yd(a):a}}class w_ extends A_{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=et(e)&&Vd(n);if(!this._isShallow){const u=gr(s);if(!Li(i)&&!gr(i)&&(s=Mt(s),i=Mt(i)),!o&&zn(s)&&!zn(i))return u||(s.value=i),!0}const a=o?Number(n)<e.length:St(e,n),l=Reflect.set(e,n,i,zn(e)?e:r);return e===Mt(r)&&l&&(a?or(i,s)&&Or(e,"set",n,i):Or(e,"add",n,i)),l}deleteProperty(e,n){const i=St(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Or(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!dr(n)||!T_.has(n))&&Un(e,"has",n),i}ownKeys(e){return Un(e,"iterate",et(e)?"length":Qs),Reflect.ownKeys(e)}}class Nx extends A_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fx=new w_,Ox=new Nx,Bx=new w_(!0);const Eh=t=>t,Jl=t=>Reflect.getPrototypeOf(t);function kx(t,e,n){return function(...i){const r=this.__v_raw,s=Mt(r),o=ds(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...i),c=n?Eh:e?vs:Di;return!e&&Un(s,"iterate",l?Sh:Qs),tn(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function Ql(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zx(t,e){const n={get(r){const s=this.__v_raw,o=Mt(s),a=Mt(r);t||(or(r,a)&&Un(o,"get",r),Un(o,"get",a));const{has:l}=Jl(o),u=e?Eh:t?vs:Di;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Un(Mt(r),"iterate",Qs),r.size},has(r){const s=this.__v_raw,o=Mt(s),a=Mt(r);return t||(or(r,a)&&Un(o,"has",r),Un(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Mt(a),u=e?Eh:t?vs:Di;return!t&&Un(l,"iterate",Qs),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return tn(n,t?{add:Ql("add"),set:Ql("set"),delete:Ql("delete"),clear:Ql("clear")}:{add(r){const s=Mt(this),o=Jl(s),a=Mt(r),l=!e&&!Li(r)&&!gr(r)?a:r;return o.has.call(s,l)||or(r,l)&&o.has.call(s,r)||or(a,l)&&o.has.call(s,a)||(s.add(l),Or(s,"add",l,l)),this},set(r,s){!e&&!Li(s)&&!gr(s)&&(s=Mt(s));const o=Mt(this),{has:a,get:l}=Jl(o);let u=a.call(o,r);u||(r=Mt(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?or(s,c)&&Or(o,"set",r,s):Or(o,"add",r,s),this},delete(r){const s=Mt(this),{has:o,get:a}=Jl(s);let l=o.call(s,r);l||(r=Mt(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Or(s,"delete",r,void 0),u},clear(){const r=Mt(this),s=r.size!==0,o=r.clear();return s&&Or(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=kx(r,t,e)}),n}function qd(t,e){const n=zx(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_isShallow"?e:r==="__v_raw"?i:Reflect.get(St(n,r)&&r in i?n:i,r,s)}const Vx={get:qd(!1,!1)},Hx={get:qd(!1,!0)},Gx={get:qd(!0,!1)};const C_=new WeakMap,R_=new WeakMap,P_=new WeakMap,Wx=new WeakMap;function Xx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yd(t){return gr(t)?t:Kd(t,!1,Fx,Vx,C_)}function jx(t){return Kd(t,!1,Bx,Hx,R_)}function bh(t){return Kd(t,!0,Ox,Gx,P_)}function Kd(t,e,n,i,r){if(!bt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const s=r.get(t);if(s)return s;const o=Xx(mx(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function ps(t){return gr(t)?ps(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function Li(t){return!!(t&&t.__v_isShallow)}function $d(t){return t?!!t.__v_raw:!1}function Mt(t){const e=t&&t.__v_raw;return e?Mt(e):t}function qx(t){return!St(t,"__v_skip")&&Object.isExtensible(t)&&h_(t,"__v_skip",!0),t}const Di=t=>bt(t)?Yd(t):t,vs=t=>bt(t)?bh(t):t;function zn(t){return t?t.__v_isRef===!0:!1}function Qt(t){return L_(t,!1)}function Yx(t){return L_(t,!0)}function L_(t,e){return zn(t)?t:new Kx(t,e)}class Kx{constructor(e,n){this.dep=new jd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Mt(e),this._value=n?e:Di(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Li(e)||gr(e);e=i?e:Mt(e),or(e,n)&&(this._rawValue=e,this._value=i?e:Di(e),this.dep.trigger())}}function Ln(t){return zn(t)?t.value:t}const $x={get:(t,e,n)=>e==="__v_raw"?t:Ln(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return zn(r)&&!zn(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function D_(t){return ps(t)?t:new Proxy(t,$x)}class Zx{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ut!==this)return v_(this,!0),!0}get value(){const e=this.dep.track();return M_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jx(t,e,n=!1){let i,r;return at(t)?i=t:(i=t.get,r=t.set),new Zx(i,r,n)}const ec={},eu=new WeakMap;let zs;function Qx(t,e=!1,n=zs){if(n){let i=eu.get(n);i||eu.set(n,i=[]),i.push(t)}}function ey(t,e,n=Lt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,u=y=>r?y:Li(y)||r===!1||r===0?Br(y,1):Br(y);let c,f,h,p,_=!1,v=!1;if(zn(t)?(f=()=>t.value,_=Li(t)):ps(t)?(f=()=>u(t),_=!0):et(t)?(v=!0,_=t.some(y=>ps(y)||Li(y)),f=()=>t.map(y=>{if(zn(y))return y.value;if(ps(y))return u(y);if(at(y))return l?l(y,2):y()})):at(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){pr();try{h()}finally{mr()}}const y=zs;zs=c;try{return l?l(t,3,[p]):t(p)}finally{zs=y}}:f=fr,e&&r){const y=f,H=r===!0?1/0:r;f=()=>Br(y(),H)}const m=Rx(),d=()=>{c.stop(),m&&m.active&&zd(m.effects,c)};if(s&&e){const y=e;e=(...H)=>{try{return y(...H)}finally{d()}}}let w=v?new Array(t.length).fill(ec):ec;const A=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const H=c.run();if(y||r||_||(v?H.some((N,L)=>or(N,w[L])):or(H,w))){const N=zs;pr();try{h&&h(),zs=c;const L=[H,w===ec?void 0:v&&w[0]===ec?[]:w,p];w=H,l?l(e,3,L):e(...L)}finally{zs=N,mr()}}}else c.run()};return a&&a(A),c=new g_(f),c.scheduler=o?()=>o(A,!1):A,p=y=>Qx(y,!1,c),h=c.onStop=()=>{const y=eu.get(c);if(y){if(l)l(y,4);else for(const H of y)H();eu.delete(c)}},e?i?A(!0):w=c.run():o?o(A.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Br(t,e=1/0,n){if(e<=0||!bt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,zn(t))Br(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)Br(t[i],e,n);else if(Qc(t)||ds(t))t.forEach(i=>{Br(i,e,n)});else if(u_(t)){for(const i in t)Br(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Br(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Il(t,e,n,i){try{return i?t(...i):t()}catch(r){wu(r,e,n)}}function Ii(t,e,n,i){if(at(t)){const r=Il(t,e,n,i);return r&&l_(r)&&r.catch(s=>{wu(s,e,n,void 0,!0)}),r}if(et(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Ii(t[s],e,n,i));return r}}function wu(t,e,n,i=!0,r=!1){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Lt;if(e){let l=e.parent;const u=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f&&!l.isUnmounted&&(!r||l.scope.active)){for(let h=0;h<f.length;h++)if(f[h](t,u,c)===!1)return}l=l.parent}if(o){pr(),Il(o,null,10,[t,u,c]),mr();return}}ty(t,n,s,i,a)}function ty(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Kn=[];let zi=-1;const ir=[];let us=null,Ho=0;const I_=Promise.resolve();let tu=null;function ny(t){const e=tu||I_;return t?e.then(this?t.bind(this):t):e}function iy(t){let e=zi+1,n=Kn.length;for(;e<n;){const i=e+n>>>1,r=Kn[i],s=gl(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Cu(t){if(!(t.flags&1)){const e=gl(t),n=Kn[Kn.length-1];!n||!(t.flags&2)&&e>=gl(n)?Kn.push(t):Kn.splice(iy(e),0,t),t.flags|=1,U_()}}function U_(){tu||(tu=I_.then(O_))}function ry(t){if(!et(t))us&&t.id===-1?us.splice(Ho+1,0,t):t.flags&1||(ir.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)ir.push(t[e]);U_()}function N_(t,e,n,i=zi+1){for(;i<Kn.length;i++){const r=Kn[i];if(r&&r.flags&2){if(t&&r.id!==t.uid||e!==void 0&&!(r.id>=e))continue;Kn.splice(i,1),i=t?i-1:zi,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function F_(t,e,n=0){if(ir.length){let i=ir,r=0;if(e){i=[];for(let o=0;o<ir.length;o++){const a=ir[o];(a.i!==void 0?!a.i||a.i.uid<n:e.has(a))?ir[r++]=a:i.push(a)}}const s=[...new Set(i)].sort((o,a)=>gl(o)-gl(a));if(ir.length=r,us){for(let o=0;o<s.length;o++)us.push(s[o]);return}for(us=s,Ho=0;Ho<us.length;Ho++){const o=us[Ho];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}us=null,Ho=0}}let vf=!1;function sy(t,e){if(vf){t();return}const n=e===void 0?void 0:new Set(ir);t(),vf=!0;try{N_(void 0,e),F_(void 0,n,e)}finally{vf=!1}}const gl=t=>t.id==null?t.flags&2?-1:1/0:t.id;function O_(t){try{for(zi=0;zi<Kn.length;zi++){const e=Kn[zi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Il(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;zi<Kn.length;zi++){const e=Kn[zi];e&&(e.flags&=-2)}zi=-1,Kn.length=0,F_(),tu=null,(Kn.length||ir.length)&&O_()}}let Ri=null,B_=null;function nu(t){const e=Ri;return Ri=t,B_=t&&t.type.__scopeId||null,e}function k_(t,e=Ri,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ou(-1);const s=nu(e),o=to.length;let a;try{a=t(...r)}finally{for(let l=to.length;l>o;l--)h1();nu(s),i._d&&ou(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function oy(t,e){if(Ri===null)return t;const n=Nu(Ri),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Lt]=e[r];s&&(at(s)&&(s={mounted:s,updated:s}),s.deep&&Br(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ws(t,e,n,i){let r=t;if(i==="beforeMount")t._mount=t;else if(i==="beforeUpdate"){const a=e&&e._mount;a&&(a._latest=t,t._mount=a)}else if(i==="mounted"){const a=t._latest;t._mount=t._latest=void 0,a&&(r=a,a._mount=void 0)}const s=r.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){let l=s[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=tn({},l,{oldValue:void 0}));let u=l.dir[i];u&&(pr(),Ii(u,n,8,[t.el,l,r,e]),mr())}}function ay(t,e){if($n){let n=$n.provides;const i=$n.parent&&$n.parent.provides;i===n&&(n=$n.provides=Object.create(i)),n[t]=e}}function Vc(t,e,n=!1){const i=g1();if(i||qo){let r=qo?qo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&at(e)?e.call(i&&i.proxy):e}}const ly=Symbol.for("v-scx"),cy=()=>Vc(ly);function Hc(t,e,n){return z_(t,e,n)}function z_(t,e,n=Lt){const{immediate:i,deep:r,flush:s,once:o}=n,a=tn({},n),l=e&&i||!e&&s!=="post";let u;if(Sl){if(s==="sync"){const p=cy();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=fr,p.resume=fr,p.pause=fr,p}}const c=$n;a.call=(p,_,v)=>Ii(p,c,_,v);let f=!1;s==="post"?a.scheduler=p=>{p.i=c,qn(p,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Cu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=ey(t,e,a);return Sl&&(u?u.push(h):l&&h()),h}function uy(t,e,n){const i=this.proxy,r=Yt(t)?t.includes(".")?V_(i,t):()=>i[t]:t.bind(i,i);let s;at(e)?s=e:(s=e.handler,n=e);const o=Ul(this),a=z_(r,s.bind(i),n);return o(),a}function V_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const fy=Symbol("_vte"),Ru=t=>t.__isTeleport,Ai=Symbol("_leaveCb"),ka=Symbol("_enterCb");function hy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Lu(()=>{t.isMounted=!0}),Du(()=>{t.isUnmounting=!0}),t}const yi=[Function,Array],H_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yi,onEnter:yi,onAfterEnter:yi,onEnterCancelled:yi,onBeforeLeave:yi,onLeave:yi,onAfterLeave:yi,onLeaveCancelled:yi,onBeforeAppear:yi,onAppear:yi,onAfterAppear:yi,onAppearCancelled:yi},dy={name:"BaseTransition",props:H_,setup(t,{slots:e}){const n=g1(),i=hy();return()=>{const r=e.default&&X_(e.default(),!0),s=r&&r.length?G_(r):n.subTree?Wo():void 0;if(!s)return;const o=Mt(t),{mode:a}=o;if(i.isLeaving)return xf(s);const l=iu(s);if(!l)return xf(s);const u=Th(l,o,i,n);l.type!==On&&eo(l,u);let c=n.subTree&&iu(n.subTree);if(c&&c.type!==On&&!Ws(c,l)&&_l(n.subTree)){let f=Th(c,o,i,n);if(eo(c,f),a==="out-in"&&l.type!==On)return i.isLeaving=!0,f.afterLeave=()=>{if(i.isLeaving=!1,!(n.job.flags&8))if(n.effect.flags&2){const h=()=>{n.job.flags&8||n.update()};h.i=n,Cu(h)}else n.update();delete f.afterLeave,c=void 0},xf(s);a==="in-out"&&l.type!==On?f.delayLeave=(h,p,_)=>{const v=W_(i,c);v[String(c.key)]=c,h[Ai]=()=>{p(),h[Ai]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function G_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==On){e=n;break}}return e}const py=dy;function W_(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Th(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:v,onAppear:m,onAfterAppear:d,onAppearCancelled:w}=e,A=String(t.key),y=W_(n,t),H=(D,S)=>{D&&Ii(D,i,9,S)},N=(D,S)=>{const x=S[1];H(D,S),et(D)?D.every(C=>C.length<=1)&&x():D.length<=1&&x()},L={mode:s,persisted:o,beforeEnter(D){let S=a;if(!n.isMounted)if(r)S=v||a;else return;D[Ai]&&D[Ai](!0);const x=y[A];if(x&&Ws(t,x)){let C=x.el[Ai];if(!C){const F=_l(x);C=F&&F.el[Ai]}C&&C()}H(S,[D])},enter(D){if(y[A]===t)return;let S=l,x=u,C=c;if(!n.isMounted)if(r)S=m||l,x=d||u,C=w||c;else return;let F=!1;D[ka]=re=>{F||(F=!0,re?H(C,[D]):H(x,[D]),L.delayedLeave&&L.delayedLeave(),D[ka]=void 0)};const G=D[ka].bind(null,!1);S?N(S,[D,G]):G()},leave(D,S){const x=String(t.key);if(D[ka]&&D[ka](!0),n.isUnmounting)return S();H(f,[D]);let C=!1;D[Ai]=G=>{C||(C=!0,S(),G?H(_,[D]):H(p,[D]),D[Ai]=void 0,y[x]===t&&delete y[x])};const F=D[Ai].bind(null,!1);y[x]=t,h?N(h,[D,F]):F()},clone(D){const S=Th(D,e,n,i);return S.afterLeave=()=>{L.afterLeave&&L.afterLeave()},S.delayLeave=(x,C,F)=>{L.delayLeave?L.delayLeave(x,C,F):F()},S.delayedLeave=()=>{L.delayedLeave&&L.delayedLeave()},S}};return L}function xf(t){if(Pu(t))return t=xs(t),t.children=null,t}function iu(t){if(!Pu(t))return Ru(t.type)&&t.children?G_(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&at(n.default))return n.default()}}function eo(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;eo(Ru(n.type)&&iu(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const i=n.isHydrating?n.pendingBranch:n.activeBranch;i&&eo(i,e.clone(i))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===ci&&et(t.children)){const n=Q_(t.children,!1);n&&eo(n,e)}}function X_(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ci?(o.patchFlag&128&&r++,i=i.concat(X_(o.children,e,a))):(e||o.type!==On)&&i.push(a!=null?xs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function _l(t){if(t.component)return _l(t.component.subTree);if(t.type===ci){const e=et(t.children)&&Q_(t.children,!1);return e?_l(e):void 0}if(t.type!==On)return t}function j_(t,e){return at(t)?tn({name:t.name},e,{setup:t}):t}function q_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _m(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ru=new WeakMap;function al(t,e,n,i,r=!1){if(et(t)){t.forEach((v,m)=>al(v,e&&(et(e)?e[m]:e),n,i,r));return}if(ll(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&al(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Nu(i.component):i.el,o=r?null:s,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Lt?a.refs={}:a.refs,f=a.setupState,h=Mt(f),p=f===Lt?a_:v=>_m(c,v)?!1:St(h,v),_=(v,m)=>!(m&&_m(c,m));if(u!=null&&u!==l){if(vm(e),Yt(u))c[u]=null,p(u)&&(f[u]=null);else if(zn(u)){const v=e;_(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(at(l))Il(l,a,12,[o,c]);else{const v=Yt(l),m=zn(l);if(v||m){const d=()=>{if(t.f){const w=v?p(l)?f[l]:c[l]:_()||!t.k?l.value:c[t.k];if(r)et(w)&&zd(w,s);else if(et(w))w.includes(s)||w.push(s);else if(v)c[l]=[s],p(l)&&(f[l]=c[l]);else{const A=[s];_(l,t.k)&&(l.value=A),t.k&&(c[t.k]=A)}}else v?(c[l]=o,p(l)&&(f[l]=o)):m&&(_(l,t.k)&&(l.value=o),t.k&&(c[t.k]=o))};if(o){const w=()=>{d(),ru.delete(t)};w.id=-1,ru.set(t,w),qn(w,n)}else vm(t),d()}}}function vm(t){const e=ru.get(t);e&&(e.flags|=8,ru.delete(t))}bu().requestIdleCallback;bu().cancelIdleCallback;const ll=t=>!!t.type.__asyncLoader,Pu=t=>t.type.__isKeepAlive;function my(t,e){Y_(t,"a",e)}function gy(t,e){Y_(t,"da",e)}function Y_(t,e,n=$n){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Pu(r.parent.vnode)&&_y(i,e,n,r),r=r.parent}}function _y(t,e,n,i){const r=vl(e,t,i,!0),s=vl("um",()=>zd(i[e],r),n);s.flags=16}function vl(t,e,n=$n,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{pr();const a=Ul(n),l=Ii(e,n,t,o);return a(),mr(),l});return i?r.unshift(s):r.push(s),s}}const Jr=t=>(e,n=$n)=>{(!Sl||t==="sp")&&vl(t,(...i)=>e(...i),n)},vy=Jr("bm"),Lu=Jr("m"),xy=Jr("bu"),yy=Jr("u"),Du=Jr("bum"),My=Jr("um"),Sy=Jr("sp"),Ey=Jr("rtg"),by=Jr("rtc");function Ty(t,e=$n){vl("ec",t,e)}const Ay=Symbol.for("v-ndc");function wy(t,e,n,i){let r;const s=n,o=et(t);if(o||Yt(t)){const a=o&&ps(t);let l=!1,u=!1;a&&(l=!Li(t),u=gr(t),t=Au(t)),r=new Array(t.length);for(let c=0,f=t.length;c<f;c++)r[c]=e(l?u?vs(Di(t[c])):Di(t[c]):t[c],c,void 0,s)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)r=[];else{r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(bt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,s)}}else r=[];return r}const Ah=t=>t?_1(t)?Nu(t):Ah(t.parent):null,cl=tn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ah(t.parent),$root:t=>Ah(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$_(t),$forceUpdate:t=>t.f||(t.f=()=>{Cu(t.update)}),$nextTick:t=>t.n||(t.n=ny.bind(t.proxy)),$watch:t=>uy.bind(t)}),yf=(t,e)=>t!==Lt&&!t.__isScriptSetup&&St(t,e),Cy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(yf(i,e))return o[e]=1,i[e];if(r!==Lt&&St(r,e))return o[e]=2,r[e];if(St(s,e))return o[e]=3,s[e];if(n!==Lt&&St(n,e))return o[e]=4,n[e];wh&&(o[e]=0)}}const u=cl[e];let c,f;if(u)return e==="$attrs"&&Un(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==Lt&&St(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,St(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return yf(r,e)?(r[e]=n,!0):i!==Lt&&St(i,e)?(i[e]=n,!0):St(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==Lt&&a[0]!=="$"&&St(t,a)||yf(e,a)||St(s,a)||St(i,a)||St(cl,a)||St(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:St(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xm(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wh=!0;function Ry(t){const e=$_(t),n=t.proxy,i=t.ctx;wh=!1,e.beforeCreate&&ym(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:A,unmounted:y,render:H,renderTracked:N,renderTriggered:L,errorCaptured:D,serverPrefetch:S,expose:x,inheritAttrs:C,components:F,directives:G,filters:re}=e;if(u&&Py(u,i,null),o)for(const te in o){const W=o[te];at(W)&&(i[te]=W.bind(n))}if(r){const te=r.call(n,n);bt(te)&&(t.data=Yd(te))}if(wh=!0,s)for(const te in s){const W=s[te],_e=at(W)?W.bind(n,n):at(W.get)?W.get.bind(n,n):fr,Ee=!at(W)&&at(W.set)?W.set.bind(n):fr,Ce=Dn({get:_e,set:Ee});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Ne=>Ce.value=Ne})}if(a)for(const te in a)K_(a[te],i,n,te);if(l){const te=at(l)?l.call(n):l;Reflect.ownKeys(te).forEach(W=>{ay(W,te[W])})}c&&ym(c,t,"c");function J(te,W){et(W)?W.forEach(_e=>te(_e.bind(n))):W&&te(W.bind(n))}if(J(vy,f),J(Lu,h),J(xy,p),J(yy,_),J(my,v),J(gy,m),J(Ty,D),J(by,N),J(Ey,L),J(Du,w),J(My,y),J(Sy,S),et(x))if(x.length){const te=t.exposed||(t.exposed={});x.forEach(W=>{Object.defineProperty(te,W,{get:()=>n[W],set:_e=>n[W]=_e,enumerable:!0})})}else t.exposed||(t.exposed={});H&&t.render===fr&&(t.render=H),C!=null&&(t.inheritAttrs=C),F&&(t.components=F),G&&(t.directives=G),S&&q_(t)}function Py(t,e,n=fr){et(t)&&(t=Ch(t));for(const i in t){const r=t[i];let s;bt(r)?"default"in r?s=Vc(r.from||i,r.default,!0):s=Vc(r.from||i):s=Vc(r),zn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ym(t,e,n){Ii(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function K_(t,e,n,i){let r=i.includes(".")?V_(n,i):()=>n[i];if(Yt(t)){const s=e[t];at(s)&&Hc(r,s)}else if(at(t))Hc(r,t.bind(n));else if(bt(t))if(et(t))t.forEach(s=>K_(s,e,n,i));else{const s=at(t.handler)?t.handler.bind(n):e[t.handler];at(s)&&Hc(r,s,t)}}function $_(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>su(l,u,o,!0)),su(l,e,o)),bt(e)&&s.set(e,l),l}function su(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&su(t,s,n,!0),r&&r.forEach(o=>su(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ly[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ly={data:Mm,props:Sm,emits:Sm,methods:Ja,computed:Ja,beforeCreate:jn,created:jn,beforeMount:jn,mounted:jn,beforeUpdate:jn,updated:jn,beforeDestroy:jn,beforeUnmount:jn,destroyed:jn,unmounted:jn,activated:jn,deactivated:jn,errorCaptured:jn,serverPrefetch:jn,components:Ja,directives:Ja,watch:Iy,provide:Mm,inject:Dy};function Mm(t,e){return e?t?function(){return tn(at(t)?t.call(this,this):t,at(e)?e.call(this,this):e)}:e:t}function Dy(t,e){return Ja(Ch(t),Ch(e))}function Ch(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jn(t,e){return t?[...new Set([].concat(t,e))]:e}function Ja(t,e){return t?tn(Object.create(null),t,e):e}function Sm(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:tn(Object.create(null),xm(t),xm(e??{})):e}function Iy(t,e){if(!t)return e;if(!e)return t;const n=tn(Object.create(null),t);for(const i in e)n[i]=jn(t[i],e[i]);return n}function Z_(){return{app:null,config:{isNativeTag:a_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uy=0;function Ny(t,e){return function(i,r=null){at(i)||(i=tn({},i)),r!=null&&!bt(r)&&(r=null);const s=Z_(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Uy++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:mM,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&at(c.install)?(o.add(c),c.install(u,...f)):at(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const p=u._ceVNode||Bn(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(p,c,h),l=!0,u._container=c,c.__vue_app__=u,Nu(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Ii(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=qo;qo=u;try{return c()}finally{qo=f}}};return u}}let qo=null;const Fy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Hi(e)}Modifiers`]||t[`${fo(e)}Modifiers`];function Oy(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Lt;let r=n;const s=e.startsWith("update:"),o=s&&Fy(i,e.slice(7));o&&(o.trim&&(r=n.map(c=>Yt(c)?c.trim():c)),o.number&&(r=r.map(vx)));let a,l=i[a=hf(e)]||i[a=hf(Hi(e))];!l&&s&&(l=i[a=hf(fo(e))]),l&&Ii(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ii(u,t,6,r)}}const By=new WeakMap;function J_(t,e,n=!1){const i=n?By:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!at(t)){const l=u=>{const c=J_(u,e,!0);c&&(a=!0,tn(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(bt(t)&&i.set(t,null),null):(et(s)?s.forEach(l=>o[l]=null):tn(o,s),bt(t)&&i.set(t,o),o)}function Iu(t,e){return!t||!Mu(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),St(t,e[0].toLowerCase()+e.slice(1))||St(t,fo(e))||St(t,e))}function Em(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:p,ctx:_,inheritAttrs:v}=t,m=nu(t);let d,w;try{if(n.shapeFlag&4){const y=r||i,H=y;d=rr(u.call(H,y,c,f,p,h,_)),w=a}else{const y=e;d=rr(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),w=e.props?a:ky(a)}}catch(y){to.length=0,wu(y,t,1),d=Bn(On)}let A=d;if(w&&v!==!1){const y=Object.keys(w),{shapeFlag:H}=A;y.length&&H&7&&(s&&y.some(Su)&&(w=zy(w,s)),A=xs(A,w,!1,!0))}if(n.dirs&&(A=xs(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition){const y=Ru(A.type)&&iu(A)||A;eo(y,n.transition)}return d=A,nu(m),d}function Q_(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(yl(r)){if(r.type!==On||r.children==="v-if"){if(n)return;n=r}}else return}return n}const ky=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mu(n))&&((e||(e={}))[n]=t[n]);return e},zy=(t,e)=>{const n={};for(const i in t)(!Su(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Vy(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?bm(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(e1(o,i,h)&&!Iu(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?bm(i,o,u):!0:!!o;return!1}function bm(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(!St(t,s)||e1(e,t,s)&&!Iu(n,s))return!0}return!1}function e1(t,e,n){const i=t[n],r=e[n];return n==="style"&&bt(i)&&bt(r)?!Tu(i,r):i!==r}function Hy({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const t1={},n1=()=>Object.create(t1),i1=t=>Object.getPrototypeOf(t)===t1;function Gy(t,e,n,i=!1){const r={},s=n1();t.propsDefaults=Object.create(null),r1(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:jx(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Wy(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Mt(r),[l]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Iu(t.emitsOptions,h))continue;const p=e[h];if(l)if(St(s,h))p!==s[h]&&(s[h]=p,u=!0);else{const _=Hi(h);r[_]=Rh(l,a,_,p,t,!1)}else p!==s[h]&&(s[h]=p,u=!0)}}}else{r1(t,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!St(e,f)&&((c=fo(f))===f||!St(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=Rh(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!St(e,f))&&(delete s[f],u=!0)}u&&Or(t.attrs,"set","")}function r1(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(rl(l))continue;const u=e[l];let c;r&&St(r,c=Hi(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:Iu(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Mt(n),u=a||Lt;for(let c=0;c<s.length;c++){const f=s[c];n[f]=Rh(r,l,f,u[f],t,!St(u,f))}}return o}function Rh(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=St(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&at(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=Ul(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===fo(n))&&(i=!0))}return i}const Xy=new WeakMap;function s1(t,e,n=!1){const i=n?Xy:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!at(t)){const c=f=>{l=!0;const[h,p]=s1(f,e,!0);tn(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return bt(t)&&i.set(t,Ys),Ys;if(et(s))for(let c=0;c<s.length;c++){const f=Hi(s[c]);Tm(f)&&(o[f]=Lt)}else if(s)for(const c in s){const f=Hi(c);if(Tm(f)){const h=s[c],p=o[f]=et(h)||at(h)?{type:h}:tn({},h),_=p.type;let v=!1,m=!0;if(et(_))for(let d=0;d<_.length;++d){const w=_[d],A=at(w)&&w.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(m=!1)}else v=at(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||St(p,"default"))&&a.push(f)}}const u=[o,a];return bt(t)&&i.set(t,u),u}function Tm(t){return t[0]!=="$"&&!rl(t)}const Zd=t=>t==="_"||t==="_ctx"||t==="$stable",Jd=t=>et(t)?t.map(rr):[rr(t)],jy=(t,e,n)=>{if(e._n)return e;const i=k_((...r)=>Jd(e(...r)),n);return i._c=!1,i},o1=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Zd(r))continue;const s=t[r];if(at(s))e[r]=jy(r,s,i);else if(s!=null){const o=Jd(s);e[r]=()=>o}}},a1=(t,e)=>{const n=Jd(e);t.slots.default=()=>n},l1=(t,e,n)=>{for(const i in e)(n||!Zd(i))&&(t[i]=e[i])},qy=(t,e,n)=>{const i=t.slots=n1();if(t.vnode.shapeFlag&32){const r=e._;r?(l1(i,e,n),n&&h_(i,"_",r,!0)):o1(e,i)}else e&&a1(t,e)},Yy=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Lt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:l1(r,e,n):(s=!e.$stable,o1(e,r)),o=e}else e&&(a1(t,e),o={default:1});if(s)for(const a in r)!Zd(a)&&o[a]==null&&delete r[a]},qn=eM;function Ky(t){return $y(t)}function $y(t,e){const n=bu();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:p=fr,insertStaticContent:_}=t,v=(b,P,j,T=null,ne=null,Y=null,se=void 0,Z=null,ue=!!P.dynamicChildren)=>{if(b===P)return;b&&!Ws(b,P)&&(T=ve(b),Ne(b,ne,Y,!0),b=null),P.patchFlag===-2&&(ue=!1,P.dynamicChildren=null),P.dynamicChildren&&b&&b.dynamicChildren&&b.dynamicChildren.hasOnce&&(P.dynamicChildren===Ys&&(P.dynamicChildren=[]),P.dynamicChildren.hasOnce=!0);const{type:X,ref:M,shapeFlag:g}=P;switch(X){case Uu:m(b,P,j,T);break;case On:d(b,P,j,T);break;case Gc:b==null&&w(P,j,T,se);break;case ci:F(b,P,j,T,ne,Y,se,Z,ue);break;default:g&1?H(b,P,j,T,ne,Y,se,Z,ue):g&6?G(b,P,j,T,ne,Y,se,Z,ue):(g&64||g&128)&&X.process(b,P,j,T,ne,Y,se,Z,ue,De)}M!=null&&ne?al(M,b&&b.ref,Y,P||b,!P):M==null&&b&&b.ref!=null&&al(b.ref,null,Y,b,!0)},m=(b,P,j,T)=>{if(b==null)i(P.el=a(P.children),j,T);else{const ne=P.el=b.el;P.children!==b.children&&u(ne,P.children)}},d=(b,P,j,T)=>{b==null?i(P.el=l(P.children||""),j,T):P.el=b.el},w=(b,P,j,T)=>{[b.el,b.anchor]=_(b.children,P,j,T,b.el,b.anchor)},A=({el:b,anchor:P},j,T)=>{let ne;for(;b&&b!==P;)ne=h(b),i(b,j,T),b=ne;i(P,j,T)},y=({el:b,anchor:P})=>{let j;for(;b&&b!==P;)j=h(b),r(b),b=j;r(P)},H=(b,P,j,T,ne,Y,se,Z,ue)=>{if(P.type==="svg"?se="svg":P.type==="math"&&(se="mathml"),b==null)N(P,j,T,ne,Y,se,Z,ue);else{const X=b.el&&b.el._isVueCE?b.el:null;try{X&&X._beginPatch(),S(b,P,ne,Y,se,Z,ue)}finally{X&&X._endPatch()}}},N=(b,P,j,T,ne,Y,se,Z)=>{let ue,X;const{props:M,shapeFlag:g,transition:I,dirs:q}=b;if(ue=b.el=o(b.type,Y,M&&M.is,M),g&8?c(ue,b.children):g&16&&D(b.children,ue,null,T,ne,Mf(b,Y),se,Z),q&&ws(b,null,T,"created"),L(ue,b,b.scopeId,se,T),M){for(const R in M)R!=="value"&&!rl(R)&&s(ue,R,null,M[R],Y,T);"value"in M&&s(ue,"value",null,M.value,Y),(X=M.onVnodeBeforeMount)&&Zi(X,T,b)}q&&ws(b,null,T,"beforeMount");const U=Zy(ne,I);U?I.beforeEnter(ue):I&&!I.persisted&&(ue[Qy]=!0),i(ue,P,j),((X=M&&M.onVnodeMounted)||U||q)&&qn(()=>{try{X&&Zi(X,T,b),U&&I.enter(ue),q&&ws(b,null,T,"mounted")}finally{}},ne)},L=(b,P,j,T,ne)=>{if(j&&p(b,j),T)for(let Y=0;Y<T.length;Y++)p(b,T[Y]);if(ne){let Y=ne.subTree;if(P===Y||f1(Y.type)&&(Y.ssContent===P||Y.ssFallback===P)){const se=ne.vnode;L(b,se,se.scopeId,se.slotScopeIds,ne.parent)}}},D=(b,P,j,T,ne,Y,se,Z,ue=0)=>{for(let X=ue;X<b.length;X++){const M=b[X]=Z?Fr(b[X]):rr(b[X]);v(null,M,P,j,T,ne,Y,se,Z)}},S=(b,P,j,T,ne,Y,se)=>{const Z=P.el=b.el;let{patchFlag:ue,dynamicChildren:X,dirs:M}=P;ue|=b.patchFlag&16;const g=b.props||Lt,I=P.props||Lt;let q;if(j&&Cs(j,!1),(q=I.onVnodeBeforeUpdate)&&Zi(q,j,P,b),M&&ws(P,b,j,"beforeUpdate"),j&&Cs(j,!0),X&&(!b.dynamicChildren||b.dynamicChildren.length!==X.length)&&(ue=0,se=!1,X=null),(g.innerHTML&&I.innerHTML==null||g.textContent&&I.textContent==null)&&c(Z,""),X?x(b.dynamicChildren,X,Z,j,T,Mf(P,ne),Y):se||W(b,P,Z,null,j,T,Mf(P,ne),Y,!1),ue>0){if(ue&16)C(Z,g,I,j,ne);else if(ue&2&&g.class!==I.class&&s(Z,"class",null,I.class,ne),ue&4&&s(Z,"style",g.style,I.style,ne),ue&8){const U=P.dynamicProps;for(let R=0;R<U.length;R++){const ce=U[R],me=g[ce],de=I[ce];(de!==me||ce==="value")&&s(Z,ce,me,de,ne,j)}}ue&1&&b.children!==P.children&&c(Z,P.children)}else!se&&X==null&&C(Z,g,I,j,ne);((q=I.onVnodeUpdated)||M)&&qn(()=>{q&&Zi(q,j,P,b),M&&ws(P,b,j,"updated")},T)},x=(b,P,j,T,ne,Y,se)=>{for(let Z=0;Z<P.length;Z++){const ue=b[Z],X=P[Z],M=ue.el||ul(ue),g=M&&(ue.type===ci||!Ws(ue,X)||ue.shapeFlag&198)?f(M):j;v(ue,X,g,null,T,ne,Y,se,!0)}},C=(b,P,j,T,ne)=>{if(P!==j){if(P!==Lt)for(const Y in P)!rl(Y)&&!(Y in j)&&s(b,Y,P[Y],null,ne,T);for(const Y in j){if(rl(Y))continue;const se=j[Y],Z=P[Y];se!==Z&&Y!=="value"&&s(b,Y,Z,se,ne,T)}"value"in j&&s(b,"value",P.value,j.value,ne)}},F=(b,P,j,T,ne,Y,se,Z,ue)=>{const X=P.el=b?b.el:a(""),M=P.anchor=b?b.anchor:a("");let{patchFlag:g,dynamicChildren:I,slotScopeIds:q}=P;q&&(Z=Z?Z.concat(q):q),b==null?(i(X,j,T),i(M,j,T),D(P.children||[],j,M,ne,Y,se,Z,ue)):g>0&&g&64&&I&&b.dynamicChildren&&b.dynamicChildren.length===I.length?(x(b.dynamicChildren,I,j,ne,Y,se,Z),(P.key!=null||ne&&P===ne.subTree)&&c1(b,P,!0)):W(b,P,j,M,ne,Y,se,Z,ue)},G=(b,P,j,T,ne,Y,se,Z,ue)=>{P.slotScopeIds=Z,b==null?P.shapeFlag&512?ne.ctx.activate(P,j,T,se,ue):re(P,j,T,ne,Y,se,ue):le(b,P,ue)},re=(b,P,j,T,ne,Y,se)=>{const Z=b.component=lM(b,T,ne);if(Pu(b)&&(Z.ctx.renderer=De),cM(Z,!1,se),Z.asyncDep){if(ne&&ne.registerDep(Z,J,se,Y),!b.el){const ue=Z.subTree=Bn(On);d(null,ue,P,j),b.placeholder=ue.el}}else J(Z,b,P,j,ne,Y,se)},le=(b,P,j)=>{const T=P.component=b.component;if(Vy(b,P,j))if(T.asyncDep&&!T.asyncResolved){P.el=b.el,P.placeholder=b.placeholder,te(T,P,j);return}else T.next=P,T.update();else P.el=b.el,P.placeholder=b.placeholder,T.vnode=P},J=(b,P,j,T,ne,Y,se)=>{const Z=()=>{if(b.isMounted){let{next:g,bu:I,u:q,parent:U,vnode:R}=b;{const fe=u1(b);if(fe){g&&(g.el=R.el,te(b,g,se)),fe.asyncDep.then(()=>{const Me=()=>{b.job.flags&8||(ne&&ne.pendingBranch?qn(Me,ne):X())};Me.flags=48,qn(Me,ne)});return}}let ce=g,me;Cs(b,!1),g?(g.el=R.el,te(b,g,se)):g=R,I&&df(I),(me=g.props&&g.props.onVnodeBeforeUpdate)&&Zi(me,U,g,R),Cs(b,!0);const de=Em(b),He=b.subTree;b.subTree=de,v(He,de,f(He.el||ul(He)),ve(He),b,ne,Y),g.el=de.el,ce===null&&Hy(b,de.el),q&&qn(q,ne),(me=g.props&&g.props.onVnodeUpdated)&&qn(()=>Zi(me,U,g,R),ne)}else{let g;const{el:I,props:q}=P,{bm:U,m:R,parent:ce,root:me,type:de}=b,He=ll(P);Cs(b,!1),U&&df(U),!He&&(g=q&&q.onVnodeBeforeMount)&&Zi(g,ce,P),Cs(b,!0);{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(de,b.parent?b.parent.type:void 0);const fe=b.subTree=Em(b);v(null,fe,j,T,b,ne,Y),P.el=fe.el}if(R&&qn(R,ne),!He&&(g=q&&q.onVnodeMounted)){const fe=P;qn(()=>Zi(g,ce,fe),ne)}(P.shapeFlag&256||ce&&ll(ce.vnode)&&ce.vnode.shapeFlag&256)&&b.a&&qn(b.a,ne),b.isMounted=!0,P=j=T=null}};b.scope.on();const ue=b.effect=new g_(Z);b.scope.off();const X=b.update=ue.run.bind(ue),M=b.job=ue.runIfDirty.bind(ue);M.i=b,M.id=b.uid,ue.scheduler=()=>Cu(M),Cs(b,!0),X()},te=(b,P,j)=>{P.component=b;const T=b.vnode.props;b.vnode=P,b.next=null,Wy(b,P.props,T,j),Yy(b,P.children,j),pr(),N_(b),mr()},W=(b,P,j,T,ne,Y,se,Z,ue=!1)=>{const X=b&&b.children,M=b?b.shapeFlag:0,g=P.children,{patchFlag:I,shapeFlag:q}=P;if(I>0){if(I&128){Ee(X,g,j,T,ne,Y,se,Z,ue);return}else if(I&256){_e(X,g,j,T,ne,Y,se,Z,ue);return}}q&8?(M&16&&Te(X,ne,Y),g!==X&&c(j,g)):M&16?q&16?Ee(X,g,j,T,ne,Y,se,Z,ue):Te(X,ne,Y,!0):(M&8&&c(j,""),q&16&&D(g,j,T,ne,Y,se,Z,ue))},_e=(b,P,j,T,ne,Y,se,Z,ue)=>{b=b||Ys,P=P||Ys;const X=b.length,M=P.length,g=Math.min(X,M);let I;for(I=0;I<g;I++){const q=P[I]=ue?Fr(P[I]):rr(P[I]);v(b[I],q,j,null,ne,Y,se,Z,ue)}X>M?Te(b,ne,Y,!0,!1,g):D(P,j,T,ne,Y,se,Z,ue,g)},Ee=(b,P,j,T,ne,Y,se,Z,ue)=>{let X=0;const M=P.length;let g=b.length-1,I=M-1;for(;X<=g&&X<=I;){const q=b[X],U=P[X]=ue?Fr(P[X]):rr(P[X]);if(Ws(q,U))v(q,U,j,null,ne,Y,se,Z,ue);else break;X++}for(;X<=g&&X<=I;){const q=b[g],U=P[I]=ue?Fr(P[I]):rr(P[I]);if(Ws(q,U))v(q,U,j,null,ne,Y,se,Z,ue);else break;g--,I--}if(X>g){if(X<=I){const q=I+1,U=q<M?P[q].el:T;for(;X<=I;)v(null,P[X]=ue?Fr(P[X]):rr(P[X]),j,U,ne,Y,se,Z,ue),X++}}else if(X>I)for(;X<=g;)Ne(b[X],ne,Y,!0),X++;else{const q=X,U=X,R=new Map;for(X=U;X<=I;X++){const Le=P[X]=ue?Fr(P[X]):rr(P[X]);Le.key!=null&&R.set(Le.key,X)}let ce,me=0;const de=I-U+1;let He=!1,fe=0;const Me=new Array(de);for(X=0;X<de;X++)Me[X]=0;for(X=q;X<=g;X++){const Le=b[X];if(me>=de){Ne(Le,ne,Y,!0);continue}let Se;if(Le.key!=null)Se=R.get(Le.key);else for(ce=U;ce<=I;ce++)if(Me[ce-U]===0&&Ws(Le,P[ce])){Se=ce;break}Se===void 0?Ne(Le,ne,Y,!0):(Me[Se-U]=X+1,Se>=fe?fe=Se:He=!0,v(Le,P[Se],j,null,ne,Y,se,Z,ue),me++)}const Fe=He?Jy(Me):Ys;for(ce=Fe.length-1,X=de-1;X>=0;X--){const Le=U+X,Se=P[Le],Ke=P[Le+1],$e=Le+1<M?Ke.el||ul(Ke):T;Me[X]===0?v(null,Se,j,$e,ne,Y,se,Z,ue):He&&(ce<0||X!==Fe[ce]?Ce(Se,j,$e,2):ce--)}}},Ce=(b,P,j,T,ne=null)=>{const{el:Y,type:se,transition:Z,children:ue,shapeFlag:X}=b;if(X&6){Ce(b.component.subTree,P,j,T);return}if(X&128){b.suspense.move(P,j,T);return}if(X&64){se.move(b,P,j,De);return}if(se===ci){i(Y,P,j);for(let g=0;g<ue.length;g++)Ce(ue[g],P,j,T);i(b.anchor,P,j);return}if(se===Gc){A(b,P,j);return}if(T!==2&&X&1&&Z)if(T===0)Z.persisted&&!Y[Ai]?i(Y,P,j):(Z.beforeEnter(Y),i(Y,P,j),qn(()=>Z.enter(Y),ne));else{const{leave:g,delayLeave:I,afterLeave:q}=Z,U=()=>{b.ctx.isUnmounted?r(Y):i(Y,P,j)},R=()=>{const ce=Y._isLeaving||!!Y[Ai];Y._isLeaving&&Y[Ai](!0),Z.persisted&&!ce?U():g(Y,()=>{U(),q&&q()})};I?I(Y,U,R):R()}else i(Y,P,j)},Ne=(b,P,j,T=!1,ne=!1)=>{const{type:Y,props:se,ref:Z,children:ue,dynamicChildren:X,shapeFlag:M,patchFlag:g,dirs:I,cacheIndex:q,memo:U}=b;if((g===-2||X&&X.hasOnce)&&(ne=!1),Z!=null&&(pr(),al(Z,null,j,b,!0),mr()),q!=null&&(!b.ctx||b.ctx===P)&&(P.renderCache[q]=void 0),M&256&&P.ctx.deactivate(b))return;const R=M&1&&I,ce=!ll(b);let me;if(ce&&(me=se&&se.onVnodeBeforeUnmount)&&Zi(me,P,b),M&6)ge(b.component,j,T);else{if(M&128){b.suspense.unmount(j,T);return}R&&ws(b,null,P,"beforeUnmount"),M&64?b.type.remove(b,P,j,De,T):X&&!X.hasOnce&&(Y!==ci||g>0&&g&64)?Te(X,P,j,!1,!0):(Y===ci&&g&384||!ne&&M&16)&&Te(ue,P,j),T&&rt(b)}const de=U!=null&&q==null;(ce&&(me=se&&se.onVnodeUnmounted)||R||de)&&qn(()=>{me&&Zi(me,P,b),R&&ws(b,null,P,"unmounted"),de&&(b.el=null)},j)},rt=b=>{const{type:P,el:j,anchor:T,transition:ne}=b,Y=P===ci;if(Y&&!ne){ae(j,T);return}if(P===Gc){y(b),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave();return}const se=Y?_l(b):b,Z=()=>{Y?f(j)&&ae(j,T):r(j),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(se&&se.shapeFlag&1&&ne&&!ne.persisted){const{leave:ue,delayLeave:X}=ne,M=se.el,g=()=>ue(M,Z);X?X(M,Z,g):g()}else Z()},ae=(b,P)=>{let j;for(;b!==P;)j=h(b),r(b),b=j;r(P)},ge=(b,P,j)=>{const{bum:T,scope:ne,job:Y,subTree:se,um:Z,m:ue,a:X}=b;Am(ue),Am(X),T&&df(T),ne.stop(),Y?(Y.flags|=8,Ne(se,b,P,j)):se&&(se.transition=b.vnode.transition,Ne(se,b,P,j)),Z&&qn(Z,P);const M=()=>{b.isUnmounted=!0};M.flags=16,qn(M,P)},Te=(b,P,j,T=!1,ne=!1,Y=0)=>{for(let se=Y;se<b.length;se++)Ne(b[se],P,j,T,ne)},ve=b=>{if(b.shapeFlag&6)return ve(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const P=h(b.anchor||b.el),j=P&&P[fy];return j?h(j):P},Ue=(b,P,j)=>{const T=b&&P._vnode?void 0:b&&b.component?b.component.uid:aM();sy(()=>{b==null?P._vnode&&Ne(P._vnode,null,null,!0):v(P._vnode||null,b,P,null,null,null,j),P._vnode=b},T)},De={p:v,um:Ne,m:Ce,r:rt,mt:re,mc:D,pc:W,pbc:x,n:ve,o:t};return{render:Ue,hydrate:void 0,createApp:Ny(Ue)}}function Mf({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Cs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Zy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function c1(t,e,n=!1){const i=t.children,r=e.children;if(et(i)&&et(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Fr(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&c1(o,a)),a.type===Uu&&(a.patchFlag===-1&&(a=r[s]=Fr(a)),a.el=o.el),a.type===On&&!a.el&&(a.el=o.el)}}function Jy(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function u1(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:u1(e)}function Am(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ul(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return ul(e.subTree);const n=t.suspense;return n&&n.activeBranch?ul(n.activeBranch):null}const f1=t=>t.__isSuspense,Qy=Symbol("_deferredEnter");function eM(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):ry(t)}const ci=Symbol.for("v-fgt"),Uu=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),Gc=Symbol.for("v-stc"),to=[];let ui=null;function vn(t=!1){to.push(ui=t?null:[])}function h1(){to.pop(),ui=to[to.length-1]||null}let xl=1;function ou(t,e=!1){xl+=t,t<0&&ui&&e&&(ui.hasOnce=!0)}function d1(t){return t.dynamicChildren=xl>0?ui||Ys:null,h1(),xl>0&&ui&&ui.push(t),t}function Sn(t,e,n,i,r,s){return d1(tt(t,e,n,i,r,s,!0))}function tM(t,e,n,i,r){return d1(Bn(t,e,n,i,r,!0))}function yl(t){return t?t.__v_isVNode===!0:!1}function Ws(t,e){return t.type===e.type&&t.key===e.key}const p1=({key:t})=>t??null,Wc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Yt(t)||zn(t)||at(t)?{i:Ri,r:t,k:e,f:!!n}:t:null);function tt(t,e=null,n=null,i=0,r=null,s=t===ci?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&p1(e),ref:e&&Wc(e),scopeId:B_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ri};return a?(au(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Yt(n)?8:16),xl>0&&!o&&ui&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ui.push(l),l}const Bn=nM;function nM(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Ay)&&(t=On),yl(t)){const a=xs(t,e,!0);return n&&au(a,n),xl>0&&!s&&ui&&(a.shapeFlag&6?ui[ui.indexOf(t)]=a:ui.push(a)),a.patchFlag=-2,a}if(dM(t)&&(t=t.__vccOpts),e){e=iM(e);let{class:a,style:l}=e;a&&!Yt(a)&&(e.class=tr(a)),bt(l)&&($d(l)&&!et(l)&&(l=tn({},l)),e.style=Hd(l))}const o=Yt(t)?1:f1(t)?128:Ru(t)?64:bt(t)?4:at(t)?2:0;return tt(t,e,n,i,r,o,s,!0)}function iM(t){return t?$d(t)?tn({},t):i1(t)?tn({},t[x1]||t):t:null}function xs(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,u=e?sM(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&p1(u),ref:e&&e.ref?n&&s?et(s)?s.concat(Wc(e)):[s,Wc(e)]:Wc(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ci?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xs(t.ssContent),ssFallback:t.ssFallback&&xs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return l&&i&&eo(c,l.clone(c)),c}function rM(t=" ",e=0){return Bn(Uu,null,t,e)}function Sf(t,e){const n=Bn(Gc,null,t);return n.staticCount=e,n}function Wo(t="",e=!1){return e?(vn(),tM(On,null,t)):Bn(On,null,t)}function rr(t){return t==null||typeof t=="boolean"?Bn(On):et(t)?Bn(ci,null,t.slice()):yl(t)?Fr(t):Bn(Uu,null,String(t))}function Fr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xs(t)}function au(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),au(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!i1(e)?e._ctx=Ri:r===3&&Ri&&(Ri.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(at(e)){if(i&65){au(t,{default:e});return}e={default:e,_ctx:Ri},n=32}else e=String(e),i&64?(n=16,e=[rM(e)]):n=8;t.children=e,t.shapeFlag|=n}function sM(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=tr([e.class,i.class]));else if(r==="style")e.style=Hd([e.style,i.style]);else if(Mu(r)){const s=e[r],o=i[r];o&&s!==o&&!(et(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Su(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Zi(t,e,n,i=null){Ii(t,e,7,[n,i])}const oM=Z_();let m1=0;function aM(){return m1}function lM(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||oM,s={uid:m1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:s1(i,r),emitsOptions:J_(i,r),emit:null,emitted:null,propsDefaults:Lt,inheritAttrs:i.inheritAttrs,ctx:Lt,data:Lt,props:Lt,attrs:Lt,slots:Lt,refs:Lt,setupState:Lt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Oy.bind(null,s),t.ce&&t.ce(s),s}let $n=null;const g1=()=>$n||Ri;let lu,Ml;{const t=bu(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};lu=e("__VUE_INSTANCE_SETTERS__",n=>$n=n),Ml=e("__VUE_SSR_SETTERS__",n=>Sl=n)}const Ul=t=>{const e=$n;return lu(t),t.scope.on(),()=>{t.scope.off(),lu(e)}},wm=()=>{$n&&$n.scope.off(),lu(null)};function _1(t){return t.vnode.shapeFlag&4}let Sl=!1;function cM(t,e=!1,n=!1){e&&Ml(e);const{props:i,children:r}=t.vnode,s=_1(t);Gy(t,i,s,e),qy(t,r,n||e);const o=s?uM(t,e):void 0;return e&&Ml(!1),o}function uM(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cy);const{setup:i}=n;if(i){pr();const r=t.setupContext=i.length>1?hM(t):null,s=Ul(t),o=Il(i,t,0,[t.props,r]),a=l_(o);if(mr(),s(),(a||t.sp)&&!ll(t)&&q_(t),a){if(o.then(wm,wm),e)return o.then(l=>{Ml(!0);try{Cm(t,l,e)}finally{Ml(!1)}}).catch(l=>{wu(l,t,0,void 0,!0),t.ssrRender=(u,c)=>c("<!---->")});t.asyncDep=o}else Cm(t,o)}else v1(t)}function Cm(t,e,n){at(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:bt(e)&&(t.setupState=D_(e)),v1(t)}function v1(t,e,n){const i=t.type;t.render||(t.render=i.render||fr);{const r=Ul(t);pr();try{Ry(t)}finally{mr(),r()}}}const x1=Symbol(),fM={get(t,e){return Un(t,"get",""),e===x1?t:t[e]}};function hM(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,fM),slots:t.slots,emit:t.emit,expose:e}}function Nu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(D_(qx(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cl)return cl[n](t)},has(e,n){return n in e||n in cl}})):t.proxy}function dM(t){return at(t)&&"__vccOpts"in t}const Dn=(t,e)=>Jx(t,e,Sl);function pM(t,e,n){try{ou(-1);const i=arguments.length;return i===2?bt(e)&&!et(e)?yl(e)?Bn(t,null,[e]):Bn(t,e):Bn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&yl(n)&&(n=[n]),Bn(t,e,n))}finally{ou(1)}}const mM="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ph;const Rm=typeof window<"u"&&window.trustedTypes;if(Rm)try{Ph=Rm.createPolicy("vue",{createHTML:t=>t})}catch{}const y1=Ph?t=>Ph.createHTML(t):t=>t,gM="http://www.w3.org/2000/svg",_M="http://www.w3.org/1998/Math/MathML",Nr=typeof document<"u"?document:null,Pm=Nr&&Nr.createElement("template"),vM={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Nr.createElementNS(gM,t):e==="mathml"?Nr.createElementNS(_M,t):n?Nr.createElement(t,{is:n}):Nr.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Nr.createTextNode(t),createComment:t=>Nr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Pm.innerHTML=y1(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Pm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},es="transition",za="animation",El=Symbol("_vtc"),M1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xM=tn({},H_,M1),yM=t=>(t.displayName="Transition",t.props=xM,t),MM=yM((t,{slots:e})=>pM(py,SM(t),e)),Rs=(t,e=[])=>{et(t)?t.forEach(n=>n(...e)):t&&t(...e)},Lm=t=>t?et(t)?t.some(e=>e.length>1):t.length>1:!1;function SM(t){const e={};for(const F in t)F in M1||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=EM(r),v=_&&_[0],m=_&&_[1],{onBeforeEnter:d,onEnter:w,onEnterCancelled:A,onLeave:y,onLeaveCancelled:H,onBeforeAppear:N=d,onAppear:L=w,onAppearCancelled:D=A}=e,S=(F,G,re,le)=>{F._enterCancelled=le,Ps(F,G?c:a),Ps(F,G?u:o),re&&re()},x=(F,G)=>{F._isLeaving=!1,Ps(F,f),Ps(F,p),Ps(F,h),G&&G()},C=F=>(G,re)=>{const le=F?L:w,J=()=>S(G,F,re);Rs(le,[G,J]),Dm(()=>{Ps(G,F?l:s),Cr(G,F?c:a),Lm(le)||Im(G,i,v,J)})};return tn(e,{onBeforeEnter(F){Rs(d,[F]),Cr(F,s),Cr(F,o)},onBeforeAppear(F){Rs(N,[F]),Cr(F,l),Cr(F,u)},onEnter:C(!1),onAppear:C(!0),onLeave(F,G){F._isLeaving=!0;const re=()=>x(F,G);Cr(F,f),F._enterCancelled?(Cr(F,h),Fm(F)):(Fm(F),Cr(F,h)),Dm(()=>{F._isLeaving&&(Ps(F,f),Cr(F,p),Lm(y)||Im(F,i,m,re))}),Rs(y,[F,re])},onEnterCancelled(F){S(F,!1,void 0,!0),Rs(A,[F])},onAppearCancelled(F){S(F,!0,void 0,!0),Rs(D,[F])},onLeaveCancelled(F){x(F),Rs(H,[F])}})}function EM(t){if(t==null)return null;if(bt(t))return[Ef(t.enter),Ef(t.leave)];{const e=Ef(t);return[e,e]}}function Ef(t){return xx(t)}function Cr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[El]||(t[El]=new Set)).add(e)}function Ps(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[El];n&&(n.delete(e),n.size||(t[El]=void 0))}function Dm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let bM=0;function Im(t,e,n,i){const r=t._endId=++bM,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=TM(t,e);if(!o)return i();const u=o+"end";let c=0;const f=()=>{t.removeEventListener(u,h),s()},h=p=>{p.target===t&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),t.addEventListener(u,h)}function TM(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(`${es}Delay`),s=i(`${es}Duration`),o=Um(r,s),a=i(`${za}Delay`),l=i(`${za}Duration`),u=Um(a,l);let c=null,f=0,h=0;e===es?o>0&&(c=es,f=o,h=s.length):e===za?u>0&&(c=za,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?es:za:null,h=c?c===es?s.length:l.length:0);const p=c===es&&/\b(?:transform|all)(?:,|$)/.test(i(`${es}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:p}}function Um(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Nm(n)+Nm(t[i])))}function Nm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Fm(t){return(t?t.ownerDocument:document).body.offsetHeight}function AM(t,e,n){const i=t[El];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cu=Symbol("_vod"),S1=Symbol("_vsh"),wM={name:"show",beforeMount(t,{value:e},{transition:n}){t[cu]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Va(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Va(t,!0),i.enter(t)):i.leave(t,()=>{Va(t,!1)}):Va(t,e))},beforeUnmount(t,{value:e}){Va(t,e)}};function Va(t,e){t.style.display=e?t[cu]:"none",t[S1]=!e}const CM=Symbol(""),RM=/(?:^|;)\s*display\s*:/;function PM(t,e,n){const i=t.style,r=Yt(n);let s=!1;if(n&&!r){if(e)if(Yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Qa(i,a,"")}else for(const o in e)n[o]==null&&Qa(i,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?DM(t,o,!Yt(e)&&e?e[o]:void 0,a)||Qa(i,o,a):Qa(i,o,"")}}else if(r){if(e!==n){const o=i[CM];o&&(n+=";"+o),i.cssText=n,s=RM.test(n)}}else e&&t.removeAttribute("style");cu in t&&((!r||e!==n)&&(t[cu]=s?i.display:""),t[S1]&&(i.display="none"))}const tc=/\s*!important$/;function Qa(t,e,n){if(et(n))n.forEach(i=>Qa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))tc.test(n)?t.setProperty(e,n.replace(tc,""),"important"):t.setProperty(e,n);else{const i=LM(t,e);tc.test(n)?t.setProperty(fo(i),n.replace(tc,""),"important"):t[i]=n}}const Om=["Webkit","Moz","ms"],bf={};function LM(t,e){const n=bf[e];if(n)return n;let i=Hi(e);if(i!=="filter"&&i in t)return bf[e]=i;i=f_(i);for(let r=0;r<Om.length;r++){const s=Om[r]+i;if(s in t)return bf[e]=s}return e}function DM(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Yt(i)&&n===i}const Bm="http://www.w3.org/1999/xlink";function km(t,e,n,i,r,s=Tx(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Bm,e.slice(6,e.length)):t.setAttributeNS(Bm,e,n):n==null||s&&!d_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":dr(n)?String(n):n)}function zm(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?y1(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=d_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function IM(t,e,n,i){t.addEventListener(e,n,i)}function UM(t,e,n,i){t.removeEventListener(e,n,i)}const Vm=Symbol("_vei");function NM(t,e,n,i,r=null){const s=t[Vm]||(t[Vm]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=BM(e);if(i){const u=s[e]=VM(i,r);IM(t,a,u,l)}else o&&(UM(t,a,o,l),s[e]=void 0)}}const FM=/(Once|Passive|Capture)$/,OM=/^on:?(?:Once|Passive|Capture)$/;function BM(t){let e,n;for(;(n=t.match(FM))&&!OM.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):fo(t.slice(2)),e]}let Tf=0;const kM=Promise.resolve(),zM=()=>Tf||(kM.then(()=>Tf=0),Tf=Date.now());function VM(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const r=n.value;if(et(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&Ii(u,e,5,a)}}else Ii(r,e,5,[i])};return n.value=t,n.attached=zM(),n}const Hm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,HM=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?AM(t,i,o):e==="style"?PM(t,n,i):Mu(e)?Su(e)||NM(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):GM(t,e,i,o))?(zm(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&km(t,e,i,o,s,e!=="value")):t._isVueCE&&(WM(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Yt(i)))?zm(t,Hi(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),km(t,e,i,o))};function GM(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hm(e)&&at(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Hm(e)&&Yt(n)?!1:e in t}function WM(t,e){const n=t._def.props;if(!n)return!1;const i=Hi(e);return Array.isArray(n)?n.some(r=>Hi(r)===i):Object.keys(n).some(r=>Hi(r)===i)}const XM=tn({patchProp:HM},vM);let Gm;function jM(){return Gm||(Gm=Ky(XM))}const qM=((...t)=>{const e=jM().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=KM(i);if(!r)return;const s=e._component;!at(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,YM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function YM(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function KM(t){return Yt(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="170",$M=0,Wm=1,ZM=2,E1=1,JM=2,Ur=3,ys=0,Zn=1,ar=2,Wr=0,Yo=1,li=2,Xm=3,jm=4,QM=5,Xs=100,e3=101,t3=102,n3=103,i3=104,r3=200,s3=201,o3=202,a3=203,Lh=204,Dh=205,l3=206,c3=207,u3=208,f3=209,h3=210,d3=211,p3=212,m3=213,g3=214,Ih=0,Uh=1,Nh=2,Qo=3,Fh=4,Oh=5,Bh=6,kh=7,b1=0,_3=1,v3=2,ms=0,T1=1,A1=2,w1=3,ep=4,x3=5,C1=6,R1=7,P1=300,ea=301,ta=302,zh=303,Vh=304,Fu=306,Hh=1e3,Ks=1001,Gh=1002,Wi=1003,y3=1004,nc=1005,cr=1006,Af=1007,$s=1008,qr=1009,L1=1010,D1=1011,bl=1012,tp=1013,ao=1014,Hr=1015,Xr=1016,np=1017,ip=1018,na=1020,I1=35902,U1=1021,N1=1022,Vi=1023,F1=1024,O1=1025,Ko=1026,ia=1027,B1=1028,rp=1029,k1=1030,sp=1031,op=1033,Xc=33776,jc=33777,qc=33778,Yc=33779,Wh=35840,Xh=35841,jh=35842,qh=35843,Yh=36196,Kh=37492,$h=37496,Zh=37808,Jh=37809,Qh=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,ld=37819,cd=37820,ud=37821,Kc=36492,fd=36494,hd=36495,z1=36283,dd=36284,pd=36285,md=36286,M3=3200,S3=3201,V1=0,E3=1,kr="",bn="srgb",_a="srgb-linear",Ou="linear",wt="srgb",xo=7680,qm=519,b3=512,T3=513,A3=514,H1=515,w3=516,C3=517,R3=518,P3=519,gd=35044,Ym="300 es",Gr=2e3,uu=2001;class va{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=Math.PI/180,_d=180/Math.PI;function gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[t&255]+Rn[t>>8&255]+Rn[t>>16&255]+Rn[t>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function Nn(t,e,n){return Math.max(e,Math.min(n,t))}function L3(t,e){return(t%e+e)%e}function Cf(t,e,n){return(1-n)*t+n*e}function lr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ct(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,n,i,r,s,o,a,l,u){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=r[0],m=r[3],d=r[6],w=r[1],A=r[4],y=r[7],H=r[2],N=r[5],L=r[8];return s[0]=o*v+a*w+l*H,s[3]=o*m+a*A+l*N,s[6]=o*d+a*y+l*L,s[1]=u*v+c*w+f*H,s[4]=u*m+c*A+f*N,s[7]=u*d+c*y+f*L,s[2]=h*v+p*w+_*H,s[5]=h*m+p*A+_*N,s[8]=h*d+p*y+_*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(c*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Rf.makeScale(e,n)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rf=new lt;function G1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Tl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function D3(){const t=Tl("canvas");return t.style.display="block",t}const Km={};function el(t){t in Km||(Km[t]=!0,console.warn(t))}function I3(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function U3(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function N3(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dt={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===wt&&(t.r=jr(t.r),t.g=jr(t.g),t.b=jr(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===wt&&(t.r=$o(t.r),t.g=$o(t.g),t.b=$o(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===kr?Ou:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function jr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $o(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const $m=[.64,.33,.3,.6,.15,.06],Zm=[.2126,.7152,.0722],Jm=[.3127,.329],Qm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[_a]:{primaries:$m,whitePoint:Jm,transfer:Ou,toXYZ:Qm,fromXYZ:eg,luminanceCoefficients:Zm,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:$m,whitePoint:Jm,transfer:wt,toXYZ:Qm,fromXYZ:eg,luminanceCoefficients:Zm,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let yo;class F3{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yo===void 0&&(yo=Tl("canvas")),yo.width=e.width,yo.height=e.height;const i=yo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=yo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Tl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(jr(n[i]/255)*255):n[i]=jr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O3=0;class W1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O3++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pf(r[o].image)):s.push(Pf(r[o]))}else s=Pf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?F3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B3=0;class yn extends va{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Ks,r=Ks,s=cr,o=$s,a=Vi,l=qr,u=yn.DEFAULT_ANISOTROPY,c=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B3++}),this.uuid=gs(),this.name="",this.source=new W1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case Ks:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case Ks:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=P1;yn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,n=0,i=0,r=1){Zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(u+1)/2,y=(p+1)/2,H=(d+1)/2,N=(c+h)/4,L=(f+v)/4,D=(_+m)/4;return A>y&&A>H?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=N/i,s=L/i):y>H?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=N/r,s=D/r):H<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(H),i=L/s,r=D/s),this.set(i,r,s,n),this}let w=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-c)*(h-c));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-v)/w,this.z=(h-c)/w,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k3 extends va{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Zt(0,0,e,n),this.scissorTest=!1,this.viewport=new Zt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new W1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends k3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class X1 extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z3 extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==h||u!==p||c!==_){let m=1-a;const d=l*h+u*p+c*_+f*v,w=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const H=Math.sqrt(A),N=Math.atan2(H,d*w);m=Math.sin(m*N)/H,a=Math.sin(a*N)/H}const y=a*w;if(l=l*m+h*y,u=u*m+p*y,c=c*m+_*y,f=f*m+v*y,m===1-a){const H=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=H,u*=H,c*=H,f*=H}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+c*f+l*p-u*h,e[n+1]=l*_+c*h+u*f-a*p,e[n+2]=u*_+c*p+a*h-l*f,e[n+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lf.copy(this).projectOnVector(e),this.sub(Lf)}reflect(e){return this.sub(Lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lf=new k,tg=new Nl;class Fl{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Oi):Oi.fromBufferAttribute(s,o),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ic.copy(i.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),rc.subVectors(this.max,Ha),Mo.subVectors(e.a,Ha),So.subVectors(e.b,Ha),Eo.subVectors(e.c,Ha),ts.subVectors(So,Mo),ns.subVectors(Eo,So),Ls.subVectors(Mo,Eo);let n=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ls.z,Ls.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ls.z,0,-Ls.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ls.y,Ls.x,0];return!Df(n,Mo,So,Eo,rc)||(n=[1,0,0,0,1,0,0,0,1],!Df(n,Mo,So,Eo,rc))?!1:(sc.crossVectors(ts,ns),n=[sc.x,sc.y,sc.z],Df(n,Mo,So,Eo,rc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rr=[new k,new k,new k,new k,new k,new k,new k,new k],Oi=new k,ic=new Fl,Mo=new k,So=new k,Eo=new k,ts=new k,ns=new k,Ls=new k,Ha=new k,rc=new k,sc=new k,Ds=new k;function Df(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ds.fromArray(t,s);const a=r.x*Math.abs(Ds.x)+r.y*Math.abs(Ds.y)+r.z*Math.abs(Ds.z),l=e.dot(Ds),u=n.dot(Ds),c=i.dot(Ds);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const V3=new Fl,Ga=new k,If=new k;class Ol{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):V3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);const n=Ga.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(If.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(If)),this.expandByPoint(Ga.copy(e.center).sub(If))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pr=new k,Uf=new k,oc=new k,is=new k,Nf=new k,ac=new k,Ff=new k;class ap{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,n),Pr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Uf.copy(e).add(n).multiplyScalar(.5),oc.copy(n).sub(e).normalize(),is.copy(this.origin).sub(Uf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(oc),a=is.dot(this.direction),l=-is.dot(oc),u=is.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const v=1/c;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Uf).addScaledVector(oc,h),p}intersectSphere(e,n){Pr.subVectors(e.center,this.origin);const i=Pr.dot(this.direction),r=Pr.dot(Pr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,n,i,r,s){Nf.subVectors(n,e),ac.subVectors(i,e),Ff.crossVectors(Nf,ac);let o=this.direction.dot(Ff),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);const l=a*this.direction.dot(ac.crossVectors(is,ac));if(l<0)return null;const u=a*this.direction.dot(Nf.cross(is));if(u<0||l+u>o)return null;const c=-a*is.dot(Ff);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,s,o,a,l,u,c,f,h,p,_,v,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,p,_,v,m)}set(e,n,i,r,s,o,a,l,u,c,f,h,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/bo.setFromMatrixColumn(e,0).length(),s=1/bo.setFromMatrixColumn(e,1).length(),o=1/bo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,v=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=h-v*u,n[9]=-a*l,n[2]=v-h*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,v=u*f;n[0]=h+v*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-_,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,v=u*f;n[0]=h-v*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*c,n[9]=v-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,v=a*f;n[0]=l*c,n[4]=_*u-p,n[8]=h*u+v,n[1]=l*f,n[5]=v*u+h,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,v=a*u;n[0]=l*c,n[4]=v-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+_,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,v=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+v,n[5]=o*c,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*c,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H3,e,G3)}lookAt(e,n,i){const r=this.elements;return ii.subVectors(e,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),rs.crossVectors(i,ii),rs.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),rs.crossVectors(i,ii)),rs.normalize(),lc.crossVectors(ii,rs),r[0]=rs.x,r[4]=lc.x,r[8]=ii.x,r[1]=rs.y,r[5]=lc.y,r[9]=ii.y,r[2]=rs.z,r[6]=lc.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],w=i[3],A=i[7],y=i[11],H=i[15],N=r[0],L=r[4],D=r[8],S=r[12],x=r[1],C=r[5],F=r[9],G=r[13],re=r[2],le=r[6],J=r[10],te=r[14],W=r[3],_e=r[7],Ee=r[11],Ce=r[15];return s[0]=o*N+a*x+l*re+u*W,s[4]=o*L+a*C+l*le+u*_e,s[8]=o*D+a*F+l*J+u*Ee,s[12]=o*S+a*G+l*te+u*Ce,s[1]=c*N+f*x+h*re+p*W,s[5]=c*L+f*C+h*le+p*_e,s[9]=c*D+f*F+h*J+p*Ee,s[13]=c*S+f*G+h*te+p*Ce,s[2]=_*N+v*x+m*re+d*W,s[6]=_*L+v*C+m*le+d*_e,s[10]=_*D+v*F+m*J+d*Ee,s[14]=_*S+v*G+m*te+d*Ce,s[3]=w*N+A*x+y*re+H*W,s[7]=w*L+A*C+y*le+H*_e,s[11]=w*D+A*F+y*J+H*Ee,s[15]=w*S+A*G+y*te+H*Ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+v*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],w=f*m*u-v*h*u+v*l*p-a*m*p-f*l*d+a*h*d,A=_*h*u-c*m*u-_*l*p+o*m*p+c*l*d-o*h*d,y=c*v*u-_*f*u+_*a*p-o*v*p-c*a*d+o*f*d,H=_*f*l-c*v*l-_*a*h+o*v*h+c*a*m-o*f*m,N=n*w+i*A+r*y+s*H;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return e[0]=w*L,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*d-i*h*d)*L,e[2]=(a*m*s-v*l*s+v*r*u-i*m*u-a*r*d+i*l*d)*L,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*L,e[4]=A*L,e[5]=(c*m*s-_*h*s+_*r*p-n*m*p-c*r*d+n*h*d)*L,e[6]=(_*l*s-o*m*s-_*r*u+n*m*u+o*r*d-n*l*d)*L,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*L,e[8]=y*L,e[9]=(_*f*s-c*v*s-_*i*p+n*v*p+c*i*d-n*f*d)*L,e[10]=(o*v*s-_*a*s+_*i*u-n*v*u-o*i*d+n*a*d)*L,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*L,e[12]=H*L,e[13]=(c*v*r-_*f*r+_*i*h-n*v*h-c*i*m+n*f*m)*L,e[14]=(_*a*r-o*v*r-_*i*l+n*v*l+o*i*m-n*a*m)*L,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,v=o*c,m=o*f,d=a*f,w=l*u,A=l*c,y=l*f,H=i.x,N=i.y,L=i.z;return r[0]=(1-(v+d))*H,r[1]=(p+y)*H,r[2]=(_-A)*H,r[3]=0,r[4]=(p-y)*N,r[5]=(1-(h+d))*N,r[6]=(m+w)*N,r[7]=0,r[8]=(_+A)*L,r[9]=(m-w)*L,r[10]=(1-(h+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=bo.set(r[0],r[1],r[2]).length();const o=bo.set(r[4],r[5],r[6]).length(),a=bo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bi.copy(this);const u=1/s,c=1/o,f=1/a;return Bi.elements[0]*=u,Bi.elements[1]*=u,Bi.elements[2]*=u,Bi.elements[4]*=c,Bi.elements[5]*=c,Bi.elements[6]*=c,Bi.elements[8]*=f,Bi.elements[9]*=f,Bi.elements[10]*=f,n.setFromRotationMatrix(Bi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Gr){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===Gr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===uu)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Gr){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),h=(n+e)*u,p=(i+r)*c;let _,v;if(a===Gr)_=(o+s)*f,v=-2*f;else if(a===uu)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const bo=new k,Bi=new Nt,H3=new k(0,0,0),G3=new k(1,1,1),rs=new k,lc=new k,ii=new k,ng=new Nt,ig=new Nl;class _r{constructor(e=0,n=0,i=0,r=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ng,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class j1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W3=0;const rg=new k,To=new Nl,Lr=new Nt,cc=new k,Wa=new k,X3=new k,j3=new Nl,sg=new k(1,0,0),og=new k(0,1,0),ag=new k(0,0,1),lg={type:"added"},q3={type:"removed"},Ao={type:"childadded",child:null},Of={type:"childremoved",child:null};class cn extends va{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W3++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new k,n=new _r,i=new Nl,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new lt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return To.setFromAxisAngle(e,n),this.quaternion.multiply(To),this}rotateOnWorldAxis(e,n){return To.setFromAxisAngle(e,n),this.quaternion.premultiply(To),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(og,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,n){return rg.copy(e).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(og,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cc.copy(e):cc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(Wa,cc,this.up):Lr.lookAt(cc,Wa,this.up),this.quaternion.setFromRotationMatrix(Lr),r&&(Lr.extractRotation(r.matrixWorld),To.setFromRotationMatrix(Lr),this.quaternion.premultiply(To.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lg),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(q3),Of.child=e,this.dispatchEvent(Of),Of.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lg),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,X3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,j3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new k(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new k,Dr=new k,Bf=new k,Ir=new k,wo=new k,Co=new k,cg=new k,kf=new k,zf=new k,Vf=new k,Hf=new Zt,Gf=new Zt,Wf=new Zt;class Ci{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ki.subVectors(e,n),r.cross(ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ki.subVectors(r,n),Dr.subVectors(i,n),Bf.subVectors(e,n);const o=ki.dot(ki),a=ki.dot(Dr),l=ki.dot(Bf),u=Dr.dot(Dr),c=Dr.dot(Bf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ir)===null?!1:Ir.x>=0&&Ir.y>=0&&Ir.x+Ir.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ir.x),l.addScaledVector(o,Ir.y),l.addScaledVector(a,Ir.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Hf.setScalar(0),Gf.setScalar(0),Wf.setScalar(0),Hf.fromBufferAttribute(e,n),Gf.fromBufferAttribute(e,i),Wf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hf,s.x),o.addScaledVector(Gf,s.y),o.addScaledVector(Wf,s.z),o}static isFrontFacing(e,n,i,r){return ki.subVectors(i,n),Dr.subVectors(e,n),ki.cross(Dr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),ki.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;wo.subVectors(r,i),Co.subVectors(s,i),kf.subVectors(e,i);const l=wo.dot(kf),u=Co.dot(kf);if(l<=0&&u<=0)return n.copy(i);zf.subVectors(e,r);const c=wo.dot(zf),f=Co.dot(zf);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(wo,o);Vf.subVectors(e,s);const p=wo.dot(Vf),_=Co.dot(Vf);if(_>=0&&p<=_)return n.copy(s);const v=p*u-l*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Co,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return cg.subVectors(s,r),a=(f-c)/(f-c+(p-_)),n.copy(r).addScaledVector(cg,a);const d=1/(m+v+h);return o=v*d,a=h*d,n.copy(i).addScaledVector(wo,o).addScaledVector(Co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Xf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=dt.workingColorSpace){if(e=L3(e,1),n=Nn(n,0,1),i=Nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Xf(o,s,e+1/3),this.g=Xf(o,s,e),this.b=Xf(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=q1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return dt.fromWorkingColorSpace(Pn.copy(this),e),Math.round(Nn(Pn.r*255,0,255))*65536+Math.round(Nn(Pn.g*255,0,255))*256+Math.round(Nn(Pn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.fromWorkingColorSpace(Pn.copy(this),n);const i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=dt.workingColorSpace){return dt.fromWorkingColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=bn){dt.fromWorkingColorSpace(Pn.copy(this),e);const n=Pn.r,i=Pn.g,r=Pn.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+n,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ss),e.getHSL(uc);const i=Cf(ss.h,uc.h,n),r=Cf(ss.s,uc.s,n),s=Cf(ss.l,uc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ze;Ze.NAMES=q1;let Y3=0;class Es extends va{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y3++}),this.uuid=gs(),this.name="",this.blending=Yo,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yo&&(i.blending=this.blending),this.side!==ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lh&&(i.blendSrc=this.blendSrc),this.blendDst!==Dh&&(i.blendDst=this.blendDst),this.blendEquation!==Xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Al extends Es{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=b1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new k,fc=new Qe;class Tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gd,this.updateRanges=[],this.gpuType=Hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fc.fromBufferAttribute(this,n),fc.applyMatrix3(e),this.setXY(n,fc.x,fc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=lr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=lr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=lr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=lr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gd&&(e.usage=this.usage),e}}class Y1 extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class K1 extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xt extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let K3=0;const Mi=new Nt,jf=new cn,Ro=new k,ri=new Fl,Xa=new Fl,gn=new k;class An extends va{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K3++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G1(e)?K1:Y1)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,n,i){return Mi.makeTranslation(e,n,i),this.applyMatrix4(Mi),this}scale(e,n,i){return Mi.makeScale(e,n,i),this.applyMatrix4(Mi),this}lookAt(e){return jf.lookAt(e),jf.updateMatrix(),this.applyMatrix4(jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Xa.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(ri.min,Xa.min),ri.expandByPoint(gn),gn.addVectors(ri.max,Xa.max),ri.expandByPoint(gn)):(ri.expandByPoint(Xa.min),ri.expandByPoint(Xa.max))}ri.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)gn.fromBufferAttribute(a,u),l&&(Ro.fromBufferAttribute(e,u),gn.add(Ro)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new k,l[D]=new k;const u=new k,c=new k,f=new k,h=new Qe,p=new Qe,_=new Qe,v=new k,m=new k;function d(D,S,x){u.fromBufferAttribute(i,D),c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,x),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(C),a[D].add(v),a[S].add(v),a[x].add(v),l[D].add(m),l[S].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,S=w.length;D<S;++D){const x=w[D],C=x.start,F=x.count;for(let G=C,re=C+F;G<re;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new k,y=new k,H=new k,N=new k;function L(D){H.fromBufferAttribute(r,D),N.copy(H);const S=a[D];A.copy(S),A.sub(H.multiplyScalar(H.dot(S))).normalize(),y.crossVectors(N,S);const C=y.dot(l[D])<0?-1:1;o.setXYZW(D,A.x,A.y,A.z,C)}for(let D=0,S=w.length;D<S;++D){const x=w[D],C=x.start,F=x.count;for(let G=C,re=C+F;G<re;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,c=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)gn.fromBufferAttribute(e,n),gn.normalize(),e.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new Tn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ug=new Nt,Is=new ap,hc=new Ol,fg=new k,dc=new k,pc=new k,mc=new k,qf=new k,gc=new k,hg=new k,_c=new k;class Fn extends cn{constructor(e=new An,n=new Al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(qf.fromBufferAttribute(f,e),o?gc.addScaledVector(qf,c):gc.addScaledVector(qf.sub(n),c))}n.add(gc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(s),Is.copy(e.ray).recast(e.near),!(hc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(hc,fg)===null||Is.origin.distanceToSquared(fg)>(e.far-e.near)**2))&&(ug.copy(s).invert(),Is.copy(e.ray).applyMatrix4(ug),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Is)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,H=A;y<H;y+=3){const N=a.getX(y),L=a.getX(y+1),D=a.getX(y+2);r=vc(this,d,e,i,u,c,f,N,L,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const w=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);r=vc(this,o,e,i,u,c,f,w,A,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,H=A;y<H;y+=3){const N=y,L=y+1,D=y+2;r=vc(this,d,e,i,u,c,f,N,L,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const w=m,A=m+1,y=m+2;r=vc(this,o,e,i,u,c,f,w,A,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function $3(t,e,n,i,r,s,o,a){let l;if(e.side===Zn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ys,a),l===null)return null;_c.copy(a),_c.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(_c);return u<n.near||u>n.far?null:{distance:u,point:_c.clone(),object:t}}function vc(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,dc),t.getVertexPosition(l,pc),t.getVertexPosition(u,mc);const c=$3(t,e,n,i,dc,pc,mc,hg);if(c){const f=new k;Ci.getBarycoord(hg,dc,pc,mc,f),r&&(c.uv=Ci.getInterpolatedAttribute(r,a,l,u,f,new Qe)),s&&(c.uv1=Ci.getInterpolatedAttribute(s,a,l,u,f,new Qe)),o&&(c.normal=Ci.getInterpolatedAttribute(o,a,l,u,f,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new k,materialIndex:0};Ci.getNormal(dc,pc,mc,h.normal),c.face=h,c.barycoord=f}return c}class Bl extends An{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(f,2));function _(v,m,d,w,A,y,H,N,L,D,S){const x=y/L,C=H/D,F=y/2,G=H/2,re=N/2,le=L+1,J=D+1;let te=0,W=0;const _e=new k;for(let Ee=0;Ee<J;Ee++){const Ce=Ee*C-G;for(let Ne=0;Ne<le;Ne++){const rt=Ne*x-F;_e[v]=rt*w,_e[m]=Ce*A,_e[d]=re,u.push(_e.x,_e.y,_e.z),_e[v]=0,_e[m]=0,_e[d]=N>0?1:-1,c.push(_e.x,_e.y,_e.z),f.push(Ne/L),f.push(1-Ee/D),te+=1}}for(let Ee=0;Ee<D;Ee++)for(let Ce=0;Ce<L;Ce++){const Ne=h+Ce+le*Ee,rt=h+Ce+le*(Ee+1),ae=h+(Ce+1)+le*(Ee+1),ge=h+(Ce+1)+le*Ee;l.push(Ne,rt,ge),l.push(rt,ae,ge),W+=6}a.addGroup(p,W,S),p+=W,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yn(t){const e={};for(let n=0;n<t.length;n++){const i=ra(t[n]);for(const r in i)e[r]=i[r]}return e}function Z3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const wl={clone:ra,merge:Yn};var J3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Es{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J3,this.fragmentShader=Q3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=Z3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Z1 extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Gr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const os=new k,dg=new Qe,pg=new Qe;class wi extends Z1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,n){return this.getViewBounds(e,dg,pg),n.subVectors(pg,dg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Po=-90,Lo=1;class eS extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wi(Po,Lo,e,n);r.layers=this.layers,this.add(r);const s=new wi(Po,Lo,e,n);s.layers=this.layers,this.add(s);const o=new wi(Po,Lo,e,n);o.layers=this.layers,this.add(o);const a=new wi(Po,Lo,e,n);a.layers=this.layers,this.add(a);const l=new wi(Po,Lo,e,n);l.layers=this.layers,this.add(l);const u=new wi(Po,Lo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Gr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class J1 extends yn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ea,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tS extends Xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new J1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bl(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Wr});s.uniforms.tEquirect.value=n;const o=new Fn(r,s),a=n.minFilter;return n.minFilter===$s&&(n.minFilter=cr),new eS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Yf=new k,nS=new k,iS=new lt;class Vs{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yf.subVectors(i,n).cross(nS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iS.getNormalMatrix(e),r=this.coplanarPoint(Yf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new Ol,xc=new k;class lp{constructor(e=new Vs,n=new Vs,i=new Vs,r=new Vs,s=new Vs,o=new Vs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],v=r[10],m=r[11],d=r[12],w=r[13],A=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-d).normalize(),i[1].setComponents(l+s,h+u,m+p,y+d).normalize(),i[2].setComponents(l+o,h+c,m+_,y+w).normalize(),i[3].setComponents(l-o,h-c,m-_,y-w).normalize(),i[4].setComponents(l-a,h-f,m-v,y-A).normalize(),n===Gr)i[5].setComponents(l+a,h+f,m+v,y+A).normalize();else if(n===uu)i[5].setComponents(a,f,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xc.x=r.normal.x>0?e.max.x:e.min.x,xc.y=r.normal.y>0?e.max.y:e.min.y,xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Q1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rS(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Bu extends An{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,p=[],_=[],v=[],m=[];for(let d=0;d<c;d++){const w=d*h-o;for(let A=0;A<u;A++){const y=A*f-s;_.push(y,-w,0),v.push(0,0,1),m.push(A/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const A=w+u*d,y=w+u*(d+1),H=w+1+u*(d+1),N=w+1+u*d;p.push(A,y,N),p.push(y,H,N)}this.setIndex(p),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var sS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_S=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,US=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NS="gl_FragColor = linearToOutputTexel( gl_FragColor );",FS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,UE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ab=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ub=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:sS,alphahash_pars_fragment:oS,alphamap_fragment:aS,alphamap_pars_fragment:lS,alphatest_fragment:cS,alphatest_pars_fragment:uS,aomap_fragment:fS,aomap_pars_fragment:hS,batching_pars_vertex:dS,batching_vertex:pS,begin_vertex:mS,beginnormal_vertex:gS,bsdfs:_S,iridescence_fragment:vS,bumpmap_pars_fragment:xS,clipping_planes_fragment:yS,clipping_planes_pars_fragment:MS,clipping_planes_pars_vertex:SS,clipping_planes_vertex:ES,color_fragment:bS,color_pars_fragment:TS,color_pars_vertex:AS,color_vertex:wS,common:CS,cube_uv_reflection_fragment:RS,defaultnormal_vertex:PS,displacementmap_pars_vertex:LS,displacementmap_vertex:DS,emissivemap_fragment:IS,emissivemap_pars_fragment:US,colorspace_fragment:NS,colorspace_pars_fragment:FS,envmap_fragment:OS,envmap_common_pars_fragment:BS,envmap_pars_fragment:kS,envmap_pars_vertex:zS,envmap_physical_pars_fragment:ZS,envmap_vertex:VS,fog_vertex:HS,fog_pars_vertex:GS,fog_fragment:WS,fog_pars_fragment:XS,gradientmap_pars_fragment:jS,lightmap_pars_fragment:qS,lights_lambert_fragment:YS,lights_lambert_pars_fragment:KS,lights_pars_begin:$S,lights_toon_fragment:JS,lights_toon_pars_fragment:QS,lights_phong_fragment:eE,lights_phong_pars_fragment:tE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:rE,lights_fragment_maps:sE,lights_fragment_end:oE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:cE,logdepthbuf_vertex:uE,map_fragment:fE,map_pars_fragment:hE,map_particle_fragment:dE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:_E,morphcolor_vertex:vE,morphnormal_vertex:xE,morphtarget_pars_vertex:yE,morphtarget_vertex:ME,normal_fragment_begin:SE,normal_fragment_maps:EE,normal_pars_fragment:bE,normal_pars_vertex:TE,normal_vertex:AE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:CE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:LE,opaque_fragment:DE,packing:IE,premultiplied_alpha_fragment:UE,project_vertex:NE,dithering_fragment:FE,dithering_pars_fragment:OE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:kE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:VE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:WE,skinning_pars_vertex:XE,skinning_vertex:jE,skinnormal_vertex:qE,specularmap_fragment:YE,specularmap_pars_fragment:KE,tonemapping_fragment:$E,tonemapping_pars_fragment:ZE,transmission_fragment:JE,transmission_pars_fragment:QE,uv_pars_fragment:eb,uv_pars_vertex:tb,uv_vertex:nb,worldpos_vertex:ib,background_vert:rb,background_frag:sb,backgroundCube_vert:ob,backgroundCube_frag:ab,cube_vert:lb,cube_frag:cb,depth_vert:ub,depth_frag:fb,distanceRGBA_vert:hb,distanceRGBA_frag:db,equirect_vert:pb,equirect_frag:mb,linedashed_vert:gb,linedashed_frag:_b,meshbasic_vert:vb,meshbasic_frag:xb,meshlambert_vert:yb,meshlambert_frag:Mb,meshmatcap_vert:Sb,meshmatcap_frag:Eb,meshnormal_vert:bb,meshnormal_frag:Tb,meshphong_vert:Ab,meshphong_frag:wb,meshphysical_vert:Cb,meshphysical_frag:Rb,meshtoon_vert:Pb,meshtoon_frag:Lb,points_vert:Db,points_frag:Ib,shadow_vert:Ub,shadow_frag:Nb,sprite_vert:Fb,sprite_frag:Ob},we={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},sr={basic:{uniforms:Yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Yn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Yn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Yn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Yn([we.points,we.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Yn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Yn([we.common,we.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Yn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Yn([we.sprite,we.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Yn([we.common,we.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Yn([we.lights,we.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};sr.physical={uniforms:Yn([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const yc={r:0,b:0,g:0},Ns=new _r,Bb=new Nt;function kb(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?n:e).get(A)),A}function v(w){let A=!1;const y=_(w);y===null?d(a,l):y&&y.isColor&&(d(y,1),A=!0);const H=t.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(w,A){const y=_(A);y&&(y.isCubeTexture||y.mapping===Fu)?(c===void 0&&(c=new Fn(new Bl(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ra(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(H,N,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ns.copy(A.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(Ns)),c.material.toneMapped=dt.getTransfer(y.colorSpace)!==wt,(f!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Fn(new Bu(2,2),new sn({name:"BackgroundMaterial",uniforms:ra(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=dt.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null))}function d(w,A){w.getRGB(yc,$1(t)),i.buffers.color.setClear(yc.r,yc.g,yc.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),l=A,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:v,addToRenderList:m}}function zb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,C,F,G,re){let le=!1;const J=f(G,F,C);s!==J&&(s=J,u(s.object)),le=p(x,G,F,re),le&&_(x,G,F,re),re!==null&&e.update(re,t.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,y(x,C,F,G),re!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function c(x){return t.deleteVertexArray(x)}function f(x,C,F){const G=F.wireframe===!0;let re=i[x.id];re===void 0&&(re={},i[x.id]=re);let le=re[C.id];le===void 0&&(le={},re[C.id]=le);let J=le[G];return J===void 0&&(J=h(l()),le[G]=J),J}function h(x){const C=[],F=[],G=[];for(let re=0;re<n;re++)C[re]=0,F[re]=0,G[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:G,object:x,attributes:{},index:null}}function p(x,C,F,G){const re=s.attributes,le=C.attributes;let J=0;const te=F.getAttributes();for(const W in te)if(te[W].location>=0){const Ee=re[W];let Ce=le[W];if(Ce===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(Ce=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(Ce=x.instanceColor)),Ee===void 0||Ee.attribute!==Ce||Ce&&Ee.data!==Ce.data)return!0;J++}return s.attributesNum!==J||s.index!==G}function _(x,C,F,G){const re={},le=C.attributes;let J=0;const te=F.getAttributes();for(const W in te)if(te[W].location>=0){let Ee=le[W];Ee===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor));const Ce={};Ce.attribute=Ee,Ee&&Ee.data&&(Ce.data=Ee.data),re[W]=Ce,J++}s.attributes=re,s.attributesNum=J,s.index=G}function v(){const x=s.newAttributes;for(let C=0,F=x.length;C<F;C++)x[C]=0}function m(x){d(x,0)}function d(x,C){const F=s.newAttributes,G=s.enabledAttributes,re=s.attributeDivisors;F[x]=1,G[x]===0&&(t.enableVertexAttribArray(x),G[x]=1),re[x]!==C&&(t.vertexAttribDivisor(x,C),re[x]=C)}function w(){const x=s.newAttributes,C=s.enabledAttributes;for(let F=0,G=C.length;F<G;F++)C[F]!==x[F]&&(t.disableVertexAttribArray(F),C[F]=0)}function A(x,C,F,G,re,le,J){J===!0?t.vertexAttribIPointer(x,C,F,re,le):t.vertexAttribPointer(x,C,F,G,re,le)}function y(x,C,F,G){v();const re=G.attributes,le=F.getAttributes(),J=C.defaultAttributeValues;for(const te in le){const W=le[te];if(W.location>=0){let _e=re[te];if(_e===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor)),_e!==void 0){const Ee=_e.normalized,Ce=_e.itemSize,Ne=e.get(_e);if(Ne===void 0)continue;const rt=Ne.buffer,ae=Ne.type,ge=Ne.bytesPerElement,Te=ae===t.INT||ae===t.UNSIGNED_INT||_e.gpuType===tp;if(_e.isInterleavedBufferAttribute){const ve=_e.data,Ue=ve.stride,De=_e.offset;if(ve.isInstancedInterleavedBuffer){for(let je=0;je<W.locationSize;je++)d(W.location+je,ve.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let je=0;je<W.locationSize;je++)m(W.location+je);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let je=0;je<W.locationSize;je++)A(W.location+je,Ce/W.locationSize,ae,Ee,Ue*ge,(De+Ce/W.locationSize*je)*ge,Te)}else{if(_e.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)d(W.location+ve,_e.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ve=0;ve<W.locationSize;ve++)m(W.location+ve);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let ve=0;ve<W.locationSize;ve++)A(W.location+ve,Ce/W.locationSize,ae,Ee,Ce*ge,Ce/W.locationSize*ve*ge,Te)}}else if(J!==void 0){const Ee=J[te];if(Ee!==void 0)switch(Ee.length){case 2:t.vertexAttrib2fv(W.location,Ee);break;case 3:t.vertexAttrib3fv(W.location,Ee);break;case 4:t.vertexAttrib4fv(W.location,Ee);break;default:t.vertexAttrib1fv(W.location,Ee)}}}}w()}function H(){D();for(const x in i){const C=i[x];for(const F in C){const G=C[F];for(const re in G)c(G[re].object),delete G[re];delete C[F]}delete i[x]}}function N(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const F in C){const G=C[F];for(const re in G)c(G[re].object),delete G[re];delete C[F]}delete i[x.id]}function L(x){for(const C in i){const F=i[C];if(F[x.id]===void 0)continue;const G=F[x.id];for(const re in G)c(G[re].object),delete G[re];delete F[x.id]}}function D(){S(),o=!0,s!==r&&(s=r,u(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:H,releaseStatesOfGeometry:N,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Vb(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];n.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=c[v]*h[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Vi&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const D=L===Xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==qr&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Hr&&!D)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),H=_>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:H,maxSamples:N}}function Gb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Vs,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const w=s?0:i,A=w*4;let y=d.clippingState||null;l.value=y,y=c(_,h,A,p);for(let H=0;H!==A;++H)y[H]=n[H];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=p+v*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,y=p;A!==v;++A,y+=4)o.copy(f[A]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Wb(t){let e=new WeakMap;function n(o,a){return a===zh?o.mapping=ea:a===Vh&&(o.mapping=ta),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zh||a===Vh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new tS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cp extends Z1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xo=4,mg=[.125,.215,.35,.446,.526,.582],js=20,Kf=new cp,gg=new Ze;let $f=null,Zf=0,Jf=0,Qf=!1;const Hs=(1+Math.sqrt(5))/2,Do=1/Hs,_g=[new k(-Hs,Do,0),new k(Hs,Do,0),new k(-Do,0,Hs),new k(Do,0,Hs),new k(0,Hs,-Do),new k(0,Hs,Do),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){$f=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Zf,Jf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cr,minFilter:cr,generateMipmaps:!1,type:Xr,format:Vi,colorSpace:_a,depthBuffer:!1},r=xg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xb(s)),this._blurMaterial=jb(s,e,n)}return r}_compileMaterial(e){const n=new Fn(this._lodPlanes[0],e);this._renderer.compile(n,Kf)}_sceneToCubeUV(e,n,i,r){const a=new wi(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(gg),c.toneMapping=ms,c.autoClear=!1;const p=new Al({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),_=new Fn(new Bl,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(gg),v=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const A=this._cubeSize;Mc(r,w*A,d>2?A:0,A,A),c.setRenderTarget(r),v&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ea||e.mapping===ta;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Mc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Kf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_g[(r-s-1)%_g.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Fn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*js-1),v=s/_,m=isFinite(s)?1+Math.floor(c*v):js;m>js&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${js}`);const d=[];let w=0;for(let L=0;L<js;++L){const D=L/v,S=Math.exp(-D*D/2);d.push(S),L===0?w+=S:L<m&&(w+=2*S)}for(let L=0;L<d.length;L++)d[L]=d[L]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;const y=this._sizeLods[r],H=3*y*(r>A-Xo?r-A+Xo:0),N=4*(this._cubeSize-y);Mc(n,H,N,3*y,2*y),l.setRenderTarget(n),l.render(f,Kf)}}function Xb(t){const e=[],n=[],i=[];let r=t;const s=t-Xo+1+mg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xo?l=mg[o-t+Xo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,v=3,m=2,d=1,w=new Float32Array(v*_*p),A=new Float32Array(m*_*p),y=new Float32Array(d*_*p);for(let N=0;N<p;N++){const L=N%3*2/3-1,D=N>2?0:-1,S=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];w.set(S,v*_*N),A.set(h,m*_*N);const x=[N,N,N,N,N,N];y.set(x,d*_*N)}const H=new An;H.setAttribute("position",new Tn(w,v)),H.setAttribute("uv",new Tn(A,m)),H.setAttribute("faceIndex",new Tn(y,d)),e.push(H),r>Xo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xg(t,e,n){const i=new Xi(t,e,n);return i.texture.mapping=Fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jb(t,e,n){const i=new Float32Array(js),r=new k(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function yg(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Mg(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===zh||l===Vh,c=l===ea||l===ta;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new vg(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new vg(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Yb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&el("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Kb(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,d=v.length;m<d;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let A=0,y=w.length;A<y;A+=3){const H=w[A+0],N=w[A+1],L=w[A+2];h.push(H,N,N,L,L,H)}}else if(_!==void 0){const w=_.array;v=_.version;for(let A=0,y=w.length/3-1;A<y;A+=3){const H=A+0,N=A+1,L=A+2;h.push(H,N,N,L,L,H)}}else return;const m=new(G1(h)?K1:Y1)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function $b(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function f(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,_);let d=0;for(let w=0;w<_;w++)d+=p[w]*v[w];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Zb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Jb(t,e,n){const i=new WeakMap,r=new Zt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let H=a.attributes.position.count*y,N=1;H>e.maxTextureSize&&(N=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const L=new Float32Array(H*N*4*f),D=new X1(L,H,N,f);D.type=Hr,D.needsUpdate=!0;const S=y*4;for(let C=0;C<f;C++){const F=d[C],G=w[C],re=A[C],le=H*N*4*C;for(let J=0;J<F.count;J++){const te=J*S;_===!0&&(r.fromBufferAttribute(F,J),L[le+te+0]=r.x,L[le+te+1]=r.y,L[le+te+2]=r.z,L[le+te+3]=0),v===!0&&(r.fromBufferAttribute(G,J),L[le+te+4]=r.x,L[le+te+5]=r.y,L[le+te+6]=r.z,L[le+te+7]=0),m===!0&&(r.fromBufferAttribute(re,J),L[le+te+8]=r.x,L[le+te+9]=r.y,L[le+te+10]=r.z,L[le+te+11]=re.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new Qe(H,N)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Qb(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class ev extends yn{constructor(e,n,i,r,s,o,a,l,u,c=Ko){if(c!==Ko&&c!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ko&&(i=ao),i===void 0&&c===ia&&(i=na),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wi,this.minFilter=l!==void 0?l:Wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const tv=new yn,Sg=new ev(1,1),nv=new X1,iv=new z3,rv=new J1,Eg=[],bg=[],Tg=new Float32Array(16),Ag=new Float32Array(9),wg=new Float32Array(4);function xa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Eg[r];if(s===void 0&&(s=new Float32Array(r),Eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function hn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function dn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ku(t,e){let n=bg[e];n===void 0&&(n=new Int32Array(e),bg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;t.uniform2fv(this.addr,e),dn(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(hn(n,e))return;t.uniform3fv(this.addr,e),dn(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;t.uniform4fv(this.addr,e),dn(n,e)}}function rT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(hn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(hn(n,i))return;wg.set(i),t.uniformMatrix2fv(this.addr,!1,wg),dn(n,i)}}function sT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(hn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(hn(n,i))return;Ag.set(i),t.uniformMatrix3fv(this.addr,!1,Ag),dn(n,i)}}function oT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(hn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(hn(n,i))return;Tg.set(i),t.uniformMatrix4fv(this.addr,!1,Tg),dn(n,i)}}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;t.uniform2iv(this.addr,e),dn(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;t.uniform3iv(this.addr,e),dn(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;t.uniform4iv(this.addr,e),dn(n,e)}}function fT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;t.uniform2uiv(this.addr,e),dn(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;t.uniform3uiv(this.addr,e),dn(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;t.uniform4uiv(this.addr,e),dn(n,e)}}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Sg.compareFunction=H1,s=Sg):s=tv,n.setTexture2D(e||s,r)}function gT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||iv,r)}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rv,r)}function vT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nv,r)}function xT(t){switch(t){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return sT;case 35676:return oT;case 5124:case 35670:return aT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return fT;case 36294:return hT;case 36295:return dT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return vT}}function yT(t,e){t.uniform1fv(this.addr,e)}function MT(t,e){const n=xa(e,this.size,2);t.uniform2fv(this.addr,n)}function ST(t,e){const n=xa(e,this.size,3);t.uniform3fv(this.addr,n)}function ET(t,e){const n=xa(e,this.size,4);t.uniform4fv(this.addr,n)}function bT(t,e){const n=xa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function TT(t,e){const n=xa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function AT(t,e){const n=xa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wT(t,e){t.uniform1iv(this.addr,e)}function CT(t,e){t.uniform2iv(this.addr,e)}function RT(t,e){t.uniform3iv(this.addr,e)}function PT(t,e){t.uniform4iv(this.addr,e)}function LT(t,e){t.uniform1uiv(this.addr,e)}function DT(t,e){t.uniform2uiv(this.addr,e)}function IT(t,e){t.uniform3uiv(this.addr,e)}function UT(t,e){t.uniform4uiv(this.addr,e)}function NT(t,e,n){const i=this.cache,r=e.length,s=ku(n,r);hn(i,s)||(t.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||tv,s[o])}function FT(t,e,n){const i=this.cache,r=e.length,s=ku(n,r);hn(i,s)||(t.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||iv,s[o])}function OT(t,e,n){const i=this.cache,r=e.length,s=ku(n,r);hn(i,s)||(t.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||rv,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=ku(n,r);hn(i,s)||(t.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||nv,s[o])}function kT(t){switch(t){case 5126:return yT;case 35664:return MT;case 35665:return ST;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return wT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return PT;case 5125:return LT;case 36294:return DT;case 36295:return IT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return BT}}class zT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xT(n.type)}}class VT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kT(n.type)}}class HT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function Cg(t,e){t.seq.push(e),t.map[e.id]=e}function GT(t,e,n){const i=t.name,r=i.length;for(eh.lastIndex=0;;){const s=eh.exec(i),o=eh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Cg(n,u===void 0?new zT(a,t,e):new VT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new HT(a),Cg(n,f)),n=f}}}class $c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);GT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Rg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const WT=37297;let XT=0;function jT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Pg=new lt;function qT(t){dt._getMatrix(Pg,dt.workingColorSpace,t);const e=`mat3( ${Pg.elements.map(n=>n.toFixed(4))} )`;switch(dt.getTransfer(t)){case Ou:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Lg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jT(t.getShaderSource(e),o)}else return r}function YT(t,e){const n=qT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function KT(t,e){let n;switch(e){case T1:n="Linear";break;case A1:n="Reinhard";break;case w1:n="Cineon";break;case ep:n="ACESFilmic";break;case C1:n="AgX";break;case R1:n="Neutral";break;case x3:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sc=new k;function $T(){dt.getLuminanceCoefficients(Sc);const t=Sc.x.toFixed(4),e=Sc.y.toFixed(4),n=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function JT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function QT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function tl(t){return t!==""}function Dg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ig(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(t){return t.replace(eA,nA)}const tA=new Map;function nA(t,e){let n=ct[e];if(n===void 0){const i=tA.get(e);if(i!==void 0)n=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vd(n)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ug(t){return t.replace(iA,rA)}function rA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ng(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===E1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===JM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ur&&(e="SHADOWMAP_TYPE_VSM"),e}function oA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case Fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function lA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case b1:e="ENVMAP_BLENDING_MULTIPLY";break;case _3:e="ENVMAP_BLENDING_MIX";break;case v3:e="ENVMAP_BLENDING_ADD";break}return e}function cA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function uA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=sA(n),u=oA(n),c=aA(n),f=lA(n),h=cA(n),p=ZT(n),_=JT(s),v=r.createProgram();let m,d,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(tl).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(tl).join(`
`),d.length>0&&(d+=`
`)):(m=[Ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),d=[Ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ms?"#define TONE_MAPPING":"",n.toneMapping!==ms?ct.tonemapping_pars_fragment:"",n.toneMapping!==ms?KT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,YT("linearToOutputTexel",n.outputColorSpace),$T(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(tl).join(`
`)),o=vd(o),o=Dg(o,n),o=Ig(o,n),a=vd(a),a=Dg(a,n),a=Ig(a,n),o=Ug(o),a=Ug(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=w+m+o,y=w+d+a,H=Rg(r,r.VERTEX_SHADER,A),N=Rg(r,r.FRAGMENT_SHADER,y);r.attachShader(v,H),r.attachShader(v,N),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(C){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),G=r.getShaderInfoLog(H).trim(),re=r.getShaderInfoLog(N).trim();let le=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(le=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,H,N);else{const te=Lg(r,H,"vertex"),W=Lg(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+te+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(G===""||re==="")&&(J=!1);J&&(C.diagnostics={runnable:le,programLog:F,vertexShader:{log:G,prefix:m},fragmentShader:{log:re,prefix:d}})}r.deleteShader(H),r.deleteShader(N),D=new $c(r,v),S=QT(r,v)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,WT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=XT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=N,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dA(e),n.set(e,i)),i}}class dA{constructor(e){this.id=fA++,this.code=e,this.usedTimes=0}}function pA(t,e,n,i,r,s,o){const a=new j1,l=new hA,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,x,C,F,G){const re=F.fog,le=G.geometry,J=S.isMeshStandardMaterial?F.environment:null,te=(S.isMeshStandardMaterial?n:e).get(S.envMap||J),W=te&&te.mapping===Fu?te.image.height:null,_e=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Ee=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ce=Ee!==void 0?Ee.length:0;let Ne=0;le.morphAttributes.position!==void 0&&(Ne=1),le.morphAttributes.normal!==void 0&&(Ne=2),le.morphAttributes.color!==void 0&&(Ne=3);let rt,ae,ge,Te;if(_e){const yt=sr[_e];rt=yt.vertexShader,ae=yt.fragmentShader}else rt=S.vertexShader,ae=S.fragmentShader,l.update(S),ge=l.getVertexShaderID(S),Te=l.getFragmentShaderID(S);const ve=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),De=G.isInstancedMesh===!0,je=G.isBatchedMesh===!0,b=!!S.map,P=!!S.matcap,j=!!te,T=!!S.aoMap,ne=!!S.lightMap,Y=!!S.bumpMap,se=!!S.normalMap,Z=!!S.displacementMap,ue=!!S.emissiveMap,X=!!S.metalnessMap,M=!!S.roughnessMap,g=S.anisotropy>0,I=S.clearcoat>0,q=S.dispersion>0,U=S.iridescence>0,R=S.sheen>0,ce=S.transmission>0,me=g&&!!S.anisotropyMap,de=I&&!!S.clearcoatMap,He=I&&!!S.clearcoatNormalMap,fe=I&&!!S.clearcoatRoughnessMap,Me=U&&!!S.iridescenceMap,Fe=U&&!!S.iridescenceThicknessMap,Le=R&&!!S.sheenColorMap,Se=R&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,$e=!!S.specularColorMap,vt=!!S.specularIntensityMap,B=ce&&!!S.transmissionMap,be=ce&&!!S.thicknessMap,ie=!!S.gradientMap,he=!!S.alphaMap,Pe=S.alphaTest>0,Re=!!S.alphaHash,st=!!S.extensions;let Bt=ms;S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Bt=t.toneMapping);const mn={shaderID:_e,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:ae,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:Te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:je,batchingColor:je&&G._colorsTexture!==null,instancing:De,instancingColor:De&&G.instanceColor!==null,instancingMorph:De&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:_a,alphaToCoverage:!!S.alphaToCoverage,map:b,matcap:P,envMap:j,envMapMode:j&&te.mapping,envMapCubeUVHeight:W,aoMap:T,lightMap:ne,bumpMap:Y,normalMap:se,displacementMap:h&&Z,emissiveMap:ue,normalMapObjectSpace:se&&S.normalMapType===E3,normalMapTangentSpace:se&&S.normalMapType===V1,metalnessMap:X,roughnessMap:M,anisotropy:g,anisotropyMap:me,clearcoat:I,clearcoatMap:de,clearcoatNormalMap:He,clearcoatRoughnessMap:fe,dispersion:q,iridescence:U,iridescenceMap:Me,iridescenceThicknessMap:Fe,sheen:R,sheenColorMap:Le,sheenRoughnessMap:Se,specularMap:Ke,specularColorMap:$e,specularIntensityMap:vt,transmission:ce,transmissionMap:B,thicknessMap:be,gradientMap:ie,opaque:S.transparent===!1&&S.blending===Yo&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:Pe,alphaHash:Re,combine:S.combine,mapUv:b&&v(S.map.channel),aoMapUv:T&&v(S.aoMap.channel),lightMapUv:ne&&v(S.lightMap.channel),bumpMapUv:Y&&v(S.bumpMap.channel),normalMapUv:se&&v(S.normalMap.channel),displacementMapUv:Z&&v(S.displacementMap.channel),emissiveMapUv:ue&&v(S.emissiveMap.channel),metalnessMapUv:X&&v(S.metalnessMap.channel),roughnessMapUv:M&&v(S.roughnessMap.channel),anisotropyMapUv:me&&v(S.anisotropyMap.channel),clearcoatMapUv:de&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(S.sheenRoughnessMap.channel),specularMapUv:Ke&&v(S.specularMap.channel),specularColorMapUv:$e&&v(S.specularColorMap.channel),specularIntensityMapUv:vt&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:be&&v(S.thicknessMap.channel),alphaMapUv:he&&v(S.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(se||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!le.attributes.uv&&(b||he),fog:!!re,useFog:S.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ue,skinning:G.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Bt,decodeVideoTexture:b&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ar,flipSided:S.side===Zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:st&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&S.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mn.vertexUv1s=u.has(1),mn.vertexUv2s=u.has(2),mn.vertexUv3s=u.has(3),u.clear(),mn}function d(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(w(x,S),A(x,S),x.push(t.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function A(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const x=_[S.type];let C;if(x){const F=sr[x];C=wl.clone(F.uniforms)}else C=S.uniforms;return C}function H(S,x){let C;for(let F=0,G=c.length;F<G;F++){const re=c[F];if(re.cacheKey===x){C=re,++C.usedTimes;break}}return C===void 0&&(C=new uA(t,x,S,s),c.push(C)),C}function N(S){if(--S.usedTimes===0){const x=c.indexOf(S);c[x]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:H,releaseProgram:N,releaseShaderCache:L,programs:c,dispose:D}}function mA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function gA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Og(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,v,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||gA),i.length>1&&i.sort(h||Fg),r.length>1&&r.sort(h||Fg)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function _A(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Og,t.set(i,[o])):r>=s.length?(o=new Og,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function vA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ze};break;case"SpotLight":n={position:new k,direction:new k,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function xA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let yA=0;function MA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SA(t){const e=new vA,n=xA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new Nt,o=new Nt;function a(u){let c=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,w=0,A=0,y=0,H=0,N=0,L=0;u.sort(MA);for(let S=0,x=u.length;S<x;S++){const C=u[S],F=C.color,G=C.intensity,re=C.distance,le=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=F.r*G,f+=F.g*G,h+=F.b*G;else if(C.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(C.sh.coefficients[J],G);L++}else if(C.isDirectionalLight){const J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const te=C.shadow,W=n.get(C);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=le,i.directionalShadowMatrix[p]=C.shadow.matrix,w++}i.directional[p]=J,p++}else if(C.isSpotLight){const J=e.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(F).multiplyScalar(G),J.distance=re,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,i.spot[v]=J;const te=C.shadow;if(C.map&&(i.spotLightMap[H]=C.map,H++,te.updateMatrices(C),C.castShadow&&N++),i.spotLightMatrix[v]=te.matrix,C.castShadow){const W=n.get(C);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=le,y++}v++}else if(C.isRectAreaLight){const J=e.get(C);J.color.copy(F).multiplyScalar(G),J.halfWidth.set(C.width*.5,0,0),J.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=J,m++}else if(C.isPointLight){const J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),J.distance=C.distance,J.decay=C.decay,C.castShadow){const te=C.shadow,W=n.get(C);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=le,i.pointShadowMatrix[_]=C.shadow.matrix,A++}i.point[_]=J,_++}else if(C.isHemisphereLight){const J=e.get(C);J.skyColor.copy(C.color).multiplyScalar(G),J.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[d]=J,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==w||D.numPointShadows!==A||D.numSpotShadows!==y||D.numSpotMaps!==H||D.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+H-N,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=L,D.directionalLength=p,D.pointLength=_,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=w,D.numPointShadows=A,D.numSpotShadows=y,D.numSpotMaps=H,D.numLightProbes=L,i.version=yA++)}function l(u,c){let f=0,h=0,p=0,_=0,v=0;const m=c.matrixWorldInverse;for(let d=0,w=u.length;d<w;d++){const A=u[d];if(A.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(A.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Bg(t){const e=new SA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function EA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bg(t),e.set(r,[a])):s>=o.length?(a=new Bg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class bA extends Es{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=M3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TA extends Es{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CA(t,e,n){let i=new lp;const r=new Qe,s=new Qe,o=new Zt,a=new bA({depthPacking:S3}),l=new TA,u={},c=n.maxTextureSize,f={[ys]:Zn,[Zn]:ys,[ar]:ar},h=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:AA,fragmentShader:wA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E1;let d=this.type;this.render=function(N,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const S=t.getRenderTarget(),x=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Wr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=d!==Ur&&this.type===Ur,re=d===Ur&&this.type!==Ur;for(let le=0,J=N.length;le<J;le++){const te=N[le],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const _e=W.getFrameExtents();if(r.multiply(_e),s.copy(W.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/_e.x),r.x=s.x*_e.x,W.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/_e.y),r.y=s.y*_e.y,W.mapSize.y=s.y)),W.map===null||G===!0||re===!0){const Ce=this.type!==Ur?{minFilter:Wi,magFilter:Wi}:{};W.map!==null&&W.map.dispose(),W.map=new Xi(r.x,r.y,Ce),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const Ee=W.getViewportCount();for(let Ce=0;Ce<Ee;Ce++){const Ne=W.getViewport(Ce);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),F.viewport(o),W.updateMatrices(te,Ce),i=W.getFrustum(),y(L,D,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===Ur&&w(W,D),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(S,x,C)};function w(N,L){const D=e.update(v);h.defines.VSM_SAMPLES!==N.blurSamples&&(h.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Xi(r.x,r.y)),h.uniforms.shadow_pass.value=N.map.texture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(L,null,D,h,v,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(L,null,D,p,v,null)}function A(N,L,D,S){let x=null;const C=D.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(C!==void 0)x=C;else if(x=D.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const F=x.uuid,G=L.uuid;let re=u[F];re===void 0&&(re={},u[F]=re);let le=re[G];le===void 0&&(le=x.clone(),re[G]=le,L.addEventListener("dispose",H)),x=le}if(x.visible=L.visible,x.wireframe=L.wireframe,S===Ur?x.side=L.shadowSide!==null?L.shadowSide:L.side:x.side=L.shadowSide!==null?L.shadowSide:f[L.side],x.alphaMap=L.alphaMap,x.alphaTest=L.alphaTest,x.map=L.map,x.clipShadows=L.clipShadows,x.clippingPlanes=L.clippingPlanes,x.clipIntersection=L.clipIntersection,x.displacementMap=L.displacementMap,x.displacementScale=L.displacementScale,x.displacementBias=L.displacementBias,x.wireframeLinewidth=L.wireframeLinewidth,x.linewidth=L.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=t.properties.get(x);F.light=D}return x}function y(N,L,D,S,x){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&x===Ur)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,N.matrixWorld);const G=e.update(N),re=N.material;if(Array.isArray(re)){const le=G.groups;for(let J=0,te=le.length;J<te;J++){const W=le[J],_e=re[W.materialIndex];if(_e&&_e.visible){const Ee=A(N,_e,S,x);N.onBeforeShadow(t,N,L,D,G,Ee,W),t.renderBufferDirect(D,null,G,Ee,N,W),N.onAfterShadow(t,N,L,D,G,Ee,W)}}}else if(re.visible){const le=A(N,re,S,x);N.onBeforeShadow(t,N,L,D,G,le,null),t.renderBufferDirect(D,null,G,le,N,null),N.onAfterShadow(t,N,L,D,G,le,null)}}const F=N.children;for(let G=0,re=F.length;G<re;G++)y(F[G],L,D,S,x)}function H(N){N.target.removeEventListener("dispose",H);for(const D in u){const S=u[D],x=N.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const RA={[Ih]:Uh,[Nh]:Bh,[Fh]:kh,[Qo]:Oh,[Uh]:Ih,[Bh]:Nh,[kh]:Fh,[Oh]:Qo};function PA(t,e){function n(){let B=!1;const be=new Zt;let ie=null;const he=new Zt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!B&&(t.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){B=Pe},setClear:function(Pe,Re,st,Bt,mn){mn===!0&&(Pe*=Bt,Re*=Bt,st*=Bt),be.set(Pe,Re,st,Bt),he.equals(be)===!1&&(t.clearColor(Pe,Re,st,Bt),he.copy(be))},reset:function(){B=!1,ie=null,he.set(-1,0,0,0)}}}function i(){let B=!1,be=!1,ie=null,he=null,Pe=null;return{setReversed:function(Re){if(be!==Re){const st=e.get("EXT_clip_control");be?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Bt=Pe;Pe=null,this.setClear(Bt)}be=Re},getReversed:function(){return be},setTest:function(Re){Re?ve(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!B&&(t.depthMask(Re),ie=Re)},setFunc:function(Re){if(be&&(Re=RA[Re]),he!==Re){switch(Re){case Ih:t.depthFunc(t.NEVER);break;case Uh:t.depthFunc(t.ALWAYS);break;case Nh:t.depthFunc(t.LESS);break;case Qo:t.depthFunc(t.LEQUAL);break;case Fh:t.depthFunc(t.EQUAL);break;case Oh:t.depthFunc(t.GEQUAL);break;case Bh:t.depthFunc(t.GREATER);break;case kh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Re}},setLocked:function(Re){B=Re},setClear:function(Re){Pe!==Re&&(be&&(Re=1-Re),t.clearDepth(Re),Pe=Re)},reset:function(){B=!1,ie=null,he=null,Pe=null,be=!1}}}function r(){let B=!1,be=null,ie=null,he=null,Pe=null,Re=null,st=null,Bt=null,mn=null;return{setTest:function(yt){B||(yt?ve(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(yt){be!==yt&&!B&&(t.stencilMask(yt),be=yt)},setFunc:function(yt,ni,Fi){(ie!==yt||he!==ni||Pe!==Fi)&&(t.stencilFunc(yt,ni,Fi),ie=yt,he=ni,Pe=Fi)},setOp:function(yt,ni,Fi){(Re!==yt||st!==ni||Bt!==Fi)&&(t.stencilOp(yt,ni,Fi),Re=yt,st=ni,Bt=Fi)},setLocked:function(yt){B=yt},setClear:function(yt){mn!==yt&&(t.clearStencil(yt),mn=yt)},reset:function(){B=!1,be=null,ie=null,he=null,Pe=null,Re=null,st=null,Bt=null,mn=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,w=null,A=null,y=null,H=null,N=null,L=new Ze(0,0,0),D=0,S=!1,x=null,C=null,F=null,G=null,re=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,te=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=te>=2);let _e=null,Ee={};const Ce=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),rt=new Zt().fromArray(Ce),ae=new Zt().fromArray(Ne);function ge(B,be,ie,he){const Pe=new Uint8Array(4),Re=t.createTexture();t.bindTexture(B,Re),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<ie;st++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(be+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return Re}const Te={};Te[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Te[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Te[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(t.DEPTH_TEST),o.setFunc(Qo),Y(!1),se(Wm),ve(t.CULL_FACE),T(Wr);function ve(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function Ue(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function De(B,be){return f[B]!==be?(t.bindFramebuffer(B,be),f[B]=be,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=be),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=be),!0):!1}function je(B,be){let ie=p,he=!1;if(B){ie=h.get(be),ie===void 0&&(ie=[],h.set(be,ie));const Pe=B.textures;if(ie.length!==Pe.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,st=Pe.length;Re<st;Re++)ie[Re]=t.COLOR_ATTACHMENT0+Re;ie.length=Pe.length,he=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,he=!0);he&&t.drawBuffers(ie)}function b(B){return _!==B?(t.useProgram(B),_=B,!0):!1}const P={[Xs]:t.FUNC_ADD,[e3]:t.FUNC_SUBTRACT,[t3]:t.FUNC_REVERSE_SUBTRACT};P[n3]=t.MIN,P[i3]=t.MAX;const j={[r3]:t.ZERO,[s3]:t.ONE,[o3]:t.SRC_COLOR,[Lh]:t.SRC_ALPHA,[h3]:t.SRC_ALPHA_SATURATE,[u3]:t.DST_COLOR,[l3]:t.DST_ALPHA,[a3]:t.ONE_MINUS_SRC_COLOR,[Dh]:t.ONE_MINUS_SRC_ALPHA,[f3]:t.ONE_MINUS_DST_COLOR,[c3]:t.ONE_MINUS_DST_ALPHA,[d3]:t.CONSTANT_COLOR,[p3]:t.ONE_MINUS_CONSTANT_COLOR,[m3]:t.CONSTANT_ALPHA,[g3]:t.ONE_MINUS_CONSTANT_ALPHA};function T(B,be,ie,he,Pe,Re,st,Bt,mn,yt){if(B===Wr){v===!0&&(Ue(t.BLEND),v=!1);return}if(v===!1&&(ve(t.BLEND),v=!0),B!==QM){if(B!==m||yt!==S){if((d!==Xs||y!==Xs)&&(t.blendEquation(t.FUNC_ADD),d=Xs,y=Xs),yt)switch(B){case Yo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case li:t.blendFunc(t.ONE,t.ONE);break;case Xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Yo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case li:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,A=null,H=null,N=null,L.set(0,0,0),D=0,m=B,S=yt}return}Pe=Pe||be,Re=Re||ie,st=st||he,(be!==d||Pe!==y)&&(t.blendEquationSeparate(P[be],P[Pe]),d=be,y=Pe),(ie!==w||he!==A||Re!==H||st!==N)&&(t.blendFuncSeparate(j[ie],j[he],j[Re],j[st]),w=ie,A=he,H=Re,N=st),(Bt.equals(L)===!1||mn!==D)&&(t.blendColor(Bt.r,Bt.g,Bt.b,mn),L.copy(Bt),D=mn),m=B,S=!1}function ne(B,be){B.side===ar?Ue(t.CULL_FACE):ve(t.CULL_FACE);let ie=B.side===Zn;be&&(ie=!ie),Y(ie),B.blending===Yo&&B.transparent===!1?T(Wr):T(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const he=B.stencilWrite;a.setTest(he),he&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Y(B){x!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),x=B)}function se(B){B!==$M?(ve(t.CULL_FACE),B!==C&&(B===Wm?t.cullFace(t.BACK):B===ZM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),C=B}function Z(B){B!==F&&(J&&t.lineWidth(B),F=B)}function ue(B,be,ie){B?(ve(t.POLYGON_OFFSET_FILL),(G!==be||re!==ie)&&(t.polygonOffset(be,ie),G=be,re=ie)):Ue(t.POLYGON_OFFSET_FILL)}function X(B){B?ve(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function M(B){B===void 0&&(B=t.TEXTURE0+le-1),_e!==B&&(t.activeTexture(B),_e=B)}function g(B,be,ie){ie===void 0&&(_e===null?ie=t.TEXTURE0+le-1:ie=_e);let he=Ee[ie];he===void 0&&(he={type:void 0,texture:void 0},Ee[ie]=he),(he.type!==B||he.texture!==be)&&(_e!==ie&&(t.activeTexture(ie),_e=ie),t.bindTexture(B,be||Te[B]),he.type=B,he.texture=be)}function I(){const B=Ee[_e];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function R(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(B){rt.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),rt.copy(B))}function Se(B){ae.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),ae.copy(B))}function Ke(B,be){let ie=u.get(be);ie===void 0&&(ie=new WeakMap,u.set(be,ie));let he=ie.get(B);he===void 0&&(he=t.getUniformBlockIndex(be,B.name),ie.set(B,he))}function $e(B,be){const he=u.get(be).get(B);l.get(be)!==he&&(t.uniformBlockBinding(be,he,B.__bindingPointIndex),l.set(be,he))}function vt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},_e=null,Ee={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,w=null,A=null,y=null,H=null,N=null,L=new Ze(0,0,0),D=0,S=!1,x=null,C=null,F=null,G=null,re=null,rt.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:Ue,bindFramebuffer:De,drawBuffers:je,useProgram:b,setBlending:T,setMaterial:ne,setFlipSided:Y,setCullFace:se,setLineWidth:Z,setPolygonOffset:ue,setScissorTest:X,activeTexture:M,bindTexture:g,unbindTexture:I,compressedTexImage2D:q,compressedTexImage3D:U,texImage2D:Me,texImage3D:Fe,updateUBOMapping:Ke,uniformBlockBinding:$e,texStorage2D:He,texStorage3D:fe,texSubImage2D:R,texSubImage3D:ce,compressedTexSubImage2D:me,compressedTexSubImage3D:de,scissor:Le,viewport:Se,reset:vt}}function kg(t,e,n,i){const r=LA(i);switch(n){case U1:return t*e;case F1:return t*e;case O1:return t*e*2;case B1:return t*e/r.components*r.byteLength;case rp:return t*e/r.components*r.byteLength;case k1:return t*e*2/r.components*r.byteLength;case sp:return t*e*2/r.components*r.byteLength;case N1:return t*e*3/r.components*r.byteLength;case Vi:return t*e*4/r.components*r.byteLength;case op:return t*e*4/r.components*r.byteLength;case Xc:case jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xh:case qh:return Math.max(t,16)*Math.max(e,8)/4;case Wh:case jh:return Math.max(t,8)*Math.max(e,8)/2;case Yh:case Kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Kc:case fd:case hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case z1:case dd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LA(t){switch(t){case qr:case L1:return{byteLength:1,components:1};case bl:case D1:case Xr:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case ao:case tp:case Hr:return{byteLength:4,components:1};case I1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function DA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Qe,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):Tl("canvas")}function v(M,g,I){let q=1;const U=X(M);if((U.width>I||U.height>I)&&(q=I/Math.max(U.width,U.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const R=Math.floor(q*U.width),ce=Math.floor(q*U.height);f===void 0&&(f=_(R,ce));const me=g?_(R,ce):f;return me.width=R,me.height=ce,me.getContext("2d").drawImage(M,0,0,R,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+R+"x"+ce+")."),me}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),M;return M}function m(M){return M.generateMipmaps}function d(M){t.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(M,g,I,q,U=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let R=g;if(g===t.RED&&(I===t.FLOAT&&(R=t.R32F),I===t.HALF_FLOAT&&(R=t.R16F),I===t.UNSIGNED_BYTE&&(R=t.R8)),g===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(R=t.R8UI),I===t.UNSIGNED_SHORT&&(R=t.R16UI),I===t.UNSIGNED_INT&&(R=t.R32UI),I===t.BYTE&&(R=t.R8I),I===t.SHORT&&(R=t.R16I),I===t.INT&&(R=t.R32I)),g===t.RG&&(I===t.FLOAT&&(R=t.RG32F),I===t.HALF_FLOAT&&(R=t.RG16F),I===t.UNSIGNED_BYTE&&(R=t.RG8)),g===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(R=t.RG8UI),I===t.UNSIGNED_SHORT&&(R=t.RG16UI),I===t.UNSIGNED_INT&&(R=t.RG32UI),I===t.BYTE&&(R=t.RG8I),I===t.SHORT&&(R=t.RG16I),I===t.INT&&(R=t.RG32I)),g===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(R=t.RGB8UI),I===t.UNSIGNED_SHORT&&(R=t.RGB16UI),I===t.UNSIGNED_INT&&(R=t.RGB32UI),I===t.BYTE&&(R=t.RGB8I),I===t.SHORT&&(R=t.RGB16I),I===t.INT&&(R=t.RGB32I)),g===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(R=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(R=t.RGBA16UI),I===t.UNSIGNED_INT&&(R=t.RGBA32UI),I===t.BYTE&&(R=t.RGBA8I),I===t.SHORT&&(R=t.RGBA16I),I===t.INT&&(R=t.RGBA32I)),g===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(R=t.RGB9_E5),g===t.RGBA){const ce=U?Ou:dt.getTransfer(q);I===t.FLOAT&&(R=t.RGBA32F),I===t.HALF_FLOAT&&(R=t.RGBA16F),I===t.UNSIGNED_BYTE&&(R=ce===wt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(R=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(R=t.RGB5_A1)}return(R===t.R16F||R===t.R32F||R===t.RG16F||R===t.RG32F||R===t.RGBA16F||R===t.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function y(M,g){let I;return M?g===null||g===ao||g===na?I=t.DEPTH24_STENCIL8:g===Hr?I=t.DEPTH32F_STENCIL8:g===bl&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ao||g===na?I=t.DEPTH_COMPONENT24:g===Hr?I=t.DEPTH_COMPONENT32F:g===bl&&(I=t.DEPTH_COMPONENT16),I}function H(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Wi&&M.minFilter!==cr?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function N(M){const g=M.target;g.removeEventListener("dispose",N),D(g),g.isVideoTexture&&c.delete(g)}function L(M){const g=M.target;g.removeEventListener("dispose",L),x(g)}function D(M){const g=i.get(M);if(g.__webglInit===void 0)return;const I=M.source,q=h.get(I);if(q){const U=q[g.__cacheKey];U.usedTimes--,U.usedTimes===0&&S(M),Object.keys(q).length===0&&h.delete(I)}i.remove(M)}function S(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const I=M.source,q=h.get(I);delete q[g.__cacheKey],o.memory.textures--}function x(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let U=0;U<g.__webglFramebuffer[q].length;U++)t.deleteFramebuffer(g.__webglFramebuffer[q][U]);else t.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)t.deleteFramebuffer(g.__webglFramebuffer[q]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=M.textures;for(let q=0,U=I.length;q<U;q++){const R=i.get(I[q]);R.__webglTexture&&(t.deleteTexture(R.__webglTexture),o.memory.textures--),i.remove(I[q])}i.remove(M)}let C=0;function F(){C=0}function G(){const M=C;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),C+=1,M}function re(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function le(M,g){const I=i.get(M);if(M.isVideoTexture&&Z(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const q=M.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(I,M,g);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+g)}function J(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){ae(I,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+g)}function te(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){ae(I,M,g);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+g)}function W(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){ge(I,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+g)}const _e={[Hh]:t.REPEAT,[Ks]:t.CLAMP_TO_EDGE,[Gh]:t.MIRRORED_REPEAT},Ee={[Wi]:t.NEAREST,[y3]:t.NEAREST_MIPMAP_NEAREST,[nc]:t.NEAREST_MIPMAP_LINEAR,[cr]:t.LINEAR,[Af]:t.LINEAR_MIPMAP_NEAREST,[$s]:t.LINEAR_MIPMAP_LINEAR},Ce={[b3]:t.NEVER,[P3]:t.ALWAYS,[T3]:t.LESS,[H1]:t.LEQUAL,[A3]:t.EQUAL,[R3]:t.GEQUAL,[w3]:t.GREATER,[C3]:t.NOTEQUAL};function Ne(M,g){if(g.type===Hr&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===cr||g.magFilter===Af||g.magFilter===nc||g.magFilter===$s||g.minFilter===cr||g.minFilter===Af||g.minFilter===nc||g.minFilter===$s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,_e[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,_e[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,_e[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,Ee[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Wi||g.minFilter!==nc&&g.minFilter!==$s||g.type===Hr&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function rt(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",N));const q=g.source;let U=h.get(q);U===void 0&&(U={},h.set(q,U));const R=re(g);if(R!==M.__cacheKey){U[R]===void 0&&(U[R]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),U[R].usedTimes++;const ce=U[M.__cacheKey];ce!==void 0&&(U[M.__cacheKey].usedTimes--,ce.usedTimes===0&&S(g)),M.__cacheKey=R,M.__webglTexture=U[R].texture}return I}function ae(M,g,I){let q=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=t.TEXTURE_3D);const U=rt(M,g),R=g.source;n.bindTexture(q,M.__webglTexture,t.TEXTURE0+I);const ce=i.get(R);if(R.version!==ce.__version||U===!0){n.activeTexture(t.TEXTURE0+I);const me=dt.getPrimaries(dt.workingColorSpace),de=g.colorSpace===kr?null:dt.getPrimaries(g.colorSpace),He=g.colorSpace===kr||me===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let fe=v(g.image,!1,r.maxTextureSize);fe=ue(g,fe);const Me=s.convert(g.format,g.colorSpace),Fe=s.convert(g.type);let Le=A(g.internalFormat,Me,Fe,g.colorSpace,g.isVideoTexture);Ne(q,g);let Se;const Ke=g.mipmaps,$e=g.isVideoTexture!==!0,vt=ce.__version===void 0||U===!0,B=R.dataReady,be=H(g,fe);if(g.isDepthTexture)Le=y(g.format===ia,g.type),vt&&($e?n.texStorage2D(t.TEXTURE_2D,1,Le,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Le,fe.width,fe.height,0,Me,Fe,null));else if(g.isDataTexture)if(Ke.length>0){$e&&vt&&n.texStorage2D(t.TEXTURE_2D,be,Le,Ke[0].width,Ke[0].height);for(let ie=0,he=Ke.length;ie<he;ie++)Se=Ke[ie],$e?B&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Se.width,Se.height,Me,Fe,Se.data):n.texImage2D(t.TEXTURE_2D,ie,Le,Se.width,Se.height,0,Me,Fe,Se.data);g.generateMipmaps=!1}else $e?(vt&&n.texStorage2D(t.TEXTURE_2D,be,Le,fe.width,fe.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Me,Fe,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Le,fe.width,fe.height,0,Me,Fe,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){$e&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Le,Ke[0].width,Ke[0].height,fe.depth);for(let ie=0,he=Ke.length;ie<he;ie++)if(Se=Ke[ie],g.format!==Vi)if(Me!==null)if($e){if(B)if(g.layerUpdates.size>0){const Pe=kg(Se.width,Se.height,g.format,g.type);for(const Re of g.layerUpdates){const st=Se.data.subarray(Re*Pe/Se.data.BYTES_PER_ELEMENT,(Re+1)*Pe/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Re,Se.width,Se.height,1,Me,st)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,fe.depth,Me,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Le,Se.width,Se.height,fe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,fe.depth,Me,Fe,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Le,Se.width,Se.height,fe.depth,0,Me,Fe,Se.data)}else{$e&&vt&&n.texStorage2D(t.TEXTURE_2D,be,Le,Ke[0].width,Ke[0].height);for(let ie=0,he=Ke.length;ie<he;ie++)Se=Ke[ie],g.format!==Vi?Me!==null?$e?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,Se.width,Se.height,Me,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?B&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Se.width,Se.height,Me,Fe,Se.data):n.texImage2D(t.TEXTURE_2D,ie,Le,Se.width,Se.height,0,Me,Fe,Se.data)}else if(g.isDataArrayTexture)if($e){if(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Le,fe.width,fe.height,fe.depth),B)if(g.layerUpdates.size>0){const ie=kg(fe.width,fe.height,g.format,g.type);for(const he of g.layerUpdates){const Pe=fe.data.subarray(he*ie/fe.data.BYTES_PER_ELEMENT,(he+1)*ie/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,fe.width,fe.height,1,Me,Fe,Pe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Me,Fe,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,Me,Fe,fe.data);else if(g.isData3DTexture)$e?(vt&&n.texStorage3D(t.TEXTURE_3D,be,Le,fe.width,fe.height,fe.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Me,Fe,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,Me,Fe,fe.data);else if(g.isFramebufferTexture){if(vt)if($e)n.texStorage2D(t.TEXTURE_2D,be,Le,fe.width,fe.height);else{let ie=fe.width,he=fe.height;for(let Pe=0;Pe<be;Pe++)n.texImage2D(t.TEXTURE_2D,Pe,Le,ie,he,0,Me,Fe,null),ie>>=1,he>>=1}}else if(Ke.length>0){if($e&&vt){const ie=X(Ke[0]);n.texStorage2D(t.TEXTURE_2D,be,Le,ie.width,ie.height)}for(let ie=0,he=Ke.length;ie<he;ie++)Se=Ke[ie],$e?B&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Me,Fe,Se):n.texImage2D(t.TEXTURE_2D,ie,Le,Me,Fe,Se);g.generateMipmaps=!1}else if($e){if(vt){const ie=X(fe);n.texStorage2D(t.TEXTURE_2D,be,Le,ie.width,ie.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Fe,fe)}else n.texImage2D(t.TEXTURE_2D,0,Le,Me,Fe,fe);m(g)&&d(q),ce.__version=R.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ge(M,g,I){if(g.image.length!==6)return;const q=rt(M,g),U=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+I);const R=i.get(U);if(U.version!==R.__version||q===!0){n.activeTexture(t.TEXTURE0+I);const ce=dt.getPrimaries(dt.workingColorSpace),me=g.colorSpace===kr?null:dt.getPrimaries(g.colorSpace),de=g.colorSpace===kr||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const He=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let he=0;he<6;he++)!He&&!fe?Me[he]=v(g.image[he],!0,r.maxCubemapSize):Me[he]=fe?g.image[he].image:g.image[he],Me[he]=ue(g,Me[he]);const Fe=Me[0],Le=s.convert(g.format,g.colorSpace),Se=s.convert(g.type),Ke=A(g.internalFormat,Le,Se,g.colorSpace),$e=g.isVideoTexture!==!0,vt=R.__version===void 0||q===!0,B=U.dataReady;let be=H(g,Fe);Ne(t.TEXTURE_CUBE_MAP,g);let ie;if(He){$e&&vt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Ke,Fe.width,Fe.height);for(let he=0;he<6;he++){ie=Me[he].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const Re=ie[Pe];g.format!==Vi?Le!==null?$e?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Re.width,Re.height,Le,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,Ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Re.width,Re.height,Le,Se,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,Ke,Re.width,Re.height,0,Le,Se,Re.data)}}}else{if(ie=g.mipmaps,$e&&vt){ie.length>0&&be++;const he=X(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Ke,he.width,he.height)}for(let he=0;he<6;he++)if(fe){$e?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Me[he].width,Me[he].height,Le,Se,Me[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ke,Me[he].width,Me[he].height,0,Le,Se,Me[he].data);for(let Pe=0;Pe<ie.length;Pe++){const st=ie[Pe].image[he].image;$e?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,st.width,st.height,Le,Se,st.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,Ke,st.width,st.height,0,Le,Se,st.data)}}else{$e?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Le,Se,Me[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ke,Le,Se,Me[he]);for(let Pe=0;Pe<ie.length;Pe++){const Re=ie[Pe];$e?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,Le,Se,Re.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,Ke,Le,Se,Re.image[he])}}}m(g)&&d(t.TEXTURE_CUBE_MAP),R.__version=U.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Te(M,g,I,q,U,R){const ce=s.convert(I.format,I.colorSpace),me=s.convert(I.type),de=A(I.internalFormat,ce,me,I.colorSpace),He=i.get(g),fe=i.get(I);if(fe.__renderTarget=g,!He.__hasExternalTextures){const Me=Math.max(1,g.width>>R),Fe=Math.max(1,g.height>>R);U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?n.texImage3D(U,R,de,Me,Fe,g.depth,0,ce,me,null):n.texImage2D(U,R,de,Me,Fe,0,ce,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),se(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,U,fe.__webglTexture,0,Y(g)):(U===t.TEXTURE_2D||U>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,U,fe.__webglTexture,R),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(M,g,I){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const q=g.depthTexture,U=q&&q.isDepthTexture?q.type:null,R=y(g.stencilBuffer,U),ce=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=Y(g);se(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,R,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,R,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,R,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,M)}else{const q=g.textures;for(let U=0;U<q.length;U++){const R=q[U],ce=s.convert(R.format,R.colorSpace),me=s.convert(R.type),de=A(R.internalFormat,ce,me,R.colorSpace),He=Y(g);I&&se(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,de,g.width,g.height):se(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,de,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,de,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),le(g.depthTexture,0);const U=q.__webglTexture,R=Y(g);if(g.depthTexture.format===Ko)se(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0,R):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0);else if(g.depthTexture.format===ia)se(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0,R):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function De(M){const g=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const q=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const U=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",U)};q.addEventListener("dispose",U),g.__depthDisposeCallback=U}g.__boundDepthTexture=q}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ue(g.__webglFramebuffer,M)}else if(I){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=t.createRenderbuffer(),ve(g.__webglDepthbuffer[q],M,!1);else{const U=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,R=g.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,R),t.framebufferRenderbuffer(t.FRAMEBUFFER,U,t.RENDERBUFFER,R)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ve(g.__webglDepthbuffer,M,!1);else{const q=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,U=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,U),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,U)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(M,g,I){const q=i.get(M);g!==void 0&&Te(q.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&De(M)}function b(M){const g=M.texture,I=i.get(M),q=i.get(g);M.addEventListener("dispose",L);const U=M.textures,R=M.isWebGLCubeRenderTarget===!0,ce=U.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=g.version,o.memory.textures++),R){I.__webglFramebuffer=[];for(let me=0;me<6;me++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[me]=[];for(let de=0;de<g.mipmaps.length;de++)I.__webglFramebuffer[me][de]=t.createFramebuffer()}else I.__webglFramebuffer[me]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let me=0;me<g.mipmaps.length;me++)I.__webglFramebuffer[me]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(ce)for(let me=0,de=U.length;me<de;me++){const He=i.get(U[me]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&se(M)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let me=0;me<U.length;me++){const de=U[me];I.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[me]);const He=s.convert(de.format,de.colorSpace),fe=s.convert(de.type),Me=A(de.internalFormat,He,fe,de.colorSpace,M.isXRRenderTarget===!0),Fe=Y(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,Me,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,I.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),ve(I.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(R){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,g);for(let me=0;me<6;me++)if(g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)Te(I.__webglFramebuffer[me][de],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,de);else Te(I.__webglFramebuffer[me],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(g)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let me=0,de=U.length;me<de;me++){const He=U[me],fe=i.get(He);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Ne(t.TEXTURE_2D,He),Te(I.__webglFramebuffer,M,He,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),m(He)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(me=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,q.__webglTexture),Ne(me,g),g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)Te(I.__webglFramebuffer[de],M,g,t.COLOR_ATTACHMENT0,me,de);else Te(I.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,me,0);m(g)&&d(me),n.unbindTexture()}M.depthBuffer&&De(M)}function P(M){const g=M.textures;for(let I=0,q=g.length;I<q;I++){const U=g[I];if(m(U)){const R=w(M),ce=i.get(U).__webglTexture;n.bindTexture(R,ce),d(R),n.unbindTexture()}}}const j=[],T=[];function ne(M){if(M.samples>0){if(se(M)===!1){const g=M.textures,I=M.width,q=M.height;let U=t.COLOR_BUFFER_BIT;const R=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(M),me=g.length>1;if(me)for(let de=0;de<g.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let de=0;de<g.length;de++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(U|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(U|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const He=i.get(g[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,I,q,0,0,I,q,U,t.NEAREST),l===!0&&(j.length=0,T.length=0,j.push(t.COLOR_ATTACHMENT0+de),M.depthBuffer&&M.resolveDepthBuffer===!1&&(j.push(R),T.push(R),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,T)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,j))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let de=0;de<g.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const He=i.get(g[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Y(M){return Math.min(r.maxSamples,M.samples)}function se(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Z(M){const g=o.render.frame;c.get(M)!==g&&(c.set(M,g),M.update())}function ue(M,g){const I=M.colorSpace,q=M.format,U=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==_a&&I!==kr&&(dt.getTransfer(I)===wt?(q!==Vi||U!==qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function X(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(u.width=M.naturalWidth||M.width,u.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(u.width=M.displayWidth,u.height=M.displayHeight):(u.width=M.width,u.height=M.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=le,this.setTexture2DArray=J,this.setTexture3D=te,this.setTextureCube=W,this.rebindTextures=je,this.setupRenderTarget=b,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=se}function IA(t,e){function n(i,r=kr){let s;const o=dt.getTransfer(r);if(i===qr)return t.UNSIGNED_BYTE;if(i===np)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ip)return t.UNSIGNED_SHORT_5_5_5_1;if(i===I1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===L1)return t.BYTE;if(i===D1)return t.SHORT;if(i===bl)return t.UNSIGNED_SHORT;if(i===tp)return t.INT;if(i===ao)return t.UNSIGNED_INT;if(i===Hr)return t.FLOAT;if(i===Xr)return t.HALF_FLOAT;if(i===U1)return t.ALPHA;if(i===N1)return t.RGB;if(i===Vi)return t.RGBA;if(i===F1)return t.LUMINANCE;if(i===O1)return t.LUMINANCE_ALPHA;if(i===Ko)return t.DEPTH_COMPONENT;if(i===ia)return t.DEPTH_STENCIL;if(i===B1)return t.RED;if(i===rp)return t.RED_INTEGER;if(i===k1)return t.RG;if(i===sp)return t.RG_INTEGER;if(i===op)return t.RGBA_INTEGER;if(i===Xc||i===jc||i===qc||i===Yc)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wh||i===Xh||i===jh||i===qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yh||i===Kh||i===$h)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yh||i===Kh)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$h)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zh||i===Jh||i===Qh||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ed)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===td)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===id)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===od)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ad)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ld)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ud)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kc||i===fd||i===hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kc)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===z1||i===dd||i===pd||i===md)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===md)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class UA extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zr extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NA={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(u,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new yn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new sn({vertexShader:FA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new Bu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends va{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const v=new BA,m=n.getContextAttributes();let d=null,w=null;const A=[],y=[],H=new Qe;let N=null;const L=new wi;L.viewport=new Zt;const D=new wi;D.viewport=new Zt;const S=[L,D],x=new UA;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ge=A[ae];return ge===void 0&&(ge=new th,A[ae]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ae){let ge=A[ae];return ge===void 0&&(ge=new th,A[ae]=ge),ge.getGripSpace()},this.getHand=function(ae){let ge=A[ae];return ge===void 0&&(ge=new th,A[ae]=ge),ge.getHandSpace()};function G(ae){const ge=y.indexOf(ae.inputSource);if(ge===-1)return;const Te=A[ge];Te!==void 0&&(Te.update(ae.inputSource,ae.frame,u||o),Te.dispatchEvent({type:ae.type,data:ae.inputSource}))}function re(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",le);for(let ae=0;ae<A.length;ae++){const ge=y[ae];ge!==null&&(y[ae]=null,A[ae].disconnect(ge))}C=null,F=null,v.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,w=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){a=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ae){u=ae},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",re),r.addEventListener("inputsourceschange",le),m.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(H),r.renderState.layers===void 0){const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Xi(p.framebufferWidth,p.framebufferHeight,{format:Vi,type:qr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ge=null,Te=null,ve=null;m.depth&&(ve=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=m.stencil?ia:Ko,Te=m.stencil?na:ao);const Ue={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Xi(h.textureWidth,h.textureHeight,{format:Vi,type:qr,depthTexture:new ev(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function le(ae){for(let ge=0;ge<ae.removed.length;ge++){const Te=ae.removed[ge],ve=y.indexOf(Te);ve>=0&&(y[ve]=null,A[ve].disconnect(Te))}for(let ge=0;ge<ae.added.length;ge++){const Te=ae.added[ge];let ve=y.indexOf(Te);if(ve===-1){for(let De=0;De<A.length;De++)if(De>=y.length){y.push(Te),ve=De;break}else if(y[De]===null){y[De]=Te,ve=De;break}if(ve===-1)break}const Ue=A[ve];Ue&&Ue.connect(Te)}}const J=new k,te=new k;function W(ae,ge,Te){J.setFromMatrixPosition(ge.matrixWorld),te.setFromMatrixPosition(Te.matrixWorld);const ve=J.distanceTo(te),Ue=ge.projectionMatrix.elements,De=Te.projectionMatrix.elements,je=Ue[14]/(Ue[10]-1),b=Ue[14]/(Ue[10]+1),P=(Ue[9]+1)/Ue[5],j=(Ue[9]-1)/Ue[5],T=(Ue[8]-1)/Ue[0],ne=(De[8]+1)/De[0],Y=je*T,se=je*ne,Z=ve/(-T+ne),ue=Z*-T;if(ge.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(ue),ae.translateZ(Z),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ue[10]===-1)ae.projectionMatrix.copy(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const X=je+Z,M=b+Z,g=Y-ue,I=se+(ve-ue),q=P*b/M*X,U=j*b/M*X;ae.projectionMatrix.makePerspective(g,I,q,U,X,M),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function _e(ae,ge){ge===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ge.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let ge=ae.near,Te=ae.far;v.texture!==null&&(v.depthNear>0&&(ge=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),x.near=D.near=L.near=ge,x.far=D.far=L.far=Te,(C!==x.near||F!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,F=x.far),L.layers.mask=ae.layers.mask|2,D.layers.mask=ae.layers.mask|4,x.layers.mask=L.layers.mask|D.layers.mask;const ve=ae.parent,Ue=x.cameras;_e(x,ve);for(let De=0;De<Ue.length;De++)_e(Ue[De],ve);Ue.length===2?W(x,L,D):x.projectionMatrix.copy(L.projectionMatrix),Ee(ae,x,ve)};function Ee(ae,ge,Te){Te===null?ae.matrix.copy(ge.matrixWorld):(ae.matrix.copy(Te.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ge.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=_d*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ae){l=ae,h!==null&&(h.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Ce=null;function Ne(ae,ge){if(c=ge.getViewerPose(u||o),_=ge,c!==null){const Te=c.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ve=!1;Te.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let De=0;De<Te.length;De++){const je=Te[De];let b=null;if(p!==null)b=p.getViewport(je);else{const j=f.getViewSubImage(h,je);b=j.viewport,De===0&&(e.setRenderTargetTextures(w,j.colorTexture,h.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(w))}let P=S[De];P===void 0&&(P=new wi,P.layers.enable(De),P.viewport=new Zt,S[De]=P),P.matrix.fromArray(je.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(je.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(b.x,b.y,b.width,b.height),De===0&&(x.matrix.copy(P.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(P)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const De=f.getDepthInformation(Te[0]);De&&De.isValid&&De.texture&&v.init(e,De,r.renderState)}}for(let Te=0;Te<A.length;Te++){const ve=y[Te],Ue=A[Te];ve!==null&&Ue!==void 0&&Ue.update(ve,ge,u||o)}Ce&&Ce(ae,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),_=null}const rt=new Q1;rt.setAnimationLoop(Ne),this.setAnimationLoop=function(ae){Ce=ae},this.dispose=function(){}}}const Fs=new _r,zA=new Nt;function VA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,$1(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,A,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,A):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),A=w.envMap,y=w.envMapRotation;A&&(m.envMap.value=A,Fs.copy(y),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(Fs)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=A*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const y=A.program;i.uniformBlockBinding(w,y)}function u(w,A){let y=r[w.id];y===void 0&&(_(w),y=c(w),r[w.id]=y,w.addEventListener("dispose",m));const H=A.program;i.updateUBOMapping(w,H);const N=e.render.frame;s[w.id]!==N&&(h(w),s[w.id]=N)}function c(w){const A=f();w.__bindingPointIndex=A;const y=t.createBuffer(),H=w.__size,N=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,H,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,y),y}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const A=r[w.id],y=w.uniforms,H=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let N=0,L=y.length;N<L;N++){const D=Array.isArray(y[N])?y[N]:[y[N]];for(let S=0,x=D.length;S<x;S++){const C=D[S];if(p(C,N,S,H)===!0){const F=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let re=0;for(let le=0;le<G.length;le++){const J=G[le],te=v(J);typeof J=="number"||typeof J=="boolean"?(C.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,F+re,C.__data)):J.isMatrix3?(C.__data[0]=J.elements[0],C.__data[1]=J.elements[1],C.__data[2]=J.elements[2],C.__data[3]=0,C.__data[4]=J.elements[3],C.__data[5]=J.elements[4],C.__data[6]=J.elements[5],C.__data[7]=0,C.__data[8]=J.elements[6],C.__data[9]=J.elements[7],C.__data[10]=J.elements[8],C.__data[11]=0):(J.toArray(C.__data,re),re+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(w,A,y,H){const N=w.value,L=A+"_"+y;if(H[L]===void 0)return typeof N=="number"||typeof N=="boolean"?H[L]=N:H[L]=N.clone(),!0;{const D=H[L];if(typeof N=="number"||typeof N=="boolean"){if(D!==N)return H[L]=N,!0}else if(D.equals(N)===!1)return D.copy(N),!0}return!1}function _(w){const A=w.uniforms;let y=0;const H=16;for(let L=0,D=A.length;L<D;L++){const S=Array.isArray(A[L])?A[L]:[A[L]];for(let x=0,C=S.length;x<C;x++){const F=S[x],G=Array.isArray(F.value)?F.value:[F.value];for(let re=0,le=G.length;re<le;re++){const J=G[re],te=v(J),W=y%H,_e=W%te.boundary,Ee=W+_e;y+=_e,Ee!==0&&H-Ee<te.storage&&(y+=H-Ee),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=te.storage}}}const N=y%H;return N>0&&(y+=H-N),w.__size=y,w.__cache={},this}function v(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function m(w){const A=w.target;A.removeEventListener("dispose",m);const y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const w in r)t.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class GA{constructor(e={}){const{canvas:n=D3(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const w=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=ms,this.toneMappingExposure=1;const y=this;let H=!1,N=0,L=0,D=null,S=-1,x=null;const C=new Zt,F=new Zt;let G=null;const re=new Ze(0);let le=0,J=n.width,te=n.height,W=1,_e=null,Ee=null;const Ce=new Zt(0,0,J,te),Ne=new Zt(0,0,J,te);let rt=!1;const ae=new lp;let ge=!1,Te=!1;const ve=new Nt,Ue=new Nt,De=new k,je=new Zt,b={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function j(){return D===null?W:1}let T=i;function ne(E,z){return n.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qd}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Re,!1),T===null){const z="webgl2";if(T=ne(z,E),T===null)throw ne(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Y,se,Z,ue,X,M,g,I,q,U,R,ce,me,de,He,fe,Me,Fe,Le,Se,Ke,$e,vt,B;function be(){Y=new Yb(T),Y.init(),$e=new IA(T,Y),se=new Hb(T,Y,e,$e),Z=new PA(T,Y),se.reverseDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),ue=new Zb(T),X=new mA,M=new DA(T,Y,Z,X,se,$e,ue),g=new Wb(y),I=new qb(y),q=new rS(T),vt=new zb(T,q),U=new Kb(T,q,ue,vt),R=new Qb(T,U,q,ue),Le=new Jb(T,se,M),fe=new Gb(X),ce=new pA(y,g,I,Y,se,vt,fe),me=new VA(y,X),de=new _A,He=new EA(Y),Fe=new kb(y,g,I,Z,R,p,l),Me=new CA(y,R,se),B=new HA(T,ue,se,Z),Se=new Vb(T,Y,ue),Ke=new $b(T,Y,ue),ue.programs=ce.programs,y.capabilities=se,y.extensions=Y,y.properties=X,y.renderLists=de,y.shadowMap=Me,y.state=Z,y.info=ue}be();const ie=new kA(y,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=Y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(J,te,!1))},this.getSize=function(E){return E.set(J,te)},this.setSize=function(E,z,$=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,te=z,n.width=Math.floor(E*W),n.height=Math.floor(z*W),$===!0&&(n.style.width=E+"px",n.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(J*W,te*W).floor()},this.setDrawingBufferSize=function(E,z,$){J=E,te=z,W=$,n.width=Math.floor(E*$),n.height=Math.floor(z*$),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Ce)},this.setViewport=function(E,z,$,K){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,z,$,K),Z.viewport(C.copy(Ce).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,z,$,K){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,z,$,K),Z.scissor(F.copy(Ne).multiplyScalar(W).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(E){Z.setScissorTest(rt=E)},this.setOpaqueSort=function(E){_e=E},this.setTransparentSort=function(E){Ee=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(E=!0,z=!0,$=!0){let K=0;if(E){let V=!1;if(D!==null){const ye=D.texture.format;V=ye===op||ye===sp||ye===rp}if(V){const ye=D.texture.type,Ae=ye===qr||ye===ao||ye===bl||ye===na||ye===np||ye===ip,Be=Fe.getClearColor(),ke=Fe.getClearAlpha(),nt=Be.r,ot=Be.g,ze=Be.b;Ae?(_[0]=nt,_[1]=ot,_[2]=ze,_[3]=ke,T.clearBufferuiv(T.COLOR,0,_)):(v[0]=nt,v[1]=ot,v[2]=ze,v[3]=ke,T.clearBufferiv(T.COLOR,0,v))}else K|=T.COLOR_BUFFER_BIT}z&&(K|=T.DEPTH_BUFFER_BIT),$&&(K|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),de.dispose(),He.dispose(),X.dispose(),g.dispose(),I.dispose(),R.dispose(),vt.dispose(),B.dispose(),ce.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ql),ie.removeEventListener("sessionend",Yl),br.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const E=ue.autoReset,z=Me.enabled,$=Me.autoUpdate,K=Me.needsUpdate,V=Me.type;be(),ue.autoReset=E,Me.enabled=z,Me.autoUpdate=$,Me.needsUpdate=K,Me.type=V}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function st(E){const z=E.target;z.removeEventListener("dispose",st),Bt(z)}function Bt(E){mn(E),X.remove(E)}function mn(E){const z=X.get(E).programs;z!==void 0&&(z.forEach(function($){ce.releaseProgram($)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,$,K,V,ye){z===null&&(z=b);const Ae=V.isMesh&&V.matrixWorld.determinant()<0,Be=Na(E,z,$,K,V);Z.setMaterial(K,Ae);let ke=$.index,nt=1;if(K.wireframe===!0){if(ke=U.getWireframeAttribute($),ke===void 0)return;nt=2}const ot=$.drawRange,ze=$.attributes.position;let ft=ot.start*nt,Tt=(ot.start+ot.count)*nt;ye!==null&&(ft=Math.max(ft,ye.start*nt),Tt=Math.min(Tt,(ye.start+ye.count)*nt)),ke!==null?(ft=Math.max(ft,0),Tt=Math.min(Tt,ke.count)):ze!=null&&(ft=Math.max(ft,0),Tt=Math.min(Tt,ze.count));const At=Tt-ft;if(At<0||At===1/0)return;vt.setup(V,K,Be,$,ke);let Mn,mt=Se;if(ke!==null&&(Mn=q.get(ke),mt=Ke,mt.setIndex(Mn)),V.isMesh)K.wireframe===!0?(Z.setLineWidth(K.wireframeLinewidth*j()),mt.setMode(T.LINES)):mt.setMode(T.TRIANGLES);else if(V.isLine){let Oe=K.linewidth;Oe===void 0&&(Oe=1),Z.setLineWidth(Oe*j()),V.isLineSegments?mt.setMode(T.LINES):V.isLineLoop?mt.setMode(T.LINE_LOOP):mt.setMode(T.LINE_STRIP)}else V.isPoints?mt.setMode(T.POINTS):V.isSprite&&mt.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)mt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Oe=V._multiDrawStarts,vi=V._multiDrawCounts,gt=V._multiDrawCount,Jn=ke?q.get(ke).bytesPerElement:1,Qr=X.get(K).currentProgram.getUniforms();for(let Gn=0;Gn<gt;Gn++)Qr.setValue(T,"_gl_DrawID",Gn),mt.render(Oe[Gn]/Jn,vi[Gn])}else if(V.isInstancedMesh)mt.renderInstances(ft,At,V.count);else if($.isInstancedBufferGeometry){const Oe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,vi=Math.min($.instanceCount,Oe);mt.renderInstances(ft,At,vi)}else mt.render(ft,At)};function yt(E,z,$){E.transparent===!0&&E.side===ar&&E.forceSinglePass===!1?(E.side=Zn,E.needsUpdate=!0,_o(E,z,$),E.side=ys,E.needsUpdate=!0,_o(E,z,$),E.side=ar):_o(E,z,$)}this.compile=function(E,z,$=null){$===null&&($=E),d=He.get($),d.init(z),A.push(d),$.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),E!==$&&E.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();const K=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ye=V.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Be=ye[Ae];yt(Be,$,V),K.add(Be)}else yt(ye,$,V),K.add(ye)}),A.pop(),d=null,K},this.compileAsync=function(E,z,$=null){const K=this.compile(E,z,$);return new Promise(V=>{function ye(){if(K.forEach(function(Ae){X.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){V(E);return}setTimeout(ye,10)}Y.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ni=null;function Fi(E){ni&&ni(E)}function ql(){br.stop()}function Yl(){br.start()}const br=new Q1;br.setAnimationLoop(Fi),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(E){ni=E,ie.setAnimationLoop(E),E===null?br.stop():br.start()},ie.addEventListener("sessionstart",ql),ie.addEventListener("sessionend",Yl),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(z),z=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,z,D),d=He.get(E,A.length),d.init(z),A.push(d),Ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ae.setFromProjectionMatrix(Ue),Te=this.localClippingEnabled,ge=fe.init(this.clippingPlanes,Te),m=de.get(E,w.length),m.init(),w.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ye=y.xr.getDepthSensingMesh();ye!==null&&Ia(ye,z,-1/0,y.sortObjects)}Ia(E,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(_e,Ee),P=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,P&&Fe.addToRenderList(m,E),this.info.render.frame++,ge===!0&&fe.beginShadows();const $=d.state.shadowsArray;Me.render($,E,z),ge===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,V=m.transmissive;if(d.setupLights(),z.isArrayCamera){const ye=z.cameras;if(V.length>0)for(let Ae=0,Be=ye.length;Ae<Be;Ae++){const ke=ye[Ae];$l(K,V,E,ke)}P&&Fe.render(E);for(let Ae=0,Be=ye.length;Ae<Be;Ae++){const ke=ye[Ae];Kl(m,E,ke,ke.viewport)}}else V.length>0&&$l(K,V,E,z),P&&Fe.render(E),Kl(m,E,z);D!==null&&(M.updateMultisampleRenderTarget(D),M.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,z),vt.resetDefaultState(),S=-1,x=null,A.pop(),A.length>0?(d=A[A.length-1],ge===!0&&fe.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ia(E,z,$,K){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ae.intersectsSprite(E)){K&&je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ue);const Ae=R.update(E),Be=E.material;Be.visible&&m.push(E,Ae,Be,$,je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ae.intersectsObject(E))){const Ae=R.update(E),Be=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),je.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),je.copy(Ae.boundingSphere.center)),je.applyMatrix4(E.matrixWorld).applyMatrix4(Ue)),Array.isArray(Be)){const ke=Ae.groups;for(let nt=0,ot=ke.length;nt<ot;nt++){const ze=ke[nt],ft=Be[ze.materialIndex];ft&&ft.visible&&m.push(E,Ae,ft,$,je.z,ze)}}else Be.visible&&m.push(E,Ae,Be,$,je.z,null)}}const ye=E.children;for(let Ae=0,Be=ye.length;Ae<Be;Ae++)Ia(ye[Ae],z,$,K)}function Kl(E,z,$,K){const V=E.opaque,ye=E.transmissive,Ae=E.transparent;d.setupLightsView($),ge===!0&&fe.setGlobalState(y.clippingPlanes,$),K&&Z.viewport(C.copy(K)),V.length>0&&Tr(V,z,$),ye.length>0&&Tr(ye,z,$),Ae.length>0&&Tr(Ae,z,$),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function $l(E,z,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[K.id]===void 0&&(d.state.transmissionRenderTarget[K.id]=new Xi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?Xr:qr,minFilter:$s,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ye=d.state.transmissionRenderTarget[K.id],Ae=K.viewport||C;ye.setSize(Ae.z,Ae.w);const Be=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(re),le=y.getClearAlpha(),le<1&&y.setClearColor(16777215,.5),y.clear(),P&&Fe.render($);const ke=y.toneMapping;y.toneMapping=ms;const nt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),d.setupLightsView(K),ge===!0&&fe.setGlobalState(y.clippingPlanes,K),Tr(E,$,K),M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye),Y.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let ze=0,ft=z.length;ze<ft;ze++){const Tt=z[ze],At=Tt.object,Mn=Tt.geometry,mt=Tt.material,Oe=Tt.group;if(mt.side===ar&&At.layers.test(K.layers)){const vi=mt.side;mt.side=Zn,mt.needsUpdate=!0,go(At,$,K,Mn,mt,Oe),mt.side=vi,mt.needsUpdate=!0,ot=!0}}ot===!0&&(M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye))}y.setRenderTarget(Be),y.setClearColor(re,le),nt!==void 0&&(K.viewport=nt),y.toneMapping=ke}function Tr(E,z,$){const K=z.isScene===!0?z.overrideMaterial:null;for(let V=0,ye=E.length;V<ye;V++){const Ae=E[V],Be=Ae.object,ke=Ae.geometry,nt=K===null?Ae.material:K,ot=Ae.group;Be.layers.test($.layers)&&go(Be,z,$,ke,nt,ot)}}function go(E,z,$,K,V,ye){E.onBeforeRender(y,z,$,K,V,ye),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(y,z,$,K,E,ye),V.transparent===!0&&V.side===ar&&V.forceSinglePass===!1?(V.side=Zn,V.needsUpdate=!0,y.renderBufferDirect($,z,K,V,E,ye),V.side=ys,V.needsUpdate=!0,y.renderBufferDirect($,z,K,V,E,ye),V.side=ar):y.renderBufferDirect($,z,K,V,E,ye),E.onAfterRender(y,z,$,K,V,ye)}function _o(E,z,$){z.isScene!==!0&&(z=b);const K=X.get(E),V=d.state.lights,ye=d.state.shadowsArray,Ae=V.state.version,Be=ce.getParameters(E,V.state,ye,z,$),ke=ce.getProgramCacheKey(Be);let nt=K.programs;K.environment=E.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(E.isMeshStandardMaterial?I:g).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,nt===void 0&&(E.addEventListener("dispose",st),nt=new Map,K.programs=nt);let ot=nt.get(ke);if(ot!==void 0){if(K.currentProgram===ot&&K.lightsStateVersion===Ae)return Zl(E,Be),ot}else Be.uniforms=ce.getUniforms(E),E.onBeforeCompile(Be,y),ot=ce.acquireProgram(Be,ke),nt.set(ke,ot),K.uniforms=Be.uniforms;const ze=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=fe.uniform),Zl(E,Be),K.needsLights=ff(E),K.lightsStateVersion=Ae,K.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=ot,K.uniformsList=null,ot}function Ua(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=$c.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Zl(E,z){const $=X.get(E);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function Na(E,z,$,K,V){z.isScene!==!0&&(z=b),M.resetTextureUnits();const ye=z.fog,Ae=K.isMeshStandardMaterial?z.environment:null,Be=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_a,ke=(K.isMeshStandardMaterial?I:g).get(K.envMap||Ae),nt=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ot=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!$.morphAttributes.position,ft=!!$.morphAttributes.normal,Tt=!!$.morphAttributes.color;let At=ms;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=y.toneMapping);const Mn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,mt=Mn!==void 0?Mn.length:0,Oe=X.get(K),vi=d.state.lights;if(ge===!0&&(Te===!0||E!==x)){const ee=E===x&&K.id===S;fe.setState(K,E,ee)}let gt=!1;K.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==vi.state.version||Oe.outputColorSpace!==Be||V.isBatchedMesh&&Oe.batching===!1||!V.isBatchedMesh&&Oe.batching===!0||V.isBatchedMesh&&Oe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Oe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Oe.instancing===!1||!V.isInstancedMesh&&Oe.instancing===!0||V.isSkinnedMesh&&Oe.skinning===!1||!V.isSkinnedMesh&&Oe.skinning===!0||V.isInstancedMesh&&Oe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Oe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Oe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Oe.instancingMorph===!1&&V.morphTexture!==null||Oe.envMap!==ke||K.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==fe.numPlanes||Oe.numIntersection!==fe.numIntersection)||Oe.vertexAlphas!==nt||Oe.vertexTangents!==ot||Oe.morphTargets!==ze||Oe.morphNormals!==ft||Oe.morphColors!==Tt||Oe.toneMapping!==At||Oe.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,Oe.__version=K.version);let Jn=Oe.currentProgram;gt===!0&&(Jn=_o(K,z,V));let Qr=!1,Gn=!1,Ts=!1;const Pt=Jn.getUniforms(),xi=Oe.uniforms;if(Z.useProgram(Jn.program)&&(Qr=!0,Gn=!0,Ts=!0),K.id!==S&&(S=K.id,Gn=!0),Qr||x!==E){Z.buffers.depth.getReversed()?(ve.copy(E.projectionMatrix),U3(ve),N3(ve),Pt.setValue(T,"projectionMatrix",ve)):Pt.setValue(T,"projectionMatrix",E.projectionMatrix),Pt.setValue(T,"viewMatrix",E.matrixWorldInverse);const Q=Pt.map.cameraPosition;Q!==void 0&&Q.setValue(T,De.setFromMatrixPosition(E.matrixWorld)),se.logarithmicDepthBuffer&&Pt.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Pt.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Gn=!0,Ts=!0)}if(V.isSkinnedMesh){Pt.setOptional(T,V,"bindMatrix"),Pt.setOptional(T,V,"bindMatrixInverse");const ee=V.skeleton;ee&&(ee.boneTexture===null&&ee.computeBoneTexture(),Pt.setValue(T,"boneTexture",ee.boneTexture,M))}V.isBatchedMesh&&(Pt.setOptional(T,V,"batchingTexture"),Pt.setValue(T,"batchingTexture",V._matricesTexture,M),Pt.setOptional(T,V,"batchingIdTexture"),Pt.setValue(T,"batchingIdTexture",V._indirectTexture,M),Pt.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&Pt.setValue(T,"batchingColorTexture",V._colorsTexture,M));const O=$.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Le.update(V,$,Jn),(Gn||Oe.receiveShadow!==V.receiveShadow)&&(Oe.receiveShadow=V.receiveShadow,Pt.setValue(T,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(xi.envMap.value=ke,xi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(xi.envMapIntensity.value=z.environmentIntensity),Gn&&(Pt.setValue(T,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&uf(xi,Ts),ye&&K.fog===!0&&me.refreshFogUniforms(xi,ye),me.refreshMaterialUniforms(xi,K,W,te,d.state.transmissionRenderTarget[E.id]),$c.upload(T,Ua(Oe),xi,M)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&($c.upload(T,Ua(Oe),xi,M),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Pt.setValue(T,"center",V.center),Pt.setValue(T,"modelViewMatrix",V.modelViewMatrix),Pt.setValue(T,"normalMatrix",V.normalMatrix),Pt.setValue(T,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ee=K.uniformsGroups;for(let Q=0,oe=ee.length;Q<oe;Q++){const pe=ee[Q];B.update(pe,Jn),B.bind(pe,Jn)}}return Jn}function uf(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function ff(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,z,$){X.get(E.texture).__webglTexture=z,X.get(E.depthTexture).__webglTexture=$;const K=X.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const $=X.get(E);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,$=0){D=E,N=z,L=$;let K=!0,V=null,ye=!1,Ae=!1;if(E){const ke=X.get(E);if(ke.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(T.FRAMEBUFFER,null),K=!1;else if(ke.__webglFramebuffer===void 0)M.setupRenderTarget(E);else if(ke.__hasExternalTextures)M.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(ke.__boundDepthTexture!==ze){if(ze!==null&&X.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(E)}}const nt=E.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ae=!0);const ot=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ot[z])?V=ot[z][$]:V=ot[z],ye=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?V=X.get(E).__webglMultisampledFramebuffer:Array.isArray(ot)?V=ot[$]:V=ot,C.copy(E.viewport),F.copy(E.scissor),G=E.scissorTest}else C.copy(Ce).multiplyScalar(W).floor(),F.copy(Ne).multiplyScalar(W).floor(),G=rt;if(Z.bindFramebuffer(T.FRAMEBUFFER,V)&&K&&Z.drawBuffers(E,V),Z.viewport(C),Z.scissor(F),Z.setScissorTest(G),ye){const ke=X.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+z,ke.__webglTexture,$)}else if(Ae){const ke=X.get(E.texture),nt=z||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ke.__webglTexture,$||0,nt)}S=-1},this.readRenderTargetPixels=function(E,z,$,K,V,ye,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Be=Be[Ae]),Be){Z.bindFramebuffer(T.FRAMEBUFFER,Be);try{const ke=E.texture,nt=ke.format,ot=ke.type;if(!se.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-K&&$>=0&&$<=E.height-V&&T.readPixels(z,$,K,V,$e.convert(nt),$e.convert(ot),ye)}finally{const ke=D!==null?X.get(D).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,z,$,K,V,ye,Ae){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Be=Be[Ae]),Be){const ke=E.texture,nt=ke.format,ot=ke.type;if(!se.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-K&&$>=0&&$<=E.height-V){Z.bindFramebuffer(T.FRAMEBUFFER,Be);const ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.bufferData(T.PIXEL_PACK_BUFFER,ye.byteLength,T.STREAM_READ),T.readPixels(z,$,K,V,$e.convert(nt),$e.convert(ot),0);const ft=D!==null?X.get(D).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,ft);const Tt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await I3(T,Tt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ye),T.deleteBuffer(ze),T.deleteSync(Tt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,$=0){E.isTexture!==!0&&(el("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-$),V=Math.floor(E.image.width*K),ye=Math.floor(E.image.height*K),Ae=z!==null?z.x:0,Be=z!==null?z.y:0;M.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,$,0,0,Ae,Be,V,ye),Z.unbindTexture()},this.copyTextureToTexture=function(E,z,$=null,K=null,V=0){E.isTexture!==!0&&(el("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],z=arguments[2],V=arguments[3]||0,$=null);let ye,Ae,Be,ke,nt,ot,ze,ft,Tt;const At=E.isCompressedTexture?E.mipmaps[V]:E.image;$!==null?(ye=$.max.x-$.min.x,Ae=$.max.y-$.min.y,Be=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,nt=$.min.y,ot=$.isBox3?$.min.z:0):(ye=At.width,Ae=At.height,Be=At.depth||1,ke=0,nt=0,ot=0),K!==null?(ze=K.x,ft=K.y,Tt=K.z):(ze=0,ft=0,Tt=0);const Mn=$e.convert(z.format),mt=$e.convert(z.type);let Oe;z.isData3DTexture?(M.setTexture3D(z,0),Oe=T.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(M.setTexture2DArray(z,0),Oe=T.TEXTURE_2D_ARRAY):(M.setTexture2D(z,0),Oe=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,z.unpackAlignment);const vi=T.getParameter(T.UNPACK_ROW_LENGTH),gt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Jn=T.getParameter(T.UNPACK_SKIP_PIXELS),Qr=T.getParameter(T.UNPACK_SKIP_ROWS),Gn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,At.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,At.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ke),T.pixelStorei(T.UNPACK_SKIP_ROWS,nt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ot);const Ts=E.isDataArrayTexture||E.isData3DTexture,Pt=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const xi=X.get(E),O=X.get(z),ee=X.get(xi.__renderTarget),Q=X.get(O.__renderTarget);Z.bindFramebuffer(T.READ_FRAMEBUFFER,ee.__webglFramebuffer),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let oe=0;oe<Be;oe++)Ts&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,X.get(E).__webglTexture,V,ot+oe),E.isDepthTexture?(Pt&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,X.get(z).__webglTexture,V,Tt+oe),T.blitFramebuffer(ke,nt,ye,Ae,ze,ft,ye,Ae,T.DEPTH_BUFFER_BIT,T.NEAREST)):Pt?T.copyTexSubImage3D(Oe,V,ze,ft,Tt+oe,ke,nt,ye,Ae):T.copyTexSubImage2D(Oe,V,ze,ft,Tt+oe,ke,nt,ye,Ae);Z.bindFramebuffer(T.READ_FRAMEBUFFER,null),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Pt?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Oe,V,ze,ft,Tt,ye,Ae,Be,Mn,mt,At.data):z.isCompressedArrayTexture?T.compressedTexSubImage3D(Oe,V,ze,ft,Tt,ye,Ae,Be,Mn,At.data):T.texSubImage3D(Oe,V,ze,ft,Tt,ye,Ae,Be,Mn,mt,At):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,V,ze,ft,ye,Ae,Mn,mt,At.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,V,ze,ft,At.width,At.height,Mn,At.data):T.texSubImage2D(T.TEXTURE_2D,V,ze,ft,ye,Ae,Mn,mt,At);T.pixelStorei(T.UNPACK_ROW_LENGTH,vi),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Jn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Qr),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Gn),V===0&&z.generateMipmaps&&T.generateMipmap(Oe),Z.unbindTexture()},this.copyTextureToTexture3D=function(E,z,$=null,K=null,V=0){return E.isTexture!==!0&&(el("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,E=arguments[2],z=arguments[3],V=arguments[4]||0),el('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,$,K,V)},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&M.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),Z.unbindTexture()},this.resetState=function(){N=0,L=0,D=null,Z.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=dt._getUnpackColorSpace()}}class WA extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class XA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=gd,this.updateRanges=[],this.version=0,this.uuid=gs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new k;class fu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Xn.fromBufferAttribute(this,n),Xn.applyMatrix4(e),this.setXYZ(n,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xn.fromBufferAttribute(this,n),Xn.applyNormalMatrix(e),this.setXYZ(n,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xn.fromBufferAttribute(this,n),Xn.transformDirection(e),this.setXYZ(n,Xn.x,Xn.y,Xn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=lr(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=lr(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=lr(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=lr(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Tn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gs extends Es{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Io;const ja=new k,Uo=new k,No=new k,Fo=new Qe,qa=new Qe,sv=new Nt,Ec=new k,Ya=new k,bc=new k,zg=new Qe,nh=new Qe,Vg=new Qe;class Oo extends cn{constructor(e=new Gs){if(super(),this.isSprite=!0,this.type="Sprite",Io===void 0){Io=new An;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new XA(n,5);Io.setIndex([0,1,2,0,2,3]),Io.setAttribute("position",new fu(i,3,0,!1)),Io.setAttribute("uv",new fu(i,2,3,!1))}this.geometry=Io,this.material=e,this.center=new Qe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Uo.setFromMatrixScale(this.matrixWorld),sv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),No.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Uo.multiplyScalar(-No.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Tc(Ec.set(-.5,-.5,0),No,o,Uo,r,s),Tc(Ya.set(.5,-.5,0),No,o,Uo,r,s),Tc(bc.set(.5,.5,0),No,o,Uo,r,s),zg.set(0,0),nh.set(1,0),Vg.set(1,1);let a=e.ray.intersectTriangle(Ec,Ya,bc,!1,ja);if(a===null&&(Tc(Ya.set(-.5,.5,0),No,o,Uo,r,s),nh.set(0,1),a=e.ray.intersectTriangle(Ec,bc,Ya,!1,ja),a===null))return;const l=e.ray.origin.distanceTo(ja);l<e.near||l>e.far||n.push({distance:l,point:ja.clone(),uv:Ci.getInterpolation(ja,Ec,Ya,bc,zg,nh,Vg,new Qe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tc(t,e,n,i,r,s){Fo.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(qa.x=s*Fo.x-r*Fo.y,qa.y=r*Fo.x+s*Fo.y):qa.copy(Fo),t.copy(e),t.x+=qa.x,t.y+=qa.y,t.applyMatrix4(sv)}class xd extends Es{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hu=new k,du=new k,Hg=new Nt,Ka=new ap,Ac=new Ol,ih=new k,Gg=new k;class ov extends cn{constructor(e=new An,n=new xd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)hu.fromBufferAttribute(n,r-1),du.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=hu.distanceTo(du);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(r),Ac.radius+=s,e.ray.intersectsSphere(Ac)===!1)return;Hg.copy(r).invert(),Ka.copy(e.ray).applyMatrix4(Hg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=u){const d=c.getX(v),w=c.getX(v+1),A=wc(this,e,Ka,l,d,w);A&&n.push(A)}if(this.isLineLoop){const v=c.getX(_-1),m=c.getX(p),d=wc(this,e,Ka,l,v,m);d&&n.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=u){const d=wc(this,e,Ka,l,v,v+1);d&&n.push(d)}if(this.isLineLoop){const v=wc(this,e,Ka,l,_-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wc(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(hu.fromBufferAttribute(o,r),du.fromBufferAttribute(o,s),n.distanceSqToSegment(hu,du,ih,Gg)>i)return;ih.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(ih);if(!(l<e.near||l>e.far))return{distance:l,point:Gg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Wg=new k,Xg=new k;class jA extends ov{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Wg.fromBufferAttribute(n,r),Xg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Wg.distanceTo(Xg);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qA extends Es{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jg=new Nt,yd=new ap,Cc=new Ol,Rc=new k;class qg extends cn{constructor(e=new An,n=new qA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(r),Cc.radius+=s,e.ray.intersectsSphere(Cc)===!1)return;jg.copy(r).invert(),yd.copy(e.ray).applyMatrix4(jg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,v=p;_<v;_++){const m=u.getX(_);Rc.fromBufferAttribute(f,m),Yg(Rc,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,v=p;_<v;_++)Rc.fromBufferAttribute(f,_),Yg(Rc,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yg(t,e,n,i,r,s,o){const a=yd.distanceSqToPoint(t);if(a<n){const l=new k;yd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Pc extends yn{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class YA{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,p=(o-c)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Qe:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new k,r=[],s=[],o=[],a=new k,l=new Nt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new k)}s[0]=new k,o[0]=new k;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Nn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Nn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function fp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,p*=c,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Lc=new k,rh=new fp,sh=new fp,oh=new fp;class KA extends YA{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Lc.subVectors(r[0],r[1]).add(r[0]),u=Lc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Lc.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(c),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),rh.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,_,v,m),sh.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,_,v,m),oh.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,_,v,m)}else this.curveType==="catmullrom"&&(rh.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),sh.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),oh.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(rh.calc(l),sh.calc(l),oh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class hp extends An{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let f=e;const h=(n-e)/r,p=new k,_=new Qe;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,c.push(_.x,_.y)}f+=h}for(let v=0;v<r;v++){const m=v*(i+1);for(let d=0;d<i;d++){const w=d+m,A=w,y=w+i+1,H=w+i+2,N=w+1;a.push(A,y,N),a.push(y,H,N)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qs extends An{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new k,h=new k,p=[],_=[],v=[],m=[];for(let d=0;d<=i;d++){const w=[],A=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let H=0;H<=n;H++){const N=H/n;f.x=-e*Math.cos(r+N*s)*Math.sin(o+A*a),f.y=e*Math.cos(o+A*a),f.z=e*Math.sin(r+N*s)*Math.sin(o+A*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(N+y,1-A),w.push(u++)}c.push(w)}for(let d=0;d<i;d++)for(let w=0;w<n;w++){const A=c[d][w+1],y=c[d][w],H=c[d+1][w],N=c[d+1][w+1];(d!==0||o>0)&&p.push(A,y,N),(d!==i-1||l<Math.PI)&&p.push(y,H,N)}this.setIndex(p),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $A extends sn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ZA extends Es{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V1,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Kg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class JA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const QA=new JA;class dp{constructor(e){this.manager=e!==void 0?e:QA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dp.DEFAULT_MATERIAL_NAME="__DEFAULT";class ew extends dp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Kg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Tl("img");function l(){c(),Kg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class tw extends dp{constructor(e){super(e)}load(e,n,i,r){const s=new yn,o=new ew(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class av extends cn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ah=new Nt,$g=new k,Zg=new k;class nw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;$g.setFromMatrixPosition(e.matrixWorld),n.position.copy($g),Zg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zg),n.updateMatrixWorld(),ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iw extends nw{constructor(){super(new cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rw extends av{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new iw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sw extends av{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class lv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Jg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Jg(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);const cv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ya{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ow=new cp(-1,1,1,-1,0,1);class aw extends An{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}}const lw=new aw;class pp{constructor(e){this._mesh=new Fn(lw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ow)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cw extends ya{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wl.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new pp(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Qg extends ya{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class uw extends ya{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fw{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Qe);this._width=i.width,this._height=i.height,n=new Xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xr}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cw(cv),this.copyPass.material.blending=Wr,this.clock=new lv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qg!==void 0&&(o instanceof Qg?i=!0:o instanceof uw&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hw extends ya{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const dw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class sa extends ya{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Qe(e.x,e.y):new Qe(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xi(s,o,{type:Xr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new Xi(s,o,{type:Xr});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new Xi(s,o,{type:Xr});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=dw;this.highPassUniforms=wl.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Qe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=cv;this.copyUniforms=wl.clone(c.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:li,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new Al,this.fsQuad=new pp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Qe(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Qe(.5,.5)},direction:{value:new Qe(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}sa.BlurDirectionX=new Qe(1,0);sa.BlurDirectionY=new Qe(0,1);const pw={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mw extends ya{constructor(){super();const e=pw;this.uniforms=wl.clone(e.uniforms),this.material=new $A({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new pp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===T1?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===A1?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===w1?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ep?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===C1?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===R1&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const er=[{cn:"北京",en:"BEIJING",lon:116.4,lat:39.9,major:!0},{cn:"上海",en:"SHANGHAI",lon:121.47,lat:31.23,major:!0,tag:"31.23°N 121.47°E · 东方明珠"},{cn:"广州",en:"GUANGZHOU",lon:113.26,lat:23.13},{cn:"深圳",en:"SHENZHEN",lon:114.06,lat:22.54},{cn:"成都",en:"CHENGDU",lon:104.07,lat:30.57},{cn:"西安",en:"XI'AN",lon:108.94,lat:34.34},{cn:"香港",en:"HONG KONG",lon:114.17,lat:22.32,major:!0},{cn:"台北",en:"TAIPEI",lon:121.56,lat:25.03},{cn:"东京",en:"TOKYO",lon:139.69,lat:35.69,major:!0,tag:"35.69°N 139.69°E · 千代田"},{cn:"首尔",en:"SEOUL",lon:126.98,lat:37.57,major:!0},{cn:"新加坡",en:"SINGAPORE",lon:103.82,lat:1.35,major:!0,tag:"1.35°N 103.82°E · 赤道城邦"},{cn:"曼谷",en:"BANGKOK",lon:100.5,lat:13.75},{cn:"雅加达",en:"JAKARTA",lon:106.85,lat:-6.21},{cn:"马尼拉",en:"MANILA",lon:120.98,lat:14.6},{cn:"孟买",en:"MUMBAI",lon:72.88,lat:19.08,major:!0},{cn:"卡拉奇",en:"KARACHI",lon:67,lat:24.86},{cn:"迪拜",en:"DUBAI",lon:55.27,lat:25.2,major:!0,tag:"25.20°N 55.27°E · 沙漠之冠"},{cn:"德黑兰",en:"TEHRAN",lon:51.39,lat:35.69},{cn:"利雅得",en:"RIYADH",lon:46.72,lat:24.71},{cn:"伊斯坦布尔",en:"ISTANBUL",lon:28.98,lat:41.01,major:!0,tag:"41.01°N 28.98°E · 两洲之城"},{cn:"莫斯科",en:"MOSCOW",lon:37.62,lat:55.76,major:!0},{cn:"伦敦",en:"LONDON",lon:-.13,lat:51.51,major:!0,tag:"51.51°N 0.13°W · 格林尼治"},{cn:"巴黎",en:"PARIS",lon:2.35,lat:48.86,major:!0,tag:"48.86°N 2.35°E · 塞纳河"},{cn:"柏林",en:"BERLIN",lon:13.4,lat:52.52},{cn:"罗马",en:"ROME",lon:12.5,lat:41.9},{cn:"马德里",en:"MADRID",lon:-3.7,lat:40.42},{cn:"阿姆斯特丹",en:"AMSTERDAM",lon:4.9,lat:52.37},{cn:"斯德哥尔摩",en:"STOCKHOLM",lon:18.07,lat:59.33},{cn:"基辅",en:"KYIV",lon:30.52,lat:50.45},{cn:"开罗",en:"CAIRO",lon:31.24,lat:30.04,major:!0},{cn:"拉各斯",en:"LAGOS",lon:3.38,lat:6.52},{cn:"内罗毕",en:"NAIROBI",lon:36.82,lat:-1.29},{cn:"开普敦",en:"CAPE TOWN",lon:18.42,lat:-33.93,major:!0},{cn:"卡萨布兰卡",en:"CASABLANCA",lon:-7.59,lat:33.57},{cn:"纽约",en:"NEW YORK",lon:-74.01,lat:40.71,major:!0,tag:"40.71°N 74.01°W · 曼哈顿"},{cn:"旧金山",en:"SAN FRANCISCO",lon:-122.42,lat:37.77,major:!0,tag:"37.77°N 122.42°W · 金门"},{cn:"洛杉矶",en:"LOS ANGELES",lon:-118.24,lat:34.05,major:!0},{cn:"西雅图",en:"SEATTLE",lon:-122.33,lat:47.61},{cn:"芝加哥",en:"CHICAGO",lon:-87.63,lat:41.88},{cn:"多伦多",en:"TORONTO",lon:-79.38,lat:43.65},{cn:"温哥华",en:"VANCOUVER",lon:-123.12,lat:49.28},{cn:"墨西哥城",en:"MEXICO CITY",lon:-99.13,lat:19.43,major:!0},{cn:"圣保罗",en:"SÃO PAULO",lon:-46.63,lat:-23.55,major:!0},{cn:"里约热内卢",en:"RIO DE JANEIRO",lon:-43.17,lat:-22.91},{cn:"布宜诺斯艾利斯",en:"BUENOS AIRES",lon:-58.38,lat:-34.6,major:!0},{cn:"利马",en:"LIMA",lon:-77.04,lat:-12.05},{cn:"悉尼",en:"SYDNEY",lon:151.21,lat:-33.87,major:!0,tag:"33.87°S 151.21°E · 南十字"},{cn:"墨尔本",en:"MELBOURNE",lon:144.96,lat:-37.81},{cn:"奥克兰",en:"AUCKLAND",lon:174.76,lat:-36.85}],gw=["上海","东京","旧金山","伦敦","伊斯坦布尔","纽约","迪拜","新加坡","悉尼","巴黎"],as=gw.map(t=>er.findIndex(e=>e.cn===t)).filter(t=>t>=0);function _w(t){const e=t.trim().toLowerCase();return er.findIndex(n=>n.cn===t.trim()||n.en.toLowerCase()===e)}function $a(t){const e=t.lat*Math.PI/180,n=t.lon*Math.PI/180;return[Math.cos(e)*Math.sin(n),Math.sin(e),Math.cos(e)*Math.cos(n)]}const vw={class:"earth-stage"},xw={key:0,class:"earth-fallback mono"},Os=1,lh=42,Bo=4.9,ch=3,Dc=6.6,yw=9.5,Mw=158,Sw=5600,Ic=26,Ew=j_({__name:"ParticleEarth",props:{pinch:{},spread:{},palm:{},palmVel:{},detected:{type:Boolean}},emits:["telemetry"],setup(t,{expose:e,emit:n}){function i(O){return"/particle-earth-hand/"+O.replace(/^\//,"")}const r=t,s=n,o=Qt(null),a=Qt(""),l=Math.PI/180,u={background:263950,land:14675711,ocean:1325660,city:16761963,rim:4892927,arc:10149119,ringBand:330518,ringEdge:6269160},c=(O,ee,Q)=>Math.min(Q,Math.max(ee,O)),f=(O,ee,Q,oe)=>O+(ee-O)*(1-Math.exp(-Q*oe)),h=O=>((O+180)%360+360)%360-180;function p(O,ee){const Q=document.createElement("canvas");Q.width=Q.height=O;const oe=Q.getContext("2d"),pe=oe.createRadialGradient(O/2,O/2,0,O/2,O/2,O/2);for(const[qe,Ve]of ee)pe.addColorStop(qe,Ve);oe.fillStyle=pe,oe.fillRect(0,0,O,O);const xe=new Pc(Q);return xe.colorSpace=bn,xe.needsUpdate=!0,xe}function _(){return p(96,[[0,"rgba(255,255,255,1)"],[.16,"rgba(214,238,255,0.9)"],[.4,"rgba(150,205,255,0.22)"],[1,"rgba(120,180,255,0)"]])}function v(){return p(512,[[0,"rgba(255,255,255,1)"],[.06,"rgba(255,252,240,0.99)"],[.12,"rgba(255,244,214,0.82)"],[.22,"rgba(255,231,188,0.35)"],[.4,"rgba(255,216,160,0.12)"],[.7,"rgba(255,206,150,0.03)"],[1,"rgba(255,200,140,0)"]])}function m(){return p(128,[[0,"rgba(255,255,255,1)"],[.09,"rgba(255,248,232,0.97)"],[.2,"rgba(255,214,150,0.42)"],[.46,"rgba(255,184,100,0.09)"],[1,"rgba(255,170,80,0)"]])}function d(O,ee){const pe=document.createElement("canvas");pe.width=640,pe.height=112;const xe=pe.getContext("2d");xe.clearRect(0,0,640,112),xe.textBaseline="middle",xe.textAlign="center";try{xe.letterSpacing="10px"}catch{}xe.font='500 44px "HarmonyOS Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif',xe.shadowColor="rgba(110,190,255,0.9)",xe.shadowBlur=14,xe.fillStyle="rgba(226,244,255,0.96)",xe.fillText(O+"  "+ee,640/2,112/2);const qe=new Pc(pe);return qe.colorSpace=bn,qe.needsUpdate=!0,qe}function w(O=512){const ee=O/2,Q=document.createElement("canvas");Q.width=O,Q.height=ee;const oe=Q.getContext("2d");oe.fillStyle="#8e98a8",oe.fillRect(0,0,O,ee);for(let qe=0;qe<26;qe++){const Ve=Math.random()*O,it=Math.random()*ee,ut=(.05+Math.random()*.16)*O,ht=oe.createRadialGradient(Ve,it,0,Ve,it,ut);ht.addColorStop(0,"rgba(70,78,92,0.35)"),ht.addColorStop(1,"rgba(70,78,92,0)"),oe.fillStyle=ht,oe.beginPath(),oe.arc(Ve,it,ut,0,Math.PI*2),oe.fill()}for(let qe=0;qe<190;qe++){const Ve=Math.random()*O,it=Math.random()*ee,ut=1+Math.pow(Math.random(),3)*12,ht=oe.createRadialGradient(Ve,it,0,Ve,it,ut);ht.addColorStop(0,"rgba(52,58,70,0.55)"),ht.addColorStop(.7,"rgba(120,128,142,0.35)"),ht.addColorStop(1,"rgba(190,198,210,0.12)"),oe.fillStyle=ht,oe.beginPath(),oe.arc(Ve,it,ut,0,Math.PI*2),oe.fill()}const pe=oe.getImageData(0,0,O,ee);for(let qe=0;qe<pe.data.length;qe+=4){const Ve=(Math.random()-.5)*16;pe.data[qe]=c(pe.data[qe]+Ve,0,255),pe.data[qe+1]=c(pe.data[qe+1]+Ve,0,255),pe.data[qe+2]=c(pe.data[qe+2]+Ve,0,255)}oe.putImageData(pe,0,0);const xe=new Pc(Q);return xe.colorSpace=bn,xe.needsUpdate=!0,xe}function A(O=1024,ee=512){const Q=document.createElement("canvas");Q.width=O,Q.height=ee;const oe=Q.getContext("2d"),pe=oe.createImageData(O,ee),xe=(ut,ht)=>{const Ft=Math.sin(ut*127.1+ht*311.7)*43758.5453;return Ft-Math.floor(Ft)},qe=ut=>ut*ut*(3-2*ut),Ve=(ut,ht)=>{const Ft=Math.floor(ut),Ot=Math.floor(ht),It=qe(ut-Ft),Ht=qe(ht-Ot),Wn=xe(Ft,Ot),Gt=xe(Ft+1,Ot),Cn=xe(Ft,Ot+1),Ar=xe(Ft+1,Ot+1);return Wn*(1-It)*(1-Ht)+Gt*It*(1-Ht)+Cn*(1-It)*Ht+Ar*It*Ht};for(let ut=0;ut<ee;ut++)for(let ht=0;ht<O;ht++){const Ft=ht/O,Ot=ut/ee;let It=0;It+=Ve(Ft*5,Ot*5)*.55,It+=Ve(Ft*11,Ot*11)*.27,It+=Ve(Ft*23,Ot*23)*.12,It+=Ve(Ft*47,Ot*47)*.06;const Ht=1-Math.pow(Math.abs(Ot-.5)*2,3)*.4;It*=Ht,It=Math.pow(It,1.55);const Wn=Math.round(c(It*1.5,0,1)*255),Gt=(ut*O+ht)*4;pe.data[Gt]=255,pe.data[Gt+1]=255,pe.data[Gt+2]=255,pe.data[Gt+3]=Wn}oe.putImageData(pe,0,0);const it=new Pc(Q);return it.needsUpdate=!0,it}function y(O){return new Promise((ee,Q)=>{const oe=new Image;oe.crossOrigin="anonymous",oe.onload=()=>ee(oe),oe.onerror=()=>Q(new Error("图片加载失败："+O)),oe.src=O})}async function H(O,ee=1024,Q=512){try{const oe=await y(O),pe=document.createElement("canvas");pe.width=ee,pe.height=Q;const xe=pe.getContext("2d",{willReadFrequently:!0});return xe.drawImage(oe,0,0,ee,Q),xe.getImageData(0,0,ee,Q)}catch(oe){return console.warn("[earth] 采样贴图加载失败",O,oe),null}}function N(O,ee,Q){if(!O)return 0;const oe=c(Math.floor(ee*O.width),0,O.width-1),xe=(c(Math.floor(Q*O.height),0,O.height-1)*O.width+oe)*4;return(O.data[xe]*.299+O.data[xe+1]*.587+O.data[xe+2]*.114)/255}let L=null,D,S,x=null,C=null,F,G=0,re=!1,le=null,J=null,te=null,W=null,_e=null,Ee=null,Ce=null,Ne=null,rt=null,ae=[],ge=[],Te=[],ve=[],Ue=[],De=[],je=null,b=null,P=null,j=null,T=null,ne=null,Y=null;const se=new k(-.62,.5,.6).normalize(),Z=new k,ue=new k;let X=0,M=0,g=Bo,I=0,q=0,U=Bo,R="chart",ce=0,me=0,de=0,He=0,fe=0,Me=!0,Fe=0,Le=0,Se=!1,Ke=0,$e=0,vt=60,B=0,be=0,ie=0,he=0;function Pe(O,ee){const Q=Mw,oe=[],pe=[],xe=[],qe=[];for(let ut=0;ut<Q;ut++){const ht=-90+(ut+.5)*180/Q,Ft=.5-ht/180,Ot=Math.cos(ht*l),It=Math.sin(ht*l),Ht=Math.max(3,Math.round(Q*2*Ot));for(let Wn=0;Wn<Ht;Wn++){const Gt=Wn/Ht,Cn=Gt*Math.PI*2;oe.push(Ot*Math.sin(Cn)*Os,It*Os,Ot*Math.cos(Cn)*Os);const Ar=N(O,Gt,Ft),$i=c(1-Ar,0,1);pe.push($i>.55?1:$i<.42?0:($i-.42)/.13);const Fa=N(ee,Gt,Ft);xe.push(Fa>.055?c((Fa-.055)*2.4,0,1):0),qe.push(Math.random())}}const Ve=new An;Ve.setAttribute("position",new Xt(oe,3)),Ve.setAttribute("aLand",new Xt(pe,1)),Ve.setAttribute("aNight",new Xt(xe,1)),Ve.setAttribute("aSeed",new Xt(qe,1)),le=new sn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{uSunDir:{value:se.clone()},uPointScale:{value:1e3},uPointSize:{value:.0116},uTime:{value:0},uOpacity:{value:1},uLandColor:{value:new Ze(u.land)},uOceanColor:{value:new Ze(u.ocean)},uCityColor:{value:new Ze(u.city)},uRimColor:{value:new Ze(u.rim)}},vertexShader:`
      uniform vec3 uSunDir;
      uniform float uPointScale;
      uniform float uPointSize;
      uniform float uOpacity;
      attribute float aLand;
      attribute float aNight;
      attribute float aSeed;
      varying float vLand;
      varying float vNight;
      varying float vDay;
      varying float vRim;
      varying float vSeed;
      varying float vFade;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        vec3 n = normalize(position);
        float d = dot(n, uSunDir);
        float day = smoothstep(-0.18, 0.42, d);
        float night = 1.0 - smoothstep(-0.05, 0.45, d);
        vec3 vn = normalize(normalMatrix * n);
        float rim = pow(1.0 - abs(vn.z), 2.2);
        float size = uPointSize * (0.78 + 0.5 * aSeed);
        gl_PointSize = size * uPointScale / max(-mv.z, 0.001);
        vLand = aLand;
        vNight = aNight * night;
        vDay = day;
        vRim = rim;
        vSeed = aSeed;
        vFade = uOpacity;
      }
    `,fragmentShader:`
      uniform vec3 uLandColor;
      uniform vec3 uOceanColor;
      uniform vec3 uCityColor;
      uniform vec3 uRimColor;
      uniform float uTime;
      varying float vLand;
      varying float vNight;
      varying float vDay;
      varying float vRim;
      varying float vSeed;
      varying float vFade;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float d = length(p);
        if (d > 0.5) discard;
        float core = smoothstep(0.5, 0.10, d);
        float twinkle = 0.86 + 0.14 * sin(uTime * 1.6 + vSeed * 31.0);
        vec3 landC = uLandColor * (0.22 + 1.02 * vDay);
        vec3 oceanC = uOceanColor * (0.42 + 0.85 * vDay);
        vec3 col = mix(oceanC, landC, vLand);
        col += uCityColor * vNight * 1.7;
        col += uRimColor * vRim * 0.4;
        float alpha = core * vFade * twinkle;
        if (alpha < 0.004) discard;
        gl_FragColor = vec4(col, alpha);
      }
    `});const it=new qg(Ve,le);return it.renderOrder=12,it.frustumCulled=!1,it}function Re(O,ee,Q,oe){J=new sn({transparent:!0,depthWrite:!0,uniforms:{uDay:{value:O},uNight:{value:ee},uClouds:{value:Q},uWater:{value:oe},uSunDir:{value:se.clone()},uOpacity:{value:0},uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldN;
      varying vec3 vViewN;
      varying vec3 vViewDir;
      void main() {
        vUv = uv;
        vWorldN = normalize(mat3(modelMatrix) * normal);
        vViewN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vViewDir = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform sampler2D uDay;
      uniform sampler2D uNight;
      uniform sampler2D uClouds;
      uniform sampler2D uWater;
      uniform vec3 uSunDir;
      uniform float uOpacity;
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vWorldN;
      varying vec3 vViewN;
      varying vec3 vViewDir;
      void main() {
        if (uOpacity < 0.01) discard;
        vec3 n = normalize(vWorldN);
        float d = dot(n, uSunDir);
        float day = smoothstep(-0.25, 0.55, d);
        float fres = pow(1.0 - clamp(dot(normalize(vViewN), normalize(vViewDir)), 0.0, 1.0), 2.6);
        vec3 dayRgb = texture2D(uDay, vUv).rgb;
        float dlum = dot(dayRgb, vec3(0.2126, 0.7152, 0.0722));
        float wl = dot(texture2D(uWater, vUv).rgb, vec3(0.299, 0.587, 0.114));
        float landM = smoothstep(0.38, 0.52, 1.0 - wl);
        vec3 oceanC = vec3(0.0016, 0.007, 0.028);
        vec3 landC = vec3(0.34, 0.47, 0.68) * (0.62 + 0.85 * dlum);
        vec3 base = mix(oceanC, landC, landM) * (0.04 + 1.0 * day);
        float nightA = texture2D(uNight, vUv).r;
        vec3 lamp = vec3(1.0, 0.56, 0.22) * pow(nightA, 0.35) * (1.0 - day) * 3.2;
        float cloudA = texture2D(uClouds, vUv + vec2(uTime * 0.0015, 0.0)).a * 0.8;
        vec3 cloud = vec3(0.52, 0.68, 0.96) * cloudA * (0.015 + 0.26 * day);
        vec3 rim = vec3(0.16, 0.42, 1.0) * fres * (0.22 + 0.70 * day);
        vec3 col = base + lamp + cloud + rim + vec3(0.003, 0.007, 0.018);
        gl_FragColor = vec4(col, uOpacity);
      }
    `});const pe=new Fn(new qs(Os*.998,96,64),J);return pe.renderOrder=10,pe}function st(O){te=new Al({map:O,transparent:!0,opacity:0,depthWrite:!1,blending:li,color:new Ze(12575999)});const ee=new Fn(new qs(Os*1.012,64,48),te);return ee.renderOrder=11,ee}function Bt(){W=new sn({transparent:!0,depthWrite:!1,side:Zn,blending:li,uniforms:{uColor:{value:new Ze(4168703)},uOpacity:{value:1}},vertexShader:`
      varying float vI;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        vec3 vd = normalize(-mv.xyz);
        vI = pow(1.0 - abs(dot(n, vd)), 3.1);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vI;
      void main() {
        float a = vI * uOpacity;
        if (a < 0.002) discard;
        gl_FragColor = vec4(uColor * vI * 1.9, a * 0.95);
      }
    `});const O=new Fn(new qs(Os*1.06,72,48),W);return O.renderOrder=20,O}function mn(){const O=Sw,ee=new Float32Array(O*3),Q=new Float32Array(O*3),oe=new Float32Array(O),pe=new Float32Array(O),xe=[new Ze(16777215),new Ze(13624575),new Ze(16771528),new Ze(10470655)];for(let it=0;it<O;it++){const ut=Math.random()*2-1,ht=Math.random()*Math.PI*2,Ft=Math.sqrt(1-ut*ut),Ot=34+Math.random()*12;ee[it*3]=Math.cos(ht)*Ft*Ot,ee[it*3+1]=ut*Ot,ee[it*3+2]=Math.sin(ht)*Ft*Ot;const It=xe[Math.floor(Math.random()*xe.length)];Q[it*3]=It.r,Q[it*3+1]=It.g,Q[it*3+2]=It.b,oe[it]=.7+Math.pow(Math.random(),2.4)*2.6,pe[it]=Math.random()}const qe=new An;qe.setAttribute("position",new Tn(ee,3)),qe.setAttribute("aColor",new Tn(Q,3)),qe.setAttribute("aSize",new Tn(oe,1)),qe.setAttribute("aSeed",new Tn(pe,1)),ne=new sn({transparent:!0,depthWrite:!1,blending:li,uniforms:{uPixelRatio:{value:1},uTime:{value:0},uOpacity:{value:1}},vertexShader:`
      attribute vec3 aColor;
      attribute float aSize;
      attribute float aSeed;
      uniform float uPixelRatio;
      uniform float uTime;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uPixelRatio * 1.4;
        vColor = aColor;
        float tw = 0.72 + 0.28 * sin(uTime * (0.6 + aSeed * 1.4) + aSeed * 42.0);
        vAlpha = tw;
      }
    `,fragmentShader:`
      uniform float uOpacity;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float d = length(p) * 2.0;
        if (d > 1.0) discard;
        float a = pow(1.0 - d, 2.2) * vAlpha * uOpacity;
        gl_FragColor = vec4(vColor, a);
      }
    `});const Ve=new qg(qe,ne);return Ve.renderOrder=0,Ve}function yt(){const O=v();Ee=null;const ee=new Gs({map:O,transparent:!0,depthWrite:!1,depthTest:!0,blending:li,color:16776175,opacity:1}),Q=new Oo(ee);return Q.scale.setScalar(.62),Q.renderOrder=30,Q}function ni(){const O=new zr,ee=w(512),Q=new ZA({map:ee,roughness:.92,metalness:.02,bumpMap:ee,bumpScale:.6,color:12174034}),oe=new Fn(new qs(.28,48,32),Q);oe.renderOrder=25,O.add(oe);const pe=new Oo(new Gs({map:_(),color:13624063,transparent:!0,opacity:.5,depthWrite:!1,blending:li}));return pe.scale.setScalar(1.1),O.add(pe),O}function Fi(){const O=new hp(1.62,2.36,220,1);_e=new sn({transparent:!0,depthWrite:!1,side:ar,uniforms:{uInner:{value:1.62},uOuter:{value:2.36},uColor:{value:new Ze(u.ringBand)},uEdgeColor:{value:new Ze(u.ringEdge)},uOpacity:{value:1}},vertexShader:`
      varying float vR;
      void main() {
        vR = length(position.xy);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uInner;
      uniform float uOuter;
      uniform vec3 uColor;
      uniform vec3 uEdgeColor;
      uniform float uOpacity;
      varying float vR;
      void main() {
        float t = clamp((vR - uInner) / (uOuter - uInner), 0.0, 1.0);
        float innerFade = smoothstep(0.0, 0.08, t);
        float outerFade = 1.0 - smoothstep(0.86, 1.0, t);
        float grain = 0.85 + 0.15 * sin(vR * 120.0);
        float a = 0.26 * innerFade * outerFade * grain;
        vec3 col = mix(uColor, uColor * 2.2, smoothstep(0.35, 1.0, t));
        float edgeOut = exp(-pow((t - 1.0) / 0.03, 2.0));
        float edgeIn = exp(-pow((t - 0.015) / 0.025, 2.0));
        col += uEdgeColor * (edgeOut * 0.7 + edgeIn * 0.28);
        a += edgeOut * 0.38 * innerFade + edgeIn * 0.12;
        gl_FragColor = vec4(col, a * uOpacity);
      }
    `});const ee=new Fn(O,_e);return ee.renderOrder=1,ee}function ql(){const O=new Gs({map:p(256,[[0,"rgba(70,150,255,0.05)"],[.3,"rgba(60,130,235,0.09)"],[.5,"rgba(45,105,205,0.10)"],[.72,"rgba(30,80,170,0.04)"],[1,"rgba(20,60,140,0)"]]),transparent:!0,depthWrite:!1,depthTest:!0,blending:li,opacity:.9});Ee=O;const ee=new Oo(O);return ee.scale.setScalar(3),ee.renderOrder=-1,ee}function Yl(){Ce=new zr;const O=m();for(let ee=0;ee<er.length;ee++){const Q=er[ee],oe=new k(...$a(Q)),pe=new Gs({map:O,transparent:!0,depthWrite:!1,depthTest:!0,blending:li,color:new Ze(Q.major?16774882:16767398),opacity:0}),xe=new Oo(pe),qe=Q.major?.062:.04;xe.scale.setScalar(qe),xe.position.copy(oe).multiplyScalar(1.004),xe.renderOrder=13,xe.userData.dir=oe,Ce.add(xe),ae.push(xe)}}function br(){Ne=new zr;for(const O of as){const ee=er[O],Q=new k(...$a(ee)),oe=d(ee.cn,ee.en),pe=new Gs({map:oe,transparent:!0,depthWrite:!1,depthTest:!0,opacity:0}),xe=new Oo(pe);xe.scale.set(.44,.077,1),xe.position.copy(Q).multiplyScalar(1.035),xe.renderOrder=14,Ne.add(xe),ge.push({sprite:xe,dir:Q.clone()})}}function Ia(O,ee,Q=64){const oe=new k().crossVectors(O,ee);oe.lengthSq()<1e-8&&oe.set(0,1,0),oe.normalize();const pe=O.angleTo(ee),xe=Math.min(.165,.05+pe*.13),qe=[];for(let Ve=0;Ve<=Q;Ve++){const it=Ve/Q,ut=O.clone().applyAxisAngle(oe,pe*it);ut.multiplyScalar(1+Math.sin(Math.PI*it)*xe),qe.push(ut)}return qe}function Kl(O){O&&(O.traverse(ee=>{const Q=ee;Q.geometry&&Q.geometry.dispose();const oe=ee.material;Array.isArray(oe)?oe.forEach(pe=>pe.dispose()):oe&&oe.dispose()}),O.clear())}function $l(){if(!rt)return;Kl(rt),ve=[],Te=[],Ue=[];const O=er[as[de]];if(!O)return;const ee=new k(...$a(O)),Q=as[de],oe=er.map((Ve,it)=>({i:it,d:ee.angleTo(new k(...$a(Ve)))})).filter(Ve=>Ve.i!==Q).sort((Ve,it)=>Ve.d-it.d),pe=[];for(const Ve of as)Ve!==Q&&!pe.includes(Ve)&&pe.push(Ve);for(const Ve of oe){if(pe.length>=20)break;pe.includes(Ve.i)||pe.push(Ve.i)}const xe=new Ze(u.arc),qe=m();for(const Ve of pe){const it=er[Ve],ut=new k(...$a(it)),ht=Ia(ee,ut),Ft=[],Ot=[];for(let Cn=0;Cn<ht.length;Cn++){const Ar=Cn/(ht.length-1),$i=Math.pow(Math.sin(Math.PI*Ar),.6)*.9+.08;Ft.push(ht[Cn].x,ht[Cn].y,ht[Cn].z),Ot.push(xe.r*$i,xe.g*$i,xe.b*$i)}const It=new An;It.setAttribute("position",new Xt(Ft,3)),It.setAttribute("color",new Xt(Ot,3));const Ht=new xd({vertexColors:!0,transparent:!0,opacity:.8,blending:li,depthWrite:!1}),Wn=new ov(It,Ht);Wn.renderOrder=15,Wn.userData.targetDir=ut.clone(),rt.add(Wn),Te.push(Wn),ve.push(new KA(ht));const Gt=new Oo(new Gs({map:qe,color:14086911,transparent:!0,opacity:.85,depthWrite:!1,blending:li}));Gt.scale.setScalar(.035),Gt.renderOrder=16,Gt.userData.t=Math.random(),Gt.userData.speed=.18+Math.random()*.22,rt.add(Gt),Ue.push(Gt)}}let Tr=null,go=0;function _o(){b=new Float32Array(Ic*2*3),P=new Float32Array(Ic*2*3),je=new An,je.setAttribute("position",new Tn(b,3)),je.setAttribute("color",new Tn(P,3));const O=new xd({vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:li});return Tr=new jA(je,O),Tr.frustumCulled=!1,Tr.renderOrder=2,Tr}function Ua(){if(De.length>=Ic)return;const O=-10-Math.random()*7,ee=.768*Math.abs(O),Q=(Math.random()*2-1)*ee*.9,oe=(Math.random()*1.7-.4)*ee*.5,pe=Math.PI*(.62+Math.random()*.3),xe=new k(Math.cos(pe),Math.sin(pe)*.9,0).normalize();De.push({head:new k(Q,oe,O),dir:xe,len:.2+Math.random()*.42,speed:1.4+Math.random()*1.6,t:0,life:1.4+Math.random()*1.2})}function Zl(O){if(!je||!b||!P)return;go-=O,go<=0&&(Ua(),go=.26+Math.random()*.6-ce*.12);for(let oe=De.length-1;oe>=0;oe--){const pe=De[oe];pe.t+=O,pe.head.addScaledVector(pe.dir,pe.speed*O),pe.t>pe.life&&De.splice(oe,1)}b.fill(0),P.fill(0);for(let oe=0;oe<Ic;oe++){const pe=De[oe];if(!pe)continue;const xe=Math.sin(Math.PI*c(pe.t/pe.life,0,1)),qe=pe.head.clone().addScaledVector(pe.dir,-pe.len);b[oe*6]=pe.head.x,b[oe*6+1]=pe.head.y,b[oe*6+2]=pe.head.z,b[oe*6+3]=qe.x,b[oe*6+4]=qe.y,b[oe*6+5]=qe.z,P[oe*6]=1*xe,P[oe*6+1]=.93*xe,P[oe*6+2]=.8*xe,P[oe*6+3]=.12*xe,P[oe*6+4]=.22*xe,P[oe*6+5]=.42*xe}const ee=je.getAttribute("position"),Q=je.getAttribute("color");ee.needsUpdate=!0,Q.needsUpdate=!0,je.setDrawRange(0,De.length*2)}async function Na(O,ee=!0){try{const Q=await new tw().loadAsync(O);return Q.colorSpace=ee?bn:kr,Q.anisotropy=L?Math.min(8,L.capabilities.getMaxAnisotropy()):1,Q.needsUpdate=!0,Q}catch(Q){return console.warn("[earth] 贴图加载失败",O,Q),null}}const uf=new k(.52,.46,.72).normalize();async function ff(){const O=o.value;if(!O)return;let ee;try{ee=new GA({canvas:O,antialias:!0,powerPreference:"high-performance"})}catch(As){console.error("[earth] WebGL 初始化失败",As),a.value="当前浏览器无法初始化 WebGL";return}L=ee,ee.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ee.outputColorSpace=bn,ee.toneMapping=ep,ee.toneMappingExposure=1.04,D=new WA,D.background=new Ze(u.background),S=new wi(lh,1,.05,240),S.position.set(0,0,Bo),D.add(S),F=new lv,Y=new rw(16774108,2.6),Y.position.copy(se).multiplyScalar(12),D.add(Y),D.add(new sw(2244718,1.15));const[Q,oe,pe,xe,qe]=await Promise.all([H(i("/textures/earth-water.png")),H(i("/textures/earth-night.jpg")),Na(i("/textures/earth-day.jpg")),Na(i("/textures/earth-night.jpg")),Na(i("/textures/earth-water.png"),!1)]);if(re)return;const Ve=A(),it=new zr,ut=new Fn(new qs(Os*.982,64,48),new Al({color:198415}));ut.renderOrder=9,it.add(ut);const ht=Re(pe,xe,Ve,qe),Ft=st(Ve),Ot=Bt(),It=Pe(Q,oe);it.add(ht),it.add(Ft),it.add(Ot),it.add(It);const Ht=(new URLSearchParams(window.location.search).get("hide")??"").split(",").filter(Boolean);Ht.includes("clouds")&&(Ft.visible=!1),Ht.includes("atmos")&&(Ot.visible=!1),Ht.includes("dots")&&(It.visible=!1),Ht.includes("glossy")&&(ht.visible=!1),Ht.includes("cities")&&(Ce&&(Ce.visible=!1),Ne&&(Ne.visible=!1)),Yl(),Ce&&it.add(Ce),br(),Ne&&it.add(Ne),rt=new zr,it.add(rt),D.add(it);const Wn=mn();Ht.includes("stars")&&(Wn.visible=!1),D.add(Wn),j=yt(),j.scale.setScalar(.5),j.visible=!Ht.includes("sun"),S.add(j),T=ni(),T.scale.setScalar(.8),T.visible=!Ht.includes("moon"),S.add(T);const Gt=Fi();Ht.includes("ring")&&(Gt.visible=!1),Gt.position.set(0,0,-7),Gt.rotation.x=1.28,Gt.rotation.z=-.1,S.add(Gt);const Cn=ql();Ht.includes("halo")&&(Cn.visible=!1),Cn.scale.setScalar(4.2),Cn.position.set(0,0,-7.4),S.add(Cn),S.add(_o()),x=new fw(ee),x.addPass(new hw(D,S)),C=new sa(new Qe(1,1),.62,.5,.62),Ht.includes("bloom")||x.addPass(C),x.addPass(new mw);const Ar=new URLSearchParams(window.location.search);Ar.get("mode")==="meteor"&&(R="meteor",me=1,ce=1),Ar.get("demo")==="0"&&(Me=!1);let $i=0;const Fa=Ar.get("city");if(Fa){const As=_w(Fa),Oa=As>=0?as.indexOf(As):-1;Oa>=0&&($i=Oa)}At(),K($i,!0);for(let As=0;As<9;As++){Ua();const Oa=De[De.length-1];Oa&&(Oa.t=Math.random()*.9)}z(),ft(),Tt()}function E(){if(!S)return;const O=Math.tan(lh*.5*l),ee=S.aspect||1.6,Q=(oe,pe,xe)=>new k(oe*O*ee*xe,pe*O*xe,-xe);j&&j.position.copy(Q(-.68,.58,2.6)),T&&T.position.copy(Q(.66,-.58,5.6))}function z(){if(!S)return;const O=Math.cos(M);S.position.set(g*O*Math.sin(X),g*Math.sin(M),g*O*Math.cos(X)),S.lookAt(0,-.04,0),S.updateMatrixWorld(!0),se.copy(uf).applyQuaternion(S.quaternion).normalize(),Y&&Y.position.copy(se).multiplyScalar(12)}function $(O,ee){let Q=(ee-O)%(Math.PI*2);return Q>Math.PI&&(Q-=Math.PI*2),Q<-Math.PI&&(Q+=Math.PI*2),O+Q}function K(O,ee=!1){const Q=as.length;if(Q===0)return;de=(O%Q+Q)%Q;const oe=er[as[de]];if(!oe)return;const pe=oe.lon*l,xe=c(oe.lat*l*.9,-1.1,1.1);ee?(I=pe,X=pe,q=xe,M=xe,U=Bo,g=Bo):(I=$(I,pe),q=xe),He=0,fe=performance.now(),$l()}function V(){K(de+1)}function ye(){K(de-1)}function Ae(O){R=O,me=O==="meteor"?1:0,fe=performance.now()}function Be(){return r.detected?R==="meteor"?"握持":r.spread>.72?"张开":r.spread<.34?"握拳":Math.hypot(r.palmVel.x,r.palmVel.y)>.22?"挥动":"悬停":"待启动"}function ke(O){if(r.detected){U=c(Dc-(r.pinch-.06)*(Dc-ch)*1.02,ch,Dc);const ee=r.palmVel.x,Q=r.palmVel.y;Math.hypot(ee,Q)>.05&&(I-=ee*O*5.2,q=c(q-Q*O*3.2,-1.15,1.15),fe=performance.now()),Fe=r.spread<.3?Fe+O:0,Le=r.spread>.8?Le+O:0,Fe>.28&&R!=="meteor"&&Ae("meteor"),Le>.28&&R!=="chart"&&Ae("chart")}else Fe=0,Le=0}function nt(O){if(R!=="chart"||!Me)return;if(Se||performance.now()-fe<2600){He=0;return}He+=O;const ee=r.detected?yw:5.2;He>ee&&V()}function ot(O){ce=f(ce,me,2.2,O);const ee=1-ce;if(le&&(le.uniforms.uTime.value=he,le.uniforms.uOpacity.value=ee,le.uniforms.uSunDir.value.copy(se)),J&&(J.uniforms.uTime.value=he,J.uniforms.uOpacity.value=ce,J.uniforms.uSunDir.value.copy(se)),te&&(te.opacity=ce*.09),W&&(W.uniforms.uOpacity.value=.32+ce*1),_e&&(_e.uniforms.uOpacity.value=.95+ce*.45),Ee&&(Ee.opacity=.42+ce*.6),C&&(C.strength=.62+ce*.35,C.threshold=.62+ce*.3),ne&&(ne.uniforms.uTime.value=he,ne.uniforms.uOpacity.value=.9),j){const Q=.5+Math.sin(he*1.7)*.01;j.scale.setScalar(Q)}if(S){ue.copy(S.position).normalize();for(const Q of ae){const pe=Q.userData.dir.dot(ue),xe=Q.material;xe.opacity=c((pe-.05)*2.4,0,1)*.95*ee}for(let Q=0;Q<ge.length;Q++){const oe=ge[Q],pe=oe.dir.dot(ue),xe=oe.sprite.material;Z.copy(oe.sprite.position).project(S);const qe=Z.x>-.5&&Z.x<.8&&Z.y>-.6&&Z.y<.72,Ve=pe>.26&&qe?1:0;xe.opacity=c((pe-.26)*3.2,0,1)*.85*ee*Ve}}if(rt){rt.visible=ee>.02,S&&ue.copy(S.position).normalize();for(const Q of Te){const oe=Q.userData.targetDir,pe=oe?oe.dot(ue):1,xe=c((pe-.02)*4.5,0,1);Q.material.opacity=.85*ee*xe,Q.visible=xe>.03}}}function ze(O){for(let ee=0;ee<Ue.length;ee++){const Q=Ue[ee],oe=ve[ee];if(!oe)continue;const pe=(Q.userData.t+O*Q.userData.speed)%1;Q.userData.t=pe,oe.getPointAt(pe,Z),Q.position.copy(Z);const xe=Te[ee],qe=xe?xe.visible:!0;Q.material.opacity=Math.pow(Math.sin(Math.PI*pe),1.1)*.9*(1-ce)*(qe?1:0),Q.visible=qe}}function ft(){const O=new Date,ee=as[de]??0,Q=er[ee];s("telemetry",{mode:R,modeCn:R==="chart"?"制图":"流星雨",modeEn:R==="chart"?"CHART":"METEOR SHOWER",city:Q?{cn:Q.cn,en:Q.en,tag:Q.tag??"",lon:Q.lon,lat:Q.lat,index:ee}:null,lon:h(X/l),lat:M/l,distance:Math.round(1.9*(Bo/g)*100)/100,fps:Math.round(vt),gesture:Be(),focus:R==="meteor"?"流星雨":Q?Q.cn:"地球",cities:13414,satellites:1144,zones:1,rangeKm:384400,signal:74+Math.round(3*Math.sin(he*.7)),date:`${O.getFullYear()}-${String(O.getMonth()+1).padStart(2,"0")}-${String(O.getDate()).padStart(2,"0")}`})}function Tt(){if(re)return;G=requestAnimationFrame(Tt);const O=Math.min(F.getDelta(),.06);he+=O,B++,be+=O,be>=.5&&(vt=vt*.35+B/be*.65,B=0,be=0),ke(O),X=f(X,I,2.6,O),M=f(M,q,2.6,O),g=f(g,U,3.4,O),z(),nt(O),ot(O),ze(O),Zl(O),ie+=O,ie>.28&&(ie=0,ft()),x?x.render():L&&L.render(D,S)}function At(){const O=o.value;if(!O||!L||!S)return;const ee=O.clientWidth||window.innerWidth,Q=O.clientHeight||window.innerHeight;L.setSize(ee,Q,!1),S.aspect=ee/Q,S.updateProjectionMatrix(),x==null||x.setSize(ee,Q),C==null||C.setSize(ee,Q),le&&(le.uniforms.uPointScale.value=Q*.5/Math.tan(lh*.5*l)),ne&&(ne.uniforms.uPixelRatio.value=L.getPixelRatio()),E()}function Mn(O){const ee=o.value;if(ee){Se=!0,Ke=O.clientX,$e=O.clientY,fe=performance.now();try{ee.setPointerCapture(O.pointerId)}catch{}}}function mt(O){if(!Se)return;const ee=O.clientX-Ke,Q=O.clientY-$e;Ke=O.clientX,$e=O.clientY,I-=ee*.0048,q=c(q+Q*.0034,-1.2,1.2),fe=performance.now()}function Oe(){Se=!1}function vi(O){O.preventDefault(),U=c(U+O.deltaY*.0022,ch,Dc),fe=performance.now()}function gt(O){O.key==="m"||O.key==="M"?Ae(R==="chart"?"meteor":"chart"):O.key==="ArrowRight"?V():O.key==="ArrowLeft"?ye():O.key===" "&&(O.preventDefault(),Ae(R==="chart"?"meteor":"chart"))}let Jn=!1;function Qr(){if(Jn)return;Jn=!0,window.addEventListener("resize",At),window.addEventListener("keydown",gt);const O=o.value;O&&(O.addEventListener("pointerdown",Mn),O.addEventListener("pointermove",mt),O.addEventListener("pointerup",Oe),O.addEventListener("pointercancel",Oe),O.addEventListener("wheel",vi,{passive:!1}))}function Gn(){window.removeEventListener("resize",At),window.removeEventListener("keydown",gt);const O=o.value;O&&(O.removeEventListener("pointerdown",Mn),O.removeEventListener("pointermove",mt),O.removeEventListener("pointerup",Oe),O.removeEventListener("pointercancel",Oe),O.removeEventListener("wheel",vi))}function Ts(O){if(!O)return;const ee=new Set,Q=new Set;O.traverse(oe=>{const pe=oe;pe.geometry&&pe.geometry.dispose();const xe=oe.material,qe=Array.isArray(xe)?xe:xe?[xe]:[];for(const Ve of qe)ee.add(Ve)});for(const oe of ee){const pe=oe;for(const qe of["map","alphaMap","uDay","uNight","uClouds"]){const Ve=pe[qe];Ve instanceof yn&&Q.add(Ve)}const xe=oe.uniforms;if(xe)for(const qe of Object.values(xe)){const Ve=qe.value;Ve instanceof yn&&Q.add(Ve)}}Q.forEach(oe=>oe.dispose()),ee.forEach(oe=>oe.dispose())}function Pt(){re||(re=!0,cancelAnimationFrame(G),Gn(),Ts(D),xi(),x==null||x.dispose(),x=null,C=null,L==null||L.dispose(),L=null,ae=[],ge=[],Te=[],ve=[],Ue=[],De=[])}function xi(){je=null,b=null,P=null}return e({setMode:Ae,nextCity:V,prevCity:ye}),Lu(()=>{Qr(),ff()}),Du(()=>{Pt()}),(O,ee)=>(vn(),Sn("div",vw,[tt("canvas",{ref_key:"canvasRef",ref:o,class:"earth-canvas"},null,512),a.value?(vn(),Sn("div",xw,Ti(a.value),1)):Wo("",!0)]))}}),uv=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},bw=uv(Ew,[["__scopeId","data-v-d08dbcee"]]);var oa=typeof self<"u"?self:{};function fv(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=oa,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function Bs(){throw Error("Invalid UTF8")}function e0(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Uc,uh;const Tw=typeof TextDecoder<"u";let Aw;const ww=typeof TextEncoder<"u";function hv(t){if(ww)t=(Aw||(Aw=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function dv(t){oa.setTimeout((()=>{throw t}),0)}var Md,Cw=fv(610401301,!1),t0=fv(748402147,!0);function n0(){var t=oa.navigator;return t&&(t=t.userAgent)?t:""}const i0=oa.navigator;function zu(t){return zu[" "](t),t}Md=i0&&i0.userAgentData||null,zu[" "]=function(){};const pv={};let nl=null;function Rw(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,o){function a(u){for(;l<s.length;){const c=s.charAt(l++),f=nl[c];if(f!=null)return f;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c)}return u}mv();let l=0;for(;;){const u=a(-1),c=a(0),f=a(64),h=a(64);if(h===64&&u===-1)break;o(u<<2|c>>4),f!=64&&(o(c<<4&240|f>>2),h!=64&&o(f<<6&192|h))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function mv(){if(!nl){nl={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));pv[n]=i;for(let r=0;r<i.length;r++){const s=i[r];nl[s]===void 0&&(nl[s]=r)}}}}var Pw=typeof Uint8Array<"u",gv=!(!(Cw&&Md&&Md.brands.length>0)&&(n0().indexOf("Trident")!=-1||n0().indexOf("MSIE")!=-1))&&typeof btoa=="function";const r0=/[-_.]/g,Lw={"-":"+",_:"/",".":"="};function Dw(t){return Lw[t]||""}function _v(t){if(!gv)return Rw(t);t=r0.test(t)?t.replace(r0,Dw):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function mp(t){return Pw&&t!=null&&t instanceof Uint8Array}var aa={};function lo(){return Iw||(Iw=new hr(null,aa))}function gp(t){vv(aa);var e=t.g;return(e=e==null||mp(e)?e:typeof e=="string"?_v(e):null)==null?e:t.g=e}var hr=class{h(){return new Uint8Array(gp(this)||0)}constructor(t,e){if(vv(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Iw,Uw;function vv(t){if(t!==aa)throw Error("illegal external caller")}function xv(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Sd(t){return xv(t=Error(t),"warning"),t}function la(t,e){if(t!=null){var n=Uw??(Uw={}),i=n[t]||0;i>=e||(n[t]=i+1,xv(t=Error(),"incident"),dv(t))}}function Ma(){return typeof BigInt=="function"}var Sa=typeof Symbol=="function"&&typeof Symbol()=="symbol";function xr(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Nw=xr("jas",void 0,!0),s0=xr(void 0,"0di"),Za=xr(void 0,"1oa"),fi=xr(void 0,Symbol()),Fw=xr(void 0,"0ub"),Ow=xr(void 0,"0ubs"),Ed=xr(void 0,"0ubsb"),Bw=xr(void 0,"0actk"),ca=xr("m_m","Pa",!0),o0=xr();const yv={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Mv=Object.defineProperties,Ge=Sa?Nw:"Ga";var ho;const a0=[];function kl(t,e){Sa||Ge in t||Mv(t,yv),t[Ge]|=e}function pn(t,e){Sa||Ge in t||Mv(t,yv),t[Ge]=e}function zl(t){return kl(t,34),t}function Cl(t){return kl(t,8192),t}pn(a0,7),ho=Object.freeze(a0);var ua={};function di(t,e){return e===void 0?t.h!==co&&!!(2&(0|t.v[Ge])):!!(2&e)&&t.h!==co}const co={};function _p(t,e){if(t!=null){if(typeof t=="string")t=t?new hr(t,aa):lo();else if(t.constructor!==hr)if(mp(t))t=t.length?new hr(new Uint8Array(t),aa):lo();else{if(!e)throw Error();t=void 0}}return t}class l0{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var kw=Object.freeze({});function Sv(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const o=r+(s?-1:0);for(e=128&e?1:0;e<o;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const a in t)!isNaN(a)&&n(+a,t[a])}}var Ev={};function Ea(t){return 128&t?Ev:void 0}function Vu(t){return t.Na=!0,t}var zw=Vu((t=>typeof t=="number")),c0=Vu((t=>typeof t=="string")),Vw=Vu((t=>typeof t=="boolean")),Hu=typeof oa.BigInt=="function"&&typeof oa.BigInt(0)=="bigint";function hi(t){var e=t;if(c0(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(zw(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Hu?BigInt(t):t=Vw(t)?t?"1":"0":c0(t)?t.trim()||"0":String(t)}var bd=Vu((t=>Hu?t>=Gw&&t<=Xw:t[0]==="-"?u0(t,Hw):u0(t,Ww)));const Hw=Number.MIN_SAFE_INTEGER.toString(),Gw=Hu?BigInt(Number.MIN_SAFE_INTEGER):void 0,Ww=Number.MAX_SAFE_INTEGER.toString(),Xw=Hu?BigInt(Number.MAX_SAFE_INTEGER):void 0;function u0(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const jw=typeof Uint8Array.prototype.slice=="function";let qw,Wt=0,rn=0;function f0(t){const e=t>>>0;Wt=e,rn=(t-e)/4294967296>>>0}function fa(t){if(t<0){f0(-t);const[e,n]=yp(Wt,rn);Wt=e>>>0,rn=n>>>0}else f0(t)}function vp(t){const e=qw||(qw=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),rn=0,Wt=e.getUint32(0,!0)}function bv(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Rl(t,e)}function Yw(t,e){return hi(Ma()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Rl(t,e))}function Tv(t,e){return Ma()?hi(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):hi(xp(t,e))}function Rl(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Ma()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+h0(n)+h0(t));return n}function h0(t){return t=String(t),"0000000".slice(t.length)+t}function xp(t,e){if(2147483648&e)if(Ma())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=yp(t,e);t="-"+Rl(n,i)}else t=Rl(t,e);return t}function Gu(t){if(t.length<16)fa(Number(t));else if(Ma())t=BigInt(t),Wt=Number(t&BigInt(4294967295))>>>0,rn=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");rn=Wt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));rn*=1e6,Wt=1e6*Wt+s,Wt>=4294967296&&(rn+=Math.trunc(Wt/4294967296),rn>>>=0,Wt>>>=0)}if(e){const[i,r]=yp(Wt,rn);Wt=i,rn=r}}}function yp(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function ji(t){return Array.prototype.slice.call(t)}const Vl=typeof BigInt=="function"?BigInt.asIntN:void 0,Kw=typeof BigInt=="function"?BigInt.asUintN:void 0,uo=Number.isSafeInteger,Wu=Number.isFinite,ha=Math.trunc,$w=hi(0);function il(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function ur(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Pl(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Av(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const Zw=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Hl(t){switch(typeof t){case"bigint":return!0;case"number":return Wu(t);case"string":return Zw.test(t);default:return!1}}function ba(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Wu(t)?0|t:void 0}function wv(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Wu(t)?t>>>0:void 0}function Cv(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Gu(t),xp(Wt,rn))}function Mp(t){if(t=ha(t),!uo(t)){fa(t);var e=Wt,n=rn;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=bv(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function Rv(t){var e=ha(Number(t));return uo(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Cv(t))}function Pv(t){var e=ha(Number(t));return uo(e)?hi(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Ma()?hi(Vl(64,BigInt(t))):hi(Cv(t)))}function Lv(t){return uo(t)?t=hi(Mp(t)):(t=ha(t),uo(t)?t=String(t):(fa(t),t=xp(Wt,rn)),t=hi(t)),t}function pu(t){const e=typeof t;return t==null?t:e==="bigint"?hi(Vl(64,t)):Hl(t)?e==="string"?Pv(t):Lv(t):void 0}function Dv(t){if(typeof t!="string")throw Error();return t}function Gl(t){if(t!=null&&typeof t!="string")throw Error();return t}function wn(t){return t==null||typeof t=="string"?t:void 0}function Sp(t,e,n,i){return t!=null&&t[ca]===ua?t:Array.isArray(t)?((i=(n=0|t[Ge])|32&i|2&i)!==n&&pn(t,i),new e(t)):(n?2&i?((t=e[s0])||(zl((t=new e).v),t=e[s0]=t),e=t):e=new e:e=void 0,e)}function Jw(t,e,n){if(e)e:{if(!Hl(e=t))throw Sd("int64");switch(typeof e){case"string":e=Pv(e);break e;case"bigint":e=hi(Vl(64,e));break e;default:e=Lv(e)}}else e=pu(t);return(t=e)==null?n?$w:void 0:t}const Qw={};let e4=(function(){try{return zu(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class fh{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const t4=e4?(Object.setPrototypeOf(fh.prototype,Map.prototype),Object.defineProperties(fh.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),fh):class extends Map{constructor(){super()}};function d0(t){return t}function hh(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Yr=class extends t4{constructor(t,e,n=d0,i=d0){super(),this.J=0|t[Ge],this.K=e,this.S=n,this.fa=this.K?n4:i;for(let r=0;r<t.length;r++){const s=t[r],o=n(s[0],!1,!0);let a=s[1];e?a===void 0&&(a=null):a=i(s[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(t){return Cl(Array.from(super.entries(),t))}clear(){hh(this),super.clear()}delete(t){return hh(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new l0(t,i4,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new l0(t,Yr.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return hh(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function n4(t,e,n,i,r,s){return t=Sp(t,i,n,s),r&&(t=bp(t)),t}function i4(t){return[t,this.get(t)]}let r4;function p0(){return r4||(r4=new Yr(zl([]),void 0,void 0,void 0,Qw))}function Xu(t){return fi?t[fi]:void 0}function mu(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Yr.prototype.toJSON=void 0;var Td=class{};const s4={Ka:!0};function o4(t,e){e<100||la(Ow,1)}function ju(t,e,n,i){const r=i!==void 0;i=!!i;var s,o=fi;!r&&Sa&&o&&(s=t[o])&&mu(s,o4),o=[];var a=t.length;let l;s=4294967295;let u=!1;const c=!!(64&e),f=c?128&e?0:-1:void 0;1&e||(l=a&&t[a-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--a:l=void 0,!c||128&e||r||(u=!0,s=s-f+f)),e=void 0;for(var h=0;h<a;h++){let p=t[h];if(p!=null&&(p=n(p,i))!=null)if(c&&h>=s){const _=h-f;(e??(e={}))[_]=p}else o[h]=p}if(l)for(let p in l){if((a=l[p])==null||(a=n(a,i))==null)continue;let _;h=+p,c&&!Number.isNaN(h)&&(_=h+f)<s?o[_]=a:(e??(e={}))[p]=a}return e&&(u?o.push(e):o[s]=e),r&&fi&&(t=Xu(t))&&t instanceof Td&&(o[fi]=(function(p){const _=new Td;return mu(p,((v,m,d)=>{_[m]=ji(d)})),_.da=p.da,_})(t)),o}function a4(t){return t[0]=Ll(t[0]),t[1]=Ll(t[1]),t}function Ll(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return bd(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Ge];return t.length===0&&1&e?void 0:ju(t,e,Ll)}if(t!=null&&t[ca]===ua)return Iv(t);if(t instanceof hr){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(gv){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),mv(),n=pv[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let u=0,c=0;for(;u<e.length-2;u+=3){var s=e[u],o=e[u+1],a=e[u+2],l=n[s>>2];s=n[(3&s)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[c++]=l+s+o+a}switch(l=0,a=r,e.length-u){case 2:a=n[(15&(l=e[u+1]))<<2]||r;case 1:e=e[u],i[c]=n[e>>2]+n[(3&e)<<4|l>>4]+a+r}e=i.join("")}t=t.g=e}return t}return t instanceof Yr?t=t.size!==0?t.V(a4):void 0:void 0}return t}let l4,c4;function Iv(t){return ju(t=t.v,0|t[Ge],Ll)}function no(t,e){return Uv(t,e[0],e[1])}function Uv(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[Ge],t0&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(t0)throw Error("carr");la(Bw,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&pn(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var o=s-1;const l=n[o];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((o-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var a in l)(s=+a)<o&&(n[s+e]=l[a],delete l[a]);r=-16760833&r|(1023&o)<<14;break e}}if(e){if((a=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&a)<<14}}}return pn(t,64|r|i),t}function u4(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Ge];return t.length===0&&1&n?void 0:m0(t,n,e)}if(t!=null&&t[ca]===ua)return g0(t);if(t instanceof Yr){if(2&(e=t.J))return t;if(!t.size)return;if(n=zl(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[ca]===ua?g0(r):Array.isArray(r)?m0(r,0|r[Ge],!!(32&e)):void 0,i[1]=r}return n}return t instanceof hr?t:void 0}function m0(t,e,n){return 2&e||(!n||4096&e||16&e?t=Ta(t,e,!1,n&&!(16&e)):(kl(t,34),4&e&&Object.freeze(t))),t}function Ep(t,e,n){return t=new t.constructor(e),n&&(t.h=co),t.m=co,t}function g0(t){const e=t.v,n=0|e[Ge];return di(t,n)?t:Tp(t,e,n)?Ep(t,e):Ta(e,n)}function Ta(t,e,n,i){return i??(i=!!(34&e)),t=ju(t,e,u4,i),i=32,n&&(i|=2),pn(t,e=16769217&e|i),t}function bp(t){const e=t.v,n=0|e[Ge];return di(t,n)?Tp(t,e,n)?Ep(t,e,!0):new t.constructor(Ta(e,n,!1)):t}function Aa(t){if(t.h!==co)return!1;var e=t.v;return kl(e=Ta(e,0|e[Ge]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function wa(t){if(!Aa(t)&&di(t,0|t.v[Ge]))throw Error()}function po(t,e){e===void 0&&(e=0|t[Ge]),32&e&&!(4096&e)&&pn(t,4096|e)}function Tp(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(pn(e,2|n),t.h=co,!0)}const Nv=hi(0),ls={};function jt(t,e,n,i,r){if((e=Kr(t.v,e,n,r))!==null||i&&t.m!==co)return e}function Kr(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let o,a;if(!(s<1+(n?0:-1))){if(r>=s)if(o=t[s],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[e],a=!0;else{if(r!==s)return;n=o}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[e]=i:t[r]=i,i}return n}}function Rt(t,e,n,i){wa(t),un(t=t.v,0|t[Ge],e,n,i)}function un(t,e,n,i,r){const s=n+(r?0:-1);var o=t.length-1;if(o>=1+(r?0:-1)&&s>=o){const a=t[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,e}return s<=o?(t[s]=i,e):(i!==void 0&&(n>=(o=(e??(e=0|t[Ge]))>>14&1023||536870912)?i!=null&&(t[o+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Zs(){return kw===void 0?2:4}function Js(t,e,n,i,r){let s=t.v,o=0|s[Ge];i=di(t,o)?1:i,r=!!r||i===3,i===2&&Aa(t)&&(s=t.v,o=0|s[Ge]);let a=(t=Ap(s,e))===ho?7:0|t[Ge],l=wp(a,o);var u=!(4&l);if(u){4&l&&(t=ji(t),a=0,l=ro(l,o),o=un(s,o,e,t));let c=0,f=0;for(;c<t.length;c++){const h=n(t[c]);h!=null&&(t[f++]=h)}f<c&&(t.length=f),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==a&&(pn(t,l),2&l&&Object.freeze(t)),Fv(t,l,s,o,e,i,u,r)}function Fv(t,e,n,i,r,s,o,a){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?io(e)||((e|=!t.length||o&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&pn(t,e),Object.freeze(t)):(s===2&&io(e)&&(t=ji(t),l=0,e=ro(e,i),i=un(n,i,r,t)),io(e)||(a||(e|=16),e!==l&&pn(t,e))),2&e||!(4096&e||16&e)||po(n,i),t}function Ap(t,e,n){return t=Kr(t,e,n),Array.isArray(t)?t:ho}function wp(t,e){return 2&e&&(t|=2),1|t}function io(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Ov(t){return _p(t,!0)}function Bv(t){t=ji(t);for(let e=0;e<t.length;e++){const n=t[e]=ji(t[e]);Array.isArray(n[1])&&(n[1]=zl(n[1]))}return Cl(t)}function fs(t,e,n,i){wa(t),un(t=t.v,0|t[Ge],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ca(t,e,n){if(2&e)throw Error();const i=Ea(e);let r=Ap(t,n,i),s=r===ho?7:0|r[Ge],o=wp(s,e);return(2&o||io(o)||16&o)&&(o===s||io(o)||pn(r,o),r=ji(r),s=0,o=ro(o,e),un(t,e,n,r,i)),o&=-13,o!==s&&pn(r,o),r}function dh(t,e){var n=R2;return Rp(Cp(t=t.v),t,void 0,n)===e?e:-1}function Cp(t){if(Sa)return t[Za]??(t[Za]=new Map);if(Za in t)return t[Za];const e=new Map;return Object.defineProperty(t,Za,{value:e}),e}function kv(t,e,n,i,r){const s=Cp(t),o=Rp(s,t,e,n,r);return o!==i&&(o&&(e=un(t,e,o,void 0,r)),s.set(n,i)),e}function Rp(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let o=0;o<i.length;o++){const a=i[o];Kr(e,a,r)!=null&&(s!==0&&(n=un(e,n,s,void 0,r)),s=a)}return t.set(i,s),s}function Pp(t,e,n){let i=0|t[Ge];const r=Ea(i),s=Kr(t,n,r);let o;if(s!=null&&s[ca]===ua){if(!di(s))return Aa(s),s.v;o=s.v}else Array.isArray(s)&&(o=s);if(o){const a=0|o[Ge];2&a&&(o=Ta(o,a))}return o=no(o,e),o!==s&&un(t,i,n,o,r),o}function zv(t,e,n,i,r){let s=!1;if((i=Kr(t,i,r,(o=>{const a=Sp(o,n,!1,e);return s=a!==o&&a!=null,a})))!=null)return s&&!di(i)&&po(t,e),i}function xt(t,e,n,i){let r=t.v,s=0|r[Ge];if((e=zv(r,s,e,n,i))==null)return e;if(s=0|r[Ge],!di(t,s)){const o=bp(e);o!==e&&(Aa(t)&&(r=t.v,s=0|r[Ge]),s=un(r,s,n,e=o,i),po(r,s))}return e}function Vv(t,e,n,i,r,s,o,a){var l=di(t,n);s=l?1:s,o=!!o||s===3,l=a&&!l,(s===2||l)&&Aa(t)&&(n=0|(e=t.v)[Ge]);var u=(t=Ap(e,r))===ho?7:0|t[Ge],c=wp(u,n);if(a=!(4&c)){var f=t,h=n;const p=!!(2&c);p&&(h|=2);let _=!p,v=!0,m=0,d=0;for(;m<f.length;m++){const w=Sp(f[m],i,!1,h);if(w instanceof i){if(!p){const A=di(w);_&&(_=!A),v&&(v=A)}f[d++]=w}}d<m&&(f.length=d),c|=4,c=v?-4097&c:4096|c,c=_?8|c:-9&c}if(c!==u&&(pn(t,c),2&c&&Object.freeze(t)),l&&!(8&c||!t.length&&(s===1||s===4&&(2&c||!(16&c)&&32&n)))){for(io(c)&&(t=ji(t),c=ro(c,n),n=un(e,n,r,t)),i=t,l=c,u=0;u<i.length;u++)(f=i[u])!==(c=bp(f))&&(i[u]=c);l|=8,pn(t,c=l=i.length?4096|l:-4097&l)}return Fv(t,c,e,n,r,s,a,o)}function $r(t,e,n){const i=t.v;return Vv(t,i,0|i[Ge],e,n,Zs(),!1,!0)}function Hv(t){return t==null&&(t=void 0),t}function Je(t,e,n,i,r){return Rt(t,n,i=Hv(i),r),i&&!di(i)&&po(t.v),t}function fl(t,e,n,i){e:{var r=i=Hv(i);wa(t);const s=t.v;let o=0|s[Ge];if(r==null){const a=Cp(s);if(Rp(a,s,o,n)!==e)break e;a.set(n,0)}else o=kv(s,o,n,e);un(s,o,e,r)}i&&!di(i)&&po(t.v)}function ro(t,e){return-273&(2&e?2|t:-3&t)}function Lp(t,e,n,i){var r=i;wa(t),t=Vv(t,i=t.v,0|i[Ge],n,e,2,!0),r=r??new n,t.push(r),e=n=t===ho?7:0|t[Ge],(r=di(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&pn(t,n),r||po(i)}function Pi(t,e,n){return ba(jt(t,e,void 0,n))}function en(t,e){return jt(t,e,void 0,void 0,ur)??0}function Zr(t,e,n){if(n!=null){if(typeof n!="number"||!Wu(n))throw Sd("int32");n|=0}Rt(t,e,n)}function Ye(t,e,n){Rt(t,e,il(n))}function pi(t,e,n){fs(t,e,Gl(n),"")}function gu(t,e,n){{wa(t);const o=t.v;let a=0|o[Ge];if(n==null)un(o,a,e);else{var i=t=n===ho?7:0|n[Ge],r=io(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=ji(n),i=0,t=ro(t,a),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],u=Dv(l);Object.is(l,u)||(s&&(n=ji(n),i=0,t=ro(t,a),s=!1),n[r]=u)}t!==i&&(s&&(n=ji(n),t=ro(t,a)),pn(n,t)),un(o,a,e,n)}}}function qu(t,e,n){wa(t),Js(t,e,wn,2,!0).push(Dv(n))}var ko=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function Dp(t,e){if(typeof t=="string")return new ko(_v(t),e);if(Array.isArray(t))return new ko(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new ko(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new ko(t,!1);if(t.constructor===hr)return e=gp(t)||new Uint8Array(0),new ko(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new ko(t,!1);throw Error()}function Ip(t,e){let n,i=0,r=0,s=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(so(t,a),!(128&n))return e(i>>>0,r>>>0);throw Error()}function Up(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return so(t,n),!!(127&e)}throw Error()}function Ms(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return so(t,n),r}function vr(t){return Ms(t)>>>0}function _u(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],so(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function f4(t){return Ms(t)}function so(t,e){if(t.g=e,e>t.l)throw Error()}function Gv(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Wv(t,e){if(e==0)return lo();var n=Gv(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):jw?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?lo():new hr(n,aa)}var _0=[];function Xv(t,e,n,i){if(vu.length){const r=vu.pop();return r.o(i),r.g.init(t,e,n,i),r}return new h4(t,e,n,i)}function jv(t){t.g.clear(),t.l=-1,t.h=-1,vu.length<100&&vu.push(t)}function qv(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=vr(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function Zc(t){switch(t.h){case 0:t.h!=0?Zc(t):Up(t.g);break;case 1:so(t=t.g,t.g+8);break;case 2:if(t.h!=2)Zc(t);else{var e=vr(t.g);so(t=t.g,t.g+e)}break;case 5:so(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!qv(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}Zc(t)}break;default:throw Error()}}function Wl(t,e,n){const i=t.g.l;var r=vr(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function Np(t){var e=vr(t.g),n=Gv(t=t.g,e);if(t=t.h,Tw){var i,r=t;(i=uh)||(i=uh=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(a){if(Uc===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Uc=!0}catch{Uc=!1}}throw!Uc&&(uh=void 0),a}}else{e=(s=n)+e,n=[];let a,l=null;for(;s<e;){var o=t[s++];o<128?n.push(o):o<224?s>=e?Bs():(a=t[s++],o<194||(192&a)!=128?(s--,Bs()):n.push((31&o)<<6|63&a)):o<240?s>=e-1?Bs():(a=t[s++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=t[s++]))!=128?(s--,Bs()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?s>=e-2?Bs():(a=t[s++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,Bs()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Bs(),n.length>=8192&&(l=e0(l,n),n.length=0)}s=e0(l,n)}return s}function Yv(t){const e=vr(t.g);return Wv(t.g,e)}function Yu(t,e,n){var i=vr(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var h4=class{constructor(t,e,n,i){if(_0.length){const r=_0.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,o,a)}init(r,s,o,{Y:a=!1,ea:l=!1}={}){this.Y=a,this.ea=l,r&&(r=Dp(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},vu=[];function v0(t){return t?/^\d+$/.test(t)?(Gu(t),new Ad(Wt,rn)):null:d4||(d4=new Ad(0,0))}var Ad=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let d4;function x0(t){return t?/^-?\d+$/.test(t)?(Gu(t),new wd(Wt,rn)):null:p4||(p4=new wd(0,0))}var wd=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let p4;function Zo(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ra(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Ku(t,e){if(e>=0)Ra(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Fp(t){var e=Wt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function da(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Ui(t,e,n){Ra(t.g,8*e+n)}function Op(t,e){return Ui(t,e,2),e=t.g.end(),da(t,e),e.push(t.h),e}function Bp(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function $u(t,e,n){Ui(t,e,2),Ra(t.g,n.length),da(t,t.g.end()),da(t,n)}function xu(t,e,n,i){n!=null&&(e=Op(t,e),i(n,t),Bp(t,e))}function yr(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var kp=yr(),Kv=yr(),zp=yr(),Vp=yr(),Hp=yr(),$v=yr(),m4=yr(),Zu=yr(),Zv=yr(),Jv=yr();function Mr(t,e,n){var i=t.v;fi&&fi in i&&(i=i[fi])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var We=class{constructor(t,e){this.v=Uv(t,e,void 0,2048)}toJSON(){return Iv(this)}j(){var r;var t=$4,e=this.v,n=t.g,i=fi;if(Sa&&i&&((r=e[i])==null?void 0:r[n])!=null&&la(Fw,3),e=t.g,o0&&fi&&o0===void 0&&(i=(n=this.v)[fi])&&(i=i.da))try{i(n,e,s4)}catch(s){dv(s)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Ge];return Tp(this,t,e)?Ep(this,t,!0):new this.constructor(Ta(t,e,!1))}};We.prototype[ca]=ua,We.prototype.toString=function(){return this.v.toString()};var Pa=class{constructor(t,e,n){this.g=t,this.h=e,t=kp,this.l=!!t&&n===t||!1}};function Ju(t,e){return new Pa(t,e,kp)}function Qv(t,e,n,i,r){xu(t,n,i2(e,i),r)}const g4=Ju((function(t,e,n,i,r){return t.h===2&&(Wl(t,Pp(e,i,n),r),!0)}),Qv),_4=Ju((function(t,e,n,i,r){return t.h===2&&(Wl(t,Pp(e,i,n),r),!0)}),Qv);var Qu=Symbol(),ef=Symbol(),Cd=Symbol(),y0=Symbol(),M0=Symbol();let e2,t2;function mo(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(f){switch(typeof f){case"boolean":return l4||(l4=[0,void 0,!0]);case"number":return f>0?void 0:f===0?c4||(c4=[0,void 0]):[-f,void 0];case"string":return[0,f];case"object":return f}})(i[0]);var s=i[1];let o=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++o])=="function"&&(r.ma=!0,e2??(e2=s),t2??(t2=i[o+1]),s=i[o+=2]));const a={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)a[s[l]]=s;s=i[++o]}for(l=1;s!==void 0;){let f;typeof s=="number"&&(l+=s,s=i[++o]);var u=void 0;if(s instanceof Pa?f=s:(f=g4,o--),f==null?void 0:f.l){s=i[++o],u=i;var c=o;typeof s=="function"&&(s=s(),u[c]=s),u=s}for(c=l+1,typeof(s=i[++o])=="number"&&s<0&&(c-=s,s=i[++o]);l<c;l++){const h=a[l];u?n(r,l,f,u,h):e(r,l,f,h)}}return i[t]=r}function n2(t){return Array.isArray(t)?t[0]instanceof Pa?t:[_4,t]:[t,void 0]}function i2(t,e){return t instanceof We?t.v:Array.isArray(t)?no(t,e):void 0}function Gp(t,e,n,i){const r=n.g;t[e]=i?(s,o,a)=>r(s,o,a,i):r}function Wp(t,e,n,i,r){const s=n.g;let o,a;t[e]=(l,u,c)=>s(l,u,c,a||(a=mo(ef,Gp,Wp,i).T),o||(o=Xp(i)),r)}function Xp(t){let e=t[Cd];if(e!=null)return e;const n=mo(ef,Gp,Wp,t);return e=n.ma?(i,r)=>e2(i,r,n):(i,r)=>{for(;qv(r)&&r.h!=4;){var s=r.l,o=n[s];if(o==null){var a=n.ba;a&&(a=a[s])&&(a=x4(a))!=null&&(o=n[s]=a)}if(o==null||!o(r,i,s)){if(o=(a=r).m,Zc(a),a.ha)var l=void 0;else l=a.g.g-o,a.g.g=o,l=Wv(a.g,l);o=void 0,a=i,l&&((o=a[fi]??(a[fi]=new Td))[s]??(o[s]=[])).push(l)}}return(i=Xu(i))&&(i.da=n.qa[M0]),!0},t[Cd]=e,t[M0]=v4.bind(t),e}function v4(t,e,n,i){var r=this[ef];const s=this[Cd],o=no(void 0,r.T),a=Xu(t);if(a){var l=!1,u=r.ba;if(u){if(r=(c,f,h)=>{if(h.length!==0)if(u[f])for(const p of h){c=Xv(p);try{l=!0,s(o,c)}finally{jv(c)}}else i==null||i(t,f,h)},e==null)mu(a,r);else if(a!=null){const c=a[e];c&&r(a,e,c)}if(l){let c=0|t[Ge];if(2&c&&2048&c&&!(n!=null&&n.Ka))throw Error();const f=Ea(c),h=(p,_)=>{if(Kr(t,p,f)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}_!=null&&(c=un(t,c,p,_,f)),delete a[p]};e==null?Sv(o,0|o[Ge],((p,_)=>{h(p,_)})):h(e,Kr(o,e,f))}}}}function x4(t){const e=(t=n2(t))[0].g;if(t=t[1]){const n=Xp(t),i=mo(ef,Gp,Wp,t).T;return(r,s,o)=>e(r,s,o,i,n)}return e}function tf(t,e,n){t[e]=n.h}function nf(t,e,n,i){let r,s;const o=n.h;t[e]=(a,l,u)=>o(a,l,u,s||(s=mo(Qu,tf,nf,i).T),r||(r=r2(i)))}function r2(t){let e=t[y0];if(!e){const n=mo(Qu,tf,nf,t);e=(i,r)=>s2(i,r,n),t[y0]=e}return e}function s2(t,e,n){Sv(t,0|t[Ge],((i,r)=>{if(r!=null){var s=(function(o,a){var l=o[a];if(l)return l;if((l=o.ba)&&(l=l[a])){var u=(l=n2(l))[0].h;if(l=l[1]){const c=r2(l),f=mo(Qu,tf,nf,l).T;l=o.ma?t2(f,c):(h,p,_)=>u(h,p,_,f,c)}else l=u;return o[a]=l}})(n,i);s?s(e,r,i):i<500||la(Ed,3)}})),(t=Xu(t))&&mu(t,((i,r,s)=>{for(da(e,e.g.end()),i=0;i<s.length;i++)da(e,gp(s[i])||new Uint8Array(0))}))}const y4=hi(0);function La(t,e){if(Array.isArray(e)){var n=0|e[Ge];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&pn(e,t),2&t&&Object.freeze(e),e}}function Vn(t,e,n){return new Pa(t,e,n)}function Da(t,e,n){return new Pa(t,e,n)}function Hn(t,e,n){un(t,0|t[Ge],e,n,Ea(0|t[Ge]))}var M4=Ju((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=ji(t=Wl(t,no([void 0,void 0],i),r)),r=Ea(i=0|e[Ge]),2&i)throw Error();let s=Kr(e,n,r);if(s instanceof Yr)(2&s.J)!=0?(s=s.V(),s.push(t),un(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var o=0|s[Ge];8192&o||pn(s,o|=8192),2&o&&(s=Bv(s),un(e,i,n,s,r)),s.push(t)}else un(e,i,n,Cl([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof Yr)e.forEach(((s,o)=>{xu(t,n,no([o,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&xu(t,n,no(o,i),r)}Cl(e)}}));function o2(t,e,n){(e=ur(e))!=null&&(Ui(t,n,5),t=t.g,vp(e),Fp(t))}function a2(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(Vl(64,i));if(Hl(i)){if(r==="string")return Rv(i);if(r==="number")return Mp(i)}})(e),e!=null&&(typeof e=="string"&&x0(e),e!=null))switch(Ui(t,n,0),typeof e){case"number":t=t.g,fa(e),Zo(t,Wt,rn);break;case"bigint":n=BigInt.asUintN(64,e),n=new wd(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Zo(t.g,n.h,n.g);break;default:n=x0(e),Zo(t.g,n.h,n.g)}}function l2(t,e,n){(e=ba(e))!=null&&e!=null&&(Ui(t,n,0),Ku(t.g,e))}function c2(t,e,n){(e=Av(e))!=null&&(Ui(t,n,0),t.g.g.push(e?1:0))}function u2(t,e,n){(e=wn(e))!=null&&$u(t,n,hv(e))}function f2(t,e,n,i,r){xu(t,n,i2(e,i),r)}function h2(t,e,n){(e=e==null||typeof e=="string"||e instanceof hr?e:void 0)!=null&&$u(t,n,Dp(e,!0).buffer)}function d2(t,e,n){(e=wv(e))!=null&&e!=null&&(Ui(t,n,0),Ra(t.g,e))}function p2(t,e,n){return(t.h===5||t.h===2)&&(e=Ca(e,0|e[Ge],n),t.h==2?Yu(t,_u,e):e.push(_u(t.g)),!0)}var on=Vn((function(t,e,n){return t.h===5&&(Hn(e,n,_u(t.g)),!0)}),o2,Zu),S4=Da(p2,(function(t,e,n){if((e=La(ur,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Ui(i,r,5),i=i.g,vp(s),Fp(i))}}),Zu),jp=Da(p2,(function(t,e,n){if((e=La(ur,e))!=null&&e.length){Ui(t,n,2),Ra(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,vp(e[i]),Fp(n)}}),Zu),E4=Vn((function(t,e,n){return t.h===5&&(Hn(e,n,(t=_u(t.g))===0?void 0:t),!0)}),o2,Zu),Ss=Vn((function(t,e,n){return t.h!==0?t=!1:(Hn(e,n,Ip(t.g,Tv)),t=!0),t}),a2,$v),ph=Vn((function(t,e,n){return t.h!==0?e=!1:(Hn(e,n,(t=Ip(t.g,Tv))===y4?void 0:t),e=!0),e}),a2,$v),b4=Vn((function(t,e,n){return t.h!==0?t=!1:(Hn(e,n,Ip(t.g,Yw)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(Kw(64,i));if(Hl(i)){if(r==="string")return r=ha(Number(i)),uo(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(Gu(i),i=Rl(Wt,rn))),i;if(r==="number")return(i=ha(i))>=0&&uo(i)||(fa(i),i=bv(Wt,rn)),i}})(e),e!=null&&(typeof e=="string"&&v0(e),e!=null))switch(Ui(t,n,0),typeof e){case"number":t=t.g,fa(e),Zo(t,Wt,rn);break;case"bigint":n=BigInt.asUintN(64,e),n=new Ad(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Zo(t.g,n.h,n.g);break;default:n=v0(e),Zo(t.g,n.h,n.g)}}),m4),ln=Vn((function(t,e,n){return t.h===0&&(Hn(e,n,Ms(t.g)),!0)}),l2,Vp),Xl=Da((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ca(e,0|e[Ge],n),t.h==2?Yu(t,Ms,e):e.push(Ms(t.g)),!0)}),(function(t,e,n){if((e=La(ba,e))!=null&&e.length){n=Op(t,n);for(let i=0;i<e.length;i++)Ku(t.g,e[i]);Bp(t,n)}}),Vp),jo=Vn((function(t,e,n){return t.h===0&&(Hn(e,n,(t=Ms(t.g))===0?void 0:t),!0)}),l2,Vp),qt=Vn((function(t,e,n){return t.h===0&&(Hn(e,n,Up(t.g)),!0)}),c2,Kv),oo=Vn((function(t,e,n){return t.h===0&&(Hn(e,n,(t=Up(t.g))===!1?void 0:t),!0)}),c2,Kv),In=Da((function(t,e,n){return t.h===2&&(t=Np(t),Ca(e,0|e[Ge],n).push(t),!0)}),(function(t,e,n){if((e=La(wn,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&$u(i,r,hv(s))}}),zp),hs=Vn((function(t,e,n){return t.h===2&&(Hn(e,n,(t=Np(t))===""?void 0:t),!0)}),u2,zp),Dt=Vn((function(t,e,n){return t.h===2&&(Hn(e,n,Np(t)),!0)}),u2,zp),xn=(function(t,e,n=kp){return new Pa(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=no(void 0,i),Ca(e,0|e[Ge],n).push(i),Wl(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)f2(t,e[s],n,i,r);1&(t=0|e[Ge])||pn(e,1|t)}})),zt=Ju((function(t,e,n,i,r,s){if(t.h!==2)return!1;let o=0|e[Ge];return kv(e,o,s,n,Ea(o)),Wl(t,e=Pp(e,i,n),r),!0}),f2),m2=Vn((function(t,e,n){return t.h===2&&(Hn(e,n,Yv(t)),!0)}),h2,Zv),T4=Da((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ca(e,0|e[Ge],n),t.h==2?Yu(t,vr,e):e.push(vr(t.g)),!0)}),(function(t,e,n){if((e=La(wv,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Ui(i,r,0),Ra(i.g,s))}}),Hp),A4=Vn((function(t,e,n){return t.h===0&&(Hn(e,n,(t=vr(t.g))===0?void 0:t),!0)}),d2,Hp),kn=Vn((function(t,e,n){return t.h===0&&(Hn(e,n,Ms(t.g)),!0)}),(function(t,e,n){(e=ba(e))!=null&&(e=parseInt(e,10),Ui(t,n,0),Ku(t.g,e))}),Jv);class w4{constructor(e,n){var i=gi;this.g=e,this.h=n,this.m=xt,this.j=Je,this.defaultValue=void 0,this.l=i.Oa!=null?Ev:void 0}register(){zu(this)}}function Sr(t,e){return new w4(t,e)}function bs(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Xv(n,void 0,void 0,s);try{const o=new t,a=o.v;Xp(e)(a,n);var r=o}finally{jv(n)}}return r}}function rf(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};s2(this.v,e,mo(Qu,tf,nf,t)),da(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return e.l=[n],n}}var S0=class extends We{constructor(t){super(t)}},E0=[0,hs,Vn((function(t,e,n){return t.h===2&&(Hn(e,n,(t=Yv(t))===lo()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof We){const i=e.Ra;return void(i?(e=i(e),e!=null&&$u(t,n,Dp(e,!0).buffer)):la(Ed,3))}if(Array.isArray(e))return void la(Ed,3)}h2(t,e,n)}),Zv)];let mh,b0=globalThis.trustedTypes;function T0(t){var e;return mh===void 0&&(mh=(function(){let n=null;if(!b0)return n;try{const i=r=>r;n=b0.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=mh)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function Nc(t,...e){if(e.length===0)return T0(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return T0(n)}var g2=[0,ln,kn,qt,-1,Xl,kn,-1,qt],C4=class extends We{constructor(t){super(t)}},_2=[0,qt,Dt,qt,kn,-1,Da((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ca(e,0|e[Ge],n),t.h==2?Yu(t,f4,e):e.push(Ms(t.g)),!0)}),(function(t,e,n){if((e=La(ba,e))!=null&&e.length){n=Op(t,n);for(let i=0;i<e.length;i++)Ku(t.g,e[i]);Bp(t,n)}}),Jv),Dt,-1,[0,qt,-1],kn,qt,-1],v2=[0,3,qt,-1,2,[0,[2],ln,zt,[0,Vn((function(t,e,n){return t.h===0&&(Hn(e,n,vr(t.g)),!0)}),d2,Hp)]],[0,kn,qt,kn,qt,kn,qt,Dt,-1],[0,[3,4],Dt,-1,zt,[0,ln],zt,[0,kn]],[0]],x2=[0,Dt,-2],A0=class extends We{constructor(t){super(t)}},y2=[0],M2=[0,ln,qt,1,qt,-4],gi=class extends We{constructor(t){super(t,2)}},fn={};fn[336783863]=[0,Dt,qt,-1,ln,[0,[1,2,3,4,5,6,7,8,9],zt,y2,zt,_2,zt,x2,zt,M2,zt,g2,zt,[0,Dt,-2],zt,[0,Dt,kn],zt,v2,zt,[0,kn,-1,qt]],[0,Dt],qt,[0,[1,3],[2,4],zt,[0,Xl],-1,zt,[0,In],-1,xn,[0,Dt,-1]],Dt];var w0=[0,ph,-1,oo,-3,ph,Xl,hs,jo,ph,-1,oo,jo,oo,-2,hs];function Vt(t,e){qu(t,3,e)}function pt(t,e){qu(t,4,e)}var ti=class extends We{constructor(t){super(t,500)}o(t){return Je(this,0,7,t)}},hl=[-1,{}],C0=[0,Dt,1,hl],R0=[0,Dt,In,hl];function Ni(t,e){Lp(t,1,ti,e)}function Kt(t,e){qu(t,10,e)}function Et(t,e){qu(t,15,e)}var _i=class extends We{constructor(t){super(t,500)}o(t){return Je(this,0,1001,t)}},S2=[-500,xn,[-500,hs,-1,In,-3,[-2,fn,qt],xn,E0,jo,-1,C0,R0,xn,[0,hs,oo],hs,w0,jo,In,987,In],4,xn,[-500,Dt,-1,[-1,{}],998,Dt],xn,[-500,Dt,In,-1,[-2,{},qt],997,In,-1],jo,xn,[-500,Dt,In,hl,998,In],In,jo,C0,R0,xn,[0,hs,-1,hl],In,-2,w0,hs,-1,oo,[0,oo,A4],978,hl,xn,E0];_i.prototype.g=rf(S2);var R4=bs(_i,S2),P4=class extends We{constructor(t){super(t)}},E2=class extends We{constructor(t){super(t)}g(){return $r(this,P4,1)}},b2=[0,xn,[0,ln,on,Dt,-1]],sf=bs(E2,b2),L4=class extends We{constructor(t){super(t)}},D4=class extends We{constructor(t){super(t)}},gh=class extends We{constructor(t){super(t)}l(){return xt(this,L4,2)}g(){return $r(this,D4,5)}},T2=bs(class extends We{constructor(t){super(t)}},[0,In,Xl,jp,[0,kn,[0,ln,-3],[0,on,-3],[0,ln,-1,[0,xn,[0,ln,-2]]],xn,[0,on,-1,Dt,on]],Dt,-1,Ss,xn,[0,ln,on],In,Ss]),A2=class extends We{constructor(t){super(t)}},Jo=bs(class extends We{constructor(t){super(t)}},[0,xn,[0,on,-4]]),w2=class extends We{constructor(t){super(t)}},jl=bs(class extends We{constructor(t){super(t)}},[0,xn,[0,on,-4]]),I4=class extends We{constructor(t){super(t)}},U4=[0,ln,-1,jp,kn],C2=class extends We{constructor(t){super(t)}};C2.prototype.g=rf([0,on,-4,Ss]);var N4=class extends We{constructor(t){super(t)}},F4=bs(class extends We{constructor(t){super(t)}},[0,xn,[0,1,ln,Dt,b2],Ss]),P0=class extends We{constructor(t){super(t)}},O4=class extends We{constructor(t){super(t)}na(){const t=jt(this,1,void 0,void 0,Ov);return t??lo()}},B4=class extends We{constructor(t){super(t)}},R2=[1,2],k4=bs(class extends We{constructor(t){super(t)}},[0,xn,[0,R2,zt,[0,jp],zt,[0,m2],ln,Dt],Ss]),qp=class extends We{constructor(t){super(t)}},P2=[0,Dt,ln,on,In,-1],L0=class extends We{constructor(t){super(t)}},z4=[0,qt,-1],D0=class extends We{constructor(t){super(t)}},Jc=[1,2,3,4,5,6],yu=class extends We{constructor(t){super(t)}g(){return jt(this,1,void 0,void 0,Ov)!=null}l(){return wn(jt(this,2))!=null}},Jt=class extends We{constructor(t){super(t)}g(){return Av(jt(this,2))??!1}},L2=[0,m2,Dt,[0,ln,Ss,-1],[0,b4,Ss]],an=[0,L2,qt,[0,Jc,zt,M2,zt,_2,zt,g2,zt,y2,zt,x2,zt,v2],kn],of=class extends We{constructor(t){super(t)}},Yp=[0,an,on,-1,ln],V4=Sr(502141897,of);fn[502141897]=Yp;var H4=bs(class extends We{constructor(t){super(t)}},[0,[0,kn,-1,S4,T4],U4]),D2=class extends We{constructor(t){super(t)}},I2=class extends We{constructor(t){super(t)}},Rd=[0,an,on,[0,an],qt],G4=Sr(508968150,I2);fn[508968150]=[0,an,Yp,Rd,on,[0,[0,L2]]],fn[508968149]=Rd;var zo=class extends We{constructor(t){super(t)}l(){return xt(this,qp,2)}g(){Rt(this,2)}},U2=[0,an,P2];fn[478825465]=U2;var W4=class extends We{constructor(t){super(t)}},N2=class extends We{constructor(t){super(t)}},Kp=class extends We{constructor(t){super(t)}},$p=class extends We{constructor(t){super(t)}},F2=class extends We{constructor(t){super(t)}},I0=[0,an,[0,an],U2,-1],O2=[0,an,on,ln],Zp=[0,an,on],B2=[0,an,O2,Zp,on],X4=Sr(479097054,F2);fn[479097054]=[0,an,B2,I0],fn[463370452]=I0,fn[464864288]=O2;var j4=Sr(462713202,$p);fn[462713202]=B2,fn[474472470]=Zp;var q4=class extends We{constructor(t){super(t)}},k2=class extends We{constructor(t){super(t)}},z2=class extends We{constructor(t){super(t)}},V2=class extends We{constructor(t){super(t)}},Jp=[0,an,on,-1,ln],Pd=[0,an,on,qt];V2.prototype.g=rf([0,an,Zp,[0,an],Yp,Rd,Jp,Pd]);var H2=class extends We{constructor(t){super(t)}},Y4=Sr(456383383,H2);fn[456383383]=[0,an,P2];var G2=class extends We{constructor(t){super(t)}},K4=Sr(476348187,G2);fn[476348187]=[0,an,z4];var W2=class extends We{constructor(t){super(t)}},U0=class extends We{constructor(t){super(t)}},X2=[0,kn,-1],$4=Sr(458105876,class extends We{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Ge];return t=di(this,n),e=(function(i,r,s,o){var a=U0;!o&&Aa(i)&&(s=0|(r=i.v)[Ge]);var l=Kr(r,2);if(i=!1,l==null){if(o)return p0();l=[]}else if(l.constructor===Yr){if(!(2&l.J)||o)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Ge])):l=[];if(o){if(!l.length)return p0();i||(i=!0,zl(l))}else i&&(i=!1,Cl(l),l=Bv(l));return!i&&32&s&&kl(l,32),s=un(r,s,2,o=new Yr(l,a,Jw,void 0)),i||po(r,s),o})(this,e,n,t),!t&&U0&&(e.ra=!0),e}});fn[458105876]=[0,X2,M4,[!0,Ss,[0,Dt,-1,In]],[0,Xl,qt,kn]];var Qp=class extends We{constructor(t){super(t)}},j2=Sr(458105758,Qp);fn[458105758]=[0,an,Dt,X2];var _h=class extends We{constructor(t){super(t)}},N0=[0,E4,-1,oo],Z4=class extends We{constructor(t){super(t)}},q2=class extends We{constructor(t){super(t)}},Ld=[1,2];q2.prototype.g=rf([0,Ld,zt,N0,zt,[0,xn,N0]]);var Y2=class extends We{constructor(t){super(t)}},J4=Sr(443442058,Y2);fn[443442058]=[0,an,Dt,ln,on,In,-1,qt,on],fn[514774813]=Jp;var K2=class extends We{constructor(t){super(t)}},Q4=Sr(516587230,K2);function Dd(t,e){return e=e?e.clone():new qp,t.displayNamesLocale!==void 0?Rt(e,1,Gl(t.displayNamesLocale)):t.displayNamesLocale===void 0&&Rt(e,1),t.maxResults!==void 0?Zr(e,2,t.maxResults):"maxResults"in t&&Rt(e,2),t.scoreThreshold!==void 0?Ye(e,3,t.scoreThreshold):"scoreThreshold"in t&&Rt(e,3),t.categoryAllowlist!==void 0?gu(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&Rt(e,4),t.categoryDenylist!==void 0?gu(e,5,t.categoryDenylist):"categoryDenylist"in t&&Rt(e,5),e}function $2(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function em(t,e=-1,n=""){return{categories:t.map((i=>({index:Pi(i,1)??0??-1,score:en(i,2)??0,categoryName:wn(jt(i,3))??""??"",displayName:wn(jt(i,4))??""??""}))),headIndex:e,headName:n}}function eC(t){const e={classifications:$r(t,N4,1).map((n=>{var i;return em(((i=xt(n,E2,4))==null?void 0:i.g())??[],Pi(n,2)??0,wn(jt(n,3))??"")}))};return(function(n){return n==null?n:typeof n=="bigint"?(bd(n)?n=Number(n):(n=Vl(64,n),n=bd(n)?Number(n):String(n)),n):Hl(n)?typeof n=="number"?Mp(n):Rv(n):void 0})(jt(t,2,void 0,void 0,pu))!=null&&(e.timestampMs=$2(jt(t,2,void 0,void 0,pu)??Nv)),e}function Z2(t){var o,a;var e=Js(t,3,ur,Zs()),n=Js(t,2,ba,Zs()),i=Js(t,1,wn,Zs()),r=Js(t,9,wn,Zs());const s={categories:[],keypoints:[]};for(let l=0;l<e.length;l++)s.categories.push({score:e[l],index:n[l]??-1,categoryName:i[l]??"",displayName:r[l]??""});if((e=(o=xt(t,gh,4))==null?void 0:o.l())&&(s.boundingBox={originX:Pi(e,1,ls)??0,originY:Pi(e,2,ls)??0,width:Pi(e,3,ls)??0,height:Pi(e,4,ls)??0,angle:0}),(a=xt(t,gh,4))==null?void 0:a.g().length)for(const l of xt(t,gh,4).g())s.keypoints.push({x:jt(l,1,void 0,ls,ur)??0,y:jt(l,2,void 0,ls,ur)??0,score:jt(l,4,void 0,ls,ur)??0,label:wn(jt(l,3,void 0,ls))??""});return s}function af(t){const e=[];for(const n of $r(t,w2,1))e.push({x:en(n,1)??0,y:en(n,2)??0,z:en(n,3)??0,visibility:en(n,4)??0});return e}function dl(t){const e=[];for(const n of $r(t,A2,1))e.push({x:en(n,1)??0,y:en(n,2)??0,z:en(n,3)??0,visibility:en(n,4)??0});return e}function F0(t){return Array.from(t,(e=>e>127?e-256:e))}function O0(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Fc;fn[516587230]=[0,an,Jp,Pd,on],fn[518928384]=Pd;const tC=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function J2(t){if(t)return!0;if(Fc===void 0)try{await WebAssembly.instantiate(tC),Fc=!0}catch{Fc=!1}return Fc}async function Oc(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await J2(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Go=class{};function Q2(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function B0(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function ex(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Xe(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function k0(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=ex(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function z0(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Ji(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function cs(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}Go.forVisionTasks=function(t,e=!1){return Oc("vision",t??Nc``,e)},Go.forTextTasks=function(t,e=!1){return Oc("text",t??Nc``,e)},Go.forGenAiTasks=function(t,e=!1){return Oc("genai",t??Nc``,e)},Go.forAudioTasks=function(t,e=!1){return Oc("audio",t??Nc``,e)},Go.isSimdSupported=function(t=!1){return J2(t)};async function nC(t,e,n,i){return t=await(async(r,s,o,a,l)=>{if(s&&await B0(s),!self.ModuleFactory||o&&(await B0(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function vh(t,e){const n=xt(t.baseOptions,yu,1)||new yu;typeof e=="string"?(Rt(n,2,Gl(e)),Rt(n,1)):e instanceof Uint8Array&&(Rt(n,1,_p(e,!1)),Rt(n,2)),Je(t.baseOptions,0,1,n)}function V0(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function Ie(t,e){t.C=Math.max(t.C,e)}function lf(t,e){t.B=new ti,pi(t.B,2,"PassThroughCalculator"),Vt(t.B,"free_memory"),pt(t.B,"free_memory_unused_out"),Kt(e,"free_memory"),Ni(e,t.B)}function pa(t,e){Vt(t.B,e),pt(t.B,e+"_unused_out")}function cf(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Id=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,o,a;if(e){const l=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=xt(this.baseOptions,yu,1))!=null&&r.g()||(s=xt(this.baseOptions,yu,1))!=null&&s.l()||(o=t.baseOptions)!=null&&o.modelAssetBuffer||(a=t.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(u,c){let f=xt(u.baseOptions,D0,3);if(!f){var h=f=new D0,p=new A0;fl(h,4,Jc,p)}"delegate"in c&&(c.delegate==="GPU"?(c=f,h=new C4,fl(c,2,Jc,h)):(c=f,h=new A0,fl(c,4,Jc,h))),Je(u.baseOptions,0,3,f)})(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then((u=>{if(u.ok)return u.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${u.status})`)})).then((u=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(u),!0,!1,!1),vh(this,"/model.dat"),this.m(),this.L()}));if(l.modelAssetBuffer instanceof Uint8Array)vh(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return(async function(u){const c=[];for(var f=0;;){const{done:h,value:p}=await u.read();if(h)break;c.push(p),f+=p.length}if(c.length===0)return new Uint8Array(0);if(c.length===1)return c[0];u=new Uint8Array(f),f=0;for(const h of c)u.set(h,f),f+=h.length;return u})(l.modelAssetBuffer).then((u=>{vh(this,u),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=R4(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,V0(this)}finishProcessing(){this.g.finishProcessing(),V0(this)}close(){this.B=void 0,this.g.closeGraph()}};function _s(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Id.prototype.close=Id.prototype.close;class iC{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function H0(t,e,n){const i=t.g;if(n=_s(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function G0(t,e){const n=t.g,i=_s(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=_s(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=_s(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new iC(n,i,r,s)}function tm(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function rC(t,e,n,i){return tm(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=G0(t,!0)),n=t.u):(t.A||(t.A=G0(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function tx(t,e,n){return tm(t,e),t=_s(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function nx(t,e,n){tm(t,e),t.B||(t.B=_s(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function sC(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var ix=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=_s(t.createProgram(),"Failed to create WebGL program"),this.X=H0(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=H0(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Vr(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Ud(t){var e=Vr(t,1);if(!e){if(e=Vr(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=ma(t);var n=nm(t);if(nx(n,i,rx(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function rx(t){let e=Vr(t,2);if(!e){const n=ma(t);e=ox(t);const i=Ud(t),r=sx(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Nd(t)}return e}function ma(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=_s(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function sx(t){if(t=ma(t),!Bc)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Bc=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Bc=t.R16F}return Bc}function nm(t){return t.l||(t.l=new ix),t.l}function ox(t){const e=ma(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Vr(t,2);return n||(n=tx(nm(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Nd(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Bc,_n=class{constructor(t,e,n,i,r,s,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--W0===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Vr(this,0)}ka(){return!!Vr(this,1)}R(){return!!Vr(this,2)}ja(){return(e=Vr(t=this,0))||(e=Ud(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Ud(this)}N(){return rx(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=ma(this),r=nm(this);i.activeTexture(i.TEXTURE1),n=tx(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=sx(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),nx(r,i,n),rC(r,i,!1,(()=>{ox(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Nd(this)})),sC(r),Nd(this)}}t.push(n)}return new _n(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ma(this).deleteTexture(Vr(this,2)),W0=-1}};_n.prototype.close=_n.prototype.close,_n.prototype.clone=_n.prototype.clone,_n.prototype.getAsWebGLTexture=_n.prototype.N,_n.prototype.getAsFloat32Array=_n.prototype.ia,_n.prototype.getAsUint8Array=_n.prototype.ja,_n.prototype.hasWebGLTexture=_n.prototype.R,_n.prototype.hasFloat32Array=_n.prototype.ka,_n.prototype.hasUint8Array=_n.prototype.Fa;var W0=250;function qi(...t){return t.map((([e,n])=>({start:e,end:n})))}const oC=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((X0=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Q2()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Xe(this,i||"input_audio",(s=>{Xe(this,r=r||"audio_header",(o=>{this.i._configureAudio(s,o,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Ji(this,"__graph_config__",(e=>{t(e)})),Xe(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Xe(this,i,(o=>{this.i._addAudioToInputStream(this.g,e,n,o,r)}))}addGpuBufferToStream(t,e,n){Xe(this,e,(i=>{const[r,s]=k0(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Xe(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Xe(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Xe(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Xe(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Xe(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Xe(this,e,(i=>{Xe(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Xe(this,e,(i=>{z0(this,Object.keys(t),(r=>{z0(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Xe(this,n,(r=>{Xe(this,e,(s=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,s,r,i),this.i._free(o)}))}))}addEmptyPacketToStream(t,e){Xe(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Xe(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Xe(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Xe(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Xe(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Xe(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Xe(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Xe(this,s,(o=>{this.i._addStringVectorEntry(r,o)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Xe(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Xe(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Xe(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Xe(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Xe(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Xe(this,e,(n=>{Xe(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Xe(this,n,(i=>{Xe(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Xe(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Xe(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Xe(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Xe(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Xe(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Xe(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Xe(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){Ji(this,t,e),Xe(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){cs(this,t,e),Xe(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Ji(this,t,e),Xe(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){cs(this,t,e),Xe(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Ji(this,t,e),Xe(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){cs(this,t,e),Xe(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Ji(this,t,e),Xe(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){cs(this,t,e),Xe(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Ji(this,t,e),Xe(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){cs(this,t,e),Xe(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Ji(this,t,e),Xe(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){cs(this,t,e),Xe(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Ji(this,t,e),Xe(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){cs(this,t,e),Xe(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ji(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Xe(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends X0{get ga(){return this.i}pa(t,e,n){Xe(this,e,(i=>{const[r,s]=k0(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){Ji(this,t,e),Xe(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){cs(this,t,e),Xe(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var X0,Yi=class extends oC{};async function _t(t,e,n){return(async function(i,r,s,o){return nC(i,r,s,o)})(t,n.canvas??(Q2()?void 0:document.createElement("canvas")),e,n)}function ax(t,e,n,i){if(t.U){const s=new C2;if(n!=null&&n.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ye(s,1,(r.left+r.right)/2),Ye(s,2,(r.top+r.bottom)/2),Ye(s,4,r.right-r.left),Ye(s,3,r.bottom-r.top)}else Ye(s,1,.5),Ye(s,2,.5),Ye(s,4,1),Ye(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ye(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=ex(e);n=en(s,3)*a/o,r=en(s,4)*o/a,Ye(s,4,n),Ye(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function Ki(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");ax(t,e,n,t.C+1)}function Er(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");ax(t,e,n,i)}function ga(t,e,n,i){var r=e.data;const s=e.width,o=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return t=new _n([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var mi=class extends Id{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new ix}l(t,e=!0){if("runningMode"in t&&Rt(this.baseOptions,2,Pl(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};mi.prototype.close=mi.prototype.close;var Si=class extends mi{constructor(t,e){super(new Yi(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Je(t=this.h=new of,0,1,e=new Jt),Ye(this.h,2,.5),Ye(this.h,3,.3)}get baseOptions(){return xt(this.h,Jt,1)}set baseOptions(t){Je(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Ye(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ye(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Ki(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Er(this,t,n,e),this.j}m(){var t=new _i;Kt(t,"image_in"),Kt(t,"norm_rect_in"),Et(t,"detections");const e=new gi;Mr(e,V4,this.h);const n=new ti;pi(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Vt(n,"IMAGE:image_in"),Vt(n,"NORM_RECT:norm_rect_in"),pt(n,"DETECTIONS:detections"),n.o(e),Ni(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=T2(s),this.j.detections.push(Z2(i));Ie(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Si.prototype.detectForVideo=Si.prototype.G,Si.prototype.detect=Si.prototype.F,Si.prototype.setOptions=Si.prototype.o,Si.createFromModelPath=async function(t,e){return _t(Si,t,{baseOptions:{modelAssetPath:e}})},Si.createFromModelBuffer=function(t,e){return _t(Si,t,{baseOptions:{modelAssetBuffer:e}})},Si.createFromOptions=function(t,e){return _t(Si,t,e)};var im=qi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),rm=qi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),sm=qi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),lx=qi([474,475],[475,476],[476,477],[477,474]),om=qi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),am=qi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),cx=qi([469,470],[470,471],[471,472],[472,469]),lm=qi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),ux=[...im,...rm,...sm,...om,...am,...lm],fx=qi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function j0(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var $t=class extends mi{constructor(t,e){super(new Yi(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Je(t=this.h=new I2,0,1,e=new Jt),this.A=new D2,Je(this.h,0,3,this.A),this.u=new of,Je(this.h,0,2,this.u),Zr(this.u,4,1),Ye(this.u,2,.5),Ye(this.A,2,.5),Ye(this.h,4,.5)}get baseOptions(){return xt(this.h,Jt,1)}set baseOptions(t){Je(this.h,0,1,t)}o(t){return"numFaces"in t&&Zr(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ye(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ye(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ye(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return j0(this),Ki(this,t,e),this.j}G(t,e,n){return j0(this),Er(this,t,n,e),this.j}m(){var t=new _i;Kt(t,"image_in"),Kt(t,"norm_rect"),Et(t,"face_landmarks");const e=new gi;Mr(e,G4,this.h);const n=new ti;pi(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Vt(n,"IMAGE:image_in"),Vt(n,"NORM_RECT:norm_rect"),pt(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Ni(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=jl(s),this.j.faceLandmarks.push(af(i));Ie(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Ie(this,i)})),this.outputFaceBlendshapes&&(Et(t,"blendshapes"),pt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=sf(s),this.j.faceBlendshapes.push(em(i.g()??[]));Ie(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Ie(this,i)}))),this.outputFacialTransformationMatrixes&&(Et(t,"face_geometry"),pt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=xt(i=H4(s),I4,2))&&this.j.facialTransformationMatrixes.push({rows:Pi(i,1)??0??0,columns:Pi(i,2)??0??0,data:Js(i,3,ur,Zs()).slice()??[]});Ie(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Ie(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$t.prototype.detectForVideo=$t.prototype.G,$t.prototype.detect=$t.prototype.F,$t.prototype.setOptions=$t.prototype.o,$t.createFromModelPath=function(t,e){return _t($t,t,{baseOptions:{modelAssetPath:e}})},$t.createFromModelBuffer=function(t,e){return _t($t,t,{baseOptions:{modelAssetBuffer:e}})},$t.createFromOptions=function(t,e){return _t($t,t,e)},$t.FACE_LANDMARKS_LIPS=im,$t.FACE_LANDMARKS_LEFT_EYE=rm,$t.FACE_LANDMARKS_LEFT_EYEBROW=sm,$t.FACE_LANDMARKS_LEFT_IRIS=lx,$t.FACE_LANDMARKS_RIGHT_EYE=om,$t.FACE_LANDMARKS_RIGHT_EYEBROW=am,$t.FACE_LANDMARKS_RIGHT_IRIS=cx,$t.FACE_LANDMARKS_FACE_OVAL=lm,$t.FACE_LANDMARKS_CONTOURS=ux,$t.FACE_LANDMARKS_TESSELATION=fx;var cm=qi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function q0(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Y0(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function K0(t,e=!0){const n=[];for(const r of t){var i=sf(r);t=[];for(const s of i.g())i=e&&Pi(s,1)!=null?Pi(s,1)??0:-1,t.push({score:en(s,2)??0,index:i,categoryName:wn(jt(s,3))??""??"",displayName:wn(jt(s,4))??""??""});n.push(t)}return n}var si=class extends mi{constructor(t,e){super(new Yi(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Je(t=this.j=new F2,0,1,e=new Jt),this.u=new $p,Je(this.j,0,2,this.u),this.D=new Kp,Je(this.u,0,3,this.D),this.A=new N2,Je(this.u,0,2,this.A),this.h=new W4,Je(this.j,0,3,this.h),Ye(this.A,2,.5),Ye(this.u,4,.5),Ye(this.D,2,.5)}get baseOptions(){return xt(this.j,Jt,1)}set baseOptions(t){Je(this.j,0,1,t)}o(t){var r,s,o,a;if(Zr(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ye(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ye(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ye(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new zo,n=e,i=Dd(t.cannedGesturesClassifierOptions,(r=xt(this.h,zo,3))==null?void 0:r.l());Je(n,0,2,i),Je(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=xt(this.h,zo,3))==null||s.g());return t.customGesturesClassifierOptions?(Je(n=e=new zo,0,2,i=Dd(t.customGesturesClassifierOptions,(o=xt(this.h,zo,4))==null?void 0:o.l())),Je(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((a=xt(this.h,zo,4))==null||a.g()),this.l(t)}Ha(t,e){return q0(this),Ki(this,t,e),Y0(this)}Ia(t,e,n){return q0(this),Er(this,t,n,e),Y0(this)}m(){var t=new _i;Kt(t,"image_in"),Kt(t,"norm_rect"),Et(t,"hand_gestures"),Et(t,"hand_landmarks"),Et(t,"world_hand_landmarks"),Et(t,"handedness");const e=new gi;Mr(e,X4,this.j);const n=new ti;pi(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Vt(n,"IMAGE:image_in"),Vt(n,"NORM_RECT:norm_rect"),pt(n,"HAND_GESTURES:hand_gestures"),pt(n,"LANDMARKS:hand_landmarks"),pt(n,"WORLD_LANDMARKS:world_hand_landmarks"),pt(n,"HANDEDNESS:handedness"),n.o(e),Ni(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=jl(s);const o=[];for(const a of $r(i,w2,1))o.push({x:en(a,1)??0,y:en(a,2)??0,z:en(a,3)??0,visibility:en(a,4)??0});this.landmarks.push(o)}Ie(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=Jo(s);const o=[];for(const a of $r(i,A2,1))o.push({x:en(a,1)??0,y:en(a,2)??0,z:en(a,3)??0,visibility:en(a,4)??0});this.worldLandmarks.push(o)}Ie(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...K0(i,!1)),Ie(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...K0(i)),Ie(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function $0(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}si.prototype.recognizeForVideo=si.prototype.Ia,si.prototype.recognize=si.prototype.Ha,si.prototype.setOptions=si.prototype.o,si.createFromModelPath=function(t,e){return _t(si,t,{baseOptions:{modelAssetPath:e}})},si.createFromModelBuffer=function(t,e){return _t(si,t,{baseOptions:{modelAssetBuffer:e}})},si.createFromOptions=function(t,e){return _t(si,t,e)},si.HAND_CONNECTIONS=cm;var ei=class extends mi{constructor(t,e){super(new Yi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Je(t=this.h=new $p,0,1,e=new Jt),this.u=new Kp,Je(this.h,0,3,this.u),this.j=new N2,Je(this.h,0,2,this.j),Zr(this.j,3,1),Ye(this.j,2,.5),Ye(this.u,2,.5),Ye(this.h,4,.5)}get baseOptions(){return xt(this.h,Jt,1)}set baseOptions(t){Je(this.h,0,1,t)}o(t){return"numHands"in t&&Zr(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ye(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ye(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ye(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ki(this,t,e),$0(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Er(this,t,n,e),$0(this)}m(){var t=new _i;Kt(t,"image_in"),Kt(t,"norm_rect"),Et(t,"hand_landmarks"),Et(t,"world_hand_landmarks"),Et(t,"handedness");const e=new gi;Mr(e,j4,this.h);const n=new ti;pi(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Vt(n,"IMAGE:image_in"),Vt(n,"NORM_RECT:norm_rect"),pt(n,"LANDMARKS:hand_landmarks"),pt(n,"WORLD_LANDMARKS:world_hand_landmarks"),pt(n,"HANDEDNESS:handedness"),n.o(e),Ni(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=jl(s),this.landmarks.push(af(i));Ie(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=Jo(s),this.worldLandmarks.push(dl(i));Ie(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const l of i){i=sf(l);const u=[];for(const c of i.g())u.push({score:en(c,2)??0,index:Pi(c,1)??0??-1,categoryName:wn(jt(c,3))??""??"",displayName:wn(jt(c,4))??""??""});a.push(u)}o.call(s,...a),Ie(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ei.prototype.detectForVideo=ei.prototype.G,ei.prototype.detect=ei.prototype.F,ei.prototype.setOptions=ei.prototype.o,ei.createFromModelPath=function(t,e){return _t(ei,t,{baseOptions:{modelAssetPath:e}})},ei.createFromModelBuffer=function(t,e){return _t(ei,t,{baseOptions:{modelAssetBuffer:e}})},ei.createFromOptions=function(t,e){return _t(ei,t,e)},ei.HAND_CONNECTIONS=cm;var hx=qi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Z0(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function J0(t){try{if(!t.D)return t.h;t.D(t.h)}finally{cf(t)}}function kc(t,e){t=jl(t),e.push(af(t))}var kt=class extends mi{constructor(t,e){super(new Yi(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Je(t=this.j=new V2,0,1,e=new Jt),this.I=new Kp,Je(this.j,0,2,this.I),this.W=new q4,Je(this.j,0,3,this.W),this.u=new of,Je(this.j,0,4,this.u),this.O=new D2,Je(this.j,0,5,this.O),this.A=new k2,Je(this.j,0,6,this.A),this.M=new z2,Je(this.j,0,7,this.M),Ye(this.u,2,.5),Ye(this.u,3,.3),Ye(this.O,2,.5),Ye(this.A,2,.5),Ye(this.A,3,.3),Ye(this.M,2,.5),Ye(this.I,2,.5)}get baseOptions(){return xt(this.j,Jt,1)}set baseOptions(t){Je(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Ye(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ye(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ye(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ye(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ye(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ye(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ye(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Z0(this),Ki(this,t,i),J0(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Z0(this),Er(this,t,r,e),J0(this)}m(){var t=new _i;Kt(t,"input_frames_image"),Et(t,"pose_landmarks"),Et(t,"pose_world_landmarks"),Et(t,"face_landmarks"),Et(t,"left_hand_landmarks"),Et(t,"left_hand_world_landmarks"),Et(t,"right_hand_landmarks"),Et(t,"right_hand_world_landmarks");const e=new gi,n=new S0;pi(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))Rt(r,2,ju(s,0,Ll));else{if(!(typeof s=="string"||s instanceof hr||mp(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");fs(r,2,_p(s,!1),lo())}})(n,this.j.g());const i=new ti;pi(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Lp(i,8,S0,n),Vt(i,"IMAGE:input_frames_image"),pt(i,"POSE_LANDMARKS:pose_landmarks"),pt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),pt(i,"FACE_LANDMARKS:face_landmarks"),pt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),pt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),pt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),pt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Ni(t,i),lf(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{kc(r,this.h.poseLandmarks),Ie(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{Ie(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var o=this.h.poseWorldLandmarks;r=Jo(r),o.push(dl(r)),Ie(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{Ie(this,r)})),this.outputPoseSegmentationMasks&&(pt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),pa(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[ga(this,r,!0,!this.D)],Ie(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],Ie(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{kc(r,this.h.faceLandmarks),Ie(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{Ie(this,r)})),this.outputFaceBlendshapes&&(Et(t,"extra_blendshapes"),pt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=sf(r),o.push(em(r.g()??[]))),Ie(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{Ie(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{kc(r,this.h.leftHandLandmarks),Ie(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{Ie(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var o=this.h.leftHandWorldLandmarks;r=Jo(r),o.push(dl(r)),Ie(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{Ie(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{kc(r,this.h.rightHandLandmarks),Ie(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{Ie(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var o=this.h.rightHandWorldLandmarks;r=Jo(r),o.push(dl(r)),Ie(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{Ie(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kt.prototype.detectForVideo=kt.prototype.G,kt.prototype.detect=kt.prototype.F,kt.prototype.setOptions=kt.prototype.o,kt.createFromModelPath=function(t,e){return _t(kt,t,{baseOptions:{modelAssetPath:e}})},kt.createFromModelBuffer=function(t,e){return _t(kt,t,{baseOptions:{modelAssetBuffer:e}})},kt.createFromOptions=function(t,e){return _t(kt,t,e)},kt.HAND_CONNECTIONS=cm,kt.POSE_CONNECTIONS=hx,kt.FACE_LANDMARKS_LIPS=im,kt.FACE_LANDMARKS_LEFT_EYE=rm,kt.FACE_LANDMARKS_LEFT_EYEBROW=sm,kt.FACE_LANDMARKS_LEFT_IRIS=lx,kt.FACE_LANDMARKS_RIGHT_EYE=om,kt.FACE_LANDMARKS_RIGHT_EYEBROW=am,kt.FACE_LANDMARKS_RIGHT_IRIS=cx,kt.FACE_LANDMARKS_FACE_OVAL=lm,kt.FACE_LANDMARKS_CONTOURS=ux,kt.FACE_LANDMARKS_TESSELATION=fx;var Ei=class extends mi{constructor(t,e){super(new Yi(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Je(t=this.h=new H2,0,1,e=new Jt)}get baseOptions(){return xt(this.h,Jt,1)}set baseOptions(t){Je(this.h,0,1,t)}o(t){return Je(this.h,0,2,Dd(t,xt(this.h,qp,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},Ki(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Er(this,t,n,e),this.j}m(){var t=new _i;Kt(t,"input_image"),Kt(t,"norm_rect"),Et(t,"classifications");const e=new gi;Mr(e,Y4,this.h);const n=new ti;pi(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Vt(n,"IMAGE:input_image"),Vt(n,"NORM_RECT:norm_rect"),pt(n,"CLASSIFICATIONS:classifications"),n.o(e),Ni(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=eC(F4(i)),Ie(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ei.prototype.classifyForVideo=Ei.prototype.ta,Ei.prototype.classify=Ei.prototype.sa,Ei.prototype.setOptions=Ei.prototype.o,Ei.createFromModelPath=function(t,e){return _t(Ei,t,{baseOptions:{modelAssetPath:e}})},Ei.createFromModelBuffer=function(t,e){return _t(Ei,t,{baseOptions:{modelAssetBuffer:e}})},Ei.createFromOptions=function(t,e){return _t(Ei,t,e)};var oi=class extends mi{constructor(t,e){super(new Yi(t,e),"image_in","norm_rect",!0),this.h=new G2,this.embeddings={embeddings:[]},Je(t=this.h,0,1,e=new Jt)}get baseOptions(){return xt(this.h,Jt,1)}set baseOptions(t){Je(this.h,0,1,t)}o(t){var e=this.h,n=xt(this.h,L0,2);return n=n?n.clone():new L0,t.l2Normalize!==void 0?Rt(n,1,Pl(t.l2Normalize)):"l2Normalize"in t&&Rt(n,1),t.quantize!==void 0?Rt(n,2,Pl(t.quantize)):"quantize"in t&&Rt(n,2),Je(e,0,2,n),this.l(t)}za(t,e){return Ki(this,t,e),this.embeddings}Aa(t,e,n){return Er(this,t,n,e),this.embeddings}m(){var t=new _i;Kt(t,"image_in"),Kt(t,"norm_rect"),Et(t,"embeddings_out");const e=new gi;Mr(e,K4,this.h);const n=new ti;pi(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Vt(n,"IMAGE:image_in"),Vt(n,"NORM_RECT:norm_rect"),pt(n,"EMBEDDINGS:embeddings_out"),n.o(e),Ni(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=k4(i),this.embeddings=(function(s){return{embeddings:$r(s,B4,1).map((o=>{var u,c;const a={headIndex:Pi(o,3)??0??-1,headName:wn(jt(o,4))??""??""};var l=o.v;return zv(l,0|l[Ge],P0,dh(o,1))!==void 0?(o=Js(o=xt(o,P0,dh(o,1),void 0),1,ur,Zs()),a.floatEmbedding=o.slice()):(l=new Uint8Array(0),a.quantizedEmbedding=((c=(u=xt(o,O4,dh(o,2),void 0))==null?void 0:u.na())==null?void 0:c.h())??l),a})),timestampMs:$2(jt(s,2,void 0,void 0,pu)??Nv)}})(i),Ie(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};oi.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=O0(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=O0(F0(t.quantizedEmbedding),F0(e.quantizedEmbedding))}return t},oi.prototype.embedForVideo=oi.prototype.Aa,oi.prototype.embed=oi.prototype.za,oi.prototype.setOptions=oi.prototype.o,oi.createFromModelPath=function(t,e){return _t(oi,t,{baseOptions:{modelAssetPath:e}})},oi.createFromModelBuffer=function(t,e){return _t(oi,t,{baseOptions:{modelAssetBuffer:e}})},oi.createFromOptions=function(t,e){return _t(oi,t,e)};var Fd=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};function aC(t){var n,i;const e=(function(r){return $r(r,ti,1)})(t.ca()).filter((r=>(wn(jt(r,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=xt(e[0],gi,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach(((r,s)=>{t.u[Number(s)]=wn(jt(r,1))??""}))}function Q0(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function e_(t){try{const e=new Fd(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{cf(t)}}Fd.prototype.close=Fd.prototype.close;var Qn=class extends mi{constructor(t,e){super(new Yi(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Qp,this.A=new W2,Je(this.h,0,3,this.A),Je(t=this.h,0,1,e=new Jt)}get baseOptions(){return xt(this.h,Jt,1)}set baseOptions(t){Je(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Rt(this.h,2,Gl(t.displayNamesLocale)):"displayNamesLocale"in t&&Rt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){aC(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Q0(this),Ki(this,t,i),e_(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Q0(this),Er(this,t,r,e),e_(this)}Da(){return this.u}m(){var t=new _i;Kt(t,"image_in"),Kt(t,"norm_rect");const e=new gi;Mr(e,j2,this.h);const n=new ti;pi(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Vt(n,"IMAGE:image_in"),Vt(n,"NORM_RECT:norm_rect"),n.o(e),Ni(t,n),lf(this,t),this.outputConfidenceMasks&&(Et(t,"confidence_masks"),pt(n,"CONFIDENCE_MASKS:confidence_masks"),pa(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>ga(this,s,!0,!this.j))),Ie(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ie(this,i)}))),this.outputCategoryMask&&(Et(t,"category_mask"),pt(n,"CATEGORY_MASK:category_mask"),pa(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=ga(this,i,!1,!this.j),Ie(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ie(this,i)}))),Et(t,"quality_scores"),pt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Ie(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Qn.prototype.getLabels=Qn.prototype.Da,Qn.prototype.segmentForVideo=Qn.prototype.La,Qn.prototype.segment=Qn.prototype.segment,Qn.prototype.setOptions=Qn.prototype.o,Qn.createFromModelPath=function(t,e){return _t(Qn,t,{baseOptions:{modelAssetPath:e}})},Qn.createFromModelBuffer=function(t,e){return _t(Qn,t,{baseOptions:{modelAssetBuffer:e}})},Qn.createFromOptions=function(t,e){return _t(Qn,t,e)};var Od=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};Od.prototype.close=Od.prototype.close;var Qi=class extends mi{constructor(t,e){super(new Yi(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Qp,this.u=new W2,Je(this.h,0,3,this.u),Je(t=this.h,0,1,e=new Jt)}get baseOptions(){return xt(this.h,Jt,1)}set baseOptions(t){Je(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new q2,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new _h;fs(s,3,Pl(!0),!1),fs(s,1,il(e.keypoint.x),0),fs(s,2,il(e.keypoint.y),0),fl(i,1,Ld,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const a=new Z4;for(s of e.scribble)fs(e=new _h,3,Pl(!0),!1),fs(e,1,il(s.x),0),fs(e,2,il(s.y),0),Lp(a,1,_h,e);fl(i,2,Ld,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Ki(this,t,r);e:{try{const a=new Od(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break e}this.j(a)}finally{cf(this)}o=void 0}return o}m(){var t=new _i;Kt(t,"image_in"),Kt(t,"roi_in"),Kt(t,"norm_rect_in");const e=new gi;Mr(e,j2,this.h);const n=new ti;pi(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Vt(n,"IMAGE:image_in"),Vt(n,"ROI:roi_in"),Vt(n,"NORM_RECT:norm_rect_in"),n.o(e),Ni(t,n),lf(this,t),this.outputConfidenceMasks&&(Et(t,"confidence_masks"),pt(n,"CONFIDENCE_MASKS:confidence_masks"),pa(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>ga(this,s,!0,!this.j))),Ie(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ie(this,i)}))),this.outputCategoryMask&&(Et(t,"category_mask"),pt(n,"CATEGORY_MASK:category_mask"),pa(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=ga(this,i,!1,!this.j),Ie(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ie(this,i)}))),Et(t,"quality_scores"),pt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Ie(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Qi.prototype.segment=Qi.prototype.segment,Qi.prototype.setOptions=Qi.prototype.o,Qi.createFromModelPath=function(t,e){return _t(Qi,t,{baseOptions:{modelAssetPath:e}})},Qi.createFromModelBuffer=function(t,e){return _t(Qi,t,{baseOptions:{modelAssetBuffer:e}})},Qi.createFromOptions=function(t,e){return _t(Qi,t,e)};var bi=class extends mi{constructor(t,e){super(new Yi(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Je(t=this.h=new Y2,0,1,e=new Jt)}get baseOptions(){return xt(this.h,Jt,1)}set baseOptions(t){Je(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Rt(this.h,2,Gl(t.displayNamesLocale)):"displayNamesLocale"in t&&Rt(this.h,2),t.maxResults!==void 0?Zr(this.h,3,t.maxResults):"maxResults"in t&&Rt(this.h,3),t.scoreThreshold!==void 0?Ye(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&Rt(this.h,4),t.categoryAllowlist!==void 0?gu(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&Rt(this.h,5),t.categoryDenylist!==void 0?gu(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&Rt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Ki(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Er(this,t,n,e),this.j}m(){var t=new _i;Kt(t,"input_frame_gpu"),Kt(t,"norm_rect"),Et(t,"detections");const e=new gi;Mr(e,J4,this.h);const n=new ti;pi(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Vt(n,"IMAGE:input_frame_gpu"),Vt(n,"NORM_RECT:norm_rect"),pt(n,"DETECTIONS:detections"),n.o(e),Ni(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=T2(s),this.j.detections.push(Z2(i));Ie(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};bi.prototype.detectForVideo=bi.prototype.G,bi.prototype.detect=bi.prototype.F,bi.prototype.setOptions=bi.prototype.o,bi.createFromModelPath=async function(t,e){return _t(bi,t,{baseOptions:{modelAssetPath:e}})},bi.createFromModelBuffer=function(t,e){return _t(bi,t,{baseOptions:{modelAssetBuffer:e}})},bi.createFromOptions=function(t,e){return _t(bi,t,e)};var Bd=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach((e=>{e.close()}))}};function t_(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function n_(t){try{const e=new Bd(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{cf(t)}}Bd.prototype.close=Bd.prototype.close;var ai=class extends mi{constructor(t,e){super(new Yi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Je(t=this.h=new K2,0,1,e=new Jt),this.A=new z2,Je(this.h,0,3,this.A),this.j=new k2,Je(this.h,0,2,this.j),Zr(this.j,4,1),Ye(this.j,2,.5),Ye(this.A,2,.5),Ye(this.h,4,.5)}get baseOptions(){return xt(this.h,Jt,1)}set baseOptions(t){Je(this.h,0,1,t)}o(t){return"numPoses"in t&&Zr(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ye(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ye(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ye(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,t_(this),Ki(this,t,i),n_(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,t_(this),Er(this,t,r,e),n_(this)}m(){var t=new _i;Kt(t,"image_in"),Kt(t,"norm_rect"),Et(t,"normalized_landmarks"),Et(t,"world_landmarks"),Et(t,"segmentation_masks");const e=new gi;Mr(e,Q4,this.h);const n=new ti;pi(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Vt(n,"IMAGE:image_in"),Vt(n,"NORM_RECT:norm_rect"),pt(n,"NORM_LANDMARKS:normalized_landmarks"),pt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Ni(t,n),lf(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=jl(s),this.landmarks.push(af(i));Ie(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Ie(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=Jo(s),this.worldLandmarks.push(dl(i));Ie(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Ie(this,i)})),this.outputSegmentationMasks&&(pt(n,"SEGMENTATION_MASK:segmentation_masks"),pa(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>ga(this,s,!0,!this.u))),Ie(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Ie(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ai.prototype.detectForVideo=ai.prototype.G,ai.prototype.detect=ai.prototype.F,ai.prototype.setOptions=ai.prototype.o,ai.createFromModelPath=function(t,e){return _t(ai,t,{baseOptions:{modelAssetPath:e}})},ai.createFromModelBuffer=function(t,e){return _t(ai,t,{baseOptions:{modelAssetBuffer:e}})},ai.createFromOptions=function(t,e){return _t(ai,t,e)},ai.POSE_CONNECTIONS=hx;const dx="/particle-earth-hand/",lC=dx+"mediapipe/wasm",cC=dx+"models/hand_landmarker.task",xh=[0,5,9,13,17],i_=[[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]],uC=.16,fC=.2,r_=.15,s_=.12,o_=.05,zc=2.2,hC=30,Vo=(t,e,n)=>t<e?e:t>n?n:t,ks=(t,e)=>{const n=t.x-e.x,i=t.y-e.y;return Math.hypot(n,i)};function dC(){const t=Qt("idle"),e=Qt(""),n=Qt(!1),i=Qt(0),r=Qt(0),s=Qt({x:.5,y:.5}),o=Qt({x:0,y:0}),a=Yx([]),l=Qt(0);let u=null,c=null,f=0,h=!1,p=0,_=-1,v=0,m=0,d=0;async function w(){const x=await Go.forVisionTasks(lC),C=F=>ei.createFromOptions(x,{baseOptions:{modelAssetPath:cC,delegate:F},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});try{return await C("GPU")}catch(F){return console.warn("[hand] GPU delegate 不可用，回落到 CPU：",F),await C("CPU")}}function A(x){const C=(x==null?void 0:x.name)||"";if(console.error("[hand] 摄像头/模型初始化失败：",x),C==="NotAllowedError"||C==="PermissionDeniedError"||C==="SecurityError"){t.value="denied",e.value="摄像头权限被拒绝。请在浏览器地址栏左侧的「摄像头」图标里选择「允许」，然后点击重试。";return}if(C==="NotFoundError"||C==="DevicesNotFoundError"||C==="OverconstrainedError"){t.value="no-camera",e.value="没有检测到可用摄像头。请连接摄像头后重试，或改用带摄像头的设备。";return}if(C==="NotReadableError"||C==="TrackStartError"){t.value="error",e.value="摄像头被其他程序占用（如微信/钉钉/其他浏览器标签）。请关闭占用摄像头的程序后重试。";return}t.value="error",e.value=`初始化失败：${(x==null?void 0:x.message)||String(x)}`}function y(x){if(!x.landmarks||x.landmarks.length===0){n.value=!1,a.value=[],o.value={x:o.value.x*.82,y:o.value.y*.82},Math.abs(o.value.x)<.01&&(o.value.x=0),Math.abs(o.value.y)<.01&&(o.value.y=0);return}const C=x.landmarks[0];n.value=!0,a.value=C;let F=0,G=0;for(const ve of xh)F+=C[ve].x,G+=C[ve].y;const re=F/xh.length,le=G/xh.length,J=1-re,te=le,W=Math.max(ks(C[0],C[9]),1e-4),_e=ks(C[4],C[8])/W;i.value=i.value+(Vo(_e,0,2)-i.value)*uC;let Ee=0;for(const ve of i_){const Ue=C[ve[0]],De=C[ve[1]],je=C[ve[2]],b=C[ve[3]],P=ks(Ue,De)+ks(De,je)+ks(je,b),j=ks(Ue,b);Ee+=P>1e-6?j/P:0}const Ce=Ee/i_.length,Ne=Vo((Ce-.62)/.33,0,1),rt=Vo((ks(C[8],C[20])/W-.45)/.55,0,1),ae=Vo(Ne*.72+rt*.28,0,1);r.value=r.value+(ae-r.value)*fC;const ge=performance.now(),Te=v?Math.max((ge-v)/1e3,.001):0;if(v=ge,Te>0&&Te<.5){const ve=Vo((J-s.value.x)/Te,-zc,zc),Ue=Vo((te-s.value.y)/Te,-zc,zc),De=o.value.x+(ve-o.value.x)*s_,je=o.value.y+(Ue-o.value.y)*s_;o.value={x:Math.abs(De)<o_?0:De,y:Math.abs(je)<o_?0:je}}s.value={x:s.value.x+(J-s.value.x)*r_,y:s.value.y+(te-s.value.y)*r_}}function H(){if(!h)return;f=requestAnimationFrame(H);const x=N;if(!x||x.readyState<2||!u)return;const C=performance.now();if(m||(m=C),C-m>=500&&(l.value=Math.round(d*1e3/(C-m)),d=0,m=C),!(C-p<hC)&&x.currentTime!==_){p=C,_=x.currentTime;try{const F=u.detectForVideo(x,C);d+=1,y(F)}catch(F){console.warn("[hand] 单帧检测失败：",F)}}}let N=null;async function L(x){var C;if(!(h||t.value==="loading")){N=x,t.value="loading",e.value="";try{if(!((C=navigator.mediaDevices)!=null&&C.getUserMedia))throw new DOMException("当前浏览器不支持摄像头接口（需要 https 或 http://localhost / 127.0.0.1 环境）","SecurityError");c=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:{ideal:640},height:{ideal:480},frameRate:{ideal:30,max:30}}}),x.srcObject=c,x.muted=!0,x.playsInline=!0,await x.play()}catch(F){A(F),D();return}try{u||(u=await w())}catch(F){t.value="error",e.value=`手势模型加载失败：${(F==null?void 0:F.message)||String(F)}。请确认 public/mediapipe/wasm 与 public/models/hand_landmarker.task 已就位。`,D();return}t.value="ready",h=!0,_=-1,p=0,v=0,m=0,d=0,H()}}function D(){h=!1,f&&cancelAnimationFrame(f),f=0,c==null||c.getTracks().forEach(x=>x.stop()),c=null,N&&(N.srcObject=null),n.value=!1,a.value=[],o.value={x:0,y:0},l.value=0,t.value!=="denied"&&t.value!=="no-camera"&&t.value!=="error"&&(t.value="idle")}function S(){D(),u==null||u.close(),u=null}return{status:t,errorMessage:e,handDetected:n,handOpenness:i,handSpread:r,palmPosition:s,palmVelocity:o,landmarks:a,fps:l,start:L,stop:D,dispose:S}}const pC={class:"topbar"},mC={class:"top-actions"},gC=["title","aria-label"],_C={key:0,viewBox:"0 0 24 24","aria-hidden":"true"},vC={key:1,viewBox:"0 0 24 24","aria-hidden":"true"},xC=["title"],yC={class:"rail","aria-label":"遥测数据"},MC={class:"rail-rows"},SC={class:"k"},EC={class:"v mono"},bC={class:"caption"},TC={class:"cap-cn"},AC={class:"cap-en"},wC={class:"cap-meta"},CC={class:"cam-frame"},RC={class:"cam-foot"},PC={class:"mono"},LC={class:"mono fps"},DC={key:0,class:"gate"},IC={key:0,class:"gate-status"},UC={class:"gate-desc"},NC={key:1,class:"gate-gestures"},FC={key:2,class:"gate-loading"},OC={key:3,class:"gate-actions"},BC={key:4,class:"gate-note"},kC={key:5,class:"gate-note"},zC={key:6,class:"gate-note"},VC={key:7,class:"gate-note"},HC=j_({__name:"App",setup(t){const e={chart:{cn:"深空制图",en:"DEEP SPACE CHART"}},n=[{cn:"上海",en:"SHANGHAI",tag:"31.23°N · 121.47°E",lon:121.47,lat:31.23},{cn:"东京",en:"TOKYO",tag:"35.68°N · 139.69°E",lon:139.69,lat:35.68},{cn:"新加坡",en:"SINGAPORE",tag:"1.35°N · 103.82°E",lon:103.82,lat:1.35},{cn:"迪拜",en:"DUBAI",tag:"25.20°N · 55.27°E",lon:55.27,lat:25.2},{cn:"巴黎",en:"PARIS",tag:"48.86°N · 2.35°E",lon:2.35,lat:48.86},{cn:"纽约",en:"NEW YORK",tag:"40.71°N · 74.01°W",lon:-74.01,lat:40.71},{cn:"悉尼",en:"SYDNEY",tag:"33.87°S · 151.21°E",lon:151.21,lat:-33.87}];function i(){const U=new Date,R=ce=>String(ce).padStart(2,"0");return String(U.getFullYear())+"-"+R(U.getMonth()+1)+"-"+R(U.getDate())}function r(){return{mode:"chart",modeCn:e.chart.cn,modeEn:e.chart.en,city:n[0],lon:121.47,lat:31.23,distance:1.9,fps:60,gesture:"待启动",focus:"地球",cities:13414,satellites:1144,zones:1,rangeKm:384400,signal:77,date:i()}}const s=Qt(null),o=Qt(null),a=Qt(null),{status:l,errorMessage:u,handDetected:c,handOpenness:f,handSpread:h,palmPosition:p,palmVelocity:_,landmarks:v,fps:m,start:d,stop:w,dispose:A}=dC(),y=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]],H=Dn(()=>l.value==="ready"),N=Qt(new URLSearchParams(window.location.search).has("preview")),L=Dn(()=>l.value!=="ready"&&!N.value),D=Qt(r()),S=Qt(!1),x=Qt(null),C=Qt(null),F=Qt(!0),G=Qt(!0),re=Qt(!1);function le(U){!U||typeof U!="object"||(D.value={...D.value,...U},S.value=!0,x.value&&U.mode===x.value&&(x.value=null),C.value&&U.city&&U.city.cn===C.value.cn&&(C.value=null))}function J(){return a.value}const te=Dn(()=>x.value??D.value.mode),W=Dn(()=>C.value??D.value.city),_e=(U,R)=>typeof U=="number"&&Number.isFinite(U)?U:R,Ee=U=>{const R=_e(U,0);return Math.abs(R).toFixed(2)+"°"+(R>=0?"E":"W")},Ce=U=>{const R=_e(U,0);return Math.abs(R).toFixed(2)+"°"+(R>=0?"N":"S")},Ne=U=>Math.round(_e(U,0)).toLocaleString("en-US"),rt=Dn(()=>S.value&&Number.isFinite(D.value.fps)?Math.round(D.value.fps):m.value>0?m.value:60),ae=Dn(()=>S.value&&D.value.gesture?D.value.gesture:l.value==="loading"||!H.value||!c.value?"待启动":h.value<.3?"握持":h.value>.72?"张开":Math.hypot(_.value.x,_.value.y)>.18?"移动":"握持"),ge=Dn(()=>Math.round(_e(D.value.signal,77))),Te=Dn(()=>{const U=D.value;return[{k:"经度",v:Ee(U.lon)},{k:"纬度",v:Ce(U.lat)},{k:"距率",v:_e(U.distance,1.9).toFixed(2)+"×"},{k:"帧率",v:String(rt.value)+" fps"},{k:"手势",v:ae.value},{k:"焦点",v:U.focus||"地球"},{k:"城市",v:Ne(U.cities)},{k:"卫星",v:Ne(U.satellites)},{k:"空间区",v:String(Math.round(_e(U.zones,1)))},{k:"测距",v:Ne(U.rangeKm)+" km"},{k:"日期",v:U.date||i()},{k:"信号",v:String(ge.value)+"%"}]}),ve=Dn(()=>{var U;return te.value==="meteor"?"流星雨":((U=W.value)==null?void 0:U.cn)??"地球"}),Ue=Dn(()=>{var U;return te.value==="meteor"?"METEOR SHOWER":((U=W.value)==null?void 0:U.en)??"EARTH"}),De=Dn(()=>{if(te.value==="meteor")return"METEOR SHOWER · 轨道合成";const U=W.value;return U?U.tag||Ce(U.lat)+" "+Ee(U.lon):Ce(D.value.lat)+" "+Ee(D.value.lon)}),je=Dn(()=>{var U,R;return String(((U=W.value)==null?void 0:U.index)??((R=W.value)==null?void 0:R.cn)??"earth")+"-"+te.value});function b(){var R,ce;const U=te.value==="chart"?"meteor":"chart";x.value=U,(ce=(R=J())==null?void 0:R.setMode)==null||ce.call(R,U)}function P(U){var fe,Me,Fe;const R=J();if(R!=null&&R.nextCity||R!=null&&R.prevCity){U>0?(fe=R.nextCity)==null||fe.call(R):(Me=R.prevCity)==null||Me.call(R);return}const ce=n,me=(Fe=W.value)==null?void 0:Fe.cn,de=ce.findIndex(Le=>Le.cn===me),He=Math.max(0,de);C.value=ce[(He+U+ce.length)%ce.length]}function j(){F.value=!F.value}function T(){G.value=!G.value}async function ne(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}}function Y(){re.value=!!document.fullscreenElement}function se(U){if(U.metaKey||U.ctrlKey||U.altKey)return;const R=U.target;if(!(R&&(R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable)))switch(U.key){case"m":case"M":U.preventDefault(),U.stopPropagation(),b();break;case"ArrowLeft":U.preventDefault(),U.stopPropagation(),P(-1);break;case"ArrowRight":U.preventDefault(),U.stopPropagation(),P(1);break;case"h":case"H":U.preventDefault(),U.stopPropagation(),j();break;case"f":case"F":U.preventDefault(),U.stopPropagation(),ne();break}}async function Z(){const U=s.value;U&&await d(U)}function ue(){w(),l.value="idle",u.value="",Z()}function X(){w()}function M(){const U=o.value;if(!U)return;const R=U.getContext("2d");if(!R)return;const ce=U.width,me=U.height;R.clearRect(0,0,ce,me);const de=v.value;if(!de||de.length<21)return;const He=Ke=>(1-Ke.x)*ce,fe=Ke=>Ke.y*me;R.lineWidth=2,R.strokeStyle="rgba(120, 205, 255, 0.8)",R.shadowColor="rgba(120, 205, 255, 0.9)",R.shadowBlur=6;for(const[Ke,$e]of y)R.beginPath(),R.moveTo(He(de[Ke]),fe(de[Ke])),R.lineTo(He(de[$e]),fe(de[$e])),R.stroke();for(let Ke=0;Ke<de.length;Ke++){const $e=[4,8,12,16,20].includes(Ke),vt=$e?4:2.6;R.beginPath(),R.arc(He(de[Ke]),fe(de[Ke]),vt,0,Math.PI*2),R.fillStyle=$e?"rgba(255, 255, 255, 0.95)":"rgba(150, 235, 255, 0.85)",R.fill()}const Me=He(de[4]),Fe=fe(de[4]),Le=He(de[8]),Se=fe(de[8]);R.shadowBlur=10,R.strokeStyle="rgba(255, 214, 150, 0.8)",R.lineWidth=1.6,R.setLineDash([4,3]),R.beginPath(),R.moveTo(Me,Fe),R.lineTo(Le,Se),R.stroke(),R.setLineDash([]),R.shadowBlur=0,R.font='11px "Cascadia Mono", Consolas, monospace',R.fillStyle="rgba(255, 226, 160, 0.9)",R.fillText(f.value.toFixed(2),(Me+Le)/2+6,(Fe+Se)/2-4)}Hc(v,M);const g=Dn(()=>l.value==="denied"||l.value==="no-camera"||l.value==="error"),I=Dn(()=>{switch(l.value){case"loading":return"正在启动隔空手势";case"denied":return"摄像头权限被拒绝";case"no-camera":return"没有找到可用摄像头";case"error":return"启动失败";default:return"深空制图仪"}}),q=Dn(()=>{switch(l.value){case"loading":return"正在请求摄像头权限并加载本地手势模型（MediaPipe HandLandmarker），首次加载约需 1~3 秒。";case"denied":case"no-camera":case"error":return u.value||"请检查摄像头与权限后重试。";default:return"开启摄像头后，用拇指与食指开合缩放地球，平移手掌旋转地球，握拳唤起流星雨，五指张开回到制图模式。画面仅在本机浏览器内计算，不会上传。"}});return Lu(()=>{window.addEventListener("keydown",se,!0),document.addEventListener("fullscreenchange",Y)}),Du(()=>{window.removeEventListener("keydown",se,!0),document.removeEventListener("fullscreenchange",Y),A()}),(U,R)=>(vn(),Sn("div",{class:tr(["app",{"hud-hidden":!F.value,"gate-open":L.value}])},[Bn(bw,{ref_key:"earthRef",ref:a,pinch:Ln(f),spread:Ln(h),palm:Ln(p),"palm-vel":Ln(_),detected:Ln(c),onTelemetry:le},null,8,["pinch","spread","palm","palm-vel","detected"]),R[15]||(R[15]=tt("div",{class:"vignette","aria-hidden":"true"},null,-1)),tt("div",pC,[tt("div",mC,[tt("button",{class:tr(["icon-btn",{active:!G.value}]),title:G.value?"声音：开（点击静音）":"声音：已静音（点击开启）","aria-label":G.value?"静音":"开启声音",onClick:T},[G.value?(vn(),Sn("svg",_C,[...R[2]||(R[2]=[tt("path",{d:"M4 9.5v5h3.2L12 18.6V5.4L7.2 9.5H4Z"},null,-1),tt("path",{d:"M15.6 9.2a4.1 4.1 0 0 1 0 5.6"},null,-1),tt("path",{d:"M18.2 6.6a7.8 7.8 0 0 1 0 10.8"},null,-1)])])):(vn(),Sn("svg",vC,[...R[3]||(R[3]=[tt("path",{d:"M4 9.5v5h3.2L12 18.6V5.4L7.2 9.5H4Z"},null,-1),tt("path",{d:"m15.8 9.6 4.4 4.8"},null,-1),tt("path",{d:"m20.2 9.6-4.4 4.8"},null,-1)])]))],10,gC),tt("button",{class:tr(["icon-btn",{active:F.value}]),title:F.value?"隐藏 HUD（H）":"显示 HUD（H）","aria-label":"切换 HUD 显示",onClick:j},[...R[4]||(R[4]=[Sf('<svg viewBox="0 0 24 24" aria-hidden="true" data-v-b0591796><path d="M4 7.5h8.5" data-v-b0591796></path><path d="M17 7.5h3" data-v-b0591796></path><circle cx="14.8" cy="7.5" r="2.1" data-v-b0591796></circle><path d="M4 16.5h3" data-v-b0591796></path><path d="M11.5 16.5h8.5" data-v-b0591796></path><circle cx="9.2" cy="16.5" r="2.1" data-v-b0591796></circle></svg>',1)])],10,xC),tt("button",{class:tr(["icon-btn",{active:re.value}]),title:"全屏（F）","aria-label":"切换全屏",onClick:ne},[...R[5]||(R[5]=[Sf('<svg viewBox="0 0 24 24" aria-hidden="true" data-v-b0591796><path d="M9.2 4H4v5.2" data-v-b0591796></path><path d="M14.8 4H20v5.2" data-v-b0591796></path><path d="M20 14.8V20h-5.2" data-v-b0591796></path><path d="M4 14.8V20h5.2" data-v-b0591796></path></svg>',1)])],2)])]),tt("aside",yC,[R[6]||(R[6]=tt("h1",{class:"rail-title"},"深空制图仪",-1)),R[7]||(R[7]=tt("p",{class:"rail-sub"},"手势地球 · 第一号",-1)),R[8]||(R[8]=tt("i",{class:"rail-rule","aria-hidden":"true"},null,-1)),tt("div",MC,[(vn(!0),Sn(ci,null,wy(Te.value,ce=>(vn(),Sn("div",{key:ce.k,class:"rail-row"},[tt("span",SC,Ti(ce.k),1),tt("span",EC,Ti(ce.v),1)]))),128))])]),tt("div",bC,[Bn(MM,{name:"cap",mode:"out-in"},{default:k_(()=>[(vn(),Sn("div",{key:je.value,class:"cap-inner"},[tt("h2",TC,Ti(ve.value),1),tt("p",AC,Ti(Ue.value),1),tt("p",wC,Ti(De.value),1)]))]),_:1})]),R[16]||(R[16]=Sf('<footer class="hints" data-v-b0591796><p data-v-b0591796><span class="gap" data-v-b0591796>握拳 · 流星雨</span><span class="gap" data-v-b0591796>五指张开 · 制图模式</span><span class="gap" data-v-b0591796>捏合 · 缩放</span><span data-v-b0591796>平移 · 旋转</span></p><p class="dim" data-v-b0591796>鼠标拖拽旋转 · 滚轮缩放 · M 切换模式 · ← → 切换城市</p></footer>',1)),oy(tt("aside",{class:tr(["cam-card",{detected:Ln(c)}]),"aria-label":"摄像头预览"},[tt("div",CC,[tt("video",{ref_key:"videoRef",ref:s,class:"cam-video",autoplay:"",muted:"",playsinline:""},null,512),tt("canvas",{ref_key:"overlayRef",ref:o,class:"cam-overlay",width:"640",height:"480"},null,512),tt("button",{class:"cam-stop",title:"停止摄像头","aria-label":"停止摄像头",onClick:X},"×")]),tt("div",RC,[tt("i",{class:tr(["dot",{on:H.value}])},null,2),tt("span",PC,Ti(Ln(c)?"HAND":"SCAN"),1),tt("span",LC,Ti(Ln(m))+"FPS",1)])],2),[[wM,H.value]]),L.value?(vn(),Sn("div",DC,[tt("div",{class:tr(["gate-inner",{error:g.value}])},[R[11]||(R[11]=tt("p",{class:"gate-eyebrow"},"GESTURE EARTH · TERMINAL 01",-1)),R[12]||(R[12]=tt("h2",{class:"gate-title"},"深空制图仪",-1)),R[13]||(R[13]=tt("p",{class:"gate-sub"},"手势地球 · 第一号",-1)),R[14]||(R[14]=tt("i",{class:"gate-rule","aria-hidden":"true"},null,-1)),g.value?(vn(),Sn("p",IC,Ti(I.value),1)):Wo("",!0),tt("p",UC,Ti(q.value),1),g.value?Wo("",!0):(vn(),Sn("div",NC,[...R[9]||(R[9]=[tt("span",null,"捏合 · 缩放",-1),tt("span",null,"握拳 · 流星雨",-1),tt("span",null,"五指张开 · 制图",-1),tt("span",null,"平移 · 旋转",-1)])])),Ln(l)==="loading"?(vn(),Sn("div",FC,[...R[10]||(R[10]=[tt("span",{class:"spinner"},null,-1),tt("span",null,"正在请求摄像头与加载本地手势模型…",-1)])])):(vn(),Sn("div",OC,[tt("button",{class:"gate-btn primary",onClick:R[0]||(R[0]=ce=>Ln(l)==="idle"?Z():ue())},Ti(Ln(l)==="idle"?"开启摄像头":"重试"),1),tt("button",{class:"gate-btn ghost",onClick:R[1]||(R[1]=ce=>N.value=!0)},"先只看地球")])),Ln(l)==="denied"?(vn(),Sn("p",BC," 恢复方法：点击地址栏左侧的锁形 / 摄像头图标 → 将「摄像头」设为「允许」→ 刷新页面。 ")):Ln(l)==="no-camera"?(vn(),Sn("p",kC," 也可以先只观看地球自转；接入摄像头后刷新本页即可启用隔空手势。 ")):Ln(l)==="error"?(vn(),Sn("p",zC," 若手势模型加载失败，请确认 public/mediapipe/wasm 与 public/models/hand_landmarker.task 已就位。 ")):Ln(l)==="idle"?(vn(),Sn("p",VC," 需通过 http://127.0.0.1:5173 或 https 访问，浏览器才会允许摄像头授权；所有画面仅在本机计算，不会上传。 ")):Wo("",!0)],2)])):Wo("",!0)],2))}}),GC=uv(HC,[["__scopeId","data-v-b0591796"]]);qM(GC).mount("#app");
