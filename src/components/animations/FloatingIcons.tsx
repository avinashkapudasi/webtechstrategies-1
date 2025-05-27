
import { motion } from "framer-motion";
import { Code, Terminal, FileCode, Settings, Brackets, Component, SquareCode, FileText, LayoutDashboard, Wrench } from "lucide-react";

interface FloatingIconsProps {
  className?: string;
}

const iconComponents = [
  { Icon: Code, color: "text-tech-blue", delay: 0, bg: "bg-tech-blue/5" },
  { Icon: Terminal, color: "text-tech-purple", delay: 1.2, bg: "bg-tech-purple/5" },
  { Icon: FileCode, color: "text-tech-indigo", delay: 2.4, bg: "bg-tech-indigo/5" },
  { Icon: Brackets, color: "text-tech-blue", delay: 3.6, bg: "bg-tech-blue/5" },
  { Icon: Component, color: "text-tech-purple", delay: 1.8, bg: "bg-tech-purple/5" },
  { Icon: SquareCode, color: "text-tech-indigo", delay: 3.0, bg: "bg-tech-indigo/5" },
  { Icon: Settings, color: "text-tech-blue", delay: 2.1, bg: "bg-tech-blue/5" },
  { Icon: FileText, color: "text-tech-purple", delay: 0.9, bg: "bg-tech-purple/5" },
];

const FloatingIcons = ({ className = "" }: FloatingIconsProps) => {
  return (
    <div className={`relative ${className}`}>
      {iconComponents.map(({ Icon, color, delay, bg }, index) => (
        <motion.div
          key={index}
          className={`absolute p-3 rounded-sm ${bg} backdrop-blur-sm border border-gray-100/20 shadow-lg ${
            index % 2 === 0 ? "shadow-tech-blue/10" : "shadow-tech-purple/10"
          }`}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 40 - 20,
              Math.random() * 40 - 20,
              Math.random() * 40 - 20,
            ],
            y: [
              Math.random() * 40 - 20,
              Math.random() * 40 - 20,
              Math.random() * 40 - 20,
            ],
            scale: 1,
            opacity: 1,
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: delay,
          }}
          style={{
            left: `${20 + (index * 15) % 60}%`,
            top: `${15 + (index * 12) % 70}%`,
          }}
        >
          <Icon className={`h-5 w-5 ${color}`} />
        </motion.div>
      ))}

      {/* Connection lines resembling code structure or site map */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20%" y1="20%" x2="40%" y2="35%" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="40%" y1="35%" x2="60%" y2="25%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="60%" y1="25%" x2="70%" y2="50%" stroke="#6366F1" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="70%" y1="50%" x2="35%" y2="65%" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="35%" y1="65%" x2="50%" y2="80%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="5,5" />
        <circle cx="20%" cy="20%" r="2" fill="#3B82F6" />
        <circle cx="40%" cy="35%" r="2" fill="#8B5CF6" />
        <circle cx="60%" cy="25%" r="2" fill="#6366F1" />
        <circle cx="70%" cy="50%" r="2" fill="#3B82F6" />
        <circle cx="35%" cy="65%" r="2" fill="#8B5CF6" />
        <circle cx="50%" cy="80%" r="2" fill="#6366F1" />
      </svg>
    </div>
  );
};

export default FloatingIcons;
