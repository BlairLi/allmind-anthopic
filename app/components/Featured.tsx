import Link from 'next/link'

const featuredItems = [
  {
    title: "Tracing the thoughts of a large language model",
    category: "Interpretability",
    date: "Mar 27, 2025",
    href: "/"
  },
  {
    title: "Anthropic Economic Index",
    category: "Societal Impacts",
    date: "Mar 27, 2025",
    href: "/"
  },
  {
    title: "Claude 3.7 Sonnet and Claude Code",
    category: "Product",
    date: "Feb 24, 2025",
    href: "/"
  },
  {
    title: "Claude's extended thinking",
    category: "Product",
    date: "Feb 24, 2025",
    href: "/"
  },
  {
    title: "Alignment faking in large language models",
    category: "Alignment science",
    date: "Dec 18, 2024",
    href: "/"
  }
]

export default function Featured() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-[200px_1fr] gap-16">
        <h2 className="text-2xl font-bold">Featured</h2>
        <div className="space-y-[1px] bg-gray-200">
        {featuredItems.map((item, index) => (
            <div 
              key={index}
              className="bg-[#F7F5F2] py-6"
            >
              <div className="flex items-center justify-between px-6">
          <Link 
            href={item.href}
                  className="text-lg font-medium flex-1 hover:text-gray-400 transition-colors"
          >
                  {item.title}
                </Link>
                <div className="flex items-center gap-8 text-sm">
                  <span className="text-gray-900">{item.category}</span>
                  <span className="text-gray-500">{item.date}</span>
                </div>
              </div>
            </div>
        ))}
        </div>
      </div>
    </section>
  )
} 