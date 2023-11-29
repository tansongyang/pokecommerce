'use server'

import { redirect } from 'next/navigation'

import { type SearchForm, SearchFormSchema } from '@/app/lib/schemas'

export async function search(data: SearchForm) {
  const validated = SearchFormSchema.parse(data)
  redirect(`/search?handoff=${validated.handoff}&zip=${validated.zip}`)
}
