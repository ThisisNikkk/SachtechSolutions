import { Button } from "@/components/ui/button";
import { Linkedin, Globe, Twitter } from "lucide-react";
import xIcon from "@/assets/x-icon.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";
import team7 from "@/assets/team-7.jpg";
import team8 from "@/assets/team-8.jpg";
import { Link, useNavigate } from "react-router-dom";

const Team = ({ onNavigate }) => {
  const navigate = useNavigate();
  const teamMembers = [
    {
      id: 1,
      name: "Amélie Laurent",
      title: "Founder & CEO",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      image: team1,
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 2,
      name: "Nikolas Gibbons",
      title: "Engineering Manager",
      description: "Lead engineering teams at Figma, Pitch, and Deck-Lynx.",
      image: team2,
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 3,
      name: "Sienna Hewitt",
      title: "Product Manager",
      description: "Former PM for Linear, Lambda School, and On Deck.",
      image: team3,
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 4,
      name: "Lily-Rose Chedjou",
      title: "Frontend Developer",
      description: "Former frontend dev for Linear, Coinbase, and Postscript.",
      image: team4,
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 5,
      name: "Zahra Christensen",
      title: "Backend Developer",
      description: "Lead backend dev at ClearBit. Former ClearDial and GoDel.",
      image: team5,
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 6,
      name: "Caitlyn King",
      title: "Product Designer",
      description: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
      image: team6,
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 7,
      name: "Zaid Schwartz",
      title: "UX Researcher",
      description: "Lead user research for Slack. Contractor for Netflix and Udacity.",
      image: team7,
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 8,
      name: "Marco Kelly",
      title: "Customer Success",
      description: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
      image: team8,
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
  ];

  const handleViewAllClick = () => {
    if (onNavigate) {
      onNavigate();
    }
    navigate("/about");
  };

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-16">
          {/* Left - Headline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary"></div>
              <p className="text-foreground font-montserrat">Our Team</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins">
              <span className="text-foreground">Meet Our </span>
              <span className="text-primary">Expert team</span>
            </h2>
          </div>

          {/* Right - View All Button */}
          <Button className="rounded-full px-12 py-6 text-base font-montserrat font-medium border-foreground text-background hover:bg-foreground hover:text-background" onClick={handleViewAllClick}>
            View All
          </Button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              {/* Profile Image */}
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-medium font-poppins text-foreground mb-1">
                {member.name}
              </h3>

              {/* Title */}
              <p className="text-primary font-poppins mb-3">{member.title}</p>

              {/* Description */}
              <p className="text-sm text-muted-foreground font-montserrat leading-relaxed mb-4">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.social.twitter}
                  className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <Twitter className="w-4 h-4 text-black" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-4 h-4 text-black" />
                </a>
                <a
                  href={member.social.website}
                  className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={`${member.name}'s Website`}
                >
                  <Globe className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;