import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import ServicesTicker from '@/components/ServicesTicker';
import { useParams, useNavigate } from 'react-router-dom';
import { jobsData } from '@/data/jobsData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Facebook, Linkedin, Link2, X, Instagram } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { toast } from 'sonner';
import { z } from 'zod';
import { useState } from 'react';

interface JobApplicationProps {
  onNavigate: () => void;
}

const jobApplicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(25, "First name must be less than 25 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(25, "Last name must be less than 25 characters"),
  email: z.string().trim().email("Invalid email address"),
  phone: z.string().trim().length(10, "Phone number must be exactly 10 digits"),
  address: z.string().trim().min(1, "Address is required").max(100, "Address must be less than 100 characters"),
  resumeLink: z.string().trim().url("Please enter a valid URL").min(1, "Resume link is required"),
  interest: z.string().trim().min(1, "Please tell us about your interest").max(500, "Interest must be less than 500 characters"),
  additionalLinks: z.string().trim().max(100, "Additional links must be less than 100 characters").optional(),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  resumeLink: string;
  interest: string;
  additionalLinks: string;
}

const JobApplication: React.FC<JobApplicationProps> = ({ onNavigate }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const job = jobsData.find(j => j.id === id);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    resumeLink: '',
    interest: '',
    additionalLinks: '',
  });

  if (!job) {
    navigate('/careers');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const clearPersonalInfo = () => {
    setFormData(prev => ({
      ...prev,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
    }));
  };

  const clearProfile = () => {
    setFormData(prev => ({ ...prev, resumeLink: '' }));
  };

  const clearDetails = () => {
    setFormData(prev => ({ ...prev, interest: '', additionalLinks: '' }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!", {
      className: "font-poppins",
      description: "Application link has been copied to clipboard.",
      classNames: {
        description: "font-montserrat"
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data with Zod
      jobApplicationSchema.parse(formData);
      setErrors({});

      // Prepare form data for Web3Forms
      const form = e.currentTarget;
      const formPayload = new FormData(form);
      formPayload.append("access_key", import.meta.env.VITE_WEB3APPLICATIONFORM_ACCESS_KEY);
      formPayload.append("position", job.title); // Add job title to submission

      const object = Object.fromEntries(formPayload);
      const json = JSON.stringify(object);

      // Submit to Web3Forms
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
        toast.success("Application Submitted!", {
          className: "font-poppins",
          description: "Thank you for applying. We'll be in touch soon.",
          classNames: {
            description: "font-montserrat"
          }
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          resumeLink: '',
          interest: '',
          additionalLinks: '',
        });

        // Navigate back to careers after submission
        setTimeout(() => {
          navigate('/careers');
        }, 2000);
      } else {
        toast.error("Submission Failed", {
          className: "font-poppins",
          description: "Something went wrong. Please try again.",
          classNames: {
            description: "font-montserrat"
          }
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);

        toast.error("Validation Error", {
          className: "font-poppins",
          description: "Please check the form and fix any errors.",
          classNames: {
            description: "font-montserrat"
          }
        });
      } else {
        toast.error("Error", {
          className: "font-poppins",
          description: "Failed to submit application. Please try again.",
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
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation onNavigate={onNavigate} />

      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-navy/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary font-montserrat text-lg mb-2">Join our excellent team at</p>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white">
            Solario Tech
          </h1>
        </div>
      </section>

      {/* Job Title & Badges */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-6">
            {job.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-montserrat">
              On-Site
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-montserrat">
              {job.location.split(',')[0]}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-montserrat">
              {job.department}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-montserrat">
              {job.type}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-montserrat">
              {job.experience}
            </Badge>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Form */}
            <div className="flex-1">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold font-poppins text-foreground mb-8">
                  Job Application
                </h3>

                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-bold font-poppins text-foreground">
                        Personal Information
                      </h4>
                      <button
                        type="button"
                        onClick={clearPersonalInfo}
                        className="text-sm text-muted-foreground hover:text-foreground font-montserrat flex items-center gap-1"
                      >
                        <X className="w-4 h-4" /> Clear
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="firstName" className="font-montserrat text-foreground/80 mb-2 block">
                          <span className="text-destructive">*</span> First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="h-12"
                          maxLength={25}
                        />
                        {errors.firstName && (
                          <p className="text-sm text-destructive mt-1 font-montserrat">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="font-montserrat text-foreground/80 mb-2 block">
                          <span className="text-destructive">*</span> Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="h-12"
                          maxLength={25}
                        />
                        {errors.lastName && (
                          <p className="text-sm text-destructive mt-1 font-montserrat">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="email" className="font-montserrat text-foreground/80 mb-2 block">
                          <span className="text-destructive">*</span> Email ID
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="johndoe@mail.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1 font-montserrat">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="font-montserrat text-foreground/80 mb-2 block">
                          <span className="text-destructive">*</span> Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="1234567890"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12"
                          maxLength={10}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive mt-1 font-montserrat">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="address" className="font-montserrat text-foreground/80 mb-2 block">
                        <span className="text-destructive">*</span> Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="XYZ Street, New York, NY"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="h-12"
                        maxLength={100}
                      />
                      {errors.address && (
                        <p className="text-sm text-destructive mt-1 font-montserrat">{errors.address}</p>
                      )}
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-bold font-poppins text-foreground">
                        Profile
                      </h4>
                      <button
                        type="button"
                        onClick={clearProfile}
                        className="text-sm text-muted-foreground hover:text-foreground font-montserrat flex items-center gap-1"
                      >
                        <X className="w-4 h-4" /> Clear
                      </button>
                    </div>

                    <div>
                      <Label htmlFor="resumeLink" className="font-montserrat text-foreground/80 mb-2 block">
                        <span className="text-destructive">*</span> Resume (Google Drive Link)
                      </Label>
                      <Input
                        id="resumeLink"
                        name="resumeLink"
                        type="url"
                        placeholder="https://drive.google.com/file/d/..."
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                      {errors.resumeLink && (
                        <p className="text-sm text-destructive mt-1 font-montserrat">{errors.resumeLink}</p>
                      )}
                      <p className="text-xs text-muted-foreground font-montserrat mt-2">
                        Please ensure your Google Drive link is set to "Anyone with the link can view"
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-bold font-poppins text-foreground">
                        Details
                      </h4>
                      <button
                        type="button"
                        onClick={clearDetails}
                        className="text-sm text-muted-foreground hover:text-foreground font-montserrat flex items-center gap-1"
                      >
                        <X className="w-4 h-4" /> Clear
                      </button>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="interest" className="font-montserrat text-foreground/80 mb-2 block">
                        <span className="text-destructive">*</span> Let the company know about your interest working here
                      </Label>
                      <Textarea
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="min-h-[120px] resize-none"
                        maxLength={500}
                      />
                      {errors.interest && (
                        <p className="text-sm text-destructive mt-1 font-montserrat">{errors.interest}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="additionalLinks" className="font-montserrat text-foreground/80 mb-2 block">
                        <span className="text-destructive">*</span> Additional Links <span className="text-muted-foreground">( Portfolio, Website, LinkedIn )</span>
                      </Label>
                      <Textarea
                        id="additionalLinks"
                        name="additionalLinks"
                        value={formData.additionalLinks}
                        onChange={handleInputChange}
                        className="min-h-[120px] resize-none"
                        maxLength={100}
                      />
                      {errors.additionalLinks && (
                        <p className="text-sm text-destructive mt-1 font-montserrat">{errors.additionalLinks}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full font-montserrat font-semibold text-lg py-6 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply for this job'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Social Share Sidebar */}
            <div className="lg:w-16">
              <div className="sticky top-36 flex lg:flex-col gap-3 justify-center lg:justify-start">
                <a
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/80 transition-colors"
                  aria-label="Share on Facebook"
                  href="https://facebook.com/SachTechSol"
                >
                  <Facebook className="w-5 h-5 text-text-foreground" />
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/80 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Instagram className="w-5 h-5 text-foreground" />
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/80 transition-colors"
                  aria-label="Share on LinkedIn"
                  href="https://www.linkedin.com/company/sachtech-solution-private-limited"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <button
                  onClick={handleCopyLink}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/80 transition-colors"
                  aria-label="Copy link"
                >
                  <Link2 className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesTicker />
      <Footer />
    </div>
  );
};

export default JobApplication;
