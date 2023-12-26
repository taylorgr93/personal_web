// SkillsYears.jsx

export const SkillsYears = ({ skills }) => {
  //   return (
  //     <div className="container mx-auto py-8">
  //       <ul className="list-disc ml-4">
  //         {skills?.map((skill, index) => (
  //           <li key={index} className="text-lg mb-2">
  //             <span className="font-bold mr-2">{skill.name}:</span>
  //             {skill.years} años de experiencia
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  return (
    <div className="flex flex-wrap justify-center max-auto">
      {skills?.map((skill) => (
        <div
          key={skill.name}
          className="m-2 p-3 text-center md:w-1/2 lg:w-1/4"
          // className="m-2 mb-4 p-3 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
          <p className="text-gray-500">{`${skill.years} years`}</p>
        </div>
      ))}
    </div>
  );
};
