import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import p1 from "@/assets/website/1.png";
import p2 from "@/assets/website/2.png";
import p3 from "@/assets/website/3.png";
import p4 from "@/assets/website/4.png";
import { Link, useNavigate } from "react-router-dom";

const Portfolio = ({ onNavigate }) => {
  const navigate = useNavigate();
  const portfolioItems = [
    {
      id: 1,
      title: "AI Truck Parking",
      image: p1,
      tags: ["UX/UI Design", "App Design", "Website"],
    },
    {
      id: 2,
      title: "Auto1Source",
      image: p2,
      tags: ["UX/UI Design", "App Design", "Wireframe"],
    },
    {
      id: 3,
      title: "Brooks Network Service LLC",
      image: p3,
      tags: ["UX/UI Design", "App Design", "Wireframe"],
    },
    {
      id: 4,
      title: "Bullet Proof For BJJ",
      image: p4,
      tags: ["UX/UI Design", "App Design", "Wireframe"],
    },
  ];

  const handlePortfolioClick = () => {
    if (onNavigate) {
      onNavigate();
    }
    navigate("/portfolio");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary"></div>
            <p className="text-foreground  font-montserrat">Our Latest Projects</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins">
            <span className="text-foreground">Explore Our Showcase of </span>
            <span className="text-primary">Featured Work</span>
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                  <div className="flex-1">
                    <h3 className="text-navy-foreground text-2xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-navy-foreground/10 text-navy-foreground backdrop-blur-sm border border-navy-foreground/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-4 transition-transform duration-300 group-hover:scale-110" onClick={handlePortfolioClick}>
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-montserrat font-medium h-12 border-foreground text-background hover:bg-foreground hover:text-background"
            onClick={handlePortfolioClick}
          >
            View All Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
