import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import FloatingCube from "@/components/animations/FloatingCube";
import FloatingIcons from "@/components/animations/FloatingIcons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Lightbulb, Users, Monitor } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Mitchell",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    bio: "Tech visionary with 15+ years of experience in digital transformation.",
  },
  {
    name: "Emma Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    bio: "Full-stack developer specializing in scalable architecture and emerging technologies.",
  },
  {
    name: "David Park",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    bio: "Award-winning designer with a passion for creating intuitive user experiences.",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    bio: "Digital marketing strategist specialized in growth hacking and conversion optimization.",
  },
];

const milestones = [
  {
    year: 2019,
    title: "Company Founded",
    description: "Web Tech Strategies was established with a mission to deliver innovative digital solutions.",
  },
  {
    year: 2020,
    title: "First International Client",
    description: "Expanded our reach globally with clients across Europe and Asia.",
  },
  {
    year: 2022,
    title: "100 Project Milestone",
    description: "Successfully completed our 100th project with a 98% client satisfaction rate.",
  },
  {
    year: 2024,
    title: "AI Innovation Lab",
    description: "Launched our in-house AI marketing tools to enhance client campaigns.",
  },
];

const About = () => {
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
                Driven by Innovation. <br />
                <span className="text-tech-blue">Defined by Results.</span>
              </h1>
              <p className="text-xl mb-6 text-gray-700">
                We're a team of passionate technologists, creatives, and strategists building the digital solutions of tomorrow.
              </p>
            </motion.div>
            <div className="relative h-96">
              <FloatingCube className="absolute top-10 left-10 z-20" />
              <FloatingIcons className="absolute inset-0 z-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Our team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading title="Our Story" />
              <p className="text-gray-700 mb-6">
                Founded with a mission to elevate businesses through technology, Web Tech Strategies has grown into a trusted partner for digital transformation. Our team of developers, designers, and strategists work collaboratively to solve real-world challenges with scalable, efficient, and elegant solutions.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a small team with big dreams has evolved into a full-service digital agency. Throughout our journey, we've remained committed to our core values of innovation, integrity, and delivering exceptional results for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-tech-slate">Mission</h3>
                  <p className="text-gray-700">
                    To build transformative digital products that help businesses thrive in the digital age.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-tech-slate">Vision</h3>
                  <p className="text-gray-700">
                    To become a global leader in full-stack digital services, shaping the future of how brands engage online.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-tech-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-tech-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Rocket className="text-tech-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tech-slate">Innovation</h3>
              <p className="text-gray-700">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-tech-purple/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Monitor className="text-tech-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tech-slate">Integrity</h3>
              <p className="text-gray-700">
                We operate with transparency, honesty, and ethical practices in all our client relationships.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-tech-indigo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-tech-indigo h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tech-slate">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of teamwork – both internally and with our clients – to achieve greatness.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-tech-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="text-tech-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tech-slate">Continuous Learning</h3>
              <p className="text-gray-700">
                We are committed to growth, constantly expanding our knowledge and refining our craft.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented individuals behind our success."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-tech-light p-6 rounded-lg text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-tech-slate">{member.name}</h3>
                <p className="text-tech-blue mb-4">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>

                {/* Social links */}
                <div className="flex justify-center space-x-3 mt-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-tech-blue transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-tech-blue transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-tech-blue transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-tech-light">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Milestones" centered={true} />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tech-blue/30"></div>

            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } md:justify-between`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Year bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-tech-blue text-white flex items-center justify-center font-bold">
                  {milestone.year}
                </div>

                {/* Content */}
                <div
                  className={`w-5/12 md:w-5/12 bg-white p-6 rounded-lg shadow-lg ${
                    index % 2 === 0
                      ? "mr-auto md:mr-0"
                      : "ml-auto md:ml-0"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2 text-tech-slate">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>

                {/* Spacer for opposite side on mobile */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
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
              Ready to Work With Our Team?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Get in touch to discuss how we can help bring your digital vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-tech-blue hover:bg-tech-blue/90 text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-tech-slate"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
