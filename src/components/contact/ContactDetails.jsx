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
  {
    id: 4,
    label: "GitHub",
    name: "@taylorgr93",
    icon: <FiGithub />,
    link: "https://github.com/taylorgr93",
  },
  {
    id: 5,
    label: "GitLab",
    name: "@ctgonzalez",
    icon: <FiGitlab />,
    link: "https://gitlab.com/ctgonzalez",
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
  return <></>;
};

export default ContactDetails;
