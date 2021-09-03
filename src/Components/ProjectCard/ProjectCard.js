import "./ProjectCard.scss";
import { ReactComponent as IconGitHub } from "../../images/icon-github.svg";
import { ReactComponent as IconLink } from "../../images/icon-link.svg";

export default function ProjectCard({
  image,
  gitHubLink,
  projectPage,
  title,
  description,
  tags,
}) {
  return (
    <li className="project-card">
      <div className="project-img-box">
        <img className="project-img" src={image} alt={image} />

        <div className="project-overlay">
          <ul className=" list overlay-list">
            <li className="overlay-list-item">
              <a
                href={gitHubLink}
                className="link overlay-list-link"
                target="blank"
                rel="noopener noreferer"
              >
                <IconGitHub className="overlay-icon" />
              </a>
            </li>
            <li className="overlay-list-item">
              <a
                href={projectPage}
                className="link overlay-list-link"
                target="blank"
                rel="noopener noreferer"
              >
                <IconLink className="overlay-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-text">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>

        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li key={index} className="tag-list-item">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
