import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Handshake } from 'lucide-react';

const partners = [
    {
        title: '광고주를 위한 몽스타즈',
        subtitle: 'For Advertisers',
        icon: Briefcase,
        points: [
            '단순 노출을 넘어선 강력한 각인 효과',
            'VTR 100% 보장하는 능동적 광고 시청',
            '브랜드 메시지의 인지 및 학습 효과 극대화'
        ],
        cta: '광고 문의하기',
        color: '#4BF5D3'
    },
    {
        title: '가맹점주를 위한 몽스타즈',
        subtitle: 'For Merchants',
        icon: Building2,
        points: [
            '초기 부담 없는 신규 고객 유치',
            '랜덤 티켓을 통한 매출 뻥튀기 효과',
            '오프라인 매장 방문 유도 (O2O)'
        ],
        cta: '가맹점 입점 문의',
        color: '#3B82F6'
    },
    {
        title: '사업 파트너 모집',
        subtitle: 'For Business Partners',
        icon: Handshake,
        points: [
            '본사-총판-대리점의 강력한 수익 구조',
            '지속 가능한 비즈니스 생태계 구축',
            '압도적인 수익 파이프라인 제공'
        ],
        cta: '파트너십 문의',
        color: '#8B5CF6'
    }
];

const Partnership = () => {
    return (
        <section className="py-24">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">PARTNERSHIP</h2>
                    <p className="text-lg text-text-secondary max-w-2xl">
                        몽스타즈와 함께 성공을 이끌어갈 <br />
                        소중한 파트너를 기다립니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="clay-card p-10 flex flex-col h-full"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                                style={{ backgroundColor: `${partner.color}20`, border: `1px solid ${partner.color}40` }}
                            >
                                <partner.icon size={32} style={{ color: partner.color }} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{partner.title}</h3>
                            <p className="text-sm text-accent-green font-bold uppercase tracking-widest mb-8">{partner.subtitle}</p>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {partner.points.map((point, j) => (
                                    <li key={j} className="flex items-start gap-3 text-text-secondary">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: partner.color }} />
                                        <span className="text-sm leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
                                style={{ backgroundColor: partner.color, color: '#0B0E23' }}
                            >
                                {partner.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partnership;
