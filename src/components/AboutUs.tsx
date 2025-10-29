import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teamWorkingImage from "@/assets/team-working.jpg";

const AboutUs = () => {
  const stats = [
    { value: "250+", label: "Team Members" },
    { value: "300+", label: "Happy Clients" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text & Stats */}
          <div className="space-y-8">
            {/* Text Content */}
            <div className="space-y-6">
              {/* Pre-headline */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-muted-foreground text-sm">Why Choose Us</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Transforming <span className="text-primary">ideas</span>
                <br />
                <span className="text-primary">into Digital Reality</span>
              </h2>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim 
                tempor enim. Elit aute irure tempor cupidatat incididunt sint 
                deserunt ut voluptate aute id deserunt nisi.
              </p>
            </div>

            {/* CTA Button */}
            <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background">
              Learn More
            </Button>

            {/* Stats Bar */}
            <div className="bg-primary text-primary-foreground p-8 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Graphics */}
          <div className="relative bg-navy p-8 lg:p-12">
            {/* Decorative circular elements */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 border-4 border-primary rounded-full"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 border-4 border-primary rounded-full"></div>
            </div>

            {/* Thin white frame behind */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-white/30"></div>

            {/* Blue framed image */}
            <div className="relative z-10 bg-primary p-4">
              <img 
                src={teamWorkingImage} 
                alt="Team members collaborating at computer" 
                className="w-full h-auto"
              />
              <div className="text-center mt-6">
                <a 
                  href="#team" 
                  className="text-white inline-flex items-center gap-2 hover:opacity-80 transition-opacity font-medium"
                >
                  See Our Team <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
