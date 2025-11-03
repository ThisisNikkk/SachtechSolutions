import { Sparkles } from "lucide-react";

const ServicesTicker = () => {
  const services = [
    "Android Development",
    "Website Development",
    "iOS Developement",
    "App Maintenance",
    "Website Maintenance",
    "UX/UI Design",
    "SEO Optimization",
    "Cloud Services",
    "E-commerce Solutions",
    "Digital Marketing",
  ];

  const duplicatedServices = [...services, ...services];

  return (
    <div className="bg-primary text-primary-foreground py-6 overflow-hidden">
      <div className="flex w-max animate-scroll-left md:animate-scroll-left-desktop">
        {duplicatedServices.map((service, index) => (
          <div key={index} className="flex items-center gap-6 px-6 whitespace-nowrap">
            <Sparkles className="w-6 h-6 flex-shrink-0" />
            <span className="text-2xl font-poppins font-regular">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTicker;
