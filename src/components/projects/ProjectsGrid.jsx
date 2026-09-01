import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";

const INITIAL_PROJECTS_SHOWN = 6;
const BUTTON_STYLES = "mt-8 mx-auto block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-general-medium rounded-lg transition-colors duration-300";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  const [showMoreKnesys, setShowMoreKnesys] = useState(false);

  const getProjectsToDisplay = () => {
    if (selectProject) return selectProjectsByCategory;
    if (searchProject) return searchProjectsByTitle;
    return projects;
  };

  const groupByCompany = (projectList) => {
    const grouped = {};
    projectList.forEach((project) => {
      const company = project.company || "Other";
      if (!grouped[company]) {
        grouped[company] = [];
      }
      grouped[company].push(project);
    });
    return grouped;
  };

  const renderProjectCard = (project) => (
    <ProjectSingle
      id={project.id}
      title={project.title}
      category={project.category}
      image={project.img}
      description={project.description}
      technologies={project.technologies}
      liveUrl={project.liveUrl}
      key={project.id}
    />
  );

  const projectsToDisplay = getProjectsToDisplay();
  const isFiltered = selectProject || searchProject;
  const groupedProjects = groupByCompany(projectsToDisplay);
  const knesysProjects = groupedProjects["Knesys Plus"] || [];
  const remainingKnesys = knesysProjects.length - INITIAL_PROJECTS_SHOWN;

  const companyOrder = ["Knesys Plus", "HiveCoding"];
  const sortedCompanies = Object.keys(groupedProjects).sort((a, b) => {
    const indexA = companyOrder.indexOf(a);
    const indexB = companyOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  const totalOtherProjects = sortedCompanies
    .filter((company) => company !== "Knesys Plus")
    .reduce((sum, company) => sum + groupedProjects[company].length, 0);

  const renderProjects = () => {
    if (isFiltered) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
          {projectsToDisplay.map(renderProjectCard)}
        </div>
      );
    }

    return (
      <div className="mt-6">
        {/* Knesys Plus section - always visible */}
        {knesysProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-general-semibold text-ternary-dark dark:text-ternary-light mb-8">
              Knesys Plus
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {knesysProjects.slice(0, INITIAL_PROJECTS_SHOWN).map(renderProjectCard)}
            </div>

            {/* Remaining Knesys projects - only visible if showMoreKnesys is true */}
            {showMoreKnesys && knesysProjects.length > INITIAL_PROJECTS_SHOWN && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {knesysProjects.slice(INITIAL_PROJECTS_SHOWN).map(renderProjectCard)}
              </div>
            )}
          </div>
        )}

        {/* Other companies - only visible if showMoreKnesys is true */}
        {showMoreKnesys && (
          <div>
            {sortedCompanies.map((company) => {
              if (company === "Knesys Plus") return null;

              const companyProjects = groupedProjects[company];
              return (
                <div key={company} className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-general-semibold text-ternary-dark dark:text-ternary-light mb-8">
                    {company}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {companyProjects.map(renderProjectCard)}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Ver más button */}
        {!showMoreKnesys && remainingKnesys > 0 && (
          <button
            onClick={() => setShowMoreKnesys(true)}
            className={BUTTON_STYLES}
          >
            Ver más proyectos ({remainingKnesys + totalOtherProjects} más)
          </button>
        )}

        {/* Ver menos button */}
        {showMoreKnesys && remainingKnesys > 0 && (
          <button
            onClick={() => setShowMoreKnesys(false)}
            className={BUTTON_STYLES}
          >
            Ver menos proyectos
          </button>
        )}
      </div>
    );
  };

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects portfolio
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <h3
          className="font-general-regular
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
        >
          Search projects by title or filter by category
        </h3>
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      {renderProjects()}
    </section>
  );
};

export default ProjectsGrid;
