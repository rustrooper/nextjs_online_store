export function RacketsSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div>
      <div className="mb-4 h-7 w-40 animate-pulse rounded bg-gray-200" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="aspect-square w-full animate-pulse rounded-lg bg-gray-200" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
