// src/pages/Skills.jsx
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { SkillsYears } from "../components/skills/SkillsYears";
import { SoftSkills } from "../components/skills/SoftSkills";
import { skills } from "../data/skillsData";
import { softSkills } from "../data/softSkillsData";
import { otherSkills } from "../data/otherSkillsData";

const Skills = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/skills";

  return (
    <>
      {isStandalonePage ? (
        <SEO
          title="Skills | Taylor - Software Engineer"
          description="Technical skills of Taylor: JavaScript, React, Node.js, TypeScript, Docker, AWS and more. 6+ years of experience in Full Stack and IoT development."
          path="/skills"
          noindex={true}
        />
      ) : (
        <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
          <h2 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Skills & Frameworks
          </h2>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex flex-wrap"
      >
        <SkillsYears skills={skills} />
      </motion.div>

      <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
        <h2 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Other Skills & Tools
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex flex-wrap"
      >
        <SkillsYears skills={otherSkills} />
      </motion.div>

      <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
        <h2 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Soft Skills
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex flex-wrap"
      >
        <SoftSkills skills={softSkills} />
      </motion.div>
    </>
  );
};

export default Skills;
