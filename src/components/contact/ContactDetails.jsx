/*eslint-disable*/
import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    id: 1,
    // name: "Volcan Paricutin 5102 Int 12 El Colli Urbano CP 45070, Zapopan, Jalisco, Mexico",
    name: "Zapopan, Jalisco, Mexico",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "taylorgr@outlook.com",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "+52 33 3172 8350",
    icon: <FaWhatsapp />,
  },
  {
    id: 4,
    name: "https://www.linkedin.com/in/taylorgr-24505ab4/",
    icon: <FiLinkedin />,
  },
  {
    id: 5,
    name: "@taylorgr93",
    icon: <FiGithub />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact details
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
