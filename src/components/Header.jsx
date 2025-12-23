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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass border-b border-white/5 shadow-2xl' : 'py-10'
                }`}
        >
            <div className="main-container flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-black tracking-tighter flex items-center gap-3 cursor-pointer group"
                >
                    <div className="w-10 h-10 bg-accent-green rounded-xl rotate-12 group-hover:rotate-[30deg] transition-transform shadow-glow flex items-center justify-center">
                        <div className="w-4 h-4 bg-bg-deep rounded-full shadow-inner" />
                    </div>
                    <span className="group-hover:text-accent-green transition-colors">MONSTARZ</span>
                </motion.div>

                <nav className="hidden md:flex items-center gap-12">
                    {['회사소개', '앱 특징', '파트너십', '고객지원'].map((item, i) => (
                        <motion.a
                            key={item}
                            href={`#${item}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm font-black text-text-secondary hover:text-accent-green transition-all tracking-widest uppercase relative group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent-green transition-all group-hover:w-full" />
                        </motion.a>
                    ))}
                </nav>

                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="px-8 py-3 clay-button text-white text-sm font-black tracking-widest uppercase hover:bg-white/10 active:scale-95"
                >
                    지금 시작하기
                </motion.button>
            </div>
        </header>
    );
};

export default Header;
