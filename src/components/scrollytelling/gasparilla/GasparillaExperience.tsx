'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
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
}

// ============================================
// SVG ELEMENTS
// ============================================

function ShipSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shipFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Hull */}
      <path
        d="M40 220 Q100 240 200 235 Q300 240 360 220 L340 195 Q200 205 60 195 Z"
        fill="url(#shipFade)"
      />
      {/* Main mast */}
      <rect x="196" y="40" width="8" height="180" fill="currentColor" opacity="0.7" />
      {/* Fore mast */}
      <rect x="106" y="70" width="6" height="140" fill="currentColor" opacity="0.6" />
      {/* Mizzen mast */}
      <rect x="286" y="70" width="6" height="140" fill="currentColor" opacity="0.6" />
      {/* Main sail */}
      <path
        d="M120 80 Q200 60 200 80 L200 170 Q160 180 120 170 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M204 80 Q200 60 280 80 L280 170 Q240 180 204 170 Z"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Fore sail */}
      <path
        d="M60 90 Q110 75 110 90 L110 160 Q85 168 60 160 Z"
        fill="currentColor"
        opacity="0.12"
      />
      {/* Mizzen sail */}
      <path
        d="M290 90 Q290 75 340 90 L340 160 Q315 168 290 160 Z"
        fill="currentColor"
        opacity="0.12"
      />
      {/* Rigging hints */}
      <path d="M50 210 Q110 120 200 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
      <path d="M350 210 Q290 120 200 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
      {/* Flag */}
      <path d="M200 40 L200 20 L230 30 Z" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

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

// ============================================
// UTILITY
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
// OPENING - Sticky hero, content scrolls over
// ============================================

function Opening() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Track when content (next section) is approaching
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  
  // Hero stays fully visible until 60% through container, then fades
  // This means content physically scrolls INTO view before hero fades
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [1, 1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.03])
  
  // Ship animation - rises during initial scroll, fades as we exit
  const shipY = useTransform(scrollYProgress, [0, 0.4], ['15%', '-10%'])
  const shipOpacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.8], [0.08, 0.35, 0.25, 0])

  return (
    <section 
      ref={containerRef} 
      className="relative"
      style={{ height: '200vh' }} // Tall container for sticky to work within
    >
      {/* Sticky hero - pins at top until container scrolls past */}
      <motion.div 
        ref={heroRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        {/* Background layer with scale effect */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale: heroScale, backgroundColor: c.void }}
        >
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 50% 60%, ${c.sea} 0%, ${c.void} 70%)`,
            }}
          />
          
          {/* Film grain */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Ship rising from below */}
          <motion.div 
            className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none"
            style={{ y: shipY, opacity: shipOpacity }}
          >
            <ShipSilhouette className="w-[90vw] max-w-[700px] text-[#c9a227]" />
          </motion.div>
          
          {/* Fog/mist at bottom - helps blend into content */}
          <div 
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background: `linear-gradient(to top, ${c.void} 0%, transparent 100%)`,
            }}
          />
        </motion.div>
        
        {/* Title content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xs md:text-sm tracking-[0.5em] uppercase mb-8"
            style={{ color: c.amber }}
          >
            Tampa, Florida
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className={playfair.className}
          >
            <span 
              className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
              style={{ color: c.cream }}
            >
              The Pirate
            </span>
            <span 
              className="block text-5xl md:text-7xl lg:text-9xl font-medium italic mt-2"
              style={{ color: c.gold }}
            >
              Who Never Was
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.6, scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="my-10"
          >
            <WaveDivider className="w-40 mx-auto text-[#c9a227]" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className={`${cormorant.className} text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed font-light`}
            style={{ color: `${c.cream}bb` }}
          >
            How Tampa invented a fake buccaneer, sold him to America, 
            and turned the lie into the third-largest parade in the country
          </motion.p>
        </div>
        
        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <span className={`${cormorant.className} text-xs tracking-[0.3em] uppercase mb-2`} style={{ color: c.bone }}>
              scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[#d4af37] to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ============================================
// STICKY TEXT SECTION - Text scrolls, bg stays
// ============================================

interface StickyTextSectionProps {
  bgColor: string
  children: React.ReactNode
  minHeight?: string
}

function StickyTextSection({ bgColor, children, minHeight = '100vh' }: StickyTextSectionProps) {
  return (
    <section 
      className="relative z-10"
      style={{ backgroundColor: bgColor, minHeight }}
    >
      {children}
    </section>
  )
}

// ============================================
// ARTICLE SECTIONS
// ============================================

function IntroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <StickyTextSection bgColor={c.void}>
      {/* Gradient overlap - blends hero into this section */}
      <div 
        className="absolute inset-x-0 -top-32 h-32 pointer-events-none"
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
              very January, several hundred thousand souls gather along Bayshore Boulevard 
              to witness what appears to be an 18th-century invasion. A 137-foot vessel, 
              rigged as a pirate ship, emerges from the morning haze of Tampa Bay.
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className={`${cormorant.className} text-xl md:text-2xl leading-relaxed mt-8`}
            style={{ color: c.bone }}
          >
            The ship carries over 750 men in elaborate costume, hurling strings of beads 
            to the roaring crowds. They reenact the invasion of Tampa by the notorious 
            buccaneer Jose Gaspar—a pirate so fearsome, so wealthy, so romantic in his 
            cruelty that his very name became the city&apos;s identity.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="my-16"
          >
            <WaveDivider className="w-24 mx-auto text-[#8b4513]" />
          </motion.div>
          
          <motion.blockquote
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative pl-6 md:pl-8 border-l-2"
            style={{ borderColor: c.blood }}
          >
            <p className={`${playfair.className} text-2xl md:text-4xl lg:text-5xl italic leading-tight`} style={{ color: c.cream }}>
              It is the third-largest parade in America.
            </p>
            <p className={`${playfair.className} text-xl md:text-3xl italic mt-4`} style={{ color: c.gold }}>
              It celebrates a man who never existed.
            </p>
          </motion.blockquote>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`${cormorant.className} text-lg md:text-xl mt-12 italic`}
            style={{ color: `${c.bone}99` }}
          >
            This is not disputed. Even the Ye Mystic Krewe of Gasparilla has conceded the point.
          </motion.p>
        </div>
      </div>
    </StickyTextSection>
  )
}

function LegendSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <StickyTextSection bgColor={c.bone}>
      <div ref={ref} className="relative py-24 md:py-32">
        {/* Subtle ship watermark */}
        <div className="absolute top-20 right-0 w-1/2 max-w-md opacity-[0.03] pointer-events-none">
          <ShipSilhouette className="w-full text-[#1a1a24]" />
        </div>
        
        <div className="relative max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-2" style={{ color: c.rust }}>
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
              honorably until betrayal drove him to piracy.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              He established a kingdom on Gasparilla Island, terrorizing ships along 
              Florida&apos;s Gulf Coast for forty years. Female captives were taken to 
              Captiva Island—supposedly named for this very practice.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="py-6 my-6 border-y"
              style={{ borderColor: `${c.rust}30` }}
            >
              <p className={`${playfair.className} text-xl md:text-2xl italic text-center`} style={{ color: c.rust }}>
                His treasure allegedly totaled $30 million—<br />
                four times the entire U.S. military budget of 1821.
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              The most elaborate subplot involves a Spanish princess whom Gaspar captured 
              and, smitten, tried to win with treasures. When she rejected him, he beheaded 
              her in anguished madness. When the USS Enterprise finally cornered his fleet, 
              Gaspar wrapped himself in anchor chain and leapt into the sea.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="italic"
              style={{ color: `${c.ink}aa` }}
            >
              It&apos;s all wonderfully operatic. It&apos;s also complete nonsense.
            </motion.p>
          </div>
        </div>
      </div>
    </StickyTextSection>
  )
}

function EvidenceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)
  const [stamped, setStamped] = useState(false)
  
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setStamped(true), 1000)
      return () => clearTimeout(t)
    }
  }, [inView])

  const evidence = [
    { title: 'No Records', text: 'No mention in any Spanish or American ship logs, court records, or newspapers.' },
    { title: 'Wrong Dates', text: '"Gasparilla" and "Captiva" appear on maps from 1774—before he allegedly existed.' },
    { title: 'Wrong Ship', text: 'The USS Enterprise was documented in Cuba during the supposed final battle.' },
    { title: 'No Treasure', text: 'No artifacts or remains attributed to Gaspar have ever been discovered.' },
  ]

  return (
    <StickyTextSection bgColor={c.void}>
      <div ref={ref} className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-medium`} style={{ color: c.cream }}>
              The Evidence
            </h2>
            <p className={`${cormorant.className} text-lg md:text-xl mt-3 italic`} style={{ color: `${c.cream}66` }}>
              (There isn&apos;t any)
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {evidence.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="p-6 md:p-8"
                style={{ 
                  backgroundColor: `${c.blood}12`,
                  border: `1px solid ${c.blood}25`,
                }}
              >
                <h3 className={`${playfair.className} text-xl md:text-2xl font-medium mb-2`} style={{ color: c.cream }}>
                  {item.title}
                </h3>
                <p className={`${cormorant.className} text-base md:text-lg`} style={{ color: `${c.cream}aa` }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* FICTION stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 2.5, rotate: -30 }}
            animate={stamped ? { opacity: 0.85, scale: 1, rotate: -8 } : {}}
            transition={{ type: 'spring', stiffness: 180, damping: 14 }}
            className="absolute top-16 right-4 md:right-12 pointer-events-none select-none"
          >
            <div 
              className={`${playfair.className} text-5xl md:text-7xl font-bold uppercase tracking-wide px-4 py-1`}
              style={{ 
                color: c.blood,
                border: `4px solid ${c.blood}`,
              }}
            >
              Fiction
            </div>
          </motion.div>
        </div>
      </div>
    </StickyTextSection>
  )
}

function FabricatorsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <StickyTextSection bgColor={c.bone}>
      <div ref={ref} className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-2" style={{ color: c.rust }}>
              The Con &amp; The Railroad
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-medium`} style={{ color: c.ink }}>
              Who Invented Gaspar?
            </h2>
          </motion.div>
          
          {/* Gomez */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-10 pl-6 border-l-4"
            style={{ borderColor: c.amber }}
          >
            <h3 className={`${playfair.className} text-2xl md:text-3xl font-medium mb-1`} style={{ color: c.ink }}>
              Juan &ldquo;Panther Key John&rdquo; Gomez
            </h3>
            <p className="text-sm uppercase tracking-wider mb-3" style={{ color: c.rust }}>
              The Storyteller
            </p>
            <p className={`${cormorant.className} text-lg md:text-xl leading-relaxed`} style={{ color: `${c.ink}dd` }}>
              A fisherman who claimed to have been born in 1776, 1778, 1781, or 1795—in 
              Honduras, Portugal, Corsica, or Mauritius. He told tourists he was Gaspar&apos;s 
              cabin boy and sold them fake treasure maps. He drowned in 1900, claiming to 
              be 122 years old.
            </p>
          </motion.div>
          
          {/* LeMoyne */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-16 pl-6 border-l-4"
            style={{ borderColor: c.amber }}
          >
            <h3 className={`${playfair.className} text-2xl md:text-3xl font-medium mb-1`} style={{ color: c.ink }}>
              G.P. &ldquo;Pat&rdquo; LeMoyne
            </h3>
            <p className="text-sm uppercase tracking-wider mb-3" style={{ color: c.rust }}>
              The Publicist
            </p>
            <p className={`${cormorant.className} text-lg md:text-xl leading-relaxed`} style={{ color: `${c.ink}dd` }}>
              Around 1905, LeMoyne wrote a promotional brochure for the Charlotte Harbor 
              &amp; Northern Railway, embellishing Gomez&apos;s tales. The pamphlet promoted 
              the Gasparilla Inn and increased land values along the rail line.
            </p>
          </motion.div>
          
          {/* Confession */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.45 }}
            className="text-center"
          >
            <WaveDivider className="w-20 mx-auto mb-8 text-[#8b4513]" />
            <blockquote>
              <p className={`${playfair.className} text-2xl md:text-4xl italic leading-tight`} style={{ color: c.rust }}>
                &ldquo;A cockeyed lie without a true fact in it.&rdquo;
              </p>
              <footer className={`${cormorant.className} text-base mt-4`} style={{ color: c.ink }}>
                — Pat LeMoyne, 1949
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </StickyTextSection>
  )
}

function HistorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <StickyTextSection bgColor={c.night}>
      <div ref={ref} className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className={`${playfair.className} text-4xl md:text-5xl font-medium mb-10`}
            style={{ color: c.cream }}
          >
            How Tampa Got a Pirate
          </motion.h2>
          
          <div className={`${cormorant.className} text-lg md:text-xl leading-relaxed space-y-6`} style={{ color: c.bone }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              In 1904, Louise Francis Dodge and George W. Hardee wanted to enliven Tampa&apos;s 
              May Day celebration. Hardee suggested a krewe-style event with pirates. They 
              borrowed the Gasparilla story from down the coast.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              On May 4, 1904, fifty Tampa businessmen in rented costumes rode into the city 
              on horseback and &ldquo;captured&rdquo; it. The public was told a pirate ship 
              called the &ldquo;Octopus&rdquo; was offshore, but anyone who tried to see it 
              was &ldquo;threatened with death.&rdquo;
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="py-6 my-6 border-y space-y-3"
              style={{ borderColor: `${c.gold}25` }}
            >
              <p><span style={{ color: c.gold }}>1911</span> — First sea invasion aboard a borrowed schooner</p>
              <p><span style={{ color: c.gold }}>1937</span> — Krewe buys its first permanent ship</p>
              <p><span style={{ color: c.gold }}>1954</span> — Jose Gasparilla II: 137-foot barge, can&apos;t propel itself</p>
              <p><span style={{ color: c.gold }}>Today</span> — 300,000+ spectators, $40M economic impact</p>
            </motion.div>
          </div>
        </div>
      </div>
    </StickyTextSection>
  )
}

function KreweSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <StickyTextSection bgColor={c.bone}>
      <div ref={ref} className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] mb-2" style={{ color: c.rust }}>
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
              The Ye Mystic Krewe was not a party-planning committee. It was an invitation-only 
              organization drawn from Tampa&apos;s white, male business elite. Membership 
              overlapped with the Chamber of Commerce, the country clubs, the yacht club.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="py-6 my-6 pl-6 border-l-4"
              style={{ borderColor: c.blood, backgroundColor: `${c.blood}08` }}
            >
              <p className={`${playfair.className} text-xl font-medium mb-3`} style={{ color: c.blood }}>
                The 1991 Crisis
              </p>
              <p className="text-base md:text-lg" style={{ color: `${c.ink}dd` }}>
                When Tampa hosted Super Bowl XXV, civil rights leaders exposed the krewe&apos;s 
                whites-only membership. The mayor threatened to pull city services.
              </p>
              <p className="text-base md:text-lg mt-3 font-medium" style={{ color: c.ink }}>
                The krewe cancelled the entire parade rather than admit Black members.
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Later that year, the krewe quietly admitted two Black members. The parade 
              returned in 1992 with new krewes—Latin, female, gay, even chefs. The 
              transformation was real, even if it took national embarrassment to force it.
            </motion.p>
          </div>
        </div>
      </div>
    </StickyTextSection>
  )
}

function ConclusionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.15)

  return (
    <StickyTextSection bgColor={c.void} minHeight="80vh">
      <div ref={ref} className="relative py-24 md:py-32 flex items-center min-h-[80vh]">
        {/* Faint ship */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.025] pointer-events-none">
          <ShipSilhouette className="w-[60vw] max-w-[500px] text-white" />
        </div>
        
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className={`${cormorant.className} text-xl md:text-2xl leading-relaxed mb-6`}
            style={{ color: `${c.cream}cc` }}
          >
            Tampa took a publicist&apos;s lie and made it real. They built a ship that 
            cannot sail. They created a society that excluded most of the city. They 
            turned a fabrication into the third-largest parade in America.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className={`${cormorant.className} text-xl md:text-2xl leading-relaxed mb-12`}
            style={{ color: `${c.cream}cc` }}
          >
            Every January, hundreds of thousands celebrate a man who never existed—because 
            the fiction became more important than the truth.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className={`${playfair.className} text-2xl md:text-4xl italic`}
            style={{ color: c.gold }}
          >
            Perhaps that is the most American story of all.
          </motion.p>
        </div>
      </div>
    </StickyTextSection>
  )
}

function Footer() {
  return (
    <footer className="py-16 px-6 text-center" style={{ backgroundColor: c.void }}>
      <p className={`${cormorant.className} text-sm mb-8`} style={{ color: `${c.cream}44` }}>
        Gasparilla Pirate Fest takes place annually in late January.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="/tampa" 
          className={`${cormorant.className} px-6 py-3 text-sm tracking-wide transition-opacity hover:opacity-80`}
          style={{ backgroundColor: c.gold, color: c.void }}
        >
          Explore Tampa
        </a>
        <a 
          href="/tampa/articles/the-pirate-who-never-was" 
          className={`${cormorant.className} px-6 py-3 text-sm tracking-wide transition-opacity hover:opacity-80 border`}
          style={{ borderColor: `${c.cream}30`, color: c.cream }}
        >
          Read Full Article
        </a>
      </div>
    </footer>
  )
}

// ============================================
// MAIN
// ============================================

export function GasparillaExperience() {
  return (
    <main className={`${playfair.variable} ${cormorant.variable} antialiased`}>
      <Opening />
      <IntroSection />
      <LegendSection />
      <EvidenceSection />
      <FabricatorsSection />
      <HistorySection />
      <KreweSection />
      <ConclusionSection />
      <Footer />
    </main>
  )
}

export default GasparillaExperience
