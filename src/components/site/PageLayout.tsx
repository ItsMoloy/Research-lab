import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative flex min-h-[30vh] flex-col items-center justify-center bg-[#4F4F4F] text-white px-4 text-center">
      <h1 className="font-serif text-5xl font-bold md:text-7xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-lg opacity-90 md:text-xl">
          {description}
        </p>
      )}
    </section>
  );
}
