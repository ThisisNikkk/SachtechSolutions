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
        "Our skilled team delivers reliable, high-quality cleaning with attention to detail.",
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

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-navy-foreground font-poppins">
              Why Trust Us For 
              <br/>
              Your IT Needs? 
            </h2>
          </div>

          {/* Right Column - CTA Button */}
          <Button className="rounded-lg px-8 py-6 text-base">
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
              className="w-full h-auto object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="space-y-3">
                  {/* Icon */}
                  <IconComponent className="w-12 h-12 text-navy-foreground" strokeWidth={1.5} />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-foreground">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-navy-foreground/80 leading-relaxed">
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
