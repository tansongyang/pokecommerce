'use server'

import { redirect } from 'next/navigation'

import { SearchFormSchema } from '@/app/lib/schemas'

export async function search(data: FormData) {
  const raw = {
    handoff: data.get('handoff'),
    zip: data.get('zip'),
  }
  const validated = SearchFormSchema.parse(raw)
  redirect(
    `/locations/search?handoff=${validated.handoff}&zip=${validated.zip}`,
  )
}
