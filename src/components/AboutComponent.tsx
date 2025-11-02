import { Button } from "@/components/ui/button";
import StatsCount from "@/components/ui/statscount";
import teamWorkingImage from "@/assets/team-working.jpg";
import { ArrowRight } from "lucide-react";

const AboutComponent = () => {
  const stats = [
    { value: 50, suffix: "+", label: "Team Members" },
    { value: 300, suffix: "+", label: "Happy Clients" },
    { value: 99, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text & Stats */}
          <div className="space-y-8">
            {/* Text Content */}
            <div className="space-y-6">
              {/* Pre-headline */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-muted-foreground text-sm font-monntserrat">Why Choose Us</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold leading-tight ">
                Transforming <span className="text-primary">ideas</span>
                <br />
                <span className="text-primary">into Digital Reality</span>
              </h2>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed font-montserrat">
                SachTech Solution Private Limited, incorporated on August 11, 2016 under the Companies Act, 2013 (CIN: U72900CH2016PTC041177), is a leading technology company headquartered in Mohali, India.
                Driven by a team of passionate and innovative young entrepreneurs, SachTech has established a strong presence in the global IT industry. We proudly serve clients across multiple countries, including the USA, Canada, UK, Brazil, Spain, Malaysia, UAE, Egypt, Australia, Finland, and many others.
                <br/>
                <br/>
                At SachTech, we take pride in fostering a culture of integrity, collaboration, and social responsibility. We are dedicated to creating a positive impact in the communities where we live and work, while continuously striving to make technology accessible and beneficial for all.             
                </p>

              {/* Mission and Vision */}
              <div className="space-y-8">
                  <div>
                      <h3 className="text-2xl font-bold text-primary mb-2 font-poppins">Our Mission</h3>
                      <p className="text-muted-foreground leading-relaxed font-montserrat">
                        We design and execute market-leading performance roadmaps by blending creative thinking, technological expertise, and global reach. Our goal is to eliminate the gap between client needs and our solutions—achieving complete alignment through continuous innovation. We strive to anticipate unspoken challenges and deliver transformative solutions that drive value. Committed to sustainability, we ensure that our growth—and that of our clients—supports economic, social, and environmental progress. 
                     </p>
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold text-primary mb-2 font-poppins">Our Vision</h3>
                      <p className="text-muted-foreground leading-relaxed font-montserrat">
                          To be a globally recognized leader in IT solutions, known for our commitment to excellence, integrity, and client success.
                      </p>
                  </div>
              </div>
            </div>

            {/* Stats Bar */}
            <StatsCount stats={stats} className="bg-primary text-primary-foreground p-2 font-poppins" />
          </div>

          {/* Right Column - Image & Graphics */}
          <div className="relative bg-navy p-8 lg:p-12">
            {/* Decorative circular elements */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 border-4 border-primary rounded-full"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 border-4 border-primary rounded-full"></div>
            </div>

            {/* Thin white frame behind */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-white/30"></div>

            {/* Blue framed image */}
            <div className="relative z-10 bg-primary p-4">
              <img 
                src={teamWorkingImage} 
                alt="Team members collaborating at computer" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
