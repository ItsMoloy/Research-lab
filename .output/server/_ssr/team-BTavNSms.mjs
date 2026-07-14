import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-BKaKzdnb.mjs";
import { t as faculty } from "./faculty-Durkhe5t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-BTavNSms.js
var import_jsx_runtime = require_jsx_runtime();
function TeamPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Our People",
		title: "Team",
		description: "Faculty and researchers of the Geography and Environmental Engineering Lab working at the intersection of GIS, remote sensing, and environmental monitoring."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-academic py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-md border border-border bg-card p-6 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/faculty.jpg",
					alt: faculty.name,
					className: "h-48 w-full rounded-md object-cover md:w-48"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl font-bold text-primary",
									children: faculty.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: faculty.webpage,
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-full border border-border px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/10",
									children: "Webpage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/cv",
									className: "rounded-full border border-border px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/10",
									children: "CV"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: faculty.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-foreground",
							children: faculty.bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Office:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: faculty.office })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Phone:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${faculty.phone}`,
										className: "link-underline",
										children: faculty.phone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Email:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${faculty.email}`,
										className: "link-underline",
										children: faculty.email
									})]
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-serif text-lg font-semibold text-primary",
					children: "Education"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-foreground",
					children: faculty.education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "leading-relaxed",
						children: item
					}, item))
				})]
			})]
		})
	})] });
}
//#endregion
export { TeamPage as component };
