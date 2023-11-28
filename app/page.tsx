import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image src="/hero.gif" width={400} height={300} alt="Funny GIF" />
      <p className="text-center">Body</p>
    </div>
  )
}
