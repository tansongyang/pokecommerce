'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import {
  createCart,
  createOrder,
  readCart,
  readItem,
  updateCart,
} from '@/app/lib/data'
import { Cart } from '@/app/lib/definitions'
import { AddItemFormSchema, SearchFormSchema } from '@/app/lib/schemas'

import { getCartId } from './cart'

export async function search(data: FormData) {
  const validated = SearchFormSchema.parse({
    handoff: data.get('handoff'),
    zip: data.get('zip'),
  })

  redirect(
    `/locations/search?handoff=${validated.handoff}&zip=${validated.zip}`,
  )
}

export async function addItem(data: FormData) {
  const validated = AddItemFormSchema.parse({
    itemId: data.get('itemId'),
    locationSlug: data.get('locationSlug'),
    handoff: data.get('handoff'),
    isJsEnabled: data.get('isJsEnabled'),
  })

  let cartId = getCartId()
  let cart: Cart | undefined

  if (cartId) {
    cart = await readCart(cartId)
  }

  if (!cart) {
    cart = await createCart(validated.locationSlug, validated.handoff)
    cartId = cart.id
    cookies().set('cartId', cartId.toString())
  }

  const item = await readItem(validated.itemId)

  cart.items.push({
    slug: item.slug,
    name: item.name,
    cost: item.cost,
  })

  await updateCart(cart)

  if (validated.isJsEnabled) {
    revalidatePath(`/locations/${validated.locationSlug}`)
  } else {
    redirect('/cart')
  }
}

export async function placeOrder() {
  const cartId = getCartId()

  if (!cartId) {
    redirect(`/`)
  }

  const orderId = await createOrder(cartId)

  cookies().delete('cartId')

  redirect(`/orders/${orderId}`)
}
