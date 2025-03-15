import Image from "next/image";
import { useMemo } from "react";

function PageTitle({ title }) {
  // Memoize title for performance
  const memoizedTitle = useMemo(() => title, [title]);

  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* Optimized Image with layout fill */}
      <Image
        src="/page-title.jpg"
        alt="Page Background"
        layout="fill"
        objectFit="cover"
        priority={true} // Keep it true only if it's above the fold
        className="w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-primary opacity-60" />

      {/* Page Title */}
      <h2
        className="absolute top-1/2 left-1/2 z-20 text-nowrap capitalize text-whitep font-semibold text-3xl sm:text-4xl md:text-5xl transform -translate-x-1/2 -translate-y-1/2"
        aria-label={memoizedTitle}
      >
        {memoizedTitle}
      </h2>
    </div>
  );
}

export default PageTitle;
