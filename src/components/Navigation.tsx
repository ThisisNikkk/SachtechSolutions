import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";

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
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Cpu className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">IT Company.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${
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
        <Button size="lg" className="hidden md:inline-flex">
          Get A Quote
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
