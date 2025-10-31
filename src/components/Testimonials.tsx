import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Leslie Alexander",
      title: "CEO, Software Company",
      rating: 5.0,
      image: testimonial1,
      quote:
        "Sed up perspiciatis ude omnis iste natus erro sit natus error sit voluptatem accusantium doloremque laudantium, totam rem apertam, eaque ipsa",
    },
    {
      id: 2,
      name: "Jerry Welsom",
      title: "Manager",
      rating: 5.0,
      image: testimonial2,
      quote:
        "Sed up perspiciatis ude omnis iste natus erro sit natus error sit voluptatem accusantium doloremque laudantium, totam rem apertam, eaque ipsa",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "Product Director",
      rating: 5.0,
      image: testimonial3,
      quote:
        "Sed up perspiciatis ude omnis iste natus erro sit natus error sit voluptatem accusantium doloremque laudantium, totam rem apertam, eaque ipsa",
    },
    {
      id: 4,
      name: "Mike Chen",
      title: "Tech Founder",
      rating: 5.0,
      image: testimonial4,
      quote:
        "Sed up perspiciatis ude omnis iste natus erro sit natus error sit voluptatem accusantium doloremque laudantium, totam rem apertam, eaque ipsa",
    },
  ];

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Group testimonials in pairs for desktop view
  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push(testimonials.slice(i, i + 2));
  }

  return (
    <section className="py-20 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary"></div>
            <p className="text-navy-foreground font-medium">Testimonial</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-foreground">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonialPairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="flex-[0_0_100%] min-w-0 px-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pair.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-card text-card-foreground rounded-3xl p-8"
                    >
                      {/* Card Top */}
                      <div className="flex items-start justify-between mb-6">
                        {/* Left Side - User Info */}
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-card-foreground">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {testimonial.title}
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-semibold text-card-foreground">
                                {testimonial.rating}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Quote Icon */}
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Quote className="w-6 h-6 text-primary fill-primary" />
                        </div>
                      </div>

                      {/* Card Bottom - Quote Text */}
                      <p className="text-muted-foreground leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonialPairs.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1 rounded-full transition-all ${
                index === selectedIndex
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

export default Testimonials;
