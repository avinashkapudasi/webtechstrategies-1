
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Sai Manikanta Constructions",
    description:
      "Construction company website with portfolio showcase and service listings.",
      image:
      "/sai_manikanta_constructions.jpg",
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
    "/kotharu.png",
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
      "/amaravathi.jpg",
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
    image:
      "/teamsurya.png",
    title: "Team Surya",
    description:
      "From traditional weddings to grand cultural events, Team Surya transforms your special moments into unforgettable memories with authentic Indian traditions and modern elegance.",
    tags: ["Dashboard", "React"],
    link: "https://www.teamsurya.in/",
    category: "Web App",
    externalLink: true,
  },
  // {
  //   id: 6,
  //   title: "FoodFast Delivery Service",
  //   description:
  //     "Food delivery platform with real-time order tracking and restaurant management.",
  //   image:
  //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  //   tags: ["E-commerce", "Mobile App", "React Native"],
  //   link: "/portfolio/foodfast",
  //   category: "E-commerce",
  //   externalLink: false,

  // },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

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
          <SectionHeading 
            title="Our Work" 
            subtitle="Discover our portfolio of successful projects and digital solutions."
            centered={true}
          />

          {/* Infinite Scroll Gallery */}
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-8 animate-scroll"
              style={{
                width: `${portfolioItems.length * 280}px`,
                animationDuration: `${portfolioItems.length * 3}s`
              }}
            >
              {/* Triple items for seamless loop */}
              {[...portfolioItems, ...portfolioItems, ...portfolioItems].map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 w-64 h-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500 ease-out"
                  onClick={() => handleItemClick(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-full h-full relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Only show overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-tech-slate dark:text-white">
                  {selectedItem.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {selectedItem.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-tech-slate dark:text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-tech-light dark:bg-gray-700 text-tech-slate dark:text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-tech-slate dark:text-white">
                      Category
                    </h4>
                    <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">
                      {selectedItem.category}
                    </span>
                  </div>
                  
                  {selectedItem.externalLink && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-tech-blue hover:bg-tech-blue/90 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Live Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Industries Served */}
      <section className="py-20 bg-tech-light dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto px-4 ">
          <SectionHeading 
            title="Industries We Serve" 
            subtitle="We've worked with clients across diverse sectors, delivering tailored digital solutions for their unique needs."
            centered={true}
            className="text-white"
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
