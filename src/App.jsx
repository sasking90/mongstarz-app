import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import MenuGrid from './components/MenuGrid';
import ProductSection from './components/ProductSection';
import BottomNav from './components/BottomNav';
import { motion } from 'framer-motion';
import { Ticket, Clock } from 'lucide-react';

function App() {
  return (
    <div className="container">
      <Header />

      <main>
        {/* Stats Section */}
        <section style={{ padding: '16px 16px 0', display: 'flex', gap: '12px' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              flex: 1,
              backgroundColor: 'white',
              padding: '12px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ backgroundColor: 'rgba(255, 184, 0, 0.1)', padding: '6px', borderRadius: '8px' }}>
                <Ticket size={20} color="var(--primary)" />
              </div>
              <span style={{ fontSize: '18px', fontWeight: '800' }}>29</span>
            </div>
            <div style={{ color: 'var(--border)' }}>›</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              flex: 1,
              backgroundColor: 'white',
              padding: '12px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '6px', borderRadius: '8px' }}>
                <Clock size={20} color="#2ECC71" />
              </div>
              <span style={{ fontSize: '18px', fontWeight: '800' }}>13</span>
            </div>
            <div style={{ color: 'var(--border)' }}>›</div>
          </motion.div>
        </section>

        <HeroBanner />
        <MenuGrid />

        {/* Divider */}
        <div style={{ height: '8px', backgroundColor: 'var(--background)', margin: '16px 0' }}></div>

        <ProductSection />
      </main>

      <BottomNav />
    </div>
  );
}

export default App;
