import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, User } from "lucide-react";
import { Cpu, CircuitBoard, Settings } from "lucide-react"; // pick suitable electronic icons
import AOS from "aos";
import "aos/dist/aos.css";

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // This timer controls how long the welcome screen is visible
    const timer = setTimeout(() => {
      setIsLoading(false);
      // This second timer waits for the exit animation to complete before calling the function
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000); 
    }, 4000); // Total welcome screen duration

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] z-[100]"
          initial={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12"> 
  {[Cpu, CircuitBoard, Settings].map((Icon, index) => ( 
    <div key={index} data-aos="fade-down" data-aos-delay={index * 200}> 
      <IconButton Icon={Icon} /> 
    </div> 
  ))} 
</div>
              <div className="mb-6 sm:mb-8 md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
                  <div data-aos="fade-right" data-aos-delay="200" className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                    Welcome To My
                  </div>
                  <div data-aos="fade-up" data-aos-delay="800" className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                     Website
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;