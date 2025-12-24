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
        {
            id: "App Store Optimization",
            hero: {
                title: "Increase App Visibility & Downloads with App Store Optimization",
                description: "Solario Tech helps businesses improve app visibility, rankings, and organic downloads through proven App Store Optimization (ASO) strategies.\nWith a data-driven approach and 12+ years of digital experience, we ensure your app gets discovered by the right users on the Apple App Store and Google Play Store.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Get a Quote" }
                ]
            },
            content: [
                {
                    title: "What is App Store Optimization (ASO)?",
                    description: "App Store Optimization is the process of optimizing your mobile app’s listing to improve visibility, rankings, and conversion rates in app stores.",
                    list: [
                        "Higher app store search rankings",
                        "Increased organic installs",
                        "Improved conversion from views to downloads",
                        "Reduced user acquisition cost"
                    ]
                },
                {
                    title: "Why ASO is Critical for App Success",
                    description: "With millions of apps competing for attention, ASO ensures your app stands out and reaches the right audience.",
                    list: [
                        "Most users discover apps through search",
                        "Higher rankings lead to more trust",
                        "Optimized listings convert better",
                        "Long-term, sustainable growth"
                    ]
                },
                {
                    title: "Keyword Research & Optimization",
                    description: "We identify high-impact keywords that users actually search for and strategically place them across your app listing.",
                    list: [
                        "App title and subtitle optimization",
                        "Keyword field optimization (iOS)",
                        "Description keyword strategy",
                        "Competitor keyword analysis"
                    ]
                },
                {
                    title: "App Title, Subtitle & Description Optimization",
                    description: "We craft compelling, keyword-rich content that appeals to both app store algorithms and real users.",
                    list: [
                        "Clear and engaging app titles",
                        "Conversion-focused descriptions",
                        "Feature-driven and benefit-oriented copy",
                        "Localization-ready content"
                    ]
                },
                {
                    title: "Visual Asset Optimization",
                    description: "Strong visuals play a key role in converting visitors into downloads.",
                    list: [
                        "App icon optimization",
                        "Screenshot strategy and ordering",
                        "App preview video guidance",
                        "A/B testing recommendations"
                    ]
                },
                {
                    title: "Ratings & Reviews Strategy",
                    description: "We help improve app credibility and rankings through ethical and effective review strategies.",
                    list: [
                        "In-app review prompt optimization",
                        "Negative review handling strategy",
                        "Review response guidelines",
                        "Rating improvement roadmap"
                    ]
                },
                {
                    title: "Localization & Global Reach",
                    description: "Reach international users by optimizing your app for multiple regions and languages.",
                    list: [
                        "Multi-language keyword optimization",
                        "Localized descriptions and screenshots",
                        "Region-specific ranking strategies",
                        "Global market expansion support"
                    ]
                },
                {
                    title: "ASO Monitoring & Performance Tracking",
                    description: "We continuously track performance and optimize based on real data.",
                    list: [
                        "Keyword ranking tracking",
                        "Conversion rate monitoring",
                        "Install and retention insights",
                        "Regular optimization reports"
                    ]
                },
                {
                    title: "Who Is ASO Best For?",
                    description: "ASO is ideal for:",
                    list: [
                        "New app launches",
                        "Apps struggling with visibility",
                        "Startups with limited marketing budgets",
                        "Businesses scaling globally",
                        "Apps running paid acquisition campaigns"
                    ]
                },
                {
                    title: "Why Solario Tech for App Store Optimization?",
                    description: "What makes our ASO services effective:",
                    list: [
                        "12+ Years of Digital & App Experience",
                        "Data-driven ASO strategies",
                        "Focus on long-term organic growth",
                        "Startup-friendly and cost-effective approach",
                        "Transparent reporting and insights",
                        "End-to-end app growth support"
                    ]
                }
            ],
            cta: {
                title: "Let’s Grow Your App Organically",
                description: "Whether you’re launching a new app or trying to improve downloads for an existing one, our ASO experts can help you rank higher and convert better.\nLet’s make your app easier to discover.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Push Notifications",
            hero: {
                title: "Engage, Retain & Convert Users with Smart Push Notifications",
                description: "Solario Tech helps businesses design and implement intelligent push notification systems that drive user engagement, retention, and conversions.\nWith scalable architecture and 12+ years of experience, we ensure your messages reach the right users at the right time.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are Push Notifications?",
                    description: "Push notifications are real-time messages sent directly to users’ devices, even when the app is not actively in use.\nThey help businesses communicate instantly and effectively.",
                    list: [
                        "Real-time user engagement",
                        "Improved user retention",
                        "Instant alerts and updates",
                        "Personalized communication"
                    ]
                },
                {
                    title: "Why Push Notifications Matter",
                    description: "Push notifications play a critical role in keeping users engaged and driving app usage.",
                    list: [
                        "Increase daily and monthly active users",
                        "Encourage repeat app usage",
                        "Deliver time-sensitive information",
                        "Boost conversions and revenue"
                    ]
                },
                {
                    title: "Transactional Push Notifications",
                    description: "We implement reliable transactional notifications to keep users informed about important actions and events.",
                    list: [
                        "Order and payment confirmations",
                        "Account activity alerts",
                        "Security and verification messages",
                        "System and service updates"
                    ]
                },
                {
                    title: "Promotional & Engagement Notifications",
                    description: "Drive engagement and growth with targeted promotional messages.",
                    list: [
                        "New feature announcements",
                        "Offers and discounts",
                        "Personalized recommendations",
                        "User re-engagement campaigns"
                    ]
                },
                {
                    title: "Personalization & User Segmentation",
                    description: "We design push notification systems that deliver personalized messages based on user behavior and preferences.",
                    list: [
                        "Behavior-based targeting",
                        "Location and time-based triggers",
                        "Custom user segments",
                        "Event-driven messaging"
                    ]
                },
                {
                    title: "Scheduling & Automation",
                    description: "Automate notification delivery to ensure consistent and timely communication.",
                    list: [
                        "Scheduled campaigns",
                        "Triggered notifications",
                        "Lifecycle-based messaging",
                        "Automated workflows"
                    ]
                },
                {
                    title: "Cross-Platform Push Notification Setup",
                    description: "We implement push notifications across multiple platforms with a unified approach.",
                    list: [
                        "iOS (APNs)",
                        "Android (Firebase Cloud Messaging)",
                        "Web push notifications",
                        "Unified backend management"
                    ]
                },
                {
                    title: "Analytics, Tracking & Optimization",
                    description: "Measure performance and continuously improve your push notification strategy.",
                    list: [
                        "Delivery and open rate tracking",
                        "Click-through and conversion analysis",
                        "A/B testing strategies",
                        "Actionable performance insights"
                    ]
                },
                {
                    title: "Security & Compliance",
                    description: "We ensure push notification systems are secure and compliant with platform and privacy standards.",
                    list: [
                        "Opt-in and user consent management",
                        "Secure token handling",
                        "Compliance with Apple and Google guidelines",
                        "Data privacy best practices"
                    ]
                },
                {
                    title: "Who Are Push Notifications Best For?",
                    description: "Push notifications are ideal for:",
                    list: [
                        "Mobile apps and SaaS platforms",
                        "E-commerce and on-demand services",
                        "Finance and healthcare apps",
                        "Content and media platforms",
                        "Customer engagement-driven businesses"
                    ]
                },
                {
                    title: "Why Solario Tech for Push Notifications?",
                    description: "What sets our push notification solutions apart:",
                    list: [
                        "12+ Years of App & Backend Experience",
                        "Scalable and reliable notification architecture",
                        "Personalization-first approach",
                        "Fast and cost-effective implementation",
                        "Startup-friendly and enterprise-ready solutions",
                        "Ongoing optimization and support"
                    ]
                }
            ],
            cta: {
                title: "Let’s Power Your App with Smart Notifications",
                description: "Whether you’re launching a new app or improving engagement in an existing one, our push notification solutions help you connect with users effectively and drive results.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },


        {
            id: "In-App Purchases",
            hero: {
                title: "Monetize Your App Effectively with In-App Purchases",
                description: "Solario Tech helps businesses design, implement, and optimize secure In-App Purchase (IAP) systems that drive sustainable revenue growth.\nWith 12+ years of app development experience, we ensure seamless purchase flows, compliance with platform guidelines, and a smooth user experience across iOS and Android.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are In-App Purchases?",
                    description: "In-App Purchases allow users to buy digital goods or services directly within a mobile application, creating a frictionless monetization experience.",
                    list: [
                        "One-time purchases",
                        "Subscriptions (monthly / yearly)",
                        "Consumable items",
                        "Non-consumable digital goods"
                    ]
                },
                {
                    title: "Why In-App Purchases Matter",
                    description: "A well-implemented IAP strategy helps maximize revenue while maintaining a positive user experience.",
                    list: [
                        "Primary revenue source for many apps",
                        "Frictionless checkout experience",
                        "Higher user lifetime value (LTV)",
                        "Scalable monetization model"
                    ]
                },
                {
                    title: "In-App Purchases for iOS & Android",
                    description: "We implement native and secure IAP solutions tailored to each platform’s guidelines and best practices.",
                    list: [
                        "Apple In-App Purchases (StoreKit)",
                        "Google Play Billing",
                        "Cross-platform monetization strategy",
                        "Platform-compliant implementation"
                    ]
                },
                {
                    title: "Subscription Management",
                    description: "We build flexible and user-friendly subscription systems that support recurring revenue.",
                    list: [
                        "Monthly and annual subscriptions",
                        "Free trials and introductory offers",
                        "Upgrade, downgrade, and cancellation flows",
                        "Subscription status synchronization"
                    ]
                },
                {
                    title: "Secure Purchase Validation",
                    description: "We ensure all transactions are securely validated to prevent fraud and revenue loss.",
                    list: [
                        "Server-side receipt validation",
                        "Fraud prevention mechanisms",
                        "Transaction verification and logging",
                        "Reliable purchase restoration"
                    ]
                },
                {
                    title: "User Experience Optimization",
                    description: "We design purchase flows that are intuitive and conversion-focused.",
                    list: [
                        "Clear pricing and feature presentation",
                        "Minimal checkout friction",
                        "Graceful error handling",
                        "Restore purchases support"
                    ]
                },
                {
                    title: "Analytics & Revenue Tracking",
                    description: "Track performance and optimize monetization using real-time insights.",
                    list: [
                        "Revenue and conversion tracking",
                        "Subscription retention analysis",
                        "Churn and renewal monitoring",
                        "Data-driven monetization optimization"
                    ]
                },
                {
                    title: "Compliance & App Store Guidelines",
                    description: "We ensure full compliance with app store policies to avoid rejections or revenue disruptions.",
                    list: [
                        "Apple App Store Review Guidelines compliance",
                        "Google Play policy adherence",
                        "Transparent pricing disclosures",
                        "Privacy and user consent management"
                    ]
                },
                {
                    title: "Who Are In-App Purchases Best For?",
                    description: "In-App Purchases are ideal for:",
                    list: [
                        "SaaS and subscription-based apps",
                        "Content and media platforms",
                        "Fitness and education apps",
                        "Gaming and entertainment apps",
                        "Freemium business models"
                    ]
                },
                {
                    title: "Why Solario Tech for In-App Purchases?",
                    description: "Why businesses trust us with app monetization:",
                    list: [
                        "12+ Years of Mobile App Experience",
                        "Expertise in StoreKit and Google Play Billing",
                        "Secure and scalable monetization architecture",
                        "Revenue-focused implementation",
                        "Startup-friendly and enterprise-ready approach",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Turn Your App into a Revenue Engine",
                description: "Whether you’re launching a new app or optimizing an existing one, our In-App Purchase solutions help you monetize effectively while keeping users satisfied.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Core Data Integration",
            hero: {
                title: "Reliable & Scalable Local Data Management with Core Data",
                description: "Solario Tech helps businesses integrate Apple’s Core Data framework to manage local app data efficiently, securely, and at scale.\nWith 12+ years of iOS development experience, we design robust data layers that ensure high performance, offline access, and seamless user experiences.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Core Data?",
                    description: "Core Data is Apple’s powerful framework for managing an app’s local data and object graph.\nIt simplifies data persistence while offering high performance and scalability.",
                    list: [
                        "Local data storage and persistence",
                        "Object-oriented data management",
                        "Optimized memory usage",
                        "Offline-first app support"
                    ]
                },
                {
                    title: "Why Use Core Data in iOS Apps?",
                    description: "Core Data is ideal for apps that need structured, reliable, and high-performance local data handling.",
                    list: [
                        "Fast data read and write operations",
                        "Built-in data caching",
                        "Automatic change tracking",
                        "Scalable data models"
                    ]
                },
                {
                    title: "Custom Core Data Architecture",
                    description: "We design clean and scalable Core Data architectures tailored to your app’s complexity.",
                    list: [
                        "Well-structured data models",
                        "Separation of data and UI layers",
                        "MVVM and Clean Architecture integration",
                        "Long-term maintainability"
                    ]
                },
                {
                    title: "Offline Data & Sync Capabilities",
                    description: "Enable seamless app usage even without an internet connection.",
                    list: [
                        "Offline-first app design",
                        "Background data synchronization",
                        "Conflict resolution strategies",
                        "Smooth online–offline transitions"
                    ]
                },
                {
                    title: "Core Data with APIs & Backend Sync",
                    description: "We integrate Core Data with backend systems to ensure data consistency across devices.",
                    list: [
                        "REST and GraphQL API integration",
                        "Data mapping and serialization",
                        "Incremental and delta syncing",
                        "Error-resilient sync mechanisms"
                    ]
                },
                {
                    title: "Performance Optimization",
                    description: "We optimize Core Data usage to ensure smooth performance even with large datasets.",
                    list: [
                        "Efficient fetch requests",
                        "Background context handling",
                        "Batch updates and deletes",
                        "Memory and faulting optimization"
                    ]
                },
                {
                    title: "Data Migration & Versioning",
                    description: "We handle schema changes safely as your app evolves.",
                    list: [
                        "Lightweight migrations",
                        "Custom migration strategies",
                        "Backward compatibility",
                        "Zero data loss approach"
                    ]
                },
                {
                    title: "Security & Data Integrity",
                    description: "We ensure stored data remains secure and reliable.",
                    list: [
                        "Encrypted data storage strategies",
                        "Secure access control",
                        "Data validation rules",
                        "Crash-safe persistence handling"
                    ]
                },
                {
                    title: "Who Is Core Data Best For?",
                    description: "Core Data integration is ideal for:",
                    list: [
                        "Offline-capable mobile apps",
                        "Data-intensive applications",
                        "Enterprise and internal business apps",
                        "Content-heavy and productivity apps",
                        "Apps requiring fast local performance"
                    ]
                },
                {
                    title: "Why Solario Tech for Core Data Integrations?",
                    description: "What makes our Core Data solutions reliable and scalable:",
                    list: [
                        "12+ Years of iOS Development Experience",
                        "Deep expertise in Core Data best practices",
                        "Performance-focused data architecture",
                        "Clean, maintainable codebase",
                        "Startup-friendly and enterprise-ready solutions",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Build Apps with Strong Data Foundations",
                description: "Whether you’re building a new iOS app or improving data handling in an existing one, our Core Data integration services ensure reliability, performance, and scalability.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "ARKit Implementation",
            hero: {
                title: "Create Immersive Augmented Reality Experiences with ARKit",
                description: "Solario Tech helps businesses leverage Apple’s ARKit to build powerful, immersive, and interactive augmented reality experiences on iOS devices.\nWith 12+ years of mobile development expertise, we design AR solutions that blend the digital and physical worlds seamlessly.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is ARKit?",
                    description: "ARKit is Apple’s augmented reality framework that enables iOS devices to overlay digital content onto the real world using advanced sensor data and computer vision.",
                    list: [
                        "World tracking and motion detection",
                        "Surface and plane detection",
                        "Real-world lighting estimation",
                        "High-performance AR rendering"
                    ]
                },
                {
                    title: "Why Use ARKit for iOS Apps?",
                    description: "ARKit provides native, accurate, and high-performance augmented reality experiences on Apple devices.",
                    list: [
                        "Deep integration with iOS hardware",
                        "Smooth and realistic AR interactions",
                        "Optimized performance and stability",
                        "Support for latest Apple devices"
                    ]
                },
                {
                    title: "Custom AR App Development",
                    description: "We build custom AR applications tailored to your business objectives and user needs.",
                    list: [
                        "Product visualization apps",
                        "AR-based training and simulations",
                        "Interactive marketing experiences",
                        "Immersive educational applications"
                    ]
                },
                {
                    title: "3D Object & Scene Integration",
                    description: "We integrate high-quality 3D models and scenes into AR experiences for realism and engagement.",
                    list: [
                        "3D model optimization",
                        "Scene composition and placement",
                        "Object scaling and rotation",
                        "Realistic lighting and shadows"
                    ]
                },
                {
                    title: "Plane Detection & Spatial Mapping",
                    description: "Enable digital objects to interact naturally with real-world surfaces.",
                    list: [
                        "Horizontal and vertical plane detection",
                        "Spatial mapping and environment understanding",
                        "Accurate object anchoring",
                        "Persistent AR experiences"
                    ]
                },
                {
                    title: "Face Tracking & Body Tracking",
                    description: "We use ARKit’s advanced tracking capabilities to create interactive and personalized experiences.",
                    list: [
                        "Face tracking and facial expressions",
                        "Body and motion tracking",
                        "Gesture-based interactions",
                        "Real-time AR effects"
                    ]
                },
                {
                    title: "ARKit with Swift & SwiftUI",
                    description: "We integrate ARKit seamlessly with modern iOS technologies.",
                    list: [
                        "Swift-based AR development",
                        "SwiftUI and UIKit integration",
                        "Clean and modular AR architecture",
                        "Scalable and maintainable codebase"
                    ]
                },
                {
                    title: "Performance Optimization & Testing",
                    description: "We ensure AR experiences are smooth, stable, and optimized for real-world usage.",
                    list: [
                        "Frame rate and performance optimization",
                        "Device compatibility testing",
                        "Battery usage optimization",
                        "Real-world environment testing"
                    ]
                },
                {
                    title: "Industries & Use Cases",
                    description: "ARKit implementations are ideal for:",
                    list: [
                        "Retail and e-commerce",
                        "Real estate and interior design",
                        "Education and training",
                        "Gaming and entertainment",
                        "Marketing and brand engagement"
                    ]
                },
                {
                    title: "Why Solario Tech for ARKit Implementations?",
                    description: "Why businesses trust us for AR development:",
                    list: [
                        "12+ Years of Mobile Development Experience",
                        "Expertise in ARKit and iOS frameworks",
                        "High-performance and scalable AR solutions",
                        "User-centric AR experience design",
                        "Startup-friendly and enterprise-ready approach",
                        "End-to-end AR development and support"
                    ]
                }
            ],
            cta: {
                title: "Bring Your Ideas to Life with Augmented Reality",
                description: "Whether you’re building an innovative AR product or enhancing an existing app, our ARKit experts can help you deliver immersive experiences that captivate users.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "HealthKit Integration",
            hero: {
                title: "Secure & Intelligent Health Data Integration with HealthKit",
                description: "Solario Tech helps healthcare, fitness, and wellness apps integrate Apple HealthKit to securely collect, manage, and analyze health data.\nWith 12+ years of iOS development experience, we build HealthKit solutions that are accurate, privacy-focused, and fully compliant with Apple guidelines.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is HealthKit?",
                    description: "HealthKit is Apple’s centralized framework for accessing and sharing health and fitness data across iOS apps, Apple Watch, and supported devices.",
                    list: [
                        "Centralized health data access",
                        "Secure and permission-based data sharing",
                        "Integration with Apple Watch and fitness devices",
                        "Real-time and historical health metrics"
                    ]
                },
                {
                    title: "Why Use HealthKit Integration?",
                    description: "HealthKit enables apps to deliver personalized, data-driven health experiences while maintaining strict user privacy.",
                    list: [
                        "Single source of truth for health data",
                        "Improved user engagement through insights",
                        "Better interoperability with Apple ecosystem",
                        "Privacy-first data handling"
                    ]
                },
                {
                    title: "Health Data Collection & Reading",
                    description: "We integrate HealthKit to read and write approved health data types securely.",
                    list: [
                        "Steps, distance, and calories",
                        "Heart rate and activity data",
                        "Sleep and mindfulness metrics",
                        "Workout and fitness data"
                    ]
                },
                {
                    title: "Apple Watch & Device Integration",
                    description: "Seamless synchronization between iPhone, Apple Watch, and supported health devices.",
                    list: [
                        "WatchKit integration",
                        "Background health data syncing",
                        "Real-time activity tracking",
                        "Multi-device data consistency"
                    ]
                },
                {
                    title: "Permissions & Privacy Management",
                    description: "We ensure HealthKit integrations follow Apple’s strict privacy and consent requirements.",
                    list: [
                        "User-controlled data access",
                        "Granular permission handling",
                        "Clear consent flows",
                        "Compliance with Apple Health policies"
                    ]
                },
                {
                    title: "Health Data Visualization & Insights",
                    description: "Transform raw health data into meaningful insights for users.",
                    list: [
                        "Trends and progress tracking",
                        "Daily, weekly, and monthly summaries",
                        "Personalized health insights",
                        "Custom dashboards"
                    ]
                },
                {
                    title: "HealthKit with Backend & Cloud Sync",
                    description: "We securely sync HealthKit data with backend systems when required.",
                    list: [
                        "Secure API-based data transfer",
                        "HIPAA-ready architecture (when applicable)",
                        "Data encryption in transit and at rest",
                        "Scalable cloud integration"
                    ]
                },
                {
                    title: "Compliance & Best Practices",
                    description: "Our HealthKit implementations adhere to industry and platform standards.",
                    list: [
                        "Apple App Store Review Guidelines compliance",
                        "Health data privacy best practices",
                        "Secure storage and access control",
                        "Transparent user data policies"
                    ]
                },
                {
                    title: "Who Is HealthKit Best For?",
                    description: "HealthKit integration is ideal for:",
                    list: [
                        "Fitness and wellness apps",
                        "Healthcare and medical apps",
                        "Mental health and mindfulness apps",
                        "Nutrition and lifestyle platforms",
                        "Corporate wellness solutions"
                    ]
                },
                {
                    title: "Why Solario Tech for HealthKit Integration?",
                    description: "Why clients trust us with health data integrations:",
                    list: [
                        "12+ Years of iOS Development Experience",
                        "Expertise in HealthKit and Apple Watch integration",
                        "Privacy-first and compliance-driven approach",
                        "Secure and scalable architecture",
                        "Startup-friendly and enterprise-ready solutions",
                        "Ongoing maintenance and support"
                    ]
                }
            ],
            cta: {
                title: "Build Smarter Health & Fitness Applications",
                description: "Whether you’re building a fitness app or a healthcare platform, our HealthKit integration services help you deliver secure, insightful, and user-centric health experiences.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

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
