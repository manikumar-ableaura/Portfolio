// portfolio-b.jsx — projects, experience, contact, footer
const { useState: useStateB, useRef: useRefB, useEffect: useEffectB } = React;

/* -------------------- PROJECTS -------------------- */
const PROJECTS = [
{
  idx: '01',
  name: 'Employee Management & Attendance',
  italic: 'Mobile + Web',
  domain: 'Internal · Live in production',
  desc: 'A production-grade Flutter mobile app paired with a Laravel Filament admin dashboard. Role-based workflows, automated email cascades, real-time attendance, deployed to the Play Store and used daily.',
  tech: ['Flutter', 'Laravel', 'Filament', 'React', 'REST'],
  featured: true,
  href: null
},
{
  idx: '02',
  name: 'Academy Able Aura',
  italic: '',
  domain: 'academy.ableaura.com',
  desc: 'Accessibility-first UI for a sports platform serving children with disabilities. Listings, onboarding, galleries — engineered with emotional clarity in mind.',
  tech: ['React', 'AI Prototyping', 'WCAG'],
  href: 'https://academy.ableaura.com'
},
{
  idx: '03',
  name: 'Able Aura',
  italic: 'Digital Ecosystem',
  domain: 'ableaura.org',
  desc: 'Modular UIs for travel, therapy, and housing services. Hybrid Android delivery, accessibility evaluations baked into the workflow with AI tooling.',
  tech: ['React', 'JavaScript', 'Accessibility'],
  href: 'https://ableaura.org'
},
{
  idx: '04',
  name: 'MyChildLife',
  italic: 'Autism Support',
  domain: 'mychild.thecosmichomes.com',
  desc: 'An emotionally supportive interface for parents of autistic children — multimedia woven in carefully, content drafted with ChatGPT then edited for warmth.',
  tech: ['React', 'Content design', 'AI-assisted'],
  href: 'https://mychild.thecosmichomes.com'
},
{
  idx: '05',
  name: 'The Cosmic Homes',
  italic: 'Villa Project',
  domain: 'thecosmichomes.com',
  desc: 'Frontend for autism-friendly villa listings. Image-optimized, mobile-first, accessibility evaluated with AI-powered tooling.',
  tech: ['React', 'JavaScript', 'Performance'],
  href: 'https://thecosmichomes.com'
}];


function Projects() {
  return (
    <section id="work">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="section-head-left">
              <div className="eyebrow">03 — Selected work</div>
              <h2 style={{ marginTop: 18 }}>
                Things I've shipped,<br />
                <span className="italic">end to end.</span>
              </h2>
            </div>
            <div className="section-head-right">
              Five projects across mobile and web. Each one in production, with real users.
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="projects-list">
            {PROJECTS.map((p) => <ProjectCard key={p.idx} {...p} />)}
          </div>
        </Reveal>
      </div>
    </section>);

}

function ProjectCard({ idx, name, italic, domain, desc, tech, href, featured }) {
  const ref = useSpotlight();
  const Tag = href ? 'a' : 'div';
  const props = href ? { href, target: '_blank', rel: 'noreferrer' } : {};
  return (
    <Tag ref={ref} className="project-card" {...props}>
      <div className="project-index">{idx}{featured && <span style={{ color: 'var(--copper)', marginLeft: 8 }}>★</span>}</div>
      <div className="project-title-wrap">
        <div className="project-name">
          {name}{italic && <> <span className="italic">{italic}</span></>}
        </div>
        <div className="project-domain">{domain}</div>
      </div>
      <div className="project-desc">{desc}</div>
      <div className="project-meta">
        <div className="project-tech">
          {tech.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        <div className="project-arrow">
          <Icon.ArrowSmall />
        </div>
      </div>
    </Tag>);

}

/* -------------------- EXPERIENCE -------------------- */
const EXPERIENCE = [
{
  period: 'Present',
  role: 'Frontend Developer',
  company: 'Able Aura Technologies',
  bullets: [
  'Built reusable React component systems with hooks, cutting code duplication by ~30% across the app.',
  'Integrated REST APIs and JWT-based authentication for secure, real-time data flows.',
  'Optimized load performance with code splitting and lazy loading for low-bandwidth environments.',
  'Designed and shipped a Flutter employee-management app paired with a Laravel Filament backend — end to end, all the way to Play Store deployment.',
  'Contributed across Agile sprints — planning, reviews, delivery — and integrated AI tooling to accelerate development and lift code quality.']

},
{
  period: '2023',
  role: 'MCA — Master of Computer Applications',
  company: 'Dr. MGR Educational Research & Institute, Chennai',
  bullets: [
  'Graduate degree focused on software engineering, systems design, and modern web architectures.']

},
{
  period: '2021',
  role: 'B.Com — Bachelor of Commerce',
  company: 'Sri Venkateshwara University, Tirupati',
  bullets: [
  'Undergraduate degree before pivoting fully into software — a useful lens on the business side of every product I now build.']

},
{
  period: 'Ongoing',
  role: 'Certifications',
  company: 'freeCodeCamp · Simplilearn',
  bullets: [
  'Responsive Web Design (freeCodeCamp) · ReactJS (Simplilearn).']

}];


function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="section-head-left">
              <div className="eyebrow">04 — Trajectory</div>
              <h2 style={{ marginTop: 18 }}>
                The path<br />
                <span className="italic">so far.</span>
              </h2>
            </div>
            <div className="section-head-right">
              Roles, degrees, and the certifications that quietly shaped how I work.
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="timeline">
            {EXPERIENCE.map((e, i) =>
            <div className="tl-item" key={i}>
                <div className="tl-dot"></div>
                <div className="tl-period">{e.period}</div>
                <div className="tl-role" style={{ fontFamily: "\"Architects Daughter\"" }}>{e.role}</div>
                <div className="tl-company" style={{ fontFamily: "monospace" }}>{e.company}</div>
                <div className="tl-bullets">
                  {e.bullets.map((b, j) => <div className="tl-bullet" key={j}>{b}</div>)}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const linkedinUrl = 'https://www.linkedin.com/in/smanikumar1995';
  const email = 'smanikumar95@gmail.com';
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  const openInTopTab = (href) => (e) => {
    try {
      const win = (window.top || window).open(href, '_blank', 'noopener,noreferrer');
      if (win) e.preventDefault();
    } catch (err) { /* fall through */ }
  };
  const handleGmailClick = openInTopTab(gmailHref);
  const handleLinkedinClick = openInTopTab(linkedinUrl);
  const [copied, setCopied] = useStateB(false);
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="contact-prelude">Let's build something thoughtful</div>
            <div className="contact-title">
              <span>Have a project</span><br />
              <span className="italic">in mind?</span>
            </div>
            <p className="contact-sub">
              I'm available for full-stack engagements, frontend leadership, and Flutter delivery —
              especially anything with a real accessibility mandate. Replies usually within a day.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="contact-email-btn" onClick={handleCopy}>
                <Icon.Mail />
                {email}
                <span className="copy-pill">
                  {copied ? <><Icon.Check /> Copied</> : <><Icon.Copy /> Copy</>}
                </span>
              </button>
            </div>

            <div className="contact-actions">
              <a href={gmailHref} target="_blank" rel="noopener noreferrer" onClick={handleGmailClick} className="btn btn-primary" style={{ padding: '12px 20px', fontSize: 13 }}>
                Send an email
                <Icon.Arrow className="arrow" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkedinClick}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                }}
                className="btn btn-ghost"
                style={{ padding: '12px 20px', fontSize: 13 }}
              >
                Connect on LinkedIn
                <Icon.ArrowSmall className="arrow" />
              </a>
              <a
                href={(typeof window !== 'undefined' && window.__RESUME_URL) || 'Mani-Kumar-Resume.pdf'}
                download="Mani-Kumar-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-resume"
                style={{ padding: '12px 14px 12px 20px', fontSize: 13 }}
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
          </div>
        </Reveal>

        <div className="footer">
          <div className="footer-copy">© 2026 · S Mani Kumar · Chennai</div>
          <div className="footer-built">
            Built with React, taste, and a lot of warm light <span className="dot">·</span>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Projects, Experience, Contact });