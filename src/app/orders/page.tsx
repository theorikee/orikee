import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <PagePlaceholder
      title="Orders"
      note="Order history is pending an approved account screen and a connected order service."
    />
  );
}
