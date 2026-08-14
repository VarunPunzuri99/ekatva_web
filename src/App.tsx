import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LaunchRequiredLayout } from "@/components/layout/LaunchRequiredLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { AboutPage } from "@/pages/AboutPage";
import { AstroguruPage } from "@/pages/AstroguruPage";
import { BookPanditPage } from "@/pages/BookPanditPage";
import { BookPanditPoojaDetailPage } from "@/pages/BookPanditPoojaDetailPage";
import { ContactPage } from "@/pages/ContactPage";
import { EjapaPage } from "@/pages/EjapaPage";
import { EdistiPage } from "@/pages/EdistiPage";
import { EpradakshinaPage } from "@/pages/EpradakshinaPage";
import { EpujaPage } from "@/pages/EpujaPage";
import { EpujaAllPoojasPage } from "@/pages/EpujaAllPoojasPage";
import { EpujaDrishtiPage } from "@/pages/EpujaDrishtiPage";
import { EwishPage } from "@/pages/EwishPage";
import { EventPoojaDetailPage } from "@/pages/EventPoojaDetailPage";
import { EventsPage } from "@/pages/EventsPage";
import { FaqPage } from "@/pages/FaqPage";
import { FeaturesPage } from "@/pages/FeaturesPage";
import { KundliPage } from "@/pages/KundliPage";
import { PanchangamPage } from "@/pages/PanchangamPage";
import { RootPage } from "@/pages/RootPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsPage } from "@/pages/TermsPage";
import { RefundPolicyPage } from "@/pages/RefundPolicyPage";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Shared app chrome (HomeHeader + HomeFooter) — public */}
          <Route element={<MainLayout />}>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route
              path="/cancellation-refund-policy"
              element={<RefundPolicyPage />}
            />
          </Route>

          <Route element={<LaunchRequiredLayout />}>
            <Route path="/book-pandit" element={<BookPanditPage />} />
            <Route
              path="/book-pandit/:poojaId"
              element={<BookPanditPoojaDetailPage />}
            />
            <Route path="/panchangam" element={<PanchangamPage />} />
            <Route path="/kundli" element={<KundliPage />} />
            <Route path="/ejapa" element={<EjapaPage />} />
            <Route path="/edisti" element={<EdistiPage />} />
            <Route path="/epuja" element={<EpujaPage />} />
            <Route path="/epuja/poojas" element={<EpujaAllPoojasPage />} />
            <Route
              path="/epuja/drishti-nivarana"
              element={<EpujaDrishtiPage />}
            />
            <Route
              path="/epuja/pooja/:poojaId"
              element={<BookPanditPoojaDetailPage />}
            />
            <Route path="/epradakshina" element={<EpradakshinaPage />} />
            <Route path="/astroguru" element={<AstroguruPage />} />
            <Route path="/ewish" element={<EwishPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route
              path="/events/:onlinePoojaId"
              element={<EventPoojaDetailPage />}
            />
            <Route path="/features" element={<FeaturesPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
