import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-[#F7F5F2]">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ANTHROPIC
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="#claude" className="nav-link">Claude</Link>
          <Link href="#api" className="nav-link">API</Link>
          <Link href="#solutions" className="nav-link">Solutions</Link>
          <Link href="#research" className="nav-link">Research</Link>
          <Link href="#commitments" className="nav-link">Commitments</Link>
          <Link href="#learn" className="nav-link">Learn</Link>
          <Link href="#news" className="nav-link">News</Link>
          <Link 
            href="/try-claude" 
            className="btn-primary"
          >
            Try Claude
          </Link>
        </div>
      </nav>
    </header>
  )
} 