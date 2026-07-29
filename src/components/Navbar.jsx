import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'
import HoverType from './HoverType'

const linkDescriptions = {
  '#hero': '全屏首页',
  '#about': '个人经历与技能',
  '#projects': '精选项目展示',
  '#blog': '研究笔记与文章',
  '#advantages': '六大核心能力',
  '#contact': '联系方式'
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40)
        const sections = navLinks.map(l => l.href)
        const scrollPos = window.scrollY + 120
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.querySelector(sections[i])
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(sections[i])
            break
          }
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-mark">{profile.name.charAt(0)}</span>
          <span className="nav__logo-text">{profile.name}</span>
          <span className="mono nav__logo-sub">{profile.nameEn}</span>
        </a>

        <ul className="nav__links">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav__link ${activeSection === link.href ? 'nav__link--active' : ''}`}
              >
                <span className="mono nav__link-num">0{i + 1}</span>
                <span className="nav__link-text">
                  <HoverType
                    text={link.label}
                    placeholder={link.label}
                    typingSpeed={80}
                    showCursor={true}
                    cursorCharacter="_"
                    cursorBlinkDuration={0.4}
                    className="nav__link-hover"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav__cta">
          <span className="nav__cta-dot" />
          <span>联系我</span>
        </a>
      </div>
    </nav>
  )
}
