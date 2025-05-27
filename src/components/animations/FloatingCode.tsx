
import { motion } from "framer-motion";

interface FloatingCodeProps {
  className?: string;
}

const codeSnippets = [
  "function getUser() { ... }",
  "<App className='container'>",
  "useEffect(() => { ... }, [])",
  "const [state, setState] = useState()",
  "npm install react-router-dom",
  "git commit -m 'Update UI'",
  "SELECT * FROM users",
  "class ApiService extends ...",
  "docker-compose up -d",
];

const FloatingCode = ({ className = "" }: FloatingCodeProps) => {
  return (
    <div className={`relative ${className}`}>
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-tech-slate/80 font-mono text-sm md:text-base bg-white/5 backdrop-blur-sm px-3 py-1 rounded-sm border border-tech-blue/40 shadow-sm"
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
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
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: index * 0.3,
          }}
          style={{
            left: `${(index * 12) % 85}%`,
            top: `${(index * 9) % 85}%`,
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCode;
