import React from "react";
import { ExternalLink } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "Professional Profile",
    icon: FaLinkedin,
    // MODIFICATION: Updated LinkedIn URL
    url: "https://www.linkedin.com/in/hari-krishnan-90a188325", 
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: false 
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    // MODIFICATION: Updated Instagram username
    subText: "@k.hari_krishnan", 
    icon: FaInstagram,
    // MODIFICATION: Updated Instagram URL
    url: "https://www.instagram.com/k.hari_krishnan",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "WhatsApp",
    displayName: "Chat on WhatsApp",
    subText: "Let's connect directly",
    icon: FaWhatsapp,
    // MODIFICATION: Updated WhatsApp number
    url: "https://wa.me/916381009239", 
    color: "#25D366",
    gradient: "from-[#128C7E] to-[#25D366]",
    isPrimary: true 
  },
];

const SocialLinks = () => {
  const primaryLink = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        {/* Primary Row */}
        <a
          href={primaryLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
        >
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${primaryLink.gradient}`}
          />
          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center p-2 rounded-md bg-black/20">
              <primaryLink.icon
                className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                style={{ color: primaryLink.color }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {primaryLink.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {primaryLink.subText}
              </span>
            </div>
          </div>
          <ExternalLink 
            className="relative w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-1"
          />
        </a>

        {/* Other Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`} />
              <div className="relative flex items-center justify-center p-2 rounded-lg bg-black/20">
                <link.icon 
                  className="w-5 h-5 transition-all duration-500 group-hover:scale-110" 
                  style={{ color: link.color }}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">{link.displayName}</span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">{link.subText}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;