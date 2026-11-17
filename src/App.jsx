import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown,
  ExternalLink, Github, Heart, Linkedin, Mail, Menu, Paperclip,
  PenLine, Sparkles, X
} from 'lucide-react';

const projects = [
  {
    id: 'beemerghini',
    title: 'Beemerghini Motors',
    type: 'Development',
    category: 'Web development',
    year: '01 / Featured',
    description: 'An automotive website concept combining striking visual presentation with a responsive web experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://raeesasamaai.github.io/Beemerghini-Motors-Website/',
    art: 'motors'
  },
  {
    id: 'bmw',
    title: 'BMW Customizer',
    type: 'Development',
    category: 'Interactive experience',
    year: '02 / Featured',
    description: 'An interactive car customisation project from my existing development portfolio.',
    tech: ['Interactive UI', 'Frontend'],
    url: 'https://raeesasamaai.github.io/BMW-Customizer/',
    art: 'customizer'
  },
  {
    id: 'student',
    title: 'Student Communication Dashboard',
    type: 'UI/UX',
    category: 'Interface concept',
    year: '03 / Selected',
    description: 'A student-centred dashboard mockup exploring clarity, communication and thoughtful interface organisation.',
    tech: ['UI design', 'User experience'],
    url: null,
    art: 'dashboard'
  },
  {
    id: 'auto',
    title: 'Auto Stallion',
    type: 'Development',
    category: 'Responsive website',
    year: '04 / Selected',
    description: 'A mobile detailing website built around straightforward navigation and a service-focused presentation.',
    tech: ['Responsive design', 'Frontend'],
    url: 'https://raeesasamaai.github.io/Auto-Stallion-Mobile-Detailing-Website/',
    art: 'auto'
  },
  {
    id: 'suneco',
    title: 'Sun Eco Travel Identity',
    type: 'Design',
    category: 'Logo design',
    year: '05 / Selected',
    description: 'An environmentally minded travel identity explored through a clean, memorable logo direction.',
    tech: ['Brand identity', 'Photoshop'],
    url: null,
    art: 'sun'
  },
  {
    id: 'archive',
    title: 'Vintage Archive Centre',
    type: 'UI/UX',
    category: 'Website mockup',
    year: '06 / Selected',
    description: 'A vintage-inspired archive website concept bringing editorial composition and modern navigation together.',
    tech: ['Visual design', 'UI/UX'],
    url: null,
    art: 'archive'
  }
];

const experience = [
  { date: '2026', label: 'EXPERIENCE', title: 'Graphic Design & Software Development Intern', place: 'CEO Squad', body: 'A multidisciplinary internship spanning creative design and software development.' },
  { date: '2025', label: 'EXPERIENCE', title: 'Web Development Intern', place: 'LC Studio', body: 'Practical experience contributing to web development work.' },
  { date: '2025', label: 'EDUCATION', title: 'Full Stack Web Development — YouthCode', place: 'Life Choices Academy', body: 'Six-month programme completed from April to September 2025.' },
  { date: '2023', label: 'EDUCATION', title: 'MSITA Web Development Course', place: 'College of Cape Town', body: 'Formal training in web development fundamentals.' }
];

const groups = [
  { number: '01', title: 'Creative practice', note: 'The design side', tags: ['Graphic design', 'Brand identity', 'Typography', 'Visual storytelling', 'UI/UX', 'Photoshop', 'Figma'] },
  { number: '02', title: 'Development', note: 'The build side', tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive UI', 'Git & GitHub'] },
  { number: '03', title: 'My approach', note: 'The connecting thread', tags: ['Creative problem-solving', 'Detail-led design', 'Continuous learning', 'User-centred thinking', 'Design-to-code'] }
];

function Star({ className = '' }) {
  return <span aria-hidden="true" className={'star-symbol ' + className}>✳</span>;
}

function Flower({ className = '' }) {
  return (
    <svg viewBox="0 0 130 210" className={'flower-svg ' + className} fill="none" aria-hidden="true">
      <path d="M65 207 C60 152 54 114 32 49 M65 207 C73 157 80 112 108 39 M64 188 C55 158 37 135 13 116" stroke="#808363" strokeWidth="2.1" strokeLinecap="round" />
      {[ [31,43],[108,34],[11,111],[50,85],[82,89],[76,136] ].map(([x,y],i) =>
        <g key={i} transform={'translate(' + x + ' ' + y + ')'}>
          <circle r="12" fill="#F7F0E4"/>
          {[0,72,144,216,288].map(a=><ellipse key={a} cx="0" cy="-9" rx="5.2" ry="9.2" transform={'rotate(' + a + ')'} fill="#E8E2CE" stroke="#D0C6AB" strokeWidth=".7"/>)}
          <circle r="4.2" fill="#9A7C52"/>
        </g>
      )}
      <path d="M59 167 C39 152 35 143 33 137 C48 138 58 148 59 167ZM73 153 C87 131 98 128 102 126 C95 143 87 150 73 153Z" fill="#8D9877" opacity=".7"/>
    </svg>
  );
}

function Artwork({ variant, compact = false }) {
  return (
    <div className={'artwork artwork-' + variant + (compact ? ' artwork-compact' : '')} aria-hidden="true">
      {variant === 'motors' && <><div className="art-top">B / MOTORS <span>EST. 2025</span></div><div className="art-center"><span>BEEMERGHINI</span><strong>DRIVEN BY DESIGN.</strong><div className="car-silhouette">◢━━━━━━◣</div></div><div className="art-bottom">DISCOVER THE COLLECTION <ArrowUpRight size={13}/></div></>}
      {variant === 'customizer' && <><div className="art-top">B M W <span>CONFIGURATOR</span></div><div className="car-orbit"><span>◢ ▰▰ ◣</span></div><div className="art-controls"><i/><i/><i/><i/></div><div className="art-bottom">DESIGN YOUR DRIVE <ArrowRight size={13}/></div></>}
      {variant === 'dashboard' && <><div className="art-dashboard-sidebar"><div className="dash-logo">S.</div><span/><span/><span/><span/></div><div className="art-dashboard-main"><small>Good morning, student ✳</small><div className="dash-heading"/><div className="dash-metrics"><i/><i/><i/></div><div className="dash-rows"><i/><i/><i/></div></div></>}
      {variant === 'auto' && <><div className="art-top">AUTO STALLION <span>DETAILING</span></div><div className="auto-rings"><span>AS</span></div><div className="art-bottom">THE ART OF DETAILING <ArrowUpRight size={13}/></div></>}
      {variant === 'sun' && <><div className="sunmark"><span>◒</span><span className="sun-leaf">✳</span></div><div className="sun-name">sun eco</div><div className="sun-caption">EXPLORE MORE, LEAVE LESS.</div></>}
      {variant === 'archive' && <><div className="archive-side">ARCHIVE / N° 06</div><div className="archive-photo"><div className="archive-sun"/></div><div className="archive-name">Stories worth<br/><em>keeping.</em></div></>}
    </div>
  );
}

function SectionTitle({ number, eyebrow, title, italic, intro, light = false }) {
  return (
    <div className={'section-title' + (light ? ' section-title-light' : '')} data-reveal>
      <div className="section-kicker"><span>{number} / THE COLLECTION</span><span className="kicker-rule"/></div>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title} {italic && <em>{italic}</em>}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function DecorativeStamp({ className = '', text = 'RS / 26' }) {
  return <div className={'deco-stamp ' + className} aria-hidden="true"><Star/><small>{text}</small></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" id="top">
      <div className="header-inner page-shell">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Raeesa Samaai, back to top">
          <span className="brand-mark"><img src="./sr-mark.svg" alt="" /></span>
          <span className="brand-text"><strong>Raeesa Samaai</strong><small>DESIGNER & DEVELOPER</small></span>
        </a>
        <nav className={'navigation ' + (open ? 'navigation-open' : '')} aria-label="Primary navigation">
          {[
            ['Work', '#work'], ['Skills', '#skills'], ['Journey', '#journey'], ['About', '#about'], ['Contact', '#contact']
          ].map(([name,url]) => <a href={url} key={name} onClick={() => setOpen(false)}>{name}</a>)}
        </nav>
        <a className="header-contact" href="#contact">Let's connect <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero paper-surface">
      <div className="hero-grain" aria-hidden="true"/>
      <div className="page-shell hero-inner">
        <div className="hero-copy" data-reveal>
          <div className="torn-label"><span className="status-dot"/> OPEN TO CREATIVE OPPORTUNITIES <span className="status-star">✳</span></div>
          <div className="hero-overline">HELLO, I'M RAEESA SAMAAI <span>↗</span></div>
          <h1>Designer,<br/>developer <span className="amp">&</span><br/><em>visual storyteller.</em></h1>
          <p className="hero-description">I blend graphic design with modern web development to create thoughtful digital experiences — where every detail has a purpose and every idea has a story.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-outline" href="#about">A little about me <ArrowRight size={17}/></a>
          </div>
          <div className="hero-caption"><span className="caption-line"/> A CREATIVE COLLECTION, MADE WITH CARE.</div>
        </div>
        <div className="hero-collage" aria-label="Decorative scrapbook collage showing a selection of design and development projects" data-reveal>
          <div className="collage-letter" aria-hidden="true"><span>RAEESA'S</span><strong>creative archive.</strong><small>VOL. 01 — 2026</small></div>
          <div className="hero-polaroid polaroid-one"><div className="masking-tape tape-one"/><div className="polaroid-window"><Artwork variant="sun" compact/></div><span className="photo-caption">design in the details <Heart size={11}/></span></div>
          <div className="hero-polaroid polaroid-two"><div className="polaroid-window"><Artwork variant="motors" compact/></div><span className="photo-caption">001 — selected work</span><Paperclip className="polaroid-clip" size={36} strokeWidth={1.5}/></div>
          <div className="collage-postcard">POSTE <span>20¢</span><Star/><small>CREATIVE STUDIO</small></div>
          <div className="collage-film"><i/><i/><i/></div>
          <div className="collage-flower"><Flower/><span className="masking-tape flower-tape"/></div>
          <div className="wax-seal" aria-hidden="true"><Star/></div>
          <span className="collage-annotation">ideas worth keeping ↗</span>
        </div>
      </div>
      <div className="hero-footer page-shell"><span>BASED IN CAPE TOWN, SOUTH AFRICA</span><a href="#work">SCROLL TO EXPLORE <ArrowDown size={15}/></a><span>01 / 07</span></div>
    </section>
  );
}

function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    if (!selected) return;
    const onKey = e => { if (e.key === 'Escape') setSelected(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);
  const shown = activeFilter === 'All' ? projects : projects.filter(p => p.type === activeFilter);
  return (
    <section id="work" className="work-section section-pad">
      <div className="page-shell">
        <div className="work-heading-row">
          <SectionTitle number="01" eyebrow="A LITTLE OF WHAT I DO" title="Selected" italic="work." intro="A curated collection of projects from both sides of my creative practice: designing the experience and bringing it to life."/>
          <DecorativeStamp className="stamp-work" text="HAND PICKED"/>
        </div>
        <div className="filter-row">
          <div className="filters" role="group" aria-label="Filter work by discipline">
            {['All', 'Development', 'Design', 'UI/UX'].map(f => <button type="button" className={activeFilter === f ? 'filter-pill active' : 'filter-pill'} onClick={() => setActiveFilter(f)} key={f}>{f}</button>)}
          </div>
          <span className="archive-count">{String(shown.length).padStart(2,'0')} PROJECTS IN VIEW</span>
        </div>
        <div className="project-grid">
          {shown.map((p,i) => <button type="button" className={'project-card project-card-' + p.art} key={p.id} onClick={() => setSelected(p)} aria-label={'View details about ' + p.title}>
            <div className="project-visual">
              <span className="project-corner">{p.year}</span>
              <Artwork variant={p.art}/>
              <span className="project-open-icon"><ArrowUpRight size={19}/></span>
            </div>
            <div className="project-meta"><span>{p.category}</span><span className="project-index">ARCHIVE / {String(i+1).padStart(2,'0')}</span></div>
            <div className="project-title-line"><h3>{p.title}</h3><ArrowUpRight size={22}/></div>
          </button>)}
        </div>
        <div className="section-endnote">✳ A mix of actual projects and stylised mock preview artwork. <a href="https://github.com/raeesasamaai" target="_blank" rel="noreferrer">More work on GitHub <ArrowUpRight size={13}/></a></div>
      </div>
      {selected && <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}><div className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title"><button className="dialog-close" onClick={()=>setSelected(null)} aria-label="Close project details"><X size={20}/></button><span className="micro-label">COLLECTED WORK / PROJECT NOTES</span><Artwork variant={selected.art}/><span className="project-kind">{selected.category}</span><h3 id="project-dialog-title">{selected.title}</h3><p>{selected.description}</p><div className="dialog-tags">{selected.tech.map(t=><span key={t}>{t}</span>)}</div>{selected.url ? <a href={selected.url} className="button button-primary" target="_blank" rel="noreferrer">Visit live project <ExternalLink size={16}/></a> : <p className="dialog-disclaimer">Detailed case study / portfolio link to be added.</p>}</div></div>}
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section section-pad">
      <div className="page-shell">
        <SectionTitle number="02" eyebrow="TOOLS OF THE TRADE" title="Creative thinking," italic="technical making." intro="Different disciplines, one connected practice. Here's a snapshot of the tools and approaches behind the work."/>
        <div className="skill-board">
          {groups.map((g,i)=><article className={'skill-paper skill-paper-' + (i+1)} key={g.title} data-reveal>
            <span className="skill-paper-tape"/>
            <div className="skill-paper-top"><span>FIELD NOTE / {g.number}</span><Star/></div>
            <h3>{g.title}</h3><p>{g.note}</p>
            <div className="skill-tags">{g.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
            <div className="skill-paper-foot">RAEESA SAMAAI • CREATIVE ARCHIVE</div>
          </article>)}
        </div>
        <p className="skills-footnote">A working overview for this mockup — specific skill levels and tools can be refined before launch.</p>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="journey-section section-pad">
      <div className="page-shell journey-layout">
        <div className="journey-intro">
          <SectionTitle number="03" eyebrow="WHERE I'VE BEEN" title="My" italic="journey." intro="A collection of experiences, lessons and milestones that continue to shape the way I design and build." light/>
          <div className="journey-note"><span>NOTE TO SELF ✳</span><p>Never stop being curious.</p><small>the journey is just getting started.</small></div>
          <Flower className="journey-flower"/>
        </div>
        <div className="timeline">
          {experience.map((item,i)=><article className="timeline-item" key={item.title} data-reveal><div className="timeline-marker"/><div className="timeline-head"><span>{item.date}</span><span>{item.label}</span></div><h3>{item.title}</h3><h4>{item.place}</h4><p>{item.body}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section section-pad">
      <div className="page-shell about-layout">
        <div className="about-visual" data-reveal>
          <div className="about-sheet-back"/>
          <div className="about-letter"><div className="about-letter-top"><span>PERSONAL NOTE</span><span>NO. 04 / 07</span></div><div className="letter-flourish">Dear visitor,</div><p>Good design makes you feel something.<br/>Good development makes it work.<br/>I love where the two meet.</p><div className="letter-sign">Raeesa <Heart size={17}/></div><div className="letter-bottom">SOMEWHERE BETWEEN DESIGN & CODE</div></div>
          <div className="about-tape"/>
          <div className="about-seal"><Star/></div>
          <div className="about-stamp">MADE<br/>WITH<br/>CARE.</div>
        </div>
        <div className="about-copy">
          <SectionTitle number="04" eyebrow="THE PERSON BEHIND THE PIXELS" title="A little" italic="about me." intro="I'm Raeesa Samaai, a Cape Town-based graphic designer and web developer with a soft spot for intentional details, expressive visuals, and digital experiences that feel human."/>
          <p>I enjoy bringing a designer's eye to development — thinking about how something looks, how it feels, and how people interact with it. For me, the best creative work balances imagination with clarity.</p>
          <p>This website is a small example of that philosophy: a modern portfolio with the charm of a thoughtfully collected scrapbook.</p>
          <a href="#contact" className="text-arrow">Let's make something together <ArrowUpRight size={18}/></a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="kind-words" className="testimonials-section section-pad">
      <div className="page-shell">
        <div className="testimonial-title-row"><SectionTitle number="05" eyebrow="THOUGHTS FROM OTHERS" title="Kind" italic="words." intro="A place for professional reflections from the people I've worked with and learned from."/><div className="quote-doodle" aria-hidden="true">“</div></div>
        <div className="testimonial-grid">
          {[
            {title:'From a colleague',hint:'Teamwork & collaboration',style:'a'},
            {title:'From a client',hint:'Creativity & delivery',style:'b'},
            {title:'From a mentor',hint:'Growth & initiative',style:'c'}
          ].map((t,i)=><article className={'testimonial-note testimonial-' + t.style} key={i} data-reveal><span className="review-index">NOTE 0{i+1} / TESTIMONIAL</span><div className="review-quote">“</div><p>Verified testimonial to be added here.</p><div className="review-divider"/><span className="review-name">{t.title}</span><small>{t.hint}</small><span className="review-placeholder">CONTENT PLACEHOLDER</span></article>)}
        </div>
        <p className="testimonial-foot">These are intentionally labelled placeholders — no testimonials have been invented.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section section-pad">
      <div className="page-shell contact-layout">
        <div className="contact-left">
          <div className="section-kicker"><span>06 / THE COLLECTION</span><span className="kicker-rule"/></div>
          <span className="section-eyebrow">THE NEXT CHAPTER</span>
          <h2>Have an idea?<br/><em>Let's make it real.</em></h2>
          <p>Whether it's a creative collaboration, a role, or simply a conversation — I'd love to hear from you.</p>
          <div className="contact-actions"><a href="https://www.linkedin.com/in/raeesa-samaai-831081312/" target="_blank" rel="noreferrer" className="button button-primary">Connect on LinkedIn <ArrowUpRight size={17}/></a><a href="https://github.com/raeesasamaai" target="_blank" rel="noreferrer" className="button button-outline">Explore GitHub <Github size={17}/></a></div>
          <small className="contact-hint">A direct email address and downloadable résumé can be added when finalised.</small>
        </div>
        <div className="contact-envelope" aria-hidden="true">
          <span className="contact-postmark">RAEESA SAMAAI<br/>CREATIVE STUDIO<br/>CAPE TOWN, SA</span>
          <div className="envelope-base"><span className="envelope-back"/><span className="envelope-front"/><span className="envelope-letter"><span>LET'S <em>CONNECT.</em></span><small>an invitation to create</small></span><span className="envelope-seal"><Star/></span></div>
          <div className="envelope-leaf"><Flower/></div>
          <div className="envelope-stamp"><Star/><span>20¢</span></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="page-shell footer-top"><a className="footer-brand" href="#home"><img src="./sr-mark.svg" alt=""/><span>Raeesa Samaai<br/><small>DESIGNER & DEVELOPER</small></span></a><p>A collection of design, code & everything in between.</p><a href="#top" className="back-to-top">BACK TO TOP ↑</a></div><div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} RAEESA SAMAAI. MADE WITH INTENTION.</span><span>CAPE TOWN • SOUTH AFRICA</span><span>END OF COLLECTION ✳</span></div></footer>;
}

function App() {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });
    items.forEach(el => { el.classList.add('has-reveal'); observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return <><Header/><main><Hero/><Work/><Skills/><Journey/><About/><Testimonials/><Contact/></main><Footer/></>;
}

export default App;
