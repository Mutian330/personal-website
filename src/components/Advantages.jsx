import { advantages } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import HoverType from './HoverType'

export default function Advantages() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="advantages" className="advantages" ref={ref}>
      <div className="container">
        {/* 顶部 */}
        <div className={`advantages__head reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <span className="section-tag__num">04</span>
            <span className="section-tag__line" />
            <span>CORE STRENGTHS · 个人优势</span>
          </div>
          <h2 className="section-title">
            <em className="section-title--serif">六大</em>核心能力。
          </h2>
          <p className="section-desc">跨学科的技术组合 — 从工程仿真到视觉算法，从学术研究到团队协作，构建解决复杂问题的能力矩阵。</p>
        </div>

        {/* === Bento 网格 === */}
        <div className={`advantages__bento reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
          {advantages.map((item, i) => (
            <article
              key={item.num}
              className={`bento bento--${item.num} ${i === 0 ? 'bento--lg' : ''} ${i === 5 ? 'bento--md' : ''}`}
            >
              <div className="bento__head">
                <span className="bento__num mono">{item.num}</span>
                <span className="bento__rule" />
              </div>
              <h3 className="bento__title">
                <HoverType
                  text={item.title}
                  placeholder={item.title}
                  typingSpeed={70}
                  showCursor={true}
                  cursorCharacter="▌"
                  cursorBlinkDuration={0.5}
                />
              </h3>
              <p className="bento__desc">{item.desc}</p>
              <div className="bento__tags">
                {item.tags.map((tag, j) => (
                  <span key={j} className="bento__tag mono">{tag}</span>
                ))}
              </div>
              {i === 0 && (
                <div className="bento__decor" aria-hidden>
                  <svg viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" />
                    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="100" r="6" fill="currentColor" />
                    <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
              )}
              {i === 3 && (
                <div className="bento__stats">
                  <div className="bento__stat">
                    <span className="bento__stat-num serif">3+</span>
                    <span className="bento__stat-label mono">负责项目</span>
                  </div>
                  <div className="bento__stat">
                    <span className="bento__stat-num serif">3</span>
                    <span className="bento__stat-label mono">SCI 论文</span>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* 底部声明 */}
        <div className={`advantages__statement reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          <span className="advantages__statement-mark serif">"</span>
          <p className="advantages__statement-text">
            <em className="serif">一息尚存</em>，就不断自我革命、自我更新；以工作价值体现人生价值。
          </p>
          <span className="advantages__statement-from">— 贾木天 · 自我评价</span>
        </div>
      </div>
    </section>
  )
}
