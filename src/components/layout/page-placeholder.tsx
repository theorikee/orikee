type PagePlaceholderProps = {
  title: string;
  note: string;
};

/**
 * Clearly identified placeholder for screens whose approved brief does not
 * exist yet. Replace with the real implementation once the brief is approved.
 */
export function PagePlaceholder({ title, note }: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-4 py-24 md:px-6 lg:px-8">
      <p className="text-caption uppercase tracking-[0.12em] text-brand-text/70">
        Placeholder
      </p>
      <h1 className="mt-4 font-display text-h1">{title}</h1>
      <p className="mt-5 max-w-prose text-body text-brand-text/80">{note}</p>
    </section>
  );
}
