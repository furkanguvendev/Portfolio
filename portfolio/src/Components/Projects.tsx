import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ProjectCard } from "../Elements/ProjectCard";
import { Header } from "../Layers/Header";
import { Footer } from "../Layers/Footer";

interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

interface defaultProject {
  projects: Project[];
}


export const Projects = () => {
  const projectData = useSelector((state: RootState) => state.myData) as defaultProject;

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(projectData.projects).map(([key, project]) => (
            <ProjectCard key={key} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};