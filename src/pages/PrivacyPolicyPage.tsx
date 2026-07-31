import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { privacyPolicy } from "@/content/privacyPolicy";

export function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      document={privacyPolicy}
      description="Learn how Ekatva collects, uses, and protects your personal and spiritual information."
    />
  );
}
