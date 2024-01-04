import { useEffect, useState } from 'react'

export function useIsJsEnabled() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(true)
  }, [])

  return enabled
}
