import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
    return (
        <section style={{ padding: '16px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #FF6B6B 0%, #FFB800 100%)',
                    boxShadow: 'var(--shadow-lg)'
                }}
            >
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: 'white',
                    zIndex: 1
                }}>
                    <span style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '12px',
                        fontWeight: '600',
                        width: 'fit-content',
                        marginBottom: '12px'
                    }}>
                        Event
                    </span>
                    <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', lineHeight: '1.2' }}>
                        던킨 4월의 음료<br />웰치스 쿨라타 로우슈거
                    </h2>
                    <p style={{ fontSize: '18px', fontWeight: '700', opacity: 0.9 }}>
                        1,000원 OFF!
                    </p>
                    <p style={{ fontSize: '12px', marginTop: '12px', opacity: 0.7 }}>
                        04.14 - 04.20
                    </p>
                </div>

                {/* Decorative elements */}
                <div style={{
                    position: 'absolute',
                    right: '-20px',
                    bottom: '-20px',
                    width: '150px',
                    height: '150px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    zIndex: 0
                }}></div>
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '12px' }}>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} style={{
                        width: i === 1 ? '20px' : '6px',
                        height: '6px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: i === 1 ? 'var(--primary)' : 'var(--border)',
                        transition: 'all 0.3s ease'
                    }}></div>
                ))}
            </div>
        </section>
    );
};

export default HeroBanner;
