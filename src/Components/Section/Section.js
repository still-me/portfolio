import "./Section.scss";

export default function Section({ title, id, children }) {
  return (
    <section className="section hello">
      <div className="container" id={id}>
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
