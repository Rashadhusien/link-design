import { Skeleton } from "@mui/material";
function SkeltonContent({ isLoading }) {
  return (
    isLoading && (
      <>
        <div className="w-full pb-20">
          <div className="flex flex-col md:flex-row gap-4">
            <Skeleton
              sx={{ bgcolor: "grey.600" }}
              variant="rectangular"
              height={200}
              className="rounded-md object-cover mb-3  w-full"
            />
            <Skeleton
              sx={{ bgcolor: "grey.600" }}
              variant="rectangular"
              height={200}
              className="rounded-md hidden md:block object-cover mb-3  w-full"
            />
          </div>
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
        <div className="w-full pb-20">
          <div className="flex flex-col md:flex-row gap-4">
            <Skeleton
              sx={{ bgcolor: "grey.600" }}
              variant="rectangular"
              height={200}
              className="rounded-md object-cover mb-3  w-full"
            />
            <Skeleton
              sx={{ bgcolor: "grey.600" }}
              variant="rectangular"
              height={200}
              className="rounded-md hidden md:block object-cover mb-3  w-full"
            />
          </div>
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
      </>
    )
  );
}

export default SkeltonContent;
