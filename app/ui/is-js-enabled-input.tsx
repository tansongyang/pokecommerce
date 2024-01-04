'use client'

import { useIsJsEnabled } from '@/app/hooks/useIsJsEnabled'
import HiddenInput from '@/app/ui/hidden-input'

export default function IsJsEnabledInput() {
  return useIsJsEnabled() ? <HiddenInput name="isJsEnabled" value="1" /> : null
}
