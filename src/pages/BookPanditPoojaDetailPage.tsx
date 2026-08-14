import { Helmet } from "react-helmet-async";
import { Link, useLocation, useParams } from "react-router-dom";
import { CatalogPoojaBookingBar } from "@/components/book-pandit/detail/CatalogPoojaBookingBar";
import { CatalogPoojaHero } from "@/components/book-pandit/detail/CatalogPoojaHero";
import { EventPoojaAbout } from "@/components/events/detail/EventPoojaAbout";
import { EventPoojaBenefits } from "@/components/events/detail/EventPoojaBenefits";
import { EventPoojaIdealFor } from "@/components/events/detail/EventPoojaIdealFor";
import { EventPoojaIntroMeta } from "@/components/events/detail/EventPoojaIntroMeta";
import { EventPoojaSamagri } from "@/components/events/detail/EventPoojaSamagri";
import { EventPoojaTabs } from "@/components/events/detail/EventPoojaTabs";
import { EventPoojaVideo } from "@/components/events/detail/EventPoojaVideo";
import { HomeAppCta } from "@/components/home/HomeAppCta";
import { useCatalogPoojaDetail } from "@/hooks/useCatalogPoojaDetail";

function DetailSkeleton() {
  return (
    <main className="bg-white pb-24">
      <div className="h-[220px] animate-pulse bg-gradient-to-r from-[#FFE9B8] via-[#FFF6E4] to-white sm:h-[260px]" />
      <div className="mx-auto max-w-[920px] px-4 py-10 sm:px-6">
        <div className="mx-auto h-16 w-3/4 animate-pulse rounded bg-[#F3EDE4]" />
        <div className="mt-8 h-40 animate-pulse rounded-[18px] bg-[#FEF5E7]" />
        <div className="mt-8 space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-[#F3EDE4]" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-[#F3EDE4]" />
          <div className="h-4 w-4/6 animate-pulse rounded bg-[#F3EDE4]" />
        </div>
      </div>
    </main>
  );
}

export function BookPanditPoojaDetailPage() {
  const { poojaId } = useParams<{ poojaId: string }>();
  const { pathname } = useLocation();
  const fromEpuja = pathname.startsWith("/epuja");
  const { detail, loading, error, refetch } = useCatalogPoojaDetail(poojaId);

  if (loading && !detail) {
    return <DetailSkeleton />;
  }

  if (error && !detail) {
    return (
      <main className="bg-white">
        <div className="mx-auto max-w-[640px] px-4 py-20 text-center sm:px-6">
          <h1 className="font-home text-[1.5rem] font-bold text-[#8B2E28]">
            Pooja unavailable
          </h1>
          <p className="mt-3 font-home text-[14px] text-[#6B7280]">{error}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={refetch}
              className="rounded-lg bg-[#F27022] px-5 py-2.5 font-home text-[14px] font-semibold text-white"
            >
              Try again
            </button>
            <Link
              to={fromEpuja ? "/epuja/poojas" : "/book-pandit"}
              className="rounded-lg border border-[#E8D5C0] px-5 py-2.5 font-home text-[14px] font-semibold text-[#F27022]"
            >
              {fromEpuja ? "Back to All Pujas" : "Back to ePandit"}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!detail) return null;

  return (
    <>
      <Helmet>
        <title>
          {detail.event.title} | {fromEpuja ? "ePuja" : "ePandit"} | Ekatva
        </title>
        <meta
          name="description"
          content={
            detail.intro ||
            `${detail.event.title} — book authentic Vedic rituals with verified pandits on Ekatva.`
          }
        />
      </Helmet>
      <main className="bg-white pb-24">
        <CatalogPoojaHero detail={detail} />
        <EventPoojaIntroMeta detail={detail} />
        <EventPoojaAbout detail={detail} />
        <EventPoojaBenefits detail={detail} />
        <EventPoojaSamagri detail={detail} />
        <EventPoojaIdealFor detail={detail} />
        <EventPoojaVideo detail={detail} />
        <EventPoojaTabs detail={detail} />
        <HomeAppCta
          title={
            fromEpuja
              ? "Begin Your Sacred Journey"
              : "Book Your Pandit with Ease"
          }
          subtitle={
            fromEpuja
              ? "Download Ekatva to book authentic Vedic pujas with verified pandits."
              : "Download Ekatva to schedule authentic pujas, homams and ceremonies with verified pandits."
          }
        />
      </main>
      <CatalogPoojaBookingBar detail={detail} />
    </>
  );
}
