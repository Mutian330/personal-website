import { profile } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useMagnetic, useParallax } from '../hooks/useInteractions'
import HoverType from './HoverType'

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const emailRef = useMagnetic(0.2)
  const orb1Ref = useParallax(0.1)
  const orb2Ref = useParallax(-0.08)

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__bg">
        <div className="grid-bg" />
        <div ref={orb1Ref} className="glow-orb" style={{ width: 800, height: 800, top: '20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(91, 141, 239, 0.12), transparent 60%)' }} />
        <div ref={orb2Ref} className="glow-orb" style={{ width: 600, height: 600, bottom: '-10%', right: '10%', background: 'radial-gradient(circle, rgba(94, 234, 212, 0.06), transparent 60%)' }} />
      </div>

      <div className="container contact__inner">
        {/* 顶部章节标记 */}
        <div className={`contact__head reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <span className="section-tag__num">05</span>
            <span className="section-tag__line" />
            <span>GET IN TOUCH · 联系方式</span>
          </div>
        </div>

        {/* === 巨型 CTA 标题 === */}
        <div className="contact__cta">
          <h2 className={`contact__title reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="contact__title-line">让我们</span>
            <span className="contact__title-line"><em className="serif">开始</em></span>
            <span className="contact__title-line contact__title-line--accent">合作。</span>
          </h2>
          <p className={`contact__lead reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            如果您有 <em className="serif">技术合作</em>、<em className="serif">项目咨询</em> 或 <em className="serif">岗位机会</em>，<br />
            欢迎随时联系 — 期待与您共同探索工程技术的更多可能。
          </p>
        </div>

        {/* === 联系方式网格 === */}
        <div className={`contact__grid reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          {/* 主 CTA — Email */}
          <a ref={emailRef} href={`mailto:${profile.email}`} className="contact__email">
            <div className="contact__email-top">
              <span className="mono contact__email-label">PRIMARY · 优先联系</span>
              <span className="contact__email-arrow" aria-hidden>↗</span>
            </div>
            <span className="contact__email-addr">{profile.email}</span>
            <span className="contact__email-foot mono">
              <HoverType
                text="点击发送邮件 →"
                placeholder="点击发送邮件"
                typingSpeed={80}
                showCursor={true}
                cursorCharacter="_"
                cursorBlinkDuration={0.4}
              />
            </span>
          </a>

          {/* 电话 */}
          <div className="contact__item">
            <span className="mono contact__item-label">PHONE</span>
            <span className="contact__item-val">
              <HoverType
                text={profile.phone}
                placeholder={profile.phone}
                typingSpeed={60}
                showCursor={true}
                cursorCharacter="_"
                cursorBlinkDuration={0.4}
              />
            </span>
          </div>

          {/* 地址 */}
          <div className="contact__item">
            <span className="mono contact__item-label">BASE</span>
            <span className="contact__item-val">
              <HoverType
                text={profile.location}
                placeholder={profile.location}
                typingSpeed={70}
                showCursor={true}
                cursorCharacter="_"
                cursorBlinkDuration={0.4}
              />
            </span>
          </div>

          {/* 状态 */}
          <div className="contact__item contact__item--featured">
            <span className="mono contact__item-label">STATUS</span>
            <span className="contact__item-val">
              <span className="contact__status-dot" />
              接收机会
            </span>
          </div>
        </div>

        {/* === 底部声明 === */}
        <div className={`contact__footer reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <div className="contact__footer-row">
            <span className="mono contact__footer-cell">© 2026</span>
            <span className="contact__footer-cell contact__footer-cell--lg">{profile.name}</span>
            <span className="mono contact__footer-cell contact__footer-cell--r">{profile.role.toUpperCase()}</span>
          </div>
          <div className="contact__footer-row">
            <span className="mono contact__footer-cell contact__footer-cell--muted">BUILT WITH</span>
            <span className="contact__footer-cell contact__footer-cell--lg">{profile.nameEn}</span>
            <span className="mono contact__footer-cell contact__footer-cell--r contact__footer-cell--muted">REACT + VITE</span>
          </div>
          <div className="contact__footer-end">
            <span className="mono">END · 终</span>
          </div>
        </div>
      </div>
    </section>
  )
}
