import Conboleto1 from "../images/conboleto/conboleto1.png";
import Checkton1 from "../images/checkton/checkton1.png";
import Rtsp1 from "../images/rtsp/rtsp1.png";
import DataCenter1 from "../images/datacenter/datacenter1.png";
import Facedn1 from "../images/facedn/facedn1.png";
import TransportesColimenses1 from "../images/transportescolimenses/transportescolimenses1.png";
import Invertuneles1 from "../images/invertuneles/invertuneles1.png";
import VigoCoffee1 from "../images/vigo-coffee/vigo-coffee1.png";
import KnesysMonitoring1 from "../images/knesys-monitoring/knesys-monitoring1.png";
import MongoClientImg from "../images/npm.webp";
import Findable1 from "../images/findable/findable1.png";
import TracSaImg from "../images/nodejs.png";
import AbsaCCMImg from "../images/nodejs.png";
import FanIDImg from "../images/nodejs.png";
import CisItemValiImg from "../images/nodejs.png";

export const projectsData = [
  {
    id: 1,
    title: "Conboleto",
    url: "conboleto",
    category: "Ticketing Platform",
    company: "Knesys Plus",
    img: Conboleto1,
    description:
      "Full-stack event ticketing and cashless payment platform with 6 microservices, multi-gateway payment processing (Stripe, LKL Pay, MercadoPago), RFID/NFC token system, and reserved seating integration.",
    technologies: ["TypeScript", "Node.js", "Express", "NestJS", "MongoDB", "Socket.IO", "Stripe", "MercadoPago", "SeatsIO", "Docker"],
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
      "Comprehensive workforce management SaaS for construction sites with facial recognition, real-time attendance tracking, worker and contractor management, working-time reporting, and project site administration.",
    technologies: ["React", "Material-UI", "Redux", "Kendo UI", "zustand", "react-query", "i18next"],
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
  {
    id: 9,
    title: "Knesys Monitoring",
    url: "knesys_monitoring",
    category: "Infrastructure & Monitoring",
    company: "Knesys Plus",
    img: KnesysMonitoring1,
    description:
      "Centralized monitoring infrastructure observing ~8 servers and ConBoleto services. Prometheus + Grafana + Loki stack with Docker Compose, handling system metrics, container observability, and application logs.",
    technologies: ["Prometheus", "Grafana", "Loki", "Docker Compose", "node_exporter", "cAdvisor", "Alloy"],
    liveUrl: "https://monitoring.knesysplus.com",
  },
  {
    id: 10,
    title: "MongoDB Client Wrapper",
    url: "mongodb_client_wrapper",
    category: "NPM Package / Library",
    company: "Knesys Plus",
    img: MongoClientImg,
    description:
      "Lightweight npm package wrapping MongoDB 4.17.2 driver with simplified API for CRUD, aggregation, pagination, and $lookup-based population. Published to npm, used across Conboleto and internal microservices.",
    technologies: ["Node.js", "MongoDB", "npm", "JavaScript", "Docker"],
    liveUrl: "https://www.npmjs.com/package/mongoclienteasywrapper",
  },
  {
    id: 11,
    title: "Findable",
    url: "findable",
    category: "IoT Platform",
    company: "Knesys Plus",
    img: Findable1,
    description:
      "BLE beacon localization and detection system running on Raspberry Pi. Real-time beacon scanning via noble, GPIO and RGB LED controls, REST API gateway, and MongoDB data collection for indoor positioning applications.",
    technologies: ["Node.js", "Express.js", "BLE", "GPIO", "Docker Compose", "MongoDB", "Raspberry Pi"],
    liveUrl: "https://app.knesysplus.com/findable/Account/Login",
  },
  {
    id: 12,
    title: "Tracsa",
    url: "tracsa",
    category: "Fleet Management",
    company: "Knesys Plus",
    img: TracSaImg,
    description:
      "Fleet management system tracking vehicle fuel consumption, metrics, salaries, and expenses via monorepo architecture (3 microservices). Real-time data synchronization from external sources, scheduled daily jobs for metrics aggregation, and REST API with Swagger documentation.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Docker Compose", "node-schedule", "Passport.js", "JWT"],
    liveUrl: "https://app.knesysplus.com",
  },
  {
    id: 13,
    title: "AbsaCCM",
    url: "absaccm",
    category: "Manufacturing & Monitoring",
    company: "Knesys Plus",
    img: AbsaCCMImg,
    description:
      "Manufacturing configuration and monitoring system built as a microservices monorepo. React-based GUI for manufacturing operations with calendar filtering, multi-currency support, real-time analytics dashboards, and dynamic chart visualization.",
    technologies: ["React", "Material-UI", "Node.js", "Express.js", "MongoDB", "Docker Compose", "Syncfusion Charts", "Passport.js"],
    liveUrl: "https://app.knesysplus.com",
  },
  {
    id: 14,
    title: "FAN-ID",
    url: "fan_id",
    category: "Sports & Events",
    company: "Knesys Plus",
    img: FanIDImg,
    description:
      "Sports tournament and stadium event management platform with employee profiles, door access control, attendance reporting, and AWS Rekognition integration for face recognition and identity verification.",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS Rekognition", "Express.js"],
    liveUrl: "https://app.knesysplus.com",
  },
  {
    id: 15,
    title: "cisItemVali",
    url: "cisitemvali",
    category: "Document Management",
    company: "Jabil",
    img: CisItemValiImg,
    description:
      "ASP.NET Core MVC application for managing FAI (Form and Item validation) documents. Enables creation, editing, and validation of structured records with document folio tracking, title/template management, evidence items, and approval workflows.",
    technologies: ["ASP.NET Core 2.2", ".NET Core 2.0", "MVC", "MySQL 8.0", "Entity Framework Core", "ADO.NET"],
    liveUrl: "",
  },
];
