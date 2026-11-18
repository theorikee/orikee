import Image from "next/image";
import Link from "next/link";

/**
 * Editorial campaign banner. The supplied design referenced a dedicated
 * `orikee-edit-campaign.png`; that asset was not supplied, so the approved
 * Orikee portrait asset is used instead.
 */
export function EditorialBanner() {
  return (
    <section
      aria-labelledby="orikee-edit"
      className="relative mt-8 h-[clamp(460px,70svh,600px)] w-full overflow-hidden bg-brand-text text-brand-background min-[1001px]:h-[clamp(440px,50vw,620px)]"
    >
      <Image
        src="/images/Golden Garden Jewelry Portrait.png"
        alt="Orikee jewellery campaign portrait"
        fill
        sizes="100vw"
        className="object-cover object-[50%_35%]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-text/70 via-brand-text/15 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-[7px] px-4 text-center">
        <h2
          id="orikee-edit"
          className="font-display text-[clamp(18px,2vw,28px)] italic"
        >
          The Orikee Edit
        </h2>
        <p className="max-w-[46ch] text-[10px] leading-[1.4]">
          Discover a curated world of jewellery that brings individuality to
          every expression.
        </p>
        <Link
          href="/collections"
          className="inline-flex min-h-11 items-center border-b border-current pb-1 text-[10px] font-medium tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
        >
          Explore the edit
        </Link>
      </div>
    </section>
  );
}
