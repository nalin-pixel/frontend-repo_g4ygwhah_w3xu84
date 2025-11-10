import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, Shield, Rocket, Users, GraduationCap, Calendar, Mail, Phone, MapPin, Sparkles, Star, Layers, Cpu, Cloud, Briefcase, UserCheck, BadgeCheck } from 'lucide-react'

// High-contrast direction: electric blue, amber, emerald accents on clean light/dark bases

function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 via-emerald-500 to-amber-400 shadow ring-1 ring-white/20" />
          <span className="font-extrabold leading-none tracking-tight text-white">NovaTech Institute</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
          <button onClick={() => scrollTo('home')} className="hover:text-white transition">Home</button>
          <button onClick={() => scrollTo('program')} className="hover:text-white transition">Program</button>
          <button onClick={() => scrollTo('faculty')} className="hover:text-white transition">Faculty</button>
          <button onClick={() => scrollTo('admissions')} className="hover:text-white transition">Admissions</button>
          <button onClick={() => scrollTo('dates')} className="hover:text-white transition">Dates</button>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo('apply')} className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg transition">
            Apply Now <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-500" />
    </header>
  )
}

function Hero() {
  const scrollToApply = () => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section id="home" className="relative min-h-[88vh] pt-24 pb-16">
      {/* Background image */}
      <img
        src="https://www.shutterstock.com/image-photo/abstract-background-graduation-day-cap-600nw-2585923803.jpg"
        alt="Graduation day abstract background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_20%,rgba(37,99,235,0.25),transparent),radial-gradient(800px_300px_at_90%_80%,rgba(245,158,11,0.20),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-5 text-white backdrop-blur-sm">
            <Sparkles size={16} className="text-amber-300" />
            <span className="text-xs font-semibold">Admissions Open • 4-Year B.Tech Program</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight text-white drop-shadow-md">
            B.Tech AI/CS: Graduate with 18 Months of Paid Industrial Experience
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
            A rigorous, practice-led program designed by IIIT-H alumni. Graduate with a portfolio, references, and confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={scrollToApply} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg transition font-semibold">
              Start Application <ArrowRight size={18} />
            </button>
            <a href="#program" onClick={(e)=>{e.preventDefault(); document.getElementById('program')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-amber-400 text-amber-300 hover:bg-amber-400/10 transition font-semibold">
              Explore Program
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { label: '18 Months Industrial Experience', icon: Briefcase, accent: 'from-blue-500/30 to-blue-400/20 border-blue-300/30' },
              { label: 'Mentor with Industry Leaders', icon: UserCheck, accent: 'from-emerald-500/30 to-emerald-400/20 border-emerald-300/30' },
              { label: 'Modern Labs (AI • Cloud • Systems)', icon: Cpu, accent: 'from-amber-500/30 to-amber-400/20 border-amber-300/30' },
              { label: 'Graduate with Portfolio & References', icon: BadgeCheck, accent: 'from-purple-500/30 to-purple-400/20 border-purple-300/30' },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-white backdrop-blur-md bg-gradient-to-br ${item.accent}`}>
                {React.createElement(item.icon, { size: 18 })}
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* subtle bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 via-emerald-500/10 to-amber-500/10 border border-blue-600/20 rounded-full px-3 py-1 mb-4">
      <span className="text-xs font-bold tracking-wide text-blue-700 dark:text-blue-400">{children}</span>
    </div>
  )
}

function Program() {
  const rows = [
    {
      icon: Layers,
      title: 'Core Computer Science, Mastered',
      desc: 'Data structures, algorithms, OS, networks and systems taught by engineers building at scale.',
      accent: 'from-blue-600 to-blue-400'
    },
    {
      icon: Star,
      title: 'Build 12+ Portfolio Projects',
      desc: 'Every semester ships capstone work with real users and rigorous reviews from mentors.',
      accent: 'from-amber-500 to-amber-300'
    },
    {
      icon: Cpu,
      title: 'Career Tracks',
      desc: 'Specialize in AI/ML, Full-Stack, Cloud & DevOps, or Security with dedicated labs.',
      accent: 'from-emerald-500 to-emerald-300'
    },
    {
      icon: Cloud,
      title: 'Internships from Year 2',
      desc: 'Leverage our partner network to land high-impact internships early.',
      accent: 'from-purple-600 to-purple-400'
    }
  ]
  return (
    <section id="program" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow>Program Details</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">A 4-Year B.Tech for Builders</h2>
          <p className="mt-3 text-gray-700 text-lg max-w-2xl mx-auto">Balanced foundations + specialization. Learn by building, with leaders from top tech companies.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {rows.map((r, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-white to-gray-50">
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${r.accent}`} />
              <div className="grid md:grid-cols-12 gap-6 p-6 sm:p-8">
                <div className="md:col-span-1 flex items-start justify-center md:justify-start">
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${r.accent} text-white grid place-items-center shadow`}>{React.createElement(r.icon, { size: 22 })}</div>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-bold text-gray-900 text-lg">{r.title}</h3>
                  <p className="mt-2 text-gray-700">{r.desc}</p>
                </div>
                <div className="md:col-span-4 flex items-center">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold">
                    <CheckCircle2 size={18} /> Outcome-focused
                  </div>
                </div>
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
    <section id="faculty" className="relative py-20 bg-gradient-to-b from-black to-slate-900 text-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(37,99,235,0.25),transparent),radial-gradient(600px_200px_at_80%_60%,rgba(245,158,11,0.2),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow>Faculty & Mentors</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Learn from Engineers at Top Tech</h2>
          <p className="mt-3 text-gray-300 text-lg max-w-2xl mx-auto">Small-group mentorship, code reviews, and career guidance from people shipping global-scale products.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-600/20 via-transparent to-amber-500/20" />
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-blue-600 to-amber-500" />
                <div>
                  <p className="font-bold text-white">{m.name}</p>
                  <p className="text-sm text-gray-300">{m.company}</p>
                </div>
              </div>
              <p className="relative mt-4 text-sm text-gray-200">{m.focus}</p>
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
        <div className="text-center">
          <SectionEyebrow>Admission Process</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Simple, Supportive, and Transparent</h2>
          <p className="mt-3 text-gray-700 text-lg max-w-2xl mx-auto">We evaluate intent, curiosity, and grit — not just test scores.</p>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-emerald-500 to-amber-500 rounded-full" />
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <li key={i} className="relative grid sm:grid-cols-12 items-start gap-6">
                <div className="sm:col-span-5 sm:text-right">
                  <h4 className="font-bold text-gray-900">{s.title}</h4>
                  <p className="text-sm text-gray-700 mt-1">{s.desc}</p>
                </div>
                <div className="sm:col-span-2 flex items-center justify-center">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-black text-white grid place-items-center font-extrabold border-4 border-white shadow-xl">{i+1}</div>
                  </div>
                </div>
                <div className="sm:col-span-5">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-800">What we look for: curiosity, problem-solving, and consistency.</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
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
    <section id="dates" className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow>Key Dates</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Plan Ahead</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((d, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_#111] hover:shadow-[12px_12px_0_#111] transition">
              <div className="flex items-center gap-2 text-blue-700 font-semibold"><Calendar size={18} /> {d.label}</div>
              <p className="mt-2 text-gray-900 font-black text-xl">{d.date}</p>
              <div className="absolute -top-8 -right-8 h-24 w-24 rotate-12 bg-gradient-to-br from-amber-500 to-blue-600 opacity-20" />
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
    <section id="apply" className="relative py-20 bg-gradient-to-br from-black via-slate-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(245,158,11,0.25),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow>Apply</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Start Your Application</h2>
          <p className="mt-3 text-gray-300 text-lg max-w-2xl mx-auto">This quick form records your interest. Our team will reach out with next steps and a detailed application link.</p>
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="p-6 md:p-8 md:col-span-3">
              {!submitted ? (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold">Full Name</label>
                    <input required type="text" className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Alex Johnson" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold">Email</label>
                    <input required type="email" className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="alex@email.com" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold">Phone</label>
                      <input required type="tel" className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold">Current Class</label>
                      <select required className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select</option>
                        <option>Class 11</option>
                        <option>Class 12</option>
                        <option>Gap Year</option>
                        <option>Parent</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold">Intended Track</label>
                    <select required className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>AI/ML</option>
                      <option>Full-Stack</option>
                      <option>Cloud & DevOps</option>
                      <option>Security</option>
                      <option>Undecided</option>
                    </select>
                  </div>
                  <button type="submit" disabled={loading} className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg transition font-semibold">
                    {loading ? 'Submitting…' : 'Submit Interest'}
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-gray-300">We’ll never share your information. By submitting, you agree to be contacted about admissions.</p>
                </form>
              ) : (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">
                    <CheckCircle2 />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-white">Thank you for applying!</h4>
                  <p className="mt-2 text-gray-300">Our admissions team will contact you shortly with next steps.</p>
                </div>
              )}
            </div>
            <div className="p-6 md:p-8 md:col-span-2 bg-gradient-to-br from-blue-700 to-black/80 text-white border-l border-white/10">
              <h4 className="text-xl font-bold">Why this B.Tech stands out</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-400" size={18}/> Curriculum co-designed with top engineers</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-400" size={18}/> Paid internships and real-world capstones</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-400" size={18}/> Career coaching and mock interviews</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-400" size={18}/> Modern campus with 24/7 lab access</li>
              </ul>
              <div className="mt-8 space-y-2 text-sm opacity-95">
                <div className="flex items-center gap-2"><Mail size={16} className="text-amber-400"/> admissions@novatech.edu</div>
                <div className="flex items-center gap-2"><Phone size={16} className="text-amber-400"/> +91 98765 43210</div>
                <div className="flex items-center gap-2"><MapPin size={16} className="text-amber-400"/> Bengaluru, India</div>
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
    <footer className="relative py-10 bg-black text-gray-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_50%)]" />
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
