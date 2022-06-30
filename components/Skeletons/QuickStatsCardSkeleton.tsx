import { CategoryCountSkeleton } from "./CategoryCountSkeleton";

export function QuickStatsCardSkeleton() {
  return (
    <div className="w-full h-48 rounded bg-[#222830] flex items-center justify-between animate-pulse">
      <div className="h-full w-[35%] flex items-center justify-center rounded-l text-white bg-[#20262D]" />

      <div className="flex h-full w-full flex-col justify-between p-6 px-10">
        <div className="flex flex-col gap-2">
          <div className="w-[35%] h-8 bg-gray-700/40 rounded" />
          <div className="w-[50%] h-4 bg-gray-700/30 rounded" />
        </div>

        <div className="flex items-center gap-10">
          <CategoryCountSkeleton />
          <CategoryCountSkeleton />
          <CategoryCountSkeleton />
        </div>
      </div>

      <div className="h-full w-[50%] rounded-r bg-[#20262D] p-6">
        <div className="flex flex-col gap-2">
          <div className="w-[70%] h-6 bg-gray-700/30 rounded" />
          <div className="w-[50%] h-3 bg-gray-700/20 rounded" />
          <div className="w-[40%] h-3 bg-gray-700/20 rounded" />
        </div>

      </div>
    </div>
  )
};