'use client'

import { motion } from 'framer-motion'
import { Eye, Rocket, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CORE_VALUES, TIMELINE } from '@/lib/site-data'

const PILLARS = [
  {
    icon: Rocket,
    title: 'Mission',
    text: 'To empower entrepreneurs and businesses with smart, affordable technology that helps them launch, automate and scale with confidence.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'To become the leading digital business solutions company in Africa — the trusted partner behind every modern enterprise.',
  },
  {
    icon: Target,
    title: 'Approach',
    text: 'We blend strategy, design and engineering to build systems that work beautifully today and adapt effortlessly tomorrow.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Us"
          title={
            <>
              Building Smarter Businesses Through{' '}
              <span className="text-gradient">Technology</span>
            </>
          }
          description="Smart Systems Studio helps businesses launch, automate and scale — combining compliance, design and software into one seamless digital partner."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-brand">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
                  <p.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* core values */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Core Values:</span>
            {CORE_VALUES.map((v) => (
              <span
                key={v}
                className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium"
              >
                {v}
              </span>
            ))}
          </div>
        </Reveal>

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-center font-heading text-2xl font-bold">Our Journey</h3>
          </Reveal>
          <div className="relative mt-12">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
            <ul className="space-y-10">
              {TIMELINE.map((t, i) => (
                <li key={t.year} className="relative md:grid md:grid-cols-2 md:gap-8">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-4 top-1.5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background md:left-1/2"
                  />
                  <div
                    className={
                      i % 2 === 0
                        ? 'md:col-start-1 md:pr-12 md:text-right'
                        : 'md:col-start-2 md:pl-12'
                    }
                  >
                    <Reveal delay={i * 0.05}>
                      <div className="ml-10 rounded-2xl glass p-5 md:ml-0">
                        <span className="font-mono text-sm font-semibold text-accent">
                          {t.year}
                        </span>
                        <h4 className="mt-1 font-heading text-lg font-semibold">
                          {t.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {t.text}
                        </p>
                      </div>
                    </Reveal>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
