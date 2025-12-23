import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Building2, TrendingUp, Zap, Globe } from 'lucide-react';

const needs = [
    { icon: User, label: '리워드 적립', color: '#00FFC2' },
    { icon: Briefcase, label: '광고 캠페인', color: '#3B82F6' },
    { icon: Building2, label: '가맹점 입점', color: '#A855F7' },
    { icon: TrendingUp, label: '수익 파이프라인', color: '#FF00E5' },
    { icon: Zap, label: '빠른 참여', color: '#F59E0B' },
    { icon: Globe, label: '글로벌 확장', color: '#10B981' },
];

const NeedsGrid = () => {
    return (
        <section className="py-20 bg-bg-cosmic/50">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
                        What are you looking for?
                    </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {needs.map((need, i) => (
                        <motion.div
                            key={need.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="clay-card p-6 flex flex-col items-center justify-center gap-4 cursor-pointer group"
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                                style={{ backgroundColor: `${need.color}15`, border: `1px solid ${need.color}30` }}
                            >
                                <need.icon size={24} style={{ color: need.color }} strokeWidth={2.5} />
                            </div>
                            <span className="text-sm font-bold text-text-secondary group-hover:text-white transition-colors">
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
