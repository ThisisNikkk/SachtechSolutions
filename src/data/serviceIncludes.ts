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
        {
            id: "Kotlin Development",
            hero: {
                title: "Build Modern, Secure & High-Performance Apps with Kotlin",
                description: "Solario Tech delivers robust, scalable, and future-ready applications using Kotlin — Google’s preferred language for Android development.\nWith 12+ years of engineering experience, we help startups, SMBs, and enterprises build reliable Android and backend solutions with clean architecture and high performance.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Kotlin Development?",
                    description: "Kotlin is a modern, concise, and powerful programming language officially supported by Google for Android development and widely used for backend systems.",
                    list: [
                        "Official language for Android development",
                        "Concise and readable syntax",
                        "Interoperable with Java",
                        "High performance and safety"
                    ]
                },
                {
                    title: "Why Choose Kotlin?",
                    description: "Kotlin improves developer productivity and application reliability.",
                    list: [
                        "Less boilerplate code",
                        "Reduced runtime crashes",
                        "Faster development cycles",
                        "Improved app maintainability"
                    ]
                },
                {
                    title: "Android App Development with Kotlin",
                    description: "We build high-quality Android applications using Kotlin and modern Android frameworks.",
                    list: [
                        "Custom Android app development",
                        "MVP and full-scale product builds",
                        "Material Design implementation",
                        "Support for latest Android versions"
                    ]
                },
                {
                    title: "Kotlin Multiplatform Development",
                    description: "Share business logic across multiple platforms while keeping native UI experiences.",
                    list: [
                        "Shared code for Android, iOS, and Web",
                        "Reduced development time and cost",
                        "Native performance",
                        "Scalable architecture"
                    ]
                },
                {
                    title: "Backend Development with Kotlin",
                    description: "We use Kotlin for building secure and scalable backend services.",
                    list: [
                        "RESTful and GraphQL APIs",
                        "Microservices architecture",
                        "High-performance server-side applications",
                        "Cloud-ready backend solutions"
                    ]
                },
                {
                    title: "Clean Architecture & Best Practices",
                    description: "We follow modern architectural patterns to ensure long-term maintainability.",
                    list: [
                        "MVVM and Clean Architecture",
                        "Separation of concerns",
                        "Testable and modular codebase",
                        "Scalable application structure"
                    ]
                },
                {
                    title: "API & Third-Party Integrations",
                    description: "We integrate Kotlin applications seamlessly with external systems.",
                    list: [
                        "REST and GraphQL API integration",
                        "Payment gateway integrations",
                        "Analytics and monitoring tools",
                        "Cloud and third-party services"
                    ]
                },
                {
                    title: "Performance & Optimization",
                    description: "We optimize Kotlin applications for speed, stability, and efficiency.",
                    list: [
                        "Memory and CPU optimization",
                        "Efficient background processing",
                        "Network and data handling optimization",
                        "Battery usage optimization"
                    ]
                },
                {
                    title: "Testing & Quality Assurance",
                    description: "Quality is built into every Kotlin solution we deliver.",
                    list: [
                        "Unit and integration testing",
                        "Automated test coverage",
                        "Performance and stability testing",
                        "Continuous quality improvements"
                    ]
                },
                {
                    title: "Who Is Kotlin Development Best For?",
                    description: "Kotlin development is ideal for:",
                    list: [
                        "Android applications",
                        "Startups building MVPs",
                        "Enterprise-grade mobile solutions",
                        "Backend and microservices systems",
                        "Cross-platform development needs"
                    ]
                },
                {
                    title: "Why Solario Tech for Kotlin Development?",
                    description: "Why clients choose us for Kotlin projects:",
                    list: [
                        "12+ Years of Software Engineering Experience",
                        "Deep expertise in Android and backend systems",
                        "Clean, scalable, and future-ready architecture",
                        "Fast and cost-effective delivery",
                        "Startup-friendly and enterprise-ready approach",
                        "Long-term maintenance and support"
                    ]
                }
            ],
            cta: {
                title: "Build Powerful Applications with Kotlin",
                description: "Whether you’re building a new Android app or a scalable backend system, our Kotlin development services help you deliver high-quality, future-proof solutions.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Java Development",
            hero: {
                title: "Build Scalable, Secure & Enterprise-Grade Solutions with Java",
                description: "Solario Tech delivers robust, high-performance, and scalable applications using Java — one of the most trusted and widely used programming languages in the industry.\nWith 12+ years of engineering expertise, we help startups, SMBs, and enterprises build reliable systems that power mission-critical business operations.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Java Development?",
                    description: "Java is a powerful, platform-independent programming language widely used for building enterprise, web, mobile, and backend applications.",
                    list: [
                        "Platform-independent (Write Once, Run Anywhere)",
                        "Highly secure and stable",
                        "Scalable and performance-oriented",
                        "Large ecosystem and community support"
                    ]
                },
                {
                    title: "Why Choose Java?",
                    description: "Java is trusted by enterprises worldwide for building long-lasting and scalable systems.",
                    list: [
                        "Proven reliability for large-scale systems",
                        "Strong security features",
                        "Excellent performance under heavy loads",
                        "Long-term maintainability"
                    ]
                },
                {
                    title: "Enterprise Java Application Development",
                    description: "We build enterprise-grade applications designed to handle complex business workflows.",
                    list: [
                        "ERP and CRM systems",
                        "Banking and financial platforms",
                        "Enterprise portals and dashboards",
                        "High-availability business applications"
                    ]
                },
                {
                    title: "Java Backend & API Development",
                    description: "We develop powerful backend systems and APIs using modern Java frameworks.",
                    list: [
                        "RESTful and GraphQL APIs",
                        "Microservices-based architectures",
                        "Spring Boot and Spring Cloud solutions",
                        "Scalable backend services"
                    ]
                },
                {
                    title: "Web Application Development",
                    description: "We build secure and high-performing web applications using Java technologies.",
                    list: [
                        "Java-based web platforms",
                        "MVC and modern web architectures",
                        "Integration with frontend frameworks",
                        "Secure session and data handling"
                    ]
                },
                {
                    title: "Microservices & Distributed Systems",
                    description: "We design and implement distributed systems that scale efficiently.",
                    list: [
                        "Microservices architecture",
                        "Service discovery and configuration",
                        "Load balancing and fault tolerance",
                        "Cloud-native Java applications"
                    ]
                },
                {
                    title: "Database & System Integration",
                    description: "We integrate Java applications seamlessly with databases and enterprise systems.",
                    list: [
                        "SQL and NoSQL database integration",
                        "Legacy system modernization",
                        "Third-party system integrations",
                        "Data processing and transformation"
                    ]
                },
                {
                    title: "Security & Performance Optimization",
                    description: "We ensure Java applications are secure, fast, and optimized.",
                    list: [
                        "Authentication and authorization",
                        "Secure data encryption",
                        "Performance tuning and optimization",
                        "Scalable resource management"
                    ]
                },
                {
                    title: "Testing & Quality Assurance",
                    description: "Quality is embedded into every Java solution we deliver.",
                    list: [
                        "Unit and integration testing",
                        "Automated test frameworks",
                        "Performance and load testing",
                        "Continuous quality improvement"
                    ]
                },
                {
                    title: "Who Is Java Development Best For?",
                    description: "Java development is ideal for:",
                    list: [
                        "Enterprise and large-scale systems",
                        "Backend and API-driven platforms",
                        "Financial, healthcare, and SaaS products",
                        "High-traffic and mission-critical applications",
                        "Legacy system modernization"
                    ]
                },
                {
                    title: "Why Solario Tech for Java Development?",
                    description: "Why businesses trust us with Java projects:",
                    list: [
                        "12+ Years of Software Engineering Experience",
                        "Deep expertise in enterprise Java ecosystems",
                        "Scalable and secure system design",
                        "Fast and cost-effective delivery",
                        "Startup-friendly and enterprise-ready approach",
                        "Long-term maintenance and support"
                    ]
                }
            ],
            cta: {
                title: "Build Reliable Systems with Java",
                description: "Whether you’re building a new enterprise application or modernizing an existing system, our Java development services help you deliver secure, scalable, and future-proof solutions.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Material Design",
            hero: {
                title: "Create Consistent, Intuitive & Modern Interfaces with Material Design",
                description: "Solario Tech designs and implements user interfaces based on Google’s Material Design system to deliver consistent, intuitive, and visually appealing digital experiences.\nWith 12+ years of design and development experience, we help businesses build apps that feel familiar, responsive, and easy to use across all devices.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Material Design?",
                    description: "Material Design is Google’s design system that provides guidelines for layout, motion, color, typography, and interaction across digital platforms.",
                    list: [
                        "Consistent UI patterns",
                        "Clean and modern visual language",
                        "Responsive and adaptive layouts",
                        "Platform-agnostic design principles"
                    ]
                },
                {
                    title: "Why Choose Material Design?",
                    description: "Material Design improves usability while maintaining visual consistency across platforms.",
                    list: [
                        "Familiar user experience",
                        "Improved usability and accessibility",
                        "Faster design and development cycles",
                        "Scalable design system"
                    ]
                },
                {
                    title: "Material Design for Android Apps",
                    description: "We implement Material Design guidelines to build intuitive and native-feeling Android applications.",
                    list: [
                        "Material You (Material 3) implementation",
                        "Consistent navigation patterns",
                        "Adaptive layouts for phones and tablets",
                        "Smooth animations and transitions"
                    ]
                },
                {
                    title: "Material Design for Web Applications",
                    description: "We apply Material Design principles to modern web applications for consistency and clarity.",
                    list: [
                        "Responsive web UI design",
                        "Component-based design systems",
                        "Cross-browser compatibility",
                        "Design consistency across platforms"
                    ]
                },
                {
                    title: "Custom Theming & Branding",
                    description: "We customize Material Design to match your brand identity without losing usability.",
                    list: [
                        "Custom color palettes",
                        "Typography and icon customization",
                        "Brand-aligned UI components",
                        "Light and dark mode support"
                    ]
                },
                {
                    title: "Reusable UI Components",
                    description: "We build reusable Material Design components to ensure consistency and faster development.",
                    list: [
                        "Buttons, cards, dialogs, and forms",
                        "Navigation drawers and bottom bars",
                        "Reusable layouts and templates",
                        "Design system documentation"
                    ]
                },
                {
                    title: "Accessibility & Usability",
                    description: "Material Design supports accessibility best practices, which we strictly follow.",
                    list: [
                        "WCAG-compliant color contrast",
                        "Accessible typography and spacing",
                        "Keyboard and screen-reader support",
                        "Inclusive design principles"
                    ]
                },
                {
                    title: "Motion & Interaction Design",
                    description: "We use meaningful motion to enhance user understanding and engagement.",
                    list: [
                        "Natural animations",
                        "Clear state transitions",
                        "Feedback-driven interactions",
                        "Performance-optimized motion"
                    ]
                },
                {
                    title: "Who Is Material Design Best For?",
                    description: "Material Design is ideal for:",
                    list: [
                        "Android applications",
                        "Cross-platform mobile apps",
                        "Web and SaaS platforms",
                        "Products requiring design consistency",
                        "Startups and enterprise applications"
                    ]
                },
                {
                    title: "Why Solario Tech for Material Design?",
                    description: "Why clients trust us for Material Design implementations:",
                    list: [
                        "12+ Years of UI/UX & Development Experience",
                        "Deep understanding of Material Design guidelines",
                        "Balance of aesthetics and usability",
                        "Scalable and maintainable design systems",
                        "Startup-friendly and enterprise-ready approach",
                        "End-to-end design and development support"
                    ]
                }
            ],
            cta: {
                title: "Design Experiences Users Instantly Understand",
                description: "Whether you’re building a new product or redesigning an existing one, our Material Design services help you create clean, intuitive, and consistent user experiences.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Google Play Services",
            hero: {
                title: "Enhance Android Apps with Google Play Services Integration",
                description: "Solario Tech helps businesses integrate Google Play Services to unlock powerful Android features such as location, authentication, maps, analytics, and cloud messaging.\nWith 12+ years of mobile development experience, we ensure reliable, secure, and scalable integrations that enhance app functionality and user experience.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are Google Play Services?",
                    description: "Google Play Services is a collection of APIs and services that enable advanced functionality in Android applications without managing device-specific complexities.",
                    list: [
                        "Core Google APIs for Android",
                        "Background updates without OS upgrades",
                        "Consistent behavior across devices",
                        "Improved app performance and stability"
                    ]
                },
                {
                    title: "Why Use Google Play Services?",
                    description: "Google Play Services helps developers deliver richer, smarter, and more reliable Android experiences.",
                    list: [
                        "Faster feature rollout",
                        "Reduced device fragmentation issues",
                        "Improved security and reliability",
                        "Better user experience"
                    ]
                },
                {
                    title: "Google Authentication & Sign-In",
                    description: "We integrate secure and seamless Google authentication flows.",
                    list: [
                        "Google Sign-In integration",
                        "OAuth-based authentication",
                        "Secure user identity management",
                        "Faster onboarding experience"
                    ]
                },
                {
                    title: "Location & Maps Integration",
                    description: "Enable accurate location-based features using Google APIs.",
                    list: [
                        "Google Maps integration",
                        "Fused Location Provider",
                        "Geofencing and location tracking",
                        "Real-time map interactions"
                    ]
                },
                {
                    title: "Push Notifications with Firebase Cloud Messaging",
                    description: "We implement reliable and scalable push notification systems.",
                    list: [
                        "Firebase Cloud Messaging (FCM)",
                        "Targeted and segmented notifications",
                        "Background message handling",
                        "High delivery reliability"
                    ]
                },
                {
                    title: "Analytics & User Insights",
                    description: "Understand user behavior and app performance with Google tools.",
                    list: [
                        "Firebase Analytics integration",
                        "Event and funnel tracking",
                        "User engagement insights",
                        "Data-driven decision making"
                    ]
                },
                {
                    title: "Google APIs & Device Features",
                    description: "We integrate a wide range of Google APIs to extend app capabilities.",
                    list: [
                        "Google Pay integration",
                        "ML Kit features",
                        "Nearby and device APIs",
                        "In-app updates and reviews"
                    ]
                },
                {
                    title: "Security & Compliance",
                    description: "We ensure secure and compliant Google Play Services implementations.",
                    list: [
                        "Secure API key management",
                        "Permission and consent handling",
                        "Compliance with Google Play policies",
                        "Data privacy best practices"
                    ]
                },
                {
                    title: "Performance & Optimization",
                    description: "We optimize integrations for speed, battery efficiency, and reliability.",
                    list: [
                        "Optimized background processing",
                        "Battery and network efficiency",
                        "Error handling and fallbacks",
                        "Performance monitoring"
                    ]
                },
                {
                    title: "Who Is Google Play Services Best For?",
                    description: "Google Play Services integration is ideal for:",
                    list: [
                        "Android mobile applications",
                        "Location-based and on-demand apps",
                        "Apps requiring authentication and payments",
                        "Data-driven and analytics-focused products",
                        "Scalable consumer applications"
                    ]
                },
                {
                    title: "Why Solario Tech for Google Play Services?",
                    description: "Why clients trust us with Google Play Services integrations:",
                    list: [
                        "12+ Years of Android Development Experience",
                        "Deep expertise in Google APIs and Firebase",
                        "Secure and scalable integration approach",
                        "Fast and cost-effective delivery",
                        "Startup-friendly and enterprise-ready solutions",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Unlock the Full Power of Android",
                description: "Whether you’re building a new Android app or enhancing an existing one, our Google Play Services integration helps you deliver smarter, faster, and more reliable experiences.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Firebase Integration",
            hero: {
                title: "Build Scalable, Real-Time & Cloud-Ready Apps with Firebase",
                description: "Solario Tech helps businesses integrate Firebase to build secure, scalable, and high-performance mobile and web applications.\nWith 12+ years of development experience, we leverage Firebase’s powerful backend services to accelerate development, improve reliability, and deliver real-time user experiences.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Firebase?",
                    description: "Firebase is Google’s Backend-as-a-Service (BaaS) platform that provides ready-to-use tools for building, scaling, and managing applications.",
                    list: [
                        "Real-time and cloud databases",
                        "Authentication and user management",
                        "Cloud messaging and notifications",
                        "Analytics and performance monitoring"
                    ]
                },
                {
                    title: "Why Choose Firebase?",
                    description: "Firebase helps teams build apps faster while maintaining scalability and reliability.",
                    list: [
                        "Faster development without complex backend setup",
                        "Scalable infrastructure managed by Google",
                        "Real-time data synchronization",
                        "Seamless integration with Android, iOS, and Web"
                    ]
                },
                {
                    title: "Firebase Authentication",
                    description: "We implement secure and user-friendly authentication systems using Firebase Auth.",
                    list: [
                        "Email and password authentication",
                        "Google, Apple, and social logins",
                        "Phone number authentication",
                        "Secure session and identity management"
                    ]
                },
                {
                    title: "Cloud Firestore & Realtime Database",
                    description: "We design scalable and efficient data models using Firebase databases.",
                    list: [
                        "Real-time data synchronization",
                        "Offline data support",
                        "Structured and scalable data models",
                        "Secure database rules"
                    ]
                },
                {
                    title: "Push Notifications with Firebase Cloud Messaging",
                    description: "Engage users with reliable and targeted push notifications.",
                    list: [
                        "Firebase Cloud Messaging (FCM)",
                        "User segmentation and targeting",
                        "Background and foreground message handling",
                        "High delivery reliability"
                    ]
                },
                {
                    title: "Firebase Analytics & Insights",
                    description: "Understand user behavior and app performance using Firebase analytics tools.",
                    list: [
                        "User engagement tracking",
                        "Custom event analytics",
                        "Conversion and funnel analysis",
                        "Data-driven product decisions"
                    ]
                },
                {
                    title: "Cloud Functions & Backend Logic",
                    description: "We implement serverless backend logic using Firebase Cloud Functions.",
                    list: [
                        "Event-driven backend functions",
                        "API and webhook integrations",
                        "Secure server-side processing",
                        "Auto-scaling backend services"
                    ]
                },
                {
                    title: "Performance Monitoring & Crashlytics",
                    description: "We ensure app stability and performance using Firebase monitoring tools.",
                    list: [
                        "Crash reporting with Crashlytics",
                        "Performance and latency monitoring",
                        "Real-time issue alerts",
                        "Proactive issue resolution"
                    ]
                },
                {
                    title: "Security & Access Control",
                    description: "We implement strong security practices for Firebase-based applications.",
                    list: [
                        "Secure authentication rules",
                        "Role-based access control",
                        "Data validation and protection",
                        "Compliance with privacy best practices"
                    ]
                },
                {
                    title: "Who Is Firebase Integration Best For?",
                    description: "Firebase integration is ideal for:",
                    list: [
                        "Mobile and web applications",
                        "Startups building MVPs quickly",
                        "Real-time chat and collaboration apps",
                        "Apps requiring rapid scalability",
                        "Products with limited backend resources"
                    ]
                },
                {
                    title: "Why Solario Tech for Firebase Integration?",
                    description: "Why businesses trust us with Firebase solutions:",
                    list: [
                        "12+ Years of App & Backend Development Experience",
                        "Deep expertise in Firebase and Google Cloud",
                        "Scalable and secure architecture design",
                        "Fast and cost-effective implementation",
                        "Startup-friendly and enterprise-ready approach",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Power Your App with Firebase",
                description: "Whether you’re building a new app or scaling an existing one, our Firebase integration services help you deliver fast, secure, and real-time digital experiences.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Room Database",
            hero: {
                title: "Enable Real-Time & Offline-First Apps with Room Database",
                description: "Solario Tech helps businesses implement Room Database to build reliable, fast, and offline-capable Android applications.\nWith 12+ years of mobile development experience, we design clean and efficient local data layers that ensure performance, stability, and long-term scalability.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Room Database?",
                    description: "Room is Google’s official persistence library that provides an abstraction layer over SQLite to allow fluent, safe, and efficient database access.",
                    list: [
                        "Built on top of SQLite",
                        "Compile-time query validation",
                        "Less boilerplate code",
                        "Official Android Jetpack component"
                    ]
                },
                {
                    title: "Why Use Room Database?",
                    description: "Room simplifies local data storage while improving reliability and performance.",
                    list: [
                        "Type-safe database operations",
                        "Reduced runtime crashes",
                        "Improved code readability",
                        "Better long-term maintainability"
                    ]
                },
                {
                    title: "Offline-First App Architecture",
                    description: "We design Room-based architectures that allow apps to function smoothly without constant internet access.",
                    list: [
                        "Offline data access",
                        "Local caching of API responses",
                        "Smooth online-offline transitions",
                        "Improved user experience"
                    ]
                },
                {
                    title: "Entity, DAO & Database Design",
                    description: "We design clean and scalable Room components following best practices.",
                    list: [
                        "Well-structured entities",
                        "Efficient DAO queries",
                        "Normalized database schemas",
                        "Scalable database design"
                    ]
                },
                {
                    title: "Room with MVVM & Clean Architecture",
                    description: "We integrate Room seamlessly with modern Android architectures.",
                    list: [
                        "MVVM architecture support",
                        "Repository pattern implementation",
                        "Separation of concerns",
                        "Testable and modular codebase"
                    ]
                },
                {
                    title: "Room with LiveData & Flow",
                    description: "Enable reactive and real-time UI updates using Room integrations.",
                    list: [
                        "LiveData-based database updates",
                        "Kotlin Flow support",
                        "Automatic UI refresh on data change",
                        "Lifecycle-aware data handling"
                    ]
                },
                {
                    title: "Data Sync with APIs",
                    description: "We integrate Room with backend APIs for seamless data synchronization.",
                    list: [
                        "REST and GraphQL API sync",
                        "Background data refresh",
                        "Conflict resolution strategies",
                        "Reliable sync mechanisms"
                    ]
                },
                {
                    title: "Database Migrations & Versioning",
                    description: "We ensure smooth schema updates as your app evolves.",
                    list: [
                        "Versioned database migrations",
                        "Lightweight and custom migrations",
                        "Backward compatibility",
                        "Zero data loss approach"
                    ]
                },
                {
                    title: "Performance & Optimization",
                    description: "We optimize Room databases for speed and efficiency.",
                    list: [
                        "Efficient indexing strategies",
                        "Optimized queries",
                        "Background thread handling",
                        "Reduced memory usage"
                    ]
                },
                {
                    title: "Testing & Reliability",
                    description: "We ensure database reliability through proper testing.",
                    list: [
                        "DAO unit testing",
                        "In-memory database testing",
                        "Data integrity validation",
                        "Crash and edge-case handling"
                    ]
                },
                {
                    title: "Who Is Room Database Best For?",
                    description: "Room Database is ideal for:",
                    list: [
                        "Offline-capable Android apps",
                        "Data-intensive mobile applications",
                        "Apps with frequent API interactions",
                        "Enterprise and productivity apps",
                        "Apps requiring fast local access"
                    ]
                },
                {
                    title: "Why Solario Tech for Room Database?",
                    description: "Why clients trust us with Room implementations:",
                    list: [
                        "12+ Years of Android Development Experience",
                        "Deep expertise in Android Jetpack components",
                        "Clean and scalable local data architecture",
                        "Performance-focused implementations",
                        "Startup-friendly and enterprise-ready solutions",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Build Reliable Offline-Ready Android Apps",
                description: "Whether you’re building a new Android app or improving local data handling, our Room Database integration services help you deliver fast, stable, and user-friendly applications.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Jetpack Compose",
            hero: {
                title: "Build Modern Android UIs Faster with Jetpack Compose",
                description: "Solario Tech helps businesses build modern, intuitive, and high-performance Android user interfaces using Jetpack Compose — Android’s latest declarative UI toolkit.\nWith 12+ years of mobile development experience, we create scalable, maintainable, and future-ready Android apps with clean UI architecture.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Jetpack Compose?",
                    description: "Jetpack Compose is Android’s modern declarative UI toolkit that simplifies UI development by allowing developers to build interfaces using Kotlin code.",
                    list: [
                        "Declarative UI approach",
                        "Less boilerplate code",
                        "Fully Kotlin-based",
                        "Official Android UI toolkit"
                    ]
                },
                {
                    title: "Why Choose Jetpack Compose?",
                    description: "Jetpack Compose improves development speed and UI consistency while reducing complexity.",
                    list: [
                        "Faster UI development",
                        "Easier UI state management",
                        "Improved code readability",
                        "Future-proof Android UI"
                    ]
                },
                {
                    title: "Jetpack Compose for New Android Apps",
                    description: "We build new Android applications entirely using Jetpack Compose for modern UI experiences.",
                    list: [
                        "Clean and modular UI components",
                        "Material 3 (Material You) support",
                        "Rapid UI iteration",
                        "Optimized for latest Android versions"
                    ]
                },
                {
                    title: "Jetpack Compose Integration in Existing Apps",
                    description: "Already using XML layouts? We integrate Jetpack Compose gradually into existing Android apps.",
                    list: [
                        "Hybrid XML + Compose architecture",
                        "Modernizing legacy screens",
                        "Low-risk incremental adoption",
                        "Improved UI performance"
                    ]
                },
                {
                    title: "State Management & UI Architecture",
                    description: "We implement clean state-driven UI architectures with Compose.",
                    list: [
                        "Unidirectional data flow",
                        "State hoisting best practices",
                        "MVVM and Clean Architecture",
                        "Lifecycle-aware UI components"
                    ]
                },
                {
                    title: "Material Design & Theming",
                    description: "We design Compose UIs aligned with Material Design guidelines.",
                    list: [
                        "Material 3 theming",
                        "Custom brand styling",
                        "Dark and light mode support",
                        "Responsive UI layouts"
                    ]
                },
                {
                    title: "Animations & Interactions",
                    description: "Enhance user experience with smooth and meaningful animations.",
                    list: [
                        "Compose animation APIs",
                        "Gesture and motion handling",
                        "Micro-interactions",
                        "Performance-optimized animations"
                    ]
                },
                {
                    title: "Performance & Optimization",
                    description: "We ensure Jetpack Compose UIs remain fast and efficient.",
                    list: [
                        "Recomposition optimization",
                        "Efficient state handling",
                        "Reduced UI rendering overhead",
                        "Battery and memory optimization"
                    ]
                },
                {
                    title: "Testing & Maintainability",
                    description: "We build Compose UIs that are easy to test and maintain.",
                    list: [
                        "Compose UI testing",
                        "Unit and integration tests",
                        "Reusable UI components",
                        "Scalable design systems"
                    ]
                },
                {
                    title: "Who Is Jetpack Compose Best For?",
                    description: "Jetpack Compose is ideal for:",
                    list: [
                        "Modern Android applications",
                        "Startups building fast MVPs",
                        "Apps requiring frequent UI updates",
                        "Products targeting latest Android users",
                        "Long-term scalable Android projects"
                    ]
                },
                {
                    title: "Why Solario Tech for Jetpack Compose?",
                    description: "Why clients trust us with Jetpack Compose development:",
                    list: [
                        "12+ Years of Android Development Experience",
                        "Deep expertise in Kotlin and Android Jetpack",
                        "Clean and scalable UI architecture",
                        "Fast and cost-effective delivery",
                        "Startup-friendly and enterprise-ready approach",
                        "Ongoing maintenance and support"
                    ]
                }
            ],
            cta: {
                title: "Build the Future of Android UI",
                description: "Whether you’re starting a new Android project or modernizing an existing app, our Jetpack Compose expertise helps you deliver fast, beautiful, and scalable user experiences.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Android Wear Support",
            hero: {
                title: "Extend Your App Experience to Wear OS Devices",
                description: "Solario Tech helps businesses build and integrate Android Wear (Wear OS) support to deliver seamless, glanceable, and responsive experiences on smartwatches.\nWith 12+ years of mobile development expertise, we design Wear OS solutions that complement mobile apps and enhance user engagement on the wrist.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Android Wear (Wear OS)?",
                    description: "Wear OS is Google’s smartwatch operating system designed to deliver quick, contextual, and hands-free user experiences.",
                    list: [
                        "Optimized for smartwatches",
                        "Tight integration with Android apps",
                        "Support for fitness, notifications, and actions",
                        "Designed for quick interactions"
                    ]
                },
                {
                    title: "Why Add Android Wear Support?",
                    description: "Wear OS support extends your app’s usability and engagement beyond smartphones.",
                    list: [
                        "Improved user convenience",
                        "Real-time notifications on the wrist",
                        "Enhanced fitness and health tracking",
                        "Increased product value and reach"
                    ]
                },
                {
                    title: "Wear OS App Development",
                    description: "We build native Wear OS applications tailored for smartwatch form factors.",
                    list: [
                        "Standalone Wear OS apps",
                        "Companion apps for mobile applications",
                        "Optimized UI for small screens",
                        "Battery-efficient implementations"
                    ]
                },
                {
                    title: "Wear OS UI/UX Design",
                    description: "We design clean, intuitive, and glanceable interfaces for Wear OS devices.",
                    list: [
                        "Material Design for Wear OS",
                        "Gesture and rotary input support",
                        "Quick actions and minimal interactions",
                        "Accessibility-friendly designs"
                    ]
                },
                {
                    title: "Notifications & Actions",
                    description: "Enable rich and actionable notifications on Wear OS devices.",
                    list: [
                        "Custom notification layouts",
                        "Action buttons and quick replies",
                        "Context-aware alerts",
                        "Notification syncing with mobile apps"
                    ]
                },
                {
                    title: "Health & Fitness Integrations",
                    description: "We integrate Wear OS apps with fitness and health features.",
                    list: [
                        "Sensor and activity tracking",
                        "Heart rate and step monitoring",
                        "Workout and fitness data sync",
                        "Integration with health platforms"
                    ]
                },
                {
                    title: "Data Sync with Mobile Apps",
                    description: "Ensure seamless communication between Wear OS and mobile applications.",
                    list: [
                        "Data Layer API integration",
                        "Real-time data synchronization",
                        "Offline handling and caching",
                        "Reliable background communication"
                    ]
                },
                {
                    title: "Performance & Battery Optimization",
                    description: "We optimize Wear OS apps for performance and battery efficiency.",
                    list: [
                        "Efficient background processing",
                        "Optimized sensor usage",
                        "Low-latency interactions",
                        "Battery-friendly design patterns"
                    ]
                },
                {
                    title: "Testing & Device Compatibility",
                    description: "We test Wear OS apps across devices and scenarios.",
                    list: [
                        "Multiple smartwatch form factors",
                        "Different Wear OS versions",
                        "Real-device testing",
                        "Performance and stability validation"
                    ]
                },
                {
                    title: "Who Is Android Wear Support Best For?",
                    description: "Android Wear support is ideal for:",
                    list: [
                        "Fitness and health applications",
                        "Productivity and notification-driven apps",
                        "IoT and connected device platforms",
                        "On-demand and real-time services",
                        "Apps focused on quick user interactions"
                    ]
                },
                {
                    title: "Why Solario Tech for Android Wear Support?",
                    description: "Why businesses trust us for Wear OS development:",
                    list: [
                        "12+ Years of Android Development Experience",
                        "Expertise in Wear OS and Android ecosystems",
                        "User-centric wearable design approach",
                        "Performance and battery-optimized solutions",
                        "Startup-friendly and enterprise-ready services",
                        "End-to-end wearable app support"
                    ]
                }
            ],
            cta: {
                title: "Bring Your App to the Wrist",
                description: "Whether you’re extending an existing app or building a new Wear OS experience, our Android Wear support services help you deliver fast, intuitive, and engaging smartwatch applications.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "web3-development": [
        {
            id: "Smart Contract Development",
            hero: {
                title: "Build Secure, Audited & Production-Grade Smart Contracts",
                description: "Solario Tech designs and develops secure, scalable smart contracts that power decentralized platforms across DeFi, NFTs, DAOs, and enterprise Web3 solutions.\nWith deep blockchain expertise, we help startups and enterprises build trustless systems with security, efficiency, and long-term scalability at the core.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Smart Contract Development?",
                    description: "Smart contract development involves writing, testing, and deploying self-executing programs on blockchain networks that enforce business logic without intermediaries.",
                    list: [
                        "Immutable and trustless execution",
                        "Automated on-chain workflows",
                        "Transparent and verifiable logic",
                        "Decentralized transaction handling"
                    ]
                },
                {
                    title: "Why Smart Contracts Matter",
                    description: "Smart contracts are the foundation of decentralized ecosystems.",
                    list: [
                        "Eliminate centralized intermediaries",
                        "Reduce operational and trust costs",
                        "Increase transparency and auditability",
                        "Enable global permissionless access"
                    ]
                },
                {
                    title: "Smart Contract Architecture & Design",
                    description: "We design contracts that are secure, modular, and upgrade-friendly.",
                    list: [
                        "Modular contract structures",
                        "Upgradeable proxy patterns",
                        "Gas-efficient execution",
                        "Role-based access control"
                    ]
                },
                {
                    title: "Security-First Development",
                    description: "Security is built into every contract from day one.",
                    list: [
                        "Reentrancy protection",
                        "Overflow and underflow prevention",
                        "Access control enforcement",
                        "Fail-safe logic patterns"
                    ]
                },
                {
                    title: "Testing & Audit Readiness",
                    description: "We ensure contracts are production-ready before deployment.",
                    list: [
                        "Comprehensive unit testing",
                        "Integration testing",
                        "Automated test pipelines",
                        "Audit preparation and remediation"
                    ]
                },
                {
                    title: "Who Is Smart Contract Development Best For?",
                    description: "Smart contracts are ideal for:",
                    list: [
                        "DeFi protocols",
                        "NFT platforms and marketplaces",
                        "DAOs and governance systems",
                        "Enterprise blockchain solutions"
                    ]
                },
                {
                    title: "Why Solario Tech for Smart Contracts?",
                    description: "Why clients trust us for smart contract development:",
                    list: [
                        "Security-first blockchain engineering",
                        "Deep expertise in Web3 protocols",
                        "Scalable and maintainable architectures",
                        "Audit-ready codebases",
                        "Long-term support and upgrades"
                    ]
                }
            ],
            cta: {
                title: "Launch Secure Smart Contracts",
                description: "Whether you’re launching DeFi, NFTs, or enterprise blockchain solutions, our smart contract development services help you build securely and confidently.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Decentralized Applications (dApps)",
            hero: {
                title: "Build Scalable & User-Friendly Decentralized Applications",
                description: "Solario Tech builds full-stack decentralized applications that combine Web2-grade user experience with Web3 trust and transparency.\nWe help teams deliver production-ready dApps that scale securely and drive real adoption.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What Are Decentralized Applications?",
                    description: "dApps are applications that interact with blockchain smart contracts instead of centralized servers.",
                    list: [
                        "Blockchain-powered backend logic",
                        "Wallet-based authentication",
                        "Decentralized data handling",
                        "Trustless execution model"
                    ]
                },
                {
                    title: "Why Build dApps?",
                    description: "Decentralized applications enable new trust models.",
                    list: [
                        "Censorship resistance",
                        "User-owned assets",
                        "Transparent logic",
                        "Global accessibility"
                    ]
                },
                {
                    title: "dApp Architecture",
                    description: "We design scalable and maintainable dApp architectures.",
                    list: [
                        "Smart contract backend",
                        "Web3 frontend integration",
                        "Indexing and APIs",
                        "Off-chain services"
                    ]
                },
                {
                    title: "Performance & Scalability",
                    description: "Optimized for real-world usage.",
                    list: [
                        "Layer 2 scaling solutions",
                        "Gas-optimized interactions",
                        "Caching and indexing layers",
                        "High-throughput design"
                    ]
                },
                {
                    title: "Security & Reliability",
                    description: "Security and reliability are core to every dApp.",
                    list: [
                        "Secure contract interactions",
                        "Transaction state handling",
                        "Error and failure recovery",
                        "Monitoring and analytics"
                    ]
                },
                {
                    title: "Who Are dApps Best For?",
                    description: "dApps are ideal for:",
                    list: [
                        "DeFi platforms",
                        "NFT marketplaces",
                        "DAO platforms",
                        "Web3 SaaS products"
                    ]
                },
                {
                    title: "Why Solario Tech for dApps?",
                    description: "Why businesses trust us for dApp development:",
                    list: [
                        "Full-stack Web3 expertise",
                        "User-centric Web3 UX",
                        "Scalable decentralized systems",
                        "Security-first approach",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Build Production-Ready dApps",
                description: "From MVPs to enterprise platforms, our dApp development services help you launch scalable and secure Web3 applications.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Ethereum & EVM Chains",
            hero: {
                title: "Build Secure, Scalable & Future-Ready Solutions on Ethereum & EVM Chains",
                description: "Solario Tech designs and builds decentralized applications and blockchain infrastructure on Ethereum and EVM-compatible networks.\nWith deep Web3 expertise, we help startups and enterprises leverage mature tooling, liquidity, and ecosystem support to launch secure, scalable, and production-ready blockchain solutions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What Are Ethereum & EVM-Compatible Chains?",
                    description: "Ethereum Virtual Machine (EVM) compatible blockchains support Ethereum smart contracts and development tooling, enabling applications to run across multiple networks with minimal changes.",
                    list: [
                        "Ethereum Mainnet",
                        "Polygon, BNB Chain, Avalanche, Arbitrum, Optimism",
                        "Shared Solidity-based development environment",
                        "Interoperability across EVM ecosystems"
                    ]
                },
                {
                    title: "Why Build on Ethereum & EVM?",
                    description: "Ethereum and EVM-compatible networks offer the most mature and widely adopted blockchain infrastructure.",
                    list: [
                        "Battle-tested and secure execution environment",
                        "Largest Web3 developer ecosystem",
                        "Extensive tooling, libraries, and audit support",
                        "Deep liquidity and ecosystem composability"
                    ]
                },
                {
                    title: "Smart Contract Development for EVM",
                    description: "We develop secure and efficient smart contracts tailored for EVM-based blockchains.",
                    list: [
                        "Solidity smart contract development",
                        "Upgradeable and modular contract architecture",
                        "Gas-optimized contract logic",
                        "Role-based access control and permissions"
                    ]
                },
                {
                    title: "Multi-Chain & Layer 2 Deployment",
                    description: "We help projects scale by deploying across multiple EVM networks and Layer 2 solutions.",
                    list: [
                        "Layer 2 scaling (Arbitrum, Optimism, Polygon)",
                        "Gas cost optimization strategies",
                        "Chain-specific configuration and tuning",
                        "Future-proof multi-chain architecture"
                    ]
                },
                {
                    title: "Cross-Chain Readiness & Interoperability",
                    description: "Design systems that are ready for cross-chain expansion and interoperability.",
                    list: [
                        "Cross-chain messaging design",
                        "Bridge-ready smart contract architecture",
                        "Unified codebases across chains",
                        "Scalable cross-network strategy"
                    ]
                },
                {
                    title: "Security & Best Practices",
                    description: "Security is critical when building on public blockchain networks.",
                    list: [
                        "Reentrancy and attack-vector prevention",
                        "Access control and permission management",
                        "Secure upgrade and ownership patterns",
                        "Audit-ready codebases"
                    ]
                },
                {
                    title: "Testing, Auditing & Reliability",
                    description: "We ensure EVM applications are stable, secure, and production-ready.",
                    list: [
                        "Comprehensive unit and integration testing",
                        "Automated test environments",
                        "Pre-audit preparation and remediation",
                        "Post-deployment monitoring support"
                    ]
                },
                {
                    title: "Who Are Ethereum & EVM Chains Best For?",
                    description: "Ethereum and EVM-based solutions are ideal for:",
                    list: [
                        "DeFi protocols and financial platforms",
                        "NFT platforms and marketplaces",
                        "DAO and governance systems",
                        "Enterprise and institutional blockchain solutions",
                        "Web3 startups seeking ecosystem adoption"
                    ]
                },
                {
                    title: "Why Solario Tech for Ethereum & EVM Development?",
                    description: "Why businesses trust Solario Tech for EVM-based blockchain solutions:",
                    list: [
                        "Deep expertise in Ethereum and EVM ecosystems",
                        "Security-first smart contract development",
                        "Scalable and maintainable architectures",
                        "Multi-chain and Layer 2 experience",
                        "Startup-friendly and enterprise-ready approach",
                        "Long-term support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Launch & Scale on Ethereum & EVM Chains",
                description: "Whether you’re building a new decentralized application or expanding across multiple blockchains, our Ethereum & EVM development services help you launch securely, scale efficiently, and grow confidently.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Solana Development",
            hero: {
                title: "High-Performance, Scalable & Real-Time Web3 Development on Solana",
                description: "Solario Tech designs and builds high-performance Web3 applications on Solana, enabling businesses to process transactions at scale with minimal latency and cost.\nWith deep blockchain engineering expertise, we help startups and enterprises leverage Solana’s parallel execution model to build real-time, high-throughput decentralized systems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What Is Solana?",
                    description: "Solana is a high-performance blockchain designed for speed, scalability, and low transaction costs, making it ideal for real-time and high-volume Web3 applications.",
                    list: [
                        "High-throughput blockchain architecture",
                        "Sub-second transaction finality",
                        "Low and predictable transaction fees",
                        "Designed for scalable decentralized systems"
                    ]
                },
                {
                    title: "Why Choose Solana?",
                    description: "Solana is purpose-built for applications that require speed and scale.",
                    list: [
                        "Parallel transaction execution (Sealevel)",
                        "High transactions per second (TPS)",
                        "Low-cost transactions suitable for mass adoption",
                        "Strong ecosystem growth and developer support"
                    ]
                },
                {
                    title: "Solana Program Development",
                    description: "We build secure and efficient on-chain programs using Rust, optimized for Solana’s execution environment.",
                    list: [
                        "Custom on-chain business logic",
                        "State management and account design",
                        "Performance-optimized program architecture",
                        "Security-first Rust development"
                    ]
                },
                {
                    title: "Token & NFT Development on Solana",
                    description: "We design and deploy Solana-based tokens and NFTs for scalable ecosystems.",
                    list: [
                        "SPL token development",
                        "NFT minting and metadata standards",
                        "Royalty and ownership enforcement",
                        "Marketplace-ready assets"
                    ]
                },
                {
                    title: "High-Performance dApp Architecture",
                    description: "We design Solana applications optimized for real-time user interactions.",
                    list: [
                        "Efficient account modeling",
                        "Parallel execution optimization",
                        "Low-latency transaction flows",
                        "Scalable program design"
                    ]
                },
                {
                    title: "Security & Best Practices",
                    description: "Security is critical when building high-speed blockchain systems.",
                    list: [
                        "Safe account ownership patterns",
                        "Access control and permission management",
                        "Protection against common Solana exploits",
                        "Secure upgrade and deployment strategies"
                    ]
                },
                {
                    title: "Testing, Deployment & Monitoring",
                    description: "We ensure Solana applications are production-ready and reliable.",
                    list: [
                        "Local and testnet program testing",
                        "Automated test pipelines",
                        "Mainnet deployment support",
                        "Post-deployment monitoring and optimization"
                    ]
                },
                {
                    title: "Who Is Solana Development Best For?",
                    description: "Solana-based solutions are ideal for:",
                    list: [
                        "High-frequency DeFi applications",
                        "NFT marketplaces and gaming platforms",
                        "Real-time trading and data platforms",
                        "Consumer Web3 applications at scale",
                        "Projects requiring low transaction costs"
                    ]
                },
                {
                    title: "Why Solario Tech for Solana Development?",
                    description: "Why businesses trust Solario Tech for Solana-based Web3 solutions:",
                    list: [
                        "Deep expertise in Solana and Rust development",
                        "Performance-focused blockchain architecture",
                        "Security-first engineering approach",
                        "Scalable and maintainable program design",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Build Fast, Scalable Web3 Applications on Solana",
                description: "Whether you’re launching a high-performance DeFi platform, NFT marketplace, or real-time Web3 product, our Solana development services help you build securely, scale efficiently, and deliver exceptional performance.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Web3 Frontend Integration",
            hero: {
                title: "Seamless, Secure & High-Performance Web3 Frontend Integration",
                description: "Solario Tech integrates blockchain functionality into modern web frontends while maintaining excellent usability, performance, and security.\nWith deep Web3 and frontend engineering expertise, we help businesses bridge complex blockchain interactions with intuitive, user-friendly interfaces that drive real adoption.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What Is Web3 Frontend Integration?",
                    description: "Web3 frontend integration connects user interfaces to blockchain networks, smart contracts, and wallets, enabling users to interact with decentralized systems through familiar web experiences.",
                    list: [
                        "Frontend interaction with smart contracts",
                        "Blockchain transaction execution and tracking",
                        "Wallet-based user authentication",
                        "On-chain and off-chain data synchronization"
                    ]
                },
                {
                    title: "Why Web3 Frontend Integration Matters",
                    description: "Poor frontend integration is one of the biggest barriers to Web3 adoption.",
                    list: [
                        "Improves user trust and confidence",
                        "Reduces transaction errors and drop-offs",
                        "Simplifies complex blockchain interactions",
                        "Enables mainstream user adoption"
                    ]
                },
                {
                    title: "Web3-Enabled Frontend Development",
                    description: "We build modern frontends that interact seamlessly with blockchain logic.",
                    list: [
                        "Smart contract read and write operations",
                        "Transaction lifecycle handling",
                        "On-chain state management",
                        "Event listening and real-time updates"
                    ]
                },
                {
                    title: "State Management & Error Handling",
                    description: "Reliable state handling is essential for Web3 applications.",
                    list: [
                        "Pending, success, and failure states",
                        "User-friendly error messages",
                        "Retry and recovery mechanisms",
                        "Graceful handling of network issues"
                    ]
                },
                {
                    title: "UX Optimization for Web3 Applications",
                    description: "We design Web3 UX that reduces friction and increases adoption.",
                    list: [
                        "Gas fee estimation and transparency",
                        "Clear transaction confirmations",
                        "Wallet connection and disconnection flows",
                        "Trust signals and security cues"
                    ]
                },
                {
                    title: "Performance & Scalability",
                    description: "We ensure Web3 frontends remain fast and responsive at scale.",
                    list: [
                        "Optimized blockchain data fetching",
                        "Caching and indexing strategies",
                        "Efficient rendering and updates",
                        "Scalable frontend architecture"
                    ]
                },
                {
                    title: "Security Best Practices",
                    description: "Frontend security is critical in decentralized applications.",
                    list: [
                        "Input validation and sanitization",
                        "Safe contract interaction patterns",
                        "Protection against phishing vectors",
                        "Secure handling of wallet interactions"
                    ]
                },
                {
                    title: "Testing & Quality Assurance",
                    description: "We test Web3 frontends across environments and scenarios.",
                    list: [
                        "Wallet interaction testing",
                        "Transaction flow validation",
                        "Cross-browser and device testing",
                        "Mainnet and testnet readiness checks"
                    ]
                },
                {
                    title: "Who Is Web3 Frontend Integration Best For?",
                    description: "Web3 frontend integration is ideal for:",
                    list: [
                        "Decentralized applications (dApps)",
                        "DeFi platforms",
                        "NFT marketplaces",
                        "DAO governance platforms",
                        "Web3 SaaS products"
                    ]
                },
                {
                    title: "Why Solario Tech for Web3 Frontend Integration?",
                    description: "Why businesses trust Solario Tech for Web3 frontend development:",
                    list: [
                        "Deep expertise in Web3 and modern frontend frameworks",
                        "User-centric Web3 UX design",
                        "Security-first integration approach",
                        "Scalable and maintainable frontend architecture",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Connect Your Frontend to Web3 with Confidence",
                description: "Whether you’re launching a new dApp or enhancing an existing platform, our Web3 frontend integration services help you deliver intuitive, secure, and high-performing blockchain experiences.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },


        {
            id: "Wallet Integration (MetaMask, WalletConnect)",
            hero: {
                title: "Secure, Reliable & User-Friendly Wallet Integration for Web3 Platforms",
                description: "Solario Tech integrates leading Web3 wallets to enable secure authentication, transaction signing, and asset management across decentralized applications.\nWith deep Web3 expertise, we help businesses deliver wallet experiences that are safe, intuitive, and trusted by users — without compromising security or usability.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What Is Wallet Integration?",
                    description: "Wallet integration connects user wallets to Web3 applications, enabling secure identity verification, transaction signing, and asset interaction without centralized accounts.",
                    list: [
                        "Wallet-based authentication",
                        "Non-custodial user identity",
                        "Secure transaction signing",
                        "On-chain asset access"
                    ]
                },
                {
                    title: "Supported Wallets & Standards",
                    description: "We integrate industry-standard wallets and protocols.",
                    list: [
                        "MetaMask browser and mobile wallets",
                        "WalletConnect for mobile and multi-wallet access",
                        "Multi-wallet compatibility and fallback handling",
                        "EVM and non-EVM wallet support where required"
                    ]
                },
                {
                    title: "Secure Authentication & Session Handling",
                    description: "Wallets act as decentralized identity providers.",
                    list: [
                        "Signature-based authentication",
                        "Nonce and replay-attack prevention",
                        "Session persistence without private key exposure",
                        "Logout and account-switch handling"
                    ]
                },
                {
                    title: "Transaction Signing & Lifecycle Management",
                    description: "We manage the full transaction flow for reliability and clarity.",
                    list: [
                        "Transaction creation and signing",
                        "Pending, success, and failure states",
                        "Gas estimation and confirmation prompts",
                        "Clear transaction status feedback"
                    ]
                },
                {
                    title: "Chain Switching & Multi-Network Support",
                    description: "Enable seamless interactions across multiple blockchains.",
                    list: [
                        "Automatic network detection",
                        "User-friendly chain switching",
                        "Multi-chain compatibility",
                        "Graceful handling of unsupported networks"
                    ]
                },
                {
                    title: "Security Best Practices",
                    description: "Wallet security is critical to user trust.",
                    list: [
                        "Safe transaction prompting",
                        "Clear permission and approval scopes",
                        "Protection against phishing and spoofing",
                        "Secure handling of wallet permissions"
                    ]
                },
                {
                    title: "UX Optimization for Wallet Interactions",
                    description: "We design wallet flows that reduce friction for users.",
                    list: [
                        "Clear onboarding and connection flows",
                        "Minimal signature requests",
                        "User-friendly error messages",
                        "Trust signals and confirmations"
                    ]
                },
                {
                    title: "Testing & Quality Assurance",
                    description: "We test wallet integrations across environments and scenarios.",
                    list: [
                        "Cross-wallet compatibility testing",
                        "Browser and device testing",
                        "Testnet and mainnet validation",
                        "Edge-case and failure scenario testing"
                    ]
                },
                {
                    title: "Who Is Wallet Integration Best For?",
                    description: "Wallet integration is ideal for:",
                    list: [
                        "Decentralized applications (dApps)",
                        "DeFi platforms",
                        "NFT marketplaces",
                        "DAO governance systems",
                        "Web3 SaaS platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for Wallet Integration?",
                    description: "Why businesses trust Solario Tech for Web3 wallet integrations:",
                    list: [
                        "Deep expertise in Web3 authentication flows",
                        "Security-first wallet integration approach",
                        "UX-focused design for mainstream adoption",
                        "Multi-chain and multi-wallet experience",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Enable Secure Wallet Access Across Your Platform",
                description: "Whether you’re launching a new dApp or enhancing an existing Web3 product, our wallet integration services help you deliver secure, seamless, and trusted wallet experiences.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },


        {
            id: "Token & NFT Development",
            hero: {
                title: "Build Secure, Scalable Tokens & NFT Ecosystems",
                description: "Solario Tech designs and deploys secure, scalable token and NFT solutions that power Web3 economies across DeFi, gaming, creator platforms, and enterprise blockchain use cases.\nWith deep expertise in token standards, smart contracts, and ecosystem design, we help businesses tokenize value responsibly and sustainably.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What Is Token & NFT Development?",
                    description: "Token and NFT development involves designing, implementing, and deploying digital assets on blockchain networks to represent value, ownership, access, or governance.",
                    list: [
                        "Fungible and non-fungible digital assets",
                        "On-chain ownership and transferability",
                        "Programmable economic logic",
                        "Transparent and verifiable asset behavior"
                    ]
                },
                {
                    title: "Why Tokenization Matters",
                    description: "Tokenization enables new economic models and ownership structures.",
                    list: [
                        "Decentralized value exchange",
                        "User-owned digital assets",
                        "Global and permissionless access",
                        "Programmable incentives and governance"
                    ]
                },
                {
                    title: "Token Development",
                    description: "We design and deploy secure, standards-compliant fungible tokens.",
                    list: [
                        "ERC-20, ERC-777, and SPL token development",
                        "Minting, burning, and supply control logic",
                        "Utility, governance, and incentive tokens",
                        "Upgradeable and modular token contracts"
                    ]
                },
                {
                    title: "Tokenomics Design & Economics",
                    description: "Strong tokenomics are critical for long-term sustainability.",
                    list: [
                        "Supply and distribution modeling",
                        "Vesting and lockup mechanisms",
                        "Incentive and reward structures",
                        "Alignment of users, builders, and stakeholders"
                    ]
                },
                {
                    title: "NFT Development",
                    description: "We build scalable and standards-compliant NFT solutions.",
                    list: [
                        "ERC-721 and ERC-1155 NFTs",
                        "Single and batch minting strategies",
                        "On-chain and off-chain metadata",
                        "Ownership, transfer, and lifecycle management"
                    ]
                },
                {
                    title: "Royalties, Metadata & Storage",
                    description: "Ensure long-term asset integrity and creator attribution.",
                    list: [
                        "Royalty enforcement mechanisms",
                        "IPFS and decentralized storage integration",
                        "Metadata immutability strategies",
                        "Upgradeable metadata where appropriate"
                    ]
                },
                {
                    title: "Marketplace & Platform Integration",
                    description: "We integrate tokens and NFTs into broader Web3 ecosystems.",
                    list: [
                        "NFT marketplace compatibility",
                        "Wallet and dApp integration",
                        "Trading, listing, and transfer flows",
                        "Interoperability across platforms"
                    ]
                },
                {
                    title: "Security & Compliance Best Practices",
                    description: "Digital assets require strong security and careful design.",
                    list: [
                        "Access control and permission management",
                        "Protection against common token exploits",
                        "Secure minting and distribution flows",
                        "Audit-ready smart contract design"
                    ]
                },
                {
                    title: "Testing, Auditing & Deployment",
                    description: "We ensure tokens and NFTs are production-ready.",
                    list: [
                        "Comprehensive unit and integration testing",
                        "Testnet validation",
                        "Pre-audit preparation and remediation",
                        "Mainnet deployment support"
                    ]
                },
                {
                    title: "Who Is Token & NFT Development Best For?",
                    description: "Token and NFT solutions are ideal for:",
                    list: [
                        "DeFi and governance platforms",
                        "NFT marketplaces and creator economies",
                        "Gaming and metaverse projects",
                        "DAO and community-driven platforms",
                        "Enterprises exploring asset tokenization"
                    ]
                },
                {
                    title: "Why Solario Tech for Token & NFT Development?",
                    description: "Why businesses trust Solario Tech with digital asset development:",
                    list: [
                        "Deep expertise in token standards and NFT protocols",
                        "Security-first smart contract engineering",
                        "Strong focus on sustainable tokenomics",
                        "Scalable and maintainable architectures",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing support and ecosystem evolution"
                    ]
                }
            ],
            cta: {
                title: "Tokenize Value with Confidence",
                description: "Whether you’re launching a token, NFT collection, or a full digital asset ecosystem, our token and NFT development services help you build securely, scale sustainably, and grow with confidence.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },


        {
            id: "Blockchain Security Audits",
            hero: {
                title: "Enterprise-Grade Blockchain Security Audits & Risk Mitigation",
                description: "Solario Tech provides comprehensive blockchain security audits designed to identify vulnerabilities, mitigate risks, and protect digital assets before and after launch.\nWith deep expertise in smart contract security and Web3 threat models, we help startups and enterprises safeguard users, funds, and platform integrity.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What Are Blockchain Security Audits?",
                    description: "Blockchain security audits involve a detailed review of smart contracts, protocols, and system architecture to identify vulnerabilities, logic flaws, and security risks before deployment.",
                    list: [
                        "Comprehensive smart contract code review",
                        "Protocol and system-level security analysis",
                        "Identification of attack vectors and exploits",
                        "Risk classification and mitigation planning"
                    ]
                },
                {
                    title: "Why Blockchain Security Matters",
                    description: "Security failures in Web3 systems can result in irreversible financial losses and reputational damage.",
                    list: [
                        "Smart contracts are immutable once deployed",
                        "Exploits can lead to permanent loss of funds",
                        "Public blockchains are constantly targeted",
                        "User trust depends on platform security"
                    ]
                },
                {
                    title: "Smart Contract Vulnerability Analysis",
                    description: "We analyze contracts for common and advanced vulnerability patterns.",
                    list: [
                        "Reentrancy and access control flaws",
                        "Arithmetic and logic errors",
                        "Unchecked external calls",
                        "Privilege escalation vulnerabilities"
                    ]
                },
                {
                    title: "Threat Modeling & Risk Assessment",
                    description: "We evaluate security risks across the entire Web3 system.",
                    list: [
                        "Attack surface identification",
                        "Threat modeling for DeFi, NFT, and DAO systems",
                        "Risk severity classification",
                        "Prioritized mitigation recommendations"
                    ]
                },
                {
                    title: "Audit Preparation & Code Hardening",
                    description: "We prepare your codebase for formal third-party audits.",
                    list: [
                        "Code refactoring and cleanup",
                        "Implementation of security best practices",
                        "Gas optimization without compromising security",
                        "Documentation for auditors"
                    ]
                },
                {
                    title: "Audit Remediation & Support",
                    description: "We assist teams in resolving audit findings efficiently.",
                    list: [
                        "Fixing reported vulnerabilities",
                        "Security pattern improvements",
                        "Re-testing and validation",
                        "Post-remediation verification"
                    ]
                },
                {
                    title: "Security Testing & Validation",
                    description: "We validate fixes and ensure systems behave securely.",
                    list: [
                        "Unit and integration security testing",
                        "Edge-case and failure scenario testing",
                        "Testnet validation",
                        "Mainnet readiness checks"
                    ]
                },
                {
                    title: "Ongoing Security & Monitoring",
                    description: "Security doesn’t end after deployment.",
                    list: [
                        "Post-deployment security reviews",
                        "Upgrade and migration risk assessment",
                        "Continuous threat evaluation",
                        "Security advisory and guidance"
                    ]
                },
                {
                    title: "Who Are Blockchain Security Audits Best For?",
                    description: "Blockchain security audits are essential for:",
                    list: [
                        "DeFi protocols handling user funds",
                        "NFT marketplaces and minting platforms",
                        "DAO and governance systems",
                        "Enterprise and institutional blockchain solutions",
                        "Projects preparing for public launch"
                    ]
                },
                {
                    title: "Why Solario Tech for Blockchain Security Audits?",
                    description: "Why teams trust Solario Tech to secure their Web3 platforms:",
                    list: [
                        "Deep expertise in smart contract security",
                        "Security-first blockchain engineering approach",
                        "Practical, actionable remediation guidance",
                        "Experience across DeFi, NFT, and DAO ecosystems",
                        "Startup-friendly and enterprise-ready engagement",
                        "Long-term security partnership"
                    ]
                }
            ],
            cta: {
                title: "Secure Your Web3 Platform with Confidence",
                description: "Whether you’re preparing for launch, undergoing an audit, or strengthening an existing system, our blockchain security audit services help you protect assets, users, and reputation.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },


    ],
    "artificial-intelligence": [
        {
            id: "Machine Learning",
            hero: {
                title: "Turn Data into Intelligence with Machine Learning Solutions",
                description: "Solario Tech helps businesses leverage Machine Learning to extract insights, automate decisions, and build intelligent products.\nWith 12+ years of engineering experience, we design scalable ML solutions that transform raw data into measurable business value.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Machine Learning?",
                    description: "Machine Learning (ML) enables systems to learn from data and improve performance without being explicitly programmed.",
                    list: [
                        "Data-driven decision making",
                        "Pattern recognition",
                        "Automated learning from data",
                        "Continuous improvement over time"
                    ]
                },
                {
                    title: "Why Machine Learning Matters",
                    description: "Machine Learning helps businesses gain a competitive edge through automation and intelligence.",
                    list: [
                        "Faster and smarter decisions",
                        "Reduced manual effort",
                        "Improved accuracy and efficiency",
                        "Scalable intelligence"
                    ]
                },
                {
                    title: "Custom Machine Learning Solutions",
                    description: "We build ML models tailored to your business use cases.",
                    list: [
                        "Classification and regression models",
                        "Anomaly and fraud detection",
                        "Customer behavior analysis",
                        "Demand forecasting"
                    ]
                },
                {
                    title: "Data Preparation & Feature Engineering",
                    description: "High-quality data is the foundation of effective ML models.",
                    list: [
                        "Data cleaning and normalization",
                        "Feature extraction and selection",
                        "Handling missing and noisy data",
                        "Data transformation pipelines"
                    ]
                },
                {
                    title: "Model Selection & Training",
                    description: "We choose the right algorithms for optimal performance.",
                    list: [
                        "Supervised and unsupervised learning",
                        "Model training and validation",
                        "Hyperparameter tuning",
                        "Accuracy and performance optimization"
                    ]
                },
                {
                    title: "ML Model Deployment & Integration",
                    description: "We integrate ML models seamlessly into your applications.",
                    list: [
                        "API-based model deployment",
                        "Real-time and batch predictions",
                        "Scalable production environments",
                        "Monitoring and performance tracking"
                    ]
                },
                {
                    title: "Scalability & Performance",
                    description: "Our ML solutions are designed to scale with your business.",
                    list: [
                        "Cloud-ready ML architectures",
                        "High-performance data processing",
                        "Optimized inference pipelines",
                        "Cost-efficient scaling strategies"
                    ]
                },
                {
                    title: "Security & Data Privacy",
                    description: "We ensure ML solutions follow strong security practices.",
                    list: [
                        "Secure data handling",
                        "Access control and compliance",
                        "Privacy-aware model design",
                        "Enterprise security standards"
                    ]
                },
                {
                    title: "Who Is Machine Learning Best For?",
                    description: "Machine Learning solutions are ideal for:",
                    list: [
                        "Data-driven businesses",
                        "SaaS and enterprise platforms",
                        "E-commerce and fintech products",
                        "Healthcare and analytics systems",
                        "Organizations seeking automation"
                    ]
                },
                {
                    title: "Why Solario Tech for Machine Learning?",
                    description: "Why businesses trust us for ML solutions:",
                    list: [
                        "12+ Years of Engineering & Data Experience",
                        "Custom, business-focused ML models",
                        "Scalable and production-ready solutions",
                        "Clear ROI-driven approach",
                        "Startup-friendly and enterprise-ready delivery",
                        "End-to-end ML lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Build Intelligent Systems with Machine Learning",
                description: "Whether you’re exploring ML or scaling existing models, our machine learning services help you unlock data-driven intelligence and business growth.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Deep Learning",
            hero: {
                title: "Build Advanced AI Systems with Deep Learning",
                description: "Solario Tech delivers powerful Deep Learning solutions that enable machines to understand complex patterns, images, speech, and language.\nWith 12+ years of engineering expertise, we design deep neural network models that power high-accuracy, scalable, and production-ready AI systems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Deep Learning?",
                    description: "Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers to learn complex patterns from large datasets.",
                    list: [
                        "Neural network-based learning",
                        "High accuracy for complex problems",
                        "Automatic feature extraction",
                        "Scales with large data volumes"
                    ]
                },
                {
                    title: "Why Deep Learning Matters",
                    description: "Deep Learning powers today’s most advanced AI applications.",
                    list: [
                        "Handles unstructured data effectively",
                        "Delivers superior accuracy",
                        "Enables automation at scale",
                        "Drives innovation in AI-driven products"
                    ]
                },
                {
                    title: "Custom Deep Learning Model Development",
                    description: "We design deep learning models tailored to your business needs.",
                    list: [
                        "Neural network architecture design",
                        "CNN, RNN, and Transformer models",
                        "Custom model pipelines",
                        "Use-case specific optimization"
                    ]
                },
                {
                    title: "Image, Speech & Text Processing",
                    description: "Deep learning excels at processing complex data types.",
                    list: [
                        "Image and video analysis",
                        "Speech recognition systems",
                        "Text and language understanding",
                        "Multi-modal AI solutions"
                    ]
                },
                {
                    title: "Model Training & Optimization",
                    description: "We ensure deep learning models are accurate and efficient.",
                    list: [
                        "Large-scale model training",
                        "Hyperparameter tuning",
                        "Model validation and testing",
                        "Performance optimization"
                    ]
                },
                {
                    title: "Scalable Deep Learning Infrastructure",
                    description: "We build deep learning systems ready for production scale.",
                    list: [
                        "GPU and cloud-based training",
                        "Distributed training pipelines",
                        "High-performance inference systems",
                        "Cost-efficient scaling strategies"
                    ]
                },
                {
                    title: "Deployment & Integration",
                    description: "We deploy deep learning models into real-world applications.",
                    list: [
                        "API-based model serving",
                        "Real-time and batch inference",
                        "Integration with web and mobile apps",
                        "Monitoring and model performance tracking"
                    ]
                },
                {
                    title: "Security & Data Governance",
                    description: "We follow best practices for secure deep learning systems.",
                    list: [
                        "Secure data pipelines",
                        "Access control and permissions",
                        "Compliance-aware model handling",
                        "Enterprise-grade security standards"
                    ]
                },
                {
                    title: "Who Is Deep Learning Best For?",
                    description: "Deep Learning solutions are ideal for:",
                    list: [
                        "AI-first products",
                        "Computer vision and NLP platforms",
                        "Healthcare and research systems",
                        "Large-scale data-driven applications",
                        "Enterprises adopting advanced AI"
                    ]
                },
                {
                    title: "Why Solario Tech for Deep Learning?",
                    description: "Why businesses trust us for deep learning solutions:",
                    list: [
                        "12+ Years of AI & Engineering Experience",
                        "Expertise in advanced neural networks",
                        "Production-ready and scalable models",
                        "Business-focused AI implementation",
                        "Startup-friendly and enterprise-ready delivery",
                        "End-to-end deep learning lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Unlock Advanced Intelligence with Deep Learning",
                description: "Whether you’re building cutting-edge AI products or enhancing existing systems, our deep learning services help you achieve higher accuracy, automation, and innovation.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "NLP Solutions",
            hero: {
                title: "Unlock Insights from Language with NLP Solutions",
                description: "Solario Tech delivers advanced Natural Language Processing (NLP) solutions that enable machines to understand, analyze, and generate human language.\nWith 12+ years of engineering experience, we build scalable NLP systems that power intelligent automation, insights, and conversational experiences.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are NLP Solutions?",
                    description: "Natural Language Processing (NLP) enables systems to process, understand, and generate human language in text and speech form.",
                    list: [
                        "Text and language understanding",
                        "Context-aware processing",
                        "Automation of language tasks",
                        "Human-like interactions"
                    ]
                },
                {
                    title: "Why NLP Matters for Businesses",
                    description: "NLP helps businesses automate communication and extract insights from large volumes of text.",
                    list: [
                        "Improved customer interactions",
                        "Automated text analysis",
                        "Faster information extraction",
                        "Reduced manual processing"
                    ]
                },
                {
                    title: "Text Analysis & Understanding",
                    description: "We build NLP systems that analyze and understand text data.",
                    list: [
                        "Text classification",
                        "Sentiment analysis",
                        "Keyword and topic extraction",
                        "Intent detection"
                    ]
                },
                {
                    title: "Language Processing & Transformation",
                    description: "We enable intelligent language transformation capabilities.",
                    list: [
                        "Text summarization",
                        "Language translation",
                        "Text normalization",
                        "Content structuring"
                    ]
                },
                {
                    title: "Conversational NLP Systems",
                    description: "Power intelligent conversational experiences using NLP.",
                    list: [
                        "Chat and virtual assistant NLP",
                        "Context-aware conversations",
                        "Intent and entity recognition",
                        "Multi-turn dialogue handling"
                    ]
                },
                {
                    title: "Custom NLP Model Development",
                    description: "We build NLP models tailored to your domain and use cases.",
                    list: [
                        "Domain-specific NLP models",
                        "Pre-trained model fine-tuning",
                        "Custom pipelines and workflows",
                        "High-accuracy model optimization"
                    ]
                },
                {
                    title: "NLP Model Deployment & Integration",
                    description: "We integrate NLP models into real-world applications.",
                    list: [
                        "API-based NLP services",
                        "Real-time and batch processing",
                        "Integration with web and mobile apps",
                        "Scalable production deployment"
                    ]
                },
                {
                    title: "Data Privacy & Security",
                    description: "We ensure NLP solutions handle sensitive text data securely.",
                    list: [
                        "Secure text data handling",
                        "Access control and encryption",
                        "Compliance-ready data processing",
                        "Privacy-aware model design"
                    ]
                },
                {
                    title: "Who Are NLP Solutions Best For?",
                    description: "NLP solutions are ideal for:",
                    list: [
                        "Customer support and chat systems",
                        "Content and media platforms",
                        "Fintech and legal text analysis",
                        "Healthcare documentation systems",
                        "Enterprises processing large text data"
                    ]
                },
                {
                    title: "Why Solario Tech for NLP Solutions?",
                    description: "Why businesses trust us for NLP development:",
                    list: [
                        "12+ Years of AI & Engineering Experience",
                        "Expertise in modern NLP techniques",
                        "Scalable and production-ready solutions",
                        "Domain-specific NLP customization",
                        "Startup-friendly and enterprise-ready delivery",
                        "End-to-end NLP lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Build Intelligent Language-Driven Solutions",
                description: "Whether you’re automating text analysis or building conversational platforms, our NLP solutions help you unlock value from language data.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Computer Vision",
            hero: {
                title: "Enable Machines to See, Analyze & Understand Visual Data",
                description: "Solario Tech builds advanced Computer Vision solutions that allow machines to interpret images and videos just like humans.\nWith 12+ years of engineering expertise, we deliver scalable and accurate vision-based systems that automate visual analysis and unlock powerful insights from visual data.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Computer Vision?",
                    description: "Computer Vision is a field of AI that enables machines to interpret, analyze, and make decisions based on visual inputs such as images and videos.",
                    list: [
                        "Image and video understanding",
                        "Automated visual analysis",
                        "Pattern and object recognition",
                        "Real-time visual processing"
                    ]
                },
                {
                    title: "Why Computer Vision Matters",
                    description: "Computer Vision automates visual tasks that are slow, costly, or error-prone for humans.",
                    list: [
                        "Reduces manual inspection effort",
                        "Improves accuracy and consistency",
                        "Enables real-time decision-making",
                        "Scales visual intelligence"
                    ]
                },
                {
                    title: "Image Recognition & Classification",
                    description: "We build systems that accurately identify and classify images.",
                    list: [
                        "Object and scene classification",
                        "Image tagging and categorization",
                        "Visual similarity detection",
                        "High-accuracy recognition models"
                    ]
                },
                {
                    title: "Object Detection & Tracking",
                    description: "Detect and track objects within images and videos.",
                    list: [
                        "Real-time object detection",
                        "Multi-object tracking",
                        "Bounding box and region detection",
                        "Video stream analysis"
                    ]
                },
                {
                    title: "Face Detection & Biometrics",
                    description: "Enable identity-aware and secure visual systems.",
                    list: [
                        "Face detection and recognition",
                        "Biometric verification",
                        "Access control systems",
                        "Privacy-aware implementations"
                    ]
                },
                {
                    title: "Video Analytics Solutions",
                    description: "Extract insights from live and recorded video streams.",
                    list: [
                        "Surveillance and monitoring",
                        "Activity and behavior analysis",
                        "Event detection",
                        "Real-time alerts"
                    ]
                },
                {
                    title: "Custom Computer Vision Models",
                    description: "We build vision models tailored to your industry and use case.",
                    list: [
                        "Industry-specific vision models",
                        "Custom dataset training",
                        "Model fine-tuning",
                        "High-performance optimization"
                    ]
                },
                {
                    title: "Deployment & Integration",
                    description: "We deploy computer vision models into production environments.",
                    list: [
                        "API-based vision services",
                        "Edge and cloud deployment",
                        "Real-time inference pipelines",
                        "Integration with apps and systems"
                    ]
                },
                {
                    title: "Security & Data Privacy",
                    description: "We ensure visual data is handled securely and responsibly.",
                    list: [
                        "Secure image and video storage",
                        "Access control and encryption",
                        "Compliance-ready processing",
                        "Ethical AI practices"
                    ]
                },
                {
                    title: "Who Is Computer Vision Best For?",
                    description: "Computer Vision solutions are ideal for:",
                    list: [
                        "Retail and e-commerce platforms",
                        "Healthcare and medical imaging",
                        "Manufacturing and quality inspection",
                        "Security and surveillance systems",
                        "Smart city and IoT applications"
                    ]
                },
                {
                    title: "Why Solario Tech for Computer Vision?",
                    description: "Why businesses trust us for vision-based solutions:",
                    list: [
                        "12+ Years of AI & Engineering Experience",
                        "Expertise in image and video processing",
                        "Scalable and production-ready models",
                        "Business-focused AI solutions",
                        "Startup-friendly and enterprise-ready delivery",
                        "End-to-end computer vision lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Build Intelligent Vision-Powered Systems",
                description: "Whether you’re automating inspections or building vision-driven products, our computer vision services help you transform visual data into actionable intelligence.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Predictive Analytics",
            hero: {
                title: "Forecast Trends & Make Smarter Decisions with Predictive Analytics",
                description: "Solario Tech helps businesses use Predictive Analytics to anticipate trends, reduce risks, and make data-driven decisions.\nWith 12+ years of engineering and analytics experience, we build predictive models that turn historical data into accurate forecasts and actionable insights.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Predictive Analytics?",
                    description: "Predictive Analytics uses historical data, statistical techniques, and machine learning models to predict future outcomes.",
                    list: [
                        "Future trend forecasting",
                        "Data-driven predictions",
                        "Risk and opportunity identification",
                        "Proactive decision-making"
                    ]
                },
                {
                    title: "Why Predictive Analytics Matters",
                    description: "Predictive insights help businesses move from reactive to proactive strategies.",
                    list: [
                        "Improved planning and forecasting",
                        "Reduced business risks",
                        "Optimized operations",
                        "Better customer insights"
                    ]
                },
                {
                    title: "Business Forecasting Models",
                    description: "We build forecasting models tailored to your business needs.",
                    list: [
                        "Sales and revenue forecasting",
                        "Demand and supply prediction",
                        "Market trend analysis",
                        "Capacity and resource planning"
                    ]
                },
                {
                    title: "Customer Behavior Prediction",
                    description: "Understand and anticipate customer actions using predictive models.",
                    list: [
                        "Customer churn prediction",
                        "Lifetime value estimation",
                        "Purchase behavior forecasting",
                        "Personalized engagement strategies"
                    ]
                },
                {
                    title: "Risk & Anomaly Detection",
                    description: "Identify risks before they impact your business.",
                    list: [
                        "Fraud and anomaly detection",
                        "Operational risk analysis",
                        "Failure and downtime prediction",
                        "Early warning systems"
                    ]
                },
                {
                    title: "Predictive Models & Algorithms",
                    description: "We select and tune the right models for accuracy and reliability.",
                    list: [
                        "Regression and classification models",
                        "Time-series forecasting",
                        "Machine learning-based predictors",
                        "Model validation and tuning"
                    ]
                },
                {
                    title: "Data Integration & Preparation",
                    description: "Accurate predictions start with clean and structured data.",
                    list: [
                        "Data collection and integration",
                        "Data cleaning and transformation",
                        "Feature engineering",
                        "Data quality assurance"
                    ]
                },
                {
                    title: "Deployment & Real-Time Predictions",
                    description: "We integrate predictive analytics into live systems.",
                    list: [
                        "API-based prediction services",
                        "Real-time and batch predictions",
                        "Dashboard and reporting integration",
                        "Scalable production deployment"
                    ]
                },
                {
                    title: "Security & Data Governance",
                    description: "We ensure predictive systems follow strict security standards.",
                    list: [
                        "Secure data pipelines",
                        "Access control and encryption",
                        "Compliance-ready analytics",
                        "Responsible data usage"
                    ]
                },
                {
                    title: "Who Is Predictive Analytics Best For?",
                    description: "Predictive analytics is ideal for:",
                    list: [
                        "Retail and e-commerce businesses",
                        "Finance and risk management teams",
                        "SaaS and subscription platforms",
                        "Operations and supply chain management",
                        "Data-driven enterprises"
                    ]
                },
                {
                    title: "Why Solario Tech for Predictive Analytics?",
                    description: "Why businesses trust us for predictive solutions:",
                    list: [
                        "12+ Years of Data & Engineering Experience",
                        "Accurate and business-focused predictions",
                        "Scalable and production-ready models",
                        "Clear ROI-driven analytics",
                        "Startup-friendly and enterprise-ready solutions",
                        "End-to-end analytics lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Predict the Future with Confidence",
                description: "Whether you want to forecast trends or reduce risks, our predictive analytics services help you make smarter, faster, and more confident business decisions.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Chatbots",
            hero: {
                title: "Build Intelligent Chatbots for Smarter Conversations",
                description: "Solario Tech designs and develops AI-powered chatbots that automate conversations, improve customer engagement, and reduce operational costs.\nWith 12+ years of engineering experience, we build secure, scalable, and intelligent chatbot solutions tailored to your business needs.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are Chatbots?",
                    description: "Chatbots are AI-driven conversational systems that interact with users through text or voice to provide information, support, and automation.",
                    list: [
                        "Automated customer interactions",
                        "24/7 availability",
                        "Instant responses",
                        "Reduced manual support effort"
                    ]
                },
                {
                    title: "Why Businesses Use Chatbots",
                    description: "Chatbots improve efficiency and customer satisfaction at scale.",
                    list: [
                        "Faster customer support",
                        "Lower operational costs",
                        "Improved user engagement",
                        "Consistent responses"
                    ]
                },
                {
                    title: "AI-Powered Conversational Chatbots",
                    description: "We build intelligent chatbots using modern AI and NLP techniques.",
                    list: [
                        "Context-aware conversations",
                        "Intent and entity recognition",
                        "Multi-turn dialogue handling",
                        "Human-like interactions"
                    ]
                },
                {
                    title: "Customer Support Chatbots",
                    description: "Automate support workflows and FAQs with smart chatbots.",
                    list: [
                        "FAQ and helpdesk bots",
                        "Ticket creation and tracking",
                        "Order and account status queries",
                        "Issue triaging"
                    ]
                },
                {
                    title: "Sales & Lead Generation Chatbots",
                    description: "Convert visitors into leads with conversational experiences.",
                    list: [
                        "Lead qualification",
                        "Product recommendations",
                        "Appointment scheduling",
                        "Sales funnel automation"
                    ]
                },
                {
                    title: "Multi-Platform Chatbot Integration",
                    description: "Deploy chatbots across multiple channels seamlessly.",
                    list: [
                        "Website and web apps",
                        "Mobile applications",
                        "WhatsApp, Slack, and messaging platforms",
                        "API-based integrations"
                    ]
                },
                {
                    title: "Custom Chatbot Logic & Workflows",
                    description: "We tailor chatbot behavior to your business processes.",
                    list: [
                        "Custom conversation flows",
                        "Backend and CRM integration",
                        "Dynamic responses",
                        "Rule-based and AI-hybrid bots"
                    ]
                },
                {
                    title: "Analytics & Continuous Improvement",
                    description: "We monitor and improve chatbot performance over time.",
                    list: [
                        "Conversation analytics",
                        "User behavior insights",
                        "Bot performance optimization",
                        "Continuous learning and tuning"
                    ]
                },
                {
                    title: "Security & Data Privacy",
                    description: "Chatbots are built with security and compliance in mind.",
                    list: [
                        "Secure data handling",
                        "User data privacy",
                        "Access control",
                        "Compliance-ready implementations"
                    ]
                },
                {
                    title: "Who Are Chatbots Best For?",
                    description: "Chatbot solutions are ideal for:",
                    list: [
                        "Customer support teams",
                        "E-commerce and SaaS platforms",
                        "Sales and marketing teams",
                        "Enterprises handling high user queries",
                        "Service-based businesses"
                    ]
                },
                {
                    title: "Why Solario Tech for Chatbots?",
                    description: "Why businesses trust us for chatbot development:",
                    list: [
                        "12+ Years of AI & Software Experience",
                        "Expertise in NLP-driven conversations",
                        "Scalable and production-ready chatbots",
                        "Business-focused chatbot strategies",
                        "Startup-friendly and enterprise-ready solutions",
                        "End-to-end chatbot lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Automate Conversations with Intelligent Chatbots",
                description: "Whether you’re improving customer support or boosting sales, our chatbot solutions help you deliver fast, smart, and engaging conversational experiences.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Recommendation Systems",
            hero: {
                title: "Deliver Personalized Experiences with Recommendation Systems",
                description: "Solario Tech builds intelligent Recommendation Systems that analyze user behavior and data to deliver personalized content, products, and experiences.\nWith 12+ years of engineering and AI expertise, we design scalable recommendation engines that boost engagement, conversions, and customer satisfaction.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are Recommendation Systems?",
                    description: "Recommendation systems are AI-driven solutions that suggest relevant items, content, or actions to users based on data and behavior patterns.",
                    list: [
                        "Personalized user experiences",
                        "Data-driven suggestions",
                        "Improved engagement and retention",
                        "Automated content discovery"
                    ]
                },
                {
                    title: "Why Recommendation Systems Matter",
                    description: "Personalization is key to modern digital success.",
                    list: [
                        "Higher user engagement",
                        "Increased conversion rates",
                        "Improved customer satisfaction",
                        "Better content and product discovery"
                    ]
                },
                {
                    title: "Types of Recommendation Systems",
                    description: "We build different recommendation models based on your use case.",
                    list: [
                        "Collaborative filtering",
                        "Content-based recommendations",
                        "Hybrid recommendation systems",
                        "Popularity and trend-based models"
                    ]
                },
                {
                    title: "User Behavior & Data Analysis",
                    description: "Accurate recommendations start with understanding user behavior.",
                    list: [
                        "Click and interaction tracking",
                        "Purchase and usage analysis",
                        "User preference modeling",
                        "Behavioral pattern detection"
                    ]
                },
                {
                    title: "Personalized Content & Product Recommendations",
                    description: "We tailor recommendations to individual users.",
                    list: [
                        "Product and service recommendations",
                        "Content and media suggestions",
                        "Personalized dashboards",
                        "Dynamic user feeds"
                    ]
                },
                {
                    title: "Real-Time Recommendation Engines",
                    description: "Deliver recommendations instantly as users interact with your platform.",
                    list: [
                        "Real-time data processing",
                        "Low-latency recommendation delivery",
                        "Context-aware suggestions",
                        "Scalable inference pipelines"
                    ]
                },
                {
                    title: "Recommendation Model Training & Optimization",
                    description: "We continuously improve recommendation accuracy.",
                    list: [
                        "Model training and evaluation",
                        "A/B testing of recommendations",
                        "Cold-start problem handling",
                        "Performance and accuracy tuning"
                    ]
                },
                {
                    title: "Deployment & System Integration",
                    description: "We integrate recommendation engines seamlessly into your systems.",
                    list: [
                        "API-based recommendation services",
                        "Integration with web and mobile apps",
                        "Cloud-ready deployment",
                        "Scalable and reliable architecture"
                    ]
                },
                {
                    title: "Security & Data Privacy",
                    description: "User data is handled securely and responsibly.",
                    list: [
                        "Secure data storage and access",
                        "Privacy-aware personalization",
                        "Compliance-ready implementations",
                        "Ethical AI practices"
                    ]
                },
                {
                    title: "Who Are Recommendation Systems Best For?",
                    description: "Recommendation systems are ideal for:",
                    list: [
                        "E-commerce platforms",
                        "Media and content streaming services",
                        "SaaS and subscription products",
                        "EdTech and learning platforms",
                        "Marketplaces and aggregators"
                    ]
                },
                {
                    title: "Why Solario Tech for Recommendation Systems?",
                    description: "Why businesses trust us for personalization solutions:",
                    list: [
                        "12+ Years of AI & Data Engineering Experience",
                        "Custom, business-focused recommendation models",
                        "Scalable and production-ready systems",
                        "Data-driven personalization strategies",
                        "Startup-friendly and enterprise-ready delivery",
                        "End-to-end recommendation lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Personalize User Experiences at Scale",
                description: "Whether you want to boost engagement or increase conversions, our recommendation systems help you deliver the right content to the right users at the right time.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "AI Model Training",
            hero: {
                title: "Train, Optimize & Deploy High-Performance AI Models",
                description: "Solario Tech provides end-to-end AI Model Training services to help businesses build accurate, reliable, and production-ready AI systems.\nWith 12+ years of engineering and AI expertise, we manage the complete model training lifecycle — from data preparation to deployment — ensuring real-world performance and scalability.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is AI Model Training?",
                    description: "AI model training is the process of teaching algorithms to learn patterns from data so they can make predictions, decisions, or classifications.",
                    list: [
                        "Learning from structured and unstructured data",
                        "Pattern recognition and generalization",
                        "Continuous performance improvement",
                        "Data-driven intelligence"
                    ]
                },
                {
                    title: "Why AI Model Training Matters",
                    description: "Well-trained models are the foundation of reliable and accurate AI systems.",
                    list: [
                        "Higher prediction accuracy",
                        "Reduced errors and bias",
                        "Improved real-world performance",
                        "Trustworthy AI-driven decisions"
                    ]
                },
                {
                    title: "Data Collection & Preparation",
                    description: "High-quality data is critical for effective model training.",
                    list: [
                        "Data collection and aggregation",
                        "Data cleaning and normalization",
                        "Handling missing and noisy data",
                        "Feature engineering and selection"
                    ]
                },
                {
                    title: "Model Selection & Architecture Design",
                    description: "We choose and design the right model for your use case.",
                    list: [
                        "Machine learning and deep learning models",
                        "Algorithm and architecture selection",
                        "Custom model design",
                        "Use-case specific optimization"
                    ]
                },
                {
                    title: "Model Training & Validation",
                    description: "We train models using best practices to ensure accuracy and stability.",
                    list: [
                        "Supervised and unsupervised training",
                        "Cross-validation techniques",
                        "Hyperparameter tuning",
                        "Accuracy and performance evaluation"
                    ]
                },
                {
                    title: "Bias Detection & Model Fairness",
                    description: "We ensure responsible and ethical AI model training.",
                    list: [
                        "Bias identification and mitigation",
                        "Fairness and transparency checks",
                        "Balanced dataset strategies",
                        "Responsible AI practices"
                    ]
                },
                {
                    title: "Model Optimization & Fine-Tuning",
                    description: "We refine models for efficiency and real-world usage.",
                    list: [
                        "Performance and accuracy tuning",
                        "Model compression and optimization",
                        "Inference speed improvement",
                        "Cost-efficient model execution"
                    ]
                },
                {
                    title: "Deployment & Production Readiness",
                    description: "We prepare AI models for real-world deployment.",
                    list: [
                        "API-based model serving",
                        "Cloud and on-premise deployment",
                        "Scalable inference pipelines",
                        "Monitoring and performance tracking"
                    ]
                },
                {
                    title: "Monitoring, Retraining & Maintenance",
                    description: "AI models require continuous improvement after deployment.",
                    list: [
                        "Model performance monitoring",
                        "Data drift detection",
                        "Periodic retraining",
                        "Ongoing optimization and updates"
                    ]
                },
                {
                    title: "Who Is AI Model Training Best For?",
                    description: "AI model training services are ideal for:",
                    list: [
                        "AI-powered products and platforms",
                        "Enterprises adopting AI and automation",
                        "Startups building data-driven solutions",
                        "Organizations with large datasets",
                        "Businesses seeking custom AI models"
                    ]
                },
                {
                    title: "Why Solario Tech for AI Model Training?",
                    description: "Why businesses trust us for AI model training:",
                    list: [
                        "12+ Years of AI & Engineering Experience",
                        "End-to-end AI model lifecycle expertise",
                        "High-accuracy, production-ready models",
                        "Responsible and ethical AI practices",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Build Reliable AI with Expert Model Training",
                description: "Whether you’re training your first AI model or optimizing an existing one, our AI model training services help you achieve accuracy, scalability, and long-term success.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "automation": [
        {
            id: "RPA Solutions",
            hero: {
                title: "Accelerate Operations with Intelligent RPA Solutions",
                description: "Solario Tech delivers Robotic Process Automation (RPA) solutions that automate repetitive, rule-based tasks across systems, improving speed, accuracy, and efficiency.\nWith 12+ years of engineering experience, we build secure, scalable RPA solutions that reduce operational costs and free teams to focus on high‑value work.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are RPA Solutions?",
                    description: "RPA solutions use software bots to mimic human actions and automate repetitive business processes across applications and systems.",
                    list: [
                        "Automates repetitive, rule-based tasks",
                        "Works across multiple systems",
                        "Reduces manual errors",
                        "Improves speed and consistency"
                    ]
                },
                {
                    title: "Why RPA Matters for Businesses",
                    description: "RPA helps organizations increase efficiency without changing existing systems.",
                    list: [
                        "Lower operational costs",
                        "Faster process execution",
                        "Improved accuracy and compliance",
                        "Higher employee productivity"
                    ]
                },
                {
                    title: "Business Process Automation with RPA",
                    description: "We automate end-to-end business processes using RPA.",
                    list: [
                        "Invoice and billing processing",
                        "Data entry and validation",
                        "Customer onboarding tasks",
                        "Back-office operations"
                    ]
                },
                {
                    title: "RPA for Legacy Systems",
                    description: "RPA enables automation even where APIs are unavailable.",
                    list: [
                        "Legacy application automation",
                        "UI-based system interactions",
                        "Minimal system changes required",
                        "Quick automation deployment"
                    ]
                },
                {
                    title: "Intelligent RPA with AI",
                    description: "Combine RPA with AI for smarter automation.",
                    list: [
                        "AI-powered decision handling",
                        "Document and text processing",
                        "Exception handling with ML",
                        "Adaptive automation workflows"
                    ]
                },
                {
                    title: "RPA Bot Development & Orchestration",
                    description: "We design, deploy, and manage RPA bots.",
                    list: [
                        "Custom bot development",
                        "Bot scheduling and orchestration",
                        "Centralized monitoring",
                        "Scalable bot management"
                    ]
                },
                {
                    title: "Security & Compliance",
                    description: "RPA implementations follow enterprise security standards.",
                    list: [
                        "Role-based access control",
                        "Secure credentials management",
                        "Audit trails and logs",
                        "Compliance-ready automation"
                    ]
                },
                {
                    title: "Monitoring & Optimization",
                    description: "We continuously monitor and optimize RPA performance.",
                    list: [
                        "Bot performance monitoring",
                        "Error detection and recovery",
                        "Process optimization",
                        "Scalability planning"
                    ]
                },
                {
                    title: "Who Are RPA Solutions Best For?",
                    description: "RPA solutions are ideal for:",
                    list: [
                        "Finance and accounting teams",
                        "HR and payroll operations",
                        "Customer support processes",
                        "Enterprises with repetitive workflows",
                        "Organizations scaling operations"
                    ]
                },
                {
                    title: "Why Solario Tech for RPA Solutions?",
                    description: "Why businesses trust us for RPA:",
                    list: [
                        "12+ Years of Automation & Engineering Experience",
                        "Business-focused RPA strategies",
                        "Secure and scalable bot architectures",
                        "Fast ROI-driven implementations",
                        "Startup-friendly and enterprise-ready delivery",
                        "End-to-end RPA lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Automate Smarter with RPA",
                description: "Whether you want to eliminate manual work or scale operations efficiently, our RPA solutions help you automate faster, smarter, and more reliably.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "RPA Solutions",
            hero: {
                title: "Accelerate Operations with Intelligent RPA Solutions",
                description: "Solario Tech delivers Robotic Process Automation (RPA) solutions that automate repetitive, rule-based tasks across systems, improving speed, accuracy, and efficiency.\nWith 12+ years of engineering experience, we build secure, scalable RPA solutions that reduce operational costs and free teams to focus on high‑value work.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are RPA Solutions?",
                    description: "RPA solutions use software bots to mimic human actions and automate repetitive business processes across applications and systems.",
                    list: [
                        "Automates repetitive, rule-based tasks",
                        "Works across multiple systems",
                        "Reduces manual errors",
                        "Improves speed and consistency"
                    ]
                },
                {
                    title: "Why RPA Matters for Businesses",
                    description: "RPA helps organizations increase efficiency without changing existing systems.",
                    list: [
                        "Lower operational costs",
                        "Faster process execution",
                        "Improved accuracy and compliance",
                        "Higher employee productivity"
                    ]
                },
                {
                    title: "Business Process Automation with RPA",
                    description: "We automate end-to-end business processes using RPA.",
                    list: [
                        "Invoice and billing processing",
                        "Data entry and validation",
                        "Customer onboarding tasks",
                        "Back-office operations"
                    ]
                },
                {
                    title: "RPA for Legacy Systems",
                    description: "RPA enables automation even where APIs are unavailable.",
                    list: [
                        "Legacy application automation",
                        "UI-based system interactions",
                        "Minimal system changes required",
                        "Quick automation deployment"
                    ]
                },
                {
                    title: "Intelligent RPA with AI",
                    description: "Combine RPA with AI for smarter automation.",
                    list: [
                        "AI-powered decision handling",
                        "Document and text processing",
                        "Exception handling with ML",
                        "Adaptive automation workflows"
                    ]
                },
                {
                    title: "RPA Bot Development & Orchestration",
                    description: "We design, deploy, and manage RPA bots.",
                    list: [
                        "Custom bot development",
                        "Bot scheduling and orchestration",
                        "Centralized monitoring",
                        "Scalable bot management"
                    ]
                },
                {
                    title: "Security & Compliance",
                    description: "RPA implementations follow enterprise security standards.",
                    list: [
                        "Role-based access control",
                        "Secure credentials management",
                        "Audit trails and logs",
                        "Compliance-ready automation"
                    ]
                },
                {
                    title: "Monitoring & Optimization",
                    description: "We continuously monitor and optimize RPA performance.",
                    list: [
                        "Bot performance monitoring",
                        "Error detection and recovery",
                        "Process optimization",
                        "Scalability planning"
                    ]
                },
                {
                    title: "Who Are RPA Solutions Best For?",
                    description: "RPA solutions are ideal for:",
                    list: [
                        "Finance and accounting teams",
                        "HR and payroll operations",
                        "Customer support processes",
                        "Enterprises with repetitive workflows",
                        "Organizations scaling operations"
                    ]
                },
                {
                    title: "Why Solario Tech for RPA Solutions?",
                    description: "Why businesses trust us for RPA:",
                    list: [
                        "12+ Years of Automation & Engineering Experience",
                        "Business-focused RPA strategies",
                        "Secure and scalable bot architectures",
                        "Fast ROI-driven implementations",
                        "Startup-friendly and enterprise-ready delivery",
                        "End-to-end RPA lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Automate Smarter with RPA",
                description: "Whether you want to eliminate manual work or scale operations efficiently, our RPA solutions help you automate faster, smarter, and more reliably.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Process Optimization",
            hero: {
                title: "Optimize Business Processes for Maximum Efficiency",
                description: "Solario Tech helps organizations analyze, refine, and optimize business processes to reduce inefficiencies, cut costs, and improve performance.\nWith 12+ years of engineering and consulting experience, we identify bottlenecks and redesign processes for speed, scalability, and long-term success.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Process Optimization?",
                    description: "Process optimization focuses on improving existing workflows and operations to achieve better efficiency, quality, and outcomes.",
                    list: [
                        "Elimination of bottlenecks",
                        "Improved process efficiency",
                        "Reduced operational costs",
                        "Consistent and predictable outcomes"
                    ]
                },
                {
                    title: "Why Process Optimization Matters",
                    description: "Unoptimized processes waste time, money, and resources.",
                    list: [
                        "Higher productivity",
                        "Lower operational risk",
                        "Improved customer satisfaction",
                        "Scalable business operations"
                    ]
                },
                {
                    title: "Process Analysis & Assessment",
                    description: "We analyze current workflows to identify inefficiencies.",
                    list: [
                        "Process mapping and documentation",
                        "Bottleneck and gap analysis",
                        "Performance metric evaluation",
                        "Root cause identification"
                    ]
                },
                {
                    title: "Workflow Redesign & Improvement",
                    description: "We redesign processes for better flow and efficiency.",
                    list: [
                        "Streamlined task sequences",
                        "Reduced manual handoffs",
                        "Simplified approvals",
                        "Optimized resource utilization"
                    ]
                },
                {
                    title: "Automation-Ready Process Design",
                    description: "Optimized processes are prepared for automation.",
                    list: [
                        "Automation-friendly workflows",
                        "Standardized process steps",
                        "Clear decision points",
                        "Reduced process complexity"
                    ]
                },
                {
                    title: "Performance Metrics & KPIs",
                    description: "We define and track metrics to measure success.",
                    list: [
                        "Process efficiency KPIs",
                        "Cycle time and throughput",
                        "Error and rework rates",
                        "Continuous improvement metrics"
                    ]
                },
                {
                    title: "Continuous Improvement Strategy",
                    description: "Optimization is an ongoing effort, not a one-time task.",
                    list: [
                        "Feedback-driven improvements",
                        "Regular performance reviews",
                        "Incremental optimization",
                        "Long-term scalability planning"
                    ]
                },
                {
                    title: "Security & Compliance Alignment",
                    description: "Optimized processes remain secure and compliant.",
                    list: [
                        "Compliance-aligned workflows",
                        "Audit-ready processes",
                        "Secure data handling",
                        "Risk mitigation"
                    ]
                },
                {
                    title: "Who Is Process Optimization Best For?",
                    description: "Process optimization is ideal for:",
                    list: [
                        "Enterprises improving efficiency",
                        "Growing organizations",
                        "Operations and delivery teams",
                        "Process-heavy businesses",
                        "Companies preparing for automation"
                    ]
                },
                {
                    title: "Why Solario Tech for Process Optimization?",
                    description: "Why businesses trust us for optimization:",
                    list: [
                        "12+ Years of Process & Engineering Experience",
                        "Business-focused optimization approach",
                        "Measurable performance improvements",
                        "Automation-ready process design",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing optimization support"
                    ]
                }
            ],
            cta: {
                title: "Optimize Processes, Unlock Growth",
                description: "Whether you’re improving efficiency or preparing for automation, our process optimization services help you work smarter and scale faster.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Integration APIs",
            hero: {
                title: "Connect Systems Seamlessly with Robust Integration APIs",
                description: "Solario Tech designs and implements secure, scalable Integration APIs that enable smooth communication between applications, services, and platforms.\nWith 12+ years of engineering experience, we help businesses eliminate data silos and build connected ecosystems using reliable, high‑performance APIs.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are Integration APIs?",
                    description: "Integration APIs act as bridges that allow different software systems to communicate and exchange data securely and efficiently.",
                    list: [
                        "System-to-system communication",
                        "Real-time and asynchronous data exchange",
                        "Standardized integration interfaces",
                        "Loose coupling between systems"
                    ]
                },
                {
                    title: "Why Integration APIs Matter",
                    description: "APIs are the backbone of modern, connected software architectures.",
                    list: [
                        "Eliminates data silos",
                        "Improves system interoperability",
                        "Enables scalability and flexibility",
                        "Accelerates feature development"
                    ]
                },
                {
                    title: "Custom API Development",
                    description: "We build APIs tailored to your business and technical needs.",
                    list: [
                        "REST and GraphQL APIs",
                        "Domain-driven API design",
                        "High-performance endpoints",
                        "Clear documentation and standards"
                    ]
                },
                {
                    title: "Enterprise & Third-Party Integrations",
                    description: "Connect internal systems with external platforms.",
                    list: [
                        "ERP and CRM integrations",
                        "Payment gateways",
                        "Cloud and SaaS platforms",
                        "Partner and vendor systems"
                    ]
                },
                {
                    title: "Data Synchronization & Orchestration",
                    description: "Ensure consistent data flow across systems.",
                    list: [
                        "Real-time data synchronization",
                        "Event-driven integrations",
                        "Batch processing APIs",
                        "Reliable message handling"
                    ]
                },
                {
                    title: "API Security & Access Control",
                    description: "APIs are built with strong security practices.",
                    list: [
                        "Authentication and authorization",
                        "Token-based access (OAuth, JWT)",
                        "Rate limiting and throttling",
                        "Secure data transmission"
                    ]
                },
                {
                    title: "Scalability & Performance",
                    description: "Our APIs are designed to scale with your business.",
                    list: [
                        "High-throughput API design",
                        "Load balancing and caching",
                        "Low-latency responses",
                        "Cloud-ready architectures"
                    ]
                },
                {
                    title: "Monitoring & Maintenance",
                    description: "APIs are monitored and maintained for reliability.",
                    list: [
                        "API performance monitoring",
                        "Error tracking and logging",
                        "Versioning and backward compatibility",
                        "Continuous improvements"
                    ]
                },
                {
                    title: "Who Are Integration APIs Best For?",
                    description: "Integration APIs are ideal for:",
                    list: [
                        "Enterprises with multiple systems",
                        "SaaS and platform-based products",
                        "Businesses adopting microservices",
                        "Organizations modernizing legacy systems",
                        "Data-driven applications"
                    ]
                },
                {
                    title: "Why Solario Tech for Integration APIs?",
                    description: "Why businesses trust us for API integrations:",
                    list: [
                        "12+ Years of Integration & Backend Experience",
                        "Secure and scalable API design",
                        "Expertise in enterprise and cloud integrations",
                        "Performance-focused implementations",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing API support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Build Connected Systems with Powerful APIs",
                description: "Whether you’re integrating platforms or building API-first products, our integration API services help you connect systems reliably and scale with confidence.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Scheduled Tasks",
            hero: {
                title: "Automate Recurring Operations with Scheduled Tasks",
                description: "Solario Tech builds reliable Scheduled Task solutions that automate recurring jobs, background processes, and time‑based operations.\nWith 12+ years of engineering experience, we ensure critical tasks run on time, every time—without manual intervention.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are Scheduled Tasks?",
                    description: "Scheduled tasks are automated jobs that run at predefined times or intervals to perform specific operations.",
                    list: [
                        "Time-based and event-based execution",
                        "Automated background processing",
                        "No manual intervention required",
                        "Reliable and repeatable operations"
                    ]
                },
                {
                    title: "Why Scheduled Tasks Matter",
                    description: "Recurring manual work increases errors and operational overhead.",
                    list: [
                        "Ensures consistency and accuracy",
                        "Reduces manual workload",
                        "Improves system reliability",
                        "Supports 24/7 operations"
                    ]
                },
                {
                    title: "Background Job Automation",
                    description: "We design background jobs for critical business operations.",
                    list: [
                        "Data synchronization jobs",
                        "Cleanup and maintenance tasks",
                        "Notification and alert triggers",
                        "Batch processing workflows"
                    ]
                },
                {
                    title: "Time-Based & Interval Scheduling",
                    description: "Tasks are scheduled based on precise timing needs.",
                    list: [
                        "Daily, weekly, and monthly jobs",
                        "Cron-based scheduling",
                        "Fixed-interval executions",
                        "Time-zone aware scheduling"
                    ]
                },
                {
                    title: "Event-Driven Task Execution",
                    description: "Run tasks automatically when specific events occur.",
                    list: [
                        "Trigger-based job execution",
                        "System and application events",
                        "Workflow-driven scheduling",
                        "Conditional task execution"
                    ]
                },
                {
                    title: "Error Handling & Retry Logic",
                    description: "Scheduled tasks are built to handle failures gracefully.",
                    list: [
                        "Automatic retries",
                        "Failure notifications",
                        "Graceful error handling",
                        "Task recovery mechanisms"
                    ]
                },
                {
                    title: "Scalability & Performance",
                    description: "Tasks are designed to scale with system growth.",
                    list: [
                        "Parallel task execution",
                        "Resource-efficient processing",
                        "High-performance job handling",
                        "Cloud and on‑premise support"
                    ]
                },
                {
                    title: "Monitoring & Logging",
                    description: "Full visibility into scheduled task execution.",
                    list: [
                        "Execution logs",
                        "Success and failure tracking",
                        "Performance monitoring",
                        "Audit trails"
                    ]
                },
                {
                    title: "Security & Access Control",
                    description: "Scheduled tasks follow enterprise security practices.",
                    list: [
                        "Secure execution contexts",
                        "Role-based access",
                        "Credential and secret management",
                        "Compliance-ready execution"
                    ]
                },
                {
                    title: "Who Are Scheduled Tasks Best For?",
                    description: "Scheduled task automation is ideal for:",
                    list: [
                        "Data-driven applications",
                        "Enterprise backend systems",
                        "Maintenance and monitoring jobs",
                        "Reporting and batch processing",
                        "Businesses running recurring operations"
                    ]
                },
                {
                    title: "Why Solario Tech for Scheduled Tasks?",
                    description: "Why clients trust us for task automation:",
                    list: [
                        "12+ Years of Backend & Automation Experience",
                        "Highly reliable scheduling architectures",
                        "Scalable and fault-tolerant designs",
                        "Secure and performance-focused execution",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing monitoring and support"
                    ]
                }
            ],
            cta: {
                title: "Never Miss a Critical Task Again",
                description: "Whether you need simple cron jobs or complex background workflows, our scheduled task solutions ensure your operations run smoothly and on time.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Data Processing",
            hero: {
                title: "Process, Transform & Scale Data with High‑Performance Pipelines",
                description: "Solario Tech builds robust Data Processing solutions that handle large volumes of data efficiently, accurately, and securely.\nWith 12+ years of backend and data engineering experience, we design scalable data pipelines that transform raw data into structured, usable information for analytics and business operations.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Data Processing?",
                    description: "Data processing involves collecting, transforming, validating, and storing data so it can be used effectively by applications and analytics systems.",
                    list: [
                        "Raw data transformation",
                        "Structured and unstructured data handling",
                        "Accurate and consistent data output",
                        "Automated data workflows"
                    ]
                },
                {
                    title: "Why Data Processing Matters",
                    description: "Poor data processing leads to unreliable insights and system failures.",
                    list: [
                        "Improves data quality and reliability",
                        "Enables faster analytics and reporting",
                        "Reduces errors and inconsistencies",
                        "Supports data-driven decision-making"
                    ]
                },
                {
                    title: "Batch Data Processing",
                    description: "We process large datasets efficiently in scheduled or on-demand batches.",
                    list: [
                        "ETL and ELT pipelines",
                        "Bulk data transformations",
                        "Scheduled batch jobs",
                        "High-volume data handling"
                    ]
                },
                {
                    title: "Real-Time & Stream Processing",
                    description: "Handle live data streams for time-sensitive use cases.",
                    list: [
                        "Real-time data ingestion",
                        "Event-driven processing",
                        "Low-latency pipelines",
                        "Live analytics support"
                    ]
                },
                {
                    title: "Data Validation & Quality Checks",
                    description: "Ensure processed data meets accuracy and consistency standards.",
                    list: [
                        "Schema and format validation",
                        "Duplicate and anomaly detection",
                        "Data integrity checks",
                        "Error handling and recovery"
                    ]
                },
                {
                    title: "Data Transformation & Enrichment",
                    description: "We convert raw data into business-ready formats.",
                    list: [
                        "Data normalization and aggregation",
                        "Business rule-based transformations",
                        "Data enrichment from multiple sources",
                        "Clean, analytics-ready outputs"
                    ]
                },
                {
                    title: "Scalable Processing Architecture",
                    description: "Our data pipelines scale with your data growth.",
                    list: [
                        "Parallel and distributed processing",
                        "Cloud and on‑premise support",
                        "High-throughput pipelines",
                        "Cost-efficient scaling strategies"
                    ]
                },
                {
                    title: "Monitoring & Performance Optimization",
                    description: "We monitor data pipelines for reliability and performance.",
                    list: [
                        "Pipeline health monitoring",
                        "Processing time optimization",
                        "Failure alerts and logging",
                        "Continuous performance tuning"
                    ]
                },
                {
                    title: "Security & Compliance",
                    description: "Data processing follows enterprise security standards.",
                    list: [
                        "Secure data handling",
                        "Access control and encryption",
                        "Audit logs",
                        "Compliance-ready pipelines"
                    ]
                },
                {
                    title: "Who Is Data Processing Best For?",
                    description: "Data processing solutions are ideal for:",
                    list: [
                        "Data-driven applications",
                        "Analytics and reporting platforms",
                        "Enterprise backend systems",
                        "ETL and data warehousing",
                        "Businesses handling large datasets"
                    ]
                },
                {
                    title: "Why Solario Tech for Data Processing?",
                    description: "Why clients trust us for data processing:",
                    list: [
                        "12+ Years of Data & Backend Engineering Experience",
                        "Scalable and reliable data pipelines",
                        "Performance-optimized processing systems",
                        "Secure and compliant implementations",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing support and optimization"
                    ]
                }
            ],
            cta: {
                title: "Turn Raw Data into Reliable Information",
                description: "Whether you’re processing millions of records or streaming live data, our data processing solutions help you build reliable, scalable, and business-ready data systems.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Report Generation",
            hero: {
                title: "Automated Report Generation for Clear & Actionable Insights",
                description: "Solario Tech delivers automated Report Generation solutions that convert raw data into accurate, timely, and easy‑to‑understand reports.\nWith 12+ years of engineering and data experience, we help businesses generate consistent reports that support decision‑making, compliance, and performance tracking.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Report Generation?",
                    description: "Report generation is the automated creation of structured reports from data sources for analysis, monitoring, and decision-making.",
                    list: [
                        "Automated data-to-report pipelines",
                        "Consistent and accurate reporting",
                        "Reduced manual effort",
                        "Timely access to insights"
                    ]
                },
                {
                    title: "Why Automated Reporting Matters",
                    description: "Manual reporting is time-consuming, error-prone, and difficult to scale.",
                    list: [
                        "Saves time and operational effort",
                        "Improves data accuracy",
                        "Ensures reporting consistency",
                        "Supports faster decision-making"
                    ]
                },
                {
                    title: "Business & Operational Reports",
                    description: "We generate reports tailored to business needs.",
                    list: [
                        "Sales and revenue reports",
                        "Operational performance reports",
                        "Customer and user analytics",
                        "KPI and metric dashboards"
                    ]
                },
                {
                    title: "Scheduled & On-Demand Reports",
                    description: "Reports can be generated automatically or on request.",
                    list: [
                        "Daily, weekly, and monthly reports",
                        "Event-triggered reporting",
                        "On-demand report generation",
                        "Time-zone aware scheduling"
                    ]
                },
                {
                    title: "Custom Report Formats",
                    description: "Reports are delivered in formats that suit your workflow.",
                    list: [
                        "PDF, Excel, and CSV reports",
                        "Web-based reports and dashboards",
                        "Email-delivered reports",
                        "Custom templates and layouts"
                    ]
                },
                {
                    title: "Data Aggregation & Transformation",
                    description: "We prepare data before generating reports.",
                    list: [
                        "Multi-source data aggregation",
                        "Business rule-based calculations",
                        "Data validation and cleansing",
                        "Accurate summary generation"
                    ]
                },
                {
                    title: "Visualization & Readability",
                    description: "Reports are designed for clarity and usability.",
                    list: [
                        "Charts and visual summaries",
                        "Clear data presentation",
                        "Executive-friendly layouts",
                        "Actionable insights highlighting"
                    ]
                },
                {
                    title: "Security & Access Control",
                    description: "Reports are shared securely with the right users.",
                    list: [
                        "Role-based access to reports",
                        "Secure report storage and delivery",
                        "Audit logs",
                        "Compliance-ready reporting"
                    ]
                },
                {
                    title: "Who Is Report Generation Best For?",
                    description: "Automated reporting is ideal for:",
                    list: [
                        "Management and leadership teams",
                        "Finance and compliance departments",
                        "Operations and analytics teams",
                        "Enterprises requiring regular reporting",
                        "Data-driven organizations"
                    ]
                },
                {
                    title: "Why Solario Tech for Report Generation?",
                    description: "Why businesses trust us for reporting solutions:",
                    list: [
                        "12+ Years of Data & Backend Engineering Experience",
                        "Accurate and reliable report pipelines",
                        "Custom, business-focused reporting",
                        "Scalable and automated solutions",
                        "Startup-friendly and enterprise-ready delivery",
                        "Ongoing optimization and support"
                    ]
                }
            ],
            cta: {
                title: "Generate Reports That Drive Decisions",
                description: "Whether you need daily operational reports or executive dashboards, our report generation solutions help you turn data into clear, actionable insights.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Quality Assurance",
            hero: {
                title: "Ensure Reliable, Secure & High‑Quality Software with Quality Assurance",
                description: "Solario Tech provides comprehensive Quality Assurance (QA) services to ensure your software products are stable, secure, and ready for real‑world use.\nWith 12+ years of engineering experience, we help businesses deliver bug‑free, high‑performance applications through systematic testing and quality processes.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Quality Assurance?",
                    description: "Quality Assurance is the process of ensuring software meets defined standards for functionality, performance, security, and usability before release.",
                    list: [
                        "Bug and defect prevention",
                        "Consistent product quality",
                        "Risk reduction",
                        "Improved user satisfaction"
                    ]
                },
                {
                    title: "Why Quality Assurance Matters",
                    description: "Poor quality software leads to user frustration, revenue loss, and brand damage.",
                    list: [
                        "Early detection of defects",
                        "Reduced post‑release issues",
                        "Lower maintenance costs",
                        "Higher customer trust"
                    ]
                },
                {
                    title: "Manual Testing",
                    description: "Human‑driven testing for usability and real‑world scenarios.",
                    list: [
                        "Functional testing",
                        "UI/UX and usability testing",
                        "Regression testing",
                        "Exploratory testing"
                    ]
                },
                {
                    title: "Automated Testing",
                    description: "Automation improves test coverage and speeds up releases.",
                    list: [
                        "Automated functional tests",
                        "Regression test automation",
                        "CI/CD pipeline integration",
                        "Faster and repeatable testing"
                    ]
                },
                {
                    title: "Performance & Load Testing",
                    description: "Ensure applications perform well under real‑world load.",
                    list: [
                        "Load and stress testing",
                        "Scalability validation",
                        "Performance bottleneck detection",
                        "Stability under peak usage"
                    ]
                },
                {
                    title: "Security Testing",
                    description: "Protect applications from vulnerabilities and threats.",
                    list: [
                        "Vulnerability assessment",
                        "Secure data handling checks",
                        "Authentication and authorization testing",
                        "Compliance‑ready validation"
                    ]
                },
                {
                    title: "Cross‑Platform & Compatibility Testing",
                    description: "Validate software across devices, browsers, and environments.",
                    list: [
                        "Browser and device compatibility",
                        "OS and platform testing",
                        "Mobile and web validation",
                        "Environment consistency checks"
                    ]
                },
                {
                    title: "Test Planning & Documentation",
                    description: "Structured QA processes ensure consistency and clarity.",
                    list: [
                        "Test strategy and planning",
                        "Test cases and scenarios",
                        "Defect reporting and tracking",
                        "Release readiness reports"
                    ]
                },
                {
                    title: "Continuous Quality Improvement",
                    description: "QA continues throughout the development lifecycle.",
                    list: [
                        "Continuous testing",
                        "Feedback‑driven improvements",
                        "Quality metrics tracking",
                        "Process refinement"
                    ]
                },
                {
                    title: "Who Is Quality Assurance Best For?",
                    description: "Quality assurance services are ideal for:",
                    list: [
                        "Web and mobile applications",
                        "SaaS and enterprise platforms",
                        "Startups launching new products",
                        "Businesses scaling software systems",
                        "Mission‑critical applications"
                    ]
                },
                {
                    title: "Why Solario Tech for Quality Assurance?",
                    description: "Why clients trust us for QA services:",
                    list: [
                        "12+ Years of Software Engineering Experience",
                        "Comprehensive manual and automated testing",
                        "Business‑focused quality strategies",
                        "Scalable and reliable QA processes",
                        "Startup‑friendly and enterprise‑ready delivery",
                        "End‑to‑end quality assurance support"
                    ]
                }
            ],
            cta: {
                title: "Deliver Software with Confidence",
                description: "Whether you’re preparing for launch or improving an existing product, our quality assurance services help you deliver reliable, secure, and high‑quality software every time.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "open-gl": [
        {
            id: "3D Rendering",
            hero: {
                title: "High‑Quality 3D Rendering for Realistic & Engaging Visuals",
                description: "Solario Tech delivers professional 3D Rendering services that transform concepts, designs, and data into visually stunning and realistic 3D visuals.\nWith 12+ years of graphics and engineering experience, we build high‑fidelity renders that support product visualization, simulations, architecture, and interactive applications.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is 3D Rendering?",
                    description: "3D rendering is the process of converting 3D models into realistic or stylized 2D images or animations using lighting, materials, and camera techniques.",
                    list: [
                        "Photorealistic and real‑time rendering",
                        "High‑quality lighting and materials",
                        "Accurate visual representation",
                        "Engaging visual output"
                    ]
                },
                {
                    title: "Why 3D Rendering Matters",
                    description: "High‑quality visuals improve understanding, engagement, and decision‑making.",
                    list: [
                        "Clear visualization of complex designs",
                        "Improved presentations and demos",
                        "Enhanced user engagement",
                        "Reduced design and prototyping costs"
                    ]
                },
                {
                    title: "Photorealistic Rendering",
                    description: "We create lifelike renders with high visual accuracy.",
                    list: [
                        "Realistic lighting and shadows",
                        "Physically based materials (PBR)",
                        "High‑resolution textures",
                        "Camera‑accurate perspectives"
                    ]
                },
                {
                    title: "Product & Industrial Rendering",
                    description: "Showcase products before manufacturing.",
                    list: [
                        "Product visualization",
                        "Exploded and cutaway views",
                        "Material and finish previews",
                        "Marketing‑ready visuals"
                    ]
                },
                {
                    title: "Architectural & Interior Rendering",
                    description: "Visualize spaces with clarity and realism.",
                    list: [
                        "Exterior and interior renders",
                        "Lighting and environment simulation",
                        "Furniture and asset placement",
                        "Concept and final‑design visuals"
                    ]
                },
                {
                    title: "Real‑Time & Interactive Rendering",
                    description: "Enable interactive 3D experiences.",
                    list: [
                        "Game engine‑based rendering",
                        "Interactive walkthroughs",
                        "Configurable scenes",
                        "Low‑latency rendering pipelines"
                    ]
                },
                {
                    title: "Animation & Visual Effects",
                    description: "Bring 3D scenes to life with motion.",
                    list: [
                        "Object and camera animations",
                        "Product demonstration animations",
                        "Simulation‑based motion",
                        "Cinematic visual effects"
                    ]
                },
                {
                    title: "Optimization for Performance",
                    description: "We balance visual quality with performance.",
                    list: [
                        "Mesh and texture optimization",
                        "LOD strategies",
                        "Efficient lighting techniques",
                        "Target‑platform optimization"
                    ]
                },
                {
                    title: "Who Is 3D Rendering Best For?",
                    description: "3D rendering services are ideal for:",
                    list: [
                        "Product and industrial design",
                        "Architecture and real estate",
                        "Game and interactive media",
                        "Engineering and simulations",
                        "Marketing and visualization teams"
                    ]
                },
                {
                    title: "Why Solario Tech for 3D Rendering?",
                    description: "Why clients trust us for 3D rendering:",
                    list: [
                        "12+ Years of Graphics & Engineering Experience",
                        "High‑quality, production‑ready visuals",
                        "Real‑time and offline rendering expertise",
                        "Performance‑optimized pipelines",
                        "Startup‑friendly and enterprise‑ready delivery",
                        "End‑to‑end 3D visualization support"
                    ]
                }
            ],
            cta: {
                title: "Bring Ideas to Life with 3D Rendering",
                description: "Whether you need photorealistic visuals or real‑time 3D experiences, our 3D rendering services help you communicate ideas clearly and effectively.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Shader Programming",
            hero: {
                title: "Advanced Shader Programming for High‑Performance Visual Effects",
                description: "Solario Tech provides expert Shader Programming services to create custom visual effects, realistic materials, and optimized rendering pipelines.\nWith 12+ years of graphics and engine‑level experience, we design shaders that balance visual fidelity, performance, and platform compatibility.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Shader Programming?",
                    description: "Shader programming involves writing GPU programs that control how objects are rendered, including lighting, shading, colors, and visual effects.",
                    list: [
                        "GPU‑accelerated rendering logic",
                        "Control over lighting and materials",
                        "Custom visual effects",
                        "High‑performance graphics pipelines"
                    ]
                },
                {
                    title: "Why Shader Programming Matters",
                    description: "Shaders define the visual quality and performance of modern graphics applications.",
                    list: [
                        "Enhanced visual realism",
                        "Optimized rendering performance",
                        "Unique visual styles",
                        "Fine‑grained control over graphics output"
                    ]
                },
                {
                    title: "Custom Material & Surface Shaders",
                    description: "We build shaders that define how surfaces look and react to light.",
                    list: [
                        "Physically Based Rendering (PBR) shaders",
                        "Custom material effects",
                        "Texture blending and layering",
                        "Dynamic surface properties"
                    ]
                },
                {
                    title: "Lighting & Shadow Shaders",
                    description: "Create realistic and efficient lighting models.",
                    list: [
                        "Real‑time lighting models",
                        "Shadow mapping and soft shadows",
                        "Global and local illumination techniques",
                        "Performance‑optimized lighting pipelines"
                    ]
                },
                {
                    title: "Post‑Processing Effects",
                    description: "Enhance visuals using screen‑space effects.",
                    list: [
                        "Bloom and glow effects",
                        "Depth of field",
                        "Motion blur",
                        "Color grading and tone mapping"
                    ]
                },
                {
                    title: "Vertex, Fragment & Compute Shaders",
                    description: "Low‑level shader development for maximum control.",
                    list: [
                        "Vertex and fragment shader logic",
                        "Geometry manipulation",
                        "Compute shader workflows",
                        "Parallel GPU processing"
                    ]
                },
                {
                    title: "Cross‑Platform Shader Development",
                    description: "Shaders built to run efficiently across platforms.",
                    list: [
                        "Desktop, mobile, and console support",
                        "Engine‑agnostic shader design",
                        "Platform‑specific optimizations",
                        "Consistent visual output"
                    ]
                },
                {
                    title: "Shader Optimization & Debugging",
                    description: "Ensure shaders perform efficiently at scale.",
                    list: [
                        "GPU performance profiling",
                        "Instruction and memory optimization",
                        "Overdraw and bottleneck reduction",
                        "Stability and compatibility testing"
                    ]
                },
                {
                    title: "Who Is Shader Programming Best For?",
                    description: "Shader programming services are ideal for:",
                    list: [
                        "Game and real‑time graphics engines",
                        "Simulation and visualization tools",
                        "VR and AR applications",
                        "Custom rendering pipelines",
                        "High‑performance graphics products"
                    ]
                },
                {
                    title: "Why Solario Tech for Shader Programming?",
                    description: "Why clients trust us for shader development:",
                    list: [
                        "12+ Years of Graphics & GPU Programming Experience",
                        "Deep understanding of real‑time rendering",
                        "Performance‑first shader design",
                        "Cross‑platform graphics expertise",
                        "Startup‑friendly and enterprise‑ready delivery",
                        "End‑to‑end graphics pipeline support"
                    ]
                }
            ],
            cta: {
                title: "Power Your Visuals with Custom Shaders",
                description: "Whether you need realistic materials or advanced visual effects, our shader programming services help you achieve stunning visuals without sacrificing performance.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Real-time Graphics",
            hero: {
                title: "High‑Performance Real‑Time Graphics for Interactive Experiences",
                description: "Solario Tech delivers Real‑time Graphics solutions that power interactive, high‑performance visual applications.\nWith 12+ years of graphics and engine‑level expertise, we build real‑time rendering systems that balance visual quality, responsiveness, and scalability across platforms.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are Real‑time Graphics?",
                    description: "Real‑time graphics render visuals instantly in response to user input or system events, enabling smooth and interactive experiences.",
                    list: [
                        "Instant visual feedback",
                        "Low‑latency rendering",
                        "Interactive environments",
                        "High frame‑rate performance"
                    ]
                },
                {
                    title: "Why Real‑time Graphics Matter",
                    description: "Real‑time rendering is essential for modern interactive applications.",
                    list: [
                        "Enhanced user immersion",
                        "Responsive interactions",
                        "Realistic simulations",
                        "Better user engagement"
                    ]
                },
                {
                    title: "Real‑time Rendering Pipelines",
                    description: "We design efficient pipelines for real‑time performance.",
                    list: [
                        "Forward and deferred rendering",
                        "Physically Based Rendering (PBR)",
                        "Dynamic lighting and shadows",
                        "Optimized rendering workflows"
                    ]
                },
                {
                    title: "Interactive 3D Environments",
                    description: "Build responsive and immersive 3D scenes.",
                    list: [
                        "Scene interaction and navigation",
                        "Dynamic object manipulation",
                        "User‑driven camera systems",
                        "Real‑time environment updates"
                    ]
                },
                {
                    title: "Game Engine‑Based Graphics",
                    description: "Leverage modern engines for real‑time visuals.",
                    list: [
                        "Unity and Unreal Engine rendering",
                        "Custom engine integrations",
                        "Engine‑level performance tuning",
                        "Cross‑platform rendering"
                    ]
                },
                {
                    title: "Simulation & Visualization",
                    description: "Render complex data and simulations in real time.",
                    list: [
                        "Engineering and physics simulations",
                        "Scientific and industrial visualization",
                        "Data‑driven real‑time graphics",
                        "Accurate and responsive visuals"
                    ]
                },
                {
                    title: "Performance Optimization",
                    description: "Maintain high frame rates without compromising quality.",
                    list: [
                        "GPU and CPU optimization",
                        "LOD and culling techniques",
                        "Memory and resource optimization",
                        "Stable performance under load"
                    ]
                },
                {
                    title: "Cross‑Platform Real‑time Graphics",
                    description: "Deliver consistent experiences across devices.",
                    list: [
                        "Desktop and mobile support",
                        "VR and AR readiness",
                        "Hardware‑aware optimizations",
                        "Scalable graphics solutions"
                    ]
                },
                {
                    title: "Who Are Real‑time Graphics Best For?",
                    description: "Real‑time graphics solutions are ideal for:",
                    list: [
                        "Games and interactive media",
                        "Simulations and training systems",
                        "VR and AR applications",
                        "Product configurators",
                        "Visualization‑driven platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for Real‑time Graphics?",
                    description: "Why clients trust us for real‑time graphics:",
                    list: [
                        "12+ Years of Graphics & Engine Experience",
                        "High‑performance, low‑latency rendering",
                        "Deep optimization expertise",
                        "Cross‑platform graphics delivery",
                        "Startup‑friendly and enterprise‑ready execution",
                        "End‑to‑end real‑time graphics support"
                    ]
                }
            ],
            cta: {
                title: "Build Fast, Interactive Visual Experiences",
                description: "Whether you’re creating simulations, interactive tools, or immersive environments, our real‑time graphics services help you deliver smooth and engaging visuals.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Game Development",
            hero: {
                title: "End‑to‑End Game Development for Engaging Digital Experiences",
                description: "Solario Tech provides full‑cycle Game Development services, from concept and prototyping to production and deployment.\nWith 12+ years of graphics, engine, and software engineering experience, we build high‑performance games and interactive experiences across platforms with engaging gameplay and optimized visuals.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Game Development?",
                    description: "Game development is the process of designing, building, testing, and deploying interactive games using graphics engines, logic systems, and user interaction models.",
                    list: [
                        "Interactive gameplay systems",
                        "Real‑time graphics and physics",
                        "Engaging user experiences",
                        "Cross‑platform execution"
                    ]
                },
                {
                    title: "Why Game Development Matters",
                    description: "Well‑built games deliver immersion, engagement, and long‑term user retention.",
                    list: [
                        "High user engagement",
                        "Immersive interactive experiences",
                        "Strong performance and stability",
                        "Scalable content and features"
                    ]
                },
                {
                    title: "Game Design & Prototyping",
                    description: "We turn ideas into playable concepts quickly.",
                    list: [
                        "Gameplay mechanics design",
                        "Level and world design",
                        "Rapid prototyping",
                        "User experience validation"
                    ]
                },
                {
                    title: "2D & 3D Game Development",
                    description: "Build visually rich games across dimensions.",
                    list: [
                        "2D casual and mobile games",
                        "3D action and simulation games",
                        "Character and environment integration",
                        "Animation systems"
                    ]
                },
                {
                    title: "Game Engine Development",
                    description: "We leverage and customize modern game engines.",
                    list: [
                        "Unity and Unreal Engine development",
                        "Custom engine components",
                        "Physics and rendering integration",
                        "Engine‑level optimization"
                    ]
                },
                {
                    title: "Gameplay Logic & AI",
                    description: "Create intelligent and responsive game behavior.",
                    list: [
                        "Player and NPC logic",
                        "AI behavior systems",
                        "State machines and decision trees",
                        "Dynamic difficulty tuning"
                    ]
                },
                {
                    title: "Multiplayer & Networking",
                    description: "Enable connected and competitive gameplay.",
                    list: [
                        "Real‑time multiplayer systems",
                        "Client‑server architecture",
                        "Matchmaking and lobbies",
                        "Network performance optimization"
                    ]
                },
                {
                    title: "Performance Optimization",
                    description: "Ensure smooth gameplay across devices.",
                    list: [
                        "Frame‑rate and memory optimization",
                        "Asset and scene optimization",
                        "Platform‑specific tuning",
                        "Stable performance under load"
                    ]
                },
                {
                    title: "Testing & Deployment",
                    description: "Games are tested and prepared for release.",
                    list: [
                        "Gameplay and performance testing",
                        "Bug fixing and balancing",
                        "Platform compliance checks",
                        "Store and distribution readiness"
                    ]
                },
                {
                    title: "Who Is Game Development Best For?",
                    description: "Game development services are ideal for:",
                    list: [
                        "Indie and AAA game studios",
                        "Educational and serious games",
                        "Simulation and training platforms",
                        "Interactive marketing experiences",
                        "Entertainment and media companies"
                    ]
                },
                {
                    title: "Why Solario Tech for Game Development?",
                    description: "Why clients choose us for game development:",
                    list: [
                        "12+ Years of Graphics & Game Engineering Experience",
                        "Strong gameplay and performance focus",
                        "Cross‑platform game delivery",
                        "Optimized real‑time graphics pipelines",
                        "Startup‑friendly and enterprise‑ready execution",
                        "End‑to‑end game development support"
                    ]
                }
            ],
            cta: {
                title: "Create Games Players Love",
                description: "Whether you’re building a mobile game, simulation, or immersive experience, our game development services help you deliver engaging, high‑performance games.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "CAD Applications",
            hero: {
                title: "Custom CAD Applications for Precision Design & Engineering",
                description: "Solario Tech develops powerful CAD Applications tailored for design, engineering, and manufacturing workflows.\nWith 12+ years of graphics and engineering expertise, we build high‑performance CAD solutions that deliver accuracy, usability, and seamless integration with enterprise systems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are CAD Applications?",
                    description: "CAD (Computer‑Aided Design) applications enable the creation, modification, analysis, and optimization of precise 2D and 3D designs.",
                    list: [
                        "Accurate 2D and 3D modeling",
                        "Engineering‑grade precision",
                        "Design validation and iteration",
                        "Digital product representation"
                    ]
                },
                {
                    title: "Why CAD Applications Matter",
                    description: "Custom CAD tools improve productivity, accuracy, and design consistency.",
                    list: [
                        "Reduced design errors",
                        "Faster design iterations",
                        "Improved engineering accuracy",
                        "Better collaboration across teams"
                    ]
                },
                {
                    title: "2D & 3D Modeling Solutions",
                    description: "Build robust modeling capabilities for diverse use cases.",
                    list: [
                        "Parametric and direct modeling",
                        "Sketch‑based design tools",
                        "Assembly and component modeling",
                        "Constraint‑based geometry"
                    ]
                },
                {
                    title: "Custom CAD Software Development",
                    description: "We build CAD applications aligned with specific business needs.",
                    list: [
                        "Domain‑specific CAD tools",
                        "Custom geometry engines",
                        "Specialized UI/UX for designers",
                        "Scalable CAD architectures"
                    ]
                },
                {
                    title: "Engineering & Manufacturing Support",
                    description: "CAD solutions designed for real‑world engineering workflows.",
                    list: [
                        "Tolerance and dimension control",
                        "Design for manufacturing (DFM)",
                        "Bill of materials (BOM) support",
                        "Manufacturing‑ready outputs"
                    ]
                },
                {
                    title: "File Formats & Interoperability",
                    description: "Ensure compatibility with industry standards.",
                    list: [
                        "STEP, IGES, DXF, DWG support",
                        "Import/export pipelines",
                        "Third‑party CAD tool integration",
                        "Data consistency across systems"
                    ]
                },
                {
                    title: "Visualization & Rendering Integration",
                    description: "Enhance CAD with visual clarity.",
                    list: [
                        "Real‑time model visualization",
                        "Material and lighting previews",
                        "Section views and exploded models",
                        "Interactive design reviews"
                    ]
                },
                {
                    title: "Performance & Precision Optimization",
                    description: "CAD systems optimized for speed and accuracy.",
                    list: [
                        "Large model handling",
                        "Geometry computation optimization",
                        "High‑precision calculations",
                        "Stable performance at scale"
                    ]
                },
                {
                    title: "Who Are CAD Applications Best For?",
                    description: "CAD application development is ideal for:",
                    list: [
                        "Engineering and manufacturing companies",
                        "Product design teams",
                        "Architecture and construction firms",
                        "Industrial and mechanical design",
                        "Custom engineering platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for CAD Applications?",
                    description: "Why businesses trust us for CAD development:",
                    list: [
                        "12+ Years of Graphics & Engineering Experience",
                        "High‑precision CAD system expertise",
                        "Custom, domain‑specific solutions",
                        "Performance‑optimized architectures",
                        "Startup‑friendly and enterprise‑ready delivery",
                        "End‑to‑end CAD application support"
                    ]
                }
            ],
            cta: {
                title: "Build CAD Tools That Power Engineering Excellence",
                description: "Whether you need custom CAD software or enhanced design workflows, our CAD application services help you design with precision and confidence.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Simulation Tools",
            hero: {
                title: "Advanced Simulation Tools for Accurate Modeling & Decision‑Making",
                description: "Solario Tech builds high‑performance Simulation Tools that model real‑world systems, processes, and environments with precision.\nWith 12+ years of graphics, engineering, and system modeling experience, we deliver simulation solutions that support training, analysis, validation, and predictive decision‑making.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What are Simulation Tools?",
                    description: "Simulation tools digitally replicate real‑world systems or processes to analyze behavior, performance, and outcomes under different conditions.",
                    list: [
                        "Real‑world system modeling",
                        "Scenario‑based analysis",
                        "Risk‑free experimentation",
                        "Data‑driven insights"
                    ]
                },
                {
                    title: "Why Simulation Tools Matter",
                    description: "Simulations reduce cost, risk, and uncertainty before real‑world deployment.",
                    list: [
                        "Improved decision‑making",
                        "Reduced testing and prototyping costs",
                        "Early issue detection",
                        "Better system understanding"
                    ]
                },
                {
                    title: "Physics‑Based Simulations",
                    description: "Accurate modeling of physical systems and environments.",
                    list: [
                        "Physics and motion simulation",
                        "Collision and dynamics modeling",
                        "Material and force behavior",
                        "Realistic environment interaction"
                    ]
                },
                {
                    title: "Engineering & Industrial Simulations",
                    description: "Simulate complex engineering and industrial processes.",
                    list: [
                        "Manufacturing process simulation",
                        "Mechanical and structural modeling",
                        "System performance validation",
                        "Design verification"
                    ]
                },
                {
                    title: "Training & Scenario Simulations",
                    description: "Create realistic training environments.",
                    list: [
                        "Operator and skill training",
                        "Safety and emergency scenarios",
                        "Procedure validation",
                        "Interactive learning experiences"
                    ]
                },
                {
                    title: "Data‑Driven & Predictive Simulations",
                    description: "Combine data and models for predictive outcomes.",
                    list: [
                        "What‑if scenario analysis",
                        "Predictive behavior modeling",
                        "Parameter tuning",
                        "Outcome forecasting"
                    ]
                },
                {
                    title: "Real‑Time & Interactive Simulations",
                    description: "Enable user interaction with live simulation systems.",
                    list: [
                        "Real‑time feedback loops",
                        "User‑controlled variables",
                        "Visual simulation dashboards",
                        "Low‑latency performance"
                    ]
                },
                {
                    title: "Visualization & Rendering Integration",
                    description: "Simulations paired with clear visual representation.",
                    list: [
                        "3D visualization of simulations",
                        "Real‑time rendering integration",
                        "Data overlays and indicators",
                        "Interactive views"
                    ]
                },
                {
                    title: "Performance & Accuracy Optimization",
                    description: "Simulations optimized for scale and precision.",
                    list: [
                        "High‑performance computation",
                        "Accuracy vs performance tuning",
                        "Scalable simulation architectures",
                        "Stable long‑running simulations"
                    ]
                },
                {
                    title: "Who Are Simulation Tools Best For?",
                    description: "Simulation tools are ideal for:",
                    list: [
                        "Engineering and manufacturing",
                        "Training and education platforms",
                        "Research and development teams",
                        "Industrial and scientific modeling",
                        "Decision‑support systems"
                    ]
                },
                {
                    title: "Why Solario Tech for Simulation Tools?",
                    description: "Why clients trust us for simulation development:",
                    list: [
                        "12+ Years of Engineering & Graphics Experience",
                        "High‑accuracy simulation modeling",
                        "Real‑time and offline simulation expertise",
                        "Performance‑optimized architectures",
                        "Startup‑friendly and enterprise‑ready delivery",
                        "End‑to‑end simulation lifecycle support"
                    ]
                }
            ],
            cta: {
                title: "Simulate Before You Build",
                description: "Whether you’re validating designs, training teams, or predicting outcomes, our simulation tools help you model reality with confidence.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "VR Development",
            hero: {
                title: "Immersive VR Development for Training, Simulation & Experiences",
                description: "Solario Tech delivers end‑to‑end VR Development services that create immersive, interactive, and high‑performance virtual reality experiences.\nWith 12+ years of graphics, real‑time systems, and engine expertise, we build VR solutions for training, simulations, product visualization, and immersive applications across industries.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is VR Development?",
                    description: "VR development involves creating immersive virtual environments that users can interact with using head‑mounted displays and motion controllers.",
                    list: [
                        "Fully immersive 3D environments",
                        "Real‑time interaction",
                        "Natural user movement and input",
                        "High presence and realism"
                    ]
                },
                {
                    title: "Why VR Development Matters",
                    description: "VR enables deeper engagement, safer training, and better understanding of complex scenarios.",
                    list: [
                        "High user immersion",
                        "Safe and repeatable training",
                        "Improved learning retention",
                        "Cost‑effective simulations"
                    ]
                },
                {
                    title: "VR Application Development",
                    description: "We build VR applications tailored to business needs.",
                    list: [
                        "Custom VR applications",
                        "Interactive 3D environments",
                        "Multi‑scene VR experiences",
                        "Enterprise and consumer VR apps"
                    ]
                },
                {
                    title: "Training & Simulation in VR",
                    description: "Create realistic training environments without real‑world risk.",
                    list: [
                        "Industrial and safety training",
                        "Operational procedure simulations",
                        "Skill and equipment training",
                        "Scenario‑based learning"
                    ]
                },
                {
                    title: "Product & Design Visualization",
                    description: "Visualize products and designs in immersive 3D.",
                    list: [
                        "Product walkthroughs",
                        "Design reviews in VR",
                        "Scale‑accurate visualization",
                        "Interactive configuration"
                    ]
                },
                {
                    title: "Interaction & Input Systems",
                    description: "Natural and intuitive VR interactions.",
                    list: [
                        "Controller and hand tracking",
                        "Object interaction systems",
                        "Gesture‑based input",
                        "User movement and navigation"
                    ]
                },
                {
                    title: "Performance & Comfort Optimization",
                    description: "VR experiences optimized for comfort and stability.",
                    list: [
                        "High and stable frame rates",
                        "Low‑latency rendering",
                        "Motion sickness reduction",
                        "Platform‑specific tuning"
                    ]
                },
                {
                    title: "Cross‑Platform VR Support",
                    description: "Build VR experiences across devices and platforms.",
                    list: [
                        "PC‑based VR systems",
                        "Standalone VR headsets",
                        "Engine‑agnostic VR solutions",
                        "Future‑ready architectures"
                    ]
                },
                {
                    title: "Who Is VR Development Best For?",
                    description: "VR development is ideal for:",
                    list: [
                        "Training and simulation platforms",
                        "Engineering and industrial companies",
                        "Product and design teams",
                        "Education and learning solutions",
                        "Immersive marketing experiences"
                    ]
                },
                {
                    title: "Why Solario Tech for VR Development?",
                    description: "Why clients trust us for VR solutions:",
                    list: [
                        "12+ Years of Graphics & Real‑Time Experience",
                        "Deep expertise in immersive systems",
                        "Performance‑optimized VR pipelines",
                        "Business‑focused VR applications",
                        "Startup‑friendly and enterprise‑ready delivery",
                        "End‑to‑end VR development support"
                    ]
                }
            ],
            cta: {
                title: "Step Into Immersive Virtual Experiences",
                description: "Whether you’re building training simulations or interactive VR products, our VR development services help you create immersive experiences that truly engage users.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Graphics Optimization",
            hero: {
                title: "Graphics Optimization for Maximum Performance & Visual Quality",
                description: "Solario Tech provides expert Graphics Optimization services to ensure applications deliver high visual quality while maintaining smooth, stable performance.\nWith 12+ years of graphics, engine, and performance engineering experience, we optimize rendering pipelines for games, simulations, VR, CAD, and real‑time visualization systems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Your Project" }
                ]
            },
            content: [
                {
                    title: "What is Graphics Optimization?",
                    description: "Graphics optimization focuses on improving rendering performance, reducing resource usage, and maintaining visual fidelity across platforms and hardware.",
                    list: [
                        "Higher frame rates",
                        "Reduced GPU and CPU load",
                        "Stable and smooth visuals",
                        "Better scalability across devices"
                    ]
                },
                {
                    title: "Why Graphics Optimization Matters",
                    description: "Unoptimized graphics lead to poor performance, crashes, and bad user experiences.",
                    list: [
                        "Smooth and responsive interactions",
                        "Improved user comfort (especially in VR)",
                        "Lower hardware requirements",
                        "Reliable performance at scale"
                    ]
                },
                {
                    title: "Rendering Pipeline Optimization",
                    description: "We optimize how scenes are rendered end‑to‑end.",
                    list: [
                        "Forward and deferred rendering tuning",
                        "Draw call reduction",
                        "State change minimization",
                        "Efficient render passes"
                    ]
                },
                {
                    title: "GPU & CPU Performance Tuning",
                    description: "Balance workloads between CPU and GPU.",
                    list: [
                        "GPU bottleneck analysis",
                        "CPU overhead reduction",
                        "Parallel processing optimization",
                        "Frame‑time consistency improvements"
                    ]
                },
                {
                    title: "Asset & Resource Optimization",
                    description: "Optimize assets without compromising quality.",
                    list: [
                        "Mesh and polygon reduction",
                        "Texture compression and atlasing",
                        "Level of Detail (LOD) systems",
                        "Memory usage optimization"
                    ]
                },
                {
                    title: "Shader & Material Optimization",
                    description: "Improve shader performance and stability.",
                    list: [
                        "Shader instruction optimization",
                        "Overdraw reduction",
                        "Efficient lighting models",
                        "Material complexity control"
                    ]
                },
                {
                    title: "Scene Management & Culling",
                    description: "Render only what’s necessary.",
                    list: [
                        "Frustum and occlusion culling",
                        "Visibility determination",
                        "Scene partitioning",
                        "Dynamic object management"
                    ]
                },
                {
                    title: "Platform‑Specific Optimization",
                    description: "Tailored optimization for target platforms.",
                    list: [
                        "Desktop and workstation GPUs",
                        "Mobile and low‑power devices",
                        "VR headset performance tuning",
                        "Hardware‑aware optimization strategies"
                    ]
                },
                {
                    title: "Profiling & Diagnostics",
                    description: "Data‑driven optimization using real metrics.",
                    list: [
                        "GPU and CPU profilers",
                        "Frame capture and analysis",
                        "Bottleneck identification",
                        "Performance regression tracking"
                    ]
                },
                {
                    title: "Who Is Graphics Optimization Best For?",
                    description: "Graphics optimization is ideal for:",
                    list: [
                        "Games and real‑time applications",
                        "VR and immersive experiences",
                        "Simulation and visualization tools",
                        "CAD and engineering platforms",
                        "Performance‑critical graphics systems"
                    ]
                },
                {
                    title: "Why Solario Tech for Graphics Optimization?",
                    description: "Why clients trust us for performance optimization:",
                    list: [
                        "12+ Years of Graphics & Engine Optimization Experience",
                        "Deep GPU and rendering pipeline expertise",
                        "Performance‑first, quality‑preserving approach",
                        "Cross‑platform optimization knowledge",
                        "Startup‑friendly and enterprise‑ready delivery",
                        "End‑to‑end performance tuning support"
                    ]
                }
            ],
            cta: {
                title: "Deliver Stunning Visuals Without Performance Trade‑offs",
                description: "Whether you’re optimizing a game, simulation, VR experience, or visualization tool, our graphics optimization services help you achieve smooth performance with high visual quality.",
                buttons: [
                    { label: "Start Your Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "app-maintenance": [
        {
            id: "Bug Fixes",
            hero: {
                title: "Fast & Reliable Bug Fixes to Keep Systems Running Smoothly",
                description: "Solario Tech provides proactive and responsive Bug Fix services to quickly identify, resolve, and prevent software issues.\nWith 12+ years of engineering experience, we ensure your applications remain stable, reliable, and user‑friendly by addressing defects before they impact business operations.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Support" }
                ]
            },
            content: [
                {
                    title: "What are Bug Fixes?",
                    description: "Bug fixes involve identifying, diagnosing, and resolving defects or errors in software systems.",
                    list: [
                        "Error and defect resolution",
                        "Stability improvements",
                        "Reduced system crashes",
                        "Improved user experience"
                    ]
                },
                {
                    title: "Why Bug Fixes Matter",
                    description: "Unresolved bugs can disrupt operations and damage user trust.",
                    list: [
                        "Minimizes downtime",
                        "Improves system reliability",
                        "Enhances application performance",
                        "Maintains user confidence"
                    ]
                },
                {
                    title: "Issue Identification & Analysis",
                    description: "We quickly identify the root cause of issues.",
                    list: [
                        "Log and error analysis",
                        "Reproduction of issues",
                        "Root cause investigation",
                        "Impact assessment"
                    ]
                },
                {
                    title: "Critical & Non‑Critical Bug Resolution",
                    description: "All issues are prioritized and resolved efficiently.",
                    list: [
                        "Production‑blocking issues",
                        "Functional bugs",
                        "UI/UX inconsistencies",
                        "Edge‑case handling"
                    ]
                },
                {
                    title: "Testing & Validation",
                    description: "Fixes are thoroughly tested before deployment.",
                    list: [
                        "Regression testing",
                        "Scenario validation",
                        "Stability checks",
                        "Release readiness verification"
                    ]
                },
                {
                    title: "Preventive Fixes",
                    description: "We address underlying issues to prevent recurrence.",
                    list: [
                        "Code quality improvements",
                        "Error handling enhancements",
                        "Process and logic corrections",
                        "Long‑term stability fixes"
                    ]
                },
                {
                    title: "Who Are Bug Fixes Best For?",
                    description: "Bug fixing services are ideal for:",
                    list: [
                        "Live production systems",
                        "Web and mobile applications",
                        "Enterprise software",
                        "SaaS platforms",
                        "Mission‑critical systems"
                    ]
                },
                {
                    title: "Why Solario Tech for Bug Fixes?",
                    description: "Why clients trust us for issue resolution:",
                    list: [
                        "12+ Years of Software Engineering Experience",
                        "Fast turnaround times",
                        "Root‑cause‑focused fixes",
                        "Minimal business disruption",
                        "Startup‑friendly and enterprise‑ready support"
                    ]
                }
            ],
            cta: {
                title: "Fix Issues Before They Impact Your Business",
                description: "Whether it’s a critical production bug or recurring issues, our bug fix services help you keep systems stable and users satisfied.",
                buttons: [
                    { label: "Start Support" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Security Updates",
            hero: {
                title: "Proactive Security Updates to Protect Your Systems",
                description: "Solario Tech delivers regular Security Update services to keep your applications, infrastructure, and data protected against evolving threats.\nWith 12+ years of engineering and security best‑practice experience, we help businesses reduce risk, maintain compliance, and safeguard critical systems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Support" }
                ]
            },
            content: [
                {
                    title: "What are Security Updates?",
                    description: "Security updates involve applying patches, fixes, and configuration changes to protect systems from vulnerabilities and attacks.",
                    list: [
                        "Vulnerability patching",
                        "Threat mitigation",
                        "Secure system configurations",
                        "Reduced exposure to attacks"
                    ]
                },
                {
                    title: "Why Security Updates Matter",
                    description: "Unpatched systems are one of the most common causes of security breaches.",
                    list: [
                        "Protection against known vulnerabilities",
                        "Reduced risk of data breaches",
                        "Compliance with security standards",
                        "Increased customer trust"
                    ]
                },
                {
                    title: "Vulnerability Assessment & Patching",
                    description: "We identify and fix security weaknesses quickly.",
                    list: [
                        "OS and framework patching",
                        "Third‑party dependency updates",
                        "Critical vulnerability fixes",
                        "Security risk prioritization"
                    ]
                },
                {
                    title: "Application & Infrastructure Security",
                    description: "Secure updates across the entire technology stack.",
                    list: [
                        "Web and mobile application security",
                        "Server and cloud infrastructure updates",
                        "API and integration security",
                        "Configuration hardening"
                    ]
                },
                {
                    title: "Access Control & Credential Updates",
                    description: "Ensure only authorized access to systems.",
                    list: [
                        "Credential rotation",
                        "Permission reviews",
                        "Role‑based access updates",
                        "Authentication improvements"
                    ]
                },
                {
                    title: "Compliance & Best Practices",
                    description: "Security updates aligned with industry standards.",
                    list: [
                        "Compliance‑ready configurations",
                        "Audit‑friendly changes",
                        "Security policy alignment",
                        "Documentation and reporting"
                    ]
                },
                {
                    title: "Testing & Validation",
                    description: "All updates are validated before release.",
                    list: [
                        "Security testing",
                        "Regression checks",
                        "Stability validation",
                        "Safe production rollout"
                    ]
                },
                {
                    title: "Who Are Security Updates Best For?",
                    description: "Security update services are ideal for:",
                    list: [
                        "Live production systems",
                        "SaaS and enterprise platforms",
                        "Data‑sensitive applications",
                        "Compliance‑driven businesses",
                        "Growing digital products"
                    ]
                },
                {
                    title: "Why Solario Tech for Security Updates?",
                    description: "Why clients trust us for security maintenance:",
                    list: [
                        "12+ Years of Engineering & Security Experience",
                        "Proactive security‑first approach",
                        "Minimal disruption during updates",
                        "Fast response to emerging threats",
                        "Startup‑friendly and enterprise‑ready support"
                    ]
                }
            ],
            cta: {
                title: "Stay Secure Against Emerging Threats",
                description: "Whether you need routine security patching or urgent vulnerability fixes, our security update services help keep your systems protected and compliant.",
                buttons: [
                    { label: "Start Support" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Performance Monitoring",
            hero: {
                title: "Continuous Performance Monitoring for Stable & High‑Performing Systems",
                description: "Solario Tech provides Performance Monitoring services that give real‑time visibility into application health, infrastructure load, and system behavior.\nWith 12+ years of engineering and operations experience, we help businesses detect issues early, optimize performance, and maintain reliable digital systems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Support" }
                ]
            },
            content: [
                {
                    title: "What is Performance Monitoring?",
                    description: "Performance monitoring involves continuously tracking system metrics to ensure applications and infrastructure operate efficiently.",
                    list: [
                        "Real‑time system visibility",
                        "Early performance issue detection",
                        "Data‑driven optimization",
                        "Improved system reliability"
                    ]
                },
                {
                    title: "Why Performance Monitoring Matters",
                    description: "Without monitoring, performance issues often go unnoticed until users are impacted.",
                    list: [
                        "Prevents downtime and slowdowns",
                        "Improves user experience",
                        "Supports proactive maintenance",
                        "Ensures SLA compliance"
                    ]
                },
                {
                    title: "Application Performance Monitoring",
                    description: "Track how applications behave in real‑world usage.",
                    list: [
                        "Response time monitoring",
                        "Error and failure tracking",
                        "Transaction performance analysis",
                        "User experience insights"
                    ]
                },
                {
                    title: "Infrastructure & Server Monitoring",
                    description: "Monitor system resources and infrastructure health.",
                    list: [
                        "CPU, memory, and disk usage",
                        "Server and cloud resource monitoring",
                        "Load and capacity tracking",
                        "Availability and uptime checks"
                    ]
                },
                {
                    title: "Alerts & Threshold Management",
                    description: "Get notified before issues escalate.",
                    list: [
                        "Custom performance thresholds",
                        "Real‑time alerts and notifications",
                        "Severity‑based escalation",
                        "Reduced response time"
                    ]
                },
                {
                    title: "Performance Reports & Insights",
                    description: "Clear reports for informed decision‑making.",
                    list: [
                        "Performance trend analysis",
                        "Bottleneck identification",
                        "Optimization recommendations",
                        "Historical performance data"
                    ]
                },
                {
                    title: "Who Is Performance Monitoring Best For?",
                    description: "Performance monitoring services are ideal for:",
                    list: [
                        "Live production applications",
                        "SaaS and enterprise platforms",
                        "High‑traffic websites",
                        "Business‑critical systems"
                    ]
                },
                {
                    title: "Why Solario Tech for Performance Monitoring?",
                    description: "Why clients rely on us for monitoring:",
                    list: [
                        "12+ Years of Backend & Operations Experience",
                        "Proactive performance management",
                        "Custom monitoring strategies",
                        "Fast issue detection and response",
                        "Startup‑friendly and enterprise‑ready support"
                    ]
                }
            ],
            cta: {
                title: "Stay Ahead of Performance Issues",
                description: "Whether you’re scaling systems or maintaining stability, our performance monitoring services help you keep applications fast, reliable, and responsive.",
                buttons: [
                    { label: "Start Support" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Feature Updates",
            hero: {
                title: "Continuous Feature Updates to Keep Your Product Evolving",
                description: "Solario Tech delivers structured Feature Update services to help your software evolve with business needs, user feedback, and market demands.\nWith 12+ years of engineering experience, we safely add new features and enhancements without disrupting existing systems or users.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Support" }
                ]
            },
            content: [
                {
                    title: "What are Feature Updates?",
                    description: "Feature updates involve adding new functionality or enhancing existing features in an application to improve value and usability.",
                    list: [
                        "New feature development",
                        "Enhancement of existing functionality",
                        "Improved user workflows",
                        "Product evolution without rework"
                    ]
                },
                {
                    title: "Why Feature Updates Matter",
                    description: "Software must evolve continuously to stay relevant and competitive.",
                    list: [
                        "Keeps products aligned with business goals",
                        "Improves user satisfaction and retention",
                        "Supports growth and scalability",
                        "Maintains competitive advantage"
                    ]
                },
                {
                    title: "Feature Planning & Analysis",
                    description: "We plan updates carefully before implementation.",
                    list: [
                        "Requirement analysis",
                        "Impact assessment",
                        "Technical feasibility checks",
                        "Roadmap alignment"
                    ]
                },
                {
                    title: "New Feature Development",
                    description: "We build and integrate new features safely.",
                    list: [
                        "Backend and frontend enhancements",
                        "API and integration updates",
                        "UI/UX feature improvements",
                        "Performance‑aware implementation"
                    ]
                },
                {
                    title: "Enhancement of Existing Features",
                    description: "Improve functionality without breaking workflows.",
                    list: [
                        "Feature refinement",
                        "Usability improvements",
                        "Workflow optimization",
                        "Backward compatibility"
                    ]
                },
                {
                    title: "Testing & Release Management",
                    description: "Feature updates are thoroughly validated before release.",
                    list: [
                        "Regression testing",
                        "Feature‑specific test cases",
                        "Staged rollouts",
                        "Production readiness checks"
                    ]
                },
                {
                    title: "Who Are Feature Updates Best For?",
                    description: "Feature update services are ideal for:",
                    list: [
                        "SaaS and product companies",
                        "Growing digital platforms",
                        "Enterprise applications",
                        "Customer‑driven products"
                    ]
                },
                {
                    title: "Why Solario Tech for Feature Updates?",
                    description: "Why clients trust us for feature enhancements:",
                    list: [
                        "12+ Years of Product Engineering Experience",
                        "Safe and structured update processes",
                        "Business‑aligned feature delivery",
                        "Minimal disruption to users",
                        "Startup‑friendly and enterprise‑ready support"
                    ]
                }
            ],
            cta: {
                title: "Evolve Your Product with Confidence",
                description: "Whether you’re adding new capabilities or enhancing existing ones, our feature update services help your software grow safely and strategically.",
                buttons: [
                    { label: "Start Support" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Compatibility Updates",
            hero: {
                title: "Compatibility Updates to Keep Your Software Future‑Ready",
                description: "Solario Tech provides Compatibility Update services to ensure your applications continue to work seamlessly across new devices, platforms, browsers, and software versions.\nWith 12+ years of engineering experience, we help businesses stay ahead of ecosystem changes without breaking existing functionality.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Support" }
                ]
            },
            content: [
                {
                    title: "What are Compatibility Updates?",
                    description: "Compatibility updates ensure software continues to function correctly as platforms, operating systems, browsers, and dependencies evolve.",
                    list: [
                        "Support for new OS and browser versions",
                        "Updated third‑party dependencies",
                        "Consistent behavior across environments",
                        "Reduced user‑reported issues"
                    ]
                },
                {
                    title: "Why Compatibility Updates Matter",
                    description: "Outdated compatibility leads to broken features and poor user experience.",
                    list: [
                        "Prevents system and UI breakage",
                        "Ensures smooth user experience",
                        "Extends application lifespan",
                        "Reduces emergency fixes"
                    ]
                },
                {
                    title: "OS & Platform Compatibility",
                    description: "Keep applications working across evolving platforms.",
                    list: [
                        "Windows, macOS, Linux updates",
                        "Mobile OS compatibility",
                        "Cloud and hosting environment updates",
                        "Runtime and framework alignment"
                    ]
                },
                {
                    title: "Browser & Device Support",
                    description: "Ensure consistent behavior across browsers and devices.",
                    list: [
                        "Browser version updates",
                        "Responsive behavior fixes",
                        "Device‑specific issue resolution",
                        "UI and interaction consistency"
                    ]
                },
                {
                    title: "Dependency & Library Updates",
                    description: "Keep third‑party libraries secure and compatible.",
                    list: [
                        "Framework upgrades",
                        "SDK and API version updates",
                        "Deprecated dependency replacement",
                        "Backward compatibility handling"
                    ]
                },
                {
                    title: "Testing & Validation",
                    description: "All compatibility changes are fully validated.",
                    list: [
                        "Cross‑platform testing",
                        "Regression testing",
                        "Environment validation",
                        "Safe production rollout"
                    ]
                },
                {
                    title: "Who Are Compatibility Updates Best For?",
                    description: "Compatibility update services are ideal for:",
                    list: [
                        "Long‑running software products",
                        "SaaS and web applications",
                        "Mobile and cross‑platform apps",
                        "Enterprise systems",
                        "Products with frequent dependency updates"
                    ]
                },
                {
                    title: "Why Solario Tech for Compatibility Updates?",
                    description: "Why clients trust us for long‑term compatibility:",
                    list: [
                        "12+ Years of Software Maintenance Experience",
                        "Proactive platform monitoring",
                        "Minimal disruption updates",
                        "Strong testing and validation practices",
                        "Startup‑friendly and enterprise‑ready support"
                    ]
                }
            ],
            cta: {
                title: "Stay Compatible as Technology Evolves",
                description: "Whether platforms change or dependencies update, our compatibility update services help your software stay reliable and user‑friendly.",
                buttons: [
                    { label: "Start Support" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Database Maintenance",
            hero: {
                title: "Reliable Database Maintenance for Secure & High‑Performance Systems",
                description: "Solario Tech provides comprehensive Database Maintenance services to keep your data systems secure, optimized, and running smoothly.\nWith 12+ years of backend and database engineering experience, we help businesses maintain data integrity, performance, and availability across growing workloads.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Support" }
                ]
            },
            content: [
                {
                    title: "What is Database Maintenance?",
                    description: "Database maintenance involves ongoing activities to ensure databases remain secure, efficient, and reliable over time.",
                    list: [
                        "Data integrity and consistency",
                        "Stable database performance",
                        "Reduced downtime and failures",
                        "Secure and reliable data storage"
                    ]
                },
                {
                    title: "Why Database Maintenance Matters",
                    description: "Poorly maintained databases lead to slow systems, data loss, and operational risk.",
                    list: [
                        "Improves query and application performance",
                        "Prevents data corruption and loss",
                        "Supports scalability and growth",
                        "Ensures business continuity"
                    ]
                },
                {
                    title: "Performance Tuning & Optimization",
                    description: "We keep databases fast and responsive.",
                    list: [
                        "Query optimization",
                        "Index management",
                        "Schema and structure tuning",
                        "Load and capacity optimization"
                    ]
                },
                {
                    title: "Data Integrity & Health Checks",
                    description: "Ensure your data remains accurate and consistent.",
                    list: [
                        "Data validation checks",
                        "Constraint and relationship verification",
                        "Corruption detection",
                        "Consistency audits"
                    ]
                },
                {
                    title: "Database Updates & Patching",
                    description: "Keep database engines secure and up to date.",
                    list: [
                        "Database version upgrades",
                        "Security patching",
                        "Compatibility validation",
                        "Safe rollout procedures"
                    ]
                },
                {
                    title: "Storage & Capacity Management",
                    description: "Plan and manage growing data volumes.",
                    list: [
                        "Storage usage monitoring",
                        "Capacity forecasting",
                        "Archiving strategies",
                        "Cleanup of obsolete data"
                    ]
                },
                {
                    title: "Monitoring & Alerts",
                    description: "Proactive monitoring prevents issues before they escalate.",
                    list: [
                        "Database health monitoring",
                        "Performance alerts",
                        "Error and failure detection",
                        "Proactive issue resolution"
                    ]
                },
                {
                    title: "Who Is Database Maintenance Best For?",
                    description: "Database maintenance services are ideal for:",
                    list: [
                        "SaaS and data‑driven platforms",
                        "Enterprise applications",
                        "High‑transaction systems",
                        "Business‑critical databases"
                    ]
                },
                {
                    title: "Why Solario Tech for Database Maintenance?",
                    description: "Why clients trust us with their data systems:",
                    list: [
                        "12+ Years of Database & Backend Experience",
                        "Performance‑focused maintenance approach",
                        "Secure and reliable database operations",
                        "Proactive monitoring and optimization",
                        "Startup‑friendly and enterprise‑ready support"
                    ]
                }
            ],
            cta: {
                title: "Keep Your Databases Healthy & High‑Performing",
                description: "Whether you’re managing growing data or maintaining critical systems, our database maintenance services help ensure reliability, security, and performance.",
                buttons: [
                    { label: "Start Support" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Backup Management",
            hero: {
                title: "Secure Backup Management for Complete Data Protection",
                description: "Solario Tech provides reliable Backup Management services to protect your critical data from loss, corruption, and disasters.\nWith 12+ years of backend and infrastructure experience, we design and manage backup strategies that ensure data availability, fast recovery, and business continuity.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Support" }
                ]
            },
            content: [
                {
                    title: "What is Backup Management?",
                    description: "Backup management involves creating, monitoring, and maintaining copies of data so it can be restored in case of failures or incidents.",
                    list: [
                        "Reliable data protection",
                        "Fast recovery from failures",
                        "Reduced risk of data loss",
                        "Business continuity assurance"
                    ]
                },
                {
                    title: "Why Backup Management Matters",
                    description: "Data loss can cause operational downtime, financial loss, and reputational damage.",
                    list: [
                        "Protection against accidental deletion",
                        "Recovery from hardware or system failures",
                        "Defense against ransomware and cyber incidents",
                        "Compliance with data retention policies"
                    ]
                },
                {
                    title: "Backup Strategy Design",
                    description: "We design backup plans tailored to your business needs.",
                    list: [
                        "Full, incremental, and differential backups",
                        "Backup frequency planning",
                        "Retention and archival policies",
                        "Recovery time and recovery point objectives (RTO/RPO)"
                    ]
                },
                {
                    title: "Automated Backup Execution",
                    description: "Backups run reliably without manual intervention.",
                    list: [
                        "Scheduled automated backups",
                        "Error handling and retry mechanisms",
                        "Consistent backup execution",
                        "Reduced human error"
                    ]
                },
                {
                    title: "Cloud & On‑Premise Backups",
                    description: "Flexible backup solutions across environments.",
                    list: [
                        "Cloud‑based backup solutions",
                        "On‑premise and hybrid backups",
                        "Off‑site data protection",
                        "Secure data storage"
                    ]
                },
                {
                    title: "Backup Monitoring & Validation",
                    description: "Ensure backups are successful and usable.",
                    list: [
                        "Backup success and failure monitoring",
                        "Integrity and consistency checks",
                        "Alerting for failed backups",
                        "Regular validation testing"
                    ]
                },
                {
                    title: "Restore & Disaster Recovery Support",
                    description: "Fast and reliable data recovery when needed.",
                    list: [
                        "Data restore testing",
                        "Disaster recovery drills",
                        "Minimal downtime recovery",
                        "Emergency restoration support"
                    ]
                },
                {
                    title: "Who Is Backup Management Best For?",
                    description: "Backup management services are ideal for:",
                    list: [
                        "SaaS and data‑driven platforms",
                        "Enterprises with critical data",
                        "Compliance‑driven businesses",
                        "Systems requiring high availability"
                    ]
                },
                {
                    title: "Why Solario Tech for Backup Management?",
                    description: "Why clients trust us with their data protection:",
                    list: [
                        "12+ Years of Infrastructure & Backend Experience",
                        "Reliable and automated backup strategies",
                        "Security‑focused data handling",
                        "Fast recovery and restore support",
                        "Startup‑friendly and enterprise‑ready service"
                    ]
                }
            ],
            cta: {
                title: "Protect Your Data Before It’s Too Late",
                description: "Whether you need routine backups or disaster‑ready protection, our backup management services help keep your data safe and recoverable.",
                buttons: [
                    { label: "Start Support" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "24/7 Support",
            hero: {
                title: "24/7 Support to Keep Your Systems Running Without Interruption",
                description: "Solario Tech provides reliable 24/7 Support services to ensure your applications, infrastructure, and systems are always monitored, maintained, and supported.\nWith 12+ years of engineering and operations experience, we act as your extended technical team—available anytime issues arise, day or night.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Support" }
                ]
            },
            content: [
                {
                    title: "What is 24/7 Support?",
                    description: "24/7 support ensures continuous technical assistance, monitoring, and issue resolution at all hours, including nights, weekends, and holidays.",
                    list: [
                        "Round‑the‑clock availability",
                        "Immediate issue response",
                        "Continuous system monitoring",
                        "Peace of mind for critical systems"
                    ]
                },
                {
                    title: "Why 24/7 Support Matters",
                    description: "System issues don’t follow business hours—support shouldn’t either.",
                    list: [
                        "Minimizes downtime",
                        "Faster incident resolution",
                        "Protects revenue and operations",
                        "Improves customer experience"
                    ]
                },
                {
                    title: "Incident Response & Issue Resolution",
                    description: "We respond immediately when issues occur.",
                    list: [
                        "Production incident handling",
                        "Error and outage resolution",
                        "Root cause investigation",
                        "Rapid recovery actions"
                    ]
                },
                {
                    title: "Proactive System Monitoring",
                    description: "Issues are detected before they escalate.",
                    list: [
                        "Application and server monitoring",
                        "Performance and error alerts",
                        "Health checks",
                        "Early warning notifications"
                    ]
                },
                {
                    title: "On‑Call Engineering Support",
                    description: "Experienced engineers available whenever needed.",
                    list: [
                        "Dedicated on‑call engineers",
                        "Escalation handling",
                        "Expert troubleshooting",
                        "Clear communication during incidents"
                    ]
                },
                {
                    title: "Maintenance & Support Tasks",
                    description: "Ongoing support beyond emergencies.",
                    list: [
                        "Routine system checks",
                        "Minor fixes and adjustments",
                        "Configuration updates",
                        "Operational support tasks"
                    ]
                },
                {
                    title: "Support Reporting & Communication",
                    description: "Transparent updates and documentation.",
                    list: [
                        "Incident and resolution reports",
                        "Response time tracking",
                        "Support activity logs",
                        "Clear stakeholder communication"
                    ]
                },
                {
                    title: "Who Is 24/7 Support Best For?",
                    description: "24/7 support services are ideal for:",
                    list: [
                        "Mission‑critical applications",
                        "SaaS and online platforms",
                        "Global businesses",
                        "High‑availability systems",
                        "Operations‑heavy products"
                    ]
                },
                {
                    title: "Why Solario Tech for 24/7 Support?",
                    description: "Why businesses rely on us for continuous support:",
                    list: [
                        "12+ Years of Engineering & Operations Experience",
                        "Fast response and resolution times",
                        "Proactive monitoring approach",
                        "Clear communication and reporting",
                        "Startup‑friendly and enterprise‑ready support"
                    ]
                }
            ],
            cta: {
                title: "Get Support When You Need It Most",
                description: "Whether it’s an urgent incident or continuous monitoring, our 24/7 support services ensure your systems stay reliable, secure, and always available.",
                buttons: [
                    { label: "Start Support" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "seo": [
        {
            id: "Keyword Research",
            hero: {
                title: "Data‑Driven Keyword Research to Attract the Right Audience",
                description: "Solario Tech provides in‑depth Keyword Research services to identify high‑value search terms that drive qualified traffic and real business results.\nWith 12+ years of digital and SEO experience, we uncover keywords that align with user intent, competition levels, and growth opportunities.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start SEO" }
                ]
            },
            content: [
                {
                    title: "What is Keyword Research?",
                    description: "Keyword research is the process of identifying search terms users actively use to find products, services, or information online.",
                    list: [
                        "Search intent discovery",
                        "Traffic opportunity identification",
                        "SEO and content alignment",
                        "Data‑backed targeting"
                    ]
                },
                {
                    title: "Why Keyword Research Matters",
                    description: "Targeting the wrong keywords wastes time and budget.",
                    list: [
                        "Attracts high‑intent users",
                        "Improves organic rankings",
                        "Increases qualified traffic",
                        "Supports long‑term SEO growth"
                    ]
                },
                {
                    title: "Search Intent Analysis",
                    description: "Keywords mapped to real user intent.",
                    list: [
                        "Informational intent",
                        "Commercial intent",
                        "Transactional intent",
                        "Navigational intent"
                    ]
                },
                {
                    title: "High‑Value Keyword Discovery",
                    description: "Find keywords that balance traffic and competition.",
                    list: [
                        "Short‑tail and long‑tail keywords",
                        "Low‑competition opportunities",
                        "Industry‑specific terms",
                        "Buyer‑ready phrases"
                    ]
                },
                {
                    title: "Keyword Mapping & Structure",
                    description: "Keywords aligned with site architecture.",
                    list: [
                        "Page‑level keyword mapping",
                        "Content cluster planning",
                        "Avoiding keyword cannibalization",
                        "SEO‑friendly structure"
                    ]
                },
                {
                    title: "Who Is Keyword Research Best For?",
                    description: "Keyword research services are ideal for:",
                    list: [
                        "New website launches",
                        "SEO and content strategies",
                        "Lead‑generation businesses",
                        "E‑commerce platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for Keyword Research?",
                    description: "Why clients trust our SEO foundation:",
                    list: [
                        "12+ Years of SEO & Digital Experience",
                        "Intent‑focused keyword strategy",
                        "Business‑aligned keyword selection",
                        "Scalable SEO planning",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Target Keywords That Drive Real Results",
                description: "Our keyword research services help you rank for terms that actually convert and grow your business.",
                buttons: [
                    { label: "Start SEO" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "On-Page SEO",
            hero: {
                title: "On‑Page SEO Optimization to Improve Rankings & User Experience",
                description: "Solario Tech delivers comprehensive On‑Page SEO services to optimize individual web pages for better search visibility, relevance, and user engagement.\nWith 12+ years of SEO and web optimization experience, we ensure your pages are search‑engine‑friendly, content‑rich, and conversion‑focused.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start SEO" }
                ]
            },
            content: [
                {
                    title: "What is On‑Page SEO?",
                    description: "On‑page SEO focuses on optimizing content and HTML elements on individual pages to improve rankings and usability.",
                    list: [
                        "Search‑engine‑friendly content",
                        "Improved page relevance",
                        "Better user experience",
                        "Higher organic visibility"
                    ]
                },
                {
                    title: "Why On‑Page SEO Matters",
                    description: "Even great content won’t rank without proper on‑page optimization.",
                    list: [
                        "Improves keyword rankings",
                        "Increases organic traffic",
                        "Enhances page clarity for users",
                        "Boosts conversion potential"
                    ]
                },
                {
                    title: "Content Optimization",
                    description: "Content optimized for users and search engines.",
                    list: [
                        "Keyword‑aligned content",
                        "Search intent matching",
                        "Content structure improvements",
                        "Readability and engagement optimization"
                    ]
                },
                {
                    title: "Meta Tags & SERP Optimization",
                    description: "Improve click‑through rates from search results.",
                    list: [
                        "SEO‑friendly title tags",
                        "Compelling meta descriptions",
                        "Keyword relevance optimization",
                        "SERP appearance enhancements"
                    ]
                },
                {
                    title: "Header & Content Structure",
                    description: "Clear hierarchy for better crawling and readability.",
                    list: [
                        "H1–H6 header optimization",
                        "Logical content flow",
                        "Keyword placement strategy",
                        "Improved scanability"
                    ]
                },
                {
                    title: "Internal Linking Optimization",
                    description: "Strengthen site structure and authority flow.",
                    list: [
                        "Contextual internal links",
                        "Improved crawlability",
                        "Reduced orphan pages",
                        "Better user navigation"
                    ]
                },
                {
                    title: "Image & Media Optimization",
                    description: "Optimize visuals for speed and accessibility.",
                    list: [
                        "Image compression",
                        "Alt text optimization",
                        "Media relevance",
                        "Improved page load times"
                    ]
                },
                {
                    title: "Who Is On‑Page SEO Best For?",
                    description: "On‑page SEO services are ideal for:",
                    list: [
                        "Business websites",
                        "Service and landing pages",
                        "Blogs and content platforms",
                        "E‑commerce product pages"
                    ]
                },
                {
                    title: "Why Solario Tech for On‑Page SEO?",
                    description: "Why clients trust us for on‑page optimization:",
                    list: [
                        "12+ Years of SEO & Content Optimization Experience",
                        "User‑intent‑focused optimization",
                        "Search‑engine‑compliant practices",
                        "Measurable ranking and traffic improvements",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Optimize Pages That Rank and Convert",
                description: "Our on‑page SEO services help you turn existing pages into powerful traffic and conversion assets.",
                buttons: [
                    { label: "Start SEO" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Technical SEO",
            hero: {
                title: "Technical SEO to Build a Strong Foundation for Search Visibility",
                description: "Solario Tech delivers in‑depth Technical SEO services to ensure your website is crawlable, indexable, fast, and technically sound for search engines.\nWith 12+ years of web engineering and SEO experience, we fix hidden technical issues that block rankings and organic growth.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start SEO" }
                ]
            },
            content: [
                {
                    title: "What is Technical SEO?",
                    description: "Technical SEO focuses on optimizing the backend and infrastructure of a website so search engines can crawl, index, and rank it efficiently.",
                    list: [
                        "Improved crawlability and indexation",
                        "Faster website performance",
                        "Better search engine understanding",
                        "Stronger SEO foundation"
                    ]
                },
                {
                    title: "Why Technical SEO Matters",
                    description: "Even great content won’t rank if search engines can’t properly access your site.",
                    list: [
                        "Removes technical barriers to ranking",
                        "Improves site speed and stability",
                        "Enhances mobile and user experience",
                        "Supports long‑term SEO scalability"
                    ]
                },
                {
                    title: "Crawlability & Indexation Optimization",
                    description: "Ensure search engines can access the right pages.",
                    list: [
                        "Robots.txt configuration",
                        "XML sitemap optimization",
                        "Indexation control",
                        "Fixing crawl errors"
                    ]
                },
                {
                    title: "Site Speed & Performance Optimization",
                    description: "Fast websites rank better and convert more.",
                    list: [
                        "Core Web Vitals optimization",
                        "Page load speed improvements",
                        "Asset and resource optimization",
                        "Server performance tuning"
                    ]
                },
                {
                    title: "Mobile & Responsive SEO",
                    description: "Optimize for mobile‑first indexing.",
                    list: [
                        "Mobile usability fixes",
                        "Responsive layout validation",
                        "Touch and viewport optimization",
                        "Cross‑device consistency"
                    ]
                },
                {
                    title: "URL Structure & Site Architecture",
                    description: "Clean structure for better crawling and UX.",
                    list: [
                        "SEO‑friendly URL structures",
                        "Logical site hierarchy",
                        "Internal link depth optimization",
                        "Canonicalization handling"
                    ]
                },
                {
                    title: "Schema & Structured Data",
                    description: "Help search engines understand your content.",
                    list: [
                        "Schema markup implementation",
                        "Rich result eligibility",
                        "Entity and content clarity",
                        "Improved SERP appearance"
                    ]
                },
                {
                    title: "Security & Technical Best Practices",
                    description: "Trust and stability matter for SEO.",
                    list: [
                        "HTTPS and security checks",
                        "Duplicate content resolution",
                        "Broken link and redirect fixes",
                        "Error handling (4xx / 5xx)"
                    ]
                },
                {
                    title: "Who Is Technical SEO Best For?",
                    description: "Technical SEO services are ideal for:",
                    list: [
                        "Growing business websites",
                        "Large or complex websites",
                        "E‑commerce platforms",
                        "SaaS and content‑heavy sites",
                        "Sites with ranking or indexing issues"
                    ]
                },
                {
                    title: "Why Solario Tech for Technical SEO?",
                    description: "Why clients trust our technical SEO expertise:",
                    list: [
                        "12+ Years of Web & SEO Engineering Experience",
                        "Deep technical and search engine understanding",
                        "Performance‑driven optimization approach",
                        "Scalable, future‑proof SEO foundations",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Fix the Technical Barriers Holding You Back",
                description: "Our technical SEO services ensure your website is fast, accessible, and fully optimized for search engine success.",
                buttons: [
                    { label: "Start SEO" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Link Building",
            hero: {
                title: "Strategic Link Building to Increase Authority & Rankings",
                description: "Solario Tech provides ethical, high‑quality Link Building services to strengthen your website’s authority and improve search engine rankings.\nWith 12+ years of SEO experience, we focus on earning relevant, trustworthy backlinks that drive sustainable organic growth—not short‑term spikes.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start SEO" }
                ]
            },
            content: [
                {
                    title: "What is Link Building?",
                    description: "Link building is the process of acquiring high‑quality backlinks from reputable websites to improve search engine trust and authority.",
                    list: [
                        "Increased domain authority",
                        "Improved keyword rankings",
                        "Stronger search engine trust",
                        "Sustainable SEO growth"
                    ]
                },
                {
                    title: "Why Link Building Matters",
                    description: "Backlinks remain one of the strongest ranking signals for search engines.",
                    list: [
                        "Signals credibility and relevance",
                        "Improves competitive rankings",
                        "Drives referral traffic",
                        "Supports long‑term SEO success"
                    ]
                },
                {
                    title: "High‑Quality Backlink Acquisition",
                    description: "We focus on quality, not quantity.",
                    list: [
                        "Authoritative website backlinks",
                        "Industry‑relevant links",
                        "Editorial and contextual links",
                        "Natural link profiles"
                    ]
                },
                {
                    title: "Content‑Driven Link Building",
                    description: "Earn links through valuable content.",
                    list: [
                        "Link‑worthy content creation",
                        "Resource and guide outreach",
                        "Thought leadership content",
                        "Organic link attraction"
                    ]
                },
                {
                    title: "Outreach & Relationship Building",
                    description: "Manual, personalized outreach—not spam.",
                    list: [
                        "Publisher and blogger outreach",
                        "Industry relationship building",
                        "Guest posting opportunities",
                        "Brand visibility growth"
                    ]
                },
                {
                    title: "Competitor Backlink Analysis",
                    description: "Identify link opportunities your competitors already use.",
                    list: [
                        "Competitor backlink audits",
                        "Gap analysis",
                        "Opportunity identification",
                        "Strategic link targeting"
                    ]
                },
                {
                    title: "Link Quality Monitoring",
                    description: "Protect your site from harmful links.",
                    list: [
                        "Backlink profile monitoring",
                        "Spam and toxic link detection",
                        "Disavow guidance",
                        "Ongoing quality control"
                    ]
                },
                {
                    title: "Who Is Link Building Best For?",
                    description: "Link building services are ideal for:",
                    list: [
                        "Competitive industries",
                        "SaaS and B2B websites",
                        "E‑commerce platforms",
                        "Brands looking to scale organic growth"
                    ]
                },
                {
                    title: "Why Solario Tech for Link Building?",
                    description: "Why clients trust our link building approach:",
                    list: [
                        "12+ Years of Ethical SEO Experience",
                        "White‑hat, Google‑compliant strategies",
                        "Quality‑focused backlink acquisition",
                        "Transparent reporting",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build Authority That Search Engines Trust",
                description: "Our link building services help you earn powerful backlinks that improve rankings, authority, and long‑term organic performance.",
                buttons: [
                    { label: "Start SEO" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Content Strategy",
            hero: {
                title: "Content Strategy That Drives Traffic, Engagement & Conversions",
                description: "Solario Tech delivers data‑driven Content Strategy services to help brands attract, engage, and convert the right audience through high‑quality content.\nWith 12+ years of SEO and content marketing experience, we align content creation with search intent, business goals, and long‑term growth.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start SEO" }
                ]
            },
            content: [
                {
                    title: "What is Content Strategy?",
                    description: "Content strategy is the planning, creation, optimization, and management of content to achieve measurable business and SEO goals.",
                    list: [
                        "Purpose‑driven content planning",
                        "SEO‑aligned content creation",
                        "Consistent brand messaging",
                        "Long‑term organic growth"
                    ]
                },
                {
                    title: "Why Content Strategy Matters",
                    description: "Random content rarely delivers consistent results without strategy.",
                    list: [
                        "Attracts the right audience",
                        "Supports SEO and rankings",
                        "Builds brand authority",
                        "Drives leads and conversions"
                    ]
                },
                {
                    title: "Audience & Intent Research",
                    description: "Content built around real user needs.",
                    list: [
                        "Target audience analysis",
                        "Search intent mapping",
                        "Customer journey alignment",
                        "Content relevance planning"
                    ]
                },
                {
                    title: "SEO‑Driven Content Planning",
                    description: "Content planned for discoverability and performance.",
                    list: [
                        "Keyword‑based content ideas",
                        "Topic clusters and pillar pages",
                        "Content gap analysis",
                        "Search demand alignment"
                    ]
                },
                {
                    title: "Content Types & Formats",
                    description: "Right content for the right purpose.",
                    list: [
                        "Blog and article strategy",
                        "Landing page content",
                        "Service and product pages",
                        "Guides, FAQs, and resources"
                    ]
                },
                {
                    title: "Content Optimization & Refresh",
                    description: "Improve and extend the life of existing content.",
                    list: [
                        "Content audits",
                        "SEO optimization updates",
                        "Content pruning and consolidation",
                        "Performance‑based improvements"
                    ]
                },
                {
                    title: "Editorial Planning & Consistency",
                    description: "Structured content delivery over time.",
                    list: [
                        "Content calendars",
                        "Publishing schedules",
                        "Tone and style consistency",
                        "Scalable content workflows"
                    ]
                },
                {
                    title: "Who Is Content Strategy Best For?",
                    description: "Content strategy services are ideal for:",
                    list: [
                        "Business and service websites",
                        "SaaS and B2B companies",
                        "Content‑driven brands",
                        "Websites aiming for long‑term SEO growth"
                    ]
                },
                {
                    title: "Why Solario Tech for Content Strategy?",
                    description: "Why clients trust our content planning approach:",
                    list: [
                        "12+ Years of SEO & Content Marketing Experience",
                        "Search‑intent‑focused strategies",
                        "Business‑aligned content planning",
                        "Scalable and sustainable growth models",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Turn Content Into a Growth Engine",
                description: "Our content strategy services help you publish the right content, for the right audience, at the right time—driving consistent SEO and business results.",
                buttons: [
                    { label: "Start SEO" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Local SEO",
            hero: {
                title: "Local SEO to Drive Nearby Customers & Local Visibility",
                description: "Solario Tech delivers targeted Local SEO services to help businesses appear prominently in local search results and map listings.\nWith 12+ years of SEO and local search experience, we optimize your online presence to attract nearby customers who are ready to convert.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start SEO" }
                ]
            },
            content: [
                {
                    title: "What is Local SEO?",
                    description: "Local SEO focuses on optimizing your digital presence so your business appears in location‑based searches and map results.",
                    list: [
                        "Higher visibility in local searches",
                        "Improved Google Maps presence",
                        "Increased foot traffic and leads",
                        "Stronger local brand awareness"
                    ]
                },
                {
                    title: "Why Local SEO Matters",
                    description: "Customers searching locally often have high purchase intent.",
                    list: [
                        "Attracts nearby, ready‑to‑buy customers",
                        "Improves local trust and credibility",
                        "Boosts calls, visits, and inquiries",
                        "Outperforms generic SEO for local intent"
                    ]
                },
                {
                    title: "Google Business Profile Optimization",
                    description: "Optimize your business listing for maximum visibility.",
                    list: [
                        "Profile setup and optimization",
                        "Accurate business information (NAP)",
                        "Category and service optimization",
                        "Image and update management"
                    ]
                },
                {
                    title: "Local Keyword Targeting",
                    description: "Rank for keywords with geographic intent.",
                    list: [
                        "City and area‑based keywords",
                        "Service + location targeting",
                        "Search intent alignment",
                        "Localized landing pages"
                    ]
                },
                {
                    title: "Local Citations & Listings",
                    description: "Build consistency across local directories.",
                    list: [
                        "Business directory submissions",
                        "NAP consistency management",
                        "Citation cleanup",
                        "Trust signal strengthening"
                    ]
                },
                {
                    title: "Reviews & Reputation Management",
                    description: "Leverage reviews to improve rankings and trust.",
                    list: [
                        "Review acquisition strategies",
                        "Review response management",
                        "Reputation monitoring",
                        "Trust and credibility improvement"
                    ]
                },
                {
                    title: "Local Content & Link Building",
                    description: "Strengthen relevance in your service area.",
                    list: [
                        "Location‑specific content",
                        "Local backlinks and partnerships",
                        "Community and niche relevance",
                        "Geo‑focused authority building"
                    ]
                },
                {
                    title: "Who Is Local SEO Best For?",
                    description: "Local SEO services are ideal for:",
                    list: [
                        "Local businesses and service providers",
                        "Multi‑location companies",
                        "Brick‑and‑mortar stores",
                        "Professionals targeting specific regions"
                    ]
                },
                {
                    title: "Why Solario Tech for Local SEO?",
                    description: "Why businesses trust us for local growth:",
                    list: [
                        "12+ Years of Local & Organic SEO Experience",
                        "Data‑driven local optimization strategies",
                        "Proven results in competitive local markets",
                        "Transparent tracking and reporting",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Get Found by Customers Near You",
                description: "Our local SEO services help you dominate local search results, attract nearby customers, and grow your business where it matters most.",
                buttons: [
                    { label: "Start SEO" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Analytics & Reporting",
            hero: {
                title: "Analytics & Reporting to Measure, Optimize & Scale SEO Performance",
                description: "Solario Tech provides comprehensive Analytics & Reporting services to track SEO performance, user behavior, and business outcomes.\nWith 12+ years of SEO and data analysis experience, we turn raw data into clear insights that guide smarter decisions and continuous growth.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start SEO" }
                ]
            },
            content: [
                {
                    title: "What is Analytics & Reporting?",
                    description: "Analytics and reporting involve collecting, analyzing, and presenting data to understand how SEO efforts impact traffic, engagement, and conversions.",
                    list: [
                        "Clear visibility into SEO performance",
                        "Data‑driven decision making",
                        "Measurable ROI tracking",
                        "Continuous optimization insights"
                    ]
                },
                {
                    title: "Why Analytics & Reporting Matter",
                    description: "SEO without measurement is guesswork.",
                    list: [
                        "Shows what’s working and what’s not",
                        "Improves ROI and efficiency",
                        "Aligns SEO with business goals",
                        "Supports long‑term growth strategies"
                    ]
                },
                {
                    title: "Traffic & Behavior Analysis",
                    description: "Understand how users find and interact with your site.",
                    list: [
                        "Organic traffic tracking",
                        "User behavior and engagement analysis",
                        "Top‑performing pages",
                        "Bounce rate and session insights"
                    ]
                },
                {
                    title: "Keyword & Ranking Reports",
                    description: "Track visibility across search engines.",
                    list: [
                        "Keyword ranking trends",
                        "Visibility and impression tracking",
                        "SERP position changes",
                        "Opportunity identification"
                    ]
                },
                {
                    title: "Conversion & Goal Tracking",
                    description: "Measure real business impact from SEO.",
                    list: [
                        "Lead and conversion tracking",
                        "Goal setup and monitoring",
                        "Attribution insights",
                        "Revenue‑driven reporting"
                    ]
                },
                {
                    title: "Technical & SEO Health Reporting",
                    description: "Monitor site health and SEO foundations.",
                    list: [
                        "Indexation and crawl reports",
                        "Site speed and Core Web Vitals",
                        "Technical issue tracking",
                        "SEO health snapshots"
                    ]
                },
                {
                    title: "Custom Dashboards & Reports",
                    description: "Clear, easy‑to‑understand reporting.",
                    list: [
                        "Custom KPI dashboards",
                        "Monthly and quarterly reports",
                        "Executive‑friendly summaries",
                        "Actionable recommendations"
                    ]
                },
                {
                    title: "Who Is Analytics & Reporting Best For?",
                    description: "Analytics and reporting services are ideal for:",
                    list: [
                        "Businesses investing in SEO",
                        "SaaS and lead‑generation websites",
                        "Marketing teams needing clarity",
                        "Decision‑makers focused on ROI"
                    ]
                },
                {
                    title: "Why Solario Tech for Analytics & Reporting?",
                    description: "Why clients trust our reporting approach:",
                    list: [
                        "12+ Years of SEO & Data Analysis Experience",
                        "Business‑focused reporting, not vanity metrics",
                        "Clear insights with actionable recommendations",
                        "Transparent and consistent reporting",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Turn SEO Data Into Growth Decisions",
                description: "Our analytics and reporting services give you the clarity needed to optimize performance, justify investment, and scale SEO with confidence.",
                buttons: [
                    { label: "Start SEO" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Competitor Analysis",
            hero: {
                title: "Competitor Analysis to Outrank, Outperform & Win Market Share",
                description: "Solario Tech delivers in‑depth Competitor Analysis services to help you understand what your competitors are doing right—and where you can do it better.\nWith 12+ years of SEO and digital strategy experience, we uncover opportunities to outrank competitors, capture market gaps, and build a stronger organic presence.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start SEO" }
                ]
            },
            content: [
                {
                    title: "What is Competitor Analysis?",
                    description: "Competitor analysis involves researching and evaluating competing websites to understand their SEO strategies, strengths, and weaknesses.",
                    list: [
                        "Visibility into competitor strategies",
                        "Identification of ranking opportunities",
                        "Market positioning insights",
                        "Smarter SEO decision‑making"
                    ]
                },
                {
                    title: "Why Competitor Analysis Matters",
                    description: "Understanding competitors helps you avoid guesswork and focus on proven opportunities.",
                    list: [
                        "Reveals what’s working in your industry",
                        "Highlights keyword and content gaps",
                        "Accelerates ranking improvements",
                        "Supports strategic SEO planning"
                    ]
                },
                {
                    title: "Competitor Keyword Analysis",
                    description: "Discover keywords driving traffic to competitors.",
                    list: [
                        "Top‑ranking competitor keywords",
                        "High‑intent keyword opportunities",
                        "Keyword gap analysis",
                        "Search demand comparison"
                    ]
                },
                {
                    title: "Content & Page Analysis",
                    description: "Analyze competitor content that ranks and converts.",
                    list: [
                        "Top‑performing pages",
                        "Content depth and structure analysis",
                        "Topic coverage comparison",
                        "Content improvement opportunities"
                    ]
                },
                {
                    title: "Backlink & Authority Analysis",
                    description: "Understand how competitors build authority.",
                    list: [
                        "Competitor backlink profiles",
                        "Link source quality assessment",
                        "Authority gap analysis",
                        "Strategic link opportunities"
                    ]
                },
                {
                    title: "Technical & UX Benchmarking",
                    description: "Compare technical SEO and user experience.",
                    list: [
                        "Site speed and performance comparison",
                        "Mobile and UX benchmarks",
                        "Technical SEO strengths and weaknesses",
                        "Best‑practice identification"
                    ]
                },
                {
                    title: "Competitive Positioning Insights",
                    description: "See where you stand in the market.",
                    list: [
                        "Visibility and ranking comparisons",
                        "Market share insights",
                        "Opportunity prioritization",
                        "Strategic SEO recommendations"
                    ]
                },
                {
                    title: "Who Is Competitor Analysis Best For?",
                    description: "Competitor analysis services are ideal for:",
                    list: [
                        "Businesses in competitive industries",
                        "SaaS and B2B companies",
                        "E‑commerce brands",
                        "Websites struggling to outrank competitors",
                        "Teams planning aggressive SEO growth"
                    ]
                },
                {
                    title: "Why Solario Tech for Competitor Analysis?",
                    description: "Why clients trust our competitive insights:",
                    list: [
                        "12+ Years of SEO & Market Analysis Experience",
                        "Actionable, not surface‑level insights",
                        "Clear gap and opportunity identification",
                        "Data‑backed strategic recommendations",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Outrank Competitors with Confidence",
                description: "Our competitor analysis services give you the insights needed to outperform rivals, capture untapped opportunities, and grow organic visibility faster.",
                buttons: [
                    { label: "Start SEO" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "php-development": [
        {
            id: "Laravel Development",
            hero: {
                title: "Laravel Development for Scalable & Secure Web Applications",
                description: "Solario Tech delivers robust Laravel Development services to build high‑performance, secure, and scalable web applications.\nWith 12+ years of backend and PHP engineering experience, we leverage Laravel’s powerful ecosystem to create clean, maintainable, and future‑ready solutions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Development" }
                ]
            },
            content: [
                {
                    title: "What is Laravel Development?",
                    description: "Laravel is a modern PHP framework used to build secure, scalable, and maintainable web applications.",
                    list: [
                        "MVC‑based clean architecture",
                        "Secure and scalable backend",
                        "Rapid development with reliability",
                        "Easy maintenance and upgrades"
                    ]
                },
                {
                    title: "Why Choose Laravel?",
                    description: "Laravel simplifies complex backend development while maintaining high standards.",
                    list: [
                        "Built‑in security features",
                        "Faster development cycles",
                        "High performance and scalability",
                        "Large ecosystem and community support"
                    ]
                },
                {
                    title: "Custom Laravel Application Development",
                    description: "Tailored solutions built around your business logic.",
                    list: [
                        "Custom web applications",
                        "Business workflow automation",
                        "Role‑based access systems",
                        "Enterprise‑grade architectures"
                    ]
                },
                {
                    title: "API & Backend Development",
                    description: "Powerful backends that integrate seamlessly.",
                    list: [
                        "RESTful API development",
                        "Third‑party API integrations",
                        "Authentication and authorization",
                        "Mobile and frontend backend support"
                    ]
                },
                {
                    title: "Laravel Performance & Scalability",
                    description: "Optimized systems that grow with your business.",
                    list: [
                        "Query and cache optimization",
                        "Queue and job management",
                        "Scalable database design",
                        "High‑traffic readiness"
                    ]
                },
                {
                    title: "Security & Best Practices",
                    description: "Security‑first development approach.",
                    list: [
                        "CSRF and XSS protection",
                        "Secure authentication flows",
                        "Data validation and encryption",
                        "Compliance‑ready implementations"
                    ]
                },
                {
                    title: "Who Is Laravel Development Best For?",
                    description: "Laravel development services are ideal for:",
                    list: [
                        "SaaS products",
                        "Business and enterprise platforms",
                        "Custom web applications",
                        "Startups and scaling companies"
                    ]
                },
                {
                    title: "Why Solario Tech for Laravel Development?",
                    description: "Why clients trust our Laravel expertise:",
                    list: [
                        "12+ Years of Backend & PHP Experience",
                        "Clean, maintainable code standards",
                        "Performance‑focused architecture",
                        "Secure and scalable solutions",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build Powerful Applications with Laravel",
                description: "Whether you’re launching a new product or modernizing an existing system, our Laravel development services deliver performance, security, and scalability.",
                buttons: [
                    { label: "Start Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "WordPress Custom",
            hero: {
                title: "Custom WordPress Development Tailored to Your Business",
                description: "Solario Tech delivers fully custom WordPress Development services to build fast, secure, and scalable websites beyond standard themes and plugins.\nWith 12+ years of PHP and CMS engineering experience, we create WordPress solutions that are flexible, maintainable, and business‑driven.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Development" }
                ]
            },
            content: [
                {
                    title: "What is Custom WordPress Development?",
                    description: "Custom WordPress development goes beyond pre‑built themes to create tailored functionality, layouts, and performance‑optimized solutions.",
                    list: [
                        "Fully custom themes and layouts",
                        "Tailored functionality and workflows",
                        "Optimized performance and security",
                        "Scalable and maintainable architecture"
                    ]
                },
                {
                    title: "Why Choose Custom WordPress?",
                    description: "Off‑the‑shelf themes limit flexibility and performance.",
                    list: [
                        "Unique brand experience",
                        "Clean and optimized codebase",
                        "Better performance and SEO",
                        "Future‑proof customization"
                    ]
                },
                {
                    title: "Custom Theme Development",
                    description: "Pixel‑perfect designs built for speed and usability.",
                    list: [
                        "UI/UX‑aligned custom themes",
                        "Responsive and mobile‑first design",
                        "Clean template architecture",
                        "Accessibility‑friendly layouts"
                    ]
                },
                {
                    title: "Custom Plugin Development",
                    description: "Extend WordPress safely and efficiently.",
                    list: [
                        "Custom plugins and features",
                        "Business logic implementation",
                        "Third‑party service integrations",
                        "Reusable and maintainable plugins"
                    ]
                },
                {
                    title: "Performance & SEO Optimization",
                    description: "WordPress sites optimized for speed and rankings.",
                    list: [
                        "Page speed optimization",
                        "Core Web Vitals improvements",
                        "SEO‑friendly structure",
                        "Lightweight, clean code"
                    ]
                },
                {
                    title: "Security & Maintenance",
                    description: "Secure WordPress setups built to last.",
                    list: [
                        "Hardened security configurations",
                        "Plugin and theme security review",
                        "Spam and vulnerability protection",
                        "Ongoing maintenance support"
                    ]
                },
                {
                    title: "Who Is Custom WordPress Best For?",
                    description: "Custom WordPress development is ideal for:",
                    list: [
                        "Business and corporate websites",
                        "Marketing and landing pages",
                        "Content‑driven platforms",
                        "Brands needing flexibility and control"
                    ]
                },
                {
                    title: "Why Solario Tech for WordPress Development?",
                    description: "Why clients trust our WordPress expertise:",
                    list: [
                        "12+ Years of PHP & WordPress Experience",
                        "Custom‑first, performance‑focused approach",
                        "SEO and security‑aware development",
                        "Clean, maintainable code standards",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build a WordPress Site That Truly Fits Your Business",
                description: "Whether you need a custom website, advanced features, or performance improvements, our WordPress development services deliver flexibility, speed, and results.",
                buttons: [
                    { label: "Start Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "API Development",
            hero: {
                title: "API Development for Seamless & Scalable System Integration",
                description: "Solario Tech delivers secure, scalable, and well‑documented API Development services that enable smooth communication between applications, platforms, and services.\nWith 12+ years of backend and integration experience, we build APIs that are reliable, high‑performing, and easy to extend as your systems grow.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Development" }
                ]
            },
            content: [
                {
                    title: "What is API Development?",
                    description: "API development focuses on building interfaces that allow different software systems to communicate securely and efficiently.",
                    list: [
                        "Seamless system communication",
                        "Scalable data exchange",
                        "Secure access to services",
                        "Faster feature development"
                    ]
                },
                {
                    title: "Why API Development Matters",
                    description: "Modern applications rely on APIs to stay flexible and connected.",
                    list: [
                        "Enables frontend and mobile integration",
                        "Supports third‑party services",
                        "Improves system modularity",
                        "Future‑proofs application architecture"
                    ]
                },
                {
                    title: "RESTful & JSON API Development",
                    description: "Clean, standards‑based API architectures.",
                    list: [
                        "RESTful API design",
                        "JSON‑based responses",
                        "Clear endpoint structure",
                        "Versioned APIs"
                    ]
                },
                {
                    title: "Authentication & Authorization",
                    description: "Secure access control for APIs.",
                    list: [
                        "Token‑based authentication (JWT, OAuth)",
                        "Role‑based access control",
                        "Secure API key management",
                        "Permission‑driven endpoints"
                    ]
                },
                {
                    title: "Third‑Party API Integrations",
                    description: "Connect your system with external services.",
                    list: [
                        "Payment gateway integration",
                        "CRM and marketing tools",
                        "Cloud and SaaS platforms",
                        "Data synchronization services"
                    ]
                },
                {
                    title: "Performance & Scalability",
                    description: "APIs built to handle growth and load.",
                    list: [
                        "Optimized response times",
                        "Caching strategies",
                        "Rate limiting",
                        "High‑traffic readiness"
                    ]
                },
                {
                    title: "API Documentation & Testing",
                    description: "Well‑documented and reliable APIs.",
                    list: [
                        "Developer‑friendly documentation",
                        "Postman / Swagger support",
                        "Automated testing",
                        "Error handling standards"
                    ]
                },
                {
                    title: "Who Is API Development Best For?",
                    description: "API development services are ideal for:",
                    list: [
                        "Web and mobile applications",
                        "SaaS platforms",
                        "Microservices architectures",
                        "Businesses needing integrations"
                    ]
                },
                {
                    title: "Why Solario Tech for API Development?",
                    description: "Why clients trust our API expertise:",
                    list: [
                        "12+ Years of Backend & Integration Experience",
                        "Secure and scalable API design",
                        "Clean architecture and documentation",
                        "Performance‑focused implementation",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build APIs That Power Growth",
                description: "Whether you need internal APIs or public integrations, our API development services deliver secure, scalable, and future‑ready solutions.",
                buttons: [
                    { label: "Start Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "E-commerce Solutions",
            hero: {
                title: "E‑commerce Solutions Built for Growth, Security & Conversions",
                description: "Solario Tech delivers end‑to‑end E‑commerce Solutions to help businesses sell online with confidence.\nWith 12+ years of web and commerce development experience, we build secure, scalable, and high‑converting online stores tailored to your products, users, and business goals.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Development" }
                ]
            },
            content: [
                {
                    title: "What are E‑commerce Solutions?",
                    description: "E‑commerce solutions involve designing, developing, and optimizing online stores that support product management, payments, orders, and customer experiences.",
                    list: [
                        "End‑to‑end online selling capability",
                        "Secure payment processing",
                        "Scalable product and order management",
                        "Seamless customer experience"
                    ]
                },
                {
                    title: "Why E‑commerce Solutions Matter",
                    description: "A poorly built store loses customers, revenue, and trust.",
                    list: [
                        "Improves conversion rates",
                        "Ensures secure transactions",
                        "Supports business scalability",
                        "Enhances customer trust and retention"
                    ]
                },
                {
                    title: "Custom E‑commerce Development",
                    description: "Tailored solutions built around your business needs.",
                    list: [
                        "Custom storefront development",
                        "Unique checkout flows",
                        "Business‑specific features",
                        "Flexible architecture"
                    ]
                },
                {
                    title: "Platform‑Based Solutions",
                    description: "Powerful platforms customized to your requirements.",
                    list: [
                        "WooCommerce development",
                        "Custom Shopify integrations",
                        "Headless commerce setups",
                        "CMS‑driven e‑commerce"
                    ]
                },
                {
                    title: "Payment Gateway Integration",
                    description: "Secure and reliable payment processing.",
                    list: [
                        "Multiple payment gateway integration",
                        "Secure transaction handling",
                        "International and local payment support",
                        "Fraud prevention measures"
                    ]
                },
                {
                    title: "Product, Cart & Order Management",
                    description: "Smooth operations from browsing to delivery.",
                    list: [
                        "Product catalog management",
                        "Inventory control",
                        "Cart and checkout optimization",
                        "Order tracking systems"
                    ]
                },
                {
                    title: "Performance & Conversion Optimization",
                    description: "Stores optimized for speed and sales.",
                    list: [
                        "Fast page load times",
                        "Mobile‑first shopping experience",
                        "UX‑driven checkout optimization",
                        "Reduced cart abandonment"
                    ]
                },
                {
                    title: "Security & Compliance",
                    description: "Protect your store and customer data.",
                    list: [
                        "Secure authentication",
                        "Data encryption",
                        "PCI‑compliant payment handling",
                        "Regular security audits"
                    ]
                },
                {
                    title: "Who Are E‑commerce Solutions Best For?",
                    description: "E‑commerce services are ideal for:",
                    list: [
                        "Retail and D2C brands",
                        "B2B commerce platforms",
                        "Startups launching online stores",
                        "Businesses scaling digital sales"
                    ]
                },
                {
                    title: "Why Solario Tech for E‑commerce Solutions?",
                    description: "Why clients trust us with online commerce:",
                    list: [
                        "12+ Years of E‑commerce & Web Experience",
                        "Conversion‑focused development approach",
                        "Secure and scalable architectures",
                        "Custom‑built, not cookie‑cutter stores",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Launch an E‑commerce Store That Sells",
                description: "Whether you’re starting fresh or upgrading an existing store, our e‑commerce solutions help you sell smarter, faster, and more securely.",
                buttons: [
                    { label: "Start Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "CMS Development",
            hero: {
                title: "Custom CMS Development for Flexible & Scalable Content Management",
                description: "Solario Tech delivers powerful CMS Development services that give you full control over your content without sacrificing performance, security, or scalability.\nWith 12+ years of web and backend engineering experience, we build custom and platform‑based CMS solutions tailored to your workflows and business needs.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Development" }
                ]
            },
            content: [
                {
                    title: "What is CMS Development?",
                    description: "CMS development involves building systems that allow teams to create, manage, and publish content efficiently without technical dependency.",
                    list: [
                        "Easy content management",
                        "Role‑based access control",
                        "Scalable content structures",
                        "Reduced dependency on developers"
                    ]
                },
                {
                    title: "Why CMS Development Matters",
                    description: "A flexible CMS empowers teams and accelerates content updates.",
                    list: [
                        "Faster content publishing",
                        "Consistent content structure",
                        "Improved collaboration",
                        "Scalable growth support"
                    ]
                },
                {
                    title: "Custom CMS Solutions",
                    description: "CMS platforms built exactly around your needs.",
                    list: [
                        "Custom admin dashboards",
                        "Tailored content models",
                        "Workflow‑based publishing",
                        "Business‑specific features"
                    ]
                },
                {
                    title: "Headless & API‑Driven CMS",
                    description: "Modern CMS architectures for flexibility.",
                    list: [
                        "Headless CMS development",
                        "API‑based content delivery",
                        "Frontend‑agnostic architecture",
                        "Multi‑platform content reuse"
                    ]
                },
                {
                    title: "CMS Integrations",
                    description: "Connect content with your tools and platforms.",
                    list: [
                        "Frontend framework integration",
                        "CRM and marketing tools",
                        "Search and analytics integration",
                        "Third‑party service connectivity"
                    ]
                },
                {
                    title: "Performance & Security",
                    description: "CMS platforms built for speed and protection.",
                    list: [
                        "Optimized content queries",
                        "Secure admin access",
                        "Data validation and permissions",
                        "Scalable infrastructure support"
                    ]
                },
                {
                    title: "Who Is CMS Development Best For?",
                    description: "CMS development services are ideal for:",
                    list: [
                        "Content‑driven websites",
                        "Marketing and editorial teams",
                        "Business and corporate platforms",
                        "Websites needing frequent updates"
                    ]
                },
                {
                    title: "Why Solario Tech for CMS Development?",
                    description: "Why clients trust our CMS solutions:",
                    list: [
                        "12+ Years of CMS & Web Engineering Experience",
                        "Custom‑first, scalable architectures",
                        "User‑friendly admin experiences",
                        "Secure and performance‑optimized builds",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Take Full Control of Your Content",
                description: "Our CMS development services give your team the flexibility, speed, and control needed to manage content efficiently and scale with confidence.",
                buttons: [
                    { label: "Start Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Database Design",
            hero: {
                title: "Database Design for Reliable, Scalable & High‑Performance Systems",
                description: "Solario Tech delivers expert Database Design services to create efficient, secure, and scalable data architectures.\nWith 12+ years of backend and data engineering experience, we design databases that support performance, integrity, and long‑term growth.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Development" }
                ]
            },
            content: [
                {
                    title: "What is Database Design?",
                    description: "Database design is the process of structuring data storage to ensure accuracy, performance, and scalability.",
                    list: [
                        "Well‑structured data models",
                        "High data integrity",
                        "Optimized query performance",
                        "Scalable storage architecture"
                    ]
                },
                {
                    title: "Why Database Design Matters",
                    description: "Poor database design leads to slow systems, data issues, and scaling problems.",
                    list: [
                        "Improves application performance",
                        "Prevents data inconsistency",
                        "Supports future scalability",
                        "Simplifies maintenance and updates"
                    ]
                },
                {
                    title: "Data Modeling & Schema Design",
                    description: "Clear, logical data structures.",
                    list: [
                        "Entity‑relationship modeling",
                        "Normalized and denormalized schemas",
                        "Business‑aligned data structures",
                        "Future‑ready schema planning"
                    ]
                },
                {
                    title: "Relational & NoSQL Databases",
                    description: "Right database choice for the right use case.",
                    list: [
                        "MySQL / PostgreSQL design",
                        "MongoDB and NoSQL modeling",
                        "Hybrid database architectures",
                        "Use‑case‑driven selection"
                    ]
                },
                {
                    title: "Performance & Query Optimization",
                    description: "Databases optimized for speed.",
                    list: [
                        "Index strategy design",
                        "Efficient query structures",
                        "Reduced latency and load",
                        "High‑traffic readiness"
                    ]
                },
                {
                    title: "Data Security & Integrity",
                    description: "Protect and validate critical data.",
                    list: [
                        "Data validation rules",
                        "Access control strategies",
                        "Encryption planning",
                        "Backup‑friendly design"
                    ]
                },
                {
                    title: "Scalability & Maintenance Planning",
                    description: "Databases built to grow with your system.",
                    list: [
                        "Horizontal and vertical scaling strategies",
                        "Partitioning and sharding planning",
                        "Maintenance and migration readiness",
                        "Long‑term performance stability"
                    ]
                },
                {
                    title: "Who Is Database Design Best For?",
                    description: "Database design services are ideal for:",
                    list: [
                        "Custom web applications",
                        "SaaS and enterprise platforms",
                        "Data‑intensive systems",
                        "Applications preparing for scale"
                    ]
                },
                {
                    title: "Why Solario Tech for Database Design?",
                    description: "Why clients trust our data architecture:",
                    list: [
                        "12+ Years of Database & Backend Experience",
                        "Performance‑first design approach",
                        "Secure and scalable data models",
                        "Clean, maintainable schemas",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build a Database That Scales with Confidence",
                description: "Our database design services ensure your data layer is fast, reliable, and ready to support growth without bottlenecks.",
                buttons: [
                    { label: "Start Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Security Implementation",
            hero: {
                title: "Security Implementation to Protect Applications, Data & Users",
                description: "Solario Tech delivers robust Security Implementation services to safeguard applications, infrastructure, and sensitive data from modern threats.\nWith 12+ years of secure software engineering experience, we embed security best practices across every layer of your system—without compromising performance or usability.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Development" }
                ]
            },
            content: [
                {
                    title: "What is Security Implementation?",
                    description: "Security implementation involves applying technical safeguards, policies, and best practices to protect systems from vulnerabilities and attacks.",
                    list: [
                        "Application and data protection",
                        "Risk and vulnerability mitigation",
                        "Secure user access control",
                        "Compliance‑ready systems"
                    ]
                },
                {
                    title: "Why Security Implementation Matters",
                    description: "Security gaps can lead to data breaches, downtime, and loss of trust.",
                    list: [
                        "Prevents unauthorized access",
                        "Protects sensitive data",
                        "Reduces business and legal risk",
                        "Builds user and customer trust"
                    ]
                },
                {
                    title: "Application‑Level Security",
                    description: "Secure coding and application hardening.",
                    list: [
                        "Input validation and sanitization",
                        "Protection against XSS, CSRF, SQL injection",
                        "Secure authentication flows",
                        "Role‑based access control"
                    ]
                },
                {
                    title: "Authentication & Authorization",
                    description: "Strong identity and access management.",
                    list: [
                        "JWT and OAuth implementations",
                        "Multi‑factor authentication",
                        "Role and permission management",
                        "Session security"
                    ]
                },
                {
                    title: "Data Security & Encryption",
                    description: "Protect data at rest and in transit.",
                    list: [
                        "Database encryption strategies",
                        "Secure API communication (HTTPS)",
                        "Sensitive data masking",
                        "Backup and recovery planning"
                    ]
                },
                {
                    title: "Infrastructure & Server Security",
                    description: "Secure the foundation your applications run on.",
                    list: [
                        "Server hardening",
                        "Firewall and access rules",
                        "Secure environment configuration",
                        "Monitoring and intrusion prevention"
                    ]
                },
                {
                    title: "Security Testing & Audits",
                    description: "Identify and fix vulnerabilities early.",
                    list: [
                        "Vulnerability scanning",
                        "Security audits and reviews",
                        "Pen‑test readiness",
                        "Ongoing security improvements"
                    ]
                },
                {
                    title: "Who Is Security Implementation Best For?",
                    description: "Security implementation services are ideal for:",
                    list: [
                        "Web and mobile applications",
                        "SaaS and enterprise platforms",
                        "E‑commerce systems",
                        "Data‑sensitive applications"
                    ]
                },
                {
                    title: "Why Solario Tech for Security Implementation?",
                    description: "Why clients trust our security expertise:",
                    list: [
                        "12+ Years of Secure Engineering Experience",
                        "Security‑first development mindset",
                        "Compliance‑aware implementations",
                        "Balanced security and performance",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Secure Your Applications with Confidence",
                description: "Our security implementation services help you protect data, users, and systems—without slowing your business down.",
                buttons: [
                    { label: "Start Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Performance Optimization",
            hero: {
                title: "Performance Optimization for Faster, Scalable & Reliable Applications",
                description: "Solario Tech delivers end‑to‑end Performance Optimization services to ensure your applications run fast, scale smoothly, and deliver excellent user experiences.\nWith 12+ years of performance engineering experience, we identify bottlenecks and fine‑tune every layer of your system for maximum efficiency.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Development" }
                ]
            },
            content: [
                {
                    title: "What is Performance Optimization?",
                    description: "Performance optimization focuses on improving application speed, responsiveness, and resource efficiency across frontend, backend, and infrastructure.",
                    list: [
                        "Faster load and response times",
                        "Efficient resource utilization",
                        "Improved system stability",
                        "Scalable performance under load"
                    ]
                },
                {
                    title: "Why Performance Optimization Matters",
                    description: "Slow systems lead to poor user experience, lower conversions, and higher infrastructure costs.",
                    list: [
                        "Improves user satisfaction and retention",
                        "Boosts conversion rates",
                        "Supports traffic and business growth",
                        "Reduces operational and hosting costs"
                    ]
                },
                {
                    title: "Application‑Level Optimization",
                    description: "Improve performance at the code and logic layer.",
                    list: [
                        "Code profiling and bottleneck detection",
                        "Efficient algorithms and logic optimization",
                        "Caching strategies",
                        "Reduced execution overhead"
                    ]
                },
                {
                    title: "Frontend Performance Optimization",
                    description: "Deliver faster, smoother user experiences.",
                    list: [
                        "Asset optimization (CSS, JS, images)",
                        "Lazy loading and bundling",
                        "Core Web Vitals improvements",
                        "Responsive and mobile performance tuning"
                    ]
                },
                {
                    title: "Backend & API Optimization",
                    description: "Ensure fast and reliable server responses.",
                    list: [
                        "API response time optimization",
                        "Query and data handling improvements",
                        "Asynchronous processing",
                        "Queue and job optimization"
                    ]
                },
                {
                    title: "Database & Query Optimization",
                    description: "Speed up data access and processing.",
                    list: [
                        "Query optimization",
                        "Index strategy refinement",
                        "Connection pooling",
                        "Reduced database load"
                    ]
                },
                {
                    title: "Infrastructure & Scalability Tuning",
                    description: "Align infrastructure with real‑world usage.",
                    list: [
                        "Server and cloud resource tuning",
                        "Load balancing optimization",
                        "Auto‑scaling strategies",
                        "High‑traffic readiness"
                    ]
                },
                {
                    title: "Load Testing & Performance Monitoring",
                    description: "Validate performance under stress.",
                    list: [
                        "Load and stress testing",
                        "Bottleneck identification",
                        "Performance baseline creation",
                        "Continuous monitoring insights"
                    ]
                },
                {
                    title: "Who Is Performance Optimization Best For?",
                    description: "Performance optimization services are ideal for:",
                    list: [
                        "High‑traffic websites and applications",
                        "SaaS and enterprise platforms",
                        "E‑commerce systems",
                        "Applications experiencing slowdowns"
                    ]
                },
                {
                    title: "Why Solario Tech for Performance Optimization?",
                    description: "Why clients trust our performance expertise:",
                    list: [
                        "12+ Years of Performance Engineering Experience",
                        "Data‑driven optimization approach",
                        "Balanced speed, stability, and scalability",
                        "Proven results under real‑world loads",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Unlock Peak Performance",
                description: "Our performance optimization services help your applications run faster, scale better, and deliver exceptional user experiences—without compromising stability.",
                buttons: [
                    { label: "Start Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "java-development": [
        {
            id: "Spring Boot",
            hero: {
                title: "Spring Boot Development for High‑Performance Java Applications",
                description: "Solario Tech delivers enterprise‑grade Spring Boot Development services to build fast, scalable, and production‑ready Java applications.\nWith 12+ years of Java and backend engineering experience, we use Spring Boot to accelerate development while ensuring clean architecture, security, and long‑term maintainability.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Java Development" }
                ]
            },
            content: [
                {
                    title: "What is Spring Boot?",
                    description: "Spring Boot is a powerful Java framework that simplifies building stand‑alone, production‑ready applications with minimal configuration.",
                    list: [
                        "Rapid application development",
                        "Convention‑over‑configuration",
                        "Embedded server support",
                        "Production‑ready defaults"
                    ]
                },
                {
                    title: "Why Spring Boot for Java Development?",
                    description: "Spring Boot reduces complexity while maintaining enterprise‑level reliability.",
                    list: [
                        "Faster development cycles",
                        "Clean and modular architecture",
                        "Easy dependency management",
                        "Strong ecosystem and community support"
                    ]
                },
                {
                    title: "Custom Spring Boot Application Development",
                    description: "Applications tailored to your business logic.",
                    list: [
                        "Custom enterprise applications",
                        "Business workflow automation",
                        "Role‑based systems",
                        "Scalable backend services"
                    ]
                },
                {
                    title: "REST API Development with Spring Boot",
                    description: "Robust and secure APIs built with Java.",
                    list: [
                        "RESTful API architecture",
                        "JSON‑based services",
                        "API versioning",
                        "Secure endpoint design"
                    ]
                },
                {
                    title: "Performance & Scalability",
                    description: "Spring Boot applications optimized for growth.",
                    list: [
                        "Efficient request handling",
                        "Caching and async processing",
                        "High‑traffic readiness",
                        "Scalable deployment models"
                    ]
                },
                {
                    title: "Security & Best Practices",
                    description: "Enterprise‑grade security built in.",
                    list: [
                        "Spring Security integration",
                        "Authentication and authorization",
                        "Secure configuration management",
                        "Data protection best practices"
                    ]
                },
                {
                    title: "Who Is Spring Boot Best For?",
                    description: "Spring Boot development is ideal for:",
                    list: [
                        "Enterprise Java applications",
                        "Microservices‑based systems",
                        "API‑driven platforms",
                        "Scalable backend solutions"
                    ]
                },
                {
                    title: "Why Solario Tech for Spring Boot?",
                    description: "Why clients trust our Java expertise:",
                    list: [
                        "12+ Years of Java & Spring Experience",
                        "Clean, maintainable architecture",
                        "Security‑first development approach",
                        "Scalable and performance‑ready systems",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build Powerful Java Applications with Spring Boot",
                description: "Our Spring Boot development services help you launch faster, scale confidently, and maintain enterprise‑grade reliability.",
                buttons: [
                    { label: "Start Java Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Microservices",
            hero: {
                title: "Microservices Architecture for Scalable Java Systems",
                description: "Solario Tech designs and builds Microservices‑based Java applications that are modular, scalable, and resilient.\nWith 12+ years of Java and distributed systems experience, we help businesses break monoliths into flexible services that scale independently and deploy faster.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Java Development" }
                ]
            },
            content: [
                {
                    title: "What are Microservices?",
                    description: "Microservices architecture structures applications as a collection of small, independent services that communicate via APIs.",
                    list: [
                        "Independent service deployment",
                        "Loose coupling between components",
                        "Technology and team flexibility",
                        "Improved system resilience"
                    ]
                },
                {
                    title: "Why Microservices Matter",
                    description: "Microservices enable faster development and better scalability compared to monolithic systems.",
                    list: [
                        "Scales services independently",
                        "Faster feature releases",
                        "Improved fault isolation",
                        "Better alignment with DevOps"
                    ]
                },
                {
                    title: "Spring Boot Microservices",
                    description: "Modern microservices built with Spring Boot.",
                    list: [
                        "Service‑based Spring Boot apps",
                        "REST and event‑driven communication",
                        "Service discovery and configuration",
                        "Production‑ready microservices"
                    ]
                },
                {
                    title: "API Communication & Integration",
                    description: "Reliable communication between services.",
                    list: [
                        "RESTful APIs",
                        "Message queues and async events",
                        "API gateways",
                        "Secure inter‑service communication"
                    ]
                },
                {
                    title: "Scalability & Fault Tolerance",
                    description: "Systems designed to handle real‑world load.",
                    list: [
                        "Horizontal service scaling",
                        "Circuit breakers and retries",
                        "Load balancing",
                        "Graceful failure handling"
                    ]
                },
                {
                    title: "Migration from Monoliths",
                    description: "Smooth transition to microservices.",
                    list: [
                        "Monolith assessment",
                        "Service decomposition strategy",
                        "Incremental migration",
                        "Minimal downtime approach"
                    ]
                },
                {
                    title: "Who Are Microservices Best For?",
                    description: "Microservices architecture is ideal for:",
                    list: [
                        "Large and growing applications",
                        "Enterprise platforms",
                        "SaaS products",
                        "Teams needing rapid scalability"
                    ]
                },
                {
                    title: "Why Solario Tech for Microservices?",
                    description: "Why clients trust our distributed systems expertise:",
                    list: [
                        "12+ Years of Java & Microservices Experience",
                        "Production‑ready architectures",
                        "Scalable and resilient designs",
                        "DevOps‑aligned implementations",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Scale Confidently with Microservices",
                description: "Our microservices development services help you build flexible Java systems that grow with your business.",
                buttons: [
                    { label: "Start Java Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Enterprise Apps",
            hero: {
                title: "Enterprise Java Applications Built for Scale, Security & Reliability",
                description: "Solario Tech delivers robust Enterprise Java Application development to support complex business processes, high user loads, and mission‑critical operations.\nWith 12+ years of enterprise Java experience, we build systems that are secure, scalable, and aligned with long‑term organizational goals.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Java Development" }
                ]
            },
            content: [
                {
                    title: "What Are Enterprise Java Applications?",
                    description: "Enterprise Java applications are large‑scale systems designed to support complex workflows, integrations, and high availability requirements.",
                    list: [
                        "High reliability and uptime",
                        "Complex business logic handling",
                        "Multi‑user and role‑based systems",
                        "Enterprise‑grade security"
                    ]
                },
                {
                    title: "Why Enterprise Java Matters",
                    description: "Enterprise systems must be stable, secure, and future‑proof.",
                    list: [
                        "Supports mission‑critical operations",
                        "Handles large user bases and data volumes",
                        "Ensures compliance and security",
                        "Enables long‑term scalability"
                    ]
                },
                {
                    title: "Custom Enterprise Application Development",
                    description: "Solutions built around enterprise workflows.",
                    list: [
                        "Custom enterprise platforms",
                        "Internal business systems",
                        "Workflow and process automation",
                        "Department and role‑based applications"
                    ]
                },
                {
                    title: "Integration‑Heavy Enterprise Systems",
                    description: "Seamless connectivity across systems.",
                    list: [
                        "ERP and CRM integrations",
                        "Third‑party system connectivity",
                        "API‑driven enterprise architecture",
                        "Data synchronization"
                    ]
                },
                {
                    title: "Scalability & Performance",
                    description: "Enterprise systems built to handle growth.",
                    list: [
                        "High‑concurrency handling",
                        "Load‑balanced architectures",
                        "Performance tuning",
                        "Failover and redundancy planning"
                    ]
                },
                {
                    title: "Security & Compliance",
                    description: "Enterprise‑grade protection and controls.",
                    list: [
                        "Role‑based access control",
                        "Secure authentication mechanisms",
                        "Audit logs and monitoring",
                        "Compliance‑ready architectures"
                    ]
                },
                {
                    title: "Who Are Enterprise Apps Best For?",
                    description: "Enterprise Java applications are ideal for:",
                    list: [
                        "Large organizations",
                        "Enterprise IT systems",
                        "Government and regulated industries",
                        "High‑traffic internal platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for Enterprise Java?",
                    description: "Why enterprises trust our Java expertise:",
                    list: [
                        "12+ Years of Enterprise Java Experience",
                        "Scalable and secure architectures",
                        "Business‑aligned system design",
                        "Long‑term maintainability focus",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build Enterprise Systems You Can Rely On",
                description: "Our enterprise Java development services help you build stable, secure, and scalable systems that support critical business operations.",
                buttons: [
                    { label: "Start Java Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "API Development",
            hero: {
                title: "Java API Development for Secure & High‑Performance Integrations",
                description: "Solario Tech delivers enterprise‑grade Java API Development services that enable seamless, secure, and scalable communication between systems.\nWith 12+ years of Java backend experience, we build APIs that power web apps, mobile apps, microservices, and enterprise platforms.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Java Development" }
                ]
            },
            content: [
                {
                    title: "What is Java API Development?",
                    description: "Java API development focuses on building reliable interfaces that allow different systems to exchange data and functionality.",
                    list: [
                        "System‑to‑system communication",
                        "Scalable backend services",
                        "Frontend and mobile integration",
                        "Enterprise‑ready data exchange"
                    ]
                },
                {
                    title: "Why API Development Matters",
                    description: "Modern Java applications rely on APIs to stay flexible and future‑ready.",
                    list: [
                        "Decouples frontend and backend",
                        "Enables third‑party integrations",
                        "Supports microservices architecture",
                        "Improves maintainability and scalability"
                    ]
                },
                {
                    title: "RESTful API Design",
                    description: "Clean, standards‑based Java APIs.",
                    list: [
                        "RESTful endpoint architecture",
                        "JSON‑based responses",
                        "API versioning strategies",
                        "Consistent request/response formats"
                    ]
                },
                {
                    title: "Security & Authentication",
                    description: "APIs secured with enterprise best practices.",
                    list: [
                        "JWT and OAuth authentication",
                        "Role‑based access control",
                        "Secure API gateways",
                        "Data protection mechanisms"
                    ]
                },
                {
                    title: "Microservices & API Integration",
                    description: "APIs built for distributed systems.",
                    list: [
                        "Microservices communication",
                        "Service‑to‑service APIs",
                        "Event‑driven integrations",
                        "High‑availability API design"
                    ]
                },
                {
                    title: "Performance & Scalability",
                    description: "APIs optimized for real‑world load.",
                    list: [
                        "Low‑latency responses",
                        "Caching strategies",
                        "Rate limiting",
                        "High‑traffic readiness"
                    ]
                },
                {
                    title: "API Documentation & Testing",
                    description: "Reliable APIs developers can trust.",
                    list: [
                        "Swagger / OpenAPI documentation",
                        "Automated API testing",
                        "Error handling standards",
                        "Clear developer onboarding"
                    ]
                },
                {
                    title: "Who Is Java API Development Best For?",
                    description: "Java API development is ideal for:",
                    list: [
                        "Enterprise platforms",
                        "Microservices systems",
                        "Mobile and web applications",
                        "Integration‑heavy ecosystems"
                    ]
                },
                {
                    title: "Why Solario Tech for Java APIs?",
                    description: "Why clients trust our API expertise:",
                    list: [
                        "12+ Years of Java & Backend Experience",
                        "Security‑first API design",
                        "Scalable and clean architecture",
                        "Production‑ready implementations",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build APIs That Power Your Java Ecosystem",
                description: "Our Java API development services help you integrate systems, scale faster, and future‑proof your applications.",
                buttons: [
                    { label: "Start Java Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Cloud Integration",
            hero: {
                title: "Cloud Integration for Scalable & Resilient Java Applications",
                description: "Solario Tech provides end‑to‑end Cloud Integration services to deploy, scale, and manage Java applications on modern cloud platforms.\nWith 12+ years of Java and cloud engineering experience, we help businesses leverage the cloud for flexibility, reliability, and cost‑efficient growth.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Java Development" }
                ]
            },
            content: [
                {
                    title: "What is Cloud Integration?",
                    description: "Cloud integration connects Java applications with cloud infrastructure, services, and platforms to enable scalability, reliability, and automation.",
                    list: [
                        "Cloud‑based application deployment",
                        "Seamless service integration",
                        "Elastic scalability",
                        "High availability and resilience"
                    ]
                },
                {
                    title: "Why Cloud Integration Matters",
                    description: "Modern Java applications must scale and adapt quickly to changing demand.",
                    list: [
                        "On‑demand scalability",
                        "Improved system reliability",
                        "Reduced infrastructure overhead",
                        "Faster deployment cycles"
                    ]
                },
                {
                    title: "Cloud‑Ready Java Architectures",
                    description: "Applications designed for cloud environments.",
                    list: [
                        "Cloud‑native application design",
                        "Stateless and scalable services",
                        "Container‑ready Java apps",
                        "Environment‑agnostic deployments"
                    ]
                },
                {
                    title: "Cloud Platform Integration",
                    description: "Seamless integration with leading cloud providers.",
                    list: [
                        "AWS, Azure, and Google Cloud support",
                        "Managed services integration",
                        "Cloud storage and databases",
                        "Messaging and queue services"
                    ]
                },
                {
                    title: "Containerization & Orchestration",
                    description: "Efficient deployment and scaling strategies.",
                    list: [
                        "Dockerized Java applications",
                        "Kubernetes orchestration",
                        "Auto‑scaling configurations",
                        "High‑availability setups"
                    ]
                },
                {
                    title: "Monitoring, Logging & Reliability",
                    description: "Visibility and stability in cloud environments.",
                    list: [
                        "Application and infrastructure monitoring",
                        "Centralized logging",
                        "Alerting and incident response",
                        "Performance and cost insights"
                    ]
                },
                {
                    title: "Who Is Cloud Integration Best For?",
                    description: "Cloud integration services are ideal for:",
                    list: [
                        "Scalable Java applications",
                        "Microservices‑based systems",
                        "Enterprise platforms",
                        "Businesses moving to the cloud"
                    ]
                },
                {
                    title: "Why Solario Tech for Cloud Integration?",
                    description: "Why clients trust our cloud expertise:",
                    list: [
                        "12+ Years of Java & Cloud Experience",
                        "Cloud‑native and scalable designs",
                        "Security‑aware integrations",
                        "Reliable and cost‑efficient deployments",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Move Your Java Applications to the Cloud with Confidence",
                description: "Our cloud integration services help you deploy, scale, and manage Java applications efficiently in modern cloud environments.",
                buttons: [
                    { label: "Start Java Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Database Solutions",
            hero: {
                title: "Database Solutions for High‑Performance Java Applications",
                description: "Solario Tech delivers reliable Database Solutions designed for performance, scalability, and data integrity in Java applications.\nWith 12+ years of Java and backend engineering experience, we architect databases that handle high loads, complex queries, and long‑term growth with confidence.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Java Development" }
                ]
            },
            content: [
                {
                    title: "What Are Database Solutions?",
                    description: "Database solutions involve designing, optimizing, and managing data storage systems that support application logic, performance, and scalability.",
                    list: [
                        "Structured and reliable data storage",
                        "High data integrity and consistency",
                        "Optimized read/write performance",
                        "Scalable data architectures"
                    ]
                },
                {
                    title: "Why Database Solutions Matter",
                    description: "Databases are the backbone of enterprise and high‑traffic Java applications.",
                    list: [
                        "Improves application performance",
                        "Prevents data bottlenecks",
                        "Ensures system reliability",
                        "Supports future growth"
                    ]
                },
                {
                    title: "Relational Database Solutions",
                    description: "Robust databases for transactional systems.",
                    list: [
                        "MySQL, PostgreSQL, Oracle support",
                        "Normalized and optimized schemas",
                        "ACID‑compliant transactions",
                        "Enterprise‑grade data modeling"
                    ]
                },
                {
                    title: "NoSQL & Distributed Databases",
                    description: "Flexible data solutions for modern applications.",
                    list: [
                        "MongoDB and document databases",
                        "High‑availability data stores",
                        "Distributed data architectures",
                        "Use‑case‑driven database selection"
                    ]
                },
                {
                    title: "Performance & Query Optimization",
                    description: "Databases tuned for speed and scale.",
                    list: [
                        "Index and query optimization",
                        "Connection pooling",
                        "Reduced latency",
                        "High‑concurrency readiness"
                    ]
                },
                {
                    title: "Data Security & Integrity",
                    description: "Protecting critical business data.",
                    list: [
                        "Access control strategies",
                        "Data encryption planning",
                        "Backup and recovery solutions",
                        "Audit‑ready data handling"
                    ]
                },
                {
                    title: "Who Are Database Solutions Best For?",
                    description: "Database solutions are ideal for:",
                    list: [
                        "Enterprise Java applications",
                        "Microservices platforms",
                        "Data‑intensive systems",
                        "High‑traffic applications"
                    ]
                },
                {
                    title: "Why Solario Tech for Database Solutions?",
                    description: "Why clients trust our database expertise:",
                    list: [
                        "12+ Years of Java & Database Experience",
                        "Performance‑first data architecture",
                        "Secure and scalable designs",
                        "Clean, maintainable schemas",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build a Database That Powers Your Java Systems",
                description: "Our database solutions ensure your Java applications stay fast, reliable, and ready to scale as your business grows.",
                buttons: [
                    { label: "Start Java Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Security Implementation",
            hero: {
                title: "Security Implementation for Secure & Compliant Java Applications",
                description: "Solario Tech delivers enterprise‑grade Security Implementation services to protect Java applications, infrastructure, and sensitive data from modern threats.\nWith 12+ years of secure Java engineering experience, we embed security best practices across code, APIs, databases, and cloud environments—without sacrificing performance.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Java Development" }
                ]
            },
            content: [
                {
                    title: "What is Security Implementation?",
                    description: "Security implementation applies technical safeguards, controls, and best practices to protect applications from vulnerabilities, breaches, and misuse.",
                    list: [
                        "Application and data protection",
                        "Threat and vulnerability mitigation",
                        "Secure access management",
                        "Compliance‑ready systems"
                    ]
                },
                {
                    title: "Why Security Implementation Matters",
                    description: "Security failures can lead to data loss, downtime, and reputational damage.",
                    list: [
                        "Prevents unauthorized access",
                        "Protects sensitive business data",
                        "Reduces operational and legal risk",
                        "Builds customer and stakeholder trust"
                    ]
                },
                {
                    title: "Application‑Level Security",
                    description: "Secure coding and application hardening.",
                    list: [
                        "Input validation and sanitization",
                        "Protection against SQL injection, XSS, CSRF",
                        "Secure session handling",
                        "Role‑based access control"
                    ]
                },
                {
                    title: "Authentication & Authorization",
                    description: "Strong identity and access management.",
                    list: [
                        "JWT and OAuth2 implementations",
                        "Spring Security configuration",
                        "Multi‑factor authentication",
                        "Fine‑grained permission control"
                    ]
                },
                {
                    title: "API & Data Security",
                    description: "Protect APIs and data flows.",
                    list: [
                        "Secure API gateways",
                        "Encrypted data in transit",
                        "Rate limiting and throttling",
                        "Sensitive data masking"
                    ]
                },
                {
                    title: "Infrastructure & Cloud Security",
                    description: "Secure the environments running your Java apps.",
                    list: [
                        "Server and container hardening",
                        "Secure cloud configuration",
                        "Network and firewall rules",
                        "Monitoring and intrusion detection"
                    ]
                },
                {
                    title: "Security Audits & Testing",
                    description: "Identify and resolve risks early.",
                    list: [
                        "Vulnerability assessments",
                        "Security code reviews",
                        "Pen‑test readiness",
                        "Continuous security improvement"
                    ]
                },
                {
                    title: "Who Is Security Implementation Best For?",
                    description: "Security implementation is ideal for:",
                    list: [
                        "Enterprise Java applications",
                        "Microservices platforms",
                        "E‑commerce and fintech systems",
                        "Data‑sensitive applications"
                    ]
                },
                {
                    title: "Why Solario Tech for Java Security?",
                    description: "Why clients trust our security expertise:",
                    list: [
                        "12+ Years of Secure Java Engineering Experience",
                        "Security‑first development mindset",
                        "Compliance‑aware implementations",
                        "Balanced security and performance",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Secure Your Java Applications with Confidence",
                description: "Our security implementation services help you protect applications, data, and users—without slowing down innovation.",
                buttons: [
                    { label: "Start Java Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "DevOps Integration",
            hero: {
                title: "DevOps Integration for Faster, Reliable & Scalable Java Delivery",
                description: "Solario Tech provides end‑to‑end DevOps Integration services to streamline development, deployment, and operations for Java applications.\nWith 12+ years of Java and DevOps experience, we help teams automate workflows, improve release velocity, and maintain stable, production‑ready systems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Java Development" }
                ]
            },
            content: [
                {
                    title: "What is DevOps Integration?",
                    description: "DevOps integration aligns development and operations through automation, collaboration, and continuous delivery practices.",
                    list: [
                        "Automated build and deployment pipelines",
                        "Faster and more reliable releases",
                        "Improved collaboration between teams",
                        "Stable and repeatable environments"
                    ]
                },
                {
                    title: "Why DevOps Integration Matters",
                    description: "Without DevOps, releases become slow, risky, and error‑prone.",
                    list: [
                        "Faster time‑to‑market",
                        "Reduced deployment failures",
                        "Improved system reliability",
                        "Lower operational overhead"
                    ]
                },
                {
                    title: "CI/CD Pipeline Implementation",
                    description: "Automated pipelines for consistent delivery.",
                    list: [
                        "Continuous Integration (CI)",
                        "Continuous Deployment (CD)",
                        "Automated testing and builds",
                        "Zero‑downtime deployment strategies"
                    ]
                },
                {
                    title: "Infrastructure as Code (IaC)",
                    description: "Repeatable and version‑controlled infrastructure.",
                    list: [
                        "Automated infrastructure provisioning",
                        "Environment consistency",
                        "Version‑controlled configurations",
                        "Cloud‑ready infrastructure setups"
                    ]
                },
                {
                    title: "Containerization & Orchestration",
                    description: "Modern deployment strategies for Java apps.",
                    list: [
                        "Dockerized Java applications",
                        "Kubernetes orchestration",
                        "Scalable container deployments",
                        "High‑availability environments"
                    ]
                },
                {
                    title: "Monitoring, Logging & Alerting",
                    description: "Visibility into system health and performance.",
                    list: [
                        "Application and infrastructure monitoring",
                        "Centralized logging",
                        "Real‑time alerts",
                        "Proactive issue detection"
                    ]
                },
                {
                    title: "Security & Compliance in DevOps",
                    description: "Security embedded into pipelines.",
                    list: [
                        "Secure CI/CD pipelines",
                        "Secrets and credential management",
                        "Compliance‑ready deployments",
                        "Vulnerability scanning"
                    ]
                },
                {
                    title: "Who Is DevOps Integration Best For?",
                    description: "DevOps integration is ideal for:",
                    list: [
                        "Java enterprise applications",
                        "Microservices platforms",
                        "Cloud‑native systems",
                        "Teams releasing frequently"
                    ]
                },
                {
                    title: "Why Solario Tech for DevOps Integration?",
                    description: "Why clients trust our DevOps expertise:",
                    list: [
                        "12+ Years of Java & DevOps Experience",
                        "Automation‑first delivery mindset",
                        "Reliable, production‑ready pipelines",
                        "Security‑aware DevOps practices",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Accelerate Java Delivery with DevOps",
                description: "Our DevOps integration services help you release faster, operate smarter, and scale Java applications with confidence.",
                buttons: [
                    { label: "Start Java Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "e-commerce-development": [
        {
            id: "Custom Storefronts",
            hero: {
                title: "Custom E‑commerce Storefronts That Convert & Scale",
                description: "Solario Tech builds Custom E‑commerce Storefronts designed to deliver seamless shopping experiences, strong brand identity, and high conversion rates.\nWith 12+ years of e‑commerce development experience, we create storefronts that are fast, user‑friendly, and built to scale across devices and markets.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start E‑commerce Development" }
                ]
            },
            content: [
                {
                    title: "What Are Custom Storefronts?",
                    description: "Custom storefronts are tailor‑made e‑commerce interfaces designed around your brand, products, and customer journeys.",
                    list: [
                        "Unique brand‑aligned design",
                        "Optimized user experience",
                        "Flexible feature customization",
                        "Scalable frontend architecture"
                    ]
                },
                {
                    title: "Why Custom Storefronts Matter",
                    description: "Generic templates limit growth and differentiation.",
                    list: [
                        "Stronger brand identity",
                        "Higher conversion rates",
                        "Improved customer engagement",
                        "Better performance and flexibility"
                    ]
                },
                {
                    title: "User‑Focused Design & UX",
                    description: "Storefronts designed to guide users to purchase.",
                    list: [
                        "Intuitive navigation",
                        "Optimized product discovery",
                        "Clear checkout flows",
                        "Mobile‑first user experience"
                    ]
                },
                {
                    title: "Performance‑Optimized Frontends",
                    description: "Fast storefronts that keep customers engaged.",
                    list: [
                        "Optimized page load times",
                        "Lazy loading and asset optimization",
                        "SEO‑friendly structure",
                        "High‑traffic readiness"
                    ]
                },
                {
                    title: "Flexible Customization & Features",
                    description: "Storefronts built around your business needs.",
                    list: [
                        "Custom product layouts",
                        "Dynamic pricing displays",
                        "Promotions and discounts",
                        "Personalized shopping experiences"
                    ]
                },
                {
                    title: "Who Are Custom Storefronts Best For?",
                    description: "Custom storefront development is ideal for:",
                    list: [
                        "Brand‑focused online stores",
                        "High‑growth e‑commerce businesses",
                        "D2C and B2B platforms",
                        "Businesses outgrowing templates"
                    ]
                },
                {
                    title: "Why Solario Tech for Custom Storefronts?",
                    description: "Why clients trust our e‑commerce expertise:",
                    list: [
                        "12+ Years of E‑commerce Development Experience",
                        "Conversion‑focused design approach",
                        "Fast, scalable frontend builds",
                        "Seamless backend integration",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build a Storefront That Sells",
                description: "Our custom storefront solutions help you stand out, convert more visitors, and scale your e‑commerce business with confidence.",
                buttons: [
                    { label: "Start E‑commerce Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Payment Integration",
            hero: {
                title: "Secure & Seamless Payment Integration for E‑commerce Platforms",
                description: "Solario Tech delivers reliable Payment Integration solutions that enable fast, secure, and flexible transactions across your e‑commerce ecosystem.\nWith 12+ years of e‑commerce and fintech integration experience, we implement trusted payment systems that improve checkout success rates and customer trust.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start E‑commerce Development" }
                ]
            },
            content: [
                {
                    title: "What is Payment Integration?",
                    description: "Payment integration connects your e‑commerce platform with payment gateways and financial services to process transactions securely.",
                    list: [
                        "Secure online transactions",
                        "Multiple payment methods support",
                        "Fast and reliable checkout",
                        "Compliance‑ready payment flows"
                    ]
                },
                {
                    title: "Why Payment Integration Matters",
                    description: "A smooth and secure checkout experience directly impacts conversion rates.",
                    list: [
                        "Reduces cart abandonment",
                        "Builds customer trust",
                        "Supports global payments",
                        "Ensures transaction reliability"
                    ]
                },
                {
                    title: "Multiple Payment Gateway Support",
                    description: "Flexible options for your customers.",
                    list: [
                        "Credit and debit cards",
                        "UPI, wallets, and net banking",
                        "International payment gateways",
                        "Buy Now, Pay Later (BNPL)"
                    ]
                },
                {
                    title: "Secure Checkout Implementation",
                    description: "Security built into every transaction.",
                    list: [
                        "PCI‑DSS compliant integrations",
                        "Tokenized payment processing",
                        "Secure payment redirects",
                        "Fraud prevention mechanisms"
                    ]
                },
                {
                    title: "Subscription & Recurring Payments",
                    description: "Automated billing for recurring revenue models.",
                    list: [
                        "Subscription billing systems",
                        "Auto‑renewals and retries",
                        "Proration and plan management",
                        "Invoice and payment tracking"
                    ]
                },
                {
                    title: "Payment Workflow Customization",
                    description: "Checkout flows aligned with your business needs.",
                    list: [
                        "Custom checkout experiences",
                        "Multi‑currency support",
                        "Tax and fee handling",
                        "Region‑specific payment rules"
                    ]
                },
                {
                    title: "Who Is Payment Integration Best For?",
                    description: "Payment integration is ideal for:",
                    list: [
                        "Online stores and marketplaces",
                        "Subscription‑based businesses",
                        "Global e‑commerce platforms",
                        "High‑volume transaction systems"
                    ]
                },
                {
                    title: "Why Solario Tech for Payment Integration?",
                    description: "Why clients trust our payment expertise:",
                    list: [
                        "12+ Years of E‑commerce Integration Experience",
                        "Security‑first payment implementations",
                        "Support for global and local gateways",
                        "High checkout success rates",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Enable Smooth & Secure Payments",
                description: "Our payment integration services help you offer fast, secure, and flexible checkout experiences that drive conversions and customer trust.",
                buttons: [
                    { label: "Start E‑commerce Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Inventory Management",
            hero: {
                title: "Smart Inventory Management for Scalable E‑commerce Operations",
                description: "Solario Tech delivers robust Inventory Management solutions that help e‑commerce businesses track stock accurately, prevent overselling, and scale operations efficiently.\nWith 12+ years of e‑commerce development experience, we build inventory systems that stay reliable across channels, warehouses, and high‑volume sales.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start E‑commerce Development" }
                ]
            },
            content: [
                {
                    title: "What is Inventory Management?",
                    description: "Inventory management systems track products, stock levels, and movements in real time across your e‑commerce platform.",
                    list: [
                        "Real‑time stock tracking",
                        "Centralized inventory control",
                        "Reduced stockouts and overselling",
                        "Accurate order fulfillment"
                    ]
                },
                {
                    title: "Why Inventory Management Matters",
                    description: "Poor inventory control leads to lost sales and unhappy customers.",
                    list: [
                        "Prevents overselling and backorders",
                        "Improves order accuracy",
                        "Reduces manual errors",
                        "Supports business scalability"
                    ]
                },
                {
                    title: "Real‑Time Stock Tracking",
                    description: "Always know what’s in stock.",
                    list: [
                        "Live inventory updates",
                        "Automatic stock deductions",
                        "Low‑stock alerts",
                        "Accurate availability display"
                    ]
                },
                {
                    title: "Multi‑Warehouse Inventory",
                    description: "Manage inventory across multiple locations.",
                    list: [
                        "Warehouse‑based stock allocation",
                        "Location‑aware fulfillment",
                        "Centralized inventory dashboard",
                        "Scalable warehouse support"
                    ]
                },
                {
                    title: "Product & Variant Management",
                    description: "Handle complex product catalogs easily.",
                    list: [
                        "SKU‑based inventory",
                        "Product variants (size, color, etc.)",
                        "Bulk inventory updates",
                        "Category‑based stock management"
                    ]
                },
                {
                    title: "Inventory Automation & Sync",
                    description: "Reduce manual work with automation.",
                    list: [
                        "Automatic inventory synchronization",
                        "Supplier and ERP integration",
                        "Real‑time updates across channels",
                        "Error‑free stock management"
                    ]
                },
                {
                    title: "Who Is Inventory Management Best For?",
                    description: "Inventory management systems are ideal for:",
                    list: [
                        "Growing e‑commerce stores",
                        "Multi‑channel sellers",
                        "High‑volume product catalogs",
                        "Businesses scaling operations"
                    ]
                },
                {
                    title: "Why Solario Tech for Inventory Management?",
                    description: "Why clients trust our inventory solutions:",
                    list: [
                        "12+ Years of E‑commerce Development Experience",
                        "Scalable and accurate inventory systems",
                        "Real‑time performance focus",
                        "Seamless order and warehouse integration",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Take Control of Your Inventory",
                description: "Our inventory management solutions help you stay organized, prevent losses, and scale your e‑commerce operations with confidence.",
                buttons: [
                    { label: "Start E‑commerce Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Order Processing",
            hero: {
                title: "Efficient Order Processing for Smooth E‑commerce Fulfillment",
                description: "Solario Tech delivers end‑to‑end Order Processing solutions that ensure every order—from checkout to delivery—is handled accurately, quickly, and reliably.\nWith 12+ years of e‑commerce development experience, we build order workflows that scale with volume, reduce errors, and improve customer satisfaction.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start E‑commerce Development" }
                ]
            },
            content: [
                {
                    title: "What is Order Processing?",
                    description: "Order processing manages the complete lifecycle of an order after checkout, ensuring accurate fulfillment and timely delivery.",
                    list: [
                        "Order capture and validation",
                        "Payment confirmation",
                        "Fulfillment and shipping coordination",
                        "Status tracking and updates"
                    ]
                },
                {
                    title: "Why Order Processing Matters",
                    description: "A broken order flow leads to delays, refunds, and unhappy customers.",
                    list: [
                        "Faster order fulfillment",
                        "Reduced manual errors",
                        "Better customer experience",
                        "Operational efficiency at scale"
                    ]
                },
                {
                    title: "Automated Order Workflows",
                    description: "Streamlined order handling from start to finish.",
                    list: [
                        "Automatic order confirmation",
                        "Inventory deduction in real time",
                        "Invoice and receipt generation",
                        "Order status automation"
                    ]
                },
                {
                    title: "Shipping & Fulfillment Integration",
                    description: "Seamless coordination with logistics partners.",
                    list: [
                        "Courier and shipping API integration",
                        "Real‑time shipping rate calculation",
                        "Tracking number generation",
                        "Delivery status updates"
                    ]
                },
                {
                    title: "Returns, Refunds & Cancellations",
                    description: "Smooth post‑purchase order management.",
                    list: [
                        "Return and exchange workflows",
                        "Automated refund processing",
                        "Cancellation handling",
                        "Customer notifications"
                    ]
                },
                {
                    title: "Multi‑Channel Order Management",
                    description: "Centralized order control across platforms.",
                    list: [
                        "Website and marketplace orders",
                        "Unified order dashboard",
                        "Cross‑channel fulfillment",
                        "Consistent order data"
                    ]
                },
                {
                    title: "Who Is Order Processing Best For?",
                    description: "Order processing systems are ideal for:",
                    list: [
                        "High‑volume e‑commerce stores",
                        "Multi‑channel sellers",
                        "Subscription and recurring orders",
                        "Growing online businesses"
                    ]
                },
                {
                    title: "Why Solario Tech for Order Processing?",
                    description: "Why clients trust our order management solutions:",
                    list: [
                        "12+ Years of E‑commerce Development Experience",
                        "Scalable and reliable order workflows",
                        "Seamless inventory and shipping integration",
                        "Automation‑driven efficiency",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Streamline Your Order Fulfillment",
                description: "Our order processing solutions help you fulfill faster, reduce errors, and deliver a smooth post‑checkout experience to your customers.",
                buttons: [
                    { label: "Start E‑commerce Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Customer Analytics",
            hero: {
                title: "Customer Analytics for Data‑Driven E‑commerce Growth",
                description: "Solario Tech delivers powerful Customer Analytics solutions that help e‑commerce businesses understand user behavior, optimize journeys, and increase conversions.\nWith 12+ years of e‑commerce and data analytics experience, we turn raw customer data into actionable insights that drive smarter decisions and measurable growth.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start E‑commerce Development" }
                ]
            },
            content: [
                {
                    title: "What is Customer Analytics?",
                    description: "Customer analytics collects and analyzes user data to understand shopping behavior, preferences, and engagement patterns.",
                    list: [
                        "User behavior tracking",
                        "Purchase and conversion analysis",
                        "Customer segmentation",
                        "Data‑driven decision making"
                    ]
                },
                {
                    title: "Why Customer Analytics Matters",
                    description: "Without insights, growth decisions rely on guesswork.",
                    list: [
                        "Improves conversion rates",
                        "Identifies high‑value customers",
                        "Optimizes marketing spend",
                        "Enhances customer experience"
                    ]
                },
                {
                    title: "User Behavior & Journey Tracking",
                    description: "Understand how customers interact with your store.",
                    list: [
                        "Page views and click tracking",
                        "Navigation and funnel analysis",
                        "Drop‑off and bounce insights",
                        "Checkout behavior analysis"
                    ]
                },
                {
                    title: "Customer Segmentation",
                    description: "Group customers based on meaningful data.",
                    list: [
                        "New vs returning customers",
                        "High‑value customer identification",
                        "Purchase frequency analysis",
                        "Location and device‑based segments"
                    ]
                },
                {
                    title: "Sales & Conversion Analytics",
                    description: "Measure what drives revenue.",
                    list: [
                        "Conversion rate tracking",
                        "Average order value (AOV) analysis",
                        "Product performance insights",
                        "Campaign and promotion impact"
                    ]
                },
                {
                    title: "Personalization & Optimization Insights",
                    description: "Use data to improve personalization.",
                    list: [
                        "Personalized product recommendations",
                        "Targeted offers and discounts",
                        "Content and layout optimization",
                        "Improved retention strategies"
                    ]
                },
                {
                    title: "Who Is Customer Analytics Best For?",
                    description: "Customer analytics is ideal for:",
                    list: [
                        "Growing e‑commerce stores",
                        "Data‑driven marketing teams",
                        "Subscription and repeat‑purchase businesses",
                        "Brands focused on customer retention"
                    ]
                },
                {
                    title: "Why Solario Tech for Customer Analytics?",
                    description: "Why clients trust our analytics expertise:",
                    list: [
                        "12+ Years of E‑commerce & Analytics Experience",
                        "Business‑focused data insights",
                        "Actionable and easy‑to‑understand reports",
                        "Seamless analytics integration",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Turn Customer Data into Growth",
                description: "Our customer analytics solutions help you understand users better, optimize experiences, and grow revenue with confidence.",
                buttons: [
                    { label: "Start E‑commerce Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Mobile Commerce",
            hero: {
                title: "Mobile Commerce Solutions for Seamless Shopping on Any Device",
                description: "Solario Tech delivers powerful Mobile Commerce solutions that provide fast, intuitive, and conversion‑focused shopping experiences on smartphones and tablets.\nWith 12+ years of e‑commerce development experience, we build mobile‑first and app‑ready commerce platforms designed for today’s on‑the‑go customers.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start E‑commerce Development" }
                ]
            },
            content: [
                {
                    title: "What is Mobile Commerce?",
                    description: "Mobile commerce (m‑commerce) enables customers to browse, shop, and pay seamlessly using mobile devices.",
                    list: [
                        "Mobile‑optimized shopping experiences",
                        "Fast and responsive interfaces",
                        "Touch‑friendly navigation",
                        "Secure mobile transactions"
                    ]
                },
                {
                    title: "Why Mobile Commerce Matters",
                    description: "Most e‑commerce traffic now comes from mobile devices.",
                    list: [
                        "Higher mobile conversion rates",
                        "Improved customer convenience",
                        "Better engagement on smaller screens",
                        "Competitive advantage in mobile‑first markets"
                    ]
                },
                {
                    title: "Mobile‑First Storefront Design",
                    description: "Designs built specifically for mobile users.",
                    list: [
                        "Responsive and adaptive layouts",
                        "Optimized product pages",
                        "Thumb‑friendly navigation",
                        "Fast mobile load times"
                    ]
                },
                {
                    title: "Mobile Checkout Optimization",
                    description: "Reduce friction and cart abandonment.",
                    list: [
                        "One‑page mobile checkout",
                        "Auto‑fill and address detection",
                        "Mobile wallet integrations",
                        "Minimal input checkout flows"
                    ]
                },
                {
                    title: "Progressive Web Apps (PWA)",
                    description: "App‑like experiences without app store friction.",
                    list: [
                        "Offline browsing support",
                        "Push notifications",
                        "Fast repeat visits",
                        "Installable web apps"
                    ]
                },
                {
                    title: "Mobile App Commerce Integration",
                    description: "Commerce features inside native apps.",
                    list: [
                        "iOS and Android commerce APIs",
                        "In‑app payments",
                        "Real‑time inventory sync",
                        "Unified web and app backend"
                    ]
                },
                {
                    title: "Who Is Mobile Commerce Best For?",
                    description: "Mobile commerce solutions are ideal for:",
                    list: [
                        "Mobile‑first brands",
                        "D2C e‑commerce businesses",
                        "High‑traffic consumer platforms",
                        "Businesses targeting younger audiences"
                    ]
                },
                {
                    title: "Why Solario Tech for Mobile Commerce?",
                    description: "Why clients trust our mobile commerce expertise:",
                    list: [
                        "12+ Years of E‑commerce Development Experience",
                        "Mobile‑first UX and performance focus",
                        "Secure and scalable mobile architectures",
                        "Seamless web, PWA, and app integrations",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Win More Customers on Mobile",
                description: "Our mobile commerce solutions help you deliver fast, intuitive, and high‑converting shopping experiences on every device.",
                buttons: [
                    { label: "Start E‑commerce Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Multi-vendor Support",
            hero: {
                title: "Multi‑Vendor E‑commerce Platforms Built for Scale & Control",
                description: "Solario Tech builds powerful Multi‑vendor E‑commerce solutions that allow multiple sellers to operate seamlessly within a single platform.\nWith 12+ years of e‑commerce marketplace development experience, we create scalable, secure, and easy‑to‑manage systems for admins, vendors, and customers alike.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start E‑commerce Development" }
                ]
            },
            content: [
                {
                    title: "What is Multi‑vendor E‑commerce?",
                    description: "Multi‑vendor e‑commerce platforms allow multiple sellers to list, sell, and manage products under one unified marketplace.",
                    list: [
                        "Multiple sellers on one platform",
                        "Centralized marketplace management",
                        "Independent vendor operations",
                        "Shared customer base"
                    ]
                },
                {
                    title: "Why Multi‑vendor Support Matters",
                    description: "Marketplaces unlock rapid growth and product expansion.",
                    list: [
                        "Faster product catalog growth",
                        "Increased revenue streams",
                        "Vendor‑driven scalability",
                        "Marketplace business model enablement"
                    ]
                },
                {
                    title: "Vendor Registration & Management",
                    description: "Easy onboarding and control for sellers.",
                    list: [
                        "Vendor sign‑up and approval workflows",
                        "Seller profiles and dashboards",
                        "Role‑based access control",
                        "Vendor performance visibility"
                    ]
                },
                {
                    title: "Product & Inventory Management for Vendors",
                    description: "Independent product control for each seller.",
                    list: [
                        "Vendor‑specific product listings",
                        "Individual inventory tracking",
                        "Pricing and discount controls",
                        "Bulk product management"
                    ]
                },
                {
                    title: "Order & Commission Management",
                    description: "Clear order ownership and revenue tracking.",
                    list: [
                        "Vendor‑wise order allocation",
                        "Commission and payout calculation",
                        "Order status tracking per vendor",
                        "Transparent earnings reports"
                    ]
                },
                {
                    title: "Admin Marketplace Control",
                    description: "Full control over marketplace operations.",
                    list: [
                        "Global product and vendor moderation",
                        "Commission rule management",
                        "Dispute and refund handling",
                        "Analytics and reporting dashboard"
                    ]
                },
                {
                    title: "Scalability & Performance",
                    description: "Marketplaces built to grow without friction.",
                    list: [
                        "High‑vendor and high‑product scalability",
                        "Optimized marketplace queries",
                        "Secure multi‑tenant architecture",
                        "Performance‑ready infrastructure"
                    ]
                },
                {
                    title: "Who Is Multi‑vendor Support Best For?",
                    description: "Multi‑vendor platforms are ideal for:",
                    list: [
                        "Online marketplaces",
                        "B2B and wholesale platforms",
                        "Niche product aggregators",
                        "Startup and enterprise marketplace models"
                    ]
                },
                {
                    title: "Why Solario Tech for Multi‑vendor Platforms?",
                    description: "Why clients trust our marketplace expertise:",
                    list: [
                        "12+ Years of E‑commerce Marketplace Experience",
                        "Scalable multi‑vendor architectures",
                        "Secure vendor and admin controls",
                        "Revenue‑focused marketplace design",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Launch a Scalable Multi‑vendor Marketplace",
                description: "Our multi‑vendor e‑commerce solutions help you build, manage, and scale a successful online marketplace with confidence.",
                buttons: [
                    { label: "Start E‑commerce Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Subscription Systems",
            hero: {
                title: "Subscription Systems for Recurring Revenue & Long‑Term Growth",
                description: "Solario Tech builds flexible Subscription Systems that enable recurring billing, membership models, and long‑term customer relationships.\nWith 12+ years of e‑commerce and SaaS development experience, we design subscription platforms that are reliable, scalable, and easy to manage—for both businesses and customers.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start E‑commerce Development" }
                ]
            },
            content: [
                {
                    title: "What Are Subscription Systems?",
                    description: "Subscription systems allow customers to pay on a recurring basis for products or services using automated billing workflows.",
                    list: [
                        "Recurring revenue models",
                        "Automated billing cycles",
                        "Flexible subscription plans",
                        "Predictable cash flow"
                    ]
                },
                {
                    title: "Why Subscription Systems Matter",
                    description: "Subscriptions drive long‑term customer value and business stability.",
                    list: [
                        "Improves customer retention",
                        "Generates predictable revenue",
                        "Reduces repeat checkout friction",
                        "Supports scalable growth models"
                    ]
                },
                {
                    title: "Flexible Subscription Plans",
                    description: "Plans designed around your business model.",
                    list: [
                        "Monthly, quarterly, and annual plans",
                        "Tiered pricing models",
                        "Usage‑based subscriptions",
                        "Free trials and onboarding offers"
                    ]
                },
                {
                    title: "Automated Billing & Payments",
                    description: "Hands‑free recurring payments.",
                    list: [
                        "Auto‑renewals and retries",
                        "Proration and plan upgrades",
                        "Failed payment handling",
                        "Invoice and receipt automation"
                    ]
                },
                {
                    title: "Subscription Management for Customers",
                    description: "Simple self‑service experiences.",
                    list: [
                        "Plan upgrades and downgrades",
                        "Pause or cancel subscriptions",
                        "Payment method updates",
                        "Billing history access"
                    ]
                },
                {
                    title: "Admin & Analytics Control",
                    description: "Full visibility and control over subscriptions.",
                    list: [
                        "Subscription lifecycle tracking",
                        "Churn and retention analytics",
                        "Revenue and MRR reporting",
                        "Plan performance insights"
                    ]
                },
                {
                    title: "Scalability & Security",
                    description: "Subscription systems built for growth.",
                    list: [
                        "High‑volume recurring billing support",
                        "Secure payment handling",
                        "Compliance‑ready workflows",
                        "Scalable backend architecture"
                    ]
                },
                {
                    title: "Who Are Subscription Systems Best For?",
                    description: "Subscription systems are ideal for:",
                    list: [
                        "SaaS platforms",
                        "Membership‑based businesses",
                        "Subscription boxes and services",
                        "Digital products and content platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for Subscription Systems?",
                    description: "Why clients trust our subscription expertise:",
                    list: [
                        "12+ Years of E‑commerce & SaaS Experience",
                        "Flexible and scalable billing architectures",
                        "Seamless payment gateway integration",
                        "Retention‑focused system design",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build a Subscription Business That Scales",
                description: "Our subscription system solutions help you launch, manage, and grow recurring revenue models with confidence.",
                buttons: [
                    { label: "Start E‑commerce Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "software-maintenance": [
        {
            id: "Bug Fixing",
            hero: {
                title: "Reliable Bug Fixing for Stable & Smooth Software Operations",
                description: "Solario Tech provides fast and reliable Bug Fixing services to keep your software stable, functional, and user‑friendly.\nWith 12+ years of software maintenance experience, we identify, diagnose, and resolve issues efficiently—minimizing downtime and preventing recurring problems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Software Maintenance" }
                ]
            },
            content: [
                {
                    title: "What is Bug Fixing?",
                    description: "Bug fixing involves identifying, diagnosing, and resolving errors or unexpected behaviors in software systems.",
                    list: [
                        "Error identification and root‑cause analysis",
                        "Code‑level issue resolution",
                        "Functional and regression testing",
                        "Stability and reliability improvements"
                    ]
                },
                {
                    title: "Why Bug Fixing Matters",
                    description: "Unresolved bugs impact usability, performance, and trust.",
                    list: [
                        "Improves software reliability",
                        "Prevents system crashes and failures",
                        "Enhances user experience",
                        "Reduces long‑term maintenance costs"
                    ]
                },
                {
                    title: "Application & Functional Bug Fixes",
                    description: "Fix issues affecting core functionality.",
                    list: [
                        "Broken features and workflows",
                        "UI and UX inconsistencies",
                        "Data handling and logic errors",
                        "Cross‑browser and device issues"
                    ]
                },
                {
                    title: "Backend & API Bug Resolution",
                    description: "Stabilize backend systems and integrations.",
                    list: [
                        "API response and validation errors",
                        "Database and query issues",
                        "Integration failures",
                        "Error handling improvements"
                    ]
                },
                {
                    title: "Production & Critical Issue Fixes",
                    description: "Rapid response for live system issues.",
                    list: [
                        "Urgent production bug fixes",
                        "Downtime and crash resolution",
                        "Hotfix deployments",
                        "Post‑incident analysis"
                    ]
                },
                {
                    title: "Testing & Validation",
                    description: "Ensure fixes don’t introduce new issues.",
                    list: [
                        "Regression testing",
                        "Functional verification",
                        "Edge‑case validation",
                        "Stability confirmation"
                    ]
                },
                {
                    title: "Who Is Bug Fixing Best For?",
                    description: "Bug fixing services are ideal for:",
                    list: [
                        "Live production applications",
                        "Legacy software systems",
                        "Rapidly evolving products",
                        "Businesses facing frequent issues"
                    ]
                },
                {
                    title: "Why Solario Tech for Bug Fixing?",
                    description: "Why clients trust our maintenance expertise:",
                    list: [
                        "12+ Years of Software Maintenance Experience",
                        "Fast issue diagnosis and resolution",
                        "Clean and reliable fixes",
                        "Minimal disruption to live systems",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Keep Your Software Running Smoothly",
                description: "Our bug fixing services help you maintain stable, reliable, and user‑friendly software without interruptions.",
                buttons: [
                    { label: "Start Software Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Feature Updates",
            hero: {
                title: "Ongoing Feature Updates to Keep Your Software Evolving",
                description: "Solario Tech delivers structured Feature Update services to help your software grow with changing business needs, user expectations, and market trends.\nWith 12+ years of product enhancement and maintenance experience, we implement new features safely—without disrupting existing functionality.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Software Maintenance" }
                ]
            },
            content: [
                {
                    title: "What Are Feature Updates?",
                    description: "Feature updates involve adding, improving, or extending functionality in an existing software system.",
                    list: [
                        "New feature development",
                        "Enhancements to existing modules",
                        "Workflow and usability improvements",
                        "Controlled and tested rollouts"
                    ]
                },
                {
                    title: "Why Feature Updates Matter",
                    description: "Software must evolve continuously to stay relevant and competitive.",
                    list: [
                        "Meets changing business requirements",
                        "Improves user satisfaction",
                        "Keeps products competitive",
                        "Extends software lifespan"
                    ]
                },
                {
                    title: "New Feature Development",
                    description: "Build and integrate new capabilities seamlessly.",
                    list: [
                        "Business‑driven feature planning",
                        "API and backend enhancements",
                        "Frontend feature implementation",
                        "Backward‑compatible delivery"
                    ]
                },
                {
                    title: "Enhancement of Existing Features",
                    description: "Improve what already exists.",
                    list: [
                        "UX and usability enhancements",
                        "Performance and efficiency improvements",
                        "Feature simplification and optimization",
                        "User feedback‑based upgrades"
                    ]
                },
                {
                    title: "Safe Release & Version Management",
                    description: "Controlled updates without disruption.",
                    list: [
                        "Versioned feature releases",
                        "Staging and pre‑production testing",
                        "Rollback‑ready deployments",
                        "Minimal downtime updates"
                    ]
                },
                {
                    title: "Testing & Quality Assurance",
                    description: "Ensure stability after every update.",
                    list: [
                        "Regression testing",
                        "Feature validation",
                        "Compatibility checks",
                        "Post‑release monitoring"
                    ]
                },
                {
                    title: "Who Are Feature Updates Best For?",
                    description: "Feature update services are ideal for:",
                    list: [
                        "Live production applications",
                        "SaaS and subscription platforms",
                        "Growing digital products",
                        "Businesses responding to user feedback"
                    ]
                },
                {
                    title: "Why Solario Tech for Feature Updates?",
                    description: "Why clients trust our enhancement expertise:",
                    list: [
                        "12+ Years of Software Enhancement Experience",
                        "Business‑aligned feature delivery",
                        "Stable and backward‑compatible updates",
                        "Clean and maintainable code changes",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Evolve Your Software with Confidence",
                description: "Our feature update services help you add value continuously while keeping your software stable and reliable.",
                buttons: [
                    { label: "Start Software Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Security Patches",
            hero: {
                title: "Timely Security Patches to Protect Your Software & Data",
                description: "Solario Tech delivers proactive Security Patch services to protect your software from vulnerabilities, exploits, and emerging threats.\nWith 12+ years of secure software maintenance experience, we ensure your systems remain compliant, resilient, and protected against evolving security risks.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Software Maintenance" }
                ]
            },
            content: [
                {
                    title: "What Are Security Patches?",
                    description: "Security patches are updates that fix vulnerabilities and security flaws in software, frameworks, and dependencies.",
                    list: [
                        "Vulnerability identification and fixes",
                        "Protection against exploits and attacks",
                        "Secure configuration updates",
                        "Compliance‑ready improvements"
                    ]
                },
                {
                    title: "Why Security Patching Matters",
                    description: "Unpatched systems are a primary target for cyberattacks.",
                    list: [
                        "Prevents data breaches",
                        "Protects customer and business data",
                        "Reduces legal and compliance risks",
                        "Maintains system trust and uptime"
                    ]
                },
                {
                    title: "Application‑Level Security Updates",
                    description: "Secure your core application code.",
                    list: [
                        "Fixes for OWASP Top 10 vulnerabilities",
                        "Authentication and authorization hardening",
                        "Secure input validation updates",
                        "Session and access control fixes"
                    ]
                },
                {
                    title: "Framework & Library Patching",
                    description: "Keep your tech stack secure and up to date.",
                    list: [
                        "Framework security updates",
                        "Third‑party library vulnerability fixes",
                        "Deprecated component replacement",
                        "Compatibility‑safe updates"
                    ]
                },
                {
                    title: "Infrastructure & Environment Security",
                    description: "Protect runtime environments.",
                    list: [
                        "Server and OS security updates",
                        "Configuration hardening",
                        "Container and cloud security fixes",
                        "Environment vulnerability mitigation"
                    ]
                },
                {
                    title: "Proactive Monitoring & Patch Management",
                    description: "Security as an ongoing process.",
                    list: [
                        "Vulnerability monitoring",
                        "Risk‑based patch prioritization",
                        "Scheduled and emergency patching",
                        "Post‑patch validation"
                    ]
                },
                {
                    title: "Who Are Security Patches Best For?",
                    description: "Security patch services are ideal for:",
                    list: [
                        "Live production systems",
                        "Enterprise and SaaS platforms",
                        "Data‑sensitive applications",
                        "Compliance‑driven businesses"
                    ]
                },
                {
                    title: "Why Solario Tech for Security Patching?",
                    description: "Why clients trust our security maintenance:",
                    list: [
                        "12+ Years of Secure Software Maintenance Experience",
                        "Proactive vulnerability management",
                        "Minimal downtime patching",
                        "Compliance‑aware updates",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Keep Your Software Secure & Compliant",
                description: "Our security patching services help you stay protected against threats while maintaining system stability and trust.",
                buttons: [
                    { label: "Start Software Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Performance Optimization",
            hero: {
                title: "Performance Optimization for Faster, More Reliable Software",
                description: "Solario Tech delivers Performance Optimization services to improve speed, stability, and efficiency across your software systems.\nWith 12+ years of performance tuning and maintenance experience, we identify bottlenecks and optimize applications to handle real‑world loads smoothly.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Software Maintenance" }
                ]
            },
            content: [
                {
                    title: "What is Performance Optimization?",
                    description: "Performance optimization focuses on improving response time, throughput, and resource efficiency of software applications.",
                    list: [
                        "Faster response times",
                        "Efficient CPU and memory usage",
                        "Stable performance under load",
                        "Improved scalability"
                    ]
                },
                {
                    title: "Why Performance Optimization Matters",
                    description: "Slow or unstable software directly impacts users and revenue.",
                    list: [
                        "Improves user experience",
                        "Supports higher traffic and usage",
                        "Reduces infrastructure costs",
                        "Prevents performance‑related failures"
                    ]
                },
                {
                    title: "Application & Code Optimization",
                    description: "Improve performance at the code level.",
                    list: [
                        "Inefficient logic and query fixes",
                        "Optimized algorithms and data handling",
                        "Reduced execution overhead",
                        "Cleaner and faster code paths"
                    ]
                },
                {
                    title: "Database & Query Optimization",
                    description: "Faster data access and processing.",
                    list: [
                        "Query tuning and indexing",
                        "Connection pooling",
                        "Reduced database contention",
                        "Efficient ORM usage"
                    ]
                },
                {
                    title: "Infrastructure & Resource Optimization",
                    description: "Better performance from existing resources.",
                    list: [
                        "Server and hosting optimization",
                        "Caching strategies",
                        "Load balancing improvements",
                        "Scalability readiness"
                    ]
                },
                {
                    title: "Monitoring & Load Testing",
                    description: "Data‑driven performance improvements.",
                    list: [
                        "Performance monitoring and profiling",
                        "Bottleneck identification",
                        "Load and stress testing",
                        "Continuous performance tuning"
                    ]
                },
                {
                    title: "Who Is Performance Optimization Best For?",
                    description: "Performance optimization services are ideal for:",
                    list: [
                        "High‑traffic applications",
                        "Growing SaaS platforms",
                        "Systems experiencing slowdowns",
                        "Performance‑critical software"
                    ]
                },
                {
                    title: "Why Solario Tech for Performance Optimization?",
                    description: "Why clients trust our optimization expertise:",
                    list: [
                        "12+ Years of Performance Engineering Experience",
                        "Real‑world load handling expertise",
                        "Balanced speed and stability focus",
                        "Measurable performance improvements",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Make Your Software Faster & More Reliable",
                description: "Our performance optimization services help your applications run faster, scale better, and stay stable under real‑world demand.",
                buttons: [
                    { label: "Start Software Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Documentation",
            hero: {
                title: "Clear & Maintainable Documentation for Long‑Term Software Success",
                description: "Solario Tech provides comprehensive Documentation services to ensure your software is easy to understand, maintain, and scale.\nWith 12+ years of software maintenance experience, we create clear, structured, and up‑to‑date documentation that supports developers, stakeholders, and support teams.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Software Maintenance" }
                ]
            },
            content: [
                {
                    title: "What is Software Documentation?",
                    description: "Software documentation captures technical and functional details about your system to support development, maintenance, and onboarding.",
                    list: [
                        "Clear system understanding",
                        "Reduced dependency on individual developers",
                        "Faster onboarding and handover",
                        "Improved long‑term maintainability"
                    ]
                },
                {
                    title: "Why Documentation Matters",
                    description: "Poor or missing documentation increases risk and slows down development.",
                    list: [
                        "Faster issue resolution",
                        "Easier feature updates and refactoring",
                        "Reduced knowledge loss",
                        "Better collaboration across teams"
                    ]
                },
                {
                    title: "Technical Documentation",
                    description: "Detailed documentation for developers and engineers.",
                    list: [
                        "System architecture overviews",
                        "Codebase and module explanations",
                        "API documentation",
                        "Deployment and environment guides"
                    ]
                },
                {
                    title: "Functional & User Documentation",
                    description: "Clear guidance for non‑technical users and stakeholders.",
                    list: [
                        "Feature and workflow descriptions",
                        "Admin and user manuals",
                        "Business logic explanations",
                        "Usage guidelines"
                    ]
                },
                {
                    title: "Maintenance & Update Documentation",
                    description: "Documentation that evolves with your software.",
                    list: [
                        "Change logs and version history",
                        "Feature update records",
                        "Known issues and resolutions",
                        "Maintenance procedures"
                    ]
                },
                {
                    title: "Standardized & Accessible Formats",
                    description: "Documentation that’s easy to read and maintain.",
                    list: [
                        "Well‑structured documentation formats",
                        "Markdown, PDF, or web‑based docs",
                        "Centralized documentation repositories",
                        "Easy future updates"
                    ]
                },
                {
                    title: "Who Is Documentation Best For?",
                    description: "Documentation services are ideal for:",
                    list: [
                        "Growing development teams",
                        "Long‑term software products",
                        "Enterprise and SaaS platforms",
                        "Businesses planning team expansion"
                    ]
                },
                {
                    title: "Why Solario Tech for Documentation?",
                    description: "Why clients trust our documentation expertise:",
                    list: [
                        "12+ Years of Software Maintenance Experience",
                        "Clear and developer‑friendly documentation",
                        "Business and technical alignment",
                        "Easy‑to‑maintain documentation structures",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Make Your Software Easy to Maintain",
                description: "Our documentation services help you reduce risk, improve clarity, and ensure long‑term success for your software systems.",
                buttons: [
                    { label: "Start Software Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Code Refactoring",
            hero: {
                title: "Code Refactoring for Clean, Scalable & Maintainable Software",
                description: "Solario Tech provides professional Code Refactoring services to improve code quality, readability, and long‑term maintainability—without changing existing functionality.\nWith 12+ years of software maintenance experience, we transform legacy and cluttered codebases into clean, efficient, and scalable systems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Software Maintenance" }
                ]
            },
            content: [
                {
                    title: "What is Code Refactoring?",
                    description: "Code refactoring is the process of restructuring existing code to improve quality, performance, and maintainability without altering behavior.",
                    list: [
                        "Cleaner and more readable code",
                        "Improved structure and modularity",
                        "Reduced technical debt",
                        "Easier future enhancements"
                    ]
                },
                {
                    title: "Why Code Refactoring Matters",
                    description: "Unmaintained code slows development and increases risk.",
                    list: [
                        "Improves development speed",
                        "Reduces bugs and regressions",
                        "Simplifies onboarding of new developers",
                        "Extends software lifespan"
                    ]
                },
                {
                    title: "Legacy Code Cleanup",
                    description: "Modernize outdated or hard‑to‑maintain codebases.",
                    list: [
                        "Removal of redundant or dead code",
                        "Modern coding standards adoption",
                        "Improved naming and structure",
                        "Reduced code complexity"
                    ]
                },
                {
                    title: "Architecture & Structural Improvements",
                    description: "Build a strong foundation for future growth.",
                    list: [
                        "Modularization of large components",
                        "Separation of concerns",
                        "Improved dependency management",
                        "Scalable architecture patterns"
                    ]
                },
                {
                    title: "Performance & Efficiency Improvements",
                    description: "Refactoring with performance in mind.",
                    list: [
                        "Optimized logic and workflows",
                        "Reduced unnecessary processing",
                        "Efficient data handling",
                        "Cleaner execution paths"
                    ]
                },
                {
                    title: "Safe & Controlled Refactoring",
                    description: "Refactoring without breaking production systems.",
                    list: [
                        "Comprehensive regression testing",
                        "Incremental refactoring approach",
                        "Version‑controlled changes",
                        "Stability validation"
                    ]
                },
                {
                    title: "Who Is Code Refactoring Best For?",
                    description: "Code refactoring services are ideal for:",
                    list: [
                        "Legacy software systems",
                        "Rapidly evolving applications",
                        "Growing development teams",
                        "Products with high technical debt"
                    ]
                },
                {
                    title: "Why Solario Tech for Code Refactoring?",
                    description: "Why clients trust our refactoring expertise:",
                    list: [
                        "12+ Years of Software Maintenance Experience",
                        "Clean‑code and best‑practice focus",
                        "Safe, test‑driven refactoring approach",
                        "Improved maintainability and scalability",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Clean Up Your Codebase with Confidence",
                description: "Our code refactoring services help you reduce technical debt, improve maintainability, and prepare your software for future growth.",
                buttons: [
                    { label: "Start Software Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Dependency Updates",
            hero: {
                title: "Dependency Updates for Secure & Stable Software Systems",
                description: "Solario Tech provides reliable Dependency Update services to keep your software frameworks, libraries, and third‑party components secure, compatible, and up to date.\nWith 12+ years of software maintenance experience, we ensure updates are applied safely—without breaking functionality or disrupting production systems.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Software Maintenance" }
                ]
            },
            content: [
                {
                    title: "What Are Dependency Updates?",
                    description: "Dependency updates involve upgrading frameworks, libraries, SDKs, and third‑party components used within your software.",
                    list: [
                        "Framework and library upgrades",
                        "Security vulnerability fixes",
                        "Compatibility improvements",
                        "Long‑term maintainability"
                    ]
                },
                {
                    title: "Why Dependency Updates Matter",
                    description: "Outdated dependencies introduce security risks and technical debt.",
                    list: [
                        "Prevents security vulnerabilities",
                        "Improves system stability",
                        "Ensures compatibility with new features",
                        "Reduces future upgrade complexity"
                    ]
                },
                {
                    title: "Framework & Core Library Updates",
                    description: "Keep your technology stack current.",
                    list: [
                        "Backend framework upgrades",
                        "Frontend library updates",
                        "Language runtime compatibility",
                        "Deprecation issue resolution"
                    ]
                },
                {
                    title: "Third‑Party Package Management",
                    description: "Safe handling of external dependencies.",
                    list: [
                        "Audit of third‑party packages",
                        "Vulnerability and risk assessment",
                        "Version compatibility checks",
                        "Replacement of abandoned libraries"
                    ]
                },
                {
                    title: "Safe Upgrade & Testing Process",
                    description: "Updates without breaking your application.",
                    list: [
                        "Staged and incremental upgrades",
                        "Regression and integration testing",
                        "Rollback‑ready update strategy",
                        "Production stability validation"
                    ]
                },
                {
                    title: "Dependency Monitoring & Planning",
                    description: "Stay ahead of future risks.",
                    list: [
                        "Dependency health monitoring",
                        "Planned upgrade roadmaps",
                        "Version lifecycle awareness",
                        "Reduced technical debt over time"
                    ]
                },
                {
                    title: "Who Are Dependency Updates Best For?",
                    description: "Dependency update services are ideal for:",
                    list: [
                        "Long‑running software projects",
                        "Security‑sensitive applications",
                        "SaaS and enterprise platforms",
                        "Teams avoiding risky major upgrades"
                    ]
                },
                {
                    title: "Why Solario Tech for Dependency Updates?",
                    description: "Why clients trust our update expertise:",
                    list: [
                        "12+ Years of Software Maintenance Experience",
                        "Security‑first update approach",
                        "Compatibility‑safe upgrade process",
                        "Minimal downtime updates",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Keep Your Software Dependencies Healthy",
                description: "Our dependency update services help you stay secure, stable, and future‑ready—without upgrade headaches.",
                buttons: [
                    { label: "Start Software Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Technical Support",
            hero: {
                title: "Reliable Technical Support for Continuous Software Stability",
                description: "Solario Tech provides dependable Technical Support services to ensure your software systems remain stable, responsive, and well‑supported at all times.\nWith 12+ years of software support and maintenance experience, we act as your extended technical team—ready to resolve issues, assist users, and keep operations running smoothly.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Software Maintenance" }
                ]
            },
            content: [
                {
                    title: "What is Technical Support?",
                    description: "Technical support provides ongoing assistance to monitor, troubleshoot, and resolve software‑related issues in day‑to‑day operations.",
                    list: [
                        "Issue diagnosis and resolution",
                        "User and system support",
                        "Operational stability",
                        "Continuous assistance"
                    ]
                },
                {
                    title: "Why Technical Support Matters",
                    description: "Without reliable support, small issues can escalate into major disruptions.",
                    list: [
                        "Minimizes downtime",
                        "Ensures smooth daily operations",
                        "Improves user satisfaction",
                        "Reduces internal support burden"
                    ]
                },
                {
                    title: "Application & System Support",
                    description: "Support across your full software stack.",
                    list: [
                        "Frontend and backend issue handling",
                        "API and integration support",
                        "Database and server troubleshooting",
                        "Production environment assistance"
                    ]
                },
                {
                    title: "User & Admin Assistance",
                    description: "Helping users work efficiently with your software.",
                    list: [
                        "User issue resolution",
                        "Admin panel support",
                        "Access and permission assistance",
                        "Usage and workflow guidance"
                    ]
                },
                {
                    title: "Incident & Issue Management",
                    description: "Structured handling of technical issues.",
                    list: [
                        "Issue tracking and prioritization",
                        "Critical incident response",
                        "Root‑cause analysis",
                        "Preventive recommendations"
                    ]
                },
                {
                    title: "Monitoring & Proactive Support",
                    description: "Prevent problems before they impact users.",
                    list: [
                        "System health monitoring",
                        "Early issue detection",
                        "Proactive maintenance alerts",
                        "Performance and stability checks"
                    ]
                },
                {
                    title: "Flexible Support Models",
                    description: "Support aligned with your business needs.",
                    list: [
                        "On‑demand technical support",
                        "Dedicated support hours",
                        "Monthly maintenance retainers",
                        "Scalable support coverage"
                    ]
                },
                {
                    title: "Who Is Technical Support Best For?",
                    description: "Technical support services are ideal for:",
                    list: [
                        "Live production applications",
                        "SaaS and enterprise platforms",
                        "Growing businesses without in‑house support",
                        "Long‑term software products"
                    ]
                },
                {
                    title: "Why Solario Tech for Technical Support?",
                    description: "Why clients trust our support services:",
                    list: [
                        "12+ Years of Software Support Experience",
                        "Fast and reliable issue resolution",
                        "Clear communication and reporting",
                        "Proactive and preventive support approach",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Get Reliable Technical Support You Can Trust",
                description: "Our technical support services ensure your software stays stable, supported, and ready for everyday business demands.",
                buttons: [
                    { label: "Start Software Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "email-marketing": [
        {
            id: "Campaign Design",
            hero: {
                title: "High‑Impact Email Campaign Design That Drives Engagement",
                description: "Solario Tech delivers strategic Email Campaign Design services that help businesses connect with audiences, boost engagement, and drive measurable results.\nWith 12+ years of digital marketing and campaign execution experience, we design email campaigns that align with your brand, goals, and customer journeys.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Email Marketing" }
                ]
            },
            content: [
                {
                    title: "What is Email Campaign Design?",
                    description: "Email campaign design focuses on planning, structuring, and crafting email campaigns that communicate the right message at the right time.",
                    list: [
                        "Goal‑driven campaign planning",
                        "Clear messaging and CTAs",
                        "Audience‑focused content structure",
                        "Consistent brand communication"
                    ]
                },
                {
                    title: "Why Campaign Design Matters",
                    description: "Well‑designed campaigns significantly improve open rates, clicks, and conversions.",
                    list: [
                        "Higher engagement rates",
                        "Clear value communication",
                        "Improved click‑through performance",
                        "Stronger brand recall"
                    ]
                },
                {
                    title: "Campaign Strategy & Planning",
                    description: "Every campaign starts with a clear objective.",
                    list: [
                        "Campaign goal definition",
                        "Audience segmentation planning",
                        "Content and CTA strategy",
                        "Timeline and frequency planning"
                    ]
                },
                {
                    title: "Content & Messaging Design",
                    description: "Emails crafted to resonate with your audience.",
                    list: [
                        "Compelling subject lines",
                        "Clear and concise messaging",
                        "Conversion‑focused CTAs",
                        "Brand‑aligned tone and voice"
                    ]
                },
                {
                    title: "Campaign Types We Design",
                    description: "Campaigns tailored to different business goals.",
                    list: [
                        "Promotional and sales campaigns",
                        "Product launches and announcements",
                        "Newsletter and content campaigns",
                        "Re‑engagement and retention emails"
                    ]
                },
                {
                    title: "Multi‑Device & Inbox Optimization",
                    description: "Campaigns designed to perform everywhere.",
                    list: [
                        "Mobile‑first campaign structure",
                        "Inbox‑friendly layouts",
                        "Clear visual hierarchy",
                        "Fast‑loading email content"
                    ]
                },
                {
                    title: "Who Is Campaign Design Best For?",
                    description: "Email campaign design is ideal for:",
                    list: [
                        "E‑commerce and SaaS businesses",
                        "Brands running promotions or launches",
                        "Companies nurturing leads",
                        "Businesses building long‑term engagement"
                    ]
                },
                {
                    title: "Why Solario Tech for Campaign Design?",
                    description: "Why clients trust our email campaign expertise:",
                    list: [
                        "12+ Years of Email & Digital Marketing Experience",
                        "Strategy‑first campaign planning",
                        "Conversion‑focused messaging",
                        "Brand‑consistent design approach",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Design Email Campaigns That Get Results",
                description: "Our email campaign design services help you engage audiences, drive clicks, and achieve your marketing goals with confidence.",
                buttons: [
                    { label: "Start Email Marketing" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "List Management",
            hero: {
                title: "Smart Email List Management for Better Reach & Engagement",
                description: "Solario Tech provides professional Email List Management services to help businesses grow, organize, and maintain high‑quality subscriber lists.\nWith 12+ years of email marketing experience, we ensure your campaigns reach the right audience, stay compliant, and perform at their best.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Email Marketing" }
                ]
            },
            content: [
                {
                    title: "What is Email List Management?",
                    description: "Email list management focuses on maintaining clean, segmented, and permission‑based subscriber lists for effective communication.",
                    list: [
                        "Organized and up‑to‑date subscriber lists",
                        "Higher engagement and open rates",
                        "Reduced bounce and spam complaints",
                        "Compliance with email regulations"
                    ]
                },
                {
                    title: "Why List Management Matters",
                    description: "Poor list hygiene leads to low engagement and deliverability issues.",
                    list: [
                        "Improves email deliverability",
                        "Boosts campaign performance",
                        "Protects sender reputation",
                        "Ensures regulatory compliance"
                    ]
                },
                {
                    title: "List Cleaning & Hygiene",
                    description: "Maintain a healthy and responsive subscriber base.",
                    list: [
                        "Removal of inactive subscribers",
                        "Bounce and invalid email cleanup",
                        "Spam complaint handling",
                        "Duplicate record removal"
                    ]
                },
                {
                    title: "Segmentation & Targeting",
                    description: "Send the right message to the right audience.",
                    list: [
                        "Behavior‑based segmentation",
                        "Demographic and interest grouping",
                        "Purchase and engagement history",
                        "Campaign‑specific audience targeting"
                    ]
                },
                {
                    title: "Opt‑in & Subscription Management",
                    description: "Grow lists the right way.",
                    list: [
                        "Single and double opt‑in setup",
                        "Preference center configuration",
                        "Unsubscribe and consent handling",
                        "Compliance with GDPR, CAN‑SPAM, etc."
                    ]
                },
                {
                    title: "List Growth & Integration",
                    description: "Build lists across multiple channels.",
                    list: [
                        "Website and landing page forms",
                        "CRM and e‑commerce integrations",
                        "Lead magnet and signup flows",
                        "Cross‑platform list synchronization"
                    ]
                },
                {
                    title: "Who Is List Management Best For?",
                    description: "Email list management is ideal for:",
                    list: [
                        "Growing email marketing programs",
                        "E‑commerce and SaaS businesses",
                        "Brands with large subscriber bases",
                        "Businesses improving deliverability"
                    ]
                },
                {
                    title: "Why Solario Tech for List Management?",
                    description: "Why clients trust our email list expertise:",
                    list: [
                        "12+ Years of Email Marketing Experience",
                        "Compliance‑first list handling",
                        "Data‑driven segmentation strategies",
                        "Improved deliverability and engagement",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build a Clean & High‑Performing Email List",
                description: "Our list management services help you reach the right subscribers, improve engagement, and maximize email marketing ROI.",
                buttons: [
                    { label: "Start Email Marketing" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Automation Workflows",
            hero: {
                title: "Email Automation Workflows That Nurture, Convert & Retain",
                description: "Solario Tech designs and implements intelligent Email Automation Workflows that engage customers at the right moment—without manual effort.\nWith 12+ years of email marketing and automation experience, we build workflows that nurture leads, drive conversions, and improve long‑term customer retention.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Email Marketing" }
                ]
            },
            content: [
                {
                    title: "What Are Email Automation Workflows?",
                    description: "Automation workflows send emails automatically based on user behavior, actions, or lifecycle stages.",
                    list: [
                        "Behavior‑triggered emails",
                        "Timely and relevant communication",
                        "Reduced manual campaign effort",
                        "Consistent customer engagement"
                    ]
                },
                {
                    title: "Why Automation Workflows Matter",
                    description: "Manual emails can’t scale or respond in real time.",
                    list: [
                        "Higher engagement and conversion rates",
                        "Improved lead nurturing",
                        "Consistent brand communication",
                        "Better customer experience at scale"
                    ]
                },
                {
                    title: "Lead Nurturing Workflows",
                    description: "Guide prospects from interest to conversion.",
                    list: [
                        "Welcome and onboarding sequences",
                        "Educational and value‑driven emails",
                        "Timed follow‑ups",
                        "Conversion‑focused CTAs"
                    ]
                },
                {
                    title: "E‑commerce Automation",
                    description: "Automated flows that drive revenue.",
                    list: [
                        "Abandoned cart recovery",
                        "Browse and product follow‑ups",
                        "Post‑purchase engagement",
                        "Cross‑sell and upsell automation"
                    ]
                },
                {
                    title: "Customer Retention & Lifecycle Emails",
                    description: "Stay connected beyond the first sale.",
                    list: [
                        "Re‑engagement campaigns",
                        "Renewal and subscription reminders",
                        "Loyalty and reward emails",
                        "Win‑back workflows"
                    ]
                },
                {
                    title: "Event & Trigger‑Based Automation",
                    description: "Emails that react to user actions.",
                    list: [
                        "Signup and account activity triggers",
                        "Purchase and usage‑based emails",
                        "Date‑based automation",
                        "Real‑time behavioral triggers"
                    ]
                },
                {
                    title: "Who Are Automation Workflows Best For?",
                    description: "Email automation is ideal for:",
                    list: [
                        "E‑commerce businesses",
                        "SaaS and subscription platforms",
                        "Lead‑driven sales teams",
                        "Brands focused on retention"
                    ]
                },
                {
                    title: "Why Solario Tech for Email Automation?",
                    description: "Why clients trust our automation expertise:",
                    list: [
                        "12+ Years of Email Automation Experience",
                        "Strategy‑driven workflow design",
                        "Clean and scalable automation logic",
                        "Improved conversions and retention",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Automate Emails That Work While You Scale",
                description: "Our email automation workflows help you engage customers automatically, consistently, and effectively—at every stage of their journey.",
                buttons: [
                    { label: "Start Email Marketing" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "A/B Testing",
            hero: {
                title: "A/B Testing for Higher Email Opens, Clicks & Conversions",
                description: "Solario Tech provides structured A/B Testing services to optimize email campaigns through data‑driven experimentation.\nWith 12+ years of email marketing experience, we test, measure, and refine every element of your emails to continuously improve engagement and ROI.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Email Marketing" }
                ]
            },
            content: [
                {
                    title: "What is A/B Testing in Email Marketing?",
                    description: "A/B testing compares two or more variations of an email to determine which performs better based on real user behavior.",
                    list: [
                        "Data‑driven decision making",
                        "Continuous campaign improvement",
                        "Higher engagement rates",
                        "Reduced guesswork"
                    ]
                },
                {
                    title: "Why A/B Testing Matters",
                    description: "Small improvements compound into significant performance gains over time.",
                    list: [
                        "Improves open and click‑through rates",
                        "Identifies what resonates with your audience",
                        "Optimizes conversions",
                        "Maximizes campaign ROI"
                    ]
                },
                {
                    title: "Subject Line & Preview Text Testing",
                    description: "Optimize first impressions in the inbox.",
                    list: [
                        "Subject line wording tests",
                        "Personalization vs generic messaging",
                        "Length and tone experiments",
                        "Preview text optimization"
                    ]
                },
                {
                    title: "Content & CTA Testing",
                    description: "Find the messaging that drives action.",
                    list: [
                        "Email copy variations",
                        "CTA text and placement",
                        "Button design and color tests",
                        "Short vs long‑form content"
                    ]
                },
                {
                    title: "Design & Layout Testing",
                    description: "Visual optimization for better engagement.",
                    list: [
                        "Single vs multi‑column layouts",
                        "Image‑heavy vs text‑focused emails",
                        "Mobile‑first layout testing",
                        "Visual hierarchy experiments"
                    ]
                },
                {
                    title: "Send Time & Frequency Testing",
                    description: "Reach subscribers at the right moment.",
                    list: [
                        "Best day and time testing",
                        "Time‑zone‑based optimization",
                        "Frequency impact analysis",
                        "Engagement timing insights"
                    ]
                },
                {
                    title: "Who Is A/B Testing Best For?",
                    description: "A/B testing is ideal for:",
                    list: [
                        "Conversion‑focused email campaigns",
                        "E‑commerce and SaaS businesses",
                        "High‑volume email programs",
                        "Teams focused on continuous improvement"
                    ]
                },
                {
                    title: "Why Solario Tech for A/B Testing?",
                    description: "Why clients trust our testing expertise:",
                    list: [
                        "12+ Years of Email Optimization Experience",
                        "Structured and statistically sound testing",
                        "Actionable insights, not vanity metrics",
                        "Continuous performance improvement",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Optimize Every Email with Data‑Driven Testing",
                description: "Our A/B testing services help you learn what works, refine campaigns, and consistently improve email marketing performance.",
                buttons: [
                    { label: "Start Email Marketing" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Analytics & Reporting",
            hero: {
                title: "Email Analytics & Reporting for Clear Marketing Insights",
                description: "Solario Tech delivers comprehensive Email Analytics & Reporting services to help businesses understand performance, measure ROI, and optimize future campaigns.\nWith 12+ years of email marketing experience, we transform raw email data into clear, actionable insights that drive smarter decisions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Email Marketing" }
                ]
            },
            content: [
                {
                    title: "What is Email Analytics & Reporting?",
                    description: "Email analytics tracks campaign performance and subscriber behavior to evaluate effectiveness and guide optimization.",
                    list: [
                        "Performance measurement and tracking",
                        "Subscriber behavior insights",
                        "Campaign ROI visibility",
                        "Data‑driven optimization"
                    ]
                },
                {
                    title: "Why Analytics & Reporting Matters",
                    description: "Without clear data, it’s impossible to improve results consistently.",
                    list: [
                        "Identifies what works and what doesn’t",
                        "Improves campaign effectiveness",
                        "Supports better marketing decisions",
                        "Aligns email efforts with business goals"
                    ]
                },
                {
                    title: "Core Email Performance Metrics",
                    description: "Track the KPIs that truly matter.",
                    list: [
                        "Open and click‑through rates",
                        "Bounce and unsubscribe rates",
                        "Conversion and revenue tracking",
                        "Engagement trends over time"
                    ]
                },
                {
                    title: "Campaign & Audience Insights",
                    description: "Understand how different campaigns and segments perform.",
                    list: [
                        "Campaign‑level performance reports",
                        "Audience and segment analysis",
                        "Content and CTA effectiveness",
                        "Device and location insights"
                    ]
                },
                {
                    title: "Custom Dashboards & Reports",
                    description: "Reporting tailored to your business needs.",
                    list: [
                        "Role‑specific dashboards",
                        "Automated reporting schedules",
                        "Custom KPIs and metrics",
                        "Easy‑to‑share reports"
                    ]
                },
                {
                    title: "Optimization & Growth Insights",
                    description: "Use data to continuously improve results.",
                    list: [
                        "Performance trend analysis",
                        "Optimization recommendations",
                        "A/B test result interpretation",
                        "Actionable improvement plans"
                    ]
                },
                {
                    title: "Who Is Analytics & Reporting Best For?",
                    description: "Email analytics services are ideal for:",
                    list: [
                        "Data‑driven marketing teams",
                        "E‑commerce and SaaS businesses",
                        "High‑volume email programs",
                        "Brands focused on continuous improvement"
                    ]
                },
                {
                    title: "Why Solario Tech for Email Analytics?",
                    description: "Why clients trust our reporting expertise:",
                    list: [
                        "12+ Years of Email Marketing Experience",
                        "Clear, business‑focused insights",
                        "Actionable reports—not just numbers",
                        "Easy‑to‑understand dashboards",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Turn Email Data into Measurable Growth",
                description: "Our analytics and reporting services help you understand performance clearly, optimize campaigns confidently, and grow email marketing ROI.",
                buttons: [
                    { label: "Start Email Marketing" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Template Design",
            hero: {
                title: "Professional Email Template Design for Consistent & On‑Brand Communication",
                description: "Solario Tech delivers high‑quality Email Template Design services that ensure your emails look professional, load fast, and stay consistent across devices and inboxes.\nWith 12+ years of email marketing and design experience, we create reusable templates that balance aesthetics, usability, and conversion performance.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Email Marketing" }
                ]
            },
            content: [
                {
                    title: "What is Email Template Design?",
                    description: "Email template design focuses on creating reusable, responsive layouts that maintain brand consistency and improve campaign efficiency.",
                    list: [
                        "Reusable and scalable layouts",
                        "Brand‑consistent design",
                        "Faster campaign creation",
                        "Cross‑client compatibility"
                    ]
                },
                {
                    title: "Why Template Design Matters",
                    description: "Well‑designed templates improve engagement and reduce campaign setup time.",
                    list: [
                        "Consistent brand presentation",
                        "Improved readability and UX",
                        "Reduced design effort per campaign",
                        "Higher engagement rates"
                    ]
                },
                {
                    title: "Responsive & Mobile‑First Design",
                    description: "Templates optimized for every screen size.",
                    list: [
                        "Mobile‑first layouts",
                        "Responsive email structure",
                        "Touch‑friendly CTAs",
                        "Clear visual hierarchy"
                    ]
                },
                {
                    title: "Brand‑Aligned Visual Design",
                    description: "Templates that reflect your brand identity.",
                    list: [
                        "Custom color palettes and typography",
                        "Logo and brand asset integration",
                        "Consistent spacing and layout",
                        "Professional visual styling"
                    ]
                },
                {
                    title: "Modular & Reusable Components",
                    description: "Flexible templates for multiple campaign types.",
                    list: [
                        "Reusable content blocks",
                        "Easy content replacement",
                        "Campaign‑specific sections",
                        "Scalable design system"
                    ]
                },
                {
                    title: "Inbox & Client Compatibility",
                    description: "Templates tested across major email clients.",
                    list: [
                        "Gmail, Outlook, Apple Mail compatibility",
                        "Dark‑mode readiness",
                        "Fallback‑safe designs",
                        "Fast‑loading HTML structure"
                    ]
                },
                {
                    title: "Who Is Template Design Best For?",
                    description: "Email template design is ideal for:",
                    list: [
                        "Brands running frequent campaigns",
                        "E‑commerce and SaaS businesses",
                        "Marketing teams seeking consistency",
                        "Businesses scaling email efforts"
                    ]
                },
                {
                    title: "Why Solario Tech for Template Design?",
                    description: "Why clients trust our email design expertise:",
                    list: [
                        "12+ Years of Email Design Experience",
                        "Responsive and inbox‑safe templates",
                        "Brand‑consistent design systems",
                        "Conversion‑focused layouts",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Design Email Templates That Scale with Your Brand",
                description: "Our email template design services help you create consistent, professional, and high‑performing emails—campaign after campaign.",
                buttons: [
                    { label: "Start Email Marketing" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Deliverability Optimization",
            hero: {
                title: "Email Deliverability Optimization for Maximum Inbox Placement",
                description: "Solario Tech provides Email Deliverability Optimization services to ensure your emails consistently reach subscribers’ inboxes—not spam folders.\nWith 12+ years of email marketing and deliverability expertise, we optimize technical setup, sending practices, and list quality to protect sender reputation and maximize reach.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Email Marketing" }
                ]
            },
            content: [
                {
                    title: "What is Email Deliverability?",
                    description: "Email deliverability measures how successfully your emails reach recipients’ inboxes.",
                    list: [
                        "Inbox placement optimization",
                        "Spam and bounce reduction",
                        "Sender reputation management",
                        "Consistent email reach"
                    ]
                },
                {
                    title: "Why Deliverability Optimization Matters",
                    description: "Even great campaigns fail if emails don’t reach the inbox.",
                    list: [
                        "Higher open and engagement rates",
                        "Reduced spam filtering",
                        "Improved sender reputation",
                        "Better campaign ROI"
                    ]
                },
                {
                    title: "Domain & Authentication Setup",
                    description: "Build trust with inbox providers.",
                    list: [
                        "SPF, DKIM, and DMARC configuration",
                        "Domain reputation management",
                        "Dedicated IP setup (if needed)",
                        "Secure sending practices"
                    ]
                },
                {
                    title: "List Hygiene & Engagement Signals",
                    description: "Send only to users who want your emails.",
                    list: [
                        "Inactive subscriber cleanup",
                        "Bounce and complaint monitoring",
                        "Engagement‑based segmentation",
                        "Permission‑based sending"
                    ]
                },
                {
                    title: "Sending Strategy Optimization",
                    description: "Improve how and when emails are sent.",
                    list: [
                        "Warm‑up strategies for new domains/IPs",
                        "Send‑time and frequency optimization",
                        "Volume control and ramp‑up planning",
                        "ISP‑friendly sending patterns"
                    ]
                },
                {
                    title: "Spam & Content Risk Reduction",
                    description: "Minimize factors that trigger spam filters.",
                    list: [
                        "Spam‑safe content review",
                        "Balanced text‑to‑image ratios",
                        "Clean HTML structure",
                        "Link and domain reputation checks"
                    ]
                },
                {
                    title: "Monitoring & Deliverability Reporting",
                    description: "Continuous visibility into inbox performance.",
                    list: [
                        "Inbox placement monitoring",
                        "Spam complaint tracking",
                        "Deliverability health reports",
                        "Ongoing optimization recommendations"
                    ]
                },
                {
                    title: "Who Is Deliverability Optimization Best For?",
                    description: "Deliverability optimization is ideal for:",
                    list: [
                        "High‑volume email senders",
                        "E‑commerce and SaaS businesses",
                        "Brands facing spam or low open rates",
                        "Businesses protecting sender reputation"
                    ]
                },
                {
                    title: "Why Solario Tech for Deliverability Optimization?",
                    description: "Why clients trust our deliverability expertise:",
                    list: [
                        "12+ Years of Email Deliverability Experience",
                        "Proven inbox placement strategies",
                        "ISP‑ and compliance‑aware approach",
                        "Data‑driven optimization methods",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Reach the Inbox—Every Time",
                description: "Our deliverability optimization services help your emails land where they belong, improving engagement and protecting your sender reputation.",
                buttons: [
                    { label: "Start Email Marketing" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Personalization",
            hero: {
                title: "Email Personalization That Feels Relevant & Drives Action",
                description: "Solario Tech delivers advanced Email Personalization services to help businesses send relevant, timely, and highly engaging emails at scale.\nWith 12+ years of email marketing experience, we use customer data, behavior, and preferences to create personalized email experiences that boost engagement, conversions, and loyalty.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Email Marketing" }
                ]
            },
            content: [
                {
                    title: "What is Email Personalization?",
                    description: "Email personalization tailors content, messaging, and timing based on individual subscriber data and behavior.",
                    list: [
                        "Relevant and targeted messaging",
                        "Improved engagement and response rates",
                        "Stronger customer relationships",
                        "Higher conversion performance"
                    ]
                },
                {
                    title: "Why Personalization Matters",
                    description: "Generic emails are ignored—personalized emails are opened and acted upon.",
                    list: [
                        "Higher open and click‑through rates",
                        "Improved customer experience",
                        "Stronger brand connection",
                        "Better marketing ROI"
                    ]
                },
                {
                    title: "Dynamic Content Personalization",
                    description: "Content that adapts to each subscriber.",
                    list: [
                        "Personalized subject lines and greetings",
                        "Dynamic product and content blocks",
                        "Location and time‑based messaging",
                        "Behavior‑driven content display"
                    ]
                },
                {
                    title: "Behavior‑Based Personalization",
                    description: "Emails triggered by real user actions.",
                    list: [
                        "Browse and purchase behavior targeting",
                        "Engagement‑based messaging",
                        "Lifecycle‑stage personalization",
                        "Usage and activity‑driven emails"
                    ]
                },
                {
                    title: "Data‑Driven Segmentation",
                    description: "Personalization powered by meaningful data.",
                    list: [
                        "Customer attributes and preferences",
                        "Purchase and interaction history",
                        "Engagement scoring",
                        "Custom audience segments"
                    ]
                },
                {
                    title: "Personalization at Scale",
                    description: "Relevant emails—even with large lists.",
                    list: [
                        "Scalable personalization logic",
                        "Automation‑friendly personalization",
                        "Consistent brand messaging",
                        "Performance‑optimized delivery"
                    ]
                },
                {
                    title: "Who Is Personalization Best For?",
                    description: "Email personalization is ideal for:",
                    list: [
                        "E‑commerce and D2C brands",
                        "SaaS and subscription businesses",
                        "High‑volume email programs",
                        "Brands focused on retention and loyalty"
                    ]
                },
                {
                    title: "Why Solario Tech for Email Personalization?",
                    description: "Why clients trust our personalization expertise:",
                    list: [
                        "12+ Years of Email Marketing Experience",
                        "Data‑driven personalization strategies",
                        "Balanced relevance and scalability",
                        "Improved engagement and conversions",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Send Emails Your Customers Actually Want to Read",
                description: "Our email personalization services help you deliver relevant, engaging, and conversion‑focused emails—at scale.",
                buttons: [
                    { label: "Start Email Marketing" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "website-maintenance": [
        {
            id: "Security Updates",
            hero: {
                title: "Website Security Updates for Safe, Trusted & Protected Websites",
                description: "Solario Tech provides reliable Website Security Update services to protect your website from vulnerabilities, attacks, and data breaches.\nWith 12+ years of website maintenance experience, we keep your site secure, compliant, and resilient against evolving security threats.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Website Maintenance" }
                ]
            },
            content: [
                {
                    title: "What Are Website Security Updates?",
                    description: "Security updates involve applying patches and fixes to protect websites from known vulnerabilities and emerging threats.",
                    list: [
                        "Protection against hacking attempts",
                        "Vulnerability patching",
                        "Secure configurations",
                        "Ongoing risk reduction"
                    ]
                },
                {
                    title: "Why Security Updates Matter",
                    description: "Outdated websites are prime targets for cyberattacks.",
                    list: [
                        "Prevents malware and hacking",
                        "Protects user and business data",
                        "Maintains customer trust",
                        "Avoids downtime and penalties"
                    ]
                },
                {
                    title: "Core Website Security Maintenance",
                    description: "End‑to‑end protection for your website.",
                    list: [
                        "CMS core security updates",
                        "Theme and framework patching",
                        "Vulnerability scanning",
                        "Secure configuration hardening"
                    ]
                },
                {
                    title: "Threat Prevention & Monitoring",
                    description: "Stop threats before they cause damage.",
                    list: [
                        "Malware detection and removal",
                        "Firewall and security rule updates",
                        "Suspicious activity monitoring",
                        "Brute‑force attack prevention"
                    ]
                },
                {
                    title: "Compliance & Best Practices",
                    description: "Security aligned with modern standards.",
                    list: [
                        "Secure data handling practices",
                        "Privacy‑focused configurations",
                        "Security best‑practice implementation",
                        "Audit‑ready security posture"
                    ]
                },
                {
                    title: "Who Are Security Updates Best For?",
                    description: "Website security updates are ideal for:",
                    list: [
                        "Business and corporate websites",
                        "E‑commerce platforms",
                        "High‑traffic websites",
                        "Data‑sensitive websites"
                    ]
                },
                {
                    title: "Why Solario Tech for Website Security?",
                    description: "Why clients trust our website security services:",
                    list: [
                        "12+ Years of Website Maintenance Experience",
                        "Proactive security approach",
                        "Minimal downtime updates",
                        "Continuous threat awareness",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Keep Your Website Secure & Protected",
                description: "Our website security update services help you stay protected, compliant, and trusted—without disruption.",
                buttons: [
                    { label: "Start Website Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Content Updates",
            hero: {
                title: "Website Content Updates for Fresh, Accurate & Engaging Pages",
                description: "Solario Tech provides reliable Website Content Update services to keep your website information current, relevant, and aligned with your business goals.\nWith 12+ years of website maintenance experience, we ensure your content stays accurate, engaging, and SEO‑friendly—without disrupting your live site.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Website Maintenance" }
                ]
            },
            content: [
                {
                    title: "What Are Website Content Updates?",
                    description: "Content updates involve modifying, adding, or removing website content to reflect business changes, promotions, and new information.",
                    list: [
                        "Up‑to‑date business information",
                        "Accurate product and service details",
                        "Fresh and relevant content",
                        "Improved user trust"
                    ]
                },
                {
                    title: "Why Content Updates Matter",
                    description: "Outdated content damages credibility and user engagement.",
                    list: [
                        "Improves user experience",
                        "Builds trust and professionalism",
                        "Supports SEO and rankings",
                        "Keeps messaging aligned with business goals"
                    ]
                },
                {
                    title: "Text & Media Content Updates",
                    description: "Maintain clarity and accuracy across your website.",
                    list: [
                        "Page content edits and additions",
                        "Image and media updates",
                        "Banner and promotional content changes",
                        "CTA and messaging updates"
                    ]
                },
                {
                    title: "Product, Service & Pricing Updates",
                    description: "Ensure customers always see correct information.",
                    list: [
                        "Product and service descriptions",
                        "Pricing and offer updates",
                        "Feature and specification changes",
                        "Availability and status updates"
                    ]
                },
                {
                    title: "Blog & Resource Updates",
                    description: "Keep content sections relevant and active.",
                    list: [
                        "Blog post publishing and edits",
                        "Case study and portfolio updates",
                        "FAQ and knowledge base updates",
                        "Content formatting and cleanup"
                    ]
                },
                {
                    title: "SEO‑Friendly Content Management",
                    description: "Content optimized for users and search engines.",
                    list: [
                        "Heading and structure optimization",
                        "Meta title and description updates",
                        "Internal linking improvements",
                        "Content freshness signals"
                    ]
                },
                {
                    title: "Who Are Content Updates Best For?",
                    description: "Website content update services are ideal for:",
                    list: [
                        "Business and corporate websites",
                        "E‑commerce platforms",
                        "Service‑based companies",
                        "Content‑driven websites"
                    ]
                },
                {
                    title: "Why Solario Tech for Content Updates?",
                    description: "Why clients trust our content maintenance services:",
                    list: [
                        "12+ Years of Website Maintenance Experience",
                        "Fast and accurate content updates",
                        "SEO‑aware content handling",
                        "Zero disruption to live websites",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Keep Your Website Content Fresh & Relevant",
                description: "Our content update services help you maintain accuracy, relevance, and engagement across your entire website.",
                buttons: [
                    { label: "Start Website Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Performance Optimization",
            hero: {
                title: "Website Performance Optimization for Faster Load & Better Experience",
                description: "Solario Tech provides professional Website Performance Optimization services to ensure your site loads fast, runs smoothly, and delivers an excellent user experience.\nWith 12+ years of website maintenance expertise, we identify bottlenecks and optimize performance to improve engagement, SEO, and conversions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Website Maintenance" }
                ]
            },
            content: [
                {
                    title: "What is Website Performance Optimization?",
                    description: "Performance optimization focuses on improving website speed, responsiveness, and stability across devices and browsers.",
                    list: [
                        "Faster page load times",
                        "Improved user experience",
                        "Better SEO performance",
                        "Higher engagement and conversions"
                    ]
                },
                {
                    title: "Why Performance Optimization Matters",
                    description: "Slow websites lead to high bounce rates and lost opportunities.",
                    list: [
                        "Reduces page load delays",
                        "Improves Core Web Vitals",
                        "Enhances mobile performance",
                        "Supports higher traffic volumes"
                    ]
                },
                {
                    title: "Speed & Load Time Optimization",
                    description: "Make your website load quickly and efficiently.",
                    list: [
                        "Image and asset optimization",
                        "Minification of CSS, JS, and HTML",
                        "Lazy loading implementation",
                        "Browser caching configuration"
                    ]
                },
                {
                    title: "Backend & Database Optimization",
                    description: "Improve server‑side performance.",
                    list: [
                        "Database query optimization",
                        "Server response time improvements",
                        "Caching strategy setup",
                        "Hosting performance tuning"
                    ]
                },
                {
                    title: "Mobile & Cross‑Device Performance",
                    description: "Optimized experiences on all devices.",
                    list: [
                        "Mobile performance audits",
                        "Responsive behavior tuning",
                        "Touch and interaction optimization",
                        "Device‑specific performance fixes"
                    ]
                },
                {
                    title: "Monitoring & Continuous Improvement",
                    description: "Ongoing performance health checks.",
                    list: [
                        "Performance monitoring tools setup",
                        "Regular speed audits",
                        "Bottleneck identification",
                        "Continuous optimization recommendations"
                    ]
                },
                {
                    title: "Who Is Performance Optimization Best For?",
                    description: "Website performance optimization is ideal for:",
                    list: [
                        "Business and corporate websites",
                        "E‑commerce platforms",
                        "High‑traffic websites",
                        "SEO‑focused brands"
                    ]
                },
                {
                    title: "Why Solario Tech for Performance Optimization?",
                    description: "Why clients trust our performance expertise:",
                    list: [
                        "12+ Years of Website Optimization Experience",
                        "SEO‑ and UX‑focused approach",
                        "Measurable speed improvements",
                        "Minimal disruption to live sites",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Make Your Website Faster & More Reliable",
                description: "Our performance optimization services help your website load faster, rank better, and deliver a smoother user experience.",
                buttons: [
                    { label: "Start Website Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Backup Management",
            hero: {
                title: "Website Backup Management for Data Safety & Quick Recovery",
                description: "Solario Tech provides reliable Website Backup Management services to protect your website data against accidental loss, cyberattacks, and system failures.\nWith 12+ years of website maintenance experience, we ensure your site data is securely backed up and easily recoverable—so your business stays protected at all times.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Website Maintenance" }
                ]
            },
            content: [
                {
                    title: "What is Website Backup Management?",
                    description: "Backup management ensures regular, secure copies of your website data are created and stored for quick restoration when needed.",
                    list: [
                        "Protection against data loss",
                        "Fast recovery from failures",
                        "Secure data storage",
                        "Business continuity assurance"
                    ]
                },
                {
                    title: "Why Backup Management Matters",
                    description: "Without proper backups, data loss can cause downtime, revenue loss, and reputational damage.",
                    list: [
                        "Prevents permanent data loss",
                        "Minimizes downtime during issues",
                        "Protects against hacking and crashes",
                        "Ensures peace of mind"
                    ]
                },
                {
                    title: "Automated Backup Scheduling",
                    description: "Consistent backups without manual effort.",
                    list: [
                        "Daily, weekly, or custom backup schedules",
                        "Full and incremental backups",
                        "Database and file backups",
                        "Automated execution"
                    ]
                },
                {
                    title: "Secure Backup Storage",
                    description: "Your data stored safely and reliably.",
                    list: [
                        "Cloud‑based backup storage",
                        "Off‑site and redundant backups",
                        "Encrypted data storage",
                        "Access‑controlled repositories"
                    ]
                },
                {
                    title: "Quick Restore & Recovery",
                    description: "Fast recovery when issues occur.",
                    list: [
                        "One‑click or rapid restore options",
                        "Partial or full site restoration",
                        "Emergency recovery support",
                        "Minimal service interruption"
                    ]
                },
                {
                    title: "Backup Monitoring & Verification",
                    description: "Backups you can trust.",
                    list: [
                        "Regular backup integrity checks",
                        "Failure alerts and notifications",
                        "Restore testing",
                        "Backup health reporting"
                    ]
                },
                {
                    title: "Who Is Backup Management Best For?",
                    description: "Website backup services are ideal for:",
                    list: [
                        "Business and corporate websites",
                        "E‑commerce platforms",
                        "High‑traffic websites",
                        "Data‑critical applications"
                    ]
                },
                {
                    title: "Why Solario Tech for Backup Management?",
                    description: "Why clients trust our backup services:",
                    list: [
                        "12+ Years of Website Maintenance Experience",
                        "Automated and secure backup systems",
                        "Fast and reliable recovery process",
                        "Zero data‑loss focus",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Protect Your Website Data with Reliable Backups",
                description: "Our backup management services ensure your website data is always safe, recoverable, and protected against unexpected failures.",
                buttons: [
                    { label: "Start Website Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Uptime Monitoring",
            hero: {
                title: "Website Uptime Monitoring for Always‑On Availability",
                description: "Solario Tech provides continuous Website Uptime Monitoring services to ensure your website stays online, accessible, and reliable around the clock.\nWith 12+ years of website maintenance experience, we monitor your site proactively and respond fast—minimizing downtime and protecting your business reputation.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Website Maintenance" }
                ]
            },
            content: [
                {
                    title: "What is Website Uptime Monitoring?",
                    description: "Uptime monitoring tracks your website’s availability and performance to detect outages or issues in real time.",
                    list: [
                        "24/7 website availability checks",
                        "Immediate outage detection",
                        "Reduced downtime impact",
                        "Reliable user access"
                    ]
                },
                {
                    title: "Why Uptime Monitoring Matters",
                    description: "Even short downtime can lead to lost traffic, revenue, and trust.",
                    list: [
                        "Prevents prolonged outages",
                        "Protects SEO and user experience",
                        "Ensures business continuity",
                        "Maintains brand credibility"
                    ]
                },
                {
                    title: "Real‑Time Availability Monitoring",
                    description: "Constant checks from multiple locations.",
                    list: [
                        "Global uptime monitoring",
                        "HTTP/HTTPS availability checks",
                        "Response time tracking",
                        "Immediate outage detection"
                    ]
                },
                {
                    title: "Instant Alerts & Notifications",
                    description: "Know about issues the moment they occur.",
                    list: [
                        "Email and instant alerts",
                        "Downtime and recovery notifications",
                        "Severity‑based alerting",
                        "Rapid response enablement"
                    ]
                },
                {
                    title: "Downtime Analysis & Reporting",
                    description: "Understand when and why outages happen.",
                    list: [
                        "Uptime and downtime reports",
                        "Incident timelines",
                        "Root‑cause indicators",
                        "Performance trend insights"
                    ]
                },
                {
                    title: "Proactive Issue Prevention",
                    description: "Fix issues before users are impacted.",
                    list: [
                        "Early anomaly detection",
                        "Hosting and server issue alerts",
                        "Preventive maintenance signals",
                        "Stability improvement recommendations"
                    ]
                },
                {
                    title: "Who Is Uptime Monitoring Best For?",
                    description: "Uptime monitoring is ideal for:",
                    list: [
                        "Business‑critical websites",
                        "E‑commerce platforms",
                        "High‑traffic websites",
                        "Brands requiring 24/7 availability"
                    ]
                },
                {
                    title: "Why Solario Tech for Uptime Monitoring?",
                    description: "Why clients trust our monitoring services:",
                    list: [
                        "12+ Years of Website Maintenance Experience",
                        "24/7 proactive monitoring approach",
                        "Fast response to downtime incidents",
                        "Clear uptime reporting",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Keep Your Website Online—All the Time",
                description: "Our uptime monitoring services help you detect issues instantly, reduce downtime, and ensure your website is always available to users.",
                buttons: [
                    { label: "Start Website Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Bug Fixes",
            hero: {
                title: "Website Bug Fixes for Smooth, Error‑Free User Experience",
                description: "Solario Tech provides fast and reliable Website Bug Fix services to identify and resolve issues that affect functionality, usability, and performance.\nWith 12+ years of website maintenance experience, we fix bugs quickly and safely—ensuring your site works exactly as intended.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Website Maintenance" }
                ]
            },
            content: [
                {
                    title: "What Are Website Bug Fixes?",
                    description: "Bug fixes involve identifying and resolving errors, broken features, or unexpected behavior on your website.",
                    list: [
                        "Functional issue resolution",
                        "UI and layout bug fixes",
                        "Cross‑browser compatibility fixes",
                        "Stable and predictable behavior"
                    ]
                },
                {
                    title: "Why Bug Fixes Matter",
                    description: "Even small bugs can frustrate users and damage credibility.",
                    list: [
                        "Improves user experience",
                        "Prevents functionality breakdowns",
                        "Reduces bounce and abandonment",
                        "Maintains brand professionalism"
                    ]
                },
                {
                    title: "Frontend Bug Fixes",
                    description: "Fix issues users see and interact with.",
                    list: [
                        "Layout and styling issues",
                        "Broken buttons and links",
                        "Form and validation errors",
                        "Responsive and mobile display issues"
                    ]
                },
                {
                    title: "Backend & Functional Bug Fixes",
                    description: "Resolve issues behind the scenes.",
                    list: [
                        "Server‑side errors",
                        "Form submission and data issues",
                        "Integration and API problems",
                        "CMS and database errors"
                    ]
                },
                {
                    title: "Cross‑Browser & Device Fixes",
                    description: "Consistent experience everywhere.",
                    list: [
                        "Chrome, Firefox, Safari, Edge fixes",
                        "Mobile and tablet compatibility",
                        "OS‑specific issue resolution",
                        "Device‑based testing"
                    ]
                },
                {
                    title: "Testing & Validation",
                    description: "Ensure fixes don’t introduce new issues.",
                    list: [
                        "Regression testing",
                        "Functional validation",
                        "Live‑site verification",
                        "Stability confirmation"
                    ]
                },
                {
                    title: "Who Are Bug Fixes Best For?",
                    description: "Website bug fix services are ideal for:",
                    list: [
                        "Business and corporate websites",
                        "E‑commerce platforms",
                        "High‑traffic websites",
                        "Websites with frequent updates"
                    ]
                },
                {
                    title: "Why Solario Tech for Bug Fixes?",
                    description: "Why clients trust our bug‑fixing expertise:",
                    list: [
                        "12+ Years of Website Maintenance Experience",
                        "Fast issue diagnosis and resolution",
                        "Minimal disruption to live sites",
                        "Clean and reliable fixes",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Fix Website Issues Before Users Notice",
                description: "Our website bug fix services help you maintain a smooth, reliable, and frustration‑free experience for every visitor.",
                buttons: [
                    { label: "Start Website Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Plugin Updates",
            hero: {
                title: "Regular Plugin Updates for Secure & Stable Website Performance",
                description: "Solario Tech provides dependable Plugin Update services to keep your website extensions, modules, and add‑ons secure, compatible, and running smoothly.\nWith 12+ years of website maintenance experience, we manage plugin updates carefully to prevent conflicts, vulnerabilities, and performance issues.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Website Maintenance" }
                ]
            },
            content: [
                {
                    title: "What Are Plugin Updates?",
                    description: "Plugin updates involve upgrading third‑party extensions and add‑ons used on your website to their latest stable versions.",
                    list: [
                        "Security vulnerability fixes",
                        "Improved compatibility",
                        "Access to new features",
                        "Long‑term site stability"
                    ]
                },
                {
                    title: "Why Plugin Updates Matter",
                    description: "Outdated plugins are one of the most common causes of website hacks and crashes.",
                    list: [
                        "Prevents security breaches",
                        "Avoids site crashes and conflicts",
                        "Ensures compatibility with CMS updates",
                        "Maintains optimal website performance"
                    ]
                },
                {
                    title: "Safe & Tested Update Process",
                    description: "Updates applied without breaking your website.",
                    list: [
                        "Pre‑update compatibility checks",
                        "Staging or backup‑first updates",
                        "Conflict and dependency validation",
                        "Rollback‑ready update process"
                    ]
                },
                {
                    title: "Security‑Focused Plugin Management",
                    description: "Protect your site from plugin‑level risks.",
                    list: [
                        "Vulnerability monitoring",
                        "Removal of abandoned or risky plugins",
                        "Security patch application",
                        "Access control and permission checks"
                    ]
                },
                {
                    title: "Performance & Compatibility Improvements",
                    description: "Keep plugins running efficiently.",
                    list: [
                        "Performance‑related plugin updates",
                        "CMS and theme compatibility alignment",
                        "Reduced load and execution issues",
                        "Optimized plugin configurations"
                    ]
                },
                {
                    title: "Plugin Audit & Optimization",
                    description: "Only the plugins you actually need.",
                    list: [
                        "Plugin usage audits",
                        "Redundant plugin removal",
                        "Lightweight alternatives recommendation",
                        "Improved site efficiency"
                    ]
                },
                {
                    title: "Who Are Plugin Updates Best For?",
                    description: "Plugin update services are ideal for:",
                    list: [
                        "WordPress and CMS‑based websites",
                        "E‑commerce platforms",
                        "Business and corporate sites",
                        "Websites using multiple extensions"
                    ]
                },
                {
                    title: "Why Solario Tech for Plugin Updates?",
                    description: "Why clients trust our plugin maintenance expertise:",
                    list: [
                        "12+ Years of Website Maintenance Experience",
                        "Security‑first update approach",
                        "Conflict‑free update process",
                        "Minimal downtime and disruption",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Keep Your Website Plugins Updated & Secure",
                description: "Our plugin update services help you avoid security risks, maintain compatibility, and keep your website running smoothly.",
                buttons: [
                    { label: "Start Website Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "SSL Management",
            hero: {
                title: "SSL Management for Secure, Encrypted & Trust‑Ready Websites",
                description: "Solario Tech provides complete SSL Management services to secure your website, protect user data, and build trust with visitors and search engines.\nWith 12+ years of website maintenance experience, we handle SSL setup, renewal, monitoring, and configuration—so your site stays secure without interruptions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Website Maintenance" }
                ]
            },
            content: [
                {
                    title: "What is SSL Management?",
                    description: "SSL management ensures your website uses valid security certificates to encrypt data between users and your server.",
                    list: [
                        "Encrypted data transmission",
                        "Secure user interactions",
                        "HTTPS enforcement",
                        "Trust and credibility signals"
                    ]
                },
                {
                    title: "Why SSL Management Matters",
                    description: "Expired or misconfigured SSL certificates can break trust and accessibility.",
                    list: [
                        "Prevents security warnings in browsers",
                        "Protects sensitive user data",
                        "Improves SEO and rankings",
                        "Builds visitor trust and confidence"
                    ]
                },
                {
                    title: "SSL Installation & Configuration",
                    description: "Correct setup for strong encryption.",
                    list: [
                        "SSL certificate installation",
                        "HTTPS redirection setup",
                        "Mixed‑content issue resolution",
                        "Secure protocol configuration"
                    ]
                },
                {
                    title: "SSL Renewal & Expiry Management",
                    description: "Never worry about expired certificates.",
                    list: [
                        "Automated or scheduled renewals",
                        "Expiry monitoring and alerts",
                        "Zero‑downtime renewals",
                        "Certificate lifecycle management"
                    ]
                },
                {
                    title: "Advanced Security & Compliance",
                    description: "SSL aligned with modern security standards.",
                    list: [
                        "TLS version management",
                        "Strong cipher configuration",
                        "Security header setup",
                        "Compliance‑ready encryption practices"
                    ]
                },
                {
                    title: "Monitoring & Validation",
                    description: "Continuous SSL health checks.",
                    list: [
                        "Certificate validity monitoring",
                        "Trust chain validation",
                        "Browser compatibility checks",
                        "Ongoing security assurance"
                    ]
                },
                {
                    title: "Who Is SSL Management Best For?",
                    description: "SSL management services are ideal for:",
                    list: [
                        "Business and corporate websites",
                        "E‑commerce platforms",
                        "Websites handling user data",
                        "SEO‑focused brands"
                    ]
                },
                {
                    title: "Why Solario Tech for SSL Management?",
                    description: "Why clients trust our SSL expertise:",
                    list: [
                        "12+ Years of Website Maintenance Experience",
                        "Zero‑downtime SSL handling",
                        "Security‑first configuration",
                        "Proactive renewal and monitoring",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Secure Your Website with Proper SSL Management",
                description: "Our SSL management services ensure your website stays encrypted, trusted, and fully accessible—without security warnings or downtime.",
                buttons: [
                    { label: "Start Website Maintenance" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "it-strategy-and-consulting": [
        {
            id: "Technology Assessment",
            hero: {
                title: "Technology Assessment for Smarter IT Decisions",
                description: "Solario Tech provides in‑depth Technology Assessment services to help businesses evaluate their current IT landscape, identify gaps, and plan smarter technology investments.\nWith 12+ years of IT consulting experience, we deliver clear, actionable insights that align technology with your business goals.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IT Consulting" }
                ]
            },
            content: [
                {
                    title: "What is Technology Assessment?",
                    description: "Technology assessment is a structured evaluation of your existing systems, tools, infrastructure, and processes.",
                    list: [
                        "Clear understanding of current IT state",
                        "Identification of gaps and inefficiencies",
                        "Technology alignment with business goals",
                        "Data‑driven decision support"
                    ]
                },
                {
                    title: "Why Technology Assessment Matters",
                    description: "Without a clear assessment, technology decisions are often reactive and costly.",
                    list: [
                        "Reduces unnecessary IT spending",
                        "Improves system performance and reliability",
                        "Supports future‑ready planning",
                        "Minimizes operational risk"
                    ]
                },
                {
                    title: "Infrastructure & Systems Review",
                    description: "Evaluate the health of your core IT foundation.",
                    list: [
                        "Servers, cloud, and hosting review",
                        "Network and infrastructure assessment",
                        "System performance and scalability analysis",
                        "Reliability and availability checks"
                    ]
                },
                {
                    title: "Application & Software Evaluation",
                    description: "Understand how well your applications support business needs.",
                    list: [
                        "Application usage and performance review",
                        "Legacy system evaluation",
                        "Integration and dependency analysis",
                        "Maintainability and upgrade readiness"
                    ]
                },
                {
                    title: "Security & Compliance Assessment",
                    description: "Identify risks and protection gaps.",
                    list: [
                        "Security posture evaluation",
                        "Vulnerability and risk identification",
                        "Access control and data protection review",
                        "Compliance readiness insights"
                    ]
                },
                {
                    title: "Process & Workflow Analysis",
                    description: "Assess how technology supports daily operations.",
                    list: [
                        "IT process efficiency review",
                        "Automation opportunities",
                        "Bottleneck and redundancy identification",
                        "Operational improvement recommendations"
                    ]
                },
                {
                    title: "Assessment Reports & Recommendations",
                    description: "Clear outcomes you can act on.",
                    list: [
                        "Current‑state assessment report",
                        "Gap and risk analysis",
                        "Technology improvement roadmap",
                        "Prioritized recommendations"
                    ]
                },
                {
                    title: "Who Is Technology Assessment Best For?",
                    description: "Technology assessment services are ideal for:",
                    list: [
                        "Growing businesses",
                        "Companies planning digital transformation",
                        "Organizations modernizing legacy systems",
                        "Leadership teams making IT investment decisions"
                    ]
                },
                {
                    title: "Why Solario Tech for Technology Assessment?",
                    description: "Why clients trust our IT assessment expertise:",
                    list: [
                        "12+ Years of IT Consulting Experience",
                        "Business‑aligned technology insights",
                        "Vendor‑neutral recommendations",
                        "Clear, actionable assessment reports",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Gain Clarity on Your IT Landscape",
                description: "Our technology assessment services help you understand where you are today and plan confidently for where you need to go next.",
                buttons: [
                    { label: "Start IT Consulting" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Digital Transformation",
            hero: {
                title: "Digital Transformation for Agile, Scalable & Future‑Ready Businesses",
                description: "Solario Tech delivers end‑to‑end Digital Transformation consulting to help organizations modernize operations, adopt the right technologies, and stay competitive in a rapidly evolving digital landscape.\nWith 12+ years of IT strategy and consulting experience, we guide businesses through practical, outcome‑driven transformation journeys.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IT Consulting" }
                ]
            },
            content: [
                {
                    title: "What is Digital Transformation?",
                    description: "Digital transformation is the strategic adoption of digital technologies to improve processes, customer experiences, and business models.",
                    list: [
                        "Modernized business operations",
                        "Technology‑enabled efficiency",
                        "Improved customer experiences",
                        "Data‑driven decision making"
                    ]
                },
                {
                    title: "Why Digital Transformation Matters",
                    description: "Organizations that delay transformation risk falling behind competitors.",
                    list: [
                        "Improves operational agility",
                        "Enhances scalability and flexibility",
                        "Reduces long‑term operational costs",
                        "Supports innovation and growth"
                    ]
                },
                {
                    title: "Business Process Digitization",
                    description: "Transform manual processes into efficient digital workflows.",
                    list: [
                        "Process automation opportunities",
                        "Workflow optimization",
                        "Reduction of manual errors",
                        "Improved operational visibility"
                    ]
                },
                {
                    title: "Technology Modernization",
                    description: "Adopt modern platforms and tools that scale.",
                    list: [
                        "Cloud adoption and migration",
                        "Legacy system modernization",
                        "Platform and tool consolidation",
                        "Integration of modern tech stacks"
                    ]
                },
                {
                    title: "Customer Experience Transformation",
                    description: "Deliver seamless digital experiences.",
                    list: [
                        "Omnichannel customer journeys",
                        "Digital touchpoint optimization",
                        "Personalized user experiences",
                        "Improved engagement and retention"
                    ]
                },
                {
                    title: "Data & Analytics Enablement",
                    description: "Use data as a strategic asset.",
                    list: [
                        "Data centralization and visibility",
                        "Analytics and reporting frameworks",
                        "Insight‑driven decision support",
                        "Performance measurement systems"
                    ]
                },
                {
                    title: "Transformation Roadmap & Execution",
                    description: "A clear path from strategy to implementation.",
                    list: [
                        "Phased transformation roadmap",
                        "Quick wins and long‑term initiatives",
                        "Risk‑managed execution planning",
                        "Continuous improvement approach"
                    ]
                },
                {
                    title: "Who Is Digital Transformation Best For?",
                    description: "Digital transformation services are ideal for:",
                    list: [
                        "Growing and scaling businesses",
                        "Organizations modernizing legacy operations",
                        "Companies improving customer experience",
                        "Leadership teams driving innovation"
                    ]
                },
                {
                    title: "Why Solario Tech for Digital Transformation?",
                    description: "Why clients trust our transformation expertise:",
                    list: [
                        "12+ Years of IT Strategy & Consulting Experience",
                        "Business‑first transformation approach",
                        "Practical, execution‑ready roadmaps",
                        "Technology‑agnostic recommendations",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Transform Your Business with Confidence",
                description: "Our digital transformation services help you modernize operations, adopt the right technologies, and build a future‑ready organization.",
                buttons: [
                    { label: "Start IT Consulting" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Architecture Design",
            hero: {
                title: "Architecture Design for Scalable, Secure & Future‑Ready Systems",
                description: "Solario Tech provides expert Architecture Design services to help businesses build robust, scalable, and maintainable IT systems.\nWith 12+ years of IT strategy and solution architecture experience, we design technology architectures that align with business goals, performance needs, and long‑term growth plans.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IT Consulting" }
                ]
            },
            content: [
                {
                    title: "What is Architecture Design?",
                    description: "Architecture design defines the structure of your IT systems, applications, and integrations to ensure stability, scalability, and efficiency.",
                    list: [
                        "Clear system structure and components",
                        "Scalable and future‑ready design",
                        "Reliable performance and availability",
                        "Aligned technology decisions"
                    ]
                },
                {
                    title: "Why Architecture Design Matters",
                    description: "Poor architecture leads to performance issues, high costs, and limited scalability.",
                    list: [
                        "Prevents system bottlenecks",
                        "Supports long‑term scalability",
                        "Reduces maintenance complexity",
                        "Improves security and reliability"
                    ]
                },
                {
                    title: "System & Application Architecture",
                    description: "Design systems that scale with your business.",
                    list: [
                        "Monolithic vs microservices architecture",
                        "Application layering and modular design",
                        "Scalability and load handling strategies",
                        "High‑availability architecture planning"
                    ]
                },
                {
                    title: "Cloud & Infrastructure Architecture",
                    description: "Modern infrastructure designed for flexibility.",
                    list: [
                        "Cloud‑native and hybrid architectures",
                        "Infrastructure‑as‑code planning",
                        "Hosting and deployment strategies",
                        "Cost‑efficient infrastructure design"
                    ]
                },
                {
                    title: "Integration & Data Architecture",
                    description: "Seamless data flow across systems.",
                    list: [
                        "API and integration architecture",
                        "Data flow and synchronization design",
                        "Database and storage architecture",
                        "Third‑party system integration planning"
                    ]
                },
                {
                    title: "Security & Reliability by Design",
                    description: "Architecture built with protection in mind.",
                    list: [
                        "Secure access and identity design",
                        "Data protection and encryption strategies",
                        "Fault tolerance and redundancy planning",
                        "Disaster recovery considerations"
                    ]
                },
                {
                    title: "Architecture Documentation & Roadmap",
                    description: "Clear guidance for implementation and growth.",
                    list: [
                        "Architecture diagrams and documentation",
                        "Technology stack recommendations",
                        "Implementation guidelines",
                        "Future scalability roadmap"
                    ]
                },
                {
                    title: "Who Is Architecture Design Best For?",
                    description: "Architecture design services are ideal for:",
                    list: [
                        "Businesses building new platforms",
                        "Organizations scaling existing systems",
                        "Companies modernizing legacy applications",
                        "Teams planning long‑term growth"
                    ]
                },
                {
                    title: "Why Solario Tech for Architecture Design?",
                    description: "Why clients trust our architecture expertise:",
                    list: [
                        "12+ Years of IT Architecture Experience",
                        "Business‑aligned system design",
                        "Scalable and secure architectures",
                        "Clear, implementation‑ready documentation",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Design an Architecture That Scales with Your Business",
                description: "Our architecture design services help you build systems that are secure, scalable, and ready for future growth.",
                buttons: [
                    { label: "Start IT Consulting" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Vendor Selection",
            hero: {
                title: "Vendor Selection for the Right Technology Partners",
                description: "Solario Tech provides expert Vendor Selection consulting to help businesses choose the right technology partners, tools, and service providers.\nWith 12+ years of IT consulting experience, we ensure vendor decisions are objective, cost‑effective, and aligned with your technical, operational, and business requirements.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IT Consulting" }
                ]
            },
            content: [
                {
                    title: "What is Vendor Selection?",
                    description: "Vendor selection is the structured evaluation and comparison of technology vendors to identify the best fit for your needs.",
                    list: [
                        "Objective vendor comparison",
                        "Requirement‑aligned selection",
                        "Reduced vendor risk",
                        "Long‑term value optimization"
                    ]
                },
                {
                    title: "Why Vendor Selection Matters",
                    description: "Choosing the wrong vendor can lead to high costs, delays, and poor system performance.",
                    list: [
                        "Avoids costly vendor lock‑in",
                        "Ensures technology fit and scalability",
                        "Reduces implementation and support risks",
                        "Improves long‑term ROI"
                    ]
                },
                {
                    title: "Requirement Definition & Alignment",
                    description: "Start with clear technical and business needs.",
                    list: [
                        "Business and technical requirement gathering",
                        "Functional and non‑functional criteria",
                        "Scalability and integration needs",
                        "Support and SLA expectations"
                    ]
                },
                {
                    title: "Vendor Evaluation & Comparison",
                    description: "Structured and unbiased vendor assessment.",
                    list: [
                        "Feature and capability comparison",
                        "Technology stack and roadmap review",
                        "Security and compliance evaluation",
                        "Performance and reliability analysis"
                    ]
                },
                {
                    title: "Cost & Contract Analysis",
                    description: "Understand the true cost of ownership.",
                    list: [
                        "Licensing and pricing model analysis",
                        "Hidden and long‑term cost evaluation",
                        "Contract terms and flexibility review",
                        "Exit and migration considerations"
                    ]
                },
                {
                    title: "Proof of Concept & Validation",
                    description: "Validate vendors before final commitment.",
                    list: [
                        "Proof of concept planning",
                        "Pilot implementation review",
                        "Technical fit validation",
                        "Risk reduction through testing"
                    ]
                },
                {
                    title: "Final Recommendation & Negotiation Support",
                    description: "Confident decision‑making support.",
                    list: [
                        "Shortlist and final vendor recommendation",
                        "Negotiation strategy support",
                        "Vendor onboarding guidance",
                        "Implementation readiness review"
                    ]
                },
                {
                    title: "Who Is Vendor Selection Best For?",
                    description: "Vendor selection services are ideal for:",
                    list: [
                        "Businesses adopting new platforms",
                        "Organizations evaluating SaaS or cloud vendors",
                        "Companies replacing legacy vendors",
                        "Leadership teams making strategic IT decisions"
                    ]
                },
                {
                    title: "Why Solario Tech for Vendor Selection?",
                    description: "Why clients trust our vendor advisory expertise:",
                    list: [
                        "12+ Years of IT Consulting Experience",
                        "Vendor‑neutral and unbiased advice",
                        "Business‑aligned evaluation approach",
                        "Risk‑aware and cost‑focused selection",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Choose the Right Technology Vendors with Confidence",
                description: "Our vendor selection services help you avoid costly mistakes and partner with vendors that truly support your business goals.",
                buttons: [
                    { label: "Start IT Consulting" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Project Planning",
            hero: {
                title: "IT Project Planning for Predictable Delivery & Successful Outcomes",
                description: "Solario Tech provides structured IT Project Planning services to help organizations define scope, timelines, resources, and execution strategies with clarity.\nWith 12+ years of IT consulting and delivery experience, we ensure projects are well‑planned, risk‑aware, and aligned with business objectives from day one.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IT Consulting" }
                ]
            },
            content: [
                {
                    title: "What is IT Project Planning?",
                    description: "Project planning defines how an IT initiative will be executed—from objectives and scope to timelines and responsibilities.",
                    list: [
                        "Clear project scope and objectives",
                        "Defined timelines and milestones",
                        "Resource and responsibility clarity",
                        "Reduced execution risk"
                    ]
                },
                {
                    title: "Why Project Planning Matters",
                    description: "Poor planning is one of the biggest causes of IT project failure.",
                    list: [
                        "Prevents scope creep",
                        "Improves delivery predictability",
                        "Aligns teams and stakeholders",
                        "Controls cost and timelines"
                    ]
                },
                {
                    title: "Scope Definition & Requirements Planning",
                    description: "Set clear boundaries and expectations.",
                    list: [
                        "Business and technical requirement definition",
                        "In‑scope vs out‑of‑scope clarity",
                        "Assumptions and constraints documentation",
                        "Success criteria definition"
                    ]
                },
                {
                    title: "Timeline & Milestone Planning",
                    description: "A realistic roadmap for execution.",
                    list: [
                        "Phase‑wise project timelines",
                        "Milestone and dependency mapping",
                        "Delivery checkpoints",
                        "Go‑live and rollout planning"
                    ]
                },
                {
                    title: "Resource & Team Planning",
                    description: "Right people, right roles, right time.",
                    list: [
                        "Skill and capacity assessment",
                        "Internal vs external resource planning",
                        "Role and responsibility mapping",
                        "Stakeholder involvement planning"
                    ]
                },
                {
                    title: "Delivery Methodology Selection",
                    description: "Choose the right execution approach.",
                    list: [
                        "Agile, Waterfall, or Hybrid planning",
                        "Sprint and iteration planning",
                        "Communication and reporting cadence",
                        "Change and dependency handling"
                    ]
                },
                {
                    title: "Risk & Dependency Identification",
                    description: "Plan for what could go wrong.",
                    list: [
                        "Technical and operational risk identification",
                        "Dependency and integration risks",
                        "Mitigation and contingency planning",
                        "Escalation paths"
                    ]
                },
                {
                    title: "Project Documentation & Governance",
                    description: "Clarity and control throughout execution.",
                    list: [
                        "Project plans and charters",
                        "Communication and reporting plans",
                        "Decision‑making frameworks",
                        "Governance and review checkpoints"
                    ]
                },
                {
                    title: "Who Is Project Planning Best For?",
                    description: "IT project planning services are ideal for:",
                    list: [
                        "Digital transformation initiatives",
                        "New platform or system implementations",
                        "Complex or multi‑stakeholder projects",
                        "Organizations seeking delivery predictability"
                    ]
                },
                {
                    title: "Why Solario Tech for Project Planning?",
                    description: "Why clients trust our planning expertise:",
                    list: [
                        "12+ Years of IT Consulting & Delivery Experience",
                        "Practical, execution‑ready plans",
                        "Business‑aligned project structuring",
                        "Risk‑aware planning approach",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Plan IT Projects with Clarity & Confidence",
                description: "Our IT project planning services help you reduce uncertainty, control risk, and deliver technology initiatives successfully.",
                buttons: [
                    { label: "Start IT Consulting" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Risk Assessment",
            hero: {
                title: "IT Risk Assessment for Safer, Smarter Technology Decisions",
                description: "Solario Tech provides comprehensive IT Risk Assessment services to help organizations identify, evaluate, and mitigate technical, operational, and security risks.\nWith 12+ years of IT consulting experience, we help you anticipate problems early and make informed decisions that protect business continuity.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IT Consulting" }
                ]
            },
            content: [
                {
                    title: "What is IT Risk Assessment?",
                    description: "IT risk assessment evaluates potential threats and vulnerabilities that could impact systems, data, projects, or operations.",
                    list: [
                        "Early identification of IT risks",
                        "Clear understanding of impact and likelihood",
                        "Improved decision‑making",
                        "Reduced operational surprises"
                    ]
                },
                {
                    title: "Why Risk Assessment Matters",
                    description: "Unidentified risks can lead to downtime, cost overruns, and security incidents.",
                    list: [
                        "Prevents costly disruptions",
                        "Protects business‑critical systems",
                        "Improves project success rates",
                        "Supports regulatory and security readiness"
                    ]
                },
                {
                    title: "Technical Risk Identification",
                    description: "Evaluate risks within systems and infrastructure.",
                    list: [
                        "System reliability and scalability risks",
                        "Legacy technology limitations",
                        "Integration and dependency risks",
                        "Performance and availability concerns"
                    ]
                },
                {
                    title: "Security & Data Risk Assessment",
                    description: "Identify threats to data and system security.",
                    list: [
                        "Vulnerability and exposure analysis",
                        "Access control and identity risks",
                        "Data protection and privacy gaps",
                        "Compliance‑related security risks"
                    ]
                },
                {
                    title: "Project & Delivery Risks",
                    description: "Reduce risk in technology initiatives.",
                    list: [
                        "Scope and requirement risks",
                        "Timeline and dependency issues",
                        "Resource and skill gaps",
                        "Third‑party and vendor risks"
                    ]
                },
                {
                    title: "Operational & Business Impact Analysis",
                    description: "Understand how risks affect the business.",
                    list: [
                        "Downtime and continuity impact",
                        "Financial and reputational risks",
                        "Customer experience impact",
                        "Operational disruption scenarios"
                    ]
                },
                {
                    title: "Risk Prioritization & Mitigation Planning",
                    description: "Focus on what matters most.",
                    list: [
                        "Risk scoring and prioritization",
                        "Mitigation and control recommendations",
                        "Contingency and fallback planning",
                        "Risk reduction roadmap"
                    ]
                },
                {
                    title: "Who Is Risk Assessment Best For?",
                    description: "IT risk assessment services are ideal for:",
                    list: [
                        "Organizations planning major IT changes",
                        "Digital transformation initiatives",
                        "Security‑conscious businesses",
                        "Leadership teams managing technology risk"
                    ]
                },
                {
                    title: "Why Solario Tech for Risk Assessment?",
                    description: "Why clients trust our risk advisory expertise:",
                    list: [
                        "12+ Years of IT Consulting Experience",
                        "Practical, business‑focused risk analysis",
                        "Clear and actionable mitigation plans",
                        "Balanced technical and business view",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Identify & Reduce IT Risks Before They Become Problems",
                description: "Our IT risk assessment services help you anticipate threats, reduce uncertainty, and make safer technology decisions.",
                buttons: [
                    { label: "Start IT Consulting" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Budget Planning",
            hero: {
                title: "IT Budget Planning for Cost Control & Maximum Technology ROI",
                description: "Solario Tech provides strategic IT Budget Planning services to help organizations plan, allocate, and optimize technology spending without compromising performance or growth.\nWith 12+ years of IT consulting experience, we align budgets with business priorities—ensuring transparency, predictability, and long‑term value from every IT investment.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IT Consulting" }
                ]
            },
            content: [
                {
                    title: "What is IT Budget Planning?",
                    description: "IT budget planning defines how technology investments are allocated, monitored, and optimized to support business objectives.",
                    list: [
                        "Clear visibility into IT spending",
                        "Aligned technology investments",
                        "Controlled and predictable costs",
                        "Improved return on investment"
                    ]
                },
                {
                    title: "Why Budget Planning Matters",
                    description: "Unplanned or reactive IT spending leads to waste, overruns, and missed opportunities.",
                    list: [
                        "Prevents budget overruns",
                        "Eliminates unnecessary IT costs",
                        "Supports smarter investment decisions",
                        "Aligns spending with business growth"
                    ]
                },
                {
                    title: "Current IT Cost Assessment",
                    description: "Understand where your IT budget is going.",
                    list: [
                        "Infrastructure and cloud cost review",
                        "Software licensing and subscription analysis",
                        "Vendor and support cost evaluation",
                        "Hidden and recurring cost identification"
                    ]
                },
                {
                    title: "Budget Forecasting & Allocation",
                    description: "Plan future IT spend with confidence.",
                    list: [
                        "Annual and multi‑year IT budget forecasting",
                        "CapEx vs OpEx planning",
                        "Project‑wise and department‑wise allocation",
                        "Scalability and growth cost planning"
                    ]
                },
                {
                    title: "Cost Optimization Strategies",
                    description: "Reduce waste without sacrificing performance.",
                    list: [
                        "Tool and vendor consolidation",
                        "License optimization",
                        "Cloud and infrastructure cost optimization",
                        "Operational efficiency improvements"
                    ]
                },
                {
                    title: "Investment Prioritization",
                    description: "Spend where it delivers the most value.",
                    list: [
                        "Business‑impact‑based prioritization",
                        "Risk vs reward evaluation",
                        "Quick wins vs long‑term investments",
                        "Technology roadmap alignment"
                    ]
                },
                {
                    title: "Budget Governance & Tracking",
                    description: "Maintain control throughout the year.",
                    list: [
                        "Spending monitoring frameworks",
                        "Variance tracking and reporting",
                        "Budget review checkpoints",
                        "Decision‑making guidelines"
                    ]
                },
                {
                    title: "Who Is Budget Planning Best For?",
                    description: "IT budget planning services are ideal for:",
                    list: [
                        "Growing businesses",
                        "Organizations planning digital transformation",
                        "Companies controlling IT costs",
                        "Leadership teams managing technology spend"
                    ]
                },
                {
                    title: "Why Solario Tech for Budget Planning?",
                    description: "Why clients trust our budget advisory services:",
                    list: [
                        "12+ Years of IT Consulting Experience",
                        "Business‑first budgeting approach",
                        "Cost‑optimization without compromise",
                        "Clear and practical budget frameworks",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Plan IT Budgets with Clarity & Confidence",
                description: "Our IT budget planning services help you control costs, invest wisely, and maximize the value of your technology spend.",
                buttons: [
                    { label: "Start IT Consulting" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Change Management",
            hero: {
                title: "Change Management for Smooth IT Adoption & Lasting Impact",
                description: "Solario Tech provides structured Change Management services to help organizations successfully adopt new technologies, processes, and systems with minimal disruption.\nWith 12+ years of IT consulting experience, we focus on people, processes, and communication—ensuring technology changes are embraced, not resisted.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IT Consulting" }
                ]
            },
            content: [
                {
                    title: "What is IT Change Management?",
                    description: "Change management ensures that people, teams, and stakeholders adapt effectively to new technologies and ways of working.",
                    list: [
                        "Smooth adoption of new systems",
                        "Reduced resistance to change",
                        "Improved user acceptance",
                        "Sustained transformation outcomes"
                    ]
                },
                {
                    title: "Why Change Management Matters",
                    description: "Even the best technology fails if users don’t adopt it properly.",
                    list: [
                        "Increases success rate of IT initiatives",
                        "Minimizes productivity disruption",
                        "Builds stakeholder confidence",
                        "Ensures long‑term value realization"
                    ]
                },
                {
                    title: "Change Impact Assessment",
                    description: "Understand how change affects people and processes.",
                    list: [
                        "Stakeholder and role impact analysis",
                        "Process and workflow impact mapping",
                        "Risk and resistance identification",
                        "Readiness assessment"
                    ]
                },
                {
                    title: "Communication & Engagement Planning",
                    description: "Clear, timely communication at every stage.",
                    list: [
                        "Change communication strategy",
                        "Leadership and stakeholder alignment",
                        "Transparent messaging and updates",
                        "Feedback and listening mechanisms"
                    ]
                },
                {
                    title: "Training & Enablement",
                    description: "Equip teams to work confidently with new systems.",
                    list: [
                        "Role‑based training programs",
                        "User guides and documentation",
                        "Hands‑on workshops and sessions",
                        "Post‑go‑live support planning"
                    ]
                },
                {
                    title: "Adoption & Resistance Management",
                    description: "Ensure change is accepted and sustained.",
                    list: [
                        "User adoption tracking",
                        "Resistance mitigation strategies",
                        "Change champions and advocates",
                        "Continuous improvement feedback loops"
                    ]
                },
                {
                    title: "Post‑Implementation Support",
                    description: "Stability and confidence after go‑live.",
                    list: [
                        "Early‑stage adoption monitoring",
                        "Issue and concern resolution",
                        "Process refinement",
                        "Long‑term adoption measurement"
                    ]
                },
                {
                    title: "Who Is Change Management Best For?",
                    description: "Change management services are ideal for:",
                    list: [
                        "Digital transformation programs",
                        "New system or platform rollouts",
                        "Process automation initiatives",
                        "Organizations undergoing rapid change"
                    ]
                },
                {
                    title: "Why Solario Tech for Change Management?",
                    description: "Why clients trust our change management approach:",
                    list: [
                        "12+ Years of IT Consulting Experience",
                        "People‑first change strategy",
                        "Practical and structured frameworks",
                        "Reduced disruption and faster adoption",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Make Technology Change Stick",
                description: "Our change management services help your teams adopt new technologies confidently and ensure your IT initiatives deliver lasting business value.",
                buttons: [
                    { label: "Start IT Consulting" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "internet-of-things": [
        {
            id: "Sensor Integration",
            hero: {
                title: "IoT Sensor Integration for Accurate Data & Smart Connectivity",
                description: "Solario Tech provides end‑to‑end IoT Sensor Integration services to connect physical sensors with digital systems for real‑time data collection and intelligent decision‑making.\nWith 12+ years of engineering and technology integration experience, we ensure sensors are correctly selected, deployed, and integrated for reliable and scalable IoT solutions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IoT Development" }
                ]
            },
            content: [
                {
                    title: "What is IoT Sensor Integration?",
                    description: "Sensor integration connects physical sensors to software platforms so devices can capture, transmit, and act on real‑world data.",
                    list: [
                        "Accurate real‑time data capture",
                        "Seamless device‑to‑system communication",
                        "Improved automation and intelligence",
                        "Reliable data flow for analytics"
                    ]
                },
                {
                    title: "Why Sensor Integration Matters",
                    description: "Poor sensor integration leads to unreliable data and system failures.",
                    list: [
                        "Ensures data accuracy and consistency",
                        "Reduces signal loss and errors",
                        "Improves system reliability",
                        "Supports scalable IoT deployments"
                    ]
                },
                {
                    title: "Sensor Selection & Compatibility",
                    description: "Choose the right sensors for your use case.",
                    list: [
                        "Environmental, industrial, and smart sensors",
                        "Hardware compatibility analysis",
                        "Accuracy and calibration requirements",
                        "Power and connectivity considerations"
                    ]
                },
                {
                    title: "Hardware & Firmware Integration",
                    description: "Reliable sensor‑level connectivity.",
                    list: [
                        "Sensor‑to‑device wiring and setup",
                        "Firmware configuration and tuning",
                        "Data sampling and transmission logic",
                        "Error handling and fallback mechanisms"
                    ]
                },
                {
                    title: "Protocol & Connectivity Setup",
                    description: "Ensure smooth data transmission.",
                    list: [
                        "MQTT, HTTP, CoAP integration",
                        "Wired and wireless connectivity",
                        "Latency and bandwidth optimization",
                        "Reliable message delivery"
                    ]
                },
                {
                    title: "Data Validation & Quality Control",
                    description: "Trust the data your sensors produce.",
                    list: [
                        "Data normalization and validation",
                        "Noise filtering and signal optimization",
                        "Calibration and accuracy checks",
                        "Consistency monitoring"
                    ]
                },
                {
                    title: "Testing & Deployment",
                    description: "Sensors ready for real‑world use.",
                    list: [
                        "Integration testing",
                        "Field deployment support",
                        "Performance validation",
                        "Scalability readiness checks"
                    ]
                },
                {
                    title: "Who Is Sensor Integration Best For?",
                    description: "Sensor integration services are ideal for:",
                    list: [
                        "Industrial IoT solutions",
                        "Smart buildings and cities",
                        "Healthcare and wearable devices",
                        "Manufacturing and automation systems"
                    ]
                },
                {
                    title: "Why Solario Tech for Sensor Integration?",
                    description: "Why clients trust our IoT integration expertise:",
                    list: [
                        "12+ Years of Technology Integration Experience",
                        "Hardware‑to‑cloud expertise",
                        "Reliable and scalable designs",
                        "Industry‑agnostic IoT solutions",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Connect Sensors to Power Smarter IoT Systems",
                description: "Our IoT sensor integration services help you capture accurate data and build intelligent, connected solutions.",
                buttons: [
                    { label: "Start IoT Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Device Management",
            hero: {
                title: "IoT Device Management for Control, Scalability & Reliability",
                description: "Solario Tech delivers robust IoT Device Management solutions to help businesses monitor, configure, update, and control connected devices at scale.\nWith 12+ years of IoT and system integration experience, we ensure your devices remain secure, reliable, and manageable throughout their lifecycle.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IoT Development" }
                ]
            },
            content: [
                {
                    title: "What is IoT Device Management?",
                    description: "Device management enables centralized control and monitoring of connected IoT devices across locations and environments.",
                    list: [
                        "Centralized device control",
                        "Improved device reliability",
                        "Scalable IoT operations",
                        "Reduced operational overhead"
                    ]
                },
                {
                    title: "Why Device Management Matters",
                    description: "Without proper management, IoT devices become difficult to maintain, secure, and scale.",
                    list: [
                        "Ensures consistent device performance",
                        "Reduces downtime and failures",
                        "Improves visibility across deployments",
                        "Supports large‑scale IoT growth"
                    ]
                },
                {
                    title: "Device Provisioning & Onboarding",
                    description: "Seamless device setup from day one.",
                    list: [
                        "Secure device registration",
                        "Automated provisioning workflows",
                        "Identity and credential assignment",
                        "Bulk device onboarding"
                    ]
                },
                {
                    title: "Remote Configuration & Control",
                    description: "Manage devices without physical access.",
                    list: [
                        "Remote configuration updates",
                        "Feature enablement and tuning",
                        "Command and control operations",
                        "Configuration consistency enforcement"
                    ]
                },
                {
                    title: "Firmware & OTA Updates",
                    description: "Keep devices updated and secure.",
                    list: [
                        "Over‑the‑air firmware updates",
                        "Version management",
                        "Rollback and recovery support",
                        "Minimal disruption update strategy"
                    ]
                },
                {
                    title: "Device Health & Status Monitoring",
                    description: "Real‑time insight into device condition.",
                    list: [
                        "Connectivity and uptime tracking",
                        "Battery and resource monitoring",
                        "Fault and anomaly detection",
                        "Device lifecycle visibility"
                    ]
                },
                {
                    title: "Device Grouping & Scalability",
                    description: "Manage thousands of devices efficiently.",
                    list: [
                        "Logical device grouping",
                        "Policy‑based management",
                        "Location and role‑based control",
                        "Scalable fleet operations"
                    ]
                },
                {
                    title: "Who Is Device Management Best For?",
                    description: "Device management services are ideal for:",
                    list: [
                        "Industrial IoT deployments",
                        "Smart infrastructure solutions",
                        "Connected consumer devices",
                        "Large‑scale IoT ecosystems"
                    ]
                },
                {
                    title: "Why Solario Tech for Device Management?",
                    description: "Why clients trust our IoT device expertise:",
                    list: [
                        "12+ Years of IoT & System Integration Experience",
                        "Secure and scalable device frameworks",
                        "Lifecycle‑focused management approach",
                        "Cloud and edge device expertise",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Take Full Control of Your IoT Devices",
                description: "Our IoT device management services help you monitor, update, and scale connected devices with confidence.",
                buttons: [
                    { label: "Start IoT Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Data Analytics",
            hero: {
                title: "IoT Data Analytics for Insights, Intelligence & Better Decisions",
                description: "Solario Tech provides advanced IoT Data Analytics solutions to transform raw device data into actionable insights.\nWith 12+ years of data engineering and IoT experience, we help businesses analyze real‑time and historical data to optimize operations, improve performance, and enable smarter decision‑making.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IoT Development" }
                ]
            },
            content: [
                {
                    title: "What is IoT Data Analytics?",
                    description: "IoT data analytics involves processing and analyzing data generated by connected devices to uncover patterns, trends, and insights.",
                    list: [
                        "Actionable insights from sensor data",
                        "Improved operational visibility",
                        "Data‑driven decision making",
                        "Performance optimization"
                    ]
                },
                {
                    title: "Why Data Analytics Matters in IoT",
                    description: "IoT systems generate massive data volumes that are useless without proper analytics.",
                    list: [
                        "Turns raw data into business value",
                        "Identifies inefficiencies and anomalies",
                        "Supports predictive and proactive actions",
                        "Improves ROI from IoT investments"
                    ]
                },
                {
                    title: "Real‑Time Data Processing",
                    description: "Analyze data as it is generated.",
                    list: [
                        "Stream data ingestion",
                        "Low‑latency analytics pipelines",
                        "Real‑time alerts and triggers",
                        "Live dashboards and monitoring"
                    ]
                },
                {
                    title: "Historical & Trend Analysis",
                    description: "Understand patterns over time.",
                    list: [
                        "Time‑series data analysis",
                        "Trend and usage pattern identification",
                        "Seasonal and behavioral insights",
                        "Long‑term performance evaluation"
                    ]
                },
                {
                    title: "Data Visualization & Dashboards",
                    description: "Make complex data easy to understand.",
                    list: [
                        "Custom analytics dashboards",
                        "KPIs and performance metrics",
                        "Role‑based data views",
                        "Interactive charts and reports"
                    ]
                },
                {
                    title: "Anomaly Detection & Insights",
                    description: "Detect issues before they escalate.",
                    list: [
                        "Outlier and anomaly detection",
                        "Threshold‑based alerts",
                        "Data‑driven root‑cause analysis",
                        "Operational risk identification"
                    ]
                },
                {
                    title: "Analytics Integration & Reporting",
                    description: "Connect insights with business systems.",
                    list: [
                        "Integration with BI and reporting tools",
                        "API‑based data access",
                        "Automated reports and summaries",
                        "Decision‑support analytics"
                    ]
                },
                {
                    title: "Who Is IoT Data Analytics Best For?",
                    description: "IoT data analytics services are ideal for:",
                    list: [
                        "Industrial and manufacturing IoT",
                        "Smart infrastructure and utilities",
                        "Logistics and supply chain systems",
                        "Businesses seeking data‑driven optimization"
                    ]
                },
                {
                    title: "Why Solario Tech for IoT Data Analytics?",
                    description: "Why clients trust our IoT analytics expertise:",
                    list: [
                        "12+ Years of Data & IoT Experience",
                        "Scalable real‑time analytics pipelines",
                        "Business‑focused insight generation",
                        "Cloud‑ and edge‑ready analytics",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Turn IoT Data into Actionable Intelligence",
                description: "Our IoT data analytics services help you unlock insights, improve efficiency, and maximize the value of connected devices.",
                buttons: [
                    { label: "Start IoT Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Cloud Connectivity",
            hero: {
                title: "IoT Cloud Connectivity for Scalable, Reliable & Always‑On Systems",
                description: "Solario Tech provides secure and scalable IoT Cloud Connectivity services to connect devices, sensors, and edge systems with cloud platforms for centralized control and analytics.\nWith 12+ years of cloud and IoT integration experience, we ensure reliable data flow, high availability, and future‑ready connectivity for your IoT ecosystem.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IoT Development" }
                ]
            },
            content: [
                {
                    title: "What is IoT Cloud Connectivity?",
                    description: "Cloud connectivity enables IoT devices to securely communicate with cloud platforms for data storage, processing, and management.",
                    list: [
                        "Centralized device and data access",
                        "Scalable IoT infrastructure",
                        "Real‑time data availability",
                        "Cloud‑based control and analytics"
                    ]
                },
                {
                    title: "Why Cloud Connectivity Matters",
                    description: "Without reliable cloud connectivity, IoT systems struggle to scale and deliver insights.",
                    list: [
                        "Enables large‑scale device management",
                        "Supports real‑time and historical analytics",
                        "Improves system reliability and uptime",
                        "Simplifies IoT operations"
                    ]
                },
                {
                    title: "Cloud Platform Integration",
                    description: "Connect devices to the right cloud platforms.",
                    list: [
                        "AWS IoT, Azure IoT, Google Cloud IoT",
                        "Custom cloud and hybrid setups",
                        "Platform configuration and onboarding",
                        "Service and resource optimization"
                    ]
                },
                {
                    title: "Secure Data Ingestion & Messaging",
                    description: "Reliable and secure device‑to‑cloud communication.",
                    list: [
                        "MQTT, HTTPS, and WebSocket protocols",
                        "Secure data ingestion pipelines",
                        "Message queuing and buffering",
                        "High‑throughput data handling"
                    ]
                },
                {
                    title: "Scalability & High Availability",
                    description: "Designed to grow with your IoT ecosystem.",
                    list: [
                        "Auto‑scaling cloud resources",
                        "Load balancing and redundancy",
                        "Fault‑tolerant connectivity design",
                        "Global availability planning"
                    ]
                },
                {
                    title: "Data Storage & Processing",
                    description: "Cloud‑based data handling at scale.",
                    list: [
                        "Time‑series and event data storage",
                        "Stream and batch data processing",
                        "Integration with analytics services",
                        "Cost‑optimized storage strategies"
                    ]
                },
                {
                    title: "Monitoring & Cloud Operations",
                    description: "Maintain visibility and control.",
                    list: [
                        "Cloud connectivity monitoring",
                        "Latency and performance tracking",
                        "Alerting and incident handling",
                        "Operational dashboards"
                    ]
                },
                {
                    title: "Who Is Cloud Connectivity Best For?",
                    description: "IoT cloud connectivity services are ideal for:",
                    list: [
                        "Large‑scale IoT deployments",
                        "Industrial and enterprise IoT systems",
                        "Smart city and infrastructure projects",
                        "Data‑driven IoT platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for Cloud Connectivity?",
                    description: "Why clients trust our cloud IoT expertise:",
                    list: [
                        "12+ Years of Cloud & IoT Integration Experience",
                        "Secure and scalable architectures",
                        "Multi‑cloud and hybrid expertise",
                        "Reliable, production‑ready solutions",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Connect Your IoT Ecosystem to the Cloud",
                description: "Our IoT cloud connectivity services help you scale securely, process data efficiently, and unlock the full potential of connected devices.",
                buttons: [
                    { label: "Start IoT Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Real-time Monitoring",
            hero: {
                title: "IoT Real‑time Monitoring for Instant Visibility & Faster Response",
                description: "Solario Tech delivers IoT Real‑time Monitoring solutions that provide live visibility into devices, systems, and operations.\nWith 12+ years of IoT and systems engineering experience, we help businesses track performance, detect issues instantly, and respond proactively using real‑time data.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IoT Development" }
                ]
            },
            content: [
                {
                    title: "What is IoT Real‑time Monitoring?",
                    description: "Real‑time monitoring continuously tracks device status, sensor data, and system performance as events happen.",
                    list: [
                        "Live visibility into device and system health",
                        "Immediate issue detection",
                        "Faster response and resolution",
                        "Improved operational control"
                    ]
                },
                {
                    title: "Why Real‑time Monitoring Matters",
                    description: "Delayed insights lead to downtime, losses, and missed opportunities.",
                    list: [
                        "Reduces downtime and failures",
                        "Improves operational efficiency",
                        "Enables proactive decision‑making",
                        "Enhances system reliability"
                    ]
                },
                {
                    title: "Live Device & Sensor Monitoring",
                    description: "Track device behavior as it happens.",
                    list: [
                        "Sensor data streaming",
                        "Device status and uptime tracking",
                        "Connectivity and signal monitoring",
                        "Threshold‑based alerts"
                    ]
                },
                {
                    title: "Alerts & Notifications",
                    description: "Act instantly when something goes wrong.",
                    list: [
                        "Real‑time alerts and triggers",
                        "Custom threshold configuration",
                        "Multi‑channel notifications (email, SMS, dashboards)",
                        "Incident prioritization"
                    ]
                },
                {
                    title: "Operational Dashboards",
                    description: "Clear visibility for teams and stakeholders.",
                    list: [
                        "Live monitoring dashboards",
                        "KPIs and performance indicators",
                        "Role‑based views",
                        "Interactive data visualization"
                    ]
                },
                {
                    title: "Anomaly & Event Detection",
                    description: "Identify unusual behavior early.",
                    list: [
                        "Outlier detection",
                        "Event‑based monitoring",
                        "Early warning indicators",
                        "Root‑cause analysis support"
                    ]
                },
                {
                    title: "System Health & Performance Tracking",
                    description: "Monitor end‑to‑end system performance.",
                    list: [
                        "Latency and throughput monitoring",
                        "Resource usage tracking",
                        "Service availability checks",
                        "Performance trend analysis"
                    ]
                },
                {
                    title: "Who Is Real‑time Monitoring Best For?",
                    description: "Real‑time monitoring services are ideal for:",
                    list: [
                        "Industrial and manufacturing IoT",
                        "Smart infrastructure and utilities",
                        "Logistics and fleet management",
                        "Business‑critical IoT systems"
                    ]
                },
                {
                    title: "Why Solario Tech for Real‑time Monitoring?",
                    description: "Why clients trust our monitoring solutions:",
                    list: [
                        "12+ Years of IoT & Systems Experience",
                        "Low‑latency, scalable monitoring architectures",
                        "Action‑oriented dashboards and alerts",
                        "Cloud and edge monitoring expertise",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Monitor Your IoT Systems in Real Time",
                description: "Our real‑time monitoring solutions give you instant visibility, faster response, and better control over your IoT ecosystem.",
                buttons: [
                    { label: "Start IoT Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Predictive Maintenance",
            hero: {
                title: "IoT Predictive Maintenance for Reduced Downtime & Smarter Operations",
                description: "Solario Tech delivers IoT Predictive Maintenance solutions that use real‑time and historical data to predict failures before they happen.\nWith 12+ years of IoT, data analytics, and systems engineering experience, we help businesses move from reactive fixes to proactive, cost‑saving maintenance strategies.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IoT Development" }
                ]
            },
            content: [
                {
                    title: "What is IoT Predictive Maintenance?",
                    description: "Predictive maintenance uses sensor data, analytics, and machine learning to forecast equipment failures and maintenance needs.",
                    list: [
                        "Early failure detection",
                        "Reduced unplanned downtime",
                        "Optimized maintenance schedules",
                        "Lower operational costs"
                    ]
                },
                {
                    title: "Why Predictive Maintenance Matters",
                    description: "Traditional reactive maintenance leads to unexpected failures and higher costs.",
                    list: [
                        "Prevents costly equipment breakdowns",
                        "Extends asset lifespan",
                        "Improves operational efficiency",
                        "Reduces maintenance and repair costs"
                    ]
                },
                {
                    title: "Sensor & Data Collection Strategy",
                    description: "Capture the right data for accurate predictions.",
                    list: [
                        "Equipment and asset sensor mapping",
                        "Condition and performance data capture",
                        "Usage and environmental data tracking",
                        "Data quality and reliability checks"
                    ]
                },
                {
                    title: "Condition Monitoring & Trend Analysis",
                    description: "Identify early signs of failure.",
                    list: [
                        "Performance degradation tracking",
                        "Pattern and trend identification",
                        "Threshold and baseline comparison",
                        "Anomaly detection"
                    ]
                },
                {
                    title: "Predictive Models & Algorithms",
                    description: "Turn data into maintenance insights.",
                    list: [
                        "Failure prediction models",
                        "Remaining useful life (RUL) estimation",
                        "Rule‑based and ML‑driven predictions",
                        "Continuous model improvement"
                    ]
                },
                {
                    title: "Maintenance Alerts & Scheduling",
                    description: "Act before failures occur.",
                    list: [
                        "Predictive alerts and notifications",
                        "Maintenance priority classification",
                        "Automated work order triggers",
                        "Planned downtime optimization"
                    ]
                },
                {
                    title: "Integration with Maintenance Systems",
                    description: "Connect predictions to operations.",
                    list: [
                        "CMMS and ERP integration",
                        "Maintenance workflow automation",
                        "Asset and inventory alignment",
                        "Operational reporting"
                    ]
                },
                {
                    title: "Who Is Predictive Maintenance Best For?",
                    description: "Predictive maintenance solutions are ideal for:",
                    list: [
                        "Manufacturing and industrial operations",
                        "Energy and utilities",
                        "Fleet and transportation systems",
                        "Asset‑heavy businesses"
                    ]
                },
                {
                    title: "Why Solario Tech for Predictive Maintenance?",
                    description: "Why clients trust our predictive maintenance expertise:",
                    list: [
                        "12+ Years of IoT & Data Analytics Experience",
                        "Proven predictive modeling approaches",
                        "Business‑focused maintenance insights",
                        "Scalable and production‑ready solutions",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Prevent Failures Before They Happen",
                description: "Our IoT predictive maintenance solutions help you reduce downtime, optimize maintenance, and protect critical assets.",
                buttons: [
                    { label: "Start IoT Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Edge Computing",
            hero: {
                title: "IoT Edge Computing for Low‑Latency, Intelligent & Resilient Systems",
                description: "Solario Tech delivers IoT Edge Computing solutions that process data closer to devices—reducing latency, bandwidth usage, and dependency on constant cloud connectivity.\nWith 12+ years of IoT and distributed systems experience, we help businesses build faster, smarter, and more resilient IoT architectures.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IoT Development" }
                ]
            },
            content: [
                {
                    title: "What is IoT Edge Computing?",
                    description: "Edge computing processes data at or near the source (devices or gateways) instead of relying solely on centralized cloud systems.",
                    list: [
                        "Ultra‑low latency processing",
                        "Reduced cloud dependency",
                        "Improved reliability",
                        "Faster decision making"
                    ]
                },
                {
                    title: "Why Edge Computing Matters",
                    description: "Cloud‑only IoT architectures can suffer from latency, bandwidth limits, and outages.",
                    list: [
                        "Enables real‑time responses",
                        "Reduces network bandwidth usage",
                        "Improves system resilience",
                        "Supports offline or intermittent connectivity"
                    ]
                },
                {
                    title: "Edge Architecture Design",
                    description: "Design the right balance between edge and cloud.",
                    list: [
                        "Device‑edge‑cloud architecture planning",
                        "Gateway and edge node design",
                        "Workload distribution strategy",
                        "Scalability and redundancy planning"
                    ]
                },
                {
                    title: "Local Data Processing & Filtering",
                    description: "Process data where it’s generated.",
                    list: [
                        "On‑device and gateway analytics",
                        "Data filtering and aggregation",
                        "Event‑driven processing",
                        "Reduced data transmission costs"
                    ]
                },
                {
                    title: "Real‑time Decision Making",
                    description: "Act instantly at the edge.",
                    list: [
                        "Low‑latency control logic",
                        "Rule‑based and ML inference at edge",
                        "Autonomous system responses",
                        "Safety‑critical decision support"
                    ]
                },
                {
                    title: "Edge‑to‑Cloud Synchronization",
                    description: "Seamless coordination between edge and cloud.",
                    list: [
                        "Asynchronous data sync",
                        "Cloud fallback and failover",
                        "Centralized analytics integration",
                        "State and configuration management"
                    ]
                },
                {
                    title: "Edge Security & Reliability",
                    description: "Protected and stable edge environments.",
                    list: [
                        "Secure edge device configuration",
                        "Fault tolerance and recovery",
                        "Local monitoring and diagnostics",
                        "Remote edge management"
                    ]
                },
                {
                    title: "Who Is Edge Computing Best For?",
                    description: "Edge computing solutions are ideal for:",
                    list: [
                        "Industrial automation systems",
                        "Smart factories and manufacturing",
                        "Autonomous and real‑time IoT systems",
                        "Remote or bandwidth‑limited environments"
                    ]
                },
                {
                    title: "Why Solario Tech for Edge Computing?",
                    description: "Why clients trust our edge expertise:",
                    list: [
                        "12+ Years of IoT & Distributed Systems Experience",
                        "Low‑latency, production‑ready architectures",
                        "Cloud‑edge hybrid expertise",
                        "Scalable and secure edge designs",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Bring Intelligence Closer to Your Devices",
                description: "Our IoT edge computing solutions help you achieve faster response times, reduced costs, and resilient real‑time systems.",
                buttons: [
                    { label: "Start IoT Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Security Protocols",
            hero: {
                title: "IoT Security Protocols for Safe, Trusted & Resilient Systems",
                description: "Solario Tech delivers robust IoT Security Protocols to protect devices, data, and communication across the entire IoT ecosystem.\nWith 12+ years of cybersecurity, IoT, and system architecture experience, we design multi‑layered security frameworks that safeguard connected systems against threats, breaches, and unauthorized access.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start IoT Development" }
                ]
            },
            content: [
                {
                    title: "What Are IoT Security Protocols?",
                    description: "IoT security protocols define the standards, controls, and practices used to secure devices, networks, data, and cloud platforms.",
                    list: [
                        "Secure device communication",
                        "Protected data transmission",
                        "Controlled access and authentication",
                        "Reduced security risks"
                    ]
                },
                {
                    title: "Why IoT Security Matters",
                    description: "Unsecured IoT systems are prime targets for cyberattacks and data breaches.",
                    list: [
                        "Prevents unauthorized device access",
                        "Protects sensitive operational data",
                        "Ensures system integrity and trust",
                        "Supports regulatory and compliance needs"
                    ]
                },
                {
                    title: "Device Authentication & Identity Management",
                    description: "Ensure only trusted devices connect to your system.",
                    list: [
                        "Unique device identities",
                        "Certificate‑based authentication",
                        "Secure key provisioning",
                        "Device lifecycle access control"
                    ]
                },
                {
                    title: "Secure Communication Protocols",
                    description: "Protect data in transit across networks.",
                    list: [
                        "TLS / DTLS encrypted communication",
                        "Secure MQTT and HTTPS configurations",
                        "Message integrity and validation",
                        "Man‑in‑the‑middle attack prevention"
                    ]
                },
                {
                    title: "Data Security & Encryption",
                    description: "Protect data at rest and in motion.",
                    list: [
                        "End‑to‑end data encryption",
                        "Secure cloud and edge storage",
                        "Key management strategies",
                        "Sensitive data masking and protection"
                    ]
                },
                {
                    title: "Access Control & Authorization",
                    description: "Control who can access what.",
                    list: [
                        "Role‑based access control (RBAC)",
                        "Least‑privilege access models",
                        "API and service authorization",
                        "Audit trails and access logging"
                    ]
                },
                {
                    title: "Firmware & Update Security",
                    description: "Prevent tampering and malicious updates.",
                    list: [
                        "Secure boot mechanisms",
                        "Signed firmware updates",
                        "OTA update validation",
                        "Rollback and recovery protection"
                    ]
                },
                {
                    title: "Threat Detection & Monitoring",
                    description: "Detect and respond to threats early.",
                    list: [
                        "Anomaly and intrusion detection",
                        "Security event monitoring",
                        "Alerting and incident response",
                        "Continuous security posture assessment"
                    ]
                },
                {
                    title: "Compliance & Security Best Practices",
                    description: "Align IoT security with industry standards.",
                    list: [
                        "Industry and regulatory compliance readiness",
                        "Security policy enforcement",
                        "Risk assessment and mitigation",
                        "Ongoing security reviews"
                    ]
                },
                {
                    title: "Who Are IoT Security Protocols Best For?",
                    description: "IoT security services are ideal for:",
                    list: [
                        "Enterprise and industrial IoT systems",
                        "Smart infrastructure and utilities",
                        "Healthcare and sensitive data environments",
                        "Large‑scale connected ecosystems"
                    ]
                },
                {
                    title: "Why Solario Tech for IoT Security?",
                    description: "Why clients trust our IoT security expertise:",
                    list: [
                        "12+ Years of Security & IoT Experience",
                        "Multi‑layered security architecture",
                        "Device‑to‑cloud protection approach",
                        "Proactive threat mitigation",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Secure Your IoT Ecosystem from Device to Cloud",
                description: "Our IoT security protocols protect your connected systems, data, and users—so you can innovate with confidence.",
                buttons: [
                    { label: "Start IoT Development" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

    ],
    "cloud-solutions": [
        {
            id: "Cloud Migration",
            hero: {
                title: "Cloud Migration Services for Secure, Seamless & Scalable Transitions",
                description: "Solario Tech provides end‑to‑end Cloud Migration services to help businesses move applications, data, and infrastructure to the cloud with minimal risk and downtime.\nWith 12+ years of cloud consulting and delivery experience, we ensure smooth migrations that improve performance, scalability, and cost efficiency.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Cloud Journey" }
                ]
            },
            content: [
                {
                    title: "What is Cloud Migration?",
                    description: "Cloud migration is the process of moving applications, data, and workloads from on‑premise or legacy environments to cloud platforms.",
                    list: [
                        "Improved scalability and flexibility",
                        "Reduced infrastructure management",
                        "Enhanced performance and reliability",
                        "Faster innovation and deployment"
                    ]
                },
                {
                    title: "Why Cloud Migration Matters",
                    description: "Legacy systems limit agility and increase operational costs.",
                    list: [
                        "Eliminates hardware dependency",
                        "Improves business agility",
                        "Enables modern cloud services",
                        "Reduces long‑term IT costs"
                    ]
                },
                {
                    title: "Cloud Readiness Assessment",
                    description: "Understand what and how to migrate.",
                    list: [
                        "Application and infrastructure assessment",
                        "Dependency and risk analysis",
                        "Migration feasibility evaluation",
                        "Cloud readiness scoring"
                    ]
                },
                {
                    title: "Migration Strategy & Planning",
                    description: "Choose the right migration approach.",
                    list: [
                        "Rehost, replatform, refactor strategies",
                        "Phased migration roadmap",
                        "Downtime and risk mitigation planning",
                        "Business continuity alignment"
                    ]
                },
                {
                    title: "Application & Data Migration",
                    description: "Move workloads safely and efficiently.",
                    list: [
                        "Application migration and modernization",
                        "Database and data migration",
                        "Performance and compatibility validation",
                        "Minimal disruption execution"
                    ]
                },
                {
                    title: "Testing & Validation",
                    description: "Ensure stability post‑migration.",
                    list: [
                        "Functional and performance testing",
                        "Security and compliance validation",
                        "Data integrity checks",
                        "User acceptance testing"
                    ]
                },
                {
                    title: "Post‑Migration Optimization",
                    description: "Optimize for performance and cost.",
                    list: [
                        "Cloud resource right‑sizing",
                        "Performance tuning",
                        "Cost optimization recommendations",
                        "Operational best practices"
                    ]
                },
                {
                    title: "Who Is Cloud Migration Best For?",
                    description: "Cloud migration services are ideal for:",
                    list: [
                        "Businesses moving away from on‑prem infrastructure",
                        "Organizations modernizing legacy systems",
                        "Startups and scaling companies",
                        "Enterprises adopting cloud‑first strategies"
                    ]
                },
                {
                    title: "Why Solario Tech for Cloud Migration?",
                    description: "Why clients trust our migration expertise:",
                    list: [
                        "12+ Years of Cloud Consulting Experience",
                        "Risk‑managed migration frameworks",
                        "Minimal downtime approach",
                        "Cloud‑agnostic strategy",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Move to the Cloud with Confidence",
                description: "Our cloud migration services help you transition securely, scale efficiently, and unlock the full potential of cloud computing.",
                buttons: [
                    { label: "Start Cloud Journey" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "AWS/Azure/GCP",
            hero: {
                title: "AWS, Azure & GCP Cloud Services for Flexible & Future‑Ready Solutions",
                description: "Solario Tech provides expert consulting and implementation services across AWS, Microsoft Azure, and Google Cloud Platform (GCP).\nWith 12+ years of multi‑cloud experience, we help businesses design, deploy, and manage cloud environments that are secure, scalable, and aligned with business goals.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Cloud Journey" }
                ]
            },
            content: [
                {
                    title: "Multi‑Cloud Expertise (AWS, Azure & GCP)",
                    description: "We work across leading cloud providers to deliver the best fit for your needs.",
                    list: [
                        "Amazon Web Services (AWS)",
                        "Microsoft Azure",
                        "Google Cloud Platform (GCP)",
                        "Hybrid and multi‑cloud strategies"
                    ]
                },
                {
                    title: "Why Choose a Multi‑Cloud Approach?",
                    description: "Different clouds excel at different workloads.",
                    list: [
                        "Avoid vendor lock‑in",
                        "Leverage best‑of‑breed cloud services",
                        "Improve resilience and availability",
                        "Optimize cost and performance"
                    ]
                },
                {
                    title: "Cloud Provider Assessment & Selection",
                    description: "Choose the right cloud for each workload.",
                    list: [
                        "Business and technical requirement analysis",
                        "Service and feature comparison",
                        "Compliance and regional availability review",
                        "Cost and scalability evaluation"
                    ]
                },
                {
                    title: "AWS Cloud Services",
                    description: "Scalable and reliable cloud infrastructure.",
                    list: [
                        "Compute, storage, and networking setup",
                        "AWS managed services integration",
                        "High‑availability architecture",
                        "Security and IAM configuration"
                    ]
                },
                {
                    title: "Microsoft Azure Services",
                    description: "Enterprise‑friendly cloud solutions.",
                    list: [
                        "Azure infrastructure and platform services",
                        "Microsoft ecosystem integration",
                        "Hybrid cloud and on‑prem connectivity",
                        "Identity and access management"
                    ]
                },
                {
                    title: "Google Cloud Platform Services",
                    description: "Data‑driven and performance‑focused cloud.",
                    list: [
                        "GCP compute and storage services",
                        "Big data and analytics integration",
                        "Container and Kubernetes‑ready environments",
                        "High‑performance networking"
                    ]
                },
                {
                    title: "Deployment, Management & Optimization",
                    description: "Cloud environments built for production.",
                    list: [
                        "Cloud environment setup and automation",
                        "Monitoring and performance tuning",
                        "Cost and usage optimization",
                        "Ongoing cloud operations support"
                    ]
                },
                {
                    title: "Who Is This Best For?",
                    description: "AWS, Azure & GCP services are ideal for:",
                    list: [
                        "Startups and scaling businesses",
                        "Enterprises with complex workloads",
                        "Organizations adopting multi‑cloud strategies",
                        "Data‑ and application‑heavy platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for Multi‑Cloud?",
                    description: "Why clients trust our cloud expertise:",
                    list: [
                        "12+ Years of Cloud Consulting Experience",
                        "Certified multi‑cloud engineers",
                        "Cloud‑agnostic recommendations",
                        "Secure, scalable production setups",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Leverage the Best of AWS, Azure & GCP",
                description: "Our multi‑cloud services help you build flexible, secure, and high‑performance cloud solutions across leading platforms.",
                buttons: [
                    { label: "Start Cloud Journey" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Cloud Architecture",
            hero: {
                title: "Cloud Architecture Design for Secure, Scalable & High‑Performance Systems",
                description: "Solario Tech designs robust Cloud Architectures that ensure scalability, security, resilience, and optimal performance.\nWith 12+ years of cloud architecture and engineering experience, we help businesses build future‑ready cloud foundations aligned with application needs and long‑term growth.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Cloud Journey" }
                ]
            },
            content: [
                {
                    title: "What is Cloud Architecture?",
                    description: "Cloud architecture defines how cloud components—compute, storage, networking, security, and services—are structured and connected.",
                    list: [
                        "Scalable and resilient system design",
                        "Optimized performance and availability",
                        "Secure cloud foundations",
                        "Cost‑efficient infrastructure planning"
                    ]
                },
                {
                    title: "Why Cloud Architecture Matters",
                    description: "Poor architecture leads to downtime, security gaps, and high costs.",
                    list: [
                        "Ensures reliability and high availability",
                        "Supports business growth and scaling",
                        "Improves security and compliance posture",
                        "Reduces long‑term operational costs"
                    ]
                },
                {
                    title: "Architecture Assessment & Planning",
                    description: "Design based on real business and technical needs.",
                    list: [
                        "Application and workload analysis",
                        "Performance and availability requirements",
                        "Security and compliance considerations",
                        "Future growth and scalability planning"
                    ]
                },
                {
                    title: "Scalable & Resilient Design",
                    description: "Architect for reliability and growth.",
                    list: [
                        "Multi‑tier and microservices architectures",
                        "Auto‑scaling and load balancing",
                        "Fault tolerance and redundancy",
                        "Disaster recovery planning"
                    ]
                },
                {
                    title: "Networking & Connectivity Design",
                    description: "Secure and efficient cloud networking.",
                    list: [
                        "VPC / VNet architecture",
                        "Private and public connectivity",
                        "Hybrid and on‑prem integration",
                        "Network security and segmentation"
                    ]
                },
                {
                    title: "Security‑First Architecture",
                    description: "Security built into the foundation.",
                    list: [
                        "Identity and access management (IAM)",
                        "Network and application security layers",
                        "Data protection and encryption",
                        "Zero‑trust architecture principles"
                    ]
                },
                {
                    title: "Cost‑Optimized Architecture",
                    description: "Balance performance with cost efficiency.",
                    list: [
                        "Right‑sizing resources",
                        "Storage and compute optimization",
                        "Usage‑based architecture planning",
                        "Cost visibility and forecasting"
                    ]
                },
                {
                    title: "Architecture Documentation & Governance",
                    description: "Clear guidance for teams and stakeholders.",
                    list: [
                        "Architecture diagrams and documentation",
                        "Best‑practice standards",
                        "Governance and review frameworks",
                        "Ongoing architecture evolution support"
                    ]
                },
                {
                    title: "Who Is Cloud Architecture Best For?",
                    description: "Cloud architecture services are ideal for:",
                    list: [
                        "New cloud‑native applications",
                        "Businesses scaling cloud workloads",
                        "Enterprises modernizing infrastructure",
                        "High‑availability and mission‑critical systems"
                    ]
                },
                {
                    title: "Why Solario Tech for Cloud Architecture?",
                    description: "Why clients trust our architecture expertise:",
                    list: [
                        "12+ Years of Cloud Architecture Experience",
                        "Security‑ and scalability‑first designs",
                        "Multi‑cloud and hybrid expertise",
                        "Production‑ready, future‑proof solutions",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build a Strong Cloud Foundation",
                description: "Our cloud architecture services help you design secure, scalable, and cost‑effective cloud systems that support long‑term business success.",
                buttons: [
                    { label: "Start Cloud Journey" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "DevOps Services",
            hero: {
                title: "DevOps Services for Faster Delivery, Stability & Continuous Improvement",
                description: "Solario Tech provides end‑to‑end DevOps Services to help organizations automate, deploy, monitor, and scale applications efficiently.\nWith 12+ years of cloud and DevOps engineering experience, we enable faster releases, improved reliability, and seamless collaboration between development and operations teams.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Cloud Journey" }
                ]
            },
            content: [
                {
                    title: "What Are DevOps Services?",
                    description: "DevOps services combine development and operations practices to automate workflows, improve deployment speed, and ensure system stability.",
                    list: [
                        "Faster and more reliable releases",
                        "Improved collaboration across teams",
                        "Automated infrastructure and deployments",
                        "Continuous monitoring and optimization"
                    ]
                },
                {
                    title: "Why DevOps Matters",
                    description: "Manual processes and siloed teams slow down innovation and increase risk.",
                    list: [
                        "Reduces deployment errors and downtime",
                        "Accelerates time‑to‑market",
                        "Improves system reliability",
                        "Supports scalable cloud operations"
                    ]
                },
                {
                    title: "CI/CD Pipeline Implementation",
                    description: "Automate build, test, and deployment workflows.",
                    list: [
                        "Continuous integration setup",
                        "Automated testing pipelines",
                        "Continuous deployment strategies",
                        "Release automation"
                    ]
                },
                {
                    title: "Infrastructure as Code (IaC)",
                    description: "Provision infrastructure consistently and repeatably.",
                    list: [
                        "Terraform and cloud‑native IaC",
                        "Version‑controlled infrastructure",
                        "Environment consistency",
                        "Rapid provisioning and rollback"
                    ]
                },
                {
                    title: "Cloud & Application Automation",
                    description: "Reduce manual effort across environments.",
                    list: [
                        "Automated environment setup",
                        "Configuration management",
                        "Scalable deployment workflows",
                        "Operational efficiency improvements"
                    ]
                },
                {
                    title: "Monitoring, Logging & Observability",
                    description: "Maintain visibility into systems and applications.",
                    list: [
                        "Centralized logging",
                        "Performance and uptime monitoring",
                        "Alerting and incident response",
                        "System health dashboards"
                    ]
                },
                {
                    title: "Security & DevSecOps",
                    description: "Security embedded into DevOps pipelines.",
                    list: [
                        "Automated security checks",
                        "Vulnerability scanning",
                        "Secrets and access management",
                        "Compliance‑ready pipelines"
                    ]
                },
                {
                    title: "Who Are DevOps Services Best For?",
                    description: "DevOps services are ideal for:",
                    list: [
                        "Cloud‑native application teams",
                        "Organizations scaling development efforts",
                        "Enterprises modernizing delivery pipelines",
                        "High‑availability production systems"
                    ]
                },
                {
                    title: "Why Solario Tech for DevOps?",
                    description: "Why clients trust our DevOps expertise:",
                    list: [
                        "12+ Years of Cloud & DevOps Experience",
                        "Automation‑first approach",
                        "Production‑ready pipelines",
                        "Security and scalability focus",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Accelerate Delivery with DevOps",
                description: "Our DevOps services help you release faster, operate reliably, and continuously improve your cloud applications.",
                buttons: [
                    { label: "Start Cloud Journey" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Container Orchestration",
            hero: {
                title: "Container Orchestration for Scalable, Resilient & Automated Deployments",
                description: "Solario Tech delivers enterprise‑grade Container Orchestration services to help businesses deploy, manage, and scale containerized applications efficiently.\nWith 12+ years of cloud and DevOps experience, we design and operate orchestration platforms that ensure high availability, fault tolerance, and seamless scalability.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Cloud Journey" }
                ]
            },
            content: [
                {
                    title: "What is Container Orchestration?",
                    description: "Container orchestration automates the deployment, scaling, networking, and management of containerized applications.",
                    list: [
                        "Automated container deployment and scaling",
                        "High availability and fault tolerance",
                        "Efficient resource utilization",
                        "Consistent environments across stages"
                    ]
                },
                {
                    title: "Why Container Orchestration Matters",
                    description: "Managing containers manually becomes complex and risky at scale.",
                    list: [
                        "Simplifies large‑scale container management",
                        "Improves application reliability",
                        "Enables rapid scaling and updates",
                        "Reduces operational overhead"
                    ]
                },
                {
                    title: "Kubernetes‑Based Orchestration",
                    description: "Industry‑standard orchestration platforms.",
                    list: [
                        "Kubernetes cluster design and setup",
                        "Managed Kubernetes (EKS, AKS, GKE)",
                        "Cluster scaling and node management",
                        "High‑availability configurations"
                    ]
                },
                {
                    title: "Container Deployment & Management",
                    description: "Run applications reliably at scale.",
                    list: [
                        "Containerized application deployment",
                        "Rolling updates and rollbacks",
                        "Service discovery and networking",
                        "Configuration and secrets management"
                    ]
                },
                {
                    title: "Auto‑Scaling & Load Balancing",
                    description: "Scale dynamically based on demand.",
                    list: [
                        "Horizontal and vertical pod autoscaling",
                        "Traffic‑based scaling",
                        "Load balancer integration",
                        "Performance‑optimized routing"
                    ]
                },
                {
                    title: "Monitoring & Observability",
                    description: "Maintain full visibility into clusters.",
                    list: [
                        "Cluster and workload monitoring",
                        "Centralized logging",
                        "Health checks and alerts",
                        "Performance and resource insights"
                    ]
                },
                {
                    title: "Security & Governance",
                    description: "Secure containerized environments.",
                    list: [
                        "Role‑based access control (RBAC)",
                        "Network policies and isolation",
                        "Image scanning and vulnerability checks",
                        "Policy‑driven governance"
                    ]
                },
                {
                    title: "Who Is Container Orchestration Best For?",
                    description: "Container orchestration services are ideal for:",
                    list: [
                        "Microservices‑based applications",
                        "Cloud‑native platforms",
                        "High‑traffic production systems",
                        "Organizations scaling container workloads"
                    ]
                },
                {
                    title: "Why Solario Tech for Container Orchestration?",
                    description: "Why clients trust our orchestration expertise:",
                    list: [
                        "12+ Years of Cloud & DevOps Experience",
                        "Production‑ready Kubernetes expertise",
                        "Scalable and secure cluster designs",
                        "Automation‑first approach",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Run Containers at Scale with Confidence",
                description: "Our container orchestration services help you deploy, manage, and scale containerized applications reliably and efficiently.",
                buttons: [
                    { label: "Start Cloud Journey" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Serverless Solutions",
            hero: {
                title: "Serverless Solutions for Agile, Scalable & Cost‑Efficient Applications",
                description: "Solario Tech delivers Serverless Solutions that allow businesses to build and run applications without managing servers or infrastructure.\nWith 12+ years of cloud and modern application experience, we help teams reduce operational overhead, scale automatically, and pay only for what they use.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Cloud Journey" }
                ]
            },
            content: [
                {
                    title: "What Are Serverless Solutions?",
                    description: "Serverless computing lets developers focus on code while the cloud provider automatically manages infrastructure, scaling, and availability.",
                    list: [
                        "No server management",
                        "Automatic scaling",
                        "Pay‑per‑use pricing",
                        "Faster development cycles"
                    ]
                },
                {
                    title: "Why Serverless Matters",
                    description: "Traditional infrastructure slows innovation and increases operational cost.",
                    list: [
                        "Reduces infrastructure overhead",
                        "Scales instantly with demand",
                        "Improves developer productivity",
                        "Optimizes operational costs"
                    ]
                },
                {
                    title: "Serverless Architecture Design",
                    description: "Build applications optimized for serverless execution.",
                    list: [
                        "Event‑driven architecture design",
                        "Function‑based application modeling",
                        "Stateless service patterns",
                        "Cloud‑native best practices"
                    ]
                },
                {
                    title: "Function Development & Deployment",
                    description: "Develop and deploy serverless workloads.",
                    list: [
                        "AWS Lambda, Azure Functions, Cloud Functions",
                        "API‑driven and event‑triggered functions",
                        "CI/CD for serverless deployments",
                        "Versioning and rollback strategies"
                    ]
                },
                {
                    title: "Serverless APIs & Backends",
                    description: "Build scalable backend services.",
                    list: [
                        "API Gateway integration",
                        "Authentication and authorization setup",
                        "Microservices‑friendly APIs",
                        "Low‑latency backend design"
                    ]
                },
                {
                    title: "Event Processing & Integration",
                    description: "React to events in real time.",
                    list: [
                        "Queue‑ and stream‑based processing",
                        "IoT, data, and application events",
                        "Asynchronous workflows",
                        "Reliable event handling"
                    ]
                },
                {
                    title: "Monitoring & Optimization",
                    description: "Ensure performance and reliability.",
                    list: [
                        "Function performance monitoring",
                        "Error tracking and logging",
                        "Cold‑start optimization",
                        "Cost and usage insights"
                    ]
                },
                {
                    title: "Who Are Serverless Solutions Best For?",
                    description: "Serverless solutions are ideal for:",
                    list: [
                        "Startups and fast‑moving teams",
                        "Event‑driven applications",
                        "APIs and backend services",
                        "Workloads with variable traffic"
                    ]
                },
                {
                    title: "Why Solario Tech for Serverless?",
                    description: "Why clients trust our serverless expertise:",
                    list: [
                        "12+ Years of Cloud Experience",
                        "Cloud‑native and event‑driven design",
                        "Cost‑efficient architectures",
                        "Production‑ready implementations",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build Faster with Serverless Architecture",
                description: "Our serverless solutions help you launch quickly, scale automatically, and reduce cloud operational costs.",
                buttons: [
                    { label: "Start Cloud Journey" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Cost Optimization",
            hero: {
                title: "Cloud Cost Optimization for Maximum Value & Controlled Spend",
                description: "Solario Tech delivers Cloud Cost Optimization services to help businesses reduce cloud waste, control spending, and maximize ROI without sacrificing performance.\nWith 12+ years of cloud and financial optimization experience, we help organizations gain full visibility into cloud usage and implement smart, sustainable cost‑saving strategies.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Cloud Journey" }
                ]
            },
            content: [
                {
                    title: "What is Cloud Cost Optimization?",
                    description: "Cloud cost optimization focuses on managing and reducing cloud expenses while maintaining performance, security, and scalability.",
                    list: [
                        "Lower and predictable cloud costs",
                        "Improved resource efficiency",
                        "Better ROI from cloud investments",
                        "Financial transparency and control"
                    ]
                },
                {
                    title: "Why Cost Optimization Matters",
                    description: "Uncontrolled cloud usage leads to overspending and budget overruns.",
                    list: [
                        "Eliminates unused and over‑provisioned resources",
                        "Prevents surprise cloud bills",
                        "Aligns cloud spend with business value",
                        "Supports sustainable cloud growth"
                    ]
                },
                {
                    title: "Cloud Cost Assessment & Visibility",
                    description: "Understand where your money is going.",
                    list: [
                        "Cloud usage and billing analysis",
                        "Service‑level cost breakdown",
                        "Idle and underutilized resource identification",
                        "Cost reporting and dashboards"
                    ]
                },
                {
                    title: "Resource Right‑Sizing",
                    description: "Pay only for what you actually need.",
                    list: [
                        "Compute and storage right‑sizing",
                        "Auto‑scaling optimization",
                        "Storage tier and lifecycle management",
                        "Performance vs cost balancing"
                    ]
                },
                {
                    title: "Pricing & Savings Strategies",
                    description: "Leverage cloud pricing models effectively.",
                    list: [
                        "Reserved Instances and Savings Plans",
                        "Spot and preemptible workloads",
                        "Commitment and usage‑based discounts",
                        "Cost‑aware workload placement"
                    ]
                },
                {
                    title: "Architecture & Design Optimization",
                    description: "Design systems that are cost‑efficient by default.",
                    list: [
                        "Serverless and managed service adoption",
                        "Event‑driven and scalable architectures",
                        "Storage and data transfer optimization",
                        "Cost‑efficient service selection"
                    ]
                },
                {
                    title: "Monitoring, Alerts & Governance",
                    description: "Maintain long‑term cost control.",
                    list: [
                        "Budgeting and cost alerts",
                        "Usage monitoring and anomaly detection",
                        "Policy‑based cost governance",
                        "Ongoing optimization reviews"
                    ]
                },
                {
                    title: "Who Is Cost Optimization Best For?",
                    description: "Cloud cost optimization services are ideal for:",
                    list: [
                        "Businesses with rising cloud bills",
                        "Scaling startups and SaaS platforms",
                        "Enterprises managing multi‑cloud environments",
                        "Organizations seeking better cloud ROI"
                    ]
                },
                {
                    title: "Why Solario Tech for Cost Optimization?",
                    description: "Why clients trust our cost optimization expertise:",
                    list: [
                        "12+ Years of Cloud & Financial Optimization Experience",
                        "Cloud‑agnostic cost strategies",
                        "Business‑aligned savings approach",
                        "Performance‑first optimization",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Reduce Cloud Costs Without Compromising Performance",
                description: "Our cloud cost optimization services help you control spending, improve efficiency, and maximize the value of your cloud investments.",
                buttons: [
                    { label: "Start Cloud Journey" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },

        {
            id: "Security & Compliance",
            hero: {
                title: "Cloud Security & Compliance for Trusted, Resilient & Regulation‑Ready Systems",
                description: "Solario Tech delivers comprehensive Cloud Security & Compliance services to protect applications, infrastructure, and data while meeting industry and regulatory requirements.\nWith 12+ years of cloud security and governance experience, we help organizations build secure cloud environments that are compliant, auditable, and resilient against evolving threats.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Cloud Journey" }
                ]
            },
            content: [
                {
                    title: "What is Cloud Security & Compliance?",
                    description: "Cloud security and compliance ensure that cloud environments are protected against threats while adhering to legal, regulatory, and industry standards.",
                    list: [
                        "Secure cloud infrastructure and workloads",
                        "Protection of sensitive data",
                        "Regulatory and audit readiness",
                        "Reduced risk and exposure"
                    ]
                },
                {
                    title: "Why Security & Compliance Matter",
                    description: "Cloud adoption without strong security and compliance increases risk and liability.",
                    list: [
                        "Prevents data breaches and unauthorized access",
                        "Ensures business and customer trust",
                        "Meets regulatory and contractual obligations",
                        "Reduces financial and reputational risk"
                    ]
                },
                {
                    title: "Cloud Security Architecture",
                    description: "Security built into the cloud foundation.",
                    list: [
                        "Identity and access management (IAM)",
                        "Network security and segmentation",
                        "Zero‑trust security models",
                        "Secure cloud architecture design"
                    ]
                },
                {
                    title: "Data Protection & Privacy",
                    description: "Safeguard sensitive and regulated data.",
                    list: [
                        "Encryption at rest and in transit",
                        "Key and secrets management",
                        "Data classification and masking",
                        "Privacy‑by‑design practices"
                    ]
                },
                {
                    title: "Threat Detection & Incident Response",
                    description: "Identify and respond to threats quickly.",
                    list: [
                        "Security monitoring and alerting",
                        "Intrusion and anomaly detection",
                        "Incident response planning",
                        "Forensics and root‑cause analysis"
                    ]
                },
                {
                    title: "Compliance & Regulatory Alignment",
                    description: "Meet industry and regional standards.",
                    list: [
                        "ISO, SOC 2, GDPR, HIPAA readiness",
                        "Cloud compliance assessments",
                        "Audit preparation and reporting",
                        "Policy and control implementation"
                    ]
                },
                {
                    title: "Security Automation & Governance",
                    description: "Maintain security at scale.",
                    list: [
                        "Policy‑as‑code and automation",
                        "Continuous compliance monitoring",
                        "Access reviews and governance controls",
                        "Cloud security best practices enforcement"
                    ]
                },
                {
                    title: "Who Is Security & Compliance Best For?",
                    description: "Cloud security and compliance services are ideal for:",
                    list: [
                        "Regulated industries and enterprises",
                        "SaaS and data‑driven platforms",
                        "Businesses handling sensitive data",
                        "Organizations scaling cloud operations"
                    ]
                },
                {
                    title: "Why Solario Tech for Security & Compliance?",
                    description: "Why clients trust our cloud security expertise:",
                    list: [
                        "12+ Years of Cloud Security Experience",
                        "Compliance‑first security frameworks",
                        "Multi‑cloud security expertise",
                        "Proactive risk mitigation approach",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Secure and Comply with Confidence in the Cloud",
                description: "Our cloud security and compliance services help you protect your systems, meet regulations, and scale securely in the cloud.",
                buttons: [
                    { label: "Start Cloud Journey" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
    ],
    "data-analytics": [
        {
            id: "Data Visualization",
            hero: {
                title: "Data Visualization for Clear Insights & Faster Decisions",
                description: "Solario Tech delivers Data Visualization solutions that transform complex data into clear, interactive, and actionable visuals.\nWith 12+ years of data analytics and visualization experience, we help businesses understand trends, identify opportunities, and make confident, data‑driven decisions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Analytics Project" }
                ]
            },
            content: [
                {
                    title: "What is Data Visualization?",
                    description: "Data visualization represents data graphically to make insights easier to understand and act upon.",
                    list: [
                        "Clear representation of complex data",
                        "Faster insight discovery",
                        "Improved decision making",
                        "Better communication of insights"
                    ]
                },
                {
                    title: "Why Data Visualization Matters",
                    description: "Raw data alone is hard to interpret and slow to act on.",
                    list: [
                        "Reveals patterns and trends instantly",
                        "Improves stakeholder understanding",
                        "Reduces analysis time",
                        "Supports data‑driven culture"
                    ]
                },
                {
                    title: "Interactive Charts & Graphs",
                    description: "Visuals designed for exploration and clarity.",
                    list: [
                        "Line, bar, pie, and area charts",
                        "Time‑series and trend visualizations",
                        "Comparative and performance views",
                        "Interactive filters and drill‑downs"
                    ]
                },
                {
                    title: "Advanced Visual Analytics",
                    description: "Go beyond basic charts.",
                    list: [
                        "Heatmaps and correlation visuals",
                        "Geospatial and map‑based analytics",
                        "Multi‑dimensional data views",
                        "Anomaly and outlier visualization"
                    ]
                },
                {
                    title: "Data Storytelling",
                    description: "Turn insights into compelling narratives.",
                    list: [
                        "Insight‑driven visual layouts",
                        "Business‑focused storytelling",
                        "Executive‑friendly summaries",
                        "Contextual data explanations"
                    ]
                },
                {
                    title: "Visualization Tool Integration",
                    description: "Use the right tools for the job.",
                    list: [
                        "BI and analytics tool integration",
                        "Custom visualization libraries",
                        "Embedded analytics in applications",
                        "Cloud‑based visualization platforms"
                    ]
                },
                {
                    title: "Who Is Data Visualization Best For?",
                    description: "Data visualization services are ideal for:",
                    list: [
                        "Business and executive teams",
                        "Product and operations teams",
                        "Data‑driven organizations",
                        "Analytics and reporting platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for Data Visualization?",
                    description: "Why clients trust our visualization expertise:",
                    list: [
                        "12+ Years of Data & Analytics Experience",
                        "Business‑focused visual design",
                        "Interactive and scalable solutions",
                        "Clear, decision‑ready insights",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "See Your Data Clearly",
                description: "Our data visualization services help you turn raw data into clear, actionable insights that drive smarter decisions.",
                buttons: [
                    { label: "Start Analytics Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Business Intelligence",
            hero: {
                title: "Business Intelligence for Informed, Strategic & Data‑Driven Decisions",
                description: "Solario Tech delivers Business Intelligence (BI) solutions that transform raw data into meaningful insights for strategic planning and operational excellence.\nWith 12+ years of data analytics and BI experience, we help organizations gain a single source of truth, monitor performance, and make confident business decisions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Analytics Project" }
                ]
            },
            content: [
                {
                    title: "What is Business Intelligence?",
                    description: "Business Intelligence combines data integration, analytics, and visualization to provide actionable insights for decision‑makers.",
                    list: [
                        "Centralized business data",
                        "Performance and KPI visibility",
                        "Data‑driven decision support",
                        "Improved organizational alignment"
                    ]
                },
                {
                    title: "Why Business Intelligence Matters",
                    description: "Without BI, organizations struggle to turn data into actionable insights.",
                    list: [
                        "Enables faster, better decisions",
                        "Improves operational efficiency",
                        "Aligns teams around shared metrics",
                        "Reveals risks and opportunities early"
                    ]
                },
                {
                    title: "BI Strategy & Roadmap",
                    description: "Build the right BI foundation.",
                    list: [
                        "Business goal and KPI definition",
                        "Data source assessment",
                        "BI architecture planning",
                        "Short‑ and long‑term analytics roadmap"
                    ]
                },
                {
                    title: "Data Integration & Modeling",
                    description: "Prepare data for reliable analysis.",
                    list: [
                        "Data consolidation from multiple sources",
                        "Data modeling and transformation",
                        "Semantic and business‑friendly layers",
                        "High‑quality, trusted datasets"
                    ]
                },
                {
                    title: "KPI & Performance Analytics",
                    description: "Track what matters most.",
                    list: [
                        "Executive and operational KPIs",
                        "Department‑specific metrics",
                        "Trend and variance analysis",
                        "Goal and performance tracking"
                    ]
                },
                {
                    title: "Self‑Service BI Enablement",
                    description: "Empower teams with data access.",
                    list: [
                        "Self‑service dashboards and reports",
                        "Role‑based data access",
                        "User training and adoption support",
                        "Reduced dependency on IT teams"
                    ]
                },
                {
                    title: "BI Tool Implementation",
                    description: "Use the right BI tools for your needs.",
                    list: [
                        "BI platform selection and setup",
                        "Cloud and on‑prem BI solutions",
                        "Embedded analytics",
                        "Scalable and secure BI environments"
                    ]
                },
                {
                    title: "Who Is Business Intelligence Best For?",
                    description: "Business intelligence services are ideal for:",
                    list: [
                        "Executive leadership teams",
                        "Operations and finance teams",
                        "Sales and marketing organizations",
                        "Data‑driven enterprises"
                    ]
                },
                {
                    title: "Why Solario Tech for Business Intelligence?",
                    description: "Why clients trust our BI expertise:",
                    list: [
                        "12+ Years of BI & Analytics Experience",
                        "Business‑first analytics approach",
                        "Scalable and secure BI solutions",
                        "Clear, decision‑ready insights",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Turn Business Data into Strategic Advantage",
                description: "Our business intelligence solutions help you gain clarity, track performance, and make smarter decisions with confidence.",
                buttons: [
                    { label: "Start Analytics Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Predictive Analytics",
            hero: {
                title: "Predictive Analytics for Forecasting, Prevention & Smarter Decisions",
                description: "Solario Tech delivers Predictive Analytics solutions that use historical data, statistical models, and machine learning to forecast outcomes and anticipate future trends.\nWith 12+ years of data science and analytics experience, we help organizations move from reactive reporting to proactive, insight‑driven decision‑making.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Analytics Project" }
                ]
            },
            content: [
                {
                    title: "What is Predictive Analytics?",
                    description: "Predictive analytics uses data, algorithms, and models to identify patterns and predict future events or behaviors.",
                    list: [
                        "Future trend and outcome forecasting",
                        "Proactive decision making",
                        "Risk and opportunity identification",
                        "Data‑driven planning"
                    ]
                },
                {
                    title: "Why Predictive Analytics Matters",
                    description: "Organizations that predict outcomes act faster and stay ahead of competition.",
                    list: [
                        "Reduces uncertainty in decision making",
                        "Improves operational efficiency",
                        "Anticipates risks before they occur",
                        "Enables proactive business strategies"
                    ]
                },
                {
                    title: "Predictive Modeling & Forecasting",
                    description: "Build models that anticipate future outcomes.",
                    list: [
                        "Time‑series forecasting",
                        "Regression and classification models",
                        "Demand and usage prediction",
                        "Trend and seasonality analysis"
                    ]
                },
                {
                    title: "Machine Learning‑Driven Insights",
                    description: "Leverage ML for advanced prediction.",
                    list: [
                        "Supervised and unsupervised models",
                        "Pattern recognition and clustering",
                        "Behavior and anomaly prediction",
                        "Continuous model improvement"
                    ]
                },
                {
                    title: "Risk & Performance Prediction",
                    description: "Identify potential risks and performance gaps early.",
                    list: [
                        "Failure and churn prediction",
                        "Operational risk assessment",
                        "Performance forecasting",
                        "Preventive action insights"
                    ]
                },
                {
                    title: "Predictive Analytics Integration",
                    description: "Embed predictions into business workflows.",
                    list: [
                        "Integration with BI dashboards",
                        "API‑based prediction services",
                        "Automated alerts and recommendations",
                        "Decision‑support systems"
                    ]
                },
                {
                    title: "Who Is Predictive Analytics Best For?",
                    description: "Predictive analytics services are ideal for:",
                    list: [
                        "Sales, marketing, and growth teams",
                        "Operations and supply chain management",
                        "Finance and risk management",
                        "Data‑driven enterprises"
                    ]
                },
                {
                    title: "Why Solario Tech for Predictive Analytics?",
                    description: "Why clients trust our predictive analytics expertise:",
                    list: [
                        "12+ Years of Data Science & Analytics Experience",
                        "Business‑focused predictive models",
                        "Scalable and production‑ready solutions",
                        "Actionable, decision‑ready insights",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Anticipate What’s Next with Predictive Analytics",
                description: "Our predictive analytics solutions help you forecast outcomes, reduce risk, and make smarter decisions before events unfold.",
                buttons: [
                    { label: "Start Analytics Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Data Warehousing",
            hero: {
                title: "Data Warehousing for Trusted, Scalable & Analytics‑Ready Data",
                description: "Solario Tech designs and implements modern Data Warehousing solutions that centralize data from multiple sources into a single, reliable repository.\nWith 12+ years of data engineering and analytics experience, we help organizations build scalable, high‑performance data warehouses that power BI, analytics, and AI initiatives.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Analytics Project" }
                ]
            },
            content: [
                {
                    title: "What is Data Warehousing?",
                    description: "A data warehouse is a centralized system that stores structured and semi‑structured data optimized for reporting, analytics, and decision making.",
                    list: [
                        "Single source of truth for analytics",
                        "Consistent and reliable business data",
                        "Optimized for reporting and BI",
                        "Scalable analytics foundation"
                    ]
                },
                {
                    title: "Why Data Warehousing Matters",
                    description: "Scattered data sources lead to inconsistent reporting and slow insights.",
                    list: [
                        "Eliminates data silos",
                        "Improves data accuracy and consistency",
                        "Enables faster analytics queries",
                        "Supports enterprise‑wide reporting"
                    ]
                },
                {
                    title: "Data Warehouse Architecture Design",
                    description: "Build a warehouse that scales with your data.",
                    list: [
                        "Cloud and hybrid warehouse architectures",
                        "Star and snowflake schema design",
                        "Scalability and performance planning",
                        "Cost‑efficient storage strategies"
                    ]
                },
                {
                    title: "Cloud Data Warehousing",
                    description: "Modern, cloud‑native data platforms.",
                    list: [
                        "Snowflake, BigQuery, Redshift, Azure Synapse",
                        "Elastic compute and storage",
                        "High availability and reliability",
                        "Pay‑as‑you‑go cost models"
                    ]
                },
                {
                    title: "Data Modeling & Optimization",
                    description: "Structure data for analytics performance.",
                    list: [
                        "Fact and dimension modeling",
                        "Business‑friendly data structures",
                        "Query performance optimization",
                        "Data partitioning and indexing"
                    ]
                },
                {
                    title: "Data Integration & Refresh",
                    description: "Keep warehouse data accurate and up to date.",
                    list: [
                        "Batch and incremental data loads",
                        "Near real‑time data updates",
                        "Data validation and quality checks",
                        "Reliable refresh pipelines"
                    ]
                },
                {
                    title: "Security & Access Control",
                    description: "Protect sensitive data in the warehouse.",
                    list: [
                        "Role‑based access control",
                        "Data masking and encryption",
                        "Audit logs and compliance readiness",
                        "Secure multi‑team access"
                    ]
                },
                {
                    title: "Who Is Data Warehousing Best For?",
                    description: "Data warehousing services are ideal for:",
                    list: [
                        "Organizations with multiple data sources",
                        "BI and analytics‑driven teams",
                        "Growing data volumes and complexity",
                        "Enterprises building data platforms"
                    ]
                },
                {
                    title: "Why Solario Tech for Data Warehousing?",
                    description: "Why clients trust our data warehousing expertise:",
                    list: [
                        "12+ Years of Data Engineering Experience",
                        "Modern cloud‑first warehouse designs",
                        "Performance‑optimized data models",
                        "Analytics‑ready implementations",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build a Strong Foundation for Analytics",
                description: "Our data warehousing services help you centralize, secure, and scale your data for reliable analytics and business intelligence.",
                buttons: [
                    { label: "Start Analytics Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Dashboard Development",
            hero: {
                title: "Dashboard Development for Real‑Time Visibility & Actionable Insights",
                description: "Solario Tech designs and builds custom Dashboards that provide real‑time visibility into key metrics, performance indicators, and business trends.\nWith 12+ years of data analytics and UI experience, we help organizations monitor performance, identify issues early, and make faster, data‑driven decisions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Analytics Project" }
                ]
            },
            content: [
                {
                    title: "What is Dashboard Development?",
                    description: "Dashboard development involves creating interactive, visual interfaces that display key data and KPIs in a clear, actionable format.",
                    list: [
                        "Real‑time performance visibility",
                        "Centralized view of critical metrics",
                        "Faster insight and response",
                        "Improved decision making"
                    ]
                },
                {
                    title: "Why Dashboards Matter",
                    description: "Static reports are slow and often outdated.",
                    list: [
                        "Provides live, up‑to‑date insights",
                        "Reduces manual reporting effort",
                        "Improves stakeholder alignment",
                        "Supports proactive decision making"
                    ]
                },
                {
                    title: "Custom KPI & Metric Design",
                    description: "Track what matters most to your business.",
                    list: [
                        "Business‑specific KPIs",
                        "Operational and strategic metrics",
                        "Department‑level performance views",
                        "Goal and target tracking"
                    ]
                },
                {
                    title: "Interactive & Real‑Time Dashboards",
                    description: "Dashboards built for exploration and action.",
                    list: [
                        "Real‑time and near real‑time data updates",
                        "Interactive filters and drill‑downs",
                        "Cross‑metric comparisons",
                        "User‑friendly navigation"
                    ]
                },
                {
                    title: "Role‑Based Dashboard Design",
                    description: "Right insights for the right users.",
                    list: [
                        "Executive dashboards",
                        "Operational and team dashboards",
                        "Role‑based access control",
                        "Personalized views"
                    ]
                },
                {
                    title: "Dashboard Tool & Platform Integration",
                    description: "Built on the tools you use.",
                    list: [
                        "BI tools and analytics platforms",
                        "Embedded dashboards in applications",
                        "Cloud‑based dashboard solutions",
                        "Secure data connectivity"
                    ]
                },
                {
                    title: "Performance & Usability Optimization",
                    description: "Fast, reliable, and intuitive dashboards.",
                    list: [
                        "Optimized data queries",
                        "High‑performance visual rendering",
                        "Responsive design",
                        "Usability and adoption focus"
                    ]
                },
                {
                    title: "Who Is Dashboard Development Best For?",
                    description: "Dashboard development services are ideal for:",
                    list: [
                        "Executives and leadership teams",
                        "Operations and performance teams",
                        "Product and growth teams",
                        "Data‑driven organizations"
                    ]
                },
                {
                    title: "Why Solario Tech for Dashboard Development?",
                    description: "Why clients trust our dashboard expertise:",
                    list: [
                        "12+ Years of Analytics & Visualization Experience",
                        "Business‑focused dashboard design",
                        "Real‑time and scalable solutions",
                        "High adoption and usability focus",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Monitor What Matters with Powerful Dashboards",
                description: "Our dashboard development services help you gain real‑time visibility into performance and turn data into daily action.",
                buttons: [
                    { label: "Start Analytics Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "ETL Processes",
            hero: {
                title: "ETL Processes for Reliable, Scalable & Analytics‑Ready Data Pipelines",
                description: "Solario Tech designs and implements robust ETL (Extract, Transform, Load) processes to move data reliably from multiple sources into analytics‑ready systems.\nWith 12+ years of data engineering experience, we help organizations build automated, scalable, and high‑quality data pipelines that power BI, analytics, and AI initiatives.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Analytics Project" }
                ]
            },
            content: [
                {
                    title: "What Are ETL Processes?",
                    description: "ETL processes extract data from source systems, transform it into a usable format, and load it into data warehouses or analytics platforms.",
                    list: [
                        "Reliable data movement",
                        "Clean and structured datasets",
                        "Analytics‑ready data pipelines",
                        "Consistent data processing"
                    ]
                },
                {
                    title: "Why ETL Matters",
                    description: "Poor data pipelines lead to inaccurate reporting and delayed insights.",
                    list: [
                        "Ensures data accuracy and consistency",
                        "Eliminates manual data handling",
                        "Supports timely analytics and reporting",
                        "Scales with growing data volumes"
                    ]
                },
                {
                    title: "Data Extraction",
                    description: "Collect data from diverse sources.",
                    list: [
                        "Databases, APIs, and SaaS platforms",
                        "Structured and semi‑structured data",
                        "Batch and near real‑time extraction",
                        "Reliable source connectivity"
                    ]
                },
                {
                    title: "Data Transformation",
                    description: "Prepare data for analytics and reporting.",
                    list: [
                        "Data cleansing and validation",
                        "Normalization and enrichment",
                        "Business rule application",
                        "Schema alignment and mapping"
                    ]
                },
                {
                    title: "Data Loading & Orchestration",
                    description: "Deliver transformed data to target systems.",
                    list: [
                        "Data warehouse and data lake loading",
                        "Incremental and full load strategies",
                        "Workflow orchestration and scheduling",
                        "Failure handling and retries"
                    ]
                },
                {
                    title: "ETL Automation & Monitoring",
                    description: "Operate pipelines reliably at scale.",
                    list: [
                        "Automated pipeline execution",
                        "Pipeline health monitoring",
                        "Error detection and alerting",
                        "Performance and SLA tracking"
                    ]
                },
                {
                    title: "Modern ELT & Cloud Pipelines",
                    description: "Cloud‑native data processing approaches.",
                    list: [
                        "ELT patterns using cloud warehouses",
                        "Scalable cloud data pipelines",
                        "Cost‑efficient processing",
                        "Modern data stack integration"
                    ]
                },
                {
                    title: "Who Are ETL Processes Best For?",
                    description: "ETL services are ideal for:",
                    list: [
                        "Organizations with multiple data sources",
                        "BI and analytics platforms",
                        "Growing data volumes",
                        "Enterprises building data foundations"
                    ]
                },
                {
                    title: "Why Solario Tech for ETL?",
                    description: "Why clients trust our ETL expertise:",
                    list: [
                        "12+ Years of Data Engineering Experience",
                        "Scalable and automated pipelines",
                        "High data quality standards",
                        "Cloud‑ and warehouse‑ready solutions",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Build Reliable Data Pipelines with ETL",
                description: "Our ETL process services help you move, transform, and prepare data reliably—so analytics teams always work with trusted data.",
                buttons: [
                    { label: "Start Analytics Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Big Data Solutions",
            hero: {
                title: "Big Data Solutions for High‑Volume, High‑Velocity & High‑Value Data",
                description: "Solario Tech delivers scalable Big Data Solutions to help organizations collect, process, and analyze massive volumes of structured and unstructured data.\nWith 12+ years of data engineering and analytics experience, we enable businesses to unlock insights from big data ecosystems and support advanced analytics, AI, and real‑time decision making.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Analytics Project" }
                ]
            },
            content: [
                {
                    title: "What Are Big Data Solutions?",
                    description: "Big data solutions manage and analyze extremely large, fast‑moving, and diverse datasets that traditional systems cannot handle.",
                    list: [
                        "High‑volume and high‑velocity data processing",
                        "Scalable and distributed architectures",
                        "Real‑time and batch analytics",
                        "Advanced insight extraction"
                    ]
                },
                {
                    title: "Why Big Data Matters",
                    description: "Modern businesses generate more data than ever before.",
                    list: [
                        "Handles massive data growth efficiently",
                        "Enables real‑time insights",
                        "Supports advanced analytics and AI",
                        "Drives competitive advantage"
                    ]
                },
                {
                    title: "Big Data Architecture Design",
                    description: "Design platforms built for scale and performance.",
                    list: [
                        "Distributed data processing architectures",
                        "Batch and streaming data pipelines",
                        "Fault‑tolerant and scalable systems",
                        "Cost‑efficient storage strategies"
                    ]
                },
                {
                    title: "Data Lakes & Large‑Scale Storage",
                    description: "Store and manage diverse data at scale.",
                    list: [
                        "Cloud‑based data lakes",
                        "Structured, semi‑structured, and unstructured data",
                        "Schema‑on‑read approaches",
                        "High‑durability and low‑cost storage"
                    ]
                },
                {
                    title: "Batch & Stream Processing",
                    description: "Process data in real time and at scale.",
                    list: [
                        "Real‑time stream processing",
                        "Large‑scale batch analytics",
                        "Event‑driven data pipelines",
                        "Low‑latency processing"
                    ]
                },
                {
                    title: "Big Data Analytics & AI Enablement",
                    description: "Turn big data into intelligence.",
                    list: [
                        "Advanced analytics on big data",
                        "Machine learning and AI integration",
                        "Pattern detection and trend analysis",
                        "Predictive and prescriptive insights"
                    ]
                },
                {
                    title: "Security & Governance at Scale",
                    description: "Protect and govern large data ecosystems.",
                    list: [
                        "Data access control and encryption",
                        "Audit logging and monitoring",
                        "Data governance frameworks",
                        "Compliance‑ready architectures"
                    ]
                },
                {
                    title: "Who Are Big Data Solutions Best For?",
                    description: "Big data services are ideal for:",
                    list: [
                        "Data‑intensive organizations",
                        "IoT and event‑driven platforms",
                        "AI and machine learning initiatives",
                        "Enterprises with massive data growth"
                    ]
                },
                {
                    title: "Why Solario Tech for Big Data?",
                    description: "Why clients trust our big data expertise:",
                    list: [
                        "12+ Years of Big Data & Analytics Experience",
                        "Scalable cloud‑native architectures",
                        "Real‑time and batch processing expertise",
                        "Analytics‑ and AI‑ready platforms",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Unlock the Power of Big Data",
                description: "Our big data solutions help you process massive datasets, gain real‑time insights, and power advanced analytics at scale.",
                buttons: [
                    { label: "Start Analytics Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
        {
            id: "Custom Reporting",
            hero: {
                title: "Custom Reporting for Precise, Actionable & Business‑Focused Insights",
                description: "Solario Tech delivers Custom Reporting solutions tailored to your business goals, data sources, and decision‑making needs.\nWith 12+ years of analytics and reporting experience, we help organizations move beyond generic reports to highly relevant, accurate, and insight‑driven reporting that supports confident decisions.",
                buttons: [
                    { label: "Book a Free Consultation" },
                    { label: "Start Analytics Project" }
                ]
            },
            content: [
                {
                    title: "What is Custom Reporting?",
                    description: "Custom reporting delivers reports designed specifically for your business metrics, workflows, and stakeholders.",
                    list: [
                        "Business‑specific metrics and KPIs",
                        "Accurate and relevant insights",
                        "Flexible report formats",
                        "Decision‑ready information"
                    ]
                },
                {
                    title: "Why Custom Reporting Matters",
                    description: "Standard reports often fail to answer real business questions.",
                    list: [
                        "Focuses on what truly matters to your business",
                        "Eliminates irrelevant or noisy data",
                        "Improves clarity and decision speed",
                        "Supports strategic and operational goals"
                    ]
                },
                {
                    title: "Requirements‑Driven Report Design",
                    description: "Reports aligned with business needs.",
                    list: [
                        "Stakeholder and requirement analysis",
                        "KPI and metric definition",
                        "Data source identification",
                        "Report layout and format planning"
                    ]
                },
                {
                    title: "Operational & Executive Reporting",
                    description: "Right reports for every level of the organization.",
                    list: [
                        "Executive summary and board reports",
                        "Operational and team‑level reports",
                        "Performance and compliance reporting",
                        "Daily, weekly, and monthly reporting"
                    ]
                },
                {
                    title: "Automated & Scheduled Reporting",
                    description: "Reliable reports delivered on time.",
                    list: [
                        "Automated report generation",
                        "Scheduled delivery via email or portals",
                        "Real‑time and near real‑time reports",
                        "Reduced manual reporting effort"
                    ]
                },
                {
                    title: "Multi‑Source & Cross‑Platform Reporting",
                    description: "Unified reporting across systems.",
                    list: [
                        "Reports combining multiple data sources",
                        "Cross‑department and cross‑system insights",
                        "Consistent metrics and definitions",
                        "Single source of truth reporting"
                    ]
                },
                {
                    title: "Export, Sharing & Access Control",
                    description: "Secure and flexible report access.",
                    list: [
                        "PDF, Excel, and web‑based reports",
                        "Role‑based access control",
                        "Secure sharing and distribution",
                        "Audit‑ready reporting"
                    ]
                },
                {
                    title: "Who Is Custom Reporting Best For?",
                    description: "Custom reporting services are ideal for:",
                    list: [
                        "Executives and leadership teams",
                        "Finance, operations, and compliance teams",
                        "Data‑driven organizations",
                        "Businesses with complex reporting needs"
                    ]
                },
                {
                    title: "Why Solario Tech for Custom Reporting?",
                    description: "Why clients trust our reporting expertise:",
                    list: [
                        "12+ Years of Analytics & Reporting Experience",
                        "Business‑first report design",
                        "Accurate, reliable, and automated reports",
                        "Secure and scalable reporting solutions",
                        "Startup‑friendly and enterprise‑ready delivery"
                    ]
                }
            ],
            cta: {
                title: "Get Reports That Actually Drive Decisions",
                description: "Our custom reporting services help you get the right insights, in the right format, at the right time—so every decision is backed by data.",
                buttons: [
                    { label: "Start Analytics Project" },
                    { label: "Book a Free Consultation" }
                ]
            }
        },
    ]
};
