var Rt=class{},Z=class extends Rt{};var tt=t=>{let r=t.split("/");return r[0]===""&&r.shift(),r},et=t=>{let r=[];for(let e=0;;){let n=!1;if(t=t.replace(/\{[^}]+\}/g,i=>{let o=`@\\${e}`;return r[e]=[o,i],e++,n=!0,o}),!n)break}let s=t.split("/");s[0]===""&&s.shift();for(let e=r.length-1;e>=0;e--){let[n]=r[e];for(let i=s.length-1;i>=0;i--)if(s[i].indexOf(n)!==-1){s[i]=s[i].replace(n,r[e][1]);break}}return s},C={},rt=t=>{if(t==="*")return"*";let r=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);return r?(C[t]||(r[2]?C[t]=[t,r[1],new RegExp("^"+r[2]+"$")]:C[t]=[t,r[1],!0]),C[t]):null},B=t=>{let r=t.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);return r?r[1]:""},st=t=>{let r=t.indexOf("?",8);return r===-1?"":"?"+t.slice(r+1)},nt=t=>{let r=B(t);return r.length>1&&r[r.length-1]==="/"?r.slice(0,-1):r},y=(...t)=>{let r="",s=!1;for(let e of t)r[r.length-1]==="/"&&(r=r.slice(0,-1),s=!0),e[0]!=="/"&&(e=`/${e}`),e==="/"&&s?r=`${r}/`:e!=="/"&&(r=`${r}${e}`),e==="/"&&r===""&&(r="/");return r},A=t=>{let r=t.match(/^(.+|)(\/\:[^\/]+)\?$/);if(!r)return null;let s=r[1],e=s+r[2];return[s===""?"/":s.replace(/\/$/,""),e]},F=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),/%/.test(t)?_(t):t):t,it=(t,r,s)=>{let e;if(!s&&r&&!/[%+]/.test(r)){let o=t.indexOf(`?${r}`,8);for(o===-1&&(o=t.indexOf(`&${r}`,8));o!==-1;){let h=t.charCodeAt(o+r.length+1);if(h===61){let c=o+r.length+2,a=t.indexOf("&",c);return F(t.slice(c,a===-1?void 0:a))}else if(h==38||isNaN(h))return"";o=t.indexOf(`&${r}`,o+1)}if(e=/[%+]/.test(t),!e)return}let n={};e??(e=/[%+]/.test(t));let i=t.indexOf("?",8);for(;i!==-1;){let o=t.indexOf("&",i+1),h=t.indexOf("=",i);h>o&&o!==-1&&(h=-1);let c=t.slice(i+1,h===-1?o===-1?void 0:o:h);if(e&&(c=F(c)),i=o,c==="")continue;let a;h===-1?a="":(a=t.slice(h+1,o===-1?void 0:o),e&&(a=F(a))),s?(n[c]??(n[c]=[])).push(a):n[c]??(n[c]=a)}return r?n[r]:n},ot=it,at=(t,r)=>it(t,r,!0),_=decodeURIComponent;var Et=/^[\w!#$%&'*.^`|~+-]+$/,bt=/^[ !#-:<-[\]-~]*$/,ht=(t,r)=>t.trim().split(";").reduce((e,n)=>{n=n.trim();let i=n.indexOf("=");if(i===-1)return e;let o=n.substring(0,i).trim();if(r&&r!==o||!Et.test(o))return e;let h=n.substring(i+1).trim();return h.startsWith('"')&&h.endsWith('"')&&(h=h.slice(1,-1)),bt.test(h)&&(e[o]=_(h)),e},{});var Ht=(t,r,s={})=>{let e=`${t}=${r}`;return s&&typeof s.maxAge=="number"&&s.maxAge>=0&&(e+=`; Max-Age=${Math.floor(s.maxAge)}`),s.domain&&(e+=`; Domain=${s.domain}`),s.path&&(e+=`; Path=${s.path}`),s.expires&&(e+=`; Expires=${s.expires.toUTCString()}`),s.httpOnly&&(e+="; HttpOnly"),s.secure&&(e+="; Secure"),s.sameSite&&(e+=`; SameSite=${s.sameSite}`),s.partitioned&&(e+="; Partitioned"),e},ct=(t,r,s={})=>(r=encodeURIComponent(r),Ht(t,r,s));var ut=class{constructor(t){this.writable=t,this.writer=t.getWriter(),this.encoder=new TextEncoder}async write(t){try{typeof t=="string"&&(t=this.encoder.encode(t)),await this.writer.write(t)}catch{}return this}async writeln(t){return await this.write(t+`
`),this}sleep(t){return new Promise(r=>setTimeout(r,t))}async close(){try{await this.writer.close()}catch{}}async pipe(t){this.writer.releaseLock(),await t.pipeTo(this.writable,{preventClose:!0}),this.writer=this.writable.getWriter()}};var ft="text/plain; charset=UTF-8",x=class{constructor(t,r){this.env={},this._var={},this.finalized=!1,this.error=void 0,this._status=200,this._h=void 0,this._pH=void 0,this._init=!0,this._renderer=s=>this.html(s),this.notFoundHandler=()=>new Response,this.render=(...s)=>this._renderer(...s),this.setRenderer=s=>{this._renderer=s},this.header=(s,e,n)=>{if(e===void 0){this._h?this._h.delete(s):this._pH&&delete this._pH[s.toLocaleLowerCase()],this.finalized&&this.res.headers.delete(s);return}n?.append?(this._h||(this._init=!1,this._h=new Headers(this._pH),this._pH={}),this._h.append(s,e)):this._h?this._h.set(s,e):(this._pH??(this._pH={}),this._pH[s.toLowerCase()]=e),this.finalized&&(n?.append?this.res.headers.append(s,e):this.res.headers.set(s,e))},this.status=s=>{this._status=s},this.set=(s,e)=>{this._var??(this._var={}),this._var[s]=e},this.get=s=>this._var?this._var[s]:void 0,this.newResponse=(s,e,n)=>{if(this._init&&!n&&!e&&this._status===200)return new Response(s,{headers:this._pH});if(e&&typeof e!="number"){let o=new Response(s,e),h=this._pH?.["content-type"];return h&&o.headers.set("content-type",h),o}let i=e??this._status;this._pH??(this._pH={}),this._h??(this._h=new Headers);for(let[o,h]of Object.entries(this._pH))this._h.set(o,h);if(this._res){this._res.headers.forEach((o,h)=>{this._h?.set(h,o)});for(let[o,h]of Object.entries(this._pH))this._h.set(o,h)}n??(n={});for(let[o,h]of Object.entries(n))if(typeof h=="string")this._h.set(o,h);else{this._h.delete(o);for(let c of h)this._h.append(o,c)}return new Response(s,{status:i,headers:this._h})},this.body=(s,e,n)=>typeof e=="number"?this.newResponse(s,e,n):this.newResponse(s,e),this.text=(s,e,n)=>{if(!this._pH){if(this._init&&!n&&!e)return new Response(s);this._pH={}}return this._pH["content-type"]&&(this._pH["content-type"]=ft),typeof e=="number"?this.newResponse(s,e,n):this.newResponse(s,e)},this.json=(s,e,n)=>{let i=JSON.stringify(s);return this._pH??(this._pH={}),this._pH["content-type"]="application/json; charset=UTF-8",typeof e=="number"?this.newResponse(i,e,n):this.newResponse(i,e)},this.jsonT=(s,e,n)=>{let i=typeof e=="number"?this.json(s,e,n):this.json(s,e);return{response:i,data:s,format:"json",status:i.status}},this.html=(s,e,n)=>(this._pH??(this._pH={}),this._pH["content-type"]="text/html; charset=UTF-8",typeof e=="number"?this.newResponse(s,e,n):this.newResponse(s,e)),this.redirect=(s,e=302)=>(this._h??(this._h=new Headers),this._h.set("Location",s),this.newResponse(null,e)),this.streamText=(s,e,n)=>(n??(n={}),this.header("content-type",ft),this.header("x-content-type-options","nosniff"),this.header("transfer-encoding","chunked"),this.stream(s,e,n)),this.stream=(s,e,n)=>{let{readable:i,writable:o}=new TransformStream,h=new ut(o);return s(h).finally(()=>h.close()),typeof e=="number"?this.newResponse(i,e,n):this.newResponse(i,e)},this.cookie=(s,e,n)=>{let i=ct(s,e,n);this.header("set-cookie",i,{append:!0})},this.notFound=()=>this.notFoundHandler(this),this.req=t,r&&(this._exCtx=r.executionCtx,this.env=r.env,r.notFoundHandler&&(this.notFoundHandler=r.notFoundHandler))}get event(){if(this._exCtx instanceof Z)return this._exCtx;throw Error("This context has no FetchEvent")}get executionCtx(){if(this._exCtx)return this._exCtx;throw Error("This context has no ExecutionContext")}get res(){return this._init=!1,this._res||(this._res=new Response("404 Not Found",{status:404}))}set res(t){this._init=!1,this._res&&t&&(this._res.headers.delete("content-type"),this._res.headers.forEach((r,s)=>{t.headers.set(s,r)})),this._res=t,this.finalized=!0}get var(){return{...this._var}}get runtime(){let t=globalThis;return t?.Deno!==void 0?"deno":t?.Bun!==void 0?"bun":typeof t?.WebSocketPair=="function"?"workerd":typeof t?.EdgeRuntime=="string"?"edge-light":t?.fastly!==void 0?"fastly":t?.__lagon__!==void 0?"lagon":t?.process?.release?.name==="node"?"node":"other"}};var I=(t,r,s)=>{let e=t.length;return(n,i)=>{let o=-1;return h(0);function h(c){if(c<=o)throw new Error("next() called multiple times");let a=t[c];o=c,c===e&&i&&(a=i);let u,l=!1;if(!a)n instanceof x&&n.finalized===!1&&s&&(u=s(n));else try{u=a(n,()=>{let f=h(c+1);return f instanceof Promise?f:Promise.resolve(f)})}catch(f){if(f instanceof Error&&n instanceof x&&r)n.error=f,u=r(f,n),l=!0;else throw f}return u instanceof Promise?u.then(f=>(f!==void 0&&"response"in f&&(f=f.response),f&&n.finalized===!1&&(n.res=f),n)).catch(async f=>{if(f instanceof Error&&n instanceof x&&r)return n.error=f,n.res=await r(f,n),n;throw f}):(u!==void 0&&"response"in u&&(u=u.response),u&&(n.finalized===!1||l)&&(n.res=u),n)}}};var lt=class extends Error{constructor(t=500,r){super(r?.message),this.res=r?.res,this.status=t}getResponse(){return this.res?this.res:new Response(this.message,{status:this.status})}};var dt=async t=>{let r={},s=t.headers.get("Content-Type");if(s&&(s.startsWith("multipart/form-data")||s.startsWith("application/x-www-form-urlencoded"))){let e=await t.formData();if(e){let n={};e.forEach((i,o)=>{o.slice(-2)==="[]"?n[o]?Array.isArray(n[o])&&n[o].push(i.toString()):n[o]=[i.toString()]:n[o]=i}),r=n}}return r};var pt=class{constructor(t,r="/",s){this.bodyCache={},this.cachedBody=e=>{let{bodyCache:n,raw:i}=this,o=n[e];return o||(n.arrayBuffer?(async()=>await new Response(n.arrayBuffer)[e]())():n[e]=i[e]())},this.raw=t,this.path=r,this.paramData=s,this.vData={}}param(t){if(this.paramData)if(t){let r=this.paramData[t];return r?/\%/.test(r)?_(r):r:void 0}else{let r={};for(let[s,e]of Object.entries(this.paramData))e&&typeof e=="string"&&(r[s]=/\%/.test(e)?_(e):e);return r}return null}query(t){return ot(this.url,t)}queries(t){return at(this.url,t)}header(t){if(t)return this.raw.headers.get(t.toLowerCase())??void 0;let r={};return this.raw.headers.forEach((s,e)=>{r[e]=s}),r}cookie(t){let r=this.raw.headers.get("Cookie");if(!r)return;let s=ht(r);return t?s[t]:s}async parseBody(){if(this.bodyCache.parsedBody)return this.bodyCache.parsedBody;let t=await dt(this);return this.bodyCache.parsedBody=t,t}json(){return this.cachedBody("json")}text(){return this.cachedBody("text")}arrayBuffer(){return this.cachedBody("arrayBuffer")}blob(){return this.cachedBody("blob")}formData(){return this.cachedBody("formData")}addValidatedData(t,r){this.vData[t]=r}valid(t){return this.vData[t]}get url(){return this.raw.url}get method(){return this.raw.method}get headers(){return this.raw.headers}get body(){return this.raw.body}get bodyUsed(){return this.raw.bodyUsed}get integrity(){return this.raw.integrity}get keepalive(){return this.raw.keepalive}get referrer(){return this.raw.referrer}get signal(){return this.raw.signal}};var d="ALL",mt="all",j=["get","post","put","delete","options","patch"],L=class extends Error{};function Pt(){return class{}}var St=t=>t.text("404 Not Found",404),gt=(t,r)=>{if(t instanceof lt)return t.getResponse();console.trace(t);let s="Internal Server Error";return r.text(s,500)},U=class extends Pt(){constructor(t={}){super(),this._basePath="/",this.path="/",this.routes=[],this.notFoundHandler=St,this.errorHandler=gt,this.head=()=>(console.warn("`app.head()` is no longer used. `app.get()` implicitly handles the HEAD method."),this),this.handleEvent=e=>this.dispatch(e.request,e,void 0,e.request.method),this.fetch=(e,n,i)=>this.dispatch(e,i,n,e.method),this.request=(e,n,i,o)=>{if(e instanceof Request)return n!==void 0&&(e=new Request(e,n)),this.fetch(e,i,o);e=e.toString();let h=/^https?:\/\//.test(e)?e:`http://localhost${y("/",e)}`,c=new Request(h,n);return this.fetch(c,i,o)},this.fire=()=>{addEventListener("fetch",e=>{e.respondWith(this.dispatch(e.request,e,void 0,e.request.method))})},[...j,mt].map(e=>{this[e]=(n,...i)=>(typeof n=="string"?this.path=n:this.addRoute(e,this.path,n),i.map(o=>{typeof o!="string"&&this.addRoute(e,this.path,o)}),this)}),this.on=(e,n,...i)=>{if(!e)return this;this.path=n;for(let o of[e].flat())i.map(h=>{this.addRoute(o.toUpperCase(),this.path,h)});return this},this.use=(e,...n)=>(typeof e=="string"?this.path=e:n.unshift(e),n.map(i=>{this.addRoute(d,this.path,i)}),this);let s=t.strict??!0;delete t.strict,Object.assign(this,t),this.getPath=s?t.getPath??B:nt}clone(){let t=new U({router:this.router,getPath:this.getPath});return t.routes=this.routes,t}route(t,r){let s=this.basePath(t);return r?(r.routes.map(e=>{let n=r.errorHandler===gt?e.handler:async(i,o)=>(await I([e.handler],r.errorHandler)(i,o)).res;s.addRoute(e.method,e.path,n)}),this):s}basePath(t){let r=this.clone();return r._basePath=y(this._basePath,t),r}onError(t){return this.errorHandler=t,this}notFound(t){return this.notFoundHandler=t,this}showRoutes(){this.routes.map(r=>{console.log(`\x1B[32m${r.method}\x1B[0m ${" ".repeat(8-r.method.length)} ${r.path}`)})}mount(t,r,s){let e=y(this._basePath,t),n=e==="/"?0:e.length,i=async(o,h)=>{let c;try{c=o.executionCtx}catch{}let a=s?s(o):[o.env,c],u=Array.isArray(a)?a:[a],l=st(o.req.url),f=await r(new Request(new URL((o.req.path.slice(n)||"/")+l,o.req.url),o.req.raw),...u);if(f)return f;await h()};return this.addRoute(d,y(t,"*"),i),this}get routerName(){return this.matchRoute("GET","/"),this.router.name}addRoute(t,r,s){t=t.toUpperCase(),this._basePath&&(r=y(this._basePath,r)),this.router.add(t,r,s);let e={path:r,method:t,handler:s};this.routes.push(e)}matchRoute(t,r){return this.router.match(t,r)||{handlers:[],params:{}}}handleError(t,r){if(t instanceof Error)return this.errorHandler(t,r);throw t}dispatch(t,r,s,e){if(e==="HEAD")return(async()=>new Response(null,await this.dispatch(t,r,s,"GET")))();let n=this.getPath(t,{env:s}),{handlers:i,params:o}=this.matchRoute(e,n),h=new x(new pt(t,n,o),{env:s,executionCtx:r,notFoundHandler:this.notFoundHandler});if(i.length===1){let a;try{if(a=i[0](h,async()=>{}),!a)return this.notFoundHandler(h)}catch(u){return this.handleError(u,h)}return a instanceof Response||("response"in a&&(a=a.response),a instanceof Response)?a:(async()=>{let u;try{if(u=await a,u!==void 0&&"response"in u&&(u=u.response),!u)return this.notFoundHandler(h)}catch(l){return this.handleError(l,h)}return u})()}let c=I(i,this.errorHandler,this.notFoundHandler);return(async()=>{try{let a=c(h),u=a.constructor.name==="Promise"?await a:a;if(!u.finalized)throw new Error("Context is not finalized. You may forget returning Response object or `await next()`");return u.res}catch(a){return this.handleError(a,h)}})()}};var D="[^/]+",H=".*",P="(?:|/.*)",S=Symbol();function Ot(t,r){return t.length===1?r.length===1?t<r?-1:1:-1:r.length===1||t===H||t===P?1:r===H||r===P?-1:t===D?1:r===D?-1:t.length===r.length?t<r?-1:1:r.length-t.length}var M=class{constructor(){this.children={}}insert(t,r,s,e,n){if(t.length===0){if(this.index!==void 0)throw S;if(n)return;this.index=r;return}let[i,...o]=t,h=i==="*"?o.length===0?["","",H]:["","",D]:i==="/*"?["","",P]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),c;if(h){let a=h[1],u=h[2]||D;if(c=this.children[u],!c){if(Object.keys(this.children).some(l=>l!==H&&l!==P))throw S;if(n)return;c=this.children[u]=new M,a!==""&&(c.varIndex=e.varIndex++)}if(!n&&a!==""){if(s.some(l=>l[0]===a))throw new Error("Duplicate param name");s.push([a,c.varIndex])}}else if(c=this.children[i],!c){if(Object.keys(this.children).some(a=>a.length>1&&a!==H&&a!==P))throw S;if(n)return;c=this.children[i]=new M}c.insert(o,r,s,e,n)}buildRegExpStr(){let r=Object.keys(this.children).sort(Ot).map(s=>{let e=this.children[s];return(typeof e.varIndex=="number"?`(${s})@${e.varIndex}`:s)+e.buildRegExpStr()});return typeof this.index=="number"&&r.unshift(`#${this.index}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}};var wt=class{constructor(){this.context={varIndex:0},this.root=new M}insert(t,r,s){let e=[],n=[];for(let o=0;;){let h=!1;if(t=t.replace(/\{[^}]+\}/g,c=>{let a=`@\\${o}`;return n[o]=[a,c],o++,h=!0,a}),!h)break}let i=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=n.length-1;o>=0;o--){let[h]=n[o];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(h)!==-1){i[c]=i[c].replace(h,n[o][1]);break}}return this.root.insert(i,r,e,this.context,s),e}buildRegExp(){let t=this.root.buildRegExpStr();if(t==="")return[/^$/,[],[]];let r=0,s=[],e=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,o)=>typeof i<"u"?(s[++r]=Number(i),"$()"):(typeof o<"u"&&(e[Number(o)]=++r),"")),[new RegExp(`^${t}`),s,e]}};var W=[d,...j].map(t=>t.toUpperCase()),yt={},$t=[/^$/,[],{}],q={};function _t(t){return q[t]??(q[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*/,"(?:|/.*)")}$`))}function Tt(){q={}}function Ct(t){let r=new wt,s=[];if(t.length===0)return $t;let e=t.map(a=>[!/\*|\/:/.test(a[0]),...a]).sort(([a,u],[l,f])=>a?1:l?-1:u.length-f.length),n={};for(let a=0,u=-1,l=e.length;a<l;a++){let[f,p,m]=e[a];f?n[p]={handlers:m,params:yt}:u++;let g;try{g=r.insert(p,u,f)}catch($){throw $===S?new L(p):$}f||(s[u]=g.length===0?[{handlers:m,params:yt},null]:[m,g])}let[i,o,h]=r.buildRegExp();for(let a=0,u=s.length;a<u;a++){let l=s[a][1];if(l)for(let f=0,p=l.length;f<p;f++)l[f][1]=h[l[f][1]]}let c=[];for(let a in o)c[a]=s[o[a]];return[i,c,n]}function v(t,r){if(t){for(let s of Object.keys(t).sort((e,n)=>n.length-e.length))if(_t(s).test(r))return[...t[s]]}}var z=class{constructor(){this.name="RegExpRouter",this.middleware={[d]:{}},this.routes={[d]:{}}}add(t,r,s){var e;let{middleware:n,routes:i}=this;if(!n||!i)throw new Error("Can not add a route since the matcher is already built.");if(W.indexOf(t)===-1&&W.push(t),n[t]||[n,i].forEach(h=>{h[t]={},Object.keys(h[d]).forEach(c=>{h[t][c]=[...h[d][c]]})}),r==="/*"&&(r="*"),/\*$/.test(r)){let h=_t(r);t===d?Object.keys(n).forEach(c=>{var a;(a=n[c])[r]||(a[r]=v(n[c],r)||v(n[d],r)||[])}):(e=n[t])[r]||(e[r]=v(n[t],r)||v(n[d],r)||[]),Object.keys(n).forEach(c=>{(t===d||t===c)&&Object.keys(n[c]).forEach(a=>{h.test(a)&&n[c][a].push(s)})}),Object.keys(i).forEach(c=>{(t===d||t===c)&&Object.keys(i[c]).forEach(a=>h.test(a)&&i[c][a].push(s))});return}let o=A(r)||[r];for(let h=0,c=o.length;h<c;h++){let a=o[h];Object.keys(i).forEach(u=>{var l;(t===d||t===u)&&((l=i[u])[a]||(l[a]=[...v(n[u],a)||v(n[d],a)||[]]),i[u][a].push(s))})}}match(t,r){Tt();let s=this.buildAllMatchers();return this.match=(e,n)=>{let i=s[e],o=i[2][n];if(o)return o;let h=n.match(i[0]);if(!h)return null;let c=h.indexOf("",1),[a,u]=i[1][c];if(!u)return a;let l={};for(let f=0,p=u.length;f<p;f++)l[u[f][0]]=h[u[f][1]];return{handlers:a,params:l}},this.match(t,r)}buildAllMatchers(){let t={};return W.forEach(r=>{t[r]=this.buildMatcher(r)||t[d]}),this.middleware=this.routes=void 0,t}buildMatcher(t){let r=[],s=t===d;return[this.middleware,this.routes].forEach(e=>{let n=e[t]?Object.keys(e[t]).map(i=>[i,e[t][i]]):[];n.length!==0?(s||(s=!0),r.push(...n)):t!==d&&r.push(...Object.keys(e[d]).map(i=>[i,e[d][i]]))}),s?Ct(r):null}};var K=class{constructor(t){this.name="SmartRouter",this.routers=[],this.routes=[],Object.assign(this,t)}add(t,r,s){if(!this.routes)throw new Error("Can not add a route since the matcher is already built.");this.routes.push([t,r,s])}match(t,r){if(!this.routes)throw new Error("Fatal error");let{routers:s,routes:e}=this,n=s.length,i=0,o;for(;i<n;i++){let h=s[i];try{e.forEach(c=>{h.add(...c)}),o=h.match(t,r)}catch(c){if(c instanceof L)continue;throw c}this.match=h.match.bind(h),this.routers=[h],this.routes=void 0;break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o||null}get activeRouter(){if(this.routes||this.routers.length!==1)throw new Error("No active router has been determined yet.");return this.routers[0]}};function xt(t,r){for(let e=0,n=t.patterns.length;e<n;e++)if(typeof t.patterns[e]=="object"&&t.patterns[e][1]===r)return!0;let s=Object.values(t.children);for(let e=0,n=s.length;e<n;e++)if(xt(s[e],r))return!0;return!1}var Q=class{constructor(t,r,s){if(this.order=0,this.children=s||{},this.methods=[],this.name="",t&&r){let e={};e[t]={handler:r,score:0,name:this.name},this.methods=[e]}this.patterns=[],this.handlerSetCache={}}insert(t,r,s){this.name=`${t} ${r}`,this.order=++this.order;let e=this,n=et(r),i=[],o=a=>`Duplicate param name, use another name instead of '${a}' - ${t} ${r} <--- '${a}'`;for(let a=0,u=n.length;a<u;a++){let l=n[a];if(Object.keys(e.children).includes(l)){i.push(...e.patterns),e=e.children[l];continue}e.children[l]=new Q;let f=rt(l);if(f){if(typeof f=="object"){for(let p=0,m=i.length;p<m;p++)if(typeof i[p]=="object"&&i[p][1]===f[1])throw new Error(o(f[1]));if(Object.values(e.children).some(p=>xt(p,f[1])))throw new Error(o(f[1]))}e.patterns.push(f),i.push(...e.patterns)}i.push(...e.patterns),e=e.children[l]}e.methods.length||(e.methods=[]);let h={},c={handler:s,name:this.name,score:this.order};return h[t]=c,e.methods.push(h),e}gHSets(t,r,s){var e,n;return(e=t.handlerSetCache)[n=`${r}:${s?"1":"0"}`]||(e[n]=(()=>{let i=[];for(let o=0,h=t.methods.length;o<h;o++){let c=t.methods[o],a=c[r]||c[d];a!==void 0&&i.push(a)}return i})())}search(t,r){let s=[],e={},i=[this],o=tt(r);for(let a=0,u=o.length;a<u;a++){let l=o[a],f=a===u-1,p=[],m=!1;for(let g=0,$=i.length;g<$;g++){let w=i[g],R=w.children[l];R&&(f===!0?(R.children["*"]&&s.push(...this.gHSets(R.children["*"],t,!0)),s.push(...this.gHSets(R,t)),m=!0):p.push(R));for(let k=0,vt=w.patterns.length;k<vt;k++){let X=w.patterns[k];if(X==="*"){let N=w.children["*"];N&&(s.push(...this.gHSets(N,t)),p.push(N));continue}if(l==="")continue;let[Y,T,E]=X,b=w.children[Y],J=o.slice(a).join("/");if(E instanceof RegExp&&E.test(J)){s.push(...this.gHSets(b,t)),e[T]=J;continue}(E===!0||E instanceof RegExp&&E.test(l))&&(typeof Y=="string"&&(f===!0?(s.push(...this.gHSets(b,t)),b.children["*"]&&s.push(...this.gHSets(b.children["*"],t))):p.push(b)),(typeof T=="string"&&!m||w.children[l])&&(e[T]=l))}}i=p}let h=s.length;return h===0?null:h===1?{handlers:[s[0].handler],params:e}:{handlers:s.sort((a,u)=>a.score-u.score).map(a=>a.handler),params:e}}};var G=class{constructor(){this.name="TrieRouter",this.node=new Q}add(t,r,s){let e=A(r);if(e){for(let n of e)this.node.insert(t,n,s);return}this.node.insert(t,r,s)}match(t,r){return this.node.search(t,r)}};var V=class extends U{constructor(t={}){super(t),this.router=t.router??new K({routers:[new z,new G]})}};var O=new V;O.get("/",t=>t.text("Hello from Hono running in Wasm Workers Server!"));O.get("/hello",t=>t.text("You can get a custom hello message by accessing /hello/your-name"));O.get("/hello/:name",t=>{let r=t.req.param("name");return t.text(`Hello ${r}! This app is running in Wasm Workers Server`)});O.notFound(t=>t.text("Awww! This page is missing",404));var Ve=O;export{Ve as default};