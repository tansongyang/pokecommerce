'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { search } from '@/app/lib/actions'

const schema = z.object({
  handoff: z.enum(['pickup', 'curbside', 'drivethru']),
  zip: z.string().regex(/\d{5}/, 'Please enter a 5 digit US ZIP code'),
})

export type SearchFormFields = z.infer<typeof schema>

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      handoff: 'pickup',
      zip: '',
    },
  })

  return (
    <form
      onSubmit={handleSubmit((data) => search(data))}
      className="flex flex-col gap-y-4 p-4"
    >
      <select className="input" {...register('handoff')}>
        <option value="pickup">Pickup</option>
        <option value="curbside">Curbside</option>
        <option value="drivethru">Drive-Thru</option>
      </select>

      <input className="input" {...register('zip')} />
      {errors.zip?.message && (
        <p className="ml-4 text-sm text-error">{errors.zip.message}</p>
      )}

      <button type="submit" className="button">
        Search
      </button>
    </form>
  )
}
