export function RacketsSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="aspect-square w-full animate-pulse rounded-lg border border-gray-300 bg-gray-200" />
          <div className="h-6 w-1/4 animate-pulse rounded bg-gray-200" />
        </div>
      ))}
    </>
  );
}
