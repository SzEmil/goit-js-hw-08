!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,a,i,l,u,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=a;return o=a=void 0,c=t,l=e.apply(r,n)}function w(e){return c=e,u=setTimeout(j,t),s?b(e):l}function O(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function j(){var e=p();if(O(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return d?g(n,i-(e-c)):n}(e))}function S(e){return u=void 0,m&&o?b(e):(o=a=void 0,l)}function T(){var e=p(),n=O(e);if(o=arguments,a=this,f=e,n){if(void 0===u)return w(f);if(d)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),l}return t=h(t)||0,y(n)&&(s=!!n.leading,i=(d="maxWait"in n)?v(h(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=a=u=void 0},T.flush=function(){return void 0===u?l:S(p())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=l.test(t);return r||u.test(t)?f(t.slice(2),r?2:8):i.test(t)?NaN:+t}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:o,maxWait:t,trailing:a})};var w=document.querySelector(".feedback-form");w.addEventListener("input",e(t)((function(){var e=w.elements,t=e.email,n=e.message;formData={email:t.value,message:n.value},console.log(formData),localStorage.setItem("feedback-form-state",JSON.stringify(formData))}),500)),w.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,o=t.message;if(""===n.value&&""===o.value)alert("Należy podać wiadomość i email");else{var r=localStorage.getItem("feedback-form-state");try{var a=JSON.parse(r);console.log("Obiekt danych formularza: ",a),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}catch(e){console.log("zapis do consoli:",e.name),console.log(e.message)}}})),window.addEventListener("load",(function(){var e=w.elements,t=e.email,n=e.message,o=localStorage.getItem("feedback-form-state");try{var r=JSON.parse(o);if(null===r)return;t.value=r.email,n.value=r.message}catch(e){console.log("zapis do local storage:",e.name),console.log(e.message)}}))}();
//# sourceMappingURL=03-feedback.46a2deeb.js.map
