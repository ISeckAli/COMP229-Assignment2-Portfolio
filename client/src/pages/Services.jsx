import pyquestImage from '../assets/pyquest.png'
import fraudImage from '../assets/fraud-detection.png'
import miniRedisImage from '../assets/miniredis.png'

// Real project examples used to visually support the services offered.
const serviceVisuals = [
  {
    image: pyquestImage,
    alt: 'PyQuest full-stack Python learning platform',
    label: 'FULL-STACK + AI',
    title: 'Application Engineering',
    description:
      'A deployed full-stack learning platform combining application architecture, browser-based development tools, databases, testing, and AI integration.',
  },
  {
    image: fraudImage,
    alt: 'Fraud Detection machine learning application',
    label: 'MACHINE LEARNING',
    title: 'Intelligent Systems',
    description:
      'An end-to-end machine learning system covering data analysis, model development, explainability, API integration, testing, and deployment.',
  },
  {
    image: miniRedisImage,
    alt: 'MiniRedis Java backend system',
    label: 'BACKEND + SYSTEMS',
    title: 'Systems Engineering',
    description:
      'A Java client-server system demonstrating networking, concurrency, caching, persistence, automated testing, and performance benchmarking.',
  },
]

// Service data used to generate each engineering capability card.
const services = [
  {
    number: '01',
    title: 'Software Engineering',
    category: 'SYSTEM DESIGN • DEVELOPMENT • QUALITY',
    description:
      'Designing and building structured software systems with attention to requirements, architecture, maintainability, testing, and long-term reliability.',
    capabilities: [
      'Software architecture & system design',
      'Object-oriented development',
      'Requirements engineering',
      'API & component design',
      'Testing & quality assurance',
      'Git & version control',
      'CI workflows',
      'Technical documentation',
    ],
    technologies: [
      'Python',
      'Java',
      'JavaScript',
      'C#',
      'Git',
      'GitHub Actions',
      'UML',
      'REST APIs',
    ],
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    category: 'FRONT END • BACK END • DEPLOYMENT',
    description:
      'Developing complete web applications from responsive user interfaces through server-side logic, databases, APIs, security, and deployment.',
    capabilities: [
      'Responsive user interfaces',
      'Front-end application development',
      'Server-side application logic',
      'Authentication & authorization',
      'Database integration',
      'REST API development',
      'Application security',
      'Cloud deployment',
    ],
    technologies: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'Flask',
      'PostgreSQL',
      'SQLAlchemy',
      'Render',
    ],
  },
  {
    number: '03',
    title: 'Backend & Systems Development',
    category: 'APIs • DATA • CONCURRENCY • SERVICES',
    description:
      'Building backend services and data-driven systems where performance, reliability, networking, persistence, and clean application boundaries matter.',
    capabilities: [
      'Backend service development',
      'REST API implementation',
      'Relational database design',
      'SQL & data access',
      'Client-server architecture',
      'TCP networking',
      'Concurrency & thread safety',
      'Persistence & recovery',
    ],
    technologies: [
      'Java',
      'Python',
      'Flask',
      'SQL',
      'PostgreSQL',
      'TCP',
      'JUnit',
      'Maven',
    ],
  },
  {
    number: '04',
    title: 'AI & Machine Learning Engineering',
    category: 'MODELS • INTELLIGENT FEATURES • INTEGRATION',
    description:
      'Developing practical machine learning systems and integrating AI capabilities into software products with an emphasis on evaluation, explainability, safety, and usable application experiences.',
    capabilities: [
      'Machine learning pipelines',
      'Classification systems',
      'Model evaluation & validation',
      'Threshold optimization',
      'Feature analysis',
      'Model explainability',
      'AI API integration',
      'AI-assisted application features',
    ],
    technologies: [
      'scikit-learn',
      'XGBoost',
      'Pandas',
      'SHAP',
      'Jupyter',
      'Gemini API',
      'Flask',
      'Python',
    ],
  },
]

function Services() {
  return (
    <main>
      <section className="services-section">
        <div className="services-container">
          {/* Page introduction and overall engineering focus. */}
          <div className="services-heading">
            <p className="services-label">
              ENGINEERING CAPABILITIES
            </p>

            <h1>Services</h1>

            <p>
              Software development across application architecture,
              full-stack systems, backend engineering, and practical
              artificial intelligence.
            </p>
          </div>

          {/* Overview connecting software engineering with AI development. */}
          <section className="services-intro-panel">
            <div>
              <p className="services-intro-label">
                SOFTWARE ENGINEERING
              </p>

              <h2>
                From system design to
                <span> intelligent software.</span>
              </h2>
            </div>

            <p>
              I work across the software stack—from designing application
              structure and backend services to building user interfaces,
              integrating data, developing machine learning systems, and
              connecting AI capabilities to real applications.
            </p>
          </section>

          {/* Real project screenshots demonstrate the services in practice. */}
          <section
            className="services-visual-grid"
            aria-label="Examples of engineering work"
          >
            {serviceVisuals.map((visual) => (
              <article
                className="service-visual-card"
                key={visual.title}
              >
                <img
                  src={visual.image}
                  alt={visual.alt}
                  className="service-visual-image"
                />

                <div className="service-visual-content">
                  <span className="service-visual-label">
                    {visual.label}
                  </span>

                  <strong>{visual.title}</strong>

                  <p>{visual.description}</p>
                </div>
              </article>
            ))}
          </section>

          {/* Generate each service card from the shared services data. */}
          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-showcase-card"
                key={service.title}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-category">
                    {service.category}
                  </span>
                </div>

                <h2>{service.title}</h2>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-divider"></div>

                {/* Practical development capabilities for this service area. */}
                <div className="service-capabilities">
                  <p>CAPABILITIES</p>

                  <div className="service-capability-grid">
                    {service.capabilities.map((capability) => (
                      <div
                        className="service-capability"
                        key={capability}
                      >
                        <span className="capability-marker">
                          +
                        </span>

                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies commonly used within the service area. */}
                <div className="service-stack">
                  <p>TECHNOLOGY</p>

                  <div>
                    {service.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* High-level workflow from initial design through deployment. */}
          <section className="engineering-spectrum">
            <div className="engineering-spectrum-heading">
              <p className="services-label">
                ENGINEERING SPECTRUM
              </p>

              <h2>
                Building across the complete application stack.
              </h2>
            </div>

            <div className="engineering-flow">
              <div className="engineering-stage">
                <span>01</span>
                <strong>Design</strong>

                <p>
                  Requirements, architecture, data models, and system structure.
                </p>
              </div>

              <div className="engineering-flow-line"></div>

              <div className="engineering-stage">
                <span>02</span>
                <strong>Build</strong>

                <p>
                  Front end, backend, APIs, databases, and application logic.
                </p>
              </div>

              <div className="engineering-flow-line"></div>

              <div className="engineering-stage">
                <span>03</span>
                <strong>Intelligence</strong>

                <p>
                  Machine learning models and AI-powered application features.
                </p>
              </div>

              <div className="engineering-flow-line"></div>

              <div className="engineering-stage">
                <span>04</span>
                <strong>Validate</strong>

                <p>
                  Testing, evaluation, security, CI, and technical documentation.
                </p>
              </div>

              <div className="engineering-flow-line"></div>

              <div className="engineering-stage">
                <span>05</span>
                <strong>Deploy</strong>

                <p>
                  Production-ready services, APIs, applications, and cloud deployment.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Services