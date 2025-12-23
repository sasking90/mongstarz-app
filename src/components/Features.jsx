import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Wind, Heart } from 'lucide-react';

const features = [
    {
        id: 'meditation',
        title: 'Meditation',
        desc: 'Learn to manage feelings and thoughts with the essentials of meditation and mindfulness.',
        icon: Sun,
        color: '#FFB800',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'sleep',
        title: 'Sleep',
        desc: 'Create the perfect conditions for a restful night’s sleep with sleepcasts and music.',
        icon: Moon,
        color: '#7D4CDB',
        image: 'https://images.unsplash.com/photo-1511295742364-91190082d103?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'stress',
        title: 'Stress',
        desc: 'Relieve stress and anxiety with breathing exercises and mindful movement.',
        icon: Wind,
        color: '#00A36C',
        image: 'https://images.unsplash.com/photo-1499728966947-dbb4e5a1c827?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'focus',
        title: 'Focus',
        desc: 'Get more done with music and exercises designed to help you focus on what matters.',
        icon: Heart,
        color: '#FF4D8D',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800'
    }
];

const Features = () => {
    const [activeTab, setActiveTab] = useState('meditation');
    const activeFeature = features.find(f => f.id === activeTab);

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="heading-lg mb-6">The mental health app for <br /> every moment</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {features.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setActiveTab(f.id)}
                                className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === f.id
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-[#F7F3F0] text-text-secondary hover:bg-[#EBE7E4]'
                                    }`}
                            >
                                {f.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        >
                            <div className="space-y-8">
                                <div
                                    className="w-20 h-20 rounded-3xl flex items-center justify-center"
                                    style={{ backgroundColor: `${activeFeature.color}15` }}
                                >
                                    <activeFeature.icon size={40} style={{ color: activeFeature.color }} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-5xl font-black leading-tight">
                                    {activeFeature.title} made <span style={{ color: activeFeature.color }}>simple</span>
                                </h3>
                                <p className="text-xl text-text-secondary leading-relaxed font-medium">
                                    {activeFeature.desc}
                                </p>
                                <button className="hs-button-primary" style={{ backgroundColor: activeFeature.color }}>
                                    Try for free
                                </button>
                            </div>
                            <div className="relative">
                                <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                                    <img
                                        src={activeFeature.image}
                                        alt={activeFeature.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30"
                                    style={{ backgroundColor: activeFeature.color }}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Features;
