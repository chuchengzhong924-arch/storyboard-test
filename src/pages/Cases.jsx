import { backgroundImage } from '../assets.js';
import { shots } from '../data/shots.js';

export default function Cases() {
  return (
    <main className="page">
      <section className="hero page-hero" style={backgroundImage('scene-20.png')} aria-labelledby="storyboard-title">
        <div>
          <p className="eyebrow">Historical Teaser / 20 Shots</p>
          <h1 id="storyboard-title">文天祥：丹心照汗青</h1>
          <p className="lead">以崖山殉国、赣州举义、元营不拜、土牢正气和柴市赴义为主线，用 20 个镜头建立历史人物的精神弧线。</p>
          <div className="meta-grid" aria-label="作品案例信息">
            <div className="meta-card"><strong>20镜</strong><span>专业分镜板</span></div>
            <div className="meta-card"><strong>历史题材</strong><span>传记史诗先导片</span></div>
            <div className="meta-card"><strong>AI预演</strong><span>镜头情绪与节奏</span></div>
          </div>
        </div>
      </section>

      <div className="section-head">
        <h2>镜头分镜</h2>
        <p>每个镜头包含画面描述、旁白或台词、情绪氛围和建议时长，方便导演、制片、美术和剪辑统一沟通。</p>
      </div>
      <section className="storyboard" aria-label="文天祥20镜分镜列表">
        {shots.map((shot) => (
          <article className="shot-card" key={shot.number}>
            <figure className="shot-media">
              <img src={shot.image} alt={shot.alt} loading="lazy" />
              <span className="number">镜头 {shot.number}</span>
            </figure>
            <div className="shot-body">
              <h3 className="shot-title"><small>Shot {shot.number}</small>{shot.title}</h3>
              <div className="field"><b>画面描述</b><p>{shot.description}</p></div>
              <div className="field"><b>旁白 / 台词</b><p>{shot.narration}</p></div>
              <div className="field"><b>情绪氛围</b><p>{shot.mood}</p></div>
              <div className="duration"><span>建议时长</span><strong>{shot.duration}</strong></div>
            </div>
          </article>
        ))}
      </section>
      <footer><strong>节奏建议：</strong>前四镜以崖山和片名迅速建立“王朝覆灭”的情绪锚点；第五至十四镜回溯文天祥由读诏、倾家、举义到战场的行动弧；第十五至二十镜集中呈现被囚后的不拜、不降、写歌与赴义。配乐可由低频鼓与海浪起，转入战场弦乐，结尾以箫声和白金色晨光收束。</footer>
    </main>
  );
}
