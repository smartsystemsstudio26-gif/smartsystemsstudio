'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { TESTIMONIALS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const count = TESTIMONIALS.length

  const go = useCallback(
    (next: number) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1)
      setIndex((next + count) % count)
    },
    [index, count],
  )

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % count)
    }, 6000)
    return () => clearInterval(t)
  }, [count])

  const active = TESTIMONIALS[index]

  return (
    <section className="relative py-24 sm:py-32">
      <div className="grid-bg absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by <span className="text-gradient">Ambitious Businesses</span>
            </>
          }
          description="Real results from the founders and teams we have helped grow."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl glass glow-brand p-8 sm:p-10"
              >
                <Quote className="h-8 w-8 text-accent" />
                <blockquote className="mt-4 text-lg leading-relaxed text-pretty sm:text-xl">
                  {`"${active.quote}"`}
                </blockquote>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <figcaption>
                    <p className="font-heading font-semibold">{active.name}</p>
                    <p className="text-sm text-muted-foreground">{active.role}</p>
                  </figcaption>
                  <div className="flex gap-0.5">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full glass transition-colors hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'w-6 bg-accent' : 'w-2 bg-border',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full glass transition-colors hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
