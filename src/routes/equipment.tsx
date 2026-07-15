import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Equipment | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Field and computing equipment operated by the Geospatial Research Lab.",
      },
    ],
  }),
  component: EquipmentPage,
});

function EquipmentPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Infrastructure"
        title="Equipment"
        description="Instrumentation and computing infrastructure available to lab members and collaborators."
      />
      <section className="container-academic py-16">
        <div className="rounded-md border border-border bg-card p-8 text-center shadow-sm">
          <p className="text-base font-medium text-foreground">No equipment details yet.</p>
        </div>
      </section>
    </PageLayout>
  );
}
