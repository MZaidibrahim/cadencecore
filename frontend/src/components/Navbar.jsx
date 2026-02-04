import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { LoadingSpinner } from './Loaders'

const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'insights', label: 'Insights' },
  { id: 'approach', label: 'About Us' },
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
      logout()
      setIsLoggingOut(false)
      toast.success('Successfully logged out')
    } else {
      onSignIn()
    }
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center p-6 lg:px-8"
      >

        {/* Logo */}
        <div className="flex lg:flex-1">
  <button
    type="button"
    onClick={() => handleClick('home')}
    className="-m-1.5 p-1.5 flex items-center gap-2 text-white"
  >
    {/* Icon */}
    <div className="h-8 w-8 rounded-md bg-white/10 flex items-center justify-center font-semibold">
      V
    </div>

    {/* Brand name */}
    <span className="text-sm font-semibold tracking-wide">
      Vextacore
    </span>
  </button>
</div>



        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className="text-sm font-semibold text-white/80 hover:text-white transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
<div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
  {user && (
    <span className="text-sm font-medium text-white/80">
      Hi, {user.name}
    </span>
  )}

  <button
    type="button"
    disabled={isLoggingOut}
    onClick={handleAuthAction}
    className="text-sm font-semibold text-white hover:text-indigo-400 transition flex items-center gap-1"
  >
    {isLoggingOut ? (
      <LoadingSpinner className="h-4 w-4" />
    ) : user ? (
      <>
        Logout <span aria-hidden="true">→</span>
      </>
    ) : (
      <>
        Log in <span aria-hidden="true">→</span>
      </>
    )}
  </button>
</div>


        {/* Mobile menu button */}
        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d={
                  open
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M3 6h18M3 12h18M3 18h18'
                }
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gray-900 p-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-m-1.5 p-1.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              ✕
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="py-6">
                <button
                  type="button"
                  onClick={handleAuthAction}
                  disabled={isLoggingOut}
                  className="block w-full rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5"
                >
                  {isLoggingOut ? (
                    <LoadingSpinner className="h-4 w-4" />
                  ) : user ? (
                    'Logout'
                  ) : (
                    'Log in'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
