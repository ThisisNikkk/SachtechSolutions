export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

export const jobsData: Job[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    location: "New York",
    type: "Full-time",
    department: "Engineering",
    description: "Join our engineering team to build scalable web applications using modern technologies and best practices."
  },
  {
    id: "2",
    title: "UX/UI Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    description: "Create beautiful and intuitive user experiences for our clients' digital products."
  },
  {
    id: "3",
    title: "Digital Marketing Manager",
    location: "Los Angeles",
    type: "Full-time",
    department: "Marketing",
    description: "Lead digital marketing strategies and campaigns to drive growth and engagement."
  },
  {
    id: "4",
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "Manage cloud infrastructure and ensure smooth deployment pipelines for our applications."
  },
  {
    id: "5",
    title: "Mobile App Developer",
    location: "San Francisco",
    type: "Full-time",
    department: "Engineering",
    description: "Build native and cross-platform mobile applications for iOS and Android."
  },
  {
    id: "6",
    title: "Content Strategist",
    location: "Remote",
    type: "Part-time",
    department: "Marketing",
    description: "Develop compelling content strategies that resonate with our target audience."
  },
  {
    id: "7",
    title: "Project Manager",
    location: "New York",
    type: "Full-time",
    department: "Operations",
    description: "Coordinate cross-functional teams to deliver projects on time and within budget."
  },
  {
    id: "8",
    title: "QA Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "Ensure product quality through comprehensive testing and automation strategies."
  }
];
