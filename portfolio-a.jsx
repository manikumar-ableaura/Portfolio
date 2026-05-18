// portfolio.jsx — Mani Kumar portfolio
const { useState, useEffect, useRef, useCallback } = React;

/* -------------------- Icons -------------------- */
const Icon = {
  Arrow: (p) =>
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
      <path d="M3 11L11 3M11 3H5M11 3V9" />
    </svg>,

  ArrowSmall: (p) =>
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
    </svg>,

  Github: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.61-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>,

  Linkedin: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.76c1.4-2.58 7-2.78 7 2.47V19z" />
    </svg>,

  Mail: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 7l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    </svg>,

  Phone: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>,

  Code: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>,

  Layers: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>,

  Smartphone: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>,

  Server: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>,

  Sparkle: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" />
    </svg>,

  Accessibility: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="5" r="2" /><path d="M12 7v6m-4 7l4-5 4 5M8 11l4 2 4-2" />
    </svg>,

  Copy: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>,

  Check: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="20 6 9 17 4 12" />
    </svg>,

  X: (p) =>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>,

  Download: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
    </svg>

};

/* -------------------- Magnetic hover wrapper -------------------- */
function useMagneticHover(strength = 0.3) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    const handleLeave = () => {el.style.transform = '';};
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);
  return ref;
}

/* -------------------- Spotlight hover (no transform) -------------------- */
function useSpotlight() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    el.addEventListener('mousemove', handle);
    return () => el.removeEventListener('mousemove', handle);
  }, []);
  return ref;
}

/* -------------------- Reveal on scroll -------------------- */
function Reveal({ children, className = '', stagger = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${stagger ? 'reveal-stagger' : 'reveal'} ${className}`}>
      {children}
    </div>);

}

/* -------------------- NAV -------------------- */
function Nav() {
  const sections = ['About', 'Skills', 'Work', 'Experience', 'Contact'];
  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="nav-brand-dot"></span>
        SMK
      </div>
      <div className="nav-links">
        {sections.map((s) =>
        <a key={s} href={`#${s.toLowerCase()}`} className="nav-link">{s}</a>
        )}
      </div>
    </nav>);

}

/* -------------------- HERO -------------------- */
function Hero() {
  const roles = [
  'Full-Stack Engineer · React, Node, Laravel',
  'Mobile Builder · Flutter, Play Store deploys',
  'Accessibility-first interface designer',
  'AI-augmented product engineer'];

  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setActive((a) => (a + 1) % roles.length);
        setExiting(false);
      }, 480);
    }, 3600);
    return () => clearInterval(id);
  }, []);

  const primaryRef = useRef(null);
  const handleBtnMove = (e) => {
    const el = primaryRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Apply pre-state, then release on next tick to trigger transition.
    // Uses setTimeout (not rAF) so it works in throttled-iframe contexts.
    el.classList.add('hero-enter-init');
    const t = setTimeout(() => el.classList.remove('hero-enter-init'), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-aurora" aria-hidden="true"></div>
      <div className="container hero-inner">
        <div className="hero-enter" ref={heroRef}>
          <div className="hero-tag">
            <span className="status"></span>
            Available · Q3 2026 · Remote / Chennai
          </div>

          <h1 className="hero-title">
            <span className="accent">S Mani</span>
            <br className="hero-name-break" />
            <span className="italic"> Kumar.</span>
          </h1>

          <div className="hero-rotator">
            <span className="hero-rotator-prefix">currently</span>
            <span className="hero-rotator-words">
              {roles.map((r, i) =>
              <span
                key={i}
                className={`hero-rotator-word ${i === active ? exiting ? 'exit' : 'active' : ''}`}>
                
                  {r}
                </span>
              )}
            </span>
          </div>

          <p className="hero-lede">
            I design and build production-grade web and mobile platforms — quietly opinionated about
            accessibility, performance, and the small details that make software feel inevitable.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              ref={primaryRef}
              onMouseMove={handleBtnMove} style={{ borderColor: "rgb(0, 0, 0)" }}>
              
              Start a conversation
              <Icon.Arrow className="arrow" />
            </a>
            <a
              href="#work"
              className="btn btn-ghost"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
              }}
            >
              See selected work
              <Icon.ArrowSmall className="arrow" />
            </a>
            <a
              href={(typeof window !== 'undefined' && window.__RESUME_URL) || 'Mani-Kumar-Resume.pdf'}
              download="Mani-Kumar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-resume"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
              }}
            >
              <Icon.Download className="download-icon" />
              Resume
              <span className="resume-pill">PDF</span>
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-cell">
              <div className="hero-meta-label">Based in</div>
              <div className="hero-meta-value">Chennai, India · IST <span className="accent">+5:30</span></div>
            </div>
            <div className="hero-meta-cell">
              <div className="hero-meta-label">Currently</div>
              <div className="hero-meta-value">Full stack Engineer<br /><span style={{ color: 'var(--fg-mute)', fontSize: '13px' }}>Able Aura Technologies</span></div>
            </div>
            <div className="hero-meta-cell">
              <div className="hero-meta-label">Focused on</div>
              <div className="hero-meta-value">Accessibility, <span className="accent">AI-assisted</span> dev,<br />end-to-end product delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="section-head-left">
              <div className="eyebrow">01 — About</div>
              <h2 style={{ marginTop: 18 }}>
                A full-stack engineer<br />
                with a designer's <span className="italic">conscience.</span>
              </h2>
            </div>
            <div className="section-head-right">
              Two years across React, Node, Laravel and Flutter — shipping the kind of
              software that real teams open every morning.
            </div>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="about-prose">
              <p>
                I'm <strong>Mani Kumar Srinivasan</strong> — a full-stack developer who's spent the last couple of years
                quietly shipping production platforms across web and mobile. I care about the unglamorous parts:
                low-bandwidth loads, screen-reader semantics, the error states nobody asked about.
              </p>
              <p>
                Most of my current work is at <em>Able Aura</em> — a digital ecosystem supporting people with
                disabilities. It's taught me that accessibility isn't a checklist; it's a way of writing software
                that respects the person on the other side of the glass.
              </p>
              <p>
                I lean heavily on AI as a collaborator — Claude, Copilot, Figma AI — not to replace craft, but to
                spend more of my time on the parts that need a human: structure, taste, edge cases, the conversation
                with the user.
              </p>
            </div>
          </Reveal>

          <Reveal stagger>
            <div className="about-stats">
              <StatCard value="2" unit="yrs" label="Building production software" />
              <StatCard value="12+" unit="" label="Shipped projects across web & mobile" />
              <StatCard value="30" unit="%" label="Code duplication reduced via reusable React" />
              <StatCard value="1" unit="" label="Flutter app deployed to Play Store" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

function StatCard({ value, unit, label }) {
  const ref = useSpotlight();
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-value">{value}<span className="unit">{unit}</span></div>
      <div className="stat-label">{label}</div>
    </div>);

}

/* -------------------- SKILLS -------------------- */
const SKILLS = [
{
  icon: <Icon.Layers />,
  num: '01',
  title: 'Frontend craft',
  desc: 'React, Redux Toolkit, modern CSS. Reusable component systems, performance-first patterns, and interfaces that hold up under real-world data.',
  chips: ['React.js', 'Redux Toolkit', 'JavaScript ES6+', 'SCSS', 'Bootstrap', 'Core Web Vitals']
},
{
  icon: <Icon.Server />,
  num: '02',
  title: 'Backend & APIs',
  desc: 'Node, Express, Laravel with Filament. REST design, JWT auth, role-based workflows, and the email automations nobody sees but everyone relies on.',
  chips: ['Node.js', 'Express', 'Laravel', 'Filament', 'REST', 'JWT', 'MongoDB', 'SQL']
},
{
  icon: <Icon.Smartphone />,
  num: '03',
  title: 'Mobile (Flutter)',
  desc: 'End-to-end Flutter delivery — Dart, native channels, build pipeline, and shipping to the Play Store with real users on the other end.',
  chips: ['Flutter', 'Dart', 'REST integration', 'Play Store']
},
{
  icon: <Icon.Accessibility />,
  num: '04',
  title: 'Accessibility',
  desc: 'WCAG-first markup, semantic HTML, keyboard flows and AI-assisted accessibility audits. Inclusive interfaces for users who depend on them.',
  chips: ['WCAG 2.2', 'Semantic HTML', 'ARIA', 'Screen-reader QA']
},
{
  icon: <Icon.Sparkle />,
  num: '05',
  title: 'AI-assisted dev',
  desc: 'Claude, Copilot, ChatGPT, Figma AI — used to accelerate prototyping, write better tests, audit accessibility, and stay close to the user.',
  chips: ['Claude', 'GitHub Copilot', 'ChatGPT', 'Figma AI']
},
{
  icon: <Icon.Code />,
  num: '06',
  title: 'Workflow',
  desc: 'Git, GitHub, Agile/Scrum, Postman, Insomnia. Sprint-driven delivery, clear PRs, and the discipline of small, reviewable change.',
  chips: ['Git', 'GitHub', 'Postman', 'Agile/Scrum', 'VS Code']
}];


function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="section-head" style={{ justifyContent: "space-between", flexDirection: "row", opacity: "1" }}>
            <div className="section-head-left">
              <div className="eyebrow">02 — Capabilities</div>
              <h2 style={{ marginTop: 18 }}>
                A toolkit that spans<br />
                <span className="italic">surface to system.</span>
              </h2>
            </div>
            <div className="section-head-right">
              The honest list — what I reach for daily, and where I've put the hours in.
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="skills-grid">
            {SKILLS.map((s) => <SkillCard key={s.num} {...s} />)}
          </div>
        </Reveal>
      </div>
    </section>);

}

function SkillCard({ icon, num, title, desc, chips }) {
  const ref = useSpotlight();
  return (
    <div className="skill-card" ref={ref}>
      <div className="skill-head">
        <div className="skill-icon">{icon}</div>
        <div className="skill-num">— {num}</div>
      </div>
      <div className="skill-title">{title}</div>
      <div className="skill-desc">{desc}</div>
      <div className="skill-chips">
        {chips.map((c) => <span key={c} className="chip">{c}</span>)}
      </div>
    </div>);

}

Object.assign(window, { Nav, Hero, About, Skills, Reveal, Icon, useSpotlight, useMagneticHover });