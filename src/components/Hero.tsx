import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-navy/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          {/* Pre-headline */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-navy-foreground text-sm font-medium">
              Experience The Best IT Solutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-navy-foreground mb-6 leading-tight">
            Where Creativity Meets Cutting-Edge Technology
          </h1>

          {/* Description */}
          <p className="text-navy-foreground/80 text-lg mb-8 leading-relaxed">
            Your trusted partner for professional, reliable, and affordable 
            cleaning solutions—delivering spotless results for homes, offices, 
            and commercial spaces with care and precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="gap-2">
              Explore More
              <ArrowRight className="w-4 h-4" />
            </Button>
            <a 
              href="#services" 
              className="text-navy-foreground font-medium hover:text-primary transition-colors underline underline-offset-4"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
