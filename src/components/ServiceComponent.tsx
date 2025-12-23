import { Button } from "@/components/ui/button";
import { Smartphone, Monitor, ComputerIcon, Wrench, Search, Code, ShoppingCart, LayoutGrid, Mail, Palette, Briefcase, Router, Cloud, BarChart } from "lucide-react";

const ServicesComponent = () => {
  const services = [
    {
      icon: Smartphone,
      title: "iOS App Development",
      description: "We build beautiful and performant iOS applications for iPhone and iPad.",
      featured: false,
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "We create high-quality Android applications for a wide range of devices.",
      featured: true,
    },
    {
      icon: Monitor,
      title: "Window App Development",
      description: "We develop robust and scalable applications for the Windows platform.",
      featured: false,
    },
    {
      icon: Monitor,
      title: "Artificial Intelligence",
      description: "We develop intelligent solutions leveraging AI and machine learning to solve complex business challenges.",
      featured: false,
    },
    {
      icon: LayoutGrid,
      title: "Automation",
      description: "We implement automation solutions to streamline your business processes and improve efficiency.",
      featured: false,
    },
    {
      icon: ComputerIcon,
      title: "Open GL",
      description: "We leverage OpenGL to create high-performance 2D and 3D graphics applications.",
      featured: false,
    },
    {
      icon: Wrench,
      title: "App Maintenance",
      description: "We provide ongoing maintenance and support to keep your applications running smoothly.",
      featured: true,
    },
    {
      icon: Search,
      title: "SEO",
      description: "We help improve your website's visibility on search engines to attract more customers.",
      featured: false,
    },
    {
      icon: Code,
      title: "Php Development",
      description: "We build dynamic and robust web applications using PHP.",
      featured: false,
    },
    {
      icon: Code,
      title: "Java Development",
      description: "We create powerful and scalable enterprise applications using Java.",
      featured: true,
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description: "We build feature-rich and user-friendly e-commerce solutions.",
      featured: false,
    },
    {
      icon: Wrench,
      title: "Software Maintenance",
      description: "We offer comprehensive software maintenance services to ensure your software remains up-to-date and bug-free.",
      featured: true,
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "We create and manage effective email marketing campaigns to engage your audience.",
      featured: false,
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "We provide regular website maintenance to ensure it's secure, up-to-date, and performing optimally.",
      featured: true,
    },
    {
      icon: Briefcase,
      title: "IT Strategy and Consulting",
      description: "We offer strategic IT consulting to help you align your technology with your business goals.",
      featured: false,
    },
    {
      icon: Router,
      title: "Internet of Things",
      description: "We build and connect smart devices to the internet to create innovative IoT solutions.",
      featured: false,
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "We provide scalable and secure cloud solutions tailored to your business needs.",
      featured: false,
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "We help you extract valuable insights from your data to drive informed decisions.",
      featured: false,
    },
  ];

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-6 mb-12">
          {/* Left Column - Headline */}
          <div className="space-y-4 text-center w-full">
            {/* Pre-headline */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-foreground font-montserrat">Our Services</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-poppins font-bold">
              Services we provide to
              <br />
              <span className="text-primary">Elevate Your Business</span>
            </h2>
          </div>
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

export default ServicesComponent;
