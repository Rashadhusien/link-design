import { Skeleton } from "@mui/material";
function AsideSkeleton({ isLoading }) {
  const skeleton = [1, 2, 3, 4, 5].map((item) => {
    return (
      <li key={item}>
        <Skeleton
          sx={{ bgcolor: "grey.600" }}
          variant="rectangular"
          height={25}
          className="rounded-md object-cover mb-3  w-full"
        />
      </li>
    );
  });

  return isLoading && <ul>{skeleton}</ul>;
}

export default AsideSkeleton;
