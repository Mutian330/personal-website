import { blogPosts } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTilt } from '../hooks/useInteractions'
import HoverType from './HoverType'

function BlogCard({ post, index, isVisible }) {
  const { ref, handleMove, handleLeave } = useTilt(5)

  return (
    <article
      ref={ref}
      className={`blog-card reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="blog-card__visual">
        <div className="blog-card__visual-bg" style={{ background: post.gradient }} />
        <div className="blog-card__visual-grid" />
        <span className="blog-card__visual-category mono">{post.category}</span>
        <span className="blog-card__visual-date mono">{post.date}</span>
      </div>

      <div className="blog-card__body">
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <div className="blog-card__footer">
          <div className="blog-card__meta">
            <span className="mono">{post.date}</span>
            <span>·</span>
            <span className="mono">{post.readTime}</span>
          </div>
          <span className="blog-card__link">
            <HoverType
              text="阅读 →"
              placeholder="→"
              typingSpeed={80}
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

export default function Blog() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="blog" className="blog" ref={ref}>
      <div className="container">
        {/* 顶部 */}
        <div className={`blog__head reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-tag">
            <span className="section-tag__num">03</span>
            <span className="section-tag__line" />
            <span>BLOG · 研究笔记</span>
          </div>
          <div className="blog__head-row">
            <h2 className="section-title">
              <em className="section-title--serif">研究</em>笔记。
              <br />
              <span className="blog__head-sub">学术研究 · 工程实践 · 技术随笔</span>
            </h2>
          </div>
        </div>

        {/* Blog 卡片网格 */}
        <div className="blog__grid">
          {blogPosts.map((post, i) => (
            <BlogCard
              key={post.id}
              post={post}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}