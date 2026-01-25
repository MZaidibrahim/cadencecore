import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { LoadingSpinner } from './Loaders'

export default function SignInModal({ open, onClose }) {
  const { login, register } = useAuth()
  const [mode, setMode] = useState('signin')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) {
      setMode('signin')
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }
  }, [open])

  if (!open) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      setLoading(false)
      return
    }

    const { name, email, password } = formData
    let result

    try {
      if (mode === 'signup') {
        result = await register(name, email, password)
      } else {
        result = await login(email, password)
      }

      if (result.success) {
        toast.success(mode === 'signin' ? 'Welcome back!' : 'Account created successfully!')
        onClose()
      } else {
        toast.error(result.error || 'Authentication failed')
      }
    } catch (err) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin')
    setFormData({ name: '', email: '', password: '', confirmPassword: '' })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{mode === 'signin' ? 'Sign In' : 'Create Account'}</h3>
          <button onClick={onClose} className="text-slate-500">✕</button>
        </div>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                required
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              required
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-slate-700">Confirm Password</label>
              <input
                required
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
          )}

          <div className="flex flex-col gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-md bg-brand px-4 py-2 text-white font-medium hover:bg-brand-dark disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <LoadingSpinner /> : (mode === 'signin' ? 'Sign In' : 'Create Account')}
            </button>
            <div className="text-center text-sm">
              <span className="text-slate-600">
                {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                type="button"
                onClick={toggleMode}
                className="text-brand font-medium hover:underline"
              >
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
