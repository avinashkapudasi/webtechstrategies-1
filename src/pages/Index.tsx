
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Monitor,
  Smartphone,
  Search,
  Layout as LayoutIcon,
  Database,
  ShoppingCart,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import FloatingCube from "@/components/animations/FloatingCube";
import FloatingCode from "@/components/animations/FloatingCode";
import FloatingIcons from "@/components/animations/FloatingIcons";


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechForward Inc",
    content:
      "Web Tech Strategies transformed our online presence. Their team delivered a beautiful website that perfectly captures our brand and has significantly increased our conversion rates.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthApp",
    content:
      "The mobile app development team at Web Tech Strategies exceeded our expectations. They took our concept and turned it into a beautiful, functional app that our users love.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    stars: 5,
  },
  {
    name: "Emily Martinez",
    role: "Product Manager",
    company: "EcoSolutions",
    content:
      "The SEO and digital marketing services provided by Web Tech Strategies have been instrumental in growing our organic traffic. Their team is knowledgeable, responsive, and result-oriented.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    stars: 5,
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-tech-light py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-tech-slate">
                Building Digital{" "}
                <span className="text-tech-blue">Futures</span>.
                <br /> One Line of{" "}
                <span className="text-tech-purple">Code</span> at a Time.
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                At Web Tech Strategies, we craft powerful digital experiences
                through cutting-edge web, mobile, and marketing solutions
                tailored for the future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 text-white">
                  Get a Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
            <div className="relative h-96">
              <FloatingCube className="absolute top-10 left-10 z-20" />
              <FloatingCode className="absolute inset-0 z-10" />
              <FloatingIcons className="absolute inset-0 z-30" />
            </div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#8B5CF6"
              d="M37.9,-57.5C51.1,-45.7,65.2,-37.1,72.3,-24.2C79.4,-11.3,79.5,5.9,73.2,20.3C66.9,34.6,54.2,46.2,41,55.1C27.8,64,14,70.2,-1.2,71.8C-16.4,73.4,-32.9,70.2,-45.8,61.3C-58.8,52.3,-68.2,37.4,-70.8,22C-73.4,6.6,-69.1,-9.4,-61.8,-22.7C-54.5,-36.1,-44.2,-46.7,-32.5,-58.8C-20.8,-70.9,-7.7,-84.4,2.5,-88C12.7,-91.6,25.3,-85.4,37.9,-75.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#0EA5E9"
              d="M33.3,-54.2C41.3,-45.8,45,-33,51.3,-20.4C57.7,-7.9,66.8,4.5,67.9,17.5C69,30.4,62,44,50.6,53.5C39.2,63.1,23.4,68.6,8.3,68.8C-6.7,69,-21.1,63.9,-34.4,56.3C-47.7,48.8,-60,39,-65.5,26.1C-71,13.3,-69.7,-2.5,-64,-15.9C-58.3,-29.3,-48.3,-40.3,-36.5,-47.7C-24.7,-55.1,-11.1,-59,0.9,-60.4C13,-61.8,25.9,-60.7,33.3,-54.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-tech-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of digital services to help your business thrive online."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Responsive, scalable, and SEO-ready websites that convert visitors into customers."
              icon={Monitor}
              gradient="from-tech-blue to-tech-indigo"
            />
            <ServiceCard
              title="App Development"
              description="Cross-platform, feature-rich mobile apps with native performance and intuitive UX."
              icon={Smartphone}
              gradient="from-tech-purple to-tech-blue"
            />
            <ServiceCard
              title="Digital Marketing"
              description="Strategic campaigns that drive traffic, engagement, and conversions for measurable ROI."
              icon={Search}
              gradient="from-tech-indigo to-tech-purple"
            />
            <ServiceCard
              title="UI/UX Design"
              description="Visually stunning and intuitive interfaces designed with user behavior in mind."
              icon={LayoutIcon}
              gradient="from-tech-blue to-tech-purple"
            />
            <ServiceCard
              title="SEO & Content"
              description="Optimized visibility and engaging content that brings organic growth to your business."
              icon={Search}
              gradient="from-tech-purple to-tech-indigo"
            />
            <ServiceCard
              title="E-commerce Solutions"
              description="Seamless online stores with secure payment integration and customer-friendly interfaces."
              icon={ShoppingCart}
              gradient="from-tech-indigo to-tech-blue"
            />
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-tech-blue hover:bg-tech-blue/90 text-white"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <FloatingCube className="absolute top-10 left-10 z-20" />
              <FloatingIcons className="absolute inset-0 z-10" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-tech-slate">
                Driven by Innovation. <br />
                <span className="text-tech-blue">Defined by Results.</span>
              </h2>
              <p className="text-gray-700 mb-6">
                At Web Tech Strategies, we combine creativity, technical expertise, and strategic thinking to build digital solutions that help businesses thrive. Our team of passionate technologists is committed to delivering excellence in every project we undertake.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-tech-slate">Our Mission</h4>
                  <p className="text-gray-700">
                    Empowering businesses to thrive through technology.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-tech-slate">Our Vision</h4>
                  <p className="text-gray-700">
                    To be the leading catalyst in digital transformation worldwide.
                  </p>
                </div>
              </div>
              <Button size="lg" variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-tech-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                image={testimonial.image}
                stars={testimonial.stars}
                delay={index * 0.2}
              />
            ))}
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
              Ready to Build Something Great Together?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Get in touch with our team for a free consultation and quote. Let's turn your digital vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-tech-blue hover:bg-tech-blue/90 text-white"
              >
                <Link to="/contact">Get Started</Link>
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

export default Index;
