import clsx from 'clsx'

function ShimmerRoot({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent',
        className,
      )}
    >
      {children}
    </div>
  )
}

function SearchCard() {
  return (
    <div className="p-4">
      <ShimmerRoot className="card flex flex-col gap-y-4 !border-gray-600">
        <div className="h-5 w-2/5 rounded-full bg-gray-500"></div>
        <div className="h-5 w-4/5 rounded-full bg-gray-600"></div>
        <div className="h-10 w-full rounded-full bg-gray-500"></div>
      </ShimmerRoot>
    </div>
  )
}
export function SearchSkeleton() {
  return (
    <div className="p-4">
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </div>
  )
}
