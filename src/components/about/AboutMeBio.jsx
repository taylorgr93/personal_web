import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
// import TaylorPhoto from "../../images/taylor_graduaction.jpg";
import TaylorPhoto from "../../images/taylor.png";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 bg-blue-500">
      <div className="w-full sm:w-1/4 mb-0 sm:mb-0 bg-red-400">
        <div className="flex-none w-52 relative bg-green-400">
          <img
            src={TaylorPhoto}
            alt=""
            className="absolute inset-0 w-full h-full object-fit rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-xl text-justify"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
