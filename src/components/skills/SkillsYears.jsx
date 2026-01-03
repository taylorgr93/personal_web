// src/components/skills/SkillsYears.jsx

export const SkillsYears = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-center max-auto">
      {skills?.map((skill) => (
        <div key={skill.name} className="m-2 p-3 text-center md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
            {skill.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {`${skill.years} years`}
          </p>
        </div>
      ))}
    </div>
  );
};
