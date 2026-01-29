export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "UI/UX" | "Development" | "Marketing";
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-web-development-2025",
    title: "The Future of Web Development: Trends To Watch in 2025",
    excerpt: "Explore the emerging technologies and methodologies that will shape web development in the coming year.",
    content: "The web development landscape is constantly evolving...",
    category: "Development",
    date: "March 8, 2025",
    author: {
      name: "Roheel Muhammad",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    featured: true
  },
  {
    id: "best-practices-user-friendly-mobile-app",
    title: "Best Practices For Designing a User-Friendly Mobile App",
    excerpt: "Learn the key principles for creating intuitive and engaging mobile applications.",
    content: "Mobile app design requires careful consideration...",
    category: "UI/UX",
    date: "June 21, 2024",
    author: {
      name: "Yahya Moin",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
  },
  {
    id: "increase-engagement-social-media",
    title: "7 tips to increase engagement on social media",
    excerpt: "Discover proven strategies to boost your social media presence and engagement.",
    content: "Social media engagement is crucial for business success...",
    category: "Marketing",
    date: "June 21, 2022",
    author: {
      name: "Yahya Moin",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    id: "3-tips-engagement-social-media",
    title: "3 tips to increase engagement on social media",
    excerpt: "Quick and effective ways to enhance your social media strategy.",
    content: "Engagement is the key metric for social media success...",
    category: "Marketing",
    date: "June 21, 2022",
    author: {
      name: "Yahya Moin",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
  },
  {
    id: "rise-of-super-apps",
    title: "The Rise of Super Apps: What It Means for Businesses and Consumers",
    excerpt: "Understanding the super app phenomenon and its impact on the digital landscape.",
    content: "Super apps are transforming how we interact with digital services...",
    category: "Development",
    date: "June 21, 2022",
    author: {
      name: "Yahya Moin",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&h=400&fit=crop"
  },
  {
    id: "ux-research-methods",
    title: "Essential UX Research Methods Every Designer Should Know",
    excerpt: "A comprehensive guide to user experience research techniques.",
    content: "UX research is the foundation of great design...",
    category: "UI/UX",
    date: "May 15, 2024",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop"
  }
];

export const blogCategories = ["All", "UI/UX", "Development", "Marketing"] as const;
