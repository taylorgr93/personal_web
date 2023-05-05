/*eslint-disable*/
import React from "react";

export const ExperienceComponent = ({ experience }) => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* <h2 className="text-center text-3xl font-bold mb-6">Experience</h2> */}
      <div className="max-w-7xl mx-auto">
        {experience.map((item) => (
          <div className="mb-8" key={item.id}>
            <h3 className="text-xl font-semibold mb-2">{item.company}</h3>
            <p className="text-lg text-gray-600 mb-1">{item.position}</p>
            <p className="text-gray-500 mb-2">
              {`${item.startDate} - ${item.endDate}`}
            </p>
            <ul className="list-disc list-inside mb-4">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
