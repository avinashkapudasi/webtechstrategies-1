
import React from "react";
import { motion } from "framer-motion";

interface FloatingCubeProps {
  className?: string;
}

const FloatingCube = ({ className = "" }: FloatingCubeProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -20, 0],
        rotateY: [0, 180, 360],
        rotateX: [0, 45, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <div className="w-16 h-16 md:w-28 md:h-28 relative transform-style-3d">
        {/* Front face - HTML structure */}
        <div className="absolute w-full h-full bg-tech-blue/10 backdrop-blur-sm rounded-sm transform-style-3d border border-tech-blue/50 flex items-center justify-center">
          <div className="font-mono text-[8px] md:text-xs text-tech-blue/70 p-2 overflow-hidden">
            <div>&lt;div&gt;</div>
            <div className="pl-2">&lt;h1&gt;Title&lt;/h1&gt;</div>
            <div className="pl-2">&lt;p&gt;Text&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
          </div>
        </div>
        
        {/* Back face - JavaScript */}
        <div className="absolute w-full h-full bg-tech-purple/10 backdrop-blur-sm rounded-sm transform rotate-y-180 border border-tech-purple/50 flex items-center justify-center">
          <div className="font-mono text-[8px] md:text-xs text-tech-purple/70 p-2 overflow-hidden">
            <div>function() {"{"}</div>
            <div className="pl-2">const x = 10;</div>
            <div className="pl-2">return x;</div>
            <div>{"}"}</div>
          </div>
        </div>
        
        {/* Left face - CSS */}
        <div className="absolute w-full h-full bg-tech-indigo/10 backdrop-blur-sm rounded-sm transform rotate-y-270 border border-tech-indigo/50 flex items-center justify-center">
          <div className="font-mono text-[8px] md:text-xs text-tech-indigo/70 p-2 overflow-hidden">
            <div>.container {"{"}</div>
            <div className="pl-2">display: flex;</div>
            <div className="pl-2">width: 100%;</div>
            <div>{"}"}</div>
          </div>
        </div>
        
        {/* Right face - React */}
        <div className="absolute w-full h-full bg-tech-blue/10 backdrop-blur-sm rounded-sm transform rotate-y-90 border border-tech-blue/50 flex items-center justify-center">
          <div className="font-mono text-[8px] md:text-xs text-tech-blue/70 p-2 overflow-hidden">
            <div>useEffect(() =&gt; {"{"}</div>
            <div className="pl-2">fetch(url);</div>
            <div>{"}"}, []);</div>
          </div>
        </div>
        
        {/* Top face - JSON */}
        <div className="absolute w-full h-full bg-tech-purple/10 backdrop-blur-sm rounded-sm transform rotate-x-90 border border-tech-purple/50 flex items-center justify-center">
          <div className="font-mono text-[8px] md:text-xs text-tech-purple/70 p-2 overflow-hidden">
            <div>{"{\"id\": 1,"}</div>
            <div>{"\"name\":"}</div>
            <div>{"\"User\""}</div>
            <div>{"}"}</div>
          </div>
        </div>
        
        {/* Bottom face - CLI Commands */}
        <div className="absolute w-full h-full bg-tech-indigo/10 backdrop-blur-sm rounded-sm transform rotate-x-270 border border-tech-indigo/50 flex items-center justify-center">
          <div className="font-mono text-[8px] md:text-xs text-tech-indigo/70 p-2 overflow-hidden">
            <div>$ npm start</div>
            <div>$ git push</div>
            <div>$ docker run</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCube;
