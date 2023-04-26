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
    <div className="w-full flex flex-auto justify-center">
      {skills?.map((skill) => (
        <div key={skill.name} className="m-4 p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
          <p className="whitespace-nowrap text-gray-500">{`${skill.years} años`}</p>
          {/* <p className="text-gray-500">{`${skill.years} años de experiencia`}</p> */}
        </div>
      ))}
    </div>
  );
};
