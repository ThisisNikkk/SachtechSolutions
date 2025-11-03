import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import illustration from "@/assets/404-illustration.png";

const NotFound = ({ onNavigate }: { onNavigate?: () => void }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleBackHome = () => {
    if (onNavigate) {
      onNavigate();
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation onNavigate={onNavigate} />
      
      {/* 404 Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            {/* Robot Illustration */}
            <div className="mb-8">
              <img 
                src={illustration} 
                alt="404 Robot" 
                className="w-full max-w-md mx-auto"
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
            >
              <ArrowLeft className="w-5 h-5" />
              BACK TO HOME
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
