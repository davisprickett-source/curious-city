'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'

// ============================================
// FONTS
// ============================================

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

// ============================================
// COLORS
// ============================================

const c = {
  void: '#08080a',
  night: '#12121a',
  ink: '#1a1a24',
  rust: '#8b4513',
  amber: '#c9a227',
  gold: '#d4af37',
  cream: '#f5f0e8',
  bone: '#e8e0d4',
  blood: '#6b0f1a',
  sea: '#0d1820',
  seaDeep: '#060d12',
  foam: '#d4e5ed',
}

// ============================================
// ANIMATED WAVE LAYERS
// ============================================

function WaveLayer({ 
  className = '', 
  delay = 0, 
  amplitude = 8,
  frequency = 1,
  opacity = 0.3,
  color = '#c9a227'
}: { 
  className?: string
  delay?: number
  amplitude?: number
  frequency?: number
  opacity?: number
  color?: string
}) {
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    let frame: number
    let start: number | null = null
    
    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      // Gentle wave motion
      setOffset(Math.sin((elapsed / 3000) * frequency + delay) * amplitude)
      frame = requestAnimationFrame(animate)
    }
    
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [delay, amplitude, frequency])

  // Generate wave path with smooth bezier curves
  const generateWavePath = () => {
    const width = 100
    const height = 20
    const waves = 4
    const waveWidth = width / waves
    
    let path = `M0 ${height / 2 + offset}`
    
    for (let i = 0; i < waves; i++) {
      const x1 = i * waveWidth + waveWidth / 4
      const x2 = i * waveWidth + waveWidth / 2
      const x3 = i * waveWidth + (3 * waveWidth) / 4
      const x4 = (i + 1) * waveWidth
      
      const y1 = height / 2 - amplitude + offset
      const y2 = height / 2 + offset
      const y3 = height / 2 + amplitude + offset
      
      path += ` Q${x1} ${y1}, ${x2} ${y2} Q${x3} ${y3}, ${x4} ${y2}`
    }
    
    path += ` L${width} ${height} L0 ${height} Z`
    return path
  }

  return (
    <svg 
      viewBox="0 0 100 20" 
      className={className} 
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={`waveFade-${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={generateWavePath()} fill={`url(#waveFade-${delay})`} />
    </svg>
  )
}

function AnimatedWaves({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-x-0 bottom-0 pointer-events-none ${className}`}>
      {/* Back layer - slowest, most subtle */}
      <WaveLayer 
        className="absolute bottom-12 w-full h-16"
        delay={0}
        amplitude={4}
        frequency={0.5}
        opacity={0.15}
        color={c.foam}
      />
      {/* Middle layer */}
      <WaveLayer 
        className="absolute bottom-8 w-full h-14"
        delay={1}
        amplitude={6}
        frequency={0.7}
        opacity={0.2}
        color={c.amber}
      />
      {/* Front layer - fastest, most prominent */}
      <WaveLayer 
        className="absolute bottom-4 w-full h-12"
        delay={2}
        amplitude={8}
        frequency={0.9}
        opacity={0.25}
        color={c.gold}
      />
      {/* Foam line at very front */}
      <div 
        className="absolute bottom-0 w-full h-2"
        style={{
          background: `linear-gradient(to top, ${c.seaDeep} 0%, transparent 100%)`,
        }}
      />
    </div>
  )
}

// ============================================
// ENHANCED PIRATE SHIP SVG
// ============================================

function PirateShip({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Ship body gradient */}
        <linearGradient id="hullGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
        {/* Sail gradient */}
        <linearGradient id="sailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
        {/* Mist effect */}
        <filter id="mist" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      
      {/* Atmospheric mist behind ship */}
      <ellipse cx="250" cy="320" rx="200" ry="60" fill="currentColor" opacity="0.05" filter="url(#mist)" />
      
      {/* Hull - detailed curved shape */}
      <path
        d="M60 320 
           Q80 340 150 345 
           L350 345 
           Q420 340 440 320 
           L420 290 
           Q380 295 250 295 
           Q120 295 80 290 
           Z"
        fill="url(#hullGrad)"
      />
      
      {/* Hull details - planking lines */}
      <path d="M90 305 Q250 310 410 305" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M85 315 Q250 320 415 315" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M80 325 Q250 330 420 325" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
      
      {/* Bow ornament */}
      <path d="M60 320 Q45 310 40 295 Q50 300 60 295" fill="currentColor" opacity="0.7" />
      
      {/* Stern castle */}
      <rect x="380" y="270" width="50" height="25" fill="currentColor" opacity="0.6" />
      <rect x="385" y="250" width="40" height="25" fill="currentColor" opacity="0.5" />
      
      {/* Main mast */}
      <rect x="247" y="50" width="6" height="250" fill="currentColor" opacity="0.8" />
      {/* Crow's nest */}
      <ellipse cx="250" cy="55" rx="12" ry="4" fill="currentColor" opacity="0.6" />
      <rect x="240" y="48" width="20" height="10" fill="currentColor" opacity="0.5" />
      
      {/* Fore mast */}
      <rect x="147" y="90" width="5" height="200" fill="currentColor" opacity="0.7" />
      
      {/* Mizzen mast */}
      <rect x="347" y="110" width="5" height="160" fill="currentColor" opacity="0.7" />
      
      {/* Bowsprit */}
      <line x1="60" y1="290" x2="10" y2="240" stroke="currentColor" strokeWidth="4" opacity="0.6" />
      
      {/* Main sail - full billowing */}
      <path
        d="M160 100 
           Q250 70 250 100 
           L250 230 
           Q200 245 160 230 
           Z"
        fill="url(#sailGrad)"
      />
      <path
        d="M253 100 
           Q250 70 340 100 
           L340 230 
           Q300 245 253 230 
           Z"
        fill="url(#sailGrad)"
      />
      
      {/* Fore sail */}
      <path
        d="M80 120 
           Q150 95 150 120 
           L150 220 
           Q115 232 80 220 
           Z"
        fill="url(#sailGrad)"
      />
      
      {/* Mizzen sail */}
      <path
        d="M350 130 
           Q350 110 410 130 
           L410 220 
           Q380 230 350 220 
           Z"
        fill="url(#sailGrad)"
      />
      
      {/* Jib sail on bowsprit */}
      <path
        d="M15 245 
           Q60 200 150 100 
           L150 150 
           Q80 200 50 280 
           Z"
        fill="url(#sailGrad)"
      />
      
      {/* Rigging - main */}
      <path d="M70 290 Q150 180 250 50" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M430 290 Q350 180 250 50" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M250 50 L250 290" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
      
      {/* Cross rigging */}
      <path d="M160 100 L340 100" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
      <path d="M160 150 L340 150" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
      <path d="M160 200 L340 200" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
      
      {/* Jolly Roger flag */}
      <rect x="250" y="30" width="25" height="18" fill="currentColor" opacity="0.5" />
      <circle cx="262" cy="38" r="3" fill={c.void} />
      <path d="M258 44 L266 44 M259 46 L265 46" stroke={c.void} strokeWidth="1" />
      
      {/* Cannons visible on deck */}
      <circle cx="120" cy="288" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="180" cy="288" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="320" cy="288" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="380" cy="288" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

// ============================================
// DECORATIVE WAVE DIVIDER
// ============================================

function WaveDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 8" className={className} preserveAspectRatio="none">
      <path
        d="M0 4 Q12.5 1 25 4 T50 4 T75 4 T100 4"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

function OrnateRule({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="ruleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="30%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="10" x2="85" y2="10" stroke="url(#ruleGrad)" strokeWidth="1" />
      <circle cx="100" cy="10" r="3" fill="currentColor" opacity="0.6" />
      <line x1="115" y1="10" x2="200" y2="10" stroke="url(#ruleGrad)" strokeWidth="1" />
    </svg>
  )
}

// ============================================
// UTILITY HOOKS
// ============================================

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, threshold])
  return inView
}

// ============================================
// HERO SECTION - The Entrance
// ============================================

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [titleVisible, setTitleVisible] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  
  // Hero fades as we scroll past
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.9], [1, 1.05])
  
  // Ship rises from below during scroll
  const shipY = useTransform(scrollYProgress, [0, 0.5], ['20%', '-5%'])
  const shipOpacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.85], [0, 0.5, 0.4, 0])
  const shipScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  
  // Fog intensity increases as ship rises
  const fogOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.3, 0.5, 0.2])

  useEffect(() => {
    const timer = setTimeout(() => setTitleVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="relative"
      style={{ height: '220vh' }}
    >
      <motion.div 
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        {/* Deep sea background */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale: heroScale, backgroundColor: c.seaDeep }}
        >
          {/* Gradient: deepest at bottom, slightly lighter at top */}
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 50% 70%, ${c.sea} 0%, ${c.seaDeep} 50%, ${c.void} 100%)`,
            }}
          />
          
          {/* Stars/particles in the sky */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, ${c.cream} 1px, transparent 1px),
                               radial-gradient(circle at 80% 20%, ${c.cream} 1px, transparent 1px),
                               radial-gradient(circle at 40% 15%, ${c.cream} 0.5px, transparent 0.5px),
                               radial-gradient(circle at 60% 25%, ${c.cream} 0.5px, transparent 0.5px),
                               radial-gradient(circle at 10% 10%, ${c.cream} 0.5px, transparent 0.5px)`,
              backgroundSize: '100% 100%',
            }}
          />
          
          {/* Film grain texture */}
          <div 
            className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Fog/mist layer */}
          <motion.div 
            className="absolute inset-0"
            style={{ opacity: fogOpacity }}
          >
            <div 
              className="absolute inset-x-0 bottom-0 h-1/2"
              style={{
                background: `linear-gradient(to top, 
                  rgba(200,200,210,0.15) 0%, 
                  rgba(200,200,210,0.05) 30%,
                  transparent 100%)`,
              }}
            />
          </motion.div>
          
          {/* Ship rising from below */}
          <motion.div 
            className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none"
            style={{ 
              y: shipY, 
              opacity: shipOpacity,
              scale: shipScale,
            }}
          >
            <PirateShip className="w-[85vw] max-w-[650px] text-[#c9a227]" />
          </motion.div>
          
          {/* Animated waves at bottom */}
          <AnimatedWaves className="h-32" />
          
          {/* Vignette */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, transparent 40%, ${c.void}dd 100%)`,
            }}
          />
        </motion.div>
        
        {/* Title content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <AnimatePresence>
            {titleVisible && (
              <>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-xs md:text-sm tracking-[0.5em] uppercase mb-8"
                  style={{ color: c.amber }}
                >
                  Tampa, Florida
                </motion.p>
                
                <motion.h1 className={playfair.className}>
                  <motion.span 
                    initial={{ opacity: 0, y: 50, letterSpacing: '0.3em' }}
                    animate={{ opacity: 1, y: 0, letterSpacing: '0.02em' }}
                    transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
                    style={{ color: c.cream }}
                  >
                    The Pirate
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 60, letterSpacing: '0.2em' }}
                    animate={{ opacity: 1, y: 0, letterSpacing: '0.01em' }}
                    transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="block text-5xl md:text-7xl lg:text-9xl font-medium italic mt-2"
                    style={{ color: c.gold }}
                  >
                    Who Never Was
                  </motion.span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 0.7, scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.1 }}
                  className="my-10"
                >
                  <OrnateRule className="w-48 mx-auto text-[#c9a227]" />
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.4 }}
                  className={`${cormorant.className} text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed font-light`}
                  style={{ color: `${c.cream}cc` }}
                >
                  How Tampa invented a fake buccaneer, sold him to America, 
                  and turned the lie into the third-largest parade in the country
                </motion.p>
              </>
            )}
          </AnimatePresence>
        </div>
        
        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 3 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <span className={`${cormorant.className} text-xs tracking-[0.3em] uppercase mb-2`} style={{ color: c.bone }}>
              scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-[#d4af37] to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ============================================
// SECTION WRAPPER COMPONENTS
// ============================================

interface SectionProps {
  bgColor: string
  children: React.ReactNode
  className?: string
}

function Section({ bgColor, children, className = '' }: SectionProps) {
  return (
    <section 
      className={`relative z-10 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </section>
  )
}

// ============================================
// ARTICLE SECTIONS - Full Content
// ============================================

function IntroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <Section bgColor={c.void}>
      {/* Gradient overlap from hero */}
      <div 
        className="absolute inset-x-0 -top-40 h-40 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${c.void} 100%)`,
        }}
      />
      <div ref={ref} className="relative py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className={`${cormorant.className} text-xl md:text-2xl lg:text-3xl leading-relaxed`} style={{ color: c.bone }}>
              <span 
                className={`${playfair.className} float-left text-6xl md:text-7xl lg:text-8xl font-medium leading-none mr-4 mt-1`}
                style={{ color: c.gold }}
              >
                E
              </span>
              very January, several hundred thousand people gather along Bayshore Boulevard 
              in Tampa to watch a 137-foot steel barge, dressed up as an 18th-century pirate ship, 
              get towed into the harbor by tugboats. The ship carries over 750 men in pirate costumes, 
              firing cannons and throwing beads at the crowds, reenacting the &ldquo;invasion&rdquo; of Tampa 
              by the legendary buccaneer Jose Gaspar.
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className={`${cormorant.className} text-xl md:text-2xl leading-relaxed mt-8`}
            style={{ color: c.bone }}
          >
            It is, by most accounts, the third-largest parade in America, trailing only 
            the Rose Parade and Macy&apos;s Thanksgiving spectacular. It generates over $40 million 
            in local economic activity. And it celebrates a man who never existed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="my-16"
          >
            <OrnateRule className="w-32 mx-auto text-[#8b4513]" />
          </motion.div>
          
          <motion.blockquote
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative pl-6 md:pl-8 border-l-2"
            style={{ borderColor: c.blood }}
          >
            <p className={`${playfair.className} text-xl md:text-3xl italic leading-tight`} style={{ color: `${c.cream}cc` }}>
              &ldquo;Whether Gasparilla, the pirate, actually existed or not is a moot point.&rdquo;
            </p>
            <footer className={`${cormorant.className} text-base mt-4`} style={{ color: c.amber }}>
              — Ye Mystic Krewe of Gasparilla, Centennial History Document, 2004
            </footer>
          </motion.blockquote>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className={`${cormorant.className} text-lg md:text-xl mt-12`}
            style={{ color: `${c.bone}cc` }}
          >
            This is not disputed. Even the Ye Mystic Krewe of Gasparilla, the private social club that 
            has organized the festival since 1904, has conceded the point. Their own centennial history 
            document notes that &ldquo;scholarly research conducted in both Spanish and American archives 
            has not uncovered any evidence of Gaspar&apos;s existence.&rdquo;
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.65 }}
            className={`${cormorant.className} text-lg md:text-xl mt-6`}
            style={{ color: `${c.bone}cc` }}
          >
            But how does a city invent a pirate? How does a fiction become so embedded that 
            the Library of Congress once catalogued it as fact, that a major NFL franchise 
            named itself for the myth, that an entire regional economy organizes itself around 
            celebrating someone&apos;s fabricated biography?
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.75 }}
            className={`${cormorant.className} text-xl md:text-2xl mt-8 font-medium`}
            style={{ color: c.cream }}
          >
            The story of Jose Gaspar is really a story about American boosterism, 
            about the malleability of history when money is involved, and about how 
            desperately we want our places to have romantic pasts even when they don&apos;t.
          </motion.p>
        </div>
      </div>
    </Section>
  )
}

function LegendSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <Section bgColor={c.bone}>
      <div ref={ref} className="relative py-24 md:py-32">
        {/* Subtle ship watermark */}
        <div className="absolute top-20 right-0 w-1/2 max-w-md opacity-[0.025] pointer-events-none">
          <PirateShip className="w-full text-[#1a1a24]" />
        </div>
        
        <div className="relative max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: c.rust }}>
              The Legend
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-medium`} style={{ color: c.ink }}>
              As Tampa Tells It
            </h2>
          </motion.div>
          
          <div className={`${cormorant.className} text-lg md:text-xl leading-relaxed space-y-6`} style={{ color: c.ink }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              According to the story Tampa has told itself for over a century, Jose Gaspar 
              was born to a Spanish aristocratic family around 1756. He entered the Naval 
              Academy in Barcelona at eighteen, rose to Lieutenant by twenty-two, and served 
              honorably until some combination of romantic betrayal, false accusations, and 
              disillusionment with the crown drove him to piracy.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              The details vary depending on who&apos;s telling it. In one version, he was a councilor 
              to King Charles III who was framed for stealing the crown jewels by a spurned lover. 
              In another, he was a troubled youth who kidnapped a girl for ransom and was given a 
              choice between prison and the Navy. The inconsistencies never seem to bother anyone.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              What the legends agree on is that Gaspar established a &ldquo;pirate kingdom&rdquo; 
              on Gasparilla Island, terrorizing ships along Florida&apos;s Gulf Coast for nearly 
              forty years. Male prisoners were killed or forced to join his crew. Female captives 
              were taken to Captiva Island—supposedly named for this very practice—to be held for 
              ransom or as concubines.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="py-8 my-8 border-y"
              style={{ borderColor: `${c.rust}30` }}
            >
              <p className={`${playfair.className} text-2xl md:text-3xl italic text-center`} style={{ color: c.rust }}>
                His treasure allegedly amounted to $30 million—<br />
                <span className="text-xl md:text-2xl">nearly four times the entire U.S. military budget in 1821.</span>
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              The most elaborate subplot involves a Spanish princess named Josefa de Mayorga, 
              daughter of a Viceroy, whom Gaspar captured in 1801. Smitten, he tried to win 
              her love by showering her with treasures. When she repeatedly rejected him, 
              his crew grew restless and pressured him to dispose of her.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              In a moment of anguished madness, Gaspar beheaded the princess himself, then 
              remained inconsolable for the rest of his days. He buried her on a nearby island 
              and named it &ldquo;Useppa&rdquo; in her honor.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              When the USS Enterprise finally cornered his fleet in 1821, Gaspar chose death 
              over capture. He wrapped himself in anchor chain and leapt into the sea.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="italic font-medium text-xl"
              style={{ color: c.rust }}
            >
              It&apos;s all wonderfully operatic. It&apos;s also complete nonsense.
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function EvidenceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)
  const [stamped, setStamped] = useState(false)
  
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setStamped(true), 1200)
      return () => clearTimeout(t)
    }
  }, [inView])

  const evidence = [
    { 
      title: 'No Records', 
      text: 'No mention of Jose Gaspar appears in Spanish or American ship logs, court records, newspapers, or archives from his supposed era.' 
    },
    { 
      title: 'Wrong Ship', 
      text: 'The USS Enterprise, which supposedly destroyed Gaspar\'s fleet in 1821, was documented in Cuba at the time, not Florida. The heroic final battle simply could not have happened.' 
    },
    { 
      title: 'Wrong Names', 
      text: 'The place names supposedly given by Gaspar—including "Gasparilla," "Captiva," and "Sanibel"—appear on Spanish and English maps from the early 1700s, decades before the pirate supposedly arrived.' 
    },
    { 
      title: 'No Treasure', 
      text: 'No ruins, artifacts, treasure, or murder victims attributed to Gaspar have ever been discovered. A Bernard Romans map from 1774 shows "Boca Gasparilla"—twelve years before Gaspar allegedly began his reign.' 
    },
  ]

  return (
    <Section bgColor={c.void}>
      <div ref={ref} className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: c.amber }}>
              The Problem
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-medium`} style={{ color: c.cream }}>
              The Evidence
            </h2>
            <p className={`${cormorant.className} text-lg md:text-xl mt-4 italic`} style={{ color: `${c.cream}55` }}>
              (There isn&apos;t any)
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${cormorant.className} text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto`}
            style={{ color: `${c.cream}aa` }}
          >
            The case against Gaspar&apos;s existence isn&apos;t merely that we lack evidence for him. 
            It&apos;s that we have actively searched for such evidence and found nothing—while finding 
            considerable evidence that the entire story was invented in the early twentieth century 
            for commercial purposes.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {evidence.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="p-6 md:p-8 relative overflow-hidden"
                style={{ 
                  backgroundColor: `${c.blood}10`,
                  border: `1px solid ${c.blood}20`,
                }}
              >
                <h3 className={`${playfair.className} text-xl md:text-2xl font-medium mb-3`} style={{ color: c.cream }}>
                  {item.title}
                </h3>
                <p className={`${cormorant.className} text-base md:text-lg leading-relaxed`} style={{ color: `${c.cream}99` }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* FICTION stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 3, rotate: -35 }}
            animate={stamped ? { opacity: 0.9, scale: 1, rotate: -12 } : {}}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="absolute top-20 right-4 md:right-16 pointer-events-none select-none"
          >
            <div 
              className={`${playfair.className} text-5xl md:text-7xl font-bold uppercase tracking-wider px-5 py-2`}
              style={{ 
                color: c.blood,
                border: `5px solid ${c.blood}`,
                textShadow: `2px 2px 0 ${c.void}`,
              }}
            >
              Fiction
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className={`${cormorant.className} text-lg md:text-xl text-center mt-12 max-w-2xl mx-auto`}
            style={{ color: `${c.cream}aa` }}
          >
            Historical documents suggest the name &ldquo;Gasparilla&rdquo; actually came from Friar Gaspar, 
            a Spanish missionary who visited the native Calusa people in the 1600s. The suffix 
            &ldquo;-illa&rdquo; means &ldquo;beloved&rdquo; in Spanish, not &ldquo;outlaw&rdquo; 
            as some legend-promoters have claimed.
          </motion.p>
        </div>
      </div>
    </Section>
  )
}

function FabricatorsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <Section bgColor={c.bone}>
      <div ref={ref} className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: c.rust }}>
              The Fabricators
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-medium`} style={{ color: c.ink }}>
              The Con Man &amp; the Railroad
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${cormorant.className} text-lg md:text-xl mb-12`}
            style={{ color: `${c.ink}dd` }}
          >
            So where did Gaspar come from? The trail leads to a fisherman, a railroad, 
            and a publicist who cheerfully admitted he made the whole thing up.
          </motion.p>
          
          {/* Gomez character card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 pl-6 md:pl-8 border-l-4 py-4"
            style={{ borderColor: c.amber, backgroundColor: `${c.amber}08` }}
          >
            <h3 className={`${playfair.className} text-2xl md:text-3xl font-medium mb-1`} style={{ color: c.ink }}>
              Juan &ldquo;Panther Key John&rdquo; Gomez
            </h3>
            <p className="text-sm uppercase tracking-wider mb-4" style={{ color: c.rust }}>
              The Storyteller
            </p>
            <div className={`${cormorant.className} text-lg md:text-xl leading-relaxed space-y-4`} style={{ color: `${c.ink}dd` }}>
              <p>
                The original source appears to be Juan Gomez, known as &ldquo;Panther Key John,&rdquo; 
                a fisherman, hunting guide, and occasional blockade runner who lived on Panther Key 
                in Florida&apos;s Ten Thousand Islands.
              </p>
              <p>
                Gomez claimed at various times to have been born in 1776, 1778, 1781, or 1795, 
                in Honduras, Portugal, Corsica, or Mauritius. Shortly before drowning in 1900, 
                he claimed to be 122 or 123 years old. He told tourists he had been Gaspar&apos;s 
                &ldquo;cabin boy&rdquo; and &ldquo;brother-in-law,&rdquo; and was known to sell 
                fake treasure maps to gullible visitors.
              </p>
            </div>
          </motion.div>
          
          {/* LeMoyne character card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-14 pl-6 md:pl-8 border-l-4 py-4"
            style={{ borderColor: c.amber, backgroundColor: `${c.amber}08` }}
          >
            <h3 className={`${playfair.className} text-2xl md:text-3xl font-medium mb-1`} style={{ color: c.ink }}>
              G.P. &ldquo;Pat&rdquo; LeMoyne
            </h3>
            <p className="text-sm uppercase tracking-wider mb-4" style={{ color: c.rust }}>
              The Publicist
            </p>
            <div className={`${cormorant.className} text-lg md:text-xl leading-relaxed space-y-4`} style={{ color: `${c.ink}dd` }}>
              <p>
                The legend might have died with Gomez if not for the Charlotte Harbor and Northern Railway. 
                Around 1905-1907, a publicist named G.P. &ldquo;Pat&rdquo; LeMoyne wrote a promotional 
                brochure for the railroad, combining and embellishing Gomez&apos;s tall tales.
              </p>
              <p>
                The brochure was designed to promote the Gasparilla Inn in Boca Grande and increase 
                the value of land holdings along the rail line. LeMoyne gave the pirate a dramatic 
                biography, complete with the beheaded princess and the glorious final battle.
              </p>
            </div>
          </motion.div>
          
          {/* Confession quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center py-8"
          >
            <OrnateRule className="w-24 mx-auto mb-10 text-[#8b4513]" />
            <blockquote>
              <p className={`${playfair.className} text-2xl md:text-4xl lg:text-5xl italic leading-tight`} style={{ color: c.rust }}>
                &ldquo;A cockeyed lie without a true fact in it.&rdquo;
              </p>
              <footer className={`${cormorant.className} text-base md:text-lg mt-6`} style={{ color: c.ink }}>
                — Pat LeMoyne, 1949, admitting his biography of Jose Gaspar was a fabrication<br />
                <span className="italic text-sm">written in a dramatic style &ldquo;tourists like to hear&rdquo;</span>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

function HistorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  const timeline = [
    { year: '1904', event: 'First "invasion" — 50 businessmen on horseback, costumes rented from New Orleans' },
    { year: '1911', event: 'First sea invasion aboard a borrowed three-masted schooner' },
    { year: '1937', event: 'Ye Mystic Krewe purchases its own vessel' },
    { year: '1954', event: 'Jose Gasparilla II commissioned — 137-foot steel barge converted to look like a pirate ship' },
    { year: 'Today', event: '300,000+ spectators, $40M economic impact annually' },
  ]

  return (
    <Section bgColor={c.night}>
      <div ref={ref} className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: c.amber }}>
              The Origin
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-medium`} style={{ color: c.cream }}>
              How Tampa Got a Pirate
            </h2>
          </motion.div>
          
          <div className={`${cormorant.className} text-lg md:text-xl leading-relaxed space-y-6`} style={{ color: c.bone }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              In 1904, Louise Francis Dodge (society editor of the Tampa Tribune) and George W. Hardee 
              (a New Orleans-born engineer working for the U.S. Army Corps of Engineers) wanted to 
              enliven Tampa&apos;s May Day celebration. Hardee, familiar with Mardi Gras traditions, 
              suggested a krewe-style event with participants dressed as pirates.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              They borrowed the obscure Gasparilla story from a hundred miles down the coast 
              and gave the pirate his first name &ldquo;Jose&rdquo; and death date of 1821.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              On May 4, 1904, about fifty Tampa businessmen, with costumes rented from New Orleans, 
              rode into Tampa on horseback and &ldquo;captured the city&rdquo; during the May Day Festival Parade. 
              The public had been told a pirate ship called the &ldquo;Octopus&rdquo; was anchored offshore, 
              but anyone attempting to see it was &ldquo;threatened with death.&rdquo;
            </motion.p>
          </div>
          
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 pt-8 border-t"
            style={{ borderColor: `${c.gold}30` }}
          >
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span 
                    className={`${playfair.className} text-lg md:text-xl font-medium shrink-0 w-20`}
                    style={{ color: c.gold }}
                  >
                    {item.year}
                  </span>
                  <span className={`${cormorant.className} text-base md:text-lg`} style={{ color: `${c.bone}cc` }}>
                    {item.event}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className={`${cormorant.className} text-lg md:text-xl mt-10`}
            style={{ color: `${c.bone}cc` }}
          >
            The Jose Gasparilla II is described as the world&apos;s only fully-rigged pirate ship 
            built for &ldquo;piratical purposes&rdquo; in 200 years. It cost $100,000 and took seven 
            months to build. It&apos;s actually a 137-foot steel barge converted to look like a West 
            Indiaman, and it cannot propel itself—it must be towed by tugboats. A separate crew of 
            sober operators actually controls the ship while the pirates party.
          </motion.p>
        </div>
      </div>
    </Section>
  )
}

function KreweSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <Section bgColor={c.bone}>
      <div ref={ref} className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: c.rust }}>
              Power &amp; Exclusion
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-medium`} style={{ color: c.ink }}>
              The Pirates Who Rule Tampa
            </h2>
          </motion.div>
          
          <div className={`${cormorant.className} text-lg md:text-xl leading-relaxed space-y-6`} style={{ color: c.ink }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              The Ye Mystic Krewe of Gasparilla was not simply a party-planning committee. For most 
              of its history, it was an invitation-only social organization drawn from Tampa&apos;s 
              business and civic elite—white, male, and exclusive. Membership overlapped with the 
              Tampa Chamber of Commerce, the Palma Ceia Country Club, and the Tampa Yacht Club.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              An invitation to join the krewe was a sign that you had &ldquo;arrived in the community.&rdquo; 
              The festival served dual purposes: city promotion and exclusive social networking. The coronation 
              balls, debutante presentations, and annual invasions were performances of status, rituals through 
              which Tampa&apos;s power structure displayed and reproduced itself.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              All historical evidence shows the legend was &ldquo;essentially the product and property 
              of Tampa&apos;s Anglo establishment.&rdquo; Despite Tampa being home to one of the largest 
              Hispanic communities in the American South in the early twentieth century—Ybor City&apos;s 
              cigar workers were Cuban, Italian, and Spanish—the krewe remained exclusively white.
            </motion.p>
            
            {/* 1991 Crisis Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="py-8 my-8 px-6 md:px-8 border-l-4"
              style={{ borderColor: c.blood, backgroundColor: `${c.blood}08` }}
            >
              <p className={`${playfair.className} text-xl md:text-2xl font-medium mb-4`} style={{ color: c.blood }}>
                The Super Bowl Integration Crisis — 1991
              </p>
              <div className="space-y-4 text-base md:text-lg" style={{ color: `${c.ink}dd` }}>
                <p>
                  The exclusionary policies finally made national news when Tampa was set to host 
                  Super Bowl XXV. When the NFL learned of the parade&apos;s policies, civil rights 
                  leaders saw an opportunity to force change on a national stage.
                </p>
                <p>
                  Mayor Sandy Freedman threatened to pull city services—police security, permits, 
                  everything. The krewe was faced with a choice: integrate or cancel.
                </p>
                <p className="font-medium" style={{ color: c.ink }}>
                  They claimed it was &ldquo;too late&rdquo; to expand membership for that year&apos;s 
                  parade and chose to cancel the entire event rather than integrate.
                </p>
                <p>
                  The city scrambled to create &ldquo;Bamboleo,&rdquo; a hastily organized multicultural 
                  replacement festival. It rained. The festival bombed.
                </p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Later in 1991, the krewe quietly admitted two Black members and agreed to allow additional 
              krewes to participate. The parade returned in 1992 with an expanded, more diverse participant 
              list. The all-Black Buffalo Soldiers krewe joined that year.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              Today there are Latin krewes, female krewes, a gay krewe, and even a krewe of chefs. 
              The transformation was real, even if it took the threat of national embarrassment to force it.
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function LegendMachineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <Section bgColor={c.night}>
      <div ref={ref} className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: c.amber }}>
              How Fiction Becomes Fact
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-medium`} style={{ color: c.cream }}>
              The Legend Machine
            </h2>
          </motion.div>
          
          <div className={`${cormorant.className} text-lg md:text-xl leading-relaxed space-y-6`} style={{ color: c.bone }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              What&apos;s remarkable about the Gaspar story is how it achieved legitimacy through 
              repetition and institutional support. In 1923, a Boston historian named Francis B.C. Bradlee 
              received a copy of the Gasparilla Inn brochure and, without fact-checking, included the 
              fictional pirate in his book &ldquo;Piracy In The West Indies And Its Suppression.&rdquo;
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              This accidental inclusion in an otherwise scholarly work has caused ongoing confusion 
              about Gaspar&apos;s historical authenticity. Even the Library of Congress was fooled 
              at one point, referring to the Gasparilla documentation as genuine.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              In 1936, Edwin D. Lambright, a Tampa Tribune writer and krewe member, wrote the 
              &ldquo;definitive&rdquo; history of Jose Gaspar, treating him as a real person. 
              The book solidified the legend&apos;s details and gave future generations an 
              authoritative-sounding source to cite. Each retelling added credibility. 
              Each repetition made the fiction more real.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="py-6 my-8 border-y"
              style={{ borderColor: `${c.gold}25` }}
            >
              <p className={`${playfair.className} text-xl md:text-2xl italic text-center`} style={{ color: c.gold }}>
                The fake pirate has become so embedded in Tampa&apos;s identity that 
                distinguishing fiction from reality seems almost beside the point.
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              The legend even shaped Tampa&apos;s professional sports identity. When Tampa was awarded 
              an NFL franchise in 1976, the team name was chosen through a public contest inspired 
              by Gasparilla tradition. The Tampa Bay Buccaneers&apos; logo was designed by Lamar Sparkman, 
              a Tampa Tribune cartoonist and krewe member.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Raymond James Stadium features a 103-foot, 43-ton pirate ship replica that fires cannons 
              when the team scores—fans call it a &ldquo;Mini Gasparilla.&rdquo;
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function ConclusionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.15)

  return (
    <Section bgColor={c.void}>
      <div ref={ref} className="relative py-24 md:py-32 lg:py-40">
        {/* Faint ship watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <PirateShip className="w-[70vw] max-w-[600px] text-white" />
        </div>
        
        <div className="relative max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: c.amber }}>
              The Meaning
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-medium`} style={{ color: c.cream }}>
              What the Fake Pirate Tells Us
            </h2>
          </motion.div>
          
          <div className={`${cormorant.className} text-lg md:text-xl leading-relaxed space-y-6`} style={{ color: `${c.cream}cc` }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              There&apos;s something both charming and unsettling about Tampa&apos;s commitment to 
              its invented buccaneer. On one hand, it&apos;s just a party—a really good party that 
              generates $40 million annually and brings people together. Gaspar harms no one. 
              The costumes are fun. The beads are free. Who cares if the pirate was real?
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              On the other hand, the Gasparilla story is a case study in how history gets made 
              and who gets to make it. The legend was created by railroad promoters to sell land. 
              It was adopted by Tampa&apos;s white business elite and turned into a vehicle for 
              social exclusion. It was defended so fiercely that an entire festival was cancelled 
              rather than share it.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              The &ldquo;tradition&rdquo; that Tampa celebrates is barely a century old, invented 
              by advertisers and maintained by those who profit from it.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="my-12"
            >
              <OrnateRule className="w-32 mx-auto text-[#d4af37]" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl"
              style={{ color: c.cream }}
            >
              Tampa took a publicist&apos;s lie and made it real. They built a ship that cannot sail. 
              They created a krewe that excluded most of the city. They made a fake pirate real 
              through sheer force of repetition and commercial will.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl"
              style={{ color: c.cream }}
            >
              And every January, hundreds of thousands of people gather to celebrate a man who 
              never existed, because at some point the fiction became more important than the truth.
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function FinalMeditation() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.2)

  return (
    <Section bgColor={c.seaDeep}>
      <div ref={ref} className="relative py-32 md:py-40 lg:py-48 flex items-center min-h-[70vh]">
        {/* Animated waves at bottom */}
        <AnimatedWaves className="h-24" />
        
        {/* Subtle radial gradient */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 80%, ${c.sea} 0%, transparent 60%)`,
          }}
        />
        
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl italic leading-tight`}
            style={{ color: c.gold }}
          >
            Perhaps that is the most American story of all.
          </motion.p>
        </div>
      </div>
    </Section>
  )
}

function InfoCallout() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.2)

  return (
    <Section bgColor={c.void}>
      <div ref={ref} className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto px-6 md:px-8"
        >
          <div 
            className="p-6 md:p-8 border-l-4"
            style={{ borderColor: c.gold, backgroundColor: `${c.gold}08` }}
          >
            <h3 className={`${playfair.className} text-lg md:text-xl font-medium mb-3`} style={{ color: c.gold }}>
              When to See It
            </h3>
            <p className={`${cormorant.className} text-base md:text-lg`} style={{ color: `${c.cream}bb` }}>
              Gasparilla Pirate Fest takes place annually in late January. The invasion and parade 
              draw roughly 300,000 spectators. Plan ahead—hotels book up months in advance, and 
              traffic along Bayshore Boulevard is apocalyptic.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="py-16 md:py-20 px-6 text-center" style={{ backgroundColor: c.void }}>
      <OrnateRule className="w-24 mx-auto mb-10 text-[#c9a22755]" />
      
      <p className={`${cormorant.className} text-sm mb-10`} style={{ color: `${c.cream}33` }}>
        An immersive experience by The Curious City
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="/tampa" 
          className={`${cormorant.className} px-8 py-3 text-sm tracking-wide transition-all hover:scale-105`}
          style={{ backgroundColor: c.gold, color: c.void }}
        >
          Explore Tampa
        </a>
        <a 
          href="/tampa/articles/the-pirate-who-never-was" 
          className={`${cormorant.className} px-8 py-3 text-sm tracking-wide transition-all hover:opacity-80 border`}
          style={{ borderColor: `${c.cream}25`, color: c.cream }}
        >
          Read Full Article
        </a>
      </div>
    </footer>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export function GasparillaExperience() {
  return (
    <main className={`${playfair.variable} ${cormorant.variable} antialiased`}>
      <Hero />
      <IntroSection />
      <LegendSection />
      <EvidenceSection />
      <FabricatorsSection />
      <HistorySection />
      <KreweSection />
      <LegendMachineSection />
      <ConclusionSection />
      <FinalMeditation />
      <InfoCallout />
      <Footer />
    </main>
  )
}

export default GasparillaExperience
