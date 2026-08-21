export const EducationComponent = ({ education }) => {
  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-ternary-dark" />

        {education.map((item) => (
          <div className="relative pl-12 sm:pl-16 mb-10 last:mb-0" key={item.id}>
            <div className="absolute left-2.5 sm:left-4.5 top-1.5 flex items-center justify-center">
              <span className="inline-flex rounded-full h-3.5 w-3.5 bg-indigo-400 dark:bg-indigo-500 border-2 border-secondary-light dark:border-primary-dark" />
            </div>

            <span className="inline-block text-sm font-general-medium text-gray-400 dark:text-gray-500 mb-1">
              {item.startDate} — {item.endDate}
            </span>

            <h3 className="font-general-semibold text-lg sm:text-xl text-ternary-dark dark:text-ternary-light">
              {item.degree}
            </h3>
            <p className="font-general-medium text-indigo-500 dark:text-indigo-400">
              {item.institution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
