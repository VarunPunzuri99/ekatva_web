import { HelmetProvider } from "react-helmet-async";
import { SEO } from "@/components/layout/SEO";
import { Toaster } from "@/components/ui/toaster";
import { ComingSoonPage } from "@/components/sections/ComingSoonPage";

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <ComingSoonPage />
      <Toaster />
    </HelmetProvider>
  );
}

export default App;
