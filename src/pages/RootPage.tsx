import { SEO } from "@/components/layout/SEO";
import { ComingSoonPage } from "@/components/sections/ComingSoonPage";
import { useWebLaunchStatus } from "@/hooks/useWebLaunchStatus";
import { HomePage } from "@/pages/HomePage";

/**
 * Root gate for `/`:
 * - Active Web launch codes exist → Coming Soon
 * - None → main Home (website already launched)
 */
export function RootPage() {
  const { loading, webPending, error, refetch } = useWebLaunchStatus();

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#FFF8F0]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-pulse rounded-full bg-[#F27022]/35" />
          <p className="mt-4 font-home text-sm text-[#78716C]">Loading Ekatva…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#FFF8F0] px-4">
        <div className="max-w-md rounded-2xl border border-[#E7E5E4] bg-white p-6 text-center shadow-sm">
          <p className="font-home text-[15px] font-semibold text-[#1A1A1A]">
            Unable to load launch status
          </p>
          <p className="mt-2 font-home text-[13px] text-[#78716C]">{error}</p>
          <button
            type="button"
            onClick={refetch}
            className="mt-5 rounded-full bg-[#F27022] px-5 py-2.5 font-home text-[13px] font-semibold text-white"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (webPending) {
    return (
      <>
        <SEO />
        <ComingSoonPage />
      </>
    );
  }

  return <HomePage />;
}
