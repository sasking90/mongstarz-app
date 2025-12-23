import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative">
            {/* Final CTA Section */}
            <section className="bg-secondary py-32 overflow-hidden relative">
                <div className="main-container relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-black text-text-primary mb-12 tracking-tighter"
                        >
                            Get your <br />
                            <span className="text-primary">MONSTARZ</span>
                        </motion.h2>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="hs-button-primary !bg-primary !text-white !text-2xl !py-6 !px-16"
                        >
                            지금 시작하기
                            <ArrowRight size={28} strokeWidth={3} />
                        </motion.button>
                    </div>
                </div>

                {/* Decorative Rainbow-like Gradient (Headspace inspired) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-to-t from-white/40 to-transparent rounded-full blur-[120px] pointer-events-none" />
            </section>

            <div className="py-24 bg-white">
                <div className="main-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-1 lg:col-span-2">
                            <div className="text-3xl font-black tracking-tighter flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-primary rounded-xl rotate-12" />
                                MONSTARZ
                            </div>
                            <p className="text-xl text-text-secondary max-w-md leading-relaxed font-medium">
                                중력을 거스르는 리워드, 몽스타즈. <br />
                                유저, 광고주, 가맹점 모두가 행복한 <br />
                                혁신적인 비즈니스 생태계를 꿈꿉니다.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-text-primary font-black mb-8 tracking-widest uppercase text-sm">Contact</h4>
                            <ul className="space-y-4 text-base text-text-secondary font-bold">
                                <li>서울특별시 강남구 테헤란로 (본사)</li>
                                <li>02-1234-5678</li>
                                <li>contact@monstarz.com</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-text-primary font-black mb-8 tracking-widest uppercase text-sm">Support</h4>
                            <ul className="space-y-4 text-base text-text-secondary font-bold">
                                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">1:1 문의</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">공지사항</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">이용약관</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-black/5 text-sm text-text-muted font-bold tracking-widest uppercase">
                        <p>© 2025 MONSTARZ. All rights reserved.</p>
                        <div className="flex gap-8 mt-6 md:mt-0">
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Youtube size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><MessageCircle size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
