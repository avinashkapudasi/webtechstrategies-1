
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    title: "Sai Manikanta Constructions",
    description:
      "Construction company website with portfolio showcase and service listings.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Construction", "Web Development", "Portfolio"],
    link: "https://saimanikantaconstructions.com/",
    category: "Web App",
    externalLink: true,
  },
  {
    id: 2,
    title: "Big Amber",
    description:
      "Modern web application with responsive design and seamless user experience.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Web App", "React", "UI/UX"],
    link: "https://big-amber.vercel.app/",
    category: "Web App",
    externalLink: true,
  },
  {
    id: 3,
    title: "Amaravathi Art Festival",
    description:
      "Cultural event website showcasing art exhibitions and festival information.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Event", "Web Development", "Arts"],
    link: "https://www.amaravathiartfestival.com",
    category: "Web App",
    externalLink: true,
  },
  {
    id: 4,
    title: "SAB PO Solutions",
    description:
      "Business solutions provider with comprehensive service offerings and client portal.",
    image:
      "/SAB_PO.jpeg",
    tags: ["Business", "Solutions", "Web Development"],
    link: "https://www.sabposolutions.com/",
    category: "Web App",
    externalLink: true,
  },
  {
    id: 5,
    title: "GreenHome Smart Living",
    description:
      "IoT dashboard for managing smart home devices with energy consumption analytics.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["IoT", "Dashboard", "React"],
    link: "/portfolio/greenhome",
    category: "Web App",
    externalLink: false,
  },
  {
    id: 6,
    title: "FoodFast Delivery Service",
    description:
      "Food delivery platform with real-time order tracking and restaurant management.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["E-commerce", "Mobile App", "React Native"],
    link: "/portfolio/foodfast",
    category: "E-commerce",
    externalLink: false,
  },
];

const categories = ["All", "Web App", "Mobile App", "E-commerce", "UI/UX Design"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (filter === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === filter)
      );
    }
  }, [filter]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-tech-light py-20 md:py-32 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-tech-slate dark:text-white">
              Our <span className="text-tech-blue">Portfolio</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              Explore our latest work and see how we've helped businesses across
              different industries achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={
                  filter === category
                    ? "bg-tech-blue hover:bg-tech-blue/90"
                    : "border-tech-blue text-tech-blue hover:bg-tech-blue/10 dark:text-white dark:border-tech-blue/50"
                }
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                tags={item.tags}
                link={item.link}
                index={index}
                externalLink={item.externalLink}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-tech-light dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Industries We Serve"
            subtitle="We've worked with clients across diverse sectors, delivering tailored digital solutions for their unique needs."
            centered={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["Healthcare", "E-commerce", "Education", "Finance", "Travel", "Real Estate"].map(
              (industry, index) => (
                <motion.div
                  key={industry}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-tech-slate dark:text-white">{industry}</h3>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-tech-slate text-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-4xl font-bold mb-2 text-tech-blue">100+</h3>
              <p className="text-lg text-gray-300">Successful Projects</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2 text-tech-blue">98%</h3>
              <p className="text-lg text-gray-300">Client Satisfaction</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-4xl font-bold mb-2 text-tech-blue">15+</h3>
              <p className="text-lg text-gray-300">Industries Served</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-4xl font-bold mb-2 text-tech-blue">12</h3>
              <p className="text-lg text-gray-300">Industry Awards</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-tech-slate dark:text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-tech-blue hover:bg-tech-blue/90 text-white"
              >
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
