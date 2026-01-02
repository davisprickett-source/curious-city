'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useRef } from 'react'

export function HoneycrispIllustration() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll-based tree growth animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const treeHeight = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 100])

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/3] bg-gradient-to-b from-amber-50 via-orange-50 to-red-50 rounded-2xl overflow-hidden shadow-xl">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#451a03" />
            <stop offset="50%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>

          <radialGradient id="foliageGrad" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#65a30d" />
            <stop offset="50%" stopColor="#4d7c0f" />
            <stop offset="100%" stopColor="#365314" />
          </radialGradient>

          <radialGradient id="appleGrad" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="30%" stopColor="#ef4444" />
            <stop offset="70%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </radialGradient>

          <radialGradient id="appleLight" cx="30%" cy="25%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>

          <filter id="dropShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="1" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="800" height="600" fill="transparent" />

        {/* Ground */}
        <path d="M 0 510 Q 200 495 400 505 Q 600 515 800 500 L 800 600 L 0 600 Z" fill="#92400e" opacity="0.1" />

        {/* Tree on left */}
        <motion.g
          style={{
            transformOrigin: '125px 510px',
            scaleY: prefersReducedMotion ? 1 : useTransform(treeHeight, (v) => v / 100)
          }}
        >
          {/* Trunk */}
          <motion.path
            d="M 100 510 L 90 390 Q 88 330 90 270 L 100 210 Q 105 192 110 210 L 120 270 Q 122 330 120 390 Z"
            fill="url(#trunkGrad)"
            filter="url(#dropShadow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Branches */}
          <g stroke="url(#trunkGrad)" strokeWidth="8" fill="none" strokeLinecap="round">
            <motion.path
              d="M 105 300 Q 140 288 175 300"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.path
              d="M 102 270 Q 75 258 50 264"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />
            <motion.path
              d="M 107 330 Q 145 318 180 336"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </g>

          {/* Foliage */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.5, type: "spring" }}
          >
            <ellipse cx="105" cy="228" rx="70" ry="80" fill="url(#foliageGrad)" opacity="0.9" />
            <ellipse cx="140" cy="252" rx="55" ry="65" fill="url(#foliageGrad)" opacity="0.85" />
            <ellipse cx="75" cy="264" rx="50" ry="60" fill="url(#foliageGrad)" opacity="0.87" />
            <ellipse cx="105" cy="300" rx="48" ry="55" fill="url(#foliageGrad)" opacity="0.88" />
            <ellipse cx="90" cy="216" rx="20" ry="25" fill="#84cc16" opacity="0.3" />
          </motion.g>

          {/* Apples on tree */}
          {!prefersReducedMotion && [
            { cx: 90, cy: 252, delay: 2 },
            { cx: 120, cy: 234, delay: 2.1 },
            { cx: 100, cy: 282, delay: 2.2 },
            { cx: 140, cy: 270, delay: 2.3 },
            { cx: 75, cy: 276, delay: 2.4 },
          ].map((apple, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: apple.delay, type: "spring", stiffness: 200 }}
            >
              <circle cx={apple.cx} cy={apple.cy} r="8" fill="url(#appleGrad)" filter="url(#dropShadow)" />
              <ellipse cx={apple.cx - 2} cy={apple.cy - 2} rx="3" ry="4" fill="url(#appleLight)" opacity="0.6" />
            </motion.g>
          ))}
        </motion.g>

        {/* Falling apples */}
        {!prefersReducedMotion && [
          { startX: 110, startY: 260, endX: 630, endY: 480, delay: 2.5, duration: 2.5, rotate: 180 },
          { startX: 90, startY: 270, endX: 680, endY: 470, delay: 2.8, duration: 2.3, rotate: -120 },
          { startX: 120, startY: 280, endX: 710, endY: 485, delay: 3.1, duration: 2.6, rotate: 200 },
        ].map((fall, i) => (
          <motion.g
            key={`fall-${i}`}
            initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
            animate={{
              x: fall.endX - fall.startX,
              y: fall.endY - fall.startY,
              opacity: [0, 1, 1],
              rotate: fall.rotate
            }}
            transition={{
              duration: fall.duration,
              delay: fall.delay,
              ease: [0.34, 1.56, 0.64, 1],
              opacity: { duration: 0.3, delay: fall.delay }
            }}
          >
            <circle cx={fall.startX} cy={fall.startY} r="10" fill="url(#appleGrad)" filter="url(#dropShadow)" />
            <ellipse cx={fall.startX - 2} cy={fall.startY - 2} rx="4" ry="5" fill="url(#appleLight)" opacity="0.6" />
          </motion.g>
        ))}

        {/* Pile of apples on right */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          {/* Shadow */}
          <ellipse cx="680" cy="515" rx="90" ry="15" fill="#000000" opacity="0.15" />

          {/* Bottom layer */}
          {[
            { cx: 630, cy: 500, r: 28 },
            { cx: 680, cy: 498, r: 30 },
            { cx: 730, cy: 500, r: 29 },
            { cx: 655, cy: 502, r: 27 },
            { cx: 705, cy: 501, r: 28 },
          ].map((apple, i) => (
            <motion.g
              key={`pile1-${i}`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 4.2 + i * 0.1, type: "spring", stiffness: 100 }}
            >
              <circle cx={apple.cx} cy={apple.cy} r={apple.r} fill="url(#appleGrad)" filter="url(#dropShadow)" />
              <ellipse cx={apple.cx - apple.r * 0.3} cy={apple.cy - apple.r * 0.3} rx={apple.r * 0.35} ry={apple.r * 0.4} fill="url(#appleLight)" opacity="0.5" />
              <path
                d={`M ${apple.cx} ${apple.cy - apple.r} Q ${apple.cx - 2} ${apple.cy - apple.r - 5} ${apple.cx - 1} ${apple.cy - apple.r - 9}`}
                stroke="#78350f"
                strokeWidth="2"
                fill="none"
              />
            </motion.g>
          ))}

          {/* Middle layer */}
          {[
            { cx: 655, cy: 470, r: 27 },
            { cx: 695, cy: 468, r: 28 },
            { cx: 675, cy: 473, r: 27 },
          ].map((apple, i) => (
            <motion.g
              key={`pile2-${i}`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 4.7 + i * 0.1, type: "spring", stiffness: 100 }}
            >
              <circle cx={apple.cx} cy={apple.cy} r={apple.r} fill="url(#appleGrad)" filter="url(#dropShadow)" />
              <ellipse cx={apple.cx - apple.r * 0.3} cy={apple.cy - apple.r * 0.3} rx={apple.r * 0.35} ry={apple.r * 0.4} fill="url(#appleLight)" opacity="0.55" />
              <path
                d={`M ${apple.cx} ${apple.cy - apple.r} Q ${apple.cx - 1.5} ${apple.cy - apple.r - 4} ${apple.cx - 0.75} ${apple.cy - apple.r - 8}`}
                stroke="#78350f"
                strokeWidth="1.8"
                fill="none"
              />
            </motion.g>
          ))}

          {/* Top apple */}
          <motion.g
            initial={{ y: -50, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 5, type: "spring", stiffness: 120 }}
          >
            <circle cx="675" cy="445" r="26" fill="url(#appleGrad)" filter="url(#dropShadow)" />
            <ellipse cx="667" cy="437" rx="9" ry="10" fill="url(#appleLight)" opacity="0.6" />
            <path d="M 675 419 Q 673 415 674 411" stroke="#78350f" strokeWidth="1.8" fill="none" />
            <path d="M 674 413 Q 679 410 682 413" fill="#65a30d" stroke="#4d7c0f" strokeWidth="0.8" />
          </motion.g>
        </motion.g>

        {/* Label in center */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.5 }}
        >
          <rect x="290" y="250" width="220" height="100" rx="10" fill="#fef3c7" stroke="#92400e" strokeWidth="3" opacity="0.95" filter="url(#dropShadow)" />
          <path d="M 297 257 L 305 257 L 305 265" stroke="#d97706" strokeWidth="1.5" fill="none" />
          <path d="M 503 257 L 495 257 L 495 265" stroke="#d97706" strokeWidth="1.5" fill="none" />
          <path d="M 297 343 L 305 343 L 305 335" stroke="#d97706" strokeWidth="1.5" fill="none" />
          <path d="M 503 343 L 495 343 L 495 335" stroke="#d97706" strokeWidth="1.5" fill="none" />

          <text x="400" y="285" fontSize="28" fontFamily="Georgia, serif" fontWeight="bold" fill="#78350f" textAnchor="middle">
            MN 1711
          </text>
          <text x="400" y="310" fontSize="14" fontFamily="Georgia, serif" fill="#92400e" textAnchor="middle" fontStyle="italic">
            Rescued from destruction
          </text>
          <text x="400" y="332" fontSize="12" fontFamily="Georgia, serif" fill="#b45309" textAnchor="middle">
            University of Minnesota, 1982
          </text>
        </motion.g>

        {/* Innovation sparkles */}
        {!prefersReducedMotion && [
          { x: 250, y: 180, delay: 6, scale: 1 },
          { x: 720, y: 240, delay: 6.3, scale: 1.2 },
          { x: 550, y: 400, delay: 6.6, scale: 0.9 },
        ].map((star, i) => (
          <motion.g
            key={`star-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, star.scale, star.scale, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 2.5,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <path
              d={`M ${star.x} ${star.y} l 3 9 l 9 3 l -9 3 l -3 9 l -3 -9 l -9 -3 l 9 -3 Z`}
              fill="#fbbf24"
              filter="url(#dropShadow)"
            />
          </motion.g>
        ))}
      </svg>

      {/* Text overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 7 }}
        className="absolute bottom-6 left-0 right-0 text-center px-4"
      >
        <p className="text-base md:text-lg font-serif italic text-amber-900 opacity-70">
          From reject pile to world-changing innovation
        </p>
      </motion.div>
    </div>
  )
}
