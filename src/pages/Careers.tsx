import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import ServicesTicker from '@/components/ServicesTicker';
import JobCard from '@/components/JobCard';
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, HeartPulse, Plane, GraduationCap, Users, Trophy, Clock, Smile } from 'lucide-react';
import { jobsData } from '@/data/jobsData';
import teamCollaborating from '@/assets/team-collaboration.jpg';
import officeSpace from '@/assets/office-space.jpg';
import teamLunch from '@/assets/team-lunch.jpg';
import casualGathering from '@/assets/casual-gathering.jpg';
import modernOffice from '@/assets/modern-office.jpg';

interface CareersProps {
  onNavigate: () => void;
}

const Careers: React.FC<CareersProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  // Get unique locations and departments
  const locations = useMemo(() => {
    const uniqueLocations = Array.from(new Set(jobsData.map(job => job.location)));
    return ['all', ...uniqueLocations];
  }, []);

  const departments = useMemo(() => {
    const uniqueDepartments = Array.from(new Set(jobsData.map(job => job.department)));
    return ['all', ...uniqueDepartments];
  }, []);

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = locationFilter === 'all' || job.location === locationFilter;
      const matchesDepartment = departmentFilter === 'all' || job.department === departmentFilter;
      
      return matchesSearch && matchesLocation && matchesDepartment;
    });
  }, [searchQuery, locationFilter, departmentFilter]);

  const benefits = [
    {
      icon: Check,
      title: "Innovative Projects",
      description: "Work on cutting-edge technologies and solutions that make a real impact."
    },
    {
      icon: Clock,
      title: "Flexible Work Hours",
      description: "Balance your work and life with flexible schedules and remote options."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Access to courses, conferences, and certifications to grow your skills."
    },
    {
      icon: Users,
      title: "Inclusive Environment",
      description: "Join a diverse team that values every voice and perspective."
    },
    {
      icon: Trophy,
      title: "Competitive Compensation",
      description: "Industry-leading salaries and performance-based bonuses."
    }
  ];

  const perks = [
    {
      icon: HeartPulse,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, gym memberships, and wellness programs."
    },
    {
      icon: Plane,
      title: "Paid Time Off",
      description: "Generous vacation days, sick leave, and paid holidays throughout the year."
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Annual learning budget for courses, books, and conference attendance."
    },
    {
      icon: Smile,
      title: "Team Events",
      description: "Regular team building activities, social events, and celebrations."
    }
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation onNavigate={onNavigate} />
      
      {/* Page Banner */}
      <PageBanner 
        title="Careers" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers' }
        ]} 
      />

      {/* Why Join Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Header & Image */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-0.5 bg-primary"></div>
                  <span className="text-foreground font-montserrat font-semibold">Our Culture</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                  Why Work With <span className="text-primary">Sachtech Solutions</span>?
                </h2>
              </div>
              <img 
                src={teamCollaborating} 
                alt="Team collaborating" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>

            {/* Right Column - Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                We Empower Our People
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground font-montserrat mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-foreground/80 font-montserrat">
                          {benefit.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServicesTicker />

      {/* Life at IT Company */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-foreground font-montserrat font-semibold">A Glimpse Inside</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins">
              Life at <span className="text-primary">Sachtech Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <img 
              src={modernOffice} 
              alt="Modern office space" 
              className="rounded-lg shadow-lg w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={officeSpace} 
              alt="Team collaboration" 
              className="rounded-lg shadow-lg w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={teamLunch} 
              alt="Team lunch" 
              className="rounded-lg shadow-lg w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={casualGathering} 
              alt="Casual gathering" 
              className="rounded-lg shadow-lg w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={modernOffice} 
              alt="Modern office space" 
              className="rounded-lg shadow-lg w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={officeSpace} 
              alt="Team collaboration" 
              className="rounded-lg shadow-lg w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={teamLunch} 
              alt="Team lunch" 
              className="rounded-lg shadow-lg w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={casualGathering} 
              alt="Casual gathering" 
              className="rounded-lg shadow-lg w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <ServicesTicker />

      {/* Open Positions Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-foreground font-montserrat font-semibold">Your Next Opportunity</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                Explore Our <span className="text-primary">Open Roles</span>
              </h2>
            </div>
            {/* <Button 
              size="lg"
              className="rounded-full font-montserrat font-semibold"
            >
              Submit Resume
            </Button> */}
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-card rounded-lg p-6 shadow-md mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <Input
                  type="text"
                  placeholder="Search by keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full h-12 font-montserrat">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location === 'all' ? 'All Locations' : location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-full h-12 font-montserrat">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map(department => (
                      <SelectItem key={department} value={department}>
                        {department === 'all' ? 'All Departments' : department}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  location={job.location}
                  type={job.type}
                  description={job.description}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg font-montserrat">
                  No positions found matching your criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ServicesTicker />

      {/* Perks & Benefits Section */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-foreground font-montserrat font-semibold">Employee Focus</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins">
              Our <span className="text-primary">Awesome Perks</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">
                    {perk.title}
                  </h3>
                  <p className="text-muted-foreground font-montserrat">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesTicker />

      {/* Call to Action */}
      <section className="py-32 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-foreground mb-4 font-poppins">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-navy-foreground mb-8 font-montserrat">
            Explore our opportunities and grow with us.
          </p>
          <Button 
            size="lg"
            className="rounded-full font-montserrat font-semibold text-lg px-8"
            onClick={() => {
              const element = document.querySelector('#open-positions') as HTMLElement;
              if (element) {
                window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
              }
            }}
          >
            View All Openings
          </Button>
        </div>
      </section>

      <ServicesTicker />
      <Footer />
    </div>
  );
};

export default Careers;
