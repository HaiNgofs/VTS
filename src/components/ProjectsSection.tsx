import React, { useState } from 'react';
import { Building2, Search, ArrowRight, MapPin, Coins, Layers, Eye, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tất cả dự án' },
    { id: 'y-te', label: 'Bệnh viện & Y tế' },
    { id: 'co-quan-nha-nuoc', label: 'Cơ quan nhà nước' },
    { id: 'thuong-mai', label: 'Thương mại & Nội thất' },
    { id: 'pccc', label: 'Thi công PCCC' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-vts-primary/20 text-pink-200 border border-vts-primary/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-vts-primary" />
            <span>Hồ Sơ Năng Lực & Dự Án</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dự Án Tiêu Biểu Do VTS Thực Hiện
          </h2>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Khẳng định thương hiệu và uy tín qua các dự án bệnh viện quy mô lớn, công trình cơ quan nhà nước và hạng mục thi công PCCC chuyên nghiệp.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-vts-primary text-white shadow-md border border-vts-dark'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm theo tên dự án, địa điểm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-vts-primary"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-slate-800/90 rounded-2xl border border-slate-700/80 overflow-hidden shadow-lg hover:border-vts-primary transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-vts-primary text-white font-extrabold text-[11px] px-3 py-1 rounded-md shadow uppercase tracking-wide border border-vts-dark">
                    {project.categoryLabel}
                  </div>

                  {project.isFeatured && (
                    <div className="absolute top-3 right-3 bg-slate-950/80 border border-amber-400/40 text-amber-300 font-bold text-[10px] px-2.5 py-1 rounded-md flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-amber-400" />
                      <span>Trọng điểm</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700">
                      <MapPin className="w-3 h-3 mr-1 text-vts-primary" />
                      {project.location.split(',')[0]}
                    </span>
                    <span className="font-mono bg-vts-primary/30 text-amber-300 font-bold px-2 py-0.5 rounded border border-vts-primary/30">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {project.name}
                  </h3>

                  <div className="space-y-2 bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs text-slate-300">
                    <div className="flex items-start">
                      <Layers className="w-3.5 h-3.5 text-vts-primary mr-2 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400">Quy mô: </span>
                        <span className="font-semibold text-white">{project.scale}</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Coins className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400">Tổng vốn: </span>
                        <span className="font-semibold text-amber-300">{project.investment}</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Eye className="w-3.5 h-3.5 text-vts-primary mr-2 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400">Nhiệm vụ VTS: </span>
                        <span className="font-semibold text-white">{project.role}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 pb-6 pt-0">
                <div className="w-full py-2.5 px-4 rounded-lg bg-slate-700/60 group-hover:bg-vts-primary text-slate-200 group-hover:text-white font-bold text-xs transition-colors flex items-center justify-between">
                  <span>Xem Chi Tiết Dự Án</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-800/40 rounded-2xl border border-slate-700">
            <p className="text-slate-400 text-sm">Không tìm thấy dự án phù hợp với từ khóa "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-amber-400 underline"
            >
              Xóa bộ lọc & Xem tất cả dự án
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
