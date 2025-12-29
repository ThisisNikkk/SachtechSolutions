import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logowhite.png";
import { useState, useEffect } from "react";

const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

const Footer = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const onSubmit = (data: NewsletterForm) => {
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    reset();
  };

  return (
    <footer className="bg-navy text-navy-foreground relative">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Branding & Newsletter */}
          <div className="space-y-8">
            <div className="space-y-6">
              <img src={logo} alt="Solario Tech" className="h-16 md:h-24 w-auto object-contain" />
              <p className="text-navy-foreground/80 text-sm leading-relaxed font-montserrat max-w-xs">
                Solario Tech is a software solutions company providing custom web & mobile applications, UI/UX design, and digital transformation services to help businesses grow.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-poppins font-medium text-lg text-navy-foreground">Join our newsletter</h4>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col gap-3">
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="name@gmail.com"
                    className="bg-navy-foreground/10 border-navy-foreground/20 rounded-full h-12 text-navy-foreground placeholder:text-navy-foreground/50 focus:border-primary px-6"
                  />
                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-full h-12 px-8 font-poppins font-medium"
                  >
                    Subscribe
                  </Button>
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs pl-4">{errors.email.message}</p>
                )}
              </form>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-poppins font-medium mb-6 text-navy-foreground">Quick Links</h3>
            <ul className="space-y-4 font-montserrat text-navy-foreground/80 text-sm">
              <li>
                <a href="/" className="hover:text-primary transition-colors block w-fit">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors block w-fit">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition-colors block w-fit">Services</a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-primary transition-colors block w-fit">Portfolio</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors block w-fit">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-poppins font-medium mb-6 text-navy-foreground">Services:</h3>
            <ul className="space-y-4 font-montserrat text-navy-foreground/80 text-sm">
              <li>
                <a href="/services/ios-app-development" className="hover:text-primary transition-colors block w-fit">iOS App Development</a>
              </li>
              <li>
                <a href="/services/android-app-development" className="hover:text-primary transition-colors block w-fit">Android App Development</a>
              </li>
              <li>
                <a href="/services/artificial-intelligence" className="hover:text-primary transition-colors block w-fit">Artificial Intelligence</a>
              </li>
              <li>
                <a href="/services/internet-of-things" className="hover:text-primary transition-colors block w-fit">Internet of Things</a>
              </li>
              <li>
                <a href="/services/cloud-solutions" className="hover:text-primary transition-colors block w-fit">Cloud Solutions</a>
              </li>
              <li>
                <a href="/services/automation" className="hover:text-primary transition-colors block w-fit">Automation</a>
              </li>
              <li>
                <a href="/services/software-maintenance" className="hover:text-primary transition-colors block w-fit">Software Maintenance</a>
              </li>
              <li>
                <a href="/services/it-strategy-and-consulting" className="hover:text-primary transition-colors block w-fit">IT Strategy & Consulting</a>
              </li>
              <li>
                <a href="/services/data-analytics" className="hover:text-primary transition-colors block w-fit">Data Analytics</a>
              </li>
              <li>
                <a href="/services/java-development" className="hover:text-primary transition-colors block w-fit">Java Development</a>
              </li>
              <li>
                <a href="/services/services/open-gl" className="hover:text-primary transition-colors block w-fit">Open GL</a>
              </li>
              <li>
                <a href="/services/app-maintenance" className="hover:text-primary transition-colors block w-fit">App Maintenance</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-poppins font-medium mb-6 text-navy-foreground">Contact Info</h3>
            <div className="space-y-6 font-montserrat text-navy-foreground/80 text-sm">
              <div className="space-y-1">
                <p className="font-semibold text-navy-foreground mb-1">Location:</p>
                <p>C-86, Phase 7 Mohali, Punjab</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-navy-foreground mb-1">Email:</p>
                <a href="mailto:contact@solariotech.com" className="hover:text-primary transition-colors">contact@solariotech.com</a>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-navy-foreground mb-1">Phone:</p>
                <a href="tel:+917087425488" className="hover:text-primary transition-colors">+91 7087425488</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-navy-foreground/60 text-sm font-montserrat">
            © {new Date().getFullYear()} Solario Tech. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/SachTechSol"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/917087425488"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/sachtech-solution-private-limited"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-navy-foreground/60 font-montserrat">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/terms-conditions" className="hover:text-primary transition-colors">Terms</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {isVisible && (
        <Button
          size="icon"
          className="fixed bottom-8 right-8 md:bottom-36 lg:bottom-36 xl:bottom-36 bg-primary text-white hover:bg-navy-foreground/90 hover:text-black h-12 w-12"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-10 w-10" />
        </Button>
      )}
    </footer>
  );
};

export default Footer;