'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { DiscoveryBox as DiscoveryBoxType } from '@/types/directory'

interface DiscoveryBoxProps {
  box: DiscoveryBoxType
}

/**
 * Discovery box that appears between establishment listings
 * Displays curiosities, dark history, hidden gems, or lost & loved content
 */
export function DiscoveryBox({ box }: DiscoveryBoxProps) {
  const { type, content } = box

  // Type-specific styling
  const typeConfig = {
    'curiosity': {
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      accentColor: 'text-amber-600',
      label: 'Curiosity',
    },
    'dark-history': {
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-300',
      accentColor: 'text-slate-700',
      label: 'Dark History',
    },
    'hidden-gem': {
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      accentColor: 'text-emerald-600',
      label: 'Hidden Gem',
    },
    'lost-and-loved': {
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      accentColor: 'text-rose-600',
      label: 'Lost & Loved',
    },
  }

  const config = typeConfig[type]

  // Extract common content fields
  const title = 'title' in content ? content.title : ('name' in content ? content.name : 'Unknown')
  const body = 'body' in content ? content.body : ('description' in content ? content.description : '')
  const image = content.image

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`${config.bgColor} ${config.borderColor} border-2 rounded-xl overflow-hidden shadow-lg my-12`}
    >
      <div className="p-6 md:p-8">
        {/* Label */}
        <div className="mb-4">
          <span className={`inline-block text-xs font-bold uppercase tracking-wider ${config.accentColor}`}>
            {config.label}
          </span>
        </div>

        <div className="grid md:grid-cols-[2fr,1fr] gap-6">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h3>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              {body}
            </div>

            {/* Additional fields for specific types */}
            {'year' in content && content.year && (
              <div className="mt-4 text-sm text-gray-600">
                <span className="font-semibold">Year:</span> {content.year}
              </div>
            )}

            {'location' in content && content.location && (
              <div className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Location:</span> {content.location.name}
              </div>
            )}

            {/* Sources */}
            {content.sources && content.sources.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Sources
                </p>
                <div className="space-y-1">
                  {content.sources.map((source, i) => (
                    <div key={i} className="text-sm text-gray-600">
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {source.title}
                        </a>
                      ) : (
                        <span>{source.title}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="400px"
              />
              {image.credit && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
                  {image.credit}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
