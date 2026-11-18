import Link from "next/link";

import { OrikeeIcon } from "@/components/ui/orikee-icon";
import { demoServicePromises } from "@/lib/orikee-demo";

export function ServicesStrip() {
  return (
    <div className="mx-auto w-full max-w-content px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-x-3 gap-y-[26px] py-[34px] text-center min-[561px]:grid-cols-4 min-[561px]:gap-[18px]">
        {demoServicePromises.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-[7px]"
          >
            <OrikeeIcon name={item.icon} size="xl" />
            <h2 className="text-[10px] leading-[1.2] font-medium tracking-[0.08em] uppercase">
              {item.title}
            </h2>
            <p className="max-w-[32ch] text-[10px] leading-[1.45] text-brand-text/70">
              {item.href ? (
                <Link href={item.href} className="underline underline-offset-2">
                  {item.body}
                </Link>
              ) : (
                item.body
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
