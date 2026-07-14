import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-fhxhr9hD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CNSRl0-x.js
var import_jsx_runtime = require_jsx_runtime();
var images = [
	{
		title: "UAV survey — Atchafalaya Basin",
		tone: "from-slate-700 to-slate-900"
	},
	{
		title: "Field spectroscopy calibration",
		tone: "from-emerald-700 to-emerald-900"
	},
	{
		title: "Sentinel-2 land cover map",
		tone: "from-indigo-700 to-indigo-900"
	},
	{
		title: "Graduate student workshop",
		tone: "from-amber-600 to-amber-800"
	},
	{
		title: "SAR flood extent — 2023 event",
		tone: "from-sky-700 to-sky-900"
	},
	{
		title: "Lab meeting, Howe-Russell 227",
		tone: "from-rose-700 to-rose-900"
	}
];
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Field & Events",
		title: "Gallery",
		description: "A visual record of fieldwork campaigns, workshops, and everyday lab life."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-academic py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: images.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "group overflow-hidden rounded-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `aspect-[4/3] w-full bg-gradient-to-br ${img.tone} transition-transform duration-500 group-hover:scale-[1.02]`,
					role: "img",
					"aria-label": img.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-2 text-sm text-muted-foreground",
					children: img.title
				})]
			}, img.title))
		})
	})] });
}
//#endregion
export { GalleryPage as component };
