import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { LoadingSpinner } from './Loaders'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'sectors', label: 'Sectors' },
  { id: 'approach', label: 'How we work' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar({ onSignIn }) {
  const [open, setOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const { user, logout } = useAuth()

  const handleClick = (id) => {
    scrollToId(id)
    setOpen(false)
  }

  const handleAuthAction = async () => {
    if (user) {
      setIsLoggingOut(true)
      await new Promise(resolve => setTimeout(resolve, 1000))

      logout()
      setIsLoggingOut(false)
      toast.success('Successfully logged out')
    } else {
      onSignIn()
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="container-wide flex items-center justify-between py-3">
        <button onClick={() => handleClick('home')} className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand text-white font-semibold">C</div>
          <div className="text-left">
            <div className="text-sm font-semibold text-brand">Cadence Core</div>
            <div className="text-xs text-slate-500">Consultancy</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-2 text-sm">
          {navItems.map((n) => (
            <button key={n.id} onClick={() => handleClick(n.id)} className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-brand transition-all duration-200">
              {n.label}
            </button>
          ))}

          {user && (
            <div className="ml-2 text-s font-semibold text-blue-900">
              Hi, {user.name}
            </div>
          )}

          <button
            disabled={isLoggingOut}
            className={`ml-3 flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md ${user ? 'bg-slate-700 hover:bg-slate-800' : 'bg-brand hover:bg-brand-dark'} disabled:opacity-70 disabled:cursor-not-allowed`}
            onClick={handleAuthAction}
          >
            {isLoggingOut ? <LoadingSpinner className="h-5 w-5" /> : (user ? 'Logout' : 'Sign in')}
          </button>

        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={handleAuthAction} disabled={isLoggingOut} className="flex w-20 items-center justify-center px-3 py-2 border rounded-full text-sm disabled:opacity-70">
            {isLoggingOut ? <LoadingSpinner className="h-4 w-4 text-slate-700" /> : (user ? 'Logout' : 'Sign in')}
          </button>
          <button aria-label="menu" onClick={() => setOpen(!open)} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d={open ? 'M6 18L18 6M6 6l12 12' : 'M3 6h18M3 12h18M3 18h18'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="container-wide flex flex-col py-3">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => handleClick(n.id)} className="py-2 text-left text-slate-700">
                {n.label}
              </button>
            ))}
            <div className="mt-2 flex gap-3">
              <button onClick={handleAuthAction} className="rounded-full border px-4 py-2">
                {user ? 'Logout' : 'Sign in'}
              </button>
              <button className="rounded-full bg-brand px-4 py-2 text-white">Let's talk</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
