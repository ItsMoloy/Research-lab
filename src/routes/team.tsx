import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";
import { faculty } from "@/lib/faculty";
import { useState } from "react";

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

function ProfileCard({ person }: { person: typeof faculty }) {
  const [bioExpanded, setBioExpanded] = useState(false);
  const bioPreviewLength = 150;
  const isLongBio = person.bio.length > bioPreviewLength;

  return (
    <article className="flex flex-col md:flex-row gap-8">
      <div className="shrink-0">
        <img
          src="/faculty.jpg"
          alt={person.name}
          className="w-full md:w-56 h-auto object-cover rounded-sm border border-border/50 shadow-sm"
        />
      </div>
      <div className="flex-1 space-y-3 text-foreground/90 leading-relaxed text-[15px]">
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/cv" className="font-serif text-2xl font-bold text-primary hover:underline">
            {person.name}
          </Link>
          <a
            href={person.webpage}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-3 py-1 text-[13px] font-medium text-primary transition-colors hover:bg-primary/10"
          >
            Webpage
          </a>
        </div>

        <p className="text-base transition-all duration-300">
          {isLongBio && !bioExpanded ? (
            <>
              {person.bio.substring(0, bioPreviewLength)}...
              <button
                onClick={() => setBioExpanded(true)}
                className="text-primary font-medium hover:underline ml-1"
              >
                See more
              </button>
            </>
          ) : (
            <>
              {person.bio}
              {isLongBio && (
                <button
                  onClick={() => setBioExpanded(false)}
                  className="text-primary font-medium hover:underline ml-1"
                >
                  See less
                </button>
              )}
            </>
          )}
        </p>

        <div className="pt-1 space-y-1 text-sm text-foreground/80">
          <div className="flex gap-2">
            <span className="font-semibold">Phone:</span>
            <a href={`tel:${person.phone}`} className="hover:underline">
              {person.phone}
            </a>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Email:</span>
            <a href={`mailto:${person.email}`} className="hover:underline">
              {person.email}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function TeamPage() {
  return (
    <PageLayout>
      <PageHeader title="Team" />
      <section className="container-academic mx-auto px-4 py-16 max-w-5xl">

        {/* Lab Supervisor */}
        <h2 className="mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2">
          Lab Supervisor
        </h2>
        <ProfileCard person={faculty} />

        {/* Lab In Charge */}
        <h2 className="mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2">
          Lab In Charge
        </h2>
        <ProfileCard person={faculty} />

        {/* Lab Members */}
        <h2 className="mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2">
          Lab Members
        </h2>
        <ProfileCard person={faculty} />

        {/* Lab Interns */}
        <h2 className="mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2">
          Lab Interns
        </h2>
        <ProfileCard person={faculty} />

        {/* Lab Alumni */}
        <h2 className="mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2">
          Lab Alumni
        </h2>
        <ProfileCard person={faculty} />

        {/* Contributing Scholar */}
        <h2 className="mt-16 mb-6 font-serif text-3xl font-bold text-primary border-b border-border pb-2">
          Contributing Scholar
        </h2>
        <ProfileCard person={faculty} />

      </section>
    </PageLayout>
  );
}
