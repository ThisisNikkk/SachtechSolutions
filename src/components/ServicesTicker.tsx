import { Sparkles } from "lucide-react";

const ServicesTicker = () => {
  const services = [
    "Application Design",
    "UX/UI Design",
    "Website Development",
  ];

  // Duplicate the services array for seamless infinite scroll
  const duplicatedServices = [...services, ...services];

  return (
    <div className="bg-primary text-primary-foreground py-4 overflow-hidden">
      <div className="flex animate-scroll-left">
        {duplicatedServices.map((service, index) => (
          <div key={index} className="flex items-center gap-6 px-6 whitespace-nowrap">
            <Sparkles className="w-6 h-6 flex-shrink-0" />
            <span className="text-2xl font-bold">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTicker;
