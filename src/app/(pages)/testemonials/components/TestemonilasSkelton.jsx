import { Skeleton } from "@/components/ui/skeleton";
import { useMemo } from "react";

function TestimonialsSkeleton() {
  const skeletons = useMemo(
    () =>
      [1, 2, 3].map((id) => (
        <div key={id}>
          <div className="px-10 py-8 mb-10 relative mx-auto w-fit bg-[#f5f8fe] -z-20">
            <Skeleton className="rounded-md mb-3 w-[400px] h-[200px]" />
          </div>
          <div className="flex justify-start px-8 mx-auto mb-20 items-center gap-2 max-w-[450px]">
            <Skeleton className="w-[50px] h-[50px] rounded-full" />
            <Skeleton className="w-[120px] h-[20px] rounded-md" />
          </div>
        </div>
      )),
    []
  );

  return (
    <div className="flex overflow-hidden gap-5 justify-center items-center">
      {skeletons}
    </div>
  );
}

export default TestimonialsSkeleton;
