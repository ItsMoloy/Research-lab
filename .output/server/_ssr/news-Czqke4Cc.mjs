import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-fhxhr9hD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-Czqke4Cc.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		date: "May 12, 2026",
		tag: "Grant",
		title: "NASA awards $1.2M for coastal wetland monitoring",
		body: "The lab received a three-year award from NASA Earth Science to extend our multi-decadal wetland analysis across the Gulf Coast."
	},
	{
		date: "March 4, 2026",
		tag: "Award",
		title: "Alex Rivera receives ASPRS student excellence award",
		body: "Ph.D. candidate Alex Rivera was recognized for outstanding contributions to SAR-based rapid flood mapping."
	},
	{
		date: "January 20, 2026",
		tag: "Publication",
		title: "New paper in Remote Sensing of Environment",
		body: "Our lab's transformer-based segmentation method for wetland monitoring has been published in RSE."
	},
	{
		date: "October 8, 2025",
		tag: "Event",
		title: "Open house and lab tours during Research Week",
		body: "Prospective students and community members are invited to visit the lab, view drone demonstrations, and meet researchers."
	}
];
function NewsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Announcements",
		title: "News",
		description: "Grants, publications, awards, and lab activities."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-academic py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl space-y-8",
			children: items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border-b border-border pb-8 last:border-b-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary px-3 py-1 font-semibold uppercase tracking-wider text-primary-foreground",
							children: n.tag
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							className: "uppercase tracking-wider text-muted-foreground",
							children: n.date
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-serif text-2xl font-bold text-primary",
						children: n.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-foreground md:text-base",
						children: n.body
					})
				]
			}, n.title))
		})
	})] });
}
//#endregion
export { NewsPage as component };
