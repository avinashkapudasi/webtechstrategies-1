
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  stars?: number;
  delay?: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  image,
  stars = 5,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4 flex justify-between items-start">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-tech-slate">{name}</h4>
            <p className="text-sm text-gray-600">
              {role}, {company}
            </p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < stars ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">{content}</p>
    </motion.div>
  );
};

export default TestimonialCard;
