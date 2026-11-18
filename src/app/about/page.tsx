import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "About Orikee",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About Orikee"
      note="Brand story content is pending approved copy."
    />
  );
}
