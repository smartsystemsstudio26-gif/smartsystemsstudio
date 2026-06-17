'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { toast } from 'sonner'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { SERVICE_OPTIONS, SITE } from '@/lib/site-data'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="group w-full rounded-full font-semibold">
      {pending ? (
        <>
          <Loader2 className="mr-1 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </>
      )}
    </Button>
  )
}

const initialState: ContactState = { status: 'idle', message: '' }

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      toast.success(state.message)
      formRef.current?.reset()
    } else if (state.status === 'error') {
      toast.error(state.message)
    }
  }, [state])

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute -left-20 top-1/4 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s Build Something{' '}
              <span className="text-gradient">Remarkable</span>
            </>
          }
          description="Tell us about your business and the service you need. We usually respond within one business day."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl glass p-6">
                <h3 className="font-heading text-lg font-semibold">Get in touch</h3>
                <ul className="mt-5 flex flex-col gap-4">
                  <li>
                    <a
                      href={SITE.phoneHref}
                      className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">Call us</span>
                        {SITE.phone}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-muted-foreground">Email us</span>
                        <span className="break-all">{SITE.email}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">Based in</span>
                      South Africa — serving clients everywhere
                    </span>
                  </li>
                </ul>
              </div>

              {/* map placeholder */}
              <div className="relative flex flex-1 min-h-[180px] items-center justify-center overflow-hidden rounded-2xl glass">
                <div className="grid-bg absolute inset-0 opacity-50" />
                <div className="relative flex flex-col items-center gap-2 text-center text-muted-foreground">
                  <MapPin className="h-7 w-7 text-accent" />
                  <p className="text-sm font-medium">Google Maps</p>
                  <p className="text-xs">Location map coming soon</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              ref={formRef}
              action={formAction}
              className="rounded-2xl glass glow-brand p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="business_name">Business Name</Label>
                  <Input id="business_name" name="business_name" placeholder="Your company" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@email.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+27 ..." />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Select name="service">
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you need..."
                  />
                </div>
              </div>
              <div className="mt-6">
                <SubmitButton />
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
