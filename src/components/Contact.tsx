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

const Contact = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-primary"></div>
                <p className="text-foreground font-medium">Contact Us</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
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
                  <label className="block text-foreground font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Email*
                  </label>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Phone*
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Service
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select services" />
                    </SelectTrigger>
                    <SelectContent className="bg-card z-50">
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
                    <p className="text-destructive text-sm mt-1">{errors.service}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-foreground font-medium mb-2">
                  Your Message *
                </label>
                <Textarea
                  placeholder="Enter Here..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="rounded-md">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info Card */}
          <div className="bg-navy text-navy-foreground rounded-3xl p-8 lg:p-12 h-fit">
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">Address</h3>
              <p className="opacity-90">
                2464 Royal Ln. Mesa,
                <br />
                New Jersey 45463
              </p>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">Contact</h3>
              <p className="opacity-90 mb-1">Phone: +(200) 000-000</p>
              <p className="opacity-90">Email: example@gmail.com</p>
            </div>

            {/* Open Time */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">Open Time</h3>
              <p className="opacity-90">Monday - Friday | 10:00 - 20:00</p>
            </div>

            {/* Stay Connected */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
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
