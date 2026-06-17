import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  ShieldCheck,
  Globe,
  Boxes,
  Palette,
  Cloud,
  Server,
} from 'lucide-react'

export const SITE = {
  name: 'Smart Systems Studio',
  tagline: 'Smart Digital Solutions for Modern Businesses',
  phone: '+27 63 075 1348',
  phoneHref: 'tel:+27630751348',
  email: 'smartsystemsstudio26@gmail.com',
  whatsapp: 'https://wa.me/27630751348',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export type Service = {
  icon: LucideIcon
  title: string
  blurb: string
  features: string[]
  /** Starting price in ZAR, displayed as "from R..." */
  priceFrom: number
  /** Optional billing note, e.g. "/month" */
  pricePeriod?: string
}

export const SERVICES: Service[] = [
  {
    icon: Building2,
    title: 'Business Registration',
    blurb: 'Launch your company the right way, fully compliant from day one.',
    priceFrom: 850,
    features: [
      'Company Registration',
      'CIPC Assistance',
      'Business Compliance',
      'Startup Consulting',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'BEE Certificates',
    blurb: 'Unlock opportunities with verified BEE documentation.',
    priceFrom: 350,
    features: ['BEE Affidavits', 'BEE Certificates', 'Compliance Assistance'],
  },
  {
    icon: Globe,
    title: 'Website Development',
    blurb: 'High-converting, lightning-fast websites for every industry.',
    priceFrom: 2500,
    features: [
      'Business Websites',
      'E-Commerce Stores',
      'School Websites',
      'Church Websites',
      'Portfolio Websites',
    ],
  },
  {
    icon: Server,
    title: 'Website Hosting',
    blurb: 'Fast, secure and reliable hosting that keeps you online 24/7.',
    priceFrom: 99,
    pricePeriod: '/month',
    features: [
      'Lightning-Fast Hosting',
      'Free SSL Security',
      'Domain Registration',
      'Business Email Setup',
      '99.9% Uptime & Backups',
    ],
  },
  {
    icon: Boxes,
    title: 'Business Software',
    blurb: 'Powerful systems that automate and scale your operations.',
    priceFrom: 3500,
    features: [
      'Point of Sale Systems',
      'Inventory Management',
      'Accounting Systems',
      'Customer Management Systems',
      'Business Automation',
    ],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    blurb: 'Memorable brand identities that command attention.',
    priceFrom: 250,
    features: [
      'Business Logos',
      'Flyers',
      'Posters',
      'Social Media Graphics',
      'Company Profiles',
    ],
  },
  {
    icon: Cloud,
    title: 'Digital Solutions',
    blurb: 'Smart tools and cloud systems built around your workflow.',
    priceFrom: 750,
    features: [
      'Online Forms',
      'Automation Tools',
      'Cloud Solutions',
      'Custom Systems',
    ],
  },
]

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title)

export const STATS = [
  { value: 250, suffix: '+', label: 'Business Registrations' },
  { value: 180, suffix: '+', label: 'Websites Built' },
  { value: 500, suffix: '+', label: 'Businesses Supported' },
  { value: 1200, suffix: '+', label: 'Projects Completed' },
]

export const CORE_VALUES = [
  'Innovation',
  'Integrity',
  'Professionalism',
  'Excellence',
  'Customer Success',
]

export const TIMELINE = [
  {
    year: '2021',
    title: 'The Spark',
    text: 'Smart Systems Studio is founded with a mission to make professional digital solutions accessible to every entrepreneur.',
  },
  {
    year: '2022',
    title: 'Built for Compliance',
    text: 'We expanded into business registration, CIPC and BEE services, helping startups launch fully compliant.',
  },
  {
    year: '2023',
    title: 'Software & Systems',
    text: 'Launched custom POS, inventory and automation systems that power growing businesses across the country.',
  },
  {
    year: '2024',
    title: 'Scaling Brands',
    text: 'Hundreds of websites, brands and digital systems delivered — turning small businesses into market leaders.',
  },
  {
    year: '2026',
    title: 'The Future',
    text: 'Leading Africa in AI-inspired, automation-first business solutions for the modern enterprise.',
  },
]

export type PortfolioItem = {
  title: string
  category: 'Websites' | 'Software' | 'Design' | 'Branding' | 'Business Solutions'
  description: string
  image: string
}

export const PORTFOLIO_FILTERS = [
  'All',
  'Websites',
  'Software',
  'Design',
  'Branding',
  'Business Solutions',
] as const

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: 'Aurora E-Commerce',
    category: 'Websites',
    description: 'A blazing-fast online store with integrated payments and inventory sync.',
    image: '/portfolio-ecommerce.png',
  },
  {
    title: 'RetailFlow POS',
    category: 'Software',
    description: 'Cloud point-of-sale and inventory system for multi-branch retailers.',
    image: '/portfolio-pos.png',
  },
  {
    title: 'Nova Brand Identity',
    category: 'Branding',
    description: 'Full brand system: logo, palette and guidelines for a fintech startup.',
    image: '/portfolio-branding.png',
  },
  {
    title: 'Pulse Social Kit',
    category: 'Design',
    description: 'A bold social media graphics pack that tripled engagement.',
    image: '/portfolio-design.png',
  },
  {
    title: 'Summit Academy Portal',
    category: 'Websites',
    description: 'A modern school website with applications and parent portal.',
    image: '/portfolio-school.png',
  },
  {
    title: 'LedgerWise Suite',
    category: 'Business Solutions',
    description: 'Automated accounting and customer management for SMEs.',
    image: '/portfolio-accounting.png',
  },
]

export const WHY_US = [
  { title: 'Professional Solutions', text: 'Enterprise-grade quality for businesses of every size.' },
  { title: 'Affordable Pricing', text: 'Premium results without the premium agency price tag.' },
  { title: 'Fast Delivery', text: 'Streamlined processes that get you live faster.' },
  { title: 'Ongoing Support', text: 'We stay with you long after launch day.' },
  { title: 'Modern Technology', text: 'Built on the latest, future-proof tech stack.' },
  { title: 'Customer Satisfaction', text: 'A track record of happy, returning clients.' },
]

export const TESTIMONIALS = [
  {
    name: 'Thabo Mokoena',
    role: 'Founder, Mokoena Logistics',
    rating: 5,
    quote:
      'Smart Systems Studio registered my company and built our website in record time. We looked like a national brand from day one.',
  },
  {
    name: 'Lerato Dlamini',
    role: 'Owner, Bella Boutique',
    rating: 5,
    quote:
      'The POS and inventory system completely transformed how we operate. Sales reporting that used to take hours is now instant.',
  },
  {
    name: 'James Okafor',
    role: 'Director, Summit Academy',
    rating: 5,
    quote:
      'Professional, fast and genuinely creative. Our new school portal made enrolment effortless for parents.',
  },
  {
    name: 'Naledi Khumalo',
    role: 'CEO, Khumalo Consulting',
    rating: 5,
    quote:
      'From BEE certificates to branding, they handled everything. It felt like having an entire digital team on call.',
  },
]
