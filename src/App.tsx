import {
  BadgeCheck,
  Camera,
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

const phoneDisplay = '347-350-9660'
const phoneHref = 'tel:13473509660'
const smsHref = 'sms:13473509660'
const whatsappHref = 'https://wa.me/13473509660'
const addressDisplay = '381 Troy Avenue, Brooklyn, NY 11213'
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=381%20Troy%20Avenue%2C%20Brooklyn%2C%20NY%2011213'
const mapsEmbedUrl =
  'https://www.google.com/maps?q=381%20Troy%20Avenue%2C%20Brooklyn%2C%20NY%2011213&output=embed'

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Reliable cleaning for apartments, houses, moves, and recurring home care.',
  },
  {
    title: 'Commercial Cleaning',
    description: 'Professional upkeep for offices, storefronts, buildings, and shared spaces.',
  },
  {
    title: 'Housekeepers & Maids',
    description: 'Dependable household help for everyday maintenance and detailed resets.',
  },
  {
    title: 'Household Support',
    description: 'Cleaning ladies, housekeepers, maids, and nanny support for busy homes.',
  },
]

const values = [
  {
    title: 'Reliability',
    description: 'Responsive scheduling and dependable support when your space needs attention.',
    icon: BadgeCheck,
  },
  {
    title: 'Professionalism',
    description: 'Clear communication, respectful service, and a polished client experience.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality',
    description: 'Detail-minded cleaning standards for homes, offices, and commercial spaces.',
    icon: Sparkles,
  },
]

const serviceAreas = [
  { name: 'Brooklyn', featured: true },
  { name: 'Manhattan', featured: true },
  { name: 'Queens', featured: true },
  { name: 'Bronx' },
  { name: 'Staten Island' },
  { name: 'Long Island', featured: true },
  { name: 'Five Towns' },
  { name: 'Jersey City', featured: true },
  { name: 'Lakewood', featured: true },
  { name: 'Teaneck' },
  { name: 'Englewood' },
  { name: 'Deal' },
  { name: 'Monsey' },
  { name: 'Spring Valley' },
  { name: 'Monroe' },
  { name: 'New Square' },
  { name: 'Catskills' },
  { name: 'Connecticut', featured: true },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/cleaningservice' },
  { label: 'X / Twitter', href: 'https://twitter.com/balabustaNYC' },
  { label: 'Instagram', href: 'https://www.instagram.com/balabustabrooklyn' },
]

const estimateFields = {
  services: [
    'Residential cleaning',
    'Commercial cleaning',
    'Housekeeping / maids',
    'Cleaning ladies',
    'Nannies / household support',
  ],
  properties: [
    'Apartment',
    'House',
    'Office',
    'Storefront',
    'Building / shared space',
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

function revealStyle(index: number, step = 90): CSSProperties {
  return { '--reveal-delay': `${index * step}ms` } as CSSProperties
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
      'Estimate request for Balabusta Inc.',
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
      <header className="sticky top-0 z-30 border-b border-neutral-950/10 bg-[#f8f4ec]/90 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a
            href="#home"
            className="flex items-center gap-3 text-neutral-950"
            aria-label="Balabusta Inc. home"
          >
            <img
              alt=""
              className="h-10 w-10 rounded-md"
              height="40"
              src="/logo.svg"
              width="40"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-semibold">
                Balabusta Inc.
              </span>
              <span className="mt-1 hidden text-xs font-semibold uppercase text-neutral-500 sm:block">
                Professional Cleaning
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-neutral-700 md:flex">
            <a className="transition hover:text-neutral-950" href="#services">
              Services
            </a>
            <a className="transition hover:text-neutral-950" href="#values">
              Values
            </a>
            <a className="transition hover:text-neutral-950" href="#areas">
              Areas
            </a>
            <a className="transition hover:text-neutral-950" href="#contact">
              Estimate
            </a>
          </div>
          <a
            className="inline-flex items-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-900"
            href="#contact"
          >
            Contact us
          </a>
        </nav>
      </header>

      <section id="home" className="hero-section relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-16">
          <div className="relative z-10 max-w-3xl">
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Reliable cleaning for homes and businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
              Balabusta Inc. serves residential and commercial clients with
              professional cleaning, housekeepers, maids, cleaning ladies, and
              household support across New York, New Jersey, Connecticut, and
              the Tristate Area.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-800 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-rose-950/15 transition hover:bg-neutral-950"
                href="#contact"
              >
                <Send aria-hidden="true" size={19} />
                Request an estimate
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-950/15 bg-white px-6 py-4 text-base font-semibold text-neutral-950 shadow-sm transition hover:border-neutral-950"
                href={phoneHref}
              >
                <Phone aria-hidden="true" size={19} />
                Call {phoneDisplay}
              </a>
            </div>
          </div>

          <div className="geometric-frame relative z-10 min-h-[360px] overflow-hidden rounded-lg bg-neutral-950 shadow-2xl shadow-neutral-950/20 sm:min-h-[440px]">
            <img
              alt="Professional housekeeper folding towels in a home"
              className="absolute inset-0 h-full w-full object-cover"
              src="/balabusta-home.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase">Here to help</p>
              <p className="mt-3 max-w-md text-2xl font-semibold leading-tight sm:text-3xl">
                Modern cleaning support, built around your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="geometric-band border-y border-neutral-950 bg-neutral-950 py-4 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-center text-sm font-semibold sm:px-8">
          <span>Housekeepers</span>
          <span>Commercial Cleaning</span>
          <span>Residential Cleaning</span>
          <span>Cleaning Ladies</span>
          <span>Maids</span>
          <span>Nannies</span>
          <span>Call or text {phoneDisplay}</span>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="scroll-reveal reveal-left">
            <p className="text-sm font-bold uppercase text-rose-800">
              Residential and commercial services
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Cleaning services that feel considered, not cookie-cutter.
            </h2>
          </div>
          <p className="scroll-reveal reveal-right max-w-2xl text-lg leading-8 text-neutral-700">
            From apartments and family homes to offices and storefronts, we make
            it easy to get dependable cleaning help matched to the way your
            space is actually used.
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
      </section>

      <section id="values" className="relative overflow-hidden bg-neutral-950 px-5 py-20 text-white sm:px-8">
        <div aria-hidden="true" className="islamic-geometry values-geometry" />
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up max-w-3xl">
            <p className="text-sm font-bold uppercase text-rose-200">
              What we stand for
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Reliable, professional, quality cleaning.
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
                Now everywhere
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Serving key NYC boroughs, NJ, CT, and beyond.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {serviceAreas.map((area, index) => (
                <div
                  className={`scroll-reveal ${
                    revealDirections[index % revealDirections.length]
                  } ${
                    area.featured
                      ? 'border-rose-900 bg-rose-900 text-white shadow-lg shadow-rose-950/10'
                      : 'border-neutral-950/10 bg-[#f8f4ec] text-neutral-800'
                  } border px-4 py-3 text-sm font-semibold`}
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

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-3">
        <article className="scroll-reveal reveal-left bg-rose-900 p-8 text-white">
          <ShieldCheck aria-hidden="true" size={30} />
          <h2 className="mt-8 font-serif text-2xl font-semibold">
            Licensed and insured by the State of NY.
          </h2>
        </article>
        <article
          className="scroll-reveal reveal-up border border-neutral-950/10 bg-white p-8"
          style={revealStyle(1)}
        >
          <Languages aria-hidden="true" className="text-rose-800" size={30} />
          <h2 className="mt-8 font-serif text-2xl font-semibold">
            Yes, we speak Spanish.
          </h2>
          <p className="mt-3 text-neutral-700">
            Tambien hablamos Espanol.
          </p>
        </article>
        <article
          className="scroll-reveal reveal-right border border-neutral-950/10 bg-white p-8"
          style={revealStyle(2)}
        >
          <BadgeCheck aria-hidden="true" className="text-rose-800" size={30} />
          <h2 className="mt-8 font-serif text-2xl font-semibold">
            Available to help you anytime.
          </h2>
          <p className="mt-3 text-neutral-700">
            Request an estimate, call, text, or use WhatsApp at {phoneDisplay}.
          </p>
        </article>
      </section>

      <section id="contact" className="bg-neutral-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="scroll-reveal reveal-left">
            <p className="text-sm font-bold uppercase text-rose-200">
              Request an estimate
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              Tell us what needs cleaning.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              For residential or commercial cleaning, share a few details and we
              will follow up. You can also call, text, or message us on
              WhatsApp anytime.
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
                Call us or text us anytime
              </a>
              <a
                className="flex items-center gap-3"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                <Send aria-hidden="true" className="text-rose-200" size={22} />
                Message us on WhatsApp
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
          </div>

          <div className="scroll-reveal reveal-right bg-[#f8f4ec] p-5 text-neutral-950 shadow-2xl shadow-black/30 sm:p-8">
            <div className="mb-6 overflow-hidden border border-neutral-950/10 bg-white">
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
            <div className="mb-6">
              <p className="text-sm font-bold uppercase text-rose-800">
                Estimate details
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold">
                Request cleaning service
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
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-950/10 bg-neutral-950 px-5 py-14 text-white sm:px-8">
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
                <p className="text-2xl font-bold">Balabusta Inc.</p>
                <p className="mt-1 text-sm font-semibold uppercase text-white/55">
                  Professional Cleaning
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-7 text-white/70">
              Reliable residential and commercial cleaning support across key
              NYC boroughs, New Jersey, Connecticut, and surrounding areas.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-rose-100">
              <ShieldCheck aria-hidden="true" size={17} />
              Licensed and insured by the State of NY
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-rose-200">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-white/70">
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
            <h2 className="text-sm font-bold uppercase text-rose-200">
              Primary Areas
            </h2>
            <ul className="mt-5 space-y-3 text-white/70">
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
            <h2 className="text-sm font-bold uppercase text-rose-200">
              Contact
            </h2>
            <div className="mt-5 space-y-4 text-white/70">
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
                WhatsApp
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
              <div className="flex flex-wrap gap-4 pt-2">
                {socialLinks.map((link) => (
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-rose-200"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label === 'Instagram' ? (
                      <Camera aria-hidden="true" size={16} />
                    ) : null}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2020 BALABUSTA INC. - All Rights Reserved.</p>
          <a className="font-semibold transition hover:text-white" href="#contact">
            Request an estimate
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
