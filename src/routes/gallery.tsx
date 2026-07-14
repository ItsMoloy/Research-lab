import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Photographs from fieldwork, campaigns, and lab events.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Field & Events"
        title="Gallery"
        description="A visual record of fieldwork campaigns, workshops, and everyday lab life."
      />
      <section className="container-academic py-16">
        <div className="rounded-md border border-border bg-card p-8 text-center shadow-sm">
          <p className="text-base font-medium text-foreground">No gallery items yet.</p>
        </div>
      </section>
    </PageLayout>
  );
}
