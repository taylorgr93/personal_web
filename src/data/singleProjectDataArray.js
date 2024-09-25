/*eslint-disable*/
// Import images
import Image1 from "../images/ui-project-1.jpg";
import Image2 from "../images/web-project-2.jpg";
import Image3 from "../images/mobile-project-2.jpg";
import Image4 from "../images/mobile-project-1.jpg";
import Image5 from "../images/web-project-1.jpg";
import Image6 from "../images/ui-project-2.jpg";

import ConboletoImg from "../images/web-project-6.png";
import TransportesColimensesImg from "../images/web-project-7.png";

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
  },
  {
    ProjectHeader: {
      title: "RTSP ABSA Industrial",
      publishDate: "Aug 12, 2021",
      tags: "Frontend",
    },
  },
  {
    ProjectHeader: {
      title: "DataCenter",
      publishDate: "Aug 12, 2021",
      tags: "Backend",
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
        img: TransportesColimensesImg,
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
          title: "Phone",
          details: "312 311 6372 / 333 811 3031",
        },
        {
          id: 5,
          title: "Email",
          details:
            "colima@transportescolimenses.mx / gdl@transportescolimenses.mx",
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
];
