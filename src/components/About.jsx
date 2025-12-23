import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Lightbulb } from 'lucide-react';

const About = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="main-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight tracking-tighter">
                            리워드 앱 시장의 <br />
                            <span className="accent-gradient">새로운 표준을 제시하다</span>
                        </h2>

                        <div className="space-y-10">
                            {[
                                { icon: Target, title: 'Vision', desc: '기존 리워드 앱의 한계를 넘어, 유저와 기업이 공존하는 혁신적인 가치 창출', color: 'var(--accent-green)' },
                                { icon: Lightbulb, title: 'Mission', desc: '모두가 윈윈하는 지속 가능한 비즈니스 생태계 구축 및 글로벌 확장', color: 'var(--accent-blue)' },
                                { icon: ShieldCheck, title: 'BM Patent', desc: '몽스타즈만의 독보적인 랜덤 티켓 시스템 및 보상 알고리즘 특허 보유', color: 'var(--accent-violet)' }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex gap-8"
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-clay-sm"
                                        style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                                    >
                                        <item.icon style={{ color: item.color }} size={28} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-2 tracking-tight">{item.title}</h4>
                                        <p className="text-lg text-text-secondary font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="relative"
                    >
                        <div className="clay-card aspect-square flex items-center justify-center p-16 relative z-10">
                            <div className="text-center">
                                <motion.div
                                    animate={{
                                        rotate: [12, -12, 12],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-40 h-40 bg-gradient-to-br from-accent-green to-accent-blue rounded-[40px] mx-auto mb-10 shadow-[0_30px_60px_rgba(0,255,194,0.3)] flex items-center justify-center"
                                >
                                    <ShieldCheck size={64} className="text-white" strokeWidth={2.5} />
                                </motion.div>
                                <h3 className="text-4xl font-black mb-4 tracking-tighter">BM PATENT</h3>
                                <p className="text-lg text-text-muted font-bold tracking-widest">특허 제 10-2024-XXXXXXX호</p>
                            </div>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-green/20 blur-[100px] rounded-full animate-pulse" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-violet/20 blur-[100px] rounded-full animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
