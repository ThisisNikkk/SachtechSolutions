import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Service, services } from "../data/ServiceData";

const ServiceCard = memo(({ service, onClick }: { service: Service; onClick: (service: Service) => void }) => {
  const IconComponent = service.icon;
  return (
    <div
      onClick={() => onClick(service)}
      className="p-8 rounded-3xl shadow-sm bg-background transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    >
      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
        <IconComponent className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins font-medium">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed font-montserrat">
        {service.description}
      </p>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";


const ServicesComponent = ({ onNavigate }: { onNavigate?: () => void }) => {
  const navigate = useNavigate();

  const handleServiceClick = useCallback((service: Service) => {
    if (onNavigate) {
      onNavigate();
    }
    const slug = service.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/services/${slug}`);
  }, [navigate]);

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-6 mb-12">
          <div className="space-y-4 text-center w-full">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-foreground font-montserrat">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-poppins">
              Services we provide to
              <br />
              <span className="text-primary">Elevate Your Business</span>
            </h2>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onClick={handleServiceClick}
            />
          ))}
        </div>
      </div>

      {/* Service Modal */}

    </section>
  );
};

export default ServicesComponent;
