export default function ArticleLoading() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header skeleton */}
      <div className="h-14 bg-white border-b border-neutral-100" />

      {/* Hero image skeleton */}
      <div className="relative h-[40vh] bg-neutral-200 animate-pulse" />

      {/* Article content skeleton */}
      <div className="container-page py-8 max-w-3xl mx-auto">
        <div className="space-y-6">
          {/* Category badge */}
          <div className="h-5 w-20 bg-neutral-200 rounded animate-pulse" />

          {/* Title */}
          <div className="space-y-3">
            <div className="h-10 w-full bg-neutral-200 rounded animate-pulse" />
            <div className="h-10 w-3/4 bg-neutral-200 rounded animate-pulse" />
          </div>

          {/* Subtitle */}
          <div className="h-6 w-2/3 bg-neutral-200 rounded animate-pulse" />

          {/* Author and date */}
          <div className="flex items-center gap-4 py-4 border-y border-neutral-200">
            <div className="h-10 w-10 bg-neutral-200 rounded-full animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse" />
              <div className="h-3 w-24 bg-neutral-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Article body */}
          <div className="space-y-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-neutral-200 rounded animate-pulse"
                style={{ width: `${85 + Math.random() * 15}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
