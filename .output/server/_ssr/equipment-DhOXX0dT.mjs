import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-BKaKzdnb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment-DhOXX0dT.js
var import_jsx_runtime = require_jsx_runtime();
var equipment = [
	{
		category: "Unmanned Aerial Systems",
		items: [
			"DJI Matrice 300 RTK with multispectral & thermal payloads",
			"DJI Phantom 4 Multispectral",
			"Wingtra One Gen II fixed-wing PPK UAV"
		]
	},
	{
		category: "Field Instruments",
		items: [
			"ASD FieldSpec 4 Hi-Res spectroradiometer",
			"Trimble R10 GNSS receivers (survey grade)",
			"FLIR Vue Pro thermal imaging kits"
		]
	},
	{
		category: "Computing",
		items: [
			"GPU workstations (NVIDIA RTX A6000 × 4)",
			"On-prem storage cluster (240 TB)",
			"Google Earth Engine & AWS Open Data access"
		]
	}
];
function EquipmentPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Infrastructure",
		title: "Equipment",
		description: "Instrumentation and computing infrastructure available to lab members and collaborators."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-academic py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
			children: equipment.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-xl font-bold text-primary",
						children: group.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-0.5 w-8 bg-accent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-sm text-foreground",
						children: group.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it })]
						}, it))
					})
				]
			}, group.category))
		})
	})] });
}
//#endregion
export { EquipmentPage as component };
