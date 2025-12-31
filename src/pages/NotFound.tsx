import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import illustration from "@/assets/NotFound.svg";
import SEO from "@/components/SEO";

const NotFound = ({ onNavigate }: { onNavigate?: () => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleBackHome = () => {
    setIsNavigating(true);
    if (onNavigate) {
      onNavigate();
    }
    setTimeout(() => {
      navigate("/");
      setIsNavigating(false);
    }, 500); // 1 second delay
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="404 - Page Not Found | Solario Tech"
        description="Sorry, the page you are looking for could not be found. Navigate back to our homepage to explore our software development services."
        keywords="404, page not found, error"
      />
      <TopBar />
      <Navigation onNavigate={onNavigate} />

      {/* 404 Hero Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            {/* Robot Illustration */}
            <div className="mb-8">
              <img
                src={illustration}
                alt="404 Robot"
                className="w-full max-w-lg h-96 mx-auto"
              />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
              Oops! Page not Found
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8 font-montserrat">
              Sorry, we can not find the page you are looking for.
            </p>

            {/* Back to Home Button */}
            <Button
              onClick={handleBackHome}
              size="lg"
              className="rounded-full gap-2 font-montserrat font-medium"
              disabled={isNavigating}
            >
              {isNavigating ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowLeft className="w-5 h-5" />
              )}
              {isNavigating ? "REDIRECTING..." : "BACK TO HOME"}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
