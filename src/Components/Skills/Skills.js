import "./Skills.scss";
import iconReact from "../../images/icon-react.png";
import iconJS from "../../images/icon-js.png";
import iconNode from "../../images/icon-node.png";
import iconTS from "../../images/icon-ts.png";
import iconHTML from "../../images/icon-html.png";
import iconCSS from "../../images/icon-css.png";
import iconSASS from "../../images/icon-sass.png";
import iconMongo from "../../images/icon-mongo-db.png";
import iconGit from "../../images/icon-git.png";
import iconRedux from "../../images/icon-redux.png";
import iconWebpack from "../../images/icon-webpack.png";
import iconVSCode from "../../images/icon-vs-code.png";

export default function Skills() {
  return (
    <div>
      <h3 className="secondary-title skills-title">My stack and tools</h3>
      <ul className="list skills-list">
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://reactjs.org/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconReact} alt={iconReact} />
          </a>
        </li>
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconJS} alt={iconJS} />
          </a>
        </li>
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://nodejs.org/en/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconNode} alt={iconNode} />
          </a>
        </li>
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://www.typescriptlang.org/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconTS} alt={iconTS} />
          </a>
        </li>
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://html.spec.whatwg.org/multipage/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconHTML} alt={iconHTML} />
          </a>
        </li>
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://www.w3.org/Style/CSS/#specs"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconCSS} alt={iconCSS} />
          </a>
        </li>
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://sass-lang.com/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconSASS} alt={iconSASS} />
          </a>
        </li>
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://www.mongodb.com/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconMongo} alt={iconMongo} />
          </a>
        </li>
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://git-scm.com/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconGit} alt={iconGit} />
          </a>
        </li>
        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://redux.js.org/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconRedux} alt={iconRedux} />
          </a>
        </li>

        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://code.visualstudio.com/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconVSCode} alt={iconVSCode} />
          </a>
        </li>

        <li className="skills-item">
          <a
            className="link skills-link"
            href="https://webpack.js.org/"
            target="blank"
            rel="noopener noreferer"
          >
            <img src={iconWebpack} alt={iconWebpack} />
          </a>
        </li>
      </ul>
    </div>
  );
}
