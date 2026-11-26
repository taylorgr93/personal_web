/*eslint-disable*/
import InvertuntelesImg from "../images/invertuneles/invertuneles1.png";
import Invertuneles2 from "../images/invertuneles/invertuneles2.png";
import Invertuneles3 from "../images/invertuneles/invertuneles3.png";
import ChecktonImg from "../images/checkton/checkton1.png";
import checkton2 from "../images/checkton/checkton2.png";
import checkton3 from "../images/checkton/checkton3.png";
import RtspImg from "../images/rtsp/rtsp1.png";
import Rtsp2 from "../images/rtsp/rtsp2.png";
import DataCenterImg from "../images/datacenter/datacenter1.png";
import DataCenter2 from "../images/datacenter/datacenter2.png";
import DataCenter4 from "../images/datacenter/datacenter4.png";
import Facedn1 from "../images/facedn/facedn1.png";
import Facedn2 from "../images/facedn/facedn2.png";
import TransportesColimensesImg from "../images/transportescolimenses/transportescolimenses1.png";
import transportescolimenses2 from "../images/transportescolimenses/transportescolimenses2.png";
import transportescolimenses3 from "../images/transportescolimenses/transportescolimenses3.png";
import VigoCoffee1 from "../images/vigo-coffee/vigo-coffee1.png";
import VigoCoffee2 from "../images/vigo-coffee/vigo-coffee2.png";
import VigoCoffee3 from "../images/vigo-coffee/vigo-coffee3.png";
import NussenImg from "../images/nussen/nussen1.png";
import Nussen2 from "../images/nussen/nussen2.png";
import ConboletoImg from "../images/conboleto/conboleto1.png";
import Conboleto2 from "../images/conboleto/conboleto2.png";
import Conboleto3 from "../images/conboleto/conboleto3.png";
import KnesysMonitoring1 from "../images/knesys-monitoring/knesys-monitoring1.png";
import KnesysMonitoring2 from "../images/knesys-monitoring/knesys-monitoring2.png";
import KnesysMonitoring3 from "../images/knesys-monitoring/knesys-monitoring3.png";
import MongoClientImg from "../images/npm.webp";
import Findable1 from "../images/findable/findable1.png";
import Findable2 from "../images/findable/findable2.png";

import BitFlow1 from "../images/bitflow/bitflow1.png";
import BitFlow2 from "../images/bitflow/bitflow2.png";
import BitFlow3 from "../images/bitflow/bitflow3.png";

import PregnancyApp1 from "../images/pregnancyapp/silhouette-of-pregnant-woman.jpg";

// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiX,
} from "react-icons/fi";

export const singleProjectDataArray = [
  {
    ProjectHeader: {
      title: "Conboleto",
      publishDate: "Jan 2024 – Present",
      tags: "Backend / Full-Stack",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Dashboard",
        img: ConboletoImg,
      },
      {
        id: 2,
        title: "Events & Ticketing",
        img: Conboleto2,
      },
      {
        id: 3,
        title: "Payment Processing",
        img: Conboleto3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Conboleto / Knesys Plus",
        },
        {
          id: 2,
          title: "Website",
          details: "https://www.conboleto.com/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Architect and build a complete event ticketing and cashless payment platform serving event organizers and attendees across Latin America. Integrate multiple payment gateways (Stripe, LKL Pay, MercadoPago), implement RFID/NFC token-based transactions, manage reserved seating via third-party APIs, and provide real-time reporting and analytics—all through a microservices architecture supporting multi-tenancy and high throughput. Since 2024 the platform has issued 110,000+ tickets across 370+ events for 20+ organizer companies.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "TypeScript",
            "Node.js",
            "Express.js",
            "NestJS",
            "MongoDB",
            "Socket.IO",
            "Stripe",
            "MercadoPago",
            "LKL Pay",
            "SeatsIO",
            "RFID/NFC",
            "Docker",
            "Docker Compose",
            "JWT",
            "Multer",
            "node-schedule",
            "Jest",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Architected and built 6 of the platform's 8 microservices:API Gateway (request routing, JWT validation, multi-tenancy scoping), Auth Service (registration, login, activation, JWT issuance), Events Service (CRUD events, ticket management, SeatsIO integration, scheduled jobs), Payment Service (multi-gateway factory pattern supporting Stripe MXN/USD, MercadoPago, LKL Pay with unified refund/chargeback handling), Cashless Service (NestJS-based RFID/NFC token recharge/charge/transfer with WebSocket real-time events), and POS Service (inventory, products, sales points, transactions with company-scoped multi-tenancy).",
        },
        {
          id: 2,
          details:
            "Implemented complex payment orchestration: simultaneous multi-gateway support with automatic gateway selection, unified refund flows driven by per-gateway flags, chargeback/dispute evidence generation as PDFs, Stripe balance sync cron jobs, and MercadoPago webhook handling for transaction confirmation and dispute notifications.",
        },
        {
          id: 3,
          details:
            "Built the cashless RFID/NFC token system in NestJS with real-time WebSocket events (recharge_success, charge_success, balance_updated, transfer_complete), secure token lifecycle management, and per-company/per-event isolation for segregated carnival/festival deployments.",
        },
        {
          id: 4,
          details:
            "Designed and implemented multi-tenancy at the database level for 20+ organizer companies sharing one platform: each enterprise scopes all queries by `companies_id`, JWT headers inject tenant context, and MongoDB operations use aggregation pipelines with $facet for efficient paginated reporting across events, tickets, transactions, and disputes.",
        },
        {
          id: 5,
          details:
            "Developed comprehensive ticket lifecycle management: ticket creation/assignment, inter-user transfers with expiry cleanup via node-schedule cron jobs, coupon/discount application, courtesy tickets for organizers, experience upsells, and billboard event listings with access control per company.",
        },
        {
          id: 6,
          details:
            "Implemented GitLab CI/CD pipeline with Docker-in-Docker for automated builds, tests, and deployments across dev/staging/production environments. Configured Docker Compose orchestration for local development and cloud deployments, with branch-triggered releases (testing branch → staging, release branch → production). Cut typical deploy time from ~7–8 to ~4–6 minutes and added an on-demand E2E test job with Jest.",
        },
        {
          id: 7,
          details:
            "Fixed a seat-reservation race condition in which customers could be charged without a ticket being issued and seats could be resold: payments are now validated at checkout time (confirming the ticket exists before processing) and seat updates use atomic MongoDB operations, with zero charges without tickets across 2,800+ subsequent approved payments. Also introduced multi-document MongoDB transactions for cascading CRUD flows, so writes roll back when any middleware fails instead of leaving event stats inflated.",
        },
        {
          id: 8,
          details:
            "Maintain and evolve mongoclienteasywrapper, an internal MongoDB data-access library published to npm and used by 7 of the platform's 8 microservices (every TypeScript service).",
        },
      ],
      SocialSharingHeading: "Social media",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://x.com/conboleto",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://www.instagram.com/conboleto",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://www.facebook.com/Conboleto/?locale=es_LA",
        },
      ],
    },
  },
  {
    ProjectHeader: {
      title: "Checkton",
      publishDate: "Jul 2021 – Jan 2024",
      tags: "Frontend / SaaS",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Login & Auth",
        img: ChecktonImg,
      },
      {
        id: 2,
        title: "Dashboard",
        img: checkton2,
      },
      {
        id: 3,
        title: "Workers Management",
        img: checkton3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Checkton / Knesys Plus",
        },
        {
          id: 2,
          title: "Website",
          details: "https://checkton.com.mx/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Build a comprehensive workforce management SaaS platform for construction companies, integrating facial recognition attendance tracking, real-time worker and contractor management, site project administration, working-time reporting, and permission-based role access control—serving multi-tenant construction enterprises via a responsive, intuitive React-based UI.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "Material-UI",
            "Redux",
            "Kendo UI",
            "zustand",
            "react-query",
            "i18next",
            "axios",
            "JavaScript",
            "React Testing Library",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built the Auth/Security module from scratch—JWT-based login flow with dual login UI (admin/user roles), role-based route guards (RoleBasedGuard, AuthGuard, PreAuthGuard), and session management via zustand auth store. Hardened session security by moving auth tokens out of localStorage into in-memory zustand state, removing them from browser storage and closing that XSS session-theft vector.",
        },
        {
          id: 2,
          details:
            "Developed the Employees/Trabajadores module—a full CRUD interface for worker management, including bulk actions, advanced filtering via Kendo UI Grid, profile management, and integration with facial recognition backend APIs.",
        },
        {
          id: 3,
          details:
            "Implemented the Subcontratistas (Contractors) module with similar complexity to workers, including contractor-specific workflows, permissions hierarchy, and site assignment management.",
        },
        {
          id: 4,
          details:
            "Built the Asistencias (Attendance) module—real-time attendance tracking with date filtering, facial recognition verification, manual entry correction, and detailed attendance reports integrated with the backend attendance APIs.",
        },
        {
          id: 5,
          details:
            "Created the Obras/Proyectos (Sites/Projects) module for construction site administration—site creation, worker assignment, project timeline management, and site-level permission scoping tied to the multi-tenant architecture.",
        },
        {
          id: 6,
          details:
            "Developed the Workingtime (Shifts/Hours) module—tracking working hours per site, shift management, overtime calculation, and integration with the reporting backend for payroll and compliance reports.",
        },
        {
          id: 7,
          details:
            "Built the Reporting module—dynamic report generation using react-query for server-state management, including attendance reports, working-time summaries, contractor invoicing, and exportable analytics dashboards.",
        },
      ],
      // SocialSharingHeading: "Social media",
      SocialSharingHeading: "",
      SocialSharing: [
        // {
        //   id: 1,
        //   name: "Twitter",
        //   icon: <FiTwitter />,
        //   url: "https://x.com/conboleto",
        // },
        // {
        //   id: 2,
        //   name: "Instagram",
        //   icon: <FiInstagram />,
        //   url: "https://www.instagram.com/conboleto",
        // },
        // {
        //   id: 3,
        //   name: "Facebook",
        //   icon: <FiFacebook />,
        //   url: "https://www.facebook.com/Conboleto/?locale=es_LA",
        // },
      ],
    },
  },
  {
    ProjectHeader: {
      title: "RTSP ABSA Industrial",
      publishDate: "Nov 2022 – Apr 2024",
      tags: "Web Application",
    },
    ProjectImages: [
      {
        id: 1,
        title: "RTSP ABSA Industrial UI",
        img: RtspImg,
      },
      {
        id: 2,
        title: "RTSP ABSA Industrial - Video Archive",
        img: Rtsp2,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "ABSA Industrial",
        },
        {
          id: 2,
          title: "Industry",
          details: "Manufacturing / Packaging",
        },
        {
          id: 3,
          title: "Website",
          details: "https://absa-amapola.knesysplus.com/inicio_sesion",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "As frontend developer, build the React/Redux interface for a multi-enterprise RTSP video management platform: administering devices, employees, and user access, and giving operators a searchable archive to find and review recorded video evidence linked to production orders.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "Redux",
            "Material-UI",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "Docker",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The platform runs on a microservices backend (API gateway, authentication, licensing, and a rules engine), so the frontend had to consume multiple service contracts while enforcing enterprise-level, role-based access control consistently across the whole app.",
        },
        {
          id: 2,
          details:
            "Operators needed to locate specific recordings among tens of thousands of video files, so I built a searchable, paginated archive with date-range filtering, indexed by purchase order and station.",
        },
        {
          id: 3,
          details:
            "The same codebase had to serve multiple client enterprises with their own users, devices, and permissions, so screens for device, employee, and user administration were built to adapt to each enterprise's configuration.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "DataCenter",
      publishDate: "Jan 2020 – Jul 2024",
      tags: "IoT / Backend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "DataCenter Login",
        img: DataCenterImg,
      },
      {
        id: 2,
        title: "DataCenter Dashboard",
        img: DataCenter2,
      },
      {
        id: 3,
        title: "DataCenter Devices",
        img: DataCenter4,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "DataCenter",
        },
        {
          id: 2,
          title: "Industry",
          details: "IoT / Industry 4.0",
        },
        {
          id: 3,
          title: "Website",
          details: "https://app.knesysplus.com/datacenter/Account/Login",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Build the OS-provisioning and hardware I/O microservices — cmdSO, rgbcontrol, and gpioctl — for a containerized IoT gateway running on Raspberry Pi, as part of a larger multi-service platform covering Bluetooth/BLE, RTSP streaming, and monitoring. Also built BackendGPSTRACsa, a separate microservices backend for real-time GPS vehicle tracking, and motorolamiddleware, a UDP middleware for Motorola two-way radios, both under the same project.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Node.js",
            "Express.js",
            "Docker",
            "Docker Compose",
            "Raspberry Pi",
            "Linux (Ubuntu / Raspbian / Manjaro)",
            "GPIO",
            "systemd",
            "MongoDB",
            "Twilio",
            "UDP",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built cmdSO, an OS-provisioning microservice that runs system-level setup directly on the gateway — dynamic network configuration (DHCP and static IP via dhcpcd) and other host-level tasks — from inside a container with access to system resources like dbus and systemd.",
        },
        {
          id: 2,
          details:
            "Built rgbcontrol, which drives the gateway's physical RGB LED indicators, turning internal service and connectivity status into visual feedback operators can read directly off the hardware.",
        },
        {
          id: 3,
          details:
            "Built gpioctl, the microservice behind the gateway's physical button: it debounces the GPIO signal, triggers a factory reset over SSH after a 10-second hold, and cycles the Bluetooth stack between peripheral (Bleno) and central (Noble) mode on a triple-press, relaying each state change to rgbcontrol so the RGB LED reflects what's happening.",
        },
        {
          id: 4,
          details:
            "Built the full BackendGPSTRACsa microservices backend for real-time vehicle GPS tracking — apigateway_begt and rules_begt following established Knesys Plus service patterns, plus parser_begt, a custom TCP server decoding raw GPS device frames (position and heartbeat commands, battery-level tracking) into structured data, and sms_begt, which sends Twilio SMS alerts triggered by the rules engine.",
        },
        {
          id: 5,
          details:
            "Built motorolamiddleware from scratch, a Node.js/Express service bridging REST endpoints to Motorola MOTOTRBO two-way radios over raw UDP — encoding text messages into the MOTOTRBO wire protocol, deriving each radio's IP from its numeric ID via the CAI addressing convention, and checking network presence, so the rest of the platform can message and query physical radios without speaking UDP directly.",
        },
        {
          id: 6,
          details:
            "Implemented LUKS full-disk encryption for external SD card storage attached to IoT gateways, enabling automatic unlocking at boot via keyfile mechanism and custom initramfs hooks—protecting sensitive sensor data, configurations, and GPS tracking information against physical access in field deployments across multiple customer sites.",
        },
        {
          id: 7,
          details:
            "Designed and automated the complete gateway provisioning pipeline using systemd, Docker, and shell scripting: preconfigured OS images (Ubuntu Server 20.04 ARM64) with containerized services, firewall rules, Git repository auto-cloning, and environment variable injection. Used golden-master approach to clone images to dozens of SD cards, reducing gateway setup time from hours to minutes and enabling zero-touch deployment across multiple field locations.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "FaceDN",
      publishDate: "Apr 2020 – Feb 2024",
      tags: "IoT / Computer Vision",
    },
    ProjectImages: [
      {
        id: 1,
        title: "FaceDN Login",
        img: Facedn1,
      },
      {
        id: 2,
        title: "Dashboard",
        img: Facedn2,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "FaceDN",
        },
        {
          id: 2,
          title: "Industry",
          details: "IoT / Industry 4.0",
        },
        {
          id: 3,
          title: "Website",
          details: "https://app.knesysplus.com/facedn/Account/Login",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Build backend microservices and contribute to the configuration UI for a thermal-camera IoT gateway that monitors employee attendance, temperature, and mask compliance at access points.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Node.js", "Express.js", "React", "Docker", "MongoDB", "GPIO", "Linux"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built nodesetup, rgbcontrol, and gpioctl — the same network-provisioning, status-LED, and physical-button microservices developed for the DataCenter gateway — reused here as the hardware control layer for the thermal-camera devices.",
        },
        {
          id: 2,
          details:
            "Built mainconfig, the backend API for managing and configuring the thermal/facial-recognition cameras, and contributed to frontconfig, its React-based configuration interface, giving operators a way to set up and calibrate cameras per site.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "Transportes Colimenses",
      publishDate: "Aug 2024 – Sep 2024",
      tags: "Web Application",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Transportes Colimenses",
        img: transportescolimenses2,
      },
      {
        id: 2,
        title: "Transportes Colimenses",
        img: TransportesColimensesImg,
      },
      {
        id: 3,
        title: "Transportes Colimenses",
        img: transportescolimenses3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Transportes Colimenses",
        },
        // {
        //   id: 2,
        //   title: "Services",
        //   details: "UI Design & Frontend Development",
        // },
        {
          id: 3,
          title: "Website",
          details: "https://www.transportescolimenses.mx",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Updating and optimizing the existing website to reflect the most recent and relevant information about the company.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React 19",
            "Next.js 15",
            "TypeScript",
            "TailwindCSS",
            "Swiper",
            "Vercel",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The biggest challenge was tackling a project completely on my own as a freelancer for the first time. First, I had a requirements meeting with the client, and then I provided a quote based on the estimated effort required.",
        },
        {
          id: 2,
          details:
            "Next, I showed some base templates for the website, but the chosen template was from a very old version of code that was no longer compatible. I had to update most of the code and the template designs to create the website and make it resemble the original template.",
        },
        {
          id: 3,
          details:
            "Finally, something that proved difficult was configuring DNS records on the hosting provider where the client had their domain. I hosted the code on Vercel to ensure faster updates; I simply update the main branch, and the website changes are published automatically.",
        },
        {
          id: 4,
          details:
            "In October 2026 I upgraded the site from Next.js 14.2 to Next.js 15, React 19, and Swiper 14 to patch a critical unauthenticated remote code execution vulnerability, leaving production with no outstanding npm audit warnings.",
        },
      ],
      // SocialSharingHeading: "Social media",
      SocialSharingHeading: "",
      SocialSharing: [
        // {
        //   id: 1,
        //   name: "Twitter",
        //   icon: <FiTwitter />,
        //   url: "https://x.com/conboleto",
        // },
        // {
        //   id: 2,
        //   name: "Instagram",
        //   icon: <FiInstagram />,
        //   url: "https://www.instagram.com/conboleto",
        // },
        // {
        //   id: 3,
        //   name: "Facebook",
        //   icon: <FiFacebook />,
        //   url: "https://www.facebook.com/Conboleto/?locale=es_LA",
        // },
      ],
    },
  },
  {
    ProjectHeader: {
      title: "Invertuneles",
      publishDate: "Apr 2025 – Jul 2025",
      tags: "Web Application",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Invertuneles Corporate Website",
        img: InvertuntelesImg,
      },
      {
        id: 2,
        title: "Invertuneles Corporate Website",
        img: Invertuneles2,
      },
      {
        id: 3,
        title: "Invertuneles Corporate Website",
        img: Invertuneles3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Invertuneles",
        },
        {
          id: 2,
          title: "Industry",
          details: "Agriculture / Protected Structures",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.invertuneles.com",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Build a multilingual corporate website (Spanish/English) for an agricultural protected-structures company on Next.js 15, with a custom-built i18n system, a video-integrated product catalog for their tunnel solutions, and inquiry forms for customer quote requests.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "i18n",
            "SEO",
            "Nodemailer",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built a custom i18n system from scratch instead of pulling in a library — flat JSON dictionaries per locale, a dot-notation t() resolver, and locale-first routing where middleware redirects the bare URL to /es or /en based on the browser's language — keeping both the UI and SEO metadata (hreflang, per-page titles and descriptions) correctly localized.",
        },
        {
          id: 2,
          details:
            "Adopted Next.js 15's async params API, required across every page and layout, and built a responsive, video-integrated product catalog validated against a closed set of categories, optimized for both mobile and desktop.",
        },
        {
          id: 3,
          details:
            "Built two Nodemailer-backed contact endpoints over SMTP — a general contact form and a custom-project inquiry form (crop, location, and contact details) — plus a WhatsApp contact link, to streamline customer quote requests.",
        },
        {
          id: 4,
          details:
            "Implemented technical SEO in stages: robots.txt, a sitemap, and base metadata at launch, then per-category metadata, an expanded sitemap, and hreflang alternates for both languages, plus targeted keywords for greenhouses, macro-tunnels, agricultural tunnels, plastic films, and mulch films. Comparing the first three months of Google Search Console data with the latest three, impressions more than doubled (733 → 1,630, +122%) and clicks grew 69% (100 → 169).",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "Vigo Coffee",
      publishDate: "May 2026",
      tags: "Web Accessibility",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Homepage",
        img: VigoCoffee1,
      },
      {
        id: 2,
        title: "Services Page",
        img: VigoCoffee2,
      },
      {
        id: 3,
        title: "Contact Section",
        img: VigoCoffee3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Vigo Coffee",
        },
        {
          id: 2,
          title: "Website",
          details: "https://vigo-coffee.com/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Conduct a comprehensive web accessibility audit and implement WCAG 2.1 compliance standards for an existing GoDaddy-hosted website, while fixing broken links, configuring social media integration, and producing detailed legal documentation for compliance.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Web Accessibility", "WCAG 2.1", "HTML", "GoDaddy", "SEO", "Social Media"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Conducted a full WCAG 2.1 accessibility audit, identifying compliance gaps across the entire website and implementing fixes via GoDaddy's built-in accessibility tools combined with custom HTML adjustments.",
        },
        {
          id: 2,
          details:
            "Audited and remediating all broken and outdated links throughout the site, ensuring navigation integrity and improving SEO performance.",
        },
        {
          id: 3,
          details:
            "Configured and integrated Instagram business account with proper social media metadata and open graph tags, increasing brand visibility and customer engagement.",
        },
        {
          id: 4,
          details:
            "Produced a detailed accessibility compliance report documenting all changes, standards met (WCAG 2.1 Level AA), and remediation steps—serving as legal defense documentation for the client.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "Nussen",
      publishDate: "Oct 2026",
      tags: "Web Design / Wix",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Nussen Homepage",
        img: NussenImg,
      },
      {
        id: 2,
        title: "Nussen Footer & Contact",
        img: Nussen2,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Nussen",
        },
        {
          id: 2,
          title: "Website",
          details: "https://www.nussen.mx/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Visual redesign of the Nussen website on Wix: implement a new brand color palette, configure custom typography site-wide, refresh the footer with corrected links, and add a contact form for studios and salons interested in carrying the brand.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Wix",
            "Brand Identity",
            "Typography",
            "Contact Form",
            "QA Testing",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Applied a brand palette with 4 accent colors (green #5a8876, terracotta #7d3825, mauve #9d797e, and orange #bb7746) to the announcement bar, buttons, and footer — establishing a cohesive visual identity across the site.",
        },
        {
          id: 2,
          details:
            "Configured Parkinsans (headings) and DM Sans (body) fonts in the Wix global theme, ensuring consistent typography across all pages and components.",
        },
        {
          id: 3,
          details:
            "Refreshed the footer: fixed broken links, removed outdated copy, and restructured navigation for clarity.",
        },
        {
          id: 4,
          details:
            "Built and tested end-to-end a 'Quiero Nussen en mi negocio' contact form with promotions opt-in, enabling studios and salons to request the brand for their business.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "Knesys Monitoring",
      publishDate: "Jul 2026 – Present",
      tags: "Infrastructure / DevOps",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Prometheus Targets",
        img: KnesysMonitoring1,
      },
      {
        id: 2,
        title: "Grafana Dashboards",
        img: KnesysMonitoring2,
      },
      {
        id: 3,
        title: "Loki Logs",
        img: KnesysMonitoring3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Knesys Plus",
        },
        {
          id: 2,
          title: "Website",
          details: "https://knesysplus.com/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Extend an existing centralized monitoring stack (~8 servers) to ConBoleto's microservices (testing + production): a Prometheus agent pushing metrics via remote_write, Grafana dashboards and email alerting, and a new Loki instance for log aggregation and retention. Enable real-time observability across system metrics, container health, application performance, and multi-environment logs, delivered through AI-assisted development so the team can spot issues before clients report them.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Prometheus",
            "Grafana",
            "Loki",
            "Docker Compose",
            "node_exporter",
            "cAdvisor",
            "Grafana Alloy",
            "Remote Write Push",
            "Log Aggregation",
            "Grafana Alerting",
            "GitLab CI/CD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Versioned and hardened a 20-month-old Prometheus + Grafana stack with pinned image versions (Prometheus v3.13.1, Grafana 13.1.0, Loki 3.4.2), hard-fail Grafana admin password via environment variable, and proper Docker restart policies—preserving 15 days of historical metrics and the irreplaceable 20-month Grafana configuration (dashboards, datasources, users).",
        },
        {
          id: 2,
          details:
            "Deployed Loki (`:3100`) on the central monitoring host and connected ConBoleto (testing + production) to the existing Prometheus remote_write receiver, pushing metrics and logs via a Prometheus agent, cAdvisor and Grafana Alloy, eliminating single-point-of-failure risk by separating monitoring from the servers it observes.",
        },
        {
          id: 3,
          details:
            "Configured external labels (`project: conboleto`, `env: prod/test`) on ConBoleto's Prometheus agent to uniquely identify multi-environment sources; designed Grafana dashboards with dynamic filtering by project and environment template variables, enabling clean metric segregation across ConBoleto and 7 other servers.",
        },
        {
          id: 4,
          details:
            "Provisioned Grafana datasources and dashboards as code (JSON), including ConBoleto-specific HTTP request metrics, container health (cAdvisor) panels, and Loki log queries—all scoped to `{project=\"conboleto\"}` labels to prevent metric mixing in a shared central observability platform.",
        },
        {
          id: 5,
          details:
            "Documented the 5-phase migration plan (Spanish) with critical gotchas: preserving Docker Compose project name (`COMPOSE_PROJECT_NAME=monitoreo`) to retain volumes holding the 20-month Grafana config, and proper external label setup before enabling remote_write to avoid metric collision.",
        },
        {
          id: 6,
          details:
            "Configured Grafana Alerting with SMTP email notifications covering service downtime, restarts, MongoDB connectivity, 5xx error rates, latency and traffic (contact point, notification policy and SMTP wiring), and deployed the versioned stack through GitLab CI/CD.",
        },
        {
          id: 7,
          details:
            "Detected a Google/Apple sign-in failure through Prometheus metrics before any client reported it, leading to a fix.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "MongoDB Client Wrapper",
      publishDate: "Aug 2024 – Present",
      tags: "NPM Package / Library",
    },
    ProjectImages: [
      {
        id: 1,
        title: "NPM Package",
        img: MongoClientImg,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Package",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "mongoclienteasywrapper",
        },
        {
          id: 2,
          title: "Registry",
          details: "https://www.npmjs.com/package/mongoclienteasywrapper",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Maintain and evolve a lightweight, reusable npm package, originally developed with a teammate and lately evolved with AI-assisted development, that simplifies common MongoDB operations (CRUD, aggregation, pagination, $lookup-based population) with automatic ID/datetime conversion. Enable internal microservices (Conboleto, DataCenter, RTSP) to share a consistent data access layer without boilerplate; today it powers 7 of ConBoleto's 8 microservices.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Node.js",
            "MongoDB 4.17.2 Driver",
            "npm",
            "JavaScript",
            "GitHub Actions",
            "Integration Testing",
            "BSON",
            "Aggregation Pipeline",
          ],
        },
      ],
      ProjectDetailsHeading: "Design & Features",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Factory pattern initialization: `require('mongoclienteasywrapper')(connectionString, defaultDbName)` returns an object with all CRUD, aggregation, and helper functions. Every function accepts an optional `databaseName` parameter falling back to the default database.",
        },
        {
          id: 2,
          details:
            "Automatic type conversion utilities: `ConvertIdtoObjectId` auto-converts any property containing `_id` suffix to BSON ObjectId (handles nested objects/arrays), and `ConvertDatetoDatetime` recursively converts `_datetime` properties to JS Date while preserving BSON operators ($inc, $unset, etc.).",
        },
        {
          id: 3,
          details:
            "A singleton `MongoDBConnectionManager` class maintains a single `MongoClient` with cached `Db` handles per database name, checking connection state via MongoDB Driver 4.x topology state inspection—avoiding connection thrashing across microservices.",
        },
        {
          id: 4,
          details:
            "An 'ND_' prefix convention for functions that auto-filter `{ status: 'deleted' }` documents, enabling soft-delete patterns across the platform. `UpdateMongo` operations are wrapped in `$set` automatically, while `UpdateOneRaw` and `FindOneAndUpdate` provide raw operator access.",
        },
        {
          id: 5,
          details:
            "`Populate` / `PopulateAuto` functions use `$lookup` aggregation, inferring foreign collection names by stripping `_id` suffix from field names (e.g., `user_id` → `user` collection). Handles bidirectional many-to-many relationships via `assing.js` cross-reference helper.",
        },
        {
          id: 6,
          details:
            "Automated npm publishing via GitHub Actions (`.github/workflows/publish-to-npm.yml`): on merge to `main`, package builds and publishes to npm registry. The package keeps semantic versioning and integration tests requiring live MongoDB instance.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "Findable",
      publishDate: "2019 – 2021",
      tags: "IoT / BLE",
    },
    ProjectImages: [
      {
        id: 1,
        title: "BLE Scanner",
        img: Findable1,
      },
      {
        id: 2,
        title: "Gateway Dashboard",
        img: Findable2,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Findable",
        },
        {
          id: 2,
          title: "Industry",
          details: "IoT / Indoor Positioning",
        },
        {
          id: 3,
          title: "Website",
          details: "https://app.knesysplus.com/findable/Account/Login",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Build a containerized BLE beacon detection and localization system running on Raspberry Pi. Enable real-time beacon scanning, GPIO-based LED status indicators, REST API gateway for beacon data retrieval, and MongoDB persistence for indoor positioning analytics—supporting multiple simultaneous beacon signals across large indoor spaces.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Node.js",
            "Express.js",
            "BLE (noble)",
            "GPIO",
            "Docker",
            "Docker Compose",
            "MongoDB",
            "Raspberry Pi",
            "Manjaro ARM",
            "REST API",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built apible, an Express.js REST API server exposing endpoints for managing beacons, querying device state, and retrieving historical positioning data. Designed to handle concurrent beacon discovery requests and provide low-latency responses for real-time location tracking applications.",
        },
        {
          id: 2,
          details:
            "Implemented noble-based BLE scanning service running in a containerized Node.js environment with privileged access to Bluetooth hardware. Configured to continuously discover BLE beacons, filter by RSSI (signal strength) thresholds, and stream beacon events to downstream processors without blocking the scanner.",
        },
        {
          id: 3,
          details:
            "Built gpioctl service for GPIO-based hardware control: debounced button handling for factory reset (10-second hold), Bluetooth stack mode cycling on triple-press (peripheral/central toggle via bleno/noble), and relay of button state changes to rgbcontrol for LED feedback. Designed with reusable patterns enabling consistent hardware abstraction across DataCenter, FaceDN, and Findable.",
        },
        {
          id: 4,
          details:
            "Implemented rgbcontrol service driving the gateway's physical RGB LED indicators, translating internal service state (BLE scanning active, beacons found, error states) into real-time visual feedback. Exposed REST endpoints for state management and integrated with gpioctl for hardware coordination.",
        },
        {
          id: 5,
          details:
            "Built mongoctl service for MongoDB schema initialization and data management—setting up beacon event collections, indexes for RSSI queries and temporal searches, and seed data for test environments. Designed automated schema migrations to support new beacon attributes without manual database administration.",
        },
        {
          id: 4,
          details:
            "Built pushble event processor to handle incoming BLE beacon signals, validate RSSI data, associate beacons with physical spaces, and trigger real-time notifications. Integrated with MongoDB for persistent event storage and analytics queries (beacon frequency, signal strength distribution, temporal patterns).",
        },
        {
          id: 6,
          details:
            "Orchestrated multi-service architecture via Docker Compose across development, test, and production environments (compose_dev, compose_test, compose_prod). Included Watchtower for automated container image updates, SSH tunnel for remote debugging, and optional Grafana integration for monitoring beacon detection rates and gateway health.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "Tracsa",
      publishDate: "Feb 2023 – Dec 2024",
      tags: "Fleet Management / Backend",
    },
    ProjectImages: [],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Tracsa",
        },
        {
          id: 2,
          title: "Industry",
          details: "Fleet Management & Analytics",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Build a centralized fleet management platform aggregating vehicle fuel consumption, utilization metrics, salary tracking, and operational expenses. Enable real-time data synchronization from multiple external sources (telematics, price feeds) via scheduled jobs, and expose metrics via REST API with comprehensive documentation.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Docker Compose",
            "node-schedule",
            "Passport.js",
            "JWT",
            "Fast-Gateway",
            "Swagger/OpenAPI",
            "Jest",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Architected monorepo with 3 independent microservices: Tracsa (main API with business logic), API Gateway (request routing + Swagger docs), and Security (Passport JWT authentication). Each service independently deployable via Docker Compose with separate configuration per environment (dev/prod).",
        },
        {
          id: 2,
          details:
            "Implemented scheduled synchronization jobs using node-schedule: daily metrics aggregation (fuel consumption, vehicle utilization), location data sync from Nominatim, and price feed updates. Jobs run at precise times (19:25, 13:35, 00:00) syncing external data into MongoDB collections without manual intervention.",
        },
        {
          id: 3,
          details:
            "Refactored controllers (metrics.js, consumptionPriceCalculation.js) with defensive null-safety patterns: optional chaining (?.) for deep object access, nullish coalescing (??) for consistent defaults, and explicit fallbacks ('Not Available' for offline data) ensuring API never crashes on missing data.",
        },
        {
          id: 4,
          details:
            "Optimized fuel consumption calculation logic: fixed edge cases where consumption intervals were empty, standardized price lookups, and ensured metrics aggregation handles partial/missing data gracefully. Implemented 39 focused commits improving robustness without changing public API contracts.",
        },
        {
          id: 5,
          details:
            "Managed 5+ MongoDB collections (Daily, Fuel, SMULOC, Items, FuelPrice, FuelPlaces) with foreign key relationships via Items_id. Implemented aggregation pipelines for complex queries (multi-field filtering, time-series analysis) and created unique indexes for data integrity and query performance.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "AbsaCCM",
      publishDate: "Apr 2021 – Jul 2021",
      tags: "Frontend / Full-Stack",
    },
    ProjectImages: [],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "AbsaCCM / Knesys Plus",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Build a manufacturing configuration and monitoring system as a microservices monorepo with a React-based GUI for real-time operational oversight. Implement dynamic calendar filtering, multi-currency support (USD/MXN), real-time analytics dashboards with Syncfusion charts, and synchronized data architecture across frontend and multiple backend services (API gateway, authentication, MongoDB control, Active Directory integration).",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React 16.13.1",
            "Material-UI 4.x",
            "styled-components",
            "react-router-dom",
            "react-hook-form",
            "Node.js",
            "Express.js",
            "Passport.js",
            "JWT",
            "MongoDB 4.0.14",
            "Docker Compose",
            "Syncfusion Charts",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: 1,
          details:
            "Designed and implemented complete React frontend for manufacturing operations: calendar with dynamic filtering by date/month, real-time component state management, and responsive UI across desktop and tablet viewports using Material-UI theme system.",
        },
        {
          id: 2,
          details:
            "Built multi-currency selector (USD/MXN) with dynamic limit updates: switching currencies recalculates thresholds, chart maximum values, and dashboard KPIs in real-time without page reload. Integrated with backend API for currency-specific metrics aggregation.",
        },
        {
          id: 3,
          details:
            "Implemented real-time analytics dashboards with Syncfusion charts: line charts with dynamic X-axis limits, interactive tooltips, series predictions with navigation arrows, and theme-aware styling (light/dark mode support). Fixed chart rendering edge cases when data is sparse or empty.",
        },
        {
          id: 4,
          details:
            "Contributed 55 commits (55% of repository code) to frontend development: calendar logic refinement, padding/styling corrections, month picker fixes, component lifecycle optimization, and UX improvements across dashboard, filters, and event handling.",
        },
        {
          id: 5,
          details:
            "Built microservices monorepo architecture: frontconfig (React GUI on port 4001), apigateway (Express on 3001), security service (Passport authentication on 3214), activedirectory integration (3002), mongoctl (database initialization), plus optional Odoo ERP service. All services containerized with Docker Compose for local development.",
        },
        {
          id: 6,
          details:
            "Debugged and optimized React component rendering: fixed padding inconsistencies, resolved month picker date display issues, streamlined form submissions with react-hook-form, and minimized unnecessary re-renders through proper prop drilling and state management.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "FAN-ID",
      publishDate: "May 2022 – Oct 2023",
      tags: "Frontend / Full-Stack",
    },
    ProjectImages: [],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "FAN-ID / Knesys Plus",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop a comprehensive sports tournament and stadium event management platform enabling ticket sales, employee/fan profiles, door access control, attendance tracking, and identity verification via AWS Rekognition face recognition. Support multi-tenant tournament organization with role-based permissions, real-time event synchronization, and reporting dashboards for attendance and revenue analytics.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "AWS Rekognition",
            "Docker",
            "Redux",
            "Material-UI",
            "JWT",
            "Socket.IO",
            "AWS S3",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: 1,
          details:
            "Implemented comprehensive event/tournament management UI: calendar interface, tournament CRUD operations with permission validation, employee roster management, sports-specific role definitions (teams, events, gates), and real-time status synchronization across multiple concurrent users.",
        },
        {
          id: 2,
          details:
            "Built employee and fan profile management system: document uploads and verification, profile completion workflows, role-based field visibility (employees vs fans), and dashboard widgets displaying personalized event invitations and attendance history.",
        },
        {
          id: 3,
          details:
            "Integrated AWS Rekognition face recognition for door access control: real-time identity verification against employee/fan databases, attendance logging with timestamp capture, photo upload with auto-resize/crop, and fallback manual verification when confidence scores are below thresholds.",
        },
        {
          id: 4,
          details:
            "Developed reporting and analytics dashboards: attendance heatmaps by gate/time window, revenue summaries by event/ticket type, employee activity logs, and multi-currency support (USD/MXN). Charts update in real-time as events progress.",
        },
        {
          id: 5,
          details:
            "Contributed 95 commits (primary contributor with 13,768 lines added, 10,230 lines deleted): frontend colorimetry/theme implementation, calendar and event dialog design, form validations, scroll/pagination optimization (infinite scroll, lazy loading), loading animations, and accessibility improvements.",
        },
        {
          id: 6,
          details:
            "Managed backend API development: tournament CRUD endpoints, user and role management, document APIs, event synchronization services, and Rekognition service integration. Implemented permission checks on sensitive operations and audit logging for compliance.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "cisItemVali",
      publishDate: "Nov 2018 – Apr 2019",
      tags: "Backend / Full-Stack",
    },
    ProjectImages: [],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "cisItemVali / Jabil",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop an internal document management system for FAI (Form and Item validation) records at Jabil manufacturing. Enable users to create, edit, and manage validation documents with structured data including folio tracking, title/template information, evidence items (images, headings, subheadings), and multi-level approval workflows. Provide search, edit, and bulk management capabilities with MySQL backend for data persistence.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "ASP.NET Core 2.2",
            ".NET Core 2.0",
            "MVC Architecture",
            "MySQL 8.0",
            "Entity Framework Core",
            "ADO.NET",
            "Razor Templates",
            "Bootstrap",
            "C#",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built complete ASP.NET Core MVC application from scratch: single HomeController managing 6 main workflows (Choice, Index approval, About title/data, Contact evidence items, Search, Edit). Implemented views using Razor templates with Bootstrap styling for responsive UI across desktop and mobile viewports.",
        },
        {
          id: 2,
          details:
            "Designed data access layer (FaiContext) with static methods handling all CRUD operations against MySQL: tbl_folio (document tracking), tbl_title (headers), tbl_template (70+ boolean/character properties for A1-K1 cells), tbl_data (evidence items), tbl_approval (review records). Used ADO.NET raw SQL queries for complex data retrieval.",
        },
        {
          id: 3,
          details:
            "Implemented session-based state management using static ViewModel: maintains current document across multiple page views during a session. Enables seamless workflow progression (create → title → items → approval) without explicit database saves until final submission. Trade-off: single-user per session; not thread-safe for concurrent users.",
        },
        {
          id: 4,
          details:
            "Created dynamic HTML generation in FaiContext.BuildItems(): converts database evidence items into HTML table structure for Edit view display. Supports 3 item types (heading, subheading, image) with type-specific rendering logic. Generates inline CSS for responsive image display with max-width constraints.",
        },
        {
          id: 5,
          details:
            "Implemented comprehensive search workflow: find existing FAI documents by folio/criteria, load into Edit view with full history (title, template, items, approvals). Edit page allows modification of all fields with validation, save changes back to MySQL, and track approval status. Includes bulk operations for efficient document management.",
        },
        {
          id: 6,
          details:
            "Managed MySQL database schema with 5 interconnected tables using referential integrity. Optimized queries for common operations (list documents, load document with related data, update approval status). Implemented proper data validation at controller level before database write operations.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "BitFlow",
      publishDate: "Feb 2017 – Nov 2018",
      tags: "Backend / Full-Stack",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Quality Control Dashboard",
        img: BitFlow1,
      },
      {
        id: 2,
        title: "Testing Station Interface",
        img: BitFlow2,
      },
      {
        id: 3,
        title: "Meter Validation Process",
        img: BitFlow3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "BitFlow / Pounce Consulting",
        },
        {
          id: 2,
          title: "Industry",
          details: "Manufacturing - Smart Electricity Meters",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop C#/.NET applications for pre-operational and configuration testing of smart electricity meters during assembly and manufacturing, giving operators real-time pass/fail feedback across 12 testing stations and storing every result for full product traceability.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "C#",
            ".NET Framework",
            "Windows Forms",
            "Entity Framework",
            "Linq",
            "SQL Server 2012",
            "ClickOnce",
            "Serial/Ethernet",
            "Excel Export",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: 1,
          details:
            "Developed Windows Forms applications in C#/.NET for pre-operational and configuration testing of smart electricity meters during assembly and manufacturing, giving operators real-time pass/fail feedback, progress indicators, and clear error messages across 12 testing stations.",
        },
        {
          id: 2,
          details:
            "Integrated the testing applications with meter hardware over serial and Ethernet using the team's in-house communication library, coordinating test execution across the stations on the production line.",
        },
        {
          id: 3,
          details:
            "Designed and managed SQL Server databases with Entity Framework and LINQ, storing test results, meter configurations, and serial numbers for full product traceability.",
        },
        {
          id: 4,
          details:
            "Wrote ad-hoc SQL queries for production reporting, then automated CSV/Excel report generation, replacing manual report compilation for the operations team.",
        },
        {
          id: 5,
          details:
            "Provided on-site technical support at manufacturing plants nationwide, resolving hardware and software issues that required in-person diagnostics.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "mypregnancyapp",
      publishDate: "2021 – 2022",
      tags: "Mobile / Flutter",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Pregnancy Monitoring Interface",
        img: PregnancyApp1,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "mypregnancyapp / Thesis Project",
        },
        {
          id: 2,
          title: "Institution",
          details: "Universidad Autónoma de Guadalajara - Maestría",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop a mobile application to monitor pregnancy variables including fetal movement, heart rate, and contractions using wearable sensors. Provide real-time data visualization and insights for pregnant women, enabling enhanced prenatal care, risk reduction, and peace of mind through an intuitive, user-friendly interface. Backend integration planned for secure data storage and medical provider communication.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Flutter",
            "Dart",
            "Firebase",
            "MongoDB",
            "REST APIs",
            "Flutter Calendar Carousel",
            "Cupertino Icons",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: 1,
          details:
            "Architected bottom navigation bar (BotNavBar) as stateful widget managing 5 main sections: Home, Smart Devices, Health, Calendar (Due Date), and More. Implemented index-based navigation with seamless screen transitions, enabling intuitive app flow for pregnant women tracking their progress.",
        },
        {
          id: 2,
          details:
            "Built responsive UI screens using Flutter widgets: HomeScreen for dashboard overview, DeviceScreen for wearable sensor integration, HealthyScreen for health metrics tracking, CalendarScreen with flutter_calendar_carousel for due date management, and AccountScreen for user profile and personal information.",
        },
        {
          id: 3,
          details:
            "Implemented authentication system with Login and SignUp screens supporting secure user registration and credential verification. Designed form validation with user-friendly error messages, password strength indicators, and session management for persistent user state across app restarts.",
        },
        {
          id: 4,
          details:
            "Integrated wearable sensor connectivity: real-time data acquisition from pregnancy-tracking devices (fetal movement, heart rate, contractions). Built protocols for data synchronization with backend services, ensuring consistent and accurate health metrics available across all app screens.",
        },
        {
          id: 5,
          details:
            "Developed real-time data visualization dashboard displaying pregnancy metrics with interactive charts, trend analysis, and alerts. Implemented visual indicators for normal vs. abnormal readings, enabling quick status assessment and triggering notifications for medical attention when needed.",
        },
        {
          id: 6,
          details:
            "Designed user-centric interface with accessibility features: clear typography, high-contrast colors, logical information hierarchy. Ensured responsive layouts across device sizes (phones, tablets) and orientations (portrait, landscape) for seamless usability in various pregnancy tracking scenarios.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
];
