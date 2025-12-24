import { useState } from "react";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import modernOffice from "@/assets/modern-office.jpg";
import teamWorking from "@/assets/team-working.jpg";
import { Service, services } from "../data/ServiceData";

const ServicesComponent = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
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
          })}
        </div>
      </div>

      {/* Service Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <ScrollArea className="max-h-[90vh] [&>[data-orientation=vertical]]:hidden">
            <div className="p-6 lg:p-8">
              {/* Header */}
              <h2 className="text-2xl lg:text-3xl font-bold font-poppins mb-6">
                About <span className="text-primary">{selectedService?.title}</span>
              </h2>

              {/* About Section - New Layout */}
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-montserrat text-lg">
                      {selectedService?.detailedDescription.charAt(0)}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-montserrat pt-1">
                    {selectedService?.detailedDescription}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed font-montserrat">
                  Our team of experts brings years of experience and proven methodologies to deliver exceptional results. We focus on understanding your unique requirements and crafting tailored solutions that drive real business value.
                </p>
              </div>

              {/* Services Include */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 font-poppins">Services Include:</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-montserrat">
                  Our comprehensive {selectedService?.title.toLowerCase()} services cover all aspects of development and maintenance. We ensure quality delivery with attention to detail and industry best practices.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-poppins">
                  {selectedService?.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground font-poppins">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section - 2 images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={teamCollaboration}
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={modernOffice}
                    alt="Modern office"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Our Expertise */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6 font-poppins">
                  Our Expertise In <span className="text-primary">{selectedService?.title}</span>
                </h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-montserrat">
                  We bring years of experience and proven methodologies to deliver exceptional results. Our approach combines technical excellence with creative problem-solving.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedService?.expertise.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-3xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-[#FBBF24] rounded-full flex items-center justify-center mb-6 shadow-sm">
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
                <h3 className="text-xl font-bold mb-4 font-poppins">Service benefits:</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-montserrat">
                  Partnering with us for {selectedService?.title.toLowerCase()} brings numerous advantages to your business. We are committed to delivering solutions that exceed expectations.
                </p>
                <div className="space-y-4">
                  {selectedService?.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <div className="w-2.5 h-2.5 bg-primary-foreground rounded-full opacity-50"></div>
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed font-montserrat font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesComponent;
