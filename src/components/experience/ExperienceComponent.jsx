export const ExperienceComponent = ({ experience }) => {
  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-ternary-dark" />

        {experience.map((item) => {
          const isCurrent = item.endDate === "Present";

          return (
            <div className="relative pl-12 sm:pl-16 mb-12 last:mb-0" key={item.id}>
              <div className="absolute left-2.5 sm:left-4.5 top-1.5 flex items-center justify-center">
                {isCurrent ? (
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500" />
                  </span>
                ) : (
                  <span className="inline-flex rounded-full h-3.5 w-3.5 bg-gray-400 dark:bg-gray-500 border-2 border-secondary-light dark:border-primary-dark" />
                )}
              </div>

              <span className="inline-block text-sm font-general-medium text-gray-400 dark:text-gray-500 mb-1">
                {item.startDate} — {item.endDate}
              </span>

              <h3 className="font-general-semibold text-xl sm:text-2xl text-ternary-dark dark:text-ternary-light">
                {item.position}
              </h3>
              <p className="font-general-medium text-indigo-500 dark:text-indigo-400 mb-3">
                {item.company}
              </p>

              {item.summary && (
                <p className="text-gray-500 dark:text-gray-400 italic mb-3">
                  {item.summary}
                </p>
              )}

              <ul className="list-disc list-outside ml-4 space-y-1.5 text-ternary-dark dark:text-ternary-light text-sm sm:text-base">
                {item.responsibilities.map((responsibility, index) => (
                  <li key={`${item.id}-${index}`}>{responsibility}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
