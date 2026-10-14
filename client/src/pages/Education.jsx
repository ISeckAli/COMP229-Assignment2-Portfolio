// Completed technical coursework shown in the foundation section.
const completedCourses = [
  'Programming 1',
  'Programming 2',
  'Software Engineering Fundamentals',
  'Introduction to Database Concepts',
  'Web Interface Design',
  'Client-Side Web Development',
  'Software Requirements Engineering',
  'Unix / Linux Operating Systems',
  'Functions & Number Systems',
  'Discrete Mathematics & Introductory Calculus',
]

// Courses currently in progress.
const currentCourses = [
  'Java Programming',
  'Web Application Development',
  'Introduction to Artificial Intelligence',
  'Artificial Intelligence Systems Design',
  'Linear Algebra & Statistics',
]

// Future technical areas grouped by focus instead of semester sequence.
const futureFocus = [
  {
    number: '01',
    title: 'Algorithms & Advanced Data Systems',
    description:
      'Data structures and algorithms, advanced database programming, NoSQL systems, vector data, scalable storage, and intelligent data architectures.',
  },
  {
    number: '02',
    title: 'Machine Learning & Deep Learning',
    description:
      'Supervised learning, neural networks, deep learning, transformers, representation learning, and advanced model development.',
  },
  {
    number: '03',
    title: 'MLOps & Cloud AI',
    description:
      'AI software testing, production pipelines, lifecycle management, cloud machine learning, automation, monitoring, and deployment.',
  },
  {
    number: '04',
    title: 'Intelligent Systems',
    description:
      'Natural language processing, recommender systems, reinforcement learning, intelligent robotics, and AI-enabled mobile applications.',
  },
  {
    number: '05',
    title: 'Responsible AI Engineering',
    description:
      'AI ethics, data governance, security, privacy, explainability, professional standards, and responsible system design.',
  },
  {
    number: '06',
    title: 'Applied AI Capstone',
    description:
      'Researching, designing, developing, and integrating an AI capability into a complete software solution addressing a real-world problem.',
  },
]

// Professional certifications complementing the academic program.
const certifications = [
  {
    title: 'Fundamentals of AI',
    issuer: 'IBM',
  },
  {
    title: 'Python 101 for Data Science',
    issuer: 'IBM',
  },
  {
    title: 'SQL & Relational Databases 101',
    issuer: 'IBM',
  },
  {
    title: 'Big Data 101',
    issuer: 'IBM',
  },
  {
    title: 'Accessing Hadoop Data Using Hive',
    issuer: 'IBM',
  },
  {
    title: 'Prompt Engineering for Everyone',
    issuer: 'IBM',
  },
  {
    title: 'Google Analytics Certification',
    issuer: 'Google',
  },
  {
    title: 'HubSpot Reporting Certification',
    issuer: 'HubSpot',
  },
]

function Education() {
  return (
    <main>
      <section className="education-section">
        <div className="education-container">
          {/* Page heading and academic focus. */}
          <div className="education-heading">
            <p className="education-label">
              EDUCATION & TECHNICAL DEVELOPMENT
            </p>

            <h1>Education</h1>

            <p>
              Building a broad software engineering foundation while
              specializing in artificial intelligence, machine learning, and
              intelligent software systems.
            </p>
          </div>

          {/* Main credential, program status, and academic progress. */}
          <section className="degree-showcase">
            <div className="degree-main">
              <div className="degree-status">
                <span className="education-status-dot"></span>
                IN PROGRESS
              </div>

              <p className="degree-institution">
                CENTENNIAL COLLEGE
              </p>

              <h2>
                Software Engineering Technology
                <span>Artificial Intelligence</span>
              </h2>

              <p className="degree-credential">
                Ontario College Advanced Diploma • Co-op

                <span
                  style={{
                    display: 'block',
                    marginTop: '6px',
                  }}
                >
                  January 2026 – April 2028 (Expected)
                </span>
              </p>

              <p className="degree-description">
                A software engineering program combining programming,
                full-stack development, databases, systems engineering,
                mathematics, machine learning, artificial intelligence, and
                production-oriented software practices.
              </p>

              {/* High-level areas represented throughout the program. */}
              <div className="degree-tags">
                <span>Software Engineering</span>
                <span>Full-Stack Development</span>
                <span>Artificial Intelligence</span>
                <span>Machine Learning</span>
                <span>Co-op</span>
              </div>
            </div>

            {/* Academic metrics provide a quick summary of current progress. */}
            <div className="education-metrics">
              <div className="education-metric">
                <span className="metric-label">
                  CUMULATIVE GPA
                </span>

                <strong>4.287</strong>

                <p>
                  Strong academic performance across completed studies.
                </p>
              </div>

              <div className="education-metric">
                <span className="metric-label">
                  CREDITS COMPLETED
                </span>

                <strong>47</strong>

                <p>
                  Completed before the current academic term.
                </p>
              </div>

              <div className="education-metric">
                <span className="metric-label">
                  STUDY FORMAT
                </span>

                <strong>Year-Round</strong>

                <p>
                  Continuous study through available summer terms rather than
                  following a traditional two-term academic year.
                </p>
              </div>
            </div>
          </section>

          {/* Completed coursework covering the technical foundation of the program. */}
          <section className="education-block">
            <div className="education-block-heading">
              <div>
                <p className="education-section-number">
                  01
                </p>

                <h2>Technical Foundation</h2>
              </div>

              <p>
                Completed coursework covering the foundations of software
                engineering, programming, web development, databases, systems,
                requirements engineering, and applied mathematics.
              </p>
            </div>

            <div className="course-chip-grid">
              {completedCourses.map((course) => (
                <div
                  className="course-chip completed-course"
                  key={course}
                >
                  <span className="course-status-icon">
                    ✓
                  </span>

                  <span>{course}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Active courses for the current academic term. */}
          <section className="education-block current-education-block">
            <div className="education-block-heading">
              <div>
                <p className="education-section-number">
                  02
                </p>

                <h2>Current Technical Focus</h2>
              </div>

              <p>
                Current studies deepen the connection between software
                development, application architecture, artificial intelligence,
                and the mathematics behind intelligent systems.
              </p>
            </div>

            <div className="current-course-grid">
              {currentCourses.map((course) => (
                <div
                  className="current-course-card"
                  key={course}
                >
                  <div className="current-course-top">
                    <span>ACTIVE</span>
                    <span className="active-course-dot"></span>
                  </div>

                  <h3>{course}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced areas the program develops toward later in the diploma. */}
          <section className="education-block">
            <div
              className="education-block-heading"
              style={{ gridTemplateColumns: '1fr' }}
            >
              <div>
                <p className="education-section-number">
                  03
                </p>

                <h2>Advanced Technical Direction</h2>
              </div>
            </div>

            <div className="future-focus-grid">
              {futureFocus.map((focus) => (
                <article
                  className="future-focus-card"
                  key={focus.title}
                >
                  <span className="future-focus-number">
                    {focus.number}
                  </span>

                  <h3>{focus.title}</h3>

                  <p>{focus.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Professional certifications included as additional qualifications. */}
          <section className="education-block">
            <div className="education-block-heading">
              <div>
                <p className="education-section-number">
                  04
                </p>

                <h2>Professional Certifications</h2>
              </div>

              <p>
                Additional professional qualifications supporting my work
                across artificial intelligence, data, analytics, databases,
                and software development.
              </p>
            </div>

            <div className="future-focus-grid">
              {certifications.map((certification, index) => (
                <article
                  className="future-focus-card"
                  key={certification.title}
                >
                  <span className="future-focus-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{certification.title}</h3>

                  <p>{certification.issuer}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Co-op pathway connects academic learning with professional experience. */}
          <section className="coop-showcase">
            <div className="coop-icon">
              <span>CO-OP</span>
            </div>

            <div className="coop-content">
              <p className="education-label">
                PROFESSIONAL EXPERIENCE PATHWAY
              </p>

              <h2>Integrated Co-op Experience</h2>

              <p>
                The co-op stream includes three work-placement terms integrated
                into the diploma, creating opportunities to apply software
                engineering and AI skills in professional environments.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Education