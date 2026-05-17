import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import AiFilm from './pages/AiFilm.jsx';
import About from './pages/About.jsx';
import Cases from './pages/Cases.jsx';
import Contact from './pages/Contact.jsx';
import { assetBackground } from './utils/assetUrl.js';

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

const imageVars = {
  '--home-hero-image': assetBackground('scene-14.png'),
  '--category-ai-image': assetBackground('scene-09.png'),
  '--category-company-image': assetBackground('scene-06.png'),
  '--category-partners-image': assetBackground('scene-13.png'),
  '--category-founder-image': assetBackground('scene-18.png'),
  '--page-hero-image': assetBackground('scene-20.png'),
};

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <div className="app-shell" style={imageVars}>
        <div className="page-shell">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-film" element={<AiFilm />} />
            <Route path="/about" element={<About />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
