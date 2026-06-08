import { motion } from "framer-motion";
import { BrainCircuit, Network, Bot, Cpu, MessageSquare, Layers } from "lucide-react";

const floatingIcons = [
  { Icon: BrainCircuit, color: "text-blue-500", size: 64, top: "15%", left: "10%", delay: 0, duration: 15 },
  { Icon: Bot, color: "text-purple-500", size: 80, top: "25%", left: "80%", delay: 2, duration: 18 },
  { Icon: Network, color: "text-pink-500", size: 56, top: "75%", left: "15%", delay: 4, duration: 14 },
  { Icon: Cpu, color: "text-emerald-500", size: 72, top: "65%", left: "85%", delay: 1, duration: 16 },
  { Icon: MessageSquare, color: "text-rose-500", size: 48, top: "45%", left: "90%", delay: 3, duration: 13 },
  { Icon: Layers, color: "text-indigo-500", size: 60, top: "50%", left: "5%", delay: 5, duration: 17 },
  { Icon: BrainCircuit, color: "text-cyan-500", size: 40, top: "85%", left: "45%", delay: 2.5, duration: 20 },
];

export function FloatingAIIcons() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color} opacity-[0.15]`}
            style={{ 
              top: item.top, 
              left: item.left, 
              transformStyle: "preserve-3d" 
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotateX: [15, 35, 15],
              rotateY: [-20, 20, -20],
              rotateZ: [-5, 5, -5],
              z: [0, 60, 0]
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {/* 3D Stacked Effect */}
            <div className="relative">
              <item.Icon 
                size={item.size} 
                strokeWidth={1.5} 
                className="relative z-30 drop-shadow-xl" 
              />
              <item.Icon 
                size={item.size} 
                strokeWidth={1.5} 
                className="absolute inset-0 ml-[2px] mt-[2px] opacity-60" 
                style={{ transform: 'translateZ(-5px)' }}
              />
              <item.Icon 
                size={item.size} 
                strokeWidth={1.5} 
                className="absolute inset-0 ml-[4px] mt-[4px] opacity-30" 
                style={{ transform: 'translateZ(-10px)' }}
              />
              <item.Icon 
                size={item.size} 
                strokeWidth={1.5} 
                className="absolute inset-0 ml-[6px] mt-[6px] opacity-10 blur-[1px]" 
                style={{ transform: 'translateZ(-15px)' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
