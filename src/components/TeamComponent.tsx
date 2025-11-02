import { useState, useCallback, useEffect } from "react"; // 1. Added useCallback
import { Button } from "@/components/ui/button";
import { Linkedin, Globe, Twitter } from "lucide-react";
import { teamMembers } from "@/data/teamData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import autoplay from "embla-carousel-autoplay";

const TeamComponent = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // 2. Added the scrollTo function
  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const chunkedTeamMembers = chunk(teamMembers, 8);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-16">
          {/* Left - Headline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary"></div>
              <p className="text-foreground font-montserrat">Our Team</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins">
              <span className="text-foreground">Meet Our </span>
              <span className="text-primary">Expert team</span>
            </h2>
          </div>
        </div>

        {/* Team Carousel */}
        <Carousel
          setApi={setApi}
          plugins={[autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {chunkedTeamMembers.map((chunk, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {chunk.map((member) => (
                    <div
                      key={member.id}
                      className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                    >
                      {/* Profile Image */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="text-lg font-medium font-poppins text-foreground mb-1">
                        {member.name}
                      </h3>

                      {/* Title */}
                      <p className="text-primary font-poppins mb-3">
                        {member.title}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground font- montserrat leading-relaxed mb-4">
                        {member.description}
                      </p>

                      {/* Social Links */}
                      <div className="flex items-center justify-center gap-3">
                        <a
                          href={member.social.twitter}
                          className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-secondary transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter className="w-4 h-4 text-black" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-secondary transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4 text-black" />
                        </a>
                        <a
                          href={member.social.website}
                          className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-secondary transition-colors"
                          aria-label={`${member.name}'s Website`}
                        >
                          <Globe className="w-4 h-4 text-black" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* 3. Replaced the "Slide" text with Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(count)].map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1 rounded-full transition-all ${
                index === current - 1 // Use 'current - 1' for the 0-based index
                  ? "w-8 bg-primary"
                  : "w-8 bg-border hover:bg-border/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;

