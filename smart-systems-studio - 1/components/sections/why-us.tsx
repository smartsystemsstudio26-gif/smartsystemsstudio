'use client'

import { CheckCircle2 } from 'lucide-react'
import { AnimatedCounter } from '@/components/animated-counter'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { STATS, WHY_US } from '@/lib/site-data'

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              The Smart Choice for{' '}
              <span className="text-gradient">Serious Growth</span>
            </>
          }
          description="We pair premium quality with real partnership — here is what sets us apart."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-brand">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* stat band */}
        <Reveal className="mt-12">
          <div className="grid gap-px overflow-hidden rounded-3xl glass glow-brand sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-card/30 p-8 text-center">
                <p className="font-heading text-4xl font-bold text-gradient">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
