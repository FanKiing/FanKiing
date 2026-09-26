import Section from "./Section.jsx";
import { facts } from "../data.js";

export default function Chronicle() {
  return (
    <Section id="chronicle" tag="The Chronicle" title="A maester's record of the rogue prince">
      <div className="body-col">
        <p>
          I move like Daemon Targaryen: sharp in logic, fierce with standards, loyal to my
          stack and ready to burn everything down for a better solution. I don't just build
          apps. I forge small kingdoms of code, with clean architecture at the walls and a
          user who never feels lost inside them.
        </p>
        <p>
          My home is the Laravel ecosystem, with Livewire and Reverb for real-time work and
          Telescope keeping watch. On the other side of the Narrow Sea, React and Redux
          Toolkit run the front end, with GSAP when an interface needs to move.
        </p>
        <blockquote className="pull">“Chaos is a ladder, but only for the disciplined.”</blockquote>
      </div>
      <dl className="facts">
        {facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
