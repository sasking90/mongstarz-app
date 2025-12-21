import React from 'react';
import { Home, Ticket, Archive, Shuffle, User } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
    { icon: Home, label: '홈', active: true },
    { icon: Ticket, label: '참가권' },
    { icon: Archive, label: '보관함' },
    { icon: Shuffle, label: '랜덤티켓' },
    { icon: User, label: 'MY몽' },
];

const BottomNav = () => {
    return (
        <nav className="glass" style={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '480px',
            height: '70px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '0 10px',
            zIndex: 100,
            borderTop: '1px solid var(--border)',
            borderRadius: '20px 20px 0 0'
        }}>
            {navItems.map((item, index) => (
                <motion.button
                    key={index}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        color: item.active ? 'var(--primary)' : 'var(--text-muted)',
                        position: 'relative'
                    }}
                >
                    {item.active && (
                        <motion.div
                            layoutId="activeNav"
                            style={{
                                position: 'absolute',
                                top: '-10px',
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary)'
                            }}
                        />
                    )}
                    <item.icon size={24} strokeWidth={item.active ? 2.5 : 2} />
                    <span style={{ fontSize: '10px', fontWeight: '700' }}>{item.label}</span>
                </motion.button>
            ))}
        </nav>
    );
};

export default BottomNav;
