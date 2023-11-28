import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="p-4">
      <Link href="/about" className="link">
        About
      </Link>
    </footer>
  )
}
