
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import FloatingCube from "@/components/animations/FloatingCube";
import FloatingCode from "@/components/animations/FloatingCode";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Monitor,
  Smartphone,
  Layout as LayoutIcon,
  Search,
  FileText,
  ShoppingCart,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Responsive, scalable, and SEO-ready websites that convert.",
    icon: Monitor,
    color: "bg-tech-blue",
    details: [
      "Custom Web Application Development",
      "E-commerce Website Development",
      "Progressive Web Apps (PWAs)",
      "Website Redesign & Migration",
      "Website Maintenance & Support",
    ],
    technologies: ["React", "Angular", "Vue.js", "Node.js", "PHP", "WordPress", "Shopify"],
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Cross-platform, feature-rich mobile apps with native performance.",
    icon: Smartphone,
    color: "bg-tech-purple",
    details: [
      "iOS & Android App Development",
      "Cross-Platform Mobile Apps",
      "App Strategy & Design",
      "App Testing & Quality Assurance",
      "App Maintenance & Updates",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "From social strategy to PPC, grow your brand with measurable results.",
    icon: Search,
    color: "bg-tech-indigo",
    details: [
      "Search Engine Marketing (SEM)",
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Content Marketing Strategy",
      "Conversion Rate Optimization",
    ],
    technologies: ["Google Ads", "Meta Ads", "Mailchimp", "HubSpot", "Google Analytics"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Engaging interfaces designed with user behavior in mind.",
    icon: LayoutIcon,
    color: "bg-tech-blue",
    details: [
      "User Experience (UX) Research",
      "User Interface (UI) Design",
      "Wireframing & Prototyping",
      "Interactive Design",
      "Usability Testing",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
  },
  {
    id: "seo-content",
    title: "SEO & Content",
    description: "Optimized visibility that brings organic growth.",
    icon: FileText,
    color: "bg-tech-purple",
    details: [
      "SEO Audit & Strategy",
      "On-Page & Technical SEO",
      "Content Creation & Marketing",
      "Keyword Research & Analysis",
      "Local SEO Optimization",
    ],
    technologies: ["Ahrefs", "SEMrush", "Moz", "Google Search Console", "Yoast SEO"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description: "Seamless online stores with secure payment integration.",
    icon: ShoppingCart,
    color: "bg-tech-indigo",
    details: [
      "E-commerce Platform Development",
      "Shopping Cart Integration",
      "Payment Gateway Setup",
      "Inventory Management Systems",
      "Order Fulfillment Automation",
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe"],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-tech-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-tech-slate">
                Our <span className="text-tech-blue">Services</span>
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                We offer a suite of digital solutions built for performance, scalability, and user delight. From web development to digital marketing, our services help businesses thrive in the digital landscape.
              </p>
            </motion.div>
            <div className="relative h-96">
              <FloatingCube className="absolute top-10 left-10 z-20" />
              <FloatingCode className="absolute inset-0 z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive digital solutions tailored to your business needs."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  activeService.id === service.id
                    ? "border-tech-blue"
                    : "border-transparent"
                } cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveService(service)}
              >
                <div
                  className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center text-white mb-4`}
                >
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-tech-slate">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  className="text-tech-blue hover:text-tech-blue/80 p-0 flex items-center"
                  onClick={() => setActiveService(service)}
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-20 bg-tech-light">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div
                  className={`w-16 h-16 ${activeService.color} rounded-lg flex items-center justify-center text-white mb-6`}
                >
                  <activeService.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-tech-slate">{activeService.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{activeService.description}</p>
                
                <h3 className="text-xl font-semibold mb-4 text-tech-slate">What We Offer</h3>
                <ul className="space-y-3 mb-8">
                  {activeService.details.map((detail, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-tech-blue mt-1 mr-2" />
                      <span className="text-gray-700">{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-tech-slate">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeService.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="bg-tech-light text-tech-slate px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80`}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{activeService.title}</h3>
                    <p className="text-white/80">Delivering exceptional results for our clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Us"
            subtitle="The Web Tech Strategies difference."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-tech-light p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">Innovative Thinkers</h3>
              <p className="text-gray-700">
                We stay ahead of the curve, implementing cutting-edge technologies and approaches to deliver forward-thinking solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-tech-light p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">Client-First Mindset</h3>
              <p className="text-gray-700">
                Your goals are our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              className="bg-tech-light p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">Scalable Solutions</h3>
              <p className="text-gray-700">
                We build with the future in mind, creating systems that can grow and adapt as your business evolves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-tech-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Process"
            subtitle="How we bring your vision to life."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-tech-blue rounded-full text-white flex items-center justify-center font-semibold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">Discovery</h3>
              <p className="text-gray-700">
                We learn about your business, goals, and challenges to understand what success looks like.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-tech-blue rounded-full text-white flex items-center justify-center font-semibold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">Strategy</h3>
              <p className="text-gray-700">
                We develop a tailored approach that aligns with your objectives and maximizes ROI.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-tech-blue rounded-full text-white flex items-center justify-center font-semibold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">Implementation</h3>
              <p className="text-gray-700">
                Our expert team brings the strategy to life, with regular updates and transparent communication.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-tech-blue rounded-full text-white flex items-center justify-center font-semibold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">Optimization</h3>
              <p className="text-gray-700">
                We continuously monitor, analyze, and refine to ensure optimal performance and results.
              </p>
            </motion.div>
          </div>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-tech-blue hover:bg-tech-blue/90 text-white"
              >
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-tech-slate"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
