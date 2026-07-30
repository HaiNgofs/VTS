import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroBanner } from './components/HeroBanner';
import { ShortIntro } from './components/ShortIntro';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { NewsSection } from './components/NewsSection';
import { AboutPage } from './components/AboutPage';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { FloatingCallButton } from './components/FloatingCallButton';
import { Service, Project } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteServicePrefill, setQuoteServicePrefill] = useState<string>('');

  // Dynamic SEO Meta & Title Manager
  useEffect(() => {
    let title = 'Công Ty TNHH Tư Vấn Và Xây Dựng VTS | TVGS, Thiết Kế & PCCC Uy Tín';
    let description = 'VTS Construction - Chuyên nghiệp trong Tư vấn giám sát (TVGS), Tư vấn thiết kế, Thẩm tra, Đấu thầu và Thi công hệ thống PCCC, khí y tế cho các dự án y tế, thương mại, dân dụng hàng đầu tại Hà Nội & Toàn Quốc.';

    if (selectedProject) {
      title = `${selectedProject.name} | Dự Án Tiêu Biểu VTS Construction`;
      description = `Dự án ${selectedProject.name} do VTS đảm nhận vai trò: ${selectedProject.role}. Quy mô: ${selectedProject.scale}, địa điểm: ${selectedProject.location}.`;
    } else if (selectedService) {
      title = `${selectedService.title} | Dịch Vụ Chuyên Nghiệp VTS`;
      description = selectedService.description;
    } else {
      switch (activeTab) {
        case 'about':
          title = 'Giới Thiệu VTS Construction | Hồ Sơ Năng Lực Doanh Nghiệp';
          description = 'Tìm hiểu về Công ty TNHH Tư vấn và Xây dựng VTS - Thành lập từ 2019, chuyên tư vấn giám sát các dự án y tế, công trình nhà nước và thi công hệ thống PCCC uy tín.';
          break;
        case 'services':
          title = 'Dịch Vụ Tư Vấn Giám Sát, Thiết Kế & Thi Công PCCC | VTS Construction';
          description = 'Tổng hợp dịch vụ VTS: TVGS thi công, Tư vấn thiết kế & thẩm tra dự án, Thi công lắp đặt PCCC & hệ thống khí y tế chuyên nghiệp.';
          break;
        case 'projects':
          title = 'Dự Án Tiêu Biểu Do VTS Thực Hiện | Bệnh Viện TNH & PCCC';
          description = 'Hồ sơ năng lực các dự án tiêu biểu: Bệnh viện TNH Lạng Sơn (900 tỷ), Bệnh viện TNH Việt Yên (618 tỷ), KBNN Cầu Giấy và các công trình PCCC trọng điểm.';
          break;
        case 'news':
          title = 'Tin Tức & Truyền Thông Báo Chí | VTS Construction';
          description = 'Cập nhật tin tức, sự kiện báo chí đưa tin về các dự án tư vấn giám sát và nghiệm thu PCCC do VTS thực hiện.';
          break;
        case 'contact':
          title = 'Liên Hệ Báo Giá & Tư Vấn Kỹ Thuật | VTS Construction';
          description = 'Liên hệ Công ty VTS qua Hotline 0966.388.989 - Email vts.company.ltd@gmail.com hoặc trụ sở tại Hoàn Kiếm, Hà Nội để nhận tư vấn kỹ thuật & báo giá dịch vụ.';
          break;
        default:
          break;
      }
    }

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
  }, [activeTab, selectedProject, selectedService]);

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    setQuoteServicePrefill(serviceTitle || '');
    setQuoteModalOpen(true);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col justify-between selection:bg-amber-400 selection:text-slate-900">
      
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* TAB 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-0">
            {/* Banner / Slideshow */}
            <HeroBanner
              onNavigate={handleTabChange}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            {/* Short Intro */}
            <ShortIntro onNavigate={handleTabChange} />

            {/* Featured Services */}
            <ServicesSection
              onSelectService={(s) => setSelectedService(s)}
              onOpenQuoteModal={(title) => handleOpenQuoteModal(title)}
            />

            {/* Featured Projects */}
            <ProjectsSection
              onSelectProject={(p) => setSelectedProject(p)}
            />

            {/* Press & News */}
            <NewsSection />

            {/* Contact Section */}
            <ContactSection />
          </div>
        )}

        {/* TAB 2: ABOUT US */}
        {activeTab === 'about' && (
          <AboutPage
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            onNavigate={handleTabChange}
          />
        )}

        {/* TAB 3: SERVICES */}
        {activeTab === 'services' && (
          <div className="py-6">
            <ServicesSection
              onSelectService={(s) => setSelectedService(s)}
              onOpenQuoteModal={(title) => handleOpenQuoteModal(title)}
            />
          </div>
        )}

        {/* TAB 4: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="py-6 bg-slate-900">
            <ProjectsSection
              onSelectProject={(p) => setSelectedProject(p)}
            />
          </div>
        )}

        {/* TAB 5: NEWS */}
        {activeTab === 'news' && (
          <div className="py-6">
            <NewsSection />
          </div>
        )}

        {/* TAB 6: CONTACT */}
        {activeTab === 'contact' && (
          <div className="py-6">
            <ContactSection />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleTabChange}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating Action Hotline Call Button */}
      <FloatingCallButton
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuoteModal={(title) => handleOpenQuoteModal(title)}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={(title) => handleOpenQuoteModal(title)}
      />

      {/* Quick Consultation Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefilledService={quoteServicePrefill}
      />

    </div>
  );
}
