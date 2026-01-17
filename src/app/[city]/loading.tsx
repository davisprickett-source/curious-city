export default function CityLoading() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero skeleton */}
      <div className="relative h-[50vh] bg-neutral-200 animate-pulse" />

      {/* Content skeleton */}
      <div className="container-page py-8">
        <div className="space-y-8">
          {/* Title skeleton */}
          <div className="space-y-4">
            <div className="h-8 w-1/3 bg-neutral-200 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-neutral-200 rounded animate-pulse" />
          </div>

          {/* Cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="h-48 bg-neutral-200 animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-5 w-3/4 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-neutral-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
