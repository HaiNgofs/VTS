import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Workflow } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuoteModal
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-200 my-8">
        
        {/* Banner */}
        <div className="relative h-56 bg-slate-950">
          <img
            src={service.bgImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full border border-slate-700 transition-all z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="bg-vts-primary text-white font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider shadow border border-vts-dark">
              Mã Dịch Vụ: {service.code}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Tổng Quan Dịch Vụ</h3>
            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3 bg-vts-soft p-5 rounded-2xl border border-vts-light">
            <h4 className="font-bold text-vts-primary text-sm flex items-center">
              <ShieldCheck className="w-4 h-4 text-vts-primary mr-2" />
              Lợi Ích Khi Chọn VTS
            </h4>
            <ul className="space-y-2 text-xs text-slate-800 font-medium">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-vts-primary mr-2 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center">
              <Workflow className="w-4 h-4 text-vts-primary mr-2" />
              Quy Trình Làm Việc Chuyên Nghiệp
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.workflow.map((step, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start space-x-3 text-xs">
                  <span className="w-6 h-6 rounded-full bg-vts-primary text-white font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 font-medium mt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Projects */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Các công trình áp dụng tiêu biểu:</span>
            <div className="flex flex-wrap gap-2">
              {service.featuredProjects.map((p, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-800 font-semibold text-xs px-3 py-1 rounded-lg border border-slate-200">
                  {p}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs"
          >
            Đóng
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal(service.title);
            }}
            className="px-5 py-2.5 rounded-xl bg-vts-primary hover:bg-vts-dark text-white font-extrabold text-xs shadow flex items-center space-x-1.5 border border-vts-dark"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Nhận Báo Giá Dịch Vụ Này</span>
          </button>
        </div>

      </div>
    </div>
  );
};
