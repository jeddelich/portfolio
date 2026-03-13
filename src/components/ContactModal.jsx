import { useEffect } from "react"
import "./ContactModal.css"

function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = "hidden"

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose()
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    console.log("Contact form submitted:", data)
    form.reset()
    onClose()
  }

  return (
    <div
      className="contact-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <div className="contact-modal">
        <button
          className="contact-close"
          onClick={onClose}
          aria-label="Close contact form"
          type="button"
        >
          ×
        </button>

        <h2 className="contact-title" id="contact-title">Get in Touch</h2>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              autoComplete="email"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              placeholder="What's on your mind?"
              rows={5}
            />
          </div>

          <button className="contact-submit" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
