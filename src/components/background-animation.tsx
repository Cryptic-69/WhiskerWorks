import { motion } from "motion/react";

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-visible pointer-events-none z-0">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3254]/20 via-background to-[#d3d4d8]/10" />

      {/* Animated clouds */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-25 mix-blend-screen"
          style={{
            background: `radial-gradient(circle at center, ${
              i % 2 === 0 ? "#1a3254" : "#d3d4d8"
            } 0%, transparent 100%)`,
            width: `${Math.random() * 500 + 400}px`,
            height: `${Math.random() * 500 + 400}px`,
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Additional floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle at center, ${
              i % 2 === 0 ? "#1a3254" : "#d3d4d8"
            } 0%, transparent 80%)`,
            width: `${Math.random() * 400 + 300}px`,
            height: `${Math.random() * 400 + 300}px`,
            borderRadius: "50%",
            filter: "blur(80px)", // softens edges
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
