import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <PagePlaceholder
      title="Shop"
      note="Shop layout is pending an approved screen brief. Category links resolve here until the catalogue structure is confirmed."
    />
  );
}
