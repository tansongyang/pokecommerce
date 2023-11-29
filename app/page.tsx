import Image from 'next/image'

import SearchForm from '@/app/ui/home/search-form'

export default function Home() {
  return (
    <div>
      <Image src="/hero.gif" width={400} height={300} alt="Funny GIF" />
      <SearchForm />
    </div>
  )
}
