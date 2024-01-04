'use client'

import { search } from '@/app/lib/actions'
import SubmitButton from '@/app/ui/submit-button'

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

      <SubmitButton>Search</SubmitButton>
    </form>
  )
}
