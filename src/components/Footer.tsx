import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Github, Dribbble, Instagram, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
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
    <footer>
      {/* Newsletter Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-foreground font-montserrat">Our Newsletter</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins">
              <span className="text-foreground block mb-2">Subscribe{' '}
                <span className="text-primary">For Expert IT 
                <br/>
                Tips And Social Offer
                </span>
                </span>
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter Your Email"
                className="pl-12 h-12 rounded-full border-border"
              />
            </div>
            <Button type="submit" className="rounded-full px-8 py-6 text-base font-montserrat font-medium h-10 border-foreground text-background hover:bg-foreground hover:text-background">
              Subscribe
            </Button>
          </form>
          {errors.email && (
            <p className="text-destructive text-sm text-center mt-2">{errors.email.message}</p>
          )}
        </div>
      </section>

      {/* Main Footer */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-20 lg:gap-48 mb-12">
            {/* Column 1: Logo & Links */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src={logo } alt="IT Company" className="max-w-xs h-16 sm:w-50 sm:h-20" />
              </div>
              <p className="text-background font-poppins md:text-sm">
                Design amazing digital experiences that create more happy in the world
              </p>
              <nav className="flex flex-wrap gap-4 text-sm font-montserrat font-medium pb-4">
                <a href="#about" className="text-navy-foreground hover:text-primary transition-colors lg:text-[14px] md:text-[12px]">
                  About Us
                </a>
                <a href="#careers" className="text-navy-foreground hover:text-primary transition-colors lg:text-[14px] md:text-[12px]">
                  Careers
                </a>
                <a href="#contact" className="text-navy-foreground hover:text-primary transition-colors  lg:text-[14px] md:text-[12px]">
                  Contact us
                </a>
                <a href="#projects" className="text-navy-foreground hover:text-primary transition-colors lg:text-[14px] md:text-[12px]">
                  Projects
                </a>
                <a href="#privacy" className="text-navy-foreground hover:text-primary transition-colors lg:text-[14px] md:text-[12px]">
                  Privacy
                </a>
              </nav>
            </div>

            {/* Column 2: Contact */}
            <div className="space-y-6">
              <h3 className="text-navy-foreground font-bold font-poppins text-xl md:text-base">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-navy-foreground" />
                  <span className="text-navy-foreground font-montserrat md:text-sm">+91 7087425488</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-navy-foreground" />
                  <span className="text-navy-foreground font-montserrat md:text-sm">kapil.dhawan@sachtechsolution.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-navy-foreground" />
                  <span className="text-navy-foreground font-montserrat md:text-sm">C-86, Phase 7 Mohali, Punjab</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Footer */}
          <div className="border-t border-white/8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-navy-foreground text-sm font-montserrat ">
                © 2025 Sachtech Solutions . All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#twitter" className="text-navy-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#linkedin" className="text-navy-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#facebook" className="text-navy-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#github" className="text-navy-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
