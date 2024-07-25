import { Skeleton } from "@mui/material";

function TestemonilasSkelton({ isLoading }) {
  const skeleton = [1, 2, 3].map((id) => {
    return (
      <div key={id} className="">
        <div
          className={`px-10 py-8 mb-10 relative mx-auto w-fit  bg-[#f5f8fe] -z-20 `}
        >
          <Skeleton
            className="rounded-md object-cover mb-3 "
            sx={{ bgcolor: "grey.600" }}
            width={400}
            height={200}
            variant="rectangular"
          />
        </div>
        <div className="flex justify-start px-8 mx-auto mb-20 items-center gap-2 max-w-[450px]">
          <Skeleton
            variant="rectangular"
            width={60}
            height={50}
            sx={{ bgcolor: "grey.600" }}
            className="rounded-full object-cover mb-3  w-full"
          />
          <Skeleton
            className="rounded-md object-cover mb-3  w-full"
            sx={{ bgcolor: "grey.600" }}
            variant="rectangular"
          />
        </div>
      </div>
    );
  });

  return (
    isLoading && (
      <div className="flex overflow-hidden gap-5 justify-center items-center">
        {" "}
        {skeleton}
      </div>
    )
  );
}

export default TestemonilasSkelton;
