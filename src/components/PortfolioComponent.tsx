import { useState, useEffect, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  tags: string[];
}

const PortfolioComponent = () => {
  const [activeTab, setActiveTab] = useState<'website' | 'mobile'>('website');
  const [visibleItems, setVisibleItems] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [websiteData, setWebsiteData] = useState<PortfolioItem[]>([]);
  const [mobileData, setMobileData] = useState<PortfolioItem[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    const loadData = async () => {
      try {
        const [websiteModule, mobileModule] = await Promise.all([
          import("@/data/portfolioData"),
          import("@/data/mobilePortfolio")
        ]);
        setWebsiteData(websiteModule.portfolioItems);
        setMobileData(mobileModule.mobilePortfolioItems);
      } catch (error) {
        console.error("Error loading portfolio data:", error);
      }
    };
    loadData();
  }, []);

  const currentItems = activeTab === 'website' ? websiteData : mobileData;

  const visibleItemsData = useMemo(() =>
    currentItems.slice(0, visibleItems),
    [currentItems, visibleItems]
  );

  const handleTabChange = (tab: 'website' | 'mobile') => {
    setIsLoading(true);
    setLoadedImages(new Set());
    setTimeout(() => {
      setActiveTab(tab);
      setVisibleItems(6);
      setIsLoading(false);
    }, 400);
  };

  const showMoreItems = () => {
    setVisibleItems(currentItems.length);
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary"></div>
            <p className="text-foreground font-montserrat">Our Latest Projects</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins">
            <span className="text-foreground">Explore Our Showcase of </span>
            <span className="text-primary">Latest Work</span>
          </h2>
        </div>

        {/* Portfolio Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => handleTabChange('website')}
            variant={activeTab === 'website' ? 'default' : 'outline'}
            className={`rounded-full px-4 py-3 text-sm h-10 md:px-8 md:py-6 md:text-base md:h-12 font-montserrat font-medium ${activeTab === 'website'
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background'
              }`}
          >
            Website Portfolio
          </Button>
          <Button
            onClick={() => handleTabChange('mobile')}
            variant={activeTab === 'mobile' ? 'default' : 'outline'}
            className={`rounded-full px-4 py-3 text-sm h-10 md:px-8 md:py-6 md:text-base md:h-12 font-montserrat font-medium ${activeTab === 'mobile'
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background'
              }`}
          >
            Mobile Portfolio
          </Button>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-screen-lg mx-auto">
          {isLoading ? (
            <Loader fullScreen={false} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {visibleItemsData.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer bg-muted"
                >
                  {/* Image with loading state */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoad(item.id)}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                  />

                  {/* Loading skeleton */}
                  {!loadedImages.has(item.id) && (
                    <div className="absolute inset-0 bg-muted animate-pulse"></div>
                  )}

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent"></div>

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
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View All Button */}
        {visibleItems < currentItems.length && (
          <div className="text-center">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-montserrat font-medium h-12 border-foreground text-background hover:bg-foreground hover:text-background"
              onClick={showMoreItems}
            >
              View All Works
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioComponent;