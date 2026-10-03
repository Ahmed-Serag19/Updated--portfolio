import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Reviews from './components/Reviews'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CvViewer from './components/CvViewer'

export default function App() {
  // The page renders after the browser's own hash scroll, so honour #section links here.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <Experience />
        <Skills />
        <Reviews />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <CvViewer />
    </>
  )
}
