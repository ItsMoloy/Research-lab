import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Linkedin, r as Menu, s as Facebook, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageLayout-1F0pdk-5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/team",
		label: "Team"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/equipment",
		label: "Equipment"
	},
	{
		to: "/publications",
		label: "Publications"
	},
	{
		to: "/teaching",
		label: "Training"
	},
	{
		to: "/affiliates",
		label: "Affiliates"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/news",
		label: "News"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-academic flex h-16 items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-lg font-bold",
								children: "ATLAS"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0 leading-tight",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-serif text-lg font-bold text-primary",
								children: "ATLAS"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "rounded-md px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
							activeProps: { className: "rounded-md px-3 py-1.5 text-sm font-semibold text-primary bg-secondary" },
							activeOptions: { exact: item.to === "/" },
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "inline-flex items-center justify-center rounded-md p-2 text-primary lg:hidden",
						onClick: () => setOpen((v) => !v),
						"aria-label": "Toggle menu",
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-white lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "container-academic flex flex-col py-3",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary",
						activeProps: { className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" },
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full bg-accent" })
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-10 bg-[#4F4F4F] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-academic mx-auto px-4 py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 text-[13px] md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
							className: "not-italic",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.sust.edu",
									className: "block font-bold hover:text-[#B4AEA2] mb-1",
									children: "SUST Faculty Websites"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:webmaster@sust.edu",
										className: "font-bold hover:text-[#B4AEA2]",
										children: "webmaster@sust.edu"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "block font-bold hover:text-[#B4AEA2] mt-[10px]",
									children: "Report ADA Accessibility Concerns"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "block font-bold hover:text-[#B4AEA2] mt-[10px]",
									children: "Accessibility Statement"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "block font-bold hover:text-[#B4AEA2] mt-[10px]",
									children: "Notice of Non-Discrimination"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "block font-bold hover:text-[#B4AEA2] mt-[10px]",
									children: "Privacy Statement"
								})
							] })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "invisible",
							children: "\xA0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "flex justify-center gap-2 m-0 p-0 list-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://facebook.com",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:border-white hover:text-white transition-colors",
								"aria-label": "Facebook",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.linkedin.com/in/md-mahin-uddin-8515a1180/",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:border-white hover:text-white transition-colors",
								"aria-label": "LinkedIn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
							}) })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-4 lg:text-left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "SUST ATLAS Laboratory" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Phone Number" }), ": +880 XXXXXXXXXX"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Email" }), ": atlas-lab@sust.edu"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Address" }), ": Department of Geography and Environment, SUST, Sylhet, Bangladesh"]
							})
						] })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 border-t border-white/10 pt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "text-center text-xs font-normal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mb-[10px] max-w-4xl px-4 text-center",
						children: "The statements and opinions included on this site are those of the respective faculty and researchers only. Any statements and opinions included in these webpages are not those of Shahjalal University of Science and Technology."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
							className: "text-[12px]",
							children: [
								"Copyright © ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" ATLAS Lab. All Rights Reserved."
							]
						}) })
					})]
				})
			})]
		})
	});
}
function PageLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function PageHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[50vh] flex-col items-center justify-center bg-[#4F4F4F] text-white px-4 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-5xl font-bold md:text-7xl",
			children: title
		}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 max-w-2xl text-lg opacity-90 md:text-xl",
			children: description
		})]
	});
}
//#endregion
export { PageLayout as n, PageHeader as t };
