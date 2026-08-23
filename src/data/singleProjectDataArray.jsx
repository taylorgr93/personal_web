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
import ConboletoImg from "../images/web-project-6.png";
import TransportesColimensesImg from "../images/transportescolimenses/transportescolimenses1.png";
import transportescolimenses2 from "../images/transportescolimenses/transportescolimenses2.png";
import transportescolimenses3 from "../images/transportescolimenses/transportescolimenses3.png";
import VigoCoffee1 from "../images/vigo-coffee/vigo-coffee1.png";
import VigoCoffee2 from "../images/vigo-coffee/vigo-coffee2.png";
import VigoCoffee3 from "../images/vigo-coffee/vigo-coffee3.png";

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
      publishDate: "Jan 26, 2024",
      tags: "Backend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Conboleto UI",
        img: ConboletoImg,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Conboleto",
        },
        // {
        //   id: 2,
        //   title: "Services",
        //   details: "UI Design & Frontend Development",
        // },
        {
          id: 3,
          title: "Website",
          details: "https://www.conboleto.com/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To provide a seamless ticketing platform that empowers users to effortlessly purchase tickets for events while enabling organizers to create events and access comprehensive statistics to enhance their planning and marketing efforts.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "JavaScript",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Docker",
            "JWT",
            "MicroServices",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The most challenging aspect of the project was developing web services with the REST standard for two front-end applications (event management platform and ticket purchasing platform). Some services for the online purchasing platform did not require tokens and were publicly accessible.",
        },
        {
          id: 2,
          details:
            "Additionally, we created different types of roles and permissions for each user, allowing a user to have an account on both platforms using the same email.",
        },
        {
          id: 3,
          details:
            "We also established a flexible and scalable development environment, utilizing microservices for code reuse and creating generic middlewares for different endpoints.",
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
      publishDate: "2020 - 2022",
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
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built the Auth/Security module from scratch—JWT-based login flow with dual login UI (admin/user roles), role-based access control (RoleBasedGuard, AuthGuard, PreAuthGuard), and session management via zustand auth store. Initially used localStorage for token persistence, but improved the implementation to zustand in-memory state management to mitigate XSS vulnerabilities and avoid storing sensitive tokens in browser storage.",
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
      publishDate: "Aug 12, 2021",
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
      publishDate: "Aug 12, 2021",
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
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
  {
    ProjectHeader: {
      title: "FaceDN",
      publishDate: "Aug 12, 2021",
      tags: "IoT / Computer Vision",
    },
    ProjectImages: [
      {
        id: 1,
        title: "FaceDN Login",
        img: Facedn1,
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
      publishDate: "Aug 18, 2024",
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
            "React",
            "Next.js",
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
      title: "Invertúneles",
      publishDate: "Jul 1, 2025",
      tags: "Web Application",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Invertúneles Corporate Website",
        img: InvertuntelesImg,
      },
      {
        id: 2,
        title: "Invertúneles Corporate Website",
        img: Invertuneles2,
      },
      {
        id: 3,
        title: "Invertúneles Corporate Website",
        img: Invertuneles3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Invertúneles",
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
            "Built two Nodemailer-backed contact endpoints over SMTP — a general contact form and a custom-project inquiry form (crop, location, and contact details) — plus a WhatsApp contact link, to streamline customer quote requests, and optimized the site's SEO for agricultural industry keywords.",
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
];
