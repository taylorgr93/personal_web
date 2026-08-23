import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  if (!singleProjectData || !singleProjectData.ProjectInfo) {
    return <></>;
  }

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {singleProjectData.ProjectInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {singleProjectData.ProjectInfo.CompanyInfo.map((info) => {
              const isUrl = typeof info.details === "string" && info.details.startsWith("http");
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  {isUrl ? (
                    <a
                      href={info.details}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${info.details}`}
                      className="underline text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer duration-300"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <span>{info.details}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData.ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light text-justify">
            {singleProjectData.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        {singleProjectData.ProjectInfo.Technologies?.length > 0 && (
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {singleProjectData.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {singleProjectData.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </div>
        )}

        {/* Single project social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData.ProjectInfo.SocialSharingHeading}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {singleProjectData.ProjectInfo.SocialSharing.map((social) => {
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share Project"
                  className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                >
                  <span className="text-lg lg:text-2xl">{social.icon}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {singleProjectData.ProjectInfo.ProjectDetailsHeading}
        </p>
        {singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light text-justify"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;
