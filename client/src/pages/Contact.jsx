import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Professional contact methods displayed beside the form.
const contactMethods = [
  {
    label: 'EMAIL',
    value: 'ivan.seckali@outlook.com',
    href: 'mailto:ivan.seckali@outlook.com',
    action: 'Send Email',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/ivanseckali',
    href: 'https://www.linkedin.com/in/ivanseckali',
    action: 'View Profile',
  },
  {
    label: 'GITHUB',
    value: 'github.com/ISeckAli',
    href: 'https://github.com/ISeckAli',
    action: 'View GitHub',
  },
]

function Contact() {
  const navigate = useNavigate()

  // Store all user-entered contact form data in one state object.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  })

  // Controls the confirmation message shown after submission.
  const [submitted, setSubmitted] = useState(false)

  // Update the matching form field whenever the user enters information.
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  // Capture the form data, show confirmation, then return to Home.
  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Portfolio contact form submission:', formData)

    setSubmitted(true)

    setTimeout(() => {
      navigate('/')
    }, 1800)
  }

  return (
    <main>
      <section className="contact-section">
        <div className="contact-container">
          {/* Page heading and invitation to connect. */}
          <div className="contact-heading">
            <p className="contact-label">CONNECT</p>

            <h1>Contact</h1>

            <p>
              Interested in software engineering, full-stack development,
              backend systems, machine learning, or AI? Get in touch.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-information">
              {/* Professional introduction beside the contact form. */}
              <div className="contact-intro-card">
                <p className="contact-card-label">
                  START A CONVERSATION
                </p>

                <h2>
                  Let&apos;s build something
                  <span> meaningful.</span>
                </h2>

                <p>
                  I&apos;m interested in opportunities where I can contribute
                  across software engineering, application development,
                  backend systems, and intelligent software.
                </p>
              </div>

              {/* Render email and professional profile links from shared data. */}
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <a
                    className="contact-method"
                    href={method.href}
                    target={
                      method.label === 'EMAIL'
                        ? undefined
                        : '_blank'
                    }
                    rel={
                      method.label === 'EMAIL'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    key={method.label}
                  >
                    <div className="contact-method-number">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="contact-method-content">
                      <span>{method.label}</span>
                      <strong>{method.value}</strong>
                    </div>

                    <div className="contact-method-action">
                      {method.action}
                      <span aria-hidden="true">↗</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Technical areas relevant to professional opportunities. */}
              <div className="contact-focus">
                <p className="contact-card-label">
                  AREAS OF INTEREST
                </p>

                <div className="contact-focus-tags">
                  <span>Software Engineering</span>
                  <span>Full-Stack Development</span>
                  <span>Backend Engineering</span>
                  <span>Machine Learning</span>
                  <span>Artificial Intelligence</span>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <div className="contact-form-header">
                <div>
                  <p className="contact-card-label">
                    MESSAGE
                  </p>

                  <h2>Send a message</h2>
                </div>

                <div className="contact-form-status">
                  <span></span>
                  AVAILABLE
                </div>
              </div>

              {/* Replace the form with a confirmation message after submission. */}
              {submitted ? (
                <div
                  className="contact-success"
                  role="status"
                  aria-live="polite"
                >
                  <div className="contact-success-icon">
                    ✓
                  </div>

                  <h3>Message received.</h3>

                  <p>
                    Thanks for reaching out. Returning you to the homepage...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Basic visitor identification and contact information. */}
                  <div className="contact-form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>

                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        autoComplete="given-name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>

                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        autoComplete="family-name"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="form-group">
                      <label htmlFor="contactNumber">
                        Contact Number
                      </label>

                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        autoComplete="tel"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  {/* Main message field for the visitor's inquiry. */}
                  <div className="form-group">
                    <label htmlFor="message">Message</label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, project, or idea..."
                      rows="7"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact-submit-button"
                  >
                    Send Message
                    <span aria-hidden="true">→</span>
                  </button>

                  <p className="contact-form-note">
                    All fields are required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact