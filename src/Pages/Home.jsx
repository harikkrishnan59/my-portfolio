import React, { useState, useEffect, useCallback, memo } from "react";
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// --- (No changes to these smaller components) ---
const StatusBadge = memo(() => ( <div className="inline-block" data-aos="zoom-in" data-aos-delay="400"><div className="relative group"><div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div><div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10"><span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center"><Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />Ready to Innovate</span></div></div></div>));
const MainTitle = memo(() => ( <div className="space-y-2" data-aos="fade-up" data-aos-delay="600"><h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight"><span className="relative inline-block"><span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span><span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">Electronic </span></span><br /><span className="relative inline-block mt-2"><span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span><span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Engineer</span></span></h1></div>));
const TechStack = memo(({ tech }) => ( <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">{tech}</div>));
const CTAButton = memo(({ href, text, icon: Icon }) => ( <a href={href}><button className="group relative w-[160px]"><div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div><div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden"><div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div><span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300"><span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">{text}</span><Icon className={`w-4 h-4 text-gray-200 ${ text === "Contact" ? "group-hover:translate-x-1" : "group-hover:rotate-45" } transform transition-all duration-300 z-10`} /></span></div></button></a>));
const SocialLink = memo(({ icon: Icon, link }) => ( <a href={link} target="_blank" rel="noopener noreferrer"><button className="group relative p-3"><div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div><div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300"><Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" /></div></button></a>));
// ---

// MODIFICATION: Using your new content
const WORDS = ["Embedded Expert", "Project Maker"];
const TECH_STACK = ["Embedded System", "Internet of Things(IOT)", "ML", "ROS"];
const SOCIAL_LINKS = [
  { icon: Instagram, link: "https://www.instagram.com/k.hari_krishnan?igsh=dW9hdWM2ZnFvczBo" },
  { icon: Mail, link: "mailto:harikkrishnan59@gmail.com" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/hari-krishnan-90a188325" },
];

const Home = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
  }, []);

  const type = useCallback(() => {
    const currentWord = WORDS[wordIndex];
    const updatedText = isDeleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentWord) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }
  }, [text, isDeleting, wordIndex]);

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 75 : 150);
    return () => clearTimeout(timer);
  }, [type]);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      <div className="relative z-10">
        
        {/* MODIFICATION: The layout classes have been combined into this single div to fix the overlap */}
        <div className="mx-auto px-4 sm:px-6 lg:px-[10%] min-h-screen pt-32 lg:pt-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">
            <div className="space-y-4 sm:space-y-6">
              <StatusBadge />
              <MainTitle />
              <div className="h-8 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="800">
                <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">{text}</span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-pulse"></span>
              </div>
              <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light" data-aos="fade-up" data-aos-delay="1000">
                Engineer, Inventor, Explorer — building bridges between hardware and intelligence with Embedded, IoT, and ROS.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1200">
                {TECH_STACK.map((tech, index) => <TechStack key={index} tech={tech} />)}
              </div>
              <div className="flex flex-row gap-3 w-full justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1400">
                <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                <CTAButton href="#Contact" text="Contact" icon={Mail} />
              </div>
              <div className="flex gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1600">
                {SOCIAL_LINKS.map((social, index) => <SocialLink key={index} {...social} />)}
              </div>
            </div>
          </div>
          
          {/* Right Column: Lottie Animation */}
          <div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-end" 
            data-aos="fade-left" 
            data-aos-delay="600"
          >
            <div className="w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px]">
              <DotLottieReact 
                  src="https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie" 
                  loop 
                  autoplay 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);