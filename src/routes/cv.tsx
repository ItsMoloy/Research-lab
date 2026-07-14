import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";
import { faculty } from "@/lib/faculty";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV | Md. Mahin Uddin" },
      {
        name: "description",
        content: "Curriculum vitae for Md. Mahin Uddin, lecturer at Shahjalal University of Science and Technology.",
      },
    ],
  }),
  component: CvPage,
});

function CvPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Academic Profile"
        title="Curriculum Vitae"
        description="Detailed CV for Md. Mahin Uddin, Lecturer, Department of Geography and Environment, SUST."
      />
      <section className="container-academic py-16">
        <article className="rounded-md border border-border bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary">{faculty.name}</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {faculty.role}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground">{faculty.bio}</p>
            </div>
            <a
              href={faculty.webpage}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              Webpage
            </a>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.contact.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Education</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.education.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Research Interests</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.interests.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Training & Workshops</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.trainingAndWorkshops.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Fellowships</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.fellowships.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Employment / Experience</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.experience.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Scientific Articles</h3>
                <ul className="mt-3 space-y-3 text-sm text-foreground">
                  {faculty.scientificArticles.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Conference Presentations</h3>
                <ul className="mt-3 space-y-3 text-sm text-foreground">
                  {faculty.conferencePresentations.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Student Supervision</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.studentSupervision.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Research Projects</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.projects.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Research Project, Grants</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.grants.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">University / Institutional Service</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.service.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Teaching</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.teaching.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Profiles</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.profiles.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>
    </PageLayout>
  );
}
