import { projects } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTilt } from '../hooks/useInteractions'
import HoverType from './HoverType'

const projectIcons = {
  structural: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.2">
        <line x1="40" y1="50" x2="160" y2="50" />
        <line x1="50" y1="80" x2="150" y2="80" />
        <line x1="60" y1="110" x2="140" y2="110" />
        <line x1="65" y1="140" x2="135" y2="140" />
        <line x1="70" y1="165" x2="130" y2="165" />
        <line x1="60" y1="50" x2="60" y2="165" />
        <line x1="100" y1="50" x2="100" y2="165" />
        <line x1="140" y1="50" x2="140" y2="165" />
        <circle cx="60" cy="65" r="3" fill="currentColor" />
        <circle cx="100" cy="95" r="3" fill="currentColor" />
        <circle cx="140" cy="125" r="3" fill="currentColor" />
      </g>
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.5">
        <circle cx="100" cy="100" r="50" />
        <circle cx="100" cy="100" r="70" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="90" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="6" fill="currentColor" />
        <rect x="60" y="62" width="20" height="14" rx="2" />
        <rect x="120" y="125" width="20" height="14" rx="2" />
        <circle cx="70" cy="69" r="3" fill="currentColor" />
        <circle cx="130" cy="132" r="3" fill="currentColor" />
        <line x1="100" y1="20" x2="100" y2="40" />
        <line x1="100" y1="160" x2="100" y2="180" />
        <line x1="20" y1="100" x2="40" y2="100" />
        <line x1="160" y1="100" x2="180" y2="100" />
      </g>
    </svg>
  ),
  tower: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M85 30 L115 30 L120 170 L80 170 Z" />
        <line x1="90" y1="55" x2="110" y2="55" />
        <line x1="88" y1="80" x2="112" y2="80" />
        <line x1="86" y1="105" x2="114" y2="105" />
        <line x1="84" y1="130" x2="116" y2="130" />
        <line x1="82" y1="155" x2="118" y2="155" />
        <line x1="100" y1="30" x2="100" y2="170" strokeDasharray="3 3" />
        <path d="M85 30 L70 50 M115 30 L130 50" />
        <circle cx="100" cy="100" r="40" strokeDasharray="2 4" />
      </g>
    </svg>
  )
}

function ProjectCard({ project, index, isVisible }) {
  const { ref, handleMove, handleLeave } = useTilt(6)

  return (
    <article
      ref={ref}
      className={`project-card reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="project-card__visual">
        <div className="project-card__visual-bg" style={{ background: project.gradient }} />
        <div className="project-card__visual-grid" />
        <div className="project-card__visual-icon">{projectIcons[project.icon]}</div>
        <span className="project-card__visual-num">{project.id}</span>
        <span className="project-card__visual-tag mono">{project.type}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__role">{project.role}</span>
          <span className="project-card__period mono">{project.period}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__footer">
          <span className="project-card__outcome">
            <span className="serif">✓</span> {project.outcome}
          </span>
          <span className="project-card__link">
            <HoverType
              text="查看详情 →"
              placeholder="详情 →"
              typingSpeed={90}
              showCursor={true}
              cursorCharacter="_"
              cursorBlinkDuration={0.4}
            />
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        {/* 顶部 */}
        <div className={`projects__head reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <span className="section-tag__num">02</span>
            <span className="section-tag__line" />
            <span>SELECTED WORKS · 精选项目</span>
          </div>
          <div className="projects__head-row">
            <h2 className="section-title">
              <em className="section-title--serif">项目</em>经历。
              <br />
              <span className="projects__head-sub">三条核心项目 · 横向与纵向课题</span>
            </h2>
            <span className="projects__count">
              <span className="mono projects__count-num">{String(projects.length).padStart(2, '0')}</span>
              <span className="projects__count-line" />
              <span className="mono projects__count-label">PROJECTS</span>
            </span>
          </div>
        </div>

        {/* === 3 列作品墙 === */}
        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}