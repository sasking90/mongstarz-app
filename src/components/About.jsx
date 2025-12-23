import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Lightbulb } from 'lucide-react';

const About = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="main-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">리워드 앱 시장의 <br /><span className="accent-gradient">새로운 표준을 제시하다</span></h2>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-xl bg-accent-green/20 flex items-center justify-center shrink-0">
                                    <Target className="text-accent-green" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Vision</h4>
                                    <p className="text-text-secondary">기존 리워드 앱의 한계를 넘어, 유저와 기업이 공존하는 혁신적인 가치 창출</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center shrink-0">
                                    <Lightbulb className="text-accent-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Mission</h4>
                                    <p className="text-text-secondary">모두가 윈윈하는 지속 가능한 비즈니스 생태계 구축 및 글로벌 확장</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-xl bg-accent-violet/20 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="text-accent-violet" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">BM Patent</h4>
                                    <p className="text-text-secondary">몽스타즈만의 독보적인 랜덤 티켓 시스템 및 보상 알고리즘 특허 보유</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="clay-card aspect-square flex items-center justify-center p-12 relative z-10">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-accent-green to-accent-blue rounded-3xl rotate-12 mx-auto mb-8 shadow-2xl animate-float" />
                                <h3 className="text-3xl font-black mb-4">BM PATENT</h3>
                                <p className="text-text-muted">특허 제 10-2024-XXXXXXX호</p>
                            </div>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-green/30 blur-[80px] rounded-full animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-violet/30 blur-[80px] rounded-full animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
