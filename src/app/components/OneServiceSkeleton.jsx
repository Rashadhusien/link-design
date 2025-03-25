import { Skeleton } from "@/components/ui/skeleton";

function SkeletonContent() {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <div className="w-full pb-20" key={index}>
          <Skeleton className="h-[500px] w-full rounded-md bg-gray-600 mb-3 animate-pulse" />
          <div className="pt-14 space-y-3">
            {[30, 20, 20, 20].map((height, i) => (
              <Skeleton
                key={i}
                className={`h-[${height}px] w-full rounded-md bg-gray-600 animate-pulse`}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default SkeletonContent;
