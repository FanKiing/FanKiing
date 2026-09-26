import Section from "./Section.jsx";
import { arsenal } from "../data.js";

export default function Arsenal() {
  return (
    <Section id="arsenal" tag="The Arsenal" title="Steel, flame and a few scrolls">
      <div className="ledger">
        {arsenal.map((group) => (
          <div className="row" key={group.title}>
            <h3>{group.title}</h3>
            <p className="note">{group.note}</p>
            <ul>
              {group.skills.map((s) => (
                <li key={s.name} className={s.main ? "main" : undefined}>{s.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
