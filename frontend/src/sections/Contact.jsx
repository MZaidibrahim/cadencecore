const API_URL = import.meta.env.VITE_API_URL;
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { LoadingSpinner } from '../components/Loaders'

export default function Contact({ onSignIn }) {
  const { user } = useAuth()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const loadingToast = toast.loading('Sending message...')
    try {
      const response = await fetch(`${API_URL}/contact/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
            Ready to make better data-driven decisions?
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Let’s connect and explore how Vextacore can support your pricing,
            analytics, and strategic decision-making goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column – Form */}
          <div className="lg:col-span-6 bg-white rounded-xl p-8 text-slate-900 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

            <form onSubmit={onSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <input
                    required
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <input
                    required
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Work Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane.doe@company.com"
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your organisation"
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">How can we help?</label>
                <textarea
                  required
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm resize-none focus:border-brand focus:ring-1 focus:ring-brand outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-[#1B365D] px-6 py-4 text-white font-semibold hover:bg-[#152a48] transition-all disabled:opacity-70"
              >
                {loading ? <LoadingSpinner /> : 'Send Message →'}
              </button>

            </form>
          </div>

          {/* Right Column – Info */}
          <div className="lg:col-span-6 space-y-10">

          {/* Contact Info */}
<div>
  <h3 className="text-xl font-bold mb-6">Contact Information</h3>

  <div className="space-y-8">

    {/* Email */}
    <div>
      <h4 className="font-semibold">Email</h4>
      <p className="text-slate-400 text-sm mt-1">
        info@vextacore.com
      </p>
    </div>

    {/* Phone */}
    <div>
      <h4 className="font-semibold">Phone</h4>
      <p className="text-slate-400 text-sm mt-1">
        +44 7825 435457
      </p>
    </div>

    {/* Headquarters */}
    <div>
      <h4 className="font-semibold">Headquarters</h4>
      <p className="text-slate-400 text-sm mt-1">
        Suite RA01<br />
        195-197 Wood Street<br />
        London<br />
        E17 3NU<br />
        United Kingdom
      </p>
    </div>

    {/* Company Details */}
    <div>
      <h4 className="font-semibold">Company Details</h4>
      <p className="text-slate-400 text-sm mt-1">
        Vextacore Ltd<br />
        Registered in England & Wales<br />
      </p>
    </div>

  </div>
</div>


            {/* Office Hours */}
            <div className="rounded-xl bg-slate-800/50 p-6 border border-slate-700">
              <h3 className="font-bold text-white mb-4">Office Hours (GMT)</h3>
              <div className="flex flex-col space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-700/50 pb-2">
                  <span className="text-slate-300">Monday — Friday</span>
                  <span className="font-mono text-slate-400">08:30 — 18:00</span>
                </div>
                <div className="flex justify-between border-b border-slate-700/50 pb-2">
                  <span className="text-slate-300">Saturday</span>
                  <span className="font-mono text-slate-400">10:00 — 14:00</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-300">Sunday</span>
                  <span className="text-slate-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Consultant Button */}
            <div>
              <button
                onClick={() =>
                  user
                    ? toast('Consultant chat feature coming soon!', { icon: '💬' })
                    : onSignIn()
                }
                className="w-full rounded-lg bg-sky-500 px-6 py-4 text-sm font-semibold text-white hover:bg-sky-400 transition-all"
              >
                {user ? 'Speak to a Consultant' : 'Sign In to Speak to a Consultant'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
