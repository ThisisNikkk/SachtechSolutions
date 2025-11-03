import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

/**
 * An animated hamburger icon that transforms into an 'X'.
 * @param {object} props - The component props.
 * @param {boolean} props.isOpen - Whether the menu is open or not.
 * @param {string} [props.lineClassName] - Optional class for the line color. Defaults to 'bg-current'.
 */
const AnimatedHamburgerIcon = ({ isOpen, lineClassName = "bg-current" }) => {
  // Common classes for all three lines
  const commonClasses =
    `block absolute h-0.5 w-6 ${lineClassName} transform transition-all duration-300 ease-in-out left-0`;

  return (
    // The container that matches the size of the lucide icons
    <div className="relative w-6 h-6">
      {/* Top line */}
      <span
        className={`${commonClasses} ${
          isOpen ? "rotate-45 top-[11px]" : "top-[6px]"
        }`}
      />
      {/* Middle line */}
      <span
        className={`${commonClasses} top-[11px] ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Bottom line */}
      <span
        className={`${commonClasses} ${
          isOpen ? "-rotate-45 top-[11px]" : "top-[16px]"
        }`}
      />
    </div>
  );
};

const Navigation = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  // Get the current location, including pathname and hash
  const { pathname, hash } = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
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

  const handleGetAQuoteClick = () => {
    if (onNavigate) {
      onNavigate();
    }
    navigate("/contact");
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
        <Button size="lg" className="hidden lg:inline-flex rounded-full text-sm font-montserrat font-medium h-12 hover:bg-foreground hover:text-background" onClick={handleGetAQuoteClick}>
          Get A Quote
        </Button>

        {/* --- MODIFIED Hamburger Menu Button (Open) --- */}
        <div className="lg:hidden">
          <Button
            variant="ghost" 
            size="icon"
            className="active:bg-transparent"  
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Pass bg-black to make the lines black */}
            <AnimatedHamburgerIcon isOpen={isMobileMenuOpen} lineClassName="bg-black" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-50 font-montserrat font-medium flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button (Stays the same: primary bg with white icon) */}
        <Button
          size="icon"
          className="absolute top-4 right-4 text-primary-foreground rounded-full"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Defaults to bg-current (white) */}
          <AnimatedHamburgerIcon isOpen={true} />
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
          <Button size="lg" className="mt-8 rounded-full text-sm font-poppins font-regular h-12" onClick={() => {
            setIsMobileMenuOpen(false);
            handleGetAQuoteClick();
          }}>

            Get A Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;