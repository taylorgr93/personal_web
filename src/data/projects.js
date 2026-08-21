import WebImage3 from "../images/web-project-3.png";
import Rtsp1 from "../images/rtsp/rtsp1.png";
import WebImage5 from "../images/web-project-5.png";
import WebImage6 from "../images/web-project-6.png";
import WebImage7 from "../images/web-project-7.png";
import WebImage8 from "../images/web-project-8.png";

export const projectsData = [
  {
    id: 1,
    title: "Conboleto",
    url: "conboleto",
    category: "Ticketing Platform",
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
    img: WebImage3,
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
    img: Rtsp1,
    description:
      "Frontend for a multi-enterprise RTSP video management platform, built on a microservices backend for device, employee, and access control, plus a searchable video evidence archive.",
    technologies: ["React", "Redux", "Material-UI", "Node.js", "MongoDB", "Docker"],
    liveUrl: "https://absa-amapola.knesysplus.com/inicio_sesion",
  },
  {
    id: 4,
    title: "DataCenter & Facedn",
    url: "datacenter",
    category: "IoT Platform",
    img: WebImage5,
    description:
      "IoT microservices on Raspberry Pi gateways for GPS tracking, facial recognition cameras, and RF communication.",
    technologies: ["Node.js", "Docker", "Raspberry Pi", "GPS API", "AWS S3"],
  },
  {
    id: 5,
    title: "Transportes Colimenses",
    url: "transportes_colimenses",
    category: "Corporate Website",
    img: WebImage7,
    description:
      "Corporate website for a freight transportation company with client portal integration and interactive routes map.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.transportescolimenses.mx",
  },
  {
    id: 6,
    title: "Invertúneles",
    url: "invertuneles",
    category: "Corporate Website",
    img: WebImage8,
    description:
      "Multilingual corporate website for an agricultural company with product catalog, video integration, and email quotation system.",
    technologies: ["Next.js", "React", "TypeScript", "i18n", "SEO"],
    liveUrl: "https://www.invertuneles.com",
  },
];
