// src/components/experience/ExperienceComponent.jsx

export const ExperienceComponent = ({ experience }) => {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {experience.map((item) => (
          <div className="mb-8" key={item.id}>
            <h3 className="text-2xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
              {item.position} - {item.company}
            </h3>
            <p className="text-lg mb-2 text-gray-500 dark:text-gray-400">
              {`${item.startDate} - ${item.endDate}`}
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-ternary-dark dark:text-ternary-light">
              {item.responsibilities.map((responsibility) => (
                <li key={item.id + responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
