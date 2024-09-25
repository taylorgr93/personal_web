import { useState, useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!singleProjectData || !singleProjectData.ProjectImages) {
    return <></>;
  }

  const handleImageClick = (img) => {
    setSelectedImage(img); // Almacena la imagen seleccionada
  };

  const closeModal = () => {
    setSelectedImage(null); // Cierra el modal al limpiar la imagen seleccionada
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {singleProjectData.ProjectImages.map((project) => (
          <div className="w-60 h-64 mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={project.title}
              onClick={() => handleImageClick(project.img)} // Abrir el modal al hacer clic
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times; {/* Botón para cerrar el modal */}
            </button>
            <img
              src={selectedImage}
              className="max-w-full max-h-full"
              alt="Enlarged view"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
