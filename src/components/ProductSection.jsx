import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const products = [
    {
        id: 1,
        title: '이디야커피 디지털 상품권',
        brand: 'EDIYA COFFEE',
        image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400&q=80',
        color: '#003399'
    },
    {
        id: 2,
        title: '탐앤탐스 딸기 스무디',
        brand: 'TOM N TOMS',
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80',
        color: '#E74C3C'
    },
];

const ProductSection = () => {
    return (
        <section style={{ padding: '24px 0' }}>
            <div style={{ padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800' }}>실시간 타임 어택 당첨자</h3>
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'var(--primary)',
                    backgroundColor: 'rgba(255, 184, 0, 0.1)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)'
                }}>
                    전체보기 <ChevronRight size={16} />
                </button>
            </div>

            <div className="hide-scrollbar" style={{ display: 'flex', gap: '16px', overflowX: 'auto', padding: '0 16px' }}>
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        whileHover={{ scale: 1.02 }}
                        style={{
                            flex: '0 0 240px',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            backgroundColor: 'white',
                            boxShadow: 'var(--shadow-md)',
                            border: '1px solid var(--border)'
                        }}
                    >
                        <div style={{ height: '140px', backgroundColor: '#f0f0f0', position: 'relative' }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: '12px',
                                left: '12px',
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                color: 'white',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                fontSize: '10px',
                                fontWeight: '700'
                            }}>
                                WINNER
                            </div>
                        </div>
                        <div style={{ padding: '12px' }}>
                            <p style={{ fontSize: '11px', fontWeight: '700', color: product.color, marginBottom: '4px' }}>{product.brand}</p>
                            <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {product.title}
                            </h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProductSection;
