import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-fhxhr9hD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/teaching-3AgJGLpB.js
var import_jsx_runtime = require_jsx_runtime();
var courses = [
	{
		code: "GEE 0532 5213",
		title: "Coastal Geography and Environment",
		level: "MS 2nd Semester",
		term: "Theory",
		desc: "3 credits · 2 semesters"
	},
	{
		code: "GEE 0532 5123",
		title: "Paleogeography and Paleoenvironment",
		level: "MS 1st Semester",
		term: "Theory",
		desc: "3 credits · Ongoing"
	},
	{
		code: "GEE 0532 4133",
		title: "Climatology II",
		level: "4th Year 1st Semester",
		term: "Theory",
		desc: "2 credits · 1 semester"
	},
	{
		code: "GEE 0532 3243",
		title: "Climatology II",
		level: "3rd Year 2nd Semester",
		term: "Theory",
		desc: "3 credits · 2 semesters"
	},
	{
		code: "GEE 0532 3137",
		title: "Advanced Geographical Information System",
		level: "3rd Year 1st Semester",
		term: "Theory",
		desc: "3 credits · 3 semesters"
	},
	{
		code: "SPS 0532 5112",
		title: "Application of Unmanned Aerial Vehicle (UAV, DRONE)",
		level: "MS 1st Semester",
		term: "Lab",
		desc: "3 credits · Ongoing"
	},
	{
		code: "SPS 0532 5101",
		title: "Techniques in Physical Geography",
		level: "MS 1st Semester",
		term: "Lab",
		desc: "3 credits · 1 semester"
	},
	{
		code: "GEE 0532 4262",
		title: "Application of Remote Sensing and GIS",
		level: "4th Year 2nd Semester",
		term: "Lab",
		desc: "3 credits · 2 semesters"
	},
	{
		code: "GEE 0532 4152",
		title: "Land Use and Land Cover Survey",
		level: "4th Year 1st Semester",
		term: "Lab",
		desc: "2 credits · 2 semesters"
	},
	{
		code: "GEE 0532 2264",
		title: "Practical in Physical Geography",
		level: "2nd Year 2nd Semester",
		term: "Lab",
		desc: "3 credits · Ongoing"
	},
	{
		code: "GEE 0532 2152",
		title: "Geodetic Surveying",
		level: "2nd Year 1st Semester",
		term: "Lab",
		desc: "3 credits · 1 semester"
	},
	{
		code: "GEE 0532 2154",
		title: "Introduction to GIS and Computer Technique",
		level: "2nd Year 1st Semester",
		term: "Lab",
		desc: "3 credits · 3 semesters"
	}
];
function TeachingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Curriculum",
		title: "Teaching",
		description: "Courses taught by Md. Mahin Uddin within the Department of Geography and Environment at SUST."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-academic py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-md border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Code"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Course"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "hidden px-5 py-3 font-semibold md:table-cell",
							children: "Level"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "hidden px-5 py-3 font-semibold md:table-cell",
							children: "Term"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: courses.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: i % 2 === 0 ? "bg-card" : "bg-secondary/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-4 font-semibold text-primary",
							children: c.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-5 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-muted-foreground",
									children: c.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-xs text-muted-foreground md:hidden",
									children: [
										c.level,
										" · ",
										c.term
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "hidden px-5 py-4 text-muted-foreground md:table-cell",
							children: c.level
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "hidden px-5 py-4 text-muted-foreground md:table-cell",
							children: c.term
						})
					]
				}, c.code)) })]
			})
		})
	})] });
}
//#endregion
export { TeachingPage as component };
