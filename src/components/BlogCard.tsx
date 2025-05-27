
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  slug: string;
  index: number;
}

const BlogCard = ({
  title,
  excerpt,
  image,
  author,
  date,
  category,
  slug,
  index,
}: BlogCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/blog/${slug}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block bg-tech-blue/10 text-tech-blue text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 text-tech-slate hover:text-tech-blue transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
