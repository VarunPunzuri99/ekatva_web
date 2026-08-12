import { Helmet } from "react-helmet-async";
import { EventsGrid } from "@/components/events/EventsGrid";
import { EventsHero } from "@/components/events/EventsHero";

export function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Events | Ekatva</title>
        <meta
          name="description"
          content="Ekatva Events — stay connected with divine celebrations, rituals, discourses and spiritual talks happening around you and online."
        />
      </Helmet>
      <main className="bg-white" style={{ backgroundColor: "#FFFFFF" }}>
        <EventsHero />
        <EventsGrid />
      </main>
    </>
  );
}
