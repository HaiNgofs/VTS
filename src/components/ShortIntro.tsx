import React from 'react';
import { ShieldCheck, Award, Zap, ArrowRight, Building, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ShortIntroProps {
  onNavigate: (tab: string) => void;
}

export const ShortIntro: React.FC<ShortIntroProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-slate-50 text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text Content & Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-vts-soft border border-vts-light text-vts-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-vts-primary" />
              <span>Về Chúng Tôi</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Giới thiệu về Công ty Tư vấn và Xây dựng VTS
            </h2>

            {/* Official Introduction Paragraph */}
            <div className="prose prose-slate max-w-none text-slate-700 text-base md:text-lg leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-vts-primary rounded-l-2xl" />
              <p className="font-normal text-justify">
                {COMPANY_INFO.shortIntro}
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-vts-primary transition-all group">
                <div className="w-10 h-10 rounded-lg bg-vts-soft text-vts-primary flex items-center justify-center mb-3 group-hover:bg-vts-primary group-hover:text-white transition-all">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Uy Tín</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Cam kết minh bạch, chuẩn mực trong hợp đồng và tuân thủ pháp luật.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-vts-primary transition-all group">
                <div className="w-10 h-10 rounded-lg bg-vts-soft text-vts-primary flex items-center justify-center mb-3 group-hover:bg-vts-primary group-hover:text-white transition-all">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Chất Lượng</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Giám sát & thi công khắt khe, áp dụng đúng tiêu chuẩn kỹ thuật hiện hành.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-vts-primary transition-all group">
                <div className="w-10 h-10 rounded-lg bg-vts-soft text-vts-primary flex items-center justify-center mb-3 group-hover:bg-vts-primary group-hover:text-white transition-all">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Hiệu Quả</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Tối ưu hóa thời gian, tiến độ dự án và chi phí cho Chủ đầu tư.</p>
              </div>

            </div>

            {/* Read More Button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-vts-primary hover:bg-vts-dark transition-all shadow-md hover:shadow-vts-primary/20 active:scale-95"
              >
                <span>Xem Lịch Sử Thành Lập & Năng Lực VTS</span>
                <ArrowRight className="w-4 h-4 ml-2 text-amber-300" />
              </button>
            </div>

          </div>

          {/* Right Column: Visual Feature Showcase & Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Kỹ sư tư vấn giám sát VTS"
                className="w-full h-[420px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Overlay Content Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/80 text-white space-y-3">
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Năng lực cốt lõi</span>
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">Từ 2019</span>
                </div>
                
                <ul className="text-xs space-y-2 text-slate-300 font-medium">
                  <li className="flex items-center">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0" />
                    Tư vấn giám sát dự án y tế quy mô lớn (300 giường bệnh)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0" />
                    Liên danh thực hiện các gói thầu TVGS gần 900 tỷ đồng
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0" />
                    Mở rộng thi công trọn gói hệ thống PCCC đạt chuẩn
                  </li>
                </ul>
              </div>
            </div>

            {/* Floating Decorative Experience Badge */}
            <div className="absolute -bottom-5 -left-5 bg-vts-primary text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center space-x-3 border-2 border-white">
              <div className="text-3xl font-black text-amber-300">5+</div>
              <div className="text-xs font-bold leading-tight">
                Năm Phát Triển<br />Vững Chắc
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
