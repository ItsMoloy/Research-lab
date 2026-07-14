import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Peer-reviewed publications from the Geospatial Research Lab.",
      },
    ],
  }),
  component: PublicationsPage,
});

const publications: Record<string, { authors: string; title: string; venue: string }[]> = {
  "2025": [
    {
      authors: "Hossain, F., Lupin, J. H., Uddin, M. M., Gazi, M. Y., Rahman, M. Z., & Kamal, A. M.",
      title: "Impact of Elevated Transportation Infrastructure on Urban Thermal Environment in Dhaka Megacity, Bangladesh.",
      venue: "Environmental Challenges, 101400.",
    },
    {
      authors: "Islam, M. A., Hossain, M. B., Hossain, M. E., Gazi, M. Y., Saha, B., & Uddin, M. M.",
      title: "Microplastics in agricultural soils: Evidence from an industrial suburb of Bangladesh.",
      venue: "Journal of Hazardous Materials Advances, 100928.",
    },
    {
      authors: "Islam, M. S., Uddin, M. M., & Debnath, P.",
      title: "Assessment of Floating Marine Debris Accumulation in the Intertidal Zone of Offshore Islands Using UAV: A Case of Manpura Island, Central Coast, Bangladesh.",
      venue: "The Dhaka University Journal of Earth and Environmental Sciences, 14(1), 101–111.",
    },
  ],
  "2024": [
    {
      authors: "Uddin, M. M., Mia, M. B., Gazi, M. Y., & Kamal, A. M.",
      title: "Quantification of landuse changes driven by the dynamics of the Jamuna River, a giant tropical river of Bangladesh.",
      venue: "The Egyptian Journal of Remote Sensing and Space Sciences, 27(2), 392–402.",
    },
    {
      authors: "Habib, M. H. R., Rahman, M., Uddin, M. M., Shimu, N. J., Hasan, M., Alam, M. J., & Islam, M. S.",
      title: "Application of AHP and geospatial technologies to assess ecotourism suitability: A case study of Saint Martin's Island in Bangladesh.",
      venue: "Regional Studies in Marine Science, 70, 103357.",
    },
    {
      authors: "Chowdhury, M., Daniel, O., Uddin, M. M., Shykot, R. R., & Mia, M. B.",
      title: "Spatiotemporal Assessment of Seasonal Water Quality and Quantity of the Peripheral Rivers of Dhaka City Using Multispectral Satellite Images.",
      venue: "Journal of Science and Technology Research, 6(2), 77–96.",
    },
  ],
  "2023": [
    {
      authors: "Uddin, M. M., & Islam, M. S.",
      title: "Floating marine debris influx in the intertidal zone of offshore islands in Bangladesh: A case study of Manpura Island.",
      venue: "Marine Pollution Bulletin, 197, 115723.",
    },
    {
      authors: "Gazi, M. Y., Haque, M. I. M., Alam, M. Z., & Uddin, M. M.",
      title: "Spatiotemporal landuse dynamics driven by socioeconomic context in the southwestern coastal districts of Bangladesh.",
      venue: "Ocean & Coastal Management, 245, 106859.",
    },
    {
      authors: "Kamal, A. M., Al-Montakim, M. N., Hasan, M. A., Mitu, M. M. P., Gazi, M. Y., Uddin, M. M., & Mia, M. B.",
      title: "Relationship between urban environmental components and dengue prevalence in Dhaka city—an approach of spatial analysis of satellite remote sensing, hydro-climatic, and census dengue data.",
      venue: "International Journal of Environmental Research and Public Health, 20(5), 3858.",
    },
  ],
  "2022": [
    {
      authors: "Siddique, S., & Uddin, M. M.",
      title: "Green space dynamics in response to rapid urbanization: Patterns, transformations and topographic influence in Chattogram city, Bangladesh.",
      venue: "Land Use Policy, 114, 105974.",
    },
    {
      authors: "Nabila, F. N., Mia, M. B., Gazi, M. Y., Uddin, M. M., Al Montakim, M. N., & Alam, M. M.",
      title: "Assessment of water quality and quantity in the lakes of Dhaka metropolitan city—remote sensing, field and laboratory analyses.",
      venue: "The Dhaka University Journal of Earth and Environmental Sciences, 11(1), 27–42.",
    },
  ],
  "2021": [
    {
      authors: "Gazi, M. Y., Rahman, M. Z., Uddin, M. M., & Rahman, F. A.",
      title: "Spatiotemporal dynamic land cover changes and their impacts on the urban thermal environment in the Chittagong metropolitan area, Bangladesh.",
      venue: "GeoJournal, 86(5), 2119–2134.",
    },
  ],
  "2020": [
    {
      authors: "Gazi, M. Y., Hossain, F., Sadeak, S., & Uddin, M. M.",
      title: "Spatiotemporal variability of channel and bar morphodynamics in the Gorai-Madhumati River, Bangladesh using remote sensing and GIS techniques.",
      venue: "Frontiers of Earth Science, 14(4), 828–841.",
    },
  ],
};

const conferencePresentations = [
  {
    authors: "Uddin, M. M. & Supto, S. T. J.",
    year: "2025",
    title: "Identifying sustainable Gracilaria farming zones in the Bay of Bengal to promote Bangladesh’s blue economy.",
    venue: "Poster Presentation. International Conference on Marine Fisheries and Blue Innovations: Safeguarding Ocean Harmony (MFBISOH 2025), CU, Chittagong, Bangladesh.",
  },
  {
    authors: "Khatun, S., Uddin, M. M., & Islam, M. A.",
    year: "2025",
    title: "Flash Flood Susceptibility Assessment in the Cumilla District, Bangladesh Using GIS and Multi-Criteria Analysis.",
    venue: "Paper Presentation. 1st International Conference on Geosciences for Achieving Sustainable Development Goals 2025 (ICGSDG 2025), RU, Rajshahi, Bangladesh.",
  },
  {
    authors: "Moni, T. J. & Uddin, M. M.",
    year: "2025",
    title: "Geography of Recreation: Economic Valuation Using Travel Cost Method and Pattern Analysis in Lawachara National Park, Bangladesh.",
    venue: "Paper Presentation. 1st International Conference on Geosciences for Achieving Sustainable Development Goals 2025 (ICGSDG 2025), RU, Rajshahi, Bangladesh.",
  },
  {
    authors: "Moni, T. J., & Uddin, M. M.",
    year: "2025",
    title: "Trends in forest tree and non-tree vegetation composition in Lawachara National Park, Bangladesh.",
    venue: "Poster Presentation. 1st International Conference on Environment and Climate Action (ICECA 2025), Asian University for Women, Chattogram, Bangladesh.",
  },
  {
    authors: "Paul, S., Muntahrin, S., Rudra, N. & Uddin, M. M.",
    year: "2025",
    title: "Morphological Evolution of Sandwip Island, Bangladesh: A Geospatial Approach.",
    venue: "Paper Presentation. 3rd International Conference on Life Sciences 2025 (ICALS 2025), MBSTU, Tangail, Bangladesh.",
  },
  {
    authors: "Uddin, M. M., Nur-E-Alam, M., Gazi, M. Y., Moni, T. J., & Hossain, S.",
    year: "2024",
    title: "Geospatial assessment of spatiotemporal riverbank dynamics and vulnerability in the upper Padma River region, Bangladesh.",
    venue: "Paper Presentation. 2nd International Seminar on Innovative Approaches in Geographical Research (IAGR 2024), Rampurhat College, West Bengal, India.",
  },
  {
    authors: "Uddin, M. M., Sku, I., Islam, M. S., & Haq, N. A.",
    year: "2023",
    title: "Impact of climate change on the cropping pattern in the coastal districts of Bangladesh: a case study in the Pirojpur district.",
    venue: "Paper Presentation. 9th International Conference on Water and Flood Management 2023 (ICWFM 2023), BUET, Dhaka, Bangladesh.",
  },
  {
    authors: "Islam, M. S., Uddin, M. M., & Debnath, P.",
    year: "2023",
    title: "An Autonomous Unmanned Aerial Vehicle (UAV) for Detecting Floating Marine Debris: Accumulation in the Intertidal Zone of Offshore Islands: A GIS-RS approach.",
    venue: "Paper Presentation. Special Conference on Bangladesh Haor, River and Beel: Problems and Solutions (2023), BAPA-BEN, DU, Dhaka, Bangladesh.",
  },
];

function PublicationsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Scholarship"
        title="Publications"
        description="Selected peer-reviewed publications and research outputs associated with Md. Mahin Uddin and the GEE Lab."
      />
      <section className="container-academic py-16">
        <div className="space-y-12">
          <div>
            <div className="mb-5 flex items-baseline gap-4">
              <h2 className="font-serif text-3xl font-bold text-primary">Scientific Articles</h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            {Object.entries(publications)
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(([year, items]) => (
                <div key={year} className="mb-8">
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{year}</h3>
                    <div className="h-px flex-1 bg-border/70" />
                  </div>
                  <ol className="space-y-4">
                    {items.map((p, i) => (
                      <li key={i} className="rounded-lg border border-border bg-card/70 p-4 shadow-sm">
                        <p className="text-sm leading-7 text-foreground">
                          <span className="font-semibold">{p.authors}</span> ({year}).{" "}
                          <em>{p.title}</em> {p.venue}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
          </div>

          <div>
            <div className="mb-5 flex items-baseline gap-4">
              <h2 className="font-serif text-3xl font-bold text-primary">Conference Presentations</h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ol className="space-y-4">
              {conferencePresentations.map((item, i) => (
                <li key={i} className="rounded-lg border border-border bg-card/70 p-4 shadow-sm">
                  <p className="text-sm leading-7 text-foreground">
                    <span className="font-semibold">{item.authors}</span> ({item.year}).{" "}
                    <em>{item.title}</em> {item.venue}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
