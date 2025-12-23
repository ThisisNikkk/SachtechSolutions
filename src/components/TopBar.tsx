import { Phone, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden sm:flex bg-navy text-navy-foreground py-2">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:7087425488" className="flex items-center gap-2 hover:text-primary transition-colors font-montserrat text-sm">
            <Phone className="w-4 h-4" />
            <span>+91 7087425488</span>
          </a>
          <a href="mailto:example@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors font-montserrat text-sm">
            <Mail className="w-4 h-4" />
            <span>contact@solariotech.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/sachtech-solution-private-limited"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-background text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="Twitter"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://facebook.com/SachTechSol"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-background text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/sach.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-background text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;