import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-ivory-medium">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center" aria-label="Home">
          <div className="hidden md:block">
            {/* Desktop Logo */}
            <svg width="143" height="16" viewBox="0 0 143 16" className="fill-black">
              <path d="M32.73 0h-6.945L38.45 16h6.945L32.73 0ZM12.665 0 0 16h7.082l2.59-3.36h13.25l2.59 3.36h7.082L19.929 0h-7.264Zm-.702 9.668 4.334-5.623 4.334 5.623h-8.668Z" />
            </svg>
          </div>
          <div className="md:hidden">
            {/* Mobile Logo */}
            <svg width="32" height="32" viewBox="0 0 46 32" className="fill-black">
              <path d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z" />
            </svg>
          </div>
        </Link>

        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-6">
            <button className="nav-link">Claude</button>
            <button className="nav-link">API</button>
            <button className="nav-link">Solutions</button>
            <button className="nav-link">Research</button>
            <button className="nav-link">Commitments</button>
            <button className="nav-link">Learn</button>
            <Link href="/" className="nav-link">News</Link>
          </nav>

          <Link 
            href="https://claude.ai"
            className="btn-primary ml-6"
            target="_blank"
            rel="noopener"
          >
            Try Claude
          </Link>

          <button className="md:hidden ml-4" aria-label="Navigation menu">
            <svg width="24" height="24" viewBox="0 0 40 40" className="fill-black">
              <path d="M5.418 25.375v-2.083h29.166v2.083H5.418Zm0-8.667v-2.083h29.166v2.083H5.418Z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
} 