function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,r,a,i,l,u,f=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,a=r;return o=r=void 0,f=t,i=e.apply(a,n)}function w(e){return f=e,l=setTimeout(h,t),c?b(e):i}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-f>=a}function h(){var e=g();if(T(e))return j(e);l=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,a-(e-f)):n}(e))}function j(e){return l=void 0,v&&o?b(e):(o=r=void 0,i)}function O(){var e=g(),n=T(e);if(o=arguments,r=this,u=e,n){if(void 0===l)return w(u);if(s)return l=setTimeout(h,t),b(u)}return void 0===l&&(l=setTimeout(h,t)),i}return t=y(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(y(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=u=r=l=void 0},O.flush=function(){return void 0===l?i:j(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("input",(n=>{const{elements:{email:o,message:r}}=n.currentTarget,a={email:o.value,message:r.value};var i;console.log(a),i=a,e(t)((()=>{localStorage.setItem("feedback-form-state",JSON.stringify(i))}),1e3)})),b.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value&&""===n.value)alert("Należy podać wiadomość i email");else{const t=localStorage.getItem("feedback-form-state");try{const n=JSON.parse(t);console.log(n),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}catch(e){console.log("zapis do consoli:",e.name),console.log(e.message)}}})),window.addEventListener("load",(()=>{const{elements:{email:e,message:t}}=b,n=localStorage.getItem("feedback-form-state");try{const o=JSON.parse(n);if(null===o)return;e.value=o.email,t.value=o.message}catch(e){console.log("zapis do local storage:",e.name),console.log(e.message)}}));
//# sourceMappingURL=03-feedback.c913b1eb.js.map
