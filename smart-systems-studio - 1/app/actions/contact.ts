'use server'

import { createClient } from '@/lib/supabase/server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const businessName = String(formData.get('business_name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in your name, email and message.' }
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    const supabase = await createClient()
    const { error } = await supabase.from('contact_submissions').insert({
      name,
      business_name: businessName || null,
      email,
      phone: phone || null,
      service: service || null,
      message,
    })

    if (error) {
      console.log('[v0] contact insert error:', error.message)
      return {
        status: 'error',
        message: 'Something went wrong saving your message. Please try again.',
      }
    }

    return {
      status: 'success',
      message: "Thank you! Your message has been received. We'll be in touch shortly.",
    }
  } catch (err) {
    console.log('[v0] contact action exception:', (err as Error).message)
    return { status: 'error', message: 'Unexpected error. Please try again later.' }
  }
}
