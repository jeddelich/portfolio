import './App.css'

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContactModal from './components/ContactModal'
import Footer from './components/layout/Footer'

function App() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <Router>
      <Navbar onContactOpen={() => setContactOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </Router>
  )
}

export default App
