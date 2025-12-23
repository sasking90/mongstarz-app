import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Gift, Zap, Users, ShieldCheck, Globe } from 'lucide-react';

const categories = [
    {
        id: '01',
        title: '미니게임 리워드',
        subtitle: 'FUN & EARN',
        desc: '지루한 광고 시청은 이제 그만! 재미있는 미니게임을 즐기며 리워드를 적립하세요.',
        icon: Gamepad2,
        color: '#0066FF'
    },
    {
        id: '02',
        title: '실시간 타임어택',
        subtitle: 'LUCKY CHANCE',
        desc: '매일 열리는 타임어택 이벤트! 압도적인 경품의 주인공이 될 기회를 놓치지 마세요.',
        icon: Zap,
        color: '#FFB800'
    },
    {
        id: '03',
        title: 'BM 특허 시스템',
        subtitle: 'EXPERT CARE',
        desc: '광고주와 유저 모두가 만족하는 독자적인 BM 특허 기반의 리워드 생태계입니다.',
        icon: ShieldCheck,
        color: '#00A36C'
    },
    {
        id: '04',
        title: '글로벌 네트워크',
        subtitle: 'WORLDWIDE',
        desc: '국내를 넘어 전 세계로 뻗어나가는 몽스타즈의 혁신적인 비즈니스 모델을 경험하세요.',
        icon: Globe,
        color: '#FF4D8D'
    }
];

const CategoryCard = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="hs-card flex flex-col items-start gap-6 group cursor-pointer"
        >
            <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-sm"
                style={{ backgroundColor: `${category.color}15` }}
            >
                <category.icon size={32} style={{ color: category.color }} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-black text-primary mb-2 tracking-widest uppercase">{category.subtitle}</span>
                <h3 className="text-2xl font-black mb-3">{category.title}</h3>
                <p className="text-base text-text-secondary leading-relaxed font-medium">{category.desc}</p>
            </div>
        </motion.div>
    );
};

const CategoryGrid = () => {
    return (
        <section className="py-32 bg-[#F7F3F0]">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="heading-lg mb-6">Explore our library</h2>
                    <p className="text-xl text-text-secondary max-w-2xl font-medium">
                        몽스타즈가 제공하는 다양한 서비스와 <br />
                        혁신적인 리워드 시스템을 확인해보세요.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
