import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Wishlist",
};

export default function WishlistPage() {
  return (
    <PagePlaceholder
      title="Wishlist"
      note="Wishlist is pending an approved screen brief."
    />
  );
}
