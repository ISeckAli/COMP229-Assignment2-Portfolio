import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Services from './pages/Services'
import Contact from './pages/Contact'

/*
 * App is the main layout component for the portfolio.
 *
 * React Router is used to display a different page component depending
 * on the current URL while keeping the application as a Single Page
 * Application (SPA). The BrowserRouter itself is configured in main.jsx,
 * while this component is responsible for defining the available routes.
 *
 * The Navbar and Footer are placed outside of <Routes> because they are
 * shared interface elements that should remain visible on every page.
 */
function App() {
  return (
    <>
      {/*
       * Global navigation
       *
       * The Navbar provides access to all six required portfolio views:
       * Home, About, Projects, Education, Services, and Contact.
       * Because it is outside the routing section, users can navigate
       * between pages regardless of which route is currently active.
       */}
      <Navbar />

      {/*
       * Application routes
       *
       * Each <Route> connects a URL path to the React component that
       * represents that portfolio page. React Router updates only the
       * page content instead of performing a complete browser reload.
       *
       * Route structure:
       * /           -> Home
       * /about      -> About
       * /projects   -> Projects
       * /education  -> Education
       * /services   -> Services
       * /contact    -> Contact
       */}
      <Routes>
        {/* Main landing page and introduction to the portfolio */}
        <Route path="/" element={<Home />} />

        {/* Personal background, profile information, and résumé */}
        <Route path="/about" element={<About />} />

        {/* Selected software engineering and AI project work */}
        <Route path="/projects" element={<Projects />} />

        {/* Academic program, coursework, and technical development */}
        <Route path="/education" element={<Education />} />

        {/* Software engineering and development capabilities */}
        <Route path="/services" element={<Services />} />

        {/* Professional contact information and interactive form */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/*
       * Global footer
       *
       * The Footer is shared across every route and provides a consistent
       * ending to each portfolio page.
       */}
      <Footer />
    </>
  )
}

export default App