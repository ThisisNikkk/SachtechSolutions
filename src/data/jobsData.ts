export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  description: string;
  detailedDescription: string[];
  responsibilities: string[];
  skills: string[];
  benefits: string[];
}

export const jobsData: Job[] = [
  {
    id: "1",
    title: "Android Developer",
    location: "Mohali, India",
    type: "Full-time",
    department: "Engineering",
    experience: "2 to 4 Years",
    description: "Develop and maintain advanced applications for the Android platform.",
    detailedDescription: [
      "We are looking for a passionate Android Developer to join our growing team. You will be responsible for developing and maintaining high-quality mobile applications for the Android platform, ensuring the best possible performance, quality, and responsiveness.",
      "As an Android Developer at SolarioTech, you will work closely with our product and design teams to define and implement innovative solutions for product direction, visuals, and experience."
    ],
    responsibilities: [
      "Design and build advanced applications for the Android platform",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Work with outside data sources and APIs",
      "Unit-test code for robustness, including edge cases, usability, and general reliability",
      "Work on bug fixing and improving application performance",
      "Continuously discover, evaluate, and implement new technologies to maximize development efficiency"
    ],
    skills: [
      "2+ years of experience in Android development with Kotlin and Java",
      "Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes",
      "Familiarity with RESTful APIs to connect Android applications to back-end services",
      "Experience with offline storage, threading, and performance tuning",
      "Understanding of design patterns and software development principles",
      "Proficient in code versioning tools such as Git"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "One EL credited per month",
      "Opportunities to work with cutting-edge technologies and innovative projects",
      "Comprehensive training and development programs to support your career growth"
    ]
  },
  {
    id: "2",
    title: "iOS Developer",
    location: "Mohali, India",
    type: "Full-time",
    department: "Engineering",
    experience: "2 to 4 Years",
    description: "Design and build advanced applications for the iOS platform.",
    detailedDescription: [
      "We are seeking a talented iOS Developer to join our mobile development team. You will be responsible for the development and maintenance of applications aimed at a range of iOS devices including mobile phones and tablet computers.",
      "Your primary focus will be development of iOS applications and their integration with back-end services. You will be working alongside other engineers and developers working on different layers of the infrastructure."
    ],
    responsibilities: [
      "Design and build applications for the iOS platform using Swift and Objective-C",
      "Ensure the performance, quality, and responsiveness of applications",
      "Collaborate with a team to define, design, and ship new features",
      "Identify and correct bottlenecks and fix bugs",
      "Help maintain code quality, organization, and automatization",
      "Participate in code reviews and contribute to team knowledge sharing"
    ],
    skills: [
      "3+ years of experience in iOS development with Swift and Objective-C",
      "Proficient with Xcode, Interface Builder, and iOS SDK",
      "Experience with third-party libraries and APIs",
      "Understanding of Apple's design principles and interface guidelines",
      "Experience with performance and memory tuning with tools",
      "Familiarity with cloud message APIs and push notifications"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "One EL credited per month",
      "Opportunities to work with cutting-edge technologies and innovative projects",
      "Comprehensive training and development programs to support your career growth"
    ]
  },
  {
    id: "3",
    title: "Video Editor",
    location: "Mohali, India",
    type: "Full-time",
    department: "Design",
    experience: "1 to 3 Years",
    description: "Edit and assemble recorded raw material into a finished product ready for broadcasting.",
    detailedDescription: [
      "We are looking for a creative Video Editor to assemble recorded footage into a finished project that matches our creative vision. The ideal candidate will have a strong sense of visual storytelling and be proficient in video editing software.",
      "As a Video Editor, you will work closely with our marketing and creative teams to produce engaging video content for various platforms including social media, websites, and corporate presentations."
    ],
    responsibilities: [
      "Edit and assemble raw footage into polished, high-quality videos",
      "Add music, dialogues, graphics, and effects to enhance the final product",
      "Create content for social media platforms with optimized formats",
      "Collaborate with the creative team to understand project requirements",
      "Manage and organize video assets and project files",
      "Stay updated with latest video editing trends and techniques"
    ],
    skills: [
      "Proficiency in video editing software (Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve)",
      "Experience with motion graphics and After Effects",
      "Strong understanding of video formats, codecs, and aspect ratios",
      "Creative eye for color grading and visual aesthetics",
      "Ability to work under tight deadlines",
      "Portfolio demonstrating video editing skills"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "One EL credited per month",
      "Opportunities to work with cutting-edge technologies and innovative projects",
      "Comprehensive training and development programs to support your career growth"
    ]
  },
  {
    id: "4",
    title: "Tester",
    location: "Mohali, India",
    type: "Full-time",
    department: "Engineering",
    experience: "1 to 2 Years",
    description: "Execute manual and automated tests to ensure software quality, identifying bugs for stability.",
    detailedDescription: [
      "We are seeking a detail-oriented Software Tester to join our quality assurance team. You will be responsible for testing our software products to ensure they meet the required standards before they are released to customers.",
      "As a Tester at SolarioTech, you will work closely with developers and product managers to identify issues, document bugs, and verify fixes. Your work will directly impact the quality of our products."
    ],
    responsibilities: [
      "Review requirements, specifications, and technical design documents",
      "Create detailed, comprehensive, and well-structured test plans and test cases",
      "Execute manual and automated test cases",
      "Report bugs and errors to development teams",
      "Perform regression testing when bugs are resolved",
      "Track quality assurance metrics and prepare test reports"
    ],
    skills: [
      "Proven experience as a Quality Assurance Tester or similar role",
      "Experience in writing clear, concise, and comprehensive test plans and test cases",
      "Hands-on experience with both white box and black box testing",
      "Familiarity with Agile frameworks and regression testing",
      "Experience with automated testing tools (Selenium, Appium, etc.)",
      "Strong analytical and problem-solving skills"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "One EL credited per month",
      "Opportunities to work with cutting-edge technologies and innovative projects",
      "Comprehensive training and development programs to support your career growth"
    ]
  }
];
