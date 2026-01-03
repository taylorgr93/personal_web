/*eslint-disable*/
// src/pages/Home.jsx
import SEO from "../components/SEO";
import About from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Experience from "./Experience";
import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
// import { Link } from "react-router-dom";
// import Button from "../components/reusable/Button";

const Home = () => {
  return (
    <>
      <SEO
        title="Taylor | Full Stack Developer - React, Node.js, TypeScript"
        description="Experienced Full Stack Developer and Founder of HiveCoding. Specializing in building modern web applications for startups and small businesses."
        path="/"
      />
      <div className="container mx-auto">
        <AppBanner />
        <About />
        <Skills />
        <Experience />
        <ProjectsProvider>
          <ProjectsGrid />
        </ProjectsProvider>
        <Contact />

        {/* <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          to="/projects"
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button title="More Projects" />
        </Link>
      </div> */}
      </div>
    </>
  );
};

export default Home;
