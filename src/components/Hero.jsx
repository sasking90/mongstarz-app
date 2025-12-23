import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section min-h-screen flex items-center justify-center overflow-hidden relative">
            <div className="main-container relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <span className="inline-block px-6 py-2 mb-8 text-xs font-bold tracking-[0.2em] uppercase bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-accent-green shadow-clay-sm">
                            Anti-Gravity Reward Platform
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="text-7xl md:text-[120px] font-black mb-10 leading-[0.9] tracking-tighter"
                    >
                        중력을 거스르는 <br />
                        <span className="accent-gradient">리워드, 몽스타즈</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="text-xl md:text-2xl text-text-secondary max-w-3xl mb-16 leading-relaxed font-medium"
                    >
                        광고가 게임이 되고, 소비가 행운이 되는, <br />
                        새로운 세상의 시작을 경험하세요.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="flex flex-col sm:flex-row gap-8"
                    >
                        <button className="px-10 py-5 bg-white text-bg-deep font-black rounded-full flex items-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.15)] active:scale-95">
                            <Download size={22} strokeWidth={3} />
                            앱 다운로드
                        </button>
                        <button className="px-10 py-5 clay-button text-white font-black flex items-center gap-3 hover:bg-white/10 active:scale-95">
                            파트너십 문의
                            <ArrowRight size={22} strokeWidth={3} />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Floating 3D-like Decorative Elements */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-blue/10 blur-[100px] rounded-full"
            />
            <motion.div
                animate={{
                    y: [0, 40, 0],
                    rotate: [0, -15, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-violet/10 blur-[120px] rounded-full"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[20%] left-[15%] w-4 h-4 bg-accent-green rounded-full blur-sm opacity-50 animate-pulse" />
                <div className="absolute bottom-[30%] right-[20%] w-6 h-6 bg-accent-pink rounded-full blur-md opacity-30 animate-pulse" />
            </div>
        </section>
    );
};

export default Hero;
