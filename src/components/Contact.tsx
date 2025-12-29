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
import { toast } from "sonner";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = ({ onNavigate }: { onNavigate?: () => void }) => {
  // Removed useToast hook
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactFormSchema.parse(formData);
      setErrors({});

      const form = e.currentTarget;
      const formPayload = new FormData(form);
      formPayload.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

      const object = Object.fromEntries(formPayload);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        if (onNavigate) {
          onNavigate();
        }

        toast.success("Message sent successfully!", {
          className: "font-poppins",
          description: "We'll get back to you soon.",
          classNames: {
            description: "font-montserrat"
          }
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Error sending message", {
          className: "font-poppins",
          description: "Something went wrong. Please try again.",
          classNames: {
            description: "font-montserrat"
          }
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast.error("Error", {
          className: "font-poppins",
          description: "Failed to send message. Please try again.",
          classNames: {
            description: "font-montserrat"
          }
        });
        console.error("Error:", error);
      }
    } finally {
      setIsSubmitting(false);
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
                    name="name"
                    required
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
                    name="email"
                    required
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
                    name="phone"
                    required
                    placeholder="1234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    maxLength={10}
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
                    name="service"
                    required
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="h-12 rounded-lg font-montserrat">
                      <SelectValue placeholder="Select services" />
                    </SelectTrigger>
                    <SelectContent className="bg-card z-50 font-montserrat">
                      <SelectItem value="iOS App Development">iOS App Development</SelectItem>
                      <SelectItem value="Android App Development">Android App Development</SelectItem>
                      <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
                      <SelectItem value="Internet of Things">Internet of Things</SelectItem>
                      <SelectItem value="Cloud Solutions">Cloud Solutions</SelectItem>
                      <SelectItem value="Automation">Automation</SelectItem>
                      <SelectItem value="Software Maintenance">Software Maintenance</SelectItem>
                      <SelectItem value="IT Strategy & Consulting">IT Strategy & Consulting</SelectItem>
                      <SelectItem value="Data Analytics">Data Analytics</SelectItem>
                      <SelectItem value="Java Development">Java Development</SelectItem>
                      <SelectItem value="Open GL">Open GL</SelectItem>
                      <SelectItem value="App Maintenance">App Maintenance</SelectItem>
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
                  name="message"
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
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full px-8 py-6 text-base font-montserrat font-medium h-10 border-foreground text-background hover:bg-foreground hover:text-background disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
