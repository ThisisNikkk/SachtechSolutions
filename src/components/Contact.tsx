import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = ({ onNavigate }: { onNavigate?: () => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactFormSchema.parse(formData);
      setErrors({});

      if (onNavigate) {
        onNavigate();
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-primary"></div>
                <p className="text-foreground font-montserrat">Contact Us</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                <span className="text-foreground">Get Your </span>
                <span className="text-primary">Free Quote</span>
                <span className="text-foreground"> Today!</span>
              </h2>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-foreground font-poppins mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && (
                    <p className="text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-foreground font-poppins mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && (
                    <p className="text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-foreground font-poppins mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91-1234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && (
                    <p className="text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-foreground font-poppins mb-2">
                    Service
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="h-12 rounded-lg font-montserrat">
                      <SelectValue placeholder="Select services" />
                    </SelectTrigger>
                    <SelectContent className="bg-card z-50 font-montserrat">
                      <SelectItem value="android">Android Development</SelectItem>
                      <SelectItem value="ios">iOS Development</SelectItem>
                      <SelectItem value="web">Website Development</SelectItem>
                      <SelectItem value="uiux">UX/UI Design</SelectItem>
                      <SelectItem value="maintenance">App Maintenance</SelectItem>
                      <SelectItem value="seo">SEO Optimization</SelectItem>
                      <SelectItem value="cloud">Cloud Services</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm mt-1">{errors.service}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-foreground font-poppins mb-2">
                  Your Message
                </label>
                <Textarea
                  className="font-montserrat text-sm"
                  placeholder="Enter Here..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && (
                  <p className="text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="rounded-full px-8 py-6 text-base font-montserrat font-medium h-10 border-foreground text-background hover:bg-foreground hover:text-background">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info Card */}
          <div className="bg-navy text-navy-foreground rounded-3xl p-8 lg:p-12 h-fit lg:col-span-2">
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-2xl font-medium font-poppins mb-3">Address</h3>
              <p className="opacity-90 font-montserrat text-sm">
                C-86, Phase 7, Industrial Area, Sector 74,
                <br />
                Sahibzada Ajit Singh Nagar, Punjab 160055
              </p>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h3 className="text-2xl font-medium font-poppins mb-3">Contact</h3>
              <p className="opacity-90 font-montserrat text-sm">Phone: +(91) 7087425488</p>
              <p className="opacity-90 font-montserrat text-sm">Email: contact@solariotech.com</p>
            </div>

            {/* Open Time */}
            <div className="mb-8">
              <h3 className="text-2xl font-medium font-poppins mb-3">Open Time</h3>
              <p className="opacity-90 font-montserrat text-sm">Monday - Friday | 11:00 - 20:00</p>
            </div>

            {/* Stay Connected */}
            <div>
              <h3 className="text-2xl font-medium font-poppins mb-4">Stay Connected</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform hover:bg-background hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform hover:bg-background hover:text-primary"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform hover:bg-background hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform hover:bg-background hover:text-primary"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
