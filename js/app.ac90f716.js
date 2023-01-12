(function(){"use strict";var __webpack_modules__={9883:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7658),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3396),vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7139),vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4870);const _withScopeId=_=>((0,vue__WEBPACK_IMPORTED_MODULE_1__.dD)("data-v-814fd062"),_=_(),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Cn)(),_),_hoisted_1=_withScopeId((()=>(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("h1",null,"Basic Calculator",-1))),_hoisted_2={class:"over800px"},_hoisted_3={class:"wrapper colorBG-black"},_hoisted_4={class:"output"},_hoisted_5={class:"outputString colorTXT-white"},_hoisted_6={class:"history"},_hoisted_7={key:0},_hoisted_8={class:"history-list"},_hoisted_9=["src"];__webpack_exports__["Z"]={__name:"HelloWorld",setup(__props){let output=(0,vue__WEBPACK_IMPORTED_MODULE_2__.iH)(""),history=[];function parsing(_){let e=[/[/+\-*.]$/],o=/[/+\-*.]$/,t=e.some((_=>_.test(output.value.toString())));t&&_.srcElement.innerText.match(o)?output.value=output.value.toString().slice(0,-1)+_.srcElement.innerText:output.value+=_.srcElement.innerText,("0"==output.value[0]||output.value[0].match(o))&&(output.value="")}const calculate=()=>{eval(output.value).length<=10?(history.push([output.value,eval(output.value)]),output.value=eval(output.value)):(history.push([output.value,eval(output.value)]),output.value=eval(output.value).toString().slice(0,10))},clearing=()=>output.value="",clearLast=()=>output.value=output.value.toString().slice(0,-1),changeSign=()=>output.value=-output.value;async function copyFunction(_){console.log(_.composedPath());const e=_.composedPath()[1].innerText.indexOf("="),o=_.composedPath()[1].innerText.slice(e+2).trim();try{await navigator.clipboard.writeText(""),await navigator.clipboard.writeText(o.trim())}catch(t){console.error("Failed to copy text: ",t)}}const copiedSrc=__webpack_require__(2033);return(_,e)=>((0,vue__WEBPACK_IMPORTED_MODULE_1__.wg)(),(0,vue__WEBPACK_IMPORTED_MODULE_1__.iD)(vue__WEBPACK_IMPORTED_MODULE_1__.HY,null,[_hoisted_1,(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_2,[(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_3,[(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_4,[(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("span",_hoisted_5,(0,vue__WEBPACK_IMPORTED_MODULE_3__.zw)(""==(0,vue__WEBPACK_IMPORTED_MODULE_2__.SU)(output)?0:(0,vue__WEBPACK_IMPORTED_MODULE_2__.SU)(output)),1)]),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{class:"buttonArea colorBG-black"},[(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:clearing,class:"button actionButtons colorBG-grey colorTXT-black"},"AC"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:changeSign,class:"button actionButtons colorBG-orange colorTXT-white"},"+/-"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button actionButtons colorBG-orange colorTXT-white"},"/"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button actionButtons colorBG-orange colorTXT-white"},"*"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"7"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"8"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"9"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button actionButtons colorBG-orange colorTXT-white"},"-"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"4"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"5"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"6"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button actionButtons colorBG-orange colorTXT-white"},"+"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"1"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"2"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"3"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:calculate,class:"twoSpace equalButton colorBG-orange colorTXT-white"},"="),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"0"),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:parsing,class:"button numericButtons colorBG-darkgrey colorTXT-white"},"."),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{onClick:clearLast,class:"button numericButtons del colorBG-orange colorTXT-white"},"DEL")])]),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_6,[(0,vue__WEBPACK_IMPORTED_MODULE_2__.SU)(history).length>0?((0,vue__WEBPACK_IMPORTED_MODULE_1__.wg)(),(0,vue__WEBPACK_IMPORTED_MODULE_1__.iD)("h3",_hoisted_7,"Previous calculations: ")):(0,vue__WEBPACK_IMPORTED_MODULE_1__.kq)("",!0),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("ul",_hoisted_8,[((0,vue__WEBPACK_IMPORTED_MODULE_1__.wg)(!0),(0,vue__WEBPACK_IMPORTED_MODULE_1__.iD)(vue__WEBPACK_IMPORTED_MODULE_1__.HY,null,(0,vue__WEBPACK_IMPORTED_MODULE_1__.Ko)((0,vue__WEBPACK_IMPORTED_MODULE_2__.SU)(history),(_=>((0,vue__WEBPACK_IMPORTED_MODULE_1__.wg)(),(0,vue__WEBPACK_IMPORTED_MODULE_1__.iD)("li",{class:"history-list__item",key:_},[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Uk)((0,vue__WEBPACK_IMPORTED_MODULE_3__.zw)(_[0])+" = "+(0,vue__WEBPACK_IMPORTED_MODULE_3__.zw)(_[1])+" ",1),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("img",{onClick:copyFunction,class:"copied",src:(0,vue__WEBPACK_IMPORTED_MODULE_2__.SU)(copiedSrc),alt:"Logo"},null,8,_hoisted_9)])))),128))])])])],64))}}},8341:function(_,e,o){var t=o(9242),r=o(3396);function u(_,e,o,t,u,c){const i=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(i)}var c=o(9883),i=o(89);const n=(0,i.Z)(c.Z,[["__scopeId","data-v-814fd062"]]);var a=n,l={name:"App",components:{HelloWorld:a}};const s=(0,i.Z)(l,[["render",u]]);var E=s;(0,t.ri)(E).mount("#app")},2033:function(_,e,o){_.exports=o.p+"img/copied.da8b7524.png"}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var o=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](o,o.exports,__webpack_require__),o.exports}__webpack_require__.m=__webpack_modules__,function(){var _=[];__webpack_require__.O=function(e,o,t,r){if(!o){var u=1/0;for(a=0;a<_.length;a++){o=_[a][0],t=_[a][1],r=_[a][2];for(var c=!0,i=0;i<o.length;i++)(!1&r||u>=r)&&Object.keys(__webpack_require__.O).every((function(_){return __webpack_require__.O[_](o[i])}))?o.splice(i--,1):(c=!1,r<u&&(u=r));if(c){_.splice(a--,1);var n=t();void 0!==n&&(e=n)}}return e}r=r||0;for(var a=_.length;a>0&&_[a-1][2]>r;a--)_[a]=_[a-1];_[a]=[o,t,r]}}(),function(){__webpack_require__.n=function(_){var e=_&&_.__esModule?function(){return _["default"]}:function(){return _};return __webpack_require__.d(e,{a:e}),e}}(),function(){__webpack_require__.d=function(_,e){for(var o in e)__webpack_require__.o(e,o)&&!__webpack_require__.o(_,o)&&Object.defineProperty(_,o,{enumerable:!0,get:e[o]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(_){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)}}(),function(){__webpack_require__.p="/SimpleCalculator-Vue3-/"}(),function(){var _={143:0};__webpack_require__.O.j=function(e){return 0===_[e]};var e=function(e,o){var t,r,u=o[0],c=o[1],i=o[2],n=0;if(u.some((function(e){return 0!==_[e]}))){for(t in c)__webpack_require__.o(c,t)&&(__webpack_require__.m[t]=c[t]);if(i)var a=i(__webpack_require__)}for(e&&e(o);n<u.length;n++)r=u[n],__webpack_require__.o(_,r)&&_[r]&&_[r][0](),_[r]=0;return __webpack_require__.O(a)},o=self["webpackChunkcounterapp"]=self["webpackChunkcounterapp"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(8341)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.ac90f716.js.map