
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/providers/ThemeProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/3ff75003-ae8f-4e6f-951b-8de4da9e4d69.png" 
                alt="WebTech Strategies Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="font-medium text-gray-700 hover:text-tech-blue transition-colors dark:text-gray-300 dark:hover:text-tech-blue"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-medium text-gray-700 hover:text-tech-blue transition-colors dark:text-gray-300 dark:hover:text-tech-blue"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="font-medium text-gray-700 hover:text-tech-blue transition-colors dark:text-gray-300 dark:hover:text-tech-blue"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="font-medium text-gray-700 hover:text-tech-blue transition-colors dark:text-gray-300 dark:hover:text-tech-blue"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="font-medium text-gray-700 hover:text-tech-blue transition-colors dark:text-gray-300 dark:hover:text-tech-blue"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="font-medium text-gray-700 hover:text-tech-blue transition-colors dark:text-gray-300 dark:hover:text-tech-blue"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Toggle 
              className="border-0"
              pressed={theme === 'dark'} 
              onPressedChange={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Toggle>
            <Link to="/contact">
              <Button className="bg-tech-blue hover:bg-tech-blue/90">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Toggle 
              className="border-0"
              pressed={theme === 'dark'} 
              onPressedChange={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Toggle>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-tech-blue hover:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg dark:bg-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-blue hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-blue hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-blue hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-blue hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-blue hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-blue hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Link to="/contact">
                <Button className="w-full bg-tech-blue hover:bg-tech-blue/90">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
