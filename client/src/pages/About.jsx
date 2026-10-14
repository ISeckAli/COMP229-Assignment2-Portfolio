import profileImage from '../assets/profile.jpeg'

function About() {
  return (
    <main>
      <section className="about-section">
        <div className="about-grid">
          {/* Profile image and professional identity. */}
          <div className="about-profile">
            <img
              src={profileImage}
              alt="Ivan Seck Ali"
              className="profile-placeholder"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 35%',
              }}
            />

            <div className="profile-details">
              <p className="about-label">ABOUT ME</p>

              <h1>Ivan Seck Ali</h1>

              <p className="about-role">
                Software Engineering • Full Stack • AI & Machine Learning
              </p>
            </div>
          </div>

          {/* Background, technical interests, and professional direction. */}
          <div className="about-content">
            <h2>
              Building practical software with a focus on intelligent systems.
            </h2>

            <p>
              I am a Software Engineering Technologies – Artificial Intelligence
              student at Centennial College with hands-on experience in software
              development, full-stack applications, machine learning, and AI
              integration.
            </p>

            <p>
              My background combines technical development with real-world
              implementation experience. I enjoy taking a problem, understanding
              the requirements, designing a practical solution, and turning that
              solution into working software.
            </p>

            <p>
              I am continuing to grow through academic, professional, and
              independent projects while building the skills needed for software
              engineering, full-stack development, and AI-focused roles.
            </p>

            {/* Key areas of technical development and specialization. */}
            <div className="about-highlights">
              <div className="highlight-item">
                <span>01</span>

                <div>
                  <strong>Software Engineering</strong>

                  <p>
                    Designing and developing structured, maintainable software
                    solutions using sound engineering practices.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <span>02</span>

                <div>
                  <strong>Full-Stack Development</strong>

                  <p>
                    Building applications across front-end, back-end, APIs, and
                    database technologies.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <span>03</span>

                <div>
                  <strong>AI & Machine Learning</strong>

                  <p>
                    Developing and exploring intelligent systems, machine
                    learning models, and practical AI integrations.
                  </p>
                </div>
              </div>
            </div>

            {/* Opens the portfolio résumé stored in the public directory. */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              View My Résumé
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About