import { useState, useContext, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  const closeModal = () => {
    setSelectedImage(null); // Cierra el modal al limpiar la imagen seleccionada
  };

  useEffect(() => {
    if (!selectedImage) return;

    previouslyFocusedRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocusedRef.current?.focus?.();
    };
  }, [selectedImage]);

  if (!singleProjectData || !singleProjectData.ProjectImages) {
    return <></>;
  }

  const handleImageClick = (project) => {
    setSelectedImage(project); // Almacena la imagen seleccionada
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {singleProjectData.ProjectImages.map((project) => (
          <button
            type="button"
            className="w-full h-64 mb-10 sm:mb-0 overflow-hidden rounded-xl shadow-lg sm:shadow-none cursor-pointer"
            key={project.id}
            onClick={() => handleImageClick(project)} // Abrir el modal al hacer clic
            aria-label={`View larger image: ${project.title}`}
          >
            <img
              src={project.img}
              className="w-full h-full object-cover"
              alt={project.title}
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <div
            className="relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="absolute top-2 right-2 p-2 rounded-full bg-secondary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light shadow-lg"
              onClick={closeModal}
              aria-label="Close image preview"
            >
              <FiX className="text-2xl" />
            </button>
            <img
              src={selectedImage.img}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-lg object-contain"
              alt={selectedImage.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
