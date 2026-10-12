import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-1F0pdk-5.mjs";
import { t as faculty } from "./faculty-Durkhe5t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-D8kNrt51.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfileCard({ person }) {
	const [bioExpanded, setBioExpanded] = (0, import_react.useState)(false);
	const bioPreviewLength = 150;
	const isLongBio = person.bio.length > bioPreviewLength;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col md:flex-row gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/faculty.jpg",
				alt: person.name,
				className: "w-full md:w-56 h-auto object-cover rounded-sm border border-border/50 shadow-sm"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 space-y-3 text-foreground/90 leading-relaxed text-[15px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cv",
						className: "font-serif text-2xl font-bold text-primary hover:underline",
						children: person.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: person.webpage,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-full border border-border px-3 py-1 text-[13px] font-medium text-primary transition-colors hover:bg-primary/10",
						children: "Webpage"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base transition-all duration-300",
					children: isLongBio && !bioExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						person.bio.substring(0, bioPreviewLength),
						"...",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setBioExpanded(true),
							className: "text-primary font-medium hover:underline ml-1",
							children: "See more"
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [person.bio, isLongBio && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setBioExpanded(false),
						className: "text-primary font-medium hover:underline ml-1",
						children: "See less"
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-1 space-y-1 text-sm text-foreground/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: "Phone:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${person.phone}`,
							className: "hover:underline",
							children: person.phone
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: "Email:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${person.email}`,
							className: "hover:underline",
							children: person.email
						})]
					})]
				})
			]
		})]
	});
}
function TeamPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: "Team" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-academic mx-auto px-4 py-16 max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2",
				children: "Lab Supervisor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { person: faculty }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2",
				children: "Lab In Charge"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { person: faculty }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2",
				children: "Lab Members"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { person: faculty }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2",
				children: "Lab Interns"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { person: faculty }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2",
				children: "Lab Alumni"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { person: faculty }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2",
				children: "Contributing Scholar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { person: faculty })
		]
	})] });
}
//#endregion
export { TeamPage as component };
