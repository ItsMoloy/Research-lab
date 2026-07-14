import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Undergraduate and graduate courses taught by lab faculty.",
      },
    ],
  }),
  component: TeachingPage,
});

const courses = [
  {
    code: "GEE 0532 5213",
    title: "Coastal Geography and Environment",
    level: "MS 2nd Semester",
    term: "Theory",
    desc: "3 credits · 2 semesters",
  },
  {
    code: "GEE 0532 5123",
    title: "Paleogeography and Paleoenvironment",
    level: "MS 1st Semester",
    term: "Theory",
    desc: "3 credits · Ongoing",
  },
  {
    code: "GEE 0532 4133",
    title: "Climatology II",
    level: "4th Year 1st Semester",
    term: "Theory",
    desc: "2 credits · 1 semester",
  },
  {
    code: "GEE 0532 3243",
    title: "Climatology II",
    level: "3rd Year 2nd Semester",
    term: "Theory",
    desc: "3 credits · 2 semesters",
  },
  {
    code: "GEE 0532 3137",
    title: "Advanced Geographical Information System",
    level: "3rd Year 1st Semester",
    term: "Theory",
    desc: "3 credits · 3 semesters",
  },
  {
    code: "SPS 0532 5112",
    title: "Application of Unmanned Aerial Vehicle (UAV, DRONE)",
    level: "MS 1st Semester",
    term: "Lab",
    desc: "3 credits · Ongoing",
  },
  {
    code: "SPS 0532 5101",
    title: "Techniques in Physical Geography",
    level: "MS 1st Semester",
    term: "Lab",
    desc: "3 credits · 1 semester",
  },
  {
    code: "GEE 0532 4262",
    title: "Application of Remote Sensing and GIS",
    level: "4th Year 2nd Semester",
    term: "Lab",
    desc: "3 credits · 2 semesters",
  },
  {
    code: "GEE 0532 4152",
    title: "Land Use and Land Cover Survey",
    level: "4th Year 1st Semester",
    term: "Lab",
    desc: "2 credits · 2 semesters",
  },
  {
    code: "GEE 0532 2264",
    title: "Practical in Physical Geography",
    level: "2nd Year 2nd Semester",
    term: "Lab",
    desc: "3 credits · Ongoing",
  },
  {
    code: "GEE 0532 2152",
    title: "Geodetic Surveying",
    level: "2nd Year 1st Semester",
    term: "Lab",
    desc: "3 credits · 1 semester",
  },
  {
    code: "GEE 0532 2154",
    title: "Introduction to GIS and Computer Technique",
    level: "2nd Year 1st Semester",
    term: "Lab",
    desc: "3 credits · 3 semesters",
  },
];

const studentSupervision = [
  {
    name: "Fariha Farhat Ahmed",
    reg: "2020135017",
    status: "Ongoing",
    title: "Assessing the Coral Biodiversity of Saint Martin’s Island through UAV-based Remote Sensing",
    degree: "B. Sc. Project",
    year: "2025",
  },
  {
    name: "Amisha Das Roy",
    reg: "2020135006",
    status: "Ongoing",
    title: "Individual Tree Crown (ITC) Identification: A Machine Learning Framework for Species-Level Mapping using UAV-RGB Imagery",
    degree: "B. Sc. Project",
    year: "2025",
  },
  {
    name: "Sk. Tanjim Jaman Supto",
    reg: "2020135071",
    status: "Ongoing",
    title: "Mapping Microclimatic Blocks to Mitigate Urban Heat Stress: Evidence-Based Planning Solutions for a Divisional City in Bangladesh",
    degree: "B. Sc. Project",
    year: "2025",
  },
  {
    name: "Tanusree Debnath",
    reg: "2020135034",
    status: "Ongoing",
    title: "Comparative Analysis of Microplastic Sequestration in Terrestrial and Freshwater Swamp Forests: A Case Study of Lawachara and Ratargul, Bangladesh",
    degree: "B. Sc. Project",
    year: "2025",
  },
  {
    name: "Bedatraye Chanda",
    reg: "2020135066",
    status: "Ongoing",
    title: "Historical Cyclone Dynamics and Socio-Ecological Vulnerability: A Retrospective Study of Coastal Bangladesh",
    degree: "B. Sc. Project",
    year: "2025",
  },
  {
    name: "Tasnim Hasan Khan",
    reg: "2022125015",
    status: "Completed",
    title: "Mud Crab Aquaculture in the Coastal Regions of Bangladesh: Patterns and Opportunities",
    degree: "M. Sc. Project",
    year: "2024",
  },
  {
    name: "Tanjia Jahan Moni",
    reg: "2019135155",
    status: "Completed",
    title: "Geography of Recreation: Economic Valuation Using Travel Cost Method and Pattern Analysis in Lawachara National Park, Bangladesh",
    degree: "B. Sc. Project",
    year: "2024",
  },
  {
    name: "Md. Tanzilur Rahman Meraz",
    reg: "2018135137",
    status: "Completed",
    title: "Detailed Land Use Map Preparation and Tree Vegetation Survey of Shahjalal University of Science and Technology Campus",
    degree: "B. Sc. Project",
    year: "2024",
  },
];

function TeachingPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Curriculum"
        title="Teaching"
        description="Courses taught by Md. Mahin Uddin within the Department of Geography and Environment at SUST."
      />
      <section className="container-academic py-16">
        <div className="overflow-hidden rounded-md border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Code</th>
                <th className="px-5 py-3 font-semibold">Course</th>
                <th className="hidden px-5 py-3 font-semibold md:table-cell">Level</th>
                <th className="hidden px-5 py-3 font-semibold md:table-cell">Term</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr
                  key={c.code}
                  className={i % 2 === 0 ? "bg-card" : "bg-secondary/40"}
                >
                  <td className="px-5 py-4 font-semibold text-primary">{c.code}</td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-foreground">{c.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.desc}</div>
                    <div className="mt-1 text-xs text-muted-foreground md:hidden">
                      {c.level} · {c.term}
                    </div>
                  </td>
                  <td className="hidden px-5 py-4 text-muted-foreground md:table-cell">
                    {c.level}
                  </td>
                  <td className="hidden px-5 py-4 text-muted-foreground md:table-cell">
                    {c.term}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-academic pb-16">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Student Supervision
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            Supervised undergraduate and graduate research projects
          </h2>
        </div>

        <div className="space-y-3">
          {studentSupervision.map((item) => (
            <article
              key={item.reg}
              className="rounded-lg border border-border bg-card/70 p-5 shadow-sm transition-colors hover:border-primary/40 hover:bg-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Reg: {item.reg}</p>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-foreground">{item.title}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary/70 px-2.5 py-1">
                  {item.degree}
                </span>
                <span className="rounded-full bg-secondary/70 px-2.5 py-1">
                  {item.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
