import { profile } from '../data/content'
import TextType from './TextType'
import { useMagnetic, useParallax } from '../hooks/useInteractions'

export default function Hero() {
  const primaryRef = useMagnetic(0.25)
  const ghostRef = useMagnetic(0.15)
  const orb1Ref = useParallax(0.08)
  const orb2Ref = useParallax(-0.06)

  return (
    <section id="hero" className="hero">
      {/* === 背景层 === */}
      <div className="hero__bg">
        <div className="grid-bg" />
        <div ref={orb1Ref} className="glow-orb" style={{ width: 700, height: 700, top: '10%', right: '-15%', background: 'radial-gradient(circle, rgba(91, 141, 239, 0.15), transparent 60%)' }} />
        <div ref={orb2Ref} className="glow-orb" style={{ width: 600, height: 600, bottom: '-20%', left: '-10%', background: 'radial-gradient(circle, rgba(94, 234, 212, 0.08), transparent 60%)' }} />
      </div>

      <div className="container hero__inner">
        {/* === 顶部状态条 === */}
        <div className="hero__topbar">
          <div className="hero__topbar-left">
            <span className="hero__status">
              <span className="hero__status-dot" />
              <span>AVAILABLE · 2026</span>
            </span>
            <span className="hero__divider-dot" />
            <span className="hero__date mono">JUL · 29 · 2026</span>
          </div>
          <div className="hero__topbar-right">
            <span className="hero__label mono">PORTFOLIO.2026</span>
          </div>
        </div>

        {/* === 主标题区 === */}
        <div className="hero__main">
          <div className="hero__pretitle">
            <span className="hero__tag mono">TECHNICAL · SERVICE · SUPPORT</span>
            <span className="hero__tagline-rule" />
            <span className="hero__tag-mono mono">No. 001 / 005</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-cn">{profile.name}</span>
            <span className="hero__title-en mono">— &nbsp;{profile.nameEn}</span>
          </h1>

          <p className="hero__lead">
            <em className="hero__lead-em">{profile.role}</em>
            <span className="hero__lead-sep">/</span>
            <span className="hero__lead-text">
              <TextType
                text={[
                  '以工程技术驱动问题解决。',
                  '为复杂场景提供精准支持。',
                  '将理论研究转化为落地方案。',
                  '跨学科技术，构建解决能力矩阵。'
                ]}
                as="span"
                typingSpeed={70}
                deletingSpeed={35}
                pauseDuration={1800}
                showCursor={true}
                cursorCharacter="▌"
                cursorBlinkDuration={0.7}
                loop={true}
              />
            </span>
          </p>

          <div className="hero__actions">
            <a ref={primaryRef} href="#projects" className="hero__btn hero__btn--primary">
              <span>查看项目 · VIEW PROJECTS</span>
              <span className="hero__btn-arrow">→</span>
            </a>
            <a ref={ghostRef} href="#contact" className="hero__btn hero__btn--ghost">
              <span>联系我</span>
              <span className="hero__btn-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* === 底部信息条 === */}
        <div className="hero__meta">
          <div className="hero__meta-block">
            <span className="hero__meta-label mono">EDU</span>
            <span className="hero__meta-value">天津大学 · 硕士（保研）</span>
          </div>
          <div className="hero__meta-block">
            <span className="hero__meta-label mono">FOCUS</span>
            <span className="hero__meta-value">工程仿真 · 计算机视觉 · 研究</span>
          </div>
          <div className="hero__meta-block">
            <span className="hero__meta-label mono">BASE</span>
            <span className="hero__meta-value">{profile.location}</span>
          </div>
          <div className="hero__meta-block">
            <span className="hero__meta-label mono">STATUS</span>
            <span className="hero__meta-value hero__meta-value--hl">接收机会</span>
          </div>
        </div>
      </div>

      {/* === 滚动指示 === */}
      <div className="hero__scroll">
        <span className="mono">SCROLL ↓</span>
        <div className="hero__scroll-bar">
          <div className="hero__scroll-bar-fill" />
        </div>
      </div>
    </section>
  )
}
