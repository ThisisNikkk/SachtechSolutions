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
import { Facebook, Linkedin, Link2, Upload, X, Instagram } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { useToast } from '@/hooks/use-toast';
import { useState, useRef } from 'react';

interface JobApplicationProps {
  onNavigate: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  photo: File | null;
  resume: File | null;
  interest: string;
  additionalLinks: string;
}

const JobApplication: React.FC<JobApplicationProps> = ({ onNavigate }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const photoInputRef = useRef<HTMLInputElement>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  const job = jobsData.find(j => j.id === id);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    photo: null,
    resume: null,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'photo' | 'resume') => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const clearPersonalInfo = () => {
    setFormData(prev => ({
      ...prev,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      photo: null,
    }));
    if (photoInputRef.current) photoInputRef.current.value = '';
  };

  const clearProfile = () => {
    setFormData(prev => ({ ...prev, resume: null }));
    if (resumeInputRef.current) resumeInputRef.current.value = '';
  };

  const clearDetails = () => {
    setFormData(prev => ({ ...prev, interest: '', additionalLinks: '' }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Application link has been copied to clipboard.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.resume) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "Thank you for applying. We'll be in touch soon.",
    });

    // Navigate back to careers after submission
    setTimeout(() => {
      navigate('/careers');
    }, 2000);
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
                          placeholder="Example XYZ"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="font-montserrat text-foreground/80 mb-2 block">
                          <span className="text-destructive">*</span> Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Example XYZ"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="h-12"
                        />
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
                          placeholder="Example@mail.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="font-montserrat text-foreground/80 mb-2 block">
                          <span className="text-destructive">*</span> Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXXXXXXX"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="address" className="font-montserrat text-foreground/80 mb-2 block">
                        <span className="text-destructive">*</span> Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Example XYZ"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>

                    <div>
                      <Label className="font-montserrat text-foreground/80 mb-2 block">
                        Photo ( Optional )
                      </Label>
                      <div
                        className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                        onClick={() => photoInputRef.current?.click()}
                      >
                        <input
                          ref={photoInputRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileChange(e, 'photo')}
                        />
                        {formData.photo ? (
                          <p className="text-foreground font-montserrat">{formData.photo.name}</p>
                        ) : (
                          <div className="flex flex-col items-center gap-3">
                            <Upload className="w-8 h-8 text-foreground" />
                            <p className="text-muted-foreground font-montserrat">
                              <span className="text-primary underline">Upload a file</span> or drag and drop here
                            </p>
                          </div>
                        )}
                      </div>
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
                      <Label className="font-montserrat text-foreground/80 mb-2 block">
                        <span className="text-destructive">*</span> Resume
                      </Label>
                      <div
                        className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                        onClick={() => resumeInputRef.current?.click()}
                      >
                        <input
                          ref={resumeInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) => handleFileChange(e, 'resume')}
                        />
                        {formData.resume ? (
                          <p className="text-foreground font-montserrat">{formData.resume.name}</p>
                        ) : (
                          <div className="flex flex-col items-center gap-3">
                            <Upload className="w-8 h-8 text-foreground" />
                            <p className="text-muted-foreground font-montserrat">
                              <span className="text-primary underline">Upload a file</span> or drag and drop here
                            </p>
                          </div>
                        )}
                      </div>
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
                      />
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
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full rounded-full font-montserrat font-semibold text-lg py-6"
                  >
                    Apply for this job
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
