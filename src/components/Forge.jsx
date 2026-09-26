import { useEffect, useRef, useState } from "react";
import Section from "./Section.jsx";
import { bugs } from "../data.js";

const PROMPT = "yassir@dragonstone:~/kingdom$";
const STEP = 520; // delay between each bug catching fire
const BURN = 700; // how long a bug burns before turning to ash

// Each bug moves through: "alive" -> "burning" -> "ash".
export default function Forge() {
  const [states, setStates] = useState(() => bugs.map(() => "alive"));
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(null);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const setBug = (i, state) =>
    setStates((prev) => prev.map((s, j) => (j === i ? state : s)));

  const dracarys = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = reduce ? 0 : STEP;
    const burn = reduce ? 0 : BURN;
    const start = performance.now();
    setRunning(true);
    bugs.forEach((_, i) => {
      timers.current.push(setTimeout(() => setBug(i, "burning"), i * step));
      timers.current.push(
        setTimeout(() => {
          setBug(i, "ash");
          if (i === bugs.length - 1) setElapsed(((performance.now() - start) / 1000).toFixed(2));
        }, i * step + burn)
      );
    });
  };

  const reset = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setStates(bugs.map(() => "alive"));
    setRunning(false);
    setElapsed(null);
  };

  const idle = (
    <>
      <span className="prompt">{PROMPT}</span> <span className="dim">_</span>
    </>
  );

  return (
    <Section id="forge" tag="The Forge" title="Every dragon has a command">
      <div className="forge">
        <p className="intro">Mine ships with every project. Four bugs are waiting below. Run it.</p>
        <div className="term">
          <div className="top">
            <i /><i /><i />
            <small>~/kingdom — zsh</small>
          </div>
          <pre aria-live="polite">
            <span className="prompt">{PROMPT}</span> php artisan bugs:list{"\n"}
            <span className="dim">Found {bugs.length} enemies at the gates:</span>{"\n"}
            {bugs.map((bug, i) => (
              <span key={bug} className={`bug ${states[i] === "alive" ? "" : states[i]}`}>
                {"  ✗ "}{bug}
              </span>
            ))}
            {running ? (
              <>
                <span className="prompt">{PROMPT}</span> php artisan dracarys{"\n"}
                {elapsed && (
                  <>
                    <span className="ok">  ✓ {bugs.length} bugs reduced to ash in {elapsed}s</span>{"\n"}
                    <span className="ok">  ✓ Tests green. The realm is at peace.</span>{"\n"}
                    {idle}
                  </>
                )}
              </>
            ) : (
              idle
            )}
          </pre>
        </div>
        <div className="actions">
          {elapsed ? (
            <button className="btn" type="button" onClick={reset}>Summon them again</button>
          ) : (
            <button className="btn fire" type="button" onClick={dracarys} disabled={running}>
              php artisan dracarys
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}
