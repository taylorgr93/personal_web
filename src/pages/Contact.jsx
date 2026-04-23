// src/pages/Contact.jsx
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import ContactDetails from "../components/contact/ContactDetails";

const Contact = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/contact";

  return (
    <>
      {isStandalonePage ? (
        <SEO
          title="Contact | Taylor - Software Engineer"
          description="Get in touch with Taylor, Full Stack Developer and founder of HiveCoding. Available for freelance projects and collaborations."
          path="/contact"
          noindex={true}
        />
      ) : (
        <div className="text-center sm:pt-30 pb-8 mt-20">
          <h2 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Contact
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
        className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
      >
        <ContactDetails />
      </motion.div>
    </>
  );
};

export default Contact;
