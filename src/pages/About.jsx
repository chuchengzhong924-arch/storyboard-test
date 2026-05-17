export default function About() {
  return (
    <main className="page">
      <section className="home-section page-hero" aria-labelledby="about-title">
        <div className="home-section-head">
          <h2 id="about-title">公司介绍</h2>
          <p>万影节拍数字有限公司专注 AI 电影制作，将传统影视的叙事判断与生成式影像的效率结合，帮助项目在早期就获得更完整的视觉方向和制作节奏。</p>
        </div>
        <div className="info-grid">
          <article className="info-panel"><h3>制作能力</h3><p>公司提供故事开发、世界观设定、角色视觉、分镜脚本、动态预演、视觉风格测试和宣发物料生成，适合历史题材、文化题材、短剧、品牌片和国际合拍项目。</p></article>
          <div>
            <article className="info-panel"><h3>工作方式</h3><p>以项目制协作为核心，将导演意图、制片预算、视觉风格和交付周期放在同一套数字化流程中管理。</p></article>
            <article className="info-panel"><h3>公司地址</h3><p>江苏省苏州市青秀大厦1501。</p></article>
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="founder-title">
        <div className="home-section-head">
          <h2 id="founder-title">创始团队理念</h2>
          <p>创始团队以“电影叙事 + AI生产力 + 国际项目管理”为核心，推动影像项目在更短周期内完成概念验证、视觉成型和商业提案。</p>
        </div>
        <article className="info-panel"><h3>团队视角</h3><p>团队相信 AI 不是替代电影创作，而是让创作者更早看到画面、更快验证风格、更准确组织制作资源。万影节拍希望成为连接创意、技术与市场的 AI 电影制作伙伴。</p></article>
      </section>
    </main>
  );
}
