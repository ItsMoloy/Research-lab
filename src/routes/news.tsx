import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Announcements, grants, awards, and lab updates.",
      },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Announcements"
        title="News"
        description="Grants, publications, awards, and lab activities."
      />
      <section className="container-academic py-16">
        <div className="mx-auto max-w-3xl rounded-md border border-border bg-card p-8 text-center shadow-sm">
          <p className="text-base font-medium text-foreground">No news still now.</p>
        </div>
      </section>
    </PageLayout>
  );
}
