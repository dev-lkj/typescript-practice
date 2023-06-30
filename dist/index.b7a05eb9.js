// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fUTXd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jeorp":[function(require,module,exports) {
// let hello: string = 'Hello world!';
// hello = 'Hello~'
// console.log(hello);
// 타입 종류
/// 문자
// let str: string
// let red: string = "Red";
// let green: string = 'Green';
// let myColor: string = `My color is ${red}.`
// let yourColor: string = 'Your color is' + green
/// 숫자
// let num: number;
// let integer: number = 6;
// let float: number = 3.14;
// let infinity: number = Infinity;
// let nan: number = NaN;
/// 불린
// let isBoolean: boolean;
// let isDone: boolean = false;
/// Null / Undefined
// let nul: null;
// let und: undefined;
// console.log(null);
// console.log(und);
/// 배열
// const fruits: string[] = ['Apple', 'Banana', 'Cherry']
// const numbers: number[] = [1,2,3,4,5,6,7]
// const union: (string|number)[] = ['Apple', 1, 2, 'Banana', 3];
// const array: [] = [1, 2, 3]; // number[] 이렇게 같이 작성해줘야됨
/// 객체
//typeof DATA === 'object'
// const obj: object = {}
// const arr: object = []
// const func: object = function () {}
// // 위 세개는 거의 안씀. 모두가 오브젝트라
// const userA: {
//     name: string,
//     age: number,
//     isValid: boolean
// } = {
//     name : 'abc',
//     age: 85,
//     isValid : true
// }
// const userB: {
//     name: string,
//     age: number,
//     isValid: boolean
// } = {
//     name : 'Neo',
//     age: 22,
//     isValid : false
// }
// // 재활용하기 불편함이 있음. 나중에 interface를 씀
// interface User {
//     name: string,
//     age: number,
//     isValid: boolean
// }
// const userC : User = {
//     name: 'ggg',
//     age: 85,
//     isValid : true,
// }
// const userD : User = {
//     name: 'hhh',
//     age: 22,
//     isValid : false,
// }
/// 함수
// const add: (x:number, y:number) => number = function(x,y) {
//     return x+y;
// }
// 이렇게도 가능
// const add = function (x:number, y:number) :number {
//     return x+y;
// }
// const a: number = add(1,2);
// const hello: () => void = function() {
//     console.log('Hello world~');
// }
// 이렇게도 가능
// const hello = function():void {
//     console.log('Hello world~');
// }
// const h: void = hello();
// function minus(x: number, y:number) :number {
//     return x-y;
// }
/// Any
// 코드를 엄격하게 관리해야 에러가 줄어들기 때문에 any는 자제하는 것이 좋다고 함
// let hello: any = 'Hello world'
// hello = 123
// hello = false
// hello = null
// hello = {}
// hello = []
// hello = function () {}
/// Unknown
// const a: any = 123;
// const u: unknown = 123;
// const any: any = a;
// const boo: boolean = a;
// const num: number = a;
// const arr: string[] = a;
// const obj: {x:string, y:number} = a;
// const any: any = u;
// const boo: boolean = u;
// const num: number = u;
// const arr: string[] = u;
// const obj: {x:string, y:number} = u;
// 위 코드에 u를 넣으면 boo, num, arr, obj 모두 에러가 남
/// Tuple
// 온전히 순서가 정해져있을 떄 좋을듯
// const tuple: [string, number, boolean] = ['a', 1, false];
// const users: [number, string, boolean][] = [[1, 'Neo', true], [2, 'Evan', false], [3,'Lewis',true]]
/// Void
// function hello(msg: string): void {
//     console.log(`Hello ${msg}`);
// }
// const hi: void = hello('world');
/// Never
// 직접 사용할 일은 없음. 타입 지정이 잘못되면 never 인것처럼 에러를 만나게 됨
// const nev: [never] = []
// nev.push(3)
/// Union
// 1가지 이상의 타입을 설정 가능
// let union: string | number;
// let union: (string | number)[]; // 배열은 타입을 묶어줘야됨
// union = 'Hello type!';
// union = 123;
// union = false; //에러
/// Intersection
// interface User {
//     name: string,
//     age: number,
// }
// interface Validation {
//     isValid: boolean,
// }
// const abc: User & Validation = {
//     name: 'Neo',
//     age: 85,
//     isValid: true,
// }
// ------------------------------------------------------------------
// 타입 추론 (Inference)
// '추론' - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄.
// 1) 초기화된 변수
// 2) 기본값이 설정된 매개 변수
// 3) 반환 값이 있는 함수
// let num = 12
// num = 'Hello type!';
// 타입스크립트가 타입을 알아서 잘 추론하기 때문에 꼭 필요한 곳에서만 타입을 지정해줘도 됨
// 초기화된 변수 `num`
// let num = 12
// 기본값이 지정된 매개 변수 `b` + 반환 값이 확실한 함수 `add`
// function add(a: number, b = 2) {
//     return a + b;
// }
//--------------------------------------------------------
// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.
// 단언 키워드 - as
// Non-null 단언 연산자 - !
// 1)
// const el = document.querySelector('body') as HTMLBodyElement;
// el.textContent = 'Hello world?!';
// const el = document.querySelector('body');
// el!.textContent = 'Hello world?!';
// 타입 에러가 발생하지않지만 문제가 발생 할 수 있음
// 이런식으로 작성하면 타입스크립트와 상관없이 물리적으로 데이터가 있는 경우, 없는 경우를 나눌 수 있음. (타입 가드)
// const el = document.querySelector('body');
// if(el){
//     el.textContent = 'Hello world?!';
// }
// 2)
// function getNumber (x: number | null | undefined) {
//     return Number((x as number).toFixed(2))
// }
// function getNumber (x: number | null | undefined) {
//     return Number(x!.toFixed(2))
// }
// 이렇게 하면 number가 아닌 경우가 들어오게 됨 (문제 발생 가능)
// 타입 가드 사용 (타입 단언)
// function getNumber (x: number | null | undefined) {
//     if(x){
//         return Number(x.toFixed(2))
//     }
// }
// getNumber(3.1415926535);
// getNumber(null);
// 3)
// function getValue(x: string | number, isNumber : boolean) {
//     if(isNumber){
//         return Number((x as number).toFixed(2))
//     }
//     return (x as string).toUpperCase()
// }
// // 이 부분은 number와 string을 지정해주어야 함
// getValue('Hello world', false) //'HELLO WORLD'
// getValue(3.1415926535,true); // 3.14
// 할당 단언 (Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.
// non-null 연산자 ! 아니고 할당 단언임. num에 값을 할당해야하는데 없이 넘어 갈 수 있도록 선언
// let num!: number
// console.log(num); // undefiend
//---------------------------------- 타입 가드
// 타입 가드 (Guards)
// function logText(el: Element) {
//     console.log(el.textContent);
// }
// // const h1El = document.querySelector('h1') as HTMLHeadingElement;
// // logText(h1El); // 콘솔에서 타입 에러가 남. 타입 가드 필요
// const h1El = document.querySelector('h1');
// // h1El이 거짓 조건이 아닐때를 사용. 타입 가드를 추가.
// if(h1El){
//     logText(h1El);
// }
// // or
// if(h1El instanceof HTMLHeadingElement){ // h1El가 어떤 엘리먼트 클래스인지 붙혀줘서 null이 아닌 조건을 작성해줌.
//     logText(h1El);
// }
// 새로운 예제
// function add(val: string | number) {
//     let res = 'Result => '
//     if(typeof val === 'number'){
//         res += val.toFixed(2)
//     }else {
//         res += val.toUpperCase()
//     }
//     console.log(res);
// }
// function add(val: string | number | boolean) {
//     let res = 'Result => '
//     if(typeof val === 'number'){
//         res += val.toFixed(2)
//     }
//     if(typeof val === 'string') {
//         res += val.toUpperCase()        
//     }
//     console.log(res);
// }
// add(3.141592);
// add('hello world');
// ------------------ 인터페이스 - 기본
// 인터페이스(Interface)
// 선택적 속성 - ?
// 읽기전용 속성 - readonly
// interface User { // pascal case로 이름을 지어줌
//     name: string,
//     readonly age: number, // 읽기만 되서 값을 할당 못함
//     isValid? : boolean //  선택적으로 사용 가능. 필수 아님.
// }
// const abc: User = {
//     name : 'abc',
//     age: 85,
//     isValid : true,
// }
// abc.isValid = false; // 할당 가능
// abc.age = 22; // 할당 불가능 에러남
// const neo: User = {
//     name: 'Neo',
//     age: 102,
//     // isValid를 선택적으로 바꾸고 에러 없어짐
// }
// 인터페이스 함수 타입 - 호출 시그니처(Call Signature) (소괄호)
// 인덱스 가능 타입 - 인덱스 시그니처 (Index Signature)
// 확장 (상속)
// 인덱스 함수 타입
// interface GetName {
//     (message: string): string
// } // 1) 이렇게 사용가능 (재사용시 사용)
// interface User {
//     name : string,
//     age: number,
//     // getName : GetName, //1)
//     getName : (meesage: string) => string // 2) 재사용하지 않을때 선언 가능 message를 param으로 적어도 가능
// }
// const abc: User = {
//     name: 'abc',
//     age: 85,
//     getName(message: string){
//         console.log(message);
//         return this.name;
//     }
// }
// abc.getName('Hello~');
// // 인터페이스 - 인덱싱 가능 타입 - 인덱스 시그니처 (Index Signature) (대괄호, 배열 타입을 지정)
// // 배열
// interface Fruits {
//     [item: number] : string
// }
// const fruits : Fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits);
// console.log(fruits[1]);
// // 객체
// interface User {
//     [key :string] : unknown, // 대괄호를 사용해서 인덱스를 검색 가능, 배열값이나 불린 등 어느 값이 올지 모르니 unknown 사용했음
//     name: string
//     age: number
// }
// const bcd: User  = {
//     name: 'abc',
//     age: 85,
// }
// bcd['isValid'] = true;
// bcd['emails'] = ['abc@gmail.com', 'test@gmail.com']
// console.log(bcd);
// 추가 예제
// interface Payload {
//     [key: string] : unknown
// }
// function logValues(payload : Payload) {
//     for( const key in payload) {
//         console.log(payload[key]);
//     }
// }
// interface User {
//     [key: string] : unknown // 인덱스 가능한 타입으로 만들기 위해 작성
//     name: string
//     age: number
//     isValid: boolean
// }
// const efg: User = {
//     name: 'abc',
//     age: 85,
//     isValid: true,
// }
// logValues(efg);
// 인터페이스 (Interface)
// 확장(상속)
// interface UserA {
//     name: string
//     age: number
// }
// interface UserB extends UserA{
//     isValid : boolean
// }
// const abc: UserA = {
//     name : 'abc',
//     age: 85,
//     isValid : true,
// }
// const neo: UserB = {
//     name: 'Neo',
//     age: 102,
//     isValid: true
// }
// 다른 예제
// interface FullName {
//     firstName: string
//     lastName : string
// }
// interface FullName {
//     middleName: string
//     // lastName : boolean // 기존 속성과 달라서 에러남
//     lastName : string
// }
// // 동일한 이름의 인터페이스 생성 가능하나,  기존 존재하는 속성의 타입을 그대로 작성해줘야 함
// const fullName : FullName = {
//     firstName : 'Tomas',
//     middleName : 'Sean',
//     lastName : 'Connery'
// }
// 타입 별칭(Alias)
// 별칭을 만들때 앞에 type 을 사용
// type TypeA = string // 원하는 이름으로 지정
// type TypeB = string | number | boolean
// type User = {
//     name: string
//     age: number
//     isValid : boolean
// } | [string, number, boolean]
// const userA : User = {
//     name: 'Neo',
//     age: 85,
//     isValid: true,
// }
// const userB : User = ['Evan', 36, false];
// function someFunc(param: TypeB): TypeA {
//     switch (typeof param){
//         case 'string':
//             return param.toUpperCase()
//         case 'number':
//             return param.toFixed(2)
//         default :
//             // return true
//             return 'Boolean!'
//     }
// }
// 인터페이스를 대신하여 type을 사용
// type TypeUser = { // = 할당연산자가 type 별칭에는 꼭 필요
//     name: string
//     age: number
//     isValid : boolean
// }
// interface InterfaceUser {
//     name: string
//     age: number
//     isValid: boolean
// }
// const abc: TypeUser = {
//     name: 'abc',
//     age: 85,
//     isValid: true
// }
// // 둘다 사용 가능한데 취향차이지만, 굳이 따지자면 Interface 방식을 추천. 별칭은 좀 더 사용범위가 넓어서 굳이 고르자면 인터페이스를 사용을 권장
// const abc: InterfaceUser = {
//     name: 'abc',
//     age: 85,
//     isValid: true
// }
// 함수 - 명시적 this
// interface Cat {
//     name: string
//     age: number
// }
// const cat: Cat = {
//     name : 'Lucy',
//     age:3
// }
// function hello(this: Cat, message: string) { // this는 매개변수라기보다 위에서 정한 타입을 정하는 것이라고 생각하면 됨
//     console.log(`Hello ${this.name}, ${message}`)
// }
// hello.call(cat, 'You are pretty awesome!'); // call메소드는 함수나 메소드 뒤에서 바로 사용 함수가 메소드가 어떤 대상에서 실행될 것인지 정하는 것 
// // cat 객체 데이터 기준에서 호출. this.는 cat에서 오는 것.
// // -------
// // 함수 - 오버로딩 (Overloading)
// // 1)
// function add1(a: string, b:string){
//     return a + b;
// }
// function add2(a:number, b:number){
//     return a + b;
// }
// add1('hello ', 'world~') // 'hello world~'
// add2(1,2) // 3
// add1('hello ', 2) // 타입이 안맞아서 에러남
// add2('hello ', 2) // 타입이 안맞아서 에러남
// // 2) 오버로딩
// function add(a:string, b: string) : string // 1 타입 선언
// function add(a:number, b: number) : number // 2 타입 선언
// function add(a:any, b: any) { // 함수 구현 타입선언 1,2를 일치하게 할당되도록 함
//     return a + b;
// }
// add('hello ', 'world~') // 'hello world~'
// add(1, 2) // 3
// add('hello ', 2) // 타입이 안맞아서 에러
// add(1, 'world~') // 타입이 안맞아서 에러
// -----------------------------
// 클래스
// 접근제어자 (Acess Modifiers)
// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
// protected - 나와 파생된 후손 클래스 내에서 접근 가능
// private - 내 클래스에서만 접근 가능
// class UserA {
//     //타입스크립트는 먼저 속성을 적어주어야 에러가 뜨지 않음
//     // public first: string = ''
//     // public last: string = ''
//     // public age: number = 0
//     // constructor(first: string, last: string, age: number) {
//     //     this.first = first
//     //     this.last = last
//     //     this.age = age
//     // }
//     // 위 방식 말고 다른 방식
//     constructor(
//         // public은 생략 불가
//         public first: string = '', 
//         public last: string = '', 
//         public age: number = 0) {
//             // ...
//         }
//     getAge() {
//         return `${this.first} ${this.last} is ${this.age}`
//     }
// }
// class UserB extends UserA {
//     getAge() {
//         return `${this.first} ${this.last} is ${this.age}`
//     }
// }
// class UserC extends UserB {
//     getAge() {
//         return `${this.first} ${this.last} is ${this.age}`
//     }
// }
// const neo = new UserA('Neo', 'Anderson', 102);
// console.log(neo.first)
// console.log(neo.last)
// console.log(neo.age)
// --------------------------------
// 제네릭 (Generic)
/// 함수
 // 기존 오버로딩 방식
 // function toArray(a: string, b:string) : string[]
 // function toArray(a: number, b:number) : number[]
 // function toArray(a: boolean, b:boolean) : boolean[]
 // function toArray(a: Obj, b:Obj) : Obj[]
 // function toArray(a: Arr, b:Arr) : Arr[]
 // function toArray(a: any, b:any){
 //     return [a, b];
 // }
 //제네릭 방식
 // function toArray<T>(a: T, b:T){ // type혹은 T로 사용 (제네릭)
 //     return [a, b];
 // }
 // console.log(
 //     // toArray('Neo', 'Anderson'),
 //     // toArray(1, 2),
 //     // toArray(true, false),
 //     // toArray({x:1}, {x:2}),
 //     // toArray([1,2],[3,4]),
 //     toArray<string>('Neo', 'Anderson'), // <string>으로 표현 가능 (명시)
 //     toArray(1, 2),
 //     toArray(true, false),
 //     toArray({x:1}, {x:2}),
 //     toArray<Arr>([1,2],[3,4]), // number[]에서 <Arr>로 직접 지정해줌
 // );
 // // 제네릭
 // /// 클래스
 // class User<P>{
 //     // public payload: P
 //     // constructor(payload:P) {this.payload = payload}
 //     constructor(public payload: P) {}
 //     getPayload() {
 //         return this.payload
 //     } 
 // }
 // interface UserAType {
 //     name: string
 //     age : number
 //     isValid : boolean
 // }
 // interface UserBType {
 //     name: string
 //     age : number
 //     emails : string[]
 // }
 // const abc = new User <UserAType>({
 //     name: 'abc',
 //     age: 85,
 //     isValid : true,
 //     // emails : 'abc@gmail.com'
 // });
 // const neo = new User <UserBType>({
 //     name: 'neo',
 //     age: 102,
 //     // isValid : false,
 //     emails: ['neo@gmail.com'] // ?!
 // });
 // 제네릭
 /// 인터페이스, 제약 조건(Constraints)
 // interface MyData<T>{
 // // interface MyData<T extends string | number> {
 //     name: string
 //     value: T
 // }
 // const dataA: MyData<string> = {
 //     name: 'data A',
 //     value: 'Hello world'
 // }
 // const dataB: MyData<number> = {
 //     name: 'Data B',
 //     value: 1234
 // }
 // const dataC: MyData<boolean> = {
 //     name: 'Data C',
 //     value: true
 // }
 // const dataD: MyData<number[]> = {
 //     name: 'Data D',
 //     value: [1,2,3,4]
 // }
 // -----------------------------------
 // 패키지의 타입 선언
 // /// <reference path="./lodash.d.ts" /> 
 // 삼중슬래시 지시자 / 참조태그 파일명을 lodash.d.ts 말고 다른거 할 때 이렇게 해서 잡아줌 슬래시 3번 필수
 // import _ from 'lodash'
 // const str = 'the brown fox jumps over the lazy dog.'
 // console.log(_.camelCase(str))
 // console.log(_.snakeCase(str))
 // console.log(_.kebabCase(str))
 // 구글에 DefinitelyTyped
 // npm install @types/lodash -D
 // 필요한 거를 찾아서 사용
 // ----------------------------------------------
 // 타입 가져오기와 내보내기
 // import { getFullName, User } from './user';
 // const abc: User = {
 //     firstName : 'abc',
 //     lastName : 'Lee',
 //     age:85,
 //     isValid:true
 // }
 // const fullName = getFullName(abc)
 // console.log(fullName)
 // console.log(abc.isValid)
 // ----------------------- 
 // tsconfig.json 구성 옵션
 // README.md 파일에 작성

},{}]},["fUTXd","jeorp"], "jeorp", "parcelRequire466d")

//# sourceMappingURL=index.b7a05eb9.js.map
