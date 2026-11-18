import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Bag",
};

export default function BagPage() {
  return (
    <PagePlaceholder
      title="Bag"
      note="Bag and cart behaviour are pending an approved screen brief and data contract."
    />
  );
}
