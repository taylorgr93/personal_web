import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import TaylorPhoto from "../../images/taylor_graduaction.jpg";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <div class="flex-none w-52 relative">
          <img
            src={TaylorPhoto}
            alt=""
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
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
