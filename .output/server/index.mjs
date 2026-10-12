globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/PageLayout-CRGnFUb0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f6c-DW3Osg7PILduPH7kIUX/16Uab3g\"",
		"mtime": "2026-10-12T23:45:04.589Z",
		"size": 8044,
		"path": "../public/assets/PageLayout-CRGnFUb0.js"
	},
	"/assets/affiliates-Mb88DbUq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c0-3v7Zu7wH7Uygxg9zOeG8n0PEA50\"",
		"mtime": "2026-10-12T23:45:04.590Z",
		"size": 448,
		"path": "../public/assets/affiliates-Mb88DbUq.js"
	},
	"/assets/contact-Bal8h18j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1101-xjJ0RZvWG1fdoTrFZGInNCRj3+E\"",
		"mtime": "2026-10-12T23:45:04.590Z",
		"size": 4353,
		"path": "../public/assets/contact-Bal8h18j.js"
	},
	"/faculty.jpg": {
		"type": "image/jpeg",
		"etag": "\"17b29-yqsdndZq+wuyZi4z9bxbleUJKuE\"",
		"mtime": "2026-10-12T23:45:08.025Z",
		"size": 97065,
		"path": "../public/faculty.jpg"
	},
	"/assets/equipment-IXRLXNSA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"263-broQqRlL67Mt2MTS8g7qItJDLNY\"",
		"mtime": "2026-10-12T23:45:04.590Z",
		"size": 611,
		"path": "../public/assets/equipment-IXRLXNSA.js"
	},
	"/assets/cv-UCrMFJzp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16eb-IlwF1mtOBcx4CsTkFG/RPRPK0Pw\"",
		"mtime": "2026-10-12T23:45:04.590Z",
		"size": 5867,
		"path": "../public/assets/cv-UCrMFJzp.js"
	},
	"/assets/gallery-B6WYa7fe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24e-RHogAVFNbbukHTDqxPeviJFTZ7o\"",
		"mtime": "2026-10-12T23:45:04.590Z",
		"size": 590,
		"path": "../public/assets/gallery-B6WYa7fe.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-12T23:45:08.025Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/news-CLtjP3lc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"241-p15XVUyEkwawI7UcIbJF7TwnMr8\"",
		"mtime": "2026-10-12T23:45:04.590Z",
		"size": 577,
		"path": "../public/assets/news-CLtjP3lc.js"
	},
	"/assets/projects-QJc0Df2n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fa-FrbSBWzzawGxZ4vuVmy4ksH/p0g\"",
		"mtime": "2026-10-12T23:45:04.590Z",
		"size": 2042,
		"path": "../public/assets/projects-QJc0Df2n.js"
	},
	"/assets/publications-Bo0djCSA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2128-VMvT6X8vD7lMnamUY03IjEemUuc\"",
		"mtime": "2026-10-12T23:45:04.590Z",
		"size": 8488,
		"path": "../public/assets/publications-Bo0djCSA.js"
	},
	"/assets/routes-_bg_B1Tk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dd-LF1UNSOShNadpchZsAsKb3r7w5c\"",
		"mtime": "2026-10-12T23:45:04.591Z",
		"size": 477,
		"path": "../public/assets/routes-_bg_B1Tk.js"
	},
	"/assets/styles-DkF-3__Y.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"132f9-zzZma+TPeY9HmRcJE6nFBLyQ1ls\"",
		"mtime": "2026-10-12T23:45:04.591Z",
		"size": 78585,
		"path": "../public/assets/styles-DkF-3__Y.css"
	},
	"/Atlas.jpeg": {
		"type": "image/jpeg",
		"etag": "\"17a85-7InXh/w/OHAK0a37WHBHpsUkH5I\"",
		"mtime": "2026-10-12T23:45:08.025Z",
		"size": 96901,
		"path": "../public/Atlas.jpeg"
	},
	"/assets/teaching-DIbfZJHe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1989-0n3DArJQrhe5kMGxzEDHABYpyzc\"",
		"mtime": "2026-10-12T23:45:04.591Z",
		"size": 6537,
		"path": "../public/assets/teaching-DIbfZJHe.js"
	},
	"/assets/team-C45ND21P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c1e-T6cwVpVgl8JV4m7In9QkI66X184\"",
		"mtime": "2026-10-12T23:45:04.591Z",
		"size": 3102,
		"path": "../public/assets/team-C45ND21P.js"
	},
	"/assets/faculty-C5jN3CNl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d22-jFZh81PKKG8rvazrugJSWQbWuxA\"",
		"mtime": "2026-10-12T23:45:04.590Z",
		"size": 15650,
		"path": "../public/assets/faculty-C5jN3CNl.js"
	},
	"/assets/index-MDEo1C3k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"538de-r+VPAtj1Qu+TLReXVkpd+zpXvI8\"",
		"mtime": "2026-10-12T23:45:04.587Z",
		"size": 342238,
		"path": "../public/assets/index-MDEo1C3k.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_k2jgPv = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_k2jgPv
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
