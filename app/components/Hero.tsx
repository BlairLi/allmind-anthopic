import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-start">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold leading-tight mb-12">
            AI research <span className="underline-custom">and</span><br />
            products that put<br />
            safety at the frontier
          </h1>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <span className="text-sm text-gray-600 uppercase">CLAUDE.AI</span>
              <h3 className="text-xl font-bold mb-2 mt-1">Meet Claude 3.7 Sonnet</h3>
              <p className="text-sm text-gray-600 mb-4">
                Claude 3.7 Sonnet, our most intelligent AI model, is now available.
              </p>
              <Link href="/claude" className="btn-primary inline-block">
                Talk to Claude
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <span className="text-sm text-gray-600 uppercase">API</span>
              <h3 className="text-xl font-bold mb-2 mt-1">Build with Claude</h3>
              <p className="text-sm text-gray-600 mb-4">
                Create AI-powered applications and custom experiences using Claude.
              </p>
              <Link href="/api" className="btn-secondary inline-block">
                Learn more
              </Link>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 flex justify-center items-start pl-12">
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/images/hero-illustration.svg"
              alt="Abstract illustration representing AI networks"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 