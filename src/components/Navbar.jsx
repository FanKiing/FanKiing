import { nav, profile } from "../data.js";

export default function Navbar() {
  return (
    <header className="bar">
      <div className="wrap">
        <a className="mark" href="#top">{profile.name.toUpperCase()}</a>
        <nav aria-label="Sections">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
