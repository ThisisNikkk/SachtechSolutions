import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Tag } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Design",
      description: "We provide outstanding style with a minimalist, clean, futuristic design.",
      featured: true,
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description: "We work on mobile applications by researching the user experience.",
      featured: false,
    },
    {
      icon: Tag,
      title: "Branding",
      description: "We help implement what the company wants.",
      featured: false,
    },
  ];

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Left Column - Headline */}
          <div className="space-y-4">
            {/* Pre-headline */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-muted-foreground text-sm">Our Services</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Services we provide to
              <br />
              <span className="text-primary">Elevate Your Business</span>
            </h2>
          </div>

          {/* Right Column - CTA Button */}
          <Button className="rounded-full px-8 py-6 text-base">
            See all Services
          </Button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-3xl shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 ${
                  service.featured ? "bg-primary-light" : "bg-background"
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
