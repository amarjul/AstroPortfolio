import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, j as decodeKey } from './chunks/astro/server_Bd1PsB2g.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/","cacheDir":"file:///C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/node_modules/.astro/","outDir":"file:///C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/dist/","srcDir":"file:///C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/","publicDir":"file:///C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/public/","buildClientDir":"file:///C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/dist/","buildServerDir":"file:///C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"career/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/career","isIndex":false,"type":"page","pattern":"^\\/career\\/?$","segments":[[{"content":"career","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/career.astro","pathname":"/career","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/career.astro",{"propagation":"none","containsHead":true}],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/career@_@astro":"pages/career.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CdfV8ajk.mjs","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:\\Users\\amarj\\.03_SYP_Projects\\AstroPortfolio\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","\u0000astro:assets":"chunks/_astro_assets_BULhkhW_.mjs","C:\\Users\\amarj\\.03_SYP_Projects\\AstroPortfolio\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BtnAXdxo.mjs","@astrojs/react/client.js":"_astro/client.EAUERNtn.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/career.astro?astro&type=script&index=0&lang.ts":"_astro/career.astro_astro_type_script_index_0_lang.B0tHc3kE.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/career.astro?astro&type=script&index=1&lang.ts":"_astro/career.astro_astro_type_script_index_1_lang.BJKyhh8S.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.DT3vKXIF.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/contact.astro?astro&type=script&index=1&lang.ts":"_astro/contact.astro_astro_type_script_index_1_lang.BJKyhh8S.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/posts/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.DLVEgt1g.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/posts/[slug].astro?astro&type=script&index=1&lang.ts":"_astro/_slug_.astro_astro_type_script_index_1_lang.BJKyhh8S.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/projects.astro?astro&type=script&index=0&lang.ts":"_astro/projects.astro_astro_type_script_index_0_lang.DbJUyd27.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/projects.astro?astro&type=script&index=1&lang.ts":"_astro/projects.astro_astro_type_script_index_1_lang.BJKyhh8S.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BbdQGpc-.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/index.astro?astro&type=script&index=1&lang.ts":"_astro/index.astro_astro_type_script_index_1_lang.BJKyhh8S.js","C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/components/HeroSection.astro?astro&type=script&index=0&lang.ts":"_astro/HeroSection.astro_astro_type_script_index_0_lang.B_Jwv8mn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/career.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{window.scrollTo(0,0),setTimeout(()=>window.scrollTo(0,0),0)});window.addEventListener(\"pageshow\",e=>{e.persisted&&window.scrollTo(0,0)});document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\".page-content\");e&&requestAnimationFrame(()=>{e.classList.add(\"visible\")});const t=document.querySelector(\".career-header-animate\");t&&requestAnimationFrame(()=>{t.classList.add(\"visible\")}),document.querySelectorAll(\".career-content-animate\").forEach(n=>{requestAnimationFrame(()=>{n.classList.add(\"visible\")})})});"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/career.astro?astro&type=script&index=1&lang.ts","\"scrollRestoration\"in history&&(history.scrollRestoration=\"manual\");window.scrollTo(0,0);"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{window.scrollTo(0,0),setTimeout(()=>{window.scrollTo(0,0)},0)});window.addEventListener(\"pageshow\",e=>{e.persisted&&window.scrollTo(0,0)});document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\".page-content\");e&&requestAnimationFrame(()=>{e.classList.add(\"visible\")});const t=document.querySelector(\".contact-header-animate\");t&&requestAnimationFrame(()=>{t.classList.add(\"visible\")}),document.querySelectorAll(\".contact-card-animate\").forEach(n=>{requestAnimationFrame(()=>{n.classList.add(\"visible\")})})});"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/contact.astro?astro&type=script&index=1&lang.ts","\"scrollRestoration\"in history&&(history.scrollRestoration=\"manual\");window.scrollTo(0,0);"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/posts/[slug].astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{window.scrollTo(0,0),setTimeout(()=>{window.scrollTo(0,0)},0)});window.addEventListener(\"pageshow\",s=>{s.persisted&&window.scrollTo(0,0)});document.addEventListener(\"DOMContentLoaded\",()=>{const s=document.querySelector(\".page-content\");s&&requestAnimationFrame(()=>{s.classList.add(\"visible\")});const p=document.querySelector(\".post-header-animate\");p&&requestAnimationFrame(()=>{p.classList.add(\"visible\")});const d=document.querySelector(\".post-content-animate\");d&&requestAnimationFrame(()=>{d.classList.add(\"visible\")});const a=()=>{const m=document.querySelector(\".post-content\");if(!m)return;const e=getComputedStyle(document.documentElement),t=(o,c)=>e.getPropertyValue(o).trim()||c,g=[{selector:\"h2\",marginTopVar:\"--post-h2-margin-top\",marginBottomVar:\"--post-h2-margin-bottom\",contentMarginTopVar:\"--post-h2-content-margin-top\",defaults:{marginTop:\"3rem\",marginBottom:\"1.17rem\",contentMarginTop:\"1.17rem\"},skipFirstMarginTop:!0},{selector:\"h3\",marginTopVar:\"--post-h3-margin-top\",marginBottomVar:\"--post-h3-margin-bottom\",contentMarginTopVar:\"--post-h3-content-margin-top\",defaults:{marginTop:\"2.5rem\",marginBottom:\"1rem\",contentMarginTop:\"1rem\"},skipFirstMarginTop:!1},{selector:\"h4\",marginTopVar:\"--post-h4-margin-top\",marginBottomVar:\"--post-h4-margin-bottom\",contentMarginTopVar:\"--post-h4-content-margin-top\",defaults:{marginTop:\"2rem\",marginBottom:\"0.83rem\",contentMarginTop:\"0.83rem\"},skipFirstMarginTop:!1}],r=[\"P\",\"UL\",\"OL\",\"PRE\"];g.forEach(o=>{const c=m.querySelectorAll(o.selector),u=t(o.marginTopVar,o.defaults.marginTop),T=t(o.marginBottomVar,o.defaults.marginBottom),y=t(o.contentMarginTopVar,o.defaults.contentMarginTop);c.forEach(n=>{if(!(n instanceof HTMLElement))return;o.skipFirstMarginTop&&n.previousElementSibling===null?n.style.marginTop=\"0\":n.style.marginTop=u,n.style.marginBottom=T;const l=n.nextElementSibling;l instanceof HTMLElement&&r.includes(l.tagName)&&(l.style.marginTop=y)})})},i=()=>{document.querySelectorAll(\".post-content pre, .post-content pre.astro-code\").forEach(e=>{if(e instanceof HTMLElement){e.style.removeProperty(\"background-color\"),e.style.removeProperty(\"color\"),e.style.backgroundColor=\"#f5f5f5\",e.style.borderRadius=\"8px\",e.style.color=\"#333\";const t=e.querySelector(\"code\");t instanceof HTMLElement&&(t.style.removeProperty(\"background-color\"),t.style.removeProperty(\"color\"),t.style.backgroundColor=\"transparent\",t.style.color=\"#333\",t.querySelectorAll(\"span\").forEach(r=>{r instanceof HTMLElement&&(r.style.removeProperty(\"color\"),r.style.color=\"#333\")}))}})};a(),i(),setTimeout(()=>{a(),i()},100),setTimeout(()=>{a(),i()},500)});"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/posts/[slug].astro?astro&type=script&index=1&lang.ts","\"scrollRestoration\"in history&&(history.scrollRestoration=\"manual\");window.scrollTo(0,0);"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/projects.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{window.scrollTo(0,0),setTimeout(()=>window.scrollTo(0,0),0)});window.addEventListener(\"pageshow\",e=>{e.persisted&&window.scrollTo(0,0)});document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\".page-content\");e&&requestAnimationFrame(()=>{e.classList.add(\"visible\")});const t=document.querySelector(\".projects-header-animate\");t&&requestAnimationFrame(()=>{t.classList.add(\"visible\")}),document.querySelectorAll(\".projects-content-animate\").forEach(o=>{requestAnimationFrame(()=>{o.classList.add(\"visible\")})})});document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelectorAll(\".tab-button\"),t=document.querySelectorAll(\".tab-content\");e.forEach(n=>{n.addEventListener(\"click\",()=>{const o=n.getAttribute(\"data-tab\");e.forEach(a=>a.classList.remove(\"active\")),t.forEach(a=>a.classList.remove(\"active\")),n.classList.add(\"active\");const s=document.getElementById(`${o}-tab`);s&&s.classList.add(\"active\")})})});"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/projects.astro?astro&type=script&index=1&lang.ts","\"scrollRestoration\"in history&&(history.scrollRestoration=\"manual\");window.scrollTo(0,0);"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{window.scrollTo(0,0),setTimeout(()=>{window.scrollTo(0,0)},0)});window.addEventListener(\"pageshow\",o=>{o.persisted&&window.scrollTo(0,0)});"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/pages/index.astro?astro&type=script&index=1&lang.ts","\"scrollRestoration\"in history&&(history.scrollRestoration=\"manual\");window.scrollTo(0,0);"],["C:/Users/amarj/.03_SYP_Projects/AstroPortfolio/src/components/HeroSection.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\".page-content\");e&&requestAnimationFrame(()=>{e.classList.add(\"visible\")});const t=document.querySelector(\".hero-content-animate\");t&&requestAnimationFrame(()=>{t.classList.add(\"visible\")});const a=document.querySelector(\".hero-avatar-animate\");a&&requestAnimationFrame(()=>{a.classList.add(\"visible\")}),document.querySelectorAll(\".social-icon-animate\").forEach(n=>{requestAnimationFrame(()=>{n.classList.add(\"visible\")})})});"]],"assets":["/_astro/_slug_.DAkd4KoV.css","/_astro/career.CNQq8BR6.css","/_astro/career.nLec_Pf6.css","/_astro/projects.Dq2dVgjL.css","/favicon.svg","/fonts/21ed5661b47f7f6d-s.woff2","/images/avatar.jpg","/images/Intro2IoT.png","/_astro/client.EAUERNtn.js","/svg/email.svg","/svg/facebook.svg","/svg/github.svg","/svg/gmail.svg","/svg/instagram.svg","/svg/linkedin.svg","/svg/location.svg","/svg/outlook.svg","/svg/phone.svg","/svg/project1.svg","/svg/project10.svg","/svg/project2.svg","/svg/project3.svg","/svg/project4.svg","/svg/project5.svg","/svg/project6.svg","/svg/project7.svg","/svg/project8.svg","/svg/project9.svg","/svg/twitter.svg","/svg/willow-decoration.svg","/svg/youtube.svg","/career/index.html","/contact/index.html","/projects/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"q2D9Inmqxdy+InflNBkO4wfiJ8N23jkFhmUmsisP5hw=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
