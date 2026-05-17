import { Link } from 'react-router-dom';

export default function AiFilm() {
  return (
    <main className="page">
      <section className="hero page-hero" aria-labelledby="ai-film-title">
        <div>
          <p className="eyebrow">AI Movie Projects</p>
          <h1 id="ai-film-title">AI电影制作</h1>
          <p className="lead">用生成式影像与影视制作经验，把剧本、角色、场景、分镜、动态预演和宣发视觉统一到一套可迭代的数字化流程中。</p>
          <div className="meta-grid" aria-label="AI电影制作能力">
            <div className="meta-card"><strong>脚本拆解</strong><span>从故事到镜头表</span></div>
            <div className="meta-card"><strong>视觉预演</strong><span>快速验证风格</span></div>
            <div className="meta-card"><strong>项目协作</strong><span>导演制片同步推进</span></div>
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="workflow-title">
        <div className="home-section-head">
          <h2 id="workflow-title">制作流程</h2>
          <p>保留原有深色电影感视觉风格，将原本弹层中的项目入口升级为独立 AI 电影制作页面。</p>
        </div>
        <div className="feature-list">
          <article className="info-panel"><h3>前期开发</h3><p>梳理题材定位、受众、人物弧光和视觉关键词，建立可供导演、编剧和制片共同讨论的项目基线。</p></article>
          <article className="info-panel"><h3>分镜预演</h3><p>把剧本拆解为镜头节奏，快速生成关键画面、情绪氛围和建议时长，支持反复调整。</p></article>
          <article className="info-panel"><h3>交付扩展</h3><p>围绕样片、路演、宣发海报、角色视觉和海外提案，输出适配不同场景的数字内容资产。</p></article>
        </div>
      </section>

      <section className="home-section" aria-labelledby="project-title">
        <div className="home-section-head">
          <h2 id="project-title">当前项目</h2>
          <p>当前展示一个已完成分镜网页排版的项目。点击项目卡片后进入《文天祥》20 镜专业分镜板。</p>
        </div>
        <Link className="project-link" to="/cases">
          <div className="project-thumb" aria-hidden="true"></div>
          <div className="project-copy">
            <small>Historical Teaser / 20 Shots</small>
            <h3>文天祥：丹心照汗青</h3>
            <p>以崖山殉国、赣州举义、元营不拜、土牢正气和柴市赴义为主线的历史先导片分镜项目。</p>
            <span>进入作品案例</span>
          </div>
        </Link>
      </section>
    </main>
  );
}
