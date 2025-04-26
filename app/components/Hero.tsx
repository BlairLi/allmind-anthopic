import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-ivory-medium overflow-hidden">
      <div 
        className="hero-background"
        style={{
          backgroundImage: 'url(https://cdn.sanity.io/images/4zrzovbb/website/6199261f440e13e4bcad470bef31ac8bcbf03622-1425x1993.svg)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="w-[60%]">
          <h1 className="text-6xl font-bold leading-tight mb-16">
            AI <Link href="/research" className="underline-custom">research</Link> and<br />
            <Link href="/products" className="underline-custom">products</Link> that put<br />
            safety at the frontier
          </h1>
          
          <div className="grid grid-cols-2 gap-8">
            <article className="feature-card">
              <div className="mb-8">
              <span className="text-sm text-gray-600 uppercase">CLAUDE.AI</span>
              <h3 className="text-xl font-bold mb-2 mt-1">Meet Claude 3.7 Sonnet</h3>
                <p className="text-sm text-gray-600">
                Claude 3.7 Sonnet, our most intelligent AI model, is now available.
              </p>
              </div>
              <Link 
                href="https://claude.ai"
                className="btn-primary block"
                target="_blank"
                rel="noopener"
              >
                Talk to Claude
              </Link>
            </article>
            
            <article className="feature-card">
              <div className="mb-8">
              <span className="text-sm text-gray-600 uppercase">API</span>
              <h3 className="text-xl font-bold mb-2 mt-1">Build with Claude</h3>
                <p className="text-sm text-gray-600">
                Create AI-powered applications and custom experiences using Claude.
              </p>
              </div>
              <Link 
                href="/"
                className="btn-secondary block"
              >
                Learn more
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
} 