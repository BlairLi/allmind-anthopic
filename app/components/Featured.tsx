import Link from 'next/link'

const featuredItems = [
  {
    title: "Tracing the thoughts of a large language model",
    category: "Interpretability",
    date: "Mar 27, 2025",
    href: "/research/tracing-thoughts"
  },
  {
    title: "Anthropic Economic Index",
    category: "Societal Impacts",
    date: "Mar 27, 2025",
    href: "/research/economic-index"
  },
  {
    title: "Claude 3.7 Sonnet and Claude Code",
    category: "Product",
    date: "Feb 24, 2025",
    href: "/product/claude-3-7"
  },
  {
    title: "Claude's extended thinking",
    category: "Product",
    date: "Feb 24, 2025",
    href: "/product/extended-thinking"
  },
  {
    title: "Alignment faking in large language models",
    category: "Alignment science",
    date: "Dec 18, 2024",
    href: "/research/alignment-faking"
  }
]

export default function Featured() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-xl font-medium mb-8">Featured</h2>
      <div className="space-y-6">
        {featuredItems.map((item, index) => (
          <Link 
            key={index}
            href={item.href}
            className="block hover:bg-white rounded-lg p-4 -mx-4 transition-colors"
          >
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
              <svg 
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
} 