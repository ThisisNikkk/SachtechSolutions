export type ServiceExpertise = {
    id: string;
    hero?: {
        title: string;
        description: string;
        buttons: { label: string; action?: string }[];
    };
    content?: {
        title: string;
        description: string;
        list?: string[];
    }[];
    cta?: {
        title: string;
        description: string;
        buttons: { label: string; action?: string }[];
    };
}

export const serviceExpertise: Record<string, ServiceExpertise[]> = {
    "ios-app-development": [
        {
            id: "UI/UX Design",
            hero: {
                title: "Design Intuitive, Engaging & User-Centric Digital Experiences",
                description: "Solario Tech delivers clean, intuitive, and conversion-focused UI/UX designs that enhance usability and drive business growth.\nWith 12+ years of experience, we design digital products that are visually appealing, easy to use, and aligned with real user needs.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is UI/UX Design?",
                    description: "UI/UX design focuses on creating digital experiences that are both visually appealing (UI) and easy, intuitive, and efficient to use (UX).",
                    list: [
                        "User Interface (UI) design for visual clarity",
                        "User Experience (UX) design for usability",
                        "Human-centered design approach",
                        "Business-goal-driven design decisions"
                    ]
                },
                {
                    title: "Why UI/UX Design is Critical",
                    description: "Great design directly impacts how users perceive and interact with your product.",
                    list: [
                        "Improves user engagement and retention",
                        "Reduces user frustration and drop-offs",
                        "Increases conversions and revenue",
                        "Builds trust and brand credibility"
                    ]
                },
                {
                    title: "User Research & Discovery",
                    description: "We begin every design project by understanding your users, business goals, and challenges.",
                    list: [
                        "User persona creation",
                        "User journey mapping",
                        "Market and competitor analysis",
                        "Requirement and pain-point discovery"
                    ]
                },
                {
                    title: "Wireframing & Information Architecture",
                    description: "We structure content and flows to ensure clarity and ease of navigation.",
                    list: [
                        "Low and high-fidelity wireframes",
                        "Clear user flows",
                        "Logical information hierarchy",
                        "Early usability validation"
                    ]
                },
                {
                    title: "Visual UI Design",
                    description: "We create visually compelling interfaces that align with your brand identity.",
                    list: [
                        "Modern and clean layouts",
                        "Brand-aligned color systems",
                        "Typography and iconography",
                        "Consistent design systems"
                    ]
                },
                {
                    title: "Interactive Prototyping",
                    description: "We build interactive prototypes to validate designs before development.",
                    list: [
                        "Clickable prototypes",
                        "Micro-interactions and animations",
                        "Realistic user flows",
                        "Stakeholder and user feedback loops"
                    ]
                },
                {
                    title: "Mobile, Web & Cross-Platform Design",
                    description: "We design experiences optimized for all devices and platforms.",
                    list: [
                        "Mobile-first design approach",
                        "Responsive web design",
                        "iOS and Android design guidelines",
                        "Cross-platform consistency"
                    ]
                },
                {
                    title: "Usability Testing & Iteration",
                    description: "We test designs with real users and refine based on feedback.",
                    list: [
                        "Usability testing sessions",
                        "Design validation",
                        "Data-driven improvements",
                        "Continuous design iteration"
                    ]
                },
                {
                    title: "Design Handoff & Developer Support",
                    description: "We ensure smooth collaboration between design and development teams.",
                    list: [
                        "Developer-ready design assets",
                        "Design specifications and guidelines",
                        "Design system documentation",
                        "Ongoing design support"
                    ]
                },
                {
                    title: "Who Is UI/UX Design Best For?",
                    description: "Our UI/UX design services are ideal for:",
                    list: [
                        "Startups building MVPs",
                        "SaaS and enterprise platforms",
                        "Mobile and web applications",
                        "Product redesign and modernization projects",
                        "Conversion-focused digital products"
                    ]
                },
                {
                    title: "Why Solario Tech for UI/UX Design?",
                    description: "What makes our design approach effective:",
                    list: [
                        "12+ Years of Product & Design Experience",
                        "User-centric and business-driven design",
                        "Modern, clean, and scalable design systems",
                        "Fast and cost-effective delivery",
                        "Startup-friendly and enterprise-ready approach",
                        "End-to-end product design support"
                    ]
                }
            ],
            cta: {
                title: "Design Experiences Users Love",
                description: "Whether you’re building a new product or redesigning an existing one, our UI/UX experts help you create experiences that delight users and drive results.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Performance Optimization",
            hero: {
                title: "Deliver Faster, Smoother & More Reliable App Performance",
                description: "Solario Tech helps businesses optimize application performance to ensure faster load times, smoother interactions, and scalable systems.\nWith 12+ years of engineering experience, we identify bottlenecks, improve efficiency, and deliver high-performing applications that users trust.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Performance Optimization?",
                    description: "Performance optimization is the process of improving an application’s speed, responsiveness, stability, and resource efficiency.",
                    list: [
                        "Faster load and response times",
                        "Reduced crashes and ANRs",
                        "Efficient CPU, memory, and battery usage",
                        "Improved overall user experience"
                    ]
                },
                {
                    title: "Why Performance Optimization Matters",
                    description: "Performance directly impacts user satisfaction, retention, and business outcomes.",
                    list: [
                        "Users abandon slow apps quickly",
                        "Better performance improves app ratings",
                        "Higher engagement and conversions",
                        "Scalable systems handle growth reliably"
                    ]
                },
                {
                    title: "App Performance Analysis & Auditing",
                    description: "We start by deeply analyzing your application to identify performance bottlenecks.",
                    list: [
                        "CPU and memory profiling",
                        "Network and API latency analysis",
                        "Crash and error log review",
                        "Real-user performance metrics"
                    ]
                },
                {
                    title: "Code-Level Optimization",
                    description: "We optimize application code to ensure efficiency and maintainability.",
                    list: [
                        "Eliminating redundant operations",
                        "Optimizing data structures and algorithms",
                        "Reducing memory leaks",
                        "Improving concurrency and threading"
                    ]
                },
                {
                    title: "UI & Rendering Optimization",
                    description: "We ensure smooth and responsive user interfaces across devices.",
                    list: [
                        "Reducing UI rendering overhead",
                        "Optimizing animations and transitions",
                        "Improving scroll and gesture performance",
                        "Ensuring consistent frame rates"
                    ]
                },
                {
                    title: "Network & API Performance Optimization",
                    description: "We improve how apps communicate with backend systems.",
                    list: [
                        "API response time optimization",
                        "Efficient data caching strategies",
                        "Reduced payload sizes",
                        "Optimized retry and timeout handling"
                    ]
                },
                {
                    title: "Database & Data Handling Optimization",
                    description: "We optimize how data is stored, accessed, and processed.",
                    list: [
                        "Efficient local database queries",
                        "Background data processing",
                        "Caching and pagination strategies",
                        "Optimized data synchronization"
                    ]
                },
                {
                    title: "Scalability & Load Optimization",
                    description: "Prepare your application to handle growth and high traffic.",
                    list: [
                        "Load and stress testing",
                        "Backend performance tuning",
                        "Horizontal and vertical scaling strategies",
                        "Resource usage optimization"
                    ]
                },
                {
                    title: "Monitoring, Testing & Continuous Improvement",
                    description: "We ensure performance stays optimal over time.",
                    list: [
                        "Performance benchmarking",
                        "Automated performance testing",
                        "Monitoring and alerting setup",
                        "Ongoing optimization recommendations"
                    ]
                },
                {
                    title: "Who Is Performance Optimization Best For?",
                    description: "Performance optimization is ideal for:",
                    list: [
                        "Apps with slow load times or crashes",
                        "High-traffic or rapidly growing platforms",
                        "Enterprise and mission-critical systems",
                        "Apps preparing for major launches",
                        "Products with declining user retention"
                    ]
                },
                {
                    title: "Why Solario Tech for Performance Optimization?",
                    description: "Why businesses trust us to optimize performance:",
                    list: [
                        "12+ Years of Engineering Experience",
                        "Deep expertise across mobile, web, and backend systems",
                        "Data-driven performance improvements",
                        "Scalable and future-ready optimization strategies",
                        "Startup-friendly and enterprise-ready approach",
                        "Ongoing performance monitoring and support"
                    ]
                }
            ],
            cta: {
                title: "Make Your App Faster & More Reliable",
                description: "Whether you’re fixing performance issues or preparing for growth, our performance optimization services help you deliver fast, stable, and scalable applications.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Security Implementation",
            hero: {
                title: "Build Secure, Compliant & Trust-Ready Applications",
                description: "Solario Tech helps businesses implement robust security frameworks to protect applications, data, and users from modern threats.\nWith 12+ years of engineering experience, we design security-first systems that meet industry standards and scale with confidence.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Security Implementation?",
                    description: "Security implementation involves designing and applying technical safeguards to protect applications, infrastructure, and data from unauthorized access and vulnerabilities.",
                    list: [
                        "Application-level security",
                        "Data protection and encryption",
                        "Secure authentication and authorization",
                        "Threat detection and prevention"
                    ]
                },
                {
                    title: "Why Security is Critical",
                    description: "Strong security protects your users, reputation, and business continuity.",
                    list: [
                        "Prevents data breaches and cyber attacks",
                        "Protects sensitive user information",
                        "Ensures compliance with regulations",
                        "Builds user trust and credibility"
                    ]
                },
                {
                    title: "Authentication & Access Control",
                    description: "We implement secure and scalable authentication and authorization mechanisms.",
                    list: [
                        "OAuth 2.0 and OpenID Connect",
                        "Role-based and permission-based access",
                        "Multi-factor authentication (MFA)",
                        "Secure session management"
                    ]
                },
                {
                    title: "Data Security & Encryption",
                    description: "Protect sensitive data both in transit and at rest.",
                    list: [
                        "End-to-end encryption",
                        "Secure key management",
                        "Data masking and tokenization",
                        "Encrypted local and cloud storage"
                    ]
                },
                {
                    title: "API & Backend Security",
                    description: "We secure backend systems and APIs against unauthorized access and abuse.",
                    list: [
                        "API authentication and authorization",
                        "Rate limiting and throttling",
                        "Input validation and sanitization",
                        "Protection against common vulnerabilities"
                    ]
                },
                {
                    title: "Mobile App Security",
                    description: "We apply platform-specific security best practices for mobile applications.",
                    list: [
                        "Secure storage using Keychain / Keystore",
                        "Certificate pinning",
                        "Runtime security checks",
                        "Protection against reverse engineering"
                    ]
                },
                {
                    title: "Infrastructure & Cloud Security",
                    description: "We design secure cloud and infrastructure setups.",
                    list: [
                        "Secure AWS and cloud configurations",
                        "Network security and firewalls",
                        "Least-privilege access policies",
                        "Continuous security monitoring"
                    ]
                },
                {
                    title: "Compliance & Best Practices",
                    description: "We ensure applications align with security and regulatory standards.",
                    list: [
                        "OWASP Top 10 mitigation",
                        "GDPR and data privacy best practices",
                        "HIPAA-ready architectures (when required)",
                        "App Store and Play Store security guidelines"
                    ]
                },
                {
                    title: "Security Testing & Auditing",
                    description: "We proactively identify and fix vulnerabilities before they become threats.",
                    list: [
                        "Vulnerability scanning",
                        "Penetration testing support",
                        "Secure code reviews",
                        "Ongoing security assessments"
                    ]
                },
                {
                    title: "Who Is Security Implementation Best For?",
                    description: "Security implementation is essential for:",
                    list: [
                        "Applications handling sensitive user data",
                        "Fintech, healthcare, and SaaS platforms",
                        "Enterprise and internal systems",
                        "Apps preparing for audits or compliance reviews",
                        "Businesses scaling globally"
                    ]
                },
                {
                    title: "Why Solario Tech for Security Implementation?",
                    description: "Why businesses trust us with application security:",
                    list: [
                        "12+ Years of Engineering Experience",
                        "Security-first development approach",
                        "Expertise across mobile, web, and cloud security",
                        "Compliance-driven and scalable solutions",
                        "Startup-friendly and enterprise-ready approach",
                        "Ongoing security support and monitoring"
                    ]
                }
            ],
            cta: {
                title: "Secure Your Applications with Confidence",
                description: "Whether you’re building a new application or strengthening an existing one, our security implementation services help you protect users, data, and business operations.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "API Integration",
            hero: {
                title: "Seamless, Secure & Scalable API Integrations",
                description: "Solario Tech helps businesses integrate third-party and custom APIs to enable smooth data exchange, automation, and system connectivity.\nWith 12+ years of engineering experience, we build reliable API integrations that scale with your product and business needs.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is API Integration?",
                    description: "API integration connects different software systems, services, and platforms so they can communicate and exchange data seamlessly.",
                    list: [
                        "Real-time data synchronization",
                        "Automated workflows and processes",
                        "System-to-system communication",
                        "Improved operational efficiency"
                    ]
                },
                {
                    title: "Why API Integration Matters",
                    description: "Well-designed API integrations help businesses scale faster and operate more efficiently.",
                    list: [
                        "Eliminates manual data handling",
                        "Improves system reliability",
                        "Enables faster feature development",
                        "Supports scalable architectures"
                    ]
                },
                {
                    title: "Third-Party API Integrations",
                    description: "We integrate popular third-party services into your applications securely and efficiently.",
                    list: [
                        "Payment gateways",
                        "CRM and ERP systems",
                        "Analytics and marketing tools",
                        "Messaging and notification services"
                    ]
                },
                {
                    title: "Custom API Development & Integration",
                    description: "We design and integrate custom APIs tailored to your business logic and workflows.",
                    list: [
                        "RESTful and GraphQL APIs",
                        "Microservices-based APIs",
                        "Well-documented and versioned APIs",
                        "High-performance and scalable endpoints"
                    ]
                },
                {
                    title: "Mobile & Web API Integration",
                    description: "We ensure smooth API communication across all platforms.",
                    list: [
                        "iOS and Android API integration",
                        "Web application integrations",
                        "Cross-platform compatibility",
                        "Optimized network performance"
                    ]
                },
                {
                    title: "Secure API Implementation",
                    description: "Security is a core part of every API integration we build.",
                    list: [
                        "OAuth 2.0 and token-based authentication",
                        "Secure API key management",
                        "Rate limiting and throttling",
                        "Input validation and sanitization"
                    ]
                },
                {
                    title: "Error Handling & Reliability",
                    description: "We build resilient integrations that handle failures gracefully.",
                    list: [
                        "Robust error handling",
                        "Retry and fallback mechanisms",
                        "Timeout and circuit breaker strategies",
                        "Monitoring and logging"
                    ]
                },
                {
                    title: "API Performance & Optimization",
                    description: "We optimize API integrations for speed and efficiency.",
                    list: [
                        "Reduced payload sizes",
                        "Caching strategies",
                        "Optimized request and response handling",
                        "Latency and throughput improvements"
                    ]
                },
                {
                    title: "API Testing & Documentation",
                    description: "We ensure APIs are reliable, maintainable, and easy to work with.",
                    list: [
                        "Automated API testing",
                        "Clear API documentation",
                        "Versioning and backward compatibility",
                        "Post-deployment support"
                    ]
                },
                {
                    title: "Who Is API Integration Best For?",
                    description: "API integration is ideal for:",
                    list: [
                        "SaaS and cloud-based platforms",
                        "Mobile and web applications",
                        "Enterprise systems",
                        "Data-driven products",
                        "Businesses automating workflows"
                    ]
                },
                {
                    title: "Why Solario Tech for API Integration?",
                    description: "Why businesses trust us for API integrations:",
                    list: [
                        "12+ Years of Engineering Experience",
                        "Expertise across REST, GraphQL, and microservices",
                        "Security-first and scalable implementations",
                        "Fast and cost-effective delivery",
                        "Startup-friendly and enterprise-ready approach",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Connect Your Systems Seamlessly",
                description: "Whether you’re integrating third-party services or building custom APIs, our API integration services help you create reliable, secure, and scalable system connections.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Testing & QA",
            hero: {
                title: "Ensure Quality, Stability & Reliability with Rigorous Testing",
                description: "Solario Tech delivers comprehensive Testing & Quality Assurance services to ensure your applications are reliable, secure, and ready for real-world use.\nWith 12+ years of experience, we help businesses identify issues early, reduce risks, and launch with confidence.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Testing & Quality Assurance?",
                    description: "Testing & QA is the process of validating software to ensure it meets functional, performance, security, and usability requirements before and after release.",
                    list: [
                        "Functional correctness validation",
                        "Performance and stability assurance",
                        "Security and vulnerability checks",
                        "User experience verification"
                    ]
                },
                {
                    title: "Why Testing & QA Matters",
                    description: "Effective QA helps prevent costly issues and protects your brand reputation.",
                    list: [
                        "Reduces production bugs and failures",
                        "Improves user satisfaction and trust",
                        "Ensures smooth releases and updates",
                        "Lowers long-term maintenance costs"
                    ]
                },
                {
                    title: "Manual Testing",
                    description: "We perform detailed manual testing to validate real-world user scenarios.",
                    list: [
                        "Functional and regression testing",
                        "Exploratory testing",
                        "User acceptance testing (UAT)",
                        "Cross-device and cross-browser testing"
                    ]
                },
                {
                    title: "Automated Testing",
                    description: "We implement automation to ensure faster and more reliable testing cycles.",
                    list: [
                        "Unit and integration test automation",
                        "UI and end-to-end test automation",
                        "Regression test suites",
                        "CI/CD pipeline integration"
                    ]
                },
                {
                    title: "Performance & Load Testing",
                    description: "We test how your application performs under real-world and peak-load conditions.",
                    list: [
                        "Load and stress testing",
                        "Scalability and endurance testing",
                        "Response time and throughput analysis",
                        "Resource utilization monitoring"
                    ]
                },
                {
                    title: "Security Testing",
                    description: "We identify and mitigate security vulnerabilities before they become threats.",
                    list: [
                        "Vulnerability assessment",
                        "OWASP Top 10 testing",
                        "Authentication and authorization testing",
                        "Data protection and privacy checks"
                    ]
                },
                {
                    title: "Mobile App Testing",
                    description: "We ensure mobile apps perform reliably across devices and platforms.",
                    list: [
                        "iOS and Android compatibility testing",
                        "Device and OS version coverage",
                        "Network condition testing",
                        "App store readiness checks"
                    ]
                },
                {
                    title: "Usability & UX Testing",
                    description: "We validate usability to ensure smooth and intuitive user experiences.",
                    list: [
                        "User flow validation",
                        "Accessibility testing",
                        "UI consistency checks",
                        "User feedback-driven improvements"
                    ]
                },
                {
                    title: "Test Reporting & Continuous QA",
                    description: "We provide clear insights and continuous quality improvement.",
                    list: [
                        "Detailed defect reports",
                        "Quality metrics and dashboards",
                        "Release readiness assessments",
                        "Ongoing QA support"
                    ]
                },
                {
                    title: "Who Is Testing & QA Best For?",
                    description: "Testing & QA services are ideal for:",
                    list: [
                        "Startups preparing for product launch",
                        "SaaS and enterprise platforms",
                        "Mobile and web applications",
                        "High-traffic and mission-critical systems",
                        "Products undergoing frequent updates"
                    ]
                },
                {
                    title: "Why Solario Tech for Testing & QA?",
                    description: "Why businesses rely on us for quality assurance:",
                    list: [
                        "12+ Years of Software Quality Experience",
                        "Balanced manual and automated testing approach",
                        "Early defect detection and risk reduction",
                        "Scalable and cost-effective QA strategies",
                        "Startup-friendly and enterprise-ready services",
                        "End-to-end quality ownership"
                    ]
                }
            ],
            cta: {
                title: "Launch with Confidence",
                description: "Whether you’re releasing a new product or improving an existing one, our Testing & QA services help ensure quality, stability, and a great user experience.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "App Store Launch",
            hero: {
                title: "Launch Your App Smoothly & Successfully on App Stores",
                description: "Solario Tech helps businesses manage end-to-end App Store launch processes to ensure a smooth, compliant, and successful release.\nWith 12+ years of app delivery experience, we handle everything from pre-launch readiness to final approval — so your app goes live without delays or rejections.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is an App Store Launch?",
                    description: "An App Store launch involves preparing, submitting, and publishing your mobile application on platforms like Apple App Store and Google Play Store.",
                    list: [
                        "App readiness and compliance checks",
                        "Store listing setup",
                        "Submission and review handling",
                        "Successful public release"
                    ]
                },
                {
                    title: "Why a Proper App Store Launch Matters",
                    description: "A well-planned launch reduces risks and ensures your app reaches users without issues.",
                    list: [
                        "Avoids app store rejections",
                        "Ensures faster approval timelines",
                        "Creates a strong first impression",
                        "Supports long-term app success"
                    ]
                },
                {
                    title: "Pre-Launch Readiness & Audit",
                    description: "We review your app thoroughly to ensure it is launch-ready.",
                    list: [
                        "Functional and stability checks",
                        "Performance and security validation",
                        "App Store guideline compliance",
                        "Final build verification"
                    ]
                },
                {
                    title: "App Store Account Setup & Configuration",
                    description: "We help configure all required app store accounts and settings.",
                    list: [
                        "Apple Developer & Google Play Console setup",
                        "Certificates, provisioning profiles, and keys",
                        "App identifiers and bundle configuration",
                        "TestFlight and internal testing setup"
                    ]
                },
                {
                    title: "App Store Listing Creation",
                    description: "We create optimized and compliant app store listings.",
                    list: [
                        "App name, subtitle, and descriptions",
                        "Keywords and metadata optimization",
                        "Screenshot and preview guidance",
                        "Category and age rating configuration"
                    ]
                },
                {
                    title: "Submission & Review Management",
                    description: "We manage the submission process and handle app store reviews.",
                    list: [
                        "App build upload and submission",
                        "Review notes and compliance explanations",
                        "Rejection resolution and resubmission",
                        "Approval tracking and communication"
                    ]
                },
                {
                    title: "Release Strategy & Go-Live Support",
                    description: "We help plan and execute the right release strategy.",
                    list: [
                        "Manual or phased release setup",
                        "Region-wise rollout planning",
                        "Versioning and release notes",
                        "Go-live monitoring"
                    ]
                },
                {
                    title: "Post-Launch Monitoring & Support",
                    description: "We support you even after your app is live.",
                    list: [
                        "Crash and performance monitoring",
                        "User feedback and rating analysis",
                        "Hotfix and update support",
                        "Ongoing App Store compliance"
                    ]
                },
                {
                    title: "Who Is App Store Launch Best For?",
                    description: "App Store launch services are ideal for:",
                    list: [
                        "Startups launching their first app",
                        "Businesses releasing MVPs",
                        "Apps facing repeated rejections",
                        "Enterprises launching customer-facing apps",
                        "Teams needing expert submission support"
                    ]
                },
                {
                    title: "Why Solario Tech for App Store Launch?",
                    description: "Why clients trust us for app launches:",
                    list: [
                        "12+ Years of App Delivery Experience",
                        "Deep knowledge of App Store & Play Store guidelines",
                        "Fast and rejection-free launch approach",
                        "Clear communication and transparency",
                        "Startup-friendly and enterprise-ready support",
                        "End-to-end launch ownership"
                    ]
                }
            ],
            cta: {
                title: "Launch Your App with Confidence",
                description: "Whether you’re launching your first app or releasing a major update, our App Store launch services ensure a smooth, compliant, and successful go-live.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "android-app-development": [
        { id: "Material Design" },
        { id: "Cross-Device Support" },
        { id: "Background Services" },
        { id: "Offline Functionality" },
        { id: "Performance Tuning" },
        { id: "Play Store Deployment" }
    ],
    "window-app-development": [
        { id: "Enterprise Solutions" },
        { id: "System Integration" },
        { id: "Custom UI Development" },
        { id: "Data Management" },
        { id: "Security Compliance" },
        { id: "Deployment Strategy" }
    ],
    "artificial-intelligence": [
        { id: "Custom ML Models" },
        { id: "Data Analysis" },
        { id: "Process Automation" },
        { id: "Predictive Modeling" },
        { id: "Natural Language" },
        { id: "AI Integration" }
    ],
    "automation": [
        { id: "Process Analysis" },
        { id: "RPA Implementation" },
        { id: "Workflow Design" },
        { id: "System Integration" },
        { id: "Monitoring & Alerts" },
        { id: "Continuous Improvement" }
    ],
    "open-gl": [
        { id: "Shader Development" },
        { id: "3D Modeling Integration" },
        { id: "Performance Optimization" },
        { id: "Cross-Platform" },
        { id: "Real-time Rendering" },
        { id: "Visual Effects" }
    ],
    "app-maintenance": [
        { id: "Proactive Monitoring" },
        { id: "Rapid Response" },
        { id: "Version Updates" },
        { id: "Security Patches" },
        { id: "Performance Tuning" },
        { id: "User Feedback" }
    ],
    "seo": [
        { id: "Keyword Strategy" },
        { id: "Content Optimization" },
        { id: "Technical Audit" },
        { id: "Link Building" },
        { id: "Performance Tracking" },
        { id: "Algorithm Updates" }
    ],
    "php-development": [
        { id: "Framework Expertise" },
        { id: "Custom Solutions" },
        { id: "Database Design" },
        { id: "API Development" },
        { id: "Security Best Practices" },
        { id: "Scalable Architecture" }
    ],
    "java-development": [
        { id: "Spring Ecosystem" },
        { id: "Microservices" },
        { id: "Enterprise Integration" },
        { id: "Cloud Native" },
        { id: "Performance" },
        { id: "Security" }
    ],
    "e-commerce-development": [
        { id: "Platform Selection" },
        { id: "Custom Development" },
        { id: "Payment Systems" },
        { id: "User Experience" },
        { id: "Analytics Integration" },
        { id: "Scale Planning" }
    ],
    "software-maintenance": [
        { id: "Issue Resolution" },
        { id: "Preventive Maintenance" },
        { id: "Code Quality" },
        { id: "Security Updates" },
        { id: "Performance Monitoring" },
        { id: "Version Control" }
    ],
    "email-marketing": [
        { id: "Strategy Development" },
        { id: "Content Creation" },
        { id: "Automation Setup" },
        { id: "Segmentation" },
        { id: "Performance Analysis" },
        { id: "Compliance" }
    ],
    "website-maintenance": [
        { id: "Security Monitoring" },
        { id: "Speed Optimization" },
        { id: "Content Management" },
        { id: "Backup Solutions" },
        { id: "Analytics Review" },
        { id: "Emergency Support" }
    ],
    "it-strategy-and-consulting": [
        { id: "Strategic Planning" },
        { id: "Architecture Review" },
        { id: "Digital Transformation" },
        { id: "Technology Selection" },
        { id: "Implementation Support" },
        { id: "ROI Analysis" }
    ],
    "internet-of-things": [
        { id: "Hardware Integration" },
        { id: "Data Processing" },
        { id: "Cloud Platforms" },
        { id: "Security" },
        { id: "Scalability" },
        { id: "Analytics" }
    ],
    "cloud-solutions": [
        { id: "Migration Strategy" },
        { id: "Multi-Cloud" },
        { id: "Infrastructure as Code" },
        { id: "Kubernetes" },
        { id: "Cost Management" },
        { id: "Security" }
    ],
    "data-analytics": [
        { id: "Data Strategy" },
        { id: "Visualization" },
        { id: "Predictive Models" },
        { id: "Data Integration" },
        { id: "Real-time Analytics" },
        { id: "Data Governance" }
    ]
};
