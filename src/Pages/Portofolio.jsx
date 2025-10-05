import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, Plus, Minus } from "lucide-react"; 
import { dummyProjects, dummyCertificates } from "../assets/dummyData";

const ToggleButton = ({ onClick, displayState }) => {
  const isShowingAll = displayState === 2;
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg font-semibold transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#6366f1]/20"
    >
      {isShowingAll ? "See Less" : "See More"}
      {isShowingAll ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
    </button>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: { xs: 2, sm: 3 }, mt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = { children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired };

function a11yProps(index) {
  return { id: `full-width-tab-${index}`, "aria-controls": `full-width-tabpanel-${index}` };
}

const techStacks = [
    { icon: "/html.svg", language: "HTML" }, 
    { icon: "/css.svg", language: "CSS" }, 
    { icon: "/javascript.svg", language: "JavaScript" }, 
    { icon: "/iot.png", language: "IOT" }, 
    { icon: "/ROS2.png", language: "ROS" }, 
    { icon: "/emb1.png", language: "Embedded System" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects] = useState(dummyProjects);
  const [certificates] = useState(dummyCertificates);
  
  const [projectDisplayState, setProjectDisplayState] = useState(0);
  const [certificateDisplayState, setCertificateDisplayState] = useState(0);
  
  const initialProjects = 4; 
  const intermediateProjects = 8; 
  const initialCertificates = 4;
  const intermediateCertificates = 8;

  useEffect(() => { AOS.init({ once: false }); }, []);

  const handleChange = (event, newValue) => setValue(newValue);

  const toggleShowMoreProjects = useCallback(() => {
    setProjectDisplayState(prevState => (prevState === 2 ? 0 : prevState + 1));
  }, []);

  const toggleShowMoreCertificates = useCallback(() => {
    setCertificateDisplayState(prevState => (prevState === 2 ? 0 : prevState + 1));
  }, []);
  
  let displayedProjects;
  if (projectDisplayState === 0) {
    displayedProjects = projects.slice(0, initialProjects);
  } else if (projectDisplayState === 1) {
    displayedProjects = projects.slice(0, intermediateProjects);
  } else {
    displayedProjects = projects;
  }

  let displayedCertificates;
  if (certificateDisplayState === 0) {
    displayedCertificates = certificates.slice(0, initialCertificates);
  } else if (certificateDisplayState === 1) {
    displayedCertificates = certificates.slice(0, intermediateCertificates);
  } else {
    displayedCertificates = certificates;
  }

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", overflow: "hidden" }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            textColor="secondary" 
            indicatorColor="secondary" 
            variant="fullWidth" 
            sx={{ minHeight: "70px", "& .MuiTab-root": { fontSize: { xs: "0.9rem", md: "1rem" }, fontWeight: "600", color: "#94a3b8", textTransform: "none", transition: "all 0.4s", padding: "20px 0", zIndex: 1, margin: "8px", borderRadius: "12px", "&:hover": { color: "#ffffff", backgroundColor: "rgba(139, 92, 246, 0.1)" }, "&.Mui-selected": { color: "#fff", background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))", boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)", }, }, "& .MuiTabs-indicator": { height: 0 } }} 
          >
            <Tab icon={<Code className="mb-1 w-5 h-5" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Award className="mb-1 w-5 h-5" />} label="Certificates" {...a11yProps(1)} />
            <Tab icon={<Boxes className="mb-1 w-5 h-5" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <div className="container mx-auto flex justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {displayedProjects.map((project, index) => (
                <div key={project.id || index} data-aos="fade-up" data-aos-duration="1000">
                  {/* MODIFICATION: Added Description back to the props being passed */}
                  <CardProject 
                    Img={project.Img} 
                    Title={project.Title}
                    Description={project.Description}
                    id={project.id} 
                  />
                </div>
              ))}
            </div>
          </div>
          {projects.length > initialProjects && (
            <div className="mt-8 w-full flex justify-center">
              <ToggleButton onClick={toggleShowMoreProjects} displayState={projectDisplayState} />
            </div>
          )}
        </TabPanel>
        
        <TabPanel value={value} index={1}>
          <div className="container mx-auto flex justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {displayedCertificates.map((certificate, index) => (
                <div key={index} data-aos="fade-up" data-aos-duration="1000">
                  <Certificate ImgSertif={certificate.Img} />
                </div>
              ))}
            </div>
          </div>
          {certificates.length > initialCertificates && (
            <div className="mt-8 w-full flex justify-center">
              <ToggleButton onClick={toggleShowMoreCertificates} displayState={certificateDisplayState} />
            </div>
          )}
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 gap-5">
              {techStacks.map((stack, index) => (
                <div key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                  <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}