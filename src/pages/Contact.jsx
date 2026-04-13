import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import ContactDetails from "../components/contact/ContactDetails";
// import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href.split("/").pop());
  }, []);

  return (
    <>
      {url === "contact" && (
        <SEO
          title="Contact | Taylor - Software Engineer"
          description="Get in touch with Taylor, Full Stack Developer and founder of HiveCoding. Available for freelance projects and collaborations."
          path="/contact"
        />
      )}
      {url !== "contact" ? (
        <div className="text-center sm:pt-30 pb-8 mt-20">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Contact
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
        {/* <ContactForm /> */}
        <ContactDetails />
      </motion.div>
    </>
  );
};

export default Contact;
