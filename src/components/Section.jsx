// Shared layout for every content section: a small red tag beside a large heading.
export default function Section({ id, tag, title, children }) {
  return (
    <section id={id}>
      <div className="wrap">
        <div className="head">
          <span className="tag">{tag}</span>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
