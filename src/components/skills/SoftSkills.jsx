/*eslint-disable*/
import React from "react";

export const SoftSkills = ({ skills }) => {
  return (
    <div className="w-full flex flex-auto justify-center">
      {skills?.map((skill) => (
        <div key={skill.name} className="m-4 p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
          {/* <p className="whitespace-nowrap text-gray-500">{`${skill.years} años`}</p> */}
        </div>
      ))}
    </div>
  );
};
