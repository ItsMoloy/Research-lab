import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-BKaKzdnb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/teaching-D9D__1Sf.js
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
var studentSupervision = [
	{
		name: "Fariha Farhat Ahmed",
		reg: "2020135017",
		status: "Ongoing",
		title: "Assessing the Coral Biodiversity of Saint Martin’s Island through UAV-based Remote Sensing",
		degree: "B. Sc. Project",
		year: "2025"
	},
	{
		name: "Amisha Das Roy",
		reg: "2020135006",
		status: "Ongoing",
		title: "Individual Tree Crown (ITC) Identification: A Machine Learning Framework for Species-Level Mapping using UAV-RGB Imagery",
		degree: "B. Sc. Project",
		year: "2025"
	},
	{
		name: "Sk. Tanjim Jaman Supto",
		reg: "2020135071",
		status: "Ongoing",
		title: "Mapping Microclimatic Blocks to Mitigate Urban Heat Stress: Evidence-Based Planning Solutions for a Divisional City in Bangladesh",
		degree: "B. Sc. Project",
		year: "2025"
	},
	{
		name: "Tanusree Debnath",
		reg: "2020135034",
		status: "Ongoing",
		title: "Comparative Analysis of Microplastic Sequestration in Terrestrial and Freshwater Swamp Forests: A Case Study of Lawachara and Ratargul, Bangladesh",
		degree: "B. Sc. Project",
		year: "2025"
	},
	{
		name: "Bedatraye Chanda",
		reg: "2020135066",
		status: "Ongoing",
		title: "Historical Cyclone Dynamics and Socio-Ecological Vulnerability: A Retrospective Study of Coastal Bangladesh",
		degree: "B. Sc. Project",
		year: "2025"
	},
	{
		name: "Tasnim Hasan Khan",
		reg: "2022125015",
		status: "Completed",
		title: "Mud Crab Aquaculture in the Coastal Regions of Bangladesh: Patterns and Opportunities",
		degree: "M. Sc. Project",
		year: "2024"
	},
	{
		name: "Tanjia Jahan Moni",
		reg: "2019135155",
		status: "Completed",
		title: "Geography of Recreation: Economic Valuation Using Travel Cost Method and Pattern Analysis in Lawachara National Park, Bangladesh",
		degree: "B. Sc. Project",
		year: "2024"
	},
	{
		name: "Md. Tanzilur Rahman Meraz",
		reg: "2018135137",
		status: "Completed",
		title: "Detailed Land Use Map Preparation and Tree Vegetation Survey of Shahjalal University of Science and Technology Campus",
		degree: "B. Sc. Project",
		year: "2024"
	}
];
function TeachingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Curriculum",
			title: "Teaching",
			description: "Courses taught by Md. Mahin Uddin within the Department of Geography and Environment at SUST."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-academic pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Student Supervision"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-semibold text-foreground",
					children: "Supervised undergraduate and graduate research projects"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: studentSupervision.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border border-border bg-card/70 p-5 shadow-sm transition-colors hover:border-primary/40 hover:bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-foreground",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: ["Reg: ", item.reg]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
								children: item.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-foreground",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary/70 px-2.5 py-1",
								children: item.degree
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary/70 px-2.5 py-1",
								children: item.year
							})]
						})
					]
				}, item.reg))
			})]
		})
	] });
}
//#endregion
export { TeachingPage as component };
