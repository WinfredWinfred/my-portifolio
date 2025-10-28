import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Handle scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-size opacity-20"></div>
        <div className="text-center relative z-10">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-secondary-500 border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
            <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          <p className="text-primary-400 text-2xl font-display font-bold animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 transition-colors">
      <Header activeSection={activeSection} />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
