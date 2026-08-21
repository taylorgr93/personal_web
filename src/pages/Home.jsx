import SEO from "../components/SEO";
import About from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";
import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";

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
        <Education />
        <ProjectsProvider>
          <ProjectsGrid />
        </ProjectsProvider>
        <Contact />
      </div>
    </>
  );
};

export default Home;
