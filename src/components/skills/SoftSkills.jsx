// src/components/skills/SoftSkills.jsx

export const SoftSkills = ({ skills }) => {
  return (
    <div className="w-full flex flex-auto justify-center">
      {skills?.map((skill) => (
        <div key={skill.name} className="m-4 p-4 text-center">
          <h3 className="text-lg font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  );
};
