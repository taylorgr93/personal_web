/*eslint-disable*/
import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // console.log(window.location.href.split("/").pop());
    setUrl(window.location.href.split("/").pop());
  }, []);

  return (
    <AboutMeProvider>
      {url != "about" ? (
        <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            About Me
          </p>
        </div>
      ) : (
        <></>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>

      {/** Counter without paddings */}
      {/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div> */}

      {/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div> */}
    </AboutMeProvider>
  );
};

export default About;
