import { z } from 'zod'

export const SearchFormSchema = z.object({
  handoff: z.enum(['pickup', 'curbside', 'drivethru']),
  zip: z.string().regex(/\d{5}/, 'Please enter a 5 digit US ZIP code'),
})
export type SearchForm = z.infer<typeof SearchFormSchema>
