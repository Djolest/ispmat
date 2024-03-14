import Link from 'next/link';

export default function Nav() {
    return (
    <nav className='flex items-center justify-around bg-blue-500 text-white h-8'>
        <Link href="/novosti">
            <span>Novosti</span>
        </Link>
        <Link href="/materijali">
            <span>Materijali</span>
        </Link>
        <Link href="/galerija">
            <span>Galerija</span>
        </Link>
        <Link href="/onama">
            <span>O nama</span>
        </Link>
    </nav>
  )
}