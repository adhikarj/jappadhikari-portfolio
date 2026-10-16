
import './App.css'

const PrayerFlags = () => (
  <div className="prayer-flags" aria-hidden="true">
    <span className="flag blue"></span>
    <span className="flag white"></span>
    <span className="flag red"></span>
    <span className="flag green"></span>
    <span className="flag yellow"></span>
  </div>
)

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a className="nav-brand" href="#home">
          Japp Adhikari<span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home">
        <div className="hero-container">

          <div className="hero-content">
            <p className="hero-greeting">
              Namaste! नमस्ते 🙏
            </p>

            <h1>Hey, I'm Japp! 👋</h1>

            <h2>Full-Stack Software Developer</h2>

            <p className="hero-description">
              I'm a full-stack developer who enjoys building
              things, figuring out how they work, and finding
              better ways to make them work. I've always been
              curious about technology, especially AI and all
              the possibilities that come with it.
            </p>

            <p className="hero-personal">
              When I'm away from my laptop, you'll probably
              find me dancing to my favorite songs, exploring
              somewhere new, or trying out a recipe that may
              or may not turn out as planned! ✨
            </p>

            <div className="hero-socials">
              <a
                href="https://github.com/adhikarj"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button primary"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/japp-adhikari-b81682329"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button secondary"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-frame">
              <img
                src="/Image.jpeg"
                alt="Portrait of Japp Adhikari"
                className="profile-picture"
              />
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <PrayerFlags />

        <div className="section-container about-container">
          <span className="section-eyebrow">
            GET TO KNOW ME
          </span>

          <h2 className="section-title">
            A Little About Me 👨‍💻
          </h2>

          <div className="about-text">
            <p>
              Namaste! 🙏 I'm Japp, a full-stack software
              developer originally from Nepal. Growing up
              surrounded by the Himalayas, I've always had
              a special love for mountains, nature, and
              exploring new places.
            </p>

            <p>
              I recently completed my master's degree at
              Purdue University Northwest. My journey in
              tech has taken me through backend development,
              REST APIs, databases, and frontend technologies.
              I've worked with C#, .NET, SQL, and JavaScript,
              and I enjoy solving problems and building
              applications that make people's lives a
              little easier.
            </p>

            <p>
              I'm also really interested in artificial
              intelligence. My recent research explores
              how large language models can be used in
              healthcare, and I enjoy keeping up with
              new developments in AI.
            </p>

            <p>
              Outside of work, I love traveling, dancing,
              and spending time in the mountains whenever
              I get the chance. I'm also trying to build
              a habit of reading more books and AI blogs.
              There's always something new to learn, and
              I like keeping myself curious! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills">
        <PrayerFlags />

        <div className="section-container">
          <span className="section-eyebrow">
            WHAT I WORK WITH
          </span>

          <h2 className="section-title">
            Technical Skills 💻
          </h2>

          <p className="section-description">
            A mix of technologies I've worked with,
            explored, and enjoyed learning along the way.
          </p>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Languages</h3>
              <p>
                C#, Python, SQL, JavaScript,
                TypeScript
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Backend & APIs</h3>
              <p>
                .NET Core, ASP.NET Web API,
                REST APIs, Entity Framework
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">🧠</div>
              <h3>AI & Machine Learning</h3>
              <p>
                LLMs, LangChain, RAG, PyTorch
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <h3>Databases & Data</h3>
              <p>
                SQL Server, Oracle, SSIS, SSRS
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>Frontend</h3>
              <p>
                React, Angular, HTML, CSS
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Tools & Platforms</h3>
              <p>
                Git, GitHub, Azure, Jira
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <PrayerFlags />

        <div className="section-container">
          <span className="section-eyebrow">
            MY CAREER SO FAR
          </span>

          <h2 className="section-title">
            My Professional Journey 💼
          </h2>

          <p className="section-description">
            The experiences that have shaped
            how I build, learn, and solve problems.
          </p>

          <div className="experience-timeline">

            {/* Purdue University Northwest */}
            <div className="experience-item">
              <span className="experience-date">
                Aug 2024 – May 2026
              </span>

              <h3>
                Graduate Teaching & Research Assistant
              </h3>

              <div className="company-info">
                <img
                  src="/pnw.png"
                  alt="Purdue University Northwest logo"
                />
                <h4>Purdue University Northwest</h4>
              </div>

              <p>
                Supported teaching and research initiatives,
                explored AI applications, and contributed
                to technical and academic projects.
              </p>
            </div>

            {/* Deloitte */}
            <div className="experience-item">
              <span className="experience-date">
                Oct 2023 – Jan 2024
              </span>

              <h3>Software Developer</h3>

              <div className="company-info">
                <img
                  src="/Deloitte.png"
                  alt="Deloitte logo"
                />
                <h4>Deloitte</h4>
              </div>

              <p>
                Contributed to software development,
                backend functionality, and enterprise
                application solutions.
              </p>
            </div>

            {/* CVS Health */}
            <div className="experience-item">
              <span className="experience-date">
                Oct 2021 – Apr 2023
              </span>

              <h3>Full-Stack Developer</h3>

              <div className="company-info">
                <img
                  src="/CVS.png"
                  alt="CVS Health logo"
                />
                <h4>CVS Health</h4>
              </div>

              <p>
                Worked on full-stack development of
                enterprise applications, building frontend
                features, backend functionality, and
                database solutions to improve application
                performance and user experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications">
        <PrayerFlags />

        <div className="section-container research-container">
          <span className="section-eyebrow">
            THE JOURNEY OF CURIOSITY
          </span>

          <h2 className="section-title">
            Publications
          </h2>

          <h3 className="research-heading">
            Every discovery starts somewhere.
          </h3>

          <p className="section-description">
            A few research milestones along the way.
          </p>

          <div className="research-trail">

            {/* Publication 1 */}
            <div className="research-milestone">
              <span className="research-number">
                01
              </span>

              <div className="research-content">
                <span className="research-meta">
                  AIME 2026 · Ottawa, Canada
                </span>

                <h3>
                  Same Models, Better Results:
                  Improving Multimodal LLMs' Accuracy
                  in Identifying Myocardial Infarction
                  from ECG Images
                </h3>

                <a
                  href="https://link.springer.com/chapter/10.1007/978-3-032-30813-9_18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-link"
                >
                  Read Publication ↗
                </a>
              </div>
            </div>

            {/* Publication 2 */}
            <div className="research-milestone">
              <span className="research-number">
                02
              </span>

              <div className="research-content">
                <span className="research-meta">
                  MIE 2026 · Genova, Italy
                </span>

                <h3>
                  Interpreting ECG Images with
                  Multimodal Large Language Models
                </h3>

                <a
                  href="https://journals.sagepub.com/doi/full/10.3233/SHTI260321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-link"
                >
                  Read Publication ↗
                </a>
              </div>
            </div>

            {/* Publication 3 */}
            <div className="research-milestone">
              <span className="research-number">
                03
              </span>

              <div className="research-content">
                <span className="research-meta">
                  Bioengineering · April 2026
                </span>

                <h3>
                  Toward Personalized Rotator Cuff
                  Physical Therapy Dosage Using a
                  Machine Learning-Based Pilot Study
                  with EMG
                </h3>

                <a
                  href="https://www.mdpi.com/2306-5354/13/4/483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-link"
                >
                  Read Publication ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <PrayerFlags />

        <div className="contact-container">
          <span className="section-eyebrow">
            SAY NAMASTE
          </span>

          <h2 className="section-title">
            Let's Connect<span>!</span>
          </h2>

          <p className="contact-description">
            Whether it's an exciting opportunity,
            a creative idea, or just a friendly hello,
            I'd love to hear from you.
          </p>

          {/* Web3Forms Contact Form */}
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="68b05167-b5e8-4f0f-b02d-643a423cec65"
            />

            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            <div className="form-field">
              <label htmlFor="contact-name">
                Your Name
              </label>

              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">
                Your Email
              </label>

              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Hi Japp, I'd love to connect..."
                rows={5}
                required
              />
            </div>

            <button type="submit">
              Send Message ↗
            </button>
          </form>

          {/* Social Links */}
          <div className="contact-links">
            <a href="mailto:jappadhikari0554@gmail.com">
              Email ↗
            </a>

            <a
              href="https://www.linkedin.com/in/japp-adhikari-b81682329"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/adhikarj"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <p className="contact-signoff">
            Made with curiosity, creativity, and
            a little Himalayan spirit. 🏔️
          </p>
        </div>
      </section>

    </div>
  )
}

export default App
