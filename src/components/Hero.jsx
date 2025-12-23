import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section min-h-screen flex items-center justify-center overflow-hidden">
            <div className="main-container relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-green">
                            Anti-Gravity Reward Platform
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight"
                    >
                        중력을 거스르는 <br />
                        <span className="accent-gradient">리워드, 몽스타즈</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-12 leading-relaxed"
                    >
                        광고가 게임이 되고, 소비가 행운이 되는, <br />
                        새로운 세상의 시작을 경험하세요.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <button className="px-8 py-4 bg-white text-bg-deep font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-white/10">
                            <Download size={20} />
                            앱 다운로드
                        </button>
                        <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 hover:scale-105 transition-all">
                            파트너십 문의
                            <ArrowRight size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent-blue/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent-violet/20 blur-[120px] rounded-full" />
        </section>
    );
};

export default Hero;
