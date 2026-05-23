import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Home } from './pages/Home';
import { Experience } from './pages/Experience';
import { Consulting } from './pages/Consulting';
import { Service } from './pages/Service';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/dlanc" element={<Service />} />
            <Route path="/service" element={<Navigate to="/dlanc" replace />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
