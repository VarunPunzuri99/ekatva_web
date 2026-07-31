import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { refundPolicy } from "@/content/refundPolicy";

export function RefundPolicyPage() {
  return (
    <LegalPageLayout
      document={refundPolicy}
      description="Understand Ekatva's cancellation and refund rules for subscriptions, Pandit bookings, and spiritual services."
    />
  );
}
