import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: '首页' },
  { to: '/ai-film', label: 'AI电影制作' },
  { to: '/about', label: '公司介绍' },
  { to: '/cases', label: '作品案例' },
  { to: '/contact', label: '联系我们' },
];

export default function Navbar() {
  return (
    <nav className="home-nav" aria-label="公司导航">
      <Link className="brand-mark" to="/" aria-label="万影节拍数字有限公司首页">
        <span className="brand-symbol">W</span>
        <span className="brand-copy">
          <strong>万影节拍数字有限公司</strong>
          <span>AI Film Production</span>
        </span>
      </Link>
      <div className="home-links">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === '/'}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
