import Link from 'next/link'
import { Header } from '@/components'

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="container-page text-center py-12">
          <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
            Page not found
          </h1>
          <p className="text-neutral-600 mb-6">
            We couldn&apos;t find what you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Go home
          </Link>
        </div>
      </main>
    </>
  )
}
