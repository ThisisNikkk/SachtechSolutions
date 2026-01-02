import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

/**
 * An animated hamburger icon that transforms into an 'X'.
 * Two-line design for smooth animation.
 */
const AnimatedHamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  const commonClasses =
    "block absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] left-0";

  return (
    <div className="relative w-6 h-6">
      {/* Top line */}
      <span
        className={`${commonClasses} ${isOpen ? "rotate-45 top-[11px]" : "top-[8px]"
          }`}
      />
      {/* Bottom line */}
      <span
        className={`${commonClasses} ${isOpen ? "-rotate-45 top-[11px]" : "top-[14px]"
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
      <div className="container mx-auto px-4 py-3 sm:py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-4" onClick={handleLinkClick}>
          <img src={logo} alt="Solario Tech" className="h-12 md:h-16 w-auto object-contain" />
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
                className={`font-montserrat font-medium transition-colors text-sm lg:text-base ${isActive ? "text-primary" : "text-foreground"
                  }`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* CTA Button */}
        <Button size="lg" className="hidden lg:inline-flex rounded-full text-sm font-montserrat font-medium h-10 hover:bg-foreground hover:text-background" onClick={handleGetAQuoteClick}>
          Get A Quote
        </Button>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden z-[60] relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatedHamburgerIcon isOpen={isMobileMenuOpen} />
        </button>
      </div>

      {/* Mobile Menu Overlay - Fullscreen Animated */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-50 font-montserrat font-medium flex flex-col items-center justify-center
          transition-opacity duration-300 ease-in-out ${ // MODIFICATION: Changed 'transition-all' to 'transition-opacity' and adjusted duration/easing
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto" // MODIFICATION: Removed 'translate-y-0'
            : "opacity-0 pointer-events-none" // MODIFICATION: Removed '-translate-y-full'
          }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => {
            const isActive = checkIsActive(link.href);
            return (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLinkClick();
                }}
                className={`font-montserrat font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-2xl ${isActive ? "text-primary" : "text-foreground"
                  } ${isMobileMenuOpen
                    ? "opacity-100" // MODIFICATION: Removed 'translate-y-0'
                    : "opacity-0" // MODIFICATION: Removed 'translate-y-4'
                  }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${100 + index * 50}ms` : "0ms"
                }}
              >
                {link.name}
              </NavLink>
            );
          })}
          <Button
            size="lg"
            className={`mt-8 rounded-full text-sm font-montserrat font-medium h-12 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen
              ? "opacity-100" // MODIFICATION: Removed 'translate-y-0'
              : "opacity-0" // MODIFICATION: Removed 'translate-y-4'
              }`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${100 + navLinks.length * 50}ms` : "0ms"
            }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleGetAQuoteClick();
            }}
          >
            Get A Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;