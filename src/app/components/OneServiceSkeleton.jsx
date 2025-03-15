import { Skeleton } from "@mui/material";

import { v4 as uuid } from "uuid";

function SkeletonContent() {
  const renderSkeleton = Array.from({ length: 2 }).map(() => {
    return (
      <div className="w-full pb-20" key={uuid()}>
        <Skeleton
          sx={{ bgcolor: "grey.600" }}
          variant="rectangular"
          height={500}
          className=" rounded-md object-cover mb-3  w-full"
        />
        <div className="pt-14">
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            variant="rectangular"
            height={30}
            className="rounded-md object-cover mb-3  w-full"
          />
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            variant="rectangular"
            height={20}
            className="rounded-md object-cover mb-3  w-full"
          />
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            variant="rectangular"
            height={20}
            className="rounded-md object-cover mb-3  w-full"
          />
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            variant="rectangular"
            height={20}
            className="rounded-md object-cover mb-3  w-full"
          />
        </div>
      </div>
    );
  });

  return <>{renderSkeleton}</>;
}

export default SkeletonContent;
