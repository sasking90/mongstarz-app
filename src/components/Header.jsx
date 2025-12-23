import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b border-white/10' : 'py-8'
                }`}
        >
            <div className="main-container flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-black tracking-tighter flex items-center gap-2"
                >
                    <div className="w-8 h-8 bg-accent-green rounded-lg rotate-12" />
                    MONSTARZ
                </motion.div>

                <nav className="hidden md:flex items-center gap-10">
                    {['회사소개', '앱 특징', '파트너십', '고객지원'].map((item, i) => (
                        <motion.a
                            key={item}
                            href={`#${item}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm font-medium text-text-secondary hover:text-accent-green transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}
                </nav>

                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold hover:bg-white/20 transition-all"
                >
                    지금 시작하기
                </motion.button>
            </div>
        </header>
    );
};

export default Header;
