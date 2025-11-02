import { useState } from "react";
// Import useLocation
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const Navigation = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Get the current location, including pathname and hash
  const { pathname, hash } = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Helper function to determine if a link is active
  const checkIsActive = (href) => {
    // Check for "Home" link
    if (href === "/") {
      return pathname === "/" && hash === "";
    }
    // Check for other page links (e.g., "/services")
    return pathname === href;
  };

  const handleLinkClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-4" onClick={handleLinkClick}>
          <img src={logo} alt="Sachtech Solutions" className="max-w-xs h-16 sm:w-50 sm:h-20" />
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = checkIsActive(link.href);
            return (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
                className={`font-montserrat font-medium transition-colors text-sm lg:text-base ${
                  isActive ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* CTA Button */}
        <Button size="lg" className="hidden lg:inline-flex rounded-full text-sm font-montserrat font-medium h-12 hover:bg-foreground hover:text-background">
          Get A Quote
        </Button>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="h-6 w-6" />
        </Button>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => {
            const isActive = checkIsActive(link.href);
            return (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLinkClick();
                }}
                className={`font-montserrat font-medium transition-colors text-lg ${
                  isActive ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
          <Button size="lg" className="mt-8 rounded-full text-sm font-poppins font-regular h-12">
            Get A Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;