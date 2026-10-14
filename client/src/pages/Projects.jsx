import { useEffect, useState } from 'react'

import pyquestImage from '../assets/pyquest.png'
import fraudImage from '../assets/fraud-detection.png'
import miniRedisImage from '../assets/miniredis.png'

// Central project data used by both the portfolio cards and detailed modal views.
const projects = [
  {
    id: 'pyquest',
    number: '01',
    title: 'PyQuest',
    type: 'FULL-STACK • AI • EDUCATION',
    image: pyquestImage,
    imageAlt: 'PyQuest Python learning platform live application',
    summary:
      'A gamified Python learning platform with browser-based code execution, adaptive learning, progress analytics, and an AI Coach designed to teach without giving away answers.',

    role:
      'Full-Stack Developer, Software Designer & AI Integration Developer',
    outcome:
      'Built a complete learning platform from the project requirements through deployment, including learner, instructor, and administrator experiences, AI-assisted coaching, analytics, security controls, testing, and CI.',

    technologies: [
      'Python 3.14',
      'Flask 3.1',
      'PostgreSQL',
      'SQLAlchemy',
      'JavaScript',
      'Monaco Editor',
      'Pyodide',
      'Gemini',
      'Chart.js',
    ],

    metrics: [
      {
        value: '45',
        label: 'Coding Challenges',
      },
      {
        value: '486',
        label: 'Automated Tests',
      },
      {
        value: '20/20',
        label: 'AI Leak Checks',
      },
    ],

    links: [
      {
        label: 'Live Demo',
        url: 'https://pyquest-pa8h.onrender.com/',
        primary: true,
      },
      {
        label: 'GitHub',
        url: 'https://github.com/ISeckAli/pyquest',
      },
    ],

    details: [
      {
        title: 'Architecture',
        items: [
          'Flask blueprints handle HTTP requests while service modules contain the business rules for grading, XP, missions, badges, recommendations, administration, and AI Coach behaviour.',
          'SQLAlchemy models define the data layer and use the Party pattern to support learner, instructor, and administrator roles.',
          'SQLite is used locally while PostgreSQL through Neon supports the deployed production environment.',
        ],
      },
      {
        title: 'Learning Experience',
        items: [
          'Monaco Editor provides a full coding environment directly in the browser.',
          'Pyodide runs learner Python locally through WebAssembly inside a Web Worker, keeping untrusted learner code off the server.',
          'Hidden tests, adaptive recommendations, XP, levels, missions, streaks, badges, leaderboards, and progress analytics create a complete learning workflow.',
        ],
      },
      {
        title: 'AI Engineering',
        items: [
          'Google Gemini powers the AI Coach behind a provider-agnostic interface.',
          'The Coach provides progressive hints, failure explanations, chat support, and post-solution code review while test results—not AI—determine whether code is correct.',
          'Prompt-injection protections, response leak checks, and a 20-attempt release gate are designed to prevent the Coach from revealing complete solutions.',
          'Built-in fallback content keeps Coach functionality available if the AI provider is unavailable or rate-limited.',
        ],
      },
      {
        title: 'Security & Accessibility',
        items: [
          'Security controls include scrypt password hashing, login throttling, account lockout, CSRF protection, protected session cookies, rate limiting, server-side role checks, CSP, and HTTPS enforcement.',
          'Accessibility features include keyboard navigation, visible focus states, chart text alternatives, screen-reader announcements, and reduced-motion support.',
        ],
      },
      {
        title: 'Testing & Deployment',
        items: [
          '486 pytest tests are executed through GitHub Actions on every push.',
          'Render hosts the Flask application while Neon provides production PostgreSQL.',
          'Alembic migrations, seeded challenges, and Gunicorn are integrated into the deployment workflow.',
        ],
      },
    ],
  },

  {
    id: 'fraud-detection',
    number: '02',
    title: 'Fraud Detection Classifier',
    type: 'MACHINE LEARNING • API • EXPLAINABILITY',
    image: fraudImage,
    imageAlt:
      'Fraud Detection Classifier live transaction prediction interface',

    summary:
      'An end-to-end machine learning system for detecting fraudulent financial transactions, from exploratory analysis and model evaluation through explainability, API deployment, and an interactive live demo.',

    role:
      'Machine Learning Developer & API Developer',

    outcome:
      'Built, evaluated, debugged, and deployed a fraud-detection pipeline that prioritizes meaningful fraud-class metrics instead of misleading overall accuracy and exposes predictions through a validated Flask API.',

    technologies: [
      'Python',
      'scikit-learn',
      'XGBoost',
      'Pandas',
      'SHAP',
      'Flask',
      'pytest',
      'GitHub Actions',
      'Render',
    ],

    metrics: [
      {
        value: '20K',
        label: 'Transactions',
      },
      {
        value: '68%',
        label: 'Fraud Recall',
      },
      {
        value: '0.85',
        label: 'Decision Threshold',
      },
    ],

    links: [
      {
        label: 'Live Demo',
        url: 'https://fraud-detection-demo-u8l5.onrender.com/',
        primary: true,
      },
      {
        label: 'API',
        url: 'https://fraud-detection-api-j3q4.onrender.com/',
      },
      {
        label: 'Model Card',
        url: 'https://github.com/ISeckAli/Fraud-detection/blob/main/MODEL_CARD.md',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/ISeckAli/Fraud-detection',
      },
    ],

    details: [
      {
        title: 'Problem & Dataset',
        items: [
          'The dataset contains 20,000 transactions with only 1.69% fraud, making the project an imbalanced-classification problem where normal accuracy is misleading.',
          'Named features such as merchant risk score, velocity score, CVV retry count, and IP-country mismatch make meaningful analysis and explainability possible.',
        ],
      },
      {
        title: 'Model Evaluation',
        items: [
          'Compared class-weighted Logistic Regression, Random Forest, and XGBoost using precision, recall, F1, confusion matrices, and precision-recall analysis.',
          'The final class-weighted Logistic Regression achieved 0.25 precision, 0.68 recall, and 0.37 F1 on the fraud class.',
          'The simpler model outperformed the ensemble alternatives on this dataset and was retained based on measured results rather than model complexity.',
        ],
      },
      {
        title: 'Threshold Engineering',
        items: [
          'The final decision threshold was tuned to 0.85 rather than accepting the default 0.5 probability cutoff.',
          'The threshold reflects the asymmetric cost of fraud detection, where missing fraudulent activity can be more damaging than temporarily flagging a legitimate transaction for additional review.',
        ],
      },
      {
        title: 'Explainability & Debugging',
        items: [
          'SHAP analysis identifies the features driving model predictions and surfaces signals such as merchant risk, transaction velocity, and CVV retry behaviour.',
          'A misleading feature-importance result exposed a data-quality problem caused by standard SMOTE interpolating one-hot encoded categorical features.',
          'The issue was investigated through SMOTENC before the final pipeline moved to class weighting, removing synthetic-data distortion while producing the strongest measured result.',
        ],
      },
      {
        title: 'API & Deployment',
        items: [
          'A Flask POST /predict endpoint accepts transaction data and returns fraud probability, classification, and the threshold used.',
          'Input validation returns actionable errors for malformed requests and the deployed API is rate-limited to 10 requests per minute.',
          'Automated API tests run with GitHub Actions, while the interactive demo and prediction API are deployed separately on Render.',
        ],
      },
    ],
  },

  {
    id: 'miniredis',
    number: '03',
    title: 'MiniRedis',
    type: 'JAVA • BACKEND • SYSTEMS ENGINEERING',
    image: miniRedisImage,
    imageAlt:
      'MiniRedis Java TCP server and command-line client running side by side',

    summary:
      'A self-built Redis-style in-memory key-value store implementing fast storage, LRU eviction, TTL expiration, concurrent TCP networking, persistence, testing, and benchmarking from first principles.',

    role:
      'Java Backend & Systems Developer',

    outcome:
      'Built a complete thread-safe client-server key-value store with hand-built LRU behaviour, expiration, write-ahead persistence, concurrency testing, CI, and statistically sound performance benchmarking.',

    technologies: [
      'Java 21',
      'Maven',
      'JUnit 5',
      'TCP Sockets',
      'Concurrency',
      'JMH',
      'GitHub Actions',
    ],

    metrics: [
      {
        value: '43',
        label: 'Automated Tests',
      },
      {
        value: '50',
        label: 'Concurrent Clients',
      },
      {
        value: '42.6M',
        label: 'GET Ops / Sec',
      },
    ],

    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/ISeckAli/miniredis',
        primary: true,
      },
      {
        label: 'Benchmarks',
        url: 'https://github.com/ISeckAli/miniredis/blob/main/BENCHMARK_RESULTS.md',
      },
    ],

    details: [
      {
        title: 'Architecture',
        items: [
          'Store uses a HashMap for constant-time key lookup combined with a hand-built doubly linked list for LRU access ordering.',
          'CommandProcessor forms the boundary between the Java store API and plain-text commands such as SET, GET, and DEL.',
          'Server accepts TCP clients and delegates each connection to a fixed thread pool while the standalone Client provides an interactive CLI.',
          'WriteAheadLog records write commands so state can be reconstructed after a restart.',
        ],
      },
      {
        title: 'Data Structures',
        items: [
          'LRU behaviour was implemented directly rather than delegated to LinkedHashMap so the underlying O(1) hash-map plus doubly-linked-list mechanism is explicit.',
          'Each Node stores its key, value, expiration timestamp, and neighbouring links in the recency structure.',
        ],
      },
      {
        title: 'Concurrency & Networking',
        items: [
          'All public Store operations are synchronized to provide thread-safe access to shared state.',
          'A fixed pool of 20 worker threads bounds resource usage while allowing multiple TCP clients to interact with the store concurrently.',
          'ServerTest includes a 50-client concurrency stress test verifying that simultaneous access does not corrupt or lose data.',
        ],
      },
      {
        title: 'Expiration & Persistence',
        items: [
          'Keys support optional TTL expiration using a deliberately lazy-expiration strategy that removes expired values when they are accessed.',
          'Every SET and DEL operation can be persisted through an append-only write-ahead log.',
          'The server replays the log during startup to restore previous state after a process restart.',
        ],
      },
      {
        title: 'Testing & Performance',
        items: [
          '43 automated tests cover the store, command processor, write-ahead log, and real TCP server behaviour.',
          'GitHub Actions runs the full test suite automatically on every push.',
          'JMH benchmarking measures approximately 42.6 million GET operations per second and 15.0 million SET operations per second.',
        ],
      },
    ],
  },
]

function Projects() {
  // Tracks the project currently opened in the detailed case-study modal.
  const [selectedProject, setSelectedProject] = useState(null)

  /*
   * Handles modal keyboard behaviour and page scrolling.
   * Escape closes the modal and background scrolling is disabled while open.
   */
  useEffect(() => {
    if (!selectedProject) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    // Restore the previous page state when the modal closes.
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedProject])

  // Opens the case-study modal with the selected project data.
  const openProject = (project) => {
    setSelectedProject(project)
  }

  // Clears the selected project and closes the modal.
  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <main>
      <section className="projects-section">
        {/* Projects page introduction. */}
        <div className="projects-heading">
          <p className="projects-label">SELECTED ENGINEERING WORK</p>

          <h1>Projects</h1>

          <p className="projects-intro">
            Three projects demonstrating software engineering, full-stack
            development, machine learning, systems programming, testing,
            deployment, and technical decision-making.
          </p>
        </div>

        {/* Render each project from the shared project data structure. */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              className={`project-showcase ${
                index % 2 === 1 ? 'project-reverse' : ''
              }`}
              key={project.id}
            >
              {/* Project image also acts as a control for opening the modal. */}
              <button
                type="button"
                className="project-image-button"
                onClick={() => openProject(project)}
                aria-label={`Open detailed view for ${project.title}`}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="project-image"
                  />

                  <div className="project-image-overlay">
                    <span className="project-image-icon">+</span>
                    <span>EXPAND PROJECT</span>
                  </div>
                </div>
              </button>

              {/* Main project summary, metrics, technology stack, and outcome. */}
              <div className="project-content">
                <div className="project-number">{project.number}</div>

                <p className="project-type">{project.type}</p>

                <h2>{project.title}</h2>

                <p className="project-summary">{project.summary}</p>

                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <div className="project-metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-details">
                  <div>
                    <span className="project-detail-label">ROLE</span>
                    <p>{project.role}</p>
                  </div>

                  <div>
                    <span className="project-detail-label">OUTCOME</span>
                    <p>{project.outcome}</p>
                  </div>
                </div>

                {/* Provide detailed case study and external project resources. */}
                <div className="project-actions">
                  <button
                    type="button"
                    className="project-explore-button"
                    onClick={() => openProject(project)}
                  >
                    Explore Project
                    <span aria-hidden="true">→</span>
                  </button>

                  {project.links.slice(0, 2).map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-link ${
                        link.primary ? 'project-link-primary' : ''
                      }`}
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Detailed project case-study modal rendered only when a project is selected. */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onMouseDown={(event) => {
            // Close only when the user clicks the backdrop, not the modal itself.
            if (event.target === event.currentTarget) {
              closeProject()
            }
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-${selectedProject.id}`}
          >
            {/* Modal project identity and close control. */}
            <div className="project-modal-topbar">
              <div>
                <span className="project-modal-number">
                  {selectedProject.number}
                </span>

                <span className="project-modal-type">
                  {selectedProject.type}
                </span>
              </div>

              <button
                type="button"
                className="project-modal-close"
                onClick={closeProject}
                aria-label="Close project details"
              >
                ×
              </button>
            </div>

            <div className="project-modal-scroll">
              {/* Larger project screenshot for the case-study view. */}
              <div className="project-modal-image-frame">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                />
              </div>

              <div className="project-modal-heading">
                <div>
                  <p className="project-modal-eyebrow">
                    ENGINEERING CASE STUDY
                  </p>

                  <h2 id={`modal-${selectedProject.id}`}>
                    {selectedProject.title}
                  </h2>

                  <p>{selectedProject.summary}</p>
                </div>
              </div>

              {/* Reuse the same project metrics shown on the main card. */}
              <div className="project-modal-metrics">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="project-modal-overview">
                <div>
                  <span>ROLE</span>
                  <p>{selectedProject.role}</p>
                </div>

                <div>
                  <span>OUTCOME</span>
                  <p>{selectedProject.outcome}</p>
                </div>
              </div>

              {/* Full technology stack for the selected project. */}
              <div className="project-modal-tech">
                <p>TECHNOLOGY</p>

                <div>
                  {selectedProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              {/* Engineering case-study sections vary by project. */}
              <div className="project-case-study">
                {selectedProject.details.map((section, sectionIndex) => (
                  <section
                    className="project-case-section"
                    key={section.title}
                  >
                    <div className="case-section-number">
                      {String(sectionIndex + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <h3>{section.title}</h3>

                      <ul>
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </section>
                ))}
              </div>

              {/* External resources include demos, repositories, APIs, and reports. */}
              <div className="project-modal-links">
                {selectedProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-modal-link ${
                      link.primary ? 'project-modal-link-primary' : ''
                    }`}
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}

export default Projects