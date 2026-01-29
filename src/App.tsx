import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import StructuredData from "./components/StructuredData";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import JobApplication from "./pages/JobApplication";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceIncludeDetail from "./pages/ServiceIncludeDetail";
import ServiceExpertiseDetail from "./pages/ServiceExpertiseDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

const queryClient = new QueryClient();

const App = () => {
  const handleNavigation = () => {
    // Navigation handler placeholder
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <StructuredData />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index onNavigate={handleNavigation} />} />
            <Route path="/services" element={<Services onNavigate={handleNavigation} />} />
            <Route path="/services/:slug" element={<ServiceDetail onNavigate={handleNavigation} />} />
            <Route path="/services/:slug/:includeSlug" element={<ServiceIncludeDetail onNavigate={handleNavigation} />} />
            <Route path="/services/:slug/expertise/:expertiseSlug" element={<ServiceExpertiseDetail onNavigate={handleNavigation} />} />
            <Route path="/portfolio" element={<Portfolio onNavigate={handleNavigation} />} />
            <Route path="/blog" element={<Blog onNavigate={handleNavigation} />} />
            <Route path="/blog/:id" element={<BlogDetail onNavigate={handleNavigation} />} />
            <Route path="/about" element={<About onNavigate={handleNavigation} />} />
            <Route path="/contact" element={<Contact onNavigate={handleNavigation} />} />
            <Route path="/careers" element={<Careers onNavigate={handleNavigation} />} />
            <Route path="/careers/:id" element={<JobDetail onNavigate={handleNavigation} />} />
            <Route path="/careers/:id/apply" element={<JobApplication onNavigate={handleNavigation} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
