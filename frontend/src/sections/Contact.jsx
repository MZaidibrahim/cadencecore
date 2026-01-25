const API_URL = import.meta.env.VITE_API_URL;
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { LoadingSpinner } from '../components/Loaders'

export default function Contact({ onSignIn }) {
  const { user } = useAuth()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const loadingToast = toast.loading('Sending message...')
    try {
      const response = await fetch(`${API_URL}/contact/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      toast.dismiss(loadingToast)
      toast.success('Message sent! We will be in touch shortly.')
      setForm({ firstName: '', lastName: '', email: '', company: '', message: '' })
    } catch (error) {
      toast.dismiss(loadingToast)
      toast.error(error.message || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-brand to-slate-900 py-20 text-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">Get in touch</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Ready to transform your institution?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Let's connect and explore how CCC can support your financial institution's digital and operational transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-6 bg-white rounded-xl p-8 text-slate-900 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input
                    required
                    name="firstName"
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input
                    required
                    name="lastName"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="jane.doe@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                <input
                  name="company"
                  placeholder="Your organization"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help?</label>
                <textarea
                  required
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-[#1B365D] px-6 py-4 text-white font-semibold shadow-md transition-all hover:bg-[#152a48] hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <LoadingSpinner /> : (
                  <>
                    Send Message <span>&rarr;</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-6 space-y-10 pl-0 lg:pl-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-slate-400 text-sm mt-1">enquiries@cadencecore.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Headquarters</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      100 Bishopsgate<br />
                      London EC2M 1GT<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Company Details</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      Cadence Core Consultancy Ltd<br />
                      Registered in England & Wales<br />
                      No. 08844219
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <div className="space-y-4">
                <button className="w-full rounded-lg border border-slate-500 bg-transparent px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white">
                  Download Our Brochure
                </button>
                <button
                  onClick={() => user ? toast('Consultant chat feature coming soon!', { icon: '💬' }) : onSignIn()}
                  className="w-full rounded-lg bg-sky-500 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-sky-400 hover:shadow-lg"
                >
                  {user ? 'Speak to a Consultant' : 'Sign In to Speak to a Consultant'}
                </button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-xl bg-slate-800/50 p-6 border border-slate-700">
              <h3 className="font-bold text-white mb-4">Office Hours (GMT)</h3>
              <div className="flex flex-col space-y-3 text-sm">
                <div className="flex justify-between items-center border-b border-slate-700/50 pb-2">
                  <span className="text-slate-300">Monday — Friday</span>
                  <span className="font-mono text-slate-400">08:30 — 18:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700/50 pb-2">
                  <span className="text-slate-300">Saturday</span>
                  <span className="font-mono text-slate-400">10:00 — 14:00</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-300">Sunday</span>
                  <span className="text-slate-500 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
