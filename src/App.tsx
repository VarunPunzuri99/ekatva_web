import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LaunchRequiredLayout } from "@/components/layout/LaunchRequiredLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { BookPanditPage } from "@/pages/BookPanditPage";
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

          {/* Shared app chrome (HomeHeader + HomeFooter) */}
          <Route element={<MainLayout />}>
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route
              path="/cancellation-refund-policy"
              element={<RefundPolicyPage />}
            />
          </Route>

          <Route element={<LaunchRequiredLayout />}>
            <Route path="/book-pandit" element={<BookPanditPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
