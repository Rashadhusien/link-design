"use client";

import Skeleton from "@mui/material/Skeleton";

const AsideSkeleton = () => {
  return (
    <div className="sm:w-96 lg:container lg:mx-auto flex flex-col items-center gap-10 sm:px-4">
      <div className="w-full">
        <Skeleton variant="text" width={100} height={32} className="mb-8" />
        <ul className="flex flex-col gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} variant="text" width={160} height={24} />
          ))}
        </ul>
      </div>

      <div className="p-8 w-full bg-darkBlue rounded-lg">
        <Skeleton variant="text" width={120} height={32} className="my-5" />
        <Skeleton variant="text" width={200} height={18} className="mb-5" />
        <Skeleton variant="rectangular" width={150} height={40} />
      </div>
    </div>
  );
};

export default AsideSkeleton;
