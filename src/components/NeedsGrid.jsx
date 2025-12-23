import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Building2, TrendingUp, Zap, Globe } from 'lucide-react';

const needs = [
    { icon: User, label: '리워드 적립', color: '#0066FF' },
    { icon: Briefcase, label: '광고 캠페인', color: '#FFB800' },
    { icon: Building2, label: '가맹점 입점', color: '#00A36C' },
    { icon: TrendingUp, label: '수익 파이프라인', color: '#FF4D8D' },
    { icon: Zap, label: '빠른 참여', color: '#FF7D00' },
    { icon: Globe, label: '글로벌 확장', color: '#0066FF' },
];

const NeedsGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                        What are you looking for?
                    </h3>
                    <p className="text-text-secondary font-medium">당신에게 꼭 필요한 몽스타즈의 솔루션을 선택하세요.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {needs.map((need, i) => (
                        <motion.div
                            key={need.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="hs-card !p-8 flex flex-col items-center justify-center gap-4 cursor-pointer group hover:!bg-primary/5"
                        >
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                                style={{ backgroundColor: `${need.color}10` }}
                            >
                                <need.icon size={28} style={{ color: need.color }} strokeWidth={2.5} />
                            </div>
                            <span className="text-sm font-extrabold text-text-primary group-hover:text-primary transition-colors">
                                {need.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NeedsGrid;
