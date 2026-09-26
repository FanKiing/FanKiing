import { useRef, useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data.js";

const stripProtocol = (url) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Raven() {
  const [label, setLabel] = useState("Copy");
  const emailRef = useRef(null);

  const flash = (text) => {
    setLabel(text);
    setTimeout(() => setLabel("Copy"), 1600);
  };

  // Falls back to selecting the address when the clipboard is unavailable.
  const selectEmail = () => {
    const range = document.createRange();
    range.selectNodeContents(emailRef.current);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    flash("Selected");
  };

  const copyEmail = () => {
    try {
      navigator.clipboard.writeText(profile.email).then(() => flash("Copied"), selectEmail);
    } catch {
      selectEmail();
    }
  };

  const links = [
    { key: "LinkedIn", href: profile.linkedin },
    { key: "GitHub", href: profile.github },
  ];

  return (
    <Section id="raven" tag="Send a Raven" title="The dragon doesn't hide">
      <div className="raven">
        <div className="line">
          <span className="k">Email</span>
          <a className="v" href={`mailto:${profile.email}`} ref={emailRef}>{profile.email}</a>
          <button type="button" onClick={copyEmail}>{label}</button>
        </div>
        {links.map((l) => (
          <div className="line" key={l.key}>
            <span className="k">{l.key}</span>
            <a className="v" href={l.href} target="_blank" rel="noopener noreferrer">{stripProtocol(l.href)}</a>
          </div>
        ))}
      </div>
    </Section>
  );
}
