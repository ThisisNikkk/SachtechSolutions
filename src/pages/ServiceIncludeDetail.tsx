import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import { serviceIncludes } from '@/data/serviceIncludes';
import { services } from '@/data/ServiceData';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceIncludeDetailProps {
    onNavigate: () => void;
}

const ServiceIncludeDetail: React.FC<ServiceIncludeDetailProps> = ({ onNavigate }) => {
    const { slug, includeSlug } = useParams<{ slug: string; includeSlug: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const service = services.find(
        (s) => s.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

    const includes = serviceIncludes[slug || ''];
    const includeItem = includes?.find(
        (item) => item.id.toLowerCase().replace(/\s+/g, '-') === includeSlug
    );

    if (!includeItem) {
        return <Navigate to={`/services/${slug}`} replace />;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <TopBar />
            <Navigation onNavigate={onNavigate} />
            <PageBanner
                title={includeItem.id}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: service?.title || slug?.replace(/-/g, ' ') || 'Service', href: `/services/${slug}` },
                    { label: includeItem.id }
                ]}
                onNavigate={onNavigate}
            />

            <main className="flex-grow">
                <div className="container mx-auto px-4 py-16 lg:py-24">
                    {includeItem.hero ? (
                        <div className="max-w-4xl mx-auto mb-16">
                            <h1 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 leading-tight">
                                {includeItem.hero.title}
                            </h1>
                            <p className="text-lg text-muted-foreground font-montserrat leading-relaxed mb-8 whitespace-pre-line">
                                {includeItem.hero.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {includeItem.hero.buttons.map((btn, idx) => (
                                    <Button
                                        key={idx}
                                        size="lg"
                                        className={`${idx === 0 ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5'} font-semibold px-8`}
                                    >
                                        {btn.label}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Default hero if no specific data provided
                        <div className="max-w-4xl mx-auto mb-16 text-center">
                            <h1 className="text-4xl font-bold font-poppins mb-4">{includeItem.id}</h1>
                            <p className="text-muted-foreground">Detailed information coming soon.</p>
                        </div>
                    )}

                    {includeItem.content?.map((section, idx) => (
                        <div key={idx} className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold font-poppins mb-6 text-foreground">
                                {section.title}
                            </h2>
                            <p className="text-base text-muted-foreground font-montserrat leading-relaxed mb-8 whitespace-pre-line">
                                {section.description}
                            </p>
                            {section.list && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {section.list.map((item, listIdx) => (
                                        <div key={listIdx} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3.5 h-3.5 text-primary-foreground" />
                                            </div>
                                            <span className="font-medium font-poppins text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {includeItem.cta && (
                        <div className="max-w-4xl mx-auto mt-20 text-center p-8 lg:p-12 rounded-2xl bg-primary/5 border border-primary/10">
                            <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-6">
                                {includeItem.cta.title}
                            </h2>
                            <p className="text-lg text-muted-foreground font-montserrat leading-relaxed mb-8 whitespace-pre-line max-w-2xl mx-auto">
                                {includeItem.cta.description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {includeItem.cta.buttons.map((btn, idx) => (
                                    <Button
                                        key={idx}
                                        size="lg"
                                        className={`${idx === 0 ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5'} font-semibold px-8`}
                                    >
                                        {btn.label}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ServiceIncludeDetail;
