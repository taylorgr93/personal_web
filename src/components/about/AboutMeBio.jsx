// src/components/about/AboutMeBio.jsx
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import { highlights } from "../../data/aboutMeData";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="max-w-3xl mx-auto mt-10 sm:mt-20 px-4">
      {/* Bio paragraphs - centered */}
      <div className="space-y-4">
        {aboutMe.map((item) => (
          <p
            key={item.id}
            className="font-general-regular text-lg text-ternary-dark dark:text-ternary-light leading-relaxed text-justify"
          >
            {item.bio}
          </p>
        ))}
      </div>

      {/* Quick highlights - scannable stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-10 border-t border-gray-200 dark:border-gray-700">
        {highlights.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold text-ternary-dark dark:text-ternary-light">
              {item.value}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
