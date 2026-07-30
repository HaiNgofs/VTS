import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledService = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(prefilledService || 'Tư vấn giám sát');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-200 my-8">
        
        {/* Modal Header */}
        <div className="bg-slate-950 text-white p-6 relative border-b border-vts-primary/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-vts-primary text-xs font-bold uppercase mb-1">
            <Shield className="w-4 h-4" />
            <span>Tư Vấn Kỹ Thuật Trực Tiếp</span>
          </div>

          <h3 className="text-xl font-extrabold text-white">
            Yêu Cầu Báo Giá & Tư Vấn Dự Án
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {COMPANY_INFO.name}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-vts-soft text-vts-primary rounded-full flex items-center justify-center mx-auto border border-vts-light">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Đã Nhận Yêu Cầu Tư Vấn!</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thông tin yêu cầu đã được chuyển tới email <strong className="text-vts-primary font-mono">{COMPANY_INFO.email}</strong>. Kỹ sư trưởng VTS sẽ gọi lại trực tiếp qua SĐT <strong className="text-slate-900">{phone}</strong> để trao đổi chi tiết về dịch vụ <strong className="text-vts-primary">{service}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-vts-primary text-white font-bold text-xs hover:bg-vts-dark shadow"
              >
                Hoàn tất & Đóng
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-vts-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0966..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-vts-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Dịch vụ cần báo giá
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-vts-primary bg-white"
                >
                  <option value="Tư vấn giám sát">Tư vấn giám sát (TVGS)</option>
                  <option value="Tư vấn thiết kế">Tư vấn thiết kế (TVTK)</option>
                  <option value="Tư vấn thẩm tra">Tư vấn thẩm tra (TVTT)</option>
                  <option value="Tư vấn đấu thầu">Tư vấn đấu thầu (TVDT)</option>
                  <option value="Thi công hệ thống PCCC">Thi công hệ thống PCCC (TCPCCC)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Ghi chú dự án (Quy mô, địa điểm)
                </label>
                <textarea
                  rows={3}
                  placeholder="Mô tả tóm tắt về quy mô, địa điểm công trình..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-vts-primary"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-vts-primary hover:bg-vts-dark text-white font-extrabold text-sm shadow transition-all flex items-center justify-center space-x-2 border border-vts-dark"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Báo Giá</span>
                </button>

                <div className="text-center pt-2 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500">Hoặc gọi hotline trực tiếp: </span>
                  <a href={`tel:${COMPANY_INFO.hotline}`} className="text-xs font-extrabold text-vts-primary hover:underline">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
