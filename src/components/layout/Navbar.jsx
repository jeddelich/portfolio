import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={closeMenu}>
          JD
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          <Link className="nav-link" style={{ "--stagger": 0 }} to="/" onClick={closeMenu}>Home</Link>
          <Link className="nav-link" style={{ "--stagger": 1 }} to="/projects" onClick={closeMenu}>Projects</Link>
          <Link className="nav-link" style={{ "--stagger": 2 }} to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar