export function RacketSkeleton() {
  return (
    <div className="flex items-start gap-20">
      <div className="flex flex-1 flex-col gap-2 pt-20">
        <div className="h-5 w-1/3 animate-pulse rounded bg-gray-200" />
        <div className="h-8 w-2/3 animate-pulse rounded bg-gray-200" />
        <div className="mt-2 flex flex-col gap-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
      <div className="shrink-0 basis-2/5">
        <div className="aspect-square w-full animate-pulse rounded-lg border border-gray-300 bg-gray-200" />
      </div>
      <div className="flex-1 pt-20">
        <div className="h-9 w-1/3 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}
