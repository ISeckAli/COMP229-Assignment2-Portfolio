import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="home-section">
        <div className="home-content">
          {/* Main introduction and primary calls to action. */}
          <div className="hero-copy">
            <p className="hero-label">
              WELCOME TO MY PORTFOLIO • SOFTWARE ENGINEERING • FULL STACK • AI
            </p>

            <h1>
              Building software
              <span> with intelligence.</span>
            </h1>

            <p className="hero-description">
              I am a Software Engineering Technologies – Artificial Intelligence
              student focused on building reliable software, full-stack
              applications, and practical machine learning and AI solutions.
            </p>

            {/* Mission statement defines the purpose behind my engineering work. */}
            <div className="mission-statement">
              <span>MISSION</span>

              <p>
                My mission is to build reliable, maintainable software that
                combines strong engineering practices with practical AI to solve
                real problems and create useful products.
              </p>
            </div>

            <div className="hero-actions">
              <Link to="/projects" className="primary-button">
                View My Projects
              </Link>

              <Link to="/about" className="secondary-button">
                About Me
              </Link>
            </div>
          </div>

          {/* Technical summary panel highlighting core engineering focus areas. */}
          <div className="tech-panel">
            <div className="tech-panel-header">
              <div className="window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="panel-title">portfolio.sys</span>
            </div>

            <div className="tech-panel-body">
              <p>
                <span className="terminal-symbol">&gt;</span>
                <span className="terminal-command"> profile</span>
              </p>

              <div className="system-row">
                <span>Primary Focus</span>
                <strong>Software Engineering</strong>
              </div>

              <div className="system-row">
                <span>Development</span>
                <strong>Full-Stack Applications</strong>
              </div>

              <div className="system-row">
                <span>Specialization</span>
                <strong>AI & Machine Learning</strong>
              </div>

              <div className="system-row">
                <span>Current Mode</span>

                <strong className="status-active">
                  <span className="status-dot"></span>
                  Building
                </strong>
              </div>

              <div className="circuit-divider">
                <span></span>
              </div>

              <p className="terminal-line">
                <span className="terminal-symbol">&gt;</span>
                Designing systems. Building solutions._
              </p>
            </div>
          </div>
        </div>

        {/* Visual cue encouraging users to continue exploring the site. */}
        <div className="scroll-indicator">
          <span>EXPLORE</span>
          <div></div>
        </div>
      </section>
    </main>
  )
}

export default Home