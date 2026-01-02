'use client'

import { motion } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ScrollTextSectionProps {
  content: string
  style?: 'center' | 'split' | 'overlay'
  background?: 'light' | 'dark' | 'gradient'
}

export function ScrollTextSection({
  content,
  style = 'center',
  background = 'light'
}: ScrollTextSectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const { ref: inViewRef, inView } = useInViewHook({
    threshold: 0.3,
    triggerOnce: false,
  })

  const getBackgroundClass = () => {
    switch (background) {
      case 'dark':
        return 'bg-neutral-900 text-white'
      case 'gradient':
        return 'bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white'
      case 'light':
      default:
        return 'bg-white text-neutral-900'
    }
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as any,
      }
    }
  }

  // Split content into paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim())

  if (prefersReducedMotion) {
    return (
      <section
        ref={inViewRef}
        className={`min-h-screen flex items-center justify-center py-16 px-6 ${getBackgroundClass()}`}
      >
        <div className="max-w-4xl mx-auto">
          {style === 'center' && (
            <div className="text-center">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          {style === 'split' && (
            <div className="prose prose-lg prose-neutral max-w-none">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="text-xl md:text-2xl leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section
      ref={inViewRef}
      className={`min-h-screen flex items-center justify-center py-16 px-6 ${getBackgroundClass()}`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {style === 'center' && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentVariants}
            className="text-center"
          >
            {paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 1,
                  delay: 0.2 * i,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        )}

        {style === 'split' && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentVariants}
            className="prose prose-lg md:prose-xl prose-neutral dark:prose-invert max-w-none"
          >
            {paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 * i,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`text-xl md:text-2xl leading-relaxed mb-6 ${
                  background === 'dark' || background === 'gradient'
                    ? 'text-neutral-100'
                    : 'text-neutral-800'
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        )}

        {style === 'overlay' && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentVariants}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
              {paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 * i,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-xl md:text-2xl leading-relaxed mb-6 text-white"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
