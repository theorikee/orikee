import Image from "next/image";
import Link from "next/link";

import { formatInr, type DemoProduct } from "@/lib/orikee-demo";

type ProductCardProps = DemoProduct;

/**
 * Product card follows the supplied design: 3:4 image, name and price, no
 * quick-add or discount badges. Catalogue data is demo content until the real
 * catalogue is connected.
 */
export function ProductCard({ name, price, image, href }: ProductCardProps) {
  return (
    <article className="group min-w-0">
      <Link
        href={href}
        aria-label={name}
        className="relative block aspect-[3/4] overflow-hidden bg-surface-linen"
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1001px) 15vw, (min-width: 561px) 25vw, 50vw"
          className="object-cover"
        />
      </Link>
      <Link href={href}>
        <h3 className="mt-[7px] text-[10px] leading-[1.35] min-[561px]:text-[11px]">
          {name}
        </h3>
      </Link>
      <p className="text-[10px] leading-[1.35] min-[561px]:text-[11px]">
        {formatInr(price)}
      </p>
    </article>
  );
}
