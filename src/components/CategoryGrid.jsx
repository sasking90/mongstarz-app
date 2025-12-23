import React from 'react';
import { motion } from 'framer-motion';
import {
    Ticket, Clock, Zap, Target, Crown, HelpCircle,
    Layers, Repeat, ShoppingBag, MapPin, MousePointer2, Star
} from 'lucide-react';

const categories = [
    { id: '01', title: '참가권', subtitle: 'Entry Ticket', icon: Ticket, desc: '모든 게임에 접속하기 위한 에너지이자 열쇠', color: '#00FFC2' },
    { id: '02', title: '타임 픽', subtitle: 'Time Pick', icon: Clock, desc: '광고 시청 시간을 나의 자산으로 만드는 수집 콘텐츠', color: '#3B82F6' },
    { id: '03', title: '타임 보너스', subtitle: 'Time Bonus', icon: Zap, desc: '누구나 즉시 참여하여 시간을 얻는 퀵-리워드', color: '#A855F7' },
    { id: '04', title: '타임 어택', subtitle: 'Time Attack', icon: Target, desc: '수집한 시간으로 순금 골드바에 도전하는 잭팟', color: '#F59E0B' },
    { id: '05', title: '타임 킹', subtitle: 'Time King', icon: Crown, desc: '가장 많은 시간을 수집한 랭킹전의 지배자', color: '#EF4444' },
    { id: '06', title: '퀴즈 풀이', subtitle: 'Quiz Solve', icon: HelpCircle, desc: '광고 속 핵심 정보를 풀고 경품을 받는 인지 게임', color: '#10B981' },
    { id: '07', title: '알파 매칭', subtitle: 'Alpha Matching', icon: Layers, desc: '동일한 카드를 찾아 매칭하는 기억력 게임', color: '#6366F1' },
    { id: '08', title: '더블 이벤트', subtitle: 'Double Event', icon: Repeat, desc: '광고주 참여와 라이브 추첨이 결합된 통합 이벤트', color: '#EC4899' },
    { id: '09', title: '명품관', subtitle: 'Luxury Hall', icon: ShoppingBag, desc: '고가의 명품 보상을 전제로 한 프리미엄 게임', color: '#D4D4D8' },
    { id: '10', title: '체험관', subtitle: 'Experience Hall', icon: MapPin, desc: '온라인 광고가 오프라인 매장 방문으로 이어지는 O2O', color: '#F43F5E' },
    { id: '11', title: '랜덤 티켓', subtitle: 'Random Ticket', icon: MousePointer2, desc: '매장 혜택을 최대 5배까지 뻥튀기하는 핵심 BM', color: '#A855F7' },
    { id: '12', title: '스타 보상', subtitle: 'Star Reward', icon: Star, desc: '실패의 아쉬움을 기회로 바꾸는 패자부활 시스템', color: '#FACC15' },
];

const CategoryCard = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="clay-card p-10 flex flex-col items-start gap-6 group cursor-pointer relative overflow-hidden"
        >
            <div
                className="w-20 h-20 rounded-[24px] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-inner"
                style={{
                    backgroundColor: `${category.color}15`,
                    border: `1px solid ${category.color}30`,
                    boxShadow: `inset 0 0 20px ${category.color}20`
                }}
            >
                <category.icon size={36} style={{ color: category.color }} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col relative z-10">
                <span className="text-xs font-black text-accent-green mb-2 tracking-widest uppercase">{category.id}</span>
                <h3 className="text-3xl font-black mb-2 tracking-tight">{category.title}</h3>
                <p className="text-xs text-text-muted font-bold uppercase tracking-[0.2em] mb-4">{category.subtitle}</p>
                <p className="text-base text-text-secondary leading-relaxed font-medium">{category.desc}</p>
            </div>

            {/* Hover Accent */}
            <div
                className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: category.color }}
            />
        </motion.div>
    );
};

const CategoryGrid = () => {
    return (
        <section className="py-32 relative">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
                    >
                        EXPERIENCE <span className="accent-gradient">MONSTARZ</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-text-secondary max-w-3xl font-medium leading-relaxed"
                    >
                        중력을 거스르는 12가지 놀라운 몰입, <br />
                        광고가 즐거움이 되는 순간을 경험하세요.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {categories.map((cat, i) => (
                        <CategoryCard key={cat.id} category={cat} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
