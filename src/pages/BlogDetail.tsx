import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import { blogPosts, blogCategories } from "@/data/blogData";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogDetailProps {
  onNavigate?: () => void;
}

const BlogDetail = ({ onNavigate }: BlogDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation onNavigate={onNavigate} />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4 font-poppins">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8 font-montserrat">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="rounded-full h-12 px-10 font-montserrat font-medium">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} - Solario Tech Blog`}
        description={post.excerpt}
        keywords={`${post.category}, tech blog, Solario Tech`}
      />
      <Navigation onNavigate={onNavigate} />

      <PageBanner
        title="Blog Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          { label: post.title }
        ]}
        onNavigate={onNavigate}
      />

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_350px] gap-12">
            {/* Main Content Column */}
            <div className="space-y-8">
              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>

              {/* Category Badge & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-montserrat font-medium">
                  {post.category}
                </span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight text-foreground">
                {post.title}
              </h1>

              {/* Author Meta */}
              <div className="flex items-center gap-4 py-6 border-y border-border">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-bold font-poppins text-lg text-foreground">Written by {post.author.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-montserrat">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none prose-headings:font-poppins prose-headings:font-bold prose-p:font-montserrat prose-p:text-muted-foreground prose-a:text-primary prose-li:font-montserrat prose-li:text-muted-foreground">
                <p className="text-xl font-bold font-montserrat text-foreground leading-relaxed mb-2">
                  {post.excerpt}
                </p>
                <p className="text-md font-medium font-montserrat text-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-md font-medium font-montserrat text-foreground leading-relaxed mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <h3 className="text-lg font-bold font-montserrat mb-2">Understanding the Importance of Scalable Web Solutions</h3>
                <p className="text-md font-medium font-montserrat text-foreground leading-relaxed mb-4">
                  Scalability and performance are no longer optional - they are expected. As businesses grow, their digital infrastructure must be able to handle increased traffic and data loads without compromising user experience.
                </p>

                <h3 className="text-lg font-bold font-montserrat mb-2">Agile Collaboration Tips</h3>
                <p className="text-md font-medium font-montserrat text-foreground leading-relaxed">
                  In modern development agencies, collaboration is the heart of innovation. Agile methodologies promote iterative development, constant feedback, and adaptability.
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="Collaboration"
                    className="rounded-xl w-full h-48 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="Planning"
                    className="rounded-xl w-full h-48 object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold font-montserrat mb-2">Streamlining Design-to-Development Handoff</h3>
                <p className="text-md font-medium font-montserrat text-foreground leading-relaxed">
                  The transition from design to development can make or break a project. Tools like Figma and modern CSS frameworks have bridged the gap, but clear communication protocols are still essential.
                </p>

                <div className="bg-navy p-8 rounded-2xl my-8 text-white">
                  <h4 className="text-primary text-xl font-bold font-poppins leading-relaxed mb-4">Pro Tip:</h4>
                  <p className="text-white font-medium font-montserrat">
                    "Planning and Managing the requirements aligns strategies."
                  </p>
                </div>

                <h3 className="text-lg font-bold font-montserrat mb-2">Building Efficient Development Workflows</h3>
                <ul className="list-none pl-0 space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold text-sm">1</div>
                    <span className="font-medium font-montserrat">Clear Communication Channels: Establish dedicated channels for team communication.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold text-sm">2</div>
                    <span className="font-medium font-montserrat">Automated Testing Pipelines: catch bugs early and ensure code quality.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold text-sm">3</div>
                    <span className="font-medium font-montserrat">Continuous Integration: Merge code frequently to avoid conflicts.</span>
                  </li>
                </ul>
              </div>

              {/* Author Bio Box */}
              <div className="bg-muted/30 p-8 rounded-2xl mt-12 border border-border">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold font-poppins mb-2">{post.author.name}</h3>
                    <p className="text-muted-foreground font-montserrat mb-4 text-sm leading-relaxed">
                      Content creator and technology enthusiast at Solario Tech, sharing insights on the latest trends in software development and digital innovation. Passionate about creating user-centric digital experiences.
                    </p>
                    <div className="flex gap-3">
                      <Button size="icon" className="w-8 h-8 rounded-full bg-primary text-white hover:bg-navy hover:text-primary transition-all shadow-sm border-0">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="icon" className="w-8 h-8 rounded-full bg-primary text-white hover:bg-navy hover:text-primary transition-all shadow-sm border-0">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="space-y-10 lg:sticky lg:top-24 h-fit">
              {/* Categories Widget */}
              <div>
                <h3 className="text-2xl font-bold font-poppins mb-6">Filter by categories</h3>
                <div className="flex flex-wrap gap-2">
                  {blogCategories.filter(c => c !== 'All').map((category) => (
                    <Link key={category} to={`/blog?category=${category}`}>
                      <span className={`px-5 py-2 rounded-full text-sm font-montserrat font-medium transition-all ${post.category === category
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
                        }`}>
                        {category}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Table of Content Widget */}
              <div>
                <h3 className="text-2xl font-bold font-poppins mb-6">Table of content</h3>
                <nav className="flex flex-col space-y-3">
                  <a href="#" className="text-muted-foreground hover:text-primary font-montserrat text-sm transition-colors border-l-2 border-transparent hover:border-primary pl-3">Understanding Scalability</a>
                  <a href="#" className="text-muted-foreground hover:text-primary font-montserrat text-sm transition-colors border-l-2 border-transparent hover:border-primary pl-3">Agile Collaboration Tips</a>
                  <a href="#" className="text-muted-foreground hover:text-primary font-montserrat text-sm transition-colors border-l-2 border-transparent hover:border-primary pl-3">Design-to-Development Handoff</a>
                  <a href="#" className="text-muted-foreground hover:text-primary font-montserrat text-sm transition-colors border-l-2 border-transparent hover:border-primary pl-3">Building Efficient Workflows</a>
                </nav>
              </div>

              {/* CTA Widget */}
              <div className="rounded-2xl overflow-hidden relative group h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop"
                  alt="Office"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">We're Hiring</span>
                  <h4 className="text-2xl font-bold font-poppins mb-2">Need Top-Notch Digital Services?</h4>
                  <p className="text-white/80 text-sm font-montserrat mb-6">
                    Let us help you transform your ideas into digital reality.
                  </p>
                  <Link to="/contact">
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 px-8 font-montserrat font-medium w-full">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-24 pt-12 border-t border-border">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold font-poppins">Related Articles</h2>
                <Link to="/blog">
                  <Button variant="link" className="text-primary font-montserrat font-medium">View All Posts</Button>
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group block"
                  >
                    <div className="rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      <div className="h-56 overflow-hidden relative">
                        <span className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1 rounded-full">
                          {relatedPost.category}
                        </span>
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-montserrat">
                          <Calendar className="w-3 h-3" />
                          <span>{relatedPost.date}</span>
                        </div>
                        <h3 className="text-xl font-bold font-poppins mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 font-montserrat mb-4 flex-grow">
                          {relatedPost.excerpt}
                        </p>
                        <span className="text-primary font-bold text-sm font-montserrat flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
