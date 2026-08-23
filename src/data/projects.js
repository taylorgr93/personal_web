import Checkton1 from "../images/checkton/checkton1.png";
import Rtsp1 from "../images/rtsp/rtsp1.png";
import DataCenter1 from "../images/datacenter/datacenter1.png";
import Facedn1 from "../images/facedn/facedn1.png";
import WebImage6 from "../images/web-project-6.png";
import TransportesColimenses1 from "../images/transportescolimenses/transportescolimenses1.png";
import Invertuneles1 from "../images/invertuneles/invertuneles1.png";
import VigoCoffee1 from "../images/vigo-coffee/vigo-coffee1.png";

export const projectsData = [
  {
    id: 1,
    title: "Conboleto",
    url: "conboleto",
    category: "Ticketing Platform",
    company: "Knesys Plus",
    img: WebImage6,
    description:
      "Ticketing platform for event organizers and buyers with role-based access and microservices architecture.",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "JWT"],
    liveUrl: "https://www.conboleto.com",
  },
  {
    id: 2,
    title: "Checkton",
    url: "checkton",
    category: "Construction SaaS",
    company: "Knesys Plus",
    img: Checkton1,
    description:
      "Management platform for construction companies with crew tracking, attendance, warehouse, and work hours modules.",
    technologies: ["React", "Redux", "Material UI", "Node.js", "Docker"],
    liveUrl: "https://checkton.com.mx",
  },
  {
    id: 3,
    title: "RTSP ABSA Industrial",
    url: "rtsp_absa_industrial",
    category: "Video Management Platform",
    company: "Knesys Plus",
    img: Rtsp1,
    description:
      "Frontend for a multi-enterprise RTSP video management platform, built on a microservices backend for device, employee, and access control, plus a searchable video evidence archive.",
    technologies: ["React", "Redux", "Material-UI", "Node.js", "MongoDB", "Docker"],
    liveUrl: "https://absa-amapola.knesysplus.com/inicio_sesion",
  },
  {
    id: 4,
    title: "DataCenter",
    url: "datacenter",
    category: "IoT Platform",
    company: "Knesys Plus",
    img: DataCenter1,
    description:
      "OS provisioning and hardware I/O microservices for a containerized Bluetooth IoT gateway on Raspberry Pi, a GPS vehicle-tracking backend, and a UDP middleware bridging REST to Motorola two-way radios.",
    technologies: [
      "Node.js",
      "Express.js",
      "Docker",
      "Raspberry Pi",
      "GPIO",
      "MongoDB",
      "Twilio",
      "UDP",
      "Linux",
    ],
    liveUrl: "https://app.knesysplus.com/datacenter/Account/Login",
  },
  {
    id: 5,
    title: "FaceDN",
    url: "facedn",
    category: "IoT Platform",
    company: "Knesys Plus",
    img: Facedn1,
    description:
      "Backend microservices and configuration UI for a thermal-camera IoT platform monitoring employee attendance, temperature, and mask compliance.",
    technologies: ["Node.js", "Express.js", "React", "Docker", "MongoDB", "GPIO", "Linux"],
    liveUrl: "https://app.knesysplus.com/facedn/Account/Login",
  },
  {
    id: 6,
    title: "Transportes Colimenses",
    url: "transportes_colimenses",
    category: "Corporate Website",
    company: "HiveCoding",
    img: TransportesColimenses1,
    description:
      "Corporate website for a freight transportation company with client portal integration and interactive routes map.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Swiper", "Vercel"],
    liveUrl: "https://www.transportescolimenses.mx",
  },
  {
    id: 7,
    title: "Invertúneles",
    url: "invertuneles",
    category: "Corporate Website",
    company: "HiveCoding",
    img: Invertuneles1,
    description:
      "Multilingual corporate website for an agricultural company with product catalog, video integration, and email quotation system.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n", "SEO"],
    liveUrl: "https://www.invertuneles.com",
  },
  {
    id: 8,
    title: "Vigo Coffee",
    url: "vigo_coffee",
    category: "Web Accessibility & Optimization",
    company: "HiveCoding",
    img: VigoCoffee1,
    description:
      "Comprehensive web accessibility audit and optimization for a coffee company website, including WCAG 2.1 compliance, link remediation, and social media integration.",
    technologies: ["Web Accessibility", "WCAG 2.1", "HTML", "GoDaddy", "SEO", "Social Media"],
    liveUrl: "https://vigo-coffee.com/",
  },
];
