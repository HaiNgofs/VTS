import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Shield, Award, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { VtsLogo } from './VtsLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'services', label: 'Dịch vụ' },
    { id: 'projects', label: 'Dự án' },
    { id: 'news', label: 'Tin tức' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-300 hover:text-vts-primary transition-colors">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-vts-primary shrink-0" />
              {COMPANY_INFO.address}
            </span>
            <span className="flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-500 shrink-0" />
              {COMPANY_INFO.workingHours}
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`tel:${COMPANY_INFO.hotline}`} className="flex items-center text-slate-100 font-semibold hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-vts-primary animate-pulse" />
              Hotline: <span className="text-amber-400 ml-1">{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center text-slate-300 hover:text-vts-primary transition-colors">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-vts-primary" />
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'} px-4 bg-white/98 backdrop-blur-md border-b border-slate-100`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Official VTS Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center group text-left focus:outline-none"
            title="Trang chủ VTS"
          >
            <div className="p-1 rounded-lg transition-transform group-hover:scale-105">
              <VtsLogo className="h-10 md:h-12" />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-md font-bold text-sm transition-all duration-200 relative ${
                  activeTab === item.id
                    ? 'text-vts-primary bg-vts-soft'
                    : 'text-slate-700 hover:text-vts-primary hover:bg-slate-50'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-vts-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-vts-primary hover:bg-vts-dark shadow-md hover:shadow-vts-primary/20 transition-all active:scale-[0.98] border border-vts-dark"
            >
              <Shield className="w-4 h-4 mr-2 text-amber-300" />
              Yêu Cầu Tư Vấn
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-vts-soft focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-vts-primary" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-40 bg-slate-950/70 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              <div className="pb-4 border-b border-slate-200 mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <VtsLogo className="h-7" />
                  <span className="font-bold text-slate-900 text-sm">Danh Mục Menu</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-semibold text-sm transition-colors ${
                      activeTab === item.id
                        ? 'bg-vts-soft text-vts-primary font-bold border-l-4 border-vts-primary'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${activeTab === item.id ? 'text-vts-primary' : 'text-slate-400'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 rounded-lg bg-vts-primary hover:bg-vts-dark text-white font-bold text-sm shadow flex items-center justify-center space-x-2"
              >
                <Shield className="w-4 h-4 text-amber-300" />
                <span>Nhận Báo Giá & Tư Vấn</span>
              </button>

              <div className="text-xs text-slate-600 space-y-2 bg-vts-soft p-3 rounded-lg border border-vts-light">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-vts-primary shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-vts-primary shrink-0" />
                  <a href={`tel:${COMPANY_INFO.hotline}`} className="font-bold text-slate-900 hover:underline">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-vts-primary shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
