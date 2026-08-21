const SkillBadge = ({ skill }) => {
  const levelStyles =
    skill.years >= 4
      ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700"
      : skill.years >= 2
        ? "bg-gray-100 dark:bg-ternary-dark text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
        : "bg-transparent text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600";

  return (
    <div
      className={`m-1.5 px-4 py-2 rounded-lg border text-sm font-general-medium ${levelStyles}`}
    >
      {skill.name}
      <span className="ml-2 opacity-70">{skill.years}y</span>
    </div>
  );
};

export const SkillsYears = ({ skills, categories }) => {
  if (categories) {
    return (
      <div className="w-full">
        {categories.map((group) => (
          <div key={group.category} className="mb-10">
            <h3 className="font-general-semibold text-lg sm:text-xl mb-4 text-ternary-dark dark:text-ternary-light border-b border-gray-200 dark:border-ternary-dark pb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap">
              {group.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center w-full">
      {skills?.map((skill) => (
        <SkillBadge key={skill.name} skill={skill} />
      ))}
    </div>
  );
};
