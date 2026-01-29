import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import ServicesTicker from "@/components/ServicesTicker";
import { blogCategories, BlogPost, blogPosts } from "@/data/blogData";

interface BlogProps {
  onNavigate?: () => void;
}

const BlogCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => {
  if (featured) {
    return (
      <Link to={`/blog/${post.id}`} className="block group">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl overflow-hidden h-[380px] md:h-[460px]"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-3">
              <span className="font-montserrat">{post.date}</span>
              <span>•</span>
              <span className="font-montserrat">{post.category}</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins group-hover:text-primary transition-colors max-w-lg mx-auto">
              {post.title}
            </h3>
            <div className="flex items-center justify-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
              />
              <span className="text-white font-medium text-sm font-montserrat">{post.author.name}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.id}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-xl overflow-hidden h-[260px] md:h-[280px]"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
            <span className="font-montserrat">{post.date}</span>
            <span>•</span>
            <span className="font-montserrat">{post.category}</span>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white font-poppins line-clamp-2 group-hover:text-primary transition-colors mb-3">
            {post.title}
          </h3>
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs font-poppins font-medium text-white/90">{post.author.name}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Blog = ({ onNavigate }: BlogProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visiblePosts, setVisiblePosts] = useState(5);

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  const handleViewMore = () => {
    setVisiblePosts(prev => prev + 4);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog - Solario Tech | Latest Tech News & Insights"
        description="Stay updated with the latest trends in web development, UI/UX design, and digital marketing. Expert insights from Solario Tech."
        keywords="tech blog, web development trends, UI/UX design tips, digital marketing insights, Solario Tech blog"
      />
      <Navigation onNavigate={onNavigate} />

      <PageBanner
        title="Blogs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs" }
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-[2px] bg-primary"></div>
                <span className="text-muted-foreground font-montserrat text-sm">News & Blogs</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold leading-tight ">
                Our Latest <span className="text-primary">News & Blogs</span>
              </h2>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setActiveCategory(category);
                    setVisiblePosts(5);
                  }}
                  className={`rounded-full px-6 py-1.5 h-8 text-sm font-montserrat ${activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-primary hover:text-primary-foreground"
                    }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <>
              {/* Featured Post */}
              {featuredPost && <BlogCard post={featuredPost} featured />}

              {/* Regular Posts Grid - 2x2 layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {regularPosts.slice(0, visiblePosts - 1).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* View More Button */}
              {regularPosts.length > visiblePosts - 1 && (
                <div className="flex justify-center mt-10">
                  <Button
                    onClick={handleViewMore}
                    className="bg-primary text-primary-foreground hover:bg-navy rounded-full h-12 px-16 text-base font-montserrat font-medium"
                  >
                    View More
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Services Ticker */}
      <ServicesTicker />


      <Footer />
    </div>
  );
};

export default Blog;
