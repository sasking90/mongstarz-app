import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-32 pb-20 bg-[#F7F3F0] overflow-hidden relative">
            <div className="main-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-start text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold bg-white rounded-full text-primary shadow-sm">
                                몽스타즈와 함께하는 새로운 리워드 경험
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                            className="heading-xl mb-8 text-balance"
                        >
                            Everything your <br />
                            <span className="text-primary">reward life</span> needs.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="text-xl md:text-2xl text-text-secondary max-w-xl mb-12 leading-relaxed font-medium"
                        >
                            중력을 거스르는 리워드, 몽스타즈. <br />
                            광고가 즐거움이 되고, 소비가 행운이 되는 <br />
                            새로운 일상을 지금 바로 시작하세요.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="hs-button-primary">
                                <Download size={20} strokeWidth={3} />
                                앱 다운로드
                            </button>
                            <button className="hs-button-secondary">
                                파트너십 문의
                                <ArrowRight size={20} strokeWidth={3} />
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 w-full max-w-lg mx-auto">
                            <div className="aspect-square bg-white rounded-[60px] shadow-lg p-8 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent-green/10 rounded-[40px] flex items-center justify-center">
                                    <div className="w-48 h-48 bg-white rounded-3xl shadow-md flex items-center justify-center animate-float">
                                        <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-4xl">M</div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full flex items-center justify-center shadow-lg"
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-full blur-xl" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent-green rounded-full flex items-center justify-center shadow-lg"
                            >
                                <div className="w-20 h-20 bg-white/20 rounded-full blur-2xl" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
