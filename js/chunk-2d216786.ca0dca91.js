(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216786"],{c333:function(e,t,a){"use strict";a.r(t),a.d(t,"CameraWeb",(function(){return o})),a.d(t,"Camera",(function(){return i}));var r=a("1547"),n=a("7531");class o extends r["b"]{async getPhoto(e){return new Promise(async(t,a)=>{if(e.webUseInput||e.source===n["c"].Photos)this.fileInputExperience(e,t);else if(e.source===n["c"].Prompt){let r=document.querySelector("pwa-action-sheet");r||(r=document.createElement("pwa-action-sheet"),document.body.appendChild(r)),r.header=e.promptLabelHeader||"Photo",r.cancelable=!1,r.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],r.addEventListener("onSelection",async r=>{const n=r.detail;0===n?this.fileInputExperience(e,t):this.cameraExperience(e,t,a)})}else this.cameraExperience(e,t,a)})}async cameraExperience(e,t,a){if(customElements.get("pwa-camera-modal")){const o=document.createElement("pwa-camera-modal");document.body.appendChild(o);try{await o.componentOnReady(),o.addEventListener("onPhoto",async n=>{const i=n.detail;null===i?a(new r["a"]("User cancelled photos app")):i instanceof Error?a(i):t(await this._getCameraPhoto(i,e)),o.dismiss(),document.body.removeChild(o)}),o.present()}catch(n){this.fileInputExperience(e,t)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),this.fileInputExperience(e,t)}fileInputExperience(e,t){let a=document.querySelector("#_capacitor-camera-input");const r=()=>{var e;null===(e=a.parentNode)||void 0===e||e.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",n=>{const o=a.files[0];let i="jpeg";if("image/png"===o.type?i="png":"image/gif"===o.type&&(i="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const a=new FileReader;a.addEventListener("load",()=>{if("dataUrl"===e.resultType)t({dataUrl:a.result,format:i});else if("base64"===e.resultType){const e=a.result.split(",")[1];t({base64String:e,format:i})}r()}),a.readAsDataURL(o)}else t({webPath:URL.createObjectURL(o),format:i}),r()})),a.accept="image/*",a.capture=!0,e.source===n["c"].Photos||e.source===n["c"].Prompt?a.removeAttribute("capture"):e.direction===n["a"].Front?a.capture="user":e.direction===n["a"].Rear&&(a.capture="environment"),a.click()}_getCameraPhoto(e,t){return new Promise((a,r)=>{const n=new FileReader,o=e.type.split("/")[1];"uri"===t.resultType?a({webPath:URL.createObjectURL(e),format:o}):(n.readAsDataURL(e),n.onloadend=()=>{const e=n.result;"dataUrl"===t.resultType?a({dataUrl:e,format:o}):a({base64String:e.split(",")[1],format:o})},n.onerror=e=>{r(e)})})}async checkPermissions(){if("undefined"===typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{const e=await window.navigator.permissions.query({name:"camera"});return{camera:e.state,photos:"granted"}}catch(e){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}}const i=new o}}]);
//# sourceMappingURL=chunk-2d216786.ca0dca91.js.map