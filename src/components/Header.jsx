import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['앱 특징', '회사소개', '파트너십', '고객지원'];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="main-container flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <a href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-primary rounded-lg rotate-12 transition-transform group-hover:rotate-0" />
                        <span className="text-text-primary">MONSTARZ</span>
                    </a>

                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-sm font-bold text-text-secondary hover:text-primary transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block text-sm font-bold text-text-primary hover:text-primary transition-colors px-6">
                        로그인
                    </button>
                    <button className="hs-button-primary !py-3 !px-8 !text-sm">
                        시작하기
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
