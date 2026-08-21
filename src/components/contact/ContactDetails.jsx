import {
  FiMapPin,
  FiMail,
  FiGithub,
  FiGitlab,
  FiLinkedin,
  FiMessageSquare,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const primaryContacts = [
  {
    id: 1,
    label: "Email",
    name: "taylorgr@outlook.com",
    icon: <FiMail />,
    link: "mailto:taylorgr@outlook.com",
  },
  {
    id: 2,
    label: "WhatsApp",
    name: "+52 33 3172 8350",
    icon: <FaWhatsapp />,
    link: "https://wa.me/523331728350",
  },
  {
    id: 3,
    label: "LinkedIn",
    name: "Christopher Taylor Gonzalez",
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/taylorgr-24505ab4/",
  },
];

const secondaryContacts = [
  {
    id: 4,
    name: "Zapopan, Jalisco, Mexico",
    icon: <FiMapPin />,
  },
  {
    id: 5,
    name: "@taylorgr93",
    icon: <FiGithub />,
    link: "https://github.com/taylorgr93",
  },
  {
    id: 6,
    name: "@ctgonzalez",
    icon: <FiGitlab />,
    link: "https://gitlab.com/ctgonzalez",
  },
  {
    id: 7,
    name: "+1 657 281 0607 (SMS)",
    icon: <FiMessageSquare />,
    link: "sms:+16572810607",
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="font-general-semibold text-2xl sm:text-3xl text-center text-ternary-dark dark:text-primary-light mt-12 mb-10">
        Let&apos;s work together
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {primaryContacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target={contact.link.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-xl border border-gray-200 dark:border-ternary-dark bg-secondary-light dark:bg-ternary-dark hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
            aria-label={`Contact via ${contact.label}`}
          >
            <span className="text-3xl text-indigo-500 dark:text-indigo-400 mb-3">
              {contact.icon}
            </span>
            <span className="font-general-semibold text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
              {contact.label}
            </span>
            <span className="font-general-medium text-sm text-ternary-dark dark:text-ternary-light text-center">
              {contact.name}
            </span>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {secondaryContacts.map((contact) => (
          <span key={contact.id} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-base">{contact.icon}</span>
            {contact.link ? (
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 dark:hover:text-indigo-400 duration-300"
                aria-label={contact.name}
              >
                {contact.name}
              </a>
            ) : (
              contact.name
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
