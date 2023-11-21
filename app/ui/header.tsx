import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 text-center text-2xl font-bold tracking-widest text-pokemonblue dark:text-pokemonyellow">
      <Link href="/" className="no-underline">
        pokécommerce
      </Link>
    </header>
  )
}
