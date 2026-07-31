import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { termsAndConditions } from "@/content/termsAndConditions";

export function TermsPage() {
  return (
    <LegalPageLayout
      document={termsAndConditions}
      description="Read the Terms & Conditions that govern your use of the Ekatva app and spiritual services."
    />
  );
}
