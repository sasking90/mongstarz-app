import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "몽스타즈는 어떤 서비스인가요?",
        answer: "몽스타즈는 광고 시청과 게임을 결합하여 유저에게 실질적인 보상을 제공하는 '안티-그래비티 리워드 플랫폼'입니다. 기존의 지루한 리워드 앱을 넘어, 즐거움과 혜택을 동시에 제공합니다."
    },
    {
        question: "광고주로서 어떤 효과를 기대할 수 있나요?",
        answer: "유저가 광고 내용을 학습하고 퀴즈를 푸는 과정을 통해 브랜드 인지도를 100% 보장합니다. 단순 노출을 넘어선 강력한 각인 효과를 경험하실 수 있습니다."
    },
    {
        question: "가맹점 입점은 어떻게 하나요?",
        answer: "가맹점 입점은 파트너십 문의를 통해 신청하실 수 있습니다. 몽스타즈의 '랜덤 티켓' 시스템을 통해 오프라인 매장으로의 유입과 매출 증대 효과를 누리실 수 있습니다."
    },
    {
        question: "보상은 어떻게 현금화하거나 사용할 수 있나요?",
        answer: "수집한 시간과 포인트는 앱 내 상점에서 다양한 상품권으로 교환하거나, 실시간 타임 어택을 통해 고가의 경품에 도전하는 데 사용할 수 있습니다."
    }
];

const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <span className="text-xl md:text-2xl font-bold text-text-secondary group-hover:text-white transition-colors">
                    {faq.question}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-lg text-text-muted leading-relaxed max-w-4xl">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="py-32">
            <div className="main-container">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                        Frequently asked questions
                    </h2>
                </div>
                <div className="flex flex-col">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} faq={faq} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
