import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <section className="relative flex min-h-[45vh] items-center justify-center bg-[#4F4F4F] text-white">
        <h1 className="font-serif text-5xl font-bold md:text-7xl">
          ATLAS Lab
        </h1>
      </section>
    </PageLayout>
  );
}
