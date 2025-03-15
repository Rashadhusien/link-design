import { Skeleton } from "@mui/material";

function SkeletonContent() {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <div className="w-full pb-20" key={index}>
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            variant="rectangular"
            height={500}
            className="rounded-md object-cover mb-3 w-full"
          />
          <div className="pt-14 space-y-3">
            {[30, 20, 20, 20].map((height, i) => (
              <Skeleton
                key={i}
                sx={{ bgcolor: "grey.600" }}
                variant="rectangular"
                height={height}
                className="rounded-md object-cover w-full"
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default SkeletonContent;
