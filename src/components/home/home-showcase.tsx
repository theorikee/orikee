"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";

import { ProductCard } from "@/components/commerce/product-card";
import { cn } from "@/lib/cn";
import type { DemoCategory, DemoProduct } from "@/lib/orikee-demo";

type HomeShowcaseProps = {
  categories: DemoCategory[];
  productsByCategory: Record<string, DemoProduct[]>;
};

type Metrics = {
  stage: number;
  narrow: number;
  active: number;
  height: number;
};

const EMPTY_METRICS: Metrics = { stage: 0, narrow: 0, active: 0, height: 0 };

/**
 * Draggable, looping category film strip that also switches the product grid.
 * Manual only: no autoplay. Movement is disabled by the global reduced-motion
 * rule, matching the supplied design.
 */
export function HomeShowcase({
  categories,
  productsByCategory,
}: HomeShowcaseProps) {
  const count = categories.length;
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [metrics, setMetrics] = useState<Metrics>(EMPTY_METRICS);

  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startXRef = useRef(0);
  const dragDeltaRef = useRef(0);
  const draggingRef = useRef(false);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    function measure() {
      if (!stageRef.current) {
        return;
      }

      const width = stageRef.current.clientWidth;
      const compact = window.innerWidth <= 1000;
      const narrow = width * (compact ? 0.08 : 0.09);
      const active = width - narrow * (count - 1) - 4;
      const showcaseWidth = width * (compact ? 0.86 : 0.62);

      setMetrics({
        stage: width,
        narrow,
        active,
        height: showcaseWidth * (compact ? 0.68 : 9 / 16),
      });
    }

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(stage);

    return () => observer.disconnect();
  }, [count]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  function go(delta: number) {
    if (busyRef.current || delta === 0) {
      return;
    }

    busyRef.current = true;
    const next = position + delta;
    setPosition(next);
    setIndex(((next % count) + count) % count);

    timerRef.current = setTimeout(() => {
      if (next < count || next >= count * 2) {
        const normalized = count + (((next - count) % count) + count) % count;
        setAnimate(false);
        setPosition(normalized);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimate(true));
        });
      }

      busyRef.current = false;
    }, 650);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) {
      return;
    }

    draggingRef.current = true;
    startXRef.current = event.clientX;
    dragDeltaRef.current = 0;

    if (!trackRef.current) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (draggingRef.current) {
      dragDeltaRef.current = event.clientX - startXRef.current;
    }
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) {
      return;
    }

    draggingRef.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (Math.abs(dragDeltaRef.current) > 50) {
      go(dragDeltaRef.current < 0 ? 1 : -1);
    }
  }

  const activeCategory = categories[index];
  const products = productsByCategory[activeCategory.slug] ?? [];
  const transform =
    metrics.stage > 0
      ? metrics.stage / 2 -
        (position * (metrics.narrow + 1) + metrics.active / 2)
      : undefined;

  return (
    <section className="pt-12 pb-6 text-center min-[1001px]:pt-5 min-[1001px]:pb-4" aria-labelledby="discover">
      <h2
        id="discover"
        className="font-display text-[clamp(18px,2.15vw,28px)] italic"
      >
        Discover the world of Orikee
      </h2>

      <div
        ref={stageRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Collections. Drag, or use the arrow keys."
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            go(1);
          }

          if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(-1);
          }
        }}
        onClickCapture={(event) => {
          if (Math.abs(dragDeltaRef.current) > 5) {
            event.preventDefault();
            dragDeltaRef.current = 0;
            return;
          }

          const slide = (event.target as HTMLElement).closest<HTMLElement>(
            "[data-slide-position]",
          );

          if (!slide) {
            return;
          }

          const slidePosition = Number(slide.dataset.slidePosition);

          if (slidePosition !== position) {
            event.preventDefault();
            go(slidePosition - position);
          }
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        className="mt-[18px] cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
      >
        <div
          ref={trackRef}
          style={{
            transform:
              transform === undefined
                ? undefined
                : `translateX(${transform}px)`,
          }}
          className={cn(
            "flex gap-px",
            animate
              ? "transition-transform duration-[600ms] ease-[cubic-bezier(.2,.7,.2,1)]"
              : "transition-none",
          )}
        >
          {[0, 1, 2].flatMap((copy) =>
            categories.map((category, categoryIndex) => {
              const slidePosition = copy * count + categoryIndex;
              const active = slidePosition === position;

              return (
                <div
                  key={`${copy}-${category.slug}`}
                  data-slide-position={slidePosition}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${categoryIndex + 1} of ${count}: ${category.label}`}
                  style={{
                    flexBasis: metrics.active
                      ? `${active ? metrics.active : metrics.narrow}px`
                      : undefined,
                    height: metrics.height ? `${metrics.height}px` : undefined,
                    transition: animate
                      ? "flex-basis 600ms cubic-bezier(.2, .7, .2, 1)"
                      : "none",
                  }}
                  className="relative shrink-0 overflow-hidden bg-surface-linen min-h-[180px]"
                >
                  <Image
                    src={category.image}
                    alt={`${category.label} collection`}
                    fill
                    draggable={false}
                    sizes="(min-width: 1001px) 65vw, 68vw"
                    className="pointer-events-none object-cover"
                  />

                  <Link
                    href={category.href}
                    tabIndex={active ? 0 : -1}
                    aria-hidden={!active}
                    className={cn(
                      "absolute bottom-4 left-1/2 min-h-9 -translate-x-1/2 items-center rounded-[2px] border border-brand-text/10 bg-brand-background px-4 py-2.5 text-[9px] font-medium tracking-[0.1em] whitespace-nowrap text-brand-text uppercase transition-colors hover:bg-surface-linen max-[560px]:bottom-3",
                      active ? "inline-flex" : "hidden",
                    )}
                  >
                    {category.label}
                  </Link>
                </div>
              );
            }),
          )}
        </div>
      </div>

      <div className="mt-[14px] flex items-center justify-center gap-2">
        <div
          aria-hidden="true"
          className="relative h-px w-[clamp(56px,8.5vw,92px)] overflow-hidden bg-line"
        >
          <span
            className="absolute inset-y-0 left-0 bg-brand-text transition-transform duration-[600ms] ease-[cubic-bezier(.2,.7,.2,1)]"
            style={{
              width: `${100 / count}%`,
              transform: `translateX(${index * 100}%)`,
            }}
          />
        </div>
      </div>

      <h3 className="sr-only">Products in {activeCategory.label}</h3>

      <div className="mx-auto grid w-full max-w-full grid-cols-2 gap-x-[2px] min-[561px]:grid-cols-4 min-[1001px]:w-[62vw] min-[1001px]:max-w-[62vw]">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-xl px-4 text-[10px] leading-relaxed text-brand-text/60">
        Design preview: product names, prices and imagery are placeholders and
        are not yet connected to the live catalogue.
      </p>
    </section>
  );
}
