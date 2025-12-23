import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NeedsGrid from './components/NeedsGrid';
import CategoryGrid from './components/CategoryGrid';
import Partnership from './components/Partnership';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#F7F3F0] min-h-screen text-text-primary selection:bg-primary selection:text-white">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />

        <NeedsGrid />

        <div id="앱 특징">
          <CategoryGrid />
        </div>

        <div id="파트너십">
          <Partnership />
        </div>

        <Testimonials />

        <FAQ />
      </main>

      {/* Footer */}
      <div id="고객지원">
        <Footer />
      </div>
    </div>
  );
}

export default App;
