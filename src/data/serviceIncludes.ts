export type ServiceInclude = {
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

export const serviceIncludes: Record<string, ServiceInclude[]> = {
    "ios-app-development": [
        {
            id: "Native Swift Development",
            hero: {
                title: "Build High-Performance iOS Apps with Native Swift",
                description: "Solario Tech delivers robust, secure, and scalable iOS applications using Apple’s native Swift framework — built for speed, performance, and long-term growth.\nWith 12+ years of experience, we help startups, SMBs, and enterprises turn ideas into polished iPhone and iPad applications that users love.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Get a Quote" }
                ]
            },
            content: [
                {
                    title: "What is Native Swift Development?",
                    description: "Native Swift development means building iOS applications exclusively for Apple devices using Swift, Apple’s official programming language.\nThis approach ensures:",
                    list: [
                        "Maximum performance",
                        "Smooth animations",
                        "Better security",
                        "Full access to iOS features"
                    ]
                },
                {
                    title: "Why Choose Swift for iOS Apps?",
                    description: "Performance That Feels Native (Because It Is)\nSwift is optimized for Apple hardware, making apps:",
                    list: [
                        "Faster",
                        "More responsive",
                        "Energy efficient"
                    ]
                },
                {
                    title: "Custom iOS App Development",
                    description: "We build tailor-made iOS apps aligned with your business goals — from MVPs to enterprise-grade platforms.\nUse cases:",
                    list: [
                        "Business apps",
                        "Consumer apps",
                        "SaaS mobile platforms",
                        "Internal enterprise apps"
                    ]
                },
                {
                    title: "UI/UX Optimized for Apple Users",
                    description: "We follow Apple Human Interface Guidelines to ensure:",
                    list: [
                        "Clean layouts",
                        "Intuitive navigation",
                        "Smooth animations"
                    ]
                },
                {
                    title: "Secure & Scalable Architecture",
                    description: "Our Swift apps are built with:",
                    list: [
                        "Secure data handling",
                        "Scalable backend integration",
                        "Clean architecture (MVVM, Clean Swift)"
                    ]
                },
                {
                    title: "API & Backend Integration",
                    description: "We seamlessly integrate:",
                    list: [
                        "REST & GraphQL APIs",
                        "Payment gateways",
                        "Third-party services",
                        "IoT & AI systems"
                    ]
                },
                {
                    title: "Advanced iOS Features",
                    description: "We implement native iOS capabilities such as:",
                    list: [
                        "Push notifications",
                        "Face ID / Touch ID",
                        "Apple Pay",
                        "Camera & location services",
                        "Offline mode"
                    ]
                },
                {
                    title: "Testing, Deployment & App Store Support",
                    description: "We handle:",
                    list: [
                        "Device testing",
                        "Performance optimization",
                        "App Store submission",
                        "Apple review compliance"
                    ]
                },
                {
                    title: "Languages & Frameworks",
                    description: "Our Swift Development Tech Stack:",
                    list: [
                        "Swift",
                        "SwiftUI",
                        "UIKit"
                    ]
                },
                {
                    title: "Architecture",
                    description: "We use robust architectural patterns:",
                    list: [
                        "MVVM",
                        "Clean Architecture",
                        "Modular design"
                    ]
                },
                {
                    title: "Tools",
                    description: "Industry-standard tools we use:",
                    list: [
                        "Xcode",
                        "TestFlight",
                        "Firebase",
                        "AWS / Cloud services"
                    ]
                },
                {
                    title: "Our Development Process",
                    description: "Simple. Transparent. Agile.",
                    list: [
                        "1. Requirement & Idea Analysis",
                        "2. UI/UX Design & Prototyping",
                        "3. Native Swift Development",
                        "4. Testing & Quality Assurance",
                        "5. App Store Deployment",
                        "6. Maintenance & Continuous Improvement"
                    ]
                },
                {
                    title: "Who Is This Best For?",
                    description: "Target Audience:",
                    list: [
                        "Startups building iOS MVPs",
                        "Businesses needing high-performance apps",
                        "Enterprises requiring secure internal apps",
                        "Brands targeting premium Apple users"
                    ]
                },
                {
                    title: "Why Solario Tech for Swift Development?",
                    description: "Key Advantages:",
                    list: [
                        "12+ Years of Industry Experience",
                        "One-Stop Technology Partner",
                        "Fast Delivery with Quality Assurance",
                        "Cost-Effective Without Compromising Performance",
                        "Startup-Friendly & Enterprise-Ready",
                        "Long-Term Maintenance & Support"
                    ]
                }
            ],
            cta: {
                title: "Call to Action",
                description: "Let’s Build Your iOS App the Right Way\nWhether you’re launching a new idea or upgrading an existing app, our Swift experts are ready to help.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "SwiftUI Integration",
            hero: {
                title: "Modern iOS Interfaces with SwiftUI Integration",
                description: "Solario Tech helps businesses adopt and integrate SwiftUI to build modern, scalable, and future-ready iOS user interfaces.\nUsing Apple’s latest declarative UI framework, we enable faster development, cleaner code, and consistent experiences across Apple devices — backed by 12+ years of iOS expertise.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is SwiftUI?",
                    description: "SwiftUI is Apple’s declarative UI framework that allows developers to design interfaces using simple, readable code.\nInstead of manually managing UI updates, SwiftUI automatically updates the interface when data changes.",
                    list: [
                        "Faster UI development",
                        "Reduced boilerplate code",
                        "Fewer UI-related bugs",
                        "Native performance"
                    ]
                },
                {
                    title: "SwiftUI for New iOS Applications",
                    description: "We build new iOS applications entirely using SwiftUI, ensuring alignment with Apple’s latest UI standards and long-term maintainability.",
                    list: [
                        "Clean and modular UI architecture",
                        "Rapid feature development",
                        "Optimized for latest iOS versions",
                        "Ideal for MVPs and new products"
                    ]
                },
                {
                    title: "SwiftUI Integration into Existing UIKit Apps",
                    description: "Already have an iOS app built with UIKit? We integrate SwiftUI seamlessly into your existing application without disrupting current functionality.",
                    list: [
                        "Gradual migration strategy",
                        "Modernization of legacy screens",
                        "Improved UI consistency",
                        "Reduced long-term maintenance cost"
                    ]
                },
                {
                    title: "Hybrid UIKit + SwiftUI Architecture",
                    description: "We design hybrid architectures that combine the stability of UIKit with the flexibility of SwiftUI for modern UI components.",
                    list: [
                        "UIKit for complex or legacy flows",
                        "SwiftUI for reusable UI components",
                        "Low-risk adoption strategy",
                        "Future-proof architecture"
                    ]
                },
                {
                    title: "Benefits of SwiftUI Integration",
                    description: "SwiftUI offers significant advantages for modern iOS development:",
                    list: [
                        "Faster development and iteration cycles",
                        "Consistent UI across iPhone, iPad, and Apple Watch",
                        "Improved performance and responsiveness",
                        "Simpler testing and maintenance"
                    ]
                },
                {
                    title: "SwiftUI Best Practices We Follow",
                    description: "Our SwiftUI implementations follow industry and Apple-recommended standards:",
                    list: [
                        "Apple Human Interface Guidelines",
                        "MVVM and Clean Architecture",
                        "Reusable and modular components",
                        "State-driven UI updates",
                        "Accessibility support (VoiceOver, Dynamic Type)"
                    ]
                },
                {
                    title: "SwiftUI Integration Use Cases",
                    description: "SwiftUI integration is ideal for:",
                    list: [
                        "Startup MVP development",
                        "UI modernization projects",
                        "Feature upgrades in existing apps",
                        "Long-term scalability planning"
                    ]
                },
                {
                    title: "Our SwiftUI Integration Process",
                    description: "Structured, transparent, and efficient:",
                    list: [
                        "1. UI & Architecture Assessment",
                        "2. SwiftUI Strategy & Planning",
                        "3. Component Development & Integration",
                        "4. Testing & Performance Optimization",
                        "5. Release & Post-Launch Support"
                    ]
                },
                {
                    title: "Why Solario Tech for SwiftUI Integration?",
                    description: "Why clients trust us for SwiftUI projects:",
                    list: [
                        "12+ Years of iOS Development Experience",
                        "Expertise in Swift, SwiftUI, and UIKit",
                        "Smooth migration without app disruption",
                        "Fast and cost-effective delivery",
                        "Startup-friendly and enterprise-ready solutions",
                        "Ongoing maintenance and support"
                    ]
                }
            ],
            cta: {
                title: "Let’s Modernize Your iOS App",
                description: "Whether you’re building a new iOS application or upgrading an existing one, SwiftUI integration helps future-proof your product.\nOur experts are ready to guide you every step of the way.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            }
        },
        { id: "App Store Optimization" },
        { id: "Push Notifications" },
        { id: "In-App Purchases" },
        { id: "Core Data Integration" },
        { id: "ARKit Implementation" },
        { id: "HealthKit Integration" }
    ],
    "android-app-development": [
        { id: "Kotlin Development" },
        { id: "Java Development" },
        { id: "Material Design" },
        { id: "Google Play Services" },
        { id: "Firebase Integration" },
        { id: "Room Database" },
        { id: "Jetpack Compose" },
        { id: "Android Wear Support" }
    ],
    "window-app-development": [
        { id: ".NET Development" },
        { id: "WPF Applications" },
        { id: "UWP Apps" },
        { id: "Windows Forms" },
        { id: "Azure Integration" },
        { id: "SQL Server" },
        { id: "MVVM Architecture" },
        { id: "Windows Services" }
    ],
    "artificial-intelligence": [
        { id: "Machine Learning" },
        { id: "Deep Learning" },
        { id: "NLP Solutions" },
        { id: "Computer Vision" },
        { id: "Predictive Analytics" },
        { id: "Chatbots" },
        { id: "Recommendation Systems" },
        { id: "AI Model Training" }
    ],
    "automation": [
        { id: "RPA Solutions" },
        { id: "Workflow Automation" },
        { id: "Process Optimization" },
        { id: "Integration APIs" },
        { id: "Scheduled Tasks" },
        { id: "Data Processing" },
        { id: "Report Generation" },
        { id: "Quality Assurance" }
    ],
    "open-gl": [
        { id: "3D Rendering" },
        { id: "Shader Programming" },
        { id: "Real-time Graphics" },
        { id: "Game Development" },
        { id: "CAD Applications" },
        { id: "Simulation Tools" },
        { id: "VR Development" },
        { id: "Graphics Optimization" }
    ],
    "app-maintenance": [
        { id: "Bug Fixes" },
        { id: "Security Updates" },
        { id: "Performance Monitoring" },
        { id: "Feature Updates" },
        { id: "Compatibility Updates" },
        { id: "Database Maintenance" },
        { id: "Backup Management" },
        { id: "24/7 Support" }
    ],
    "seo": [
        { id: "Keyword Research" },
        { id: "On-Page SEO" },
        { id: "Technical SEO" },
        { id: "Link Building" },
        { id: "Content Strategy" },
        { id: "Local SEO" },
        { id: "Analytics & Reporting" },
        { id: "Competitor Analysis" }
    ],
    "php-development": [
        { id: "Laravel Development" },
        { id: "WordPress Custom" },
        { id: "API Development" },
        { id: "E-commerce Solutions" },
        { id: "CMS Development" },
        { id: "Database Design" },
        { id: "Security Implementation" },
        { id: "Performance Optimization" }
    ],
    "java-development": [
        { id: "Spring Boot" },
        { id: "Microservices" },
        { id: "Enterprise Apps" },
        { id: "API Development" },
        { id: "Cloud Integration" },
        { id: "Database Solutions" },
        { id: "Security Implementation" },
        { id: "DevOps Integration" }
    ],
    "e-commerce-development": [
        { id: "Custom Storefronts" },
        { id: "Payment Integration" },
        { id: "Inventory Management" },
        { id: "Order Processing" },
        { id: "Customer Analytics" },
        { id: "Mobile Commerce" },
        { id: "Multi-vendor Support" },
        { id: "Subscription Systems" }
    ],
    "software-maintenance": [
        { id: "Bug Fixing" },
        { id: "Feature Updates" },
        { id: "Security Patches" },
        { id: "Performance Optimization" },
        { id: "Documentation" },
        { id: "Code Refactoring" },
        { id: "Dependency Updates" },
        { id: "Technical Support" }
    ],
    "email-marketing": [
        { id: "Campaign Design" },
        { id: "List Management" },
        { id: "Automation Workflows" },
        { id: "A/B Testing" },
        { id: "Analytics & Reporting" },
        { id: "Template Design" },
        { id: "Deliverability Optimization" },
        { id: "Personalization" }
    ],
    "website-maintenance": [
        { id: "Security Updates" },
        { id: "Content Updates" },
        { id: "Performance Optimization" },
        { id: "Backup Management" },
        { id: "Uptime Monitoring" },
        { id: "Bug Fixes" },
        { id: "Plugin Updates" },
        { id: "SSL Management" }
    ],
    "it-strategy-and-consulting": [
        { id: "Technology Assessment" },
        { id: "Digital Transformation" },
        { id: "Architecture Design" },
        { id: "Vendor Selection" },
        { id: "Project Planning" },
        { id: "Risk Assessment" },
        { id: "Budget Planning" },
        { id: "Change Management" }
    ],
    "internet-of-things": [
        { id: "Sensor Integration" },
        { id: "Device Management" },
        { id: "Data Analytics" },
        { id: "Cloud Connectivity" },
        { id: "Real-time Monitoring" },
        { id: "Predictive Maintenance" },
        { id: "Edge Computing" },
        { id: "Security Protocols" }
    ],
    "cloud-solutions": [
        { id: "Cloud Migration" },
        { id: "AWS/Azure/GCP" },
        { id: "Cloud Architecture" },
        { id: "DevOps Services" },
        { id: "Container Orchestration" },
        { id: "Serverless Solutions" },
        { id: "Cost Optimization" },
        { id: "Security & Compliance" }
    ],
    "data-analytics": [
        { id: "Data Visualization" },
        { id: "Business Intelligence" },
        { id: "Predictive Analytics" },
        { id: "Data Warehousing" },
        { id: "Dashboard Development" },
        { id: "ETL Processes" },
        { id: "Big Data Solutions" },
        { id: "Custom Reporting" }
    ]
};
