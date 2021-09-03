import "./CV.scss";

export default function CV() {
  return (
    <div>
      <h2 className="secondary-title cv-title">
        You can find my CV by click on this button
      </h2>

      <a
        className="cv-button "
        href="https://drive.google.com/drive/folders/1kpeD9ryERbAUneMPYTSzG_j0g2rXgKS4?usp=sharing"
        target="blank"
        rel="noopener noreferer"
      >
        I am this button
      </a>
    </div>
  );
}
