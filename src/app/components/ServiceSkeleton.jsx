import { v4 as uuid } from "uuid";
import { Skeleton } from "@mui/material";

function ServiceSkeleton({ isLoading }) {
  const renderSkeleton = Array.from({ length: 5 }).map(() => {
    return (
      <div
        key={uuid()}
        className="bg-[#ffffff] shadow-sm max-w-[430px] w-[350px] sm:w-[300px] xl:w-[350px] mx-auto rounded-3xl p-5  "
      >
        <div className="overflow-hidden rounded-3xl duration-500 transition-all">
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            // width={210}
            height={200}
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="pt-10 pb-4">
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            // width={210}
            height={40}
            className="rounded-md object-cover mb-3"
          />

          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            // width={210}
            height={20}
            className="rounded-md object-cover mb-3"
          />

          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={80}
            height={20}
            className="rounded-md object-cover mb-3"
          />
        </div>
      </div>
    );
  });

  return isLoading ? (
    <div className="bg-[#F5F8FE] container mx-auto px-1 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {renderSkeleton}
    </div>
  ) : null;
}

export default ServiceSkeleton;
