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
    title: "Android Developer",
    location: "Mohali, India",
    type: "Full-time",
    department: "Engineering",
    description: "Develop and maintain advanced applications for the Android platform."
  },
  {
    id: "2",
    title: "iOS Developer",
    location: "Mohali, India",
    type: "Full-time",
    department: "Engineering",
    description: "Design and build advanced applications for the iOS platform."
  },
  {
    id: "3",
    title: "Video Editor",
    location: "Mohali, India",
    type: "Full-time",
    department: "Design",
    description: "Edit and assemble recorded raw material into a finished product ready for broadcasting."
  },
  {
    id: "4",
    title: "Tester",
    location: "Mohali, India",
    type: "Full-time",
    department: "Engineering",
    description: "Execute manual and automated tests to ensure software quality, identifying bugs for stability."
  }
];
