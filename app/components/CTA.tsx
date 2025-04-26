import Link from 'next/link'

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">
        Want to help us build the future of safe AI?
      </h2>
      <Link 
        href="/careers"
        className="btn-primary text-lg px-8 py-3"
      >
        See open roles
      </Link>
    </section>
  )
} 