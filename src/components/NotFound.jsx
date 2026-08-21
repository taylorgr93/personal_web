import "../css/NotFound.css";
import SEO from "./SEO";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <SEO
        title="Page Not Found | Taylor - Software Engineer"
        description="The page you are looking for does not exist."
        noindex={true}
      />
      <div className="not-found-content">
        <h1 className="font-general-semibold text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
          Page Not Found
        </h1>
        <p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
