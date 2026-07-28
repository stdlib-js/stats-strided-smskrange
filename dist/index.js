"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var x=c(function(G,y){
var E=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/math-base-assert-is-nanf/dist');function F(r,e,i,q,u,o,m){var f,n,v,s,t,a;if(r<=0)return NaN;for(v=q,s=m,a=0;a<r&&u[s]!==0;a++)v+=i,s+=o;if(a===r)return NaN;if(n=e[v],p(n))return n;for(f=n,a+=1,a;a<r;a++)if(v+=i,s+=o,!u[s]){if(t=e[v],p(t))return t;t<n?n=t:t>f&&(f=t)}return E(f-n)}y.exports=F
});var d=c(function(H,j){
var g=require('@stdlib/strided-base-stride2offset/dist'),O=x();function T(r,e,i,q,u){var o=g(r,i),m=g(r,u);return O(r,e,i,o,q,u,m)}j.exports=T
});var _=c(function(I,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=d(),w=x();h(k,"ndarray",w);R.exports=k
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=_(),l,b=A(z(__dirname,"./native.js"));B(b)?l=C:l=b;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
