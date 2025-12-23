import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Store, Handshake, CheckCircle2 } from 'lucide-react';

const Partnership = () => {
    const partners = [
        {
            title: 'For Advertisers',
            heading: '브랜드 가치를 높이는 가장 확실한 방법',
            desc: '단순 노출을 넘어 유저가 직접 참여하고 학습하는 퀴즈형 광고를 통해 브랜드 인지도를 극대화합니다.',
            features: ['100% 브랜드 학습 보장', '정밀한 타겟팅 시스템', '실시간 캠페인 분석'],
            icon: Megaphone,
            color: '#0066FF',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'For Merchants',
            heading: '가맹점 매출 성장의 강력한 파트너',
            desc: '초기 비용 부담 없이 몽스타즈 유저들을 가맹점으로 유입시켜 오프라인 매출 증대를 돕습니다.',
            features: ['신규 고객 유입 보장', '랜덤 티켓 방문 유도', '가맹점 전용 홍보 채널'],
            icon: Store,
            color: '#00A36C',
            image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-24">
                    <h2 className="heading-lg mb-6">Designed by experts, <br /> delivered with care</h2>
                    <p className="text-xl text-text-secondary max-w-2xl font-medium">
                        몽스타즈는 비즈니스 파트너의 성공을 위해 <br />
                        최적화된 생태계를 제공합니다.
                    </p>
                </div>

                <div className="space-y-32">
                    {partners.map((partner, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex-1"
                            >
                                <div className="hs-card !p-0 overflow-hidden aspect-video relative group">
                                    <img
                                        src={partner.image}
                                        alt={partner.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex-1 space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${partner.color}15` }}
                                    >
                                        <partner.icon size={24} style={{ color: partner.color }} strokeWidth={2.5} />
                                    </div>
                                    <span className="text-sm font-black text-primary tracking-widest uppercase">{partner.title}</span>
                                </div>
                                <h3 className="text-4xl font-black leading-tight">{partner.heading}</h3>
                                <p className="text-lg text-text-secondary leading-relaxed font-medium">{partner.desc}</p>
                                <ul className="space-y-4">
                                    {partner.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-text-primary font-bold">
                                            <CheckCircle2 size={20} className="text-accent-green" strokeWidth={3} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="hs-button-primary !mt-10">
                                    자세히 알아보기
                                </button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partnership;
