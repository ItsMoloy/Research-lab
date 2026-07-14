import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, i as MapPin, n as Phone, o as Linkedin, r as Menu, s as Facebook, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageLayout-fhxhr9hD.js
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
		label: "Teaching"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-navy-deep text-parchment",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-academic flex h-8 items-center justify-between text-xs tracking-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-90",
						children: "SUST · Department of Geography and Environment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.sust.edu",
						className: "opacity-80 hover:opacity-100",
						target: "_blank",
						rel: "noreferrer",
						children: "sust.edu"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-academic flex h-20 items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-lg font-bold",
								children: "GEE"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-serif text-lg font-bold text-primary",
								children: "GEE Lab"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-xs text-muted-foreground",
								children: "Geography and Environmental Engineering"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
							activeProps: { className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" },
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 bg-navy-deep text-parchment",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-academic grid gap-10 py-14 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-xl font-bold",
							children: "Geography and Environmental Engineering Lab"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm leading-relaxed text-parchment/80",
							children: "Advancing remote sensing, GIS, and environmental monitoring for coastal, agricultural, and wetland research in Bangladesh and beyond."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2 text-sm text-parchment/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-accent" }), "Department of Geography and Environment, Shahjalal University of Science and Technology, Sylhet, Bangladesh"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+880XXXXXXXXXX",
										className: "hover:text-accent",
										children: "+880 XXXXXXXXXX"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:gee-lab@sust.edu",
										className: "hover:text-accent",
										children: "gee-lab@sust.edu"
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold uppercase tracking-wider text-accent",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						{
							to: "/team",
							label: "Team"
						},
						{
							to: "/projects",
							label: "Projects"
						},
						{
							to: "/publications",
							label: "Publications"
						},
						{
							to: "/teaching",
							label: "Teaching"
						},
						{
							to: "/news",
							label: "News"
						}
					].map(({ to, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "text-parchment/80 hover:text-accent",
						children: label
					}) }, to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold uppercase tracking-wider text-accent",
						children: "Connect"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://facebook.com",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Facebook",
							className: "grid h-9 w-9 place-items-center rounded-md border border-parchment/20 text-parchment/80 hover:border-accent hover:text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://linkedin.com",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "LinkedIn",
							className: "grid h-9 w-9 place-items-center rounded-md border border-parchment/20 text-parchment/80 hover:border-accent hover:text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-2 text-xs text-parchment/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-accent",
								children: "Accessibility"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-accent",
								children: "Privacy Policy"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-accent",
								children: "Title IX"
							}) })
						]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-academic flex flex-col items-start justify-between gap-2 py-5 text-xs text-parchment/70 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" GEE Lab, Department of Geography and Environment, SUST. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Shahjalal University of Science and Technology · Sylhet, Bangladesh." })]
			})
		})]
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-secondary/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-academic py-14 md:py-20",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/70",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl font-bold text-primary md:text-5xl",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-1 w-16 bg-accent" })
			]
		})
	});
}
//#endregion
export { PageLayout as n, PageHeader as t };
