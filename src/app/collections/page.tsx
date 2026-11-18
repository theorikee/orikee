import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Collections",
};

export default function CollectionsPage() {
  return (
    <PagePlaceholder
      title="Collections"
      note="Collections layout is pending an approved screen brief."
    />
  );
}
