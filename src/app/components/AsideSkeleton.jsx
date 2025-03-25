"use client";

import { Skeleton } from "@/components/ui/skeleton";

const AsideSkeleton = () => {
  return (
    <div className="sm:w-96 lg:container lg:mx-auto flex flex-col items-center gap-10 sm:px-4">
      <div className="w-full">
        <Skeleton className="w-[100px] h-[32px] mb-8" />
        <ul className="flex flex-col gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="w-[160px] h-[24px]" />
          ))}
        </ul>
      </div>

      <div className="p-8 w-full bg-darkBlue rounded-lg">
        <Skeleton className="w-[120px] h-[32px] my-5" />
        <Skeleton className="w-[200px] h-[18px] mb-5" />
        <Skeleton className="w-[150px] h-[40px]" />
      </div>
    </div>
  );
};

export default AsideSkeleton;
