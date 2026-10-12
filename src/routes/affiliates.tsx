import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/affiliates")({
    component: Affiliates,
});

function Affiliates() {
    return (
        <PageLayout>
            <div className="container-academic py-20">
                <h1 className="font-serif text-4xl font-bold text-primary mb-8">Affiliates</h1>
                <p className="text-muted-foreground">Information about our affiliates will be available soon.</p>
            </div>
        </PageLayout>
    );
}
