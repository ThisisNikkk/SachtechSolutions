import { ClipboardList, Lightbulb, Layers, Smile } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      icon: ClipboardList,
      number: "01",
      title: "Consultation",
      description:
        "We begin by understanding your vision, goals, and challenges through in-depth discussions, ensuring precise requirements gathering and project alignment.",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Strategy",
      description:
        "Based on our consultation, we craft a tailored strategy, optimal technologies, architecture, and a clear roadmap for successful project execution.",
    },
    {
      icon: Layers,
      number: "03",
      title: "Implementation",
      description:
        "Our expert team brings the strategy to life, developing and rigorously testing your solution with agile methodologies and transparent communication.",
    },
    {
      icon: Smile,
      number: "04",
      title: "Final Result",
      description:
        "We deliver a high-quality, fully functional product, ensuring it meets your expectations and provides measurable value, followed by ongoing support.",
    },
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Pre-headline */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-foreground text-sm font-montserrat">
              Our Work Process
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-poppins">
            Our Proven <span className="text-primary">Work Process</span>
          </h2>
        </div>

        {/* Horizontal Process Visual */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLastStep = index === steps.length - 1;

            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Icon Circle with Number Badge */}
                <div className="relative mb-6">
                  {/* Large Icon Circle */}
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <IconComponent className="w-16 h-16 text-primary-foreground" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-navy rounded-full flex items-center justify-center z-20">
                    <span className="text-navy-foreground font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Connecting Line */}
                  {!isLastStep && (
                    <div className="hidden lg:block absolute left-[calc(100%+0.5rem)] top-1/2 w-[calc(100%+2rem)] h-[2px] bg-primary -translate-y-1/2"></div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-foreground mb-3 text-center font-poppins">
                  {step.title}
                </h3>

                {/* Description */}
                {/* MODIFICATION: Added "min-h-[100px]" to equalize heights */}
                <p className="text-muted-foreground text-center max-w-[250px] font-montserrat min-h-[100px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;