(function(){"use strict";var t={49:function(t,e,r){var o=r(963),i=r(252);const s={id:"app"},n={class:"container_row mt-5"};function a(t,e,r,o,a,u){const l=(0,i.up)("Calculator");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",n,[(0,i.Wm)(l)])])}var u=r(577);const l=t=>((0,i.dD)("data-v-0c24b9aa"),t=t(),(0,i.Cn)(),t),c={class:"col-12"},p={class:"row"},d={class:"position-relative pt-5"},h={class:"position-absolute top-200 start-50 translate-middle mt-5"},v={class:"table table-bordered mt-5 container"},g={class:"table-group-divider mt-5"},m={class:"output"},w={class:"number-container",colspan:"4"},_=l((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[(0,i._)("path",{fill:"currentColor",d:"M12 7.998H8v4H6v-4H2v-2h4v-4h2v4h4zm10 10h-8v-2h8zM18.5 4L4 18.5L5.5 20L20 5.5z"})],-1))),f=[_],b=l((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[(0,i._)("path",{fill:"currentColor",d:"M7.5 4C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11S11 9.43 11 7.5S9.43 4 7.5 4zm0 5C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6S9 6.67 9 7.5S8.33 9 7.5 9zm9 4c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5.41 20L4 18.59L18.59 4L20 5.41L5.41 20z"})],-1))),C=[b],k=l((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[(0,i._)("path",{fill:"currentColor",d:"M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm9 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"})],-1))),O=[k],F=l((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20"},[(0,i._)("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414Z",clipRule:"evenodd"})],-1))),x=[F],N=l((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024"},[(0,i._)("path",{fill:"currentColor",d:"M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"})],-1))),L=[N],M=l((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024"},[(0,i._)("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"})],-1))),P=[M];function y(t,e,r,o,s,n){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",p,[(0,i._)("div",d,[(0,i._)("div",h,[(0,i._)("table",v,[(0,i._)("tbody",g,[(0,i._)("tr",m,[(0,i._)("td",w,(0,u.zw)(s.output),1)]),(0,i._)("tr",null,[(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[0]||(e[0]=(...t)=>n.clearField&&n.clearField(...t))},"Del"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[1]||(e[1]=(...t)=>n.setNegativeOrPositive&&n.setNegativeOrPositive(...t))},f),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[2]||(e[2]=(...t)=>n.calculatePercentage&&n.calculatePercentage(...t))},C),(0,i._)("td",{class:"p-3 cursor-pointer",onClick:e[3]||(e[3]=t=>n.processOutput("divide"))},O)]),(0,i._)("tr",null,[(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[4]||(e[4]=t=>n.getNumber("7"))},"7"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[5]||(e[5]=t=>n.getNumber("8"))},"8"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[6]||(e[6]=t=>n.getNumber("9"))},"9"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[7]||(e[7]=t=>n.processOutput("multiply"))},x)]),(0,i._)("tr",null,[(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[8]||(e[8]=t=>n.getNumber("4"))},"4"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[9]||(e[9]=t=>n.getNumber("5"))},"5"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[10]||(e[10]=t=>n.getNumber("6"))},"6"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[11]||(e[11]=t=>n.processOutput("subtract"))},L)]),(0,i._)("tr",null,[(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[12]||(e[12]=t=>n.getNumber("1"))},"1"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[13]||(e[13]=t=>n.getNumber("2"))},"2"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[14]||(e[14]=t=>n.getNumber("3"))},"3"),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[15]||(e[15]=t=>n.processOutput("add"))},P)]),(0,i._)("tr",null,[(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[16]||(e[16]=t=>n.getDot())},"."),(0,i._)("td",{class:"p-4 cursor-pointer",colspan:"2",onClick:e[17]||(e[17]=t=>n.getNumber("0"))}," 0 "),(0,i._)("td",{class:"p-4 cursor-pointer",onClick:e[18]||(e[18]=t=>n.updateOutput())}," = ")])])])])])])])}var z={name:["EpMinus","EpPlus","HeroiconsSolidX","FaSolidDivide","FaSolidPercentage","IcOutlinePercent","IcBaselinePlusMinusAlt","GgMathDivide"],data(){return{output:"",previousValue:null,operationFired:!1}},methods:{clearField(){this.output=""},setNegativeOrPositive(){this.output="-"===this.output[0]?this.output.slice(1):`-${this.output}`},calculatePercentage(){this.output=parseFloat(this.output)/100},getNumber(t){this.operationFired&&(this.output="",this.operationFired=!1),this.output=`${this.output}${t}`},getDot(){-1===this.output.indexOf(".")&&(this.output=this.output+".")},processOutput(t){"add"==t?this.operation=(t,e)=>parseFloat(t)+parseFloat(e):"subtract"==t?this.operation=(t,e)=>parseFloat(t)-parseFloat(e):"divide"==t?this.operation=(t,e)=>parseFloat(t)/parseFloat(e):"multiply"==t&&(this.operation=(t,e)=>parseFloat(t)*parseFloat(e)),this.previousValue=this.output,this.operationFired=!0},updateOutput(){this.output=`${this.operation(this.previousValue,this.output)}`,this.previousValue=null}}},S=r(744);const D=(0,S.Z)(z,[["render",y],["__scopeId","data-v-0c24b9aa"]]);var H=D,B={name:"App",components:{Calculator:H}};const j=(0,S.Z)(B,[["render",a],["__scopeId","data-v-5351b6cd"]]);var V=j;(0,o.ri)(V).mount("#app")}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,o,i,s){if(!o){var n=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],s=t[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&s||n>=s)&&Object.keys(r.O).every((function(t){return r.O[t](o[u])}))?o.splice(u--,1):(a=!1,s<n&&(n=s));if(a){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,i,s]}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,s,n=o[0],a=o[1],u=o[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(u)var c=u(r)}for(e&&e(o);l<n.length;l++)s=n[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(c)},o=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(49)}));o=r.O(o)})();
//# sourceMappingURL=app.f68c6098.js.map