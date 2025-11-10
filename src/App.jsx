import React, { useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2, Shield, Rocket, Users, GraduationCap, Calendar, Mail, Phone, MapPin, Sparkles } from 'lucide-react'

function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 shadow ring-1 ring-white/40" />
          <span className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 text-lg">NovaTech Institute</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => scrollTo('home')} className="hover:text-purple-700 transition">Home</button>
          <button onClick={() => scrollTo('program')} className="hover:text-purple-700 transition">Program</button>
          <button onClick={() => scrollTo('faculty')} className="hover:text-purple-700 transition">Faculty</button>
          <button onClick={() => scrollTo('admissions')} className="hover:text-purple-700 transition">Admissions</button>
          <button onClick={() => scrollTo('dates')} className="hover:text-purple-700 transition">Dates</button>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo('apply')} className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 text-white px-4 py-2 rounded-md shadow hover:opacity-95 transition">
            Apply Now <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const scrollToApply = () => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section id="home" className="relative min-h-[100svh] pt-16 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vibrant gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-fuchsia-400/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/40 blur-3xl" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/70 border border-white/60 rounded-full px-3 py-1 shadow-sm mb-5">
              <Sparkles size={16} className="text-fuchsia-600" />
              <span className="text-xs font-semibold text-gray-800">Admissions Open • 4-Year B.Tech Program</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
              Build What The Future Runs On
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700">
              Join a career-accelerating B.Tech that blends robust fundamentals, hands-on projects, and mentorship from engineers at top tech companies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button onClick={scrollToApply} className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 text-white px-6 py-3 rounded-md shadow-lg hover:opacity-95 transition font-semibold">
                Start Application <ArrowRight size={18} />
              </button>
              <a href="#program" onClick={(e)=>{e.preventDefault(); document.getElementById('program')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/80 backdrop-blur border border-white/60 text-gray-900 hover:bg-white transition font-semibold">
                Explore Program
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'FAANG Mentors', icon: Users },
                { label: 'Project-First', icon: Rocket },
                { label: 'Industry Ready', icon: Shield },
                { label: 'Global Network', icon: GraduationCap },
              ].map((item, idx) => (
                <div key={idx} className="rounded-lg bg-white/80 border border-white/60 backdrop-blur px-4 py-3 flex items-center gap-2 shadow">
                  <item.icon size={18} className="text-purple-700" />
                  <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-cyan-500/10 border border-fuchsia-200/40 rounded-full px-3 py-1 mb-4">
        <span className="text-xs font-bold tracking-wide text-fuchsia-700">{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-700 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

function Program() {
  const points = [
    {
      title: 'Core Computer Science, Mastered',
      desc: 'Data structures, algorithms, systems, and networks taught by engineers building at scale.'
    },
    {
      title: 'Build 12+ Portfolio-Ready Projects',
      desc: 'Every semester ships capstone work with real users and reviews from industry mentors.'
    },
    {
      title: 'Career Tracks',
      desc: 'Specialize in AI/ML, Cloud & DevOps, Full-Stack, or Security with dedicated labs.'
    },
    {
      title: 'Internships from Year 2',
      desc: 'Leverage our partner network and alumni to land high-impact internships early.'
    },
  ]
  return (
    <section id="program" className="relative py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Program Details"
          title="A 4-Year B.Tech Designed for Builders"
          subtitle="Balanced foundation + specialization. Learn by building, guided by leaders from the world’s best tech companies."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div key={i} className="group rounded-xl bg-white/80 backdrop-blur border border-white/60 p-6 shadow hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition" />
              <h3 className="mt-4 font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{p.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-fuchsia-700 text-sm font-semibold">
                <CheckCircle2 size={16} /> Outcome-focused
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faculty() {
  const mentors = [
    { name: 'Senior Engineer', company: 'FAANG', focus: 'Distributed Systems & Reliability' },
    { name: 'Staff ML Scientist', company: 'FAANG', focus: 'Applied AI & LLMs' },
    { name: 'Principal Architect', company: 'FAANG', focus: 'Cloud, SRE & DevOps' },
    { name: 'Lead Frontend', company: 'FAANG', focus: 'Design Systems & Web Performance' },
  ]
  return (
    <section id="faculty" className="relative py-20 bg-gradient-to-b from-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Faculty & Mentors"
          title="Learn from Engineers at Top Tech"
          subtitle="Small-group mentorship, code reviews, and career guidance from people shipping global-scale products."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, i) => (
            <div key={i} className="rounded-xl bg-white/80 backdrop-blur border border-white/60 p-6 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-600 to-fuchsia-500" />
                <div>
                  <p className="font-bold text-gray-900">{m.name}</p>
                  <p className="text-sm text-gray-600">{m.company}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">{m.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Admissions() {
  const steps = [
    { title: 'Apply Online', desc: 'Submit your basic details and interests.' },
    { title: 'Aptitude Assessment', desc: 'Friendly test to understand your fundamentals.' },
    { title: 'Interview', desc: 'Meet a mentor to discuss goals and potential.' },
    { title: 'Offer & Onboarding', desc: 'Secure your seat and join the builder community.' },
  ]
  return (
    <section id="admissions" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Admission Process"
          title="Simple, Supportive, and Transparent"
          subtitle="We evaluate intent, curiosity, and grit — not just test scores."
        />
        <ol className="mt-12 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-4 items-start p-6 rounded-xl bg-gradient-to-br from-fuchsia-50 to-cyan-50 border border-white shadow">
              <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-500 text-white grid place-items-center font-bold">{i+1}</div>
              <div>
                <h4 className="font-bold text-gray-900">{s.title}</h4>
                <p className="text-sm text-gray-700 mt-1">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Dates() {
  const items = [
    { label: 'Applications Open', date: 'March 1, 2025' },
    { label: 'Early Deadline', date: 'April 15, 2025' },
    { label: 'Regular Deadline', date: 'May 31, 2025' },
    { label: 'Interviews', date: 'Rolling (April–June)' },
    { label: 'Orientation', date: 'August 5, 2025' },
  ]
  return (
    <section id="dates" className="relative py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Key Dates" title="Plan Ahead" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((d, i) => (
            <div key={i} className="rounded-xl bg-white/90 backdrop-blur border border-white/60 p-6 shadow">
              <div className="flex items-center gap-2 text-fuchsia-700 font-semibold"><Calendar size={18} /> {d.label}</div>
              <p className="mt-2 text-gray-900 font-bold text-lg">{d.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApplyForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="apply" className="relative py-20 bg-gradient-to-br from-purple-600/10 via-fuchsia-600/10 to-cyan-600/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Apply"
          title="Start Your Application"
          subtitle="This quick form records your interest. Our team will reach out with next steps and a detailed application link."
        />
        <div className="mt-10 rounded-2xl bg-white/90 backdrop-blur border border-white/60 shadow overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800">Full Name</label>
                    <input required type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Alex Johnson" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800">Email</label>
                    <input required type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="alex@email.com" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800">Phone</label>
                      <input required type="tel" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800">Current Class</label>
                      <select required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                        <option value="">Select</option>
                        <option>Class 11</option>
                        <option>Class 12</option>
                        <option>Gap Year</option>
                        <option>Parent</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800">Intended Track</label>
                    <select required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                      <option>AI/ML</option>
                      <option>Full-Stack</option>
                      <option>Cloud & DevOps</option>
                      <option>Security</option>
                      <option>Undecided</option>
                    </select>
                  </div>
                  <button type="submit" disabled={loading} className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 text-white px-6 py-3 rounded-md shadow hover:opacity-95 transition font-semibold">
                    {loading ? 'Submitting…' : 'Submit Interest'}
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-gray-600">We’ll never share your information. By submitting, you agree to be contacted about admissions.</p>
                </form>
              ) : (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="h-14 w-14 rounded-full bg-green-100 text-green-700 grid place-items-center">
                    <CheckCircle2 />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-gray-900">Thank you for applying!</h4>
                  <p className="mt-2 text-gray-700">Our admissions team will contact you shortly with next steps.</p>
                </div>
              )}
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-br from-fuchsia-600 to-cyan-500 text-white">
              <h4 className="text-xl font-bold">Why this B.Tech stands out</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/> Curriculum co-designed with FAANG engineers</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/> Paid internships and real-world capstones</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/> Career coaching, mock interviews, and referrals</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/> Modern campus with 24/7 lab access</li>
              </ul>
              <div className="mt-8 space-y-2 text-sm opacity-95">
                <div className="flex items-center gap-2"><Mail size={16}/> admissions@novatech.edu</div>
                <div className="flex items-center gap-2"><Phone size={16}/> +91 98765 43210</div>
                <div className="flex items-center gap-2"><MapPin size={16}/> Bengaluru, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-10 bg-gray-950 text-gray-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} NovaTech Institute • All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#admissions" className="hover:text-white">Admissions</a>
          <a href="#program" className="hover:text-white">Program</a>
          <a href="#apply" className="hover:text-white">Apply</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <Program />
      <Faculty />
      <Admissions />
      <Dates />
      <ApplyForm />
      <Footer />
    </div>
  )
}
