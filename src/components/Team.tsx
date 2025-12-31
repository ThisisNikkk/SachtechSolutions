import { Button } from "@/components/ui/button";
import { Linkedin, Globe, Twitter } from "lucide-react";
import xIcon from "@/assets/x-icon.jpg";
import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";
import team4 from "@/assets/team4.png";
import team5 from "@/assets/team5.png";
import team6 from "@/assets/team6.png";
import team7 from "@/assets/team7.png";
import team8 from "@/assets/team8.png";
import { Link, useNavigate } from "react-router-dom";

const Team = ({ onNavigate }) => {
  const navigate = useNavigate();
  const teamMembers = [
    {
      id: 1,
      name: "Kapil Dhawan",
      title: "Founder & CEO",
      image: team1,
      description: "Visionary leader driving the company's strategic direction and growth.",
      social: {
        linkedin: "https://www.linkedin.com/in/kapil-dhawan-91128a42/",
      },
    },
    {
      id: 2,
      name: "Mohit Asija",
      title: "CFO & Managing Director",
      image: team2,
      description: "Financial expert and strategic leader ensuring the company's fiscal health and operational excellence.",
      social: {
        linkedin: "https://www.linkedin.com/in/mohit-asija-987a5140/",
      },
    },
    {
      id: 3,
      name: "Sahil Dhawan",
      title: "Business Manager",
      image: team3,
      description: "Experienced manager overseeing business operations and driving efficiency.",
      social: {
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Diwanshu Tangri",
      title: "Project Manager",
      image: team4,
      description: "Detail-oriented project manager ensuring timely and successful project delivery.",
      social: {
        linkedin: "https://www.linkedin.com/in/diwanshu-tangri-45667b7b/",
      },
    },
    {
      id: 5,
      name: "Sunil Bhatia",
      title: "Project Manager",
      image: team8,
      description: "Dedicated project manager focused on delivering high-quality results for our clients.",
      social: {
        linkedin: "https://www.linkedin.com/in/sunil-b-2a0800a7/",
      },
    },
    {
      id: 6,
      name: "Shivali Sharma",
      title: "Project Manager",
      image: team5,
      description: "Proactive project manager with a knack for creative problem-solving and team collaboration.",
      social: {
        linkedin: "#",
      },
    },
    {
      id: 7,
      name: "Nardeep Sandhu",
      title: "Operational Manager",
      image: team6,
      description: "Streamlining workflows and enhancing productivity through effective operational strategies.",
      social: {
        linkedin: "https://www.linkedin.com/in/nardeep-sandhu-829b5169/",
      },
    },
    {
      id: 8,
      name: "Ashish Bhardwaj",
      title: "Operational Manager",
      image: team7,
      description: "Focused on optimizing operational processes and ensuring smooth business functions.",
      social: {
        linkedin: "https://www.linkedin.com/in/ashish-bhardwaj-257b50123/",
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
              <p className="text-sm text-muted-foreground font-montserrat leading-relaxed mb-4">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.social.linkedin}
                  className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4 text-black" />
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