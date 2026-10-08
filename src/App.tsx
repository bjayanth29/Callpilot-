import { useEffect, useState, type ElementType, type ReactNode } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  CalendarClock,
  Check,
  ChevronDown,
  Clock3,
  Headphones,
  Menu,
  MessageSquareText,
  PhoneCall,
  Plus,
  ShieldAlert,
  Sparkles,
  UserRound,
  UsersRound,
  X,
  Zap,
} from 'lucide-react'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260723_145606_ab143199-b593-4941-bb1b-9afca215416b.mp4'

type IconType = ElementType<{ size?: number; strokeWidth?: number; className?: string }>

type Feature = {
  number: string
  title: string
  text: string
  icon: IconType
}

const navItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'AI Support', href: '#ai-support' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const features: Feature[] = [
  {
    number: '01',
    title: '24/7 Call Answering',
    text: "Professional support agents answer customer calls when your client's team is unavailable.",
    icon: Headphones,
  },
  {
    number: '02',
    title: 'AI-Assisted Support',
    text: 'AI helps agents understand customer intent and retrieve the right information quickly.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Lead Capture',
    text: 'Capture customer name, phone number, address, service request, urgency, and preferred time.',
    icon: MessageSquareText,
  },
  {
    number: '04',
    title: 'Appointment Handling',
    text: "Help customers request or schedule service according to the client's business rules.",
    icon: CalendarClock,
  },
  {
    number: '05',
    title: 'Emergency Escalation',
    text: 'Identify urgent situations and route them according to predefined escalation procedures.',
    icon: ShieldAlert,
  },
  {
    number: '06',
    title: 'Call Intelligence',
    text: 'Generate structured summaries, classifications, and actionable information from calls.',
    icon: BarChart3,
  },
]

const workflow = [
  'CUSTOMER CALL',
  'CALLPILOT',
  'AI + HUMAN SUPPORT',
  'CUSTOMER ISSUE IDENTIFIED',
  'LEAD CAPTURED',
  'APPOINTMENT / ESCALATION',
  'BUSINESS NOTIFIED',
]

const steps = [
  {
    number: '01',
    title: 'Customer Calls',
    text: 'The customer contacts the business.',
    icon: PhoneCall,
  },
  {
    number: '02',
    title: 'CallPilot Answers',
    text: "A trained support agent answers according to the client's procedures.",
    icon: Headphones,
  },
  {
    number: '03',
    title: 'AI Assists',
    text: 'AI provides summaries, classifications, knowledge retrieval, and recommended actions.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Business Gets the Lead',
    text: 'The customer request is recorded and delivered to the business.',
    icon: Zap,
  },
]

const plans = [
  {
    name: 'STARTER',
    eyebrow: 'For small businesses.',
    featured: false,
    features: ['Business-hours support', 'Call answering', 'Lead capture', 'Call summaries'],
    cta: 'Get Started',
  },
  {
    name: 'GROWTH',
    eyebrow: 'For growing businesses.',
    featured: true,
    features: ['Extended/after-hours support', 'AI-assisted agents', 'Lead qualification', 'Appointment handling', 'Analytics'],
    cta: 'Book a Demo',
  },
  {
    name: '24/7',
    eyebrow: 'For businesses requiring continuous coverage.',
    featured: false,
    features: ['24/7 support', 'AI-assisted customer service', 'Priority escalation', 'Advanced analytics', 'Dedicated support workflows'],
    cta: 'Talk to Us',
  },
]

const benefits = [
  'Reduce missed opportunities',
  'Respond faster',
  'Capture more leads',
  'Provide after-hours coverage',
  'Reduce repetitive workload',
  'Improve customer experience',
  'Understand every customer interaction',
]

function SectionLabel({ eyebrow, number }: { eyebrow: string; number: string }) {
  return (
    <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-signal/75">
      <span className="font-mono text-signal/45">{number}</span>
      <span className="h-px w-8 bg-signal/35" />
      <span>{eyebrow}</span>
    </div>
  )
}

function Button({ children, variant = 'primary', href = '#contact' }: { children: ReactNode; variant?: 'primary' | 'outline' | 'ghost'; href?: string }) {
  const classes = {
    primary: 'bg-signal text-ink hover:bg-white',
    outline: 'border border-white/20 bg-white/[0.03] text-white hover:border-signal/60 hover:bg-signal/10',
    ghost: 'text-white/65 hover:text-signal',
  }

  return (
    <a href={href} className={`group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition duration-300 ${classes[variant]}`}>
      {children}
      {variant !== 'ghost' && <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </a>
  )
}

function LiveBadge({ label = 'LIVE SUPPORT' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/[0.08] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-signal">
      <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal" />
      {label}
    </span>
  )
}

function BrandMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="11" className="fill-signal stroke-signal" strokeWidth="1.5" />
      <path d="M13.8 13.2c-.7.5-1 1.4-.7 2.2 1.7 5 5.7 9 10.7 10.7.8.3 1.7 0 2.2-.7l1.7-2.4c.4-.6.2-1.5-.4-1.9l-3.2-1.8c-.6-.3-1.3-.2-1.7.3l-1 1.2a12.2 12.2 0 0 1-3.2-3.2l1.2-1c.5-.4.6-1.1.3-1.7l-1.8-3.2c-.4-.6-1.3-.8-1.9-.4z" className="stroke-ink" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.9 10.9a8.5 8.5 0 0 1 3.2 3.2M28.9 7.8a13 13 0 0 1 4.3 4.3" className="stroke-ink" strokeWidth="1.8" strokeLinecap="round" opacity=".75" />
      <path d="M9.5 29.8h5.2" className="stroke-ink" strokeWidth="1.8" strokeLinecap="round" opacity=".6" />
    </svg>
  )
}

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[465px] lg:mr-0">
      <div className="absolute -inset-10 rounded-full bg-signal/[0.09] blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#11181c]/80 p-4 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:p-5">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-white">
              <BrandMark className="h-5 w-5" />
              CALLPILOT <span className="text-white/30">AI</span>
            </div>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">Operations console</p>
          </div>
          <LiveBadge />
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-4">
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.22em] text-white/40">Active call</p>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-signal/25 bg-signal/10 text-signal"><UserRound size={16} /></div>
              <div>
                <p className="text-sm font-medium text-white">John Smith</p>
                <p className="mt-0.5 text-[11px] text-white/45">AC Emergency</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="mb-2 text-[9px] uppercase tracking-[0.22em] text-white/40">Priority</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] text-amber"><span className="h-1 w-1 rounded-full bg-amber" />HIGH</span>
          </div>
        </div>
        <div className="my-5 h-px bg-white/10" />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-signal/80">AI summary</p>
            <p className="text-xs leading-relaxed text-white/65">Customer reports AC not cooling and requires service.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-signal/80">Next action</p>
            <p className="text-xs leading-relaxed text-white">Appointment Requested</p>
            <div className="mt-3 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.16em] text-white/35"><CalendarClock size={12} /> Awaiting dispatch</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[9px] uppercase tracking-[0.17em] text-white/35">
          <span>Support status</span><span className="font-mono text-[9px] uppercase tracking-[0.15em] text-signal">Demo view</span>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#0c1114]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.06] text-signal"><PhoneCall size={13} /></span><div><p className="text-[9px] uppercase tracking-[0.18em] text-white/35">Signal status</p><p className="mt-0.5 text-xs text-white">Routing normally</p></div></div>
      </div>
    </div>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white selection:bg-signal selection:text-ink">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-white/10 bg-[#080b0e]/85 backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="CallPilot home">
            <BrandMark className="h-8 w-8 shadow-[0_0_24px_rgba(125,231,225,.18)] transition group-hover:rotate-6" />
            <span><span className="block text-sm font-bold tracking-[0.24em] text-white">CALLPILOT</span><span className="block text-[8px] font-semibold tracking-[0.25em] text-white/40">AI CUSTOMER SUPPORT</span></span>
          </a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            {navItems.map(item => <a key={item.href} href={item.href} className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/55 transition hover:text-signal">{item.label}</a>)}
          </nav>
          <div className="hidden lg:block"><Button href="#contact">Book a Demo</Button></div>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/75 lg:hidden" onClick={() => setMobileOpen(value => !value)} aria-label="Toggle navigation">{mobileOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
        {mobileOpen && <div className="border-t border-white/10 bg-[#080b0e]/95 px-5 py-5 backdrop-blur-xl lg:hidden"><nav className="flex flex-col gap-4">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-xs uppercase tracking-[0.18em] text-white/70">{item.label}</a>)}<Button href="#contact">Book a Demo</Button></nav></div>}
      </header>

      <main id="top">
        <section className="hero-grid relative isolate flex min-h-[820px] items-center overflow-hidden pt-28 sm:min-h-screen lg:pt-20">
          <video className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-80" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={VIDEO_URL} type="video/mp4" /></video>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,11,14,.97)_0%,rgba(8,11,14,.78)_38%,rgba(8,11,14,.22)_74%,rgba(8,11,14,.5)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#080b0e_0%,transparent_20%,transparent_74%,rgba(8,11,14,.55)_100%)]" />
          <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-20 lg:px-12 lg:pb-20">
            <div className="relative z-10 max-w-[710px]">
              <div className="reveal inline-flex items-center gap-3 rounded-full border border-signal/20 bg-signal/[0.08] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-signal"><span className="live-dot h-1.5 w-1.5 rounded-full bg-signal" />AI-ASSISTED CUSTOMER SUPPORT</div>
              <h1 className="reveal reveal-delay-1 mt-7 max-w-[760px] font-display text-[clamp(3.7rem,7.2vw,7.4rem)] font-medium leading-[.91] tracking-[-0.075em] text-white">Never Miss a <span className="text-signal">Customer Call</span> Again.</h1>
              <p className="reveal reveal-delay-2 mt-7 max-w-[565px] text-base leading-8 text-white/60 sm:text-lg">AI-assisted customer support for HVAC and plumbing businesses. We answer calls, capture leads, and help turn customer inquiries into booked jobs.</p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3"><Button href="#contact">Book a Demo</Button><Button variant="outline" href="#how-it-works">See How It Works</Button></div>
              <div className="reveal reveal-delay-4 mt-10 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40"><span className="h-px w-9 bg-signal/60" />Human Support <span className="text-signal">+</span> AI Automation</div>
            </div>
            <div className="reveal reveal-delay-2 relative z-10 lg:pt-16"><HeroPreview /></div>
          </div>
          <div className="absolute bottom-8 left-5 hidden items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/30 sm:flex lg:left-12"><span className="h-8 w-px bg-signal/50" />Built for the calls your team can’t take</div>
          <div className="absolute bottom-8 right-12 hidden items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/30 lg:flex">Scroll to explore <ChevronDown size={14} className="animate-bounce text-signal" /></div>
        </section>

        <section className="relative border-y border-white/[0.07] bg-[#0b1013] py-8"><div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-5 px-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/30 sm:px-8 lg:px-12"><span>Call answering</span><span className="hidden text-signal/50 sm:inline">✦</span><span>Lead capture</span><span className="hidden text-signal/50 md:inline">✦</span><span>Appointment handling</span><span className="hidden text-signal/50 sm:inline">✦</span><span>Emergency escalation</span><span className="hidden text-signal/50 md:inline">✦</span><span>Call intelligence</span></div></section>

        <section id="problem" className="relative bg-[#080b0e] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
            <div className="reveal"><SectionLabel number="01" eyebrow="The missed-call problem" /><h2 className="max-w-[500px] font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">Every Missed Call Is a <span className="text-white/40">Missed Opportunity.</span></h2><p className="mt-7 max-w-[440px] text-base leading-7 text-white/50">HVAC and plumbing teams are built to solve problems — not to sit by a phone all day. The gap between the ring and the response is where good jobs disappear.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Technicians can’t answer every call', 'Customers call outside business hours', 'Emergency calls need fast responses', 'Leads are lost when calls go unanswered', 'Office staff are overwhelmed', 'Repetitive questions consume valuable time'].map((item, index) => <div key={item} className={`reveal reveal-delay-${(index % 4) + 1} group flex min-h-[126px] flex-col justify-between rounded-xl border border-white/10 bg-white/[0.025] p-5 transition duration-500 hover:-translate-y-1 hover:border-signal/35 hover:bg-signal/[0.045]`}><span className="font-mono text-xs text-signal/50">0{index + 1}</span><p className="max-w-[220px] text-sm leading-6 text-white/70 transition group-hover:text-white">{item}</p></div>)}
            </div>
          </div>
        </section>

        <section id="solutions" className="relative overflow-hidden border-y border-white/[0.07] bg-[#0d1417] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="ambient-orb ambient-orb-right" />
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal max-w-[650px]"><SectionLabel number="02" eyebrow="The CallPilot signal path" /><h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">Your Customers Call. <span className="text-signal">We Answer.</span></h2><p className="mt-7 max-w-[520px] text-base leading-7 text-white/50">One dependable layer between every customer conversation and the team that gets the work done.</p></div>
            <div className="mt-16 grid max-w-[980px] gap-0 border-l border-signal/30 pl-6 sm:pl-10 lg:ml-20">
              {workflow.map((item, index) => <div key={item} className="reveal group relative flex items-center gap-5 border-b border-white/[0.08] py-5 first:pt-0 last:border-b-0"><span className="absolute -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-[#0d1417] bg-signal shadow-[0_0_0_4px_rgba(125,231,225,.12)] sm:-left-[45px]" /><span className="w-7 font-mono text-[10px] text-signal/45">0{index + 1}</span><span className="font-display text-xl tracking-[-0.03em] text-white/75 transition group-hover:text-white sm:text-3xl">{item}</span>{index < workflow.length - 1 && <ArrowDownRight size={18} className="ml-auto rotate-45 text-signal/50" />}</div>)}
            </div>
          </div>
        </section>

        <section id="ai-support" className="bg-[#080b0e] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1400px]"><div className="reveal max-w-[620px]"><SectionLabel number="03" eyebrow="A calmer way to scale" /><h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">The support layer your <span className="text-white/40">customers feel.</span></h2></div><div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{features.map(feature => { const Icon = feature.icon; return <article key={feature.number} className="reveal group relative min-h-[275px] overflow-hidden rounded-2xl border border-white/10 bg-[#0e1417] p-6 transition duration-500 hover:-translate-y-1 hover:border-signal/35"><div className="flex items-start justify-between"><span className="font-mono text-xs text-signal/60">{feature.number}</span><Icon size={20} strokeWidth={1.4} className="text-white/30 transition group-hover:text-signal" /></div><div className="mt-20"><h3 className="font-display text-xl tracking-[-0.03em] text-white">{feature.title}</h3><p className="mt-3 max-w-[300px] text-sm leading-6 text-white/45">{feature.text}</p></div><div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-signal/[0.06] blur-2xl transition duration-500 group-hover:bg-signal/[0.12]" /></article> })}</div></div>
        </section>

        <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#0d1417] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-28"><div className="reveal"><SectionLabel number="04" eyebrow="Intelligence, with empathy" /><h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">AI Behind Every <span className="text-signal">Conversation.</span></h2><p className="mt-7 max-w-[460px] text-base leading-7 text-white/50">The right context at the right moment — so your human team can stay present, consistent, and ready for what matters.</p><div className="mt-9 flex items-center gap-3 text-sm text-white/60"><span className="grid h-9 w-9 place-items-center rounded-full border border-signal/25 bg-signal/10 text-signal"><UsersRound size={16} /></span><strong className="font-medium text-white">AI assists. Humans care.</strong></div></div><div className="reveal reveal-delay-1 rounded-2xl border border-white/10 bg-[#080b0e]/75 p-4 shadow-2xl backdrop-blur-xl sm:p-6"><div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">Live conversation analysis</span><span className="font-mono text-[10px] text-signal">ANALYZING</span></div><div className="grid gap-6 py-6 sm:grid-cols-[.8fr_1.2fr]"><div className="flex items-start gap-3"><div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/[0.07] text-white/60"><UserRound size={14} /></div><p className="rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white/70">“My AC stopped working and it&apos;s extremely hot in the house.”</p></div><div className="rounded-xl border border-signal/15 bg-signal/[0.04] p-4"><div className="grid grid-cols-2 gap-x-5 gap-y-5 text-[10px]"><div><p className="uppercase tracking-[0.16em] text-white/35">Intent</p><p className="mt-1.5 font-medium text-signal">HVAC Emergency</p></div><div><p className="uppercase tracking-[0.16em] text-white/35">Priority</p><p className="mt-1.5 font-medium text-amber">HIGH</p></div><div><p className="uppercase tracking-[0.16em] text-white/35">Sentiment</p><p className="mt-1.5 font-medium text-white/75">Concerned</p></div><div><p className="uppercase tracking-[0.16em] text-white/35">Recommended action</p><p className="mt-1.5 font-medium text-white/75">Schedule Emergency Service</p></div></div><div className="mt-5 border-t border-white/10 pt-4"><p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-white/35">Required information</p><div className="flex flex-wrap gap-2">{['Customer Name', 'Phone', 'Address', 'Preferred Appointment'].map(item => <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1.5 text-[9px] text-white/55"><Check size={11} className="text-signal" />{item}</span>)}</div></div></div></div><div className="border-t border-white/10 pt-4 text-[9px] uppercase tracking-[0.18em] text-white/35">Human handoff ready <span className="ml-2 text-signal">●</span></div></div></div>
        </section>

        <section id="how-it-works" className="bg-[#080b0e] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1400px]"><div className="reveal flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><SectionLabel number="05" eyebrow="From ring to resolution" /><h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">How It <span className="text-white/40">Works.</span></h2></div><p className="max-w-[330px] text-sm leading-6 text-white/45">A simple handoff model built around the way your business already works.</p></div><div className="mt-16 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">{steps.map((step, index) => { const Icon = step.icon; return <article key={step.number} className="reveal group border-b border-white/10 p-6 first:pl-0 sm:even:border-l sm:even:pl-8 lg:border-b-0 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0"><div className="flex items-center justify-between"><span className="font-mono text-xs text-signal/65">{step.number}</span><Icon size={19} strokeWidth={1.4} className="text-white/30 transition group-hover:text-signal" /></div><h3 className="mt-20 font-display text-xl text-white">{step.title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{step.text}</p>{index < steps.length - 1 && <div className="mt-8 hidden h-px w-10 bg-signal/50 lg:block" />}</article> })}</div></div></section>

        <section id="analytics" className="relative bg-[#0d1417] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1400px]"><div className="reveal flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><SectionLabel number="06" eyebrow="Your operating view" /><h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">See the whole <span className="text-signal">conversation.</span></h2></div><div className="max-w-[390px] rounded-xl border border-white/10 bg-white/[0.025] p-4 text-xs leading-5 text-white/45"><span className="text-signal">Demo workspace.</span> The figures below are illustrative product data and do not represent real customers.</div></div>
          <div className="reveal reveal-delay-1 mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#080b0e] shadow-2xl"><div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7"><div className="flex items-center gap-3"><BrandMark className="h-7 w-7" /><span className="text-xs font-semibold tracking-[0.16em] text-white">CALLPILOT <span className="text-white/35">/ OVERVIEW</span></span></div><div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.16em] text-white/35"><span>Tuesday, Oct 08</span><span className="hidden h-4 w-px bg-white/15 sm:block" /><LiveBadge label="System live" /></div></div><div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-6">{[['Calls Today', '148', '+12%'], ['Answered Calls', '142', '96.0%'], ['Missed Calls', '06', 'Needs review'], ['New Leads', '38', '+08 today'], ['Appointments', '24', 'Requests'], ['AI-Assisted Calls', '112', '75.6%']].map(([label, value, note]) => <div key={label} className="bg-[#0c1114] p-5"><p className="text-[9px] uppercase tracking-[0.16em] text-white/35">{label}</p><p className="mt-4 font-display text-3xl tracking-[-0.05em] text-white">{value}</p><p className="mt-2 text-[10px] text-signal/70">{note}</p></div>)}</div><div className="grid gap-px bg-white/10 lg:grid-cols-[.85fr_1.15fr]"><div className="bg-[#0c1114] p-5 sm:p-7"><div className="flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[0.18em] text-white/35">Live calls</p><p className="mt-1 text-sm text-white/70">Queue at a glance</p></div><button className="text-[9px] uppercase tracking-[0.16em] text-signal">View all <ArrowRight size={11} className="ml-1 inline" /></button></div><div className="mt-5 space-y-2">{[['John Smith', 'AC Emergency', 'HIGH', 'ACTIVE', 'amber'], ['Mike Johnson', 'Plumbing Repair', 'MEDIUM', 'ACTIVE', 'signal'], ['Sarah Wilson', 'Maintenance', 'LOW', 'RESOLVED', 'white']].map(([name, issue, priority, status, tone]) => <div key={name} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"><div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.06] text-white/45"><UserRound size={13} /></span><div><p className="text-xs text-white/80">{name}</p><p className="mt-1 text-[10px] text-white/35">{issue}</p></div></div><div className="text-right"><p className={`text-[9px] font-bold tracking-[0.14em] ${tone === 'amber' ? 'text-amber' : tone === 'signal' ? 'text-signal' : 'text-white/40'}`}>{priority}</p><p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/35">{status}</p></div></div>)}</div></div><div className="bg-[#0c1114] p-5 sm:p-7"><div className="flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[0.18em] text-white/35">Analytics</p><p className="mt-1 text-sm text-white/70">Conversation performance</p></div><div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.13em] text-white/35"><span><i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-signal" />Calls</span><span><i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-amber" />Leads</span></div></div><div className="mt-5 h-[205px] rounded-xl border border-white/[0.08] bg-white/[0.018] p-4"><div className="flex h-full items-end justify-between gap-2">{[36, 52, 45, 78, 59, 82, 68, 91, 74, 87, 64, 96].map((height, index) => <div key={index} className="flex h-full flex-1 flex-col justify-end gap-1.5"><div className="relative h-full"><span className="absolute bottom-0 left-1/2 w-[55%] -translate-x-1/2 rounded-t-sm bg-signal/70" style={{ height: `${height}%` }} /><span className="absolute bottom-0 left-[65%] w-[25%] -translate-x-1/2 rounded-t-sm bg-amber/75" style={{ height: `${Math.max(12, height - 28)}%` }} /></div><span className="text-center font-mono text-[8px] text-white/25">{['8a', '', '10a', '', '12p', '', '2p', '', '4p', '', '6p', ''][index]}</span></div>)}</div></div><div className="mt-4 grid grid-cols-3 gap-2">{[['Lead conversion', '25.7%'], ['Appointment requests', '24'], ['Resolution rate', '94.2%']].map(([label, value]) => <div key={label} className="rounded-lg bg-white/[0.035] p-3"><p className="text-[9px] leading-4 text-white/35">{label}</p><p className="mt-2 font-mono text-sm text-white">{value}</p></div>)}</div></div></div></div></div>
        </section>

        <section className="bg-[#080b0e] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-28"><div className="reveal"><SectionLabel number="07" eyebrow="Make room for the work" /><h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">Your Team Doesn&apos;t Have to <span className="text-white/40">Answer Every Call.</span></h2><p className="mt-7 max-w-[440px] text-base leading-7 text-white/50">Keep your people focused on the work that needs them, while every customer conversation gets the attention it deserves.</p><div className="mt-9"><Button href="#how-it-works">See How CallPilot Works</Button></div></div><div className="grid gap-3 sm:grid-cols-2">{benefits.map((benefit, index) => <div key={benefit} className="reveal flex items-center gap-4 border-b border-white/10 py-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-signal/25 bg-signal/[0.07] text-signal"><Check size={13} /></span><span className="text-sm text-white/65">{benefit}</span><span className="ml-auto font-mono text-[9px] text-white/20">0{index + 1}</span></div>)}</div></div></section>

        <section id="pricing" className="border-y border-white/[0.07] bg-[#0d1417] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1400px]"><div className="reveal flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><SectionLabel number="08" eyebrow="Coverage that fits" /><h2 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">Choose your <span className="text-signal">coverage.</span></h2></div><p className="max-w-[350px] text-sm leading-6 text-white/45">Every operation is different. We shape the workflow around your team, your service area, and your customer promise.</p></div><div className="mt-14 grid gap-3 lg:grid-cols-3">{plans.map(plan => <article key={plan.name} className={`reveal relative flex flex-col rounded-2xl border p-6 sm:p-8 ${plan.featured ? 'border-signal/50 bg-signal/[0.07] shadow-[0_20px_80px_rgba(125,231,225,.08)]' : 'border-white/10 bg-[#0b1013]'}`}><div className="flex items-center justify-between"><span className={`text-[10px] font-semibold tracking-[0.25em] ${plan.featured ? 'text-signal' : 'text-white/55'}`}>{plan.name}</span>{plan.featured && <span className="rounded-full bg-signal px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-ink">Recommended</span>}</div><p className="mt-5 text-sm text-white/45">{plan.eyebrow}</p><div className="my-8 border-y border-white/10 py-6"><span className="font-display text-3xl tracking-[-0.05em] text-white">Custom Pricing</span><p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/30">Shaped to your workflow</p></div><ul className="flex-1 space-y-4">{plan.features.map(item => <li key={item} className="flex gap-3 text-sm text-white/65"><Check size={15} className="mt-0.5 shrink-0 text-signal" />{item}</li>)}</ul><a href="#contact" className={`mt-10 inline-flex items-center justify-between border-t pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] transition ${plan.featured ? 'border-signal/20 text-signal hover:text-white' : 'border-white/10 text-white/55 hover:text-signal'}`}>{plan.cta}<ArrowRight size={15} /></a></article>)}</div></div></section>

        <section id="contact" className="relative isolate overflow-hidden px-5 py-28 sm:px-8 lg:px-12 lg:py-44"><video className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={VIDEO_URL} type="video/mp4" /></video><div className="absolute inset-0 -z-10 bg-[#080b0e]/80" /><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(125,231,225,.13),transparent_45%)]" /><div className="reveal mx-auto max-w-[940px] text-center"><SectionLabel number="09" eyebrow="The next call" /><h2 className="font-display text-5xl font-medium leading-[.98] tracking-[-0.07em] sm:text-7xl lg:text-[7.4rem]">Stop Losing Customers to <span className="text-signal">Missed Calls.</span></h2><p className="mx-auto mt-8 max-w-[540px] text-base leading-7 text-white/55 sm:text-lg">Let CallPilot handle the conversations while your team focuses on the work.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><Button href="mailto:hello@callpilot.ai">Book a Demo</Button><Button variant="outline" href="mailto:hello@callpilot.ai">Talk to Us</Button></div></div></section>
      </main>

      <footer className="border-t border-white/10 bg-[#080b0e] px-5 py-10 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-end"><div><a href="#top" className="flex items-center gap-3"><BrandMark className="h-8 w-8" /><span><span className="block text-sm font-bold tracking-[0.24em] text-white">CALLPILOT</span><span className="block text-[8px] font-semibold tracking-[0.25em] text-white/35">AI CUSTOMER SUPPORT</span></span></a><p className="mt-5 max-w-[310px] text-xs leading-5 text-white/35">AI-assisted customer support for the businesses that keep homes running.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.17em] text-white/35">{navItems.slice(0, 5).map(item => <a key={item.href} href={item.href} className="transition hover:text-signal">{item.label}</a>)}</div></div><div className="mx-auto mt-10 flex max-w-[1400px] flex-col justify-between gap-3 border-t border-white/[0.08] pt-5 text-[10px] uppercase tracking-[0.16em] text-white/25 sm:flex-row"><span>© 2026 CallPilot AI. Built for better conversations.</span><span>Human support + AI automation</span></div></footer>
    </div>
  )
}

export default App
