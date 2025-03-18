/*eslint-disable*/
import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiGithub,
  FiGitlab,
  FiLinkedin,
  FiMessageSquare,
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
    // link: "taylorgr@outlook.com",
  },
  {
    id: 3,
    name: "+52 33 3172 8350",
    icon: <FaWhatsapp />,
  },
  {
    id: 4,
    name: "+1 657 281 0607",
    icon: <FiMessageSquare />,
  },
  {
    id: 5,
    name: "Christopher Taylor Gonzalez",
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/taylorgr-24505ab4/",
  },
  {
    id: 6,
    name: "@taylorgr93",
    icon: <FiGithub />,
    link: "https://github.com/taylorgr93",
  },
  {
    id: 7,
    name: "@ctgonzalez",
    icon: <FiGitlab />,
    link: "https://gitlab.com/ctgonzalez",
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full">
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
              {contact.link ? (
                <a
                  href={contact.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
                >
                  {contact.name}
                </a>
              ) : (
                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                  {contact.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
