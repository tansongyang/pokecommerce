import { z } from 'zod'

export const AddItemFormSchema = z.object({
  itemId: z.coerce.number(),
  locationSlug: z.string(),
  handoff: z.enum(['pickup', 'curbside', 'drivethru']),
})

export const SearchFormSchema = z.object({
  handoff: z.enum(['pickup', 'curbside', 'drivethru']),
  zip: z.string().regex(/\d{5}/, 'Please enter a 5 digit US ZIP code'),
})
