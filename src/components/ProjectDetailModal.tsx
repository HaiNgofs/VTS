import React from 'react';
import { X, MapPin, Coins, Layers, Eye, CheckCircle2, Building2, PhoneCall, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuoteModal: (projectTitle?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuoteModal
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-200 my-8">
        
        {/* Banner Header */}
        <div className="relative h-64 md:h-80 bg-slate-950">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full border border-slate-700 transition-all z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-vts-primary text-white font-black text-xs px-3 py-0.5 rounded-md uppercase tracking-wider shadow border border-vts-dark">
                {project.categoryLabel}
              </span>
              <span className="bg-slate-900/80 text-amber-300 font-bold text-xs px-2.5 py-0.5 rounded border border-slate-700">
                Năm {project.year}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              {project.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Key Facts Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <div className="flex items-start space-x-2">
              <Layers className="w-4 h-4 text-vts-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block font-medium">Quy mô công trình:</span>
                <span className="font-bold text-slate-900">{project.scale}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Coins className="w-4 h-4 text-vts-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block font-medium">Tổng vốn đầu tư:</span>
                <span className="font-extrabold text-vts-primary">{project.investment}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Eye className="w-4 h-4 text-vts-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block font-medium">Nhiệm vụ VTS:</span>
                <span className="font-bold text-slate-900">{project.role}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-vts-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block font-medium">Địa điểm:</span>
                <span className="font-semibold text-slate-800">{project.location}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Building2 className="w-4 h-4 text-vts-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block font-medium">Chủ đầu tư / Đối tác:</span>
                <span className="font-semibold text-slate-800">{project.client}</span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Mô Tả Chi Tiết Dự Án</h3>
            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              {project.description}
            </p>
          </div>

          {/* Highlights List */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 bg-vts-soft p-5 rounded-2xl border border-vts-light">
              <h4 className="font-bold text-vts-primary text-sm flex items-center">
                <CheckCircle2 className="w-4 h-4 text-vts-primary mr-2" />
                Điểm Nổi Bật Kỹ Thuật & Giám Sát VTS
              </h4>
              <ul className="space-y-2 text-xs text-slate-800 font-medium">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-vts-primary mt-1.5 mr-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Photo Gallery if available */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Hình Ảnh Thực Địa Dự Án</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="h-28 rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                    <img src={img} alt={`${project.name} photo ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">Cần tư vấn năng lực cho dự án tương tự?</span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors flex-1 sm:flex-none"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(project.name);
              }}
              className="px-5 py-2.5 rounded-xl bg-vts-primary hover:bg-vts-dark text-white font-extrabold text-xs transition-colors shadow flex items-center justify-center space-x-1.5 flex-1 sm:flex-none border border-vts-dark"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Yêu Cầu Tư Vấn Ngay</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
