import { Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { useWebLaunchStatus } from "@/hooks/useWebLaunchStatus";

/**
 * Feature routes require Web to be launched (no Active Web launch codes).
 * Otherwise redirect to `/` (Coming Soon).
 */
export function LaunchRequiredLayout() {
  const { loading, webPending, error } = useWebLaunchStatus();

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-white">
        <div className="h-9 w-9 animate-pulse rounded-full bg-[#F27022]/30" />
      </div>
    );
  }

  if (error || webPending) {
    return <Navigate to="/" replace />;
  }

  return <MainLayout />;
}
