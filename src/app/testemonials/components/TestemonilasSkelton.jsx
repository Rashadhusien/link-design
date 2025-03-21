import { Skeleton } from "@mui/material";
import { useMemo } from "react";

function TestimonialsSkeleton() {
  const skeletons = useMemo(
    () =>
      [1, 2, 3].map((id) => (
        <div key={id}>
          <div className="px-10 py-8 mb-10 relative mx-auto w-fit bg-[#f5f8fe] -z-20">
            <Skeleton
              className="rounded-md object-cover mb-3"
              sx={{ bgcolor: "grey.600" }}
              width={400}
              height={200}
              variant="rectangular"
            />
          </div>
          <div className="flex justify-start px-8 mx-auto mb-20 items-center gap-2 max-w-[450px]">
            <Skeleton
              variant="circular"
              width={50}
              height={50}
              sx={{ bgcolor: "grey.600" }}
            />
            <Skeleton
              className="rounded-md object-cover w-full"
              sx={{ bgcolor: "grey.600" }}
              variant="rectangular"
              width={120}
              height={20}
            />
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
