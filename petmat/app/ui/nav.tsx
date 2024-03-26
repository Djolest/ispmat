import Link from 'next/link';
import MaterijaliLink from './nav/materijaliLink';

export default function Nav() {
    return (
    <nav className='flex items-center justify-around bg-blue-500 text-white h-8'>
        <Link href="/novosti">
            <span>Novosti</span>
        </Link>
        <MaterijaliLink />
        <Link href="/galerija">
            <span>Galerija</span>
        </Link>
        <Link href="/onama">
            <span>O nama</span>
        </Link>
        <Link href="/blog">
            <span>Blog</span>
        </Link>
    </nav>
  )
}