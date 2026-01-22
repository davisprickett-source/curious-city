'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { DirectoryEstablishment } from '@/types/directory'

interface EstablishmentCardProps {
  establishment: DirectoryEstablishment
  index: number
}

/**
 * Card for a single establishment in the directory
 * Displays image, name, description, location, and other details
 */
export function EstablishmentCard({ establishment, index }: EstablishmentCardProps) {
  const {
    name,
    neighborhood,
    vibe,
    order,
    why,
    image,
    images,
    address,
    price,
    website,
    instagram,
    hours,
    featured,
  } = establishment

  // Use first image from images array if no primary image
  const displayImage = image || images?.[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
        featured ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div className="grid md:grid-cols-[400px,1fr] gap-0">
        {/* Image */}
        {displayImage && (
          <div className="relative h-64 md:h-full bg-gray-100">
            <Image
              src={displayImage.src}
              alt={displayImage.alt}
              fill
              className="object-cover"
              sizes="400px"
            />
            {featured && (
              <div className="absolute top-4 left-4 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Featured
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {name}
              </h2>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                {neighborhood && <span>{neighborhood}</span>}
                {price && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="font-semibold">{price}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Vibe */}
          {vibe && (
            <p className="text-base text-gray-600 mb-3 italic">
              {vibe}
            </p>
          )}

          {/* What to order */}
          {order && (
            <div className="mb-3">
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                The Move:
              </span>{' '}
              <span className="text-gray-900">{order}</span>
            </div>
          )}

          {/* Why it's special */}
          {why && (
            <p className="text-gray-700 leading-relaxed mb-4">
              {why}
            </p>
          )}

          {/* Details */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            {hours && (
              <div>
                <span className="font-semibold">Hours:</span> {hours}
              </div>
            )}
            {address && (
              <div>
                <span className="font-semibold">Address:</span> {address}
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Website
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
