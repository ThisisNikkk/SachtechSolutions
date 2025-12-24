import { useState } from "react";
import { Smartphone, Monitor, ComputerIcon, Wrench, Search, Code, ShoppingCart, LayoutGrid, Mail, Briefcase, Router, Cloud, BarChart, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import modernOffice from "@/assets/modern-office.jpg";
import teamWorking from "@/assets/team-working.jpg";
interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  featured: boolean;
  detailedDescription: string;
  includes: string[];
  expertise: { title: string; description: string }[];
  benefits: string[];
}

const ServicesComponent = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Smartphone,
      title: "iOS App Development",
      description: "We build beautiful and performant iOS applications for iPhone and iPad.",
      featured: false,
      detailedDescription: "Our iOS development team creates stunning, high-performance applications that leverage the full potential of Apple's ecosystem. We focus on delivering seamless user experiences with cutting-edge Swift and SwiftUI technologies.",
      includes: ["Native Swift Development", "SwiftUI Integration", "App Store Optimization", "Push Notifications", "In-App Purchases", "Core Data Integration", "ARKit Implementation", "HealthKit Integration"],
      expertise: [
        { title: "UI/UX Design", description: "Creating intuitive and visually appealing interfaces that follow Apple's Human Interface Guidelines." },
        { title: "Performance Optimization", description: "Ensuring fast load times and smooth animations for the best user experience." },
        { title: "Security Implementation", description: "Implementing robust security measures to protect user data." },
        { title: "API Integration", description: "Seamlessly connecting your app with backend services and third-party APIs." },
        { title: "Testing & QA", description: "Comprehensive testing across all iOS devices and versions." },
        { title: "App Store Launch", description: "Complete support for App Store submission and approval process." },
      ],
      benefits: ["Reach millions of iOS users worldwide", "Leverage Apple's powerful ecosystem", "Ensure consistent performance across devices", "Access to premium user demographic"],
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "We create high-quality Android applications for a wide range of devices.",
      featured: true,
      detailedDescription: "Our Android development expertise spans across the entire Android ecosystem. We build scalable, feature-rich applications using Kotlin and Java that work flawlessly across thousands of device configurations.",
      includes: ["Kotlin Development", "Java Development", "Material Design", "Google Play Services", "Firebase Integration", "Room Database", "Jetpack Compose", "Android Wear Support"],
      expertise: [
        { title: "Material Design", description: "Implementing Google's design language for consistent, beautiful UIs." },
        { title: "Cross-Device Support", description: "Optimizing for phones, tablets, and various screen sizes." },
        { title: "Background Services", description: "Efficient background processing and notification handling." },
        { title: "Offline Functionality", description: "Building apps that work seamlessly without internet connection." },
        { title: "Performance Tuning", description: "Optimizing battery usage and app responsiveness." },
        { title: "Play Store Deployment", description: "Full support for Google Play Store submission and updates." },
      ],
      benefits: ["Access to the largest mobile user base", "Flexible customization options", "Integration with Google services", "Cost-effective development approach"],
    },
    {
      icon: Monitor,
      title: "Window App Development",
      description: "We develop robust and scalable applications for the Windows platform.",
      featured: false,
      detailedDescription: "We specialize in creating powerful Windows desktop applications using the latest Microsoft technologies. Our solutions are designed for enterprise-grade performance and reliability.",
      includes: [".NET Development", "WPF Applications", "UWP Apps", "Windows Forms", "Azure Integration", "SQL Server", "MVVM Architecture", "Windows Services"],
      expertise: [
        { title: "Enterprise Solutions", description: "Building robust applications for business-critical operations." },
        { title: "System Integration", description: "Connecting with existing enterprise systems and databases." },
        { title: "Custom UI Development", description: "Creating modern, responsive Windows interfaces." },
        { title: "Data Management", description: "Efficient handling of large datasets and complex operations." },
        { title: "Security Compliance", description: "Meeting enterprise security standards and regulations." },
        { title: "Deployment Strategy", description: "Streamlined deployment across enterprise networks." },
      ],
      benefits: ["Leverage existing Windows infrastructure", "Enterprise-grade security", "Seamless Microsoft ecosystem integration", "Powerful desktop computing capabilities"],
    },
    {
      icon: Monitor,
      title: "Artificial Intelligence",
      description: "We develop intelligent solutions leveraging AI and machine learning to solve complex business challenges.",
      featured: false,
      detailedDescription: "Our AI solutions harness the power of machine learning, deep learning, and natural language processing to transform your business operations and decision-making processes.",
      includes: ["Machine Learning", "Deep Learning", "NLP Solutions", "Computer Vision", "Predictive Analytics", "Chatbots", "Recommendation Systems", "AI Model Training"],
      expertise: [
        { title: "Custom ML Models", description: "Developing tailored machine learning models for your specific needs." },
        { title: "Data Analysis", description: "Extracting meaningful insights from complex datasets." },
        { title: "Process Automation", description: "Automating repetitive tasks with intelligent systems." },
        { title: "Predictive Modeling", description: "Forecasting trends and outcomes with high accuracy." },
        { title: "Natural Language", description: "Building systems that understand and process human language." },
        { title: "AI Integration", description: "Seamlessly integrating AI capabilities into existing systems." },
      ],
      benefits: ["Automate complex decision-making", "Gain competitive advantage through data insights", "Reduce operational costs", "Enhance customer experiences"],
    },
    {
      icon: LayoutGrid,
      title: "Automation",
      description: "We implement automation solutions to streamline your business processes and improve efficiency.",
      featured: false,
      detailedDescription: "Our automation services help businesses eliminate manual tasks, reduce errors, and increase productivity through intelligent workflow automation and robotic process automation.",
      includes: ["RPA Solutions", "Workflow Automation", "Process Optimization", "Integration APIs", "Scheduled Tasks", "Data Processing", "Report Generation", "Quality Assurance"],
      expertise: [
        { title: "Process Analysis", description: "Identifying automation opportunities in your workflows." },
        { title: "RPA Implementation", description: "Deploying robotic process automation for repetitive tasks." },
        { title: "Workflow Design", description: "Creating efficient automated workflows." },
        { title: "System Integration", description: "Connecting disparate systems for seamless data flow." },
        { title: "Monitoring & Alerts", description: "Real-time monitoring and intelligent alerting systems." },
        { title: "Continuous Improvement", description: "Ongoing optimization of automated processes." },
      ],
      benefits: ["Reduce operational costs by up to 60%", "Eliminate human errors", "24/7 process execution", "Free up staff for higher-value tasks"],
    },
    {
      icon: ComputerIcon,
      title: "Open GL",
      description: "We leverage OpenGL to create high-performance 2D and 3D graphics applications.",
      featured: false,
      detailedDescription: "Our OpenGL expertise enables us to create stunning visual experiences, from interactive 3D applications to high-performance graphics engines for games and simulations.",
      includes: ["3D Rendering", "Shader Programming", "Real-time Graphics", "Game Development", "CAD Applications", "Simulation Tools", "VR Development", "Graphics Optimization"],
      expertise: [
        { title: "Shader Development", description: "Creating custom vertex and fragment shaders." },
        { title: "3D Modeling Integration", description: "Importing and rendering complex 3D models." },
        { title: "Performance Optimization", description: "Maximizing frame rates and visual quality." },
        { title: "Cross-Platform", description: "Developing graphics that work across platforms." },
        { title: "Real-time Rendering", description: "Building systems for live graphics processing." },
        { title: "Visual Effects", description: "Creating stunning particle systems and effects." },
      ],
      benefits: ["Hardware-accelerated graphics", "Cross-platform compatibility", "Industry-standard technology", "Unlimited creative possibilities"],
    },
    {
      icon: Wrench,
      title: "App Maintenance",
      description: "We provide ongoing maintenance and support to keep your applications running smoothly.",
      featured: true,
      detailedDescription: "Our comprehensive app maintenance services ensure your applications remain secure, up-to-date, and performing at their best with proactive monitoring and rapid issue resolution.",
      includes: ["Bug Fixes", "Security Updates", "Performance Monitoring", "Feature Updates", "Compatibility Updates", "Database Maintenance", "Backup Management", "24/7 Support"],
      expertise: [
        { title: "Proactive Monitoring", description: "Continuous monitoring to identify issues before they impact users." },
        { title: "Rapid Response", description: "Quick turnaround for critical bug fixes and issues." },
        { title: "Version Updates", description: "Keeping your app compatible with latest OS versions." },
        { title: "Security Patches", description: "Immediate deployment of security fixes." },
        { title: "Performance Tuning", description: "Regular optimization for best performance." },
        { title: "User Feedback", description: "Implementing improvements based on user feedback." },
      ],
      benefits: ["Minimize downtime and disruptions", "Protect against security vulnerabilities", "Maintain user satisfaction", "Extend application lifespan"],
    },
    {
      icon: Search,
      title: "SEO",
      description: "We help improve your website's visibility on search engines to attract more customers.",
      featured: false,
      detailedDescription: "Our SEO strategies are designed to boost your online visibility, drive organic traffic, and improve your search engine rankings through proven techniques and continuous optimization.",
      includes: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Content Strategy", "Local SEO", "Analytics & Reporting", "Competitor Analysis"],
      expertise: [
        { title: "Keyword Strategy", description: "Identifying high-value keywords for your business." },
        { title: "Content Optimization", description: "Optimizing content for search engines and users." },
        { title: "Technical Audit", description: "Comprehensive technical SEO analysis and fixes." },
        { title: "Link Building", description: "Building high-quality backlinks to boost authority." },
        { title: "Performance Tracking", description: "Detailed analytics and progress reporting." },
        { title: "Algorithm Updates", description: "Staying ahead of search engine algorithm changes." },
      ],
      benefits: ["Increase organic traffic", "Improve brand visibility", "Generate quality leads", "Long-term sustainable growth"],
    },
    {
      icon: Code,
      title: "Php Development",
      description: "We build dynamic and robust web applications using PHP.",
      featured: false,
      detailedDescription: "Our PHP development services deliver scalable, secure, and high-performance web applications using modern frameworks and best practices for enterprise-grade solutions.",
      includes: ["Laravel Development", "WordPress Custom", "API Development", "E-commerce Solutions", "CMS Development", "Database Design", "Security Implementation", "Performance Optimization"],
      expertise: [
        { title: "Framework Expertise", description: "Proficiency in Laravel, Symfony, and CodeIgniter." },
        { title: "Custom Solutions", description: "Building tailored applications for unique needs." },
        { title: "Database Design", description: "Efficient MySQL and PostgreSQL database architecture." },
        { title: "API Development", description: "RESTful and GraphQL API implementation." },
        { title: "Security Best Practices", description: "Implementing secure coding standards." },
        { title: "Scalable Architecture", description: "Designing systems that grow with your business." },
      ],
      benefits: ["Cost-effective development", "Large developer community", "Extensive library ecosystem", "Proven technology for web applications"],
    },
    {
      icon: Code,
      title: "Java Development",
      description: "We create powerful and scalable enterprise applications using Java.",
      featured: true,
      detailedDescription: "Our Java development team builds enterprise-grade applications that are secure, scalable, and maintainable, leveraging the full power of the Java ecosystem.",
      includes: ["Spring Boot", "Microservices", "Enterprise Apps", "API Development", "Cloud Integration", "Database Solutions", "Security Implementation", "DevOps Integration"],
      expertise: [
        { title: "Spring Ecosystem", description: "Expert implementation of Spring Boot and Spring Cloud." },
        { title: "Microservices", description: "Designing and building distributed systems." },
        { title: "Enterprise Integration", description: "Connecting with existing enterprise systems." },
        { title: "Cloud Native", description: "Building applications for cloud deployment." },
        { title: "Performance", description: "Optimizing for high-throughput operations." },
        { title: "Security", description: "Implementing enterprise security standards." },
      ],
      benefits: ["Enterprise-grade reliability", "Platform independence", "Strong security features", "Massive ecosystem and community support"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description: "We build feature-rich and user-friendly e-commerce solutions.",
      featured: false,
      detailedDescription: "We create comprehensive e-commerce platforms that drive sales, from custom-built solutions to platform-based stores, with seamless payment integration and inventory management.",
      includes: ["Custom Storefronts", "Payment Integration", "Inventory Management", "Order Processing", "Customer Analytics", "Mobile Commerce", "Multi-vendor Support", "Subscription Systems"],
      expertise: [
        { title: "Platform Selection", description: "Choosing the right e-commerce platform for your needs." },
        { title: "Custom Development", description: "Building unique features and functionalities." },
        { title: "Payment Systems", description: "Integrating secure payment gateways." },
        { title: "User Experience", description: "Creating conversion-optimized shopping experiences." },
        { title: "Analytics Integration", description: "Setting up comprehensive sales tracking." },
        { title: "Scale Planning", description: "Preparing your store for growth." },
      ],
      benefits: ["24/7 sales capability", "Global market reach", "Reduced operational costs", "Data-driven business insights"],
    },
    {
      icon: Wrench,
      title: "Software Maintenance",
      description: "We offer comprehensive software maintenance services to ensure your software remains up-to-date and bug-free.",
      featured: true,
      detailedDescription: "Our software maintenance services provide ongoing support, updates, and improvements to keep your software running smoothly and securely throughout its lifecycle.",
      includes: ["Bug Fixing", "Feature Updates", "Security Patches", "Performance Optimization", "Documentation", "Code Refactoring", "Dependency Updates", "Technical Support"],
      expertise: [
        { title: "Issue Resolution", description: "Quick identification and resolution of software issues." },
        { title: "Preventive Maintenance", description: "Proactive measures to prevent future problems." },
        { title: "Code Quality", description: "Improving code quality through refactoring." },
        { title: "Security Updates", description: "Keeping software protected against vulnerabilities." },
        { title: "Performance Monitoring", description: "Continuous monitoring and optimization." },
        { title: "Version Control", description: "Managing software versions and releases." },
      ],
      benefits: ["Minimize system downtime", "Extend software lifespan", "Reduce total cost of ownership", "Ensure compliance and security"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "We create and manage effective email marketing campaigns to engage your audience.",
      featured: false,
      detailedDescription: "Our email marketing services help you connect with your audience through targeted campaigns, automation, and analytics that drive engagement and conversions.",
      includes: ["Campaign Design", "List Management", "Automation Workflows", "A/B Testing", "Analytics & Reporting", "Template Design", "Deliverability Optimization", "Personalization"],
      expertise: [
        { title: "Strategy Development", description: "Creating comprehensive email marketing strategies." },
        { title: "Content Creation", description: "Writing compelling email copy that converts." },
        { title: "Automation Setup", description: "Building automated email sequences." },
        { title: "Segmentation", description: "Targeting the right audience with personalized content." },
        { title: "Performance Analysis", description: "Tracking and optimizing campaign performance." },
        { title: "Compliance", description: "Ensuring GDPR and CAN-SPAM compliance." },
      ],
      benefits: ["High ROI marketing channel", "Direct customer communication", "Measurable results", "Personalized customer journeys"],
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "We provide regular website maintenance to ensure it's secure, up-to-date, and performing optimally.",
      featured: true,
      detailedDescription: "Our website maintenance services ensure your site remains secure, fast, and functional with regular updates, monitoring, and optimization.",
      includes: ["Security Updates", "Content Updates", "Performance Optimization", "Backup Management", "Uptime Monitoring", "Bug Fixes", "Plugin Updates", "SSL Management"],
      expertise: [
        { title: "Security Monitoring", description: "Continuous scanning for vulnerabilities and threats." },
        { title: "Speed Optimization", description: "Improving load times and performance." },
        { title: "Content Management", description: "Regular content updates and management." },
        { title: "Backup Solutions", description: "Automated backups with quick recovery." },
        { title: "Analytics Review", description: "Regular performance and traffic analysis." },
        { title: "Emergency Support", description: "Rapid response for critical issues." },
      ],
      benefits: ["Protect your online presence", "Maintain search rankings", "Ensure visitor security", "Prevent costly downtime"],
    },
    {
      icon: Briefcase,
      title: "IT Strategy and Consulting",
      description: "We offer strategic IT consulting to help you align your technology with your business goals.",
      featured: false,
      detailedDescription: "Our IT consulting services help organizations leverage technology effectively, from strategic planning to implementation, ensuring technology investments deliver maximum business value.",
      includes: ["Technology Assessment", "Digital Transformation", "Architecture Design", "Vendor Selection", "Project Planning", "Risk Assessment", "Budget Planning", "Change Management"],
      expertise: [
        { title: "Strategic Planning", description: "Aligning technology with business objectives." },
        { title: "Architecture Review", description: "Evaluating and improving IT architecture." },
        { title: "Digital Transformation", description: "Guiding organizations through digital change." },
        { title: "Technology Selection", description: "Recommending the right solutions for your needs." },
        { title: "Implementation Support", description: "Supporting successful technology rollouts." },
        { title: "ROI Analysis", description: "Measuring and maximizing technology investments." },
      ],
      benefits: ["Make informed technology decisions", "Reduce IT costs", "Accelerate digital transformation", "Gain competitive advantage"],
    },
    {
      icon: Router,
      title: "Internet of Things",
      description: "We build and connect smart devices to the internet to create innovative IoT solutions.",
      featured: false,
      detailedDescription: "Our IoT solutions connect physical devices to the digital world, enabling real-time monitoring, automation, and data-driven insights for smart operations.",
      includes: ["Sensor Integration", "Device Management", "Data Analytics", "Cloud Connectivity", "Real-time Monitoring", "Predictive Maintenance", "Edge Computing", "Security Protocols"],
      expertise: [
        { title: "Hardware Integration", description: "Connecting sensors and devices seamlessly." },
        { title: "Data Processing", description: "Real-time processing of IoT data streams." },
        { title: "Cloud Platforms", description: "Building on AWS IoT, Azure IoT, and Google Cloud." },
        { title: "Security", description: "Implementing robust IoT security measures." },
        { title: "Scalability", description: "Designing systems that scale to millions of devices." },
        { title: "Analytics", description: "Extracting insights from IoT data." },
      ],
      benefits: ["Enable smart operations", "Reduce operational costs", "Improve decision-making", "Create new business models"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "We provide scalable and secure cloud solutions tailored to your business needs.",
      featured: false,
      detailedDescription: "Our cloud solutions help businesses leverage the power of cloud computing for improved scalability, flexibility, and cost-efficiency across all operations.",
      includes: ["Cloud Migration", "AWS/Azure/GCP", "Cloud Architecture", "DevOps Services", "Container Orchestration", "Serverless Solutions", "Cost Optimization", "Security & Compliance"],
      expertise: [
        { title: "Migration Strategy", description: "Planning and executing cloud migrations." },
        { title: "Multi-Cloud", description: "Managing resources across cloud providers." },
        { title: "Infrastructure as Code", description: "Automating cloud infrastructure deployment." },
        { title: "Kubernetes", description: "Container orchestration and management." },
        { title: "Cost Management", description: "Optimizing cloud spending and resources." },
        { title: "Security", description: "Implementing cloud security best practices." },
      ],
      benefits: ["Scale on demand", "Reduce infrastructure costs", "Improve disaster recovery", "Enable remote work"],
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "We help you extract valuable insights from your data to drive informed decisions.",
      featured: false,
      detailedDescription: "Our data analytics services transform raw data into actionable insights, enabling data-driven decision-making across your organization.",
      includes: ["Data Visualization", "Business Intelligence", "Predictive Analytics", "Data Warehousing", "Dashboard Development", "ETL Processes", "Big Data Solutions", "Custom Reporting"],
      expertise: [
        { title: "Data Strategy", description: "Developing comprehensive data strategies." },
        { title: "Visualization", description: "Creating intuitive dashboards and reports." },
        { title: "Predictive Models", description: "Building models to forecast trends." },
        { title: "Data Integration", description: "Consolidating data from multiple sources." },
        { title: "Real-time Analytics", description: "Enabling real-time data analysis." },
        { title: "Data Governance", description: "Ensuring data quality and compliance." },
      ],
      benefits: ["Make data-driven decisions", "Identify growth opportunities", "Optimize operations", "Gain competitive insights"],
    },
  ];

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-6 mb-12">
          <div className="space-y-4 text-center w-full">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-foreground font-montserrat">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-poppins">
              Services we provide to
              <br />
              <span className="text-primary">Elevate Your Business</span>
            </h2>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="p-8 rounded-3xl shadow-sm bg-background transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins font-medium">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-montserrat">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <ScrollArea className="max-h-[90vh]">
            <div className="p-6 lg:p-8">
              {/* Header */}
              <h2 className="text-2xl lg:text-3xl font-bold font-poppins mb-6">
                About <span className="text-primary">{selectedService?.title}</span>
              </h2>

              {/* Numbered Paragraphs */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground font-bold text-xs">1</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedService?.detailedDescription}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground font-bold text-xs">2</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our team of experts brings years of experience and proven methodologies to deliver exceptional results. We focus on understanding your unique requirements and crafting tailored solutions that drive real business value.
                  </p>
                </div>
              </div>

              {/* Services Include */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 font-poppins italic">Services Include:</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Our comprehensive {selectedService?.title.toLowerCase()} services cover all aspects of development and maintenance. We ensure quality delivery with attention to detail and industry best practices.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2">
                  {selectedService?.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section - 3 images side by side */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={teamCollaboration} 
                    alt="Team collaboration" 
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={modernOffice} 
                    alt="Modern office" 
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={teamWorking} 
                    alt="Team working" 
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>

              {/* Our Expertise */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 font-poppins">
                  Our Expertise In <span className="text-primary">{selectedService?.title}</span>
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  We bring years of experience and proven methodologies to deliver exceptional results. Our approach combines technical excellence with creative problem-solving.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedService?.expertise.map((item, index) => (
                    <div key={index} className="p-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                        <span className="text-primary-foreground font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Benefits */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 font-poppins italic">Service benefits:</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Partnering with us for {selectedService?.title.toLowerCase()} brings numerous advantages to your business. We are committed to delivering solutions that exceed expectations.
                </p>
                <div className="space-y-3">
                  {selectedService?.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground font-bold text-xs">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Ticker */}
              <div className="bg-primary rounded-full py-3 px-6 overflow-hidden">
                <div className="flex items-center justify-center gap-6 text-primary-foreground font-semibold text-sm">
                  <span>✦ Application Design</span>
                  <span>✦ UX/UI Design</span>
                  <span>✦ {selectedService?.title}</span>
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesComponent;
