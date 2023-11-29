'use server'

import { redirect } from 'next/navigation'

import { SearchFormFields } from '@/app/ui/home/search-form'

export async function search(data: SearchFormFields) {
  redirect('/search')
}
