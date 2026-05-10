const { useState, useEffect } = React;

const CatCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="cat-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      😺
    </div>
  );
};

const Navbar = () => {
  return (
    <nav>
      <div className="logo">~$ tap</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>sudo-apt-install-tap</h1>
        <p>Hardware Enthusiast & Developer</p>
        <p style={{ fontSize: '16px', color: '#b8c5e9', marginBottom: '40px' }}>
          Building keyboards, electronics, and cool stuff 🚀
        </p>
        <button className="cta-button">Explore My Work</button>
        <button className="cta-button" style={{ background: '#ed8796' }}>Get in Touch</button>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Taps-Macropad-V3',
      description: 'Advanced macropad with customizable keys and RGB lighting',
      repo: 'https://github.com/sudo-apt-install-tap/Taps-Macropad-V3',
      language: 'Python'
    },
    {
      title: 'TaoTeChing',
      description: 'An open-source split keyboard made for ergonomics with minimalist design',
      repo: 'https://github.com/sudo-apt-install-tap/TaoTeChing',
      language: 'Python'
    },
    {
      title: 'ByteVile',
      description: 'Development version with advanced features and optimizations',
      repo: 'https://github.com/sudo-apt-install-tap/ByteVile-Alpha-Dev-Version-1.1',
      language: 'Python'
    },
    {
      title: 'RPForged',
      description: 'A simple microcontroller with the RP2040 chip',
      repo: 'https://github.com/sudo-apt-install-tap/RPForged',
      language: 'Hardware'
    },
    {
      title: 'BuildGuildKolkata',
      description: 'Community project for builders and makers in Kolkata',
      repo: 'https://github.com/sudo-apt-install-tap/BuildGuildKolkata',
      language: 'CSS'
    },
    {
      title: 'MUSE',
      description: 'Creative project combining music and electronics',
      repo: 'https://github.com/sudo-apt-install-tap/MUSE',
      language: 'Multi'
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ marginBottom: '15px' }}>
              <span style={{
                display: 'inline-block',
                padding: '5px 10px',
                background: '#c6a0f6',
                color: '#24273a',
                border-radius: '3px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {project.language}
              </span>
            </div>
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact">
      <h3 style={{ marginBottom: '20px' }}>Get in Touch</h3>
      <div>
        <a href="https://github.com/sudo-apt-install-tap" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="mailto:your-email@example.com">Email</a>
      </div>
      <p style={{ marginTop: '30px' }}>© 2026 sudo-apt-install-tap. Built with React & Catppuccin Macchiato 💜</p>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <CatCursor />
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);