import React, { useState } from 'react';
import { Newspaper, ExternalLink, Calendar, Tag, ArrowRight, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { NEWS_DATA } from '../data/companyData';
import { NewsItem } from '../types';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="py-16 bg-slate-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-vts-soft text-vts-primary border border-vts-light px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5 text-vts-primary" />
            <span>Sự Kiện & Báo Chí</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tin Tức & Truyền Thông Về VTS
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Cập nhật những thông tin báo chí mới nhất về các dự án trọng điểm do VTS thực hiện tư vấn giám sát và thi công PCCC.
          </p>
        </div>

        {/* Featured Hot News Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {NEWS_DATA.filter(item => item.isHot).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-vts-light transition-all duration-300 overflow-hidden flex flex-col md:flex-row group"
            >
              <div className="md:w-1/2 relative h-56 md:h-auto overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-vts-primary text-white font-black text-[10px] px-2.5 py-1 rounded uppercase tracking-wider shadow">
                  Báo Chí Nói Về VTS
                </div>
              </div>

              <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-slate-500">
                    <span className="flex items-center font-medium">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-vts-primary" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="text-vts-primary font-bold">{article.source}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedArticle(article)}
                    className="text-base font-bold text-slate-900 group-hover:text-vts-primary transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-bold text-slate-900 hover:text-vts-primary flex items-center space-x-1"
                  >
                    <span>Xem tóm tắt tin</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {article.externalUrl && (
                    <a
                      href={article.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 rounded-md bg-vts-soft hover:bg-vts-light text-vts-primary text-xs font-bold transition-colors border border-vts-light"
                      title="Mở bài báo gốc trên cổng thông tin báo chí"
                    >
                      <span>Link Bài Báo</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular News Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {NEWS_DATA.filter(item => !item.isHot).map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {article.date}
                  </span>
                </div>

                <h3 
                  onClick={() => setSelectedArticle(article)}
                  className="font-bold text-slate-900 text-base group-hover:text-amber-600 transition-colors leading-snug cursor-pointer"
                >
                  {article.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-bold text-slate-800 hover:text-amber-600 flex items-center"
                >
                  <span>Đọc chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>

                <span className="text-[11px] text-slate-600 italic">Nguồn: {article.source}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-200 my-8">
            
            <div className="relative h-56 bg-slate-900">
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full border border-slate-700 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-amber-500 text-slate-950 font-bold text-xs px-2.5 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">
                  {selectedArticle.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span>Nguồn đưa tin: <strong className="text-slate-800">{selectedArticle.source}</strong></span>
                <span>Ngày đăng: {selectedArticle.date}</span>
              </div>

              <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                {selectedArticle.content ? (
                  selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{selectedArticle.summary}</p>
                )}
              </div>

              {selectedArticle.externalUrl && (
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-amber-50 p-4 rounded-xl border border-amber-200/80">
                  <div className="text-xs text-amber-900 font-medium">
                    Bài viết chính thức công bố trên cổng thông tin báo chí.
                  </div>
                  <a
                    href={selectedArticle.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors shadow shrink-0"
                  >
                    <span>Mở link bài báo gốc</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              )}
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                Đóng lại
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
