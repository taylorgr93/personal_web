/*eslint-disable*/
import InvertuntelesImg from "../images/web-project-8.png";
import Invertuneles2 from "../images/invertuneles2.png";
import Invertuneles3 from "../images/invertuneles3.png";
import ChecktonImg from "../images/web-project-3.png";
import checkton2 from "../images/checkton2.png";
import checkton3 from "../images/checkton3.png";
import RtspImg from "../images/rtsp/rtsp1.png";
import Rtsp2 from "../images/rtsp/rtsp2.png";
import DataCenterImg from "../images/datacenter/datacenter1.png";
import DataCenter2 from "../images/datacenter/datacenter2.png";
import DataCenter4 from "../images/datacenter/datacenter4.png";
import Facedn1 from "../images/facedn/facedn1.png";
import ConboletoImg from "../images/web-project-6.png";
import TransportesColimensesImg from "../images/web-project-7.png";
import transportescolimenses2 from "../images/transportescolimenses2.png";
import transportescolimenses3 from "../images/transportescolimenses3.png";

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
        // {
        //   id: 4,
        //   title: "Phone",
        //   details: "555 8888 888",
        // },
        {
          id: 5,
          title: "Email",
          details: "soporte@conboleto.com",
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
      publishDate: "Aug 12, 2021",
      tags: "Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Checkton UI",
        img: ChecktonImg,
      },
      {
        id: 2,
        title: "Dashboard",
        img: checkton2,
      },
      {
        id: 3,
        title: "Employees",
        img: checkton3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Checkton",
        },
        // {
        //   id: 2,
        //   title: "Services",
        //   details: "UI Design & Frontend Development",
        // },
        {
          id: 3,
          title: "Website",
          details: "https://checkton.com.mx/",
        },
        {
          id: 4,
          title: "Email",
          details: "ventas@checkton.com.mx",
        },
        {
          id: 5,
          title: "Email",
          details: "cynthia.duenas@checkton.com.mx",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The objective of the web platform is to provide a flexible and user-friendly management system for construction companies, where users can manage work crews, in addition to modules such as attendance tracking, warehouse management, and work hours reporting.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "Material UI",
            "Redux",
            "NodeJS",
            "JavaScript",
            "Docker",
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
        "Build the OS-provisioning and hardware I/O microservices — cmdSO, rgbcontrol, and gpioctl — for a containerized IoT gateway running on Raspberry Pi, as part of a larger multi-service platform covering Bluetooth/BLE, RTSP streaming, and monitoring. Also built BackendGPSTRACsa, a separate microservices backend for real-time GPS vehicle tracking under the same project.",
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
        {
          id: 4,
          title: "WhatsApp",
          details: "+52 312 311 6372",
        },
        {
          id: 6,
          title: "WhatsApp",
          details: "+52 333 811 3031",
        },
        {
          id: 5,
          title: "Email",
          details: "colima@transportescolimenses.mx",
        },
        {
          id: 7,
          title: "Email",
          details: "gdl@transportescolimenses.mx",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Updating and optimizing the existing website to reflect the most recent and relevant information about the company.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "TailwindCSS", "NextJS", "Javascript", "NodeJS"],
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
        "Build a multilingual corporate website (Spanish/English) for an agricultural protected structures company, showcasing their product catalog of tunnel solutions, company values, and enabling customer inquiries via email quotation and WhatsApp contact.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js 16+",
            "React",
            "TypeScript",
            "i18n",
            "SEO",
            "Email Integration",
            "WhatsApp API",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Implemented full internationalization (i18n) for seamless Spanish/English language switching with localized content, ensuring both the UI and SEO metadata were correctly adapted for each language.",
        },
        {
          id: 2,
          details:
            "Developed a responsive product catalog with video integration to showcase agricultural tunnel solutions, requiring careful optimization for performance across mobile and desktop devices.",
        },
        {
          id: 3,
          details:
            "Integrated an email quotation system and a WhatsApp contact button to streamline customer inquiries, and optimized the site's SEO for agricultural industry keywords to improve search visibility.",
        },
      ],
      SocialSharingHeading: "",
      SocialSharing: [],
    },
  },
];
