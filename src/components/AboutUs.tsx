import { Button } from "@/components/ui/button";
import StatsCount from "@/components/ui/statscount";
import teamWorkingImage from "@/assets/team-working.jpg";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AboutUs = ({ onNavigate }) => {
  const navigate = useNavigate();
  const stats = [
    { value: 50, suffix: "+", label: "Team Members" },
    { value: 300, suffix: "+", label: "Happy Clients" },
    { value: 99, suffix: "%", label: "Client Satisfaction" },
  ];

  const handleLearnMoreClick = () => {
    if (onNavigate) {
      onNavigate();
    }
    navigate("/about");
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text & Stats */}
          <div className="space-y-8">
            {/* Text Content */}
            <div className="space-y-6">
              {/* Pre-headline */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-muted-foreground text-sm font-monntserrat">Why Choose Us</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold leading-tight ">
                Transforming <span className="text-primary">ideas</span>
                <br />
                <span className="text-primary">into Digital Reality</span>
              </h2>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed font-montserrat">
                At SachTech, we take pride in fostering a culture of integrity, collaboration, and social responsibility. We are dedicated to creating a positive impact in the communities where we live and work, while continuously striving to make technology accessible and beneficial for all.
              </p>
            </div>

            {/* CTA Button */}
            <Button variant="outline" className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background h-12 px-10 font-montserrat font-medium" onClick={handleLearnMoreClick}>
              Learn More
            </Button>

            {/* Stats Bar */}
            <StatsCount stats={stats} className="bg-primary text-primary-foreground p-2 font-poppins" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
