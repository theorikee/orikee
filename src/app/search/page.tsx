import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <PagePlaceholder
      title="Search"
      note="Search is pending an approved screen brief."
    />
  );
}
