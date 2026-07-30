import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FloatingCallButtonProps {
  onOpenQuoteModal: () => void;
}

export const FloatingCallButton: React.FC<FloatingCallButtonProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Quick Zalo / Quote Trigger */}
      <button
        onClick={onOpenQuoteModal}
        className="pointer-events-auto bg-slate-900 hover:bg-vts-primary text-white p-3 rounded-full shadow-2xl border border-vts-primary/40 hover:scale-110 transition-all flex items-center justify-center group"
        title="Báo Giá & Tư Vấn Nhanh"
      >
        <MessageCircle className="w-6 h-6 text-amber-300" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold text-white">
          Yêu Cầu Tư Vấn
        </span>
      </button>

      {/* Floating Phone Hotline Button */}
      <a
        href={`tel:${COMPANY_INFO.hotline}`}
        className="pointer-events-auto bg-vts-primary hover:bg-vts-dark text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center space-x-2 border-2 border-white"
        title={`Gọi Hotline ${COMPANY_INFO.phoneDisplay}`}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <Phone className="w-5 h-5 fill-white text-white" />
        </div>
        <span className="font-black text-xs hidden sm:inline pr-1">
          {COMPANY_INFO.phoneDisplay}
        </span>
      </a>

    </div>
  );
};
