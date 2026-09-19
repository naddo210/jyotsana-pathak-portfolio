import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ArtistPreloader from './components/ArtistPreloader';
import Home from './pages/Home';
import Work from './pages/Work';
import ArtworkDetail from './pages/ArtworkDetail';
import Practice from './pages/Practice';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <>
      <ArtistPreloader onComplete={() => setPreloaderFinished(true)} />

      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-gallery-100 text-gallery-900 selection:bg-terracotta selection:text-gallery-100">
          <Header />
          
          <main className="flex-grow max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<ArtworkDetail />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}
