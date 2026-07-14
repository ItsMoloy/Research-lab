import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-BKaKzdnb.mjs";
import { t as faculty } from "./faculty-Durkhe5t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cv-BBWElZhA.js
var import_jsx_runtime = require_jsx_runtime();
function CvPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Academic Profile",
		title: "Curriculum Vitae",
		description: "Detailed CV for Md. Mahin Uddin, Lecturer, Department of Geography and Environment, SUST."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-academic py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-md border border-border bg-card p-6 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-start md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold text-primary",
						children: faculty.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
						children: faculty.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm leading-relaxed text-foreground",
						children: faculty.bio
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: faculty.webpage,
					target: "_blank",
					rel: "noreferrer",
					className: "rounded-full border border-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10",
					children: "Webpage"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.contact.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Education"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Research Interests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.interests.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Training & Workshops"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.trainingAndWorkshops.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Fellowships"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.fellowships.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Employment / Experience"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Scientific Articles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-3 text-sm text-foreground",
							children: faculty.scientificArticles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Conference Presentations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-3 text-sm text-foreground",
							children: faculty.conferencePresentations.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Student Supervision"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.studentSupervision.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Research Projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.projects.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Research Project, Grants"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.grants.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "University / Institutional Service"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.service.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Teaching"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.teaching.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Profiles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-foreground",
							children: faculty.profiles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: item
							}, item))
						})] })
					]
				})]
			})]
		})
	})] });
}
//#endregion
export { CvPage as component };
