import { Outlet } from "react-router-dom";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHeader } from "@/components/home/HomeHeader";
import { AppMotionProvider } from "@/components/layout/AppMotionProvider";

/** Shared app chrome: HomeHeader + page + HomeFooter (public + gated routes). */
export function MainLayout() {
  return (
    <AppMotionProvider>
      <div className="min-h-screen bg-white font-home text-home-text antialiased">
        <HomeHeader />
        <Outlet />
        <HomeFooter />
      </div>
    </AppMotionProvider>
  );
}
