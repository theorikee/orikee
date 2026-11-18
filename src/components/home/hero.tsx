import Link from "next/link";

/**
 * Campaign hero. Laptop/desktop and tablet/mobile use separate supplied video
 * assets; reduced-motion users (and any browser that cannot play the video)
 * fall back to the poster image.
 */
export function Hero() {
  return (
    <section
      aria-label="Campaign"
      className="relative h-[clamp(560px,92svh,820px)] w-full overflow-hidden bg-brand-text text-brand-background min-[1001px]:h-[clamp(540px,70svh,720px)]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-[64%_24%] min-[1001px]:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/orikee-global-luxury-jewellery-campaign.png"
        aria-hidden="true"
      >
        <source
          media="(min-width: 1001px) and (prefers-reduced-motion: no-preference)"
          src="/videos/hero.mp4"
          type="video/mp4"
        />
        <source
          media="(prefers-reduced-motion: no-preference)"
          src="/videos/hero-mobile.mp4"
          type="video/mp4"
        />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-text/70 via-brand-text/15 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-[9px] px-4 text-center min-[1001px]:bottom-10">
        <h1 className="font-display text-[clamp(22px,2.25vw,32px)] italic">
          Made to be noticed
        </h1>
        <Link
          href="/shop"
          className="inline-flex min-h-11 items-center border-b border-current pb-1 text-[10px] font-medium tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
        >
          Explore the collection
        </Link>
      </div>
    </section>
  );
}
