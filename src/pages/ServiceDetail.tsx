import React, { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import { services } from '@/data/ServiceData';
import { Check } from 'lucide-react';
import teamCollaboration from "@/assets/team-collaboration.jpg";
import modernOffice from "@/assets/modern-office.jpg";

interface ServiceDetailProps {
    onNavigate: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ onNavigate }) => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const service = services.find(
        (s) => s.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <TopBar />
            <Navigation onNavigate={onNavigate} />
            <PageBanner
                title={service.title}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: service.title }
                ]}
                onNavigate={onNavigate}
            />

            <main className="flex-grow">
                <div className="container mx-auto px-4 py-16 lg:py-24">
                    {/* Header */}
                    <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-6 text-center">
                        About <span className="text-primary">{service.title}</span>
                    </h2>

                    {/* About Section */}
                    <div className="space-y-6 mb-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-montserrat text-lg">
                                    {service.detailedDescription.charAt(0)}
                                </div>
                            </div>
                            <p className="text-muted-foreground text-base leading-relaxed font-montserrat pt-1">
                                {service.detailedDescription}
                            </p>
                        </div>

                        <p className="text-muted-foreground text-base leading-relaxed font-montserrat text-center">
                            Our team of experts brings years of experience and proven methodologies to deliver exceptional results. We focus on understanding your unique requirements and crafting tailored solutions that drive real business value.
                        </p>
                    </div>

                    {/* Services Include */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4 font-poppins text-center">Services Include:</h3>
                        <p className="text-muted-foreground mb-6 text-base leading-relaxed font-montserrat max-w-4xl mx-auto text-center">
                            Our comprehensive {service.title.toLowerCase()} services cover all aspects of development and maintenance. We ensure quality delivery with attention to detail and industry best practices.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-poppins">
                            {service.includes.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        onNavigate();
                                        navigate(`/services/${slug}/${item.toLowerCase().replace(/\s+/g, '-')}`);
                                    }}
                                    className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                                        <Check className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                    </div>
                                    <span className="text-sm text-foreground font-medium font-poppins">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="rounded-2xl overflow-hidden h-72 md:h-96 shadow-md">
                            <img
                                src={teamCollaboration}
                                alt="Team collaboration"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden h-72 md:h-96 shadow-md">
                            <img
                                src={modernOffice}
                                alt="Modern office"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Our Expertise */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 font-poppins">
                            Our Expertise In <span className="text-primary">{service.title}</span>
                        </h3>
                        <p className="text-muted-foreground mb-8 text-base leading-relaxed font-montserrat max-w-4xl">
                            We bring years of experience and proven methodologies to deliver exceptional results. Our approach combines technical excellence with creative problem-solving.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {service.expertise.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-3xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 bg-[#FBBF24] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="text-white font-bold font-poppins text-xl">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h4 className="font-poppins text-foreground mb-3 text-xl font-medium">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-montserrat">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Service Benefits */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-4 font-poppins text-center">Service benefits:</h3>
                        <p className="text-muted-foreground mb-6 text-base leading-relaxed font-montserrat max-w-4xl mx-auto text-center">
                            Partnering with us for {service.title.toLowerCase()} brings numerous advantages to your business. We are committed to delivering solutions that exceed expectations.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                            {service.benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group cursor-default"
                                >
                                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:bg-primary transition-colors duration-300">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full group-hover:bg-primary-foreground transition-colors duration-300"></div>
                                    </div>
                                    <span className="text-foreground font-medium text-base leading-relaxed font-montserrat">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
