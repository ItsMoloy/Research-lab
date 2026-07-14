import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageLayout, t as PageHeader } from "./PageLayout-fhxhr9hD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/publications-BgW4ctHG.js
var import_jsx_runtime = require_jsx_runtime();
var publications = {
	"2024": [{
		authors: "Uddin, M. M., Mia, M. B., Gazi, M. Y., & Kamal, A. M.",
		title: "Quantification of landuse changes driven by the dynamics of the Jamuna River, a giant tropical river of Bangladesh.",
		venue: "The Egyptian Journal of Remote Sensing and Space Sciences, 27(2), 392–402.",
		doi: "10.1016/j.ejrs.2024.04.004"
	}, {
		authors: "Habib, M. H. R., Rahman, M., Uddin, M. M., Shimu, N. J., Hasan, M., Alam, M. J., & Islam, M. S.",
		title: "Application of AHP and geospatial technologies to assess ecotourism suitability: A case study of Saint Martin's Island in Bangladesh.",
		venue: "Regional Studies in Marine Science, 70, 103357.",
		doi: "10.1016/j.rsma.2023.103357"
	}],
	"2023": [
		{
			authors: "Uddin, M. M., & Islam, M. S.",
			title: "Floating marine debris influx in the intertidal zone of offshore islands in Bangladesh: A case study of Manpura Island.",
			venue: "Marine Pollution Bulletin, 197, 115723.",
			doi: "10.1016/j.marpolbul.2023.115723"
		},
		{
			authors: "Gazi, M. Y., Haque, M. I. M., Alam, M. Z., & Uddin, M. M.",
			title: "Spatiotemporal landuse dynamics driven by socioeconomic context in the southwestern coastal districts of Bangladesh.",
			venue: "Ocean & Coastal Management, 245, 106859.",
			doi: "10.1016/j.ocecoaman.2023.106859"
		},
		{
			authors: "Kamal, A. M., Al-Montakim, M. N., Hasan, M. A., Mitu, M. M. P., Gazi, M. Y., Uddin, M. M., & Mia, M. B.",
			title: "Relationship between Urban Environmental Components and Dengue Prevalence in Dhaka City—An Approach of Spatial Analysis of Satellite Remote Sensing, Hydro-Climatic, and Census Dengue Data.",
			venue: "International Journal of Environmental Research and Public Health, 20(5), 3858.",
			doi: "10.3390/ijerph20053858"
		}
	],
	"2022": [{
		authors: "Siddique, S., & Uddin, M. M.",
		title: "Green space dynamics in response to rapid urbanization: Patterns, transformations and topographic influence in Chattogram city, Bangladesh.",
		venue: "Land Use Policy, 114, 105974."
	}],
	"2021": [{
		authors: "Gazi, M. Y., Rahman, M. Z., Uddin, M. M., & Rahman, F. A.",
		title: "Spatio-temporal dynamic land cover changes and their impacts on the urban thermal environment in the Chittagong metropolitan area, Bangladesh.",
		venue: "GeoJournal, 86, 2119–2134.",
		doi: "10.1007/s10708-020-10178-4"
	}],
	"2020": [{
		authors: "Gazi, M. Y., Hossain, F., Sadeak, S., & Uddin, M. M.",
		title: "Spatiotemporal variability of channel and bar morphodynamics in the Gorai-Madhumati River, Bangladesh using remote sensing and GIS techniques.",
		venue: "Frontiers of Earth Science, 14, 828–841.",
		doi: "10.1007/s11707-020-0827-z"
	}]
};
function PublicationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Scholarship",
		title: "Publications",
		description: "Selected peer-reviewed publications and research outputs associated with Md. Mahin Uddin and the GEE Lab."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-academic py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-12",
			children: Object.entries(publications).sort(([a], [b]) => Number(b) - Number(a)).map(([year, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-baseline gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold text-primary",
					children: year
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-5",
				children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l-2 border-accent pl-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: p.authors
							}),
							" (",
							year,
							").",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: p.title }),
							" ",
							p.venue,
							p.doi && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://doi.org/${p.doi}`,
								className: "link-underline",
								target: "_blank",
								rel: "noreferrer",
								children: ["https://doi.org/", p.doi]
							})] })
						]
					})
				}, i))
			})] }, year))
		})
	})] });
}
//#endregion
export { PublicationsPage as component };
