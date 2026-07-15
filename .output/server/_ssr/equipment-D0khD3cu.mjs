import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-BKaKzdnb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment-D0khD3cu.js
var import_jsx_runtime = require_jsx_runtime();
function EquipmentPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Infrastructure",
		title: "Equipment",
		description: "Instrumentation and computing infrastructure available to lab members and collaborators."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-academic py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-md border border-border bg-card p-8 text-center shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base font-medium text-foreground",
				children: "No equipment details yet."
			})
		})
	})] });
}
//#endregion
export { EquipmentPage as component };
