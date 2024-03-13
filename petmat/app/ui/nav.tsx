import Link from 'next/link';

export default function Nav() {
    return (
    <nav className='felx justify-between'>
      <Link href="/">
        <span>Početna</span>
      </Link>
      <Link href="/novosti">
        <span>Novosti</span>
      </Link>
      <Link href="/onama">
        <span>O nama</span>
      </Link>
      <Link href="/materijali">
        <span>Materijali</span>
      </Link>
      <Link href="/galerija">
        <span>Galerija</span>
      </Link>
    </nav>
  )
}