import Embers from "./Embers.jsx";
import Seal from "./Seal.jsx";
import { profile } from "../data.js";

export default function Hero() {
  return (
    <div className="hero">
      <Embers />
      <div className="wrap">
        <div>
          <p className="eyebrow">{profile.role}</p>
          <h1>
            Ya<span className="silent">s</span>sir
          </h1>
          <p className="sub">
            {profile.title}<span>·</span>{profile.house}
          </p>
          <p className="lede">
            Not Yasser. The <em>s</em> is silent to the world, but loud in my commits.
            I build Laravel back ends and React front ends where <em>UX is law</em> and{" "}
            <em>performance is honor</em>.
          </p>
          <div className="actions">
            <a className="btn fire" href="#forge">Dracarys</a>
            <a className="btn" href="#raven">Send a raven</a>
          </div>
        </div>
        <Seal />
      </div>
    </div>
  );
}
