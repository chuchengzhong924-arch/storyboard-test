import { Link } from 'react-router-dom';
import { backgroundImage } from '../assets.js';

export default function Home() {
  return (
    <main className="site-home">
      <section className="home-hero" style={backgroundImage('scene-14.png')} aria-labelledby="company-title">
        <div>
          <p className="kicker">International AI Film Studio</p>
          <h1 id="company-title" className="home-title">万影节拍数字有限公司</h1>
          <p className="home-lead">一家面向国际市场的 AI 电影制作公司，融合剧本开发、视觉预演、分镜生成、虚拟拍摄与后期流程，为历史、科幻、品牌影像和商业短片提供从创意到成片的数字化制作能力。</p>
          <div className="home-actions">
            <Link className="primary-action" to="/ai-film">进入 AI 电影制作</Link>
            <Link className="ghost-action" to="/about">了解公司</Link>
          </div>
          <div className="home-stats" aria-label="公司能力概览">
            <div className="home-stat"><strong>AI影像</strong><span>创意到成片流程</span></div>
            <div className="home-stat"><strong>国际化</strong><span>面向全球项目协作</span></div>
            <div className="home-stat"><strong>苏州</strong><span>青秀大厦1501</span></div>
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="category-title">
        <div className="home-section-head">
          <h2 id="category-title">五大页面</h2>
          <p>首页作为品牌入口，AI电影制作、公司介绍、作品案例与联系我们均改为独立页面路由；点击导航栏会进入新页面，而不是在单页内滚动定位。</p>
        </div>
        <div className="category-grid">
          <Link className="category-card ai" style={backgroundImage('scene-09.png')} to="/ai-film"><small>01 / Production</small><h3>AI电影制作</h3><p>从概念设定、剧本拆解到分镜预演，快速形成可沟通、可拍摄、可迭代的电影项目方案。</p><span>查看项目</span></Link>
          <Link className="category-card company" style={backgroundImage('scene-06.png')} to="/about"><small>02 / Company</small><h3>公司介绍</h3><p>以 AI 影像技术连接导演、编剧、美术、剪辑和制片管理，建立新一代影视生产管线。</p><span>查看详情</span></Link>
          <Link className="category-card partners" style={backgroundImage('scene-13.png')} to="/cases"><small>03 / Cases</small><h3>作品案例</h3><p>以《文天祥：丹心照汗青》为代表，展示历史先导片的镜头设计、视觉节奏与情绪推进。</p><span>查看案例</span></Link>
          <Link className="category-card founder" style={backgroundImage('scene-18.png')} to="/contact"><small>04 / Contact</small><h3>联系我们</h3><p>面向影视机构、文旅品牌、科技企业与海外发行伙伴，提供联合开发和项目制片协作。</p><span>联系合作</span></Link>
        </div>
      </section>

      <footer className="home-footer">
        <div><strong>公司地址：</strong>苏州青秀大厦1501</div>
        <div><strong>业务方向：</strong>AI电影制作、分镜预演、数字内容开发、国际项目协作</div>
      </footer>
    </main>
  );
}
