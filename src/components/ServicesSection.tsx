import React from 'react';
import { Eye, Compass, FileCheck2, Briefcase, Flame, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenQuoteModal }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-vts-soft text-vts-primary border border-vts-light px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-vts-primary" />
            <span>Lĩnh Vực Hoạt Động Cốt Lõi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dịch Vụ Nổi Bật Của VTS
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Chúng tôi cung cấp giải pháp tư vấn kỹ thuật toàn diện và thi công PCCC chuyên nghiệp, đảm bảo tiến độ, chất lượng và tối ưu hóa hiệu quả đầu tư.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const isPCCC = service.id === 'thi-cong-pccc';
            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 ${
                  isPCCC 
                    ? 'border-vts-primary ring-2 ring-vts-primary/20 shadow-lg' 
                    : 'border-slate-200/90 shadow-sm hover:shadow-xl hover:border-vts-light'
                }`}
              >
                {/* Service Header / Image Banner */}
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md text-amber-300 border border-vts-primary/40 font-bold text-xs px-3 py-1 rounded-full flex items-center space-x-1.5">
                      <span>{service.code}</span>
                      {isPCCC && <span className="bg-vts-primary text-white px-1.5 py-0.2 text-[10px] font-black rounded">HOT</span>}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3">
                      <div className={`p-3 rounded-xl shadow-lg border ${
                        isPCCC 
                          ? 'bg-vts-primary text-white border-vts-dark' 
                          : 'bg-slate-950 text-vts-primary border-vts-primary/40'
                      }`}>
                        {getServiceIcon(service.iconName)}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-slate-600 text-sm leading-relaxed min-h-[60px]">
                      {service.shortDesc}
                    </p>

                    {/* Key Benefits List */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Ưu điểm nổi bật:</span>
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-start text-xs text-slate-700 font-medium space-x-2">
                          <Check className="w-3.5 h-3.5 text-vts-primary shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center space-x-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-vts-primary text-slate-800 hover:text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 group/btn"
                  >
                    <span>Xem Chi Tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="py-2.5 px-3.5 rounded-lg bg-vts-primary hover:bg-vts-dark text-white font-bold text-xs transition-colors shadow-sm"
                    title="Nhận báo giá dịch vụ này"
                  >
                    Tư Vấn
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Banner below services */}
        <div className="mt-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-2xl p-8 md:p-10 border border-vts-primary/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-amber-300">
              Cần tư vấn giải pháp kỹ thuật cho công trình của bạn?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Đội ngũ kỹ sư VTS sẵn sàng hỗ trợ khảo sát, lập báo cáo phương án tư vấn giám sát, thiết kế và báo giá thi công PCCC nhanh chóng.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-vts-primary hover:bg-vts-dark text-white font-extrabold text-sm shadow-lg hover:shadow-vts-primary/30 transition-all active:scale-95 border border-vts-dark"
          >
            Liên Hệ Kỹ Sư VTS
          </button>
        </div>

      </div>
    </section>
  );
};
