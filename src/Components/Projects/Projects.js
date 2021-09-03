import "./Projects.scss";
import ProjectCard from "../ProjectCard";
import projects from "../../db/projects";

export default function Projects() {
  return (
    <div>
      <h3 className="secondary-title ">My personal and team projects</h3>

      <ul className="list project-list">
        {projects.map(
          ({
            id,
            title,
            description,
            src,
            gitHubLink,
            livePage,
            technologies,
          }) => (
            <ProjectCard
              key={id}
              image={src}
              gitHubLink={gitHubLink}
              projectPage={livePage}
              title={title}
              description={description}
              tags={technologies}
            />
          )
        )}
      </ul>
    </div>
  );
}
