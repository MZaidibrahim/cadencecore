import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import WhoWeHelp from './sections/WhoWeHelp'
import Approach from './sections/Approach'
import Insights from './sections/Insights'
import Contact from './sections/Contact'
import SignInModal from './components/SignInModal'
import { AuthProvider, useAuth } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'
import { FullScreenLoader } from './components/Loaders'

function AppContent() {
  const [signOpen, setSignOpen] = useState(false)
  const { loading } = useAuth()

  if (loading) return <FullScreenLoader />

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onSignIn={() => setSignOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhoWeHelp />
        <Approach />
        <Insights />
        <Contact onSignIn={() => setSignOpen(true)} />
      </main>
      <Footer />
      <SignInModal open={signOpen} onClose={() => setSignOpen(false)} />
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}


