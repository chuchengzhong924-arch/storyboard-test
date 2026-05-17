import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="page">
      <section className="home-section page-hero" aria-labelledby="contact-title">
        <div className="home-section-head">
          <h2 id="contact-title">联系我们</h2>
          <p>欢迎影视机构、文旅品牌、科技企业、院校实验室、广告客户与国际发行伙伴洽谈 AI 电影制作和数字内容开发合作。</p>
        </div>
        <div className="contact-card">
          <article className="info-panel"><h3>公司地址</h3><p>江苏省苏州市青秀大厦1501。</p></article>
          <article className="info-panel"><h3>合作方向</h3><p>AI电影制作、分镜预演、数字内容开发、历史与文化题材样片、品牌影像和国际项目协作。</p></article>
        </div>
      </section>

      <section className="home-section" aria-labelledby="partners-title">
        <div className="home-section-head">
          <h2 id="partners-title">合作企业</h2>
          <p>合作方向覆盖内容出品、技术研发、影视教育、文旅 IP、品牌影像和海外发行，适合共同孵化 AI 电影样片与系列项目。</p>
        </div>
        <div className="partner-strip" aria-label="合作企业类型">
          <span>影视出品机构</span><span>AI技术平台</span><span>文旅与文化品牌</span><span>院校与实验室</span><span>广告与品牌客户</span><span>国际发行伙伴</span>
        </div>
        <div className="split-actions">
          <Link className="primary-action" to="/ai-film">查看制作服务</Link>
          <Link className="ghost-action" to="/cases">查看作品案例</Link>
        </div>
      </section>
    </main>
  );
}
