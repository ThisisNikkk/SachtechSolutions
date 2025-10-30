import { Button } from "@/components/ui/button";
import { DollarSign, Users, Briefcase, Trophy, Play } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Price",
      description:
        "We offer high-quality cleaning services at prices that fit your budget.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description:
        "Our team delivers reliable, high-quality cleaning with attention to detail.",
    },
    {
      icon: Briefcase,
      title: "15+ Years Experience",
      description:
        "Serving homes and businesses with excellence for over 15 years.",
    },
    {
      icon: Trophy,
      title: "Award Winning",
      description: "Award-winning service you can trust.",
    },
  ];

  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Left Column - Headline */}
          <div className="space-y-4">
            {/* Pre-headline */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-navy-foreground text-sm font-montserrat">Why Choose Us</span>
            </div>
            <br />

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-navy-foreground font-poppins">
              Why Trust Us For
              <br className="px-4"/>
              Your IT Needs? 
            </h2>
          </div>

          {/* Right Column - CTA Button */}
          <Button className="rounded-lg px-8 py-6 text-base font-montserrat font-semibold bg-primary hover:bg-navy-foreground hover:text-primary rounded-full">
            Get a Quote
          </Button>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with Play Button */}
          <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <img
              src={teamCollaboration}
              alt="Team collaborating on IT project"
              className="w-[95%] h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index}>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-10 h-10 text-navy-foreground" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-navy-foreground font-poppins">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-navy-foreground/80 leading-relaxed font-montserrat">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

