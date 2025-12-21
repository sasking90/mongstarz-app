import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Trophy, HelpCircle, Users, Gift, ShoppingBag, Box } from 'lucide-react';

const menuItems = [
    { icon: Clock, label: '타임 픽', color: '#FFB800' },
    { icon: Zap, label: '타임 어택', color: '#FF4D4D' },
    { icon: Trophy, label: '타임 킹', color: '#FFD700' },
    { icon: HelpCircle, label: '퀴즈 풀이', color: '#4D96FF' },
    { icon: Users, label: '알파 매칭', color: '#FF85B3' },
    { icon: Gift, label: '더블 이벤트', color: '#A155FF' },
    { icon: ShoppingBag, label: '명품관', color: '#2ECC71' },
    { icon: Box, label: '체험관', color: '#F39C12' },
];

const MenuGrid = () => {
    return (
        <section style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {menuItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '18px',
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--shadow-md)',
                        color: item.color
                    }}>
                        <item.icon size={28} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>
                        {item.label}
                    </span>
                </motion.div>
            ))}
        </section>
    );
};

export default MenuGrid;
