import { ClipboardList, Lightbulb, Layers, Smile } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      icon: ClipboardList,
      number: "01",
      title: "Consultation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Strategy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: Layers,
      number: "03",
      title: "Implementation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: Smile,
      number: "04",
      title: "Final Result",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            <span className="text-foreground text-sm">Our Work Process</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Our Proven <span className="text-primary">Work Process</span>
          </h2>
        </div>

        {/* Horizontal Process Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLastStep = index === steps.length - 1;

            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Icon Circle with Number Badge */}
                <div className="relative mb-6">
                  {/* Large Icon Circle */}
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-primary-foreground" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                    <span className="text-navy-foreground font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Connecting Line */}
                  {!isLastStep && (
                    <div className="hidden lg:block absolute top-1/2 -right-[50%] w-full h-0.5 bg-primary -translate-y-1/2 z-[-1]"></div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center max-w-[250px]">
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
