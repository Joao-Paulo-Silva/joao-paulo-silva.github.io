(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function t8(c,a){const e=new Set(c.split(","));return a?r=>e.has(r.toLowerCase()):r=>e.has(r)}const z1={},J2=[],R1=()=>{},Yo=()=>!1,w4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),m8=c=>c.startsWith("onUpdate:"),V1=Object.assign,z8=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Xo=Object.prototype.hasOwnProperty,X=(c,a)=>Xo.call(c,a),I=Array.isArray,c3=c=>A4(c)==="[object Map]",L7=c=>A4(c)==="[object Set]",j=c=>typeof c=="function",H1=c=>typeof c=="string",f3=c=>typeof c=="symbol",o1=c=>c!==null&&typeof c=="object",g7=c=>(o1(c)||j(c))&&j(c.then)&&j(c.catch),x7=Object.prototype.toString,A4=c=>x7.call(c),Qo=c=>A4(c).slice(8,-1),b7=c=>A4(c)==="[object Object]",v8=c=>H1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,t4=t8(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Jo=/-(\w)/g,J1=k4(c=>c.replace(Jo,(a,e)=>e?e.toUpperCase():"")),ct=/\B([A-Z])/g,o3=k4(c=>c.replace(ct,"-$1").toLowerCase()),P4=k4(c=>c.charAt(0).toUpperCase()+c.slice(1)),h6=k4(c=>c?`on${P4(c)}`:""),b2=(c,a)=>!Object.is(c,a),H6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},p4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},at=c=>{const a=parseFloat(c);return isNaN(a)?c:a},et=c=>{const a=H1(c)?Number(c):NaN;return isNaN(a)?c:a};let Z0;const N7=()=>Z0||(Z0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function h8(c){if(I(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=H1(r)?nt(r):h8(r);if(s)for(const i in s)a[i]=s[i]}return a}else if(H1(c)||o1(c))return c}const rt=/;(?![^(]*\))/g,st=/:([^]+)/,it=/\/\*[^]*?\*\//g;function nt(c){const a={};return c.replace(it,"").split(rt).forEach(e=>{if(e){const r=e.split(st);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function H8(c){let a="";if(H1(c))a=c;else if(I(c))for(let e=0;e<c.length;e++){const r=H8(c[e]);r&&(a+=r+" ")}else if(o1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const lt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ft=t8(lt);function S7(c){return!!c||c===""}const P6=c=>H1(c)?c:c==null?"":I(c)||o1(c)&&(c.toString===x7||!j(c.toString))?JSON.stringify(c,y7,2):String(c),y7=(c,a)=>a&&a.__v_isRef?y7(c,a.value):c3(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,s],i)=>(e[u6(r,i)+" =>"]=s,e),{})}:L7(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>u6(e))}:f3(a)?u6(a):o1(a)&&!I(a)&&!b7(a)?String(a):a,u6=(c,a="")=>{var e;return f3(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let O1;class w7{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=O1,!a&&O1&&(this.index=(O1.scopes||(O1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=O1;try{return O1=this,a()}finally{O1=e}}}on(){O1=this}off(){O1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ot(c){return new w7(c)}function tt(c,a=O1){a&&a.active&&a.effects.push(c)}function mt(){return O1}let D2;class u8{constructor(a,e,r,s){this.fn=a,this.trigger=e,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,tt(this,s)}get dirty(){if(this._dirtyLevel===1){U2();for(let a=0;a<this._depsLength;a++){const e=this.deps[a];if(e.computed&&(zt(e.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),I2()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=g2,e=D2;try{return g2=!0,D2=this,this._runnings++,K0(this),this.fn()}finally{Y0(this),this._runnings--,D2=e,g2=a}}stop(){var a;this.active&&(K0(this),Y0(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function zt(c){return c.value}function K0(c){c._trackId++,c._depsLength=0}function Y0(c){if(c.deps&&c.deps.length>c._depsLength){for(let a=c._depsLength;a<c.deps.length;a++)A7(c.deps[a],c);c.deps.length=c._depsLength}}function A7(c,a){const e=c.get(a);e!==void 0&&a._trackId!==e&&(c.delete(a),c.size===0&&c.cleanup())}let g2=!0,T6=0;const k7=[];function U2(){k7.push(g2),g2=!1}function I2(){const c=k7.pop();g2=c===void 0?!0:c}function V8(){T6++}function p8(){for(T6--;!T6&&F6.length;)F6.shift()()}function P7(c,a,e){if(a.get(c)!==c._trackId){a.set(c,c._trackId);const r=c.deps[c._depsLength];r!==a?(r&&A7(r,c),c.deps[c._depsLength++]=a):c._depsLength++}}const F6=[];function T7(c,a,e){V8();for(const r of c.keys())if(r._dirtyLevel<a&&c.get(r)===r._trackId){const s=r._dirtyLevel;r._dirtyLevel=a,s===0&&(r._shouldSchedule=!0,r.trigger())}F7(c),p8()}function F7(c){for(const a of c.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&c.get(a)===a._trackId&&(a._shouldSchedule=!1,F6.push(a.scheduler))}const B7=(c,a)=>{const e=new Map;return e.cleanup=c,e.computed=a,e},B6=new WeakMap,q2=Symbol(""),_6=Symbol("");function A1(c,a,e){if(g2&&D2){let r=B6.get(c);r||B6.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=B7(()=>r.delete(e))),P7(D2,s)}}function s2(c,a,e,r,s,i){const n=B6.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&I(c)){const f=Number(r);n.forEach((t,o)=>{(o==="length"||!f3(o)&&o>=f)&&l.push(t)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":I(c)?v8(e)&&l.push(n.get("length")):(l.push(n.get(q2)),c3(c)&&l.push(n.get(_6)));break;case"delete":I(c)||(l.push(n.get(q2)),c3(c)&&l.push(n.get(_6)));break;case"set":c3(c)&&l.push(n.get(q2));break}V8();for(const f of l)f&&T7(f,2);p8()}const vt=t8("__proto__,__v_isRef,__isVue"),_7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(f3)),X0=ht();function ht(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=Q(this);for(let i=0,n=this.length;i<n;i++)A1(r,"get",i+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){U2(),V8();const r=Q(this)[a].apply(this,e);return p8(),I2(),r}}),c}function Ht(c){const a=Q(this);return A1(a,"has",c),a.hasOwnProperty(c)}class R7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const s=this._isReadonly,i=this._shallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return i;if(e==="__v_raw")return r===(s?i?yt:O7:i?q7:D7).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const n=I(a);if(!s){if(n&&X(X0,e))return Reflect.get(X0,e,r);if(e==="hasOwnProperty")return Ht}const l=Reflect.get(a,e,r);return(f3(e)?_7.has(e):vt(e))||(s||A1(a,"get",e),i)?l:k1(l)?n&&v8(e)?l:l.value:o1(l)?s?U7(l):F4(l):l}}class E7 extends R7{constructor(a=!1){super(!1,a)}set(a,e,r,s){let i=a[e];if(!this._shallow){const f=s3(i);if(!M4(r)&&!s3(r)&&(i=Q(i),r=Q(r)),!I(a)&&k1(i)&&!k1(r))return f?!1:(i.value=r,!0)}const n=I(a)&&v8(e)?Number(e)<a.length:X(a,e),l=Reflect.set(a,e,r,s);return a===Q(s)&&(n?b2(r,i)&&s2(a,"set",e,r):s2(a,"add",e,r)),l}deleteProperty(a,e){const r=X(a,e);a[e];const s=Reflect.deleteProperty(a,e);return s&&r&&s2(a,"delete",e,void 0),s}has(a,e){const r=Reflect.has(a,e);return(!f3(e)||!_7.has(e))&&A1(a,"has",e),r}ownKeys(a){return A1(a,"iterate",I(a)?"length":q2),Reflect.ownKeys(a)}}class ut extends R7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Vt=new E7,pt=new ut,Mt=new E7(!0),M8=c=>c,T4=c=>Reflect.getPrototypeOf(c);function Z3(c,a,e=!1,r=!1){c=c.__v_raw;const s=Q(c),i=Q(a);e||(b2(a,i)&&A1(s,"get",a),A1(s,"get",i));const{has:n}=T4(s),l=r?M8:e?g8:g3;if(n.call(s,a))return l(c.get(a));if(n.call(s,i))return l(c.get(i));c!==s&&c.get(a)}function K3(c,a=!1){const e=this.__v_raw,r=Q(e),s=Q(c);return a||(b2(c,s)&&A1(r,"has",c),A1(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function Y3(c,a=!1){return c=c.__v_raw,!a&&A1(Q(c),"iterate",q2),Reflect.get(c,"size",c)}function Q0(c){c=Q(c);const a=Q(this);return T4(a).has.call(a,c)||(a.add(c),s2(a,"add",c,c)),this}function J0(c,a){a=Q(a);const e=Q(this),{has:r,get:s}=T4(e);let i=r.call(e,c);i||(c=Q(c),i=r.call(e,c));const n=s.call(e,c);return e.set(c,a),i?b2(a,n)&&s2(e,"set",c,a):s2(e,"add",c,a),this}function c5(c){const a=Q(this),{has:e,get:r}=T4(a);let s=e.call(a,c);s||(c=Q(c),s=e.call(a,c)),r&&r.call(a,c);const i=a.delete(c);return s&&s2(a,"delete",c,void 0),i}function a5(){const c=Q(this),a=c.size!==0,e=c.clear();return a&&s2(c,"clear",void 0,void 0),e}function X3(c,a){return function(r,s){const i=this,n=i.__v_raw,l=Q(n),f=a?M8:c?g8:g3;return!c&&A1(l,"iterate",q2),n.forEach((t,o)=>r.call(s,f(t),f(o),i))}}function Q3(c,a,e){return function(...r){const s=this.__v_raw,i=Q(s),n=c3(i),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,t=s[c](...r),o=e?M8:a?g8:g3;return!a&&A1(i,"iterate",f?_6:q2),{next(){const{value:z,done:h}=t.next();return h?{value:z,done:h}:{value:l?[o(z[0]),o(z[1])]:o(z),done:h}},[Symbol.iterator](){return this}}}}function v2(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Ct(){const c={get(i){return Z3(this,i)},get size(){return Y3(this)},has:K3,add:Q0,set:J0,delete:c5,clear:a5,forEach:X3(!1,!1)},a={get(i){return Z3(this,i,!1,!0)},get size(){return Y3(this)},has:K3,add:Q0,set:J0,delete:c5,clear:a5,forEach:X3(!1,!0)},e={get(i){return Z3(this,i,!0)},get size(){return Y3(this,!0)},has(i){return K3.call(this,i,!0)},add:v2("add"),set:v2("set"),delete:v2("delete"),clear:v2("clear"),forEach:X3(!0,!1)},r={get(i){return Z3(this,i,!0,!0)},get size(){return Y3(this,!0)},has(i){return K3.call(this,i,!0)},add:v2("add"),set:v2("set"),delete:v2("delete"),clear:v2("clear"),forEach:X3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=Q3(i,!1,!1),e[i]=Q3(i,!0,!1),a[i]=Q3(i,!1,!0),r[i]=Q3(i,!0,!0)}),[c,e,a,r]}const[dt,Lt,gt,xt]=Ct();function C8(c,a){const e=a?c?xt:gt:c?Lt:dt;return(r,s,i)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(X(e,s)&&s in r?e:r,s,i)}const bt={get:C8(!1,!1)},Nt={get:C8(!1,!0)},St={get:C8(!0,!1)},D7=new WeakMap,q7=new WeakMap,O7=new WeakMap,yt=new WeakMap;function wt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function At(c){return c.__v_skip||!Object.isExtensible(c)?0:wt(Qo(c))}function F4(c){return s3(c)?c:d8(c,!1,Vt,bt,D7)}function $7(c){return d8(c,!1,Mt,Nt,q7)}function U7(c){return d8(c,!0,pt,St,O7)}function d8(c,a,e,r,s){if(!o1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=s.get(c);if(i)return i;const n=At(c);if(n===0)return c;const l=new Proxy(c,n===2?r:e);return s.set(c,l),l}function a3(c){return s3(c)?a3(c.__v_raw):!!(c&&c.__v_isReactive)}function s3(c){return!!(c&&c.__v_isReadonly)}function M4(c){return!!(c&&c.__v_isShallow)}function I7(c){return a3(c)||s3(c)}function Q(c){const a=c&&c.__v_raw;return a?Q(a):c}function L8(c){return p4(c,"__v_skip",!0),c}const g3=c=>o1(c)?F4(c):c,g8=c=>o1(c)?U7(c):c;class G7{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new u8(()=>a(this._value),()=>m4(this,1),()=>this.dep&&F7(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=Q(this);return(!a._cacheable||a.effect.dirty)&&b2(a._value,a._value=a.effect.run())&&m4(a,2),W7(a),a.effect._dirtyLevel>=1&&m4(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function kt(c,a,e=!1){let r,s;const i=j(c);return i?(r=c,s=R1):(r=c.get,s=c.set),new G7(r,s,i||!s,e)}function W7(c){g2&&D2&&(c=Q(c),P7(D2,c.dep||(c.dep=B7(()=>c.dep=void 0,c instanceof G7?c:void 0))))}function m4(c,a=2,e){c=Q(c);const r=c.dep;r&&T7(r,a)}function k1(c){return!!(c&&c.__v_isRef===!0)}function j7(c){return Z7(c,!1)}function Pt(c){return Z7(c,!0)}function Z7(c,a){return k1(c)?c:new Tt(c,a)}class Tt{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Q(a),this._value=e?a:g3(a)}get value(){return W7(this),this._value}set value(a){const e=this.__v_isShallow||M4(a)||s3(a);a=e?a:Q(a),b2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:g3(a),m4(this,2))}}function Q1(c){return k1(c)?c.value:c}const Ft={get:(c,a,e)=>Q1(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return k1(s)&&!k1(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function K7(c){return a3(c)?c:new Proxy(c,Ft)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function x2(c,a,e,r){let s;try{s=r?c(...r):c()}catch(i){B4(i,a,e)}return s}function D1(c,a,e,r){if(j(c)){const i=x2(c,a,e,r);return i&&g7(i)&&i.catch(n=>{B4(n,a,e)}),i}const s=[];for(let i=0;i<c.length;i++)s.push(D1(c[i],a,e,r));return s}function B4(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;i;){const t=i.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,l)===!1)return}i=i.parent}const f=a.appContext.config.errorHandler;if(f){x2(f,null,10,[c,n,l]);return}}Bt(c,e,s,r)}function Bt(c,a,e,r=!0){console.error(c)}let x3=!1,R6=!1;const x1=[];let Y1=0;const e3=[];let p2=null,B2=0;const Y7=Promise.resolve();let x8=null;function X7(c){const a=x8||Y7;return c?a.then(this?c.bind(this):c):a}function _t(c){let a=Y1+1,e=x1.length;for(;a<e;){const r=a+e>>>1,s=x1[r],i=b3(s);i<c||i===c&&s.pre?a=r+1:e=r}return a}function b8(c){(!x1.length||!x1.includes(c,x3&&c.allowRecurse?Y1+1:Y1))&&(c.id==null?x1.push(c):x1.splice(_t(c.id),0,c),Q7())}function Q7(){!x3&&!R6&&(R6=!0,x8=Y7.then(c9))}function Rt(c){const a=x1.indexOf(c);a>Y1&&x1.splice(a,1)}function Et(c){I(c)?e3.push(...c):(!p2||!p2.includes(c,c.allowRecurse?B2+1:B2))&&e3.push(c),Q7()}function e5(c,a,e=x3?Y1+1:0){for(;e<x1.length;e++){const r=x1[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;x1.splice(e,1),e--,r()}}}function J7(c){if(e3.length){const a=[...new Set(e3)].sort((e,r)=>b3(e)-b3(r));if(e3.length=0,p2){p2.push(...a);return}for(p2=a,B2=0;B2<p2.length;B2++)p2[B2]();p2=null,B2=0}}const b3=c=>c.id==null?1/0:c.id,Dt=(c,a)=>{const e=b3(c)-b3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function c9(c){R6=!1,x3=!0,x1.sort(Dt);try{for(Y1=0;Y1<x1.length;Y1++){const a=x1[Y1];a&&a.active!==!1&&x2(a,null,14)}}finally{Y1=0,x1.length=0,J7(),x3=!1,x8=null,(x1.length||e3.length)&&c9()}}function qt(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||z1;let s=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in r){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[o]||z1;h&&(s=e.map(u=>H1(u)?u.trim():u)),z&&(s=e.map(at))}let l,f=r[l=h6(a)]||r[l=h6(J1(a))];!f&&i&&(f=r[l=h6(o3(a))]),f&&D1(f,c,6,s);const t=r[l+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,D1(t,c,6,s)}}function a9(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const i=c.emits;let n={},l=!1;if(!j(c)){const f=t=>{const o=a9(t,a,!0);o&&(l=!0,V1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!i&&!l?(o1(c)&&r.set(c,null),null):(I(i)?i.forEach(f=>n[f]=null):V1(n,i),o1(c)&&r.set(c,n),n)}function _4(c,a){return!c||!w4(a)?!1:(a=a.slice(2).replace(/Once$/,""),X(c,a[0].toLowerCase()+a.slice(1))||X(c,o3(a))||X(c,a))}let E1=null,R4=null;function C4(c){const a=E1;return E1=c,R4=c&&c.type.__scopeId||null,a}function B3(c){R4=c}function _3(){R4=null}function e9(c,a=E1,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&h5(-1);const i=C4(a);let n;try{n=c(...s)}finally{C4(i),r._d&&h5(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function V6(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:i,propsOptions:[n],slots:l,attrs:f,emit:t,render:o,renderCache:z,data:h,setupState:u,ctx:g,inheritAttrs:N}=c;let k,V;const d=C4(c);try{if(e.shapeFlag&4){const _=s||r,$=_;k=K1(o.call($,_,z,i,u,h,g)),V=f}else{const _=a;k=K1(_.length>1?_(i,{attrs:f,slots:l,emit:t}):_(i,null)),V=a.props?f:Ot(f)}}catch(_){p3.length=0,B4(_,c,1),k=J(I1)}let y=k;if(V&&N!==!1){const _=Object.keys(V),{shapeFlag:$}=y;_.length&&$&7&&(n&&_.some(m8)&&(V=$t(V,n)),y=N2(y,V))}return e.dirs&&(y=N2(y),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&(y.transition=e.transition),k=y,C4(d),k}const Ot=c=>{let a;for(const e in c)(e==="class"||e==="style"||w4(e))&&((a||(a={}))[e]=c[e]);return a},$t=(c,a)=>{const e={};for(const r in c)(!m8(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Ut(c,a,e){const{props:r,children:s,component:i}=c,{props:n,children:l,patchFlag:f}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?r5(r,n,t):!!n;if(f&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const h=o[z];if(n[h]!==r[h]&&!_4(t,h))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===n?!1:r?n?r5(r,n,t):!0:!!n;return!1}function r5(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(a[i]!==c[i]&&!_4(e,i))return!0}return!1}function It({vnode:c,parent:a},e){for(;a;){const r=a.subTree;if(r.suspense&&r.suspense.activeBranch===c&&(r.el=c.el),r===c)(c=a.vnode).el=e,a=a.parent;else break}}const r9="components";function E4(c,a){return Wt(r9,c,!0,a)||c}const Gt=Symbol.for("v-ndc");function Wt(c,a,e=!0,r=!1){const s=E1||L1;if(s){const i=s.type;if(c===r9){const l=Um(i,!1);if(l&&(l===a||l===J1(a)||l===P4(J1(a))))return i}const n=s5(s[c]||i[c],a)||s5(s.appContext[c],a);return!n&&r?i:n}}function s5(c,a){return c&&(c[a]||c[J1(a)]||c[P4(J1(a))])}const jt=c=>c.__isSuspense;function Zt(c,a){a&&a.pendingBranch?I(c)?a.effects.push(...c):a.effects.push(c):Et(c)}const Kt=Symbol.for("v-scx"),Yt=()=>i2(Kt),J3={};function u3(c,a,e){return s9(c,a,e)}function s9(c,a,{immediate:e,deep:r,flush:s,once:i,onTrack:n,onTrigger:l}=z1){if(a&&i){const E=a;a=(...Y)=>{E(...Y),$()}}const f=L1,t=E=>r===!0?E:Y2(E,r===!1?1:void 0);let o,z=!1,h=!1;if(k1(c)?(o=()=>c.value,z=M4(c)):a3(c)?(o=()=>t(c),z=!0):I(c)?(h=!0,z=c.some(E=>a3(E)||M4(E)),o=()=>c.map(E=>{if(k1(E))return E.value;if(a3(E))return t(E);if(j(E))return x2(E,f,2)})):j(c)?a?o=()=>x2(c,f,2):o=()=>(u&&u(),D1(c,f,3,[g])):o=R1,a&&r){const E=o;o=()=>Y2(E())}let u,g=E=>{u=y.onStop=()=>{x2(E,f,4),u=y.onStop=void 0}},N;if(U4)if(g=R1,a?e&&D1(a,f,3,[o(),h?[]:void 0,g]):o(),s==="sync"){const E=Yt();N=E.__watcherHandles||(E.__watcherHandles=[])}else return R1;let k=h?new Array(c.length).fill(J3):J3;const V=()=>{if(!(!y.active||!y.dirty))if(a){const E=y.run();(r||z||(h?E.some((Y,U)=>b2(Y,k[U])):b2(E,k)))&&(u&&u(),D1(a,f,3,[E,k===J3?void 0:h&&k[0]===J3?[]:k,g]),k=E)}else y.run()};V.allowRecurse=!!a;let d;s==="sync"?d=V:s==="post"?d=()=>w1(V,f&&f.suspense):(V.pre=!0,f&&(V.id=f.uid),d=()=>b8(V));const y=new u8(o,R1,d),_=mt(),$=()=>{y.stop(),_&&z8(_.effects,y)};return a?e?V():k=y.run():s==="post"?w1(y.run.bind(y),f&&f.suspense):y.run(),N&&N.push($),$}function Xt(c,a,e){const r=this.proxy,s=H1(c)?c.includes(".")?i9(r,c):()=>r[c]:c.bind(r,r);let i;j(a)?i=a:(i=a.handler,e=a);const n=R3(this),l=s9(s,i.bind(r),e);return n(),l}function i9(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function Y2(c,a,e=0,r){if(!o1(c)||c.__v_skip)return c;if(a&&a>0){if(e>=a)return c;e++}if(r=r||new Set,r.has(c))return c;if(r.add(c),k1(c))Y2(c.value,a,e,r);else if(I(c))for(let s=0;s<c.length;s++)Y2(c[s],a,e,r);else if(L7(c)||c3(c))c.forEach(s=>{Y2(s,a,e,r)});else if(b7(c))for(const s in c)Y2(c[s],a,e,r);return c}function k2(c,a,e,r){const s=c.dirs,i=a&&a.dirs;for(let n=0;n<s.length;n++){const l=s[n];i&&(l.oldValue=i[n].value);let f=l.dir[r];f&&(U2(),D1(f,e,8,[c.el,l,c,a]),I2())}}const M2=Symbol("_leaveCb"),c4=Symbol("_enterCb");function Qt(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return t9(()=>{c.isMounted=!0}),m9(()=>{c.isUnmounting=!0}),c}const _1=[Function,Array],n9={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_1,onEnter:_1,onAfterEnter:_1,onEnterCancelled:_1,onBeforeLeave:_1,onLeave:_1,onAfterLeave:_1,onLeaveCancelled:_1,onBeforeAppear:_1,onAppear:_1,onAfterAppear:_1,onAppearCancelled:_1},Jt={name:"BaseTransition",props:n9,setup(c,{slots:a}){const e=Em(),r=Qt();let s;return()=>{const i=a.default&&f9(a.default(),!0);if(!i||!i.length)return;let n=i[0];if(i.length>1){for(const N of i)if(N.type!==I1){n=N;break}}const l=Q(c),{mode:f}=l;if(r.isLeaving)return p6(n);const t=i5(n);if(!t)return p6(n);const o=E6(t,l,r,e);D6(t,o);const z=e.subTree,h=z&&i5(z);let u=!1;const{getTransitionKey:g}=t.type;if(g){const N=g();s===void 0?s=N:N!==s&&(s=N,u=!0)}if(h&&h.type!==I1&&(!_2(t,h)||u)){const N=E6(h,l,r,e);if(D6(h,N),f==="out-in")return r.isLeaving=!0,N.afterLeave=()=>{r.isLeaving=!1,e.update.active!==!1&&(e.effect.dirty=!0,e.update())},p6(n);f==="in-out"&&t.type!==I1&&(N.delayLeave=(k,V,d)=>{const y=l9(r,h);y[String(h.key)]=h,k[M2]=()=>{V(),k[M2]=void 0,delete o.delayedLeave},o.delayedLeave=d})}return n}}},cm=Jt;function l9(c,a){const{leavingVNodes:e}=c;let r=e.get(a.type);return r||(r=Object.create(null),e.set(a.type,r)),r}function E6(c,a,e,r){const{appear:s,mode:i,persisted:n=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:t,onEnterCancelled:o,onBeforeLeave:z,onLeave:h,onAfterLeave:u,onLeaveCancelled:g,onBeforeAppear:N,onAppear:k,onAfterAppear:V,onAppearCancelled:d}=a,y=String(c.key),_=l9(e,c),$=(U,K)=>{U&&D1(U,r,9,K)},E=(U,K)=>{const c1=K[1];$(U,K),I(U)?U.every(u1=>u1.length<=1)&&c1():U.length<=1&&c1()},Y={mode:i,persisted:n,beforeEnter(U){let K=l;if(!e.isMounted)if(s)K=N||l;else return;U[M2]&&U[M2](!0);const c1=_[y];c1&&_2(c,c1)&&c1.el[M2]&&c1.el[M2](),$(K,[U])},enter(U){let K=f,c1=t,u1=o;if(!e.isMounted)if(s)K=k||f,c1=V||t,u1=d||o;else return;let D=!1;const r1=U[c4]=b1=>{D||(D=!0,b1?$(u1,[U]):$(c1,[U]),Y.delayedLeave&&Y.delayedLeave(),U[c4]=void 0)};K?E(K,[U,r1]):r1()},leave(U,K){const c1=String(c.key);if(U[c4]&&U[c4](!0),e.isUnmounting)return K();$(z,[U]);let u1=!1;const D=U[M2]=r1=>{u1||(u1=!0,K(),r1?$(g,[U]):$(u,[U]),U[M2]=void 0,_[c1]===c&&delete _[c1])};_[c1]=c,h?E(h,[U,D]):D()},clone(U){return E6(U,a,e,r)}};return Y}function p6(c){if(D4(c))return c=N2(c),c.children=null,c}function i5(c){return D4(c)?c.children?c.children[0]:void 0:c}function D6(c,a){c.shapeFlag&6&&c.component?D6(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function f9(c,a=!1,e){let r=[],s=0;for(let i=0;i<c.length;i++){let n=c[i];const l=e==null?n.key:String(e)+String(n.key!=null?n.key:i);n.type===T1?(n.patchFlag&128&&s++,r=r.concat(f9(n.children,a,l))):(a||n.type!==I1)&&r.push(l!=null?N2(n,{key:l}):n)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function A2(c,a){return j(c)?V1({name:c.name},a,{setup:c}):c}const z4=c=>!!c.type.__asyncLoader,D4=c=>c.type.__isKeepAlive;function am(c,a){o9(c,"a",a)}function em(c,a){o9(c,"da",a)}function o9(c,a,e=L1){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(q4(a,r,e),e){let s=e.parent;for(;s&&s.parent;)D4(s.parent.vnode)&&rm(r,a,e,s),s=s.parent}}function rm(c,a,e,r){const s=q4(a,c,r,!0);z9(()=>{z8(r[a],s)},e)}function q4(c,a,e=L1,r=!1){if(e){const s=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;U2();const l=R3(e),f=D1(a,e,c,n);return l(),I2(),f});return r?s.unshift(i):s.push(i),i}}const o2=c=>(a,e=L1)=>(!U4||c==="sp")&&q4(c,(...r)=>a(...r),e),sm=o2("bm"),t9=o2("m"),im=o2("bu"),nm=o2("u"),m9=o2("bum"),z9=o2("um"),lm=o2("sp"),fm=o2("rtg"),om=o2("rtc");function tm(c,a=L1){q4("ec",c,a)}function q6(c,a,e,r){let s;const i=e&&e[r];if(I(c)||H1(c)){s=new Array(c.length);for(let n=0,l=c.length;n<l;n++)s[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){s=new Array(c);for(let n=0;n<c;n++)s[n]=a(n+1,n,void 0,i&&i[n])}else if(o1(c))if(c[Symbol.iterator])s=Array.from(c,(n,l)=>a(n,l,void 0,i&&i[l]));else{const n=Object.keys(c);s=new Array(n.length);for(let l=0,f=n.length;l<f;l++){const t=n[l];s[l]=a(c[t],t,l,i&&i[l])}}else s=[];return e&&(e[r]=s),s}const O6=c=>c?x9(c)?w8(c)||c.proxy:O6(c.parent):null,V3=V1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>O6(c.parent),$root:c=>O6(c.root),$emit:c=>c.emit,$options:c=>N8(c),$forceUpdate:c=>c.f||(c.f=()=>{c.effect.dirty=!0,b8(c.update)}),$nextTick:c=>c.n||(c.n=X7.bind(c.proxy)),$watch:c=>Xt.bind(c)}),M6=(c,a)=>c!==z1&&!c.__isScriptSetup&&X(c,a),mm={get({_:c},a){const{ctx:e,setupState:r,data:s,props:i,accessCache:n,type:l,appContext:f}=c;let t;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return i[a]}else{if(M6(r,a))return n[a]=1,r[a];if(s!==z1&&X(s,a))return n[a]=2,s[a];if((t=c.propsOptions[0])&&X(t,a))return n[a]=3,i[a];if(e!==z1&&X(e,a))return n[a]=4,e[a];$6&&(n[a]=0)}}const o=V3[a];let z,h;if(o)return a==="$attrs"&&A1(c,"get",a),o(c);if((z=l.__cssModules)&&(z=z[a]))return z;if(e!==z1&&X(e,a))return n[a]=4,e[a];if(h=f.config.globalProperties,X(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:i}=c;return M6(s,a)?(s[a]=e,!0):r!==z1&&X(r,a)?(r[a]=e,!0):X(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:i}},n){let l;return!!e[n]||c!==z1&&X(c,n)||M6(a,n)||(l=i[0])&&X(l,n)||X(r,n)||X(V3,n)||X(s.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:X(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function n5(c){return I(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let $6=!0;function zm(c){const a=N8(c),e=c.proxy,r=c.ctx;$6=!1,a.beforeCreate&&l5(a.beforeCreate,c,"bc");const{data:s,computed:i,methods:n,watch:l,provide:f,inject:t,created:o,beforeMount:z,mounted:h,beforeUpdate:u,updated:g,activated:N,deactivated:k,beforeDestroy:V,beforeUnmount:d,destroyed:y,unmounted:_,render:$,renderTracked:E,renderTriggered:Y,errorCaptured:U,serverPrefetch:K,expose:c1,inheritAttrs:u1,components:D,directives:r1,filters:b1}=a;if(t&&vm(t,r,null),n)for(const i1 in n){const a1=n[i1];j(a1)&&(r[i1]=a1.bind(e))}if(s){const i1=s.call(e,e);o1(i1)&&(c.data=F4(i1))}if($6=!0,i)for(const i1 in i){const a1=i[i1],a2=j(a1)?a1.bind(e,e):j(a1.get)?a1.get.bind(e,e):R1,z2=!j(a1)&&j(a1.set)?a1.set.bind(e):R1,W1=d1({get:a2,set:z2});Object.defineProperty(r,i1,{enumerable:!0,configurable:!0,get:()=>W1.value,set:S1=>W1.value=S1})}if(l)for(const i1 in l)v9(l[i1],r,e,i1);if(f){const i1=j(f)?f.call(e):f;Reflect.ownKeys(i1).forEach(a1=>{v4(a1,i1[a1])})}o&&l5(o,c,"c");function h1(i1,a1){I(a1)?a1.forEach(a2=>i1(a2.bind(e))):a1&&i1(a1.bind(e))}if(h1(sm,z),h1(t9,h),h1(im,u),h1(nm,g),h1(am,N),h1(em,k),h1(tm,U),h1(om,E),h1(fm,Y),h1(m9,d),h1(z9,_),h1(lm,K),I(c1))if(c1.length){const i1=c.exposed||(c.exposed={});c1.forEach(a1=>{Object.defineProperty(i1,a1,{get:()=>e[a1],set:a2=>e[a1]=a2})})}else c.exposed||(c.exposed={});$&&c.render===R1&&(c.render=$),u1!=null&&(c.inheritAttrs=u1),D&&(c.components=D),r1&&(c.directives=r1)}function vm(c,a,e=R1){I(c)&&(c=U6(c));for(const r in c){const s=c[r];let i;o1(s)?"default"in s?i=i2(s.from||r,s.default,!0):i=i2(s.from||r):i=i2(s),k1(i)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:n=>i.value=n}):a[r]=i}}function l5(c,a,e){D1(I(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function v9(c,a,e,r){const s=r.includes(".")?i9(e,r):()=>e[r];if(H1(c)){const i=a[c];j(i)&&u3(s,i)}else if(j(c))u3(s,c.bind(e));else if(o1(c))if(I(c))c.forEach(i=>v9(i,a,e,r));else{const i=j(c.handler)?c.handler.bind(e):a[c.handler];j(i)&&u3(s,i,c)}}function N8(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,l=i.get(a);let f;return l?f=l:!s.length&&!e&&!r?f=a:(f={},s.length&&s.forEach(t=>d4(f,t,n,!0)),d4(f,a,n)),o1(a)&&i.set(a,f),f}function d4(c,a,e,r=!1){const{mixins:s,extends:i}=a;i&&d4(c,i,e,!0),s&&s.forEach(n=>d4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const l=hm[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const hm={data:f5,props:o5,emits:o5,methods:h3,computed:h3,beforeCreate:N1,created:N1,beforeMount:N1,mounted:N1,beforeUpdate:N1,updated:N1,beforeDestroy:N1,beforeUnmount:N1,destroyed:N1,unmounted:N1,activated:N1,deactivated:N1,errorCaptured:N1,serverPrefetch:N1,components:h3,directives:h3,watch:um,provide:f5,inject:Hm};function f5(c,a){return a?c?function(){return V1(j(c)?c.call(this,this):c,j(a)?a.call(this,this):a)}:a:c}function Hm(c,a){return h3(U6(c),U6(a))}function U6(c){if(I(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function N1(c,a){return c?[...new Set([].concat(c,a))]:a}function h3(c,a){return c?V1(Object.create(null),c,a):a}function o5(c,a){return c?I(c)&&I(a)?[...new Set([...c,...a])]:V1(Object.create(null),n5(c),n5(a??{})):a}function um(c,a){if(!c)return a;if(!a)return c;const e=V1(Object.create(null),c);for(const r in a)e[r]=N1(c[r],a[r]);return e}function h9(){return{app:null,config:{isNativeTag:Yo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vm=0;function pm(c,a){return function(r,s=null){j(r)||(r=V1({},r)),s!=null&&!o1(s)&&(s=null);const i=h9(),n=new WeakSet;let l=!1;const f=i.app={_uid:Vm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gm,get config(){return i.config},set config(t){},use(t,...o){return n.has(t)||(t&&j(t.install)?(n.add(t),t.install(f,...o)):j(t)&&(n.add(t),t(f,...o))),f},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),f},component(t,o){return o?(i.components[t]=o,f):i.components[t]},directive(t,o){return o?(i.directives[t]=o,f):i.directives[t]},mount(t,o,z){if(!l){const h=J(r,s);return h.appContext=i,z===!0?z="svg":z===!1&&(z=void 0),o&&a?a(h,t):c(h,t,z),l=!0,f._container=t,t.__vue_app__=f,w8(h.component)||h.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(t,o){return i.provides[t]=o,f},runWithContext(t){L4=f;try{return t()}finally{L4=null}}};return f}}let L4=null;function v4(c,a){if(L1){let e=L1.provides;const r=L1.parent&&L1.parent.provides;r===e&&(e=L1.provides=Object.create(r)),e[c]=a}}function i2(c,a,e=!1){const r=L1||E1;if(r||L4){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:L4._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&j(a)?a.call(r&&r.proxy):a}}function Mm(c,a,e,r=!1){const s={},i={};p4(i,$4,1),c.propsDefaults=Object.create(null),H9(c,a,s,i);for(const n in c.propsOptions[0])n in s||(s[n]=void 0);e?c.props=r?s:$7(s):c.type.props?c.props=s:c.props=i,c.attrs=i}function Cm(c,a,e,r){const{props:s,attrs:i,vnode:{patchFlag:n}}=c,l=Q(s),[f]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let h=o[z];if(_4(c.emitsOptions,h))continue;const u=a[h];if(f)if(X(i,h))u!==i[h]&&(i[h]=u,t=!0);else{const g=J1(h);s[g]=I6(f,l,g,u,c,!1)}else u!==i[h]&&(i[h]=u,t=!0)}}}else{H9(c,a,s,i)&&(t=!0);let o;for(const z in l)(!a||!X(a,z)&&((o=o3(z))===z||!X(a,o)))&&(f?e&&(e[z]!==void 0||e[o]!==void 0)&&(s[z]=I6(f,l,z,void 0,c,!0)):delete s[z]);if(i!==l)for(const z in i)(!a||!X(a,z))&&(delete i[z],t=!0)}t&&s2(c,"set","$attrs")}function H9(c,a,e,r){const[s,i]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(t4(f))continue;const t=a[f];let o;s&&X(s,o=J1(f))?!i||!i.includes(o)?e[o]=t:(l||(l={}))[o]=t:_4(c.emitsOptions,f)||(!(f in r)||t!==r[f])&&(r[f]=t,n=!0)}if(i){const f=Q(e),t=l||z1;for(let o=0;o<i.length;o++){const z=i[o];e[z]=I6(s,f,z,t[z],c,!X(t,z))}}return n}function I6(c,a,e,r,s,i){const n=c[e];if(n!=null){const l=X(n,"default");if(l&&r===void 0){const f=n.default;if(n.type!==Function&&!n.skipFactory&&j(f)){const{propsDefaults:t}=s;if(e in t)r=t[e];else{const o=R3(s);r=t[e]=f.call(null,a),o()}}else r=f}n[0]&&(i&&!l?r=!1:n[1]&&(r===""||r===o3(e))&&(r=!0))}return r}function u9(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const i=c.props,n={},l=[];let f=!1;if(!j(c)){const o=z=>{f=!0;const[h,u]=u9(z,a,!0);V1(n,h),u&&l.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!i&&!f)return o1(c)&&r.set(c,J2),J2;if(I(i))for(let o=0;o<i.length;o++){const z=J1(i[o]);t5(z)&&(n[z]=z1)}else if(i)for(const o in i){const z=J1(o);if(t5(z)){const h=i[o],u=n[z]=I(h)||j(h)?{type:h}:V1({},h);if(u){const g=v5(Boolean,u.type),N=v5(String,u.type);u[0]=g>-1,u[1]=N<0||g<N,(g>-1||X(u,"default"))&&l.push(z)}}}const t=[n,l];return o1(c)&&r.set(c,t),t}function t5(c){return c[0]!=="$"}function m5(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function z5(c,a){return m5(c)===m5(a)}function v5(c,a){return I(a)?a.findIndex(e=>z5(e,c)):j(a)&&z5(a,c)?0:-1}const V9=c=>c[0]==="_"||c==="$stable",S8=c=>I(c)?c.map(K1):[K1(c)],dm=(c,a,e)=>{if(a._n)return a;const r=e9((...s)=>S8(a(...s)),e);return r._c=!1,r},p9=(c,a,e)=>{const r=c._ctx;for(const s in c){if(V9(s))continue;const i=c[s];if(j(i))a[s]=dm(s,i,r);else if(i!=null){const n=S8(i);a[s]=()=>n}}},M9=(c,a)=>{const e=S8(a);c.slots.default=()=>e},Lm=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Q(a),p4(a,"_",e)):p9(a,c.slots={})}else c.slots={},a&&M9(c,a);p4(c.slots,$4,1)},gm=(c,a,e)=>{const{vnode:r,slots:s}=c;let i=!0,n=z1;if(r.shapeFlag&32){const l=a._;l?e&&l===1?i=!1:(V1(s,a),!e&&l===1&&delete s._):(i=!a.$stable,p9(a,s)),n=a}else a&&(M9(c,a),n={default:1});if(i)for(const l in s)!V9(l)&&n[l]==null&&delete s[l]};function G6(c,a,e,r,s=!1){if(I(c)){c.forEach((h,u)=>G6(h,a&&(I(a)?a[u]:a),e,r,s));return}if(z4(r)&&!s)return;const i=r.shapeFlag&4?w8(r.component)||r.component.proxy:r.el,n=s?null:i,{i:l,r:f}=c,t=a&&a.r,o=l.refs===z1?l.refs={}:l.refs,z=l.setupState;if(t!=null&&t!==f&&(H1(t)?(o[t]=null,X(z,t)&&(z[t]=null)):k1(t)&&(t.value=null)),j(f))x2(f,l,12,[n,o]);else{const h=H1(f),u=k1(f),g=c.f;if(h||u){const N=()=>{if(g){const k=h?X(z,f)?z[f]:o[f]:f.value;s?I(k)&&z8(k,i):I(k)?k.includes(i)||k.push(i):h?(o[f]=[i],X(z,f)&&(z[f]=o[f])):(f.value=[i],c.k&&(o[c.k]=f.value))}else h?(o[f]=n,X(z,f)&&(z[f]=n)):u&&(f.value=n,c.k&&(o[c.k]=n))};s||g?N():(N.id=-1,w1(N,e))}}}const w1=Zt;function xm(c){return bm(c)}function bm(c,a){const e=N7();e.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:n,createText:l,createComment:f,setText:t,setElementText:o,parentNode:z,nextSibling:h,setScopeId:u=R1,insertStaticContent:g}=c,N=(m,v,H,C=null,p=null,b=null,A=void 0,x=null,S=!!v.dynamicChildren)=>{if(m===v)return;m&&!_2(m,v)&&(C=M(m),S1(m,p,b,!0),m=null),v.patchFlag===-2&&(S=!1,v.dynamicChildren=null);const{type:L,ref:F,shapeFlag:O}=v;switch(L){case O4:k(m,v,H,C);break;case I1:V(m,v,H,C);break;case h4:m==null&&d(v,H,C,A);break;case T1:D(m,v,H,C,p,b,A,x,S);break;default:O&1?$(m,v,H,C,p,b,A,x,S):O&6?r1(m,v,H,C,p,b,A,x,S):(O&64||O&128)&&L.process(m,v,H,C,p,b,A,x,S,R)}F!=null&&p&&G6(F,m&&m.ref,b,v||m,!v)},k=(m,v,H,C)=>{if(m==null)r(v.el=l(v.children),H,C);else{const p=v.el=m.el;v.children!==m.children&&t(p,v.children)}},V=(m,v,H,C)=>{m==null?r(v.el=f(v.children||""),H,C):v.el=m.el},d=(m,v,H,C)=>{[m.el,m.anchor]=g(m.children,v,H,C,m.el,m.anchor)},y=({el:m,anchor:v},H,C)=>{let p;for(;m&&m!==v;)p=h(m),r(m,H,C),m=p;r(v,H,C)},_=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),s(m),m=H;s(v)},$=(m,v,H,C,p,b,A,x,S)=>{v.type==="svg"?A="svg":v.type==="math"&&(A="mathml"),m==null?E(v,H,C,p,b,A,x,S):K(m,v,p,b,A,x,S)},E=(m,v,H,C,p,b,A,x)=>{let S,L;const{props:F,shapeFlag:O,transition:q,dirs:G}=m;if(S=m.el=n(m.type,b,F&&F.is,F),O&8?o(S,m.children):O&16&&U(m.children,S,null,C,p,C6(m,b),A,x),G&&k2(m,null,C,"created"),Y(S,m,m.scopeId,A,C),F){for(const n1 in F)n1!=="value"&&!t4(n1)&&i(S,n1,null,F[n1],b,m.children,C,p,g1);"value"in F&&i(S,"value",null,F.value,b),(L=F.onVnodeBeforeMount)&&Z1(L,C,m)}G&&k2(m,null,C,"beforeMount");const Z=Nm(p,q);Z&&q.beforeEnter(S),r(S,v,H),((L=F&&F.onVnodeMounted)||Z||G)&&w1(()=>{L&&Z1(L,C,m),Z&&q.enter(S),G&&k2(m,null,C,"mounted")},p)},Y=(m,v,H,C,p)=>{if(H&&u(m,H),C)for(let b=0;b<C.length;b++)u(m,C[b]);if(p){let b=p.subTree;if(v===b){const A=p.vnode;Y(m,A,A.scopeId,A.slotScopeIds,p.parent)}}},U=(m,v,H,C,p,b,A,x,S=0)=>{for(let L=S;L<m.length;L++){const F=m[L]=x?C2(m[L]):K1(m[L]);N(null,F,v,H,C,p,b,A,x)}},K=(m,v,H,C,p,b,A)=>{const x=v.el=m.el;let{patchFlag:S,dynamicChildren:L,dirs:F}=v;S|=m.patchFlag&16;const O=m.props||z1,q=v.props||z1;let G;if(H&&P2(H,!1),(G=q.onVnodeBeforeUpdate)&&Z1(G,H,v,m),F&&k2(v,m,H,"beforeUpdate"),H&&P2(H,!0),L?c1(m.dynamicChildren,L,x,H,C,C6(v,p),b):A||a1(m,v,x,null,H,C,C6(v,p),b,!1),S>0){if(S&16)u1(x,v,O,q,H,C,p);else if(S&2&&O.class!==q.class&&i(x,"class",null,q.class,p),S&4&&i(x,"style",O.style,q.style,p),S&8){const Z=v.dynamicProps;for(let n1=0;n1<Z.length;n1++){const m1=Z[n1],M1=O[m1],q1=q[m1];(q1!==M1||m1==="value")&&i(x,m1,M1,q1,p,m.children,H,C,g1)}}S&1&&m.children!==v.children&&o(x,v.children)}else!A&&L==null&&u1(x,v,O,q,H,C,p);((G=q.onVnodeUpdated)||F)&&w1(()=>{G&&Z1(G,H,v,m),F&&k2(v,m,H,"updated")},C)},c1=(m,v,H,C,p,b,A)=>{for(let x=0;x<v.length;x++){const S=m[x],L=v[x],F=S.el&&(S.type===T1||!_2(S,L)||S.shapeFlag&70)?z(S.el):H;N(S,L,F,null,C,p,b,A,!0)}},u1=(m,v,H,C,p,b,A)=>{if(H!==C){if(H!==z1)for(const x in H)!t4(x)&&!(x in C)&&i(m,x,H[x],null,A,v.children,p,b,g1);for(const x in C){if(t4(x))continue;const S=C[x],L=H[x];S!==L&&x!=="value"&&i(m,x,L,S,A,v.children,p,b,g1)}"value"in C&&i(m,"value",H.value,C.value,A)}},D=(m,v,H,C,p,b,A,x,S)=>{const L=v.el=m?m.el:l(""),F=v.anchor=m?m.anchor:l("");let{patchFlag:O,dynamicChildren:q,slotScopeIds:G}=v;G&&(x=x?x.concat(G):G),m==null?(r(L,H,C),r(F,H,C),U(v.children||[],H,F,p,b,A,x,S)):O>0&&O&64&&q&&m.dynamicChildren?(c1(m.dynamicChildren,q,H,p,b,A,x),(v.key!=null||p&&v===p.subTree)&&C9(m,v,!0)):a1(m,v,H,F,p,b,A,x,S)},r1=(m,v,H,C,p,b,A,x,S)=>{v.slotScopeIds=x,m==null?v.shapeFlag&512?p.ctx.activate(v,H,C,A,S):b1(v,H,C,p,b,A,S):c2(m,v,S)},b1=(m,v,H,C,p,b,A)=>{const x=m.component=Rm(m,C,p);if(D4(m)&&(x.ctx.renderer=R),Dm(x),x.asyncDep){if(p&&p.registerDep(x,h1),!m.el){const S=x.subTree=J(I1);V(null,S,v,H)}}else h1(x,m,v,H,p,b,A)},c2=(m,v,H)=>{const C=v.component=m.component;if(Ut(m,v,H))if(C.asyncDep&&!C.asyncResolved){i1(C,v,H);return}else C.next=v,Rt(C.update),C.effect.dirty=!0,C.update();else v.el=m.el,C.vnode=v},h1=(m,v,H,C,p,b,A)=>{const x=()=>{if(m.isMounted){let{next:F,bu:O,u:q,parent:G,vnode:Z}=m;{const j2=d9(m);if(j2){F&&(F.el=Z.el,i1(m,F,A)),j2.asyncDep.then(()=>{m.isUnmounted||x()});return}}let n1=F,m1;P2(m,!1),F?(F.el=Z.el,i1(m,F,A)):F=Z,O&&H6(O),(m1=F.props&&F.props.onVnodeBeforeUpdate)&&Z1(m1,G,F,Z),P2(m,!0);const M1=V6(m),q1=m.subTree;m.subTree=M1,N(q1,M1,z(q1.el),M(q1),m,p,b),F.el=M1.el,n1===null&&It(m,M1.el),q&&w1(q,p),(m1=F.props&&F.props.onVnodeUpdated)&&w1(()=>Z1(m1,G,F,Z),p)}else{let F;const{el:O,props:q}=v,{bm:G,m:Z,parent:n1}=m,m1=z4(v);if(P2(m,!1),G&&H6(G),!m1&&(F=q&&q.onVnodeBeforeMount)&&Z1(F,n1,v),P2(m,!0),O&&t1){const M1=()=>{m.subTree=V6(m),t1(O,m.subTree,m,p,null)};m1?v.type.__asyncLoader().then(()=>!m.isUnmounted&&M1()):M1()}else{const M1=m.subTree=V6(m);N(null,M1,H,C,m,p,b),v.el=M1.el}if(Z&&w1(Z,p),!m1&&(F=q&&q.onVnodeMounted)){const M1=v;w1(()=>Z1(F,n1,M1),p)}(v.shapeFlag&256||n1&&z4(n1.vnode)&&n1.vnode.shapeFlag&256)&&m.a&&w1(m.a,p),m.isMounted=!0,v=H=C=null}},S=m.effect=new u8(x,R1,()=>b8(L),m.scope),L=m.update=()=>{S.dirty&&S.run()};L.id=m.uid,P2(m,!0),L()},i1=(m,v,H)=>{v.component=m;const C=m.vnode.props;m.vnode=v,m.next=null,Cm(m,v.props,C,H),gm(m,v.children,H),U2(),e5(m),I2()},a1=(m,v,H,C,p,b,A,x,S=!1)=>{const L=m&&m.children,F=m?m.shapeFlag:0,O=v.children,{patchFlag:q,shapeFlag:G}=v;if(q>0){if(q&128){z2(L,O,H,C,p,b,A,x,S);return}else if(q&256){a2(L,O,H,C,p,b,A,x,S);return}}G&8?(F&16&&g1(L,p,b),O!==L&&o(H,O)):F&16?G&16?z2(L,O,H,C,p,b,A,x,S):g1(L,p,b,!0):(F&8&&o(H,""),G&16&&U(O,H,C,p,b,A,x,S))},a2=(m,v,H,C,p,b,A,x,S)=>{m=m||J2,v=v||J2;const L=m.length,F=v.length,O=Math.min(L,F);let q;for(q=0;q<O;q++){const G=v[q]=S?C2(v[q]):K1(v[q]);N(m[q],G,H,null,p,b,A,x,S)}L>F?g1(m,p,b,!0,!1,O):U(v,H,C,p,b,A,x,S,O)},z2=(m,v,H,C,p,b,A,x,S)=>{let L=0;const F=v.length;let O=m.length-1,q=F-1;for(;L<=O&&L<=q;){const G=m[L],Z=v[L]=S?C2(v[L]):K1(v[L]);if(_2(G,Z))N(G,Z,H,null,p,b,A,x,S);else break;L++}for(;L<=O&&L<=q;){const G=m[O],Z=v[q]=S?C2(v[q]):K1(v[q]);if(_2(G,Z))N(G,Z,H,null,p,b,A,x,S);else break;O--,q--}if(L>O){if(L<=q){const G=q+1,Z=G<F?v[G].el:C;for(;L<=q;)N(null,v[L]=S?C2(v[L]):K1(v[L]),H,Z,p,b,A,x,S),L++}}else if(L>q)for(;L<=O;)S1(m[L],p,b,!0),L++;else{const G=L,Z=L,n1=new Map;for(L=Z;L<=q;L++){const P1=v[L]=S?C2(v[L]):K1(v[L]);P1.key!=null&&n1.set(P1.key,L)}let m1,M1=0;const q1=q-Z+1;let j2=!1,G0=0;const m3=new Array(q1);for(L=0;L<q1;L++)m3[L]=0;for(L=G;L<=O;L++){const P1=m[L];if(M1>=q1){S1(P1,p,b,!0);continue}let j1;if(P1.key!=null)j1=n1.get(P1.key);else for(m1=Z;m1<=q;m1++)if(m3[m1-Z]===0&&_2(P1,v[m1])){j1=m1;break}j1===void 0?S1(P1,p,b,!0):(m3[j1-Z]=L+1,j1>=G0?G0=j1:j2=!0,N(P1,v[j1],H,null,p,b,A,x,S),M1++)}const W0=j2?Sm(m3):J2;for(m1=W0.length-1,L=q1-1;L>=0;L--){const P1=Z+L,j1=v[P1],j0=P1+1<F?v[P1+1].el:C;m3[L]===0?N(null,j1,H,j0,p,b,A,x,S):j2&&(m1<0||L!==W0[m1]?W1(j1,H,j0,2):m1--)}}},W1=(m,v,H,C,p=null)=>{const{el:b,type:A,transition:x,children:S,shapeFlag:L}=m;if(L&6){W1(m.component.subTree,v,H,C);return}if(L&128){m.suspense.move(v,H,C);return}if(L&64){A.move(m,v,H,R);return}if(A===T1){r(b,v,H);for(let O=0;O<S.length;O++)W1(S[O],v,H,C);r(m.anchor,v,H);return}if(A===h4){y(m,v,H);return}if(C!==2&&L&1&&x)if(C===0)x.beforeEnter(b),r(b,v,H),w1(()=>x.enter(b),p);else{const{leave:O,delayLeave:q,afterLeave:G}=x,Z=()=>r(b,v,H),n1=()=>{O(b,()=>{Z(),G&&G()})};q?q(b,Z,n1):n1()}else r(b,v,H)},S1=(m,v,H,C=!1,p=!1)=>{const{type:b,props:A,ref:x,children:S,dynamicChildren:L,shapeFlag:F,patchFlag:O,dirs:q}=m;if(x!=null&&G6(x,null,H,m,!0),F&256){v.ctx.deactivate(m);return}const G=F&1&&q,Z=!z4(m);let n1;if(Z&&(n1=A&&A.onVnodeBeforeUnmount)&&Z1(n1,v,m),F&6)j3(m.component,H,C);else{if(F&128){m.suspense.unmount(H,C);return}G&&k2(m,null,v,"beforeUnmount"),F&64?m.type.remove(m,v,H,p,R,C):L&&(b!==T1||O>0&&O&64)?g1(L,v,H,!1,!0):(b===T1&&O&384||!p&&F&16)&&g1(S,v,H),C&&G2(m)}(Z&&(n1=A&&A.onVnodeUnmounted)||G)&&w1(()=>{n1&&Z1(n1,v,m),G&&k2(m,null,v,"unmounted")},H)},G2=m=>{const{type:v,el:H,anchor:C,transition:p}=m;if(v===T1){W2(H,C);return}if(v===h4){_(m);return}const b=()=>{s(H),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(m.shapeFlag&1&&p&&!p.persisted){const{leave:A,delayLeave:x}=p,S=()=>A(H,b);x?x(m.el,b,S):S()}else b()},W2=(m,v)=>{let H;for(;m!==v;)H=h(m),s(m),m=H;s(v)},j3=(m,v,H)=>{const{bum:C,scope:p,update:b,subTree:A,um:x}=m;C&&H6(C),p.stop(),b&&(b.active=!1,S1(A,m,v,H)),x&&w1(x,v),w1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},g1=(m,v,H,C=!1,p=!1,b=0)=>{for(let A=b;A<m.length;A++)S1(m[A],v,H,C,p)},M=m=>m.shapeFlag&6?M(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el);let T=!1;const w=(m,v,H)=>{m==null?v._vnode&&S1(v._vnode,null,null,!0):N(v._vnode||null,m,v,null,null,null,H),T||(T=!0,e5(),J7(),T=!1),v._vnode=m},R={p:N,um:S1,m:W1,r:G2,mt:b1,mc:U,pc:a1,pbc:c1,n:M,o:c};let e1,t1;return a&&([e1,t1]=a(R)),{render:w,hydrate:e1,createApp:pm(w,e1)}}function C6({type:c,props:a},e){return e==="svg"&&c==="foreignObject"||e==="mathml"&&c==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:e}function P2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function Nm(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function C9(c,a,e=!1){const r=c.children,s=a.children;if(I(r)&&I(s))for(let i=0;i<r.length;i++){const n=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=C2(s[i]),l.el=n.el),e||C9(n,l)),l.type===O4&&(l.el=n.el)}}function Sm(c){const a=c.slice(),e=[0];let r,s,i,n,l;const f=c.length;for(r=0;r<f;r++){const t=c[r];if(t!==0){if(s=e[e.length-1],c[s]<t){a[r]=s,e.push(r);continue}for(i=0,n=e.length-1;i<n;)l=i+n>>1,c[e[l]]<t?i=l+1:n=l;t<c[e[i]]&&(i>0&&(a[r]=e[i-1]),e[i]=r)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}function d9(c){const a=c.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:d9(a)}const ym=c=>c.__isTeleport,T1=Symbol.for("v-fgt"),O4=Symbol.for("v-txt"),I1=Symbol.for("v-cmt"),h4=Symbol.for("v-stc"),p3=[];let $1=null;function C1(c=!1){p3.push($1=c?null:[])}function wm(){p3.pop(),$1=p3[p3.length-1]||null}let N3=1;function h5(c){N3+=c}function L9(c){return c.dynamicChildren=N3>0?$1||J2:null,wm(),N3>0&&$1&&$1.push(c),c}function F1(c,a,e,r,s,i){return L9(W(c,a,e,r,s,i,!0))}function S3(c,a,e,r,s){return L9(J(c,a,e,r,s,!0))}function W6(c){return c?c.__v_isVNode===!0:!1}function _2(c,a){return c.type===a.type&&c.key===a.key}const $4="__vInternal",g9=({key:c})=>c??null,H4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?H1(c)||k1(c)||j(c)?{i:E1,r:c,k:a,f:!!e}:c:null);function W(c,a=null,e=null,r=0,s=null,i=c===T1?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&g9(a),ref:a&&H4(a),scopeId:R4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:E1};return l?(y8(f,e),i&128&&c.normalize(f)):e&&(f.shapeFlag|=H1(e)?8:16),N3>0&&!n&&$1&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&$1.push(f),f}const J=Am;function Am(c,a=null,e=null,r=0,s=null,i=!1){if((!c||c===Gt)&&(c=I1),W6(c)){const l=N2(c,a,!0);return e&&y8(l,e),N3>0&&!i&&$1&&(l.shapeFlag&6?$1[$1.indexOf(c)]=l:$1.push(l)),l.patchFlag|=-2,l}if(Im(c)&&(c=c.__vccOpts),a){a=km(a);let{class:l,style:f}=a;l&&!H1(l)&&(a.class=H8(l)),o1(f)&&(I7(f)&&!I(f)&&(f=V1({},f)),a.style=h8(f))}const n=H1(c)?1:jt(c)?128:ym(c)?64:o1(c)?4:j(c)?2:0;return W(c,a,e,r,s,n,i,!0)}function km(c){return c?I7(c)||$4 in c?V1({},c):c:null}function N2(c,a,e=!1){const{props:r,ref:s,patchFlag:i,children:n}=c,l=a?Fm(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&g9(l),ref:a&&a.ref?e&&s?I(s)?s.concat(H4(a)):[s,H4(a)]:H4(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==T1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&N2(c.ssContent),ssFallback:c.ssFallback&&N2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function Z2(c=" ",a=0){return J(O4,null,c,a)}function Pm(c,a){const e=J(h4,null,c);return e.staticCount=a,e}function Tm(c="",a=!1){return a?(C1(),S3(I1,null,c)):J(I1,null,c)}function K1(c){return c==null||typeof c=="boolean"?J(I1):I(c)?J(T1,null,c.slice()):typeof c=="object"?C2(c):J(O4,null,String(c))}function C2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:N2(c)}function y8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(I(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),y8(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!($4 in a)?a._ctx=E1:s===3&&E1&&(E1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else j(a)?(a={default:a,_ctx:E1},e=32):(a=String(a),r&64?(e=16,a=[Z2(a)]):e=8);c.children=a,c.shapeFlag|=e}function Fm(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=H8([a.class,r.class]));else if(s==="style")a.style=h8([a.style,r.style]);else if(w4(s)){const i=a[s],n=r[s];n&&i!==n&&!(I(i)&&i.includes(n))&&(a[s]=i?[].concat(i,n):n)}else s!==""&&(a[s]=r[s])}return a}function Z1(c,a,e,r=null){D1(c,a,7,[e,r])}const Bm=h9();let _m=0;function Rm(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||Bm,i={uid:_m++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new w7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:u9(r,s),emitsOptions:a9(r,s),emit:null,emitted:null,propsDefaults:z1,inheritAttrs:r.inheritAttrs,ctx:z1,data:z1,props:z1,attrs:z1,slots:z1,refs:z1,setupState:z1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=qt.bind(null,i),c.ce&&c.ce(i),i}let L1=null;const Em=()=>L1||E1;let g4,j6;{const c=N7(),a=(e,r)=>{let s;return(s=c[e])||(s=c[e]=[]),s.push(r),i=>{s.length>1?s.forEach(n=>n(i)):s[0](i)}};g4=a("__VUE_INSTANCE_SETTERS__",e=>L1=e),j6=a("__VUE_SSR_SETTERS__",e=>U4=e)}const R3=c=>{const a=L1;return g4(c),c.scope.on(),()=>{c.scope.off(),g4(a)}},H5=()=>{L1&&L1.scope.off(),g4(null)};function x9(c){return c.vnode.shapeFlag&4}let U4=!1;function Dm(c,a=!1){a&&j6(a);const{props:e,children:r}=c.vnode,s=x9(c);Mm(c,e,s,a),Lm(c,r);const i=s?qm(c,a):void 0;return a&&j6(!1),i}function qm(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=L8(new Proxy(c.ctx,mm));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?$m(c):null,i=R3(c);U2();const n=x2(r,c,0,[c.props,s]);if(I2(),i(),g7(n)){if(n.then(H5,H5),a)return n.then(l=>{u5(c,l,a)}).catch(l=>{B4(l,c,0)});c.asyncDep=n}else u5(c,n,a)}else b9(c,a)}function u5(c,a,e){j(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:o1(a)&&(c.setupState=K7(a)),b9(c,e)}let V5;function b9(c,a,e){const r=c.type;if(!c.render){if(!a&&V5&&!r.render){const s=r.template||N8(c).template;if(s){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,t=V1(V1({isCustomElement:i,delimiters:l},n),f);r.render=V5(s,t)}}c.render=r.render||R1}{const s=R3(c);U2();try{zm(c)}finally{I2(),s()}}}function Om(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return A1(c,"get","$attrs"),a[e]}}))}function $m(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Om(c)},slots:c.slots,emit:c.emit,expose:a}}function w8(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(K7(L8(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in V3)return V3[e](c)},has(a,e){return e in a||e in V3}}))}function Um(c,a=!0){return j(c)?c.displayName||c.name:c.name||a&&c.__name}function Im(c){return j(c)&&"__vccOpts"in c}const d1=(c,a)=>kt(c,a,U4);function I4(c,a,e){const r=arguments.length;return r===2?o1(a)&&!I(a)?W6(a)?J(c,null,[a]):J(c,a):J(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&W6(e)&&(e=[e]),J(c,a,e))}const Gm="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Wm="http://www.w3.org/2000/svg",jm="http://www.w3.org/1998/Math/MathML",d2=typeof document<"u"?document:null,p5=d2&&d2.createElement("template"),Zm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a==="svg"?d2.createElementNS(Wm,c):a==="mathml"?d2.createElementNS(jm,c):d2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>d2.createTextNode(c),createComment:c=>d2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>d2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,i){const n=e?e.previousSibling:a.lastChild;if(s&&(s===i||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===i||!(s=s.nextSibling)););else{p5.innerHTML=r==="svg"?`<svg>${c}</svg>`:r==="mathml"?`<math>${c}</math>`:c;const l=p5.content;if(r==="svg"||r==="mathml"){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},h2="transition",z3="animation",y3=Symbol("_vtc"),A8=(c,{slots:a})=>I4(cm,Km(c),a);A8.displayName="Transition";const N9={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};A8.props=V1({},n9,N9);const T2=(c,a=[])=>{I(c)?c.forEach(e=>e(...a)):c&&c(...a)},M5=c=>c?I(c)?c.some(a=>a.length>1):c.length>1:!1;function Km(c){const a={};for(const D in c)D in N9||(a[D]=c[D]);if(c.css===!1)return a;const{name:e="v",type:r,duration:s,enterFromClass:i=`${e}-enter-from`,enterActiveClass:n=`${e}-enter-active`,enterToClass:l=`${e}-enter-to`,appearFromClass:f=i,appearActiveClass:t=n,appearToClass:o=l,leaveFromClass:z=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:u=`${e}-leave-to`}=c,g=Ym(s),N=g&&g[0],k=g&&g[1],{onBeforeEnter:V,onEnter:d,onEnterCancelled:y,onLeave:_,onLeaveCancelled:$,onBeforeAppear:E=V,onAppear:Y=d,onAppearCancelled:U=y}=a,K=(D,r1,b1)=>{F2(D,r1?o:l),F2(D,r1?t:n),b1&&b1()},c1=(D,r1)=>{D._isLeaving=!1,F2(D,z),F2(D,u),F2(D,h),r1&&r1()},u1=D=>(r1,b1)=>{const c2=D?Y:d,h1=()=>K(r1,D,b1);T2(c2,[r1,h1]),C5(()=>{F2(r1,D?f:i),H2(r1,D?o:l),M5(c2)||d5(r1,r,N,h1)})};return V1(a,{onBeforeEnter(D){T2(V,[D]),H2(D,i),H2(D,n)},onBeforeAppear(D){T2(E,[D]),H2(D,f),H2(D,t)},onEnter:u1(!1),onAppear:u1(!0),onLeave(D,r1){D._isLeaving=!0;const b1=()=>c1(D,r1);H2(D,z),Jm(),H2(D,h),C5(()=>{D._isLeaving&&(F2(D,z),H2(D,u),M5(_)||d5(D,r,k,b1))}),T2(_,[D,b1])},onEnterCancelled(D){K(D,!1),T2(y,[D])},onAppearCancelled(D){K(D,!0),T2(U,[D])},onLeaveCancelled(D){c1(D),T2($,[D])}})}function Ym(c){if(c==null)return null;if(o1(c))return[d6(c.enter),d6(c.leave)];{const a=d6(c);return[a,a]}}function d6(c){return et(c)}function H2(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c[y3]||(c[y3]=new Set)).add(a)}function F2(c,a){a.split(/\s+/).forEach(r=>r&&c.classList.remove(r));const e=c[y3];e&&(e.delete(a),e.size||(c[y3]=void 0))}function C5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Xm=0;function d5(c,a,e,r){const s=c._endId=++Xm,i=()=>{s===c._endId&&r()};if(e)return setTimeout(i,e);const{type:n,timeout:l,propCount:f}=Qm(c,a);if(!n)return r();const t=n+"end";let o=0;const z=()=>{c.removeEventListener(t,h),i()},h=u=>{u.target===c&&++o>=f&&z()};setTimeout(()=>{o<f&&z()},l+1),c.addEventListener(t,h)}function Qm(c,a){const e=window.getComputedStyle(c),r=g=>(e[g]||"").split(", "),s=r(`${h2}Delay`),i=r(`${h2}Duration`),n=L5(s,i),l=r(`${z3}Delay`),f=r(`${z3}Duration`),t=L5(l,f);let o=null,z=0,h=0;a===h2?n>0&&(o=h2,z=n,h=i.length):a===z3?t>0&&(o=z3,z=t,h=f.length):(z=Math.max(n,t),o=z>0?n>t?h2:z3:null,h=o?o===h2?i.length:f.length:0);const u=o===h2&&/\b(transform|all)(,|$)/.test(r(`${h2}Property`).toString());return{type:o,timeout:z,propCount:h,hasTransform:u}}function L5(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,r)=>g5(e)+g5(c[r])))}function g5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Jm(){return document.body.offsetHeight}function cz(c,a,e){const r=c[y3];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const az=Symbol("_vod"),ez=Symbol("");function rz(c,a,e){const r=c.style,s=r.display,i=H1(e);if(e&&!i){if(a&&!H1(a))for(const n in a)e[n]==null&&Z6(r,n,"");for(const n in e)Z6(r,n,e[n])}else if(i){if(a!==e){const n=r[ez];n&&(e+=";"+n),r.cssText=e}}else a&&c.removeAttribute("style");az in c&&(r.display=s)}const x5=/\s*!important$/;function Z6(c,a,e){if(I(e))e.forEach(r=>Z6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=sz(c,a);x5.test(e)?c.setProperty(o3(r),e.replace(x5,""),"important"):c[r]=e}}const b5=["Webkit","Moz","ms"],L6={};function sz(c,a){const e=L6[a];if(e)return e;let r=J1(a);if(r!=="filter"&&r in c)return L6[a]=r;r=P4(r);for(let s=0;s<b5.length;s++){const i=b5[s]+r;if(i in c)return L6[a]=i}return a}const N5="http://www.w3.org/1999/xlink";function iz(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(N5,a.slice(6,a.length)):c.setAttributeNS(N5,a,e);else{const i=ft(a);e==null||i&&!S7(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function nz(c,a,e,r,s,i,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,s,i),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){c._value=e;const t=l==="OPTION"?c.getAttribute("value"):c.value,o=e??"";t!==o&&(c.value=o),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=S7(e):e==null&&t==="string"?(e="",f=!0):t==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function lz(c,a,e,r){c.addEventListener(a,e,r)}function fz(c,a,e,r){c.removeEventListener(a,e,r)}const S5=Symbol("_vei");function oz(c,a,e,r,s=null){const i=c[S5]||(c[S5]={}),n=i[a];if(r&&n)n.value=r;else{const[l,f]=tz(a);if(r){const t=i[a]=vz(r,s);lz(c,l,t,f)}else n&&(fz(c,l,n,f),i[a]=void 0)}}const y5=/(?:Once|Passive|Capture)$/;function tz(c){let a;if(y5.test(c)){a={};let r;for(;r=c.match(y5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):o3(c.slice(2)),a]}let g6=0;const mz=Promise.resolve(),zz=()=>g6||(mz.then(()=>g6=0),g6=Date.now());function vz(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;D1(hz(r,e.value),a,5,[r])};return e.value=c,e.attached=zz(),e}function hz(c,a){if(I(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const w5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Hz=(c,a,e,r,s,i,n,l,f)=>{const t=s==="svg";a==="class"?cz(c,r,t):a==="style"?rz(c,e,r):w4(a)?m8(a)||oz(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):uz(c,a,r,t))?nz(c,a,r,i,n,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),iz(c,a,r,t))};function uz(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&w5(a)&&j(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const s=c.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return w5(a)&&H1(e)?!1:a in c}const Vz=["ctrl","shift","alt","meta"],pz={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>Vz.some(e=>c[`${e}Key`]&&!a.includes(e))},Mz=(c,a)=>{const e=c._withMods||(c._withMods={}),r=a.join(".");return e[r]||(e[r]=(s,...i)=>{for(let n=0;n<a.length;n++){const l=pz[a[n]];if(l&&l(s,a))return}return c(s,...i)})},Cz=V1({patchProp:Hz},Zm);let A5;function dz(){return A5||(A5=xm(Cz))}const Lz=(...c)=>{const a=dz().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=xz(r);if(!s)return;const i=a._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const n=e(s,!1,gz(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),n},a};function gz(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function xz(c){return H1(c)?document.querySelector(c):c}var bz=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Nz=Symbol();var k5;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(k5||(k5={}));function Sz(){const c=ot(!0),a=c.run(()=>j7({}));let e=[],r=[];const s=L8({install(i){s._a=i,i.provide(Nz,s),i.config.globalProperties.$pinia=s,r.forEach(n=>e.push(n)),r=[]},use(i){return!this._a&&!bz?r.push(i):e.push(i),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return s}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const K2=typeof window<"u";function yz(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const s1=Object.assign;function x6(c,a){const e={};for(const r in a){const s=a[r];e[r]=G1(s)?s.map(c):c(s)}return e}const M3=()=>{},G1=Array.isArray,wz=/\/$/,Az=c=>c.replace(wz,"");function b6(c,a,e="/"){let r,s={},i="",n="";const l=a.indexOf("#");let f=a.indexOf("?");return l<f&&l>=0&&(f=-1),f>-1&&(r=a.slice(0,f),i=a.slice(f+1,l>-1?l:a.length),s=c(i)),l>-1&&(r=r||a.slice(0,l),n=a.slice(l,a.length)),r=Fz(r??a,e),{fullPath:r+(i&&"?")+i+n,path:r,query:s,hash:n}}function kz(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function P5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Pz(c,a,e){const r=a.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&i3(a.matched[r],e.matched[s])&&S9(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function i3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function S9(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Tz(c[e],a[e]))return!1;return!0}function Tz(c,a){return G1(c)?T5(c,a):G1(a)?T5(a,c):c===a}function T5(c,a){return G1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Fz(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=e.length-1,n,l;for(n=0;n<r.length;n++)if(l=r[n],l!==".")if(l==="..")i>1&&i--;else break;return e.slice(0,i).join("/")+"/"+r.slice(n-(n===r.length?1:0)).join("/")}var w3;(function(c){c.pop="pop",c.push="push"})(w3||(w3={}));var C3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(C3||(C3={}));function Bz(c){if(!c)if(K2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),Az(c)}const _z=/^[^#]+#/;function Rz(c,a){return c.replace(_z,"#")+a}function Ez(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const G4=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dz(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;a=Ez(s,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function F5(c,a){return(history.state?history.state.position-a:-1)+c}const K6=new Map;function qz(c,a){K6.set(c,a)}function Oz(c){const a=K6.get(c);return K6.delete(c),a}let $z=()=>location.protocol+"//"+location.host;function y9(c,a){const{pathname:e,search:r,hash:s}=a,i=c.indexOf("#");if(i>-1){let l=s.includes(c.slice(i))?c.slice(i).length:1,f=s.slice(l);return f[0]!=="/"&&(f="/"+f),P5(f,"")}return P5(e,c)+r+s}function Uz(c,a,e,r){let s=[],i=[],n=null;const l=({state:h})=>{const u=y9(c,location),g=e.value,N=a.value;let k=0;if(h){if(e.value=u,a.value=h,n&&n===g){n=null;return}k=N?h.position-N.position:0}else r(u);s.forEach(V=>{V(e.value,g,{delta:k,type:w3.pop,direction:k?k>0?C3.forward:C3.back:C3.unknown})})};function f(){n=e.value}function t(h){s.push(h);const u=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return i.push(u),u}function o(){const{history:h}=window;h.state&&h.replaceState(s1({},h.state,{scroll:G4()}),"")}function z(){for(const h of i)h();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:f,listen:t,destroy:z}}function B5(c,a,e,r=!1,s=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:s?G4():null}}function Iz(c){const{history:a,location:e}=window,r={value:y9(c,e)},s={value:a.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(f,t,o){const z=c.indexOf("#"),h=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+f:$z()+c+f;try{a[o?"replaceState":"pushState"](t,"",h),s.value=t}catch(u){console.error(u),e[o?"replace":"assign"](h)}}function n(f,t){const o=s1({},a.state,B5(s.value.back,f,s.value.forward,!0),t,{position:s.value.position});i(f,o,!0),r.value=f}function l(f,t){const o=s1({},s.value,a.state,{forward:f,scroll:G4()});i(o.current,o,!0);const z=s1({},B5(r.value,f,null),{position:o.position+1},t);i(f,z,!1),r.value=f}return{location:r,state:s,push:l,replace:n}}function Gz(c){c=Bz(c);const a=Iz(c),e=Uz(c,a.state,a.location,a.replace);function r(i,n=!0){n||e.pauseListeners(),history.go(i)}const s=s1({location:"",base:c,go:r,createHref:Rz.bind(null,c)},a,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function Wz(c){return typeof c=="string"||c&&typeof c=="object"}function w9(c){return typeof c=="string"||typeof c=="symbol"}const u2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},A9=Symbol("");var _5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(_5||(_5={}));function n3(c,a){return s1(new Error,{type:c,[A9]:!0},a)}function e2(c,a){return c instanceof Error&&A9 in c&&(a==null||!!(c.type&a))}const R5="[^/]+?",jz={sensitive:!1,strict:!1,start:!0,end:!0},Zz=/[.+*?^${}()[\]/\\]/g;function Kz(c,a){const e=s1({},jz,a),r=[];let s=e.start?"^":"";const i=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(s+="/");for(let z=0;z<t.length;z++){const h=t[z];let u=40+(e.sensitive?.25:0);if(h.type===0)z||(s+="/"),s+=h.value.replace(Zz,"\\$&"),u+=40;else if(h.type===1){const{value:g,repeatable:N,optional:k,regexp:V}=h;i.push({name:g,repeatable:N,optional:k});const d=V||R5;if(d!==R5){u+=10;try{new RegExp(`(${d})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${g}" (${d}): `+_.message)}}let y=N?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(y=k&&t.length<2?`(?:/${y})`:"/"+y),k&&(y+="?"),s+=y,u+=20,k&&(u+=-8),N&&(u+=-20),d===".*"&&(u+=-50)}o.push(u)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const n=new RegExp(s,e.sensitive?"":"i");function l(t){const o=t.match(n),z={};if(!o)return null;for(let h=1;h<o.length;h++){const u=o[h]||"",g=i[h-1];z[g.name]=u&&g.repeatable?u.split("/"):u}return z}function f(t){let o="",z=!1;for(const h of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const u of h)if(u.type===0)o+=u.value;else if(u.type===1){const{value:g,repeatable:N,optional:k}=u,V=g in t?t[g]:"";if(G1(V)&&!N)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const d=G1(V)?V.join("/"):V;if(!d)if(k)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${g}"`);o+=d}}return o||"/"}return{re:n,score:r,keys:i,parse:l,stringify:f}}function Yz(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===80?-1:1:c.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Xz(c,a){let e=0;const r=c.score,s=a.score;for(;e<r.length&&e<s.length;){const i=Yz(r[e],s[e]);if(i)return i;e++}if(Math.abs(s.length-r.length)===1){if(E5(r))return 1;if(E5(s))return-1}return s.length-r.length}function E5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Qz={type:0,value:""},Jz=/[a-zA-Z0-9_]/;function cv(c){if(!c)return[[]];if(c==="/")return[[Qz]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(u){throw new Error(`ERR (${e})/"${t}": ${u}`)}let e=0,r=e;const s=[];let i;function n(){i&&s.push(i),i=[]}let l=0,f,t="",o="";function z(){t&&(e===0?i.push({type:0,value:t}):e===1||e===2||e===3?(i.length>1&&(f==="*"||f==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:t,regexp:o,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):a("Invalid state to consume buffer"),t="")}function h(){t+=f}for(;l<c.length;){if(f=c[l++],f==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:f==="/"?(t&&z(),n()):f===":"?(z(),e=1):h();break;case 4:h(),e=r;break;case 1:f==="("?e=2:Jz.test(f)?h():(z(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--);break;case 2:f===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+f:e=3:o+=f;break;case 3:z(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),n(),s}function av(c,a,e){const r=Kz(cv(c.path),e),s=s1(r,{record:c,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function ev(c,a){const e=[],r=new Map;a=O5({strict:!1,end:!0,sensitive:!1},a);function s(o){return r.get(o)}function i(o,z,h){const u=!h,g=rv(o);g.aliasOf=h&&h.record;const N=O5(a,o),k=[g];if("alias"in o){const y=typeof o.alias=="string"?[o.alias]:o.alias;for(const _ of y)k.push(s1({},g,{components:h?h.record.components:g.components,path:_,aliasOf:h?h.record:g}))}let V,d;for(const y of k){const{path:_}=y;if(z&&_[0]!=="/"){const $=z.record.path,E=$[$.length-1]==="/"?"":"/";y.path=z.record.path+(_&&E+_)}if(V=av(y,z,N),h?h.alias.push(V):(d=d||V,d!==V&&d.alias.push(V),u&&o.name&&!q5(V)&&n(o.name)),g.children){const $=g.children;for(let E=0;E<$.length;E++)i($[E],V,h&&h.children[E])}h=h||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&f(V)}return d?()=>{n(d)}:M3}function n(o){if(w9(o)){const z=r.get(o);z&&(r.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(n),z.alias.forEach(n))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&r.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function l(){return e}function f(o){let z=0;for(;z<e.length&&Xz(o,e[z])>=0&&(o.record.path!==e[z].record.path||!k9(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!q5(o)&&r.set(o.record.name,o)}function t(o,z){let h,u={},g,N;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw n3(1,{location:o});N=h.record.name,u=s1(D5(z.params,h.keys.filter(d=>!d.optional).map(d=>d.name)),o.params&&D5(o.params,h.keys.map(d=>d.name))),g=h.stringify(u)}else if("path"in o)g=o.path,h=e.find(d=>d.re.test(g)),h&&(u=h.parse(g),N=h.record.name);else{if(h=z.name?r.get(z.name):e.find(d=>d.re.test(z.path)),!h)throw n3(1,{location:o,currentLocation:z});N=h.record.name,u=s1({},z.params,o.params),g=h.stringify(u)}const k=[];let V=h;for(;V;)k.unshift(V.record),V=V.parent;return{name:N,path:g,params:u,matched:k,meta:iv(k)}}return c.forEach(o=>i(o)),{addRoute:i,resolve:t,removeRoute:n,getRoutes:l,getRecordMatcher:s}}function D5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function rv(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:sv(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function sv(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function q5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function iv(c){return c.reduce((a,e)=>s1(a,e.meta),{})}function O5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function k9(c,a){return a.children.some(e=>e===c||k9(c,e))}const P9=/#/g,nv=/&/g,lv=/\//g,fv=/=/g,ov=/\?/g,T9=/\+/g,tv=/%5B/g,mv=/%5D/g,F9=/%5E/g,zv=/%60/g,B9=/%7B/g,vv=/%7C/g,_9=/%7D/g,hv=/%20/g;function k8(c){return encodeURI(""+c).replace(vv,"|").replace(tv,"[").replace(mv,"]")}function Hv(c){return k8(c).replace(B9,"{").replace(_9,"}").replace(F9,"^")}function Y6(c){return k8(c).replace(T9,"%2B").replace(hv,"+").replace(P9,"%23").replace(nv,"%26").replace(zv,"`").replace(B9,"{").replace(_9,"}").replace(F9,"^")}function uv(c){return Y6(c).replace(fv,"%3D")}function Vv(c){return k8(c).replace(P9,"%23").replace(ov,"%3F")}function pv(c){return c==null?"":Vv(c).replace(lv,"%2F")}function x4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function Mv(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(T9," "),n=i.indexOf("="),l=x4(n<0?i:i.slice(0,n)),f=n<0?null:x4(i.slice(n+1));if(l in a){let t=a[l];G1(t)||(t=a[l]=[t]),t.push(f)}else a[l]=f}return a}function $5(c){let a="";for(let e in c){const r=c[e];if(e=uv(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(G1(r)?r.map(i=>i&&Y6(i)):[r&&Y6(r)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+e,i!=null&&(a+="="+i))})}return a}function Cv(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=G1(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const dv=Symbol(""),U5=Symbol(""),P8=Symbol(""),R9=Symbol(""),X6=Symbol("");function v3(){let c=[];function a(r){return c.push(r),()=>{const s=c.indexOf(r);s>-1&&c.splice(s,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function L2(c,a,e,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((n,l)=>{const f=z=>{z===!1?l(n3(4,{from:e,to:a})):z instanceof Error?l(z):Wz(z)?l(n3(2,{from:a,to:z})):(i&&r.enterCallbacks[s]===i&&typeof z=="function"&&i.push(z),n())},t=c.call(r&&r.instances[s],a,e,f);let o=Promise.resolve(t);c.length<3&&(o=o.then(f)),o.catch(z=>l(z))})}function N6(c,a,e,r){const s=[];for(const i of c)for(const n in i.components){let l=i.components[n];if(!(a!=="beforeRouteEnter"&&!i.instances[n]))if(Lv(l)){const t=(l.__vccOpts||l)[a];t&&s.push(L2(t,e,r,i,n))}else{let f=l();s.push(()=>f.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${i.path}"`));const o=yz(t)?t.default:t;i.components[n]=o;const h=(o.__vccOpts||o)[a];return h&&L2(h,e,r,i,n)()}))}}return s}function Lv(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function I5(c){const a=i2(P8),e=i2(R9),r=d1(()=>a.resolve(Q1(c.to))),s=d1(()=>{const{matched:f}=r.value,{length:t}=f,o=f[t-1],z=e.matched;if(!o||!z.length)return-1;const h=z.findIndex(i3.bind(null,o));if(h>-1)return h;const u=G5(f[t-2]);return t>1&&G5(o)===u&&z[z.length-1].path!==u?z.findIndex(i3.bind(null,f[t-2])):h}),i=d1(()=>s.value>-1&&Nv(e.params,r.value.params)),n=d1(()=>s.value>-1&&s.value===e.matched.length-1&&S9(e.params,r.value.params));function l(f={}){return bv(f)?a[Q1(c.replace)?"replace":"push"](Q1(c.to)).catch(M3):Promise.resolve()}return{route:r,href:d1(()=>r.value.href),isActive:i,isExactActive:n,navigate:l}}const gv=A2({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:I5,setup(c,{slots:a}){const e=F4(I5(c)),{options:r}=i2(P8),s=d1(()=>({[W5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[W5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=a.default&&a.default(e);return c.custom?i:I4("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},i)}}}),xv=gv;function bv(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Nv(c,a){for(const e in a){const r=a[e],s=c[e];if(typeof r=="string"){if(r!==s)return!1}else if(!G1(s)||s.length!==r.length||r.some((i,n)=>i!==s[n]))return!1}return!0}function G5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const W5=(c,a,e)=>c??a??e,Sv=A2({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=i2(X6),s=d1(()=>c.route||r.value),i=i2(U5,0),n=d1(()=>{let t=Q1(i);const{matched:o}=s.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),l=d1(()=>s.value.matched[n.value]);v4(U5,d1(()=>n.value+1)),v4(dv,l),v4(X6,s);const f=j7();return u3(()=>[f.value,l.value,c.name],([t,o,z],[h,u,g])=>{o&&(o.instances[z]=t,u&&u!==o&&t&&t===h&&(o.leaveGuards.size||(o.leaveGuards=u.leaveGuards),o.updateGuards.size||(o.updateGuards=u.updateGuards))),t&&o&&(!u||!i3(o,u)||!h)&&(o.enterCallbacks[z]||[]).forEach(N=>N(t))},{flush:"post"}),()=>{const t=s.value,o=c.name,z=l.value,h=z&&z.components[o];if(!h)return j5(e.default,{Component:h,route:t});const u=z.props[o],g=u?u===!0?t.params:typeof u=="function"?u(t):u:null,k=I4(h,s1({},g,a,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(z.instances[o]=null)},ref:f}));return j5(e.default,{Component:k,route:t})||k}}});function j5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const E9=Sv;function yv(c){const a=ev(c.routes,c),e=c.parseQuery||Mv,r=c.stringifyQuery||$5,s=c.history,i=v3(),n=v3(),l=v3(),f=Pt(u2);let t=u2;K2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=x6.bind(null,M=>""+M),z=x6.bind(null,pv),h=x6.bind(null,x4);function u(M,T){let w,R;return w9(M)?(w=a.getRecordMatcher(M),R=T):R=M,a.addRoute(R,w)}function g(M){const T=a.getRecordMatcher(M);T&&a.removeRoute(T)}function N(){return a.getRoutes().map(M=>M.record)}function k(M){return!!a.getRecordMatcher(M)}function V(M,T){if(T=s1({},T||f.value),typeof M=="string"){const v=b6(e,M,T.path),H=a.resolve({path:v.path},T),C=s.createHref(v.fullPath);return s1(v,H,{params:h(H.params),hash:x4(v.hash),redirectedFrom:void 0,href:C})}let w;if("path"in M)w=s1({},M,{path:b6(e,M.path,T.path).path});else{const v=s1({},M.params);for(const H in v)v[H]==null&&delete v[H];w=s1({},M,{params:z(v)}),T.params=z(T.params)}const R=a.resolve(w,T),e1=M.hash||"";R.params=o(h(R.params));const t1=kz(r,s1({},M,{hash:Hv(e1),path:R.path})),m=s.createHref(t1);return s1({fullPath:t1,hash:e1,query:r===$5?Cv(M.query):M.query||{}},R,{redirectedFrom:void 0,href:m})}function d(M){return typeof M=="string"?b6(e,M,f.value.path):s1({},M)}function y(M,T){if(t!==M)return n3(8,{from:T,to:M})}function _(M){return Y(M)}function $(M){return _(s1(d(M),{replace:!0}))}function E(M){const T=M.matched[M.matched.length-1];if(T&&T.redirect){const{redirect:w}=T;let R=typeof w=="function"?w(M):w;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=d(R):{path:R},R.params={}),s1({query:M.query,hash:M.hash,params:"path"in R?{}:M.params},R)}}function Y(M,T){const w=t=V(M),R=f.value,e1=M.state,t1=M.force,m=M.replace===!0,v=E(w);if(v)return Y(s1(d(v),{state:typeof v=="object"?s1({},e1,v.state):e1,force:t1,replace:m}),T||w);const H=w;H.redirectedFrom=T;let C;return!t1&&Pz(r,R,w)&&(C=n3(16,{to:H,from:R}),W1(R,R,!0,!1)),(C?Promise.resolve(C):c1(H,R)).catch(p=>e2(p)?e2(p,2)?p:z2(p):a1(p,H,R)).then(p=>{if(p){if(e2(p,2))return Y(s1({replace:m},d(p.to),{state:typeof p.to=="object"?s1({},e1,p.to.state):e1,force:t1}),T||H)}else p=D(H,R,!0,m,e1);return u1(H,R,p),p})}function U(M,T){const w=y(M,T);return w?Promise.reject(w):Promise.resolve()}function K(M){const T=W2.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(M):M()}function c1(M,T){let w;const[R,e1,t1]=wv(M,T);w=N6(R.reverse(),"beforeRouteLeave",M,T);for(const v of R)v.leaveGuards.forEach(H=>{w.push(L2(H,M,T))});const m=U.bind(null,M,T);return w.push(m),g1(w).then(()=>{w=[];for(const v of i.list())w.push(L2(v,M,T));return w.push(m),g1(w)}).then(()=>{w=N6(e1,"beforeRouteUpdate",M,T);for(const v of e1)v.updateGuards.forEach(H=>{w.push(L2(H,M,T))});return w.push(m),g1(w)}).then(()=>{w=[];for(const v of t1)if(v.beforeEnter)if(G1(v.beforeEnter))for(const H of v.beforeEnter)w.push(L2(H,M,T));else w.push(L2(v.beforeEnter,M,T));return w.push(m),g1(w)}).then(()=>(M.matched.forEach(v=>v.enterCallbacks={}),w=N6(t1,"beforeRouteEnter",M,T),w.push(m),g1(w))).then(()=>{w=[];for(const v of n.list())w.push(L2(v,M,T));return w.push(m),g1(w)}).catch(v=>e2(v,8)?v:Promise.reject(v))}function u1(M,T,w){l.list().forEach(R=>K(()=>R(M,T,w)))}function D(M,T,w,R,e1){const t1=y(M,T);if(t1)return t1;const m=T===u2,v=K2?history.state:{};w&&(R||m?s.replace(M.fullPath,s1({scroll:m&&v&&v.scroll},e1)):s.push(M.fullPath,e1)),f.value=M,W1(M,T,w,m),z2()}let r1;function b1(){r1||(r1=s.listen((M,T,w)=>{if(!j3.listening)return;const R=V(M),e1=E(R);if(e1){Y(s1(e1,{replace:!0}),R).catch(M3);return}t=R;const t1=f.value;K2&&qz(F5(t1.fullPath,w.delta),G4()),c1(R,t1).catch(m=>e2(m,12)?m:e2(m,2)?(Y(m.to,R).then(v=>{e2(v,20)&&!w.delta&&w.type===w3.pop&&s.go(-1,!1)}).catch(M3),Promise.reject()):(w.delta&&s.go(-w.delta,!1),a1(m,R,t1))).then(m=>{m=m||D(R,t1,!1),m&&(w.delta&&!e2(m,8)?s.go(-w.delta,!1):w.type===w3.pop&&e2(m,20)&&s.go(-1,!1)),u1(R,t1,m)}).catch(M3)}))}let c2=v3(),h1=v3(),i1;function a1(M,T,w){z2(M);const R=h1.list();return R.length?R.forEach(e1=>e1(M,T,w)):console.error(M),Promise.reject(M)}function a2(){return i1&&f.value!==u2?Promise.resolve():new Promise((M,T)=>{c2.add([M,T])})}function z2(M){return i1||(i1=!M,b1(),c2.list().forEach(([T,w])=>M?w(M):T()),c2.reset()),M}function W1(M,T,w,R){const{scrollBehavior:e1}=c;if(!K2||!e1)return Promise.resolve();const t1=!w&&Oz(F5(M.fullPath,0))||(R||!w)&&history.state&&history.state.scroll||null;return X7().then(()=>e1(M,T,t1)).then(m=>m&&Dz(m)).catch(m=>a1(m,M,T))}const S1=M=>s.go(M);let G2;const W2=new Set,j3={currentRoute:f,listening:!0,addRoute:u,removeRoute:g,hasRoute:k,getRoutes:N,resolve:V,options:c,push:_,replace:$,go:S1,back:()=>S1(-1),forward:()=>S1(1),beforeEach:i.add,beforeResolve:n.add,afterEach:l.add,onError:h1.add,isReady:a2,install(M){const T=this;M.component("RouterLink",xv),M.component("RouterView",E9),M.config.globalProperties.$router=T,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Q1(f)}),K2&&!G2&&f.value===u2&&(G2=!0,_(s.location).catch(e1=>{}));const w={};for(const e1 in u2)Object.defineProperty(w,e1,{get:()=>f.value[e1],enumerable:!0});M.provide(P8,T),M.provide(R9,$7(w)),M.provide(X6,f);const R=M.unmount;W2.add(M),M.unmount=function(){W2.delete(M),W2.size<1&&(t=u2,r1&&r1(),r1=null,f.value=u2,G2=!1,i1=!1),R()}}};function g1(M){return M.reduce((T,w)=>T.then(()=>K(w)),Promise.resolve())}return j3}function wv(c,a){const e=[],r=[],s=[],i=Math.max(a.matched.length,c.matched.length);for(let n=0;n<i;n++){const l=a.matched[n];l&&(c.matched.find(t=>i3(t,l))?r.push(l):e.push(l));const f=c.matched[n];f&&(a.matched.find(t=>i3(t,f))||s.push(f))}return[e,r,s]}const Av=A2({__name:"App",setup(c){return(a,e)=>(C1(),S3(Q1(E9)))}}),kv="/assets/Animated_Night_Sky-p95APLcW.svg",Pv="/assets/profile-_HBtNJrO.png",t2=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},Tv={},E3=c=>(B3("data-v-f566210d"),c=c(),_3(),c),Fv={class:"page section-page"},Bv=E3(()=>W("img",{src:kv,class:"svg-night-sky",alt:""},null,-1)),_v={class:"container"},Rv=E3(()=>W("img",{src:Pv,alt:"",class:"img-profile"},null,-1)),Ev=E3(()=>W("h1",{class:"title"},"João Paulo",-1)),Dv=E3(()=>W("h3",{class:"subtitle"}," Desenvolvedor Júnior e Acadêmico de Bacharelado em Sistemas de Informação ",-1)),qv={class:"social-media-container"},Ov={class:"social-link",href:"https://github.com/Joao-Paulo-Silva",target:"_blank"},$v={class:"social-link",href:"https://www.linkedin.com/in/jo%C3%A3o-paulo-462572250/",target:"_blank"},Uv={class:"next-page-container",href:"#about"},Iv=E3(()=>W("h4",null,"Mais informações",-1));function Gv(c,a){const e=E4("font-awesome-icon");return C1(),F1("section",Fv,[Bv,W("div",_v,[Rv,Ev,Dv,W("div",qv,[W("a",Ov,[J(e,{icon:["fab","github"],class:"social-media-icon icon-github"})]),W("a",$v,[J(e,{icon:["fab","linkedin"],class:"social-media-icon icon-linkedin"})])]),W("a",Uv,[Iv,J(e,{icon:["fas","angles-down"]})])])])}const Wv=t2(Tv,[["render",Gv],["__scopeId","data-v-f566210d"]]),jv="/assets/Animated_Window_Scene-HvLAUWox.svg",Zv="/assets/profile-about-5jM19U-r.png",Kv={},Yv={class:"page section-page",id:"about"},Xv=Pm('<img src="'+jv+'" class="svg-window-scene" alt="" data-v-4a0820c4><div class="content-about" data-v-4a0820c4><div class="content-profile" data-v-4a0820c4><img src="'+Zv+'" alt="" class="img-profile" data-v-4a0820c4><div class="name-profile" data-v-4a0820c4><h1 class="name" data-v-4a0820c4>João Paulo</h1></div></div><div class="content-text" data-v-4a0820c4><h2 class="title-text" data-v-4a0820c4> Sou um estudante universitário no IFNMG - Salinas na área de Sistemas de Informação, minha jornada profissional é focado em desenvolvimento. </h2><p class="text" data-v-4a0820c4> Em 2019, iniciei minha graduação em Sistemas de Informação e me envolvi ativamente na empresa júnior SIFSoft, onde contribuí para o desenvolvimento do front-end e back-end do site usando Django, Docker, HTML e CSS. </p><p class="text" data-v-4a0820c4> Em projetos comerciais da SIFSoft, atuei como desenvolvedor front-end com React TS, e tenho experiência em diversas linguagens e frameworks, incluindo Django, React.js e Bootstrap. </p></div></div>',2),Qv=[Xv];function Jv(c,a){return C1(),F1("section",Yv,Qv)}const ch=t2(Kv,[["render",Jv],["__scopeId","data-v-4a0820c4"]]),ah="/assets/Animated_Robot_Working-IMCKUHR2.svg",eh={name:"Card",props:{title:{type:String,required:!0},describe:{type:String,required:!0},pathImg:{type:String,required:!0},link:{type:String,required:!1}}},rh=c=>(B3("data-v-6cb6f1bd"),c=c(),_3(),c),sh=["href"],ih={class:"card-container"},nh={class:"img-container"},lh=["src"],fh={class:"content"},oh={class:"content-title"},th={class:"content-description"},mh=rh(()=>W("div",{class:"footer"},null,-1));function zh(c,a,e,r,s,i){return C1(),F1("a",{class:"link-card",href:e.link},[W("div",ih,[W("div",nh,[W("img",{class:"img-card",src:e.pathImg,alt:""},null,8,lh)]),W("div",fh,[W("h1",oh,P6(e.title),1),W("p",th,P6(e.describe),1)]),mh])],8,sh)}const vh=t2(eh,[["render",zh],["__scopeId","data-v-6cb6f1bd"]]),hh=[{id:1,title:"AISP - Python lib",describe:"Este trabalho de conclusão de curso (TCC) consistiu na elaboração de uma biblioteca em Python que incorpora técnicas de sistemas imunológicos artificiais. Foi desenvolvido um módulo inicial voltado para a classificação, destacando-se a aplicação de metáforas de seleção negativa.",pathImg:"src/assets/imgs/aisp-docs.png",link:"https://ais-package.github.io/pt-br/"},{id:2,title:"SIFSoft Júnior",describe:"Na empresa júnior, contribuí em diversos projetos como desenvolvedor frontend, utilizando tecnologias como React com TypeScript. Além disso, participei ativamente no desenvolvimento tanto do frontend quanto do backend do site da empresa, utilizando HTML e CSS no frontend e Django no backend.",pathImg:"src/assets/imgs/sifsoft-site.png",link:"https://sifsoft.com.br/"}],D9=c=>(B3("data-v-95d72301"),c=c(),_3(),c),Hh={class:"page section-page",id:"project"},uh=D9(()=>W("img",{src:ah,class:"svg-robot-work",alt:""},null,-1)),Vh=D9(()=>W("h1",{class:"title"},"Projetos",-1)),ph={class:"container-project"},Mh=A2({__name:"Project",setup(c){return(a,e)=>(C1(),F1("section",Hh,[uh,Vh,W("div",ph,[(C1(!0),F1(T1,null,q6(Q1(hh),r=>(C1(),S3(vh,{key:r.id,describe:r.describe,title:r.title,pathImg:r.pathImg,link:r.link},null,8,["describe","title","pathImg","link"]))),128))])]))}}),Ch=t2(Mh,[["__scopeId","data-v-95d72301"]]),dh=A2({name:"ToggleMenu",data(){return{isOpen:!1}},methods:{toggleMenu(){this.isOpen=!this.isOpen},closeMenu(){this.isOpen=!1},handleClickOutside(c){this.isOpen&&!this.$refs.menu.contains(c.target)&&(this.isOpen=!1)}},mounted(){document.addEventListener("click",this.handleClickOutside)},beforeUnmount(){document.removeEventListener("click",this.handleClickOutside)}}),Lh={class:"content-menu",ref:"menu"},gh=W("a",{href:"#",class:"item-menu"},"Inicio.",-1),xh=W("a",{href:"#about",class:"item-menu"},"Sobre.",-1),bh=W("a",{href:"#project",class:"item-menu"},"Projetos.",-1),Nh=W("a",{href:"#skills",class:"item-menu"},"Habilidades.",-1),Sh=[gh,xh,bh,Nh];function yh(c,a,e,r,s,i){const n=E4("font-awesome-icon");return C1(),F1("div",Lh,[W("button",{onClick:a[0]||(a[0]=(...l)=>c.toggleMenu&&c.toggleMenu(...l)),class:"menu-toggle"},[J(n,{icon:c.isOpen?["fas","times"]:["fas","bars"],class:"menu-icon"},null,8,["icon"])]),J(A8,{name:"fade"},{default:e9(()=>[c.isOpen?(C1(),F1("div",{key:0,class:"menu",onClick:a[1]||(a[1]=Mz((...l)=>c.closeMenu&&c.closeMenu(...l),["self"]))},Sh)):Tm("",!0)]),_:1})],512)}const wh=t2(dh,[["render",yh]]),Ah={name:"SkillCard",props:{title:{type:String,required:!0},icon:{type:Array,required:!0}}},kh={class:"card-container"},Ph={class:"title"};function Th(c,a,e,r,s,i){const n=E4("font-awesome-icon");return C1(),F1("div",kh,[J(n,{icon:e.icon,class:"icon"},null,8,["icon"]),W("h2",Ph,P6(e.title),1)])}const Z5=t2(Ah,[["render",Th],["__scopeId","data-v-a4354c89"]]),Fh=[{title:"c/c++",icon:["fas","c"]},{title:"Python",icon:["fab","python"]},{title:"Java",icon:["fab","java"]},{title:"JavaScript",icon:["fab","js"]},{title:"PHP",icon:["fab","php"]},{title:"R",icon:["fas","r"]}],Bh=[{title:"Bootstrap",icon:["fab","bootstrap"]},{title:"React",icon:["fab","react"]},{title:"React Native",icon:["fab","react"]},{title:"Vue.js",icon:["fab","vuejs"]},{title:"Django",icon:["fas","d"]}],T8=c=>(B3("data-v-7e7bfabc"),c=c(),_3(),c),_h={class:"page section-page",id:"skills"},Rh=T8(()=>W("h1",{class:"title"},"Habilidades",-1)),Eh=T8(()=>W("h3",{class:"subtitle"},"Linguagem de Programação",-1)),Dh={class:"container-skills"},qh=T8(()=>W("h3",{class:"subtitle"},"Frameworks",-1)),Oh={class:"container-skills"},$h=A2({__name:"Skills",setup(c){return(a,e)=>(C1(),F1("div",_h,[Rh,Eh,W("div",Dh,[(C1(!0),F1(T1,null,q6(Q1(Fh),r=>(C1(),S3(Z5,{icon:r.icon,title:r.title},null,8,["icon","title"]))),256))]),qh,W("div",Oh,[(C1(!0),F1(T1,null,q6(Q1(Bh),r=>(C1(),S3(Z5,{icon:r.icon,title:r.title},null,8,["icon","title"]))),256))])]))}}),Uh=t2($h,[["__scopeId","data-v-7e7bfabc"]]),Ih={},q9=c=>(B3("data-v-d274033a"),c=c(),_3(),c),Gh={class:"page section-page"},Wh={class:"content-itens"},jh=q9(()=>W("h2",{class:"title"},"Contato:",-1)),Zh={class:"itens"},Kh={href:"https://www.linkedin.com/in/jpsilvabarr/",target:"_blank"},Yh={href:"https://github.com/Joao-Paulo-Silva",target:"_blank"},Xh={href:"https://www.instagram.com/jpsilva689/",target:"_blank"},Qh={class:"content-itens"},Jh=q9(()=>W("h2",{class:"title"},"Mais:",-1)),cH={class:"itens"},aH={href:"https://ais-package.github.io/pt-br/",target:"_blank"},eH={href:"https://pypi.org/user/jpsilvabarr/",target:"_blank"};function rH(c,a){const e=E4("font-awesome-icon");return C1(),F1("section",Gh,[W("div",Wh,[jh,W("div",Zh,[W("a",Kh,[J(e,{icon:["fab","linkedin"]}),Z2(" Linkedin")]),W("a",Yh,[J(e,{icon:["fab","github"]}),Z2(" Github")]),W("a",Xh,[J(e,{icon:["fab","instagram"]}),Z2(" Instagram")])])]),W("div",Qh,[Jh,W("div",cH,[W("a",aH,[J(e,{icon:["fas","cubes"]}),Z2(" AISP - Python")]),W("a",eH,[J(e,{icon:["fas","cube"]}),Z2(" Pypi")])])])])}const sH=t2(Ih,[["render",rH],["__scopeId","data-v-d274033a"]]),iH=A2({__name:"PageView",setup(c){return(a,e)=>(C1(),F1("main",null,[J(wh),J(Wv),J(ch),J(Ch),J(Uh),J(sH)]))}}),nH=t2(iH,[["__scopeId","data-v-f2d4ae57"]]),lH=yv({history:Gz("/"),routes:[{path:"/",name:"home",component:nH}],scrollBehavior(c){return c.hash?{el:c.hash,behavior:"smooth"}:{top:0,behavior:"smooth"}}});function K5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function P(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?K5(Object(e),!0).forEach(function(r){p1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):K5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function b4(c){"@babel/helpers - typeof";return b4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b4(c)}function fH(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function Y5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function oH(c,a,e){return a&&Y5(c.prototype,a),e&&Y5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function p1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function F8(c,a){return mH(c)||vH(c,a)||O9(c,a)||HH()}function D3(c){return tH(c)||zH(c)||O9(c)||hH()}function tH(c){if(Array.isArray(c))return Q6(c)}function mH(c){if(Array.isArray(c))return c}function zH(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function vH(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,l;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(f){i=!0,l=f}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw l}}return r}}function O9(c,a){if(c){if(typeof c=="string")return Q6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Q6(c,a)}}function Q6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function hH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var X5=function(){},B8={},$9={},U9=null,I9={mark:X5,measure:X5};try{typeof window<"u"&&(B8=window),typeof document<"u"&&($9=document),typeof MutationObserver<"u"&&(U9=MutationObserver),typeof performance<"u"&&(I9=performance)}catch{}var uH=B8.navigator||{},Q5=uH.userAgent,J5=Q5===void 0?"":Q5,S2=B8,f1=$9,c7=U9,a4=I9;S2.document;var m2=!!f1.documentElement&&!!f1.head&&typeof f1.addEventListener=="function"&&typeof f1.createElement=="function",G9=~J5.indexOf("MSIE")||~J5.indexOf("Trident/"),e4,r4,s4,i4,n4,n2="___FONT_AWESOME___",J6=16,W9="fa",j9="svg-inline--fa",O2="data-fa-i2svg",c8="data-fa-pseudo-element",VH="data-fa-pseudo-element-pending",_8="data-prefix",R8="data-icon",a7="fontawesome-i2svg",pH="async",MH=["HTML","HEAD","STYLE","SCRIPT"],Z9=function(){try{return!0}catch{return!1}}(),l1="classic",v1="sharp",E8=[l1,v1];function q3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[l1]}})}var A3=q3((e4={},p1(e4,l1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),p1(e4,v1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),e4)),k3=q3((r4={},p1(r4,l1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),p1(r4,v1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),r4)),P3=q3((s4={},p1(s4,l1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),p1(s4,v1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),s4)),CH=q3((i4={},p1(i4,l1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),p1(i4,v1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),i4)),dH=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,K9="fa-layers-text",LH=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,gH=q3((n4={},p1(n4,l1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),p1(n4,v1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),n4)),Y9=[1,2,3,4,5,6,7,8,9,10],xH=Y9.concat([11,12,13,14,15,16,17,18,19,20]),bH=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],R2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T3=new Set;Object.keys(k3[l1]).map(T3.add.bind(T3));Object.keys(k3[v1]).map(T3.add.bind(T3));var NH=[].concat(E8,D3(T3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",R2.GROUP,R2.SWAP_OPACITY,R2.PRIMARY,R2.SECONDARY]).concat(Y9.map(function(c){return"".concat(c,"x")})).concat(xH.map(function(c){return"w-".concat(c)})),d3=S2.FontAwesomeConfig||{};function SH(c){var a=f1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function yH(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(f1&&typeof f1.querySelector=="function"){var wH=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wH.forEach(function(c){var a=F8(c,2),e=a[0],r=a[1],s=yH(SH(e));s!=null&&(d3[r]=s)})}var X9={styleDefault:"solid",familyDefault:"classic",cssPrefix:W9,replacementClass:j9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};d3.familyPrefix&&(d3.cssPrefix=d3.familyPrefix);var l3=P(P({},X9),d3);l3.autoReplaceSvg||(l3.observeMutations=!1);var B={};Object.keys(X9).forEach(function(c){Object.defineProperty(B,c,{enumerable:!0,set:function(e){l3[c]=e,L3.forEach(function(r){return r(B)})},get:function(){return l3[c]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(a){l3.cssPrefix=a,L3.forEach(function(e){return e(B)})},get:function(){return l3.cssPrefix}});S2.FontAwesomeConfig=B;var L3=[];function AH(c){return L3.push(c),function(){L3.splice(L3.indexOf(c),1)}}var V2=J6,X1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kH(c){if(!(!c||!m2)){var a=f1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=f1.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return f1.head.insertBefore(a,r),c}}var PH="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function F3(){for(var c=12,a="";c-- >0;)a+=PH[Math.random()*62|0];return a}function t3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function D8(c){return c.classList?t3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Q9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function TH(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Q9(c[e]),'" ')},"").trim()}function W4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function q8(c){return c.size!==X1.size||c.x!==X1.x||c.y!==X1.y||c.rotate!==X1.rotate||c.flipX||c.flipY}function FH(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:f,path:t}}function BH(c){var a=c.transform,e=c.width,r=e===void 0?J6:e,s=c.height,i=s===void 0?J6:s,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&G9?f+="translate(".concat(a.x/V2-r/2,"em, ").concat(a.y/V2-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/V2,"em), calc(-50% + ").concat(a.y/V2,"em)) "):f+="translate(".concat(a.x/V2,"em, ").concat(a.y/V2,"em) "),f+="scale(".concat(a.size/V2*(a.flipX?-1:1),", ").concat(a.size/V2*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var _H=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function J9(){var c=W9,a=j9,e=B.cssPrefix,r=B.replacementClass,s=_H;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return s}var e7=!1;function S6(){B.autoAddCss&&!e7&&(kH(J9()),e7=!0)}var RH={mixout:function(){return{dom:{css:J9,insertCss:S6}}},hooks:function(){return{beforeDOMElementCreation:function(){S6()},beforeI2svg:function(){S6()}}}},l2=S2||{};l2[n2]||(l2[n2]={});l2[n2].styles||(l2[n2].styles={});l2[n2].hooks||(l2[n2].hooks={});l2[n2].shims||(l2[n2].shims=[]);var U1=l2[n2],cc=[],EH=function c(){f1.removeEventListener("DOMContentLoaded",c),N4=1,cc.map(function(a){return a()})},N4=!1;m2&&(N4=(f1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(f1.readyState),N4||f1.addEventListener("DOMContentLoaded",EH));function DH(c){m2&&(N4?setTimeout(c,0):cc.push(c))}function O3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?Q9(c):"<".concat(a," ").concat(TH(r),">").concat(i.map(O3).join(""),"</").concat(a,">")}function r7(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var qH=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},y6=function(a,e,r,s){var i=Object.keys(a),n=i.length,l=s!==void 0?qH(e,s):e,f,t,o;for(r===void 0?(f=1,o=a[i[0]]):(f=0,o=r);f<n;f++)t=i[f],o=l(o,a[t],t,a);return o};function OH(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function a8(c){var a=OH(c);return a.length===1?a[0].toString(16):null}function $H(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function s7(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function e8(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=s7(a);typeof U1.hooks.addPack=="function"&&!s?U1.hooks.addPack(c,s7(a)):U1.styles[c]=P(P({},U1.styles[c]||{}),i),c==="fas"&&e8("fa",a)}var l4,f4,o4,X2=U1.styles,UH=U1.shims,IH=(l4={},p1(l4,l1,Object.values(P3[l1])),p1(l4,v1,Object.values(P3[v1])),l4),O8=null,ac={},ec={},rc={},sc={},ic={},GH=(f4={},p1(f4,l1,Object.keys(A3[l1])),p1(f4,v1,Object.keys(A3[v1])),f4);function WH(c){return~NH.indexOf(c)}function jH(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!WH(s)?s:null}var nc=function(){var a=function(i){return y6(X2,function(n,l,f){return n[f]=y6(l,i,{}),n},{})};ac=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){s[f.toString(16)]=n})}return s}),ec=a(function(s,i,n){if(s[n]=n,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){s[f]=n})}return s}),ic=a(function(s,i,n){var l=i[2];return s[n]=n,l.forEach(function(f){s[f]=n}),s});var e="far"in X2||B.autoFetchSvg,r=y6(UH,function(s,i){var n=i[0],l=i[1],f=i[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(s.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:l,iconName:f}),s},{names:{},unicodes:{}});rc=r.names,sc=r.unicodes,O8=j4(B.styleDefault,{family:B.familyDefault})};AH(function(c){O8=j4(c.styleDefault,{family:B.familyDefault})});nc();function $8(c,a){return(ac[c]||{})[a]}function ZH(c,a){return(ec[c]||{})[a]}function E2(c,a){return(ic[c]||{})[a]}function lc(c){return rc[c]||{prefix:null,iconName:null}}function KH(c){var a=sc[c],e=$8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function y2(){return O8}var U8=function(){return{prefix:null,iconName:null,rest:[]}};function j4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?l1:e,s=A3[r][c],i=k3[r][c]||k3[r][s],n=c in U1.styles?c:null;return i||n||null}var i7=(o4={},p1(o4,l1,Object.keys(P3[l1])),p1(o4,v1,Object.keys(P3[v1])),o4);function Z4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},p1(a,l1,"".concat(B.cssPrefix,"-").concat(l1)),p1(a,v1,"".concat(B.cssPrefix,"-").concat(v1)),a),n=null,l=l1;(c.includes(i[l1])||c.some(function(t){return i7[l1].includes(t)}))&&(l=l1),(c.includes(i[v1])||c.some(function(t){return i7[v1].includes(t)}))&&(l=v1);var f=c.reduce(function(t,o){var z=jH(B.cssPrefix,o);if(X2[o]?(o=IH[l].includes(o)?CH[l][o]:o,n=o,t.prefix=o):GH[l].indexOf(o)>-1?(n=o,t.prefix=j4(o,{family:l})):z?t.iconName=z:o!==B.replacementClass&&o!==i[l1]&&o!==i[v1]&&t.rest.push(o),!s&&t.prefix&&t.iconName){var h=n==="fa"?lc(t.iconName):{},u=E2(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||u||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!X2.far&&X2.fas&&!B.autoFetchSvg&&(t.prefix="fas")}return t},U8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===v1&&(X2.fass||B.autoFetchSvg)&&(f.prefix="fass",f.iconName=E2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=y2()||"fas"),f}var YH=function(){function c(){fH(this,c),this.definitions={}}return oH(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=P(P({},e.definitions[l]||{}),n[l]),e8(l,n[l]);var f=P3[l1][l];f&&e8(f,n[l]),nc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],l=n.prefix,f=n.iconName,t=n.icon,o=t[2];e[l]||(e[l]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[l][z]=t)}),e[l][f]=t}),e}}]),c}(),n7=[],Q2={},r3={},XH=Object.keys(r3);function QH(c,a){var e=a.mixoutsTo;return n7=c,Q2={},Object.keys(r3).forEach(function(r){XH.indexOf(r)===-1&&delete r3[r]}),n7.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),b4(s[n])==="object"&&Object.keys(s[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=s[n][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){Q2[n]||(Q2[n]=[]),Q2[n].push(i[n])})}r.provides&&r.provides(r3)}),e}function r8(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=Q2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function $2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=Q2[c]||[];s.forEach(function(i){i.apply(null,e)})}function f2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return r3[c]?r3[c].apply(null,a):void 0}function s8(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||y2();if(a)return a=E2(e,a)||a,r7(fc.definitions,e,a)||r7(U1.styles,e,a)}var fc=new YH,JH=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,$2("noAuto")},cu={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return m2?($2("beforeI2svg",a),f2("pseudoElements2svg",a),f2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,DH(function(){eu({autoReplaceSvgRoot:e}),$2("watch",a)})}},au={icon:function(a){if(a===null)return null;if(b4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:E2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=j4(a[0]);return{prefix:r,iconName:E2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(B.cssPrefix,"-"))>-1||a.match(dH))){var s=Z4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||y2(),iconName:E2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=y2();return{prefix:i,iconName:E2(i,a)||a}}}},B1={noAuto:JH,config:B,dom:cu,parse:au,library:fc,findIconDefinition:s8,toHtml:O3},eu=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?f1:e;(Object.keys(U1.styles).length>0||B.autoFetchSvg)&&m2&&B.autoReplaceSvg&&B1.dom.i2svg({node:r})};function K4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return O3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(m2){var r=f1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function ru(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(q8(n)&&e.found&&!r.found){var l=e.width,f=e.height,t={x:l/f/2,y:.5};s.style=W4(P(P({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function su(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(B.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},s),{},{id:n}),children:r}]}]}function I8(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,l=c.symbol,f=c.title,t=c.maskId,o=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,g=r.found?r:e,N=g.width,k=g.height,V=s==="fak",d=[B.replacementClass,i?"".concat(B.cssPrefix,"-").concat(i):""].filter(function(K){return z.classes.indexOf(K)===-1}).filter(function(K){return K!==""||!!K}).concat(z.classes).join(" "),y={children:[],attributes:P(P({},z.attributes),{},{"data-prefix":s,"data-icon":i,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(k)})},_=V&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/k*16*.0625,"em")}:{};u&&(y.attributes[O2]=""),f&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(o||F3())},children:[f]}),delete y.attributes.title);var $=P(P({},y),{},{prefix:s,iconName:i,main:e,mask:r,maskId:t,transform:n,symbol:l,styles:P(P({},_),z.styles)}),E=r.found&&e.found?f2("generateAbstractMask",$)||{children:[],attributes:{}}:f2("generateAbstractIcon",$)||{children:[],attributes:{}},Y=E.children,U=E.attributes;return $.children=Y,$.attributes=U,l?su($):ru($)}function l7(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,t=P(P(P({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(t[O2]="");var o=P({},n.styles);q8(s)&&(o.transform=BH({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=W4(o);z.length>0&&(t.style=z);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function iu(c){var a=c.content,e=c.title,r=c.extra,s=P(P(P({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=W4(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var w6=U1.styles;function i8(c){var a=c[0],e=c[1],r=c.slice(4),s=F8(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(R2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(R2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(R2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var nu={found:!1,width:512,height:512};function lu(c,a){!Z9&&!B.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function n8(c,a){var e=a;return a==="fa"&&B.styleDefault!==null&&(a=y2()),new Promise(function(r,s){if(f2("missingIconAbstract"),e==="fa"){var i=lc(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&w6[a]&&w6[a][c]){var n=w6[a][c];return r(i8(n))}lu(c,a),r(P(P({},nu),{},{icon:B.showMissingIcons&&c?f2("missingIconAbstract")||{}:{}}))})}var f7=function(){},l8=B.measurePerformance&&a4&&a4.mark&&a4.measure?a4:{mark:f7,measure:f7},H3='FA "6.5.1"',fu=function(a){return l8.mark("".concat(H3," ").concat(a," begins")),function(){return oc(a)}},oc=function(a){l8.mark("".concat(H3," ").concat(a," ends")),l8.measure("".concat(H3," ").concat(a),"".concat(H3," ").concat(a," begins"),"".concat(H3," ").concat(a," ends"))},G8={begin:fu,end:oc},u4=function(){};function o7(c){var a=c.getAttribute?c.getAttribute(O2):null;return typeof a=="string"}function ou(c){var a=c.getAttribute?c.getAttribute(_8):null,e=c.getAttribute?c.getAttribute(R8):null;return a&&e}function tu(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(B.replacementClass)}function mu(){if(B.autoReplaceSvg===!0)return V4.replace;var c=V4[B.autoReplaceSvg];return c||V4.replace}function zu(c){return f1.createElementNS("http://www.w3.org/2000/svg",c)}function vu(c){return f1.createElement(c)}function tc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?zu:vu:e;if(typeof c=="string")return f1.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(tc(n,{ceFn:r}))}),s}function hu(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var V4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(tc(s),e)}),e.getAttribute(O2)===null&&B.keepOriginalSource){var r=f1.createComment(hu(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~D8(e).indexOf(B.replacementClass))return V4.replace(a);var s=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,f){return f===B.replacementClass||f.match(s)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(l){return O3(l)}).join(`
`);e.setAttribute(O2,""),e.innerHTML=n}};function t7(c){c()}function mc(c,a){var e=typeof a=="function"?a:u4;if(c.length===0)e();else{var r=t7;B.mutateApproach===pH&&(r=S2.requestAnimationFrame||t7),r(function(){var s=mu(),i=G8.begin("mutate");c.map(s),i(),e()})}}var W8=!1;function zc(){W8=!0}function f8(){W8=!1}var S4=null;function m7(c){if(c7&&B.observeMutations){var a=c.treeCallback,e=a===void 0?u4:a,r=c.nodeCallback,s=r===void 0?u4:r,i=c.pseudoElementsCallback,n=i===void 0?u4:i,l=c.observeMutationsRoot,f=l===void 0?f1:l;S4=new c7(function(t){if(!W8){var o=y2();t3(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!o7(z.addedNodes[0])&&(B.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&B.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&o7(z.target)&&~bH.indexOf(z.attributeName))if(z.attributeName==="class"&&ou(z.target)){var h=Z4(D8(z.target)),u=h.prefix,g=h.iconName;z.target.setAttribute(_8,u||o),g&&z.target.setAttribute(R8,g)}else tu(z.target)&&s(z.target)})}}),m2&&S4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hu(){S4&&S4.disconnect()}function uu(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],l=i.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function Vu(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=Z4(D8(c));return s.prefix||(s.prefix=y2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=ZH(s.prefix,c.innerText)||$8(s.prefix,a8(c.innerText))),!s.iconName&&B.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function pu(c){var a=t3(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return B.autoA11y&&(e?a["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||F3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function z7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Vu(c),r=e.iconName,s=e.prefix,i=e.rest,n=pu(c),l=r8("parseNodeAttributes",{},c),f=a.styleParser?uu(c):[];return P({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:X1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},l)}var Cu=U1.styles;function vc(c){var a=B.autoReplaceSvg==="nest"?z7(c,{styleParser:!1}):z7(c);return~a.extra.classes.indexOf(K9)?f2("generateLayersText",c,a):f2("generateSvgReplacementMutation",c,a)}var w2=new Set;E8.map(function(c){w2.add("fa-".concat(c))});Object.keys(A3[l1]).map(w2.add.bind(w2));Object.keys(A3[v1]).map(w2.add.bind(w2));w2=D3(w2);function v7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!m2)return Promise.resolve();var e=f1.documentElement.classList,r=function(z){return e.add("".concat(a7,"-").concat(z))},s=function(z){return e.remove("".concat(a7,"-").concat(z))},i=B.autoFetchSvg?w2:E8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(Cu));i.includes("fa")||i.push("fa");var n=[".".concat(K9,":not([").concat(O2,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(O2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=t3(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var f=G8.begin("onTree"),t=l.reduce(function(o,z){try{var h=vc(z);h&&o.push(h)}catch(u){Z9||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(h){mc(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),f(),o()})}).catch(function(h){f(),z(h)})})}function du(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vc(c).then(function(e){e&&mc([e],a)})}function Lu(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:s8(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:s8(s||{})),c(r,P(P({},e),{},{mask:s}))}}var gu=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?X1:r,i=e.symbol,n=i===void 0?!1:i,l=e.mask,f=l===void 0?null:l,t=e.maskId,o=t===void 0?null:t,z=e.title,h=z===void 0?null:z,u=e.titleId,g=u===void 0?null:u,N=e.classes,k=N===void 0?[]:N,V=e.attributes,d=V===void 0?{}:V,y=e.styles,_=y===void 0?{}:y;if(a){var $=a.prefix,E=a.iconName,Y=a.icon;return K4(P({type:"icon"},a),function(){return $2("beforeDOMElementCreation",{iconDefinition:a,params:e}),B.autoA11y&&(h?d["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(g||F3()):(d["aria-hidden"]="true",d.focusable="false")),I8({icons:{main:i8(Y),mask:f?i8(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:E,transform:P(P({},X1),s),symbol:n,title:h,maskId:o,titleId:g,extra:{attributes:d,styles:_,classes:k}})})}},xu={mixout:function(){return{icon:Lu(gu)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=v7,e.nodeCallback=du,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?f1:r,i=e.callback,n=i===void 0?function(){}:i;return v7(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,l=r.prefix,f=r.transform,t=r.symbol,o=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,g){Promise.all([n8(s,l),o.iconName?n8(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var k=F8(N,2),V=k[0],d=k[1];u([e,I8({icons:{main:V,mask:d},prefix:l,iconName:s,transform:f,symbol:t,maskId:z,title:i,titleId:n,extra:h,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,l=e.styles,f=W4(l);f.length>0&&(s.style=f);var t;return q8(n)&&(t=f2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(t||i.icon),{children:r,attributes:s}}}},bu={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return K4({type:"layer"},function(){$2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(D3(i)).join(" ")},children:n}]})}}}},Nu={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,l=n===void 0?[]:n,f=r.attributes,t=f===void 0?{}:f,o=r.styles,z=o===void 0?{}:o;return K4({type:"counter",content:e},function(){return $2("beforeDOMElementCreation",{content:e,params:r}),iu({content:e.toString(),title:i,extra:{attributes:t,styles:z,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(D3(l))}})})}}}},Su={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?X1:s,n=r.title,l=n===void 0?null:n,f=r.classes,t=f===void 0?[]:f,o=r.attributes,z=o===void 0?{}:o,h=r.styles,u=h===void 0?{}:h;return K4({type:"text",content:e},function(){return $2("beforeDOMElementCreation",{content:e,params:r}),l7({content:e,transform:P(P({},X1),i),title:l,extra:{attributes:z,styles:u,classes:["".concat(B.cssPrefix,"-layers-text")].concat(D3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,l=null,f=null;if(G9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();l=o.width/t,f=o.height/t}return B.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,l7({content:e.innerHTML,width:l,height:f,transform:i,title:s,extra:n,watchable:!0})])}}},yu=new RegExp('"',"ug"),h7=[1105920,1112319];function wu(c){var a=c.replace(yu,""),e=$H(a,0),r=e>=h7[0]&&e<=h7[1],s=a.length===2?a[0]===a[1]:!1;return{value:a8(s?a[0]:a),isSecondary:r||s}}function H7(c,a){var e="".concat(VH).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=t3(c.children),n=i.filter(function(Y){return Y.getAttribute(c8)===a})[0],l=S2.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(LH),t=l.getPropertyValue("font-weight"),o=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&o!=="none"&&o!==""){var z=l.getPropertyValue("content"),h=~["Sharp"].indexOf(f[2])?v1:l1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?k3[h][f[2].toLowerCase()]:gH[h][t],g=wu(z),N=g.value,k=g.isSecondary,V=f[0].startsWith("FontAwesome"),d=$8(u,N),y=d;if(V){var _=KH(N);_.iconName&&_.prefix&&(d=_.iconName,u=_.prefix)}if(d&&!k&&(!n||n.getAttribute(_8)!==u||n.getAttribute(R8)!==y)){c.setAttribute(e,y),n&&c.removeChild(n);var $=Mu(),E=$.extra;E.attributes[c8]=a,n8(d,u).then(function(Y){var U=I8(P(P({},$),{},{icons:{main:Y,mask:U8()},prefix:u,iconName:y,extra:E,watchable:!0})),K=f1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(K,c.firstChild):c.appendChild(K),K.outerHTML=U.map(function(c1){return O3(c1)}).join(`