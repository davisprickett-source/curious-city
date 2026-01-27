import { GasparillaExperience } from '@/components/scrollytelling/gasparilla'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ city: string }>
}

export const metadata: Metadata = {
  title: 'The Pirate Who Never Was - An Immersive Experience | Tampa | The Curious City',
  description: 'How Tampa invented a fake buccaneer and turned the lie into the third-largest parade in the country.',
}

export default async function GasparillaPage({ params }: PageProps) {
  const { city } = await params
  
  if (city !== 'tampa') {
    notFound()
  }
  
  return <GasparillaExperience />
}
