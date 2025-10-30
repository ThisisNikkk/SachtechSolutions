import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "About Us", href: "#about" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-4">
          <img src={logo} alt="Sachtech Solutions" className="w-50 h-20" />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-montserrat font-medium transition-colors ${
                link.active
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button size="lg" className="hidden md:inline-flex rounded-full text-sm font-poppins font-regular h-14">
          Get A Quote
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
