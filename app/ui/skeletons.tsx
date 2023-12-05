import clsx from 'clsx'

function Shimmer({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
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

function LocationCard() {
  return (
    <Shimmer className="card flex h-20 items-center gap-x-2 !border-gray-600">
      <div className="h-8 w-1/4 rounded-full bg-gray-500"></div>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="h-4 w-4/5 rounded-full bg-gray-500"></div>
        <div className="h-4 w-1/2 rounded-full bg-gray-600"></div>
      </div>
      {/* </div> */}
    </Shimmer>
  )
}

export function LocationSkeleton() {
  return (
    <>
      <Shimmer className="m-auto h-10 w-2/5 rounded-full bg-gray-500" />
      <div className="grid grid-cols-2 gap-4 p-4">
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </>
  )
}

function SearchCard() {
  return (
    <Shimmer className="card flex flex-col gap-y-4 !border-gray-600">
      <div className="h-5 w-2/5 rounded-full bg-gray-500"></div>
      <div className="h-5 w-4/5 rounded-full bg-gray-600"></div>
      <div className="h-10 w-full rounded-full bg-gray-500"></div>
    </Shimmer>
  )
}

export function SearchSkeleton() {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </div>
  )
}
