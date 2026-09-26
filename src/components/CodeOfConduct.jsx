import Section from "./Section.jsx";
import { tenets } from "../data.js";

export default function CodeOfConduct() {
  return (
    <Section id="code" tag="The Code" title="How the rogue prince works">
      <ol className="tenets">
        {tenets.map((t) => (
          <li key={t.title}>
            <div>
              <b>{t.title}</b>
              <span>{t.text}</span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
