import { profile, stats, skills, honors } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useInteractions'
import HoverType from './HoverType'

function Counter({ value, label, sub }) {
  // 解析数字部分和后缀（如 "3+" → num=3, suffix="+"）
  const match = value.match(/^(\d+)(.*)$/)
  const num = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''

  const { ref, displayValue } = useCountUp(num, 1600)

  return (
    <div ref={ref} className="stat is-visible">
      <span className="stat__value">{displayValue}{suffix}</span>
      <div className="stat__info">
        <span className="stat__label">{label}</span>
        <span className="stat__sub">{sub}</span>
      </div>
    </div>
  )
}

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        {/* ===== 顶部章节标记 ===== */}
        <div className={`about__head reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <span className="section-tag__num">01</span>
            <span className="section-tag__line" />
            <span>ABOUT ME · 关于我</span>
          </div>
          <h2 className="section-title">
            个人<span className="section-title--serif">简历</span>。
          </h2>
        </div>

        {/* ===== 引言 + 数据区 ===== */}
        <div className="about__top">
          <div className={`about__intro reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="about__intro-mark serif">"</span>
            <p className="about__intro-text">
              {profile.intro}
            </p>
            <div className="about__intro-name">
              <span className="about__intro-name-cn">{profile.name}</span>
              <span className="about__intro-name-line" />
              <span className="about__intro-name-en mono">JIA MUTIAN</span>
            </div>
          </div>

          {/* 数据栏 */}
          <div className={`about__stats reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            {stats.map((s, i) => (
              <Counter key={i} value={s.value} label={s.label} sub={s.sub} />
            ))}
          </div>
        </div>

        {/* ===== 主体三栏 ===== */}
        <div className="about__grid">
          {/* 左侧：头像与基本信息 */}
          <aside className={`about__side reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            <div className="about__avatar-frame">
              <div className="about__avatar-frame-top">
                <span className="mono">IMG · 01</span>
                <span className="mono">{profile.nameEn}</span>
              </div>
              <div className="about__avatar">
                <picture>
                  <source srcSet="/images/avatar.webp" type="image/webp" />
                  <img
                    className="about__avatar-img"
                    src="/images/avatar-sm.jpg"
                    alt="贾木天证件照"
                    width="720"
                    height="1008"
                    loading="lazy"
                  />
                </picture>
                <span className="about__avatar-glow" />
                <span className="about__avatar-grid" />
              </div>
              <div className="about__avatar-frame-bottom">
                <span className="mono">FRONT · VIEW</span>
                <span className="mono">2026</span>
              </div>
            </div>

            <div className="about__info">
              <div className="about__info-row">
                <span className="about__info-key mono">NAME</span>
                <span className="about__info-val">{profile.name}</span>
              </div>
              <div className="about__info-row">
                <span className="about__info-key mono">AGE</span>
                <span className="about__info-val">{profile.age} 岁 / 男</span>
              </div>
              <div className="about__info-row">
                <span className="about__info-key mono">LOC</span>
                <span className="about__info-val">{profile.location}</span>
              </div>
              <div className="about__info-row">
                <span className="about__info-key mono">PHONE</span>
                <span className="about__info-val">{profile.phone}</span>
              </div>
              <div className="about__info-row">
                <span className="about__info-key mono">MAIL</span>
                <span className="about__info-val">{profile.email}</span>
              </div>
            </div>
          </aside>

          {/* 右侧：教育 + 技能 */}
          <div className={`about__main reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            {/* 教育时间轴 */}
            <div className="about__section">
              <h3 className="about__section-title">
                <span className="mono about__section-num">EDU</span>
                <span>教育背景</span>
                <span className="about__section-line" />
              </h3>
              <div className="about__timeline">
                {profile.education.map((edu, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-item__marker">
                      <span className="timeline-item__dot" />
                      <span className="timeline-item__line" />
                    </div>
                    <div className="timeline-item__content">
                      <span className="timeline-item__period mono">{edu.period}</span>
                      <h4 className="timeline-item__school">{edu.school}</h4>
                      <span className="timeline-item__major">{edu.major}</span>
                      <p className="timeline-item__courses">{edu.courses}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 技能特长 */}
            <div className="about__section">
              <h3 className="about__section-title">
                <span className="mono about__section-num">SKL</span>
                <span>技能特长</span>
                <span className="about__section-line" />
              </h3>
              <div className="about__skills">
                {skills.map((s, i) => (
                  <div key={i} className="skill">
                    <span className="skill__cat mono">{s.category}</span>
                    <span className="skill__name">
                      <HoverType
                        text={s.name}
                        placeholder={s.name}
                        typingSpeed={80}
                        showCursor={true}
                        cursorCharacter="_"
                        cursorBlinkDuration={0.4}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 荣誉证书 */}
            <div className="about__section">
              <h3 className="about__section-title">
                <span className="mono about__section-num">AWD</span>
                <span>荣誉证书</span>
                <span className="about__section-line" />
              </h3>
              <ul className="about__honors">
                {honors.slice(0, 8).map((h, i) => (
                  <li key={i} className="about__honor">
                    <span className="about__honor-num mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="about__honor-text">
                      <HoverType
                        text={h}
                        placeholder={h}
                        typingSpeed={40}
                        showCursor={true}
                        cursorCharacter="_"
                        cursorBlinkDuration={0.4}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
