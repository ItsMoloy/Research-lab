import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <PageHeader title="ATLAS Lab" />
      <section className="container-academic py-16">
        <div className="rounded-md border border-border bg-card p-8 text-center shadow-sm">
          <p className="text-base font-medium text-foreground">
            No description yet.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
