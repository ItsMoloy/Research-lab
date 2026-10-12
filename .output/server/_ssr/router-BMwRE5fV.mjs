import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createRootRouteWithContext, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BMwRE5fV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DkF-3__Y.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Geospatial Research Lab | University Research" },
			{
				name: "description",
				content: "Academic research lab advancing remote sensing, geospatial analysis, and environmental science."
			},
			{
				name: "author",
				content: "Geospatial Research Lab"
			},
			{
				property: "og:title",
				content: "Geospatial Research Lab"
			},
			{
				property: "og:description",
				content: "Academic research lab advancing remote sensing, geospatial analysis, and environmental science."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$10 = () => import("./team-B0ekMFla.mjs");
var Route$10 = createFileRoute("/team")({
	head: () => ({ meta: [{ title: "Team | GEE Lab" }, {
		name: "description",
		content: "Meet the faculty and researchers of the Geography and Environmental Engineering Lab at SUST."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./teaching-_3ARJOkr.mjs");
var Route$9 = createFileRoute("/teaching")({
	head: () => ({ meta: [{ title: "Teaching | Geospatial Research Lab" }, {
		name: "description",
		content: "Undergraduate and graduate courses taught by lab faculty."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./publications-BLgkDW72.mjs");
var Route$8 = createFileRoute("/publications")({
	head: () => ({ meta: [{ title: "Publications | Geospatial Research Lab" }, {
		name: "description",
		content: "Peer-reviewed publications from the Geospatial Research Lab."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./projects-6w7mjVAe.mjs");
var Route$7 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Projects | Geospatial Research Lab" }, {
		name: "description",
		content: "Active and past research projects at the Geospatial Research Lab."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./news-Cg6EB98Z.mjs");
var Route$6 = createFileRoute("/news")({
	head: () => ({ meta: [{ title: "News | Geospatial Research Lab" }, {
		name: "description",
		content: "Announcements, grants, awards, and lab updates."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-BZL9da1I.mjs");
var Route$5 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery | Geospatial Research Lab" }, {
		name: "description",
		content: "Photographs from fieldwork, campaigns, and lab events."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./equipment-BQLpiWW9.mjs");
var Route$4 = createFileRoute("/equipment")({
	head: () => ({ meta: [{ title: "Equipment | Geospatial Research Lab" }, {
		name: "description",
		content: "Field and computing equipment operated by the Geospatial Research Lab."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./cv-DFoQccMn.mjs");
var Route$3 = createFileRoute("/cv")({
	head: () => ({ meta: [{ title: "CV | Md. Mahin Uddin" }, {
		name: "description",
		content: "Curriculum vitae for Md. Mahin Uddin, lecturer at Shahjalal University of Science and Technology."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-BrfnebsX.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | GEE Lab" }, {
		name: "description",
		content: "Get in touch with the Geography and Environmental Engineering Lab at SUST."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./affiliates-C3DxQ4Ap.mjs");
var Route$1 = createFileRoute("/affiliates")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./routes-DhmzTYqn.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var TeamRoute = Route$10.update({
	id: "/team",
	path: "/team",
	getParentRoute: () => Route$11
});
var TeachingRoute = Route$9.update({
	id: "/teaching",
	path: "/teaching",
	getParentRoute: () => Route$11
});
var PublicationsRoute = Route$8.update({
	id: "/publications",
	path: "/publications",
	getParentRoute: () => Route$11
});
var ProjectsRoute = Route$7.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$11
});
var NewsRoute = Route$6.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$11
});
var GalleryRoute = Route$5.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$11
});
var EquipmentRoute = Route$4.update({
	id: "/equipment",
	path: "/equipment",
	getParentRoute: () => Route$11
});
var CvRoute = Route$3.update({
	id: "/cv",
	path: "/cv",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var AffiliatesRoute = Route$1.update({
	id: "/affiliates",
	path: "/affiliates",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AffiliatesRoute,
	ContactRoute,
	CvRoute,
	EquipmentRoute,
	GalleryRoute,
	NewsRoute,
	ProjectsRoute,
	PublicationsRoute,
	TeachingRoute,
	TeamRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
