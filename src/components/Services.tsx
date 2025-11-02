import { Button } from "@/components/ui/button";
import { ChartBarDecreasingIcon, ComputerIcon, Monitor, ShoppingCart, Smartphone, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Android Development",
      description: "We work on mobile applications by researching the user experience.",
      featured: false,
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "We provide outstanding style with a minimalist, clean, futuristic design.",
      featured: true,
    },
    {
      icon: Smartphone,
      title: "iOS Developement",
      description: "We work on mobile applications by researching the user experience.",
      featured: false,
    },
    {
      icon: ChartBarDecreasingIcon,
      title: "UX/UI Design",
      description: "We work on mobile applications by researching the user experience.",
      featured: false,
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "We provide outstanding style with a minimalist, clean, futuristic design.",
      featured: true,
    },
    {
      icon: ComputerIcon,
      title: "Software Maintenance",
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
              <span className="text-muted-foreground text-sm font-montserrat">Our Services</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-poppins font-bold">
              Services we provide to
              <br />
              <span className="text-primary">Elevate Your Business</span>
            </h2>
          </div>

          {/* Right Column - CTA Button */}
          <Link to="/services">
            <Button className="rounded-full px-8 py-7 text-base font-montserrat font-medium h-12 border-foreground text-background hover:bg-foreground hover:text-background">
              See all Services
            </Button>
          </Link>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl shadow-sm bg-background transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins font-medium">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed font-montserrat">
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
