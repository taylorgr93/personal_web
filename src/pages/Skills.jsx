/*eslint-disable*/
import { motion } from "framer-motion";
import { SkillsYears } from "../components/skills/SkillsYears";
import { skills } from "../data/skillsData";
import { SoftSkills } from "../components/skills/SoftSkills";
import { softSkills } from "../data/softSkillsData";
import { otherSkills } from "../data/otherSkillsData";
import { AboutMeProvider } from "../context/AboutMeContext";
import { useEffect, useState } from "react";

const Skills = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // console.log(window.location.href.split("/").pop());
    setUrl(window.location.href.split("/").pop());
  }, []);

  return (
    <>
      {url != "skills" ? (
        <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Skills & Frameworks
          </p>
        </div>
      ) : (
        <></>
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
        // className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10 bg-gray-600"
      >
        <SkillsYears skills={skills} />
      </motion.div>

      <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Other Skills & Tools
        </p>
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
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Soft Skills
        </p>
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
