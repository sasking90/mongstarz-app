import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5">
            <div className="main-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-accent-green rounded-lg rotate-12" />
                            MONSTARZ
                        </div>
                        <p className="text-text-secondary max-w-md leading-relaxed">
                            중력을 거스르는 이끌림, 몽스타즈. <br />
                            기존 리워드 앱의 지루함을 벗어나 유저, 광고주, 가맹점 모두가 <br />
                            윈윈하는 혁신적인 비즈니스 생태계를 구축합니다.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li>서울특별시 강남구 테헤란로 (본사)</li>
                            <li>02-1234-5678</li>
                            <li>contact@monstarz.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><a href="#" className="hover:text-accent-green transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-accent-green transition-colors">1:1 문의</a></li>
                            <li><a href="#" className="hover:text-accent-green transition-colors">공지사항</a></li>
                            <li><a href="#" className="hover:text-accent-green transition-colors">이용약관</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-text-muted">
                    <p>© 2025 MONSTARZ. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">YouTube</a>
                        <a href="#" className="hover:text-white transition-colors">Blog</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
