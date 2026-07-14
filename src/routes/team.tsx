import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";
import { faculty } from "@/lib/faculty";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team | GEE Lab" },
      {
        name: "description",
        content:
          "Meet the faculty and researchers of the Geography and Environmental Engineering Lab at SUST.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Our People"
        title="Team"
        description="Faculty and researchers of the Geography and Environmental Engineering Lab working at the intersection of GIS, remote sensing, and environmental monitoring."
      />
      <section className="container-academic py-16">
        <article className="rounded-md border border-border bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row">
            <img
              src="/faculty.jpg"
              alt={faculty.name}
              className="h-48 w-full rounded-md object-cover md:w-48"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-2xl font-bold text-primary">{faculty.name}</h3>
                <a
                  href={faculty.webpage}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  Webpage
                </a>
                <a
                  href="/cv"
                  className="rounded-full border border-border px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  CV
                </a>
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {faculty.role}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{faculty.bio}</p>
              <div className="mt-5 space-y-2 text-sm">
                <div className="flex gap-2 text-foreground">
                  <span className="font-semibold">Office:</span>
                  <span>{faculty.office}</span>
                </div>
                <div className="flex gap-2 text-foreground">
                  <span className="font-semibold">Phone:</span>
                  <a href={`tel:${faculty.phone}`} className="link-underline">
                    {faculty.phone}
                  </a>
                </div>
                <div className="flex gap-2 text-foreground">
                  <span className="font-semibold">Email:</span>
                  <a href={`mailto:${faculty.email}`} className="link-underline">
                    {faculty.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-serif text-lg font-semibold text-primary">Education</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              {faculty.education.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

      </section>
    </PageLayout>
  );
}
