import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: "Core views on AI Safety",
    icon: "/images/safety-icon.svg",
    bgColor: "bg-[#EAE7E2]",
    href: "/"
  },
  {
    title: "Anthropic's Responsible Scaling Policy",
    icon: "/images/scaling-icon.svg",
    bgColor: "bg-[#D8E4E4]",
    href: "/"
  },
  {
    title: "Anthropic Academy: Learn to build with Claude",
    icon: "/images/academy-icon.svg",
    bgColor: "bg-[#E5E5EE]",
    href: "/"
  }
]

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link 
            key={index} 
            href={feature.href}
            className={`${feature.bgColor} p-12 rounded-2xl hover:opacity-90 transition-opacity flex flex-col justify-between min-h-[280px]`}
          >
            <div className="flex-1 flex items-center justify-center mb-8">
              <div className="relative w-40 h-40">
                <Image
                  src={feature.icon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold">{feature.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
} 