import React, { useState } from 'react';
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
