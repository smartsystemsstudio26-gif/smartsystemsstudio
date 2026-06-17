'use client'

import { Share2, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { NAV_LINKS, SERVICES, SITE } from '@/lib/site-data'

export function Footer() {
  const [email, setEmail] = useState('')

  function onSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.')
      return
    }
    toast.success('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <footer className="relative border-t border-border">
      <div className="grid-bg absolute inset-0 -z-10 opacity-30" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}. Helping businesses build, automate and grow.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="Social media (coming soon)"
                className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition-colors hover:text-accent"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={SITE.phoneHref}
                aria-label="Call"
                className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition-colors hover:text-accent"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Get business tips and product updates in your inbox.
            </p>
            <form onSubmit={onSubscribe} className="mt-4 flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="bg-background/50"
              />
              <Button type="submit" size="icon" aria-label="Subscribe" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="mt-6 space-y-1 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" /> {SITE.phone}
              </p>
              <p className="flex items-center gap-2 break-all">
                <Mail className="h-4 w-4 text-accent" /> {SITE.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Smart Systems Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
