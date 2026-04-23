// src/pages/AboutMe.jsx
import AboutMeBio from "../components/about/AboutMeBio";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";

const About = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/about";

  return (
    <AboutMeProvider>
      {isStandalonePage && (
        <SEO
          title="About | Taylor - Software Engineer"
          description="Learn about Taylor's journey as a Software Engineer with 6+ years of experience in Full Stack development, IoT, and Industry 4.0 solutions."
          path="/about"
          noindex={true}
        />
      )}

      {!isStandalonePage && (
        <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
          <h2 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            About Me
          </h2>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
