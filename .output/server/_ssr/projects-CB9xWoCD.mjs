import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-BKaKzdnb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-CB9xWoCD.js
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		title: "Diverse types of coupling trends in tree and non-tree vegetation composition in key forest ecosystems of Bangladesh",
		status: "Active",
		sponsor: "Research Initiative",
		period: "Ongoing",
		summary: "A focused study on vegetation composition and ecological coupling patterns in important forest ecosystems across Bangladesh."
	},
	{
		title: "Landuse change and river dynamics in Bangladesh",
		status: "Active",
		sponsor: "Geospatial Research",
		period: "Ongoing",
		summary: "Examining fluvial morphodynamics and landuse transformation using remote sensing and GIS techniques in the Jamuna and related river systems."
	},
	{
		title: "Coastal and island environmental monitoring",
		status: "Active",
		sponsor: "Environmental Monitoring",
		period: "Ongoing",
		summary: "Research on marine debris, coastal change, and environmental conditions in offshore and coastal settings of Bangladesh."
	}
];
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Research",
		title: "Projects",
		description: "Research programs and academic investigations led through the GEE Lab and its faculty profile."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-academic py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-6",
			children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md border-l-4 border-accent bg-card p-6 shadow-sm ring-1 ring-border md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-full px-3 py-1 text-xs font-semibold ${p.status === "Active" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
							children: p.status
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: [
								p.period,
								" · ",
								p.sponsor
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-serif text-2xl font-bold text-primary",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-foreground md:text-base",
						children: p.summary
					})
				]
			}, p.title))
		})
	})] });
}
//#endregion
export { ProjectsPage as component };
