import React from 'react';
import { Building2, Users, ShieldCheck, Award, TrendingUp, Calendar, CheckCircle2, HeartHandshake, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, MILESTONES } from '../data/companyData';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal, onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-20">
      
      {/* Page Hero Header */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4 relative overflow-hidden border-b border-vts-primary/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-vts-primary/20 via-transparent to-transparent opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-vts-primary/20 text-pink-200 border border-vts-primary/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-vts-primary" />
            <span>Hồ Sơ Doanh Nghiệp</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Giới Thiệu Chi Tiết Về VTS Construction
          </h1>

          <p className="text-amber-300 font-medium text-base md:text-lg max-w-3xl mx-auto">
            CÔNG TY TNHH TƯ VẤN VÀ XÂY DỰNG VTS
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-mono tracking-widest uppercase">
            {COMPANY_INFO.nameEng}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* Core Overview & Founding Story Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-200/80 space-y-8">
          
          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center">
              <span className="w-2 h-8 bg-vts-primary rounded-full mr-3" />
              Lịch Sử Thành Lập & Quá Trình Phát Triển
            </h2>
          </div>

          {/* Timeline Narrative Grid */}
          <div className="space-y-8">
            {COMPANY_INFO.fullHistory.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 md:pl-8 border-l-2 border-vts-primary/50 space-y-2 group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-vts-primary border-2 border-white group-hover:scale-125 transition-transform" />
                
                <h3 className="text-lg md:text-xl font-bold text-slate-900 flex items-center space-x-2">
                  <span className="bg-vts-primary text-white px-3 py-1 rounded-md text-xs font-mono font-bold shadow-sm">
                    {item.period.split(':')[0]}
                  </span>
                  <span className="text-vts-primary font-bold">{item.period.split(':')[1] || ''}</span>
                </h3>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Milestone Cards Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Cột Mốc Phát Triển Tóm Tắt
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Từ khởi đầu 2 nhân sự đến các gói thầu tư vấn giám sát y tế quy mô gần 1.500 tỷ đồng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((m, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-vts-primary hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-black text-slate-900">{m.year}</span>
                    <span className="bg-vts-soft text-vts-primary text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-vts-light">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{m.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">{m.description}</p>
                </div>

                {m.highlightProjects && (
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Dự án tiêu biểu:</span>
                    <div className="flex flex-wrap gap-1">
                      {m.highlightProjects.map((p, pIdx) => (
                        <span key={pIdx} className="bg-slate-100 text-slate-700 font-medium text-[10px] px-2 py-0.5 rounded">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Consortium & PCCC Expansion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Consortium Highlight */}
          <div className="bg-slate-950 text-white p-8 rounded-3xl border border-vts-primary/30 shadow-xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-md text-xs font-bold uppercase">
              <HeartHandshake className="w-4 h-4 text-blue-400" />
              <span>Đối Tác & Liên Danh Hợp Tác</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-amber-300">
              Liên Danh Chiến Lược Với Công Ty Cổ Phần Tư Vấn Và Đầu Tư HCT
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Từ năm 2023, sự kết hợp giữa VTS và Công ty CP TV&ĐẦU HCT đã tạo nên sức mạnh tổng hợp vượt trội, đấu thầu thành công và thực hiện công tác Tư vấn giám sát các công trình y tế cấp đặc biệt như Bệnh viện TNH Việt Yên (618 tỷ đồng) và Bệnh viện TNH Lạng Sơn (gần 900 tỷ đồng).
            </p>

            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-vts-primary mr-2 shrink-0" />
                Hội tụ đội ngũ Chuyên gia & Kỹ sư giám sát chứng chỉ hành nghề Hạng I.
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-vts-primary mr-2 shrink-0" />
                Đảm bảo tiến độ thi công khắt khe và nghiệm thu PCCC, khí y tế chuẩn quốc gia.
              </li>
            </ul>
          </div>

          {/* PCCC Construction Expansion */}
          <div className="bg-gradient-to-br from-vts-soft via-white to-vts-soft/50 p-8 rounded-3xl border border-vts-light shadow-md space-y-4">
            <div className="inline-flex items-center space-x-2 bg-vts-primary text-white px-3 py-1 rounded-md text-xs font-bold uppercase shadow-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Hướng Phát Triển Mới</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Lĩnh Vực Thi Công Hệ Thống Phòng Cháy Chữa Cháy (PCCC)
            </h3>

            <p className="text-slate-700 text-sm leading-relaxed">
              Đáp ứng nhu cầu cấp thiết về an toàn PCCC, VTS đã mở rộng và triển khai trực tiếp thi công hạng mục PCCC cho các tòa nhà, bệnh viện và công trình nhà nước. Hướng đi mới được đón nhận nồng nhiệt nhờ tinh thần làm việc tận tâm và đặt sự hài lòng của khách hàng lên hàng đầu.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={() => onNavigate('services')}
                className="px-5 py-2.5 rounded-xl bg-vts-primary hover:bg-vts-dark text-white font-bold text-xs shadow transition-colors"
              >
                Xem chi tiết dịch vụ PCCC
              </button>
            </div>
          </div>

        </div>

        {/* Company Legal & Contact Quick Summary Box */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-vts-primary uppercase tracking-widest">Trụ sở chính:</span>
            <h3 className="text-lg font-extrabold text-slate-900">{COMPANY_INFO.name}</h3>
            <p className="text-xs text-slate-600">{COMPANY_INFO.address}</p>
            <p className="text-xs text-slate-600 font-mono">Hotline: {COMPANY_INFO.phoneDisplay} | Email: {COMPANY_INFO.email}</p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-vts-primary hover:bg-vts-dark text-white font-extrabold text-sm shadow-md transition-all active:scale-95 flex items-center space-x-2 border border-vts-dark"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Liên Hệ Hợp Tác Với VTS</span>
          </button>
        </div>

      </div>
    </div>
  );
};
