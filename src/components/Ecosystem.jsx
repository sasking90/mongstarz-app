import React from 'react';
import { motion } from 'framer-motion';
import { Users, Store, Megaphone, Network } from 'lucide-react';

const steps = [
    {
        title: '회원',
        subtitle: 'User Experience',
        icon: Users,
        desc: '미니게임을 통한 즐거움과 경품의 행운을 동시에 누리는 사용자 생태계',
        color: '#4BF5D3'
    },
    {
        title: '가맹점',
        subtitle: 'Merchant Growth',
        icon: Store,
        desc: '초기 비용 부담 없이 신규 고객을 유치하고 매출을 극대화하는 파트너',
        color: '#3B82F6'
    },
    {
        title: '광고주',
        subtitle: 'Advertiser Impact',
        icon: Megaphone,
        desc: '단순 노출을 넘어 유저의 뇌리에 깊이 각인되는 브랜드 메시지 전달',
        color: '#8B5CF6'
    },
    {
        title: '파트너 네트워크',
        subtitle: 'Revenue Pipeline',
        icon: Network,
        desc: '본사-총판-대리점-영업사원으로 이어지는 압도적인 수익 파이프라인',
        color: '#F59E0B'
    }
];

const Ecosystem = () => {
    return (
        <section className="py-24 bg-white/5">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">MONSTARZ ECOSYSTEM</h2>
                    <p className="text-lg text-text-secondary max-w-2xl">
                        유저, 광고주, 가맹점 모두를 끌어당기는 <br />
                        '중력 이상의 매력'을 가진 4단계 선순환 구조
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connection line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-accent-green/20 via-accent-blue/20 to-accent-violet/20 -translate-y-1/2 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="clay-card p-8 flex flex-col items-center text-center relative z-10"
                        >
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
                                style={{ backgroundColor: step.color, boxShadow: `0 0 30px ${step.color}40` }}
                            >
                                <step.icon size={36} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-accent-green font-bold uppercase tracking-widest mb-4">{step.subtitle}</p>
                            <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
