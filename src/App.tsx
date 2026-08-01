import {
  BadgeCheck,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useEffect } from 'react'
import type { CSSProperties, FormEvent } from 'react'

const businessName = 'Balabusta Brooklyn Cleaning Services'
const phoneDisplay = '732-226-7055'
const phoneHref = 'tel:+17322267055'
const smsHref = 'sms:+17322267055'
const whatsappHref = 'https://wa.me/17322267055'
const addressDisplay = '381 Troy Avenue, Brooklyn, NY 11213'
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=381%20Troy%20Avenue%2C%20Brooklyn%2C%20NY%2011213'
const mapsEmbedUrl =
  'https://www.google.com/maps?q=381%20Troy%20Avenue%2C%20Brooklyn%2C%20NY%2011213&output=embed'

const services = [
  {
    title: 'Recurring Home Cleaning',
    description: 'Weekly, biweekly, monthly, and one-time cleaning for apartments, condos, and family homes.',
  },
  {
    title: 'Deep & Detail Cleaning',
    description: 'Room-by-room detail work for kitchens, bathrooms, floors, fixtures, dust, and hard-to-reach areas.',
  },
  {
    title: 'Move & Turnover Cleaning',
    description: 'Move-in, move-out, post-renovation, and post-construction cleanup for a fresh start.',
  },
  {
    title: 'Commercial & Building Care',
    description: 'Professional cleaning for offices, stores, buildings, shared spaces, and high-traffic properties.',
  },
]

const residentialServices = [
  {
    title: 'General Cleaning',
    description: 'Routine home care for dusting, surfaces, kitchens, bathrooms, floors, bedrooms, and living areas.',
  },
  {
    title: 'Deep Cleaning',
    description: 'A more detailed reset for buildup, neglected spaces, seasonal cleaning, or first-time visits.',
  },
  {
    title: 'House Cleaning',
    description: 'Reliable apartment, condo, and house cleaning planned around your family schedule.',
  },
  {
    title: 'Passover Cleaning',
    description: 'Careful pre-holiday cleaning support for kitchens, cabinets, surfaces, rooms, and household prep.',
  },
  {
    title: 'Move In / Move Out Cleaning',
    description: 'Detailed cleaning before settling into a new home or after emptying a space.',
  },
  {
    title: 'Floor Cleaning',
    description: 'Support for swept, vacuumed, mopped, and carefully maintained floors throughout the home.',
  },
  {
    title: 'Window Washing',
    description: 'Interior window and glass cleaning to brighten rooms and remove fingerprints, dust, and residue.',
  },
  {
    title: 'Post-Construction Cleaning',
    description: 'Dust, debris, and finish cleanup after renovations, repairs, updates, or construction work.',
  },
  {
    title: 'Building Maintenance',
    description: 'Ongoing upkeep for lobbies, hallways, stairs, shared residential spaces, and small buildings.',
  },
]

const commercialServices = [
  'Office complexes and professional suites',
  'Hospitality and short-term rental turnovers',
  'Retail stores and customer-facing spaces',
  'Restaurants and daily service areas',
  'Schools, childcare, and learning spaces',
  'Medical and wellness offices',
  'Warehouses and back-of-house areas',
  'Residential complexes and high-rise buildings',
  'Sports, event, and entertainment venues',
  'Interior and exterior window cleaning',
  'Rough, detailed, and final construction cleanup',
]

const values = [
  {
    title: 'Reliable Scheduling',
    description: 'Responsive communication and dependable appointments for busy Brooklyn families.',
    icon: BadgeCheck,
  },
  {
    title: 'Detailed Service',
    description: 'Careful cleaning plans shaped around how your home is actually used.',
    icon: ShieldCheck,
  },
  {
    title: 'Professional Care',
    description: 'Respectful, organized, quality-minded support for homes, buildings, and workspaces.',
    icon: Sparkles,
  },
]

const serviceAreas = [
  { name: 'Brooklyn', featured: true },
  { name: 'Manhattan', featured: true },
  { name: 'Queens', featured: true },
  { name: 'Bronx' },
  { name: 'Staten Island' },
  { name: 'Crown Heights', featured: true },
  { name: 'Borough Park', featured: true },
  { name: 'Flatbush', featured: true },
  { name: 'Park Slope' },
  { name: 'Williamsburg' },
  { name: 'Brooklyn Heights' },
  { name: 'Bay Ridge' },
  { name: 'Bed-Stuy' },
  { name: 'Bushwick' },
  { name: 'DUMBO' },
  { name: 'Midwood' },
  { name: 'NYC families', featured: true },
]

const estimateFields = {
  services: [
    'General home cleaning',
    'Deep cleaning',
    'Move in / move out cleaning',
    'Passover cleaning',
    'Post-construction cleaning',
    'Window washing',
    'Floor cleaning',
    'Building maintenance',
    'Commercial cleaning',
  ],
  properties: [
    'Apartment',
    'House',
    'Condo',
    'Office',
    'Building / shared areas',
    'Retail or commercial space',
    'Other',
  ],
  frequencies: ['One-time', 'Weekly', 'Biweekly', 'Monthly', 'Not sure yet'],
}

const revealDirections = [
  'reveal-left',
  'reveal-up',
  'reveal-down',
  'reveal-right',
]

const fluidDroplets = [
  { x: '6vw', size: '46px', delay: '-8s', duration: '24s', drift: '34px' },
  { x: '18vw', size: '28px', delay: '-2s', duration: '18s', drift: '-26px' },
  { x: '33vw', size: '64px', delay: '-14s', duration: '28s', drift: '44px' },
  { x: '51vw', size: '34px', delay: '-5s', duration: '20s', drift: '-34px' },
  { x: '68vw', size: '54px', delay: '-11s', duration: '26s', drift: '28px' },
  { x: '84vw', size: '30px', delay: '-3s', duration: '19s', drift: '-38px' },
  { x: '94vw', size: '72px', delay: '-18s', duration: '31s', drift: '22px' },
]

function revealStyle(index: number, step = 90): CSSProperties {
  return { '--reveal-delay': `${index * step}ms` } as CSSProperties
}

function dropletStyle(droplet: (typeof fluidDroplets)[number]): CSSProperties {
  return {
    '--drop-x': droplet.x,
    '--drop-size': droplet.size,
    '--drop-delay': droplet.delay,
    '--drop-duration': droplet.duration,
    '--drop-drift': droplet.drift,
  } as CSSProperties
}

function FluidBackground() {
  return (
    <div aria-hidden="true" className="fluid-background">
      <span className="fluid-current fluid-current-a" />
      <span className="fluid-current fluid-current-b" />
      {fluidDroplets.map((droplet) => (
        <span
          className="fluid-droplet"
          key={`${droplet.x}-${droplet.size}`}
          style={dropletStyle(droplet)}
        >
          <span className="fluid-droplet-shine" />
          <span className="fluid-droplet-ripple" />
        </span>
      ))}
    </div>
  )
}

function App() {
  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>('.scroll-reveal'),
    )

    function showElement(element: HTMLElement) {
      element.classList.add('is-visible')
      observer.unobserve(element)
    }

    function revealVisibleElements() {
      revealElements.forEach((element) => {
        if (element.classList.contains('is-visible')) {
          return
        }

        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0

        if (isVisible) {
          showElement(element)
        }
      })
    }

    function revealHashTarget() {
      if (!window.location.hash) {
        return
      }

      const target = document.querySelector(window.location.hash)

      target?.scrollIntoView({ block: 'start' })
      target
        ?.querySelectorAll<HTMLElement>('.scroll-reveal')
        .forEach((element) => showElement(element))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          showElement(entry.target as HTMLElement)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    window.addEventListener('scroll', revealVisibleElements, { passive: true })
    window.addEventListener('resize', revealVisibleElements)
    window.addEventListener('hashchange', revealHashTarget)

    window.setTimeout(revealVisibleElements, 80)
    window.setTimeout(revealHashTarget, 120)
    window.setTimeout(revealVisibleElements, 500)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', revealVisibleElements)
      window.removeEventListener('resize', revealVisibleElements)
      window.removeEventListener('hashchange', revealHashTarget)
    }
  }, [])

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const message = [
      `Cleaning request for ${businessName}`,
      `Name: ${formData.get('name') ?? ''}`,
      `Email: ${formData.get('email') ?? ''}`,
      `Phone: ${formData.get('phone') ?? ''}`,
      `Service: ${formData.get('service') ?? ''}`,
      `Property: ${formData.get('property') ?? ''}`,
      `Frequency: ${formData.get('frequency') ?? ''}`,
      `Message: ${formData.get('message') ?? ''}`,
    ].join('\n')

    window.open(`${whatsappHref}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <main className="site-shell min-h-screen text-neutral-950">
      <FluidBackground />
      <header className="site-header sticky top-0 z-30">
        <nav
          aria-label="Main navigation"
          className="nav-shell mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
        >
          <a
            href="#home"
            className="brand-lockup flex items-center gap-3 text-neutral-950"
            aria-label={`${businessName} home`}
          >
            <img
              alt=""
              className="h-11 w-11 rounded-md"
              height="40"
              src="/logo.svg"
              width="40"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-semibold">
                Balabusta Brooklyn
              </span>
              <span className="mt-1 hidden text-xs font-semibold uppercase text-neutral-500 sm:block">
                Cleaning Services
              </span>
            </span>
          </a>
          <div className="nav-links hidden items-center gap-1 text-sm font-semibold text-neutral-800 md:flex">
            <a href="#services">
              Services
            </a>
            <a href="#values">
              Values
            </a>
            <a href="#areas">
              Areas
            </a>
            <a href="#contact">
              Estimate
            </a>
          </div>
          <a
            className="nav-cta inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            href="#contact"
          >
            <span className="hidden sm:inline">Request a Cleaning</span>
            <span className="sm:hidden">Request</span>
          </a>
        </nav>
      </header>

      <section id="home" className="hero-section relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-16">
          <div className="relative z-10 max-w-3xl">
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Brooklyn home cleaning that feels handled.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
              {businessName} helps families, apartments, and residential
              buildings across Brooklyn and New York City stay fresh, organized,
              and ready for real life with reliable, detailed cleaning services.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-800 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-rose-950/15 transition hover:bg-neutral-950"
                href="#contact"
              >
                <Send aria-hidden="true" size={19} />
                Request a Cleaning
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-950/15 bg-white px-6 py-4 text-base font-semibold text-neutral-950 shadow-sm transition hover:border-neutral-950"
                href={phoneHref}
              >
                <Phone aria-hidden="true" size={19} />
                Call Now
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-neutral-700">
              <a className="transition hover:text-rose-800" href={smsHref}>
                Text Us
              </a>
              <span aria-hidden="true">/</span>
              <a
                className="transition hover:text-rose-800"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Message Us on WhatsApp
              </a>
            </div>
          </div>

          <div className="geometric-frame relative z-10 min-h-[360px] overflow-hidden rounded-lg bg-neutral-950 shadow-2xl shadow-neutral-950/20 sm:min-h-[440px]">
            <img
              alt="Professional housekeeper folding towels in a home"
              className="absolute inset-0 h-full w-full object-cover"
              src="/balabusta-home.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-neutral-950/0 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase">Here to help</p>
              <p className="mt-3 max-w-md text-2xl font-semibold leading-tight sm:text-3xl">
                Detailed residential cleaning, built around your family schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="geometric-band border-y border-neutral-950 bg-neutral-950 py-4 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-center text-sm font-semibold sm:px-8">
          <span>Housekeepers</span>
          <span>Deep Cleaning</span>
          <span>Move-In / Move-Out</span>
          <span>Passover Cleaning</span>
          <span>Window Washing</span>
          <span>Post-Construction</span>
          <span>Call {phoneDisplay}</span>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="scroll-reveal reveal-left">
            <p className="text-sm font-bold uppercase text-rose-800">
              Residential-first cleaning services
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              The services families ask for most, organized clearly.
            </h2>
          </div>
          <p className="scroll-reveal reveal-right max-w-2xl text-lg leading-8 text-neutral-700">
            From regular upkeep to deep cleaning, holiday prep, moves, windows,
            floors, and construction dust, we make it easy to request the right
            level of cleaning for your Brooklyn home or building.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description }, index) => (
            <article
              className={`scroll-reveal reveal-card ${
                revealDirections[index % revealDirections.length]
              } border border-neutral-950/10 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-900/30`}
              key={title}
              style={revealStyle(index)}
            >
              <h3 className="font-serif text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="scroll-reveal reveal-left border border-neutral-950/10 bg-white/85 p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-rose-800">
                  Home cleaning menu
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold">
                  Residential services
                </h3>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full bg-rose-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-950"
                href="#contact"
              >
                Get a Free Estimate
              </a>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {residentialServices.map((service, index) => (
                <article
                  className={`scroll-reveal ${
                    revealDirections[index % revealDirections.length]
                  } border border-neutral-950/10 bg-[#f8f4ec]/80 p-5`}
                  key={service.title}
                  style={revealStyle(index, 35)}
                >
                  <h4 className="font-serif text-xl font-semibold">
                    {service.title}
                  </h4>
                  <p className="mt-3 leading-7 text-neutral-700">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="scroll-reveal reveal-right bg-neutral-950 p-6 text-white shadow-2xl shadow-neutral-950/20 sm:p-8">
            <p className="text-sm font-bold uppercase text-rose-200">
              Commercial and specialty
            </p>
            <h3 className="mt-3 font-serif text-3xl font-semibold">
              Flexible cleaning for buildings and businesses.
            </h3>
            <ul className="mt-6 space-y-3 text-white/75">
              {commercialServices.map((service) => (
                <li className="flex gap-3" key={service}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="values" className="relative overflow-hidden bg-neutral-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up max-w-3xl">
            <p className="text-sm font-bold uppercase text-rose-200">
              What we stand for
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Reliable, detailed, professional cleaning.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon }, index) => (
              <article
                className={`scroll-reveal reveal-card ${
                  index % 2 === 0 ? 'reveal-left' : 'reveal-right'
                } border border-white/15 p-6`}
                key={title}
                style={revealStyle(index)}
              >
                <Icon aria-hidden="true" className="text-rose-200" size={28} />
                <h3 className="mt-8 font-serif text-2xl font-semibold">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-white/75">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="relative overflow-hidden bg-white/90 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="scroll-reveal reveal-left">
              <p className="text-sm font-bold uppercase text-rose-800">
                Brooklyn and New York City
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Serving Brooklyn families and clients across NYC.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {serviceAreas.map((area, index) => (
                <div
                  className={`scroll-reveal ${
                    revealDirections[index % revealDirections.length]
                  } border border-rose-900 bg-rose-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-950/10`}
                  key={area.name}
                  style={revealStyle(index, 35)}
                >
                  {area.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="proof-section px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.08fr_0.96fr_0.96fr]">
          <article className="proof-card proof-card-red scroll-reveal reveal-left">
            <div className="flex items-start justify-between gap-6">
              <ShieldCheck aria-hidden="true" size={34} />
              <span className="proof-card-number">1</span>
            </div>
            <p className="mt-10 text-sm font-bold uppercase text-white/65">
              Covered
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight">
              Licensed and insured by the State of NY.
            </h2>
          </article>
          <article
            className="proof-card proof-card-crimson scroll-reveal reveal-up"
            style={revealStyle(1)}
          >
            <div className="flex items-start justify-between gap-6">
              <Languages aria-hidden="true" size={34} />
              <span className="proof-card-number">2</span>
            </div>
            <p className="mt-10 text-sm font-bold uppercase text-white/65">
              Bilingual
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight">
              Yes, we speak Spanish.
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Tambien hablamos Espanol.
            </p>
          </article>
          <article
            className="proof-card proof-card-burgundy scroll-reveal reveal-right"
            style={revealStyle(2)}
          >
            <div className="flex items-start justify-between gap-6">
              <BadgeCheck aria-hidden="true" size={34} />
              <span className="proof-card-number">3</span>
            </div>
            <p className="mt-10 text-sm font-bold uppercase text-white/65">
              Responsive
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight">
              Available to help you anytime.
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Request a cleaning, call, text, or use WhatsApp at {phoneDisplay}.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="bg-neutral-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="scroll-reveal reveal-left">
            <p className="text-sm font-bold uppercase text-rose-200">
              Request a Cleaning
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              Tell us what needs cleaning.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              Share a few details and we will follow up with a free estimate.
              You can also call now, text us, or message us on WhatsApp.
            </p>
            <div className="mt-9 space-y-5 text-lg">
              <a className="flex items-center gap-3" href={phoneHref}>
                <Phone aria-hidden="true" className="text-rose-200" size={22} />
                {phoneDisplay}
              </a>
              <a className="flex items-center gap-3" href={smsHref}>
                <MessageCircle
                  aria-hidden="true"
                  className="text-rose-200"
                  size={22}
                />
                Text Us
              </a>
              <a
                className="flex items-center gap-3"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                <Send aria-hidden="true" className="text-rose-200" size={22} />
                Message Us on WhatsApp
              </a>
              <a
                className="flex items-start gap-3 transition hover:text-rose-200"
                href={mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                <MapPin
                  aria-hidden="true"
                  className="mt-1 text-rose-200"
                  size={22}
                />
                <address className="not-italic">
                  381 Troy Avenue
                  <br />
                  Brooklyn, NY 11213
                </address>
              </a>
            </div>
            <div className="mt-8 max-w-xl overflow-hidden border border-white/10 bg-[#f8f4ec] text-neutral-950 shadow-2xl shadow-black/30">
              <iframe
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapsEmbedUrl}
                title={`Map to ${addressDisplay}`}
              />
              <a
                className="block border-t border-neutral-950/10 px-4 py-3 text-sm font-semibold text-rose-900 transition hover:bg-rose-50"
                href={mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open 381 Troy Avenue in Google Maps
              </a>
            </div>
          </div>

          <div className="scroll-reveal reveal-right bg-[#f8f4ec] p-5 text-neutral-950 shadow-2xl shadow-black/30 sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase text-rose-800">
                Estimate details
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold">
                Get a Free Estimate
              </h3>
            </div>
            <form className="grid gap-5" onSubmit={handleContactSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input
                    className="border border-neutral-950/15 bg-white px-4 py-3 outline-none transition focus:border-rose-800"
                    name="name"
                    type="text"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email*
                  <input
                    className="border border-neutral-950/15 bg-white px-4 py-3 outline-none transition focus:border-rose-800"
                    name="email"
                    required
                    type="email"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Phone
                <input
                  className="border border-neutral-950/15 bg-white px-4 py-3 outline-none transition focus:border-rose-800"
                  name="phone"
                  type="tel"
                />
              </label>
              <div className="grid gap-5 sm:grid-cols-3">
                <label className="grid gap-2 text-sm font-semibold">
                  Service needed
                  <select
                    className="border border-neutral-950/15 bg-white px-4 py-3 outline-none transition focus:border-rose-800"
                    defaultValue=""
                    name="service"
                  >
                    <option disabled value="">
                      Select
                    </option>
                    {estimateFields.services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Property type
                  <select
                    className="border border-neutral-950/15 bg-white px-4 py-3 outline-none transition focus:border-rose-800"
                    defaultValue=""
                    name="property"
                  >
                    <option disabled value="">
                      Select
                    </option>
                    {estimateFields.properties.map((property) => (
                      <option key={property}>{property}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Frequency
                  <select
                    className="border border-neutral-950/15 bg-white px-4 py-3 outline-none transition focus:border-rose-800"
                    defaultValue=""
                    name="frequency"
                  >
                    <option disabled value="">
                      Select
                    </option>
                    {estimateFields.frequencies.map((frequency) => (
                      <option key={frequency}>{frequency}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Message
                <textarea
                  className="min-h-36 resize-y border border-neutral-950/15 bg-white px-4 py-3 outline-none transition focus:border-rose-800"
                  name="message"
                  placeholder="Tell us the size of the space, preferred timing, and anything that needs special attention."
                />
              </label>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-800 px-6 py-4 font-semibold text-white transition hover:bg-neutral-950"
                type="submit"
              >
                <Send aria-hidden="true" size={18} />
                Request Cleaning
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-teal-950 bg-[#063f39] px-5 py-14 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                alt=""
                className="h-12 w-12 rounded-md bg-[#f8f4ec]"
                height="48"
                src="/logo.svg"
                width="48"
              />
              <div>
                <p className="text-2xl font-bold">Balabusta Brooklyn</p>
                <p className="mt-1 text-sm font-semibold uppercase text-teal-100/65">
                  Cleaning Services
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-7 text-teal-50/75">
              Reliable residential cleaning, deep cleaning, move cleaning, and
              building maintenance for Brooklyn families and NYC clients.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-100">
              <ShieldCheck aria-hidden="true" size={17} />
              Licensed and insured by the State of NY
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-amber-100">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-teal-50/75">
              {services.map((service) => (
                <li key={service.title}>
                  <a className="transition hover:text-white" href="#services">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-amber-100">
              Primary Areas
            </h2>
            <ul className="mt-5 space-y-3 text-teal-50/75">
              {serviceAreas
                .filter((area) => area.featured)
                .map((area) => (
                  <li key={area.name}>
                    <a className="transition hover:text-white" href="#areas">
                      {area.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-amber-100">
              Contact
            </h2>
            <div className="mt-5 space-y-4 text-teal-50/75">
              <a
                className="flex items-center gap-3 transition hover:text-white"
                href={phoneHref}
              >
                <Phone aria-hidden="true" size={18} />
                {phoneDisplay}
              </a>
              <a
                className="flex items-center gap-3 transition hover:text-white"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" size={18} />
                Message Us on WhatsApp
              </a>
              <a
                className="flex items-center gap-3 transition hover:text-white"
                href={smsHref}
              >
                <MessageCircle aria-hidden="true" size={18} />
                Text Us
              </a>
              <a
                className="flex items-start gap-3 transition hover:text-white"
                href={mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                <MapPin aria-hidden="true" className="mt-1" size={18} />
                <span>
                  381 Troy Avenue
                  <br />
                  Brooklyn, NY 11213
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-teal-100/15 pt-6 text-sm text-teal-50/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2020 {businessName}. All Rights Reserved.</p>
          <a className="font-semibold transition hover:text-white" href="#contact">
            Request a Cleaning
          </a>
        </div>
      </footer>

      <a
        aria-label="Message Balabusta Brooklyn Cleaning Services on WhatsApp"
        className="floating-whatsapp"
        href={whatsappHref}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" size={22} />
        <span>WhatsApp</span>
      </a>
    </main>
  )
}

export default App
