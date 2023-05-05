/*eslint-disable*/
import { motion } from "framer-motion";
import { ExperienceComponent } from "../components/experience/ExperienceComponent";
import { experience } from "../data/experienceData";
import { useEffect, useState } from "react";

const Experience = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // console.log(window.location.href.split("/").pop());
    setUrl(window.location.href.split("/").pop());
  }, []);

  return (
    <>
      {url != "experience" ? (
        <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Experience
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
        className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
      >
        <ExperienceComponent experience={experience} />
      </motion.div>
    </>
  );
};

export default Experience;
