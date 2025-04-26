import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: "Core views on AI Safety",
    icon: "/images/safety-icon.svg",
    bgColor: "bg-[#EAE7E2]",
    href: "/safety"
  },
  {
    title: "Anthropic's Responsible Scaling Policy",
    icon: "/images/scaling-icon.svg",
    bgColor: "bg-[#D8E4E4]",
    href: "/scaling"
  },
  {
    title: "Anthropic Academy: Learn to build with Claude",
    icon: "/images/academy-icon.svg",
    bgColor: "bg-[#E5E5EE]",
    href: "/academy"
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
            className={`${feature.bgColor} p-8 rounded-lg hover:opacity-90 transition-opacity`}
          >
            <div className="mb-4 relative w-12 h-12">
              <Image
                src={feature.icon}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
} 