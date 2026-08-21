import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { EducationComponent } from "../components/education/EducationComponent";
import { education } from "../data/educationData";

const Education = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/education";

  return (
    <>
      {isStandalonePage ? (
        <SEO
          title="Education | Taylor - Software Engineer"
          description="Master's in Computer Science from Universidad Autónoma de Guadalajara and Electronics Engineering degree from CETI."
          path="/education"
          noindex={true}
        />
      ) : (
        <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
          <h2 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Education
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
        className="container mx-auto"
      >
        <EducationComponent education={education} />
      </motion.div>
    </>
  );
};

export default Education;
