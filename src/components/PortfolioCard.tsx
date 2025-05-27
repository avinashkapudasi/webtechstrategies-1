
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  index: number;
  externalLink?: boolean;
}

const PortfolioCard = ({
  title,
  description,
  image,
  tags,
  link,
  index,
  externalLink = false,
}: PortfolioCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-tech-slate dark:text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-tech-slate dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        {externalLink ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white dark:border-tech-blue/50 dark:hover:bg-tech-blue dark:hover:text-white">
              Visit Website
            </Button>
          </a>
        ) : (
          <Link to={link}>
            <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white dark:border-tech-blue/50 dark:hover:bg-tech-blue dark:hover:text-white">
              View Case Study
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
