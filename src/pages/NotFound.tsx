import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = ({onNavigate}) => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <TopBar/>
      <Navigation onNavigate={onNavigate}/>
      <Footer/>
    </div>
  );
};

export default NotFound;
