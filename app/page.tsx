import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Features from './components/Features'
import Featured from './components/Featured'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <Header />
      <Hero />
      <Mission />
      <Features />
      <Featured />
      <CTA />
    </main>
  )
} 