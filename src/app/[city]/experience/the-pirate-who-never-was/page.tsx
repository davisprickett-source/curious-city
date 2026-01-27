import { GasparillaExperience } from '@/components/scrollytelling/gasparilla'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface ExperiencePageProps {
  params: Promise<{ city: string }>
}

export const metadata: Metadata = {
  title: 'The Pirate Who Never Was - An Immersive Experience | Tampa | The Curious City',
  description: 'How Tampa invented a fake buccaneer, sold him to America, and turned the lie into the third-largest parade in the country. An immersive scrollytelling experience.',
  openGraph: {
    title: 'The Pirate Who Never Was',
    description: 'How Tampa invented a fake buccaneer and turned the lie into the third-largest parade in the country.',
    type: 'article',
  },
}

export default async function GasparillaExperiencePage({ params }: ExperiencePageProps) {
  const { city } = await params
  
  // Only available for Tampa
  if (city !== 'tampa') {
    notFound()
  }
  
  return <GasparillaExperience />
}
