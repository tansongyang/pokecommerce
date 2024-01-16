import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function usePathnameChangeListener(listener: () => void) {
  const pathname = usePathname()

  useEffect(listener, [listener, pathname])
}
