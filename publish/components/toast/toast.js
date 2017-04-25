"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function ToastFactory(){var t=Array.from(arguments),e=null,o=null,s="This is Message!",n=3e3,i="bottom",r=null,u=!1,l="Close",a=!1,c=noop,_=window.VM&&window.VM.config&&VM.config.get("mode","ios")||"ios";return o=document.getElementById(DOM_INSERT_POSITION)||document.getElementById(DOM_INSERT_POSITION_FALLBACK)||document.body,e=o.appendChild(document.createElement("div")),2===t.length&&(s=(0,_util.isPresent)(t[0])&&t[0].toString().trim()||s,n=(0,_util.isNumber)(t[1])&&parseInt(t[1])||n),1===t.length&&(0,_util.isString)(t[0])&&(s=(0,_util.isPresent)(t[0])&&t[0].toString().trim()||s),1===t.length&&(0,_util.isObject)(t[0])&&(s=(0,_util.isPresent)(t[0].message)&&t[0].message.toString().trim()||s,n=(0,_util.isNumber)(t[0].duration)&&parseInt(t[0].duration)||n,i=(0,_util.isPresent)(t[0].position)&&POSITIONS.indexOf(t[0].position)>-1?t[0].position:i,r=(0,_util.isPresent)(t[0].cssClass)?t[0].cssClass.trim():r,t[0].showCloseButton&&(n=null),u=!!t[0].showCloseButton,l=(0,_util.isPresent)(t[0].closeButtonText)?t[0].closeButtonText.trim():l,a=!!t[0].dismissOnPageChange,c=(0,_util.isPresent)(t[0].onDismiss)&&(0,_util.isFunction)(t[0].onDismiss)?t[0].onDismiss:c,_=(0,_util.isPresent)(t[0].mode)?t[0].mode.trim():_),new Toast({el:e,message:s,duration:n,position:i,cssClass:r,showCloseButton:u,closeButtonText:l,dismissOnPageChange:a,onDismiss:c,mode:_})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var t=ToastFactory.apply(void 0,arguments);return t.present(),t};var _vue=require("vue"),_vue2=_interopRequireDefault(_vue),_util=require("../../util/util"),_toast=require("./toast.vue"),_toast2=_interopRequireDefault(_toast),ToastConstructor=_vue2.default.extend(_toast2.default),POSITIONS=["top","middle","bottom"],noop=function(){},DOM_INSERT_POSITION="toastPortal",DOM_INSERT_POSITION_FALLBACK="app",Toast=function(t){function e(t){_classCallCheck(this,e);var o=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));if((0,_util.isObject)(t))for(var s in t)o[s]=t[s];return o}return _inherits(e,t),e}(ToastConstructor);