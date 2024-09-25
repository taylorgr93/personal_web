import { useParams } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { singleProjectDataArray } from "../data/singleProjectDataArray";
import NotFound from "../components/NotFound";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const { id } = useParams();
  const [singleProjectData, setSingleProjectData] = useState();
  const [projectExists, setProjectExists] = useState(true); // Estado para verificar si el proyecto existe

  useEffect(() => {
    // console.log("id:", id);
    const projectId = Number(id) - 1; // Restar 1 para la indexación
    const projectData = singleProjectDataArray[projectId];

    if (projectData) {
      setSingleProjectData(projectData);
      setProjectExists(true); // El proyecto existe
    } else {
      setSingleProjectData(null);
      setProjectExists(false); // El proyecto no existe
    }
  }, [id]);

  if (!projectExists) {
    return <NotFound />; // Retorna el componente NotFound si el proyecto no existe
  }

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
