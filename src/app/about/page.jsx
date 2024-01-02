import { AboutHero } from '@/components/AboutHero'
import { AlternatingFeatures } from '@/components/AlternatingFeatures'
import { Stats } from '@/components/Stats'
import { Staff } from '@/components/Staff'
import { Values } from '@/components/Values'

export const metadata = {
  title: 'About us - Bright',
  description:
    "Learn about Bright Preschool & Elementary's mission, philosophy, and dedicated team. Explore our commitment to nurturing young minds, fostering creativity, and empowering children for a bright future.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* Gradient background transition */}
      <div className="h-32 w-full bg-gradient-to-b from-purple-25 to-white sm:h-40 lg:h-44" />

      <AlternatingFeatures />
      <Stats />
      <Staff />
      <Values />
    </>
  )
}
