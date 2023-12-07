'use client'

import { useFormStatus } from 'react-dom'

import { search } from '@/app/lib/actions'
import Spinner from '@/app/ui/spinner'

function SubmitButton() {
  const status = useFormStatus()
  const disabled = status.pending
  return (
    <button
      type="submit"
      disabled={disabled}
      className="button flex justify-center disabled:brightness-50"
    >
      {disabled ? <Spinner /> : 'Search'}
    </button>
  )
}

export default function SearchForm() {
  return (
    <form action={search} className="flex flex-col gap-y-4 p-4">
      <select name="handoff" aria-label="Handoff" className="input">
        <option value="pickup">Pickup</option>
        <option value="curbside">Curbside</option>
        <option value="drivethru">Drive-Thru</option>
      </select>

      <input
        name="zip"
        placeholder="Zip code"
        required
        aria-label="Zip code"
        className="input"
      />

      <SubmitButton />
    </form>
  )
}
