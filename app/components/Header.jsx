import Link from 'next/link'
import { Snail } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Snail size={32} />
          <span className="text-2xl font-bold">SlowGrow Snails</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#about" className="hover:text-green-300">About</Link></li>
            <li><Link href="#products" className="hover:text-green-300">Products</Link></li>
            <li><Link href="#contact" className="hover:text-green-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

