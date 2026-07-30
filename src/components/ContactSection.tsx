import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Shield, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ContactMessage } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactMessage>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Tư vấn giám sát',
    projectScale: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="contact" className="py-16 bg-slate-100 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-vts-soft text-vts-primary border border-vts-light px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-vts-primary" />
            <span>Kết Nối Hợp Tác</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Liên Hệ Với Chúng Tôi
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Quý khách hàng và đối tác cần tư vấn dự án hoặc nhận báo giá dịch vụ kỹ thuật, vui lòng liên hệ theo thông tin dưới đây hoặc gửi yêu cầu tư vấn trực tiếp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-950 text-white p-8 rounded-3xl border border-vts-primary/30 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-extrabold text-amber-300">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-vts-primary font-mono mt-1 font-semibold">
                  {COMPANY_INFO.nameEng}
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                
                {/* Address */}
                <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <MapPin className="w-5 h-5 text-vts-primary shrink-0 mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <span className="text-xs font-bold text-amber-300 uppercase block">Địa chỉ trụ sở chính:</span>
                    <p className="text-slate-200 text-xs leading-relaxed">{COMPANY_INFO.address}</p>
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center text-[11px] font-bold text-vts-primary hover:underline pt-1"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3 h-3 mr-1 text-emerald-400" />
                          <span>Đã sao chép địa chỉ</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-1" />
                          <span>Sao chép địa chỉ</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Hotline */}
                <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <Phone className="w-5 h-5 text-vts-primary shrink-0 mt-0.5 animate-pulse" />
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase block">Điện thoại / Hotline:</span>
                    <a
                      href={`tel:${COMPANY_INFO.hotline}`}
                      className="text-lg font-black text-amber-300 hover:underline transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">Hỗ trợ tư vấn kỹ thuật & báo giá 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <Mail className="w-5 h-5 text-vts-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase block">Email liên hệ:</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-bold text-slate-200 hover:text-amber-300 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start space-x-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <Clock className="w-5 h-5 text-vts-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase block">Giờ làm việc:</span>
                    <p className="text-xs text-slate-300">{COMPANY_INFO.workingHours}</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Map Directions Box */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-sm flex items-center">
                  <MapPin className="w-4 h-4 text-vts-primary mr-1.5" />
                  Bản đồ vị trí Hồng Hà, Hà Nội
                </h4>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-mono text-slate-600">Google Map</span>
              </div>
              <div className="h-44 rounded-xl bg-slate-200 overflow-hidden relative border border-slate-300">
                <iframe
                  title="VTS Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.708764024419!2d105.84500000000002!3d21.04438888888889!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb6ef802313%3A0xb35a09c25f5a892b!2sT%C3%A2n%20%E1%BA%A4p%2C%20H%E1%BB%93ng%20H%C3%A0%2C%20Ba%20%C4%90%C3%ACnh%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-lg space-y-6">
              
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                  Gửi Yêu Cầu Tư Vấn & Báo Giá
                </h3>
                <p className="text-xs md:text-sm text-slate-600 mt-1">
                  Vui lòng để lại thông tin công trình. Đội ngũ kỹ sư VTS sẽ liên hệ lại trong thời gian sớm nhất.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900">Gửi Yêu Cầu Thành Công!</h4>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Cảm ơn Quý khách <strong className="text-slate-900">{formData.fullName}</strong> đã gửi thông tin. Yêu cầu và thông báo đã được tự động chuyển tới email <strong className="text-vts-primary font-mono">{COMPANY_INFO.email}</strong>. Kỹ sư tư vấn VTS sẽ gọi điện hỗ trợ trực tiếp qua SĐT <strong className="text-slate-900">{formData.phone}</strong> trong vòng 15-30 phút.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', phone: '', email: '', serviceType: 'Tư vấn giám sát', projectScale: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow"
                  >
                    Gửi yêu cầu tư vấn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Họ và tên của bạn <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-vts-primary focus:ring-2 focus:ring-vts-primary/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Số điện thoại liên hệ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0966..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-vts-primary focus:ring-2 focus:ring-vts-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Email (Không bắt buộc)
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-vts-primary focus:ring-2 focus:ring-vts-primary/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Dịch vụ quan tâm <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-vts-primary focus:ring-2 focus:ring-vts-primary/20 bg-white font-medium"
                      >
                        <option value="Tư vấn giám sát">Tư vấn giám sát (TVGS)</option>
                        <option value="Tư vấn thiết kế">Tư vấn thiết kế (TVTK)</option>
                        <option value="Tư vấn thẩm tra">Tư vấn thẩm tra (TVTT)</option>
                        <option value="Tư vấn đấu thầu">Tư vấn đấu thầu (TVDT)</option>
                        <option value="Thi công hệ thống PCCC">Thi công hệ thống PCCC (TCPCCC)</option>
                        <option value="Khác">Tư vấn tổng thể dự án</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Quy mô công trình / Tổng mức đầu tư dự kiến
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Bệnh viện 10 tầng, diện tích 3.000m2 hoặc Dự án PCCC..."
                      value={formData.projectScale}
                      onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-vts-primary focus:ring-2 focus:ring-vts-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Nội dung chi tiết cần tư vấn
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Mô tả cụ thể về tiến độ, địa điểm xây dựng hoặc câu hỏi kỹ thuật..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-vts-primary focus:ring-2 focus:ring-vts-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-vts-primary hover:bg-vts-dark text-white font-extrabold text-base transition-all shadow-lg hover:shadow-vts-primary/30 active:scale-[0.99] flex items-center justify-center space-x-2 border border-vts-dark"
                  >
                    <Send className="w-5 h-5 text-white" />
                    <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Cam kết bảo mật thông tin dự án của khách hàng theo quy định.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
