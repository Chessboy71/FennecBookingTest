const RootSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-white to-30% to-secondary p-5 space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-8 w-64 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-8 w-40 bg-gray-200 rounded-md animate-pulse" />
      </div>

      {/* Category */}
      <div className="flex gap-3 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-20 rounded-full bg-gray-200 animate-pulse"
          />
        ))}
      </div>

      {/* Section header */}

      <div className="flex items-center justify-between">
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Product cards */}
      <div className="w-full flex flex-row justify-center">
        <div className="flex gap-6 overflow-hidden ml-auto mr-auto">
          <div className="w-72 bg-white h-[50vh] rounded-3xl p-4 space-y-4 animate-pulse">
            {/* Image */}
            <div className="h-40 bg-gray-200 rounded-2xl" />

            {/* Title */}
            <div className="h-5 w-3/4 bg-gray-200 rounded" />

            {/* Description */}
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />

            {/* Button */}
            <div className="h-12 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-primary p-4 rounded-t-3xl">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootSkeleton;
