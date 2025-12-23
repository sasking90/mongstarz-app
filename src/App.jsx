import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NeedsGrid from './components/NeedsGrid';
import CategoryGrid from './components/CategoryGrid';
import Ecosystem from './components/Ecosystem';
import About from './components/About';
import Partnership from './components/Partnership';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Scene from './components/Scene';

function App() {
  return (
    <div className="bg-bg-deep min-h-screen text-white selection:bg-accent-green selection:text-bg-deep">
      {/* 3D Background Scene */}
      <Scene />

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />

        <NeedsGrid />

        <div id="앱 특징">
          <CategoryGrid />
        </div>

        <div id="회사소개">
          <About />
          <Ecosystem />
        </div>

        <div id="파트너십">
          <Partnership />
        </div>

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


