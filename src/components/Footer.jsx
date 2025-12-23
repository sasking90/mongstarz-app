import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative">
            {/* Final CTA Section */}
            <section className="bg-accent-green py-32 overflow-hidden relative">
                <div className="main-container relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-black text-bg-deep mb-12 tracking-tighter"
                        >
                            Get your <br />
                            <span className="opacity-80">MONSTARZ</span>
                        </motion.h2>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="px-12 py-6 bg-bg-deep text-white rounded-full text-xl font-black flex items-center gap-4 hover:scale-105 transition-all shadow-2xl"
                        >
                            지금 시작하기
                            <ArrowRight size={24} strokeWidth={3} />
                        </motion.button>
                    </div>
                </div>

                {/* Decorative Rainbow-like Gradient (Headspace inspired) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-to-t from-white/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
            </section>

            <div className="py-20 bg-bg-deep">
                <div className="main-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 lg:col-span-2">
                            <div className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-accent-green rounded-lg rotate-12" />
                                MONSTARZ
                            </div>
                            <p className="text-text-secondary max-w-md leading-relaxed font-medium">
                                중력을 거스르는 이끌림, 몽스타즈. <br />
                                기존 리워드 앱의 지루함을 벗어나 유저, 광고주, 가맹점 모두가 <br />
                                윈윈하는 혁신적인 비즈니스 생태계를 구축합니다.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-black mb-6 tracking-widest uppercase text-xs">Contact</h4>
                            <ul className="space-y-4 text-sm text-text-muted font-medium">
                                <li>서울특별시 강남구 테헤란로 (본사)</li>
                                <li>02-1234-5678</li>
                                <li>contact@monstarz.com</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-black mb-6 tracking-widest uppercase text-xs">Support</h4>
                            <ul className="space-y-4 text-sm text-text-muted font-medium">
                                <li><a href="#" className="hover:text-accent-green transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-accent-green transition-colors">1:1 문의</a></li>
                                <li><a href="#" className="hover:text-accent-green transition-colors">공지사항</a></li>
                                <li><a href="#" className="hover:text-accent-green transition-colors">이용약관</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-text-muted font-bold tracking-widest uppercase">
                        <p>© 2025 MONSTARZ. All rights reserved.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">YouTube</a>
                            <a href="#" className="hover:text-white transition-colors">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
