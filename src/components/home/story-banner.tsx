import Image from "next/image";
import Link from "next/link";

/**
 * Brand-story banner. The supplied design used a separate mobile crop that was
 * not provided; the same Orikee campaign asset is used at both sizes.
 */
export function StoryBanner() {
  return (
    <section
      aria-labelledby="brand-story"
      className="relative h-[clamp(460px,70svh,600px)] w-full overflow-hidden bg-brand-text text-brand-background min-[1001px]:h-[clamp(440px,50vw,620px)]"
    >
      <Image
        src="/images/orikee-global-luxury-jewellery-campaign.png"
        alt="Orikee jewellery campaign"
        fill
        sizes="100vw"
        className="object-cover object-[50%_50%]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-text/70 via-brand-text/15 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-[7px] px-4 text-center">
        <h2
          id="brand-story"
          className="font-display text-[clamp(18px,2vw,28px)] italic"
        >
          Style that feels like you.
        </h2>
        <p className="max-w-[46ch] text-[10px] leading-[1.4]">
          Jewellery is a personal expression. Discover pieces that complement
          your individuality and make every look your own.
        </p>
        <Link
          href="/about"
          className="inline-flex min-h-11 items-center border-b border-current pb-1 text-[10px] font-medium tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
        >
          Discover our story
        </Link>
      </div>
    </section>
  );
}
