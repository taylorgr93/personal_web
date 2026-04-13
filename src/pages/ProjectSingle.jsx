// src/pages/ProjectSingle.jsx
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SingleProjectContext, { SingleProjectProvider } from "../context/SingleProjectContext";
import SEO from "../components/SEO";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
// import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";

const ProjectSingleSEO = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const { id } = useParams();

  if (!singleProjectData) return null;

  const { title, tags } = singleProjectData.ProjectHeader;

  return (
    <SEO
      title={`${title} | Taylor - Software Engineer`}
      description={`${title} — ${tags} project developed by Taylor. Full Stack Developer with 6+ years of experience building modern web solutions.`}
      path={`/projects/single-project/${id}`}
    />
  );
};

const ProjectSingle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleProjectProvider>
        <ProjectSingleSEO />
        <ProjectHeader />
        <ProjectGallery />
        <ProjectInfo />
        {/* <ProjectRelatedProjects /> */}
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;
