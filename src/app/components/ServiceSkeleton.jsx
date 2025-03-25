import { v4 as uuid } from "uuid";
import { Skeleton } from "@/components/ui/skeleton";

function ServiceSkeleton({ isLoading }) {
  const renderSkeleton = Array.from({ length: 5 }).map(() => (
    <div
      key={uuid()}
      className="bg-white shadow-sm max-w-[430px] w-[350px] sm:w-[300px] xl:w-[350px] mx-auto rounded-3xl p-5"
    >
      <div className="overflow-hidden rounded-3xl duration-500 transition-all">
        <Skeleton className="rounded-3xl h-[200px] w-full bg-gray-300" />
      </div>
      <div className="pt-10 pb-4 space-y-3">
        <Skeleton className="h-10 w-full rounded-md bg-gray-300" />
        <Skeleton className="h-5 w-full rounded-md bg-gray-300" />
        <Skeleton className="h-5 w-[80px] rounded-md bg-gray-300" />
      </div>
    </div>
  ));

  return isLoading ? (
    <div className="bg-[#F5F8FE] container mx-auto px-1 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {renderSkeleton}
    </div>
  ) : null;
}

export default ServiceSkeleton;
