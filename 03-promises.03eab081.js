!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector("input[name='delay']"),u=document.querySelector("input[name='step']"),a=document.querySelector("input[name='amount']");function l(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector("button").addEventListener("click",(function(e){e.preventDefault();var n=Number(r.value),t=Number(u.value),o=Number(a.value);if(t<0||n<0||o<=0)i.Notify.failure("Invalid input values. All values must be positive");else for(var c=1;c<=o;c++){l(c,n+(c-1)*t).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.03eab081.js.map