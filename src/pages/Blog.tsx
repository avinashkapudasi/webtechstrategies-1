
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Web Development Trends in 2025",
    excerpt:
      "Discover the latest technologies and approaches shaping the future of web development in 2025.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Alex Mitchell",
    date: "May 15, 2024",
    category: "Web Tech",
    slug: "web-development-trends-2025",
  },
  {
    id: 2,
    title: "How AI is Changing the Digital Marketing Game",
    excerpt:
      "Explore how artificial intelligence is revolutionizing digital marketing strategies and customer experiences.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "May 10, 2024",
    category: "Marketing & SEO",
    slug: "ai-digital-marketing",
  },
  {
    id: 3,
    title: "UX Mistakes Startups Should Avoid",
    excerpt:
      "Learn about common UX design pitfalls that can harm user engagement and how to fix them.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "David Park",
    date: "May 5, 2024",
    category: "UI/UX Design",
    slug: "ux-mistakes-startups",
  },
  {
    id: 4,
    title: "Optimizing Your Mobile App for Speed and SEO",
    excerpt:
      "Technical strategies to improve your mobile app performance and search visibility.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Emma Chen",
    date: "April 28, 2024",
    category: "App Insights",
    slug: "mobile-app-optimization",
  },
  {
    id: 5,
    title: "E-commerce Strategy for the Post-Pandemic Consumer",
    excerpt:
      "Adapting your online store to meet the evolving expectations of post-pandemic shoppers.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Michael Lee",
    date: "April 22, 2024",
    category: "Business Strategy",
    slug: "ecommerce-post-pandemic",
  },
  {
    id: 6,
    title: "The Future of Progressive Web Apps",
    excerpt:
      "How PWAs are changing the way users interact with web applications and what it means for businesses.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Alex Mitchell",
    date: "April 15, 2024",
    category: "Web Tech",
    slug: "future-progressive-web-apps",
  },
];

const categories = [
  "All",
  "Web Tech",
  "Marketing & SEO",
  "UI/UX Design",
  "App Insights",
  "Business Strategy",
];

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    window.scrollTo(0, 0);
    filterPosts();
  }, [filter, search]);

  const filterPosts = () => {
    let posts = blogPosts;
    
    // Apply category filter
    if (filter !== "All") {
      posts = posts.filter((post) => post.category === filter);
    }
    
    // Apply search filter
    if (search.trim() !== "") {
      const searchTerm = search.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.excerpt.toLowerCase().includes(searchTerm)
      );
    }
    
    setFilteredPosts(posts);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-tech-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-tech-slate">
              Insights That <span className="text-tech-blue">Inspire Innovation</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Our blog is your go-to resource for expert insights, digital strategy tips, and tech trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="relative w-full md:w-64">
              <Input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  className={
                    filter === category
                      ? "bg-tech-blue hover:bg-tech-blue/90"
                      : "border-tech-blue text-tech-blue hover:bg-tech-blue/10"
                  }
                  onClick={() => setFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  author={post.author}
                  date={post.date}
                  category={post.category}
                  slug={post.slug}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button variant="outline" onClick={() => {
                setSearch("");
                setFilter("All");
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-tech-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-tech-slate">
              Stay Updated With Our Newsletter
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              Get the latest insights, tips, and trends delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button className="bg-tech-blue hover:bg-tech-blue/90">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tech-slate text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Learn More About Our Services?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Explore how we can help transform your digital presence and drive growth for your business.
            </p>
            <Button
              size="lg"
              className="bg-tech-blue hover:bg-tech-blue/90 text-white"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
