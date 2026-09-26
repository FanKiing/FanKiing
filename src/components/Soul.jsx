import Section from "./Section.jsx";
import { interests } from "../data.js";

export default function Soul() {
  return (
    <Section id="soul" tag="Mind & Soul" title="What I read between deployments">
      <div className="soul">
        {interests.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
