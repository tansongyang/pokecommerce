'use client'

import { useFormStatus } from 'react-dom'

import Spinner from '@/app/ui/spinner'

type Props = {
  children: React.ReactNode
}

export default function SubmitButton({ children }: Props) {
  const status = useFormStatus()
  const disabled = status.pending
  return (
    <button
      type="submit"
      disabled={disabled}
      className="button flex justify-center disabled:brightness-50"
    >
      {disabled ? <Spinner /> : children}
    </button>
  )
}
