'use client'

import { motion } from 'framer-motion'
import { Building2, Globe, Palette, ShieldCheck, Boxes, Cloud } from 'lucide-react'

const ORBIT_ICONS = [Building2, Globe, Palette, ShieldCheck, Boxes, Cloud]

/**
 * CSS/SVG holographic globe with orbiting business icons.
 * GPU-light alternative to a full WebGL globe — uses transforms only.
 */
export function HolographicGlobe() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* glow */}
      <div className="absolute inset-[12%] rounded-full bg-primary/20 blur-3xl" />

      {/* globe */}
      <div className="absolute inset-[8%] animate-spin-slow rounded-full">
        <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
          <defs>
            <radialGradient id="globeFill" cx="40%" cy="35%" r="75%">
              <stop offset="0%" stopColor="var(--brand-cyan)" stopOpacity="0.35" />
              <stop offset="60%" stopColor="var(--brand)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="78" fill="url(#globeFill)" />
          <circle
            cx="100"
            cy="100"
            r="78"
            fill="none"
            stroke="var(--brand)"
            strokeOpacity="0.5"
            strokeWidth="0.8"
          />
          {/* latitudes */}
          {[20, 40, 60].map((r) => (
            <ellipse
              key={`lat-${r}`}
              cx="100"
              cy="100"
              rx="78"
              ry={r}
              fill="none"
              stroke="var(--brand-cyan)"
              strokeOpacity="0.28"
              strokeWidth="0.6"
            />
          ))}
          {/* longitudes */}
          {[20, 40, 60].map((r) => (
            <ellipse
              key={`lon-${r}`}
              cx="100"
              cy="100"
              rx={r}
              ry="78"
              fill="none"
              stroke="var(--brand-cyan)"
              strokeOpacity="0.28"
              strokeWidth="0.6"
            />
          ))}
        </svg>
      </div>

      {/* orbiting icons */}
      {ORBIT_ICONS.map((Icon, i) => {
        const angle = (i / ORBIT_ICONS.length) * Math.PI * 2
        const radius = 48
        const x = (50 + Math.cos(angle) * radius).toFixed(4)
        const y = (50 + Math.sin(angle) * radius).toFixed(4)
        return (
          <motion.div
            key={i}
            className="absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl glass"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            <Icon className="h-5 w-5 text-accent" />
          </motion.div>
        )
      })}
    </div>
  )
}
