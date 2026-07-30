import { profile, basicInfo, researchDirections, publications, projects, skills, honors, navLinks } from '../data/content'

export default function AcademicPage() {
  return (
    <div className="academic">
      {/* 顶部品牌横条 — 校徽 Logo */}
      <div className="academic-brandbar">
        <div className="academic-brandbar__inner">
          <a href="#profile" className="academic-brandbar__logo-link" aria-label="天津大学">
            <img
              src="/personal-website/images/tju-logo.png"
              alt="天津大学"
              className="academic-brandbar__logo"
            />
          </a>
          <div className="academic-brandbar__text">
            <p className="academic-brandbar__cn">天津大学</p>
            <p className="academic-brandbar__en">Tianjin University</p>
          </div>
        </div>
      </div>

      {/* 顶部导航 */}
      <header className="academic-header">
        <div className="academic-header__inner">
          <a href="#profile" className="academic-header__name">贾木天</a>
          <nav className="academic-header__nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="academic-main">
        {/* 个人简介 */}
        <section id="profile" className="academic-section">
          <div className="academic-profile">
            <div className="academic-profile__photo">
              <img src="/personal-website/images/avatar.jpg" alt="贾木天" />
            </div>
            <div className="academic-profile__info">
              <h1 className="academic-profile__name">{profile.name}</h1>
              <p className="academic-profile__name-en">{profile.nameEn}</p>
              <p className="academic-profile__role">{profile.role}</p>
              <p className="academic-profile__intro">{profile.intro}</p>
            </div>
          </div>
        </section>

        <div className="academic-divider" />

        {/* 基本信息 */}
        <section className="academic-section">
          <h2 className="academic-section__title">基本信息</h2>
          <table className="academic-table">
            <tbody>
              {basicInfo.map(item => (
                <tr key={item.label}>
                  <td className="academic-table__label">{item.label}</td>
                  <td className="academic-table__value">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="academic-divider" />

        {/* 科研方向 */}
        <section id="research" className="academic-section">
          <h2 className="academic-section__title">科研方向</h2>
          <ol className="academic-list">
            {researchDirections.map((dir, i) => (
              <li key={i} className="academic-list__item">
                <span className="academic-list__num">[{i + 1}]</span>
                <span>{dir}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="academic-divider" />

        {/* 教育经历 */}
        <section id="education" className="academic-section">
          <h2 className="academic-section__title">教育经历</h2>
          <ol className="academic-list">
            {profile.education.map((edu, i) => (
              <li key={i} className="academic-list__item academic-list__item--block">
                <span className="academic-list__num">[{i + 1}]</span>
                <div className="academic-list__content">
                  <p className="academic-list__main">
                    <span className="academic-list__school">{edu.school}</span>
                    <span className="academic-list__sep"> | </span>
                    <span>{edu.major}</span>
                  </p>
                  <p className="academic-list__period">{edu.period}</p>
                  <p className="academic-list__courses">主要课程：{edu.courses}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="academic-divider" />

        {/* 科研项目 */}
        <section id="projects" className="academic-section">
          <h2 className="academic-section__title">主持/参与科研项目</h2>
          <ol className="academic-list">
            {projects.map((proj, i) => (
              <li key={proj.id} className="academic-list__item academic-list__item--block">
                <span className="academic-list__num">[{i + 1}]</span>
                <div className="academic-list__content">
                  <p className="academic-list__main academic-list__main--bold">
                    {proj.title}
                  </p>
                  <p className="academic-list__meta">
                    <span>{proj.role}</span>
                    <span className="academic-list__sep"> | </span>
                    <span>{proj.type}</span>
                    <span className="academic-list__sep"> | </span>
                    <span>{proj.period}</span>
                  </p>
                  <p className="academic-list__desc">{proj.description}</p>
                  <p className="academic-list__tags">
                    {proj.highlights.map(h => (
                      <span key={h} className="academic-tag">{h}</span>
                    ))}
                  </p>
                  <p className="academic-list__outcome">成果：{proj.outcome}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="academic-divider" />

        {/* 论文专著 */}
        <section id="publications" className="academic-section">
          <h2 className="academic-section__title">论文专著</h2>
          <p className="academic-section__summary">
            累计发表 SCI 论文 3 篇，普刊 1 篇。代表性论文如下：
          </p>
          <ol className="academic-list">
            {publications.map((pub, i) => (
              <li key={i} className="academic-list__item">
                <span className="academic-list__num">[{i + 1}]</span>
                <span>{pub}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="academic-divider" />

        {/* 专业技能 */}
        <section className="academic-section">
          <h2 className="academic-section__title">专业技能</h2>
          <div className="academic-skills">
            {skills.map(skill => (
              <span key={skill.name} className="academic-skill">
                <span className="academic-skill__name">{skill.name}</span>
                <span className="academic-skill__category">{skill.category}</span>
              </span>
            ))}
          </div>
        </section>

        <div className="academic-divider" />

        {/* 奖励荣誉 */}
        <section id="honors" className="academic-section">
          <h2 className="academic-section__title">奖励荣誉</h2>
          <ol className="academic-list">
            {honors.map((honor, i) => (
              <li key={i} className="academic-list__item">
                <span className="academic-list__num">[{i + 1}]</span>
                <span>{honor}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="academic-divider" />

        {/* 联系方式 */}
        <section id="contact" className="academic-section">
          <h2 className="academic-section__title">联系方式</h2>
          <div className="academic-contact">
            <p className="academic-contact__item">
              <span className="academic-contact__label">电　话：</span>
              <span>{profile.phone}</span>
            </p>
            <p className="academic-contact__item">
              <span className="academic-contact__label">邮　箱：</span>
              <a href={`mailto:${profile.email}`} className="academic-contact__link">{profile.email}</a>
            </p>
            <p className="academic-contact__item">
              <span className="academic-contact__label">地　区：</span>
              <span>{profile.location}</span>
            </p>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="academic-footer">
        <p>© 2026 贾木天 · {profile.role}</p>
        <p className="academic-footer__sub">本页面由 GitHub Pages 托管</p>
      </footer>
    </div>
  )
}
