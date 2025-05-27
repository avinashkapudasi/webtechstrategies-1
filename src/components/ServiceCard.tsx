
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient?: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  gradient = "from-tech-blue to-tech-purple",
  className,
}: ServiceCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative bg-white rounded-xl shadow-xl p-6 overflow-hidden group",
        className
      )}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient border effect */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${gradient} transition-opacity duration-500 -z-10`}
        style={{ margin: "-2px" }}
      />

      <div className="relative">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${gradient} text-white mb-4`}>
          <Icon className="h-6 w-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-tech-slate">{title}</h3>

        {/* Description */}
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
