import Image from 'next/image'

import { addItem } from '@/app/lib/actions'
import { Item } from '@/app/lib/definitions'
import Cost from '@/app/ui/cost'
import HiddenInput from '@/app/ui/hidden-input'
import SubmitButton from '@/app/ui/submit-button'

type Props = {
  item: Item
  locationSlug: string
  handoff: string
}

export default function LocationItem({ item, locationSlug, handoff }: Props) {
  return (
    <div className="card flex items-center gap-x-2">
      <Image
        src={item.sprite}
        width={30}
        height={30}
        alt={`Image of ${item.name}`}
      />

      <form action={addItem} className="flex grow flex-col gap-y-4">
        <p className="font-bold">{item.name}</p>

        <p>
          <Cost amount={item.cost} />
        </p>

        <SubmitButton>Add</SubmitButton>

        <HiddenInput name="itemId" value={item.id.toString()} />
        <HiddenInput name="locationSlug" value={locationSlug} />
        <HiddenInput name="handoff" value={handoff} />
      </form>
    </div>
  )
}
