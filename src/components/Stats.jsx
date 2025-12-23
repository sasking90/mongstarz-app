import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Stats = () => {
    const stats = [
        { label: 'Star rating', value: '4.9', sub: 'Average' },
        { label: 'Members', value: '100M+', sub: 'Worldwide' },
        { label: 'Organizations', value: '4,000+', sub: 'Trust us' }
    ];

    return (
        <section className="py-32 bg-primary relative overflow-hidden">
            <div className="main-container relative z-10">
                <div className="flex flex-col items-center text-center text-white mb-20">
                    <h2 className="heading-lg mb-8">Join the millions who use <br /> Headspace every day</h2>
                    <div className="flex items-center gap-2 mb-12">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={24} fill="white" className="text-white" />
                        ))}
                        <span className="ml-2 font-black text-xl">4.9/5 RATING</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center text-center text-white"
                        >
                            <span className="text-6xl md:text-8xl font-black mb-4">{stat.value}</span>
                            <span className="text-xl font-bold opacity-80">{stat.label}</span>
                            <span className="text-sm font-medium opacity-60 uppercase tracking-widest">{stat.sub}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Clouds */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-10 left-[10%] w-64 h-32 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-[15%] w-80 h-40 bg-white rounded-full blur-3xl" />
            </div>
        </section>
    );
};

export default Stats;
