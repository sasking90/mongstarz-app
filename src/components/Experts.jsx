import React from 'react';
import { motion } from 'framer-motion';

const experts = [
    {
        name: 'Eve Lewis Prieto',
        role: 'Director of Meditation',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
    },
    {
        name: 'Andy Puddicombe',
        role: 'Co-founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
        name: 'Dora Kamau',
        role: 'Meditation Teacher',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400'
    },
    {
        name: 'Kessonga Giscombe',
        role: 'Meditation Teacher',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    }
];

const Experts = () => {
    return (
        <section className="py-32 bg-[#F7F3F0]">
            <div className="main-container">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="heading-lg mb-6">Designed by experts, <br /> delivered with care</h2>
                    <p className="text-xl text-text-secondary max-w-2xl font-medium">
                        Our teachers are world-class experts in mindfulness, <br />
                        meditation, and mental health.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white transition-transform group-hover:scale-105">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-2xl font-black mb-1">{expert.name}</h4>
                            <p className="text-text-secondary font-bold">{expert.role}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <button className="hs-button-secondary">
                        Meet our teachers
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Experts;
