import SEO from '../components/SEO';
import { ProjectsProvider } from '../context/ProjectsContext';
import ProjectsGrid from '../components/projects/ProjectsGrid';

const Projects = () => {
	return (
		<>
			<SEO
				title="Projects | Taylor - Software Engineer"
				description="Portfolio of projects by Taylor: web applications, backend systems, and IoT solutions built with React, Node.js, MongoDB, and more."
				path="/projects"
			/>
			<ProjectsProvider>
				<div className="container mx-auto">
					<ProjectsGrid />
				</div>
			</ProjectsProvider>
		</>
	);
};

export default Projects;
