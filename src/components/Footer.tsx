import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { VtsLogo } from './VtsLogo';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-vts-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Company Profile & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5">
              <VtsLogo className="h-12" variant="light" />
              <div className="border-l border-slate-800 pl-3">
                <h3 className="font-extrabold text-white text-base leading-tight">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-vts-primary font-mono tracking-wider font-semibold">
                  {COMPANY_INFO.nameEng}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
              Đơn vị hoạt động chuyên nghiệp trong lĩnh vực tư vấn giám sát, thiết kế, thẩm tra, đấu thầu và thi công hệ thống phòng cháy chữa cháy cho các công trình xây dựng y tế, cơ quan nhà nước và hạ tầng công cộng.
            </p>

            {/* Slogan Pill */}
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-vts-primary/40 px-3.5 py-1.5 rounded-lg text-amber-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-vts-primary" />
              <span>UY TÍN – CHẤT LƯỢNG – HIỆU QUẢ</span>
            </div>
          </div>

          {/* Col 2: Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Danh Mục Dịch Vụ VTS
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition-colors">
                  • Tư vấn giám sát (TVGS)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition-colors">
                  • Tư vấn thiết kế (TVTK)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition-colors">
                  • Tư vấn thẩm tra (TVTT)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition-colors">
                  • Tư vấn đấu thầu (TVDT)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 font-bold text-vts-primary transition-colors">
                  • Thi công hệ thống PCCC (HOT)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Thông Tin Liên Hệ Trực Tiếp
            </h4>
            
            <ul className="text-xs space-y-2.5 text-slate-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-vts-primary shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>

              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-vts-primary shrink-0" />
                <span>Hotline / Zalo: </span>
                <a href={`tel:${COMPANY_INFO.hotline}`} className="font-extrabold text-amber-300 hover:underline">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-vts-primary shrink-0" />
                <span>Email: </span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-amber-300">
                  {COMPANY_INFO.email}
                </a>
              </li>

              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-vts-primary shrink-0" />
                <span>Thành lập từ năm: <strong className="text-white font-mono">2019</strong></span>
              </li>
            </ul>

            <button
              onClick={onOpenQuoteModal}
              className="mt-3 w-full py-2.5 px-4 rounded-lg bg-vts-primary hover:bg-vts-dark text-white font-bold text-xs transition-colors shadow border border-vts-dark"
            >
              Gửi Yêu Cầu Tư Vấn Ngay
            </button>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} CÔNG TY TNHH TƯ VẤN VÀ XÂY DỰNG VTS. All rights reserved.</p>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-vts-primary text-slate-300 hover:text-white border border-slate-800 flex items-center space-x-1.5 transition-colors"
              title="Về đầu trang"
            >
              <span>Đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
