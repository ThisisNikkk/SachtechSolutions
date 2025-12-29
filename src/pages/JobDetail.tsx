import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import ServicesTicker from '@/components/ServicesTicker';
import { useParams, useNavigate } from 'react-router-dom';
import { jobsData } from '@/data/jobsData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { useToast } from '@/hooks/use-toast';

interface JobDetailProps {
  onNavigate: () => void;
}

const JobDetail: React.FC<JobDetailProps> = ({ onNavigate }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const job = jobsData.find(j => j.id === id);

  if (!job) {
    navigate('/careers');
    return null;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Job link has been copied to clipboard.",
    });
  };

  const handleApply = () => {
    navigate(`/careers/${id}/apply`);
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

      {/* Job Details Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-6">
                Job Details
              </h3>

              {/* Description */}
              <div className="mb-10">
                <h4 className="text-xl font-bold font-poppins text-foreground mb-4">
                  Description
                </h4>
                {job.detailedDescription.map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 font-montserrat mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Responsibilities */}
              <div className="mb-10">
                <h4 className="text-xl font-bold font-poppins text-foreground mb-4">
                  Key Responsibilities
                </h4>
                <p className="text-foreground/80 font-montserrat mb-4 leading-relaxed">
                  The ideal candidate is an individual with proven experience working closely with clients, stakeholders, and architects to construct, test and deliver data engineering solutions that align with client needs.
                </p>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground/80 font-montserrat">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills, Knowledge and Expertise */}
              <div className="mb-10">
                <h4 className="text-xl font-bold font-poppins text-foreground mb-4">
                  Skills, Knowledge and Expertise
                </h4>
                <ul className="space-y-3">
                  {job.skills.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground/80 font-montserrat">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-10">
                <h4 className="text-xl font-bold font-poppins text-foreground mb-4">
                  Benefits
                </h4>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground/80 font-montserrat">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Share Sidebar */}
            <div className="lg:w-16">
              <div className="sticky top-32 flex lg:flex-col gap-3 justify-center lg:justify-start">
                <button
                  className="w-10 h-10 mt-4 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground" />
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5 text-foreground" />
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={handleCopyLink}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  aria-label="Copy link"
                >
                  <Link2 className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Button */}
      <section className="py-8 bg-background border-t border-border ">
        <div className="container mx-auto px-4">
          <Button
            onClick={handleApply}
            className="w-full max-w-md mx-auto block rounded-full font-montserrat font-semibold text-lg py-6 text-center flex justify-center items-center"
          >
            Apply for this job
          </Button>
        </div>
      </section>

      <ServicesTicker />
      <Footer />
    </div>
  );
};

export default JobDetail;
