import React from 'react';
import { Star, Bell, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="glass sticky top-0 z-50 px-4 py-3 flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px' }}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-1"
            >
                <h1 style={{ fontSize: '24px', fontWeight: '900', color: 'var(--primary)', letterSpacing: '-1px', margin: 0 }}>
                    MONG<span style={{ color: 'var(--text-main)' }}>STARZ</span>
                </h1>
            </motion.div>

            <div className="flex items-center gap-4" style={{ display: 'flex', gap: '16px' }}>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Star size={24} color="var(--primary)" fill="var(--primary)" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ position: 'relative' }}>
                    <Bell size={24} />
                    <span style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, backgroundColor: 'var(--secondary)', borderRadius: '50%', border: '2px solid white' }}></span>
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Menu size={24} />
                </motion.button>
            </div>
        </header>
    );
};

export default Header;
