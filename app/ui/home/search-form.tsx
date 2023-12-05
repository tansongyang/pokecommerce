'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { type SearchForm, SearchFormSchema } from '@/app/lib/schemas'

export default function SearchForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchForm>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      handoff: 'pickup',
      zip: '',
    },
  })

  return (
    <form
      onSubmit={handleSubmit((data) =>
        router.push(
          `/locations/search?handoff=${data.handoff}&zip=${data.zip}`,
        ),
      )}
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
