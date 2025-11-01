import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Github, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

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
              <span className="text-foreground font-medium">Our Newsletter</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-foreground block mb-2">Subscribe </span>
              <span className="text-primary">For Expert IT Tips And Social Offer</span>
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
            <Button type="submit" className="h-12 px-8 rounded-full">
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Logo & Links */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="IT Company" className="w-12 h-12" />
                <span className="text-navy-foreground font-bold text-xl">IT Company.</span>
              </div>
              <p className="text-navy-foreground opacity-80">
                Design amazing digital experiences that create more happy in the world
              </p>
              <nav className="flex flex-wrap gap-4 text-sm">
                <a href="#about" className="text-navy-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#careers" className="text-navy-foreground hover:text-primary transition-colors">
                  Careers
                </a>
                <a href="#contact" className="text-navy-foreground hover:text-primary transition-colors">
                  Contact us
                </a>
                <a href="#projects" className="text-navy-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#help" className="text-navy-foreground hover:text-primary transition-colors">
                  Help
                </a>
                <a href="#privacy" className="text-navy-foreground hover:text-primary transition-colors">
                  Privacy
                </a>
              </nav>
            </div>

            {/* Column 2: Contact */}
            <div className="space-y-6">
              <h3 className="text-navy-foreground font-bold text-xl">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-navy-foreground" />
                  <span className="text-navy-foreground">002-828-232</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-navy-foreground" />
                  <span className="text-navy-foreground">chasman937@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-navy-foreground" />
                  <span className="text-navy-foreground">775 Rolling Green Rd.</span>
                </div>
              </div>
            </div>

            {/* Column 3: Get the app */}
            <div className="space-y-6">
              <h3 className="text-navy-foreground font-bold text-xl">Get the app</h3>
              <div className="space-y-3">
                <a
                  href="#app-store"
                  className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                        fill="white"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-navy-foreground opacity-80">Download on the</div>
                      <div className="text-sm font-bold text-navy-foreground">App Store</div>
                    </div>
                  </div>
                </a>
                <a
                  href="#google-play"
                  className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                        fill="white"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-navy-foreground opacity-80">GET IT ON</div>
                      <div className="text-sm font-bold text-navy-foreground">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Sub-Footer */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-navy-foreground text-sm">
                © 2025 IT Company. All rights reserved.
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
                  <Github className="w-5 h-5" />
                </a>
                <a href="#dribbble" className="text-navy-foreground hover:text-primary transition-colors">
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
