import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import BentoGrid from './components/BentoGrid';
import SocialProof from './components/SocialProof';
import ProcessSection from './components/ProcessSection';
import ValueTriad from './components/ValueTriad';
import BoutiqueInfo from './components/BoutiqueInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-night overflow-hidden relative font-sans">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Global Background Ambient Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-electric/5 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <BentoGrid />
          <SocialProof />
          <ProcessSection />
          <ValueTriad />
          <BoutiqueInfo />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
