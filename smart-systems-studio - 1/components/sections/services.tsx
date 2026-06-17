'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import type { MouseEvent } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { SERVICES, type Service } from '@/lib/site-data'

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const Icon = service.icon

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 10)
    rotateX.set((0.5 - py) * 10)
    mx.set(px * 100)
    my.set(py * 100)
  }
  function handleLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, color-mix(in oklch, var(--brand) 18%, transparent), transparent 60%)`

  return (
    <Reveal delay={index * 0.06} className="h-full [perspective:1200px]">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6 transition-shadow duration-300 hover:glow-brand"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />
        <div style={{ transform: 'translateZ(40px)' }} className="relative flex h-full flex-col">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-7 w-7 text-primary" />
          </span>
          <h3 className="mt-5 font-heading text-xl font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {service.blurb}
          </p>
          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              From
            </span>
            <span className="font-heading text-2xl font-bold text-gradient">
              R{service.priceFrom.toLocaleString('en-ZA')}
            </span>
            {service.pricePeriod ? (
              <span className="text-sm text-muted-foreground">{service.pricePeriod}</span>
            ) : null}
          </div>
          <ul className="mt-4 flex flex-1 flex-col gap-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <Button asChild size="sm" variant="secondary" className="rounded-full">
              <a href="#contact">Learn More</a>
            </Button>
            <Button asChild size="sm" className="group/btn rounded-full">
              <a href="#contact">
                Request Pricing
                <ArrowUpRight className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="grid-bg absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything You Need to{' '}
              <span className="text-gradient">Launch & Grow</span>
            </>
          }
          description="From registration to running software and hosting, we cover the full digital lifecycle of your business — with transparent starting prices."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
