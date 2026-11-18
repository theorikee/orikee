import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies",
};

const sections = [
  {
    id: "shipping",
    title: "Shipping policy",
  },
  {
    id: "returns",
    title: "Returns & exchange",
  },
  {
    id: "care",
    title: "Jewellery care guide",
  },
  {
    id: "terms",
    title: "Terms and conditions",
  },
  {
    id: "privacy",
    title: "Privacy policy",
  },
];

export default function PoliciesPage() {
  return (
    <section className="mx-auto w-full max-w-content flex-1 px-4 py-24 md:px-6 lg:px-8">
      <p className="text-caption tracking-[0.12em] text-brand-text/70 uppercase">
        Placeholder
      </p>
      <h1 className="mt-4 font-display text-h1">Policies and care</h1>
      <p className="mt-5 max-w-prose text-body text-brand-text/80">
        Approved policy content has not been supplied yet. Each section below
        is reserved for the final, reviewed copy; nothing here should be treated
        as a shipping, returns, care or legal commitment.
      </p>

      <div className="mt-12 max-w-prose space-y-10">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 border-t border-line pt-6"
          >
            <h2 className="font-display text-h3">{section.title}</h2>
            <p className="mt-3 text-body text-brand-text/80">
              Pending approved content.
            </p>
          </section>
        ))}
      </div>
    </section>
  );
}
