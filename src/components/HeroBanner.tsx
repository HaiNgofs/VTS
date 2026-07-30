import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Building2, Coins, Award, ArrowRight, PhoneCall, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroBannerProps {
  onNavigate: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1920&q=80',
      badge: 'Đơn Vị Tư Vấn Giám Sát Uy Tín',
      title: 'Tư vấn Giám sát Các Công trình Y tế Trọng điểm',
      subtitle: 'Đồng hành giám sát dự án Bệnh viện TNH Lạng Sơn (900 tỷ) & Bệnh viện TNH Việt Yên (618 tỷ)',
      ctaText: 'Khám phá dự án tiêu biểu',
      targetTab: 'projects'
    },
    {
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80',
      badge: 'Giải Pháp Kỹ Thuật Đột Phá 2024',
      title: 'Thi công Hệ thống PCCC Chuyên nghiệp & An toàn',
      subtitle: 'Cung cấp thiết bị kiểm định, thi công lắp đặt và hỗ trợ nghiệm thu đạt quy chuẩn PCCC Bộ Công An',
      ctaText: 'Xem dịch vụ thi công PCCC',
      targetTab: 'services'
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1920&q=80',
      badge: 'Nền Tảng Vững Chắc Từ 2019',
      title: 'Tư vấn Thiết kế, Thẩm tra & Đấu thầu Công trình',
      subtitle: 'Giải pháp kỹ thuật tối ưu chi phí - Đảm bảo tiến độ, chất lượng và hiệu quả đầu tư toàn diện',
      ctaText: 'Tìm hiểu về VTS',
      targetTab: 'about'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Main Slideshow Canvas */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[650px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Dark Vignette Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 ease-linear"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto h-full px-4 flex flex-col justify-center">
              <div className="max-w-3xl space-y-4 md:space-y-6">
                
                {/* Badge & Slogan Header */}
                <div className="inline-flex items-center space-x-2 bg-vts-primary/20 backdrop-blur-md border border-vts-primary/40 px-3.5 py-1.5 rounded-full text-pink-200 text-xs md:text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4 text-vts-primary shrink-0" />
                  <span>{slide.badge}</span>
                </div>

                {/* Company Name & Tagline Banner */}
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    CÔNG TY TNHH TƯ VẤN VÀ XÂY DỰNG VTS
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 mt-1 uppercase font-mono">
                    {COMPANY_INFO.nameEng}
                  </p>
                </div>

                {/* Slide Main Headline & Subtitle */}
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-300 leading-snug">
                    {slide.title}
                  </h2>
                  <p className="text-slate-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Core Commitment Slogan Pill */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phương châm:</span>
                  <div className="flex items-center space-x-2 bg-slate-900/90 px-3.5 py-1.5 rounded-md border border-vts-primary/40 text-xs text-white font-bold">
                    <CheckCircle2 className="w-4 h-4 text-vts-primary" />
                    <span>UY TÍN – CHẤT LƯỢNG – HIỆU QUẢ</span>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate(slide.targetTab)}
                    className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-vts-primary hover:bg-vts-dark transition-all shadow-lg hover:shadow-vts-primary/30 active:scale-95 border border-vts-dark"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-amber-300" />
                  </button>

                  <button
                    onClick={onOpenQuoteModal}
                    className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-bold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-all active:scale-95"
                  >
                    <PhoneCall className="w-4 h-4 mr-2 text-vts-primary" />
                    <span>Tư Vấn Trực Tiếp ({COMPANY_INFO.phoneDisplay})</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-slate-700/50 flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-slate-700/50 flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-vts-primary' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Key Company Quick Metrics Bar */}
      <div className="bg-slate-950 border-t border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          <div className="bg-slate-900/80 p-4 rounded-xl border border-vts-primary/30 flex items-center space-x-4 hover:border-vts-primary/60 transition-all">
            <div className="w-12 h-12 bg-vts-primary/20 text-vts-primary rounded-lg flex items-center justify-center shrink-0 border border-vts-primary/40">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-white">1.500+ Tỷ</div>
              <div className="text-xs text-slate-300 font-medium">Tổng Vốn Giám Sát Dự Án</div>
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-center space-x-4 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-lg flex items-center justify-center shrink-0 border border-amber-500/30">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-white">300+ Giường</div>
              <div className="text-xs text-slate-300 font-medium">Quy Mô Mỗi Dự Án Y Tế</div>
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-center space-x-4 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center shrink-0 border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-emerald-400">100% Đạt Chuẩn</div>
              <div className="text-xs text-slate-300 font-medium">Chất Lượng Kỹ Thuật & PCCC</div>
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-center space-x-4 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 bg-vts-primary/20 text-vts-primary rounded-lg flex items-center justify-center shrink-0 border border-vts-primary/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-white">Từ 2019</div>
              <div className="text-xs text-slate-300 font-medium">Đội Ngũ Kỹ Sư Chuyên Nghiệp</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
