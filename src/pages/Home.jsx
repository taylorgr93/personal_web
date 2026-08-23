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
        description="Full Stack Developer specializing in React, Node.js, and TypeScript. 6+ years building IoT platforms, SaaS products, and corporate websites. Founder of HiveCoding."
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
      </div>
    </>
  );
};

export default Home;
