/*eslint-disable*/
import { motion } from "framer-motion";
import { SkillsYears } from "../components/skills/SkillsYears";
import { skills, skills2 } from "../data/skillsData";
import { SoftSkills } from "../components/skills/SoftSkills";
import { softkills, softSkills2 } from "../data/softSkillsData";
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
            Skills
            {/* skills and years of experience */}
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
        className="container mt-10"
        // className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
      >
        <SkillsYears skills={skills} />
        <SkillsYears skills={skills2} />
        {/* <SkillsYears skills={skills3} /> */}
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
        className="container mt-10"
      >
        <SoftSkills skills={softkills} />
      </motion.div>
    </>
  );
};

export default Skills;
