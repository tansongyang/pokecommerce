'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createCart, fetchCart, fetchItem, updateCart } from '@/app/lib/data'
import { Cart } from '@/app/lib/definitions'
import { AddItemFormSchema, SearchFormSchema } from '@/app/lib/schemas'

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

export async function addItem(data: FormData) {
  const validated = AddItemFormSchema.parse({
    itemId: data.get('itemId'),
  })

  let cartId = Number(cookies().get('cartId')?.value)
  let cart: Cart | undefined

  if (cartId) {
    cart = await fetchCart(cartId)
  }

  if (!cart) {
    cart = await createCart()
    cartId = cart.id
    cookies().set('cartId', cartId.toString())
  }

  const item = await fetchItem(validated.itemId)

  cart.items.push({
    slug: item.slug,
    name: item.name,
    cost: item.cost,
  })

  await updateCart(cart)
}
