import {
  BadgeCheck,
  Building2,
  Camera,
  HeartHandshake,
  Home,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import type { FormEvent } from 'react'

const phoneDisplay = '347.350.9660'
const phoneHref = 'tel:13473509660'
const smsHref = 'sms:13473509660'
const whatsappHref = 'https://wa.me/13473509660'

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Reliable cleaning for apartments, houses, moves, and recurring home care.',
    icon: Home,
  },
  {
    title: 'Commercial Cleaning',
    description: 'Professional upkeep for offices, storefronts, buildings, and shared spaces.',
    icon: Building2,
  },
  {
    title: 'Housekeepers & Maids',
    description: 'Dependable household help for everyday maintenance and detailed resets.',
    icon: Sparkles,
  },
  {
    title: 'Household Support',
    description: 'Cleaning ladies, housekeepers, maids, and nanny support for busy homes.',
    icon: HeartHandshake,
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
  'Brooklyn',
  'Manhattan',
  'Queens',
  'Bronx',
  'Staten Island',
  'Monsey',
  'Spring Valley',
  'Monroe',
  'New Square',
  'Catskills',
  'Teaneck',
  'Englewood',
  'Lakewood',
  'Jersey City',
  'Long Island',
  'Five Towns',
  'Deal',
  'Connecticut',
  'The Tristate Area',
  'NYC',
  'NJ',
  'CT',
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

function App() {
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
    <main className="min-h-screen bg-[#f8f4ec] text-neutral-950">
      <header className="sticky top-0 z-30 border-b border-neutral-950/10 bg-[#f8f4ec]/90 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a href="#home" className="font-serif text-xl font-semibold">
            Balabusta Inc.
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
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-900"
            href={phoneHref}
          >
            <Phone aria-hidden="true" size={16} />
            {phoneDisplay}
          </a>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-white/45" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-14">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 border border-neutral-950/15 bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-rose-700" />
              Professional cleaning for homes and businesses
            </div>
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

          <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-neutral-950 shadow-2xl shadow-neutral-950/20 sm:min-h-[440px]">
            <img
              alt="Professional housekeeper folding towels in a home"
              className="absolute inset-0 h-full w-full object-cover"
              src="/balabusta-home.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase">Here to help</p>
              <p className="mt-3 max-w-md text-2xl font-semibold leading-tight sm:text-3xl">
                Modern cleaning support, built around your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-950 bg-neutral-950 py-4 text-white">
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
          <div>
            <p className="text-sm font-bold uppercase text-rose-800">
              Residential and commercial services
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Cleaning services that feel considered, not cookie-cutter.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-neutral-700">
            From apartments and family homes to offices and storefronts, we make
            it easy to get dependable cleaning help matched to the way your
            space is actually used.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              className="border border-neutral-950/10 bg-white p-6 shadow-sm"
              key={title}
            >
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f4ec] text-rose-800">
                <Icon aria-hidden="true" size={23} />
              </div>
              <h3 className="font-serif text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="values" className="bg-neutral-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-rose-200">
              What we stand for
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Reliable, professional, quality cleaning.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <article className="border border-white/15 p-6" key={title}>
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

      <section id="areas" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase text-rose-800">
                Now everywhere
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Serving NYC, NJ, CT, and beyond.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {serviceAreas.map((area) => (
                <div
                  className="border border-neutral-950/10 bg-[#f8f4ec] px-4 py-3 text-sm font-semibold text-neutral-800"
                  key={area}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-3">
        <article className="bg-rose-900 p-8 text-white">
          <ShieldCheck aria-hidden="true" size={30} />
          <h2 className="mt-8 font-serif text-3xl font-semibold">
            Licensed and insured by the State of NY.
          </h2>
        </article>
        <article className="border border-neutral-950/10 bg-white p-8">
          <Languages aria-hidden="true" className="text-rose-800" size={30} />
          <h2 className="mt-8 font-serif text-3xl font-semibold">
            Yes, we speak Spanish.
          </h2>
          <p className="mt-3 text-neutral-700">
            Tambien hablamos Espanol.
          </p>
        </article>
        <article className="border border-neutral-950/10 bg-white p-8">
          <BadgeCheck aria-hidden="true" className="text-rose-800" size={30} />
          <h2 className="mt-8 font-serif text-3xl font-semibold">
            Available to help you anytime.
          </h2>
          <p className="mt-3 text-neutral-700">
            Request an estimate, call, text, or use WhatsApp at {phoneDisplay}.
          </p>
        </article>
      </section>

      <section id="contact" className="bg-neutral-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase text-rose-200">
              Request an estimate
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
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
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 text-rose-200" size={22} />
                <address className="not-italic">
                  381 Troy Avenue
                  <br />
                  Brooklyn, NY 11213
                </address>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f4ec] p-5 text-neutral-950 shadow-2xl shadow-black/30 sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase text-rose-800">
                Estimate details
              </p>
              <h3 className="mt-2 font-serif text-3xl font-semibold">
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

      <footer className="bg-[#f8f4ec] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-neutral-700 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2020 BALABUSTA INC. - All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 font-semibold text-neutral-950">
              <Building2 aria-hidden="true" size={16} />
              Licensed and insured
            </span>
            {socialLinks.map((link) => (
              <a
                className="inline-flex items-center gap-2 transition hover:text-rose-800"
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
      </footer>
    </main>
  )
}

export default App
