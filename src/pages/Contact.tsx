import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    }, 1500);
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
              Let's Build <span className="text-tech-blue">Something Great</span> Together
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              Have a project in mind or just want to explore how we can help your business grow digitally? Reach out today for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-tech-slate dark:text-white">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={service} onValueChange={setService} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="App Development">App Development</SelectItem>
                      <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="SEO & Content">SEO & Content</SelectItem>
                      <SelectItem value="E-commerce Solutions">E-commerce Solutions</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-tech-blue hover:bg-tech-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-tech-slate dark:text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Email Us</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      contact@webtechstrategies.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Call Us</h3>
                    <p className="text-gray-700 dark:text-gray-300">+91 9154316116</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Business Hours</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday: 9AM - 5PM IST
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-tech-blue/10 p-3 rounded-full text-tech-blue hover:bg-tech-blue hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-tech-blue/10 p-3 rounded-full text-tech-blue hover:bg-tech-blue hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-tech-blue/10 p-3 rounded-full text-tech-blue hover:bg-tech-blue hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-tech-blue/10 p-3 rounded-full text-tech-blue hover:bg-tech-blue hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Removed */}

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-tech-slate dark:text-white text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="p-6 bg-tech-light rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">How long does a typical project take?</h3>
              <p className="text-gray-700">
                Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. We'll provide a detailed timeline during our initial consultation.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-tech-light rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">What is your pricing structure?</h3>
              <p className="text-gray-700">
                We offer both project-based and retainer pricing models depending on your needs. Every project receives a custom quote based on requirements, scope, and timeline. Contact us for a free consultation and quote.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-tech-light rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">Do you offer ongoing support?</h3>
              <p className="text-gray-700">
                Yes, we offer various maintenance and support packages to ensure your digital assets remain secure, up-to-date, and performing optimally after launch.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-tech-light rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-tech-slate">How do we get started?</h3>
              <p className="text-gray-700">
                Simply contact us through this form, email, or phone. We'll schedule an initial consultation to discuss your needs, objectives, and how we can help achieve your digital goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
