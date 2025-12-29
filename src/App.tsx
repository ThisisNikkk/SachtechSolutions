import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useState, useEffect } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const JobDetail = lazy(() => import("./pages/JobDetail"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ServiceIncludeDetail = lazy(() => import("./pages/ServiceIncludeDetail"));
const ServiceExpertiseDetail = lazy(() => import("./pages/ServiceExpertiseDetail"));

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          {loading && <Loader />}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Index onNavigate={handleNavigation} />} />
              <Route path="/services" element={<Services onNavigate={handleNavigation} />} />
              <Route path="/services/:slug" element={<ServiceDetail onNavigate={handleNavigation} />} />
              <Route path="/services/:slug/:includeSlug" element={<ServiceIncludeDetail onNavigate={handleNavigation} />} />
              <Route path="/services/:slug/expertise/:expertiseSlug" element={<ServiceExpertiseDetail onNavigate={handleNavigation} />} />
              <Route path="/portfolio" element={<Portfolio onNavigate={handleNavigation} />} />
              <Route path="/about" element={<About onNavigate={handleNavigation} />} />
              <Route path="/contact" element={<Contact onNavigate={handleNavigation} />} />
              <Route path="/careers" element={<Careers onNavigate={handleNavigation} />} />
              <Route path="/careers/:id" element={<JobDetail onNavigate={handleNavigation} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
