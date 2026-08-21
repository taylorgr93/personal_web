import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const ProjectSingle = ({ id, title, category, image, description, technologies, liveUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark flex flex-col h-full">
        <Link to={`/projects/single-project/${id}`} aria-label={title}>
          <img
            src={image}
            className="rounded-t-xl border-none"
            alt={title}
          />
        </Link>
        <div className="px-4 py-5 flex flex-col flex-grow">
          <Link to={`/projects/single-project/${id}`} aria-label={title}>
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-1">
              {title}
            </p>
            <span className="text-sm text-indigo-500 dark:text-indigo-400">
              {category}
            </span>
          </Link>

          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
              {description}
            </p>
          )}

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-secondary-dark text-gray-600 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {liveUrl && (
            <div className="mt-auto pt-3">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-general-medium text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 duration-300"
                aria-label={`Visit ${title} website`}
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink className="w-3.5 h-3.5" />
                Visit Site
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
