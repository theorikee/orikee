import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Account",
};

export default function AccountPage() {
  return (
    <PagePlaceholder
      title="Account"
      note="Account screens are pending an approved screen brief."
    />
  );
}
