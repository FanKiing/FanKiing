import { profile } from "../data.js";

export default function Seal() {
  return (
    <div className="seal">
      <svg viewBox="0 0 400 400" role="img" aria-labelledby="sealTitle">
        <title id="sealTitle">A round seal with the name Yassir written in Arabic calligraphy</title>
        <defs>
          <path id="ringPath" d="M200,200 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0" />
          <radialGradient id="sealFill" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#2a0f13" />
            <stop offset="100%" stopColor="#0d0a0c" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="none" stroke="#c9a45c" strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="200" cy="200" r="176" fill="url(#sealFill)" stroke="#c9a45c" strokeWidth="2" />
        <circle cx="200" cy="200" r="124" fill="none" stroke="#c9a45c" strokeOpacity="0.5" strokeWidth="1" />
        <g className="ring-text">
          <text fill="#c9a45c" fontFamily="Cinzel, Georgia, serif" fontSize="17" fontWeight="700" letterSpacing="6">
            <textPath href="#ringPath">FIRE AND BLOOD ✦ CLEAN CODE ✦ FIRE AND BLOOD ✦ CLEAN CODE ✦</textPath>
          </text>
        </g>
        <text x="200" y="222" textAnchor="middle" fill="#e9e1d3" fontFamily="'Aref Ruqaa', 'Amiri', serif" fontSize="92" fontWeight="700">
          {profile.arabicName}
        </text>
        <text x="200" y="272" textAnchor="middle" fill="#a3161b" fontFamily="Cinzel, Georgia, serif" fontSize="13" fontWeight="700" letterSpacing="5">
          EST. IN FIRE
        </text>
      </svg>
    </div>
  );
}
