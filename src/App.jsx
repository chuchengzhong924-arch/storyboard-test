import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import AiFilm from './pages/AiFilm.jsx';
import About from './pages/About.jsx';
import Cases from './pages/Cases.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
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
