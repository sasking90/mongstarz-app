import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: '김민수',
        role: '일반 사용자',
        content: '기존 리워드 앱들은 너무 지루했는데, 몽스타즈는 게임처럼 즐기면서 포인트를 쌓을 수 있어서 정말 좋아요. 타임어택 당첨됐을 때의 짜릿함은 잊을 수 없네요!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
    },
    {
        name: '이지은',
        role: '광고주 파트너',
        content: '단순 노출형 광고보다 훨씬 효과적입니다. 유저들이 우리 브랜드의 핵심 가치를 정확히 이해하고 있다는 점이 가장 놀라웠어요. 마케팅 ROI가 눈에 띄게 좋아졌습니다.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
    },
    {
        name: '박준형',
        role: '가맹점주',
        content: '몽스타즈 랜덤 티켓 덕분에 매장을 찾는 손님들이 늘어났어요. 별도의 홍보 비용 없이도 자연스럽게 신규 고객이 유입되니 장사할 맛이 납니다.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 bg-[#F7F3F0]">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="heading-lg mb-6 text-balance">Members are enjoying <br /> happier and healthier lives</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="hs-card flex flex-col gap-6"
                        >
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} size={18} fill="#FFB800" color="#FFB800" />
                                ))}
                            </div>
                            <p className="text-lg text-text-primary font-medium leading-relaxed italic">
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-black/5">
                                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-black text-text-primary">{item.name}</h4>
                                    <p className="text-sm text-text-secondary font-bold">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
